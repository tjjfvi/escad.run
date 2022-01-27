/* esm.sh - esbuild bundle(three@0.112.1) deno production */
Number.EPSILON === void 0 && (Number.EPSILON = Math.pow(2, -52));
Number.isInteger === void 0 && (Number.isInteger = function (e) { return typeof e == "number" && isFinite(e) && Math.floor(e) === e; });
Math.sign === void 0 && (Math.sign = function (e) { return e < 0 ? -1 : e > 0 ? 1 : +e; });
"name" in Function.prototype || Object.defineProperty(Function.prototype, "name", { get: function () { return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]; } });
Object.assign === void 0 && (Object.assign = function (e) { if (e == null)
    throw new TypeError("Cannot convert undefined or null to object"); for (var t = Object(e), n = 1; n < arguments.length; n++) {
    var r = arguments[n];
    if (r != null)
        for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
} return t; });
var Ih = "112", ty = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, ny = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Oh = 0, Hl = 1, Nh = 2, ry = 3, iy = 0, ay = 1, oy = 0, Vl = 1, Fh = 2, mi = 3, gi = 0, ht = 1, wa = 2, kl = 1, sy = 2, Wl = 0, Bh = 1, yi = 2, Tn = 0, xi = 1, jl = 2, ql = 3, Xl = 4, Uh = 5, yr = 100, zh = 101, Gh = 102, Yl = 103, Zl = 104, Hh = 200, Vh = 201, kh = 202, Wh = 203, Jl = 204, $l = 205, jh = 206, qh = 207, Xh = 208, Yh = 209, Zh = 210, Jh = 0, $h = 1, Qh = 2, rs = 3, Kh = 4, ef = 5, tf = 6, nf = 7, ba = 0, rf = 1, af = 2, Ma = 0, is = 1, of = 2, sf = 3, lf = 4, cf = 5, as = 300, os = 301, ss = 302, Ql = 303, ls = 304, Kl = 305, _i = 306, cs = 307, Ea = 1e3, St = 1001, Sa = 1002, st = 1003, us = 1004, ly = 1004, hs = 1005, cy = 1005, ft = 1006, ec = 1007, uy = 1007, Ta = 1008, hy = 1008, Aa = 1009, uf = 1010, hf = 1011, La = 1012, ff = 1013, tc = 1014, wi = 1015, fs = 1016, df = 1017, pf = 1018, vf = 1019, Ra = 1020, mf = 1021, qn = 1022, Qt = 1023, gf = 1024, yf = 1025, xf = Qt, xr = 1026, bi = 1027, _f = 1028, wf = 1029, bf = 1030, Mf = 1031, Ef = 1032, Sf = 1033, nc = 33776, rc = 33777, ic = 33778, ac = 33779, oc = 35840, sc = 35841, lc = 35842, cc = 35843, Tf = 36196, Af = 37808, Lf = 37809, Rf = 37810, Cf = 37811, Pf = 37812, Df = 37813, If = 37814, Of = 37815, Nf = 37816, Ff = 37817, Bf = 37818, Uf = 37819, zf = 37820, Gf = 37821, Hf = 2200, Vf = 2201, kf = 2202, Ca = 2300, Pa = 2301, ds = 2302, _r = 2400, wr = 2401, Da = 2402, Wf = 0, fy = 1, dy = 2, Ct = 3e3, ps = 3001, uc = 3007, vs = 3002, jf = 3003, hc = 3004, fc = 3005, dc = 3006, qf = 3200, Xf = 3201, br = 0, Yf = 1, py = 0, ms = 7680, vy = 7681, my = 7682, gy = 7683, yy = 34055, xy = 34056, _y = 5386, wy = 512, by = 513, My = 514, Ey = 515, Sy = 516, Ty = 517, Ay = 518, Zf = 519, Ia = 35044, Mi = 35048, Ly = 35040, Ry = 35045, Cy = 35049, Py = 35041, Dy = 35046, Iy = 35050, Oy = 35042;
function dn() { }
Object.assign(dn.prototype, { addEventListener: function (e, t) { this._listeners === void 0 && (this._listeners = {}); var n = this._listeners; n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t); }, hasEventListener: function (e, t) { if (this._listeners === void 0)
        return !1; var n = this._listeners; return n[e] !== void 0 && n[e].indexOf(t) !== -1; }, removeEventListener: function (e, t) { if (this._listeners !== void 0) {
        var n = this._listeners, r = n[e];
        if (r !== void 0) {
            var i = r.indexOf(t);
            i !== -1 && r.splice(i, 1);
        }
    } }, dispatchEvent: function (e) { if (this._listeners !== void 0) {
        var t = this._listeners, n = t[e.type];
        if (n !== void 0) {
            e.target = this;
            for (var r = n.slice(0), i = 0, a = r.length; i < a; i++)
                r[i].call(this, e);
        }
    } } });
var dt = [];
for (Mr = 0; Mr < 256; Mr++)
    dt[Mr] = (Mr < 16 ? "0" : "") + Mr.toString(16);
var Mr, Ae = { DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, generateUUID: function () { var e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0, i = dt[e & 255] + dt[e >> 8 & 255] + dt[e >> 16 & 255] + dt[e >> 24 & 255] + "-" + dt[t & 255] + dt[t >> 8 & 255] + "-" + dt[t >> 16 & 15 | 64] + dt[t >> 24 & 255] + "-" + dt[n & 63 | 128] + dt[n >> 8 & 255] + "-" + dt[n >> 16 & 255] + dt[n >> 24 & 255] + dt[r & 255] + dt[r >> 8 & 255] + dt[r >> 16 & 255] + dt[r >> 24 & 255]; return i.toUpperCase(); }, clamp: function (e, t, n) { return Math.max(t, Math.min(n, e)); }, euclideanModulo: function (e, t) { return (e % t + t) % t; }, mapLinear: function (e, t, n, r, i) { return r + (e - t) * (i - r) / (n - t); }, lerp: function (e, t, n) { return (1 - n) * e + n * t; }, smoothstep: function (e, t, n) { return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e)); }, smootherstep: function (e, t, n) { return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10)); }, randInt: function (e, t) { return e + Math.floor(Math.random() * (t - e + 1)); }, randFloat: function (e, t) { return e + Math.random() * (t - e); }, randFloatSpread: function (e) { return e * (.5 - Math.random()); }, degToRad: function (e) { return e * Ae.DEG2RAD; }, radToDeg: function (e) { return e * Ae.RAD2DEG; }, isPowerOfTwo: function (e) { return (e & e - 1) === 0 && e !== 0; }, ceilPowerOfTwo: function (e) { return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2)); }, floorPowerOfTwo: function (e) { return Math.pow(2, Math.floor(Math.log(e) / Math.LN2)); } };
function U(e, t) { this.x = e || 0, this.y = t || 0; }
Object.defineProperties(U.prototype, { width: { get: function () { return this.x; }, set: function (e) { this.x = e; } }, height: { get: function () { return this.y; }, set: function (e) { this.y = e; } } });
Object.assign(U.prototype, { isVector2: !0, set: function (e, t) { return this.x = e, this.y = t, this; }, setScalar: function (e) { return this.x = e, this.y = e, this; }, setX: function (e) { return this.x = e, this; }, setY: function (e) { return this.y = e, this; }, setComponent: function (e, t) { switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default: throw new Error("index is out of range: " + e);
    } return this; }, getComponent: function (e) { switch (e) {
        case 0: return this.x;
        case 1: return this.y;
        default: throw new Error("index is out of range: " + e);
    } }, clone: function () { return new this.constructor(this.x, this.y); }, copy: function (e) { return this.x = e.x, this.y = e.y, this; }, add: function (e, t) { return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this); }, addScalar: function (e) { return this.x += e, this.y += e, this; }, addVectors: function (e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this; }, addScaledVector: function (e, t) { return this.x += e.x * t, this.y += e.y * t, this; }, sub: function (e, t) { return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this); }, subScalar: function (e) { return this.x -= e, this.y -= e, this; }, subVectors: function (e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this; }, multiply: function (e) { return this.x *= e.x, this.y *= e.y, this; }, multiplyScalar: function (e) { return this.x *= e, this.y *= e, this; }, divide: function (e) { return this.x /= e.x, this.y /= e.y, this; }, divideScalar: function (e) { return this.multiplyScalar(1 / e); }, applyMatrix3: function (e) { var t = this.x, n = this.y, r = e.elements; return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this; }, min: function (e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this; }, max: function (e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this; }, clamp: function (e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this; }, clampScalar: function (e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this; }, clampLength: function (e, t) { var n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))); }, floor: function () { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this; }, ceil: function () { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this; }, round: function () { return this.x = Math.round(this.x), this.y = Math.round(this.y), this; }, roundToZero: function () { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this; }, negate: function () { return this.x = -this.x, this.y = -this.y, this; }, dot: function (e) { return this.x * e.x + this.y * e.y; }, cross: function (e) { return this.x * e.y - this.y * e.x; }, lengthSq: function () { return this.x * this.x + this.y * this.y; }, length: function () { return Math.sqrt(this.x * this.x + this.y * this.y); }, manhattanLength: function () { return Math.abs(this.x) + Math.abs(this.y); }, normalize: function () { return this.divideScalar(this.length() || 1); }, angle: function () { var e = Math.atan2(this.y, this.x); return e < 0 && (e += 2 * Math.PI), e; }, distanceTo: function (e) { return Math.sqrt(this.distanceToSquared(e)); }, distanceToSquared: function (e) { var t = this.x - e.x, n = this.y - e.y; return t * t + n * n; }, manhattanDistanceTo: function (e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y); }, setLength: function (e) { return this.normalize().multiplyScalar(e); }, lerp: function (e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this; }, lerpVectors: function (e, t, n) { return this.subVectors(t, e).multiplyScalar(n).add(e); }, equals: function (e) { return e.x === this.x && e.y === this.y; }, fromArray: function (e, t) { return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this; }, toArray: function (e, t) { return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e; }, fromBufferAttribute: function (e, t, n) { return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this; }, rotateAround: function (e, t) { var n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y; return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this; } });
function Tt(e, t, n, r) { this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = r !== void 0 ? r : 1; }
Object.assign(Tt, { slerp: function (e, t, n, r) { return n.copy(e).slerp(t, r); }, slerpFlat: function (e, t, n, r, i, a, o) { var s = n[r + 0], l = n[r + 1], c = n[r + 2], u = n[r + 3], h = i[a + 0], f = i[a + 1], d = i[a + 2], p = i[a + 3]; if (u !== p || s !== h || l !== f || c !== d) {
        var g = 1 - o, v = s * h + l * f + c * d + u * p, y = v >= 0 ? 1 : -1, x = 1 - v * v;
        if (x > Number.EPSILON) {
            var w = Math.sqrt(x), E = Math.atan2(w, v * y);
            g = Math.sin(g * E) / w, o = Math.sin(o * E) / w;
        }
        var b = o * y;
        if (s = s * g + h * b, l = l * g + f * b, c = c * g + d * b, u = u * g + p * b, g === 1 - o) {
            var L = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
            s *= L, l *= L, c *= L, u *= L;
        }
    } e[t] = s, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u; } });
Object.defineProperties(Tt.prototype, { x: { get: function () { return this._x; }, set: function (e) { this._x = e, this._onChangeCallback(); } }, y: { get: function () { return this._y; }, set: function (e) { this._y = e, this._onChangeCallback(); } }, z: { get: function () { return this._z; }, set: function (e) { this._z = e, this._onChangeCallback(); } }, w: { get: function () { return this._w; }, set: function (e) { this._w = e, this._onChangeCallback(); } } });
Object.assign(Tt.prototype, { isQuaternion: !0, set: function (e, t, n, r) { return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this; }, clone: function () { return new this.constructor(this._x, this._y, this._z, this._w); }, copy: function (e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this; }, setFromEuler: function (e, t) { if (!(e && e.isEuler))
        throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."); var n = e._x, r = e._y, i = e._z, a = e.order, o = Math.cos, s = Math.sin, l = o(n / 2), c = o(r / 2), u = o(i / 2), h = s(n / 2), f = s(r / 2), d = s(i / 2); return a === "XYZ" ? (this._x = h * c * u + l * f * d, this._y = l * f * u - h * c * d, this._z = l * c * d + h * f * u, this._w = l * c * u - h * f * d) : a === "YXZ" ? (this._x = h * c * u + l * f * d, this._y = l * f * u - h * c * d, this._z = l * c * d - h * f * u, this._w = l * c * u + h * f * d) : a === "ZXY" ? (this._x = h * c * u - l * f * d, this._y = l * f * u + h * c * d, this._z = l * c * d + h * f * u, this._w = l * c * u - h * f * d) : a === "ZYX" ? (this._x = h * c * u - l * f * d, this._y = l * f * u + h * c * d, this._z = l * c * d - h * f * u, this._w = l * c * u + h * f * d) : a === "YZX" ? (this._x = h * c * u + l * f * d, this._y = l * f * u + h * c * d, this._z = l * c * d - h * f * u, this._w = l * c * u - h * f * d) : a === "XZY" && (this._x = h * c * u - l * f * d, this._y = l * f * u - h * c * d, this._z = l * c * d + h * f * u, this._w = l * c * u + h * f * d), t !== !1 && this._onChangeCallback(), this; }, setFromAxisAngle: function (e, t) { var n = t / 2, r = Math.sin(n); return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this; }, setFromRotationMatrix: function (e) { var t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], l = t[2], c = t[6], u = t[10], h = n + o + u, f; return h > 0 ? (f = .5 / Math.sqrt(h + 1), this._w = .25 / f, this._x = (c - s) * f, this._y = (i - l) * f, this._z = (a - r) * f) : n > o && n > u ? (f = 2 * Math.sqrt(1 + n - o - u), this._w = (c - s) / f, this._x = .25 * f, this._y = (r + a) / f, this._z = (i + l) / f) : o > u ? (f = 2 * Math.sqrt(1 + o - n - u), this._w = (i - l) / f, this._x = (r + a) / f, this._y = .25 * f, this._z = (s + c) / f) : (f = 2 * Math.sqrt(1 + u - n - o), this._w = (a - r) / f, this._x = (i + l) / f, this._y = (s + c) / f, this._z = .25 * f), this._onChangeCallback(), this; }, setFromUnitVectors: function (e, t) { var n = 1e-6, r = e.dot(t) + 1; return r < n ? (r = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = r) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = r)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = r), this.normalize(); }, angleTo: function (e) { return 2 * Math.acos(Math.abs(Ae.clamp(this.dot(e), -1, 1))); }, rotateTowards: function (e, t) { var n = this.angleTo(e); if (n === 0)
        return this; var r = Math.min(1, t / n); return this.slerp(e, r), this; }, inverse: function () { return this.conjugate(); }, conjugate: function () { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this; }, dot: function (e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w; }, lengthSq: function () { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w; }, length: function () { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w); }, normalize: function () { var e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this; }, multiply: function (e, t) { return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e); }, premultiply: function (e) { return this.multiplyQuaternions(e, this); }, multiplyQuaternions: function (e, t) { var n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, l = t._z, c = t._w; return this._x = n * c + a * o + r * l - i * s, this._y = r * c + a * s + i * o - n * l, this._z = i * c + a * l + n * s - r * o, this._w = a * c - n * o - r * s - i * l, this._onChangeCallback(), this; }, slerp: function (e, t) { if (t === 0)
        return this; if (t === 1)
        return this.copy(e); var n = this._x, r = this._y, i = this._z, a = this._w, o = a * e._w + n * e._x + r * e._y + i * e._z; if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
        return this._w = a, this._x = n, this._y = r, this._z = i, this; var s = 1 - o * o; if (s <= Number.EPSILON) {
        var l = 1 - t;
        return this._w = l * a + t * this._w, this._x = l * n + t * this._x, this._y = l * r + t * this._y, this._z = l * i + t * this._z, this.normalize(), this._onChangeCallback(), this;
    } var c = Math.sqrt(s), u = Math.atan2(c, o), h = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c; return this._w = a * h + this._w * f, this._x = n * h + this._x * f, this._y = r * h + this._y * f, this._z = i * h + this._z * f, this._onChangeCallback(), this; }, equals: function (e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w; }, fromArray: function (e, t) { return t === void 0 && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this; }, toArray: function (e, t) { return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e; }, _onChange: function (e) { return this._onChangeCallback = e, this; }, _onChangeCallback: function () { } });
var gs = new M, pc = new Tt;
function M(e, t, n) { this.x = e || 0, this.y = t || 0, this.z = n || 0; }
Object.assign(M.prototype, { isVector3: !0, set: function (e, t, n) { return this.x = e, this.y = t, this.z = n, this; }, setScalar: function (e) { return this.x = e, this.y = e, this.z = e, this; }, setX: function (e) { return this.x = e, this; }, setY: function (e) { return this.y = e, this; }, setZ: function (e) { return this.z = e, this; }, setComponent: function (e, t) { switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default: throw new Error("index is out of range: " + e);
    } return this; }, getComponent: function (e) { switch (e) {
        case 0: return this.x;
        case 1: return this.y;
        case 2: return this.z;
        default: throw new Error("index is out of range: " + e);
    } }, clone: function () { return new this.constructor(this.x, this.y, this.z); }, copy: function (e) { return this.x = e.x, this.y = e.y, this.z = e.z, this; }, add: function (e, t) { return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this); }, addScalar: function (e) { return this.x += e, this.y += e, this.z += e, this; }, addVectors: function (e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this; }, addScaledVector: function (e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this; }, sub: function (e, t) { return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this); }, subScalar: function (e) { return this.x -= e, this.y -= e, this.z -= e, this; }, subVectors: function (e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this; }, multiply: function (e, t) { return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this); }, multiplyScalar: function (e) { return this.x *= e, this.y *= e, this.z *= e, this; }, multiplyVectors: function (e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this; }, applyEuler: function (e) { return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(pc.setFromEuler(e)); }, applyAxisAngle: function (e, t) { return this.applyQuaternion(pc.setFromAxisAngle(e, t)); }, applyMatrix3: function (e) { var t = this.x, n = this.y, r = this.z, i = e.elements; return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this; }, applyNormalMatrix: function (e) { return this.applyMatrix3(e).normalize(); }, applyMatrix4: function (e) { var t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]); return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this; }, applyQuaternion: function (e) { var t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, l = s * t + a * r - o * n, c = s * n + o * t - i * r, u = s * r + i * n - a * t, h = -i * t - a * n - o * r; return this.x = l * s + h * -i + c * -o - u * -a, this.y = c * s + h * -a + u * -i - l * -o, this.z = u * s + h * -o + l * -a - c * -i, this; }, project: function (e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix); }, unproject: function (e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld); }, transformDirection: function (e) { var t = this.x, n = this.y, r = this.z, i = e.elements; return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize(); }, divide: function (e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this; }, divideScalar: function (e) { return this.multiplyScalar(1 / e); }, min: function (e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this; }, max: function (e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this; }, clamp: function (e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this; }, clampScalar: function (e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this; }, clampLength: function (e, t) { var n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))); }, floor: function () { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this; }, ceil: function () { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this; }, round: function () { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this; }, roundToZero: function () { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this; }, negate: function () { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this; }, dot: function (e) { return this.x * e.x + this.y * e.y + this.z * e.z; }, lengthSq: function () { return this.x * this.x + this.y * this.y + this.z * this.z; }, length: function () { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); }, manhattanLength: function () { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z); }, normalize: function () { return this.divideScalar(this.length() || 1); }, setLength: function (e) { return this.normalize().multiplyScalar(e); }, lerp: function (e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this; }, lerpVectors: function (e, t, n) { return this.subVectors(t, e).multiplyScalar(n).add(e); }, cross: function (e, t) { return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e); }, crossVectors: function (e, t) { var n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z; return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this; }, projectOnVector: function (e) { var t = e.dot(this) / e.lengthSq(); return this.copy(e).multiplyScalar(t); }, projectOnPlane: function (e) { return gs.copy(this).projectOnVector(e), this.sub(gs); }, reflect: function (e) { return this.sub(gs.copy(e).multiplyScalar(2 * this.dot(e))); }, angleTo: function (e) { var t = Math.sqrt(this.lengthSq() * e.lengthSq()); t === 0 && console.error("THREE.Vector3: angleTo() can't handle zero length vectors."); var n = this.dot(e) / t; return Math.acos(Ae.clamp(n, -1, 1)); }, distanceTo: function (e) { return Math.sqrt(this.distanceToSquared(e)); }, distanceToSquared: function (e) { var t = this.x - e.x, n = this.y - e.y, r = this.z - e.z; return t * t + n * n + r * r; }, manhattanDistanceTo: function (e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z); }, setFromSpherical: function (e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta); }, setFromSphericalCoords: function (e, t, n) { var r = Math.sin(t) * e; return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this; }, setFromCylindrical: function (e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y); }, setFromCylindricalCoords: function (e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this; }, setFromMatrixPosition: function (e) { var t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this; }, setFromMatrixScale: function (e) { var t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = r, this; }, setFromMatrixColumn: function (e, t) { return this.fromArray(e.elements, t * 4); }, equals: function (e) { return e.x === this.x && e.y === this.y && e.z === this.z; }, fromArray: function (e, t) { return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this; }, toArray: function (e, t) { return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e; }, fromBufferAttribute: function (e, t, n) { return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this; } });
var Xn = new M;
function mt() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."); }
Object.assign(mt.prototype, { isMatrix3: !0, set: function (e, t, n, r, i, a, o, s, l) { var c = this.elements; return c[0] = e, c[1] = r, c[2] = o, c[3] = t, c[4] = i, c[5] = s, c[6] = n, c[7] = a, c[8] = l, this; }, identity: function () { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this; }, clone: function () { return new this.constructor().fromArray(this.elements); }, copy: function (e) { var t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this; }, setFromMatrix4: function (e) { var t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this; }, applyToBufferAttribute: function (e) { for (var t = 0, n = e.count; t < n; t++)
        Xn.x = e.getX(t), Xn.y = e.getY(t), Xn.z = e.getZ(t), Xn.applyMatrix3(this), e.setXYZ(t, Xn.x, Xn.y, Xn.z); return e; }, multiply: function (e) { return this.multiplyMatrices(this, e); }, premultiply: function (e) { return this.multiplyMatrices(e, this); }, multiplyMatrices: function (e, t) { var n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], l = n[1], c = n[4], u = n[7], h = n[2], f = n[5], d = n[8], p = r[0], g = r[3], v = r[6], y = r[1], x = r[4], w = r[7], E = r[2], b = r[5], L = r[8]; return i[0] = a * p + o * y + s * E, i[3] = a * g + o * x + s * b, i[6] = a * v + o * w + s * L, i[1] = l * p + c * y + u * E, i[4] = l * g + c * x + u * b, i[7] = l * v + c * w + u * L, i[2] = h * p + f * y + d * E, i[5] = h * g + f * x + d * b, i[8] = h * v + f * w + d * L, this; }, multiplyScalar: function (e) { var t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this; }, determinant: function () { var e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], l = e[7], c = e[8]; return t * a * c - t * o * l - n * i * c + n * o * s + r * i * l - r * a * s; }, getInverse: function (e, t) { e && e.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument."); var n = e.elements, r = this.elements, i = n[0], a = n[1], o = n[2], s = n[3], l = n[4], c = n[5], u = n[6], h = n[7], f = n[8], d = f * l - c * h, p = c * u - f * s, g = h * s - l * u, v = i * d + a * p + o * g; if (v === 0) {
        var y = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
        if (t === !0)
            throw new Error(y);
        return console.warn(y), this.identity();
    } var x = 1 / v; return r[0] = d * x, r[1] = (o * h - f * a) * x, r[2] = (c * a - o * l) * x, r[3] = p * x, r[4] = (f * i - o * u) * x, r[5] = (o * s - c * i) * x, r[6] = g * x, r[7] = (a * u - h * i) * x, r[8] = (l * i - a * s) * x, this; }, transpose: function () { var e, t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this; }, getNormalMatrix: function (e) { return this.setFromMatrix4(e).getInverse(this).transpose(); }, transposeIntoArray: function (e) { var t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this; }, setUvTransform: function (e, t, n, r, i, a, o) { var s = Math.cos(i), l = Math.sin(i); this.set(n * s, n * l, -n * (s * a + l * o) + a + e, -r * l, r * s, -r * (-l * a + s * o) + o + t, 0, 0, 1); }, scale: function (e, t) { var n = this.elements; return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this; }, rotate: function (e) { var t = Math.cos(e), n = Math.sin(e), r = this.elements, i = r[0], a = r[3], o = r[6], s = r[1], l = r[4], c = r[7]; return r[0] = t * i + n * s, r[3] = t * a + n * l, r[6] = t * o + n * c, r[1] = -n * i + t * s, r[4] = -n * a + t * l, r[7] = -n * o + t * c, this; }, translate: function (e, t) { var n = this.elements; return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this; }, equals: function (e) { for (var t = this.elements, n = e.elements, r = 0; r < 9; r++)
        if (t[r] !== n[r])
            return !1; return !0; }, fromArray: function (e, t) { t === void 0 && (t = 0); for (var n = 0; n < 9; n++)
        this.elements[n] = e[n + t]; return this; }, toArray: function (e, t) { e === void 0 && (e = []), t === void 0 && (t = 0); var n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e; } });
var Er, Yn = { getDataURL: function (e) { var t; if (typeof HTMLCanvasElement == "undefined")
        return e.src; if (e instanceof HTMLCanvasElement)
        t = e;
    else {
        Er === void 0 && (Er = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), Er.width = e.width, Er.height = e.height;
        var n = Er.getContext("2d");
        e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Er;
    } return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png"); } }, Jf = 0;
function Ye(e, t, n, r, i, a, o, s, l, c) { Object.defineProperty(this, "id", { value: Jf++ }), this.uuid = Ae.generateUUID(), this.name = "", this.image = e !== void 0 ? e : Ye.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = t !== void 0 ? t : Ye.DEFAULT_MAPPING, this.wrapS = n !== void 0 ? n : St, this.wrapT = r !== void 0 ? r : St, this.magFilter = i !== void 0 ? i : ft, this.minFilter = a !== void 0 ? a : Ta, this.anisotropy = l !== void 0 ? l : 1, this.format = o !== void 0 ? o : Qt, this.internalFormat = null, this.type = s !== void 0 ? s : Aa, this.offset = new U(0, 0), this.repeat = new U(1, 1), this.center = new U(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new mt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c !== void 0 ? c : Ct, this.version = 0, this.onUpdate = null; }
Ye.DEFAULT_IMAGE = void 0;
Ye.DEFAULT_MAPPING = as;
Ye.prototype = Object.assign(Object.create(dn.prototype), { constructor: Ye, isTexture: !0, updateMatrix: function () { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y); }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this; }, toJSON: function (e) { var t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0)
        return e.textures[this.uuid]; var n = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; if (this.image !== void 0) {
        var r = this.image;
        if (r.uuid === void 0 && (r.uuid = Ae.generateUUID()), !t && e.images[r.uuid] === void 0) {
            var i;
            if (Array.isArray(r)) {
                i = [];
                for (var a = 0, o = r.length; a < o; a++)
                    i.push(Yn.getDataURL(r[a]));
            }
            else
                i = Yn.getDataURL(r);
            e.images[r.uuid] = { uuid: r.uuid, url: i };
        }
        n.image = r.uuid;
    } return t || (e.textures[this.uuid] = n), n; }, dispose: function () { this.dispatchEvent({ type: "dispose" }); }, transformUv: function (e) { if (this.mapping !== as)
        return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
        switch (this.wrapS) {
            case Ea:
                e.x = e.x - Math.floor(e.x);
                break;
            case St:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case Sa:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break;
        } if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
            case Ea:
                e.y = e.y - Math.floor(e.y);
                break;
            case St:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case Sa:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break;
        } return this.flipY && (e.y = 1 - e.y), e; } });
Object.defineProperty(Ye.prototype, "needsUpdate", { set: function (e) { e === !0 && this.version++; } });
function Ze(e, t, n, r) { this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = r !== void 0 ? r : 1; }
Object.defineProperties(Ze.prototype, { width: { get: function () { return this.z; }, set: function (e) { this.z = e; } }, height: { get: function () { return this.w; }, set: function (e) { this.w = e; } } });
Object.assign(Ze.prototype, { isVector4: !0, set: function (e, t, n, r) { return this.x = e, this.y = t, this.z = n, this.w = r, this; }, setScalar: function (e) { return this.x = e, this.y = e, this.z = e, this.w = e, this; }, setX: function (e) { return this.x = e, this; }, setY: function (e) { return this.y = e, this; }, setZ: function (e) { return this.z = e, this; }, setW: function (e) { return this.w = e, this; }, setComponent: function (e, t) { switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default: throw new Error("index is out of range: " + e);
    } return this; }, getComponent: function (e) { switch (e) {
        case 0: return this.x;
        case 1: return this.y;
        case 2: return this.z;
        case 3: return this.w;
        default: throw new Error("index is out of range: " + e);
    } }, clone: function () { return new this.constructor(this.x, this.y, this.z, this.w); }, copy: function (e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this; }, add: function (e, t) { return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this); }, addScalar: function (e) { return this.x += e, this.y += e, this.z += e, this.w += e, this; }, addVectors: function (e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this; }, addScaledVector: function (e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this; }, sub: function (e, t) { return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this); }, subScalar: function (e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this; }, subVectors: function (e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this; }, multiplyScalar: function (e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this; }, applyMatrix4: function (e) { var t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements; return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this; }, divideScalar: function (e) { return this.multiplyScalar(1 / e); }, setAxisAngleFromQuaternion: function (e) { this.w = 2 * Math.acos(e.w); var t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this; }, setAxisAngleFromRotationMatrix: function (e) { var t, n, r, i, a = .01, o = .1, s = e.elements, l = s[0], c = s[4], u = s[8], h = s[1], f = s[5], d = s[9], p = s[2], g = s[6], v = s[10]; if (Math.abs(c - h) < a && Math.abs(u - p) < a && Math.abs(d - g) < a) {
        if (Math.abs(c + h) < o && Math.abs(u + p) < o && Math.abs(d + g) < o && Math.abs(l + f + v - 3) < o)
            return this.set(1, 0, 0, 0), this;
        t = Math.PI;
        var y = (l + 1) / 2, x = (f + 1) / 2, w = (v + 1) / 2, E = (c + h) / 4, b = (u + p) / 4, L = (d + g) / 4;
        return y > x && y > w ? y < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(y), r = E / n, i = b / n) : x > w ? x < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(x), n = E / r, i = L / r) : w < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(w), n = b / i, r = L / i), this.set(n, r, i, t), this;
    } var S = Math.sqrt((g - d) * (g - d) + (u - p) * (u - p) + (h - c) * (h - c)); return Math.abs(S) < .001 && (S = 1), this.x = (g - d) / S, this.y = (u - p) / S, this.z = (h - c) / S, this.w = Math.acos((l + f + v - 1) / 2), this; }, min: function (e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this; }, max: function (e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this; }, clamp: function (e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this; }, clampScalar: function (e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this; }, clampLength: function (e, t) { var n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))); }, floor: function () { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this; }, ceil: function () { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this; }, round: function () { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this; }, roundToZero: function () { return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this; }, negate: function () { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this; }, dot: function (e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w; }, lengthSq: function () { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w; }, length: function () { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w); }, manhattanLength: function () { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w); }, normalize: function () { return this.divideScalar(this.length() || 1); }, setLength: function (e) { return this.normalize().multiplyScalar(e); }, lerp: function (e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this; }, lerpVectors: function (e, t, n) { return this.subVectors(t, e).multiplyScalar(n).add(e); }, equals: function (e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w; }, fromArray: function (e, t) { return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this; }, toArray: function (e, t) { return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e; }, fromBufferAttribute: function (e, t, n) { return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this; } });
function wt(e, t, n) { this.width = e, this.height = t, this.scissor = new Ze(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ze(0, 0, e, t), n = n || {}, this.texture = new Ye(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = t, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ft, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !0, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null; }
wt.prototype = Object.assign(Object.create(dn.prototype), { constructor: wt, isWebGLRenderTarget: !0, setSize: function (e, t) { (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.texture.image.width = e, this.texture.image.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t); }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this; }, dispose: function () { this.dispatchEvent({ type: "dispose" }); } });
function vc(e, t, n) { wt.call(this, e, t, n), this.samples = 4; }
vc.prototype = Object.assign(Object.create(wt.prototype), { constructor: vc, isWebGLMultisampleRenderTarget: !0, copy: function (e) { return wt.prototype.copy.call(this, e), this.samples = e.samples, this; } });
var Pt = new M, Wt = new Re, $f = new M(0, 0, 0), Qf = new M(1, 1, 1), An = new M, Oa = new M, Dt = new M;
function Re() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."); }
Object.assign(Re.prototype, { isMatrix4: !0, set: function (e, t, n, r, i, a, o, s, l, c, u, h, f, d, p, g) { var v = this.elements; return v[0] = e, v[4] = t, v[8] = n, v[12] = r, v[1] = i, v[5] = a, v[9] = o, v[13] = s, v[2] = l, v[6] = c, v[10] = u, v[14] = h, v[3] = f, v[7] = d, v[11] = p, v[15] = g, this; }, identity: function () { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this; }, clone: function () { return new Re().fromArray(this.elements); }, copy: function (e) { var t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this; }, copyPosition: function (e) { var t = this.elements, n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this; }, extractBasis: function (e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this; }, makeBasis: function (e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this; }, extractRotation: function (e) { var t = this.elements, n = e.elements, r = 1 / Pt.setFromMatrixColumn(e, 0).length(), i = 1 / Pt.setFromMatrixColumn(e, 1).length(), a = 1 / Pt.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this; }, makeRotationFromEuler: function (e) { e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."); var t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), l = Math.sin(r), c = Math.cos(i), u = Math.sin(i); if (e.order === "XYZ") {
        var h = a * c, f = a * u, d = o * c, p = o * u;
        t[0] = s * c, t[4] = -s * u, t[8] = l, t[1] = f + d * l, t[5] = h - p * l, t[9] = -o * s, t[2] = p - h * l, t[6] = d + f * l, t[10] = a * s;
    }
    else if (e.order === "YXZ") {
        var g = s * c, v = s * u, y = l * c, x = l * u;
        t[0] = g + x * o, t[4] = y * o - v, t[8] = a * l, t[1] = a * u, t[5] = a * c, t[9] = -o, t[2] = v * o - y, t[6] = x + g * o, t[10] = a * s;
    }
    else if (e.order === "ZXY") {
        var g = s * c, v = s * u, y = l * c, x = l * u;
        t[0] = g - x * o, t[4] = -a * u, t[8] = y + v * o, t[1] = v + y * o, t[5] = a * c, t[9] = x - g * o, t[2] = -a * l, t[6] = o, t[10] = a * s;
    }
    else if (e.order === "ZYX") {
        var h = a * c, f = a * u, d = o * c, p = o * u;
        t[0] = s * c, t[4] = d * l - f, t[8] = h * l + p, t[1] = s * u, t[5] = p * l + h, t[9] = f * l - d, t[2] = -l, t[6] = o * s, t[10] = a * s;
    }
    else if (e.order === "YZX") {
        var w = a * s, E = a * l, b = o * s, L = o * l;
        t[0] = s * c, t[4] = L - w * u, t[8] = b * u + E, t[1] = u, t[5] = a * c, t[9] = -o * c, t[2] = -l * c, t[6] = E * u + b, t[10] = w - L * u;
    }
    else if (e.order === "XZY") {
        var w = a * s, E = a * l, b = o * s, L = o * l;
        t[0] = s * c, t[4] = -u, t[8] = l * c, t[1] = w * u + L, t[5] = a * c, t[9] = E * u - b, t[2] = b * u - E, t[6] = o * c, t[10] = L * u + w;
    } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this; }, makeRotationFromQuaternion: function (e) { return this.compose($f, e, Qf); }, lookAt: function (e, t, n) { var r = this.elements; return Dt.subVectors(e, t), Dt.lengthSq() === 0 && (Dt.z = 1), Dt.normalize(), An.crossVectors(n, Dt), An.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Dt.x += 1e-4 : Dt.z += 1e-4, Dt.normalize(), An.crossVectors(n, Dt)), An.normalize(), Oa.crossVectors(Dt, An), r[0] = An.x, r[4] = Oa.x, r[8] = Dt.x, r[1] = An.y, r[5] = Oa.y, r[9] = Dt.y, r[2] = An.z, r[6] = Oa.z, r[10] = Dt.z, this; }, multiply: function (e, t) { return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e); }, premultiply: function (e) { return this.multiplyMatrices(e, this); }, multiplyMatrices: function (e, t) { var n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], l = n[12], c = n[1], u = n[5], h = n[9], f = n[13], d = n[2], p = n[6], g = n[10], v = n[14], y = n[3], x = n[7], w = n[11], E = n[15], b = r[0], L = r[4], S = r[8], T = r[12], D = r[1], I = r[5], O = r[9], B = r[13], z = r[2], N = r[6], F = r[10], V = r[14], Y = r[3], ie = r[7], q = r[11], Z = r[15]; return i[0] = a * b + o * D + s * z + l * Y, i[4] = a * L + o * I + s * N + l * ie, i[8] = a * S + o * O + s * F + l * q, i[12] = a * T + o * B + s * V + l * Z, i[1] = c * b + u * D + h * z + f * Y, i[5] = c * L + u * I + h * N + f * ie, i[9] = c * S + u * O + h * F + f * q, i[13] = c * T + u * B + h * V + f * Z, i[2] = d * b + p * D + g * z + v * Y, i[6] = d * L + p * I + g * N + v * ie, i[10] = d * S + p * O + g * F + v * q, i[14] = d * T + p * B + g * V + v * Z, i[3] = y * b + x * D + w * z + E * Y, i[7] = y * L + x * I + w * N + E * ie, i[11] = y * S + x * O + w * F + E * q, i[15] = y * T + x * B + w * V + E * Z, this; }, multiplyScalar: function (e) { var t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this; }, applyToBufferAttribute: function (e) { for (var t = 0, n = e.count; t < n; t++)
        Pt.x = e.getX(t), Pt.y = e.getY(t), Pt.z = e.getZ(t), Pt.applyMatrix4(this), e.setXYZ(t, Pt.x, Pt.y, Pt.z); return e; }, determinant: function () { var e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], l = e[13], c = e[2], u = e[6], h = e[10], f = e[14], d = e[3], p = e[7], g = e[11], v = e[15]; return d * (+i * s * u - r * l * u - i * o * h + n * l * h + r * o * f - n * s * f) + p * (+t * s * f - t * l * h + i * a * h - r * a * f + r * l * c - i * s * c) + g * (+t * l * u - t * o * f - i * a * u + n * a * f + i * o * c - n * l * c) + v * (-r * o * c - t * s * u + t * o * h + r * a * u - n * a * h + n * s * c); }, transpose: function () { var e = this.elements, t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this; }, setPosition: function (e, t, n) { var r = this.elements; return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this; }, getInverse: function (e, t) { var n = this.elements, r = e.elements, i = r[0], a = r[1], o = r[2], s = r[3], l = r[4], c = r[5], u = r[6], h = r[7], f = r[8], d = r[9], p = r[10], g = r[11], v = r[12], y = r[13], x = r[14], w = r[15], E = d * x * h - y * p * h + y * u * g - c * x * g - d * u * w + c * p * w, b = v * p * h - f * x * h - v * u * g + l * x * g + f * u * w - l * p * w, L = f * y * h - v * d * h + v * c * g - l * y * g - f * c * w + l * d * w, S = v * d * u - f * y * u - v * c * p + l * y * p + f * c * x - l * d * x, T = i * E + a * b + o * L + s * S; if (T === 0) {
        var D = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
        if (t === !0)
            throw new Error(D);
        return console.warn(D), this.identity();
    } var I = 1 / T; return n[0] = E * I, n[1] = (y * p * s - d * x * s - y * o * g + a * x * g + d * o * w - a * p * w) * I, n[2] = (c * x * s - y * u * s + y * o * h - a * x * h - c * o * w + a * u * w) * I, n[3] = (d * u * s - c * p * s - d * o * h + a * p * h + c * o * g - a * u * g) * I, n[4] = b * I, n[5] = (f * x * s - v * p * s + v * o * g - i * x * g - f * o * w + i * p * w) * I, n[6] = (v * u * s - l * x * s - v * o * h + i * x * h + l * o * w - i * u * w) * I, n[7] = (l * p * s - f * u * s + f * o * h - i * p * h - l * o * g + i * u * g) * I, n[8] = L * I, n[9] = (v * d * s - f * y * s - v * a * g + i * y * g + f * a * w - i * d * w) * I, n[10] = (l * y * s - v * c * s + v * a * h - i * y * h - l * a * w + i * c * w) * I, n[11] = (f * c * s - l * d * s - f * a * h + i * d * h + l * a * g - i * c * g) * I, n[12] = S * I, n[13] = (f * y * o - v * d * o + v * a * p - i * y * p - f * a * x + i * d * x) * I, n[14] = (v * c * o - l * y * o - v * a * u + i * y * u + l * a * x - i * c * x) * I, n[15] = (l * d * o - f * c * o + f * a * u - i * d * u - l * a * p + i * c * p) * I, this; }, scale: function (e) { var t = this.elements, n = e.x, r = e.y, i = e.z; return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this; }, getMaxScaleOnAxis: function () { var e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n, r)); }, makeTranslation: function (e, t, n) { return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this; }, makeRotationX: function (e) { var t = Math.cos(e), n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this; }, makeRotationY: function (e) { var t = Math.cos(e), n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this; }, makeRotationZ: function (e) { var t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this; }, makeRotationAxis: function (e, t) { var n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, l = i * a, c = i * o; return this.set(l * a + n, l * o - r * s, l * s + r * o, 0, l * o + r * s, c * o + n, c * s - r * a, 0, l * s - r * o, c * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this; }, makeScale: function (e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this; }, makeShear: function (e, t, n) { return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this; }, compose: function (e, t, n) { var r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, l = i + i, c = a + a, u = o + o, h = i * l, f = i * c, d = i * u, p = a * c, g = a * u, v = o * u, y = s * l, x = s * c, w = s * u, E = n.x, b = n.y, L = n.z; return r[0] = (1 - (p + v)) * E, r[1] = (f + w) * E, r[2] = (d - x) * E, r[3] = 0, r[4] = (f - w) * b, r[5] = (1 - (h + v)) * b, r[6] = (g + y) * b, r[7] = 0, r[8] = (d + x) * L, r[9] = (g - y) * L, r[10] = (1 - (h + p)) * L, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this; }, decompose: function (e, t, n) { var r = this.elements, i = Pt.set(r[0], r[1], r[2]).length(), a = Pt.set(r[4], r[5], r[6]).length(), o = Pt.set(r[8], r[9], r[10]).length(), s = this.determinant(); s < 0 && (i = -i), e.x = r[12], e.y = r[13], e.z = r[14], Wt.copy(this); var l = 1 / i, c = 1 / a, u = 1 / o; return Wt.elements[0] *= l, Wt.elements[1] *= l, Wt.elements[2] *= l, Wt.elements[4] *= c, Wt.elements[5] *= c, Wt.elements[6] *= c, Wt.elements[8] *= u, Wt.elements[9] *= u, Wt.elements[10] *= u, t.setFromRotationMatrix(Wt), n.x = i, n.y = a, n.z = o, this; }, makePerspective: function (e, t, n, r, i, a) { a === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."); var o = this.elements, s = 2 * i / (t - e), l = 2 * i / (n - r), c = (t + e) / (t - e), u = (n + r) / (n - r), h = -(a + i) / (a - i), f = -2 * a * i / (a - i); return o[0] = s, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = l, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = h, o[14] = f, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this; }, makeOrthographic: function (e, t, n, r, i, a) { var o = this.elements, s = 1 / (t - e), l = 1 / (n - r), c = 1 / (a - i), u = (t + e) * s, h = (n + r) * l, f = (a + i) * c; return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -h, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -f, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this; }, equals: function (e) { for (var t = this.elements, n = e.elements, r = 0; r < 16; r++)
        if (t[r] !== n[r])
            return !1; return !0; }, fromArray: function (e, t) { t === void 0 && (t = 0); for (var n = 0; n < 16; n++)
        this.elements[n] = e[n + t]; return this; }, toArray: function (e, t) { e === void 0 && (e = []), t === void 0 && (t = 0); var n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e; } });
var mc = new Re, gc = new Tt;
function Sr(e, t, n, r) { this._x = e || 0, this._y = t || 0, this._z = n || 0, this._order = r || Sr.DefaultOrder; }
Sr.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
Sr.DefaultOrder = "XYZ";
Object.defineProperties(Sr.prototype, { x: { get: function () { return this._x; }, set: function (e) { this._x = e, this._onChangeCallback(); } }, y: { get: function () { return this._y; }, set: function (e) { this._y = e, this._onChangeCallback(); } }, z: { get: function () { return this._z; }, set: function (e) { this._z = e, this._onChangeCallback(); } }, order: { get: function () { return this._order; }, set: function (e) { this._order = e, this._onChangeCallback(); } } });
Object.assign(Sr.prototype, { isEuler: !0, set: function (e, t, n, r) { return this._x = e, this._y = t, this._z = n, this._order = r || this._order, this._onChangeCallback(), this; }, clone: function () { return new this.constructor(this._x, this._y, this._z, this._order); }, copy: function (e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this; }, setFromRotationMatrix: function (e, t, n) { var r = Ae.clamp, i = e.elements, a = i[0], o = i[4], s = i[8], l = i[1], c = i[5], u = i[9], h = i[2], f = i[6], d = i[10]; return t = t || this._order, t === "XYZ" ? (this._y = Math.asin(r(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(f, c), this._z = 0)) : t === "YXZ" ? (this._x = Math.asin(-r(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, a), this._z = 0)) : t === "ZXY" ? (this._x = Math.asin(r(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, a))) : t === "ZYX" ? (this._y = Math.asin(-r(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-o, c))) : t === "YZX" ? (this._z = Math.asin(r(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : t === "XZY" ? (this._z = Math.asin(-r(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, n !== !1 && this._onChangeCallback(), this; }, setFromQuaternion: function (e, t, n) { return mc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(mc, t, n); }, setFromVector3: function (e, t) { return this.set(e.x, e.y, e.z, t || this._order); }, reorder: function (e) { return gc.setFromEuler(this), this.setFromQuaternion(gc, e); }, equals: function (e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order; }, fromArray: function (e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this; }, toArray: function (e, t) { return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e; }, toVector3: function (e) { return e ? e.set(this._x, this._y, this._z) : new M(this._x, this._y, this._z); }, _onChange: function (e) { return this._onChangeCallback = e, this; }, _onChangeCallback: function () { } });
function yc() { this.mask = 1 | 0; }
Object.assign(yc.prototype, { set: function (e) { this.mask = 1 << e | 0; }, enable: function (e) { this.mask |= 1 << e | 0; }, enableAll: function () { this.mask = 4294967295 | 0; }, toggle: function (e) { this.mask ^= 1 << e | 0; }, disable: function (e) { this.mask &= ~(1 << e | 0); }, disableAll: function () { this.mask = 0; }, test: function (e) { return (this.mask & e.mask) !== 0; } });
var Kf = 0, xc = new M, Tr = new Tt, pn = new Re, Na = new M, Ei = new M, ed = new M, td = new Tt, _c = new M(1, 0, 0), wc = new M(0, 1, 0), bc = new M(0, 0, 1), nd = { type: "added" }, rd = { type: "removed" };
function K() { Object.defineProperty(this, "id", { value: Kf++ }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = K.DefaultUp.clone(); var e = new M, t = new Sr, n = new Tt, r = new M(1, 1, 1); function i() { n.setFromEuler(t, !1); } function a() { t.setFromQuaternion(n, void 0, !1); } t._onChange(i), n._onChange(a), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: r }, modelViewMatrix: { value: new Re }, normalMatrix: { value: new mt } }), this.matrix = new Re, this.matrixWorld = new Re, this.matrixAutoUpdate = K.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new yc, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}; }
K.DefaultUp = new M(0, 1, 0);
K.DefaultMatrixAutoUpdate = !0;
K.prototype = Object.assign(Object.create(dn.prototype), { constructor: K, isObject3D: !0, onBeforeRender: function () { }, onAfterRender: function () { }, applyMatrix: function (e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale); }, applyQuaternion: function (e) { return this.quaternion.premultiply(e), this; }, setRotationFromAxisAngle: function (e, t) { this.quaternion.setFromAxisAngle(e, t); }, setRotationFromEuler: function (e) { this.quaternion.setFromEuler(e, !0); }, setRotationFromMatrix: function (e) { this.quaternion.setFromRotationMatrix(e); }, setRotationFromQuaternion: function (e) { this.quaternion.copy(e); }, rotateOnAxis: function (e, t) { return Tr.setFromAxisAngle(e, t), this.quaternion.multiply(Tr), this; }, rotateOnWorldAxis: function (e, t) { return Tr.setFromAxisAngle(e, t), this.quaternion.premultiply(Tr), this; }, rotateX: function (e) { return this.rotateOnAxis(_c, e); }, rotateY: function (e) { return this.rotateOnAxis(wc, e); }, rotateZ: function (e) { return this.rotateOnAxis(bc, e); }, translateOnAxis: function (e, t) { return xc.copy(e).applyQuaternion(this.quaternion), this.position.add(xc.multiplyScalar(t)), this; }, translateX: function (e) { return this.translateOnAxis(_c, e); }, translateY: function (e) { return this.translateOnAxis(wc, e); }, translateZ: function (e) { return this.translateOnAxis(bc, e); }, localToWorld: function (e) { return e.applyMatrix4(this.matrixWorld); }, worldToLocal: function (e) { return e.applyMatrix4(pn.getInverse(this.matrixWorld)); }, lookAt: function (e, t, n) { e.isVector3 ? Na.copy(e) : Na.set(e, t, n); var r = this.parent; this.updateWorldMatrix(!0, !1), Ei.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? pn.lookAt(Ei, Na, this.up) : pn.lookAt(Na, Ei, this.up), this.quaternion.setFromRotationMatrix(pn), r && (pn.extractRotation(r.matrixWorld), Tr.setFromRotationMatrix(pn), this.quaternion.premultiply(Tr.inverse())); }, add: function (e) { if (arguments.length > 1) {
        for (var t = 0; t < arguments.length; t++)
            this.add(arguments[t]);
        return this;
    } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(nd)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this); }, remove: function (e) { if (arguments.length > 1) {
        for (var t = 0; t < arguments.length; t++)
            this.remove(arguments[t]);
        return this;
    } var n = this.children.indexOf(e); return n !== -1 && (e.parent = null, this.children.splice(n, 1), e.dispatchEvent(rd)), this; }, attach: function (e) { return this.updateWorldMatrix(!0, !1), pn.getInverse(this.matrixWorld), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), pn.multiply(e.parent.matrixWorld)), e.applyMatrix(pn), e.updateWorldMatrix(!1, !1), this.add(e), this; }, getObjectById: function (e) { return this.getObjectByProperty("id", e); }, getObjectByName: function (e) { return this.getObjectByProperty("name", e); }, getObjectByProperty: function (e, t) { if (this[e] === t)
        return this; for (var n = 0, r = this.children.length; n < r; n++) {
        var i = this.children[n], a = i.getObjectByProperty(e, t);
        if (a !== void 0)
            return a;
    } }, getWorldPosition: function (e) { return e === void 0 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new M), this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld); }, getWorldQuaternion: function (e) { return e === void 0 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new Tt), this.updateMatrixWorld(!0), this.matrixWorld.decompose(Ei, e, ed), e; }, getWorldScale: function (e) { return e === void 0 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new M), this.updateMatrixWorld(!0), this.matrixWorld.decompose(Ei, td, e), e; }, getWorldDirection: function (e) { e === void 0 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new M), this.updateMatrixWorld(!0); var t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize(); }, raycast: function () { }, traverse: function (e) { e(this); for (var t = this.children, n = 0, r = t.length; n < r; n++)
        t[n].traverse(e); }, traverseVisible: function (e) { if (this.visible !== !1) {
        e(this);
        for (var t = this.children, n = 0, r = t.length; n < r; n++)
            t[n].traverseVisible(e);
    } }, traverseAncestors: function (e) { var t = this.parent; t !== null && (e(t), t.traverseAncestors(e)); }, updateMatrix: function () { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0; }, updateMatrixWorld: function (e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0); for (var t = this.children, n = 0, r = t.length; n < r; n++)
        t[n].updateMatrixWorld(e); }, updateWorldMatrix: function (e, t) { var n = this.parent; if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0)
        for (var r = this.children, i = 0, a = r.length; i < a; i++)
            r[i].updateWorldMatrix(!1, !0); }, toJSON: function (e) { var t = e === void 0 || typeof e == "string", n = {}; t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {} }, n.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" }); var r = {}; r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON()); function i(v, y) { return v[y.uuid] === void 0 && (v[y.uuid] = y.toJSON(e)), y.uuid; } if (this.isMesh || this.isLine || this.isPoints) {
        r.geometry = i(e.geometries, this.geometry);
        var a = this.geometry.parameters;
        if (a !== void 0 && a.shapes !== void 0) {
            var o = a.shapes;
            if (Array.isArray(o))
                for (var s = 0, l = o.length; s < l; s++) {
                    var c = o[s];
                    i(e.shapes, c);
                }
            else
                i(e.shapes, o);
        }
    } if (this.material !== void 0)
        if (Array.isArray(this.material)) {
            for (var u = [], s = 0, l = this.material.length; s < l; s++)
                u.push(i(e.materials, this.material[s]));
            r.material = u;
        }
        else
            r.material = i(e.materials, this.material); if (this.children.length > 0) {
        r.children = [];
        for (var s = 0; s < this.children.length; s++)
            r.children.push(this.children[s].toJSON(e).object);
    } if (t) {
        var h = g(e.geometries), f = g(e.materials), d = g(e.textures), p = g(e.images), o = g(e.shapes);
        h.length > 0 && (n.geometries = h), f.length > 0 && (n.materials = f), d.length > 0 && (n.textures = d), p.length > 0 && (n.images = p), o.length > 0 && (n.shapes = o);
    } return n.object = r, n; function g(v) { var y = []; for (var x in v) {
        var w = v[x];
        delete w.metadata, y.push(w);
    } return y; } }, clone: function (e) { return new this.constructor().copy(this, e); }, copy: function (e, t) { if (t === void 0 && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
        for (var n = 0; n < e.children.length; n++) {
            var r = e.children[n];
            this.add(r.clone());
        } return this; } });
function Ln() { K.call(this), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })); }
Ln.prototype = Object.assign(Object.create(K.prototype), { constructor: Ln, isScene: !0, copy: function (e, t) { return K.prototype.copy.call(this, e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this; }, toJSON: function (e) { var t = K.prototype.toJSON.call(this, e); return this.background !== null && (t.object.background = this.background.toJSON(e)), this.environment !== null && (t.object.environment = this.environment.toJSON(e)), this.fog !== null && (t.object.fog = this.fog.toJSON()), t; }, dispose: function () { this.dispatchEvent({ type: "dispose" }); } });
var vn = [new M, new M, new M, new M, new M, new M, new M, new M], Si = new M, Fa = new Kt, Ar = new M, Lr = new M, Rr = new M, Rn = new M, Cn = new M, Zn = new M, Ti = new M, Ba = new M, Ua = new M, Jn = new M;
function Kt(e, t) { this.min = e !== void 0 ? e : new M(1 / 0, 1 / 0, 1 / 0), this.max = t !== void 0 ? t : new M(-1 / 0, -1 / 0, -1 / 0); }
Object.assign(Kt.prototype, { isBox3: !0, set: function (e, t) { return this.min.copy(e), this.max.copy(t), this; }, setFromArray: function (e) { for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.length; s < l; s += 3) {
        var c = e[s], u = e[s + 1], h = e[s + 2];
        c < t && (t = c), u < n && (n = u), h < r && (r = h), c > i && (i = c), u > a && (a = u), h > o && (o = h);
    } return this.min.set(t, n, r), this.max.set(i, a, o), this; }, setFromBufferAttribute: function (e) { for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.count; s < l; s++) {
        var c = e.getX(s), u = e.getY(s), h = e.getZ(s);
        c < t && (t = c), u < n && (n = u), h < r && (r = h), c > i && (i = c), u > a && (a = u), h > o && (o = h);
    } return this.min.set(t, n, r), this.max.set(i, a, o), this; }, setFromPoints: function (e) { this.makeEmpty(); for (var t = 0, n = e.length; t < n; t++)
        this.expandByPoint(e[t]); return this; }, setFromCenterAndSize: function (e, t) { var n = Si.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this; }, setFromObject: function (e) { return this.makeEmpty(), this.expandByObject(e); }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.min.copy(e.min), this.max.copy(e.max), this; }, makeEmpty: function () { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this; }, isEmpty: function () { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z; }, getCenter: function (e) { return e === void 0 && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new M), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5); }, getSize: function (e) { return e === void 0 && (console.warn("THREE.Box3: .getSize() target is now required"), e = new M), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min); }, expandByPoint: function (e) { return this.min.min(e), this.max.max(e), this; }, expandByVector: function (e) { return this.min.sub(e), this.max.add(e), this; }, expandByScalar: function (e) { return this.min.addScalar(-e), this.max.addScalar(e), this; }, expandByObject: function (e) { e.updateWorldMatrix(!1, !1); var t = e.geometry; t !== void 0 && (t.boundingBox === null && t.computeBoundingBox(), Fa.copy(t.boundingBox), Fa.applyMatrix4(e.matrixWorld), this.expandByPoint(Fa.min), this.expandByPoint(Fa.max)); for (var n = e.children, r = 0, i = n.length; r < i; r++)
        this.expandByObject(n[r]); return this; }, containsPoint: function (e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z); }, containsBox: function (e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z; }, getParameter: function (e, t) { return t === void 0 && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new M), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)); }, intersectsBox: function (e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z); }, intersectsSphere: function (e) { return this.clampPoint(e.center, Si), Si.distanceToSquared(e.center) <= e.radius * e.radius; }, intersectsPlane: function (e) { var t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant; }, intersectsTriangle: function (e) { if (this.isEmpty())
        return !1; this.getCenter(Ti), Ba.subVectors(this.max, Ti), Ar.subVectors(e.a, Ti), Lr.subVectors(e.b, Ti), Rr.subVectors(e.c, Ti), Rn.subVectors(Lr, Ar), Cn.subVectors(Rr, Lr), Zn.subVectors(Ar, Rr); var t = [0, -Rn.z, Rn.y, 0, -Cn.z, Cn.y, 0, -Zn.z, Zn.y, Rn.z, 0, -Rn.x, Cn.z, 0, -Cn.x, Zn.z, 0, -Zn.x, -Rn.y, Rn.x, 0, -Cn.y, Cn.x, 0, -Zn.y, Zn.x, 0]; return !ys(t, Ar, Lr, Rr, Ba) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ys(t, Ar, Lr, Rr, Ba)) ? !1 : (Ua.crossVectors(Rn, Cn), t = [Ua.x, Ua.y, Ua.z], ys(t, Ar, Lr, Rr, Ba)); }, clampPoint: function (e, t) { return t === void 0 && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new M), t.copy(e).clamp(this.min, this.max); }, distanceToPoint: function (e) { var t = Si.copy(e).clamp(this.min, this.max); return t.sub(e).length(); }, getBoundingSphere: function (e) { return e === void 0 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = this.getSize(Si).length() * .5, e; }, intersect: function (e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this; }, union: function (e) { return this.min.min(e.min), this.max.max(e.max), this; }, applyMatrix4: function (e) { return this.isEmpty() ? this : (vn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), vn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), vn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), vn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), vn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), vn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), vn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), vn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(vn), this); }, translate: function (e) { return this.min.add(e), this.max.add(e), this; }, equals: function (e) { return e.min.equals(this.min) && e.max.equals(this.max); } });
function ys(e, t, n, r, i) { var a, o; for (a = 0, o = e.length - 3; a <= o; a += 3) {
    Jn.fromArray(e, a);
    var s = i.x * Math.abs(Jn.x) + i.y * Math.abs(Jn.y) + i.z * Math.abs(Jn.z), l = t.dot(Jn), c = n.dot(Jn), u = r.dot(Jn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > s)
        return !1;
} return !0; }
var id = new Kt;
function Pn(e, t) { this.center = e !== void 0 ? e : new M, this.radius = t !== void 0 ? t : 0; }
Object.assign(Pn.prototype, { set: function (e, t) { return this.center.copy(e), this.radius = t, this; }, setFromPoints: function (e, t) { var n = this.center; t !== void 0 ? n.copy(t) : id.setFromPoints(e).getCenter(n); for (var r = 0, i = 0, a = e.length; i < a; i++)
        r = Math.max(r, n.distanceToSquared(e[i])); return this.radius = Math.sqrt(r), this; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.center.copy(e.center), this.radius = e.radius, this; }, empty: function () { return this.radius <= 0; }, containsPoint: function (e) { return e.distanceToSquared(this.center) <= this.radius * this.radius; }, distanceToPoint: function (e) { return e.distanceTo(this.center) - this.radius; }, intersectsSphere: function (e) { var t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t; }, intersectsBox: function (e) { return e.intersectsSphere(this); }, intersectsPlane: function (e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius; }, clampPoint: function (e, t) { var n = this.center.distanceToSquared(e); return t === void 0 && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new M), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t; }, getBoundingBox: function (e) { return e === void 0 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new Kt), e.set(this.center, this.center), e.expandByScalar(this.radius), e; }, applyMatrix4: function (e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this; }, translate: function (e) { return this.center.add(e), this; }, equals: function (e) { return e.center.equals(this.center) && e.radius === this.radius; } });
var mn = new M, xs = new M, za = new M, Dn = new M, _s = new M, Ga = new M, ws = new M;
function Cr(e, t) { this.origin = e !== void 0 ? e : new M, this.direction = t !== void 0 ? t : new M(0, 0, -1); }
Object.assign(Cr.prototype, { set: function (e, t) { return this.origin.copy(e), this.direction.copy(t), this; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this; }, at: function (e, t) { return t === void 0 && (console.warn("THREE.Ray: .at() target is now required"), t = new M), t.copy(this.direction).multiplyScalar(e).add(this.origin); }, lookAt: function (e) { return this.direction.copy(e).sub(this.origin).normalize(), this; }, recast: function (e) { return this.origin.copy(this.at(e, mn)), this; }, closestPointToPoint: function (e, t) { t === void 0 && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new M), t.subVectors(e, this.origin); var n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin); }, distanceToPoint: function (e) { return Math.sqrt(this.distanceSqToPoint(e)); }, distanceSqToPoint: function (e) { var t = mn.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (mn.copy(this.direction).multiplyScalar(t).add(this.origin), mn.distanceToSquared(e)); }, distanceSqToSegment: function (e, t, n, r) { xs.copy(e).add(t).multiplyScalar(.5), za.copy(t).sub(e).normalize(), Dn.copy(this.origin).sub(xs); var i = e.distanceTo(t) * .5, a = -this.direction.dot(za), o = Dn.dot(this.direction), s = -Dn.dot(za), l = Dn.lengthSq(), c = Math.abs(1 - a * a), u, h, f, d; if (c > 0)
        if (u = a * s - o, h = a * o - s, d = i * c, u >= 0)
            if (h >= -d)
                if (h <= d) {
                    var p = 1 / c;
                    u *= p, h *= p, f = u * (u + a * h + 2 * o) + h * (a * u + h + 2 * s) + l;
                }
                else
                    h = i, u = Math.max(0, -(a * h + o)), f = -u * u + h * (h + 2 * s) + l;
            else
                h = -i, u = Math.max(0, -(a * h + o)), f = -u * u + h * (h + 2 * s) + l;
        else
            h <= -d ? (u = Math.max(0, -(-a * i + o)), h = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + h * (h + 2 * s) + l) : h <= d ? (u = 0, h = Math.min(Math.max(-i, -s), i), f = h * (h + 2 * s) + l) : (u = Math.max(0, -(a * i + o)), h = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + h * (h + 2 * s) + l);
    else
        h = a > 0 ? -i : i, u = Math.max(0, -(a * h + o)), f = -u * u + h * (h + 2 * s) + l; return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), r && r.copy(za).multiplyScalar(h).add(xs), f; }, intersectSphere: function (e, t) { mn.subVectors(e.center, this.origin); var n = mn.dot(this.direction), r = mn.dot(mn) - n * n, i = e.radius * e.radius; if (r > i)
        return null; var a = Math.sqrt(i - r), o = n - a, s = n + a; return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t); }, intersectsSphere: function (e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius; }, distanceToPlane: function (e) { var t = e.normal.dot(this.direction); if (t === 0)
        return e.distanceToPoint(this.origin) === 0 ? 0 : null; var n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null; }, intersectPlane: function (e, t) { var n = this.distanceToPlane(e); return n === null ? null : this.at(n, t); }, intersectsPlane: function (e) { var t = e.distanceToPoint(this.origin); if (t === 0)
        return !0; var n = e.normal.dot(this.direction); return n * t < 0; }, intersectBox: function (e, t) { var n, r, i, a, o, s, l = 1 / this.direction.x, c = 1 / this.direction.y, u = 1 / this.direction.z, h = this.origin; return l >= 0 ? (n = (e.min.x - h.x) * l, r = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l, r = (e.min.x - h.x) * l), c >= 0 ? (i = (e.min.y - h.y) * c, a = (e.max.y - h.y) * c) : (i = (e.max.y - h.y) * c, a = (e.min.y - h.y) * c), n > a || i > r || ((i > n || n !== n) && (n = i), (a < r || r !== r) && (r = a), u >= 0 ? (o = (e.min.z - h.z) * u, s = (e.max.z - h.z) * u) : (o = (e.max.z - h.z) * u, s = (e.min.z - h.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t); }, intersectsBox: function (e) { return this.intersectBox(e, mn) !== null; }, intersectTriangle: function (e, t, n, r, i) { _s.subVectors(t, e), Ga.subVectors(n, e), ws.crossVectors(_s, Ga); var a = this.direction.dot(ws), o; if (a > 0) {
        if (r)
            return null;
        o = 1;
    }
    else if (a < 0)
        o = -1, a = -a;
    else
        return null; Dn.subVectors(this.origin, e); var s = o * this.direction.dot(Ga.crossVectors(Dn, Ga)); if (s < 0)
        return null; var l = o * this.direction.dot(_s.cross(Dn)); if (l < 0 || s + l > a)
        return null; var c = -o * Dn.dot(ws); return c < 0 ? null : this.at(c / a, i); }, applyMatrix4: function (e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this; }, equals: function (e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction); } });
var bs = new M, ad = new M, od = new mt;
function en(e, t) { this.normal = e !== void 0 ? e : new M(1, 0, 0), this.constant = t !== void 0 ? t : 0; }
Object.assign(en.prototype, { isPlane: !0, set: function (e, t) { return this.normal.copy(e), this.constant = t, this; }, setComponents: function (e, t, n, r) { return this.normal.set(e, t, n), this.constant = r, this; }, setFromNormalAndCoplanarPoint: function (e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this; }, setFromCoplanarPoints: function (e, t, n) { var r = bs.subVectors(n, t).cross(ad.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(r, e), this; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.normal.copy(e.normal), this.constant = e.constant, this; }, normalize: function () { var e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this; }, negate: function () { return this.constant *= -1, this.normal.negate(), this; }, distanceToPoint: function (e) { return this.normal.dot(e) + this.constant; }, distanceToSphere: function (e) { return this.distanceToPoint(e.center) - e.radius; }, projectPoint: function (e, t) { return t === void 0 && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new M), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e); }, intersectLine: function (e, t) { t === void 0 && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new M); var n = e.delta(bs), r = this.normal.dot(n); if (r === 0)
        return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : void 0; var i = -(e.start.dot(this.normal) + this.constant) / r; if (!(i < 0 || i > 1))
        return t.copy(n).multiplyScalar(i).add(e.start); }, intersectsLine: function (e) { var t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0; }, intersectsBox: function (e) { return e.intersectsPlane(this); }, intersectsSphere: function (e) { return e.intersectsPlane(this); }, coplanarPoint: function (e) { return e === void 0 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new M), e.copy(this.normal).multiplyScalar(-this.constant); }, applyMatrix4: function (e, t) { var n = t || od.getNormalMatrix(e), r = this.coplanarPoint(bs).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize(); return this.constant = -r.dot(i), this; }, translate: function (e) { return this.constant -= e.dot(this.normal), this; }, equals: function (e) { return e.normal.equals(this.normal) && e.constant === this.constant; } });
var jt = new M, gn = new M, Ms = new M, yn = new M, Pr = new M, Dr = new M, Mc = new M, Es = new M, Ss = new M, Ts = new M;
function pt(e, t, n) { this.a = e !== void 0 ? e : new M, this.b = t !== void 0 ? t : new M, this.c = n !== void 0 ? n : new M; }
Object.assign(pt, { getNormal: function (e, t, n, r) { r === void 0 && (console.warn("THREE.Triangle: .getNormal() target is now required"), r = new M), r.subVectors(n, t), jt.subVectors(e, t), r.cross(jt); var i = r.lengthSq(); return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0); }, getBarycoord: function (e, t, n, r, i) { jt.subVectors(r, t), gn.subVectors(n, t), Ms.subVectors(e, t); var a = jt.dot(jt), o = jt.dot(gn), s = jt.dot(Ms), l = gn.dot(gn), c = gn.dot(Ms), u = a * l - o * o; if (i === void 0 && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), i = new M), u === 0)
        return i.set(-2, -1, -1); var h = 1 / u, f = (l * s - o * c) * h, d = (a * c - o * s) * h; return i.set(1 - f - d, d, f); }, containsPoint: function (e, t, n, r) { return pt.getBarycoord(e, t, n, r, yn), yn.x >= 0 && yn.y >= 0 && yn.x + yn.y <= 1; }, getUV: function (e, t, n, r, i, a, o, s) { return this.getBarycoord(e, t, n, r, yn), s.set(0, 0), s.addScaledVector(i, yn.x), s.addScaledVector(a, yn.y), s.addScaledVector(o, yn.z), s; }, isFrontFacing: function (e, t, n, r) { return jt.subVectors(n, t), gn.subVectors(e, t), jt.cross(gn).dot(r) < 0; } });
Object.assign(pt.prototype, { set: function (e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this; }, setFromPointsAndIndices: function (e, t, n, r) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this; }, getArea: function () { return jt.subVectors(this.c, this.b), gn.subVectors(this.a, this.b), jt.cross(gn).length() * .5; }, getMidpoint: function (e) { return e === void 0 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new M), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3); }, getNormal: function (e) { return pt.getNormal(this.a, this.b, this.c, e); }, getPlane: function (e) { return e === void 0 && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new en), e.setFromCoplanarPoints(this.a, this.b, this.c); }, getBarycoord: function (e, t) { return pt.getBarycoord(e, this.a, this.b, this.c, t); }, getUV: function (e, t, n, r, i) { return pt.getUV(e, this.a, this.b, this.c, t, n, r, i); }, containsPoint: function (e) { return pt.containsPoint(e, this.a, this.b, this.c); }, isFrontFacing: function (e) { return pt.isFrontFacing(this.a, this.b, this.c, e); }, intersectsBox: function (e) { return e.intersectsTriangle(this); }, closestPointToPoint: function (e, t) { t === void 0 && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new M); var n = this.a, r = this.b, i = this.c, a, o; Pr.subVectors(r, n), Dr.subVectors(i, n), Es.subVectors(e, n); var s = Pr.dot(Es), l = Dr.dot(Es); if (s <= 0 && l <= 0)
        return t.copy(n); Ss.subVectors(e, r); var c = Pr.dot(Ss), u = Dr.dot(Ss); if (c >= 0 && u <= c)
        return t.copy(r); var h = s * u - c * l; if (h <= 0 && s >= 0 && c <= 0)
        return a = s / (s - c), t.copy(n).addScaledVector(Pr, a); Ts.subVectors(e, i); var f = Pr.dot(Ts), d = Dr.dot(Ts); if (d >= 0 && f <= d)
        return t.copy(i); var p = f * l - s * d; if (p <= 0 && l >= 0 && d <= 0)
        return o = l / (l - d), t.copy(n).addScaledVector(Dr, o); var g = c * d - f * u; if (g <= 0 && u - c >= 0 && f - d >= 0)
        return Mc.subVectors(i, r), o = (u - c) / (u - c + (f - d)), t.copy(r).addScaledVector(Mc, o); var v = 1 / (g + p + h); return a = p * v, o = h * v, t.copy(n).addScaledVector(Pr, a).addScaledVector(Dr, o); }, equals: function (e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c); } });
var Ec = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, qt = { h: 0, s: 0, l: 0 }, Ha = { h: 0, s: 0, l: 0 };
function ee(e, t, n) { return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n); }
function As(e, t, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e; }
function Ls(e) { return e < .04045 ? e * .0773993808 : Math.pow(e * .9478672986 + .0521327014, 2.4); }
function Rs(e) { return e < .0031308 ? e * 12.92 : 1.055 * Math.pow(e, .41666) - .055; }
Object.assign(ee.prototype, { isColor: !0, r: 1, g: 1, b: 1, set: function (e) { return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this; }, setScalar: function (e) { return this.r = e, this.g = e, this.b = e, this; }, setHex: function (e) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this; }, setRGB: function (e, t, n) { return this.r = e, this.g = t, this.b = n, this; }, setHSL: function (e, t, n) { if (e = Ae.euclideanModulo(e, 1), t = Ae.clamp(t, 0, 1), n = Ae.clamp(n, 0, 1), t === 0)
        this.r = this.g = this.b = n;
    else {
        var r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
        this.r = As(i, r, e + 1 / 3), this.g = As(i, r, e), this.b = As(i, r, e - 1 / 3);
    } return this; }, setStyle: function (e) { function t(h) { h !== void 0 && parseFloat(h) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored."); } var n; if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
        var r, i = n[1], a = n[2];
        switch (i) {
            case "rgb":
            case "rgba":
                if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                    return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, t(r[5]), this;
                if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                    return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, t(r[5]), this;
                break;
            case "hsl":
            case "hsla":
                if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                    var o = parseFloat(r[1]) / 360, s = parseInt(r[2], 10) / 100, l = parseInt(r[3], 10) / 100;
                    return t(r[5]), this.setHSL(o, s, l);
                }
                break;
        }
    }
    else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
        var c = n[1], u = c.length;
        if (u === 3)
            return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
        if (u === 6)
            return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this;
    } return e && e.length > 0 ? this.setColorName(e) : this; }, setColorName: function (e) { var t = Ec[e]; return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this; }, clone: function () { return new this.constructor(this.r, this.g, this.b); }, copy: function (e) { return this.r = e.r, this.g = e.g, this.b = e.b, this; }, copyGammaToLinear: function (e, t) { return t === void 0 && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this; }, copyLinearToGamma: function (e, t) { t === void 0 && (t = 2); var n = t > 0 ? 1 / t : 1; return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this; }, convertGammaToLinear: function (e) { return this.copyGammaToLinear(this, e), this; }, convertLinearToGamma: function (e) { return this.copyLinearToGamma(this, e), this; }, copySRGBToLinear: function (e) { return this.r = Ls(e.r), this.g = Ls(e.g), this.b = Ls(e.b), this; }, copyLinearToSRGB: function (e) { return this.r = Rs(e.r), this.g = Rs(e.g), this.b = Rs(e.b), this; }, convertSRGBToLinear: function () { return this.copySRGBToLinear(this), this; }, convertLinearToSRGB: function () { return this.copyLinearToSRGB(this), this; }, getHex: function () { return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0; }, getHexString: function () { return ("000000" + this.getHex().toString(16)).slice(-6); }, getHSL: function (e) { e === void 0 && (console.warn("THREE.Color: .getHSL() target is now required"), e = { h: 0, s: 0, l: 0 }); var t = this.r, n = this.g, r = this.b, i = Math.max(t, n, r), a = Math.min(t, n, r), o, s, l = (a + i) / 2; if (a === i)
        o = 0, s = 0;
    else {
        var c = i - a;
        switch (s = l <= .5 ? c / (i + a) : c / (2 - i - a), i) {
            case t:
                o = (n - r) / c + (n < r ? 6 : 0);
                break;
            case n:
                o = (r - t) / c + 2;
                break;
            case r:
                o = (t - n) / c + 4;
                break;
        }
        o /= 6;
    } return e.h = o, e.s = s, e.l = l, e; }, getStyle: function () { return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")"; }, offsetHSL: function (e, t, n) { return this.getHSL(qt), qt.h += e, qt.s += t, qt.l += n, this.setHSL(qt.h, qt.s, qt.l), this; }, add: function (e) { return this.r += e.r, this.g += e.g, this.b += e.b, this; }, addColors: function (e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this; }, addScalar: function (e) { return this.r += e, this.g += e, this.b += e, this; }, sub: function (e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this; }, multiply: function (e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this; }, multiplyScalar: function (e) { return this.r *= e, this.g *= e, this.b *= e, this; }, lerp: function (e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this; }, lerpHSL: function (e, t) { this.getHSL(qt), e.getHSL(Ha); var n = Ae.lerp(qt.h, Ha.h, t), r = Ae.lerp(qt.s, Ha.s, t), i = Ae.lerp(qt.l, Ha.l, t); return this.setHSL(n, r, i), this; }, equals: function (e) { return e.r === this.r && e.g === this.g && e.b === this.b; }, fromArray: function (e, t) { return t === void 0 && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this; }, toArray: function (e, t) { return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e; }, toJSON: function () { return this.getHex(); } });
ee.NAMES = Ec;
function Ai(e, t, n, r, i, a) { this.a = e, this.b = t, this.c = n, this.normal = r && r.isVector3 ? r : new M, this.vertexNormals = Array.isArray(r) ? r : [], this.color = i && i.isColor ? i : new ee, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = a !== void 0 ? a : 0; }
Object.assign(Ai.prototype, { clone: function () { return new this.constructor().copy(this); }, copy: function (e) { this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex; for (var t = 0, n = e.vertexNormals.length; t < n; t++)
        this.vertexNormals[t] = e.vertexNormals[t].clone(); for (var t = 0, n = e.vertexColors.length; t < n; t++)
        this.vertexColors[t] = e.vertexColors[t].clone(); return this; } });
var sd = 0;
function xe() { Object.defineProperty(this, "id", { value: sd++ }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = xi, this.side = gi, this.flatShading = !1, this.vertexTangents = !1, this.vertexColors = Wl, this.opacity = 1, this.transparent = !1, this.blendSrc = Jl, this.blendDst = $l, this.blendEquation = yr, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = rs, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Zf, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ms, this.stencilZFail = ms, this.stencilZPass = ms, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0; }
xe.prototype = Object.assign(Object.create(dn.prototype), { constructor: xe, isMaterial: !0, onBeforeCompile: function () { }, setValues: function (e) { if (e !== void 0)
        for (var t in e) {
            var n = e[t];
            if (n === void 0) {
                console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                continue;
            }
            if (t === "shading") {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === kl;
                continue;
            }
            var r = this[t];
            if (r === void 0) {
                console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
                continue;
            }
            r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
        } }, toJSON: function (e) { var t = e === void 0 || typeof e == "string"; t && (e = { textures: {}, images: {} }); var n = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, this.combine !== void 0 && (n.combine = this.combine), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== xi && (n.blending = this.blending), this.flatShading === !0 && (n.flatShading = this.flatShading), this.side !== gi && (n.side = this.side), this.vertexColors !== Wl && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (n.morphTargets = !0), this.morphNormals === !0 && (n.morphNormals = !0), this.skinning === !0 && (n.skinning = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData); function r(o) { var s = []; for (var l in o) {
        var c = o[l];
        delete c.metadata, s.push(c);
    } return s; } if (t) {
        var i = r(e.textures), a = r(e.images);
        i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a);
    } return n; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexTangents = e.vertexTangents, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; var t = e.clippingPlanes, n = null; if (t !== null) {
        var r = t.length;
        n = new Array(r);
        for (var i = 0; i !== r; ++i)
            n[i] = t[i].clone();
    } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this; }, dispose: function () { this.dispatchEvent({ type: "dispose" }); } });
Object.defineProperty(xe.prototype, "needsUpdate", { set: function (e) { e === !0 && this.version++; } });
function Xt(e) { xe.call(this), this.type = "MeshBasicMaterial", this.color = new ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ba, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e); }
Xt.prototype = Object.create(xe.prototype);
Xt.prototype.constructor = Xt;
Xt.prototype.isMeshBasicMaterial = !0;
Xt.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this; };
var je = new M;
function _e(e, t, n) { if (Array.isArray(e))
    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Ia, this.updateRange = { offset: 0, count: -1 }, this.version = 0; }
Object.defineProperty(_e.prototype, "needsUpdate", { set: function (e) { e === !0 && this.version++; } });
Object.assign(_e.prototype, { isBufferAttribute: !0, onUploadCallback: function () { }, setUsage: function (e) { return this.usage = e, this; }, copy: function (e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this; }, copyAt: function (e, t, n) { e *= this.itemSize, n *= t.itemSize; for (var r = 0, i = this.itemSize; r < i; r++)
        this.array[e + r] = t.array[n + r]; return this; }, copyArray: function (e) { return this.array.set(e), this; }, copyColorsArray: function (e) { for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
        var a = e[r];
        a === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new ee), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b;
    } return this; }, copyVector2sArray: function (e) { for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
        var a = e[r];
        a === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new U), t[n++] = a.x, t[n++] = a.y;
    } return this; }, copyVector3sArray: function (e) { for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
        var a = e[r];
        a === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new M), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z;
    } return this; }, copyVector4sArray: function (e) { for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
        var a = e[r];
        a === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new Ze), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w;
    } return this; }, applyMatrix3: function (e) { for (var t = 0, n = this.count; t < n; t++)
        je.x = this.getX(t), je.y = this.getY(t), je.z = this.getZ(t), je.applyMatrix3(e), this.setXYZ(t, je.x, je.y, je.z); return this; }, applyMatrix4: function (e) { for (var t = 0, n = this.count; t < n; t++)
        je.x = this.getX(t), je.y = this.getY(t), je.z = this.getZ(t), je.applyMatrix4(e), this.setXYZ(t, je.x, je.y, je.z); return this; }, applyNormalMatrix: function (e) { for (var t = 0, n = this.count; t < n; t++)
        je.x = this.getX(t), je.y = this.getY(t), je.z = this.getZ(t), je.applyNormalMatrix(e), this.setXYZ(t, je.x, je.y, je.z); return this; }, transformDirection: function (e) { for (var t = 0, n = this.count; t < n; t++)
        je.x = this.getX(t), je.y = this.getY(t), je.z = this.getZ(t), je.transformDirection(e), this.setXYZ(t, je.x, je.y, je.z); return this; }, set: function (e, t) { return t === void 0 && (t = 0), this.array.set(e, t), this; }, getX: function (e) { return this.array[e * this.itemSize]; }, setX: function (e, t) { return this.array[e * this.itemSize] = t, this; }, getY: function (e) { return this.array[e * this.itemSize + 1]; }, setY: function (e, t) { return this.array[e * this.itemSize + 1] = t, this; }, getZ: function (e) { return this.array[e * this.itemSize + 2]; }, setZ: function (e, t) { return this.array[e * this.itemSize + 2] = t, this; }, getW: function (e) { return this.array[e * this.itemSize + 3]; }, setW: function (e, t) { return this.array[e * this.itemSize + 3] = t, this; }, setXY: function (e, t, n) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this; }, setXYZ: function (e, t, n, r) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this; }, setXYZW: function (e, t, n, r, i) { return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this; }, onUpload: function (e) { return this.onUploadCallback = e, this; }, clone: function () { return new this.constructor(this.array, this.itemSize).copy(this); }, toJSON: function () { return { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.prototype.slice.call(this.array), normalized: this.normalized }; } });
function Va(e, t, n) { _e.call(this, new Int8Array(e), t, n); }
Va.prototype = Object.create(_e.prototype);
Va.prototype.constructor = Va;
function ka(e, t, n) { _e.call(this, new Uint8Array(e), t, n); }
ka.prototype = Object.create(_e.prototype);
ka.prototype.constructor = ka;
function Wa(e, t, n) { _e.call(this, new Uint8ClampedArray(e), t, n); }
Wa.prototype = Object.create(_e.prototype);
Wa.prototype.constructor = Wa;
function ja(e, t, n) { _e.call(this, new Int16Array(e), t, n); }
ja.prototype = Object.create(_e.prototype);
ja.prototype.constructor = ja;
function Ir(e, t, n) { _e.call(this, new Uint16Array(e), t, n); }
Ir.prototype = Object.create(_e.prototype);
Ir.prototype.constructor = Ir;
function qa(e, t, n) { _e.call(this, new Int32Array(e), t, n); }
qa.prototype = Object.create(_e.prototype);
qa.prototype.constructor = qa;
function Or(e, t, n) { _e.call(this, new Uint32Array(e), t, n); }
Or.prototype = Object.create(_e.prototype);
Or.prototype.constructor = Or;
function $(e, t, n) { _e.call(this, new Float32Array(e), t, n); }
$.prototype = Object.create(_e.prototype);
$.prototype.constructor = $;
function Xa(e, t, n) { _e.call(this, new Float64Array(e), t, n); }
Xa.prototype = Object.create(_e.prototype);
Xa.prototype.constructor = Xa;
function Sc() { this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1; }
Object.assign(Sc.prototype, { computeGroups: function (e) { for (var t, n = [], r = void 0, i = e.faces, a = 0; a < i.length; a++) {
        var o = i[a];
        o.materialIndex !== r && (r = o.materialIndex, t !== void 0 && (t.count = a * 3 - t.start, n.push(t)), t = { start: a * 3, materialIndex: r });
    } t !== void 0 && (t.count = a * 3 - t.start, n.push(t)), this.groups = n; }, fromGeometry: function (e) { var t = e.faces, n = e.vertices, r = e.faceVertexUvs, i = r[0] && r[0].length > 0, a = r[1] && r[1].length > 0, o = e.morphTargets, s = o.length, l; if (s > 0) {
        l = [];
        for (var c = 0; c < s; c++)
            l[c] = { name: o[c].name, data: [] };
        this.morphTargets.position = l;
    } var u = e.morphNormals, h = u.length, f; if (h > 0) {
        f = [];
        for (var c = 0; c < h; c++)
            f[c] = { name: u[c].name, data: [] };
        this.morphTargets.normal = f;
    } var d = e.skinIndices, p = e.skinWeights, g = d.length === n.length, v = p.length === n.length; n.length > 0 && t.length === 0 && console.error("THREE.DirectGeometry: Faceless geometries are not supported."); for (var c = 0; c < t.length; c++) {
        var y = t[c];
        this.vertices.push(n[y.a], n[y.b], n[y.c]);
        var x = y.vertexNormals;
        if (x.length === 3)
            this.normals.push(x[0], x[1], x[2]);
        else {
            var w = y.normal;
            this.normals.push(w, w, w);
        }
        var E = y.vertexColors;
        if (E.length === 3)
            this.colors.push(E[0], E[1], E[2]);
        else {
            var b = y.color;
            this.colors.push(b, b, b);
        }
        if (i === !0) {
            var L = r[0][c];
            L !== void 0 ? this.uvs.push(L[0], L[1], L[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new U, new U, new U));
        }
        if (a === !0) {
            var L = r[1][c];
            L !== void 0 ? this.uvs2.push(L[0], L[1], L[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new U, new U, new U));
        }
        for (var S = 0; S < s; S++) {
            var T = o[S].vertices;
            l[S].data.push(T[y.a], T[y.b], T[y.c]);
        }
        for (var S = 0; S < h; S++) {
            var D = u[S].vertexNormals[c];
            f[S].data.push(D.a, D.b, D.c);
        }
        g && this.skinIndices.push(d[y.a], d[y.b], d[y.c]), v && this.skinWeights.push(p[y.a], p[y.b], p[y.c]);
    } return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this; } });
function Tc(e) { if (e.length === 0)
    return -1 / 0; for (var t = e[0], n = 1, r = e.length; n < r; ++n)
    e[n] > t && (t = e[n]); return t; }
var ld = 1, tn = new Re, Cs = new K, Nr = new M, It = new Kt, Li = new Kt, lt = new M;
function te() { Object.defineProperty(this, "id", { value: ld += 2 }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}; }
te.prototype = Object.assign(Object.create(dn.prototype), { constructor: te, isBufferGeometry: !0, getIndex: function () { return this.index; }, setIndex: function (e) { Array.isArray(e) ? this.index = new (Tc(e) > 65535 ? Or : Ir)(e, 1) : this.index = e; }, getAttribute: function (e) { return this.attributes[e]; }, setAttribute: function (e, t) { return this.attributes[e] = t, this; }, deleteAttribute: function (e) { return delete this.attributes[e], this; }, addGroup: function (e, t, n) { this.groups.push({ start: e, count: t, materialIndex: n !== void 0 ? n : 0 }); }, clearGroups: function () { this.groups = []; }, setDrawRange: function (e, t) { this.drawRange.start = e, this.drawRange.count = t; }, applyMatrix: function (e) { var t = this.attributes.position; t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); var n = this.attributes.normal; if (n !== void 0) {
        var r = new mt().getNormalMatrix(e);
        n.applyNormalMatrix(r), n.needsUpdate = !0;
    } var i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this; }, rotateX: function (e) { return tn.makeRotationX(e), this.applyMatrix(tn), this; }, rotateY: function (e) { return tn.makeRotationY(e), this.applyMatrix(tn), this; }, rotateZ: function (e) { return tn.makeRotationZ(e), this.applyMatrix(tn), this; }, translate: function (e, t, n) { return tn.makeTranslation(e, t, n), this.applyMatrix(tn), this; }, scale: function (e, t, n) { return tn.makeScale(e, t, n), this.applyMatrix(tn), this; }, lookAt: function (e) { return Cs.lookAt(e), Cs.updateMatrix(), this.applyMatrix(Cs.matrix), this; }, center: function () { return this.computeBoundingBox(), this.boundingBox.getCenter(Nr).negate(), this.translate(Nr.x, Nr.y, Nr.z), this; }, setFromObject: function (e) { var t = e.geometry; if (e.isPoints || e.isLine) {
        var n = new $(t.vertices.length * 3, 3), r = new $(t.colors.length * 3, 3);
        if (this.setAttribute("position", n.copyVector3sArray(t.vertices)), this.setAttribute("color", r.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
            var i = new $(t.lineDistances.length, 1);
            this.setAttribute("lineDistance", i.copyArray(t.lineDistances));
        }
        t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone());
    }
    else
        e.isMesh && t && t.isGeometry && this.fromGeometry(t); return this; }, setFromPoints: function (e) { for (var t = [], n = 0, r = e.length; n < r; n++) {
        var i = e[n];
        t.push(i.x, i.y, i.z || 0);
    } return this.setAttribute("position", new $(t, 3)), this; }, updateFromObject: function (e) { var t = e.geometry; if (e.isMesh) {
        var n = t.__directGeometry;
        if (t.elementsNeedUpdate === !0 && (n = void 0, t.elementsNeedUpdate = !1), n === void 0)
            return this.fromGeometry(t);
        n.verticesNeedUpdate = t.verticesNeedUpdate, n.normalsNeedUpdate = t.normalsNeedUpdate, n.colorsNeedUpdate = t.colorsNeedUpdate, n.uvsNeedUpdate = t.uvsNeedUpdate, n.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = n;
    } var r; return t.verticesNeedUpdate === !0 && (r = this.attributes.position, r !== void 0 && (r.copyVector3sArray(t.vertices), r.needsUpdate = !0), t.verticesNeedUpdate = !1), t.normalsNeedUpdate === !0 && (r = this.attributes.normal, r !== void 0 && (r.copyVector3sArray(t.normals), r.needsUpdate = !0), t.normalsNeedUpdate = !1), t.colorsNeedUpdate === !0 && (r = this.attributes.color, r !== void 0 && (r.copyColorsArray(t.colors), r.needsUpdate = !0), t.colorsNeedUpdate = !1), t.uvsNeedUpdate && (r = this.attributes.uv, r !== void 0 && (r.copyVector2sArray(t.uvs), r.needsUpdate = !0), t.uvsNeedUpdate = !1), t.lineDistancesNeedUpdate && (r = this.attributes.lineDistance, r !== void 0 && (r.copyArray(t.lineDistances), r.needsUpdate = !0), t.lineDistancesNeedUpdate = !1), t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this; }, fromGeometry: function (e) { return e.__directGeometry = new Sc().fromGeometry(e), this.fromDirectGeometry(e.__directGeometry); }, fromDirectGeometry: function (e) { var t = new Float32Array(e.vertices.length * 3); if (this.setAttribute("position", new _e(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
        var n = new Float32Array(e.normals.length * 3);
        this.setAttribute("normal", new _e(n, 3).copyVector3sArray(e.normals));
    } if (e.colors.length > 0) {
        var r = new Float32Array(e.colors.length * 3);
        this.setAttribute("color", new _e(r, 3).copyColorsArray(e.colors));
    } if (e.uvs.length > 0) {
        var i = new Float32Array(e.uvs.length * 2);
        this.setAttribute("uv", new _e(i, 2).copyVector2sArray(e.uvs));
    } if (e.uvs2.length > 0) {
        var a = new Float32Array(e.uvs2.length * 2);
        this.setAttribute("uv2", new _e(a, 2).copyVector2sArray(e.uvs2));
    } this.groups = e.groups; for (var o in e.morphTargets) {
        for (var s = [], l = e.morphTargets[o], c = 0, u = l.length; c < u; c++) {
            var h = l[c], f = new $(h.data.length * 3, 3);
            f.name = h.name, s.push(f.copyVector3sArray(h.data));
        }
        this.morphAttributes[o] = s;
    } if (e.skinIndices.length > 0) {
        var d = new $(e.skinIndices.length * 4, 4);
        this.setAttribute("skinIndex", d.copyVector4sArray(e.skinIndices));
    } if (e.skinWeights.length > 0) {
        var p = new $(e.skinWeights.length * 4, 4);
        this.setAttribute("skinWeight", p.copyVector4sArray(e.skinWeights));
    } return e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this; }, computeBoundingBox: function () { this.boundingBox === null && (this.boundingBox = new Kt); var e = this.attributes.position, t = this.morphAttributes.position; if (e !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(e), t)
            for (var n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                It.setFromBufferAttribute(i), this.morphTargetsRelative ? (lt.addVectors(this.boundingBox.min, It.min), this.boundingBox.expandByPoint(lt), lt.addVectors(this.boundingBox.max, It.max), this.boundingBox.expandByPoint(lt)) : (this.boundingBox.expandByPoint(It.min), this.boundingBox.expandByPoint(It.max));
            }
    }
    else
        this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this); }, computeBoundingSphere: function () { this.boundingSphere === null && (this.boundingSphere = new Pn); var e = this.attributes.position, t = this.morphAttributes.position; if (e) {
        var n = this.boundingSphere.center;
        if (It.setFromBufferAttribute(e), t)
            for (var r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                Li.setFromBufferAttribute(a), this.morphTargetsRelative ? (lt.addVectors(It.min, Li.min), It.expandByPoint(lt), lt.addVectors(It.max, Li.max), It.expandByPoint(lt)) : (It.expandByPoint(Li.min), It.expandByPoint(Li.max));
            }
        It.getCenter(n);
        for (var o = 0, r = 0, i = e.count; r < i; r++)
            lt.fromBufferAttribute(e, r), o = Math.max(o, n.distanceToSquared(lt));
        if (t)
            for (var r = 0, i = t.length; r < i; r++)
                for (var a = t[r], s = this.morphTargetsRelative, l = 0, c = a.count; l < c; l++)
                    lt.fromBufferAttribute(a, l), s && (Nr.fromBufferAttribute(e, l), lt.add(Nr)), o = Math.max(o, n.distanceToSquared(lt));
        this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    } }, computeFaceNormals: function () { }, computeVertexNormals: function () { var e = this.index, t = this.attributes; if (t.position) {
        var n = t.position.array;
        if (t.normal === void 0)
            this.setAttribute("normal", new _e(new Float32Array(n.length), 3));
        else
            for (var r = t.normal.array, i = 0, a = r.length; i < a; i++)
                r[i] = 0;
        var o = t.normal.array, s, l, c, u = new M, h = new M, f = new M, d = new M, p = new M;
        if (e)
            for (var g = e.array, i = 0, a = e.count; i < a; i += 3)
                s = g[i + 0] * 3, l = g[i + 1] * 3, c = g[i + 2] * 3, u.fromArray(n, s), h.fromArray(n, l), f.fromArray(n, c), d.subVectors(f, h), p.subVectors(u, h), d.cross(p), o[s] += d.x, o[s + 1] += d.y, o[s + 2] += d.z, o[l] += d.x, o[l + 1] += d.y, o[l + 2] += d.z, o[c] += d.x, o[c + 1] += d.y, o[c + 2] += d.z;
        else
            for (var i = 0, a = n.length; i < a; i += 9)
                u.fromArray(n, i), h.fromArray(n, i + 3), f.fromArray(n, i + 6), d.subVectors(f, h), p.subVectors(u, h), d.cross(p), o[i] = d.x, o[i + 1] = d.y, o[i + 2] = d.z, o[i + 3] = d.x, o[i + 4] = d.y, o[i + 5] = d.z, o[i + 6] = d.x, o[i + 7] = d.y, o[i + 8] = d.z;
        this.normalizeNormals(), t.normal.needsUpdate = !0;
    } }, merge: function (e, t) { if (!(e && e.isBufferGeometry)) {
        console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
        return;
    } t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.")); var n = this.attributes; for (var r in n)
        if (e.attributes[r] !== void 0)
            for (var i = n[r], a = i.array, o = e.attributes[r], s = o.array, l = o.itemSize * t, c = Math.min(s.length, a.length - l), u = 0, h = l; u < c; u++, h++)
                a[h] = s[u]; return this; }, normalizeNormals: function () { for (var e = this.attributes.normal, t = 0, n = e.count; t < n; t++)
        lt.x = e.getX(t), lt.y = e.getY(t), lt.z = e.getZ(t), lt.normalize(), e.setXYZ(t, lt.x, lt.y, lt.z); }, toNonIndexed: function () { function e(g, v) { for (var y = g.array, x = g.itemSize, w = new y.constructor(v.length * x), E = 0, b = 0, L = 0, S = v.length; L < S; L++) {
        E = v[L] * x;
        for (var T = 0; T < x; T++)
            w[b++] = y[E++];
    } return new _e(w, x); } if (this.index === null)
        return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this; var t = new te, n = this.index.array, r = this.attributes; for (var i in r) {
        var a = r[i], o = e(a, n);
        t.setAttribute(i, o);
    } var s = this.morphAttributes; for (i in s) {
        for (var l = [], c = s[i], u = 0, h = c.length; u < h; u++) {
            var a = c[u], o = e(a, n);
            l.push(o);
        }
        t.morphAttributes[i] = l;
    } t.morphTargetsRelative = this.morphTargetsRelative; for (var f = this.groups, u = 0, d = f.length; u < d; u++) {
        var p = f[u];
        t.addGroup(p.start, p.count, p.materialIndex);
    } return t; }, toJSON: function () { var e = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
        var t = this.parameters;
        for (var n in t)
            t[n] !== void 0 && (e[n] = t[n]);
        return e;
    } e.data = { attributes: {} }; var r = this.index; r !== null && (e.data.index = { type: r.array.constructor.name, array: Array.prototype.slice.call(r.array) }); var i = this.attributes; for (var n in i) {
        var a = i[n], o = a.toJSON();
        a.name !== "" && (o.name = a.name), e.data.attributes[n] = o;
    } var s = {}, l = !1; for (var n in this.morphAttributes) {
        for (var c = this.morphAttributes[n], u = [], h = 0, f = c.length; h < f; h++) {
            var a = c[h], o = a.toJSON();
            a.name !== "" && (o.name = a.name), u.push(o);
        }
        u.length > 0 && (s[n] = u, l = !0);
    } l && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative); var d = this.groups; d.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(d))); var p = this.boundingSphere; return p !== null && (e.data.boundingSphere = { center: p.center.toArray(), radius: p.radius }), e; }, clone: function () { return new te().copy(this); }, copy: function (e) { var t, n, r; this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name; var i = e.index; i !== null && this.setIndex(i.clone()); var a = e.attributes; for (t in a) {
        var o = a[t];
        this.setAttribute(t, o.clone());
    } var s = e.morphAttributes; for (t in s) {
        var l = [], c = s[t];
        for (n = 0, r = c.length; n < r; n++)
            l.push(c[n].clone());
        this.morphAttributes[t] = l;
    } this.morphTargetsRelative = e.morphTargetsRelative; var u = e.groups; for (n = 0, r = u.length; n < r; n++) {
        var h = u[n];
        this.addGroup(h.start, h.count, h.materialIndex);
    } var f = e.boundingBox; f !== null && (this.boundingBox = f.clone()); var d = e.boundingSphere; return d !== null && (this.boundingSphere = d.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this; }, dispose: function () { this.dispatchEvent({ type: "dispose" }); } });
var Ac = new Re, $n = new Cr, Ps = new Pn, Qn = new M, Kn = new M, er = new M, Ds = new M, Is = new M, Os = new M, Ya = new M, Za = new M, Ja = new M, Fr = new U, Br = new U, Ur = new U, Ri = new M, $a = new M;
function et(e, t) { K.call(this), this.type = "Mesh", this.geometry = e !== void 0 ? e : new te, this.material = t !== void 0 ? t : new Xt({ color: Math.random() * 16777215 }), this.updateMorphTargets(); }
et.prototype = Object.assign(Object.create(K.prototype), { constructor: et, isMesh: !0, copy: function (e) { return K.prototype.copy.call(this, e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this; }, updateMorphTargets: function () { var e = this.geometry, t, n, r; if (e.isBufferGeometry) {
        var i = e.morphAttributes, a = Object.keys(i);
        if (a.length > 0) {
            var o = i[a[0]];
            if (o !== void 0)
                for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = o.length; t < n; t++)
                    r = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
        }
    }
    else {
        var s = e.morphTargets;
        s !== void 0 && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    } }, raycast: function (e, t) { var n = this.geometry, r = this.material, i = this.matrixWorld; if (r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ps.copy(n.boundingSphere), Ps.applyMatrix4(i), e.ray.intersectsSphere(Ps) !== !1 && (Ac.getInverse(i), $n.copy(e.ray).applyMatrix4(Ac), !(n.boundingBox !== null && $n.intersectsBox(n.boundingBox) === !1)))) {
        var a;
        if (n.isBufferGeometry) {
            var o, s, l, c = n.index, u = n.attributes.position, h = n.morphAttributes.position, f = n.morphTargetsRelative, d = n.attributes.uv, p = n.attributes.uv2, g = n.groups, v = n.drawRange, y, x, w, E, b, L, S, T;
            if (c !== null)
                if (Array.isArray(r))
                    for (y = 0, w = g.length; y < w; y++)
                        for (b = g[y], L = r[b.materialIndex], S = Math.max(b.start, v.start), T = Math.min(b.start + b.count, v.start + v.count), x = S, E = T; x < E; x += 3)
                            o = c.getX(x), s = c.getX(x + 1), l = c.getX(x + 2), a = Qa(this, L, e, $n, u, h, f, d, p, o, s, l), a && (a.faceIndex = Math.floor(x / 3), a.face.materialIndex = b.materialIndex, t.push(a));
                else
                    for (S = Math.max(0, v.start), T = Math.min(c.count, v.start + v.count), y = S, w = T; y < w; y += 3)
                        o = c.getX(y), s = c.getX(y + 1), l = c.getX(y + 2), a = Qa(this, r, e, $n, u, h, f, d, p, o, s, l), a && (a.faceIndex = Math.floor(y / 3), t.push(a));
            else if (u !== void 0)
                if (Array.isArray(r))
                    for (y = 0, w = g.length; y < w; y++)
                        for (b = g[y], L = r[b.materialIndex], S = Math.max(b.start, v.start), T = Math.min(b.start + b.count, v.start + v.count), x = S, E = T; x < E; x += 3)
                            o = x, s = x + 1, l = x + 2, a = Qa(this, L, e, $n, u, h, f, d, p, o, s, l), a && (a.faceIndex = Math.floor(x / 3), a.face.materialIndex = b.materialIndex, t.push(a));
                else
                    for (S = Math.max(0, v.start), T = Math.min(u.count, v.start + v.count), y = S, w = T; y < w; y += 3)
                        o = y, s = y + 1, l = y + 2, a = Qa(this, r, e, $n, u, h, f, d, p, o, s, l), a && (a.faceIndex = Math.floor(y / 3), t.push(a));
        }
        else if (n.isGeometry) {
            var D, I, O, B = Array.isArray(r), z = n.vertices, N = n.faces, F, V = n.faceVertexUvs[0];
            V.length > 0 && (F = V);
            for (var Y = 0, ie = N.length; Y < ie; Y++) {
                var q = N[Y], Z = B ? r[q.materialIndex] : r;
                if (Z !== void 0 && (D = z[q.a], I = z[q.b], O = z[q.c], a = Lc(this, Z, e, $n, D, I, O, Ri), a)) {
                    if (F && F[Y]) {
                        var ae = F[Y];
                        Fr.copy(ae[0]), Br.copy(ae[1]), Ur.copy(ae[2]), a.uv = pt.getUV(Ri, D, I, O, Fr, Br, Ur, new U);
                    }
                    a.face = q, a.faceIndex = Y, t.push(a);
                }
            }
        }
    } }, clone: function () { return new this.constructor(this.geometry, this.material).copy(this); } });
function Lc(e, t, n, r, i, a, o, s) { var l; if (t.side === ht ? l = r.intersectTriangle(o, a, i, !0, s) : l = r.intersectTriangle(i, a, o, t.side !== wa, s), l === null)
    return null; $a.copy(s), $a.applyMatrix4(e.matrixWorld); var c = n.ray.origin.distanceTo($a); return c < n.near || c > n.far ? null : { distance: c, point: $a.clone(), object: e }; }
function Qa(e, t, n, r, i, a, o, s, l, c, u, h) { Qn.fromBufferAttribute(i, c), Kn.fromBufferAttribute(i, u), er.fromBufferAttribute(i, h); var f = e.morphTargetInfluences; if (t.morphTargets && a && f) {
    Ya.set(0, 0, 0), Za.set(0, 0, 0), Ja.set(0, 0, 0);
    for (var d = 0, p = a.length; d < p; d++) {
        var g = f[d], v = a[d];
        g !== 0 && (Ds.fromBufferAttribute(v, c), Is.fromBufferAttribute(v, u), Os.fromBufferAttribute(v, h), o ? (Ya.addScaledVector(Ds, g), Za.addScaledVector(Is, g), Ja.addScaledVector(Os, g)) : (Ya.addScaledVector(Ds.sub(Qn), g), Za.addScaledVector(Is.sub(Kn), g), Ja.addScaledVector(Os.sub(er), g)));
    }
    Qn.add(Ya), Kn.add(Za), er.add(Ja);
} var y = Lc(e, t, n, r, Qn, Kn, er, Ri); if (y) {
    s && (Fr.fromBufferAttribute(s, c), Br.fromBufferAttribute(s, u), Ur.fromBufferAttribute(s, h), y.uv = pt.getUV(Ri, Qn, Kn, er, Fr, Br, Ur, new U)), l && (Fr.fromBufferAttribute(l, c), Br.fromBufferAttribute(l, u), Ur.fromBufferAttribute(l, h), y.uv2 = pt.getUV(Ri, Qn, Kn, er, Fr, Br, Ur, new U));
    var x = new Ai(c, u, h);
    pt.getNormal(Qn, Kn, er, x.normal), y.face = x;
} return y; }
var cd = 0, nn = new Re, Ns = new K, Ka = new M;
function we() { Object.defineProperty(this, "id", { value: cd += 2 }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1; }
we.prototype = Object.assign(Object.create(dn.prototype), { constructor: we, isGeometry: !0, applyMatrix: function (e) { for (var t = new mt().getNormalMatrix(e), n = 0, r = this.vertices.length; n < r; n++) {
        var i = this.vertices[n];
        i.applyMatrix4(e);
    } for (var n = 0, r = this.faces.length; n < r; n++) {
        var a = this.faces[n];
        a.normal.applyMatrix3(t).normalize();
        for (var o = 0, s = a.vertexNormals.length; o < s; o++)
            a.vertexNormals[o].applyMatrix3(t).normalize();
    } return this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this; }, rotateX: function (e) { return nn.makeRotationX(e), this.applyMatrix(nn), this; }, rotateY: function (e) { return nn.makeRotationY(e), this.applyMatrix(nn), this; }, rotateZ: function (e) { return nn.makeRotationZ(e), this.applyMatrix(nn), this; }, translate: function (e, t, n) { return nn.makeTranslation(e, t, n), this.applyMatrix(nn), this; }, scale: function (e, t, n) { return nn.makeScale(e, t, n), this.applyMatrix(nn), this; }, lookAt: function (e) { return Ns.lookAt(e), Ns.updateMatrix(), this.applyMatrix(Ns.matrix), this; }, fromBufferGeometry: function (e) { var t = this, n = e.index !== null ? e.index.array : void 0, r = e.attributes; if (r.position === void 0)
        return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this; var i = r.position.array, a = r.normal !== void 0 ? r.normal.array : void 0, o = r.color !== void 0 ? r.color.array : void 0, s = r.uv !== void 0 ? r.uv.array : void 0, l = r.uv2 !== void 0 ? r.uv2.array : void 0; l !== void 0 && (this.faceVertexUvs[1] = []); for (var c = 0; c < i.length; c += 3)
        t.vertices.push(new M().fromArray(i, c)), o !== void 0 && t.colors.push(new ee().fromArray(o, c)); function u(y, x, w, E) { var b = o === void 0 ? [] : [t.colors[y].clone(), t.colors[x].clone(), t.colors[w].clone()], L = a === void 0 ? [] : [new M().fromArray(a, y * 3), new M().fromArray(a, x * 3), new M().fromArray(a, w * 3)], S = new Ai(y, x, w, L, b, E); t.faces.push(S), s !== void 0 && t.faceVertexUvs[0].push([new U().fromArray(s, y * 2), new U().fromArray(s, x * 2), new U().fromArray(s, w * 2)]), l !== void 0 && t.faceVertexUvs[1].push([new U().fromArray(l, y * 2), new U().fromArray(l, x * 2), new U().fromArray(l, w * 2)]); } var h = e.groups; if (h.length > 0)
        for (var c = 0; c < h.length; c++)
            for (var f = h[c], d = f.start, p = f.count, g = d, v = d + p; g < v; g += 3)
                n !== void 0 ? u(n[g], n[g + 1], n[g + 2], f.materialIndex) : u(g, g + 1, g + 2, f.materialIndex);
    else if (n !== void 0)
        for (var c = 0; c < n.length; c += 3)
            u(n[c], n[c + 1], n[c + 2]);
    else
        for (var c = 0; c < i.length / 3; c += 3)
            u(c, c + 1, c + 2); return this.computeFaceNormals(), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this; }, center: function () { return this.computeBoundingBox(), this.boundingBox.getCenter(Ka).negate(), this.translate(Ka.x, Ka.y, Ka.z), this; }, normalize: function () { this.computeBoundingSphere(); var e = this.boundingSphere.center, t = this.boundingSphere.radius, n = t === 0 ? 1 : 1 / t, r = new Re; return r.set(n, 0, 0, -n * e.x, 0, n, 0, -n * e.y, 0, 0, n, -n * e.z, 0, 0, 0, 1), this.applyMatrix(r), this; }, computeFaceNormals: function () { for (var e = new M, t = new M, n = 0, r = this.faces.length; n < r; n++) {
        var i = this.faces[n], a = this.vertices[i.a], o = this.vertices[i.b], s = this.vertices[i.c];
        e.subVectors(s, o), t.subVectors(a, o), e.cross(t), e.normalize(), i.normal.copy(e);
    } }, computeVertexNormals: function (e) { e === void 0 && (e = !0); var t, n, r, i, a, o; for (o = new Array(this.vertices.length), t = 0, n = this.vertices.length; t < n; t++)
        o[t] = new M; if (e) {
        var s, l, c, u = new M, h = new M;
        for (r = 0, i = this.faces.length; r < i; r++)
            a = this.faces[r], s = this.vertices[a.a], l = this.vertices[a.b], c = this.vertices[a.c], u.subVectors(c, l), h.subVectors(s, l), u.cross(h), o[a.a].add(u), o[a.b].add(u), o[a.c].add(u);
    }
    else
        for (this.computeFaceNormals(), r = 0, i = this.faces.length; r < i; r++)
            a = this.faces[r], o[a.a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal); for (t = 0, n = this.vertices.length; t < n; t++)
        o[t].normalize(); for (r = 0, i = this.faces.length; r < i; r++) {
        a = this.faces[r];
        var f = a.vertexNormals;
        f.length === 3 ? (f[0].copy(o[a.a]), f[1].copy(o[a.b]), f[2].copy(o[a.c])) : (f[0] = o[a.a].clone(), f[1] = o[a.b].clone(), f[2] = o[a.c].clone());
    } this.faces.length > 0 && (this.normalsNeedUpdate = !0); }, computeFlatVertexNormals: function () { var e, t, n; for (this.computeFaceNormals(), e = 0, t = this.faces.length; e < t; e++) {
        n = this.faces[e];
        var r = n.vertexNormals;
        r.length === 3 ? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal)) : (r[0] = n.normal.clone(), r[1] = n.normal.clone(), r[2] = n.normal.clone());
    } this.faces.length > 0 && (this.normalsNeedUpdate = !0); }, computeMorphNormals: function () { var e, t, n, r, i; for (n = 0, r = this.faces.length; n < r; n++)
        for (i = this.faces[n], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), e = 0, t = i.vertexNormals.length; e < t; e++)
            i.__originalVertexNormals[e] ? i.__originalVertexNormals[e].copy(i.vertexNormals[e]) : i.__originalVertexNormals[e] = i.vertexNormals[e].clone(); var a = new we; for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
        if (!this.morphNormals[e]) {
            this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
            var o = this.morphNormals[e].faceNormals, s = this.morphNormals[e].vertexNormals, c, u;
            for (n = 0, r = this.faces.length; n < r; n++)
                c = new M, u = { a: new M, b: new M, c: new M }, o.push(c), s.push(u);
        }
        var l = this.morphNormals[e];
        a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
        var c, u;
        for (n = 0, r = this.faces.length; n < r; n++)
            i = this.faces[n], c = l.faceNormals[n], u = l.vertexNormals[n], c.copy(i.normal), u.a.copy(i.vertexNormals[0]), u.b.copy(i.vertexNormals[1]), u.c.copy(i.vertexNormals[2]);
    } for (n = 0, r = this.faces.length; n < r; n++)
        i = this.faces[n], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals; }, computeBoundingBox: function () { this.boundingBox === null && (this.boundingBox = new Kt), this.boundingBox.setFromPoints(this.vertices); }, computeBoundingSphere: function () { this.boundingSphere === null && (this.boundingSphere = new Pn), this.boundingSphere.setFromPoints(this.vertices); }, merge: function (e, t, n) { if (!(e && e.isGeometry)) {
        console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
        return;
    } var r, i = this.vertices.length, a = this.vertices, o = e.vertices, s = this.faces, l = e.faces, c = this.colors, u = e.colors; n === void 0 && (n = 0), t !== void 0 && (r = new mt().getNormalMatrix(t)); for (var h = 0, f = o.length; h < f; h++) {
        var d = o[h], p = d.clone();
        t !== void 0 && p.applyMatrix4(t), a.push(p);
    } for (var h = 0, f = u.length; h < f; h++)
        c.push(u[h].clone()); for (h = 0, f = l.length; h < f; h++) {
        var g = l[h], v, y, x, w = g.vertexNormals, E = g.vertexColors;
        v = new Ai(g.a + i, g.b + i, g.c + i), v.normal.copy(g.normal), r !== void 0 && v.normal.applyMatrix3(r).normalize();
        for (var b = 0, L = w.length; b < L; b++)
            y = w[b].clone(), r !== void 0 && y.applyMatrix3(r).normalize(), v.vertexNormals.push(y);
        v.color.copy(g.color);
        for (var b = 0, L = E.length; b < L; b++)
            x = E[b], v.vertexColors.push(x.clone());
        v.materialIndex = g.materialIndex + n, s.push(v);
    } for (var h = 0, f = e.faceVertexUvs.length; h < f; h++) {
        var S = e.faceVertexUvs[h];
        this.faceVertexUvs[h] === void 0 && (this.faceVertexUvs[h] = []);
        for (var b = 0, L = S.length; b < L; b++) {
            for (var T = S[b], D = [], I = 0, O = T.length; I < O; I++)
                D.push(T[I].clone());
            this.faceVertexUvs[h].push(D);
        }
    } }, mergeMesh: function (e) { if (!(e && e.isMesh)) {
        console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e);
        return;
    } e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix); }, mergeVertices: function () { var e = {}, t = [], n = [], r, i, a = 4, o = Math.pow(10, a), s, l, c, u, h, f; for (s = 0, l = this.vertices.length; s < l; s++)
        r = this.vertices[s], i = Math.round(r.x * o) + "_" + Math.round(r.y * o) + "_" + Math.round(r.z * o), e[i] === void 0 ? (e[i] = s, t.push(this.vertices[s]), n[s] = t.length - 1) : n[s] = n[e[i]]; var d = []; for (s = 0, l = this.faces.length; s < l; s++) {
        c = this.faces[s], c.a = n[c.a], c.b = n[c.b], c.c = n[c.c], u = [c.a, c.b, c.c];
        for (var p = 0; p < 3; p++)
            if (u[p] === u[(p + 1) % 3]) {
                d.push(s);
                break;
            }
    } for (s = d.length - 1; s >= 0; s--) {
        var g = d[s];
        for (this.faces.splice(g, 1), h = 0, f = this.faceVertexUvs.length; h < f; h++)
            this.faceVertexUvs[h].splice(g, 1);
    } var v = this.vertices.length - t.length; return this.vertices = t, v; }, setFromPoints: function (e) { this.vertices = []; for (var t = 0, n = e.length; t < n; t++) {
        var r = e[t];
        this.vertices.push(new M(r.x, r.y, r.z || 0));
    } return this; }, sortFacesByMaterialIndex: function () { for (var e = this.faces, t = e.length, n = 0; n < t; n++)
        e[n]._id = n; function r(c, u) { return c.materialIndex - u.materialIndex; } e.sort(r); var i = this.faceVertexUvs[0], a = this.faceVertexUvs[1], o, s; i && i.length === t && (o = []), a && a.length === t && (s = []); for (var n = 0; n < t; n++) {
        var l = e[n]._id;
        o && o.push(i[l]), s && s.push(a[l]);
    } o && (this.faceVertexUvs[0] = o), s && (this.faceVertexUvs[1] = s); }, toJSON: function () { var e = { metadata: { version: 4.5, type: "Geometry", generator: "Geometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), this.parameters !== void 0) {
        var t = this.parameters;
        for (var n in t)
            t[n] !== void 0 && (e[n] = t[n]);
        return e;
    } for (var r = [], i = 0; i < this.vertices.length; i++) {
        var a = this.vertices[i];
        r.push(a.x, a.y, a.z);
    } for (var o = [], s = [], l = {}, c = [], u = {}, h = [], f = {}, i = 0; i < this.faces.length; i++) {
        var d = this.faces[i], p = !0, g = !1, v = this.faceVertexUvs[0][i] !== void 0, y = d.normal.length() > 0, x = d.vertexNormals.length > 0, w = d.color.r !== 1 || d.color.g !== 1 || d.color.b !== 1, E = d.vertexColors.length > 0, b = 0;
        if (b = D(b, 0, 0), b = D(b, 1, p), b = D(b, 2, g), b = D(b, 3, v), b = D(b, 4, y), b = D(b, 5, x), b = D(b, 6, w), b = D(b, 7, E), o.push(b), o.push(d.a, d.b, d.c), o.push(d.materialIndex), v) {
            var L = this.faceVertexUvs[0][i];
            o.push(B(L[0]), B(L[1]), B(L[2]));
        }
        if (y && o.push(I(d.normal)), x) {
            var S = d.vertexNormals;
            o.push(I(S[0]), I(S[1]), I(S[2]));
        }
        if (w && o.push(O(d.color)), E) {
            var T = d.vertexColors;
            o.push(O(T[0]), O(T[1]), O(T[2]));
        }
    } function D(z, N, F) { return F ? z | 1 << N : z & ~(1 << N); } function I(z) { var N = z.x.toString() + z.y.toString() + z.z.toString(); return l[N] !== void 0 || (l[N] = s.length / 3, s.push(z.x, z.y, z.z)), l[N]; } function O(z) { var N = z.r.toString() + z.g.toString() + z.b.toString(); return u[N] !== void 0 || (u[N] = c.length, c.push(z.getHex())), u[N]; } function B(z) { var N = z.x.toString() + z.y.toString(); return f[N] !== void 0 || (f[N] = h.length / 2, h.push(z.x, z.y)), f[N]; } return e.data = {}, e.data.vertices = r, e.data.normals = s, c.length > 0 && (e.data.colors = c), h.length > 0 && (e.data.uvs = [h]), e.data.faces = o, e; }, clone: function () { return new we().copy(this); }, copy: function (e) { var t, n, r, i, a, o; this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name; var s = e.vertices; for (t = 0, n = s.length; t < n; t++)
        this.vertices.push(s[t].clone()); var l = e.colors; for (t = 0, n = l.length; t < n; t++)
        this.colors.push(l[t].clone()); var c = e.faces; for (t = 0, n = c.length; t < n; t++)
        this.faces.push(c[t].clone()); for (t = 0, n = e.faceVertexUvs.length; t < n; t++) {
        var u = e.faceVertexUvs[t];
        for (this.faceVertexUvs[t] === void 0 && (this.faceVertexUvs[t] = []), r = 0, i = u.length; r < i; r++) {
            var h = u[r], f = [];
            for (a = 0, o = h.length; a < o; a++) {
                var d = h[a];
                f.push(d.clone());
            }
            this.faceVertexUvs[t].push(f);
        }
    } var p = e.morphTargets; for (t = 0, n = p.length; t < n; t++) {
        var g = {};
        if (g.name = p[t].name, p[t].vertices !== void 0)
            for (g.vertices = [], r = 0, i = p[t].vertices.length; r < i; r++)
                g.vertices.push(p[t].vertices[r].clone());
        if (p[t].normals !== void 0)
            for (g.normals = [], r = 0, i = p[t].normals.length; r < i; r++)
                g.normals.push(p[t].normals[r].clone());
        this.morphTargets.push(g);
    } var v = e.morphNormals; for (t = 0, n = v.length; t < n; t++) {
        var y = {};
        if (v[t].vertexNormals !== void 0)
            for (y.vertexNormals = [], r = 0, i = v[t].vertexNormals.length; r < i; r++) {
                var x = v[t].vertexNormals[r], w = {};
                w.a = x.a.clone(), w.b = x.b.clone(), w.c = x.c.clone(), y.vertexNormals.push(w);
            }
        if (v[t].faceNormals !== void 0)
            for (y.faceNormals = [], r = 0, i = v[t].faceNormals.length; r < i; r++)
                y.faceNormals.push(v[t].faceNormals[r].clone());
        this.morphNormals.push(y);
    } var E = e.skinWeights; for (t = 0, n = E.length; t < n; t++)
        this.skinWeights.push(E[t].clone()); var b = e.skinIndices; for (t = 0, n = b.length; t < n; t++)
        this.skinIndices.push(b[t].clone()); var L = e.lineDistances; for (t = 0, n = L.length; t < n; t++)
        this.lineDistances.push(L[t]); var S = e.boundingBox; S !== null && (this.boundingBox = S.clone()); var T = e.boundingSphere; return T !== null && (this.boundingSphere = T.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this; }, dispose: function () { this.dispatchEvent({ type: "dispose" }); } });
var Rc = class extends we {
    constructor(t, n, r, i, a, o) { super(); this.type = "BoxGeometry", this.parameters = { width: t, height: n, depth: r, widthSegments: i, heightSegments: a, depthSegments: o }, this.fromBufferGeometry(new Ci(t, n, r, i, a, o)), this.mergeVertices(); }
}, Ci = class extends te {
    constructor(t, n, r, i, a, o) { super(); this.type = "BoxBufferGeometry", this.parameters = { width: t, height: n, depth: r, widthSegments: i, heightSegments: a, depthSegments: o }; var s = this; t = t || 1, n = n || 1, r = r || 1, i = Math.floor(i) || 1, a = Math.floor(a) || 1, o = Math.floor(o) || 1; var l = [], c = [], u = [], h = [], f = 0, d = 0; p("z", "y", "x", -1, -1, r, n, t, o, a, 0), p("z", "y", "x", 1, -1, r, n, -t, o, a, 1), p("x", "z", "y", 1, 1, t, r, n, i, o, 2), p("x", "z", "y", 1, -1, t, r, -n, i, o, 3), p("x", "y", "z", 1, -1, t, n, r, i, a, 4), p("x", "y", "z", -1, -1, t, n, -r, i, a, 5), this.setIndex(l), this.setAttribute("position", new $(c, 3)), this.setAttribute("normal", new $(u, 3)), this.setAttribute("uv", new $(h, 2)); function p(g, v, y, x, w, E, b, L, S, T, D) { var I = E / S, O = b / T, B = E / 2, z = b / 2, N = L / 2, F = S + 1, V = T + 1, Y = 0, ie = 0, q, Z, ae = new M; for (Z = 0; Z < V; Z++) {
        var Fe = Z * O - z;
        for (q = 0; q < F; q++) {
            var Be = q * I - B;
            ae[g] = Be * x, ae[v] = Fe * w, ae[y] = N, c.push(ae.x, ae.y, ae.z), ae[g] = 0, ae[v] = 0, ae[y] = L > 0 ? 1 : -1, u.push(ae.x, ae.y, ae.z), h.push(q / S), h.push(1 - Z / T), Y += 1;
        }
    } for (Z = 0; Z < T; Z++)
        for (q = 0; q < S; q++) {
            var Ne = f + q + F * Z, Se = f + q + F * (Z + 1), H = f + (q + 1) + F * (Z + 1), We = f + (q + 1) + F * Z;
            l.push(Ne, Se, We), l.push(Se, H, We), ie += 6;
        } s.addGroup(d, ie, D), d += ie, f += Y; } }
};
function tr(e) { var t = {}; for (var n in e) {
    t[n] = {};
    for (var r in e[n]) {
        var i = e[n][r];
        i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i;
    }
} return t; }
function gt(e) { for (var t = {}, n = 0; n < e.length; n++) {
    var r = tr(e[n]);
    for (var i in r)
        t[i] = r[i];
} return t; }
var Ny = { clone: tr, merge: gt }, ud = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, hd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
function At(e) { xe.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = ud, this.fragmentShader = hd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e)); }
At.prototype = Object.create(xe.prototype);
At.prototype.constructor = At;
At.prototype.isShaderMaterial = !0;
At.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = tr(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this; };
At.prototype.toJSON = function (e) { var t = xe.prototype.toJSON.call(this, e); t.uniforms = {}; for (var n in this.uniforms) {
    var r = this.uniforms[n], i = r.value;
    i && i.isTexture ? t.uniforms[n] = { type: "t", value: i.toJSON(e).uuid } : i && i.isColor ? t.uniforms[n] = { type: "c", value: i.getHex() } : i && i.isVector2 ? t.uniforms[n] = { type: "v2", value: i.toArray() } : i && i.isVector3 ? t.uniforms[n] = { type: "v3", value: i.toArray() } : i && i.isVector4 ? t.uniforms[n] = { type: "v4", value: i.toArray() } : i && i.isMatrix3 ? t.uniforms[n] = { type: "m3", value: i.toArray() } : i && i.isMatrix4 ? t.uniforms[n] = { type: "m4", value: i.toArray() } : t.uniforms[n] = { value: i };
} Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader; var a = {}; for (var o in this.extensions)
    this.extensions[o] === !0 && (a[o] = !0); return Object.keys(a).length > 0 && (t.extensions = a), t; };
function xn() { K.call(this), this.type = "Camera", this.matrixWorldInverse = new Re, this.projectionMatrix = new Re, this.projectionMatrixInverse = new Re; }
xn.prototype = Object.assign(Object.create(K.prototype), { constructor: xn, isCamera: !0, copy: function (e, t) { return K.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this; }, getWorldDirection: function (e) { e === void 0 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new M), this.updateMatrixWorld(!0); var t = this.matrixWorld.elements; return e.set(-t[8], -t[9], -t[10]).normalize(); }, updateMatrixWorld: function (e) { K.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld); }, clone: function () { return new this.constructor().copy(this); } });
function ct(e, t, n, r) { xn.call(this), this.type = "PerspectiveCamera", this.fov = e !== void 0 ? e : 50, this.zoom = 1, this.near = n !== void 0 ? n : .1, this.far = r !== void 0 ? r : 2e3, this.focus = 10, this.aspect = t !== void 0 ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix(); }
ct.prototype = Object.assign(Object.create(xn.prototype), { constructor: ct, isPerspectiveCamera: !0, copy: function (e, t) { return xn.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this; }, setFocalLength: function (e) { var t = .5 * this.getFilmHeight() / e; this.fov = Ae.RAD2DEG * 2 * Math.atan(t), this.updateProjectionMatrix(); }, getFocalLength: function () { var e = Math.tan(Ae.DEG2RAD * .5 * this.fov); return .5 * this.getFilmHeight() / e; }, getEffectiveFOV: function () { return Ae.RAD2DEG * 2 * Math.atan(Math.tan(Ae.DEG2RAD * .5 * this.fov) / this.zoom); }, getFilmWidth: function () { return this.filmGauge * Math.min(this.aspect, 1); }, getFilmHeight: function () { return this.filmGauge / Math.max(this.aspect, 1); }, setViewOffset: function (e, t, n, r, i, a) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix(); }, clearViewOffset: function () { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix(); }, updateProjectionMatrix: function () { var e = this.near, t = e * Math.tan(Ae.DEG2RAD * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view; if (this.view !== null && this.view.enabled) {
        var o = a.fullWidth, s = a.fullHeight;
        i += a.offsetX * r / o, t -= a.offsetY * n / s, r *= a.width / o, n *= a.height / s;
    } var l = this.filmOffset; l !== 0 && (i += e * l / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix); }, toJSON: function (e) { var t = K.prototype.toJSON.call(this, e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t; } });
var zr = 90, Gr = 1;
function Pi(e, t, n, r) { K.call(this), this.type = "CubeCamera"; var i = new ct(zr, Gr, e, t); i.up.set(0, -1, 0), i.lookAt(new M(1, 0, 0)), this.add(i); var a = new ct(zr, Gr, e, t); a.up.set(0, -1, 0), a.lookAt(new M(-1, 0, 0)), this.add(a); var o = new ct(zr, Gr, e, t); o.up.set(0, 0, 1), o.lookAt(new M(0, 1, 0)), this.add(o); var s = new ct(zr, Gr, e, t); s.up.set(0, 0, -1), s.lookAt(new M(0, -1, 0)), this.add(s); var l = new ct(zr, Gr, e, t); l.up.set(0, -1, 0), l.lookAt(new M(0, 0, 1)), this.add(l); var c = new ct(zr, Gr, e, t); c.up.set(0, -1, 0), c.lookAt(new M(0, 0, -1)), this.add(c), r = r || { format: qn, magFilter: ft, minFilter: ft }, this.renderTarget = new nr(n, n, r), this.renderTarget.texture.name = "CubeCamera", this.update = function (u, h) { this.parent === null && this.updateMatrixWorld(); var f = u.getRenderTarget(), d = this.renderTarget, p = d.texture.generateMipmaps; d.texture.generateMipmaps = !1, u.setRenderTarget(d, 0), u.render(h, i), u.setRenderTarget(d, 1), u.render(h, a), u.setRenderTarget(d, 2), u.render(h, o), u.setRenderTarget(d, 3), u.render(h, s), u.setRenderTarget(d, 4), u.render(h, l), d.texture.generateMipmaps = p, u.setRenderTarget(d, 5), u.render(h, c), u.setRenderTarget(f); }, this.clear = function (u, h, f, d) { for (var p = u.getRenderTarget(), g = this.renderTarget, v = 0; v < 6; v++)
    u.setRenderTarget(g, v), u.clear(h, f, d); u.setRenderTarget(p); }; }
Pi.prototype = Object.create(K.prototype);
Pi.prototype.constructor = Pi;
function nr(e, t, n) { wt.call(this, e, t, n); }
nr.prototype = Object.create(wt.prototype);
nr.prototype.constructor = nr;
nr.prototype.isWebGLRenderTargetCube = !0;
nr.prototype.fromEquirectangularTexture = function (e, t) {
    this.texture.type = t.type, this.texture.format = t.format, this.texture.encoding = t.encoding;
    var n = new Ln, r = { uniforms: { tEquirect: { value: null } }, vertexShader: ["varying vec3 vWorldDirection;", "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {", "	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );", "}", "void main() {", "	vWorldDirection = transformDirection( position, modelMatrix );", "	#include <begin_vertex>", "	#include <project_vertex>", "}"].join(`
`), fragmentShader: ["uniform sampler2D tEquirect;", "varying vec3 vWorldDirection;", "#define RECIPROCAL_PI 0.31830988618", "#define RECIPROCAL_PI2 0.15915494", "void main() {", "	vec3 direction = normalize( vWorldDirection );", "	vec2 sampleUV;", "	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;", "	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "	gl_FragColor = texture2D( tEquirect, sampleUV );", "}"].join(`
`) }, i = new At({ type: "CubemapFromEquirect", uniforms: tr(r.uniforms), vertexShader: r.vertexShader, fragmentShader: r.fragmentShader, side: ht, blending: Tn });
    i.uniforms.tEquirect.value = t;
    var a = new et(new Ci(5, 5, 5), i);
    n.add(a);
    var o = new Pi(1, 10, 1);
    return o.renderTarget = this, o.renderTarget.texture.name = "CubeCameraTexture", o.update(e, n), a.geometry.dispose(), a.material.dispose(), this;
};
function Hr(e, t, n, r, i, a, o, s, l, c, u, h) { Ye.call(this, null, a, o, s, l, c, r, i, u, h), this.image = { data: e || null, width: t || 1, height: n || 1 }, this.magFilter = l !== void 0 ? l : st, this.minFilter = c !== void 0 ? c : st, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0; }
Hr.prototype = Object.create(Ye.prototype);
Hr.prototype.constructor = Hr;
Hr.prototype.isDataTexture = !0;
var Vr = new Pn, eo = new M;
function to(e, t, n, r, i, a) { this.planes = [e !== void 0 ? e : new en, t !== void 0 ? t : new en, n !== void 0 ? n : new en, r !== void 0 ? r : new en, i !== void 0 ? i : new en, a !== void 0 ? a : new en]; }
Object.assign(to.prototype, { set: function (e, t, n, r, i, a) { var o = this.planes; return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { for (var t = this.planes, n = 0; n < 6; n++)
        t[n].copy(e.planes[n]); return this; }, setFromMatrix: function (e) { var t = this.planes, n = e.elements, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], l = n[5], c = n[6], u = n[7], h = n[8], f = n[9], d = n[10], p = n[11], g = n[12], v = n[13], y = n[14], x = n[15]; return t[0].setComponents(o - r, u - s, p - h, x - g).normalize(), t[1].setComponents(o + r, u + s, p + h, x + g).normalize(), t[2].setComponents(o + i, u + l, p + f, x + v).normalize(), t[3].setComponents(o - i, u - l, p - f, x - v).normalize(), t[4].setComponents(o - a, u - c, p - d, x - y).normalize(), t[5].setComponents(o + a, u + c, p + d, x + y).normalize(), this; }, intersectsObject: function (e) { var t = e.geometry; return t.boundingSphere === null && t.computeBoundingSphere(), Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Vr); }, intersectsSprite: function (e) { return Vr.center.set(0, 0, 0), Vr.radius = .7071067811865476, Vr.applyMatrix4(e.matrixWorld), this.intersectsSphere(Vr); }, intersectsSphere: function (e) { for (var t = this.planes, n = e.center, r = -e.radius, i = 0; i < 6; i++) {
        var a = t[i].distanceToPoint(n);
        if (a < r)
            return !1;
    } return !0; }, intersectsBox: function (e) { for (var t = this.planes, n = 0; n < 6; n++) {
        var r = t[n];
        if (eo.x = r.normal.x > 0 ? e.max.x : e.min.x, eo.y = r.normal.y > 0 ? e.max.y : e.min.y, eo.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(eo) < 0)
            return !1;
    } return !0; }, containsPoint: function (e) { for (var t = this.planes, n = 0; n < 6; n++)
        if (t[n].distanceToPoint(e) < 0)
            return !1; return !0; } });
var fd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, dd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, pd = `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`, vd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`, md = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, gd = "vec3 transformed = vec3( position );", yd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, xd = `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`, _d = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, wd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;
	}
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;
		}
		if ( clipped ) discard;
	#endif
#endif`, bd = `#if NUM_CLIPPING_PLANES > 0
	#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
		varying vec3 vViewPosition;
	#endif
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Md = `#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	varying vec3 vViewPosition;
#endif`, Ed = `#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )
	vViewPosition = - mvPosition.xyz;
#endif`, Sd = `#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`, Td = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`, Ad = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`, Ld = `#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`, Rd = `#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
  return m[ 2 ][ 3 ] == - 1.0;
}`, Cd = `#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_maxMipLevel 8.0
#define cubeUV_minMipLevel 4.0
#define cubeUV_maxTileSize 256.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if (absDirection.x > absDirection.z) {
      if (absDirection.x > absDirection.y)
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if (absDirection.z > absDirection.y)
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}
vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if (face == 0.0) {
      uv = vec2(-direction.z, direction.y) / abs(direction.x);
    } else if (face == 1.0) {
      uv = vec2(direction.x, -direction.z) / abs(direction.y);
    } else if (face == 2.0) {
      uv = direction.xy / abs(direction.z);
    } else if (face == 3.0) {
      uv = vec2(direction.z, direction.y) / abs(direction.x);
    } else if (face == 4.0) {
      uv = direction.xz / abs(direction.y);
    } else {
      uv = vec2(-direction.x, direction.y) / abs(direction.z);
    }
    return 0.5 * (uv + 1.0);
}
vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
  float face = getFace(direction);
  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
  mipInt = max(mipInt, cubeUV_minMipLevel);
  float faceSize = exp2(mipInt);
  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
  vec2 uv = getUV(direction, face) * (faceSize - 1.0);
  vec2 f = fract(uv);
  uv += 0.5 - f;
  if (face > 2.0) {
    uv.y += faceSize;
    face -= 3.0;
  }
  uv.x += face * faceSize;
  if(mipInt < cubeUV_maxMipLevel){
    uv.y += 2.0 * cubeUV_maxTileSize;
  }
  uv.y += filterInt * 2.0 * cubeUV_minTileSize;
  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
  uv *= texelSize;
  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x += texelSize;
  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.y += texelSize;
  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x -= texelSize;
  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  vec3 tm = mix(tl, tr, f.x);
  vec3 bm = mix(bl, br, f.x);
  return mix(tm, bm, f.y);
}
#define r0 1.0
#define v0 0.339
#define m0 -2.0
#define r1 0.8
#define v1 0.276
#define m1 -1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0
float roughnessToMip(float roughness) {
  float mip = 0.0;
  if (roughness >= r1) {
    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
  } else if (roughness >= r4) {
    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
  } else if (roughness >= r5) {
    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
  } else if (roughness >= r6) {
    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
  } else {
    mip = -2.0 * log2(1.16 * roughness);  }
  return mip;
}
vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);
  float mipF = fract(mip);
  float mipInt = floor(mip);
  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
  if (mipF == 0.0) {
    return vec4(color0, 1.0);
  } else {
    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
    return vec4(mix(color0, color1, mipF), 1.0);
  }
}
#endif`, Pd = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	transformedNormal = mat3( instanceMatrix ) * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Dd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Id = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Od = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Nd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Fd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Bd = `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = min( floor( D ) / 255.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`, Ud = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		}  else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ), 0.0 );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		vec2 sampleUV;
		reflectVec = normalize( reflectVec );
		sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
		sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
		vec4 envColor = texture2D( envMap, sampleUV );
	#elif defined( ENVMAP_TYPE_SPHERE )
		reflectVec = normalize( reflectVec );
		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );
		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, zd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Gd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Hd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Vd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) { 
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, kd = `#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`, Wd = `#ifdef USE_FOG
	varying float fogDepth;
#endif`, jd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, qd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Xd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`, Yd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`, Zd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Jd = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
#endif`, $d = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
		float shadowCameraNear;
		float shadowCameraFar;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
		int shadow;
		float shadowBias;
		float shadowRadius;
		vec2 shadowMapSize;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`, Qd = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
		  vec3 reflectVec = reflect( -viewDir, normal );
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			vec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV;
			sampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_SPHERE )
			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`, Kd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, ep = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, tp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, np = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, rp = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = saturate( clearcoat );	material.clearcoatRoughness = max( clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`, ip = `struct PhysicalMaterial {
	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, ap = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, op = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`, sp = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, lp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, cp = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, up = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, hp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, fp = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`, dp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, pp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, vp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, mp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, gp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, yp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`, xp = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`, _p = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
	transformed += morphTarget4 * morphTargetInfluences[ 4 ];
	transformed += morphTarget5 * morphTargetInfluences[ 5 ];
	transformed += morphTarget6 * morphTargetInfluences[ 6 ];
	transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`, wp = `#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, bp = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`, Mp = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`, Ep = `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Sp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`, Tp = `#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Ap = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Lp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Rp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Cp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Pp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Dp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Ip = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Op = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {
		const vec2 offset = vec2( 0.0, 1.0 );
		vec2 texelSize = vec2( 1.0 ) / size;
		vec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;
		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );
		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );
		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );
		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );
		vec2 f = fract( uv * size + 0.5 );
		float a = mix( lb, lt, f.y );
		float b = mix( rb, rt, f.y );
		float c = mix( a, b, f.x );
		return c;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			shadow = (
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Np = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Fp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;
	}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;
	}
	#endif
#endif`, Bp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLight directionalLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLights[ i ];
		shadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLight spotLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLights[ i ];
		shadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLight pointLight;
	#pragma unroll_loop
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLights[ i ];
		shadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#endif
	#endif
	return shadow;
}`, Up = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, zp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`, Gp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Hp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Vp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, kp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Wp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, jp = `#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );
}`, qp = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Xp = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, Yp = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Zp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Jp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, $p = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Qp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, Kp = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, ev = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, tv = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, nv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, rv = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );
	#endif
}`, iv = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
}`, av = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, ov = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, sv = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV;
	sampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, lv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, cv = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, uv = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	vLineDistance = scale * lineDistance;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, hv = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, fv = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, dv = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pv = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, vv = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, mv = `#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, gv = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, yv = `#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, xv = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, _v = `#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, wv = `#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bv = `#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Mv = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`, Ev = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Sv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <premultiplied_alpha_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Tv = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Av = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <fog_fragment>
}`, Lv = `#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Rv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Cv = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Pe = { alphamap_fragment: fd, alphamap_pars_fragment: dd, alphatest_fragment: pd, aomap_fragment: vd, aomap_pars_fragment: md, begin_vertex: gd, beginnormal_vertex: yd, bsdfs: xd, bumpmap_pars_fragment: _d, clipping_planes_fragment: wd, clipping_planes_pars_fragment: bd, clipping_planes_pars_vertex: Md, clipping_planes_vertex: Ed, color_fragment: Sd, color_pars_fragment: Td, color_pars_vertex: Ad, color_vertex: Ld, common: Rd, cube_uv_reflection_fragment: Cd, defaultnormal_vertex: Pd, displacementmap_pars_vertex: Dd, displacementmap_vertex: Id, emissivemap_fragment: Od, emissivemap_pars_fragment: Nd, encodings_fragment: Fd, encodings_pars_fragment: Bd, envmap_fragment: Ud, envmap_common_pars_fragment: zd, envmap_pars_fragment: Gd, envmap_pars_vertex: Hd, envmap_physical_pars_fragment: Qd, envmap_vertex: Vd, fog_vertex: kd, fog_pars_vertex: Wd, fog_fragment: jd, fog_pars_fragment: qd, gradientmap_pars_fragment: Xd, lightmap_fragment: Yd, lightmap_pars_fragment: Zd, lights_lambert_vertex: Jd, lights_pars_begin: $d, lights_toon_fragment: Kd, lights_toon_pars_fragment: ep, lights_phong_fragment: tp, lights_phong_pars_fragment: np, lights_physical_fragment: rp, lights_physical_pars_fragment: ip, lights_fragment_begin: ap, lights_fragment_maps: op, lights_fragment_end: sp, logdepthbuf_fragment: lp, logdepthbuf_pars_fragment: cp, logdepthbuf_pars_vertex: up, logdepthbuf_vertex: hp, map_fragment: fp, map_pars_fragment: dp, map_particle_fragment: pp, map_particle_pars_fragment: vp, metalnessmap_fragment: mp, metalnessmap_pars_fragment: gp, morphnormal_vertex: yp, morphtarget_pars_vertex: xp, morphtarget_vertex: _p, normal_fragment_begin: wp, normal_fragment_maps: bp, normalmap_pars_fragment: Mp, clearcoat_normal_fragment_begin: Ep, clearcoat_normal_fragment_maps: Sp, clearcoat_normalmap_pars_fragment: Tp, packing: Ap, premultiplied_alpha_fragment: Lp, project_vertex: Rp, dithering_fragment: Cp, dithering_pars_fragment: Pp, roughnessmap_fragment: Dp, roughnessmap_pars_fragment: Ip, shadowmap_pars_fragment: Op, shadowmap_pars_vertex: Np, shadowmap_vertex: Fp, shadowmask_pars_fragment: Bp, skinbase_vertex: Up, skinning_pars_vertex: zp, skinning_vertex: Gp, skinnormal_vertex: Hp, specularmap_fragment: Vp, specularmap_pars_fragment: kp, tonemapping_fragment: Wp, tonemapping_pars_fragment: jp, uv_pars_fragment: qp, uv_pars_vertex: Xp, uv_vertex: Yp, uv2_pars_fragment: Zp, uv2_pars_vertex: Jp, uv2_vertex: $p, worldpos_vertex: Qp, background_frag: Kp, background_vert: ev, cube_frag: tv, cube_vert: nv, depth_frag: rv, depth_vert: iv, distanceRGBA_frag: av, distanceRGBA_vert: ov, equirect_frag: sv, equirect_vert: lv, linedashed_frag: cv, linedashed_vert: uv, meshbasic_frag: hv, meshbasic_vert: fv, meshlambert_frag: dv, meshlambert_vert: pv, meshmatcap_frag: vv, meshmatcap_vert: mv, meshtoon_frag: gv, meshtoon_vert: yv, meshphong_frag: xv, meshphong_vert: _v, meshphysical_frag: wv, meshphysical_vert: bv, normal_frag: Mv, normal_vert: Ev, points_frag: Sv, points_vert: Tv, shadow_frag: Av, shadow_vert: Lv, sprite_frag: Rv, sprite_vert: Cv }, Q = { common: { diffuse: { value: new ee(15658734) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new mt }, uv2Transform: { value: new mt }, alphaMap: { value: null } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: .98 }, maxMipLevel: { value: 0 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new U(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ee(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotShadowMap: { value: [] }, spotShadowMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } } }, points: { diffuse: { value: new ee(15658734) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, uvTransform: { value: new mt } }, sprite: { diffuse: { value: new ee(15658734) }, opacity: { value: 1 }, center: { value: new U(.5, .5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, uvTransform: { value: new mt } } }, _n = { basic: { uniforms: gt([Q.common, Q.specularmap, Q.envmap, Q.aomap, Q.lightmap, Q.fog]), vertexShader: Pe.meshbasic_vert, fragmentShader: Pe.meshbasic_frag }, lambert: { uniforms: gt([Q.common, Q.specularmap, Q.envmap, Q.aomap, Q.lightmap, Q.emissivemap, Q.fog, Q.lights, { emissive: { value: new ee(0) } }]), vertexShader: Pe.meshlambert_vert, fragmentShader: Pe.meshlambert_frag }, phong: { uniforms: gt([Q.common, Q.specularmap, Q.envmap, Q.aomap, Q.lightmap, Q.emissivemap, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.fog, Q.lights, { emissive: { value: new ee(0) }, specular: { value: new ee(1118481) }, shininess: { value: 30 } }]), vertexShader: Pe.meshphong_vert, fragmentShader: Pe.meshphong_frag }, standard: { uniforms: gt([Q.common, Q.envmap, Q.aomap, Q.lightmap, Q.emissivemap, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.roughnessmap, Q.metalnessmap, Q.fog, Q.lights, { emissive: { value: new ee(0) }, roughness: { value: .5 }, metalness: { value: .5 }, envMapIntensity: { value: 1 } }]), vertexShader: Pe.meshphysical_vert, fragmentShader: Pe.meshphysical_frag }, toon: { uniforms: gt([Q.common, Q.specularmap, Q.aomap, Q.lightmap, Q.emissivemap, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.gradientmap, Q.fog, Q.lights, { emissive: { value: new ee(0) }, specular: { value: new ee(1118481) }, shininess: { value: 30 } }]), vertexShader: Pe.meshtoon_vert, fragmentShader: Pe.meshtoon_frag }, matcap: { uniforms: gt([Q.common, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.fog, { matcap: { value: null } }]), vertexShader: Pe.meshmatcap_vert, fragmentShader: Pe.meshmatcap_frag }, points: { uniforms: gt([Q.points, Q.fog]), vertexShader: Pe.points_vert, fragmentShader: Pe.points_frag }, dashed: { uniforms: gt([Q.common, Q.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Pe.linedashed_vert, fragmentShader: Pe.linedashed_frag }, depth: { uniforms: gt([Q.common, Q.displacementmap]), vertexShader: Pe.depth_vert, fragmentShader: Pe.depth_frag }, normal: { uniforms: gt([Q.common, Q.bumpmap, Q.normalmap, Q.displacementmap, { opacity: { value: 1 } }]), vertexShader: Pe.normal_vert, fragmentShader: Pe.normal_frag }, sprite: { uniforms: gt([Q.sprite, Q.fog]), vertexShader: Pe.sprite_vert, fragmentShader: Pe.sprite_frag }, background: { uniforms: { uvTransform: { value: new mt }, t2D: { value: null } }, vertexShader: Pe.background_vert, fragmentShader: Pe.background_frag }, cube: { uniforms: gt([Q.envmap, { opacity: { value: 1 } }]), vertexShader: Pe.cube_vert, fragmentShader: Pe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Pe.equirect_vert, fragmentShader: Pe.equirect_frag }, distanceRGBA: { uniforms: gt([Q.common, Q.displacementmap, { referencePosition: { value: new M }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Pe.distanceRGBA_vert, fragmentShader: Pe.distanceRGBA_frag }, shadow: { uniforms: gt([Q.lights, Q.fog, { color: { value: new ee(0) }, opacity: { value: 1 } }]), vertexShader: Pe.shadow_vert, fragmentShader: Pe.shadow_frag } };
_n.physical = { uniforms: gt([_n.standard.uniforms, { transparency: { value: 0 }, clearcoat: { value: 0 }, clearcoatRoughness: { value: 0 }, sheen: { value: new ee(0) }, clearcoatNormalScale: { value: new U(1, 1) }, clearcoatNormalMap: { value: null } }]), vertexShader: Pe.meshphysical_vert, fragmentShader: Pe.meshphysical_frag };
function Cc() { var e = null, t = !1, n = null; function r(i, a) { t !== !1 && (n(i, a), e.requestAnimationFrame(r)); } return { start: function () { t !== !0 && n !== null && (e.requestAnimationFrame(r), t = !0); }, stop: function () { t = !1; }, setAnimationLoop: function (i) { n = i; }, setContext: function (i) { e = i; } }; }
function Pv(e) { var t = new WeakMap; function n(s, l) { var c = s.array, u = s.usage, h = e.createBuffer(); e.bindBuffer(l, h), e.bufferData(l, c, u), s.onUploadCallback(); var f = 5126; return c instanceof Float32Array ? f = 5126 : c instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : c instanceof Uint16Array ? f = 5123 : c instanceof Int16Array ? f = 5122 : c instanceof Uint32Array ? f = 5125 : c instanceof Int32Array ? f = 5124 : c instanceof Int8Array ? f = 5120 : c instanceof Uint8Array && (f = 5121), { buffer: h, type: f, bytesPerElement: c.BYTES_PER_ELEMENT, version: s.version }; } function r(s, l, c) { var u = l.array, h = l.updateRange; e.bindBuffer(c, s), h.count === -1 ? e.bufferSubData(c, 0, u) : (e.bufferSubData(c, h.offset * u.BYTES_PER_ELEMENT, u.subarray(h.offset, h.offset + h.count)), h.count = -1); } function i(s) { return s.isInterleavedBufferAttribute && (s = s.data), t.get(s); } function a(s) { s.isInterleavedBufferAttribute && (s = s.data); var l = t.get(s); l && (e.deleteBuffer(l.buffer), t.delete(s)); } function o(s, l) { s.isInterleavedBufferAttribute && (s = s.data); var c = t.get(s); c === void 0 ? t.set(s, n(s, l)) : c.version < s.version && (r(c.buffer, s, l), c.version = s.version); } return { get: i, remove: a, update: o }; }
function no(e, t, n, r) { we.call(this), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r }, this.fromBufferGeometry(new kr(e, t, n, r)), this.mergeVertices(); }
no.prototype = Object.create(we.prototype);
no.prototype.constructor = no;
function kr(e, t, n, r) { te.call(this), this.type = "PlaneBufferGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r }, e = e || 1, t = t || 1; var i = e / 2, a = t / 2, o = Math.floor(n) || 1, s = Math.floor(r) || 1, l = o + 1, c = s + 1, u = e / o, h = t / s, f, d, p = [], g = [], v = [], y = []; for (d = 0; d < c; d++) {
    var x = d * h - a;
    for (f = 0; f < l; f++) {
        var w = f * u - i;
        g.push(w, -x, 0), v.push(0, 0, 1), y.push(f / o), y.push(1 - d / s);
    }
} for (d = 0; d < s; d++)
    for (f = 0; f < o; f++) {
        var E = f + l * d, b = f + l * (d + 1), L = f + 1 + l * (d + 1), S = f + 1 + l * d;
        p.push(E, b, S), p.push(b, L, S);
    } this.setIndex(p), this.setAttribute("position", new $(g, 3)), this.setAttribute("normal", new $(v, 3)), this.setAttribute("uv", new $(y, 2)); }
kr.prototype = Object.create(te.prototype);
kr.prototype.constructor = kr;
function Dv(e, t, n, r) { var i = new ee(0), a = 0, o, s, l = null, c = 0; function u(f, d, p, g) { var v = d.background, y = e.xr, x = y.getSession && y.getSession(); if (x && x.environmentBlendMode === "additive" && (v = null), v === null ? (h(i, a), l = null, c = 0) : v && v.isColor && (h(v, 1), g = !0, l = null, c = 0), (e.autoClear || g) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), v && (v.isCubeTexture || v.isWebGLRenderTargetCube || v.mapping === _i)) {
    s === void 0 && (s = new et(new Ci(1, 1, 1), new At({ type: "BackgroundCubeMaterial", uniforms: tr(_n.cube.uniforms), vertexShader: _n.cube.vertexShader, fragmentShader: _n.cube.fragmentShader, side: ht, depthTest: !1, depthWrite: !1, fog: !1 })), s.geometry.deleteAttribute("normal"), s.geometry.deleteAttribute("uv"), s.onBeforeRender = function (E, b, L) { this.matrixWorld.copyPosition(L.matrixWorld); }, Object.defineProperty(s.material, "envMap", { get: function () { return this.uniforms.envMap.value; } }), n.update(s));
    var w = v.isWebGLRenderTargetCube ? v.texture : v;
    s.material.uniforms.envMap.value = w, s.material.uniforms.flipEnvMap.value = w.isCubeTexture ? -1 : 1, (l !== v || c !== w.version) && (s.material.needsUpdate = !0, l = v, c = w.version), f.unshift(s, s.geometry, s.material, 0, 0, null);
}
else
    v && v.isTexture && (o === void 0 && (o = new et(new kr(2, 2), new At({ type: "BackgroundMaterial", uniforms: tr(_n.background.uniforms), vertexShader: _n.background.vertexShader, fragmentShader: _n.background.fragmentShader, side: gi, depthTest: !1, depthWrite: !1, fog: !1 })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", { get: function () { return this.uniforms.t2D.value; } }), n.update(o)), o.material.uniforms.t2D.value = v, v.matrixAutoUpdate === !0 && v.updateMatrix(), o.material.uniforms.uvTransform.value.copy(v.matrix), (l !== v || c !== v.version) && (o.material.needsUpdate = !0, l = v, c = v.version), f.unshift(o, o.geometry, o.material, 0, 0, null)); } function h(f, d) { t.buffers.color.setClear(f.r, f.g, f.b, d, r); } return { getClearColor: function () { return i; }, setClearColor: function (f, d) { i.set(f), a = d !== void 0 ? d : 1, h(i, a); }, getClearAlpha: function () { return a; }, setClearAlpha: function (f) { a = f, h(i, a); }, render: u }; }
function Iv(e, t, n, r) { var i = r.isWebGL2, a; function o(c) { a = c; } function s(c, u) { e.drawArrays(a, c, u), n.update(u, a); } function l(c, u, h, f) { if (f !== 0) {
    var d, p;
    if (i)
        d = e, p = "drawArraysInstanced";
    else if (d = t.get("ANGLE_instanced_arrays"), p = "drawArraysInstancedANGLE", d === null) {
        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
    }
    d[p](a, u, h, f), n.update(h, a, f);
} } this.setMode = o, this.render = s, this.renderInstances = l; }
function Ov(e, t, n) { var r; function i() { if (r !== void 0)
    return r; var L = t.get("EXT_texture_filter_anisotropic"); return L !== null ? r = e.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : r = 0, r; } function a(L) { if (L === "highp") {
    if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
    L = "mediump";
} return L === "mediump" && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"; } var o = typeof WebGL2RenderingContext != "undefined" && e instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext != "undefined" && e instanceof WebGL2ComputeRenderingContext, s = n.precision !== void 0 ? n.precision : "highp", l = a(s); l !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", l, "instead."), s = l); var c = n.logarithmicDepthBuffer === !0, u = e.getParameter(34930), h = e.getParameter(35660), f = e.getParameter(3379), d = e.getParameter(34076), p = e.getParameter(34921), g = e.getParameter(36347), v = e.getParameter(36348), y = e.getParameter(36349), x = h > 0, w = o || !!t.get("OES_texture_float"), E = x && w, b = o ? e.getParameter(36183) : 0; return { isWebGL2: o, getMaxAnisotropy: i, getMaxPrecision: a, precision: s, logarithmicDepthBuffer: c, maxTextures: u, maxVertexTextures: h, maxTextureSize: f, maxCubemapSize: d, maxAttributes: p, maxVertexUniforms: g, maxVaryings: v, maxFragmentUniforms: y, vertexTextures: x, floatFragmentTextures: w, floatVertexTextures: E, maxSamples: b }; }
function Nv() { var e = this, t = null, n = 0, r = !1, i = !1, a = new en, o = new mt, s = { value: null, needsUpdate: !1 }; this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function (u, h, f) { var d = u.length !== 0 || h || n !== 0 || r; return r = h, t = c(u, f, 0), n = u.length, d; }, this.beginShadows = function () { i = !0, c(null); }, this.endShadows = function () { i = !1, l(); }, this.setState = function (u, h, f, d, p, g) { if (!r || u === null || u.length === 0 || i && !f)
    i ? c(null) : l();
else {
    var v = i ? 0 : n, y = v * 4, x = p.clippingState || null;
    s.value = x, x = c(u, d, y, g);
    for (var w = 0; w !== y; ++w)
        x[w] = t[w];
    p.clippingState = x, this.numIntersection = h ? this.numPlanes : 0, this.numPlanes += v;
} }; function l() { s.value !== t && (s.value = t, s.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0; } function c(u, h, f, d) { var p = u !== null ? u.length : 0, g = null; if (p !== 0) {
    if (g = s.value, d !== !0 || g === null) {
        var v = f + p * 4, y = h.matrixWorldInverse;
        o.getNormalMatrix(y), (g === null || g.length < v) && (g = new Float32Array(v));
        for (var x = 0, w = f; x !== p; ++x, w += 4)
            a.copy(u[x]).applyMatrix4(y, o), a.normal.toArray(g, w), g[w + 3] = a.constant;
    }
    s.value = g, s.needsUpdate = !0;
} return e.numPlanes = p, g; } }
function Fv(e) { var t = {}; return { get: function (n) { if (t[n] !== void 0)
        return t[n]; var r; switch (n) {
        case "WEBGL_depth_texture":
            r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default: r = e.getExtension(n);
    } return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n] = r, r; } }; }
function Bv(e, t, n) { var r = new WeakMap, i = new WeakMap; function a(u) { var h = u.target, f = r.get(h); f.index !== null && t.remove(f.index); for (var d in f.attributes)
    t.remove(f.attributes[d]); h.removeEventListener("dispose", a), r.delete(h); var p = i.get(f); p && (t.remove(p), i.delete(f)), n.memory.geometries--; } function o(u, h) { var f = r.get(h); return f || (h.addEventListener("dispose", a), h.isBufferGeometry ? f = h : h.isGeometry && (h._bufferGeometry === void 0 && (h._bufferGeometry = new te().setFromObject(u)), f = h._bufferGeometry), r.set(h, f), n.memory.geometries++, f); } function s(u) { var h = u.index, f = u.attributes; h !== null && t.update(h, 34963); for (var d in f)
    t.update(f[d], 34962); var p = u.morphAttributes; for (var d in p)
    for (var g = p[d], v = 0, y = g.length; v < y; v++)
        t.update(g[v], 34962); } function l(u) { var h = [], f = u.index, d = u.attributes.position, p = 0; if (f !== null) {
    var g = f.array;
    p = f.version;
    for (var v = 0, y = g.length; v < y; v += 3) {
        var x = g[v + 0], w = g[v + 1], E = g[v + 2];
        h.push(x, w, w, E, E, x);
    }
}
else {
    var g = d.array;
    p = d.version;
    for (var v = 0, y = g.length / 3 - 1; v < y; v += 3) {
        var x = v + 0, w = v + 1, E = v + 2;
        h.push(x, w, w, E, E, x);
    }
} var b = new (Tc(h) > 65535 ? Or : Ir)(h, 1); b.version = p, t.update(b, 34963); var L = i.get(u); L && t.remove(L), i.set(u, b); } function c(u) { var h = i.get(u); if (h) {
    var f = u.index;
    f !== null && h.version < f.version && l(u);
}
else
    l(u); return i.get(u); } return { get: o, update: s, getWireframeAttribute: c }; }
function Uv(e, t, n, r) { var i = r.isWebGL2, a; function o(f) { a = f; } var s, l; function c(f) { s = f.type, l = f.bytesPerElement; } function u(f, d) { e.drawElements(a, d, s, f * l), n.update(d, a); } function h(f, d, p, g) { if (g !== 0) {
    var v, y;
    if (i)
        v = e, y = "drawElementsInstanced";
    else if (v = t.get("ANGLE_instanced_arrays"), y = "drawElementsInstancedANGLE", v === null) {
        console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
    }
    v[y](a, p, s, d * l, g), n.update(p, a, g);
} } this.setMode = o, this.setIndex = c, this.render = u, this.renderInstances = h; }
function zv(e) { var t = { geometries: 0, textures: 0 }, n = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function r(a, o, s) { switch (s = s || 1, n.calls++, o) {
    case 4:
        n.triangles += s * (a / 3);
        break;
    case 1:
        n.lines += s * (a / 2);
        break;
    case 3:
        n.lines += s * (a - 1);
        break;
    case 2:
        n.lines += s * a;
        break;
    case 0:
        n.points += s * a;
        break;
    default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
} } function i() { n.frame++, n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0; } return { memory: t, render: n, programs: null, autoReset: !0, reset: i, update: r }; }
function Gv(e, t) { return Math.abs(t[1]) - Math.abs(e[1]); }
function Hv(e) { var t = {}, n = new Float32Array(8); function r(i, a, o, s) { var l = i.morphTargetInfluences, c = l === void 0 ? 0 : l.length, u = t[a.id]; if (u === void 0) {
    u = [];
    for (var h = 0; h < c; h++)
        u[h] = [h, 0];
    t[a.id] = u;
} for (var f = o.morphTargets && a.morphAttributes.position, d = o.morphNormals && a.morphAttributes.normal, h = 0; h < c; h++) {
    var p = u[h];
    p[1] !== 0 && (f && a.deleteAttribute("morphTarget" + h), d && a.deleteAttribute("morphNormal" + h));
} for (var h = 0; h < c; h++) {
    var p = u[h];
    p[0] = h, p[1] = l[h];
} u.sort(Gv); for (var g = 0, h = 0; h < 8; h++) {
    var p = u[h];
    if (p) {
        var v = p[0], y = p[1];
        if (y) {
            f && a.setAttribute("morphTarget" + h, f[v]), d && a.setAttribute("morphNormal" + h, d[v]), n[h] = y, g += y;
            continue;
        }
    }
    n[h] = 0;
} var x = a.morphTargetsRelative ? 1 : 1 - g; s.getUniforms().setValue(e, "morphTargetBaseInfluence", x), s.getUniforms().setValue(e, "morphTargetInfluences", n); } return { update: r }; }
function Vv(e, t, n, r) { var i = {}; function a(s) { var l = r.render.frame, c = s.geometry, u = t.get(s, c); return i[u.id] !== l && (c.isGeometry && u.updateFromObject(s), t.update(u), i[u.id] = l), s.isInstancedMesh && n.update(s.instanceMatrix, 34962), u; } function o() { i = {}; } return { update: a, dispose: o }; }
function In(e, t, n, r, i, a, o, s, l, c) { e = e !== void 0 ? e : [], t = t !== void 0 ? t : os, o = o !== void 0 ? o : qn, Ye.call(this, e, t, n, r, i, a, o, s, l, c), this.flipY = !1; }
In.prototype = Object.create(Ye.prototype);
In.prototype.constructor = In;
In.prototype.isCubeTexture = !0;
Object.defineProperty(In.prototype, "images", { get: function () { return this.image; }, set: function (e) { this.image = e; } });
function Di(e, t, n, r) { Ye.call(this, null), this.image = { data: e || null, width: t || 1, height: n || 1, depth: r || 1 }, this.magFilter = st, this.minFilter = st, this.wrapR = St, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0; }
Di.prototype = Object.create(Ye.prototype);
Di.prototype.constructor = Di;
Di.prototype.isDataTexture2DArray = !0;
function Ii(e, t, n, r) { Ye.call(this, null), this.image = { data: e || null, width: t || 1, height: n || 1, depth: r || 1 }, this.magFilter = st, this.minFilter = st, this.wrapR = St, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0; }
Ii.prototype = Object.create(Ye.prototype);
Ii.prototype.constructor = Ii;
Ii.prototype.isDataTexture3D = !0;
var Pc = new Ye, kv = new Di, Wv = new Ii, Dc = new In, Ic = [], Oc = [], Nc = new Float32Array(16), Fc = new Float32Array(9), Bc = new Float32Array(4);
function Wr(e, t, n) { var r = e[0]; if (r <= 0 || r > 0)
    return e; var i = t * n, a = Ic[i]; if (a === void 0 && (a = new Float32Array(i), Ic[i] = a), t !== 0) {
    r.toArray(a, 0);
    for (var o = 1, s = 0; o !== t; ++o)
        s += n, e[o].toArray(a, s);
} return a; }
function Ut(e, t) { if (e.length !== t.length)
    return !1; for (var n = 0, r = e.length; n < r; n++)
    if (e[n] !== t[n])
        return !1; return !0; }
function Ot(e, t) { for (var n = 0, r = t.length; n < r; n++)
    e[n] = t[n]; }
function Uc(e, t) { var n = Oc[t]; n === void 0 && (n = new Int32Array(t), Oc[t] = n); for (var r = 0; r !== t; ++r)
    n[r] = e.allocateTextureUnit(); return n; }
function jv(e, t) { var n = this.cache; n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t); }
function qv(e, t) { var n = this.cache; if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
else {
    if (Ut(n, t))
        return;
    e.uniform2fv(this.addr, t), Ot(n, t);
} }
function Xv(e, t) { var n = this.cache; if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
else if (t.r !== void 0)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
else {
    if (Ut(n, t))
        return;
    e.uniform3fv(this.addr, t), Ot(n, t);
} }
function Yv(e, t) { var n = this.cache; if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
else {
    if (Ut(n, t))
        return;
    e.uniform4fv(this.addr, t), Ot(n, t);
} }
function Zv(e, t) { var n = this.cache, r = t.elements; if (r === void 0) {
    if (Ut(n, t))
        return;
    e.uniformMatrix2fv(this.addr, !1, t), Ot(n, t);
}
else {
    if (Ut(n, r))
        return;
    Bc.set(r), e.uniformMatrix2fv(this.addr, !1, Bc), Ot(n, r);
} }
function Jv(e, t) { var n = this.cache, r = t.elements; if (r === void 0) {
    if (Ut(n, t))
        return;
    e.uniformMatrix3fv(this.addr, !1, t), Ot(n, t);
}
else {
    if (Ut(n, r))
        return;
    Fc.set(r), e.uniformMatrix3fv(this.addr, !1, Fc), Ot(n, r);
} }
function $v(e, t) { var n = this.cache, r = t.elements; if (r === void 0) {
    if (Ut(n, t))
        return;
    e.uniformMatrix4fv(this.addr, !1, t), Ot(n, t);
}
else {
    if (Ut(n, r))
        return;
    Nc.set(r), e.uniformMatrix4fv(this.addr, !1, Nc), Ot(n, r);
} }
function Qv(e, t, n) { var r = this.cache, i = n.allocateTextureUnit(); r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.safeSetTexture2D(t || Pc, i); }
function Kv(e, t, n) { var r = this.cache, i = n.allocateTextureUnit(); r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || kv, i); }
function em(e, t, n) { var r = this.cache, i = n.allocateTextureUnit(); r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || Wv, i); }
function tm(e, t, n) { var r = this.cache, i = n.allocateTextureUnit(); r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.safeSetTextureCube(t || Dc, i); }
function nm(e, t) { var n = this.cache; n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t); }
function rm(e, t) { var n = this.cache; Ut(n, t) || (e.uniform2iv(this.addr, t), Ot(n, t)); }
function im(e, t) { var n = this.cache; Ut(n, t) || (e.uniform3iv(this.addr, t), Ot(n, t)); }
function am(e, t) { var n = this.cache; Ut(n, t) || (e.uniform4iv(this.addr, t), Ot(n, t)); }
function om(e) { switch (e) {
    case 5126: return jv;
    case 35664: return qv;
    case 35665: return Xv;
    case 35666: return Yv;
    case 35674: return Zv;
    case 35675: return Jv;
    case 35676: return $v;
    case 35678:
    case 36198: return Qv;
    case 35679: return em;
    case 35680: return tm;
    case 36289: return Kv;
    case 5124:
    case 35670: return nm;
    case 35667:
    case 35671: return rm;
    case 35668:
    case 35672: return im;
    case 35669:
    case 35673: return am;
} }
function sm(e, t) { e.uniform1fv(this.addr, t); }
function lm(e, t) { e.uniform1iv(this.addr, t); }
function cm(e, t) { e.uniform2iv(this.addr, t); }
function um(e, t) { e.uniform3iv(this.addr, t); }
function hm(e, t) { e.uniform4iv(this.addr, t); }
function fm(e, t) { var n = Wr(t, this.size, 2); e.uniform2fv(this.addr, n); }
function dm(e, t) { var n = Wr(t, this.size, 3); e.uniform3fv(this.addr, n); }
function pm(e, t) { var n = Wr(t, this.size, 4); e.uniform4fv(this.addr, n); }
function vm(e, t) { var n = Wr(t, this.size, 4); e.uniformMatrix2fv(this.addr, !1, n); }
function mm(e, t) { var n = Wr(t, this.size, 9); e.uniformMatrix3fv(this.addr, !1, n); }
function gm(e, t) { var n = Wr(t, this.size, 16); e.uniformMatrix4fv(this.addr, !1, n); }
function ym(e, t, n) { var r = t.length, i = Uc(n, r); e.uniform1iv(this.addr, i); for (var a = 0; a !== r; ++a)
    n.safeSetTexture2D(t[a] || Pc, i[a]); }
function xm(e, t, n) { var r = t.length, i = Uc(n, r); e.uniform1iv(this.addr, i); for (var a = 0; a !== r; ++a)
    n.safeSetTextureCube(t[a] || Dc, i[a]); }
function _m(e) { switch (e) {
    case 5126: return sm;
    case 35664: return fm;
    case 35665: return dm;
    case 35666: return pm;
    case 35674: return vm;
    case 35675: return mm;
    case 35676: return gm;
    case 35678:
    case 36198:
    case 36298:
    case 36306: return ym;
    case 35680:
    case 36300:
    case 36308: return xm;
    case 5124:
    case 35670: return lm;
    case 35667:
    case 35671: return cm;
    case 35668:
    case 35672: return um;
    case 35669:
    case 35673: return hm;
} }
function wm(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.setValue = om(t.type); }
function zc(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = _m(t.type); }
zc.prototype.updateCache = function (e) { var t = this.cache; e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), Ot(t, e); };
function Gc(e) { this.id = e, this.seq = [], this.map = {}; }
Gc.prototype.setValue = function (e, t, n) { for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
    var o = r[i];
    o.setValue(e, t[o.id], n);
} };
var Fs = /([\w\d_]+)(\])?(\[|\.)?/g;
function Hc(e, t) { e.seq.push(t), e.map[t.id] = t; }
function bm(e, t, n) { var r = e.name, i = r.length; for (Fs.lastIndex = 0;;) {
    var a = Fs.exec(r), o = Fs.lastIndex, s = a[1], l = a[2] === "]", c = a[3];
    if (l && (s = s | 0), c === void 0 || c === "[" && o + 2 === i) {
        Hc(n, c === void 0 ? new wm(s, e, t) : new zc(s, e, t));
        break;
    }
    else {
        var u = n.map, h = u[s];
        h === void 0 && (h = new Gc(s), Hc(n, h)), n = h;
    }
} }
function On(e, t) { this.seq = [], this.map = {}; for (var n = e.getProgramParameter(t, 35718), r = 0; r < n; ++r) {
    var i = e.getActiveUniform(t, r), a = e.getUniformLocation(t, i.name);
    bm(i, a, this);
} }
On.prototype.setValue = function (e, t, n, r) { var i = this.map[t]; i !== void 0 && i.setValue(e, n, r); };
On.prototype.setOptional = function (e, t, n) { var r = t[n]; r !== void 0 && this.setValue(e, n, r); };
On.upload = function (e, t, n, r) { for (var i = 0, a = t.length; i !== a; ++i) {
    var o = t[i], s = n[o.id];
    s.needsUpdate !== !1 && o.setValue(e, s.value, r);
} };
On.seqWithValue = function (e, t) { for (var n = [], r = 0, i = e.length; r !== i; ++r) {
    var a = e[r];
    a.id in t && n.push(a);
} return n; };
function Vc(e, t, n) { var r = e.createShader(t); return e.shaderSource(r, n), e.compileShader(r), r; }
var Mm = 0;
function Em(e) {
    for (var t = e.split(`
`), n = 0; n < t.length; n++)
        t[n] = n + 1 + ": " + t[n];
    return t.join(`
`);
}
function kc(e) { switch (e) {
    case Ct: return ["Linear", "( value )"];
    case ps: return ["sRGB", "( value )"];
    case vs: return ["RGBE", "( value )"];
    case hc: return ["RGBM", "( value, 7.0 )"];
    case fc: return ["RGBM", "( value, 16.0 )"];
    case dc: return ["RGBD", "( value, 256.0 )"];
    case uc: return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case jf: return ["LogLuv", "( value )"];
    default: throw new Error("unsupported encoding: " + e);
} }
function Wc(e, t, n) {
    var r = e.getShaderParameter(t, 35713), i = e.getShaderInfoLog(t).trim();
    if (r && i === "")
        return "";
    var a = e.getShaderSource(t);
    return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + `
` + i + Em(a);
}
function Oi(e, t) { var n = kc(t); return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"; }
function Sm(e, t) { var n = kc(t); return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"; }
function Tm(e, t) { var n; switch (t) {
    case is:
        n = "Linear";
        break;
    case of:
        n = "Reinhard";
        break;
    case sf:
        n = "Uncharted2";
        break;
    case lf:
        n = "OptimizedCineon";
        break;
    case cf:
        n = "ACESFilmic";
        break;
    default: throw new Error("unsupported toneMapping: " + t);
} return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"; }
function Am(e, t, n) {
    e = e || {};
    var r = [e.derivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || t.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
    return r.filter(Ni).join(`
`);
}
function Lm(e) {
    var t = [];
    for (var n in e) {
        var r = e[n];
        r !== !1 && t.push("#define " + n + " " + r);
    }
    return t.join(`
`);
}
function Rm(e, t) { for (var n = {}, r = e.getProgramParameter(t, 35721), i = 0; i < r; i++) {
    var a = e.getActiveAttrib(t, i), o = a.name;
    n[o] = e.getAttribLocation(t, o);
} return n; }
function Ni(e) { return e !== ""; }
function jc(e, t) { return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows); }
function qc(e, t) { return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection); }
var Cm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Bs(e) { return e.replace(Cm, Pm); }
function Pm(e, t) { var n = Pe[t]; if (n === void 0)
    throw new Error("Can not resolve #include <" + t + ">"); return Bs(n); }
var Dm = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
function Xc(e) { return e.replace(Dm, Im); }
function Im(e, t, n, r) { for (var i = "", a = parseInt(t); a < parseInt(n); a++)
    i += r.replace(/\[ i \]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a); return i; }
function Yc(e) {
    var t = "precision " + e.precision + ` float;
precision ` + e.precision + " int;";
    return e.precision === "highp" ? t += `
#define HIGH_PRECISION` : e.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : e.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function Om(e) { var t = "SHADOWMAP_TYPE_BASIC"; return e.shadowMapType === Vl ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === Fh ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === mi && (t = "SHADOWMAP_TYPE_VSM"), t; }
function Nm(e) { var t = "ENVMAP_TYPE_CUBE"; if (e.envMap)
    switch (e.envMapMode) {
        case os:
        case ss:
            t = "ENVMAP_TYPE_CUBE";
            break;
        case _i:
        case cs:
            t = "ENVMAP_TYPE_CUBE_UV";
            break;
        case Ql:
        case ls:
            t = "ENVMAP_TYPE_EQUIREC";
            break;
        case Kl:
            t = "ENVMAP_TYPE_SPHERE";
            break;
    } return t; }
function Fm(e) { var t = "ENVMAP_MODE_REFLECTION"; if (e.envMap)
    switch (e.envMapMode) {
        case ss:
        case ls:
            t = "ENVMAP_MODE_REFRACTION";
            break;
    } return t; }
function Bm(e) { var t = "ENVMAP_BLENDING_NONE"; if (e.envMap)
    switch (e.combine) {
        case ba:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case rf:
            t = "ENVMAP_BLENDING_MIX";
            break;
        case af:
            t = "ENVMAP_BLENDING_ADD";
            break;
    } return t; }
function Um(e, t, n, r, i, a) {
    var o = e.getContext(), s = r.defines, l = i.vertexShader, c = i.fragmentShader, u = Om(a), h = Nm(a), f = Fm(a), d = Bm(a), p = e.gammaFactor > 0 ? e.gammaFactor : 1, g = a.isWebGL2 ? "" : Am(r.extensions, a, t), v = Lm(s), y = o.createProgram(), x, w, E = a.numMultiviewViews;
    if (r.isRawShaderMaterial ? (x = [v].filter(Ni).join(`
`), x.length > 0 && (x += `
`), w = [g, v].filter(Ni).join(`
`), w.length > 0 && (w += `
`)) : (x = [Yc(a), "#define SHADER_NAME " + i.name, v, a.instancing ? "#define USE_INSTANCING" : "", a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + p, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.vertexUvs ? "#define USE_UV" : "", a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && a.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (a.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ni).join(`
`), w = [g, Yc(a), "#define SHADER_NAME " + i.name, v, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + p, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp2 ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + h : "", a.envMap ? "#define " + f : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.normalMap && a.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", a.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.sheen ? "#define USE_SHEEN" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.vertexUvs ? "#define USE_UV" : "", a.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + u : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (a.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", ((r.extensions ? r.extensions.shaderTextureLOD : !1) || a.envMap) && (a.isWebGL2 || t.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", a.toneMapping !== Ma ? "#define TONE_MAPPING" : "", a.toneMapping !== Ma ? Pe.tonemapping_pars_fragment : "", a.toneMapping !== Ma ? Tm("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding || a.lightMapEncoding ? Pe.encodings_pars_fragment : "", a.mapEncoding ? Oi("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? Oi("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? Oi("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? Oi("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.lightMapEncoding ? Oi("lightMapTexelToLinear", a.lightMapEncoding) : "", a.outputEncoding ? Sm("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "", `
`].filter(Ni).join(`
`)), l = Bs(l), l = jc(l, a), l = qc(l, a), c = Bs(c), c = jc(c, a), c = qc(c, a), l = Xc(l), c = Xc(c), a.isWebGL2 && !r.isRawShaderMaterial) {
        var b = !1, L = /^\s*#version\s+300\s+es\s*\n/;
        r.isShaderMaterial && l.match(L) !== null && c.match(L) !== null && (b = !0, l = l.replace(L, ""), c = c.replace(L, "")), x = [`#version 300 es
`, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + x, w = [`#version 300 es
`, "#define varying in", b ? "" : "out highp vec4 pc_fragColor;", b ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + w, E > 0 && (x = x.replace(`#version 300 es
`, [`#version 300 es
`, "#extension GL_OVR_multiview2 : require", "layout(num_views = " + E + ") in;", "#define VIEW_ID gl_ViewID_OVR"].join(`
`)), x = x.replace(["uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;"].join(`
`), ["uniform mat4 modelViewMatrices[" + E + "];", "uniform mat4 projectionMatrices[" + E + "];", "uniform mat4 viewMatrices[" + E + "];", "uniform mat3 normalMatrices[" + E + "];", "#define modelViewMatrix modelViewMatrices[VIEW_ID]", "#define projectionMatrix projectionMatrices[VIEW_ID]", "#define viewMatrix viewMatrices[VIEW_ID]", "#define normalMatrix normalMatrices[VIEW_ID]"].join(`
`)), w = w.replace(`#version 300 es
`, [`#version 300 es
`, "#extension GL_OVR_multiview2 : require", "#define VIEW_ID gl_ViewID_OVR"].join(`
`)), w = w.replace("uniform mat4 viewMatrix;", ["uniform mat4 viewMatrices[" + E + "];", "#define viewMatrix viewMatrices[VIEW_ID]"].join(`
`)));
    }
    var S = x + l, T = w + c, D = Vc(o, 35633, S), I = Vc(o, 35632, T);
    if (o.attachShader(y, D), o.attachShader(y, I), r.index0AttributeName !== void 0 ? o.bindAttribLocation(y, 0, r.index0AttributeName) : a.morphTargets === !0 && o.bindAttribLocation(y, 0, "position"), o.linkProgram(y), e.debug.checkShaderErrors) {
        var O = o.getProgramInfoLog(y).trim(), B = o.getShaderInfoLog(D).trim(), z = o.getShaderInfoLog(I).trim(), N = !0, F = !0;
        if (o.getProgramParameter(y, 35714) === !1) {
            N = !1;
            var V = Wc(o, D, "vertex"), Y = Wc(o, I, "fragment");
            console.error("THREE.WebGLProgram: shader error: ", o.getError(), "35715", o.getProgramParameter(y, 35715), "gl.getProgramInfoLog", O, V, Y);
        }
        else
            O !== "" ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", O) : (B === "" || z === "") && (F = !1);
        F && (this.diagnostics = { runnable: N, material: r, programLog: O, vertexShader: { log: B, prefix: x }, fragmentShader: { log: z, prefix: w } });
    }
    o.deleteShader(D), o.deleteShader(I);
    var ie;
    this.getUniforms = function () { return ie === void 0 && (ie = new On(o, y)), ie; };
    var q;
    return this.getAttributes = function () { return q === void 0 && (q = Rm(o, y)), q; }, this.destroy = function () { o.deleteProgram(y), this.program = void 0; }, this.name = i.name, this.id = Mm++, this.cacheKey = n, this.usedTimes = 1, this.program = y, this.vertexShader = D, this.fragmentShader = I, this.numMultiviewViews = E, this;
}
function zm(e, t, n) { var r = [], i = n.isWebGL2, a = n.logarithmicDepthBuffer, o = n.floatVertexTextures, s = n.precision, l = n.maxVertexUniforms, c = n.vertexTextures, u = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }, h = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "numMultiviewViews", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen"]; function f(p) { var g = p.skeleton, v = g.bones; if (o)
    return 1024; var y = l, x = Math.floor((y - 20) / 4), w = Math.min(x, v.length); return w < v.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + v.length + " bones. This GPU supports " + w + "."), 0) : w; } function d(p) { var g; return p ? p.isTexture ? g = p.encoding : p.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), g = p.texture.encoding) : g = Ct, g; } this.getParameters = function (p, g, v, y, x, w, E) { var b = y.fog, L = p.isMeshStandardMaterial ? y.environment : null, S = p.envMap || L, T = u[p.type], D = E.isSkinnedMesh ? f(E) : 0; p.precision !== null && (s = n.getMaxPrecision(p.precision), s !== p.precision && console.warn("THREE.WebGLProgram.getParameters:", p.precision, "not supported, using", s, "instead.")); var I = e.getRenderTarget(), O = I && I.isWebGLMultiviewRenderTarget ? I.numViews : 0, B = { isWebGL2: i, shaderID: T, precision: s, instancing: E.isInstancedMesh === !0, supportsVertexTextures: c, numMultiviewViews: O, outputEncoding: I !== null ? d(I.texture) : e.outputEncoding, map: !!p.map, mapEncoding: d(p.map), matcap: !!p.matcap, matcapEncoding: d(p.matcap), envMap: !!S, envMapMode: S && S.mapping, envMapEncoding: d(S), envMapCubeUV: !!S && (S.mapping === _i || S.mapping === cs), lightMap: !!p.lightMap, lightMapEncoding: d(p.lightMap), aoMap: !!p.aoMap, emissiveMap: !!p.emissiveMap, emissiveMapEncoding: d(p.emissiveMap), bumpMap: !!p.bumpMap, normalMap: !!p.normalMap, objectSpaceNormalMap: p.normalMapType === Yf, tangentSpaceNormalMap: p.normalMapType === br, clearcoatNormalMap: !!p.clearcoatNormalMap, displacementMap: !!p.displacementMap, roughnessMap: !!p.roughnessMap, metalnessMap: !!p.metalnessMap, specularMap: !!p.specularMap, alphaMap: !!p.alphaMap, gradientMap: !!p.gradientMap, sheen: !!p.sheen, combine: p.combine, vertexTangents: p.normalMap && p.vertexTangents, vertexColors: p.vertexColors, vertexUvs: !!p.map || !!p.bumpMap || !!p.normalMap || !!p.specularMap || !!p.alphaMap || !!p.emissiveMap || !!p.roughnessMap || !!p.metalnessMap || !!p.clearcoatNormalMap || !!p.displacementMap, uvsVertexOnly: !(!!p.map || !!p.bumpMap || !!p.normalMap || !!p.specularMap || !!p.alphaMap || !!p.emissiveMap || !!p.roughnessMap || !!p.metalnessMap || !!p.clearcoatNormalMap) && !!p.displacementMap, fog: !!b, useFog: p.fog, fogExp2: b && b.isFogExp2, flatShading: p.flatShading, sizeAttenuation: p.sizeAttenuation, logarithmicDepthBuffer: a, skinning: p.skinning && D > 0, maxBones: D, useVertexTexture: o, morphTargets: p.morphTargets, morphNormals: p.morphNormals, maxMorphTargets: e.maxMorphTargets, maxMorphNormals: e.maxMorphNormals, numDirLights: g.directional.length, numPointLights: g.point.length, numSpotLights: g.spot.length, numRectAreaLights: g.rectArea.length, numHemiLights: g.hemi.length, numDirLightShadows: g.directionalShadowMap.length, numPointLightShadows: g.pointShadowMap.length, numSpotLightShadows: g.spotShadowMap.length, numClippingPlanes: x, numClipIntersection: w, dithering: p.dithering, shadowMapEnabled: e.shadowMap.enabled && v.length > 0, shadowMapType: e.shadowMap.type, toneMapping: p.toneMapped ? e.toneMapping : Ma, physicallyCorrectLights: e.physicallyCorrectLights, premultipliedAlpha: p.premultipliedAlpha, alphaTest: p.alphaTest, doubleSided: p.side === wa, flipSided: p.side === ht, depthPacking: p.depthPacking !== void 0 ? p.depthPacking : !1 }; return B; }, this.getProgramCacheKey = function (p, g) { var v = []; if (g.shaderID ? v.push(g.shaderID) : (v.push(p.fragmentShader), v.push(p.vertexShader)), p.defines !== void 0)
    for (var y in p.defines)
        v.push(y), v.push(p.defines[y]); if (p.isRawShaderMaterial === void 0) {
    for (var x = 0; x < h.length; x++)
        v.push(g[h[x]]);
    v.push(e.outputEncoding), v.push(e.gammaFactor);
} return v.push(p.onBeforeCompile.toString()), v.join(); }, this.acquireProgram = function (p, g, v, y) { for (var x, w = 0, E = r.length; w < E; w++) {
    var b = r[w];
    if (b.cacheKey === y) {
        x = b, ++x.usedTimes;
        break;
    }
} return x === void 0 && (x = new Um(e, t, y, p, g, v), r.push(x)), x; }, this.releaseProgram = function (p) { if (--p.usedTimes === 0) {
    var g = r.indexOf(p);
    r[g] = r[r.length - 1], r.pop(), p.destroy();
} }, this.programs = r; }
function Gm() { var e = new WeakMap; function t(a) { var o = e.get(a); return o === void 0 && (o = {}, e.set(a, o)), o; } function n(a) { e.delete(a); } function r(a, o, s) { e.get(a)[o] = s; } function i() { e = new WeakMap; } return { get: t, remove: n, update: r, dispose: i }; }
function Hm(e, t) { return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id; }
function Vm(e, t) { return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id; }
function Zc() { var e = [], t = 0, n = [], r = [], i = { id: -1 }; function a() { t = 0, n.length = 0, r.length = 0; } function o(u, h, f, d, p, g) { var v = e[t]; return v === void 0 ? (v = { id: u.id, object: u, geometry: h, material: f, program: f.program || i, groupOrder: d, renderOrder: u.renderOrder, z: p, group: g }, e[t] = v) : (v.id = u.id, v.object = u, v.geometry = h, v.material = f, v.program = f.program || i, v.groupOrder = d, v.renderOrder = u.renderOrder, v.z = p, v.group = g), t++, v; } function s(u, h, f, d, p, g) { var v = o(u, h, f, d, p, g); (f.transparent === !0 ? r : n).push(v); } function l(u, h, f, d, p, g) { var v = o(u, h, f, d, p, g); (f.transparent === !0 ? r : n).unshift(v); } function c(u, h) { n.length > 1 && n.sort(u || Hm), r.length > 1 && r.sort(h || Vm); } return { opaque: n, transparent: r, init: a, push: s, unshift: l, sort: c }; }
function km() { var e = new WeakMap; function t(i) { var a = i.target; a.removeEventListener("dispose", t), e.delete(a); } function n(i, a) { var o = e.get(i), s; return o === void 0 ? (s = new Zc, e.set(i, new WeakMap), e.get(i).set(a, s), i.addEventListener("dispose", t)) : (s = o.get(a), s === void 0 && (s = new Zc, o.set(a, s))), s; } function r() { e = new WeakMap; } return { get: n, dispose: r }; }
function Wm() { var e = {}; return { get: function (t) { if (e[t.id] !== void 0)
        return e[t.id]; var n; switch (t.type) {
        case "DirectionalLight":
            n = { direction: new M, color: new ee, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new U };
            break;
        case "SpotLight":
            n = { position: new M, direction: new M, color: new ee, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new U };
            break;
        case "PointLight":
            n = { position: new M, color: new ee, distance: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new U, shadowCameraNear: 1, shadowCameraFar: 1e3 };
            break;
        case "HemisphereLight":
            n = { direction: new M, skyColor: new ee, groundColor: new ee };
            break;
        case "RectAreaLight":
            n = { color: new ee, position: new M, halfWidth: new M, halfHeight: new M };
            break;
    } return e[t.id] = n, n; } }; }
var jm = 0;
function qm(e, t) { return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0); }
function Xm() { for (var e = new Wm, t = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotShadowMap: [], spotShadowMatrix: [], rectArea: [], point: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1 }, n = 0; n < 9; n++)
    t.probe.push(new M); var r = new M, i = new Re, a = new Re; function o(s, l, c) { for (var u = 0, h = 0, f = 0, d = 0; d < 9; d++)
    t.probe[d].set(0, 0, 0); var p = 0, g = 0, v = 0, y = 0, x = 0, w = 0, E = 0, b = 0, L = c.matrixWorldInverse; s.sort(qm); for (var d = 0, S = s.length; d < S; d++) {
    var T = s[d], D = T.color, I = T.intensity, O = T.distance, B = T.shadow && T.shadow.map ? T.shadow.map.texture : null;
    if (T.isAmbientLight)
        u += D.r * I, h += D.g * I, f += D.b * I;
    else if (T.isLightProbe)
        for (var z = 0; z < 9; z++)
            t.probe[z].addScaledVector(T.sh.coefficients[z], I);
    else if (T.isDirectionalLight) {
        var N = e.get(T);
        if (N.color.copy(T.color).multiplyScalar(T.intensity), N.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), N.direction.sub(r), N.direction.transformDirection(L), N.shadow = T.castShadow, T.castShadow) {
            var F = T.shadow;
            N.shadowBias = F.bias, N.shadowRadius = F.radius, N.shadowMapSize = F.mapSize, t.directionalShadowMap[p] = B, t.directionalShadowMatrix[p] = T.shadow.matrix, w++;
        }
        t.directional[p] = N, p++;
    }
    else if (T.isSpotLight) {
        var N = e.get(T);
        if (N.position.setFromMatrixPosition(T.matrixWorld), N.position.applyMatrix4(L), N.color.copy(D).multiplyScalar(I), N.distance = O, N.direction.setFromMatrixPosition(T.matrixWorld), r.setFromMatrixPosition(T.target.matrixWorld), N.direction.sub(r), N.direction.transformDirection(L), N.coneCos = Math.cos(T.angle), N.penumbraCos = Math.cos(T.angle * (1 - T.penumbra)), N.decay = T.decay, N.shadow = T.castShadow, T.castShadow) {
            var F = T.shadow;
            N.shadowBias = F.bias, N.shadowRadius = F.radius, N.shadowMapSize = F.mapSize, t.spotShadowMap[v] = B, t.spotShadowMatrix[v] = T.shadow.matrix, b++;
        }
        t.spot[v] = N, v++;
    }
    else if (T.isRectAreaLight) {
        var N = e.get(T);
        N.color.copy(D).multiplyScalar(I), N.position.setFromMatrixPosition(T.matrixWorld), N.position.applyMatrix4(L), a.identity(), i.copy(T.matrixWorld), i.premultiply(L), a.extractRotation(i), N.halfWidth.set(T.width * .5, 0, 0), N.halfHeight.set(0, T.height * .5, 0), N.halfWidth.applyMatrix4(a), N.halfHeight.applyMatrix4(a), t.rectArea[y] = N, y++;
    }
    else if (T.isPointLight) {
        var N = e.get(T);
        if (N.position.setFromMatrixPosition(T.matrixWorld), N.position.applyMatrix4(L), N.color.copy(T.color).multiplyScalar(T.intensity), N.distance = T.distance, N.decay = T.decay, N.shadow = T.castShadow, T.castShadow) {
            var F = T.shadow;
            N.shadowBias = F.bias, N.shadowRadius = F.radius, N.shadowMapSize = F.mapSize, N.shadowCameraNear = F.camera.near, N.shadowCameraFar = F.camera.far, t.pointShadowMap[g] = B, t.pointShadowMatrix[g] = T.shadow.matrix, E++;
        }
        t.point[g] = N, g++;
    }
    else if (T.isHemisphereLight) {
        var N = e.get(T);
        N.direction.setFromMatrixPosition(T.matrixWorld), N.direction.transformDirection(L), N.direction.normalize(), N.skyColor.copy(T.color).multiplyScalar(I), N.groundColor.copy(T.groundColor).multiplyScalar(I), t.hemi[x] = N, x++;
    }
} t.ambient[0] = u, t.ambient[1] = h, t.ambient[2] = f; var V = t.hash; (V.directionalLength !== p || V.pointLength !== g || V.spotLength !== v || V.rectAreaLength !== y || V.hemiLength !== x || V.numDirectionalShadows !== w || V.numPointShadows !== E || V.numSpotShadows !== b) && (t.directional.length = p, t.spot.length = v, t.rectArea.length = y, t.point.length = g, t.hemi.length = x, t.directionalShadowMap.length = w, t.pointShadowMap.length = E, t.spotShadowMap.length = b, t.directionalShadowMatrix.length = w, t.pointShadowMatrix.length = E, t.spotShadowMatrix.length = b, V.directionalLength = p, V.pointLength = g, V.spotLength = v, V.rectAreaLength = y, V.hemiLength = x, V.numDirectionalShadows = w, V.numPointShadows = E, V.numSpotShadows = b, t.version = jm++); } return { setup: o, state: t }; }
function Jc() { var e = new Xm, t = [], n = []; function r() { t.length = 0, n.length = 0; } function i(l) { t.push(l); } function a(l) { n.push(l); } function o(l) { e.setup(t, n, l); } var s = { lightsArray: t, shadowsArray: n, lights: e }; return { init: r, state: s, setupLights: o, pushLight: i, pushShadow: a }; }
function Ym() { var e = new WeakMap; function t(i) { var a = i.target; a.removeEventListener("dispose", t), e.delete(a); } function n(i, a) { var o; return e.has(i) === !1 ? (o = new Jc, e.set(i, new WeakMap), e.get(i).set(a, o), i.addEventListener("dispose", t)) : e.get(i).has(a) === !1 ? (o = new Jc, e.get(i).set(a, o)) : o = e.get(i).get(a), o; } function r() { e = new WeakMap; } return { get: n, dispose: r }; }
function rr(e) { xe.call(this), this.type = "MeshDepthMaterial", this.depthPacking = qf, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e); }
rr.prototype = Object.create(xe.prototype);
rr.prototype.constructor = rr;
rr.prototype.isMeshDepthMaterial = !0;
rr.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this; };
function ir(e) { xe.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new M, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e); }
ir.prototype = Object.create(xe.prototype);
ir.prototype.constructor = ir;
ir.prototype.isMeshDistanceMaterial = !0;
ir.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this; };
var Zm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  float mean = 0.0;
  float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );
  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
    #ifdef HORIZONAL_PASS
      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;
  float std_dev = sqrt( squared_mean - mean * mean );
  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`, Jm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
function $c(e, t, n) { var r = new to, i = new U, a = new U, o = new Ze, s = [], l = [], c = {}, u = { 0: ht, 1: gi, 2: wa }, h = new At({ defines: { SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new U }, radius: { value: 4 } }, vertexShader: Jm, fragmentShader: Zm }), f = h.clone(); f.defines.HORIZONAL_PASS = 1; var d = new te; d.setAttribute("position", new _e(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); var p = new et(d, h), g = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Vl, this.render = function (b, L, S) { if (g.enabled !== !1 && !(g.autoUpdate === !1 && g.needsUpdate === !1) && b.length !== 0) {
    var T = e.getRenderTarget(), D = e.getActiveCubeFace(), I = e.getActiveMipmapLevel(), O = e.state;
    O.setBlending(Tn), O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    for (var B = 0, z = b.length; B < z; B++) {
        var N = b[B], F = N.shadow;
        if (F === void 0) {
            console.warn("THREE.WebGLShadowMap:", N, "has no shadow.");
            continue;
        }
        i.copy(F.mapSize);
        var V = F.getFrameExtents();
        if (i.multiply(V), a.copy(F.mapSize), (i.x > n || i.y > n) && (console.warn("THREE.WebGLShadowMap:", N, "has shadow exceeding max texture size, reducing"), i.x > n && (a.x = Math.floor(n / V.x), i.x = a.x * V.x, F.mapSize.x = a.x), i.y > n && (a.y = Math.floor(n / V.y), i.y = a.y * V.y, F.mapSize.y = a.y)), F.map === null && !F.isPointLightShadow && this.type === mi) {
            var Y = { minFilter: ft, magFilter: ft, format: Qt };
            F.map = new wt(i.x, i.y, Y), F.map.texture.name = N.name + ".shadowMap", F.mapPass = new wt(i.x, i.y, Y), F.camera.updateProjectionMatrix();
        }
        if (F.map === null) {
            var Y = { minFilter: st, magFilter: st, format: Qt };
            F.map = new wt(i.x, i.y, Y), F.map.texture.name = N.name + ".shadowMap", F.camera.updateProjectionMatrix();
        }
        e.setRenderTarget(F.map), e.clear();
        for (var ie = F.getViewportCount(), q = 0; q < ie; q++) {
            var Z = F.getViewport(q);
            o.set(a.x * Z.x, a.y * Z.y, a.x * Z.z, a.y * Z.w), O.viewport(o), F.updateMatrices(N, q), r = F.getFrustum(), E(L, S, F.camera, N, this.type);
        }
        !F.isPointLightShadow && this.type === mi && v(F, S);
    }
    g.needsUpdate = !1, e.setRenderTarget(T, D, I);
} }; function v(b, L) { var S = t.update(p); h.uniforms.shadow_pass.value = b.map.texture, h.uniforms.resolution.value = b.mapSize, h.uniforms.radius.value = b.radius, e.setRenderTarget(b.mapPass), e.clear(), e.renderBufferDirect(L, null, S, h, p, null), f.uniforms.shadow_pass.value = b.mapPass.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, e.setRenderTarget(b.map), e.clear(), e.renderBufferDirect(L, null, S, f, p, null); } function y(b, L, S) { var T = b << 0 | L << 1 | S << 2, D = s[T]; return D === void 0 && (D = new rr({ depthPacking: Xf, morphTargets: b, skinning: L }), s[T] = D), D; } function x(b, L, S) { var T = b << 0 | L << 1 | S << 2, D = l[T]; return D === void 0 && (D = new ir({ morphTargets: b, skinning: L }), l[T] = D), D; } function w(b, L, S, T, D, I) { var O = b.geometry, B = null, z = y, N = b.customDepthMaterial; if (S.isPointLight === !0 && (z = x, N = b.customDistanceMaterial), N === void 0) {
    var F = !1;
    L.morphTargets === !0 && (O.isBufferGeometry === !0 ? F = O.morphAttributes && O.morphAttributes.position && O.morphAttributes.position.length > 0 : O.isGeometry === !0 && (F = O.morphTargets && O.morphTargets.length > 0));
    var V = !1;
    b.isSkinnedMesh === !0 && (L.skinning === !0 ? V = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", b));
    var Y = b.isInstancedMesh === !0;
    B = z(F, V, Y);
}
else
    B = N; if (e.localClippingEnabled && L.clipShadows === !0 && L.clippingPlanes.length !== 0) {
    var ie = B.uuid, q = L.uuid, Z = c[ie];
    Z === void 0 && (Z = {}, c[ie] = Z);
    var ae = Z[q];
    ae === void 0 && (ae = B.clone(), Z[q] = ae), B = ae;
} return B.visible = L.visible, B.wireframe = L.wireframe, I === mi ? B.side = L.shadowSide !== null ? L.shadowSide : L.side : B.side = L.shadowSide !== null ? L.shadowSide : u[L.side], B.clipShadows = L.clipShadows, B.clippingPlanes = L.clippingPlanes, B.clipIntersection = L.clipIntersection, B.wireframeLinewidth = L.wireframeLinewidth, B.linewidth = L.linewidth, S.isPointLight === !0 && B.isMeshDistanceMaterial === !0 && (B.referencePosition.setFromMatrixPosition(S.matrixWorld), B.nearDistance = T, B.farDistance = D), B; } function E(b, L, S, T, D) { if (b.visible !== !1) {
    var I = b.layers.test(L.layers);
    if (I && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && D === mi) && (!b.frustumCulled || r.intersectsObject(b))) {
        b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse, b.matrixWorld);
        var O = t.update(b), B = b.material;
        if (Array.isArray(B))
            for (var z = O.groups, N = 0, F = z.length; N < F; N++) {
                var V = z[N], Y = B[V.materialIndex];
                if (Y && Y.visible) {
                    var ie = w(b, Y, T, S.near, S.far, D);
                    e.renderBufferDirect(S, null, O, ie, b, V);
                }
            }
        else if (B.visible) {
            var ie = w(b, B, T, S.near, S.far, D);
            e.renderBufferDirect(S, null, O, ie, b, null);
        }
    }
    for (var q = b.children, Z = 0, ae = q.length; Z < ae; Z++)
        E(q[Z], L, S, T, D);
} } }
function $m(e, t, n) { var r = n.isWebGL2; function i() { var P = !1, j = new Ze, se = null, Ee = new Ze(0, 0, 0, 0); return { setMask: function (oe) { se !== oe && !P && (e.colorMask(oe, oe, oe, oe), se = oe); }, setLocked: function (oe) { P = oe; }, setClear: function (oe, Oe, Je, Ke, kt) { kt === !0 && (oe *= Ke, Oe *= Ke, Je *= Ke), j.set(oe, Oe, Je, Ke), Ee.equals(j) === !1 && (e.clearColor(oe, Oe, Je, Ke), Ee.copy(j)); }, reset: function () { P = !1, se = null, Ee.set(-1, 0, 0, 0); } }; } function a() { var P = !1, j = null, se = null, Ee = null; return { setTest: function (oe) { oe ? be(2929) : ze(2929); }, setMask: function (oe) { j !== oe && !P && (e.depthMask(oe), j = oe); }, setFunc: function (oe) { if (se !== oe) {
        if (oe)
            switch (oe) {
                case Jh:
                    e.depthFunc(512);
                    break;
                case $h:
                    e.depthFunc(519);
                    break;
                case Qh:
                    e.depthFunc(513);
                    break;
                case rs:
                    e.depthFunc(515);
                    break;
                case Kh:
                    e.depthFunc(514);
                    break;
                case ef:
                    e.depthFunc(518);
                    break;
                case tf:
                    e.depthFunc(516);
                    break;
                case nf:
                    e.depthFunc(517);
                    break;
                default: e.depthFunc(515);
            }
        else
            e.depthFunc(515);
        se = oe;
    } }, setLocked: function (oe) { P = oe; }, setClear: function (oe) { Ee !== oe && (e.clearDepth(oe), Ee = oe); }, reset: function () { P = !1, j = null, se = null, Ee = null; } }; } function o() { var P = !1, j = null, se = null, Ee = null, oe = null, Oe = null, Je = null, Ke = null, kt = null; return { setTest: function (qe) { P || (qe ? be(2960) : ze(2960)); }, setMask: function (qe) { j !== qe && !P && (e.stencilMask(qe), j = qe); }, setFunc: function (qe, Lt, xt) { (se !== qe || Ee !== Lt || oe !== xt) && (e.stencilFunc(qe, Lt, xt), se = qe, Ee = Lt, oe = xt); }, setOp: function (qe, Lt, xt) { (Oe !== qe || Je !== Lt || Ke !== xt) && (e.stencilOp(qe, Lt, xt), Oe = qe, Je = Lt, Ke = xt); }, setLocked: function (qe) { P = qe; }, setClear: function (qe) { kt !== qe && (e.clearStencil(qe), kt = qe); }, reset: function () { P = !1, j = null, se = null, Ee = null, oe = null, Oe = null, Je = null, Ke = null, kt = null; } }; } var s = new i, l = new a, c = new o, u = e.getParameter(34921), h = new Uint8Array(u), f = new Uint8Array(u), d = new Uint8Array(u), p = {}, g = null, v = null, y = null, x = null, w = null, E = null, b = null, L = null, S = null, T = !1, D = null, I = null, O = null, B = null, z = null, N = e.getParameter(35661), F = !1, V = 0, Y = e.getParameter(7938); Y.indexOf("WebGL") !== -1 ? (V = parseFloat(/^WebGL\ ([0-9])/.exec(Y)[1]), F = V >= 1) : Y.indexOf("OpenGL ES") !== -1 && (V = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(Y)[1]), F = V >= 2); var ie = null, q = {}, Z = new Ze, ae = new Ze; function Fe(P, j, se) { var Ee = new Uint8Array(4), oe = e.createTexture(); e.bindTexture(P, oe), e.texParameteri(P, 10241, 9728), e.texParameteri(P, 10240, 9728); for (var Oe = 0; Oe < se; Oe++)
    e.texImage2D(j + Oe, 0, 6408, 1, 1, 0, 6408, 5121, Ee); return oe; } var Be = {}; Be[3553] = Fe(3553, 3553, 1), Be[34067] = Fe(34067, 34069, 6), s.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), be(2929), l.setFunc(rs), it(!1), A(Hl), be(2884), Qe(Tn); function Ne() { for (var P = 0, j = h.length; P < j; P++)
    h[P] = 0; } function Se(P) { H(P, 0); } function H(P, j) { if (h[P] = 1, f[P] === 0 && (e.enableVertexAttribArray(P), f[P] = 1), d[P] !== j) {
    var se = r ? e : t.get("ANGLE_instanced_arrays");
    se[r ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, j), d[P] = j;
} } function We() { for (var P = 0, j = f.length; P !== j; ++P)
    f[P] !== h[P] && (e.disableVertexAttribArray(P), f[P] = 0); } function be(P) { p[P] !== !0 && (e.enable(P), p[P] = !0); } function ze(P) { p[P] !== !1 && (e.disable(P), p[P] = !1); } function pe(P) { return g !== P ? (e.useProgram(P), g = P, !0) : !1; } var W = { [yr]: 32774, [zh]: 32778, [Gh]: 32779 }; if (r)
    W[Yl] = 32775, W[Zl] = 32776;
else {
    var Le = t.get("EXT_blend_minmax");
    Le !== null && (W[Yl] = Le.MIN_EXT, W[Zl] = Le.MAX_EXT);
} var Ge = { [Hh]: 0, [Vh]: 1, [kh]: 768, [Jl]: 770, [Zh]: 776, [Xh]: 774, [jh]: 772, [Wh]: 769, [$l]: 771, [Yh]: 775, [qh]: 773 }; function Qe(P, j, se, Ee, oe, Oe, Je, Ke) { if (P === Tn) {
    v && (ze(3042), v = !1);
    return;
} if (v || (be(3042), v = !0), P !== Uh) {
    if (P !== y || Ke !== T) {
        if ((x !== yr || b !== yr) && (e.blendEquation(32774), x = yr, b = yr), Ke)
            switch (P) {
                case xi:
                    e.blendFuncSeparate(1, 771, 1, 771);
                    break;
                case jl:
                    e.blendFunc(1, 1);
                    break;
                case ql:
                    e.blendFuncSeparate(0, 0, 769, 771);
                    break;
                case Xl:
                    e.blendFuncSeparate(0, 768, 0, 770);
                    break;
                default:
                    console.error("THREE.WebGLState: Invalid blending: ", P);
                    break;
            }
        else
            switch (P) {
                case xi:
                    e.blendFuncSeparate(770, 771, 1, 771);
                    break;
                case jl:
                    e.blendFunc(770, 1);
                    break;
                case ql:
                    e.blendFunc(0, 769);
                    break;
                case Xl:
                    e.blendFunc(0, 768);
                    break;
                default:
                    console.error("THREE.WebGLState: Invalid blending: ", P);
                    break;
            }
        w = null, E = null, L = null, S = null, y = P, T = Ke;
    }
    return;
} oe = oe || j, Oe = Oe || se, Je = Je || Ee, (j !== x || oe !== b) && (e.blendEquationSeparate(W[j], W[oe]), x = j, b = oe), (se !== w || Ee !== E || Oe !== L || Je !== S) && (e.blendFuncSeparate(Ge[se], Ge[Ee], Ge[Oe], Ge[Je]), w = se, E = Ee, L = Oe, S = Je), y = P, T = null; } function Vt(P, j) { P.side === wa ? ze(2884) : be(2884); var se = P.side === ht; j && (se = !se), it(se), P.blending === xi && P.transparent === !1 ? Qe(Tn) : Qe(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.premultipliedAlpha), l.setFunc(P.depthFunc), l.setTest(P.depthTest), l.setMask(P.depthWrite), s.setMask(P.colorWrite); var Ee = P.stencilWrite; c.setTest(Ee), Ee && (c.setMask(P.stencilWriteMask), c.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), c.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), J(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits); } function it(P) { D !== P && (P ? e.frontFace(2304) : e.frontFace(2305), D = P); } function A(P) { P !== Oh ? (be(2884), P !== I && (P === Hl ? e.cullFace(1029) : P === Nh ? e.cullFace(1028) : e.cullFace(1032))) : ze(2884), I = P; } function R(P) { P !== O && (F && e.lineWidth(P), O = P); } function J(P, j, se) { P ? (be(32823), (B !== j || z !== se) && (e.polygonOffset(j, se), B = j, z = se)) : ze(32823); } function k(P) { P ? be(3089) : ze(3089); } function De(P) { P === void 0 && (P = 33984 + N - 1), ie !== P && (e.activeTexture(P), ie = P); } function de(P, j) { ie === null && De(); var se = q[ie]; se === void 0 && (se = { type: void 0, texture: void 0 }, q[ie] = se), (se.type !== P || se.texture !== j) && (e.bindTexture(P, j || Be[P]), se.type = P, se.texture = j); } function ue() { var P = q[ie]; P !== void 0 && P.type !== void 0 && (e.bindTexture(P.type, null), P.type = void 0, P.texture = void 0); } function ge() { try {
    e.compressedTexImage2D.apply(e, arguments);
}
catch (P) {
    console.error("THREE.WebGLState:", P);
} } function Ie() { try {
    e.texImage2D.apply(e, arguments);
}
catch (P) {
    console.error("THREE.WebGLState:", P);
} } function ve() { try {
    e.texImage3D.apply(e, arguments);
}
catch (P) {
    console.error("THREE.WebGLState:", P);
} } function ne(P) { Z.equals(P) === !1 && (e.scissor(P.x, P.y, P.z, P.w), Z.copy(P)); } function he(P) { ae.equals(P) === !1 && (e.viewport(P.x, P.y, P.z, P.w), ae.copy(P)); } function le() { for (var P = 0; P < f.length; P++)
    f[P] === 1 && (e.disableVertexAttribArray(P), f[P] = 0); p = {}, ie = null, q = {}, g = null, y = null, D = null, I = null, s.reset(), l.reset(), c.reset(); } return { buffers: { color: s, depth: l, stencil: c }, initAttributes: Ne, enableAttribute: Se, enableAttributeAndDivisor: H, disableUnusedAttributes: We, enable: be, disable: ze, useProgram: pe, setBlending: Qe, setMaterial: Vt, setFlipSided: it, setCullFace: A, setLineWidth: R, setPolygonOffset: J, setScissorTest: k, activeTexture: De, bindTexture: de, unbindTexture: ue, compressedTexImage2D: ge, texImage2D: Ie, texImage3D: ve, scissor: ne, viewport: he, reset: le }; }
function Qm(e, t, n, r, i, a, o) { var s = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, f = new WeakMap, d, p = !1; try {
    p = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
}
catch { } function g(A, R) { return p ? new OffscreenCanvas(A, R) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"); } function v(A, R, J, k) { var De = 1; if ((A.width > k || A.height > k) && (De = k / Math.max(A.width, A.height)), De < 1 || R === !0)
    if (typeof HTMLImageElement != "undefined" && A instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && A instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && A instanceof ImageBitmap) {
        var de = R ? Ae.floorPowerOfTwo : Math.floor, ue = de(De * A.width), ge = de(De * A.height);
        d === void 0 && (d = g(ue, ge));
        var Ie = J ? g(ue, ge) : d;
        Ie.width = ue, Ie.height = ge;
        var ve = Ie.getContext("2d");
        return ve.drawImage(A, 0, 0, ue, ge), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + A.width + "x" + A.height + ") to (" + ue + "x" + ge + ")."), Ie;
    }
    else
        return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + A.width + "x" + A.height + ")."), A; return A; } function y(A) { return Ae.isPowerOfTwo(A.width) && Ae.isPowerOfTwo(A.height); } function x(A) { return s ? !1 : A.wrapS !== St || A.wrapT !== St || A.minFilter !== st && A.minFilter !== ft; } function w(A, R) { return A.generateMipmaps && R && A.minFilter !== st && A.minFilter !== ft; } function E(A, R, J, k) { e.generateMipmap(A); var De = r.get(R); De.__maxMipLevel = Math.log(Math.max(J, k)) * Math.LOG2E; } function b(A, R, J) { if (s === !1)
    return R; if (A !== null) {
    if (e[A] !== void 0)
        return e[A];
    console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
} var k = R; return R === 6403 && (J === 5126 && (k = 33326), J === 5131 && (k = 33325), J === 5121 && (k = 33321)), R === 6407 && (J === 5126 && (k = 34837), J === 5131 && (k = 34843), J === 5121 && (k = 32849)), R === 6408 && (J === 5126 && (k = 34836), J === 5131 && (k = 34842), J === 5121 && (k = 32856)), k === 33325 || k === 33326 || k === 34842 || k === 34836 ? t.get("EXT_color_buffer_float") : (k === 34843 || k === 34837) && console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."), k; } function L(A) { return A === st || A === us || A === hs ? 9728 : 9729; } function S(A) { var R = A.target; R.removeEventListener("dispose", S), D(R), R.isVideoTexture && f.delete(R), o.memory.textures--; } function T(A) { var R = A.target; R.removeEventListener("dispose", T), I(R), o.memory.textures--; } function D(A) { var R = r.get(A); R.__webglInit !== void 0 && (e.deleteTexture(R.__webglTexture), r.remove(A)); } function I(A) { var R = r.get(A), J = r.get(A.texture); if (!!A) {
    if (J.__webglTexture !== void 0 && e.deleteTexture(J.__webglTexture), A.depthTexture && A.depthTexture.dispose(), A.isWebGLRenderTargetCube)
        for (var k = 0; k < 6; k++)
            e.deleteFramebuffer(R.__webglFramebuffer[k]), R.__webglDepthbuffer && e.deleteRenderbuffer(R.__webglDepthbuffer[k]);
    else
        e.deleteFramebuffer(R.__webglFramebuffer), R.__webglDepthbuffer && e.deleteRenderbuffer(R.__webglDepthbuffer);
    if (A.isWebGLMultiviewRenderTarget) {
        e.deleteTexture(R.__webglColorTexture), e.deleteTexture(R.__webglDepthStencilTexture), o.memory.textures -= 2;
        for (var k = 0, De = R.__webglViewFramebuffers.length; k < De; k++)
            e.deleteFramebuffer(R.__webglViewFramebuffers[k]);
    }
    r.remove(A.texture), r.remove(A);
} } var O = 0; function B() { O = 0; } function z() { var A = O; return A >= l && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + l), O += 1, A; } function N(A, R) { var J = r.get(A); if (A.isVideoTexture && Le(A), A.version > 0 && J.__version !== A.version) {
    var k = A.image;
    if (k === void 0)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
    else if (k.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
    else {
        Be(J, A, R);
        return;
    }
} n.activeTexture(33984 + R), n.bindTexture(3553, J.__webglTexture); } function F(A, R) { var J = r.get(A); if (A.version > 0 && J.__version !== A.version) {
    Be(J, A, R);
    return;
} n.activeTexture(33984 + R), n.bindTexture(35866, J.__webglTexture); } function V(A, R) { var J = r.get(A); if (A.version > 0 && J.__version !== A.version) {
    Be(J, A, R);
    return;
} n.activeTexture(33984 + R), n.bindTexture(32879, J.__webglTexture); } function Y(A, R) { if (A.image.length === 6) {
    var J = r.get(A);
    if (A.version > 0 && J.__version !== A.version) {
        Fe(J, A), n.activeTexture(33984 + R), n.bindTexture(34067, J.__webglTexture), e.pixelStorei(37440, A.flipY);
        for (var k = A && A.isCompressedTexture, De = A.image[0] && A.image[0].isDataTexture, de = [], ue = 0; ue < 6; ue++)
            !k && !De ? de[ue] = v(A.image[ue], !1, !0, c) : de[ue] = De ? A.image[ue].image : A.image[ue];
        var ge = de[0], Ie = y(ge) || s, ve = a.convert(A.format), ne = a.convert(A.type), he = b(A.internalFormat, ve, ne);
        ae(34067, A, Ie);
        var le;
        if (k) {
            for (var ue = 0; ue < 6; ue++) {
                le = de[ue].mipmaps;
                for (var P = 0; P < le.length; P++) {
                    var j = le[P];
                    A.format !== Qt && A.format !== qn ? ve !== null ? n.compressedTexImage2D(34069 + ue, P, he, j.width, j.height, 0, j.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + ue, P, he, j.width, j.height, 0, ve, ne, j.data);
                }
            }
            J.__maxMipLevel = le.length - 1;
        }
        else {
            le = A.mipmaps;
            for (var ue = 0; ue < 6; ue++)
                if (De) {
                    n.texImage2D(34069 + ue, 0, he, de[ue].width, de[ue].height, 0, ve, ne, de[ue].data);
                    for (var P = 0; P < le.length; P++) {
                        var j = le[P], se = j.image[ue].image;
                        n.texImage2D(34069 + ue, P + 1, he, se.width, se.height, 0, ve, ne, se.data);
                    }
                }
                else {
                    n.texImage2D(34069 + ue, 0, he, ve, ne, de[ue]);
                    for (var P = 0; P < le.length; P++) {
                        var j = le[P];
                        n.texImage2D(34069 + ue, P + 1, he, ve, ne, j.image[ue]);
                    }
                }
            J.__maxMipLevel = le.length;
        }
        w(A, Ie) && E(34067, A, ge.width, ge.height), J.__version = A.version, A.onUpdate && A.onUpdate(A);
    }
    else
        n.activeTexture(33984 + R), n.bindTexture(34067, J.__webglTexture);
} } function ie(A, R) { n.activeTexture(33984 + R), n.bindTexture(34067, r.get(A).__webglTexture); } var q = { [Ea]: 10497, [St]: 33071, [Sa]: 33648 }, Z = { [st]: 9728, [us]: 9984, [hs]: 9986, [ft]: 9729, [ec]: 9985, [Ta]: 9987 }; function ae(A, R, J) { J ? (e.texParameteri(A, 10242, q[R.wrapS]), e.texParameteri(A, 10243, q[R.wrapT]), (A === 32879 || A === 35866) && e.texParameteri(A, 32882, q[R.wrapR]), e.texParameteri(A, 10240, Z[R.magFilter]), e.texParameteri(A, 10241, Z[R.minFilter])) : (e.texParameteri(A, 10242, 33071), e.texParameteri(A, 10243, 33071), (A === 32879 || A === 35866) && e.texParameteri(A, 32882, 33071), (R.wrapS !== St || R.wrapT !== St) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(A, 10240, L(R.magFilter)), e.texParameteri(A, 10241, L(R.minFilter)), R.minFilter !== st && R.minFilter !== ft && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")); var k = t.get("EXT_texture_filter_anisotropic"); if (k) {
    if (R.type === wi && t.get("OES_texture_float_linear") === null || R.type === fs && (s || t.get("OES_texture_half_float_linear")) === null)
        return;
    (R.anisotropy > 1 || r.get(R).__currentAnisotropy) && (e.texParameterf(A, k.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(R.anisotropy, i.getMaxAnisotropy())), r.get(R).__currentAnisotropy = R.anisotropy);
} } function Fe(A, R) { A.__webglInit === void 0 && (A.__webglInit = !0, R.addEventListener("dispose", S), A.__webglTexture = e.createTexture(), o.memory.textures++); } function Be(A, R, J) { var k = 3553; R.isDataTexture2DArray && (k = 35866), R.isDataTexture3D && (k = 32879), Fe(A, R), n.activeTexture(33984 + J), n.bindTexture(k, A.__webglTexture), e.pixelStorei(37440, R.flipY), e.pixelStorei(37441, R.premultiplyAlpha), e.pixelStorei(3317, R.unpackAlignment); var De = x(R) && y(R.image) === !1, de = v(R.image, De, !1, u), ue = y(de) || s, ge = a.convert(R.format), Ie = a.convert(R.type), ve = b(R.internalFormat, ge, Ie); ae(k, R, ue); var ne, he = R.mipmaps; if (R.isDepthTexture) {
    if (ve = 6402, R.type === wi) {
        if (s === !1)
            throw new Error("Float Depth Texture only supported in WebGL2.0");
        ve = 36012;
    }
    else
        s && (ve = 33189);
    R.format === xr && ve === 6402 && R.type !== La && R.type !== tc && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), R.type = La, Ie = a.convert(R.type)), R.format === bi && (ve = 34041, R.type !== Ra && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), R.type = Ra, Ie = a.convert(R.type))), n.texImage2D(3553, 0, ve, de.width, de.height, 0, ge, Ie, null);
}
else if (R.isDataTexture)
    if (he.length > 0 && ue) {
        for (var le = 0, P = he.length; le < P; le++)
            ne = he[le], n.texImage2D(3553, le, ve, ne.width, ne.height, 0, ge, Ie, ne.data);
        R.generateMipmaps = !1, A.__maxMipLevel = he.length - 1;
    }
    else
        n.texImage2D(3553, 0, ve, de.width, de.height, 0, ge, Ie, de.data), A.__maxMipLevel = 0;
else if (R.isCompressedTexture) {
    for (var le = 0, P = he.length; le < P; le++)
        ne = he[le], R.format !== Qt && R.format !== qn ? ge !== null ? n.compressedTexImage2D(3553, le, ve, ne.width, ne.height, 0, ne.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, le, ve, ne.width, ne.height, 0, ge, Ie, ne.data);
    A.__maxMipLevel = he.length - 1;
}
else if (R.isDataTexture2DArray)
    n.texImage3D(35866, 0, ve, de.width, de.height, de.depth, 0, ge, Ie, de.data), A.__maxMipLevel = 0;
else if (R.isDataTexture3D)
    n.texImage3D(32879, 0, ve, de.width, de.height, de.depth, 0, ge, Ie, de.data), A.__maxMipLevel = 0;
else if (he.length > 0 && ue) {
    for (var le = 0, P = he.length; le < P; le++)
        ne = he[le], n.texImage2D(3553, le, ve, ge, Ie, ne);
    R.generateMipmaps = !1, A.__maxMipLevel = he.length - 1;
}
else
    n.texImage2D(3553, 0, ve, ge, Ie, de), A.__maxMipLevel = 0; w(R, ue) && E(k, R, de.width, de.height), A.__version = R.version, R.onUpdate && R.onUpdate(R); } function Ne(A, R, J, k) { var De = a.convert(R.texture.format), de = a.convert(R.texture.type), ue = b(R.texture.internalFormat, De, de); n.texImage2D(k, 0, ue, R.width, R.height, 0, De, de, null), e.bindFramebuffer(36160, A), e.framebufferTexture2D(36160, J, k, r.get(R.texture).__webglTexture, 0), e.bindFramebuffer(36160, null); } function Se(A, R, J) { if (e.bindRenderbuffer(36161, A), R.depthBuffer && !R.stencilBuffer) {
    if (J) {
        var k = W(R);
        e.renderbufferStorageMultisample(36161, k, 33189, R.width, R.height);
    }
    else
        e.renderbufferStorage(36161, 33189, R.width, R.height);
    e.framebufferRenderbuffer(36160, 36096, 36161, A);
}
else if (R.depthBuffer && R.stencilBuffer) {
    if (J) {
        var k = W(R);
        e.renderbufferStorageMultisample(36161, k, 35056, R.width, R.height);
    }
    else
        e.renderbufferStorage(36161, 34041, R.width, R.height);
    e.framebufferRenderbuffer(36160, 33306, 36161, A);
}
else {
    var De = a.convert(R.texture.format), de = a.convert(R.texture.type), ue = b(R.texture.internalFormat, De, de);
    if (J) {
        var k = W(R);
        e.renderbufferStorageMultisample(36161, k, ue, R.width, R.height);
    }
    else
        e.renderbufferStorage(36161, ue, R.width, R.height);
} e.bindRenderbuffer(36161, null); } function H(A, R) { var J = R && R.isWebGLRenderTargetCube; if (J)
    throw new Error("Depth Texture with cube render targets is not supported"); if (e.bindFramebuffer(36160, A), !(R.depthTexture && R.depthTexture.isDepthTexture))
    throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); (!r.get(R.depthTexture).__webglTexture || R.depthTexture.image.width !== R.width || R.depthTexture.image.height !== R.height) && (R.depthTexture.image.width = R.width, R.depthTexture.image.height = R.height, R.depthTexture.needsUpdate = !0), N(R.depthTexture, 0); var k = r.get(R.depthTexture).__webglTexture; if (R.depthTexture.format === xr)
    e.framebufferTexture2D(36160, 36096, 3553, k, 0);
else if (R.depthTexture.format === bi)
    e.framebufferTexture2D(36160, 33306, 3553, k, 0);
else
    throw new Error("Unknown depthTexture format"); } function We(A) { var R = r.get(A), J = A.isWebGLRenderTargetCube === !0; if (A.depthTexture) {
    if (J)
        throw new Error("target.depthTexture not supported in Cube render targets");
    H(R.__webglFramebuffer, A);
}
else if (J) {
    R.__webglDepthbuffer = [];
    for (var k = 0; k < 6; k++)
        e.bindFramebuffer(36160, R.__webglFramebuffer[k]), R.__webglDepthbuffer[k] = e.createRenderbuffer(), Se(R.__webglDepthbuffer[k], A);
}
else
    e.bindFramebuffer(36160, R.__webglFramebuffer), R.__webglDepthbuffer = e.createRenderbuffer(), Se(R.__webglDepthbuffer, A); e.bindFramebuffer(36160, null); } function be(A) { var R = r.get(A), J = r.get(A.texture); A.addEventListener("dispose", T), J.__webglTexture = e.createTexture(), o.memory.textures++; var k = A.isWebGLRenderTargetCube === !0, De = A.isWebGLMultisampleRenderTarget === !0, de = A.isWebGLMultiviewRenderTarget === !0, ue = y(A) || s; if (k) {
    R.__webglFramebuffer = [];
    for (var ge = 0; ge < 6; ge++)
        R.__webglFramebuffer[ge] = e.createFramebuffer();
}
else if (R.__webglFramebuffer = e.createFramebuffer(), De)
    if (s) {
        R.__webglMultisampledFramebuffer = e.createFramebuffer(), R.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, R.__webglColorRenderbuffer);
        var Ie = a.convert(A.texture.format), ve = a.convert(A.texture.type), ne = b(A.texture.internalFormat, Ie, ve), he = W(A);
        e.renderbufferStorageMultisample(36161, he, ne, A.width, A.height), e.bindFramebuffer(36160, R.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, R.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), A.depthBuffer && (R.__webglDepthRenderbuffer = e.createRenderbuffer(), Se(R.__webglDepthRenderbuffer, A, !0)), e.bindFramebuffer(36160, null);
    }
    else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
else if (de) {
    var le = A.width, P = A.height, j = A.numViews;
    e.bindFramebuffer(36160, R.__webglFramebuffer);
    var se = t.get("OVR_multiview2");
    o.memory.textures += 2;
    var Ee = e.createTexture();
    e.bindTexture(35866, Ee), e.texParameteri(35866, 10240, 9728), e.texParameteri(35866, 10241, 9728), e.texImage3D(35866, 0, 32856, le, P, j, 0, 6408, 5121, null), se.framebufferTextureMultiviewOVR(36160, 36064, Ee, 0, 0, j);
    var oe = e.createTexture();
    e.bindTexture(35866, oe), e.texParameteri(35866, 10240, 9728), e.texParameteri(35866, 10241, 9728), e.texImage3D(35866, 0, 35056, le, P, j, 0, 34041, 34042, null), se.framebufferTextureMultiviewOVR(36160, 33306, oe, 0, 0, j);
    for (var Oe = new Array(j), ge = 0; ge < j; ++ge)
        Oe[ge] = e.createFramebuffer(), e.bindFramebuffer(36160, Oe[ge]), e.framebufferTextureLayer(36160, 36064, Ee, 0, ge);
    R.__webglColorTexture = Ee, R.__webglDepthStencilTexture = oe, R.__webglViewFramebuffers = Oe, e.bindFramebuffer(36160, null), e.bindTexture(35866, null);
} if (k) {
    n.bindTexture(34067, J.__webglTexture), ae(34067, A.texture, ue);
    for (var ge = 0; ge < 6; ge++)
        Ne(R.__webglFramebuffer[ge], A, 36064, 34069 + ge);
    w(A.texture, ue) && E(34067, A.texture, A.width, A.height), n.bindTexture(34067, null);
}
else
    de || (n.bindTexture(3553, J.__webglTexture), ae(3553, A.texture, ue), Ne(R.__webglFramebuffer, A, 36064, 3553), w(A.texture, ue) && E(3553, A.texture, A.width, A.height), n.bindTexture(3553, null)); A.depthBuffer && We(A); } function ze(A) { var R = A.texture, J = y(A) || s; if (w(R, J)) {
    var k = A.isWebGLRenderTargetCube ? 34067 : 3553, De = r.get(R).__webglTexture;
    n.bindTexture(k, De), E(k, R, A.width, A.height), n.bindTexture(k, null);
} } function pe(A) { if (A.isWebGLMultisampleRenderTarget)
    if (s) {
        var R = r.get(A);
        e.bindFramebuffer(36008, R.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, R.__webglFramebuffer);
        var J = A.width, k = A.height, De = 16384;
        A.depthBuffer && (De |= 256), A.stencilBuffer && (De |= 1024), e.blitFramebuffer(0, 0, J, k, 0, 0, J, k, De, 9728);
    }
    else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."); } function W(A) { return s && A.isWebGLMultisampleRenderTarget ? Math.min(h, A.samples) : 0; } function Le(A) { var R = o.render.frame; f.get(A) !== R && (f.set(A, R), A.update()); } var Ge = !1, Qe = !1; function Vt(A, R) { A && A.isWebGLRenderTarget && (Ge === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Ge = !0), A = A.texture), N(A, R); } function it(A, R) { A && A.isWebGLRenderTargetCube && (Qe === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), Qe = !0), A = A.texture), A && A.isCubeTexture || Array.isArray(A.image) && A.image.length === 6 ? Y(A, R) : ie(A, R); } this.allocateTextureUnit = z, this.resetTextureUnits = B, this.setTexture2D = N, this.setTexture2DArray = F, this.setTexture3D = V, this.setTextureCube = Y, this.setTextureCubeDynamic = ie, this.setupRenderTarget = be, this.updateRenderTargetMipmap = ze, this.updateMultisampleRenderTarget = pe, this.safeSetTexture2D = Vt, this.safeSetTextureCube = it; }
function Km(e, t, n) { var r = n.isWebGL2; function i(a) { var o; if (a === Aa)
    return 5121; if (a === df)
    return 32819; if (a === pf)
    return 32820; if (a === vf)
    return 33635; if (a === uf)
    return 5120; if (a === hf)
    return 5122; if (a === La)
    return 5123; if (a === ff)
    return 5124; if (a === tc)
    return 5125; if (a === wi)
    return 5126; if (a === fs)
    return r ? 5131 : (o = t.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null); if (a === mf)
    return 6406; if (a === qn)
    return 6407; if (a === Qt)
    return 6408; if (a === gf)
    return 6409; if (a === yf)
    return 6410; if (a === xr)
    return 6402; if (a === bi)
    return 34041; if (a === _f)
    return 6403; if (a === wf)
    return 36244; if (a === bf)
    return 33319; if (a === Mf)
    return 33320; if (a === Ef)
    return 36248; if (a === Sf)
    return 36249; if (a === nc || a === rc || a === ic || a === ac)
    if (o = t.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (a === nc)
            return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (a === rc)
            return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (a === ic)
            return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (a === ac)
            return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    }
    else
        return null; if (a === oc || a === sc || a === lc || a === cc)
    if (o = t.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (a === oc)
            return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (a === sc)
            return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (a === lc)
            return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (a === cc)
            return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    }
    else
        return null; if (a === Tf)
    return o = t.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null; if (a === Af || a === Lf || a === Rf || a === Cf || a === Pf || a === Df || a === If || a === Of || a === Nf || a === Ff || a === Bf || a === Uf || a === zf || a === Gf)
    return o = t.get("WEBGL_compressed_texture_astc"), o !== null ? a : null; if (a === Ra)
    return r ? 34042 : (o = t.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null); } return { convert: i }; }
function Us(e, t, n, r) { wt.call(this, e, t, r), this.depthBuffer = !1, this.stencilBuffer = !1, this.numViews = n; }
Us.prototype = Object.assign(Object.create(wt.prototype), { constructor: Us, isWebGLMultiviewRenderTarget: !0, copy: function (e) { return wt.prototype.copy.call(this, e), this.numViews = e.numViews, this; }, setNumViews: function (e) { return this.numViews !== e && (this.numViews = e, this.dispose()), this; } });
function eg(e, t) { var n = 2, r = e.extensions, i = e.properties, a, o, s, l, c, u, h, f = 0; function d() { if (h === void 0) {
    var S = r.get("OVR_multiview2");
    if (h = S !== null && t.getContextAttributes().antialias === !1, h) {
        f = t.getParameter(S.MAX_VIEWS_OVR), a = new Us(0, 0, n), u = new U, l = [], s = [], c = [];
        for (var T = 0; T < f; T++)
            l[T] = new Re, s[T] = new mt;
    }
} return h; } function p(S) { return S.isArrayCamera ? S.cameras : (c[0] = S, c); } function g(S, T) { for (var D = p(S), I = 0; I < D.length; I++)
    l[I].copy(D[I].projectionMatrix); T.setValue(t, "projectionMatrices", l); } function v(S, T) { for (var D = p(S), I = 0; I < D.length; I++)
    l[I].copy(D[I].matrixWorldInverse); T.setValue(t, "viewMatrices", l); } function y(S, T, D) { for (var I = p(T), O = 0; O < I.length; O++)
    l[O].multiplyMatrices(I[O].matrixWorldInverse, S.matrixWorld), s[O].getNormalMatrix(l[O]); D.setValue(t, "modelViewMatrices", l), D.setValue(t, "normalMatrices", s); } function x(S) { if (S.isArrayCamera === void 0)
    return !0; var T = S.cameras; if (T.length > f)
    return !1; for (var D = 1, I = T.length; D < I; D++)
    if (T[0].viewport.z !== T[D].viewport.z || T[0].viewport.w !== T[D].viewport.w)
        return !1; return !0; } function w(S) { if (o ? u.set(o.width, o.height) : e.getDrawingBufferSize(u), S.isArrayCamera) {
    var T = S.cameras[0].viewport;
    a.setSize(T.z, T.w), a.setNumViews(S.cameras.length);
}
else
    a.setSize(u.x, u.y), a.setNumViews(n); } function E(S) { x(S) !== !1 && (o = e.getRenderTarget(), w(S), e.setRenderTarget(a)); } function b(S) { a === e.getRenderTarget() && (e.setRenderTarget(o), L(S)); } function L(S) { var T = a, D = T.numViews, I = i.get(T).__webglViewFramebuffers, O = T.width, B = T.height; if (S.isArrayCamera)
    for (var z = 0; z < D; z++) {
        var N = S.cameras[z].viewport, F = N.x, V = N.y, Y = F + N.z, ie = V + N.w;
        t.bindFramebuffer(36008, I[z]), t.blitFramebuffer(0, 0, O, B, F, V, Y, ie, 16384, 9728);
    }
else
    t.bindFramebuffer(36008, I[0]), t.blitFramebuffer(0, 0, O, B, 0, 0, u.x, u.y, 16384, 9728); } this.isAvailable = d, this.attachCamera = E, this.detachCamera = b, this.updateCameraProjectionMatricesUniform = g, this.updateCameraViewMatricesUniform = v, this.updateObjectMatricesUniforms = y; }
function zs(e) { ct.call(this), this.cameras = e || []; }
zs.prototype = Object.assign(Object.create(ct.prototype), { constructor: zs, isArrayCamera: !0 });
function ro() { K.call(this), this.type = "Group"; }
ro.prototype = Object.assign(Object.create(K.prototype), { constructor: ro, isGroup: !0 });
function Qc(e, t) { var n = this, r = null, i = null, a = "local-floor", o = null, s = [], l = new Map, c = new ct; c.layers.enable(1), c.viewport = new Ze; var u = new ct; u.layers.enable(2), u.viewport = new Ze; var h = new zs([c, u]); h.layers.enable(1), h.layers.enable(2), this.enabled = !1, this.isPresenting = !1, this.getController = function (S) { var T = s[S]; return T === void 0 && (T = new ro, T.matrixAutoUpdate = !1, T.visible = !1, s[S] = T), T; }; function f(S) { var T = l.get(S.inputSource); T && T.dispatchEvent({ type: S.type }); } function d() { l.forEach(function (S, T) { S.dispatchEvent({ type: "disconnected", data: T }), S.visible = !1; }), l.clear(), e.setFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), L.stop(), n.dispatchEvent({ type: "sessionend" }), n.isPresenting = !1; } function p(S) { i = S, L.setContext(r), L.start(), n.dispatchEvent({ type: "sessionstart" }), n.isPresenting = !0; } this.setFramebufferScaleFactor = function () { }, this.setReferenceSpaceType = function (S) { a = S; }, this.getReferenceSpace = function () { return i; }, this.getSession = function () { return r; }, this.setSession = function (S) { if (r = S, r !== null) {
    r.addEventListener("select", f), r.addEventListener("selectstart", f), r.addEventListener("selectend", f), r.addEventListener("squeeze", f), r.addEventListener("squeezestart", f), r.addEventListener("squeezeend", f), r.addEventListener("end", d);
    var T = t.getContextAttributes(), D = { antialias: T.antialias, alpha: T.alpha, depth: T.depth, stencil: T.stencil }, I = new XRWebGLLayer(r, t, D);
    r.updateRenderState({ baseLayer: I }), r.requestReferenceSpace(a).then(p), r.addEventListener("inputsourceschange", g);
} }; function g(S) { for (var T = r.inputSources, D = 0; D < s.length; D++)
    l.set(T[D], s[D]); for (var D = 0; D < S.removed.length; D++) {
    var I = S.removed[D], O = l.get(I);
    O && (O.dispatchEvent({ type: "disconnected", data: I }), l.delete(I));
} for (var D = 0; D < S.added.length; D++) {
    var I = S.added[D], O = l.get(I);
    O && O.dispatchEvent({ type: "connected", data: I });
} } var v = new M, y = new M; function x(S, T, D) { v.setFromMatrixPosition(T.matrixWorld), y.setFromMatrixPosition(D.matrixWorld); var I = v.distanceTo(y), O = T.projectionMatrix.elements, B = D.projectionMatrix.elements, z = O[14] / (O[10] - 1), N = O[14] / (O[10] + 1), F = (O[9] + 1) / O[5], V = (O[9] - 1) / O[5], Y = (O[8] - 1) / O[0], ie = (B[8] + 1) / B[0], q = z * Y, Z = z * ie, ae = I / (-Y + ie), Fe = ae * -Y; T.matrixWorld.decompose(S.position, S.quaternion, S.scale), S.translateX(Fe), S.translateZ(ae), S.matrixWorld.compose(S.position, S.quaternion, S.scale), S.matrixWorldInverse.getInverse(S.matrixWorld); var Be = z + ae, Ne = N + ae, Se = q - Fe, H = Z + (I - Fe), We = F * N / Ne * Be, be = V * N / Ne * Be; S.projectionMatrix.makePerspective(Se, H, We, be, Be, Ne); } function w(S, T) { T === null ? S.matrixWorld.copy(S.matrix) : S.matrixWorld.multiplyMatrices(T.matrixWorld, S.matrix), S.matrixWorldInverse.getInverse(S.matrixWorld); } this.getCamera = function (S) { var T = S.parent, D = h.cameras; w(h, T); for (var I = 0; I < D.length; I++)
    w(D[I], T); S.matrixWorld.copy(h.matrixWorld); for (var O = S.children, I = 0, B = O.length; I < B; I++)
    O[I].updateMatrixWorld(!0); return x(h, c, u), h; }; var E = null; function b(S, T) { if (o = T.getViewerPose(i), o !== null) {
    var D = o.views, I = r.renderState.baseLayer;
    e.setFramebuffer(I.framebuffer);
    for (var O = 0; O < D.length; O++) {
        var B = D[O], z = I.getViewport(B), N = B.transform.inverse.matrix, F = h.cameras[O];
        F.matrix.fromArray(N).getInverse(F.matrix), F.projectionMatrix.fromArray(B.projectionMatrix), F.viewport.set(z.x, z.y, z.width, z.height), O === 0 && h.matrix.copy(F.matrix);
    }
} for (var V = r.inputSources, O = 0; O < s.length; O++) {
    var Y = s[O], ie = V[O];
    if (ie) {
        var q = T.getPose(ie.targetRaySpace, i);
        if (q !== null) {
            Y.matrix.fromArray(q.transform.matrix), Y.matrix.decompose(Y.position, Y.rotation, Y.scale), Y.visible = !0;
            continue;
        }
    }
    Y.visible = !1;
} E && E(S, T); } var L = new Cc; L.setAnimationLoop(b), this.setAnimationLoop = function (S) { E = S; }, this.dispose = function () { }; }
Object.assign(Qc.prototype, dn.prototype);
function Kc(e) { e = e || {}; var t = e.canvas !== void 0 ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), n = e.context !== void 0 ? e.context : null, r = e.alpha !== void 0 ? e.alpha : !1, i = e.depth !== void 0 ? e.depth : !0, a = e.stencil !== void 0 ? e.stencil : !0, o = e.antialias !== void 0 ? e.antialias : !1, s = e.premultipliedAlpha !== void 0 ? e.premultipliedAlpha : !0, l = e.preserveDrawingBuffer !== void 0 ? e.preserveDrawingBuffer : !1, c = e.powerPreference !== void 0 ? e.powerPreference : "default", u = e.failIfMajorPerformanceCaveat !== void 0 ? e.failIfMajorPerformanceCaveat : !1, h = null, f = null; this.domElement = t, this.debug = { checkShaderErrors: !0 }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = Ct, this.physicallyCorrectLights = !1, this.toneMapping = is, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4; var d = this, p = !1, g = null, v = 0, y = 0, x = null, w = null, E = -1, b = { geometry: null, program: null, wireframe: !1 }, L = null, S = null, T = new Ze, D = new Ze, I = null, O = t.width, B = t.height, z = 1, N = null, F = null, V = new Ze(0, 0, O, B), Y = new Ze(0, 0, O, B), ie = !1, q = new to, Z = new Nv, ae = !1, Fe = !1, Be = new Re, Ne = new M; function Se() { return x === null ? z : 1; } var H; try {
    var We = { alpha: r, depth: i, stencil: a, antialias: o, premultipliedAlpha: s, preserveDrawingBuffer: l, powerPreference: c, failIfMajorPerformanceCaveat: u, xrCompatible: !0 };
    if (t.addEventListener("webglcontextlost", le, !1), t.addEventListener("webglcontextrestored", P, !1), H = n || t.getContext("webgl", We) || t.getContext("experimental-webgl", We), H === null)
        throw t.getContext("webgl") !== null ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    H.getShaderPrecisionFormat === void 0 && (H.getShaderPrecisionFormat = function () { return { rangeMin: 1, rangeMax: 1, precision: 1 }; });
}
catch (m) {
    throw console.error("THREE.WebGLRenderer: " + m.message), m;
} var be, ze, pe, W, Le, Ge, Qe, Vt, it, A, R, J, k, De, de, ue, ge; function Ie() { be = new Fv(H), ze = new Ov(H, be, e), ze.isWebGL2 === !1 && (be.get("WEBGL_depth_texture"), be.get("OES_texture_float"), be.get("OES_texture_half_float"), be.get("OES_texture_half_float_linear"), be.get("OES_standard_derivatives"), be.get("OES_element_index_uint"), be.get("ANGLE_instanced_arrays")), be.get("OES_texture_float_linear"), ge = new Km(H, be, ze), pe = new $m(H, be, ze), pe.scissor(D.copy(Y).multiplyScalar(z).floor()), pe.viewport(T.copy(V).multiplyScalar(z).floor()), W = new zv(H), Le = new Gm, Ge = new Qm(H, be, pe, Le, ze, ge, W), Qe = new Pv(H), Vt = new Bv(H, Qe, W), it = new Vv(H, Vt, Qe, W), De = new Hv(H), A = new zm(d, be, ze), R = new km, J = new Ym, k = new Dv(d, pe, it, s), de = new Iv(H, be, W, ze), ue = new Uv(H, be, W, ze), W.programs = A.programs, d.capabilities = ze, d.extensions = be, d.properties = Le, d.renderLists = R, d.state = pe, d.info = W; } Ie(); var ve = new Qc(d, H); this.xr = ve; var ne = new eg(d, H), he = new $c(d, it, ze.maxTextureSize); this.shadowMap = he, this.getContext = function () { return H; }, this.getContextAttributes = function () { return H.getContextAttributes(); }, this.forceContextLoss = function () { var m = be.get("WEBGL_lose_context"); m && m.loseContext(); }, this.forceContextRestore = function () { var m = be.get("WEBGL_lose_context"); m && m.restoreContext(); }, this.getPixelRatio = function () { return z; }, this.setPixelRatio = function (m) { m !== void 0 && (z = m, this.setSize(O, B, !1)); }, this.getSize = function (m) { return m === void 0 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), m = new U), m.set(O, B); }, this.setSize = function (m, _, C) { if (ve.isPresenting) {
    console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
    return;
} O = m, B = _, t.width = Math.floor(m * z), t.height = Math.floor(_ * z), C !== !1 && (t.style.width = m + "px", t.style.height = _ + "px"), this.setViewport(0, 0, m, _); }, this.getDrawingBufferSize = function (m) { return m === void 0 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), m = new U), m.set(O * z, B * z).floor(); }, this.setDrawingBufferSize = function (m, _, C) { O = m, B = _, z = C, t.width = Math.floor(m * C), t.height = Math.floor(_ * C), this.setViewport(0, 0, m, _); }, this.getCurrentViewport = function (m) { return m === void 0 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), m = new Ze), m.copy(T); }, this.getViewport = function (m) { return m.copy(V); }, this.setViewport = function (m, _, C, G) { m.isVector4 ? V.set(m.x, m.y, m.z, m.w) : V.set(m, _, C, G), pe.viewport(T.copy(V).multiplyScalar(z).floor()); }, this.getScissor = function (m) { return m.copy(Y); }, this.setScissor = function (m, _, C, G) { m.isVector4 ? Y.set(m.x, m.y, m.z, m.w) : Y.set(m, _, C, G), pe.scissor(D.copy(Y).multiplyScalar(z).floor()); }, this.getScissorTest = function () { return ie; }, this.setScissorTest = function (m) { pe.setScissorTest(ie = m); }, this.setOpaqueSort = function (m) { N = m; }, this.setTransparentSort = function (m) { F = m; }, this.getClearColor = function () { return k.getClearColor(); }, this.setClearColor = function () { k.setClearColor.apply(k, arguments); }, this.getClearAlpha = function () { return k.getClearAlpha(); }, this.setClearAlpha = function () { k.setClearAlpha.apply(k, arguments); }, this.clear = function (m, _, C) { var G = 0; (m === void 0 || m) && (G |= 16384), (_ === void 0 || _) && (G |= 256), (C === void 0 || C) && (G |= 1024), H.clear(G); }, this.clearColor = function () { this.clear(!0, !1, !1); }, this.clearDepth = function () { this.clear(!1, !0, !1); }, this.clearStencil = function () { this.clear(!1, !1, !0); }, this.dispose = function () { t.removeEventListener("webglcontextlost", le, !1), t.removeEventListener("webglcontextrestored", P, !1), R.dispose(), J.dispose(), Le.dispose(), it.dispose(), ve.dispose(), qe.stop(); }; function le(m) { m.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), p = !0; } function P() { console.log("THREE.WebGLRenderer: Context Restored."), p = !1, Ie(); } function j(m) { var _ = m.target; _.removeEventListener("dispose", j), se(_); } function se(m) { Ee(m), Le.remove(m); } function Ee(m) { var _ = Le.get(m).program; m.program = void 0, _ !== void 0 && A.releaseProgram(_); } function oe(m, _) { m.render(function (C) { d.renderBufferImmediate(C, _); }); } this.renderBufferImmediate = function (m, _) { pe.initAttributes(); var C = Le.get(m); m.hasPositions && !C.position && (C.position = H.createBuffer()), m.hasNormals && !C.normal && (C.normal = H.createBuffer()), m.hasUvs && !C.uv && (C.uv = H.createBuffer()), m.hasColors && !C.color && (C.color = H.createBuffer()); var G = _.getAttributes(); m.hasPositions && (H.bindBuffer(34962, C.position), H.bufferData(34962, m.positionArray, 35048), pe.enableAttribute(G.position), H.vertexAttribPointer(G.position, 3, 5126, !1, 0, 0)), m.hasNormals && (H.bindBuffer(34962, C.normal), H.bufferData(34962, m.normalArray, 35048), pe.enableAttribute(G.normal), H.vertexAttribPointer(G.normal, 3, 5126, !1, 0, 0)), m.hasUvs && (H.bindBuffer(34962, C.uv), H.bufferData(34962, m.uvArray, 35048), pe.enableAttribute(G.uv), H.vertexAttribPointer(G.uv, 2, 5126, !1, 0, 0)), m.hasColors && (H.bindBuffer(34962, C.color), H.bufferData(34962, m.colorArray, 35048), pe.enableAttribute(G.color), H.vertexAttribPointer(G.color, 3, 5126, !1, 0, 0)), pe.disableUnusedAttributes(), H.drawArrays(4, 0, m.count), m.count = 0; }; var Oe = new Ln; this.renderBufferDirect = function (m, _, C, G, X, me) { _ === null && (_ = Oe); var ce = X.isMesh && X.matrixWorld.determinant() < 0, Ce = ya(m, _, G, X); pe.setMaterial(G, ce); var Me = !1; (b.geometry !== C.id || b.program !== Ce.id || b.wireframe !== (G.wireframe === !0)) && (b.geometry = C.id, b.program = Ce.id, b.wireframe = G.wireframe === !0, Me = !0), (G.morphTargets || G.morphNormals) && (De.update(X, C, G, Ce), Me = !0); var Te = C.index, Xe = C.attributes.position; if (Te === null) {
    if (Xe === void 0 || Xe.count === 0)
        return;
}
else if (Te.count === 0)
    return; var He = 1; G.wireframe === !0 && (Te = Vt.getWireframeAttribute(C), He = 2); var Ve, ye = de; Te !== null && (Ve = Qe.get(Te), ye = ue, ye.setIndex(Ve)), Me && (Je(X, C, G, Ce), Te !== null && H.bindBuffer(34963, Ve.buffer)); var re = Te !== null ? Te.count : Xe.count, $t = C.drawRange.start * He, at = C.drawRange.count * He, gr = me !== null ? me.start * He : 0, Rt = me !== null ? me.count * He : 1 / 0, _t = Math.max($t, gr), ts = Math.min(re, $t + at, gr + Rt) - 1, _a = Math.max(0, ts - _t + 1); if (_a !== 0) {
    if (X.isMesh)
        G.wireframe === !0 ? (pe.setLineWidth(G.wireframeLinewidth * Se()), ye.setMode(1)) : ye.setMode(4);
    else if (X.isLine) {
        var ns = G.linewidth;
        ns === void 0 && (ns = 1), pe.setLineWidth(ns * Se()), X.isLineSegments ? ye.setMode(1) : X.isLineLoop ? ye.setMode(2) : ye.setMode(3);
    }
    else
        X.isPoints ? ye.setMode(0) : X.isSprite && ye.setMode(4);
    X.isInstancedMesh ? ye.renderInstances(C, _t, _a, X.count) : C.isInstancedBufferGeometry ? ye.renderInstances(C, _t, _a, C.maxInstancedCount) : ye.render(_t, _a);
} }; function Je(m, _, C, G) { if (!(ze.isWebGL2 === !1 && (m.isInstancedMesh || _.isInstancedBufferGeometry) && be.get("ANGLE_instanced_arrays") === null)) {
    pe.initAttributes();
    var X = _.attributes, me = G.getAttributes(), ce = C.defaultAttributeValues;
    for (var Ce in me) {
        var Me = me[Ce];
        if (Me >= 0) {
            var Te = X[Ce];
            if (Te !== void 0) {
                var Xe = Te.normalized, He = Te.itemSize, Ve = Qe.get(Te);
                if (Ve === void 0)
                    continue;
                var ye = Ve.buffer, re = Ve.type, $t = Ve.bytesPerElement;
                if (Te.isInterleavedBufferAttribute) {
                    var at = Te.data, gr = at.stride, Rt = Te.offset;
                    at && at.isInstancedInterleavedBuffer ? (pe.enableAttributeAndDivisor(Me, at.meshPerAttribute), _.maxInstancedCount === void 0 && (_.maxInstancedCount = at.meshPerAttribute * at.count)) : pe.enableAttribute(Me), H.bindBuffer(34962, ye), H.vertexAttribPointer(Me, He, re, Xe, gr * $t, Rt * $t);
                }
                else
                    Te.isInstancedBufferAttribute ? (pe.enableAttributeAndDivisor(Me, Te.meshPerAttribute), _.maxInstancedCount === void 0 && (_.maxInstancedCount = Te.meshPerAttribute * Te.count)) : pe.enableAttribute(Me), H.bindBuffer(34962, ye), H.vertexAttribPointer(Me, He, re, Xe, 0, 0);
            }
            else if (Ce === "instanceMatrix") {
                var Ve = Qe.get(m.instanceMatrix);
                if (Ve === void 0)
                    continue;
                var ye = Ve.buffer, re = Ve.type;
                pe.enableAttributeAndDivisor(Me + 0, 1), pe.enableAttributeAndDivisor(Me + 1, 1), pe.enableAttributeAndDivisor(Me + 2, 1), pe.enableAttributeAndDivisor(Me + 3, 1), H.bindBuffer(34962, ye), H.vertexAttribPointer(Me + 0, 4, re, !1, 64, 0), H.vertexAttribPointer(Me + 1, 4, re, !1, 64, 16), H.vertexAttribPointer(Me + 2, 4, re, !1, 64, 32), H.vertexAttribPointer(Me + 3, 4, re, !1, 64, 48);
            }
            else if (ce !== void 0) {
                var _t = ce[Ce];
                if (_t !== void 0)
                    switch (_t.length) {
                        case 2:
                            H.vertexAttrib2fv(Me, _t);
                            break;
                        case 3:
                            H.vertexAttrib3fv(Me, _t);
                            break;
                        case 4:
                            H.vertexAttrib4fv(Me, _t);
                            break;
                        default: H.vertexAttrib1fv(Me, _t);
                    }
            }
        }
    }
    pe.disableUnusedAttributes();
} } this.compile = function (m, _) { f = J.get(m, _), f.init(), m.traverse(function (C) { C.isLight && (f.pushLight(C), C.castShadow && f.pushShadow(C)); }), f.setupLights(_), m.traverse(function (C) { if (C.material)
    if (Array.isArray(C.material))
        for (var G = 0; G < C.material.length; G++)
            vi(C.material[G], m, C);
    else
        vi(C.material, m, C); }); }; var Ke = null; function kt(m) { ve.isPresenting || Ke && Ke(m); } var qe = new Cc; qe.setAnimationLoop(kt), typeof window != "undefined" && qe.setContext(window), this.setAnimationLoop = function (m) { Ke = m, ve.setAnimationLoop(m), qe.start(); }, this.render = function (m, _) { var C, G; if (arguments[2] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), C = arguments[2]), arguments[3] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), G = arguments[3]), !(_ && _.isCamera)) {
    console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
    return;
} if (!p) {
    b.geometry = null, b.program = null, b.wireframe = !1, E = -1, L = null, m.autoUpdate === !0 && m.updateMatrixWorld(), _.parent === null && _.updateMatrixWorld(), ve.enabled && ve.isPresenting && (_ = ve.getCamera(_)), f = J.get(m, _), f.init(), m.onBeforeRender(d, m, _, C || x), Be.multiplyMatrices(_.projectionMatrix, _.matrixWorldInverse), q.setFromMatrix(Be), Fe = this.localClippingEnabled, ae = Z.init(this.clippingPlanes, Fe, _), h = R.get(m, _), h.init(), Lt(m, _, 0, d.sortObjects), d.sortObjects === !0 && h.sort(N, F), ae && Z.beginShadows();
    var X = f.state.shadowsArray;
    he.render(X, m, _), f.setupLights(_), ae && Z.endShadows(), this.info.autoReset && this.info.reset(), C !== void 0 && this.setRenderTarget(C), ve.enabled && ne.isAvailable() && ne.attachCamera(_), k.render(h, m, _, G);
    var me = h.opaque, ce = h.transparent;
    if (m.overrideMaterial) {
        var Ce = m.overrideMaterial;
        me.length && xt(me, m, _, Ce), ce.length && xt(ce, m, _, Ce);
    }
    else
        me.length && xt(me, m, _), ce.length && xt(ce, m, _);
    m.onAfterRender(d, m, _), x !== null && (Ge.updateRenderTargetMipmap(x), Ge.updateMultisampleRenderTarget(x)), pe.buffers.depth.setTest(!0), pe.buffers.depth.setMask(!0), pe.buffers.color.setMask(!0), pe.setPolygonOffset(!1), ve.enabled && ne.isAvailable() && ne.detachCamera(_), h = null, f = null;
} }; function Lt(m, _, C, G) { if (m.visible !== !1) {
    var X = m.layers.test(_.layers);
    if (X) {
        if (m.isGroup)
            C = m.renderOrder;
        else if (m.isLOD)
            m.autoUpdate === !0 && m.update(_);
        else if (m.isLight)
            f.pushLight(m), m.castShadow && f.pushShadow(m);
        else if (m.isSprite) {
            if (!m.frustumCulled || q.intersectsSprite(m)) {
                G && Ne.setFromMatrixPosition(m.matrixWorld).applyMatrix4(Be);
                var me = it.update(m), ce = m.material;
                ce.visible && h.push(m, me, ce, C, Ne.z, null);
            }
        }
        else if (m.isImmediateRenderObject)
            G && Ne.setFromMatrixPosition(m.matrixWorld).applyMatrix4(Be), h.push(m, null, m.material, C, Ne.z, null);
        else if ((m.isMesh || m.isLine || m.isPoints) && (m.isSkinnedMesh && m.skeleton.frame !== W.render.frame && (m.skeleton.update(), m.skeleton.frame = W.render.frame), !m.frustumCulled || q.intersectsObject(m))) {
            G && Ne.setFromMatrixPosition(m.matrixWorld).applyMatrix4(Be);
            var me = it.update(m), ce = m.material;
            if (Array.isArray(ce))
                for (var Ce = me.groups, Me = 0, Te = Ce.length; Me < Te; Me++) {
                    var Xe = Ce[Me], He = ce[Xe.materialIndex];
                    He && He.visible && h.push(m, me, He, C, Ne.z, Xe);
                }
            else
                ce.visible && h.push(m, me, ce, C, Ne.z, null);
        }
    }
    for (var Ve = m.children, Me = 0, Te = Ve.length; Me < Te; Me++)
        Lt(Ve[Me], _, C, G);
} } function xt(m, _, C, G) { for (var X = 0, me = m.length; X < me; X++) {
    var ce = m[X], Ce = ce.object, Me = ce.geometry, Te = G === void 0 ? ce.material : G, Xe = ce.group;
    if (C.isArrayCamera)
        if (S = C, ve.enabled && ne.isAvailable())
            vr(Ce, _, C, Me, Te, Xe);
        else
            for (var He = C.cameras, Ve = 0, ye = He.length; Ve < ye; Ve++) {
                var re = He[Ve];
                Ce.layers.test(re.layers) && (pe.viewport(T.copy(re.viewport)), f.setupLights(re), vr(Ce, _, re, Me, Te, Xe));
            }
    else
        S = null, vr(Ce, _, C, Me, Te, Xe);
} } function vr(m, _, C, G, X, me) { if (m.onBeforeRender(d, _, C, G, X, me), f = J.get(_, S || C), m.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, m.matrixWorld), m.normalMatrix.getNormalMatrix(m.modelViewMatrix), m.isImmediateRenderObject) {
    var ce = ya(C, _, X, m);
    pe.setMaterial(X), b.geometry = null, b.program = null, b.wireframe = !1, oe(m, ce);
}
else
    d.renderBufferDirect(C, _, G, X, m, me); m.onAfterRender(d, _, C, G, X, me), f = J.get(_, S || C); } function vi(m, _, C) { var G = Le.get(m), X = f.state.lights, me = f.state.shadowsArray, ce = X.state.version, Ce = A.getParameters(m, X.state, me, _, Z.numPlanes, Z.numIntersection, C), Me = A.getProgramCacheKey(m, Ce), Te = G.program, Xe = !0; if (Te === void 0)
    m.addEventListener("dispose", j);
else if (Te.cacheKey !== Me)
    Ee(m);
else if (G.lightsStateVersion !== ce)
    G.lightsStateVersion = ce, Xe = !1;
else {
    if (Ce.shaderID !== void 0)
        return;
    Xe = !1;
} if (Xe) {
    if (Ce.shaderID) {
        var He = _n[Ce.shaderID];
        G.shader = { name: m.type, uniforms: tr(He.uniforms), vertexShader: He.vertexShader, fragmentShader: He.fragmentShader };
    }
    else
        G.shader = { name: m.type, uniforms: m.uniforms, vertexShader: m.vertexShader, fragmentShader: m.fragmentShader };
    m.onBeforeCompile(G.shader, d), Me = A.getProgramCacheKey(m, Ce), Te = A.acquireProgram(m, G.shader, Ce, Me), G.program = Te, G.environment = m.isMeshStandardMaterial ? _.environment : null, G.outputEncoding = d.outputEncoding, m.program = Te;
} var Ve = Te.getAttributes(); if (m.morphTargets) {
    m.numSupportedMorphTargets = 0;
    for (var ye = 0; ye < d.maxMorphTargets; ye++)
        Ve["morphTarget" + ye] >= 0 && m.numSupportedMorphTargets++;
} if (m.morphNormals) {
    m.numSupportedMorphNormals = 0;
    for (var ye = 0; ye < d.maxMorphNormals; ye++)
        Ve["morphNormal" + ye] >= 0 && m.numSupportedMorphNormals++;
} var re = G.shader.uniforms; (!m.isShaderMaterial && !m.isRawShaderMaterial || m.clipping === !0) && (G.numClippingPlanes = Z.numPlanes, G.numIntersection = Z.numIntersection, re.clippingPlanes = Z.uniform), G.fog = _.fog, G.needsLights = Dh(m), G.lightsStateVersion = ce, G.needsLights && (re.ambientLightColor.value = X.state.ambient, re.lightProbe.value = X.state.probe, re.directionalLights.value = X.state.directional, re.spotLights.value = X.state.spot, re.rectAreaLights.value = X.state.rectArea, re.pointLights.value = X.state.point, re.hemisphereLights.value = X.state.hemi, re.directionalShadowMap.value = X.state.directionalShadowMap, re.directionalShadowMatrix.value = X.state.directionalShadowMatrix, re.spotShadowMap.value = X.state.spotShadowMap, re.spotShadowMatrix.value = X.state.spotShadowMatrix, re.pointShadowMap.value = X.state.pointShadowMap, re.pointShadowMatrix.value = X.state.pointShadowMatrix); var $t = G.program.getUniforms(), at = On.seqWithValue($t.seq, re); G.uniformsList = at; } function ya(m, _, C, G) { Ge.resetTextureUnits(); var X = _.fog, me = C.isMeshStandardMaterial ? _.environment : null, ce = Le.get(C), Ce = f.state.lights; if (ae && (Fe || m !== L)) {
    var Me = m === L && C.id === E;
    Z.setState(C.clippingPlanes, C.clipIntersection, C.clipShadows, m, ce, Me);
} C.version === ce.__version && (ce.program === void 0 || C.fog && ce.fog !== X || ce.environment !== me || ce.needsLights && ce.lightsStateVersion !== Ce.state.version || ce.numClippingPlanes !== void 0 && (ce.numClippingPlanes !== Z.numPlanes || ce.numIntersection !== Z.numIntersection) || ce.outputEncoding !== d.outputEncoding) && (C.needsUpdate = !0), C.version !== ce.__version && (vi(C, _, G), ce.__version = C.version); var Te = !1, Xe = !1, He = !1, Ve = ce.program, ye = Ve.getUniforms(), re = ce.shader.uniforms; if (pe.useProgram(Ve.program) && (Te = !0, Xe = !0, He = !0), C.id !== E && (E = C.id, Xe = !0), Te || L !== m) {
    if (Ve.numMultiviewViews > 0 ? ne.updateCameraProjectionMatricesUniform(m, ye) : ye.setValue(H, "projectionMatrix", m.projectionMatrix), ze.logarithmicDepthBuffer && ye.setValue(H, "logDepthBufFC", 2 / (Math.log(m.far + 1) / Math.LN2)), L !== m && (L = m, Xe = !0, He = !0), C.isShaderMaterial || C.isMeshPhongMaterial || C.isMeshToonMaterial || C.isMeshStandardMaterial || C.envMap) {
        var $t = ye.map.cameraPosition;
        $t !== void 0 && $t.setValue(H, Ne.setFromMatrixPosition(m.matrixWorld));
    }
    (C.isMeshPhongMaterial || C.isMeshToonMaterial || C.isMeshLambertMaterial || C.isMeshBasicMaterial || C.isMeshStandardMaterial || C.isShaderMaterial) && ye.setValue(H, "isOrthographic", m.isOrthographicCamera === !0), (C.isMeshPhongMaterial || C.isMeshToonMaterial || C.isMeshLambertMaterial || C.isMeshBasicMaterial || C.isMeshStandardMaterial || C.isShaderMaterial || C.skinning) && (Ve.numMultiviewViews > 0 ? ne.updateCameraViewMatricesUniform(m, ye) : ye.setValue(H, "viewMatrix", m.matrixWorldInverse));
} if (C.skinning) {
    ye.setOptional(H, G, "bindMatrix"), ye.setOptional(H, G, "bindMatrixInverse");
    var at = G.skeleton;
    if (at) {
        var gr = at.bones;
        if (ze.floatVertexTextures) {
            if (at.boneTexture === void 0) {
                var Rt = Math.sqrt(gr.length * 4);
                Rt = Ae.ceilPowerOfTwo(Rt), Rt = Math.max(Rt, 4);
                var _t = new Float32Array(Rt * Rt * 4);
                _t.set(at.boneMatrices);
                var ts = new Hr(_t, Rt, Rt, Qt, wi);
                at.boneMatrices = _t, at.boneTexture = ts, at.boneTextureSize = Rt;
            }
            ye.setValue(H, "boneTexture", at.boneTexture, Ge), ye.setValue(H, "boneTextureSize", at.boneTextureSize);
        }
        else
            ye.setOptional(H, at, "boneMatrices");
    }
} return (Xe || ce.receiveShadow !== G.receiveShadow) && (ce.receiveShadow = G.receiveShadow, ye.setValue(H, "receiveShadow", G.receiveShadow)), Xe && (ye.setValue(H, "toneMappingExposure", d.toneMappingExposure), ye.setValue(H, "toneMappingWhitePoint", d.toneMappingWhitePoint), ce.needsLights && Ph(re, He), X && C.fog && bh(re, X), C.isMeshBasicMaterial ? Bt(re, C) : C.isMeshLambertMaterial ? (Bt(re, C), Mh(re, C)) : C.isMeshToonMaterial ? (Bt(re, C), Sh(re, C)) : C.isMeshPhongMaterial ? (Bt(re, C), Eh(re, C)) : C.isMeshStandardMaterial ? (Bt(re, C, me), C.isMeshPhysicalMaterial ? Th(re, C, me) : Gl(re, C, me)) : C.isMeshMatcapMaterial ? (Bt(re, C), Ah(re, C)) : C.isMeshDepthMaterial ? (Bt(re, C), Lh(re, C)) : C.isMeshDistanceMaterial ? (Bt(re, C), Rh(re, C)) : C.isMeshNormalMaterial ? (Bt(re, C), Ch(re, C)) : C.isLineBasicMaterial ? (xa(re, C), C.isLineDashedMaterial && mr(re, C)) : C.isPointsMaterial ? _h(re, C) : C.isSpriteMaterial ? wh(re, C) : C.isShadowMaterial && (re.color.value.copy(C.color), re.opacity.value = C.opacity), re.ltc_1 !== void 0 && (re.ltc_1.value = Q.LTC_1), re.ltc_2 !== void 0 && (re.ltc_2.value = Q.LTC_2), On.upload(H, ce.uniformsList, re, Ge), C.isShaderMaterial && (C.uniformsNeedUpdate = !1)), C.isShaderMaterial && C.uniformsNeedUpdate === !0 && (On.upload(H, ce.uniformsList, re, Ge), C.uniformsNeedUpdate = !1), C.isSpriteMaterial && ye.setValue(H, "center", G.center), Ve.numMultiviewViews > 0 ? ne.updateObjectMatricesUniforms(G, m, ye) : (ye.setValue(H, "modelViewMatrix", G.modelViewMatrix), ye.setValue(H, "normalMatrix", G.normalMatrix)), ye.setValue(H, "modelMatrix", G.matrixWorld), Ve; } function Bt(m, _, C) { m.opacity.value = _.opacity, _.color && m.diffuse.value.copy(_.color), _.emissive && m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity), _.map && (m.map.value = _.map), _.alphaMap && (m.alphaMap.value = _.alphaMap), _.specularMap && (m.specularMap.value = _.specularMap); var G = _.envMap || C; G && (m.envMap.value = G, m.flipEnvMap.value = G.isCubeTexture ? -1 : 1, m.reflectivity.value = _.reflectivity, m.refractionRatio.value = _.refractionRatio, m.maxMipLevel.value = Le.get(G).__maxMipLevel), _.lightMap && (m.lightMap.value = _.lightMap, m.lightMapIntensity.value = _.lightMapIntensity), _.aoMap && (m.aoMap.value = _.aoMap, m.aoMapIntensity.value = _.aoMapIntensity); var X; _.map ? X = _.map : _.specularMap ? X = _.specularMap : _.displacementMap ? X = _.displacementMap : _.normalMap ? X = _.normalMap : _.bumpMap ? X = _.bumpMap : _.roughnessMap ? X = _.roughnessMap : _.metalnessMap ? X = _.metalnessMap : _.alphaMap ? X = _.alphaMap : _.emissiveMap && (X = _.emissiveMap), X !== void 0 && (X.isWebGLRenderTarget && (X = X.texture), X.matrixAutoUpdate === !0 && X.updateMatrix(), m.uvTransform.value.copy(X.matrix)); var me; _.aoMap ? me = _.aoMap : _.lightMap && (me = _.lightMap), me !== void 0 && (me.isWebGLRenderTarget && (me = me.texture), me.matrixAutoUpdate === !0 && me.updateMatrix(), m.uv2Transform.value.copy(me.matrix)); } function xa(m, _) { m.diffuse.value.copy(_.color), m.opacity.value = _.opacity; } function mr(m, _) { m.dashSize.value = _.dashSize, m.totalSize.value = _.dashSize + _.gapSize, m.scale.value = _.scale; } function _h(m, _) { m.diffuse.value.copy(_.color), m.opacity.value = _.opacity, m.size.value = _.size * z, m.scale.value = B * .5, _.map && (m.map.value = _.map), _.alphaMap && (m.alphaMap.value = _.alphaMap); var C; _.map ? C = _.map : _.alphaMap && (C = _.alphaMap), C !== void 0 && (C.matrixAutoUpdate === !0 && C.updateMatrix(), m.uvTransform.value.copy(C.matrix)); } function wh(m, _) { m.diffuse.value.copy(_.color), m.opacity.value = _.opacity, m.rotation.value = _.rotation, _.map && (m.map.value = _.map), _.alphaMap && (m.alphaMap.value = _.alphaMap); var C; _.map ? C = _.map : _.alphaMap && (C = _.alphaMap), C !== void 0 && (C.matrixAutoUpdate === !0 && C.updateMatrix(), m.uvTransform.value.copy(C.matrix)); } function bh(m, _) { m.fogColor.value.copy(_.color), _.isFog ? (m.fogNear.value = _.near, m.fogFar.value = _.far) : _.isFogExp2 && (m.fogDensity.value = _.density); } function Mh(m, _) { _.emissiveMap && (m.emissiveMap.value = _.emissiveMap); } function Eh(m, _) { m.specular.value.copy(_.specular), m.shininess.value = Math.max(_.shininess, 1e-4), _.emissiveMap && (m.emissiveMap.value = _.emissiveMap), _.bumpMap && (m.bumpMap.value = _.bumpMap, m.bumpScale.value = _.bumpScale, _.side === ht && (m.bumpScale.value *= -1)), _.normalMap && (m.normalMap.value = _.normalMap, m.normalScale.value.copy(_.normalScale), _.side === ht && m.normalScale.value.negate()), _.displacementMap && (m.displacementMap.value = _.displacementMap, m.displacementScale.value = _.displacementScale, m.displacementBias.value = _.displacementBias); } function Sh(m, _) { m.specular.value.copy(_.specular), m.shininess.value = Math.max(_.shininess, 1e-4), _.gradientMap && (m.gradientMap.value = _.gradientMap), _.emissiveMap && (m.emissiveMap.value = _.emissiveMap), _.bumpMap && (m.bumpMap.value = _.bumpMap, m.bumpScale.value = _.bumpScale, _.side === ht && (m.bumpScale.value *= -1)), _.normalMap && (m.normalMap.value = _.normalMap, m.normalScale.value.copy(_.normalScale), _.side === ht && m.normalScale.value.negate()), _.displacementMap && (m.displacementMap.value = _.displacementMap, m.displacementScale.value = _.displacementScale, m.displacementBias.value = _.displacementBias); } function Gl(m, _, C) { m.roughness.value = _.roughness, m.metalness.value = _.metalness, _.roughnessMap && (m.roughnessMap.value = _.roughnessMap), _.metalnessMap && (m.metalnessMap.value = _.metalnessMap), _.emissiveMap && (m.emissiveMap.value = _.emissiveMap), _.bumpMap && (m.bumpMap.value = _.bumpMap, m.bumpScale.value = _.bumpScale, _.side === ht && (m.bumpScale.value *= -1)), _.normalMap && (m.normalMap.value = _.normalMap, m.normalScale.value.copy(_.normalScale), _.side === ht && m.normalScale.value.negate()), _.displacementMap && (m.displacementMap.value = _.displacementMap, m.displacementScale.value = _.displacementScale, m.displacementBias.value = _.displacementBias), (_.envMap || C) && (m.envMapIntensity.value = _.envMapIntensity); } function Th(m, _, C) { Gl(m, _, C), m.reflectivity.value = _.reflectivity, m.clearcoat.value = _.clearcoat, m.clearcoatRoughness.value = _.clearcoatRoughness, _.sheen && m.sheen.value.copy(_.sheen), _.clearcoatNormalMap && (m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale), m.clearcoatNormalMap.value = _.clearcoatNormalMap, _.side === ht && m.clearcoatNormalScale.value.negate()), m.transparency.value = _.transparency; } function Ah(m, _) { _.matcap && (m.matcap.value = _.matcap), _.bumpMap && (m.bumpMap.value = _.bumpMap, m.bumpScale.value = _.bumpScale, _.side === ht && (m.bumpScale.value *= -1)), _.normalMap && (m.normalMap.value = _.normalMap, m.normalScale.value.copy(_.normalScale), _.side === ht && m.normalScale.value.negate()), _.displacementMap && (m.displacementMap.value = _.displacementMap, m.displacementScale.value = _.displacementScale, m.displacementBias.value = _.displacementBias); } function Lh(m, _) { _.displacementMap && (m.displacementMap.value = _.displacementMap, m.displacementScale.value = _.displacementScale, m.displacementBias.value = _.displacementBias); } function Rh(m, _) { _.displacementMap && (m.displacementMap.value = _.displacementMap, m.displacementScale.value = _.displacementScale, m.displacementBias.value = _.displacementBias), m.referencePosition.value.copy(_.referencePosition), m.nearDistance.value = _.nearDistance, m.farDistance.value = _.farDistance; } function Ch(m, _) { _.bumpMap && (m.bumpMap.value = _.bumpMap, m.bumpScale.value = _.bumpScale, _.side === ht && (m.bumpScale.value *= -1)), _.normalMap && (m.normalMap.value = _.normalMap, m.normalScale.value.copy(_.normalScale), _.side === ht && m.normalScale.value.negate()), _.displacementMap && (m.displacementMap.value = _.displacementMap, m.displacementScale.value = _.displacementScale, m.displacementBias.value = _.displacementBias); } function Ph(m, _) { m.ambientLightColor.needsUpdate = _, m.lightProbe.needsUpdate = _, m.directionalLights.needsUpdate = _, m.pointLights.needsUpdate = _, m.spotLights.needsUpdate = _, m.rectAreaLights.needsUpdate = _, m.hemisphereLights.needsUpdate = _; } function Dh(m) { return m.isMeshLambertMaterial || m.isMeshToonMaterial || m.isMeshPhongMaterial || m.isMeshStandardMaterial || m.isShadowMaterial || m.isShaderMaterial && m.lights === !0; } this.setFramebuffer = function (m) { g !== m && x === null && H.bindFramebuffer(36160, m), g = m; }, this.getActiveCubeFace = function () { return v; }, this.getActiveMipmapLevel = function () { return y; }, this.getRenderTarget = function () { return x; }, this.setRenderTarget = function (m, _, C) { x = m, v = _, y = C, m && Le.get(m).__webglFramebuffer === void 0 && Ge.setupRenderTarget(m); var G = g, X = !1; if (m) {
    var me = Le.get(m).__webglFramebuffer;
    m.isWebGLRenderTargetCube ? (G = me[_ || 0], X = !0) : m.isWebGLMultisampleRenderTarget ? G = Le.get(m).__webglMultisampledFramebuffer : G = me, T.copy(m.viewport), D.copy(m.scissor), I = m.scissorTest;
}
else
    T.copy(V).multiplyScalar(z).floor(), D.copy(Y).multiplyScalar(z).floor(), I = ie; if (w !== G && (H.bindFramebuffer(36160, G), w = G), pe.viewport(T), pe.scissor(D), pe.setScissorTest(I), X) {
    var ce = Le.get(m.texture);
    H.framebufferTexture2D(36160, 36064, 34069 + (_ || 0), ce.__webglTexture, C || 0);
} }, this.readRenderTargetPixels = function (m, _, C, G, X, me, ce) { if (!(m && m.isWebGLRenderTarget)) {
    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
    return;
} var Ce = Le.get(m).__webglFramebuffer; if (m.isWebGLRenderTargetCube && ce !== void 0 && (Ce = Ce[ce]), Ce) {
    var Me = !1;
    Ce !== w && (H.bindFramebuffer(36160, Ce), Me = !0);
    try {
        var Te = m.texture, Xe = Te.format, He = Te.type;
        if (Xe !== Qt && ge.convert(Xe) !== H.getParameter(35739)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
        }
        if (He !== Aa && ge.convert(He) !== H.getParameter(35738) && !(He === wi && (ze.isWebGL2 || be.get("OES_texture_float") || be.get("WEBGL_color_buffer_float"))) && !(He === fs && (ze.isWebGL2 ? be.get("EXT_color_buffer_float") : be.get("EXT_color_buffer_half_float")))) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
        }
        H.checkFramebufferStatus(36160) === 36053 ? _ >= 0 && _ <= m.width - G && C >= 0 && C <= m.height - X && H.readPixels(_, C, G, X, ge.convert(Xe), ge.convert(He), me) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
    }
    finally {
        Me && H.bindFramebuffer(36160, w);
    }
} }, this.copyFramebufferToTexture = function (m, _, C) { C === void 0 && (C = 0); var G = Math.pow(2, -C), X = Math.floor(_.image.width * G), me = Math.floor(_.image.height * G), ce = ge.convert(_.format); Ge.setTexture2D(_, 0), H.copyTexImage2D(3553, C, ce, m.x, m.y, X, me, 0), pe.unbindTexture(); }, this.copyTextureToTexture = function (m, _, C, G) { var X = _.image.width, me = _.image.height, ce = ge.convert(C.format), Ce = ge.convert(C.type); Ge.setTexture2D(C, 0), _.isDataTexture ? H.texSubImage2D(3553, G || 0, m.x, m.y, X, me, ce, Ce, _.image.data) : H.texSubImage2D(3553, G || 0, m.x, m.y, ce, Ce, _.image), pe.unbindTexture(); }, this.initTexture = function (m) { Ge.setTexture2D(m, 0), pe.unbindTexture(); }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })); }
function Gs(e, t) { this.name = "", this.color = new ee(e), this.density = t !== void 0 ? t : 25e-5; }
Object.assign(Gs.prototype, { isFogExp2: !0, clone: function () { return new Gs(this.color, this.density); }, toJSON: function () { return { type: "FogExp2", color: this.color.getHex(), density: this.density }; } });
function Hs(e, t, n) { this.name = "", this.color = new ee(e), this.near = t !== void 0 ? t : 1, this.far = n !== void 0 ? n : 1e3; }
Object.assign(Hs.prototype, { isFog: !0, clone: function () { return new Hs(this.color, this.near, this.far); }, toJSON: function () { return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far }; } });
function Nn(e, t) { this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ia, this.updateRange = { offset: 0, count: -1 }, this.version = 0; }
Object.defineProperty(Nn.prototype, "needsUpdate", { set: function (e) { e === !0 && this.version++; } });
Object.assign(Nn.prototype, { isInterleavedBuffer: !0, onUploadCallback: function () { }, setUsage: function (e) { return this.usage = e, this; }, copy: function (e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this; }, copyAt: function (e, t, n) { e *= this.stride, n *= t.stride; for (var r = 0, i = this.stride; r < i; r++)
        this.array[e + r] = t.array[n + r]; return this; }, set: function (e, t) { return t === void 0 && (t = 0), this.array.set(e, t), this; }, clone: function () { return new this.constructor().copy(this); }, onUpload: function (e) { return this.onUploadCallback = e, this; } });
var ar = new M;
function io(e, t, n, r) { this.data = e, this.itemSize = t, this.offset = n, this.normalized = r === !0; }
Object.defineProperties(io.prototype, { count: { get: function () { return this.data.count; } }, array: { get: function () { return this.data.array; } } });
Object.assign(io.prototype, { isInterleavedBufferAttribute: !0, applyMatrix4: function (e) { for (var t = 0, n = this.data.count; t < n; t++)
        ar.x = this.getX(t), ar.y = this.getY(t), ar.z = this.getZ(t), ar.applyMatrix4(e), this.setXYZ(t, ar.x, ar.y, ar.z); return this; }, setX: function (e, t) { return this.data.array[e * this.data.stride + this.offset] = t, this; }, setY: function (e, t) { return this.data.array[e * this.data.stride + this.offset + 1] = t, this; }, setZ: function (e, t) { return this.data.array[e * this.data.stride + this.offset + 2] = t, this; }, setW: function (e, t) { return this.data.array[e * this.data.stride + this.offset + 3] = t, this; }, getX: function (e) { return this.data.array[e * this.data.stride + this.offset]; }, getY: function (e) { return this.data.array[e * this.data.stride + this.offset + 1]; }, getZ: function (e) { return this.data.array[e * this.data.stride + this.offset + 2]; }, getW: function (e) { return this.data.array[e * this.data.stride + this.offset + 3]; }, setXY: function (e, t, n) { return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this; }, setXYZ: function (e, t, n, r) { return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this; }, setXYZW: function (e, t, n, r, i) { return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this; } });
function or(e) { xe.call(this), this.type = "SpriteMaterial", this.color = new ee(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e); }
or.prototype = Object.create(xe.prototype);
or.prototype.constructor = or;
or.prototype.isSpriteMaterial = !0;
or.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this; };
var jr, Fi = new M, qr = new M, Xr = new M, Yr = new U, Bi = new U, eu = new Re, ao = new M, Ui = new M, oo = new M, tu = new U, Vs = new U, nu = new U;
function so(e) { if (K.call(this), this.type = "Sprite", jr === void 0) {
    jr = new te;
    var t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), n = new Nn(t, 5);
    jr.setIndex([0, 1, 2, 0, 2, 3]), jr.setAttribute("position", new io(n, 3, 0, !1)), jr.setAttribute("uv", new io(n, 2, 3, !1));
} this.geometry = jr, this.material = e !== void 0 ? e : new or, this.center = new U(.5, .5); }
so.prototype = Object.assign(Object.create(K.prototype), { constructor: so, isSprite: !0, raycast: function (e, t) { e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), qr.setFromMatrixScale(this.matrixWorld), eu.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Xr.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && qr.multiplyScalar(-Xr.z); var n = this.material.rotation, r, i; n !== 0 && (i = Math.cos(n), r = Math.sin(n)); var a = this.center; lo(ao.set(-.5, -.5, 0), Xr, a, qr, r, i), lo(Ui.set(.5, -.5, 0), Xr, a, qr, r, i), lo(oo.set(.5, .5, 0), Xr, a, qr, r, i), tu.set(0, 0), Vs.set(1, 0), nu.set(1, 1); var o = e.ray.intersectTriangle(ao, Ui, oo, !1, Fi); if (!(o === null && (lo(Ui.set(-.5, .5, 0), Xr, a, qr, r, i), Vs.set(0, 1), o = e.ray.intersectTriangle(ao, oo, Ui, !1, Fi), o === null))) {
        var s = e.ray.origin.distanceTo(Fi);
        s < e.near || s > e.far || t.push({ distance: s, point: Fi.clone(), uv: pt.getUV(Fi, ao, Ui, oo, tu, Vs, nu, new U), face: null, object: this });
    } }, clone: function () { return new this.constructor(this.material).copy(this); }, copy: function (e) { return K.prototype.copy.call(this, e), e.center !== void 0 && this.center.copy(e.center), this; } });
function lo(e, t, n, r, i, a) { Yr.subVectors(e, n).addScalar(.5).multiply(r), i !== void 0 ? (Bi.x = a * Yr.x - i * Yr.y, Bi.y = i * Yr.x + a * Yr.y) : Bi.copy(Yr), e.copy(t), e.x += Bi.x, e.y += Bi.y, e.applyMatrix4(eu); }
var co = new M, ru = new M;
function uo() { K.call(this), this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }), this.autoUpdate = !0; }
uo.prototype = Object.assign(Object.create(K.prototype), { constructor: uo, isLOD: !0, copy: function (e) { K.prototype.copy.call(this, e, !1); for (var t = e.levels, n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        this.addLevel(i.object.clone(), i.distance);
    } return this.autoUpdate = e.autoUpdate, this; }, addLevel: function (e, t) { t === void 0 && (t = 0), t = Math.abs(t); for (var n = this.levels, r = 0; r < n.length && !(t < n[r].distance); r++)
        ; return n.splice(r, 0, { distance: t, object: e }), this.add(e), this; }, getObjectForDistance: function (e) { var t = this.levels; if (t.length > 0) {
        for (var n = 1, r = t.length; n < r && !(e < t[n].distance); n++)
            ;
        return t[n - 1].object;
    } return null; }, raycast: function (e, t) { var n = this.levels; if (n.length > 0) {
        co.setFromMatrixPosition(this.matrixWorld);
        var r = e.ray.origin.distanceTo(co);
        this.getObjectForDistance(r).raycast(e, t);
    } }, update: function (e) { var t = this.levels; if (t.length > 1) {
        co.setFromMatrixPosition(e.matrixWorld), ru.setFromMatrixPosition(this.matrixWorld);
        var n = co.distanceTo(ru);
        t[0].object.visible = !0;
        for (var r = 1, i = t.length; r < i && n >= t[r].distance; r++)
            t[r - 1].object.visible = !1, t[r].object.visible = !0;
        for (; r < i; r++)
            t[r].object.visible = !1;
    } }, toJSON: function (e) { var t = K.prototype.toJSON.call(this, e); this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = []; for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
        var a = n[r];
        t.object.levels.push({ object: a.object.uuid, distance: a.distance });
    } return t; } });
function ho(e, t) { e && e.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), et.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Re, this.bindMatrixInverse = new Re; }
ho.prototype = Object.assign(Object.create(et.prototype), { constructor: ho, isSkinnedMesh: !0, bind: function (e, t) { this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t); }, pose: function () { this.skeleton.pose(); }, normalizeSkinWeights: function () { for (var e = new Ze, t = this.geometry.attributes.skinWeight, n = 0, r = t.count; n < r; n++) {
        e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
        var i = 1 / e.manhattanLength();
        i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    } }, updateMatrixWorld: function (e) { et.prototype.updateMatrixWorld.call(this, e), this.bindMode === "attached" ? this.bindMatrixInverse.getInverse(this.matrixWorld) : this.bindMode === "detached" ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode); }, clone: function () { return new this.constructor(this.geometry, this.material).copy(this); } });
var iu = new Re, tg = new Re;
function ks(e, t) { if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(this.bones.length * 16), this.frame = -1, t === void 0)
    this.calculateInverses();
else if (this.bones.length === t.length)
    this.boneInverses = t.slice(0);
else {
    console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
    for (var n = 0, r = this.bones.length; n < r; n++)
        this.boneInverses.push(new Re);
} }
Object.assign(ks.prototype, { calculateInverses: function () { this.boneInverses = []; for (var e = 0, t = this.bones.length; e < t; e++) {
        var n = new Re;
        this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n);
    } }, pose: function () { var e, t, n; for (t = 0, n = this.bones.length; t < n; t++)
        e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]); for (t = 0, n = this.bones.length; t < n; t++)
        e = this.bones[t], e && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale)); }, update: function () { for (var e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture, i = 0, a = e.length; i < a; i++) {
        var o = e[i] ? e[i].matrixWorld : tg;
        iu.multiplyMatrices(o, t[i]), iu.toArray(n, i * 16);
    } r !== void 0 && (r.needsUpdate = !0); }, clone: function () { return new ks(this.bones, this.boneInverses); }, getBoneByName: function (e) { for (var t = 0, n = this.bones.length; t < n; t++) {
        var r = this.bones[t];
        if (r.name === e)
            return r;
    } } });
function au() { K.call(this), this.type = "Bone"; }
au.prototype = Object.assign(Object.create(K.prototype), { constructor: au, isBone: !0 });
var ou = new Re, su = new Re, Zr = [], zi = new et;
function Ws(e, t, n) { et.call(this, e, t), this.instanceMatrix = new _e(new Float32Array(n * 16), 16), this.count = n; }
Ws.prototype = Object.assign(Object.create(et.prototype), { constructor: Ws, isInstancedMesh: !0, getMatrixAt: function (e, t) { t.fromArray(this.instanceMatrix.array, e * 16); }, raycast: function (e, t) { var n = this.matrixWorld, r = this.count; if (zi.geometry = this.geometry, zi.material = this.material, zi.material !== void 0)
        for (var i = 0; i < r; i++)
            this.getMatrixAt(i, ou), su.multiplyMatrices(n, ou), zi.matrixWorld = su, zi.raycast(e, Zr), Zr.length > 0 && (Zr[0].instanceId = i, Zr[0].object = this, t.push(Zr[0]), Zr.length = 0); }, setMatrixAt: function (e, t) { t.toArray(this.instanceMatrix.array, e * 16); }, updateMorphTargets: function () { } });
function tt(e) { xe.call(this), this.type = "LineBasicMaterial", this.color = new ee(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e); }
tt.prototype = Object.create(xe.prototype);
tt.prototype.constructor = tt;
tt.prototype.isLineBasicMaterial = !0;
tt.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this; };
var lu = new M, cu = new M, uu = new Re, fo = new Cr, po = new Pn;
function zt(e, t, n) { n === 1 && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), K.call(this), this.type = "Line", this.geometry = e !== void 0 ? e : new te, this.material = t !== void 0 ? t : new tt({ color: Math.random() * 16777215 }); }
zt.prototype = Object.assign(Object.create(K.prototype), { constructor: zt, isLine: !0, computeLineDistances: function () { var e = this.geometry; if (e.isBufferGeometry)
        if (e.index === null) {
            for (var t = e.attributes.position, n = [0], r = 1, i = t.count; r < i; r++)
                lu.fromBufferAttribute(t, r - 1), cu.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += lu.distanceTo(cu);
            e.setAttribute("lineDistance", new $(n, 1));
        }
        else
            console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry) {
        var a = e.vertices, n = e.lineDistances;
        n[0] = 0;
        for (var r = 1, i = a.length; r < i; r++)
            n[r] = n[r - 1], n[r] += a[r - 1].distanceTo(a[r]);
    } return this; }, raycast: function (e, t) { var n = e.linePrecision, r = this.geometry, i = this.matrixWorld; if (r.boundingSphere === null && r.computeBoundingSphere(), po.copy(r.boundingSphere), po.applyMatrix4(i), po.radius += n, e.ray.intersectsSphere(po) !== !1) {
        uu.getInverse(i), fo.copy(e.ray).applyMatrix4(uu);
        var a = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, s = new M, l = new M, c = new M, u = new M, h = this && this.isLineSegments ? 2 : 1;
        if (r.isBufferGeometry) {
            var f = r.index, d = r.attributes, p = d.position.array;
            if (f !== null)
                for (var g = f.array, v = 0, y = g.length - 1; v < y; v += h) {
                    var x = g[v], w = g[v + 1];
                    s.fromArray(p, x * 3), l.fromArray(p, w * 3);
                    var E = fo.distanceSqToSegment(s, l, u, c);
                    if (!(E > o)) {
                        u.applyMatrix4(this.matrixWorld);
                        var b = e.ray.origin.distanceTo(u);
                        b < e.near || b > e.far || t.push({ distance: b, point: c.clone().applyMatrix4(this.matrixWorld), index: v, face: null, faceIndex: null, object: this });
                    }
                }
            else
                for (var v = 0, y = p.length / 3 - 1; v < y; v += h) {
                    s.fromArray(p, 3 * v), l.fromArray(p, 3 * v + 3);
                    var E = fo.distanceSqToSegment(s, l, u, c);
                    if (!(E > o)) {
                        u.applyMatrix4(this.matrixWorld);
                        var b = e.ray.origin.distanceTo(u);
                        b < e.near || b > e.far || t.push({ distance: b, point: c.clone().applyMatrix4(this.matrixWorld), index: v, face: null, faceIndex: null, object: this });
                    }
                }
        }
        else if (r.isGeometry)
            for (var L = r.vertices, S = L.length, v = 0; v < S - 1; v += h) {
                var E = fo.distanceSqToSegment(L[v], L[v + 1], u, c);
                if (!(E > o)) {
                    u.applyMatrix4(this.matrixWorld);
                    var b = e.ray.origin.distanceTo(u);
                    b < e.near || b > e.far || t.push({ distance: b, point: c.clone().applyMatrix4(this.matrixWorld), index: v, face: null, faceIndex: null, object: this });
                }
            }
    } }, clone: function () { return new this.constructor(this.geometry, this.material).copy(this); } });
var vo = new M, mo = new M;
function nt(e, t) { zt.call(this, e, t), this.type = "LineSegments"; }
nt.prototype = Object.assign(Object.create(zt.prototype), { constructor: nt, isLineSegments: !0, computeLineDistances: function () { var e = this.geometry; if (e.isBufferGeometry)
        if (e.index === null) {
            for (var t = e.attributes.position, n = [], r = 0, i = t.count; r < i; r += 2)
                vo.fromBufferAttribute(t, r), mo.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + vo.distanceTo(mo);
            e.setAttribute("lineDistance", new $(n, 1));
        }
        else
            console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry)
        for (var a = e.vertices, n = e.lineDistances, r = 0, i = a.length; r < i; r += 2)
            vo.copy(a[r]), mo.copy(a[r + 1]), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + vo.distanceTo(mo); return this; } });
function js(e, t) { zt.call(this, e, t), this.type = "LineLoop"; }
js.prototype = Object.assign(Object.create(zt.prototype), { constructor: js, isLineLoop: !0 });
function rn(e) { xe.call(this), this.type = "PointsMaterial", this.color = new ee(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e); }
rn.prototype = Object.create(xe.prototype);
rn.prototype.constructor = rn;
rn.prototype.isPointsMaterial = !0;
rn.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this; };
var hu = new Re, qs = new Cr, go = new Pn, yo = new M;
function Gi(e, t) { K.call(this), this.type = "Points", this.geometry = e !== void 0 ? e : new te, this.material = t !== void 0 ? t : new rn({ color: Math.random() * 16777215 }), this.updateMorphTargets(); }
Gi.prototype = Object.assign(Object.create(K.prototype), { constructor: Gi, isPoints: !0, raycast: function (e, t) { var n = this.geometry, r = this.matrixWorld, i = e.params.Points.threshold; if (n.boundingSphere === null && n.computeBoundingSphere(), go.copy(n.boundingSphere), go.applyMatrix4(r), go.radius += i, e.ray.intersectsSphere(go) !== !1) {
        hu.getInverse(r), qs.copy(e.ray).applyMatrix4(hu);
        var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a;
        if (n.isBufferGeometry) {
            var s = n.index, l = n.attributes, c = l.position.array;
            if (s !== null)
                for (var u = s.array, h = 0, f = u.length; h < f; h++) {
                    var d = u[h];
                    yo.fromArray(c, d * 3), Xs(yo, d, o, r, e, t, this);
                }
            else
                for (var h = 0, p = c.length / 3; h < p; h++)
                    yo.fromArray(c, h * 3), Xs(yo, h, o, r, e, t, this);
        }
        else
            for (var g = n.vertices, h = 0, p = g.length; h < p; h++)
                Xs(g[h], h, o, r, e, t, this);
    } }, updateMorphTargets: function () { var e = this.geometry, t, n, r; if (e.isBufferGeometry) {
        var i = e.morphAttributes, a = Object.keys(i);
        if (a.length > 0) {
            var o = i[a[0]];
            if (o !== void 0)
                for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = o.length; t < n; t++)
                    r = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
        }
    }
    else {
        var s = e.morphTargets;
        s !== void 0 && s.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    } }, clone: function () { return new this.constructor(this.geometry, this.material).copy(this); } });
function Xs(e, t, n, r, i, a, o) { var s = qs.distanceSqToPoint(e); if (s < n) {
    var l = new M;
    qs.closestPointToPoint(e, l), l.applyMatrix4(r);
    var c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far)
        return;
    a.push({ distance: c, distanceToRay: Math.sqrt(s), point: l, index: t, face: null, object: o });
} }
function fu(e, t, n, r, i, a, o, s, l) { Ye.call(this, e, t, n, r, i, a, o, s, l), this.format = o !== void 0 ? o : qn, this.minFilter = a !== void 0 ? a : ft, this.magFilter = i !== void 0 ? i : ft, this.generateMipmaps = !1; }
fu.prototype = Object.assign(Object.create(Ye.prototype), { constructor: fu, isVideoTexture: !0, update: function () { var e = this.image; e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0); } });
function Hi(e, t, n, r, i, a, o, s, l, c, u, h) { Ye.call(this, null, a, o, s, l, c, r, i, u, h), this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1; }
Hi.prototype = Object.create(Ye.prototype);
Hi.prototype.constructor = Hi;
Hi.prototype.isCompressedTexture = !0;
function xo(e, t, n, r, i, a, o, s, l) { Ye.call(this, e, t, n, r, i, a, o, s, l), this.needsUpdate = !0; }
xo.prototype = Object.create(Ye.prototype);
xo.prototype.constructor = xo;
xo.prototype.isCanvasTexture = !0;
function _o(e, t, n, r, i, a, o, s, l, c) { if (c = c !== void 0 ? c : xr, c !== xr && c !== bi)
    throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); n === void 0 && c === xr && (n = La), n === void 0 && c === bi && (n = Ra), Ye.call(this, null, r, i, a, o, s, c, n, l), this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : st, this.minFilter = s !== void 0 ? s : st, this.flipY = !1, this.generateMipmaps = !1; }
_o.prototype = Object.create(Ye.prototype);
_o.prototype.constructor = _o;
_o.prototype.isDepthTexture = !0;
function Vi(e) { te.call(this), this.type = "WireframeGeometry"; var t = [], n, r, i, a, o, s = [0, 0], l = {}, c, u, h, f, d = ["a", "b", "c"], p; if (e && e.isGeometry) {
    var g = e.faces;
    for (n = 0, i = g.length; n < i; n++) {
        var v = g[n];
        for (r = 0; r < 3; r++)
            u = v[d[r]], h = v[d[(r + 1) % 3]], s[0] = Math.min(u, h), s[1] = Math.max(u, h), f = s[0] + "," + s[1], l[f] === void 0 && (l[f] = { index1: s[0], index2: s[1] });
    }
    for (f in l)
        c = l[f], p = e.vertices[c.index1], t.push(p.x, p.y, p.z), p = e.vertices[c.index2], t.push(p.x, p.y, p.z);
}
else if (e && e.isBufferGeometry) {
    var y, x, w, E, b, L, S, T;
    if (p = new M, e.index !== null) {
        for (y = e.attributes.position, x = e.index, w = e.groups, w.length === 0 && (w = [{ start: 0, count: x.count, materialIndex: 0 }]), a = 0, o = w.length; a < o; ++a)
            for (E = w[a], b = E.start, L = E.count, n = b, i = b + L; n < i; n += 3)
                for (r = 0; r < 3; r++)
                    u = x.getX(n + r), h = x.getX(n + (r + 1) % 3), s[0] = Math.min(u, h), s[1] = Math.max(u, h), f = s[0] + "," + s[1], l[f] === void 0 && (l[f] = { index1: s[0], index2: s[1] });
        for (f in l)
            c = l[f], p.fromBufferAttribute(y, c.index1), t.push(p.x, p.y, p.z), p.fromBufferAttribute(y, c.index2), t.push(p.x, p.y, p.z);
    }
    else
        for (y = e.attributes.position, n = 0, i = y.count / 3; n < i; n++)
            for (r = 0; r < 3; r++)
                S = 3 * n + r, p.fromBufferAttribute(y, S), t.push(p.x, p.y, p.z), T = 3 * n + (r + 1) % 3, p.fromBufferAttribute(y, T), t.push(p.x, p.y, p.z);
} this.setAttribute("position", new $(t, 3)); }
Vi.prototype = Object.create(te.prototype);
Vi.prototype.constructor = Vi;
function wo(e, t, n) { we.call(this), this.type = "ParametricGeometry", this.parameters = { func: e, slices: t, stacks: n }, this.fromBufferGeometry(new ki(e, t, n)), this.mergeVertices(); }
wo.prototype = Object.create(we.prototype);
wo.prototype.constructor = wo;
function ki(e, t, n) { te.call(this), this.type = "ParametricBufferGeometry", this.parameters = { func: e, slices: t, stacks: n }; var r = [], i = [], a = [], o = [], s = 1e-5, l = new M, c = new M, u = new M, h = new M, f = new M, d, p; e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter."); var g = t + 1; for (d = 0; d <= n; d++) {
    var v = d / n;
    for (p = 0; p <= t; p++) {
        var y = p / t;
        e(y, v, c), i.push(c.x, c.y, c.z), y - s >= 0 ? (e(y - s, v, u), h.subVectors(c, u)) : (e(y + s, v, u), h.subVectors(u, c)), v - s >= 0 ? (e(y, v - s, u), f.subVectors(c, u)) : (e(y, v + s, u), f.subVectors(u, c)), l.crossVectors(h, f).normalize(), a.push(l.x, l.y, l.z), o.push(y, v);
    }
} for (d = 0; d < n; d++)
    for (p = 0; p < t; p++) {
        var x = d * g + p, w = d * g + p + 1, E = (d + 1) * g + p + 1, b = (d + 1) * g + p;
        r.push(x, w, b), r.push(w, E, b);
    } this.setIndex(r), this.setAttribute("position", new $(i, 3)), this.setAttribute("normal", new $(a, 3)), this.setAttribute("uv", new $(o, 2)); }
ki.prototype = Object.create(te.prototype);
ki.prototype.constructor = ki;
function bo(e, t, n, r) { we.call(this), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: t, radius: n, detail: r }, this.fromBufferGeometry(new Nt(e, t, n, r)), this.mergeVertices(); }
bo.prototype = Object.create(we.prototype);
bo.prototype.constructor = bo;
function Nt(e, t, n, r) { te.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = { vertices: e, indices: t, radius: n, detail: r }, n = n || 1, r = r || 0; var i = [], a = []; o(r), l(n), c(), this.setAttribute("position", new $(i, 3)), this.setAttribute("normal", new $(i.slice(), 3)), this.setAttribute("uv", new $(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals(); function o(y) { for (var x = new M, w = new M, E = new M, b = 0; b < t.length; b += 3)
    f(t[b + 0], x), f(t[b + 1], w), f(t[b + 2], E), s(x, w, E, y); } function s(y, x, w, E) { var b = Math.pow(2, E), L = [], S, T; for (S = 0; S <= b; S++) {
    L[S] = [];
    var D = y.clone().lerp(w, S / b), I = x.clone().lerp(w, S / b), O = b - S;
    for (T = 0; T <= O; T++)
        T === 0 && S === b ? L[S][T] = D : L[S][T] = D.clone().lerp(I, T / O);
} for (S = 0; S < b; S++)
    for (T = 0; T < 2 * (b - S) - 1; T++) {
        var B = Math.floor(T / 2);
        T % 2 === 0 ? (h(L[S][B + 1]), h(L[S + 1][B]), h(L[S][B])) : (h(L[S][B + 1]), h(L[S + 1][B + 1]), h(L[S + 1][B]));
    } } function l(y) { for (var x = new M, w = 0; w < i.length; w += 3)
    x.x = i[w + 0], x.y = i[w + 1], x.z = i[w + 2], x.normalize().multiplyScalar(y), i[w + 0] = x.x, i[w + 1] = x.y, i[w + 2] = x.z; } function c() { for (var y = new M, x = 0; x < i.length; x += 3) {
    y.x = i[x + 0], y.y = i[x + 1], y.z = i[x + 2];
    var w = g(y) / 2 / Math.PI + .5, E = v(y) / Math.PI + .5;
    a.push(w, 1 - E);
} d(), u(); } function u() { for (var y = 0; y < a.length; y += 6) {
    var x = a[y + 0], w = a[y + 2], E = a[y + 4], b = Math.max(x, w, E), L = Math.min(x, w, E);
    b > .9 && L < .1 && (x < .2 && (a[y + 0] += 1), w < .2 && (a[y + 2] += 1), E < .2 && (a[y + 4] += 1));
} } function h(y) { i.push(y.x, y.y, y.z); } function f(y, x) { var w = y * 3; x.x = e[w + 0], x.y = e[w + 1], x.z = e[w + 2]; } function d() { for (var y = new M, x = new M, w = new M, E = new M, b = new U, L = new U, S = new U, T = 0, D = 0; T < i.length; T += 9, D += 6) {
    y.set(i[T + 0], i[T + 1], i[T + 2]), x.set(i[T + 3], i[T + 4], i[T + 5]), w.set(i[T + 6], i[T + 7], i[T + 8]), b.set(a[D + 0], a[D + 1]), L.set(a[D + 2], a[D + 3]), S.set(a[D + 4], a[D + 5]), E.copy(y).add(x).add(w).divideScalar(3);
    var I = g(E);
    p(b, D + 0, y, I), p(L, D + 2, x, I), p(S, D + 4, w, I);
} } function p(y, x, w, E) { E < 0 && y.x === 1 && (a[x] = y.x - 1), w.x === 0 && w.z === 0 && (a[x] = E / 2 / Math.PI + .5); } function g(y) { return Math.atan2(y.z, -y.x); } function v(y) { return Math.atan2(-y.y, Math.sqrt(y.x * y.x + y.z * y.z)); } }
Nt.prototype = Object.create(te.prototype);
Nt.prototype.constructor = Nt;
function Mo(e, t) { we.call(this), this.type = "TetrahedronGeometry", this.parameters = { radius: e, detail: t }, this.fromBufferGeometry(new Wi(e, t)), this.mergeVertices(); }
Mo.prototype = Object.create(we.prototype);
Mo.prototype.constructor = Mo;
function Wi(e, t) { var n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], r = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1]; Nt.call(this, n, r, e, t), this.type = "TetrahedronBufferGeometry", this.parameters = { radius: e, detail: t }; }
Wi.prototype = Object.create(Nt.prototype);
Wi.prototype.constructor = Wi;
function Eo(e, t) { we.call(this), this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: t }, this.fromBufferGeometry(new Jr(e, t)), this.mergeVertices(); }
Eo.prototype = Object.create(we.prototype);
Eo.prototype.constructor = Eo;
function Jr(e, t) { var n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], r = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2]; Nt.call(this, n, r, e, t), this.type = "OctahedronBufferGeometry", this.parameters = { radius: e, detail: t }; }
Jr.prototype = Object.create(Nt.prototype);
Jr.prototype.constructor = Jr;
function So(e, t) { we.call(this), this.type = "IcosahedronGeometry", this.parameters = { radius: e, detail: t }, this.fromBufferGeometry(new ji(e, t)), this.mergeVertices(); }
So.prototype = Object.create(we.prototype);
So.prototype.constructor = So;
function ji(e, t) { var n = (1 + Math.sqrt(5)) / 2, r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], i = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1]; Nt.call(this, r, i, e, t), this.type = "IcosahedronBufferGeometry", this.parameters = { radius: e, detail: t }; }
ji.prototype = Object.create(Nt.prototype);
ji.prototype.constructor = ji;
function To(e, t) { we.call(this), this.type = "DodecahedronGeometry", this.parameters = { radius: e, detail: t }, this.fromBufferGeometry(new qi(e, t)), this.mergeVertices(); }
To.prototype = Object.create(we.prototype);
To.prototype.constructor = To;
function qi(e, t) { var n = (1 + Math.sqrt(5)) / 2, r = 1 / n, i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, 0, -n, 0, -r, n, 0, -r, -n, 0, r, n, 0, r], a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9]; Nt.call(this, i, a, e, t), this.type = "DodecahedronBufferGeometry", this.parameters = { radius: e, detail: t }; }
qi.prototype = Object.create(Nt.prototype);
qi.prototype.constructor = qi;
function Ao(e, t, n, r, i, a) { we.call(this), this.type = "TubeGeometry", this.parameters = { path: e, tubularSegments: t, radius: n, radialSegments: r, closed: i }, a !== void 0 && console.warn("THREE.TubeGeometry: taper has been removed."); var o = new $r(e, t, n, r, i); this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices(); }
Ao.prototype = Object.create(we.prototype);
Ao.prototype.constructor = Ao;
function $r(e, t, n, r, i) { te.call(this), this.type = "TubeBufferGeometry", this.parameters = { path: e, tubularSegments: t, radius: n, radialSegments: r, closed: i }, t = t || 64, n = n || 1, r = r || 8, i = i || !1; var a = e.computeFrenetFrames(t, i); this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals; var o = new M, s = new M, l = new U, c = new M, u, h, f = [], d = [], p = [], g = []; v(), this.setIndex(g), this.setAttribute("position", new $(f, 3)), this.setAttribute("normal", new $(d, 3)), this.setAttribute("uv", new $(p, 2)); function v() { for (u = 0; u < t; u++)
    y(u); y(i === !1 ? t : 0), w(), x(); } function y(E) { c = e.getPointAt(E / t, c); var b = a.normals[E], L = a.binormals[E]; for (h = 0; h <= r; h++) {
    var S = h / r * Math.PI * 2, T = Math.sin(S), D = -Math.cos(S);
    s.x = D * b.x + T * L.x, s.y = D * b.y + T * L.y, s.z = D * b.z + T * L.z, s.normalize(), d.push(s.x, s.y, s.z), o.x = c.x + n * s.x, o.y = c.y + n * s.y, o.z = c.z + n * s.z, f.push(o.x, o.y, o.z);
} } function x() { for (h = 1; h <= t; h++)
    for (u = 1; u <= r; u++) {
        var E = (r + 1) * (h - 1) + (u - 1), b = (r + 1) * h + (u - 1), L = (r + 1) * h + u, S = (r + 1) * (h - 1) + u;
        g.push(E, b, S), g.push(b, L, S);
    } } function w() { for (u = 0; u <= t; u++)
    for (h = 0; h <= r; h++)
        l.x = u / t, l.y = h / r, p.push(l.x, l.y); } }
$r.prototype = Object.create(te.prototype);
$r.prototype.constructor = $r;
$r.prototype.toJSON = function () { var e = te.prototype.toJSON.call(this); return e.path = this.parameters.path.toJSON(), e; };
function Lo(e, t, n, r, i, a, o) { we.call(this), this.type = "TorusKnotGeometry", this.parameters = { radius: e, tube: t, tubularSegments: n, radialSegments: r, p: i, q: a }, o !== void 0 && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Xi(e, t, n, r, i, a)), this.mergeVertices(); }
Lo.prototype = Object.create(we.prototype);
Lo.prototype.constructor = Lo;
function Xi(e, t, n, r, i, a) { te.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = { radius: e, tube: t, tubularSegments: n, radialSegments: r, p: i, q: a }, e = e || 1, t = t || .4, n = Math.floor(n) || 64, r = Math.floor(r) || 8, i = i || 2, a = a || 3; var o = [], s = [], l = [], c = [], u, h, f = new M, d = new M, p = new M, g = new M, v = new M, y = new M, x = new M; for (u = 0; u <= n; ++u) {
    var w = u / n * i * Math.PI * 2;
    for (O(w, i, a, e, p), O(w + .01, i, a, e, g), y.subVectors(g, p), x.addVectors(g, p), v.crossVectors(y, x), x.crossVectors(v, y), v.normalize(), x.normalize(), h = 0; h <= r; ++h) {
        var E = h / r * Math.PI * 2, b = -t * Math.cos(E), L = t * Math.sin(E);
        f.x = p.x + (b * x.x + L * v.x), f.y = p.y + (b * x.y + L * v.y), f.z = p.z + (b * x.z + L * v.z), s.push(f.x, f.y, f.z), d.subVectors(f, p).normalize(), l.push(d.x, d.y, d.z), c.push(u / n), c.push(h / r);
    }
} for (h = 1; h <= n; h++)
    for (u = 1; u <= r; u++) {
        var S = (r + 1) * (h - 1) + (u - 1), T = (r + 1) * h + (u - 1), D = (r + 1) * h + u, I = (r + 1) * (h - 1) + u;
        o.push(S, T, I), o.push(T, D, I);
    } this.setIndex(o), this.setAttribute("position", new $(s, 3)), this.setAttribute("normal", new $(l, 3)), this.setAttribute("uv", new $(c, 2)); function O(B, z, N, F, V) { var Y = Math.cos(B), ie = Math.sin(B), q = N / z * B, Z = Math.cos(q); V.x = F * (2 + Z) * .5 * Y, V.y = F * (2 + Z) * ie * .5, V.z = F * Math.sin(q) * .5; } }
Xi.prototype = Object.create(te.prototype);
Xi.prototype.constructor = Xi;
function Ro(e, t, n, r, i) { we.call(this), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: n, tubularSegments: r, arc: i }, this.fromBufferGeometry(new Yi(e, t, n, r, i)), this.mergeVertices(); }
Ro.prototype = Object.create(we.prototype);
Ro.prototype.constructor = Ro;
function Yi(e, t, n, r, i) { te.call(this), this.type = "TorusBufferGeometry", this.parameters = { radius: e, tube: t, radialSegments: n, tubularSegments: r, arc: i }, e = e || 1, t = t || .4, n = Math.floor(n) || 8, r = Math.floor(r) || 6, i = i || Math.PI * 2; var a = [], o = [], s = [], l = [], c = new M, u = new M, h = new M, f, d; for (f = 0; f <= n; f++)
    for (d = 0; d <= r; d++) {
        var p = d / r * i, g = f / n * Math.PI * 2;
        u.x = (e + t * Math.cos(g)) * Math.cos(p), u.y = (e + t * Math.cos(g)) * Math.sin(p), u.z = t * Math.sin(g), o.push(u.x, u.y, u.z), c.x = e * Math.cos(p), c.y = e * Math.sin(p), h.subVectors(u, c).normalize(), s.push(h.x, h.y, h.z), l.push(d / r), l.push(f / n);
    } for (f = 1; f <= n; f++)
    for (d = 1; d <= r; d++) {
        var v = (r + 1) * f + d - 1, y = (r + 1) * (f - 1) + d - 1, x = (r + 1) * (f - 1) + d, w = (r + 1) * f + d;
        a.push(v, y, w), a.push(y, x, w);
    } this.setIndex(a), this.setAttribute("position", new $(o, 3)), this.setAttribute("normal", new $(s, 3)), this.setAttribute("uv", new $(l, 2)); }
Yi.prototype = Object.create(te.prototype);
Yi.prototype.constructor = Yi;
var ng = { triangulate: function (e, t, n) { n = n || 2; var r = t && t.length, i = r ? t[0] * n : e.length, a = du(e, 0, i, n, !0), o = []; if (!a || a.next === a.prev)
        return o; var s, l, c, u, h, f, d; if (r && (a = sg(e, t, a, n)), e.length > 80 * n) {
        s = c = e[0], l = u = e[1];
        for (var p = n; p < i; p += n)
            h = e[p], f = e[p + 1], h < s && (s = h), f < l && (l = f), h > c && (c = h), f > u && (u = f);
        d = Math.max(c - s, u - l), d = d !== 0 ? 1 / d : 0;
    } return Ji(a, o, n, s, l, d), o; } };
function du(e, t, n, r, i) { var a, o; if (i === gg(e, t, n, r) > 0)
    for (a = t; a < n; a += r)
        o = mu(a, e[a], e[a + 1], o);
else
    for (a = n - r; a >= t; a -= r)
        o = mu(a, e[a], e[a + 1], o); return o && sr(o, o.next) && (Qi(o), o = o.next), o; }
function Zi(e, t) { if (!e)
    return e; t || (t = e); var n = e, r; do
    if (r = !1, !n.steiner && (sr(n, n.next) || vt(n.prev, n, n.next) === 0)) {
        if (Qi(n), n = t = n.prev, n === n.next)
            break;
        r = !0;
    }
    else
        n = n.next;
while (r || n !== t); return t; }
function Ji(e, t, n, r, i, a, o) { if (!!e) {
    !o && a && hg(e, r, i, a);
    for (var s = e, l, c; e.prev !== e.next;) {
        if (l = e.prev, c = e.next, a ? ig(e, r, i, a) : rg(e)) {
            t.push(l.i / n), t.push(e.i / n), t.push(c.i / n), Qi(e), e = c.next, s = c.next;
            continue;
        }
        if (e = c, e === s) {
            o ? o === 1 ? (e = ag(e, t, n), Ji(e, t, n, r, i, a, 2)) : o === 2 && og(e, t, n, r, i, a) : Ji(Zi(e), t, n, r, i, a, 1);
            break;
        }
    }
} }
function rg(e) { var t = e.prev, n = e, r = e.next; if (vt(t, n, r) >= 0)
    return !1; for (var i = e.next.next; i !== e.prev;) {
    if (Qr(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && vt(i.prev, i, i.next) >= 0)
        return !1;
    i = i.next;
} return !0; }
function ig(e, t, n, r) { var i = e.prev, a = e, o = e.next; if (vt(i, a, o) >= 0)
    return !1; for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, l = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, c = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, u = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, h = Ys(s, l, t, n, r), f = Ys(c, u, t, n, r), d = e.prevZ, p = e.nextZ; d && d.z >= h && p && p.z <= f;) {
    if (d !== e.prev && d !== e.next && Qr(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && vt(d.prev, d, d.next) >= 0 || (d = d.prevZ, p !== e.prev && p !== e.next && Qr(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0))
        return !1;
    p = p.nextZ;
} for (; d && d.z >= h;) {
    if (d !== e.prev && d !== e.next && Qr(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && vt(d.prev, d, d.next) >= 0)
        return !1;
    d = d.prevZ;
} for (; p && p.z <= f;) {
    if (p !== e.prev && p !== e.next && Qr(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && vt(p.prev, p, p.next) >= 0)
        return !1;
    p = p.nextZ;
} return !0; }
function ag(e, t, n) { var r = e; do {
    var i = r.prev, a = r.next.next;
    !sr(i, a) && pu(i, r, r.next, a) && $i(i, a) && $i(a, i) && (t.push(i.i / n), t.push(r.i / n), t.push(a.i / n), Qi(r), Qi(r.next), r = e = a), r = r.next;
} while (r !== e); return r; }
function og(e, t, n, r, i, a) { var o = e; do {
    for (var s = o.next.next; s !== o.prev;) {
        if (o.i !== s.i && pg(o, s)) {
            var l = vu(o, s);
            o = Zi(o, o.next), l = Zi(l, l.next), Ji(o, t, n, r, i, a), Ji(l, t, n, r, i, a);
            return;
        }
        s = s.next;
    }
    o = o.next;
} while (o !== e); }
function sg(e, t, n, r) { var i = [], a, o, s, l, c; for (a = 0, o = t.length; a < o; a++)
    s = t[a] * r, l = a < o - 1 ? t[a + 1] * r : e.length, c = du(e, s, l, r, !1), c === c.next && (c.steiner = !0), i.push(dg(c)); for (i.sort(lg), a = 0; a < i.length; a++)
    cg(i[a], n), n = Zi(n, n.next); return n; }
function lg(e, t) { return e.x - t.x; }
function cg(e, t) { if (t = ug(e, t), t) {
    var n = vu(t, e);
    Zi(n, n.next);
} }
function ug(e, t) { var n = t, r = e.x, i = e.y, a = -1 / 0, o; do {
    if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
        var s = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
        if (s <= r && s > a) {
            if (a = s, s === r) {
                if (i === n.y)
                    return n;
                if (i === n.next.y)
                    return n.next;
            }
            o = n.x < n.next.x ? n : n.next;
        }
    }
    n = n.next;
} while (n !== t); if (!o)
    return null; if (r === a)
    return o.prev; var l = o, c = o.x, u = o.y, h = 1 / 0, f; for (n = o.next; n !== l;)
    r >= n.x && n.x >= c && r !== n.x && Qr(i < u ? r : a, i, c, u, i < u ? a : r, i, n.x, n.y) && (f = Math.abs(i - n.y) / (r - n.x), (f < h || f === h && n.x > o.x) && $i(n, e) && (o = n, h = f)), n = n.next; return o; }
function hg(e, t, n, r) { var i = e; do
    i.z === null && (i.z = Ys(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
while (i !== e); i.prevZ.nextZ = null, i.prevZ = null, fg(i); }
function fg(e) { var t, n, r, i, a, o, s, l, c = 1; do {
    for (n = e, e = null, a = null, o = 0; n;) {
        for (o++, r = n, s = 0, t = 0; t < c && (s++, r = r.nextZ, !!r); t++)
            ;
        for (l = c; s > 0 || l > 0 && r;)
            s !== 0 && (l === 0 || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, l--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
        n = r;
    }
    a.nextZ = null, c *= 2;
} while (o > 1); return e; }
function Ys(e, t, n, r, i) { return e = 32767 * (e - n) * i, t = 32767 * (t - r) * i, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1; }
function dg(e) { var t = e, n = e; do
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
while (t !== e); return n; }
function Qr(e, t, n, r, i, a, o, s) { return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (r - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0; }
function pg(e, t) { return e.next.i !== t.i && e.prev.i !== t.i && !vg(e, t) && $i(e, t) && $i(t, e) && mg(e, t); }
function vt(e, t, n) { return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y); }
function sr(e, t) { return e.x === t.x && e.y === t.y; }
function pu(e, t, n, r) { return sr(e, n) && sr(t, r) || sr(e, r) && sr(n, t) ? !0 : vt(e, t, n) > 0 != vt(e, t, r) > 0 && vt(n, r, e) > 0 != vt(n, r, t) > 0; }
function vg(e, t) { var n = e; do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && pu(n, n.next, e, t))
        return !0;
    n = n.next;
} while (n !== e); return !1; }
function $i(e, t) { return vt(e.prev, e, e.next) < 0 ? vt(e, t, e.next) >= 0 && vt(e, e.prev, t) >= 0 : vt(e, t, e.prev) < 0 || vt(e, e.next, t) < 0; }
function mg(e, t) { var n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2; do
    n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
while (n !== e); return r; }
function vu(e, t) { var n = new Zs(e.i, e.x, e.y), r = new Zs(t.i, t.x, t.y), i = e.next, a = t.prev; return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r; }
function mu(e, t, n, r) { var i = new Zs(e, t, n); return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i; }
function Qi(e) { e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ); }
function Zs(e, t, n) { this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1; }
function gg(e, t, n, r) { for (var i = 0, a = t, o = n - r; a < n; a += r)
    i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a; return i; }
var Fn = { area: function (e) { for (var t = e.length, n = 0, r = t - 1, i = 0; i < t; r = i++)
        n += e[r].x * e[i].y - e[i].x * e[r].y; return n * .5; }, isClockWise: function (e) { return Fn.area(e) < 0; }, triangulateShape: function (e, t) { var n = [], r = [], i = []; gu(e), yu(n, e); var a = e.length; t.forEach(gu); for (var o = 0; o < t.length; o++)
        r.push(a), a += t[o].length, yu(n, t[o]); for (var s = ng.triangulate(n, r), o = 0; o < s.length; o += 3)
        i.push(s.slice(o, o + 3)); return i; } };
function gu(e) { var t = e.length; t > 2 && e[t - 1].equals(e[0]) && e.pop(); }
function yu(e, t) { for (var n = 0; n < t.length; n++)
    e.push(t[n].x), e.push(t[n].y); }
function Kr(e, t) { we.call(this), this.type = "ExtrudeGeometry", this.parameters = { shapes: e, options: t }, this.fromBufferGeometry(new wn(e, t)), this.mergeVertices(); }
Kr.prototype = Object.create(we.prototype);
Kr.prototype.constructor = Kr;
Kr.prototype.toJSON = function () { var e = we.prototype.toJSON.call(this), t = this.parameters.shapes, n = this.parameters.options; return xu(t, n, e); };
function wn(e, t) { te.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = { shapes: e, options: t }, e = Array.isArray(e) ? e : [e]; for (var n = this, r = [], i = [], a = 0, o = e.length; a < o; a++) {
    var s = e[a];
    l(s);
} this.setAttribute("position", new $(r, 3)), this.setAttribute("uv", new $(i, 2)), this.computeVertexNormals(); function l(c) { var u = [], h = t.curveSegments !== void 0 ? t.curveSegments : 12, f = t.steps !== void 0 ? t.steps : 1, d = t.depth !== void 0 ? t.depth : 100, p = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, g = t.bevelThickness !== void 0 ? t.bevelThickness : 6, v = t.bevelSize !== void 0 ? t.bevelSize : g - 2, y = t.bevelOffset !== void 0 ? t.bevelOffset : 0, x = t.bevelSegments !== void 0 ? t.bevelSegments : 3, w = t.extrudePath, E = t.UVGenerator !== void 0 ? t.UVGenerator : yg; t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), d = t.amount); var b, L = !1, S, T, D, I; w && (b = w.getSpacedPoints(f), L = !0, p = !1, S = w.computeFrenetFrames(f, !1), T = new M, D = new M, I = new M), p || (x = 0, g = 0, v = 0, y = 0); var O, B, z, N = c.extractPoints(h), F = N.shape, V = N.holes, Y = !Fn.isClockWise(F); if (Y)
    for (F = F.reverse(), B = 0, z = V.length; B < z; B++)
        O = V[B], Fn.isClockWise(O) && (V[B] = O.reverse()); var ie = Fn.triangulateShape(F, V), q = F; for (B = 0, z = V.length; B < z; B++)
    O = V[B], F = F.concat(O); function Z(ne, he, le) { return he || console.error("THREE.ExtrudeGeometry: vec does not exist"), he.clone().multiplyScalar(le).add(ne); } var ae, Fe, Be, Ne, Se, H = F.length, We, be = ie.length; function ze(ne, he, le) { var P, j, se, Ee = ne.x - he.x, oe = ne.y - he.y, Oe = le.x - ne.x, Je = le.y - ne.y, Ke = Ee * Ee + oe * oe, kt = Ee * Je - oe * Oe; if (Math.abs(kt) > Number.EPSILON) {
    var qe = Math.sqrt(Ke), Lt = Math.sqrt(Oe * Oe + Je * Je), xt = he.x - oe / qe, vr = he.y + Ee / qe, vi = le.x - Je / Lt, ya = le.y + Oe / Lt, Bt = ((vi - xt) * Je - (ya - vr) * Oe) / (Ee * Je - oe * Oe);
    P = xt + Ee * Bt - ne.x, j = vr + oe * Bt - ne.y;
    var xa = P * P + j * j;
    if (xa <= 2)
        return new U(P, j);
    se = Math.sqrt(xa / 2);
}
else {
    var mr = !1;
    Ee > Number.EPSILON ? Oe > Number.EPSILON && (mr = !0) : Ee < -Number.EPSILON ? Oe < -Number.EPSILON && (mr = !0) : Math.sign(oe) === Math.sign(Je) && (mr = !0), mr ? (P = -oe, j = Ee, se = Math.sqrt(Ke)) : (P = Ee, j = oe, se = Math.sqrt(Ke / 2));
} return new U(P / se, j / se); } for (var pe = [], W = 0, Le = q.length, Ge = Le - 1, Qe = W + 1; W < Le; W++, Ge++, Qe++)
    Ge === Le && (Ge = 0), Qe === Le && (Qe = 0), pe[W] = ze(q[W], q[Ge], q[Qe]); var Vt = [], it, A = pe.concat(); for (B = 0, z = V.length; B < z; B++) {
    for (O = V[B], it = [], W = 0, Le = O.length, Ge = Le - 1, Qe = W + 1; W < Le; W++, Ge++, Qe++)
        Ge === Le && (Ge = 0), Qe === Le && (Qe = 0), it[W] = ze(O[W], O[Ge], O[Qe]);
    Vt.push(it), A = A.concat(it);
} for (ae = 0; ae < x; ae++) {
    for (Be = ae / x, Ne = g * Math.cos(Be * Math.PI / 2), Fe = v * Math.sin(Be * Math.PI / 2) + y, W = 0, Le = q.length; W < Le; W++)
        Se = Z(q[W], pe[W], Fe), de(Se.x, Se.y, -Ne);
    for (B = 0, z = V.length; B < z; B++)
        for (O = V[B], it = Vt[B], W = 0, Le = O.length; W < Le; W++)
            Se = Z(O[W], it[W], Fe), de(Se.x, Se.y, -Ne);
} for (Fe = v + y, W = 0; W < H; W++)
    Se = p ? Z(F[W], A[W], Fe) : F[W], L ? (D.copy(S.normals[0]).multiplyScalar(Se.x), T.copy(S.binormals[0]).multiplyScalar(Se.y), I.copy(b[0]).add(D).add(T), de(I.x, I.y, I.z)) : de(Se.x, Se.y, 0); var R; for (R = 1; R <= f; R++)
    for (W = 0; W < H; W++)
        Se = p ? Z(F[W], A[W], Fe) : F[W], L ? (D.copy(S.normals[R]).multiplyScalar(Se.x), T.copy(S.binormals[R]).multiplyScalar(Se.y), I.copy(b[R]).add(D).add(T), de(I.x, I.y, I.z)) : de(Se.x, Se.y, d / f * R); for (ae = x - 1; ae >= 0; ae--) {
    for (Be = ae / x, Ne = g * Math.cos(Be * Math.PI / 2), Fe = v * Math.sin(Be * Math.PI / 2) + y, W = 0, Le = q.length; W < Le; W++)
        Se = Z(q[W], pe[W], Fe), de(Se.x, Se.y, d + Ne);
    for (B = 0, z = V.length; B < z; B++)
        for (O = V[B], it = Vt[B], W = 0, Le = O.length; W < Le; W++)
            Se = Z(O[W], it[W], Fe), L ? de(Se.x, Se.y + b[f - 1].y, b[f - 1].x + Ne) : de(Se.x, Se.y, d + Ne);
} J(), k(); function J() { var ne = r.length / 3; if (p) {
    var he = 0, le = H * he;
    for (W = 0; W < be; W++)
        We = ie[W], ue(We[2] + le, We[1] + le, We[0] + le);
    for (he = f + x * 2, le = H * he, W = 0; W < be; W++)
        We = ie[W], ue(We[0] + le, We[1] + le, We[2] + le);
}
else {
    for (W = 0; W < be; W++)
        We = ie[W], ue(We[2], We[1], We[0]);
    for (W = 0; W < be; W++)
        We = ie[W], ue(We[0] + H * f, We[1] + H * f, We[2] + H * f);
} n.addGroup(ne, r.length / 3 - ne, 0); } function k() { var ne = r.length / 3, he = 0; for (De(q, he), he += q.length, B = 0, z = V.length; B < z; B++)
    O = V[B], De(O, he), he += O.length; n.addGroup(ne, r.length / 3 - ne, 1); } function De(ne, he) { var le, P; for (W = ne.length; --W >= 0;) {
    le = W, P = W - 1, P < 0 && (P = ne.length - 1);
    var j = 0, se = f + x * 2;
    for (j = 0; j < se; j++) {
        var Ee = H * j, oe = H * (j + 1), Oe = he + le + Ee, Je = he + P + Ee, Ke = he + P + oe, kt = he + le + oe;
        ge(Oe, Je, Ke, kt);
    }
} } function de(ne, he, le) { u.push(ne), u.push(he), u.push(le); } function ue(ne, he, le) { Ie(ne), Ie(he), Ie(le); var P = r.length / 3, j = E.generateTopUV(n, r, P - 3, P - 2, P - 1); ve(j[0]), ve(j[1]), ve(j[2]); } function ge(ne, he, le, P) { Ie(ne), Ie(he), Ie(P), Ie(he), Ie(le), Ie(P); var j = r.length / 3, se = E.generateSideWallUV(n, r, j - 6, j - 3, j - 2, j - 1); ve(se[0]), ve(se[1]), ve(se[3]), ve(se[1]), ve(se[2]), ve(se[3]); } function Ie(ne) { r.push(u[ne * 3 + 0]), r.push(u[ne * 3 + 1]), r.push(u[ne * 3 + 2]); } function ve(ne) { i.push(ne.x), i.push(ne.y); } } }
wn.prototype = Object.create(te.prototype);
wn.prototype.constructor = wn;
wn.prototype.toJSON = function () { var e = te.prototype.toJSON.call(this), t = this.parameters.shapes, n = this.parameters.options; return xu(t, n, e); };
var yg = { generateTopUV: function (e, t, n, r, i) { var a = t[n * 3], o = t[n * 3 + 1], s = t[r * 3], l = t[r * 3 + 1], c = t[i * 3], u = t[i * 3 + 1]; return [new U(a, o), new U(s, l), new U(c, u)]; }, generateSideWallUV: function (e, t, n, r, i, a) { var o = t[n * 3], s = t[n * 3 + 1], l = t[n * 3 + 2], c = t[r * 3], u = t[r * 3 + 1], h = t[r * 3 + 2], f = t[i * 3], d = t[i * 3 + 1], p = t[i * 3 + 2], g = t[a * 3], v = t[a * 3 + 1], y = t[a * 3 + 2]; return Math.abs(s - u) < .01 ? [new U(o, 1 - l), new U(c, 1 - h), new U(f, 1 - p), new U(g, 1 - y)] : [new U(s, 1 - l), new U(u, 1 - h), new U(d, 1 - p), new U(v, 1 - y)]; } };
function xu(e, t, n) { if (n.shapes = [], Array.isArray(e))
    for (var r = 0, i = e.length; r < i; r++) {
        var a = e[r];
        n.shapes.push(a.uuid);
    }
else
    n.shapes.push(e.uuid); return t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n; }
function Co(e, t) { we.call(this), this.type = "TextGeometry", this.parameters = { text: e, parameters: t }, this.fromBufferGeometry(new Ki(e, t)), this.mergeVertices(); }
Co.prototype = Object.create(we.prototype);
Co.prototype.constructor = Co;
function Ki(e, t) { t = t || {}; var n = t.font; if (!(n && n.isFont))
    return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new we; var r = n.generateShapes(e, t.size); t.depth = t.height !== void 0 ? t.height : 50, t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1), wn.call(this, r, t), this.type = "TextBufferGeometry"; }
Ki.prototype = Object.create(wn.prototype);
Ki.prototype.constructor = Ki;
function Po(e, t, n, r, i, a, o) { we.call(this), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: r, phiLength: i, thetaStart: a, thetaLength: o }, this.fromBufferGeometry(new ei(e, t, n, r, i, a, o)), this.mergeVertices(); }
Po.prototype = Object.create(we.prototype);
Po.prototype.constructor = Po;
function ei(e, t, n, r, i, a, o) { te.call(this), this.type = "SphereBufferGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: r, phiLength: i, thetaStart: a, thetaLength: o }, e = e || 1, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), r = r !== void 0 ? r : 0, i = i !== void 0 ? i : Math.PI * 2, a = a !== void 0 ? a : 0, o = o !== void 0 ? o : Math.PI; var s = Math.min(a + o, Math.PI), l, c, u = 0, h = [], f = new M, d = new M, p = [], g = [], v = [], y = []; for (c = 0; c <= n; c++) {
    var x = [], w = c / n, E = 0;
    for (c == 0 && a == 0 ? E = .5 / t : c == n && s == Math.PI && (E = -.5 / t), l = 0; l <= t; l++) {
        var b = l / t;
        f.x = -e * Math.cos(r + b * i) * Math.sin(a + w * o), f.y = e * Math.cos(a + w * o), f.z = e * Math.sin(r + b * i) * Math.sin(a + w * o), g.push(f.x, f.y, f.z), d.copy(f).normalize(), v.push(d.x, d.y, d.z), y.push(b + E, 1 - w), x.push(u++);
    }
    h.push(x);
} for (c = 0; c < n; c++)
    for (l = 0; l < t; l++) {
        var L = h[c][l + 1], S = h[c][l], T = h[c + 1][l], D = h[c + 1][l + 1];
        (c !== 0 || a > 0) && p.push(L, S, D), (c !== n - 1 || s < Math.PI) && p.push(S, T, D);
    } this.setIndex(p), this.setAttribute("position", new $(g, 3)), this.setAttribute("normal", new $(v, 3)), this.setAttribute("uv", new $(y, 2)); }
ei.prototype = Object.create(te.prototype);
ei.prototype.constructor = ei;
function Do(e, t, n, r, i, a) { we.call(this), this.type = "RingGeometry", this.parameters = { innerRadius: e, outerRadius: t, thetaSegments: n, phiSegments: r, thetaStart: i, thetaLength: a }, this.fromBufferGeometry(new ea(e, t, n, r, i, a)), this.mergeVertices(); }
Do.prototype = Object.create(we.prototype);
Do.prototype.constructor = Do;
function ea(e, t, n, r, i, a) { te.call(this), this.type = "RingBufferGeometry", this.parameters = { innerRadius: e, outerRadius: t, thetaSegments: n, phiSegments: r, thetaStart: i, thetaLength: a }, e = e || .5, t = t || 1, i = i !== void 0 ? i : 0, a = a !== void 0 ? a : Math.PI * 2, n = n !== void 0 ? Math.max(3, n) : 8, r = r !== void 0 ? Math.max(1, r) : 1; var o = [], s = [], l = [], c = [], u, h = e, f = (t - e) / r, d = new M, p = new U, g, v; for (g = 0; g <= r; g++) {
    for (v = 0; v <= n; v++)
        u = i + v / n * a, d.x = h * Math.cos(u), d.y = h * Math.sin(u), s.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / t + 1) / 2, p.y = (d.y / t + 1) / 2, c.push(p.x, p.y);
    h += f;
} for (g = 0; g < r; g++) {
    var y = g * (n + 1);
    for (v = 0; v < n; v++) {
        u = v + y;
        var x = u, w = u + n + 1, E = u + n + 2, b = u + 1;
        o.push(x, w, b), o.push(w, E, b);
    }
} this.setIndex(o), this.setAttribute("position", new $(s, 3)), this.setAttribute("normal", new $(l, 3)), this.setAttribute("uv", new $(c, 2)); }
ea.prototype = Object.create(te.prototype);
ea.prototype.constructor = ea;
function Io(e, t, n, r) { we.call(this), this.type = "LatheGeometry", this.parameters = { points: e, segments: t, phiStart: n, phiLength: r }, this.fromBufferGeometry(new ta(e, t, n, r)), this.mergeVertices(); }
Io.prototype = Object.create(we.prototype);
Io.prototype.constructor = Io;
function ta(e, t, n, r) { te.call(this), this.type = "LatheBufferGeometry", this.parameters = { points: e, segments: t, phiStart: n, phiLength: r }, t = Math.floor(t) || 12, n = n || 0, r = r || Math.PI * 2, r = Ae.clamp(r, 0, Math.PI * 2); var i = [], a = [], o = [], s, l = 1 / t, c = new M, u = new U, h, f; for (h = 0; h <= t; h++) {
    var d = n + h * l * r, p = Math.sin(d), g = Math.cos(d);
    for (f = 0; f <= e.length - 1; f++)
        c.x = e[f].x * p, c.y = e[f].y, c.z = e[f].x * g, a.push(c.x, c.y, c.z), u.x = h / t, u.y = f / (e.length - 1), o.push(u.x, u.y);
} for (h = 0; h < t; h++)
    for (f = 0; f < e.length - 1; f++) {
        s = f + h * e.length;
        var v = s, y = s + e.length, x = s + e.length + 1, w = s + 1;
        i.push(v, y, w), i.push(y, x, w);
    } if (this.setIndex(i), this.setAttribute("position", new $(a, 3)), this.setAttribute("uv", new $(o, 2)), this.computeVertexNormals(), r === Math.PI * 2) {
    var E = this.attributes.normal.array, b = new M, L = new M, S = new M;
    for (s = t * e.length * 3, h = 0, f = 0; h < e.length; h++, f += 3)
        b.x = E[f + 0], b.y = E[f + 1], b.z = E[f + 2], L.x = E[s + f + 0], L.y = E[s + f + 1], L.z = E[s + f + 2], S.addVectors(b, L).normalize(), E[f + 0] = E[s + f + 0] = S.x, E[f + 1] = E[s + f + 1] = S.y, E[f + 2] = E[s + f + 2] = S.z;
} }
ta.prototype = Object.create(te.prototype);
ta.prototype.constructor = ta;
function ti(e, t) { we.call(this), this.type = "ShapeGeometry", typeof t == "object" && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = { shapes: e, curveSegments: t }, this.fromBufferGeometry(new ni(e, t)), this.mergeVertices(); }
ti.prototype = Object.create(we.prototype);
ti.prototype.constructor = ti;
ti.prototype.toJSON = function () { var e = we.prototype.toJSON.call(this), t = this.parameters.shapes; return _u(t, e); };
function ni(e, t) { te.call(this), this.type = "ShapeBufferGeometry", this.parameters = { shapes: e, curveSegments: t }, t = t || 12; var n = [], r = [], i = [], a = [], o = 0, s = 0; if (Array.isArray(e) === !1)
    c(e);
else
    for (var l = 0; l < e.length; l++)
        c(e[l]), this.addGroup(o, s, l), o += s, s = 0; this.setIndex(n), this.setAttribute("position", new $(r, 3)), this.setAttribute("normal", new $(i, 3)), this.setAttribute("uv", new $(a, 2)); function c(u) { var h, f, d, p = r.length / 3, g = u.extractPoints(t), v = g.shape, y = g.holes; for (Fn.isClockWise(v) === !1 && (v = v.reverse()), h = 0, f = y.length; h < f; h++)
    d = y[h], Fn.isClockWise(d) === !0 && (y[h] = d.reverse()); var x = Fn.triangulateShape(v, y); for (h = 0, f = y.length; h < f; h++)
    d = y[h], v = v.concat(d); for (h = 0, f = v.length; h < f; h++) {
    var w = v[h];
    r.push(w.x, w.y, 0), i.push(0, 0, 1), a.push(w.x, w.y);
} for (h = 0, f = x.length; h < f; h++) {
    var E = x[h], b = E[0] + p, L = E[1] + p, S = E[2] + p;
    n.push(b, L, S), s += 3;
} } }
ni.prototype = Object.create(te.prototype);
ni.prototype.constructor = ni;
ni.prototype.toJSON = function () { var e = te.prototype.toJSON.call(this), t = this.parameters.shapes; return _u(t, e); };
function _u(e, t) { if (t.shapes = [], Array.isArray(e))
    for (var n = 0, r = e.length; n < r; n++) {
        var i = e[n];
        t.shapes.push(i.uuid);
    }
else
    t.shapes.push(e.uuid); return t; }
function na(e, t) { te.call(this), this.type = "EdgesGeometry", this.parameters = { thresholdAngle: t }, t = t !== void 0 ? t : 1; var n = [], r = Math.cos(Ae.DEG2RAD * t), i = [0, 0], a = {}, o, s, l, c = ["a", "b", "c"], u; e.isBufferGeometry ? (u = new we, u.fromBufferGeometry(e)) : u = e.clone(), u.mergeVertices(), u.computeFaceNormals(); for (var h = u.vertices, f = u.faces, d = 0, p = f.length; d < p; d++)
    for (var g = f[d], v = 0; v < 3; v++)
        o = g[c[v]], s = g[c[(v + 1) % 3]], i[0] = Math.min(o, s), i[1] = Math.max(o, s), l = i[0] + "," + i[1], a[l] === void 0 ? a[l] = { index1: i[0], index2: i[1], face1: d, face2: void 0 } : a[l].face2 = d; for (l in a) {
    var y = a[l];
    if (y.face2 === void 0 || f[y.face1].normal.dot(f[y.face2].normal) <= r) {
        var x = h[y.index1];
        n.push(x.x, x.y, x.z), x = h[y.index2], n.push(x.x, x.y, x.z);
    }
} this.setAttribute("position", new $(n, 3)); }
na.prototype = Object.create(te.prototype);
na.prototype.constructor = na;
function ri(e, t, n, r, i, a, o, s) { we.call(this), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: n, radialSegments: r, heightSegments: i, openEnded: a, thetaStart: o, thetaLength: s }, this.fromBufferGeometry(new Bn(e, t, n, r, i, a, o, s)), this.mergeVertices(); }
ri.prototype = Object.create(we.prototype);
ri.prototype.constructor = ri;
function Bn(e, t, n, r, i, a, o, s) { te.call(this), this.type = "CylinderBufferGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: n, radialSegments: r, heightSegments: i, openEnded: a, thetaStart: o, thetaLength: s }; var l = this; e = e !== void 0 ? e : 1, t = t !== void 0 ? t : 1, n = n || 1, r = Math.floor(r) || 8, i = Math.floor(i) || 1, a = a !== void 0 ? a : !1, o = o !== void 0 ? o : 0, s = s !== void 0 ? s : Math.PI * 2; var c = [], u = [], h = [], f = [], d = 0, p = [], g = n / 2, v = 0; y(), a === !1 && (e > 0 && x(!0), t > 0 && x(!1)), this.setIndex(c), this.setAttribute("position", new $(u, 3)), this.setAttribute("normal", new $(h, 3)), this.setAttribute("uv", new $(f, 2)); function y() { var w, E, b = new M, L = new M, S = 0, T = (t - e) / n; for (E = 0; E <= i; E++) {
    var D = [], I = E / i, O = I * (t - e) + e;
    for (w = 0; w <= r; w++) {
        var B = w / r, z = B * s + o, N = Math.sin(z), F = Math.cos(z);
        L.x = O * N, L.y = -I * n + g, L.z = O * F, u.push(L.x, L.y, L.z), b.set(N, T, F).normalize(), h.push(b.x, b.y, b.z), f.push(B, 1 - I), D.push(d++);
    }
    p.push(D);
} for (w = 0; w < r; w++)
    for (E = 0; E < i; E++) {
        var V = p[E][w], Y = p[E + 1][w], ie = p[E + 1][w + 1], q = p[E][w + 1];
        c.push(V, Y, q), c.push(Y, ie, q), S += 6;
    } l.addGroup(v, S, 0), v += S; } function x(w) { var E, b, L, S = new U, T = new M, D = 0, I = w === !0 ? e : t, O = w === !0 ? 1 : -1; for (b = d, E = 1; E <= r; E++)
    u.push(0, g * O, 0), h.push(0, O, 0), f.push(.5, .5), d++; for (L = d, E = 0; E <= r; E++) {
    var B = E / r, z = B * s + o, N = Math.cos(z), F = Math.sin(z);
    T.x = I * F, T.y = g * O, T.z = I * N, u.push(T.x, T.y, T.z), h.push(0, O, 0), S.x = N * .5 + .5, S.y = F * .5 * O + .5, f.push(S.x, S.y), d++;
} for (E = 0; E < r; E++) {
    var V = b + E, Y = L + E;
    w === !0 ? c.push(Y, Y + 1, V) : c.push(Y + 1, Y, V), D += 3;
} l.addGroup(v, D, w === !0 ? 1 : 2), v += D; } }
Bn.prototype = Object.create(te.prototype);
Bn.prototype.constructor = Bn;
function Oo(e, t, n, r, i, a, o) { ri.call(this, 0, e, t, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: n, heightSegments: r, openEnded: i, thetaStart: a, thetaLength: o }; }
Oo.prototype = Object.create(ri.prototype);
Oo.prototype.constructor = Oo;
function No(e, t, n, r, i, a, o) { Bn.call(this, 0, e, t, n, r, i, a, o), this.type = "ConeBufferGeometry", this.parameters = { radius: e, height: t, radialSegments: n, heightSegments: r, openEnded: i, thetaStart: a, thetaLength: o }; }
No.prototype = Object.create(Bn.prototype);
No.prototype.constructor = No;
function Fo(e, t, n, r) { we.call(this), this.type = "CircleGeometry", this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: r }, this.fromBufferGeometry(new ra(e, t, n, r)), this.mergeVertices(); }
Fo.prototype = Object.create(we.prototype);
Fo.prototype.constructor = Fo;
function ra(e, t, n, r) { te.call(this), this.type = "CircleBufferGeometry", this.parameters = { radius: e, segments: t, thetaStart: n, thetaLength: r }, e = e || 1, t = t !== void 0 ? Math.max(3, t) : 8, n = n !== void 0 ? n : 0, r = r !== void 0 ? r : Math.PI * 2; var i = [], a = [], o = [], s = [], l, c, u = new M, h = new U; for (a.push(0, 0, 0), o.push(0, 0, 1), s.push(.5, .5), c = 0, l = 3; c <= t; c++, l += 3) {
    var f = n + c / t * r;
    u.x = e * Math.cos(f), u.y = e * Math.sin(f), a.push(u.x, u.y, u.z), o.push(0, 0, 1), h.x = (a[l] / e + 1) / 2, h.y = (a[l + 1] / e + 1) / 2, s.push(h.x, h.y);
} for (l = 1; l <= t; l++)
    i.push(l, l + 1, 0); this.setIndex(i), this.setAttribute("position", new $(a, 3)), this.setAttribute("normal", new $(o, 3)), this.setAttribute("uv", new $(s, 2)); }
ra.prototype = Object.create(te.prototype);
ra.prototype.constructor = ra;
var bt = Object.freeze({ __proto__: null, WireframeGeometry: Vi, ParametricGeometry: wo, ParametricBufferGeometry: ki, TetrahedronGeometry: Mo, TetrahedronBufferGeometry: Wi, OctahedronGeometry: Eo, OctahedronBufferGeometry: Jr, IcosahedronGeometry: So, IcosahedronBufferGeometry: ji, DodecahedronGeometry: To, DodecahedronBufferGeometry: qi, PolyhedronGeometry: bo, PolyhedronBufferGeometry: Nt, TubeGeometry: Ao, TubeBufferGeometry: $r, TorusKnotGeometry: Lo, TorusKnotBufferGeometry: Xi, TorusGeometry: Ro, TorusBufferGeometry: Yi, TextGeometry: Co, TextBufferGeometry: Ki, SphereGeometry: Po, SphereBufferGeometry: ei, RingGeometry: Do, RingBufferGeometry: ea, PlaneGeometry: no, PlaneBufferGeometry: kr, LatheGeometry: Io, LatheBufferGeometry: ta, ShapeGeometry: ti, ShapeBufferGeometry: ni, ExtrudeGeometry: Kr, ExtrudeBufferGeometry: wn, EdgesGeometry: na, ConeGeometry: Oo, ConeBufferGeometry: No, CylinderGeometry: ri, CylinderBufferGeometry: Bn, CircleGeometry: Fo, CircleBufferGeometry: ra, BoxGeometry: Rc, BoxBufferGeometry: Ci });
function ii(e) { xe.call(this), this.type = "ShadowMaterial", this.color = new ee(0), this.transparent = !0, this.setValues(e); }
ii.prototype = Object.create(xe.prototype);
ii.prototype.constructor = ii;
ii.prototype.isShadowMaterial = !0;
ii.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.color.copy(e.color), this; };
function Un(e) { At.call(this, e), this.type = "RawShaderMaterial"; }
Un.prototype = Object.create(At.prototype);
Un.prototype.constructor = Un;
Un.prototype.isRawShaderMaterial = !0;
function bn(e) { xe.call(this), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ee(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = br, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e); }
bn.prototype = Object.create(xe.prototype);
bn.prototype.constructor = bn;
bn.prototype.isMeshStandardMaterial = !0;
bn.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this; };
function ai(e) { bn.call(this), this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearcoat = 0, this.clearcoatRoughness = 0, this.sheen = null, this.clearcoatNormalScale = new U(1, 1), this.clearcoatNormalMap = null, this.transparency = 0, this.setValues(e); }
ai.prototype = Object.create(bn.prototype);
ai.prototype.constructor = ai;
ai.prototype.isMeshPhysicalMaterial = !0;
ai.prototype.copy = function (e) { return bn.prototype.copy.call(this, e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.reflectivity = e.reflectivity, this.clearcoat = e.clearcoat, this.clearcoatRoughness = e.clearcoatRoughness, e.sheen ? this.sheen = (this.sheen || new ee).copy(e.sheen) : this.sheen = null, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.transparency = e.transparency, this; };
function lr(e) { xe.call(this), this.type = "MeshPhongMaterial", this.color = new ee(16777215), this.specular = new ee(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = br, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ba, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e); }
lr.prototype = Object.create(xe.prototype);
lr.prototype.constructor = lr;
lr.prototype.isMeshPhongMaterial = !0;
lr.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this; };
function oi(e) { xe.call(this), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new ee(16777215), this.specular = new ee(1118481), this.shininess = 30, this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = br, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e); }
oi.prototype = Object.create(xe.prototype);
oi.prototype.constructor = oi;
oi.prototype.isMeshToonMaterial = !0;
oi.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this; };
function si(e) { xe.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = br, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e); }
si.prototype = Object.create(xe.prototype);
si.prototype.constructor = si;
si.prototype.isMeshNormalMaterial = !0;
si.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this; };
function li(e) { xe.call(this), this.type = "MeshLambertMaterial", this.color = new ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ba, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e); }
li.prototype = Object.create(xe.prototype);
li.prototype.constructor = li;
li.prototype.isMeshLambertMaterial = !0;
li.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this; };
function ci(e) { xe.call(this), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new ee(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = br, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e); }
ci.prototype = Object.create(xe.prototype);
ci.prototype.constructor = ci;
ci.prototype.isMeshMatcapMaterial = !0;
ci.prototype.copy = function (e) { return xe.prototype.copy.call(this, e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this; };
function ui(e) { tt.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e); }
ui.prototype = Object.create(tt.prototype);
ui.prototype.constructor = ui;
ui.prototype.isLineDashedMaterial = !0;
ui.prototype.copy = function (e) { return tt.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this; };
var xg = Object.freeze({ __proto__: null, ShadowMaterial: ii, SpriteMaterial: or, RawShaderMaterial: Un, ShaderMaterial: At, PointsMaterial: rn, MeshPhysicalMaterial: ai, MeshStandardMaterial: bn, MeshPhongMaterial: lr, MeshToonMaterial: oi, MeshNormalMaterial: si, MeshLambertMaterial: li, MeshDepthMaterial: rr, MeshDistanceMaterial: ir, MeshBasicMaterial: Xt, MeshMatcapMaterial: ci, LineDashedMaterial: ui, LineBasicMaterial: tt, Material: xe }), ut = { arraySlice: function (e, t, n) { return ut.isTypedArray(e) ? new e.constructor(e.subarray(t, n !== void 0 ? n : e.length)) : e.slice(t, n); }, convertArray: function (e, t, n) { return !e || !n && e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e); }, isTypedArray: function (e) { return ArrayBuffer.isView(e) && !(e instanceof DataView); }, getKeyframeOrder: function (e) { function t(a, o) { return e[a] - e[o]; } for (var n = e.length, r = new Array(n), i = 0; i !== n; ++i)
        r[i] = i; return r.sort(t), r; }, sortedArray: function (e, t, n) { for (var r = e.length, i = new e.constructor(r), a = 0, o = 0; o !== r; ++a)
        for (var s = n[a] * t, l = 0; l !== t; ++l)
            i[o++] = e[s + l]; return i; }, flattenJSON: function (e, t, n, r) { for (var i = 1, a = e[0]; a !== void 0 && a[r] === void 0;)
        a = e[i++]; if (a !== void 0) {
        var o = a[r];
        if (o !== void 0)
            if (Array.isArray(o))
                do
                    o = a[r], o !== void 0 && (t.push(a.time), n.push.apply(n, o)), a = e[i++];
                while (a !== void 0);
            else if (o.toArray !== void 0)
                do
                    o = a[r], o !== void 0 && (t.push(a.time), o.toArray(n, n.length)), a = e[i++];
                while (a !== void 0);
            else
                do
                    o = a[r], o !== void 0 && (t.push(a.time), n.push(o)), a = e[i++];
                while (a !== void 0);
    } }, subclip: function (e, t, n, r, i) { i = i || 30; var a = e.clone(); a.name = t; for (var o = [], s = 0; s < a.tracks.length; ++s) {
        for (var l = a.tracks[s], c = l.getValueSize(), u = [], h = [], f = 0; f < l.times.length; ++f) {
            var d = l.times[f] * i;
            if (!(d < n || d >= r)) {
                u.push(l.times[f]);
                for (var p = 0; p < c; ++p)
                    h.push(l.values[f * c + p]);
            }
        }
        u.length !== 0 && (l.times = ut.convertArray(u, l.times.constructor), l.values = ut.convertArray(h, l.values.constructor), o.push(l));
    } a.tracks = o; for (var g = 1 / 0, s = 0; s < a.tracks.length; ++s)
        g > a.tracks[s].times[0] && (g = a.tracks[s].times[0]); for (var s = 0; s < a.tracks.length; ++s)
        a.tracks[s].shift(-1 * g); return a.resetDuration(), a; } };
function Gt(e, t, n, r) { this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r !== void 0 ? r : new t.constructor(n), this.sampleValues = t, this.valueSize = n; }
Object.assign(Gt.prototype, { evaluate: function (e) { var t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1]; e: {
        t: {
            var a;
            n: {
                r: if (!(e < r)) {
                    for (var o = n + 2;;) {
                        if (r === void 0) {
                            if (e < i)
                                break r;
                            return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, i);
                        }
                        if (n === o)
                            break;
                        if (i = r, r = t[++n], e < r)
                            break t;
                    }
                    a = t.length;
                    break n;
                }
                if (!(e >= i)) {
                    var s = t[1];
                    e < s && (n = 2, i = s);
                    for (var o = n - 2;;) {
                        if (i === void 0)
                            return this._cachedIndex = 0, this.beforeStart_(0, e, r);
                        if (n === o)
                            break;
                        if (r = i, i = t[--n - 1], e >= i)
                            break t;
                    }
                    a = n, n = 0;
                    break n;
                }
                break e;
            }
            for (; n < a;) {
                var l = n + a >>> 1;
                e < t[l] ? a = l : n = l + 1;
            }
            if (r = t[n], i = t[n - 1], i === void 0)
                return this._cachedIndex = 0, this.beforeStart_(0, e, r);
            if (r === void 0)
                return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, i, e);
        }
        this._cachedIndex = n, this.intervalChanged_(n, i, r);
    } return this.interpolate_(n, i, e, r); }, settings: null, DefaultSettings_: {}, getSettings_: function () { return this.settings || this.DefaultSettings_; }, copySampleValue_: function (e) { for (var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r, a = 0; a !== r; ++a)
        t[a] = n[i + a]; return t; }, interpolate_: function () { throw new Error("call to abstract method"); }, intervalChanged_: function () { } });
Object.assign(Gt.prototype, { beforeStart_: Gt.prototype.copySampleValue_, afterEnd_: Gt.prototype.copySampleValue_ });
function Js(e, t, n, r) { Gt.call(this, e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0; }
Js.prototype = Object.assign(Object.create(Gt.prototype), { constructor: Js, DefaultSettings_: { endingStart: _r, endingEnd: _r }, intervalChanged_: function (e, t, n) { var r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a]; if (o === void 0)
        switch (this.getSettings_().endingStart) {
            case wr:
                i = e, o = 2 * t - n;
                break;
            case Da:
                i = r.length - 2, o = t + r[i] - r[i + 1];
                break;
            default: i = e, o = n;
        } if (s === void 0)
        switch (this.getSettings_().endingEnd) {
            case wr:
                a = e, s = 2 * n - t;
                break;
            case Da:
                a = 1, s = n + r[1] - r[0];
                break;
            default: a = e - 1, s = t;
        } var l = (n - t) * .5, c = this.valueSize; this._weightPrev = l / (t - o), this._weightNext = l / (s - n), this._offsetPrev = i * c, this._offsetNext = a * c; }, interpolate_: function (e, t, n, r) { for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, c = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, f = this._weightNext, d = (n - t) / (r - t), p = d * d, g = p * d, v = -h * g + 2 * h * p - h * d, y = (1 + h) * g + (-1.5 - 2 * h) * p + (-.5 + h) * d + 1, x = (-1 - f) * g + (1.5 + f) * p + .5 * d, w = f * g - f * p, E = 0; E !== o; ++E)
        i[E] = v * a[c + E] + y * a[l + E] + x * a[s + E] + w * a[u + E]; return i; } });
function Bo(e, t, n, r) { Gt.call(this, e, t, n, r); }
Bo.prototype = Object.assign(Object.create(Gt.prototype), { constructor: Bo, interpolate_: function (e, t, n, r) { for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, c = (n - t) / (r - t), u = 1 - c, h = 0; h !== o; ++h)
        i[h] = a[l + h] * u + a[s + h] * c; return i; } });
function $s(e, t, n, r) { Gt.call(this, e, t, n, r); }
$s.prototype = Object.assign(Object.create(Gt.prototype), { constructor: $s, interpolate_: function (e) { return this.copySampleValue_(e - 1); } });
function yt(e, t, n, r) { if (e === void 0)
    throw new Error("THREE.KeyframeTrack: track name is undefined"); if (t === void 0 || t.length === 0)
    throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e); this.name = e, this.times = ut.convertArray(t, this.TimeBufferType), this.values = ut.convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation); }
Object.assign(yt, { toJSON: function (e) { var t = e.constructor, n; if (t.toJSON !== void 0)
        n = t.toJSON(e);
    else {
        n = { name: e.name, times: ut.convertArray(e.times, Array), values: ut.convertArray(e.values, Array) };
        var r = e.getInterpolation();
        r !== e.DefaultInterpolation && (n.interpolation = r);
    } return n.type = e.ValueTypeName, n; } });
Object.assign(yt.prototype, { constructor: yt, TimeBufferType: Float32Array, ValueBufferType: Float32Array, DefaultInterpolation: Pa, InterpolantFactoryMethodDiscrete: function (e) { return new $s(this.times, this.values, this.getValueSize(), e); }, InterpolantFactoryMethodLinear: function (e) { return new Bo(this.times, this.values, this.getValueSize(), e); }, InterpolantFactoryMethodSmooth: function (e) { return new Js(this.times, this.values, this.getValueSize(), e); }, setInterpolation: function (e) { var t; switch (e) {
        case Ca:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
        case Pa:
            t = this.InterpolantFactoryMethodLinear;
            break;
        case ds:
            t = this.InterpolantFactoryMethodSmooth;
            break;
    } if (t === void 0) {
        var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (this.createInterpolant === void 0)
            if (e !== this.DefaultInterpolation)
                this.setInterpolation(this.DefaultInterpolation);
            else
                throw new Error(n);
        return console.warn("THREE.KeyframeTrack:", n), this;
    } return this.createInterpolant = t, this; }, getInterpolation: function () { switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete: return Ca;
        case this.InterpolantFactoryMethodLinear: return Pa;
        case this.InterpolantFactoryMethodSmooth: return ds;
    } }, getValueSize: function () { return this.values.length / this.times.length; }, shift: function (e) { if (e !== 0)
        for (var t = this.times, n = 0, r = t.length; n !== r; ++n)
            t[n] += e; return this; }, scale: function (e) { if (e !== 1)
        for (var t = this.times, n = 0, r = t.length; n !== r; ++n)
            t[n] *= e; return this; }, trim: function (e, t) { for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < e;)
        ++i; for (; a !== -1 && n[a] > t;)
        --a; if (++a, i !== 0 || a !== r) {
        i >= a && (a = Math.max(a, 1), i = a - 1);
        var o = this.getValueSize();
        this.times = ut.arraySlice(n, i, a), this.values = ut.arraySlice(this.values, i * o, a * o);
    } return this; }, validate: function () { var e = !0, t = this.getValueSize(); t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1); var n = this.times, r = this.values, i = n.length; i === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1); for (var a = null, o = 0; o !== i; o++) {
        var s = n[o];
        if (typeof s == "number" && isNaN(s)) {
            console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), e = !1;
            break;
        }
        if (a !== null && a > s) {
            console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), e = !1;
            break;
        }
        a = s;
    } if (r !== void 0 && ut.isTypedArray(r))
        for (var o = 0, l = r.length; o !== l; ++o) {
            var c = r[o];
            if (isNaN(c)) {
                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
                break;
            }
        } return e; }, optimize: function () { for (var e = this.times, t = this.values, n = this.getValueSize(), r = this.getInterpolation() === ds, i = 1, a = e.length - 1, o = 1; o < a; ++o) {
        var s = !1, l = e[o], c = e[o + 1];
        if (l !== c && (o !== 1 || l !== l[0]))
            if (r)
                s = !0;
            else
                for (var u = o * n, h = u - n, f = u + n, d = 0; d !== n; ++d) {
                    var p = t[u + d];
                    if (p !== t[h + d] || p !== t[f + d]) {
                        s = !0;
                        break;
                    }
                }
        if (s) {
            if (o !== i) {
                e[i] = e[o];
                for (var g = o * n, v = i * n, d = 0; d !== n; ++d)
                    t[v + d] = t[g + d];
            }
            ++i;
        }
    } if (a > 0) {
        e[i] = e[a];
        for (var g = a * n, v = i * n, d = 0; d !== n; ++d)
            t[v + d] = t[g + d];
        ++i;
    } return i !== e.length && (this.times = ut.arraySlice(e, 0, i), this.values = ut.arraySlice(t, 0, i * n)), this; }, clone: function () { var e = ut.arraySlice(this.times, 0), t = ut.arraySlice(this.values, 0), n = this.constructor, r = new n(this.name, e, t); return r.createInterpolant = this.createInterpolant, r; } });
function Qs(e, t, n) { yt.call(this, e, t, n); }
Qs.prototype = Object.assign(Object.create(yt.prototype), { constructor: Qs, ValueTypeName: "bool", ValueBufferType: Array, DefaultInterpolation: Ca, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0 });
function Ks(e, t, n, r) { yt.call(this, e, t, n, r); }
Ks.prototype = Object.assign(Object.create(yt.prototype), { constructor: Ks, ValueTypeName: "color" });
function ia(e, t, n, r) { yt.call(this, e, t, n, r); }
ia.prototype = Object.assign(Object.create(yt.prototype), { constructor: ia, ValueTypeName: "number" });
function el(e, t, n, r) { Gt.call(this, e, t, n, r); }
el.prototype = Object.assign(Object.create(Gt.prototype), { constructor: el, interpolate_: function (e, t, n, r) { for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = (n - t) / (r - t), c = s + o; s !== c; s += 4)
        Tt.slerpFlat(i, 0, a, s - o, a, s, l); return i; } });
function Uo(e, t, n, r) { yt.call(this, e, t, n, r); }
Uo.prototype = Object.assign(Object.create(yt.prototype), { constructor: Uo, ValueTypeName: "quaternion", DefaultInterpolation: Pa, InterpolantFactoryMethodLinear: function (e) { return new el(this.times, this.values, this.getValueSize(), e); }, InterpolantFactoryMethodSmooth: void 0 });
function tl(e, t, n, r) { yt.call(this, e, t, n, r); }
tl.prototype = Object.assign(Object.create(yt.prototype), { constructor: tl, ValueTypeName: "string", ValueBufferType: Array, DefaultInterpolation: Ca, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0 });
function aa(e, t, n, r) { yt.call(this, e, t, n, r); }
aa.prototype = Object.assign(Object.create(yt.prototype), { constructor: aa, ValueTypeName: "vector" });
function Yt(e, t, n) { this.name = e, this.tracks = n, this.duration = t !== void 0 ? t : -1, this.uuid = Ae.generateUUID(), this.duration < 0 && this.resetDuration(); }
function _g(e) { switch (e.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer": return ia;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4": return aa;
    case "color": return Ks;
    case "quaternion": return Uo;
    case "bool":
    case "boolean": return Qs;
    case "string": return tl;
} throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e); }
function wg(e) { if (e.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); var t = _g(e.type); if (e.times === void 0) {
    var n = [], r = [];
    ut.flattenJSON(e.keys, n, r, "value"), e.times = n, e.values = r;
} return t.parse !== void 0 ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation); }
Object.assign(Yt, { parse: function (e) { for (var t = [], n = e.tracks, r = 1 / (e.fps || 1), i = 0, a = n.length; i !== a; ++i)
        t.push(wg(n[i]).scale(r)); return new Yt(e.name, e.duration, t); }, toJSON: function (e) { for (var t = [], n = e.tracks, r = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid }, i = 0, a = n.length; i !== a; ++i)
        t.push(yt.toJSON(n[i])); return r; }, CreateFromMorphTargetSequence: function (e, t, n, r) { for (var i = t.length, a = [], o = 0; o < i; o++) {
        var s = [], l = [];
        s.push((o + i - 1) % i, o, (o + 1) % i), l.push(0, 1, 0);
        var c = ut.getKeyframeOrder(s);
        s = ut.sortedArray(s, 1, c), l = ut.sortedArray(l, 1, c), !r && s[0] === 0 && (s.push(i), l.push(l[0])), a.push(new ia(".morphTargetInfluences[" + t[o].name + "]", s, l).scale(1 / n));
    } return new Yt(e, -1, a); }, findByName: function (e, t) { var n = e; if (!Array.isArray(e)) {
        var r = e;
        n = r.geometry && r.geometry.animations || r.animations;
    } for (var i = 0; i < n.length; i++)
        if (n[i].name === t)
            return n[i]; return null; }, CreateClipsFromMorphTargetSequences: function (e, t, n) { for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
        var s = e[a], l = s.name.match(i);
        if (l && l.length > 1) {
            var c = l[1], u = r[c];
            u || (r[c] = u = []), u.push(s);
        }
    } var h = []; for (var c in r)
        h.push(Yt.CreateFromMorphTargetSequence(c, r[c], t, n)); return h; }, parseAnimation: function (e, t) { if (!e)
        return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; for (var n = function (w, E, b, L, S) { if (b.length !== 0) {
        var T = [], D = [];
        ut.flattenJSON(b, T, D, L), T.length !== 0 && S.push(new w(E, T, D));
    } }, r = [], i = e.name || "default", a = e.length || -1, o = e.fps || 30, s = e.hierarchy || [], l = 0; l < s.length; l++) {
        var c = s[l].keys;
        if (!(!c || c.length === 0))
            if (c[0].morphTargets) {
                for (var u = {}, h = 0; h < c.length; h++)
                    if (c[h].morphTargets)
                        for (var f = 0; f < c[h].morphTargets.length; f++)
                            u[c[h].morphTargets[f]] = -1;
                for (var d in u) {
                    for (var p = [], g = [], f = 0; f !== c[h].morphTargets.length; ++f) {
                        var v = c[h];
                        p.push(v.time), g.push(v.morphTarget === d ? 1 : 0);
                    }
                    r.push(new ia(".morphTargetInfluence[" + d + "]", p, g));
                }
                a = u.length * (o || 1);
            }
            else {
                var y = ".bones[" + t[l].name + "]";
                n(aa, y + ".position", c, "pos", r), n(Uo, y + ".quaternion", c, "rot", r), n(aa, y + ".scale", c, "scl", r);
            }
    } if (r.length === 0)
        return null; var x = new Yt(i, a, r); return x; } });
Object.assign(Yt.prototype, { resetDuration: function () { for (var e = this.tracks, t = 0, n = 0, r = e.length; n !== r; ++n) {
        var i = this.tracks[n];
        t = Math.max(t, i.times[i.times.length - 1]);
    } return this.duration = t, this; }, trim: function () { for (var e = 0; e < this.tracks.length; e++)
        this.tracks[e].trim(0, this.duration); return this; }, validate: function () { for (var e = !0, t = 0; t < this.tracks.length; t++)
        e = e && this.tracks[t].validate(); return e; }, optimize: function () { for (var e = 0; e < this.tracks.length; e++)
        this.tracks[e].optimize(); return this; }, clone: function () { for (var e = [], t = 0; t < this.tracks.length; t++)
        e.push(this.tracks[t].clone()); return new Yt(this.name, this.duration, e); } });
var hi = { enabled: !1, files: {}, add: function (e, t) { this.enabled !== !1 && (this.files[e] = t); }, get: function (e) { if (this.enabled !== !1)
        return this.files[e]; }, remove: function (e) { delete this.files[e]; }, clear: function () { this.files = {}; } };
function wu(e, t, n) { var r = this, i = !1, a = 0, o = 0, s = void 0, l = []; this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (c) { o++, i === !1 && r.onStart !== void 0 && r.onStart(c, a, o), i = !0; }, this.itemEnd = function (c) { a++, r.onProgress !== void 0 && r.onProgress(c, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad()); }, this.itemError = function (c) { r.onError !== void 0 && r.onError(c); }, this.resolveURL = function (c) { return s ? s(c) : c; }, this.setURLModifier = function (c) { return s = c, this; }, this.addHandler = function (c, u) { return l.push(c, u), this; }, this.removeHandler = function (c) { var u = l.indexOf(c); return u !== -1 && l.splice(u, 2), this; }, this.getHandler = function (c) { for (var u = 0, h = l.length; u < h; u += 2) {
    var f = l[u], d = l[u + 1];
    if (f.global && (f.lastIndex = 0), f.test(c))
        return d;
} return null; }; }
var bg = new wu;
function ke(e) { this.manager = e !== void 0 ? e : bg, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = ""; }
Object.assign(ke.prototype, { load: function () { }, parse: function () { }, setCrossOrigin: function (e) { return this.crossOrigin = e, this; }, setPath: function (e) { return this.path = e, this; }, setResourcePath: function (e) { return this.resourcePath = e, this; } });
var Zt = {};
function Jt(e) { ke.call(this, e); }
Jt.prototype = Object.assign(Object.create(ke.prototype), { constructor: Jt, load: function (e, t, n, r) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); var i = this, a = hi.get(e); if (a !== void 0)
        return i.manager.itemStart(e), setTimeout(function () { t && t(a), i.manager.itemEnd(e); }, 0), a; if (Zt[e] !== void 0) {
        Zt[e].push({ onLoad: t, onProgress: n, onError: r });
        return;
    } var o = /^data:(.*?)(;base64)?,(.*)$/, s = e.match(o); if (s) {
        var l = s[1], c = !!s[2], u = s[3];
        u = decodeURIComponent(u), c && (u = atob(u));
        try {
            var h, f = (this.responseType || "").toLowerCase();
            switch (f) {
                case "arraybuffer":
                case "blob":
                    for (var d = new Uint8Array(u.length), p = 0; p < u.length; p++)
                        d[p] = u.charCodeAt(p);
                    f === "blob" ? h = new Blob([d.buffer], { type: l }) : h = d.buffer;
                    break;
                case "document":
                    var g = new DOMParser;
                    h = g.parseFromString(u, l);
                    break;
                case "json":
                    h = JSON.parse(u);
                    break;
                default:
                    h = u;
                    break;
            }
            setTimeout(function () { t && t(h), i.manager.itemEnd(e); }, 0);
        }
        catch (x) {
            setTimeout(function () { r && r(x), i.manager.itemError(e), i.manager.itemEnd(e); }, 0);
        }
    }
    else {
        Zt[e] = [], Zt[e].push({ onLoad: t, onProgress: n, onError: r });
        var v = new XMLHttpRequest;
        v.open("GET", e, !0), v.addEventListener("load", function (x) { var w = this.response, E = Zt[e]; if (delete Zt[e], this.status === 200 || this.status === 0) {
            this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), hi.add(e, w);
            for (var b = 0, L = E.length; b < L; b++) {
                var S = E[b];
                S.onLoad && S.onLoad(w);
            }
            i.manager.itemEnd(e);
        }
        else {
            for (var b = 0, L = E.length; b < L; b++) {
                var S = E[b];
                S.onError && S.onError(x);
            }
            i.manager.itemError(e), i.manager.itemEnd(e);
        } }, !1), v.addEventListener("progress", function (x) { for (var w = Zt[e], E = 0, b = w.length; E < b; E++) {
            var L = w[E];
            L.onProgress && L.onProgress(x);
        } }, !1), v.addEventListener("error", function (x) { var w = Zt[e]; delete Zt[e]; for (var E = 0, b = w.length; E < b; E++) {
            var L = w[E];
            L.onError && L.onError(x);
        } i.manager.itemError(e), i.manager.itemEnd(e); }, !1), v.addEventListener("abort", function (x) { var w = Zt[e]; delete Zt[e]; for (var E = 0, b = w.length; E < b; E++) {
            var L = w[E];
            L.onError && L.onError(x);
        } i.manager.itemError(e), i.manager.itemEnd(e); }, !1), this.responseType !== void 0 && (v.responseType = this.responseType), this.withCredentials !== void 0 && (v.withCredentials = this.withCredentials), v.overrideMimeType && v.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
        for (var y in this.requestHeader)
            v.setRequestHeader(y, this.requestHeader[y]);
        v.send(null);
    } return i.manager.itemStart(e), v; }, setResponseType: function (e) { return this.responseType = e, this; }, setWithCredentials: function (e) { return this.withCredentials = e, this; }, setMimeType: function (e) { return this.mimeType = e, this; }, setRequestHeader: function (e) { return this.requestHeader = e, this; } });
function bu(e) { ke.call(this, e); }
bu.prototype = Object.assign(Object.create(ke.prototype), { constructor: bu, load: function (e, t, n, r) { var i = this, a = new Jt(i.manager); a.setPath(i.path), a.load(e, function (o) { t(i.parse(JSON.parse(o))); }, n, r); }, parse: function (e) { for (var t = [], n = 0; n < e.length; n++) {
        var r = Yt.parse(e[n]);
        t.push(r);
    } return t; } });
function Mu(e) { ke.call(this, e); }
Mu.prototype = Object.assign(Object.create(ke.prototype), { constructor: Mu, load: function (e, t, n, r) { var i = this, a = [], o = new Hi; o.image = a; var s = new Jt(this.manager); s.setPath(this.path), s.setResponseType("arraybuffer"); function l(f) { s.load(e[f], function (d) { var p = i.parse(d, !0); a[f] = { width: p.width, height: p.height, format: p.format, mipmaps: p.mipmaps }, c += 1, c === 6 && (p.mipmapCount === 1 && (o.minFilter = ft), o.format = p.format, o.needsUpdate = !0, t && t(o)); }, n, r); } if (Array.isArray(e))
        for (var c = 0, u = 0, h = e.length; u < h; ++u)
            l(u);
    else
        s.load(e, function (f) { var d = i.parse(f, !0); if (d.isCubemap)
            for (var p = d.mipmaps.length / d.mipmapCount, g = 0; g < p; g++) {
                a[g] = { mipmaps: [] };
                for (var v = 0; v < d.mipmapCount; v++)
                    a[g].mipmaps.push(d.mipmaps[g * d.mipmapCount + v]), a[g].format = d.format, a[g].width = d.width, a[g].height = d.height;
            }
        else
            o.image.width = d.width, o.image.height = d.height, o.mipmaps = d.mipmaps; d.mipmapCount === 1 && (o.minFilter = ft), o.format = d.format, o.needsUpdate = !0, t && t(o); }, n, r); return o; } });
function nl(e) { ke.call(this, e); }
nl.prototype = Object.assign(Object.create(ke.prototype), { constructor: nl, load: function (e, t, n, r) { var i = this, a = new Hr, o = new Jt(this.manager); return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(e, function (s) { var l = i.parse(s); !l || (l.image !== void 0 ? a.image = l.image : l.data !== void 0 && (a.image.width = l.width, a.image.height = l.height, a.image.data = l.data), a.wrapS = l.wrapS !== void 0 ? l.wrapS : St, a.wrapT = l.wrapT !== void 0 ? l.wrapT : St, a.magFilter = l.magFilter !== void 0 ? l.magFilter : ft, a.minFilter = l.minFilter !== void 0 ? l.minFilter : ft, a.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.format !== void 0 && (a.format = l.format), l.type !== void 0 && (a.type = l.type), l.mipmaps !== void 0 && (a.mipmaps = l.mipmaps, a.minFilter = Ta), l.mipmapCount === 1 && (a.minFilter = ft), a.needsUpdate = !0, t && t(a, l)); }, n, r), a; } });
function oa(e) { ke.call(this, e); }
oa.prototype = Object.assign(Object.create(ke.prototype), { constructor: oa, load: function (e, t, n, r) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); var i = this, a = hi.get(e); if (a !== void 0)
        return i.manager.itemStart(e), setTimeout(function () { t && t(a), i.manager.itemEnd(e); }, 0), a; var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img"); function s() { o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), hi.add(e, this), t && t(this), i.manager.itemEnd(e); } function l(c) { o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), r && r(c), i.manager.itemError(e), i.manager.itemEnd(e); } return o.addEventListener("load", s, !1), o.addEventListener("error", l, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(e), o.src = e, o; } });
function rl(e) { ke.call(this, e); }
rl.prototype = Object.assign(Object.create(ke.prototype), { constructor: rl, load: function (e, t, n, r) { var i = new In, a = new oa(this.manager); a.setCrossOrigin(this.crossOrigin), a.setPath(this.path); var o = 0; function s(c) { a.load(e[c], function (u) { i.images[c] = u, o++, o === 6 && (i.needsUpdate = !0, t && t(i)); }, void 0, r); } for (var l = 0; l < e.length; ++l)
        s(l); return i; } });
function il(e) { ke.call(this, e); }
il.prototype = Object.assign(Object.create(ke.prototype), { constructor: il, load: function (e, t, n, r) { var i = new Ye, a = new oa(this.manager); return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function (o) { i.image = o; var s = e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0; i.format = s ? qn : Qt, i.needsUpdate = !0, t !== void 0 && t(i); }, n, r), i; } });
function fe() { this.type = "Curve", this.arcLengthDivisions = 200; }
Object.assign(fe.prototype, { getPoint: function () { return console.warn("THREE.Curve: .getPoint() not implemented."), null; }, getPointAt: function (e, t) { var n = this.getUtoTmapping(e); return this.getPoint(n, t); }, getPoints: function (e) { e === void 0 && (e = 5); for (var t = [], n = 0; n <= e; n++)
        t.push(this.getPoint(n / e)); return t; }, getSpacedPoints: function (e) { e === void 0 && (e = 5); for (var t = [], n = 0; n <= e; n++)
        t.push(this.getPointAt(n / e)); return t; }, getLength: function () { var e = this.getLengths(); return e[e.length - 1]; }, getLengths: function (e) { if (e === void 0 && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
        return this.cacheArcLengths; this.needsUpdate = !1; var t = [], n, r = this.getPoint(0), i, a = 0; for (t.push(0), i = 1; i <= e; i++)
        n = this.getPoint(i / e), a += n.distanceTo(r), t.push(a), r = n; return this.cacheArcLengths = t, t; }, updateArcLengths: function () { this.needsUpdate = !0, this.getLengths(); }, getUtoTmapping: function (e, t) { var n = this.getLengths(), r = 0, i = n.length, a; t ? a = t : a = e * n[i - 1]; for (var o = 0, s = i - 1, l; o <= s;)
        if (r = Math.floor(o + (s - o) / 2), l = n[r] - a, l < 0)
            o = r + 1;
        else if (l > 0)
            s = r - 1;
        else {
            s = r;
            break;
        } if (r = s, n[r] === a)
        return r / (i - 1); var c = n[r], u = n[r + 1], h = u - c, f = (a - c) / h, d = (r + f) / (i - 1); return d; }, getTangent: function (e) { var t = 1e-4, n = e - t, r = e + t; n < 0 && (n = 0), r > 1 && (r = 1); var i = this.getPoint(n), a = this.getPoint(r), o = a.clone().sub(i); return o.normalize(); }, getTangentAt: function (e) { var t = this.getUtoTmapping(e); return this.getTangent(t); }, computeFrenetFrames: function (e, t) { var n = new M, r = [], i = [], a = [], o = new M, s = new Re, l, c, u; for (l = 0; l <= e; l++)
        c = l / e, r[l] = this.getTangentAt(c), r[l].normalize(); i[0] = new M, a[0] = new M; var h = Number.MAX_VALUE, f = Math.abs(r[0].x), d = Math.abs(r[0].y), p = Math.abs(r[0].z); for (f <= h && (h = f, n.set(1, 0, 0)), d <= h && (h = d, n.set(0, 1, 0)), p <= h && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], o), a[0].crossVectors(r[0], i[0]), l = 1; l <= e; l++)
        i[l] = i[l - 1].clone(), a[l] = a[l - 1].clone(), o.crossVectors(r[l - 1], r[l]), o.length() > Number.EPSILON && (o.normalize(), u = Math.acos(Ae.clamp(r[l - 1].dot(r[l]), -1, 1)), i[l].applyMatrix4(s.makeRotationAxis(o, u))), a[l].crossVectors(r[l], i[l]); if (t === !0)
        for (u = Math.acos(Ae.clamp(i[0].dot(i[e]), -1, 1)), u /= e, r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (u = -u), l = 1; l <= e; l++)
            i[l].applyMatrix4(s.makeRotationAxis(r[l], u * l)), a[l].crossVectors(r[l], i[l]); return { tangents: r, normals: i, binormals: a }; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.arcLengthDivisions = e.arcLengthDivisions, this; }, toJSON: function () { var e = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } }; return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e; }, fromJSON: function (e) { return this.arcLengthDivisions = e.arcLengthDivisions, this; } });
function Ht(e, t, n, r, i, a, o, s) { fe.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = n || 1, this.yRadius = r || 1, this.aStartAngle = i || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0; }
Ht.prototype = Object.create(fe.prototype);
Ht.prototype.constructor = Ht;
Ht.prototype.isEllipseCurve = !0;
Ht.prototype.getPoint = function (e, t) { for (var n = t || new U, r = Math.PI * 2, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0;)
    i += r; for (; i > r;)
    i -= r; i < Number.EPSILON && (a ? i = 0 : i = r), this.aClockwise === !0 && !a && (i === r ? i = -r : i = i - r); var o = this.aStartAngle + e * i, s = this.aX + this.xRadius * Math.cos(o), l = this.aY + this.yRadius * Math.sin(o); if (this.aRotation !== 0) {
    var c = Math.cos(this.aRotation), u = Math.sin(this.aRotation), h = s - this.aX, f = l - this.aY;
    s = h * c - f * u + this.aX, l = h * u + f * c + this.aY;
} return n.set(s, l); };
Ht.prototype.copy = function (e) { return fe.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this; };
Ht.prototype.toJSON = function () { var e = fe.prototype.toJSON.call(this); return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e; };
Ht.prototype.fromJSON = function (e) { return fe.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this; };
function sa(e, t, n, r, i, a) { Ht.call(this, e, t, n, n, r, i, a), this.type = "ArcCurve"; }
sa.prototype = Object.create(Ht.prototype);
sa.prototype.constructor = sa;
sa.prototype.isArcCurve = !0;
function al() { var e = 0, t = 0, n = 0, r = 0; function i(a, o, s, l) { e = a, t = s, n = -3 * a + 3 * o - 2 * s - l, r = 2 * a - 2 * o + s + l; } return { initCatmullRom: function (a, o, s, l, c) { i(o, s, c * (s - a), c * (l - o)); }, initNonuniformCatmullRom: function (a, o, s, l, c, u, h) { var f = (o - a) / c - (s - a) / (c + u) + (s - o) / u, d = (s - o) / u - (l - o) / (u + h) + (l - s) / h; f *= u, d *= u, i(o, s, f, d); }, calc: function (a) { var o = a * a, s = o * a; return e + t * a + n * o + r * s; } }; }
var zo = new M, ol = new al, sl = new al, ll = new al;
function Mt(e, t, n, r) { fe.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = n || "centripetal", this.tension = r || .5; }
Mt.prototype = Object.create(fe.prototype);
Mt.prototype.constructor = Mt;
Mt.prototype.isCatmullRomCurve3 = !0;
Mt.prototype.getPoint = function (e, t) { var n = t || new M, r = this.points, i = r.length, a = (i - (this.closed ? 0 : 1)) * e, o = Math.floor(a), s = a - o; this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : s === 0 && o === i - 1 && (o = i - 2, s = 1); var l, c, u, h; if (this.closed || o > 0 ? l = r[(o - 1) % i] : (zo.subVectors(r[0], r[1]).add(r[0]), l = zo), c = r[o % i], u = r[(o + 1) % i], this.closed || o + 2 < i ? h = r[(o + 2) % i] : (zo.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), h = zo), this.curveType === "centripetal" || this.curveType === "chordal") {
    var f = this.curveType === "chordal" ? .5 : .25, d = Math.pow(l.distanceToSquared(c), f), p = Math.pow(c.distanceToSquared(u), f), g = Math.pow(u.distanceToSquared(h), f);
    p < 1e-4 && (p = 1), d < 1e-4 && (d = p), g < 1e-4 && (g = p), ol.initNonuniformCatmullRom(l.x, c.x, u.x, h.x, d, p, g), sl.initNonuniformCatmullRom(l.y, c.y, u.y, h.y, d, p, g), ll.initNonuniformCatmullRom(l.z, c.z, u.z, h.z, d, p, g);
}
else
    this.curveType === "catmullrom" && (ol.initCatmullRom(l.x, c.x, u.x, h.x, this.tension), sl.initCatmullRom(l.y, c.y, u.y, h.y, this.tension), ll.initCatmullRom(l.z, c.z, u.z, h.z, this.tension)); return n.set(ol.calc(s), sl.calc(s), ll.calc(s)), n; };
Mt.prototype.copy = function (e) { fe.prototype.copy.call(this, e), this.points = []; for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone());
} return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this; };
Mt.prototype.toJSON = function () { var e = fe.prototype.toJSON.call(this); e.points = []; for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray());
} return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e; };
Mt.prototype.fromJSON = function (e) { fe.prototype.fromJSON.call(this, e), this.points = []; for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new M().fromArray(r));
} return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this; };
function Eu(e, t, n, r, i) { var a = (r - t) * .5, o = (i - n) * .5, s = e * e, l = e * s; return (2 * n - 2 * r + a + o) * l + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n; }
function Mg(e, t) { var n = 1 - e; return n * n * t; }
function Eg(e, t) { return 2 * (1 - e) * e * t; }
function Sg(e, t) { return e * e * t; }
function la(e, t, n, r) { return Mg(e, t) + Eg(e, n) + Sg(e, r); }
function Tg(e, t) { var n = 1 - e; return n * n * n * t; }
function Ag(e, t) { var n = 1 - e; return 3 * n * n * e * t; }
function Lg(e, t) { return 3 * (1 - e) * e * e * t; }
function Rg(e, t) { return e * e * e * t; }
function ca(e, t, n, r, i) { return Tg(e, t) + Ag(e, n) + Lg(e, r) + Rg(e, i); }
function an(e, t, n, r) { fe.call(this), this.type = "CubicBezierCurve", this.v0 = e || new U, this.v1 = t || new U, this.v2 = n || new U, this.v3 = r || new U; }
an.prototype = Object.create(fe.prototype);
an.prototype.constructor = an;
an.prototype.isCubicBezierCurve = !0;
an.prototype.getPoint = function (e, t) { var n = t || new U, r = this.v0, i = this.v1, a = this.v2, o = this.v3; return n.set(ca(e, r.x, i.x, a.x, o.x), ca(e, r.y, i.y, a.y, o.y)), n; };
an.prototype.copy = function (e) { return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this; };
an.prototype.toJSON = function () { var e = fe.prototype.toJSON.call(this); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e; };
an.prototype.fromJSON = function (e) { return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this; };
function Mn(e, t, n, r) { fe.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new M, this.v1 = t || new M, this.v2 = n || new M, this.v3 = r || new M; }
Mn.prototype = Object.create(fe.prototype);
Mn.prototype.constructor = Mn;
Mn.prototype.isCubicBezierCurve3 = !0;
Mn.prototype.getPoint = function (e, t) { var n = t || new M, r = this.v0, i = this.v1, a = this.v2, o = this.v3; return n.set(ca(e, r.x, i.x, a.x, o.x), ca(e, r.y, i.y, a.y, o.y), ca(e, r.z, i.z, a.z, o.z)), n; };
Mn.prototype.copy = function (e) { return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this; };
Mn.prototype.toJSON = function () { var e = fe.prototype.toJSON.call(this); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e; };
Mn.prototype.fromJSON = function (e) { return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this; };
function Ft(e, t) { fe.call(this), this.type = "LineCurve", this.v1 = e || new U, this.v2 = t || new U; }
Ft.prototype = Object.create(fe.prototype);
Ft.prototype.constructor = Ft;
Ft.prototype.isLineCurve = !0;
Ft.prototype.getPoint = function (e, t) { var n = t || new U; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n; };
Ft.prototype.getPointAt = function (e, t) { return this.getPoint(e, t); };
Ft.prototype.getTangent = function () { var e = this.v2.clone().sub(this.v1); return e.normalize(); };
Ft.prototype.copy = function (e) { return fe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this; };
Ft.prototype.toJSON = function () { var e = fe.prototype.toJSON.call(this); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e; };
Ft.prototype.fromJSON = function (e) { return fe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this; };
function on(e, t) { fe.call(this), this.type = "LineCurve3", this.v1 = e || new M, this.v2 = t || new M; }
on.prototype = Object.create(fe.prototype);
on.prototype.constructor = on;
on.prototype.isLineCurve3 = !0;
on.prototype.getPoint = function (e, t) { var n = t || new M; return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n; };
on.prototype.getPointAt = function (e, t) { return this.getPoint(e, t); };
on.prototype.copy = function (e) { return fe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this; };
on.prototype.toJSON = function () { var e = fe.prototype.toJSON.call(this); return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e; };
on.prototype.fromJSON = function (e) { return fe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this; };
function sn(e, t, n) { fe.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new U, this.v1 = t || new U, this.v2 = n || new U; }
sn.prototype = Object.create(fe.prototype);
sn.prototype.constructor = sn;
sn.prototype.isQuadraticBezierCurve = !0;
sn.prototype.getPoint = function (e, t) { var n = t || new U, r = this.v0, i = this.v1, a = this.v2; return n.set(la(e, r.x, i.x, a.x), la(e, r.y, i.y, a.y)), n; };
sn.prototype.copy = function (e) { return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this; };
sn.prototype.toJSON = function () { var e = fe.prototype.toJSON.call(this); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e; };
sn.prototype.fromJSON = function (e) { return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this; };
function En(e, t, n) { fe.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new M, this.v1 = t || new M, this.v2 = n || new M; }
En.prototype = Object.create(fe.prototype);
En.prototype.constructor = En;
En.prototype.isQuadraticBezierCurve3 = !0;
En.prototype.getPoint = function (e, t) { var n = t || new M, r = this.v0, i = this.v1, a = this.v2; return n.set(la(e, r.x, i.x, a.x), la(e, r.y, i.y, a.y), la(e, r.z, i.z, a.z)), n; };
En.prototype.copy = function (e) { return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this; };
En.prototype.toJSON = function () { var e = fe.prototype.toJSON.call(this); return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e; };
En.prototype.fromJSON = function (e) { return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this; };
function ln(e) { fe.call(this), this.type = "SplineCurve", this.points = e || []; }
ln.prototype = Object.create(fe.prototype);
ln.prototype.constructor = ln;
ln.prototype.isSplineCurve = !0;
ln.prototype.getPoint = function (e, t) { var n = t || new U, r = this.points, i = (r.length - 1) * e, a = Math.floor(i), o = i - a, s = r[a === 0 ? a : a - 1], l = r[a], c = r[a > r.length - 2 ? r.length - 1 : a + 1], u = r[a > r.length - 3 ? r.length - 1 : a + 2]; return n.set(Eu(o, s.x, l.x, c.x, u.x), Eu(o, s.y, l.y, c.y, u.y)), n; };
ln.prototype.copy = function (e) { fe.prototype.copy.call(this, e), this.points = []; for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone());
} return this; };
ln.prototype.toJSON = function () { var e = fe.prototype.toJSON.call(this); e.points = []; for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray());
} return e; };
ln.prototype.fromJSON = function (e) { fe.prototype.fromJSON.call(this, e), this.points = []; for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new U().fromArray(r));
} return this; };
var cl = Object.freeze({ __proto__: null, ArcCurve: sa, CatmullRomCurve3: Mt, CubicBezierCurve: an, CubicBezierCurve3: Mn, EllipseCurve: Ht, LineCurve: Ft, LineCurve3: on, QuadraticBezierCurve: sn, QuadraticBezierCurve3: En, SplineCurve: ln });
function zn() { fe.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1; }
zn.prototype = Object.assign(Object.create(fe.prototype), { constructor: zn, add: function (e) { this.curves.push(e); }, closePath: function () { var e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1); e.equals(t) || this.curves.push(new Ft(t, e)); }, getPoint: function (e) { for (var t = e * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length;) {
        if (n[r] >= t) {
            var i = n[r] - t, a = this.curves[r], o = a.getLength(), s = o === 0 ? 0 : 1 - i / o;
            return a.getPointAt(s);
        }
        r++;
    } return null; }, getLength: function () { var e = this.getCurveLengths(); return e[e.length - 1]; }, updateArcLengths: function () { this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths(); }, getCurveLengths: function () { if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths; for (var e = [], t = 0, n = 0, r = this.curves.length; n < r; n++)
        t += this.curves[n].getLength(), e.push(t); return this.cacheLengths = e, e; }, getSpacedPoints: function (e) { e === void 0 && (e = 40); for (var t = [], n = 0; n <= e; n++)
        t.push(this.getPoint(n / e)); return this.autoClose && t.push(t[0]), t; }, getPoints: function (e) { e = e || 12; for (var t = [], n, r = 0, i = this.curves; r < i.length; r++)
        for (var a = i[r], o = a && a.isEllipseCurve ? e * 2 : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o), l = 0; l < s.length; l++) {
            var c = s[l];
            n && n.equals(c) || (t.push(c), n = c);
        } return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t; }, copy: function (e) { fe.prototype.copy.call(this, e), this.curves = []; for (var t = 0, n = e.curves.length; t < n; t++) {
        var r = e.curves[t];
        this.curves.push(r.clone());
    } return this.autoClose = e.autoClose, this; }, toJSON: function () { var e = fe.prototype.toJSON.call(this); e.autoClose = this.autoClose, e.curves = []; for (var t = 0, n = this.curves.length; t < n; t++) {
        var r = this.curves[t];
        e.curves.push(r.toJSON());
    } return e; }, fromJSON: function (e) { fe.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = []; for (var t = 0, n = e.curves.length; t < n; t++) {
        var r = e.curves[t];
        this.curves.push(new cl[r.type]().fromJSON(r));
    } return this; } });
function cn(e) { zn.call(this), this.type = "Path", this.currentPoint = new U, e && this.setFromPoints(e); }
cn.prototype = Object.assign(Object.create(zn.prototype), { constructor: cn, setFromPoints: function (e) { this.moveTo(e[0].x, e[0].y); for (var t = 1, n = e.length; t < n; t++)
        this.lineTo(e[t].x, e[t].y); return this; }, moveTo: function (e, t) { return this.currentPoint.set(e, t), this; }, lineTo: function (e, t) { var n = new Ft(this.currentPoint.clone(), new U(e, t)); return this.curves.push(n), this.currentPoint.set(e, t), this; }, quadraticCurveTo: function (e, t, n, r) { var i = new sn(this.currentPoint.clone(), new U(e, t), new U(n, r)); return this.curves.push(i), this.currentPoint.set(n, r), this; }, bezierCurveTo: function (e, t, n, r, i, a) { var o = new an(this.currentPoint.clone(), new U(e, t), new U(n, r), new U(i, a)); return this.curves.push(o), this.currentPoint.set(i, a), this; }, splineThru: function (e) { var t = [this.currentPoint.clone()].concat(e), n = new ln(t); return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this; }, arc: function (e, t, n, r, i, a) { var o = this.currentPoint.x, s = this.currentPoint.y; return this.absarc(e + o, t + s, n, r, i, a), this; }, absarc: function (e, t, n, r, i, a) { return this.absellipse(e, t, n, n, r, i, a), this; }, ellipse: function (e, t, n, r, i, a, o, s) { var l = this.currentPoint.x, c = this.currentPoint.y; return this.absellipse(e + l, t + c, n, r, i, a, o, s), this; }, absellipse: function (e, t, n, r, i, a, o, s) { var l = new Ht(e, t, n, r, i, a, o, s); if (this.curves.length > 0) {
        var c = l.getPoint(0);
        c.equals(this.currentPoint) || this.lineTo(c.x, c.y);
    } this.curves.push(l); var u = l.getPoint(1); return this.currentPoint.copy(u), this; }, copy: function (e) { return zn.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this; }, toJSON: function () { var e = zn.prototype.toJSON.call(this); return e.currentPoint = this.currentPoint.toArray(), e; }, fromJSON: function (e) { return zn.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this; } });
function cr(e) { cn.call(this, e), this.uuid = Ae.generateUUID(), this.type = "Shape", this.holes = []; }
cr.prototype = Object.assign(Object.create(cn.prototype), { constructor: cr, getPointsHoles: function (e) { for (var t = [], n = 0, r = this.holes.length; n < r; n++)
        t[n] = this.holes[n].getPoints(e); return t; }, extractPoints: function (e) { return { shape: this.getPoints(e), holes: this.getPointsHoles(e) }; }, copy: function (e) { cn.prototype.copy.call(this, e), this.holes = []; for (var t = 0, n = e.holes.length; t < n; t++) {
        var r = e.holes[t];
        this.holes.push(r.clone());
    } return this; }, toJSON: function () { var e = cn.prototype.toJSON.call(this); e.uuid = this.uuid, e.holes = []; for (var t = 0, n = this.holes.length; t < n; t++) {
        var r = this.holes[t];
        e.holes.push(r.toJSON());
    } return e; }, fromJSON: function (e) { cn.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = []; for (var t = 0, n = e.holes.length; t < n; t++) {
        var r = e.holes[t];
        this.holes.push(new cn().fromJSON(r));
    } return this; } });
function $e(e, t) { K.call(this), this.type = "Light", this.color = new ee(e), this.intensity = t !== void 0 ? t : 1, this.receiveShadow = void 0; }
$e.prototype = Object.assign(Object.create(K.prototype), { constructor: $e, isLight: !0, copy: function (e) { return K.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this; }, toJSON: function (e) { var t = K.prototype.toJSON.call(this, e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t; } });
function ul(e, t, n) { $e.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(K.DefaultUp), this.updateMatrix(), this.groundColor = new ee(t); }
ul.prototype = Object.assign(Object.create($e.prototype), { constructor: ul, isHemisphereLight: !0, copy: function (e) { return $e.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this; } });
function Sn(e) { this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new U(512, 512), this.map = null, this.mapPass = null, this.matrix = new Re, this._frustum = new to, this._frameExtents = new U(1, 1), this._viewportCount = 1, this._viewports = [new Ze(0, 0, 1, 1)]; }
Object.assign(Sn.prototype, { _projScreenMatrix: new Re, _lightPositionWorld: new M, _lookTarget: new M, getViewportCount: function () { return this._viewportCount; }, getFrustum: function () { return this._frustum; }, updateMatrices: function (e) { var t = this.camera, n = this.matrix, r = this._projScreenMatrix, i = this._lookTarget, a = this._lightPositionWorld; a.setFromMatrixPosition(e.matrixWorld), t.position.copy(a), i.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(i), t.updateMatrixWorld(), r.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromMatrix(r), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse); }, getViewport: function (e) { return this._viewports[e]; }, getFrameExtents: function () { return this._frameExtents; }, copy: function (e) { return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this; }, clone: function () { return new this.constructor().copy(this); }, toJSON: function () { var e = {}; return this.bias !== 0 && (e.bias = this.bias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e; } });
function hl() { Sn.call(this, new ct(50, 1, .5, 500)); }
hl.prototype = Object.assign(Object.create(Sn.prototype), { constructor: hl, isSpotLightShadow: !0, updateMatrices: function (e) { var t = this.camera, n = Ae.RAD2DEG * 2 * e.angle, r = this.mapSize.width / this.mapSize.height, i = e.distance || t.far; (n !== t.fov || r !== t.aspect || i !== t.far) && (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix()), Sn.prototype.updateMatrices.call(this, e); } });
function fl(e, t, n, r, i, a) { $e.call(this, e, t), this.type = "SpotLight", this.position.copy(K.DefaultUp), this.updateMatrix(), this.target = new K, Object.defineProperty(this, "power", { get: function () { return this.intensity * Math.PI; }, set: function (o) { this.intensity = o / Math.PI; } }), this.distance = n !== void 0 ? n : 0, this.angle = r !== void 0 ? r : Math.PI / 3, this.penumbra = i !== void 0 ? i : 0, this.decay = a !== void 0 ? a : 1, this.shadow = new hl; }
fl.prototype = Object.assign(Object.create($e.prototype), { constructor: fl, isSpotLight: !0, copy: function (e) { return $e.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this; } });
function dl() { Sn.call(this, new ct(90, 1, .5, 500)), this._frameExtents = new U(4, 2), this._viewportCount = 6, this._viewports = [new Ze(2, 1, 1, 1), new Ze(0, 1, 1, 1), new Ze(3, 1, 1, 1), new Ze(1, 1, 1, 1), new Ze(3, 0, 1, 1), new Ze(1, 0, 1, 1)], this._cubeDirections = [new M(1, 0, 0), new M(-1, 0, 0), new M(0, 0, 1), new M(0, 0, -1), new M(0, 1, 0), new M(0, -1, 0)], this._cubeUps = [new M(0, 1, 0), new M(0, 1, 0), new M(0, 1, 0), new M(0, 1, 0), new M(0, 0, 1), new M(0, 0, -1)]; }
dl.prototype = Object.assign(Object.create(Sn.prototype), { constructor: dl, isPointLightShadow: !0, updateMatrices: function (e, t) { t === void 0 && (t = 0); var n = this.camera, r = this.matrix, i = this._lightPositionWorld, a = this._lookTarget, o = this._projScreenMatrix; i.setFromMatrixPosition(e.matrixWorld), n.position.copy(i), a.copy(n.position), a.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(a), n.updateMatrixWorld(), r.makeTranslation(-i.x, -i.y, -i.z), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromMatrix(o); } });
function pl(e, t, n, r) { $e.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", { get: function () { return this.intensity * 4 * Math.PI; }, set: function (i) { this.intensity = i / (4 * Math.PI); } }), this.distance = n !== void 0 ? n : 0, this.decay = r !== void 0 ? r : 1, this.shadow = new dl; }
pl.prototype = Object.assign(Object.create($e.prototype), { constructor: pl, isPointLight: !0, copy: function (e) { return $e.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this; } });
function ua(e, t, n, r, i, a) { xn.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e !== void 0 ? e : -1, this.right = t !== void 0 ? t : 1, this.top = n !== void 0 ? n : 1, this.bottom = r !== void 0 ? r : -1, this.near = i !== void 0 ? i : .1, this.far = a !== void 0 ? a : 2e3, this.updateProjectionMatrix(); }
ua.prototype = Object.assign(Object.create(xn.prototype), { constructor: ua, isOrthographicCamera: !0, copy: function (e, t) { return xn.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this; }, setViewOffset: function (e, t, n, r, i, a) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix(); }, clearViewOffset: function () { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix(); }, updateProjectionMatrix: function () { var e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t; if (this.view !== null && this.view.enabled) {
        var l = this.zoom / (this.view.width / this.view.fullWidth), c = this.zoom / (this.view.height / this.view.fullHeight), u = (this.right - this.left) / this.view.width, h = (this.top - this.bottom) / this.view.height;
        i += u * (this.view.offsetX / l), a = i + u * (this.view.width / l), o -= h * (this.view.offsetY / c), s = o - h * (this.view.height / c);
    } this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix); }, toJSON: function (e) { var t = K.prototype.toJSON.call(this, e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t; } });
function vl() { Sn.call(this, new ua(-5, 5, 5, -5, .5, 500)); }
vl.prototype = Object.assign(Object.create(Sn.prototype), { constructor: vl, isDirectionalLightShadow: !0, updateMatrices: function (e) { Sn.prototype.updateMatrices.call(this, e); } });
function ml(e, t) { $e.call(this, e, t), this.type = "DirectionalLight", this.position.copy(K.DefaultUp), this.updateMatrix(), this.target = new K, this.shadow = new vl; }
ml.prototype = Object.assign(Object.create($e.prototype), { constructor: ml, isDirectionalLight: !0, copy: function (e) { return $e.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this; } });
function gl(e, t) { $e.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0; }
gl.prototype = Object.assign(Object.create($e.prototype), { constructor: gl, isAmbientLight: !0 });
function yl(e, t, n, r) { $e.call(this, e, t), this.type = "RectAreaLight", this.width = n !== void 0 ? n : 10, this.height = r !== void 0 ? r : 10; }
yl.prototype = Object.assign(Object.create($e.prototype), { constructor: yl, isRectAreaLight: !0, copy: function (e) { return $e.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this; }, toJSON: function (e) { var t = $e.prototype.toJSON.call(this, e); return t.object.width = this.width, t.object.height = this.height, t; } });
function xl(e) { ke.call(this, e), this.textures = {}; }
xl.prototype = Object.assign(Object.create(ke.prototype), { constructor: xl, load: function (e, t, n, r) { var i = this, a = new Jt(i.manager); a.setPath(i.path), a.load(e, function (o) { t(i.parse(JSON.parse(o))); }, n, r); }, parse: function (e) { var t = this.textures; function n(l) { return t[l] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", l), t[l]; } var r = new xg[e.type]; if (e.uuid !== void 0 && (r.uuid = e.uuid), e.name !== void 0 && (r.name = e.name), e.color !== void 0 && r.color.setHex(e.color), e.roughness !== void 0 && (r.roughness = e.roughness), e.metalness !== void 0 && (r.metalness = e.metalness), e.sheen !== void 0 && (r.sheen = new ee().setHex(e.sheen)), e.emissive !== void 0 && r.emissive.setHex(e.emissive), e.specular !== void 0 && r.specular.setHex(e.specular), e.shininess !== void 0 && (r.shininess = e.shininess), e.clearcoat !== void 0 && (r.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (r.clearcoatRoughness = e.clearcoatRoughness), e.vertexColors !== void 0 && (r.vertexColors = e.vertexColors), e.fog !== void 0 && (r.fog = e.fog), e.flatShading !== void 0 && (r.flatShading = e.flatShading), e.blending !== void 0 && (r.blending = e.blending), e.combine !== void 0 && (r.combine = e.combine), e.side !== void 0 && (r.side = e.side), e.opacity !== void 0 && (r.opacity = e.opacity), e.transparent !== void 0 && (r.transparent = e.transparent), e.alphaTest !== void 0 && (r.alphaTest = e.alphaTest), e.depthTest !== void 0 && (r.depthTest = e.depthTest), e.depthWrite !== void 0 && (r.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (r.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (r.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (r.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (r.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (r.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (r.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (r.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (r.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (r.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (r.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (r.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (r.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (r.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (r.rotation = e.rotation), e.linewidth !== 1 && (r.linewidth = e.linewidth), e.dashSize !== void 0 && (r.dashSize = e.dashSize), e.gapSize !== void 0 && (r.gapSize = e.gapSize), e.scale !== void 0 && (r.scale = e.scale), e.polygonOffset !== void 0 && (r.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (r.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (r.polygonOffsetUnits = e.polygonOffsetUnits), e.skinning !== void 0 && (r.skinning = e.skinning), e.morphTargets !== void 0 && (r.morphTargets = e.morphTargets), e.morphNormals !== void 0 && (r.morphNormals = e.morphNormals), e.dithering !== void 0 && (r.dithering = e.dithering), e.visible !== void 0 && (r.visible = e.visible), e.toneMapped !== void 0 && (r.toneMapped = e.toneMapped), e.userData !== void 0 && (r.userData = e.userData), e.uniforms !== void 0)
        for (var i in e.uniforms) {
            var a = e.uniforms[i];
            switch (r.uniforms[i] = {}, a.type) {
                case "t":
                    r.uniforms[i].value = n(a.value);
                    break;
                case "c":
                    r.uniforms[i].value = new ee().setHex(a.value);
                    break;
                case "v2":
                    r.uniforms[i].value = new U().fromArray(a.value);
                    break;
                case "v3":
                    r.uniforms[i].value = new M().fromArray(a.value);
                    break;
                case "v4":
                    r.uniforms[i].value = new Ze().fromArray(a.value);
                    break;
                case "m3": r.uniforms[i].value = new mt().fromArray(a.value);
                case "m4":
                    r.uniforms[i].value = new Re().fromArray(a.value);
                    break;
                default: r.uniforms[i].value = a.value;
            }
        } if (e.defines !== void 0 && (r.defines = e.defines), e.vertexShader !== void 0 && (r.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (r.fragmentShader = e.fragmentShader), e.extensions !== void 0)
        for (var o in e.extensions)
            r.extensions[o] = e.extensions[o]; if (e.shading !== void 0 && (r.flatShading = e.shading === 1), e.size !== void 0 && (r.size = e.size), e.sizeAttenuation !== void 0 && (r.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (r.map = n(e.map)), e.matcap !== void 0 && (r.matcap = n(e.matcap)), e.alphaMap !== void 0 && (r.alphaMap = n(e.alphaMap), r.transparent = !0), e.bumpMap !== void 0 && (r.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (r.bumpScale = e.bumpScale), e.normalMap !== void 0 && (r.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (r.normalMapType = e.normalMapType), e.normalScale !== void 0) {
        var s = e.normalScale;
        Array.isArray(s) === !1 && (s = [s, s]), r.normalScale = new U().fromArray(s);
    } return e.displacementMap !== void 0 && (r.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (r.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (r.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (r.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (r.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (r.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (r.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (r.specularMap = n(e.specularMap)), e.envMap !== void 0 && (r.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (r.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (r.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (r.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (r.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (r.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (r.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (r.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (r.gradientMap = n(e.gradientMap)), e.clearcoatNormalMap !== void 0 && (r.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (r.clearcoatNormalScale = new U().fromArray(e.clearcoatNormalScale)), r; }, setTextures: function (e) { return this.textures = e, this; } });
var Su = { decodeText: function (e) { if (typeof TextDecoder != "undefined")
        return new TextDecoder().decode(e); for (var t = "", n = 0, r = e.length; n < r; n++)
        t += String.fromCharCode(e[n]); try {
        return decodeURIComponent(escape(t));
    }
    catch {
        return t;
    } }, extractUrlBase: function (e) { var t = e.lastIndexOf("/"); return t === -1 ? "./" : e.substr(0, t + 1); } };
function _l() { te.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0; }
_l.prototype = Object.assign(Object.create(te.prototype), { constructor: _l, isInstancedBufferGeometry: !0, copy: function (e) { return te.prototype.copy.call(this, e), this.maxInstancedCount = e.maxInstancedCount, this; }, clone: function () { return new this.constructor().copy(this); }, toJSON: function () { var e = te.prototype.toJSON.call(this); return e.maxInstancedCount = this.maxInstancedCount, e.isInstancedBufferGeometry = !0, e; } });
function wl(e, t, n, r) { typeof n == "number" && (r = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), _e.call(this, e, t, n), this.meshPerAttribute = r || 1; }
wl.prototype = Object.assign(Object.create(_e.prototype), { constructor: wl, isInstancedBufferAttribute: !0, copy: function (e) { return _e.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this; }, toJSON: function () { var e = _e.prototype.toJSON.call(this); return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e; } });
function bl(e) { ke.call(this, e); }
bl.prototype = Object.assign(Object.create(ke.prototype), { constructor: bl, load: function (e, t, n, r) { var i = this, a = new Jt(i.manager); a.setPath(i.path), a.load(e, function (o) { t(i.parse(JSON.parse(o))); }, n, r); }, parse: function (e) { var t = e.isInstancedBufferGeometry ? new _l : new te, n = e.data.index; if (n !== void 0) {
        var r = new Ml[n.type](n.array);
        t.setIndex(new _e(r, 1));
    } var i = e.data.attributes; for (var a in i) {
        var o = i[a], r = new Ml[o.type](o.array), s = o.isInstancedBufferAttribute ? wl : _e, l = new s(r, o.itemSize, o.normalized);
        o.name !== void 0 && (l.name = o.name), t.setAttribute(a, l);
    } var c = e.data.morphAttributes; if (c)
        for (var a in c) {
            for (var u = c[a], h = [], f = 0, d = u.length; f < d; f++) {
                var o = u[f], r = new Ml[o.type](o.array), l = new _e(r, o.itemSize, o.normalized);
                o.name !== void 0 && (l.name = o.name), h.push(l);
            }
            t.morphAttributes[a] = h;
        } var p = e.data.morphTargetsRelative; p && (t.morphTargetsRelative = !0); var g = e.data.groups || e.data.drawcalls || e.data.offsets; if (g !== void 0)
        for (var f = 0, v = g.length; f !== v; ++f) {
            var y = g[f];
            t.addGroup(y.start, y.count, y.materialIndex);
        } var x = e.data.boundingSphere; if (x !== void 0) {
        var w = new M;
        x.center !== void 0 && w.fromArray(x.center), t.boundingSphere = new Pn(w, x.radius);
    } return e.name && (t.name = e.name), e.userData && (t.userData = e.userData), t; } });
var Ml = { Int8Array, Uint8Array, Uint8ClampedArray: typeof Uint8ClampedArray != "undefined" ? Uint8ClampedArray : Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array };
function El(e) { ke.call(this, e); }
El.prototype = Object.assign(Object.create(ke.prototype), { constructor: El, load: function (e, t, n, r) { var i = this, a = this.path === "" ? Su.extractUrlBase(e) : this.path; this.resourcePath = this.resourcePath || a; var o = new Jt(i.manager); o.setPath(this.path), o.load(e, function (s) { var l = null; try {
        l = JSON.parse(s);
    }
    catch (u) {
        r !== void 0 && r(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message);
        return;
    } var c = l.metadata; if (c === void 0 || c.type === void 0 || c.type.toLowerCase() === "geometry") {
        console.error("THREE.ObjectLoader: Can't load " + e);
        return;
    } i.parse(l, t); }, n, r); }, parse: function (e, t) { var n = this.parseShape(e.shapes), r = this.parseGeometries(e.geometries, n), i = this.parseImages(e.images, function () { t !== void 0 && t(s); }), a = this.parseTextures(e.textures, i), o = this.parseMaterials(e.materials, a), s = this.parseObject(e.object, r, o); return e.animations && (s.animations = this.parseAnimations(e.animations)), (e.images === void 0 || e.images.length === 0) && t !== void 0 && t(s), s; }, parseShape: function (e) { var t = {}; if (e !== void 0)
        for (var n = 0, r = e.length; n < r; n++) {
            var i = new cr().fromJSON(e[n]);
            t[i.uuid] = i;
        } return t; }, parseGeometries: function (e, t) { var n = {}; if (e !== void 0)
        for (var r = new bl, i = 0, a = e.length; i < a; i++) {
            var o, s = e[i];
            switch (s.type) {
                case "PlaneGeometry":
                case "PlaneBufferGeometry":
                    o = new bt[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                    break;
                case "BoxGeometry":
                case "BoxBufferGeometry":
                case "CubeGeometry":
                    o = new bt[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                    break;
                case "CircleGeometry":
                case "CircleBufferGeometry":
                    o = new bt[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
                    break;
                case "CylinderGeometry":
                case "CylinderBufferGeometry":
                    o = new bt[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                    break;
                case "ConeGeometry":
                case "ConeBufferGeometry":
                    o = new bt[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                    break;
                case "SphereGeometry":
                case "SphereBufferGeometry":
                    o = new bt[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                    break;
                case "DodecahedronGeometry":
                case "DodecahedronBufferGeometry":
                case "IcosahedronGeometry":
                case "IcosahedronBufferGeometry":
                case "OctahedronGeometry":
                case "OctahedronBufferGeometry":
                case "TetrahedronGeometry":
                case "TetrahedronBufferGeometry":
                    o = new bt[s.type](s.radius, s.detail);
                    break;
                case "RingGeometry":
                case "RingBufferGeometry":
                    o = new bt[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                    break;
                case "TorusGeometry":
                case "TorusBufferGeometry":
                    o = new bt[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                    break;
                case "TorusKnotGeometry":
                case "TorusKnotBufferGeometry":
                    o = new bt[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
                    break;
                case "TubeGeometry":
                case "TubeBufferGeometry":
                    o = new bt[s.type](new cl[s.path.type]().fromJSON(s.path), s.tubularSegments, s.radius, s.radialSegments, s.closed);
                    break;
                case "LatheGeometry":
                case "LatheBufferGeometry":
                    o = new bt[s.type](s.points, s.segments, s.phiStart, s.phiLength);
                    break;
                case "PolyhedronGeometry":
                case "PolyhedronBufferGeometry":
                    o = new bt[s.type](s.vertices, s.indices, s.radius, s.details);
                    break;
                case "ShapeGeometry":
                case "ShapeBufferGeometry":
                    for (var h = [], l = 0, c = s.shapes.length; l < c; l++) {
                        var u = t[s.shapes[l]];
                        h.push(u);
                    }
                    o = new bt[s.type](h, s.curveSegments);
                    break;
                case "ExtrudeGeometry":
                case "ExtrudeBufferGeometry":
                    for (var h = [], l = 0, c = s.shapes.length; l < c; l++) {
                        var u = t[s.shapes[l]];
                        h.push(u);
                    }
                    var f = s.options.extrudePath;
                    f !== void 0 && (s.options.extrudePath = new cl[f.type]().fromJSON(f)), o = new bt[s.type](h, s.options);
                    break;
                case "BufferGeometry":
                case "InstancedBufferGeometry":
                    o = r.parse(s);
                    break;
                case "Geometry":
                    if ("THREE" in window && "LegacyJSONLoader" in THREE) {
                        var d = new THREE.LegacyJSONLoader;
                        o = d.parse(s, this.resourcePath).geometry;
                    }
                    else
                        console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
                    break;
                default:
                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                    continue;
            }
            o.uuid = s.uuid, s.name !== void 0 && (o.name = s.name), o.isBufferGeometry === !0 && s.userData !== void 0 && (o.userData = s.userData), n[s.uuid] = o;
        } return n; }, parseMaterials: function (e, t) { var n = {}, r = {}; if (e !== void 0) {
        var i = new xl;
        i.setTextures(t);
        for (var a = 0, o = e.length; a < o; a++) {
            var s = e[a];
            if (s.type === "MultiMaterial") {
                for (var l = [], c = 0; c < s.materials.length; c++) {
                    var u = s.materials[c];
                    n[u.uuid] === void 0 && (n[u.uuid] = i.parse(u)), l.push(n[u.uuid]);
                }
                r[s.uuid] = l;
            }
            else
                n[s.uuid] === void 0 && (n[s.uuid] = i.parse(s)), r[s.uuid] = n[s.uuid];
        }
    } return r; }, parseAnimations: function (e) { for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n], i = Yt.parse(r);
        r.uuid !== void 0 && (i.uuid = r.uuid), t.push(i);
    } return t; }, parseImages: function (e, t) { var n = this, r = {}; function i(g) { return n.manager.itemStart(g), o.load(g, function () { n.manager.itemEnd(g); }, void 0, function () { n.manager.itemError(g), n.manager.itemEnd(g); }); } if (e !== void 0 && e.length > 0) {
        var a = new wu(t), o = new oa(a);
        o.setCrossOrigin(this.crossOrigin);
        for (var s = 0, l = e.length; s < l; s++) {
            var c = e[s], u = c.url;
            if (Array.isArray(u)) {
                r[c.uuid] = [];
                for (var h = 0, f = u.length; h < f; h++) {
                    var d = u[h], p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : n.resourcePath + d;
                    r[c.uuid].push(i(p));
                }
            }
            else {
                var p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.resourcePath + c.url;
                r[c.uuid] = i(p);
            }
        }
    } return r; }, parseTextures: function (e, t) { function n(l, c) { return typeof l == "number" ? l : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", l), c[l]); } var r = {}; if (e !== void 0)
        for (var i = 0, a = e.length; i < a; i++) {
            var o = e[i];
            o.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), t[o.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", o.image);
            var s;
            Array.isArray(t[o.image]) ? s = new In(t[o.image]) : s = new Ye(t[o.image]), s.needsUpdate = !0, s.uuid = o.uuid, o.name !== void 0 && (s.name = o.name), o.mapping !== void 0 && (s.mapping = n(o.mapping, Cg)), o.offset !== void 0 && s.offset.fromArray(o.offset), o.repeat !== void 0 && s.repeat.fromArray(o.repeat), o.center !== void 0 && s.center.fromArray(o.center), o.rotation !== void 0 && (s.rotation = o.rotation), o.wrap !== void 0 && (s.wrapS = n(o.wrap[0], Tu), s.wrapT = n(o.wrap[1], Tu)), o.format !== void 0 && (s.format = o.format), o.type !== void 0 && (s.type = o.type), o.encoding !== void 0 && (s.encoding = o.encoding), o.minFilter !== void 0 && (s.minFilter = n(o.minFilter, Au)), o.magFilter !== void 0 && (s.magFilter = n(o.magFilter, Au)), o.anisotropy !== void 0 && (s.anisotropy = o.anisotropy), o.flipY !== void 0 && (s.flipY = o.flipY), o.premultiplyAlpha !== void 0 && (s.premultiplyAlpha = o.premultiplyAlpha), o.unpackAlignment !== void 0 && (s.unpackAlignment = o.unpackAlignment), r[o.uuid] = s;
        } return r; }, parseObject: function (e, t, n) { var r; function i(v) { return t[v] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", v), t[v]; } function a(v) { if (v !== void 0) {
        if (Array.isArray(v)) {
            for (var y = [], x = 0, w = v.length; x < w; x++) {
                var E = v[x];
                n[E] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", E), y.push(n[E]);
            }
            return y;
        }
        return n[v] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", v), n[v];
    } } switch (e.type) {
        case "Scene":
            r = new Ln, e.background !== void 0 && Number.isInteger(e.background) && (r.background = new ee(e.background)), e.fog !== void 0 && (e.fog.type === "Fog" ? r.fog = new Hs(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (r.fog = new Gs(e.fog.color, e.fog.density)));
            break;
        case "PerspectiveCamera":
            r = new ct(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (r.focus = e.focus), e.zoom !== void 0 && (r.zoom = e.zoom), e.filmGauge !== void 0 && (r.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (r.filmOffset = e.filmOffset), e.view !== void 0 && (r.view = Object.assign({}, e.view));
            break;
        case "OrthographicCamera":
            r = new ua(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (r.zoom = e.zoom), e.view !== void 0 && (r.view = Object.assign({}, e.view));
            break;
        case "AmbientLight":
            r = new gl(e.color, e.intensity);
            break;
        case "DirectionalLight":
            r = new ml(e.color, e.intensity);
            break;
        case "PointLight":
            r = new pl(e.color, e.intensity, e.distance, e.decay);
            break;
        case "RectAreaLight":
            r = new yl(e.color, e.intensity, e.width, e.height);
            break;
        case "SpotLight":
            r = new fl(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
            break;
        case "HemisphereLight":
            r = new ul(e.color, e.groundColor, e.intensity);
            break;
        case "SkinnedMesh": console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
        case "Mesh":
            var o = i(e.geometry), s = a(e.material);
            o.bones && o.bones.length > 0 ? r = new ho(o, s) : r = new et(o, s);
            break;
        case "InstancedMesh":
            var o = i(e.geometry), s = a(e.material), l = e.count, c = e.instanceMatrix;
            r = new Ws(o, s, l), r.instanceMatrix = new _e(new Float32Array(c.array), 16);
            break;
        case "LOD":
            r = new uo;
            break;
        case "Line":
            r = new zt(i(e.geometry), a(e.material), e.mode);
            break;
        case "LineLoop":
            r = new js(i(e.geometry), a(e.material));
            break;
        case "LineSegments":
            r = new nt(i(e.geometry), a(e.material));
            break;
        case "PointCloud":
        case "Points":
            r = new Gi(i(e.geometry), a(e.material));
            break;
        case "Sprite":
            r = new so(a(e.material));
            break;
        case "Group":
            r = new ro;
            break;
        default: r = new K;
    } if (r.uuid = e.uuid, e.name !== void 0 && (r.name = e.name), e.matrix !== void 0 ? (r.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (r.matrixAutoUpdate = e.matrixAutoUpdate), r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (e.position !== void 0 && r.position.fromArray(e.position), e.rotation !== void 0 && r.rotation.fromArray(e.rotation), e.quaternion !== void 0 && r.quaternion.fromArray(e.quaternion), e.scale !== void 0 && r.scale.fromArray(e.scale)), e.castShadow !== void 0 && (r.castShadow = e.castShadow), e.receiveShadow !== void 0 && (r.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (r.shadow.bias = e.shadow.bias), e.shadow.radius !== void 0 && (r.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && r.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (r.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (r.visible = e.visible), e.frustumCulled !== void 0 && (r.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (r.renderOrder = e.renderOrder), e.userData !== void 0 && (r.userData = e.userData), e.layers !== void 0 && (r.layers.mask = e.layers), e.children !== void 0)
        for (var u = e.children, h = 0; h < u.length; h++)
            r.add(this.parseObject(u[h], t, n)); if (e.type === "LOD") {
        e.autoUpdate !== void 0 && (r.autoUpdate = e.autoUpdate);
        for (var f = e.levels, d = 0; d < f.length; d++) {
            var p = f[d], g = r.getObjectByProperty("uuid", p.object);
            g !== void 0 && r.addLevel(g, p.distance);
        }
    } return r; } });
var Cg = { UVMapping: as, CubeReflectionMapping: os, CubeRefractionMapping: ss, EquirectangularReflectionMapping: Ql, EquirectangularRefractionMapping: ls, SphericalReflectionMapping: Kl, CubeUVReflectionMapping: _i, CubeUVRefractionMapping: cs }, Tu = { RepeatWrapping: Ea, ClampToEdgeWrapping: St, MirroredRepeatWrapping: Sa }, Au = { NearestFilter: st, NearestMipmapNearestFilter: us, NearestMipmapLinearFilter: hs, LinearFilter: ft, LinearMipmapNearestFilter: ec, LinearMipmapLinearFilter: Ta };
function Lu(e) { typeof createImageBitmap == "undefined" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch == "undefined" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), ke.call(this, e), this.options = void 0; }
Lu.prototype = Object.assign(Object.create(ke.prototype), { constructor: Lu, setOptions: function (t) { return this.options = t, this; }, load: function (e, t, n, r) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); var i = this, a = hi.get(e); if (a !== void 0)
        return i.manager.itemStart(e), setTimeout(function () { t && t(a), i.manager.itemEnd(e); }, 0), a; fetch(e).then(function (o) { return o.blob(); }).then(function (o) { return i.options === void 0 ? createImageBitmap(o) : createImageBitmap(o, i.options); }).then(function (o) { hi.add(e, o), t && t(o), i.manager.itemEnd(e); }).catch(function (o) { r && r(o), i.manager.itemError(e), i.manager.itemEnd(e); }), i.manager.itemStart(e); } });
function Ru() { this.type = "ShapePath", this.color = new ee, this.subPaths = [], this.currentPath = null; }
Object.assign(Ru.prototype, { moveTo: function (e, t) { return this.currentPath = new cn, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this; }, lineTo: function (e, t) { return this.currentPath.lineTo(e, t), this; }, quadraticCurveTo: function (e, t, n, r) { return this.currentPath.quadraticCurveTo(e, t, n, r), this; }, bezierCurveTo: function (e, t, n, r, i, a) { return this.currentPath.bezierCurveTo(e, t, n, r, i, a), this; }, splineThru: function (e) { return this.currentPath.splineThru(e), this; }, toShapes: function (e, t) { function n(F) { for (var V = [], Y = 0, ie = F.length; Y < ie; Y++) {
        var q = F[Y], Z = new cr;
        Z.curves = q.curves, V.push(Z);
    } return V; } function r(F, V) { for (var Y = V.length, ie = !1, q = Y - 1, Z = 0; Z < Y; q = Z++) {
        var ae = V[q], Fe = V[Z], Be = Fe.x - ae.x, Ne = Fe.y - ae.y;
        if (Math.abs(Ne) > Number.EPSILON) {
            if (Ne < 0 && (ae = V[Z], Be = -Be, Fe = V[q], Ne = -Ne), F.y < ae.y || F.y > Fe.y)
                continue;
            if (F.y === ae.y) {
                if (F.x === ae.x)
                    return !0;
            }
            else {
                var Se = Ne * (F.x - ae.x) - Be * (F.y - ae.y);
                if (Se === 0)
                    return !0;
                if (Se < 0)
                    continue;
                ie = !ie;
            }
        }
        else {
            if (F.y !== ae.y)
                continue;
            if (Fe.x <= F.x && F.x <= ae.x || ae.x <= F.x && F.x <= Fe.x)
                return !0;
        }
    } return ie; } var i = Fn.isClockWise, a = this.subPaths; if (a.length === 0)
        return []; if (t === !0)
        return n(a); var o, s, l, c = []; if (a.length === 1)
        return s = a[0], l = new cr, l.curves = s.curves, c.push(l), c; var u = !i(a[0].getPoints()); u = e ? !u : u; var h = [], f = [], d = [], p = 0, g; f[p] = void 0, d[p] = []; for (var v = 0, y = a.length; v < y; v++)
        s = a[v], g = s.getPoints(), o = i(g), o = e ? !o : o, o ? (!u && f[p] && p++, f[p] = { s: new cr, p: g }, f[p].s.curves = s.curves, u && p++, d[p] = []) : d[p].push({ h: s, p: g[0] }); if (!f[0])
        return n(a); if (f.length > 1) {
        for (var x = !1, w = [], E = 0, b = f.length; E < b; E++)
            h[E] = [];
        for (var E = 0, b = f.length; E < b; E++)
            for (var L = d[E], S = 0; S < L.length; S++) {
                for (var T = L[S], D = !0, I = 0; I < f.length; I++)
                    r(T.p, f[I].p) && (E !== I && w.push({ froms: E, tos: I, hole: S }), D ? (D = !1, h[I].push(T)) : x = !0);
                D && h[E].push(T);
            }
        w.length > 0 && (x || (d = h));
    } for (var O, v = 0, B = f.length; v < B; v++) {
        l = f[v].s, c.push(l), O = d[v];
        for (var z = 0, N = O.length; z < N; z++)
            l.holes.push(O[z].h);
    } return c; } });
function Cu(e) { this.type = "Font", this.data = e; }
Object.assign(Cu.prototype, { isFont: !0, generateShapes: function (e, t) { t === void 0 && (t = 100); for (var n = [], r = Pg(e, t, this.data), i = 0, a = r.length; i < a; i++)
        Array.prototype.push.apply(n, r[i].toShapes()); return n; } });
function Pg(e, t, n) {
    for (var r = Array.from ? Array.from(e) : String(e).split(""), i = t / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i, o = [], s = 0, l = 0, c = 0; c < r.length; c++) {
        var u = r[c];
        if (u === `
`)
            s = 0, l -= a;
        else {
            var h = Dg(u, i, s, l, n);
            s += h.offsetX, o.push(h.path);
        }
    }
    return o;
}
function Dg(e, t, n, r, i) { var a = i.glyphs[e] || i.glyphs["?"]; if (!a) {
    console.error('THREE.Font: character "' + e + '" does not exists in font family ' + i.familyName + ".");
    return;
} var o = new Ru, s, l, c, u, h, f, d, p; if (a.o)
    for (var g = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, y = g.length; v < y;) {
        var x = g[v++];
        switch (x) {
            case "m":
                s = g[v++] * t + n, l = g[v++] * t + r, o.moveTo(s, l);
                break;
            case "l":
                s = g[v++] * t + n, l = g[v++] * t + r, o.lineTo(s, l);
                break;
            case "q":
                c = g[v++] * t + n, u = g[v++] * t + r, h = g[v++] * t + n, f = g[v++] * t + r, o.quadraticCurveTo(h, f, c, u);
                break;
            case "b":
                c = g[v++] * t + n, u = g[v++] * t + r, h = g[v++] * t + n, f = g[v++] * t + r, d = g[v++] * t + n, p = g[v++] * t + r, o.bezierCurveTo(h, f, d, p, c, u);
                break;
        }
    } return { offsetX: a.ha * t, path: o }; }
function Pu(e) { ke.call(this, e); }
Pu.prototype = Object.assign(Object.create(ke.prototype), { constructor: Pu, load: function (e, t, n, r) { var i = this, a = new Jt(this.manager); a.setPath(this.path), a.load(e, function (o) { var s; try {
        s = JSON.parse(o);
    }
    catch {
        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), s = JSON.parse(o.substring(65, o.length - 2));
    } var l = i.parse(s); t && t(l); }, n, r); }, parse: function (e) { return new Cu(e); } });
var Go, Du = { getContext: function () { return Go === void 0 && (Go = new (window.AudioContext || window.webkitAudioContext)), Go; }, setContext: function (e) { Go = e; } };
function Sl(e) { ke.call(this, e); }
Sl.prototype = Object.assign(Object.create(ke.prototype), { constructor: Sl, load: function (e, t, n, r) { var i = new Jt(this.manager); i.setResponseType("arraybuffer"), i.setPath(this.path), i.load(e, function (a) { var o = a.slice(0), s = Du.getContext(); s.decodeAudioData(o, function (l) { t(l); }); }, n, r); } });
function Tl() { this.coefficients = []; for (var e = 0; e < 9; e++)
    this.coefficients.push(new M); }
Object.assign(Tl.prototype, { isSphericalHarmonics3: !0, set: function (e) { for (var t = 0; t < 9; t++)
        this.coefficients[t].copy(e[t]); return this; }, zero: function () { for (var e = 0; e < 9; e++)
        this.coefficients[e].set(0, 0, 0); return this; }, getAt: function (e, t) { var n = e.x, r = e.y, i = e.z, a = this.coefficients; return t.copy(a[0]).multiplyScalar(.282095), t.addScale(a[1], .488603 * r), t.addScale(a[2], .488603 * i), t.addScale(a[3], .488603 * n), t.addScale(a[4], 1.092548 * (n * r)), t.addScale(a[5], 1.092548 * (r * i)), t.addScale(a[6], .315392 * (3 * i * i - 1)), t.addScale(a[7], 1.092548 * (n * i)), t.addScale(a[8], .546274 * (n * n - r * r)), t; }, getIrradianceAt: function (e, t) { var n = e.x, r = e.y, i = e.z, a = this.coefficients; return t.copy(a[0]).multiplyScalar(.886227), t.addScale(a[1], 2 * .511664 * r), t.addScale(a[2], 2 * .511664 * i), t.addScale(a[3], 2 * .511664 * n), t.addScale(a[4], 2 * .429043 * n * r), t.addScale(a[5], 2 * .429043 * r * i), t.addScale(a[6], .743125 * i * i - .247708), t.addScale(a[7], 2 * .429043 * n * i), t.addScale(a[8], .429043 * (n * n - r * r)), t; }, add: function (e) { for (var t = 0; t < 9; t++)
        this.coefficients[t].add(e.coefficients[t]); return this; }, scale: function (e) { for (var t = 0; t < 9; t++)
        this.coefficients[t].multiplyScalar(e); return this; }, lerp: function (e, t) { for (var n = 0; n < 9; n++)
        this.coefficients[n].lerp(e.coefficients[n], t); return this; }, equals: function (e) { for (var t = 0; t < 9; t++)
        if (!this.coefficients[t].equals(e.coefficients[t]))
            return !1; return !0; }, copy: function (e) { return this.set(e.coefficients); }, clone: function () { return new this.constructor().copy(this); }, fromArray: function (e, t) { t === void 0 && (t = 0); for (var n = this.coefficients, r = 0; r < 9; r++)
        n[r].fromArray(e, t + r * 3); return this; }, toArray: function (e, t) { e === void 0 && (e = []), t === void 0 && (t = 0); for (var n = this.coefficients, r = 0; r < 9; r++)
        n[r].toArray(e, t + r * 3); return e; } });
Object.assign(Tl, { getBasisAt: function (e, t) { var n = e.x, r = e.y, i = e.z; t[0] = .282095, t[1] = .488603 * r, t[2] = .488603 * i, t[3] = .488603 * n, t[4] = 1.092548 * n * r, t[5] = 1.092548 * r * i, t[6] = .315392 * (3 * i * i - 1), t[7] = 1.092548 * n * i, t[8] = .546274 * (n * n - r * r); } });
function un(e, t) { $e.call(this, void 0, t), this.sh = e !== void 0 ? e : new Tl; }
un.prototype = Object.assign(Object.create($e.prototype), { constructor: un, isLightProbe: !0, copy: function (e) { return $e.prototype.copy.call(this, e), this.sh.copy(e.sh), this.intensity = e.intensity, this; }, toJSON: function (e) { var t = $e.prototype.toJSON.call(this, e); return t; } });
function Iu(e, t, n) { un.call(this, void 0, n); var r = new ee().set(e), i = new ee().set(t), a = new M(r.r, r.g, r.b), o = new M(i.r, i.g, i.b), s = Math.sqrt(Math.PI), l = s * Math.sqrt(.75); this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l); }
Iu.prototype = Object.assign(Object.create(un.prototype), { constructor: Iu, isHemisphereLightProbe: !0, copy: function (e) { return un.prototype.copy.call(this, e), this; }, toJSON: function (e) { var t = un.prototype.toJSON.call(this, e); return t; } });
function Ou(e, t) { un.call(this, void 0, t); var n = new ee().set(e); this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI)); }
Ou.prototype = Object.assign(Object.create(un.prototype), { constructor: Ou, isAmbientLightProbe: !0, copy: function (e) { return un.prototype.copy.call(this, e), this; }, toJSON: function (e) { var t = un.prototype.toJSON.call(this, e); return t; } });
var Nu = new Re, Fu = new Re;
function Ig() { this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new ct, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new ct, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = { focus: null, fov: null, aspect: null, near: null, far: null, zoom: null, eyeSep: null }; }
Object.assign(Ig.prototype, { update: function (e) { var t = this._cache, n = t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep; if (n) {
        t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep;
        var r = e.projectionMatrix.clone(), i = t.eyeSep / 2, a = i * t.near / t.focus, o = t.near * Math.tan(Ae.DEG2RAD * t.fov * .5) / t.zoom, s, l;
        Fu.elements[12] = -i, Nu.elements[12] = i, s = -o * t.aspect + a, l = o * t.aspect + a, r.elements[0] = 2 * t.near / (l - s), r.elements[8] = (l + s) / (l - s), this.cameraL.projectionMatrix.copy(r), s = -o * t.aspect - a, l = o * t.aspect - a, r.elements[0] = 2 * t.near / (l - s), r.elements[8] = (l + s) / (l - s), this.cameraR.projectionMatrix.copy(r);
    } this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Fu), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Nu); } });
function Bu(e) { this.autoStart = e !== void 0 ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1; }
Object.assign(Bu.prototype, { start: function () { this.startTime = (typeof performance == "undefined" ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0; }, stop: function () { this.getElapsedTime(), this.running = !1, this.autoStart = !1; }, getElapsedTime: function () { return this.getDelta(), this.elapsedTime; }, getDelta: function () { var e = 0; if (this.autoStart && !this.running)
        return this.start(), 0; if (this.running) {
        var t = (typeof performance == "undefined" ? Date : performance).now();
        e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    } return e; } });
var ur = new M, Uu = new Tt, Og = new M, hr = new M;
function zu() { K.call(this), this.type = "AudioListener", this.context = Du.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Bu; }
zu.prototype = Object.assign(Object.create(K.prototype), { constructor: zu, getInput: function () { return this.gain; }, removeFilter: function () { return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this; }, getFilter: function () { return this.filter; }, setFilter: function (e) { return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this; }, getMasterVolume: function () { return this.gain.gain.value; }, setMasterVolume: function (e) { return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this; }, updateMatrixWorld: function (e) { K.prototype.updateMatrixWorld.call(this, e); var t = this.context.listener, n = this.up; if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(ur, Uu, Og), hr.set(0, 0, -1).applyQuaternion(Uu), t.positionX) {
        var r = this.context.currentTime + this.timeDelta;
        t.positionX.linearRampToValueAtTime(ur.x, r), t.positionY.linearRampToValueAtTime(ur.y, r), t.positionZ.linearRampToValueAtTime(ur.z, r), t.forwardX.linearRampToValueAtTime(hr.x, r), t.forwardY.linearRampToValueAtTime(hr.y, r), t.forwardZ.linearRampToValueAtTime(hr.z, r), t.upX.linearRampToValueAtTime(n.x, r), t.upY.linearRampToValueAtTime(n.y, r), t.upZ.linearRampToValueAtTime(n.z, r);
    }
    else
        t.setPosition(ur.x, ur.y, ur.z), t.setOrientation(hr.x, hr.y, hr.z, n.x, n.y, n.z); } });
function ha(e) { K.call(this), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this._startedAt = 0, this._pausedAt = 0, this.filters = []; }
ha.prototype = Object.assign(Object.create(K.prototype), { constructor: ha, getOutput: function () { return this.gain; }, setNodeSource: function (e) { return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this; }, setMediaElementSource: function (e) { return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this; }, setMediaStreamSource: function (e) { return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this; }, setBuffer: function (e) { return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this; }, play: function (e) { if (e === void 0 && (e = 0), this.isPlaying === !0) {
        console.warn("THREE.Audio: Audio is already playing.");
        return;
    } if (this.hasPlaybackControl === !1) {
        console.warn("THREE.Audio: this Audio has no playback control.");
        return;
    } this._startedAt = this.context.currentTime + e; var t = this.context.createBufferSource(); return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._pausedAt + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect(); }, pause: function () { if (this.hasPlaybackControl === !1) {
        console.warn("THREE.Audio: this Audio has no playback control.");
        return;
    } return this.isPlaying === !0 && (this._pausedAt = (this.context.currentTime - this._startedAt) * this.playbackRate, this.source.stop(), this.source.onended = null, this.isPlaying = !1), this; }, stop: function () { if (this.hasPlaybackControl === !1) {
        console.warn("THREE.Audio: this Audio has no playback control.");
        return;
    } return this._pausedAt = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this; }, connect: function () { if (this.filters.length > 0) {
        this.source.connect(this.filters[0]);
        for (var e = 1, t = this.filters.length; e < t; e++)
            this.filters[e - 1].connect(this.filters[e]);
        this.filters[this.filters.length - 1].connect(this.getOutput());
    }
    else
        this.source.connect(this.getOutput()); return this; }, disconnect: function () { if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (var e = 1, t = this.filters.length; e < t; e++)
            this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
    }
    else
        this.source.disconnect(this.getOutput()); return this; }, getFilters: function () { return this.filters; }, setFilters: function (e) { return e || (e = []), this.isPlaying === !0 ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this; }, setDetune: function (e) { if (this.detune = e, this.source.detune !== void 0)
        return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this; }, getDetune: function () { return this.detune; }, getFilter: function () { return this.getFilters()[0]; }, setFilter: function (e) { return this.setFilters(e ? [e] : []); }, setPlaybackRate: function (e) { if (this.hasPlaybackControl === !1) {
        console.warn("THREE.Audio: this Audio has no playback control.");
        return;
    } return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this; }, getPlaybackRate: function () { return this.playbackRate; }, onEnded: function () { this.isPlaying = !1; }, getLoop: function () { return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop; }, setLoop: function (e) { if (this.hasPlaybackControl === !1) {
        console.warn("THREE.Audio: this Audio has no playback control.");
        return;
    } return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this; }, setLoopStart: function (e) { return this.loopStart = e, this; }, setLoopEnd: function (e) { return this.loopEnd = e, this; }, getVolume: function () { return this.gain.gain.value; }, setVolume: function (e) { return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this; } });
var fr = new M, Gu = new Tt, Ng = new M, dr = new M;
function Hu(e) { ha.call(this, e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain); }
Hu.prototype = Object.assign(Object.create(ha.prototype), { constructor: Hu, getOutput: function () { return this.panner; }, getRefDistance: function () { return this.panner.refDistance; }, setRefDistance: function (e) { return this.panner.refDistance = e, this; }, getRolloffFactor: function () { return this.panner.rolloffFactor; }, setRolloffFactor: function (e) { return this.panner.rolloffFactor = e, this; }, getDistanceModel: function () { return this.panner.distanceModel; }, setDistanceModel: function (e) { return this.panner.distanceModel = e, this; }, getMaxDistance: function () { return this.panner.maxDistance; }, setMaxDistance: function (e) { return this.panner.maxDistance = e, this; }, setDirectionalCone: function (e, t, n) { return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this; }, updateMatrixWorld: function (e) { if (K.prototype.updateMatrixWorld.call(this, e), !(this.hasPlaybackControl === !0 && this.isPlaying === !1)) {
        this.matrixWorld.decompose(fr, Gu, Ng), dr.set(0, 0, 1).applyQuaternion(Gu);
        var t = this.panner;
        if (t.positionX) {
            var n = this.context.currentTime + this.listener.timeDelta;
            t.positionX.linearRampToValueAtTime(fr.x, n), t.positionY.linearRampToValueAtTime(fr.y, n), t.positionZ.linearRampToValueAtTime(fr.z, n), t.orientationX.linearRampToValueAtTime(dr.x, n), t.orientationY.linearRampToValueAtTime(dr.y, n), t.orientationZ.linearRampToValueAtTime(dr.z, n);
        }
        else
            t.setPosition(fr.x, fr.y, fr.z), t.setOrientation(dr.x, dr.y, dr.z);
    } } });
function Vu(e, t) { this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t !== void 0 ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser); }
Object.assign(Vu.prototype, { getFrequencyData: function () { return this.analyser.getByteFrequencyData(this.data), this.data; }, getAverageFrequency: function () { for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++)
        e += t[n]; return e / t.length; } });
function ku(e, t, n) { this.binding = e, this.valueSize = n; var r = Float64Array, i; switch (t) {
    case "quaternion":
        i = this._slerp;
        break;
    case "string":
    case "bool":
        r = Array, i = this._select;
        break;
    default: i = this._lerp;
} this.buffer = new r(n * 4), this._mixBufferRegion = i, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0; }
Object.assign(ku.prototype, { accumulate: function (e, t) { var n = this.buffer, r = this.valueSize, i = e * r + r, a = this.cumulativeWeight; if (a === 0) {
        for (var o = 0; o !== r; ++o)
            n[i + o] = n[o];
        a = t;
    }
    else {
        a += t;
        var s = t / a;
        this._mixBufferRegion(n, i, 0, s, r);
    } this.cumulativeWeight = a; }, apply: function (e) { var t = this.valueSize, n = this.buffer, r = e * t + t, i = this.cumulativeWeight, a = this.binding; if (this.cumulativeWeight = 0, i < 1) {
        var o = t * 3;
        this._mixBufferRegion(n, r, o, 1 - i, t);
    } for (var s = t, l = t + t; s !== l; ++s)
        if (n[s] !== n[s + t]) {
            a.setValue(n, r);
            break;
        } }, saveOriginalState: function () { var e = this.binding, t = this.buffer, n = this.valueSize, r = n * 3; e.getValue(t, r); for (var i = n, a = r; i !== a; ++i)
        t[i] = t[r + i % n]; this.cumulativeWeight = 0; }, restoreOriginalState: function () { var e = this.valueSize * 3; this.binding.setValue(this.buffer, e); }, _select: function (e, t, n, r, i) { if (r >= .5)
        for (var a = 0; a !== i; ++a)
            e[t + a] = e[n + a]; }, _slerp: function (e, t, n, r) { Tt.slerpFlat(e, t, e, t, e, n, r); }, _lerp: function (e, t, n, r, i) { for (var a = 1 - r, o = 0; o !== i; ++o) {
        var s = t + o;
        e[s] = e[s] * a + e[n + o] * r;
    } } });
var Al = "\\[\\]\\.:\\/", Fg = new RegExp("[" + Al + "]", "g"), Ll = "[^" + Al + "]", Bg = "[^" + Al.replace("\\.", "") + "]", Ug = /((?:WC+[\/:])*)/.source.replace("WC", Ll), zg = /(WCOD+)?/.source.replace("WCOD", Bg), Gg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ll), Hg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ll), Vg = new RegExp("^" + Ug + zg + Gg + Hg + "$"), kg = ["material", "materials", "bones"];
function Wu(e, t, n) { var r = n || Et.parseTrackName(t); this._targetGroup = e, this._bindings = e.subscribe_(t, r); }
Object.assign(Wu.prototype, { getValue: function (e, t) { this.bind(); var n = this._targetGroup.nCachedObjects_, r = this._bindings[n]; r !== void 0 && r.getValue(e, t); }, setValue: function (e, t) { for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
        n[r].setValue(e, t); }, bind: function () { for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
        e[t].bind(); }, unbind: function () { for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
        e[t].unbind(); } });
function Et(e, t, n) { this.path = t, this.parsedPath = n || Et.parseTrackName(t), this.node = Et.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e; }
Object.assign(Et, { Composite: Wu, create: function (e, t, n) { return e && e.isAnimationObjectGroup ? new Et.Composite(e, t, n) : new Et(e, t, n); }, sanitizeNodeName: function (e) { return e.replace(/\s/g, "_").replace(Fg, ""); }, parseTrackName: function (e) { var t = Vg.exec(e); if (!t)
        throw new Error("PropertyBinding: Cannot parse trackName: " + e); var n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, r = n.nodeName && n.nodeName.lastIndexOf("."); if (r !== void 0 && r !== -1) {
        var i = n.nodeName.substring(r + 1);
        kg.indexOf(i) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = i);
    } if (n.propertyName === null || n.propertyName.length === 0)
        throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e); return n; }, findNode: function (e, t) { if (!t || t === "" || t === "root" || t === "." || t === -1 || t === e.name || t === e.uuid)
        return e; if (e.skeleton) {
        var n = e.skeleton.getBoneByName(t);
        if (n !== void 0)
            return n;
    } if (e.children) {
        var r = function (a) { for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s.name === t || s.uuid === t)
                return s;
            var l = r(s.children);
            if (l)
                return l;
        } return null; }, i = r(e.children);
        if (i)
            return i;
    } return null; } });
Object.assign(Et.prototype, { _getValue_unavailable: function () { }, _setValue_unavailable: function () { }, BindingType: { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, GetterByBindingType: [function (t, n) { t[n] = this.node[this.propertyName]; }, function (t, n) { for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
            t[n++] = r[i]; }, function (t, n) { t[n] = this.resolvedProperty[this.propertyIndex]; }, function (t, n) { this.resolvedProperty.toArray(t, n); }], SetterByBindingTypeAndVersioning: [[function (t, n) { this.targetObject[this.propertyName] = t[n]; }, function (t, n) { this.targetObject[this.propertyName] = t[n], this.targetObject.needsUpdate = !0; }, function (t, n) { this.targetObject[this.propertyName] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (t, n) { for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
                r[i] = t[n++]; }, function (t, n) { for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
                r[i] = t[n++]; this.targetObject.needsUpdate = !0; }, function (t, n) { for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
                r[i] = t[n++]; this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (t, n) { this.resolvedProperty[this.propertyIndex] = t[n]; }, function (t, n) { this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.needsUpdate = !0; }, function (t, n) { this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (t, n) { this.resolvedProperty.fromArray(t, n); }, function (t, n) { this.resolvedProperty.fromArray(t, n), this.targetObject.needsUpdate = !0; }, function (t, n) { this.resolvedProperty.fromArray(t, n), this.targetObject.matrixWorldNeedsUpdate = !0; }]], getValue: function (t, n) { this.bind(), this.getValue(t, n); }, setValue: function (t, n) { this.bind(), this.setValue(t, n); }, bind: function () { var e = this.node, t = this.parsedPath, n = t.objectName, r = t.propertyName, i = t.propertyIndex; if (e || (e = Et.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
        console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
        return;
    } if (n) {
        var a = t.objectIndex;
        switch (n) {
            case "materials":
                if (!e.material) {
                    console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    return;
                }
                if (!e.material.materials) {
                    console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    return;
                }
                e = e.material.materials;
                break;
            case "bones":
                if (!e.skeleton) {
                    console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    return;
                }
                e = e.skeleton.bones;
                for (var o = 0; o < e.length; o++)
                    if (e[o].name === a) {
                        a = o;
                        break;
                    }
                break;
            default:
                if (e[n] === void 0) {
                    console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                    return;
                }
                e = e[n];
        }
        if (a !== void 0) {
            if (e[a] === void 0) {
                console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                return;
            }
            e = e[a];
        }
    } var s = e[r]; if (s === void 0) {
        var l = t.nodeName;
        console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + r + " but it wasn't found.", e);
        return;
    } var c = this.Versioning.None; this.targetObject = e, e.needsUpdate !== void 0 ? c = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (c = this.Versioning.MatrixWorldNeedsUpdate); var u = this.BindingType.Direct; if (i !== void 0) {
        if (r === "morphTargetInfluences") {
            if (!e.geometry) {
                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                return;
            }
            if (e.geometry.isBufferGeometry) {
                if (!e.geometry.morphAttributes) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    return;
                }
                for (var o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                    if (e.geometry.morphAttributes.position[o].name === i) {
                        i = o;
                        break;
                    }
            }
            else {
                if (!e.geometry.morphTargets) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                    return;
                }
                for (var o = 0; o < this.node.geometry.morphTargets.length; o++)
                    if (e.geometry.morphTargets[o].name === i) {
                        i = o;
                        break;
                    }
            }
        }
        u = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i;
    }
    else
        s.fromArray !== void 0 && s.toArray !== void 0 ? (u = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (u = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r; this.getValue = this.GetterByBindingType[u], this.setValue = this.SetterByBindingTypeAndVersioning[u][c]; }, unbind: function () { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound; } });
Object.assign(Et.prototype, { _getValue_unbound: Et.prototype.getValue, _setValue_unbound: Et.prototype.setValue });
function Wg() { this.uuid = Ae.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0; var e = {}; this._indicesByUUID = e; for (var t = 0, n = arguments.length; t !== n; ++t)
    e[arguments[t].uuid] = t; this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {}; var r = this; this.stats = { objects: { get total() { return r._objects.length; }, get inUse() { return this.total - r.nCachedObjects_; } }, get bindingsPerObject() { return r._bindings.length; } }; }
Object.assign(Wg.prototype, { isAnimationObjectGroup: !0, add: function () { for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, l = void 0, c = 0, u = arguments.length; c !== u; ++c) {
        var h = arguments[c], f = h.uuid, d = r[f];
        if (d === void 0) {
            d = t++, r[f] = d, e.push(h);
            for (var p = 0, g = s; p !== g; ++p)
                o[p].push(new Et(h, i[p], a[p]));
        }
        else if (d < n) {
            l = e[d];
            var v = --n, y = e[v];
            r[y.uuid] = d, e[d] = y, r[f] = v, e[v] = h;
            for (var p = 0, g = s; p !== g; ++p) {
                var x = o[p], w = x[v], E = x[d];
                x[d] = w, E === void 0 && (E = new Et(h, i[p], a[p])), x[v] = E;
            }
        }
        else
            e[d] !== l && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    } this.nCachedObjects_ = n; }, remove: function () { for (var e = this._objects, t = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, i = r.length, a = 0, o = arguments.length; a !== o; ++a) {
        var s = arguments[a], l = s.uuid, c = n[l];
        if (c !== void 0 && c >= t) {
            var u = t++, h = e[u];
            n[h.uuid] = c, e[c] = h, n[l] = u, e[u] = s;
            for (var f = 0, d = i; f !== d; ++f) {
                var p = r[f], g = p[u], v = p[c];
                p[c] = g, p[u] = v;
            }
        }
    } this.nCachedObjects_ = t; }, uncache: function () { for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._bindings, a = i.length, o = 0, s = arguments.length; o !== s; ++o) {
        var l = arguments[o], c = l.uuid, u = r[c];
        if (u !== void 0)
            if (delete r[c], u < n) {
                var h = --n, f = e[h], d = --t, p = e[d];
                r[f.uuid] = u, e[u] = f, r[p.uuid] = h, e[h] = p, e.pop();
                for (var g = 0, v = a; g !== v; ++g) {
                    var y = i[g], x = y[h], w = y[d];
                    y[u] = x, y[h] = w, y.pop();
                }
            }
            else {
                var d = --t, p = e[d];
                r[p.uuid] = u, e[u] = p, e.pop();
                for (var g = 0, v = a; g !== v; ++g) {
                    var y = i[g];
                    y[u] = y[d], y.pop();
                }
            }
    } this.nCachedObjects_ = n; }, subscribe_: function (e, t) { var n = this._bindingsIndicesByPath, r = n[e], i = this._bindings; if (r !== void 0)
        return i[r]; var a = this._paths, o = this._parsedPaths, s = this._objects, l = s.length, c = this.nCachedObjects_, u = new Array(l); r = i.length, n[e] = r, a.push(e), o.push(t), i.push(u); for (var h = c, f = s.length; h !== f; ++h) {
        var d = s[h];
        u[h] = new Et(d, e, t);
    } return u; }, unsubscribe_: function (e) { var t = this._bindingsIndicesByPath, n = t[e]; if (n !== void 0) {
        var r = this._paths, i = this._parsedPaths, a = this._bindings, o = a.length - 1, s = a[o], l = e[o];
        t[l] = n, a[n] = s, a.pop(), i[n] = i[o], i.pop(), r[n] = r[o], r.pop();
    } } });
function ju(e, t, n) { this._mixer = e, this._clip = t, this._localRoot = n || null; for (var r = t.tracks, i = r.length, a = new Array(i), o = { endingStart: _r, endingEnd: _r }, s = 0; s !== i; ++s) {
    var l = r[s].createInterpolant(null);
    a[s] = l, l.settings = o;
} this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(i), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Vf, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0; }
Object.assign(ju.prototype, { play: function () { return this._mixer._activateAction(this), this; }, stop: function () { return this._mixer._deactivateAction(this), this.reset(); }, reset: function () { return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping(); }, isRunning: function () { return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this); }, isScheduled: function () { return this._mixer._isActiveAction(this); }, startAt: function (e) { return this._startTime = e, this; }, setLoop: function (e, t) { return this.loop = e, this.repetitions = t, this; }, setEffectiveWeight: function (e) { return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading(); }, getEffectiveWeight: function () { return this._effectiveWeight; }, fadeIn: function (e) { return this._scheduleFading(e, 0, 1); }, fadeOut: function (e) { return this._scheduleFading(e, 1, 0); }, crossFadeFrom: function (e, t, n) { if (e.fadeOut(t), this.fadeIn(t), n) {
        var r = this._clip.duration, i = e._clip.duration, a = i / r, o = r / i;
        e.warp(1, a, t), this.warp(o, 1, t);
    } return this; }, crossFadeTo: function (e, t, n) { return e.crossFadeFrom(this, t, n); }, stopFading: function () { var e = this._weightInterpolant; return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this; }, setEffectiveTimeScale: function (e) { return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping(); }, getEffectiveTimeScale: function () { return this._effectiveTimeScale; }, setDuration: function (e) { return this.timeScale = this._clip.duration / e, this.stopWarping(); }, syncWith: function (e) { return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping(); }, halt: function (e) { return this.warp(this._effectiveTimeScale, 0, e); }, warp: function (e, t, n) { var r = this._mixer, i = r.time, a = this._timeScaleInterpolant, o = this.timeScale; a === null && (a = r._lendControlInterpolant(), this._timeScaleInterpolant = a); var s = a.parameterPositions, l = a.sampleValues; return s[0] = i, s[1] = i + n, l[0] = e / o, l[1] = t / o, this; }, stopWarping: function () { var e = this._timeScaleInterpolant; return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this; }, getMixer: function () { return this._mixer; }, getClip: function () { return this._clip; }, getRoot: function () { return this._localRoot || this._mixer._root; }, _update: function (e, t, n, r) { if (!this.enabled) {
        this._updateWeight(e);
        return;
    } var i = this._startTime; if (i !== null) {
        var a = (e - i) * n;
        if (a < 0 || n === 0)
            return;
        this._startTime = null, t = n * a;
    } t *= this._updateTimeScale(e); var o = this._updateTime(t), s = this._updateWeight(e); if (s > 0)
        for (var l = this._interpolants, c = this._propertyBindings, u = 0, h = l.length; u !== h; ++u)
            l[u].evaluate(o), c[u].accumulate(r, s); }, _updateWeight: function (e) { var t = 0; if (this.enabled) {
        t = this.weight;
        var n = this._weightInterpolant;
        if (n !== null) {
            var r = n.evaluate(e)[0];
            t *= r, e > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1));
        }
    } return this._effectiveWeight = t, t; }, _updateTimeScale: function (e) { var t = 0; if (!this.paused) {
        t = this.timeScale;
        var n = this._timeScaleInterpolant;
        if (n !== null) {
            var r = n.evaluate(e)[0];
            t *= r, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
        }
    } return this._effectiveTimeScale = t, t; }, _updateTime: function (e) { var t = this.time + e, n = this._clip.duration, r = this.loop, i = this._loopCount, a = r === kf; if (e === 0)
        return i === -1 ? t : a && (i & 1) === 1 ? n - t : t; if (r === Hf) {
        i === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
        e: {
            if (t >= n)
                t = n;
            else if (t < 0)
                t = 0;
            else {
                this.time = t;
                break e;
            }
            this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = t, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e < 0 ? -1 : 1 });
        }
    }
    else {
        if (i === -1 && (e >= 0 ? (i = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), t >= n || t < 0) {
            var o = Math.floor(t / n);
            t -= n * o, i += Math.abs(o);
            var s = this.repetitions - i;
            if (s <= 0)
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? n : 0, this.time = t, this._mixer.dispatchEvent({ type: "finished", action: this, direction: e > 0 ? 1 : -1 });
            else {
                if (s === 1) {
                    var l = e < 0;
                    this._setEndings(l, !l, a);
                }
                else
                    this._setEndings(!1, !1, a);
                this._loopCount = i, this.time = t, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: o });
            }
        }
        else
            this.time = t;
        if (a && (i & 1) === 1)
            return n - t;
    } return t; }, _setEndings: function (e, t, n) { var r = this._interpolantSettings; n ? (r.endingStart = wr, r.endingEnd = wr) : (e ? r.endingStart = this.zeroSlopeAtStart ? wr : _r : r.endingStart = Da, t ? r.endingEnd = this.zeroSlopeAtEnd ? wr : _r : r.endingEnd = Da); }, _scheduleFading: function (e, t, n) { var r = this._mixer, i = r.time, a = this._weightInterpolant; a === null && (a = r._lendControlInterpolant(), this._weightInterpolant = a); var o = a.parameterPositions, s = a.sampleValues; return o[0] = i, s[0] = t, o[1] = i + e, s[1] = n, this; } });
function qu(e) { this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1; }
qu.prototype = Object.assign(Object.create(dn.prototype), { constructor: qu, _bindAction: function (e, t) { var n = e._localRoot || this._root, r = e._clip.tracks, i = r.length, a = e._propertyBindings, o = e._interpolants, s = n.uuid, l = this._bindingsByRootAndName, c = l[s]; c === void 0 && (c = {}, l[s] = c); for (var u = 0; u !== i; ++u) {
        var h = r[u], f = h.name, d = c[f];
        if (d !== void 0)
            a[u] = d;
        else {
            if (d = a[u], d !== void 0) {
                d._cacheIndex === null && (++d.referenceCount, this._addInactiveBinding(d, s, f));
                continue;
            }
            var p = t && t._propertyBindings[u].binding.parsedPath;
            d = new ku(Et.create(n, f, p), h.ValueTypeName, h.getValueSize()), ++d.referenceCount, this._addInactiveBinding(d, s, f), a[u] = d;
        }
        o[u].resultBuffer = d.buffer;
    } }, _activateAction: function (e) { if (!this._isActiveAction(e)) {
        if (e._cacheIndex === null) {
            var t = (e._localRoot || this._root).uuid, n = e._clip.uuid, r = this._actionsByClip[n];
            this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, n, t);
        }
        for (var i = e._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
            var s = i[a];
            s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
        }
        this._lendAction(e);
    } }, _deactivateAction: function (e) { if (this._isActiveAction(e)) {
        for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
            var i = t[n];
            --i.useCount === 0 && (i.restoreOriginalState(), this._takeBackBinding(i));
        }
        this._takeBackAction(e);
    } }, _initMemoryManager: function () { this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0; var e = this; this.stats = { actions: { get total() { return e._actions.length; }, get inUse() { return e._nActiveActions; } }, bindings: { get total() { return e._bindings.length; }, get inUse() { return e._nActiveBindings; } }, controlInterpolants: { get total() { return e._controlInterpolants.length; }, get inUse() { return e._nActiveControlInterpolants; } } }; }, _isActiveAction: function (e) { var t = e._cacheIndex; return t !== null && t < this._nActiveActions; }, _addInactiveAction: function (e, t, n) { var r = this._actions, i = this._actionsByClip, a = i[t]; if (a === void 0)
        a = { knownActions: [e], actionByRoot: {} }, e._byClipCacheIndex = 0, i[t] = a;
    else {
        var o = a.knownActions;
        e._byClipCacheIndex = o.length, o.push(e);
    } e._cacheIndex = r.length, r.push(e), a.actionByRoot[n] = e; }, _removeInactiveAction: function (e) { var t = this._actions, n = t[t.length - 1], r = e._cacheIndex; n._cacheIndex = r, t[r] = n, t.pop(), e._cacheIndex = null; var i = e._clip.uuid, a = this._actionsByClip, o = a[i], s = o.knownActions, l = s[s.length - 1], c = e._byClipCacheIndex; l._byClipCacheIndex = c, s[c] = l, s.pop(), e._byClipCacheIndex = null; var u = o.actionByRoot, h = (e._localRoot || this._root).uuid; delete u[h], s.length === 0 && delete a[i], this._removeInactiveBindingsForAction(e); }, _removeInactiveBindingsForAction: function (e) { for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
        var i = t[n];
        --i.referenceCount === 0 && this._removeInactiveBinding(i);
    } }, _lendAction: function (e) { var t = this._actions, n = e._cacheIndex, r = this._nActiveActions++, i = t[r]; e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i; }, _takeBackAction: function (e) { var t = this._actions, n = e._cacheIndex, r = --this._nActiveActions, i = t[r]; e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i; }, _addInactiveBinding: function (e, t, n) { var r = this._bindingsByRootAndName, i = r[t], a = this._bindings; i === void 0 && (i = {}, r[t] = i), i[n] = e, e._cacheIndex = a.length, a.push(e); }, _removeInactiveBinding: function (e) { var t = this._bindings, n = e.binding, r = n.rootNode.uuid, i = n.path, a = this._bindingsByRootAndName, o = a[r], s = t[t.length - 1], l = e._cacheIndex; s._cacheIndex = l, t[l] = s, t.pop(), delete o[i], Object.keys(o).length === 0 && delete a[r]; }, _lendBinding: function (e) { var t = this._bindings, n = e._cacheIndex, r = this._nActiveBindings++, i = t[r]; e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i; }, _takeBackBinding: function (e) { var t = this._bindings, n = e._cacheIndex, r = --this._nActiveBindings, i = t[r]; e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i; }, _lendControlInterpolant: function () { var e = this._controlInterpolants, t = this._nActiveControlInterpolants++, n = e[t]; return n === void 0 && (n = new Bo(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n; }, _takeBackControlInterpolant: function (e) { var t = this._controlInterpolants, n = e.__cacheIndex, r = --this._nActiveControlInterpolants, i = t[r]; e.__cacheIndex = r, t[r] = e, i.__cacheIndex = n, t[n] = i; }, _controlInterpolantsResultBuffer: new Float32Array(1), clipAction: function (e, t) { var n = t || this._root, r = n.uuid, i = typeof e == "string" ? Yt.findByName(n, e) : e, a = i !== null ? i.uuid : e, o = this._actionsByClip[a], s = null; if (o !== void 0) {
        var l = o.actionByRoot[r];
        if (l !== void 0)
            return l;
        s = o.knownActions[0], i === null && (i = s._clip);
    } if (i === null)
        return null; var c = new ju(this, i, t); return this._bindAction(c, s), this._addInactiveAction(c, a, r), c; }, existingAction: function (e, t) { var n = t || this._root, r = n.uuid, i = typeof e == "string" ? Yt.findByName(n, e) : e, a = i ? i.uuid : e, o = this._actionsByClip[a]; return o !== void 0 && o.actionByRoot[r] || null; }, stopAllAction: function () { var e = this._actions, t = this._nActiveActions, n = this._bindings, r = this._nActiveBindings; this._nActiveActions = 0, this._nActiveBindings = 0; for (var i = 0; i !== t; ++i)
        e[i].reset(); for (var i = 0; i !== r; ++i)
        n[i].useCount = 0; return this; }, update: function (e) { e *= this.timeScale; for (var t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
        var s = t[o];
        s._update(r, e, i, a);
    } for (var l = this._bindings, c = this._nActiveBindings, o = 0; o !== c; ++o)
        l[o].apply(a); return this; }, setTime: function (e) { this.time = 0; for (var t = 0; t < this._actions.length; t++)
        this._actions[t].time = 0; return this.update(e); }, getRoot: function () { return this._root; }, uncacheClip: function (e) { var t = this._actions, n = e.uuid, r = this._actionsByClip, i = r[n]; if (i !== void 0) {
        for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
            var l = a[o];
            this._deactivateAction(l);
            var c = l._cacheIndex, u = t[t.length - 1];
            l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = c, t[c] = u, t.pop(), this._removeInactiveBindingsForAction(l);
        }
        delete r[n];
    } }, uncacheRoot: function (e) { var t = e.uuid, n = this._actionsByClip; for (var r in n) {
        var i = n[r].actionByRoot, a = i[t];
        a !== void 0 && (this._deactivateAction(a), this._removeInactiveAction(a));
    } var o = this._bindingsByRootAndName, s = o[t]; if (s !== void 0)
        for (var l in s) {
            var c = s[l];
            c.restoreOriginalState(), this._removeInactiveBinding(c);
        } }, uncacheAction: function (e, t) { var n = this.existingAction(e, t); n !== null && (this._deactivateAction(n), this._removeInactiveAction(n)); } });
function Rl(e) { typeof e == "string" && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e; }
Rl.prototype.clone = function () { return new Rl(this.value.clone === void 0 ? this.value : this.value.clone()); };
function Xu(e, t, n) { Nn.call(this, e, t), this.meshPerAttribute = n || 1; }
Xu.prototype = Object.assign(Object.create(Nn.prototype), { constructor: Xu, isInstancedInterleavedBuffer: !0, copy: function (e) { return Nn.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this; } });
function jg(e, t, n, r) { this.ray = new Cr(e, t), this.near = n || 0, this.far = r || 1 / 0, this.camera = null, this.params = { Mesh: {}, Line: {}, LOD: {}, Points: { threshold: 1 }, Sprite: {} }, Object.defineProperties(this.params, { PointCloud: { get: function () { return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points; } } }); }
function Yu(e, t) { return e.distance - t.distance; }
function Cl(e, t, n, r) { if (e.visible !== !1 && (e.raycast(t, n), r === !0))
    for (var i = e.children, a = 0, o = i.length; a < o; a++)
        Cl(i[a], t, n, !0); }
Object.assign(jg.prototype, { linePrecision: 1, set: function (e, t) { this.ray.set(e, t); }, setFromCamera: function (e, t) { t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type."); }, intersectObject: function (e, t, n) { var r = n || []; return Cl(e, this, r, t), r.sort(Yu), r; }, intersectObjects: function (e, t, n) { var r = n || []; if (Array.isArray(e) === !1)
        return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), r; for (var i = 0, a = e.length; i < a; i++)
        Cl(e[i], this, r, t); return r.sort(Yu), r; } });
function qg(e, t, n) { return this.radius = e !== void 0 ? e : 1, this.phi = t !== void 0 ? t : 0, this.theta = n !== void 0 ? n : 0, this; }
Object.assign(qg.prototype, { set: function (e, t, n) { return this.radius = e, this.phi = t, this.theta = n, this; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this; }, makeSafe: function () { var e = 1e-6; return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this; }, setFromVector3: function (e) { return this.setFromCartesianCoords(e.x, e.y, e.z); }, setFromCartesianCoords: function (e, t, n) { return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ae.clamp(t / this.radius, -1, 1))), this; } });
function Xg(e, t, n) { return this.radius = e !== void 0 ? e : 1, this.theta = t !== void 0 ? t : 0, this.y = n !== void 0 ? n : 0, this; }
Object.assign(Xg.prototype, { set: function (e, t, n) { return this.radius = e, this.theta = t, this.y = n, this; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this; }, setFromVector3: function (e) { return this.setFromCartesianCoords(e.x, e.y, e.z); }, setFromCartesianCoords: function (e, t, n) { return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this; } });
var Zu = new U;
function Ju(e, t) { this.min = e !== void 0 ? e : new U(1 / 0, 1 / 0), this.max = t !== void 0 ? t : new U(-1 / 0, -1 / 0); }
Object.assign(Ju.prototype, { set: function (e, t) { return this.min.copy(e), this.max.copy(t), this; }, setFromPoints: function (e) { this.makeEmpty(); for (var t = 0, n = e.length; t < n; t++)
        this.expandByPoint(e[t]); return this; }, setFromCenterAndSize: function (e, t) { var n = Zu.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.min.copy(e.min), this.max.copy(e.max), this; }, makeEmpty: function () { return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this; }, isEmpty: function () { return this.max.x < this.min.x || this.max.y < this.min.y; }, getCenter: function (e) { return e === void 0 && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new U), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5); }, getSize: function (e) { return e === void 0 && (console.warn("THREE.Box2: .getSize() target is now required"), e = new U), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min); }, expandByPoint: function (e) { return this.min.min(e), this.max.max(e), this; }, expandByVector: function (e) { return this.min.sub(e), this.max.add(e), this; }, expandByScalar: function (e) { return this.min.addScalar(-e), this.max.addScalar(e), this; }, containsPoint: function (e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y); }, containsBox: function (e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y; }, getParameter: function (e, t) { return t === void 0 && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new U), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y)); }, intersectsBox: function (e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y); }, clampPoint: function (e, t) { return t === void 0 && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new U), t.copy(e).clamp(this.min, this.max); }, distanceToPoint: function (e) { var t = Zu.copy(e).clamp(this.min, this.max); return t.sub(e).length(); }, intersect: function (e) { return this.min.max(e.min), this.max.min(e.max), this; }, union: function (e) { return this.min.min(e.min), this.max.max(e.max), this; }, translate: function (e) { return this.min.add(e), this.max.add(e), this; }, equals: function (e) { return e.min.equals(this.min) && e.max.equals(this.max); } });
var $u = new M, Ho = new M;
function Qu(e, t) { this.start = e !== void 0 ? e : new M, this.end = t !== void 0 ? t : new M; }
Object.assign(Qu.prototype, { set: function (e, t) { return this.start.copy(e), this.end.copy(t), this; }, clone: function () { return new this.constructor().copy(this); }, copy: function (e) { return this.start.copy(e.start), this.end.copy(e.end), this; }, getCenter: function (e) { return e === void 0 && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new M), e.addVectors(this.start, this.end).multiplyScalar(.5); }, delta: function (e) { return e === void 0 && (console.warn("THREE.Line3: .delta() target is now required"), e = new M), e.subVectors(this.end, this.start); }, distanceSq: function () { return this.start.distanceToSquared(this.end); }, distance: function () { return this.start.distanceTo(this.end); }, at: function (e, t) { return t === void 0 && (console.warn("THREE.Line3: .at() target is now required"), t = new M), this.delta(t).multiplyScalar(e).add(this.start); }, closestPointToPointParameter: function (e, t) { $u.subVectors(e, this.start), Ho.subVectors(this.end, this.start); var n = Ho.dot(Ho), r = Ho.dot($u), i = r / n; return t && (i = Ae.clamp(i, 0, 1)), i; }, closestPointToPoint: function (e, t, n) { var r = this.closestPointToPointParameter(e, t); return n === void 0 && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new M), this.delta(n).multiplyScalar(r).add(this.start); }, applyMatrix4: function (e) { return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this; }, equals: function (e) { return e.start.equals(this.start) && e.end.equals(this.end); } });
function Vo(e) { K.call(this), this.material = e, this.render = function () { }; }
Vo.prototype = Object.create(K.prototype);
Vo.prototype.constructor = Vo;
Vo.prototype.isImmediateRenderObject = !0;
var Ku = new M;
function fa(e, t) { K.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t; for (var n = new te, r = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, a = 1, o = 32; i < o; i++, a++) {
    var s = i / o * Math.PI * 2, l = a / o * Math.PI * 2;
    r.push(Math.cos(s), Math.sin(s), 1, Math.cos(l), Math.sin(l), 1);
} n.setAttribute("position", new $(r, 3)); var c = new tt({ fog: !1 }); this.cone = new nt(n, c), this.add(this.cone), this.update(); }
fa.prototype = Object.create(K.prototype);
fa.prototype.constructor = fa;
fa.prototype.dispose = function () { this.cone.geometry.dispose(), this.cone.material.dispose(); };
fa.prototype.update = function () { this.light.updateMatrixWorld(); var e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle); this.cone.scale.set(t, t, e), Ku.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Ku), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color); };
var Gn = new M, ko = new Re, Pl = new Re;
function eh(e) { var t = []; e && e.isBone && t.push(e); for (var n = 0; n < e.children.length; n++)
    t.push.apply(t, eh(e.children[n])); return t; }
function da(e) { for (var t = eh(e), n = new te, r = [], i = [], a = new ee(0, 0, 1), o = new ee(0, 1, 0), s = 0; s < t.length; s++) {
    var l = t[s];
    l.parent && l.parent.isBone && (r.push(0, 0, 0), r.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(o.r, o.g, o.b));
} n.setAttribute("position", new $(r, 3)), n.setAttribute("color", new $(i, 3)); var c = new tt({ vertexColors: yi, depthTest: !1, depthWrite: !1, transparent: !0 }); nt.call(this, n, c), this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1; }
da.prototype = Object.create(nt.prototype);
da.prototype.constructor = da;
da.prototype.updateMatrixWorld = function (e) { var t = this.bones, n = this.geometry, r = n.getAttribute("position"); Pl.getInverse(this.root.matrixWorld); for (var i = 0, a = 0; i < t.length; i++) {
    var o = t[i];
    o.parent && o.parent.isBone && (ko.multiplyMatrices(Pl, o.matrixWorld), Gn.setFromMatrixPosition(ko), r.setXYZ(a, Gn.x, Gn.y, Gn.z), ko.multiplyMatrices(Pl, o.parent.matrixWorld), Gn.setFromMatrixPosition(ko), r.setXYZ(a + 1, Gn.x, Gn.y, Gn.z), a += 2);
} n.getAttribute("position").needsUpdate = !0, K.prototype.updateMatrixWorld.call(this, e); };
function pa(e, t, n) { this.light = e, this.light.updateMatrixWorld(), this.color = n; var r = new ei(t, 4, 2), i = new Xt({ wireframe: !0, fog: !1 }); et.call(this, r, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update(); }
pa.prototype = Object.create(et.prototype);
pa.prototype.constructor = pa;
pa.prototype.dispose = function () { this.geometry.dispose(), this.material.dispose(); };
pa.prototype.update = function () { this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color); };
var Yg = new M, th = new ee, nh = new ee;
function va(e, t, n) { K.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n; var r = new Jr(t); r.rotateY(Math.PI * .5), this.material = new Xt({ wireframe: !0, fog: !1 }), this.color === void 0 && (this.material.vertexColors = yi); var i = r.getAttribute("position"), a = new Float32Array(i.count * 3); r.setAttribute("color", new _e(a, 3)), this.add(new et(r, this.material)), this.update(); }
va.prototype = Object.create(K.prototype);
va.prototype.constructor = va;
va.prototype.dispose = function () { this.children[0].geometry.dispose(), this.children[0].material.dispose(); };
va.prototype.update = function () { var e = this.children[0]; if (this.color !== void 0)
    this.material.color.set(this.color);
else {
    var t = e.geometry.getAttribute("color");
    th.copy(this.light.color), nh.copy(this.light.groundColor);
    for (var n = 0, r = t.count; n < r; n++) {
        var i = n < r / 2 ? th : nh;
        t.setXYZ(n, i.r, i.g, i.b);
    }
    t.needsUpdate = !0;
} e.lookAt(Yg.setFromMatrixPosition(this.light.matrixWorld).negate()); };
function Dl(e, t, n, r) { e = e || 10, t = t || 10, n = new ee(n !== void 0 ? n : 4473924), r = new ee(r !== void 0 ? r : 8947848); for (var i = t / 2, a = e / t, o = e / 2, s = [], l = [], c = 0, u = 0, h = -o; c <= t; c++, h += a) {
    s.push(-o, 0, h, o, 0, h), s.push(h, 0, -o, h, 0, o);
    var f = c === i ? n : r;
    f.toArray(l, u), u += 3, f.toArray(l, u), u += 3, f.toArray(l, u), u += 3, f.toArray(l, u), u += 3;
} var d = new te; d.setAttribute("position", new $(s, 3)), d.setAttribute("color", new $(l, 3)); var p = new tt({ vertexColors: yi }); nt.call(this, d, p); }
Dl.prototype = Object.assign(Object.create(nt.prototype), { constructor: Dl, copy: function (e) { return nt.prototype.copy.call(this, e), this.geometry.copy(e.geometry), this.material.copy(e.material), this; }, clone: function () { return new this.constructor().copy(this); } });
function Il(e, t, n, r, i, a) { e = e || 10, t = t || 16, n = n || 8, r = r || 64, i = new ee(i !== void 0 ? i : 4473924), a = new ee(a !== void 0 ? a : 8947848); var o = [], s = [], l, c, u, h, f, d, p; for (h = 0; h <= t; h++)
    u = h / t * (Math.PI * 2), l = Math.sin(u) * e, c = Math.cos(u) * e, o.push(0, 0, 0), o.push(l, 0, c), p = h & 1 ? i : a, s.push(p.r, p.g, p.b), s.push(p.r, p.g, p.b); for (h = 0; h <= n; h++)
    for (p = h & 1 ? i : a, d = e - e / n * h, f = 0; f < r; f++)
        u = f / r * (Math.PI * 2), l = Math.sin(u) * d, c = Math.cos(u) * d, o.push(l, 0, c), s.push(p.r, p.g, p.b), u = (f + 1) / r * (Math.PI * 2), l = Math.sin(u) * d, c = Math.cos(u) * d, o.push(l, 0, c), s.push(p.r, p.g, p.b); var g = new te; g.setAttribute("position", new $(o, 3)), g.setAttribute("color", new $(s, 3)); var v = new tt({ vertexColors: yi }); nt.call(this, g, v); }
Il.prototype = Object.create(nt.prototype);
Il.prototype.constructor = Il;
var rh = new M, Wo = new M, ih = new M;
function ma(e, t, n) { K.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, t === void 0 && (t = 1); var r = new te; r.setAttribute("position", new $([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3)); var i = new tt({ fog: !1 }); this.lightPlane = new zt(r, i), this.add(this.lightPlane), r = new te, r.setAttribute("position", new $([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new zt(r, i), this.add(this.targetLine), this.update(); }
ma.prototype = Object.create(K.prototype);
ma.prototype.constructor = ma;
ma.prototype.dispose = function () { this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose(); };
ma.prototype.update = function () { rh.setFromMatrixPosition(this.light.matrixWorld), Wo.setFromMatrixPosition(this.light.target.matrixWorld), ih.subVectors(Wo, rh), this.lightPlane.lookAt(Wo), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Wo), this.targetLine.scale.z = ih.length(); };
var jo = new M, rt = new xn;
function qo(e) { var t = new te, n = new tt({ color: 16777215, vertexColors: Bh }), r = [], i = [], a = {}, o = new ee(16755200), s = new ee(16711680), l = new ee(43775), c = new ee(16777215), u = new ee(3355443); h("n1", "n2", o), h("n2", "n4", o), h("n4", "n3", o), h("n3", "n1", o), h("f1", "f2", o), h("f2", "f4", o), h("f4", "f3", o), h("f3", "f1", o), h("n1", "f1", o), h("n2", "f2", o), h("n3", "f3", o), h("n4", "f4", o), h("p", "n1", s), h("p", "n2", s), h("p", "n3", s), h("p", "n4", s), h("u1", "u2", l), h("u2", "u3", l), h("u3", "u1", l), h("c", "t", c), h("p", "c", u), h("cn1", "cn2", u), h("cn3", "cn4", u), h("cf1", "cf2", u), h("cf3", "cf4", u); function h(d, p, g) { f(d, g), f(p, g); } function f(d, p) { r.push(0, 0, 0), i.push(p.r, p.g, p.b), a[d] === void 0 && (a[d] = []), a[d].push(r.length / 3 - 1); } t.setAttribute("position", new $(r, 3)), t.setAttribute("color", new $(i, 3)), nt.call(this, t, n), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update(); }
qo.prototype = Object.create(nt.prototype);
qo.prototype.constructor = qo;
qo.prototype.update = function () { var e = this.geometry, t = this.pointMap, n = 1, r = 1; rt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), ot("c", t, e, rt, 0, 0, -1), ot("t", t, e, rt, 0, 0, 1), ot("n1", t, e, rt, -n, -r, -1), ot("n2", t, e, rt, n, -r, -1), ot("n3", t, e, rt, -n, r, -1), ot("n4", t, e, rt, n, r, -1), ot("f1", t, e, rt, -n, -r, 1), ot("f2", t, e, rt, n, -r, 1), ot("f3", t, e, rt, -n, r, 1), ot("f4", t, e, rt, n, r, 1), ot("u1", t, e, rt, n * .7, r * 1.1, -1), ot("u2", t, e, rt, -n * .7, r * 1.1, -1), ot("u3", t, e, rt, 0, r * 2, -1), ot("cf1", t, e, rt, -n, 0, 1), ot("cf2", t, e, rt, n, 0, 1), ot("cf3", t, e, rt, 0, -r, 1), ot("cf4", t, e, rt, 0, r, 1), ot("cn1", t, e, rt, -n, 0, -1), ot("cn2", t, e, rt, n, 0, -1), ot("cn3", t, e, rt, 0, -r, -1), ot("cn4", t, e, rt, 0, r, -1), e.getAttribute("position").needsUpdate = !0; };
function ot(e, t, n, r, i, a, o) { jo.set(i, a, o).unproject(r); var s = t[e]; if (s !== void 0)
    for (var l = n.getAttribute("position"), c = 0, u = s.length; c < u; c++)
        l.setXYZ(s[c], jo.x, jo.y, jo.z); }
var Xo = new Kt;
function Hn(e, t) { this.object = e, t === void 0 && (t = 16776960); var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), r = new Float32Array(8 * 3), i = new te; i.setIndex(new _e(n, 1)), i.setAttribute("position", new _e(r, 3)), nt.call(this, i, new tt({ color: t })), this.matrixAutoUpdate = !1, this.update(); }
Hn.prototype = Object.create(nt.prototype);
Hn.prototype.constructor = Hn;
Hn.prototype.update = function (e) { if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && Xo.setFromObject(this.object), !Xo.isEmpty()) {
    var t = Xo.min, n = Xo.max, r = this.geometry.attributes.position, i = r.array;
    i[0] = n.x, i[1] = n.y, i[2] = n.z, i[3] = t.x, i[4] = n.y, i[5] = n.z, i[6] = t.x, i[7] = t.y, i[8] = n.z, i[9] = n.x, i[10] = t.y, i[11] = n.z, i[12] = n.x, i[13] = n.y, i[14] = t.z, i[15] = t.x, i[16] = n.y, i[17] = t.z, i[18] = t.x, i[19] = t.y, i[20] = t.z, i[21] = n.x, i[22] = t.y, i[23] = t.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere();
} };
Hn.prototype.setFromObject = function (e) { return this.object = e, this.update(), this; };
Hn.prototype.copy = function (e) { return nt.prototype.copy.call(this, e), this.object = e.object, this; };
Hn.prototype.clone = function () { return new this.constructor().copy(this); };
function Yo(e, t) { this.type = "Box3Helper", this.box = e, t = t || 16776960; var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), r = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], i = new te; i.setIndex(new _e(n, 1)), i.setAttribute("position", new $(r, 3)), nt.call(this, i, new tt({ color: t })), this.geometry.computeBoundingSphere(); }
Yo.prototype = Object.create(nt.prototype);
Yo.prototype.constructor = Yo;
Yo.prototype.updateMatrixWorld = function (e) { var t = this.box; t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), K.prototype.updateMatrixWorld.call(this, e)); };
function Zo(e, t, n) { this.type = "PlaneHelper", this.plane = e, this.size = t === void 0 ? 1 : t; var r = n !== void 0 ? n : 16776960, i = [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], a = new te; a.setAttribute("position", new $(i, 3)), a.computeBoundingSphere(), zt.call(this, a, new tt({ color: r })); var o = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], s = new te; s.setAttribute("position", new $(o, 3)), s.computeBoundingSphere(), this.add(new et(s, new Xt({ color: r, opacity: .2, transparent: !0, depthWrite: !1 }))); }
Zo.prototype = Object.create(zt.prototype);
Zo.prototype.constructor = Zo;
Zo.prototype.updateMatrixWorld = function (e) { var t = -this.plane.constant; Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, t), this.children[0].material.side = t < 0 ? ht : gi, this.lookAt(this.plane.normal), K.prototype.updateMatrixWorld.call(this, e); };
var ah = new M, Jo, Ol;
function Vn(e, t, n, r, i, a) { K.call(this), e === void 0 && (e = new M(0, 0, 1)), t === void 0 && (t = new M(0, 0, 0)), n === void 0 && (n = 1), r === void 0 && (r = 16776960), i === void 0 && (i = .2 * n), a === void 0 && (a = .2 * i), Jo === void 0 && (Jo = new te, Jo.setAttribute("position", new $([0, 0, 0, 0, 1, 0], 3)), Ol = new Bn(0, .5, 1, 5, 1), Ol.translate(0, -.5, 0)), this.position.copy(t), this.line = new zt(Jo, new tt({ color: r })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new et(Ol, new Xt({ color: r })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, i, a); }
Vn.prototype = Object.create(K.prototype);
Vn.prototype.constructor = Vn;
Vn.prototype.setDirection = function (e) { if (e.y > .99999)
    this.quaternion.set(0, 0, 0, 1);
else if (e.y < -.99999)
    this.quaternion.set(1, 0, 0, 0);
else {
    ah.set(e.z, 0, -e.x).normalize();
    var t = Math.acos(e.y);
    this.quaternion.setFromAxisAngle(ah, t);
} };
Vn.prototype.setLength = function (e, t, n) { t === void 0 && (t = .2 * e), n === void 0 && (n = .2 * t), this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix(); };
Vn.prototype.setColor = function (e) { this.line.material.color.set(e), this.cone.material.color.set(e); };
Vn.prototype.copy = function (e) { return K.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this; };
Vn.prototype.clone = function () { return new this.constructor().copy(this); };
function $o(e) { e = e || 1; var t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e], n = [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], r = new te; r.setAttribute("position", new $(t, 3)), r.setAttribute("color", new $(n, 3)); var i = new tt({ vertexColors: yi }); nt.call(this, r, i); }
$o.prototype = Object.create(nt.prototype);
$o.prototype.constructor = $o;
var fi = 4, kn = 8, hn = Math.pow(2, kn), oh = [.125, .215, .35, .446, .526, .582], sh = kn - fi + 1 + oh.length, di = 20, fn = { [Ct]: 0, [ps]: 1, [vs]: 2, [hc]: 3, [fc]: 4, [dc]: 5, [uc]: 6 }, Nl = new ua, Qo = Qg(di), Wn = null, jn = null, { _lodPlanes: ga, _sizeLods: lh, _sigmas: Ko } = Zg(), es = null, Ue = null, pr = (1 + Math.sqrt(5)) / 2, pi = 1 / pr, ch = [new M(1, 1, 1), new M(-1, 1, 1), new M(1, 1, -1), new M(-1, 1, -1), new M(0, pr, pi), new M(0, pr, -pi), new M(pi, 0, pr), new M(-pi, 0, pr), new M(pr, pi, 0), new M(-pr, pi, 0)];
function uh(e) { Ue = e, Fl(Qo); }
uh.prototype = { constructor: uh, fromScene: function (e, t = 0, n = .1, r = 100) { var i = hh(); return Jg(e, n, r, i), t > 0 && vh(i, 0, 0, t), ph(i), fh(), i.scissorTest = !1, i; }, fromEquirectangular: function (e) { return e.magFilter = st, e.minFilter = st, e.generateMipmaps = !1, this.fromCubemap(e); }, fromCubemap: function (e) { var t = hh(e); return $g(e, t), ph(t), fh(), t.scissorTest = !1, t; }, compileCubemapShader: function () { jn == null && (jn = yh(), Fl(jn)); }, compileEquirectangularShader: function () { Wn == null && (Wn = gh(), Fl(Wn)); }, dispose: function () { Qo.dispose(), jn != null && jn.dispose(), Wn != null && Wn.dispose(); for (var e = 0; e < ga.length; e++)
        ga[e].dispose(); } };
function Zg() { for (var e = [], t = [], n = [], r = kn, i = 0; i < sh; i++) {
    var a = Math.pow(2, r);
    t.push(a);
    var o = 1 / a;
    i > kn - fi ? o = oh[i - kn + fi - 1] : i == 0 && (o = 0), n.push(o);
    for (var s = 1 / (a - 1), l = -s / 2, c = 1 + s / 2, u = [l, l, c, l, c, c, l, l, c, c, l, c], h = 6, f = 6, d = 3, p = 2, g = 1, v = new Float32Array(d * f * h), y = new Float32Array(p * f * h), x = new Float32Array(g * f * h), w = 0; w < h; w++) {
        var E = w % 3 * 2 / 3 - 1, b = w > 2 ? 0 : -1, L = [E, b, 0, E + 2 / 3, b, 0, E + 2 / 3, b + 1, 0, E, b, 0, E + 2 / 3, b + 1, 0, E, b + 1, 0];
        v.set(L, d * f * w), y.set(u, p * f * w);
        var S = [w, w, w, w, w, w];
        x.set(S, g * f * w);
    }
    var T = new te;
    T.setAttribute("position", new _e(v, d)), T.setAttribute("uv", new _e(y, p)), T.setAttribute("faceIndex", new _e(x, g)), e.push(T), r > fi && r--;
} return { _lodPlanes: e, _sizeLods: t, _sigmas: n }; }
function hh(e) { var t = { magFilter: st, minFilter: st, generateMipmaps: !1, type: e ? e.type : Aa, format: e ? e.format : xf, encoding: e ? e.encoding : vs, depthBuffer: !1, stencilBuffer: !1 }, n = dh(t); return n.depthBuffer = !e, es = dh(t), n; }
function fh() { es.dispose(), Ue.setRenderTarget(null); var e = Ue.getSize(new U); Ue.setViewport(0, 0, e.x, e.y); }
function Jg(e, t, n, r) { var i = 90, a = 1, o = new ct(i, a, t, n), s = [1, 1, 1, 1, -1, 1], l = [1, 1, -1, -1, -1, 1], c = Ue.outputEncoding, u = Ue.toneMapping, h = Ue.toneMappingExposure, f = Ue.getClearColor(), d = Ue.getClearAlpha(); Ue.toneMapping = is, Ue.toneMappingExposure = 1, Ue.outputEncoding = Ct, e.scale.z *= -1; var p = e.background; if (p && p.isColor) {
    p.convertSRGBToLinear();
    var g = Math.max(p.r, p.g, p.b), v = Math.min(Math.max(Math.ceil(Math.log2(g)), -128), 127);
    p = p.multiplyScalar(Math.pow(2, -v));
    var y = (v + 128) / 255;
    Ue.setClearColor(p, y), e.background = null;
} Ue.setRenderTarget(r); for (var x = 0; x < 6; x++) {
    var w = x % 3;
    w == 0 ? (o.up.set(0, s[x], 0), o.lookAt(l[x], 0, 0)) : w == 1 ? (o.up.set(0, 0, s[x]), o.lookAt(0, l[x], 0)) : (o.up.set(0, s[x], 0), o.lookAt(0, 0, l[x])), Bl(w * hn, x > 2 ? hn : 0, hn, hn), Ue.render(e, o);
} Ue.toneMapping = u, Ue.toneMappingExposure = h, Ue.outputEncoding = c, Ue.setClearColor(f, d), e.scale.z *= -1; }
function $g(e, t) { var n = new Ln; e.isCubeTexture ? jn == null && (jn = yh()) : Wn == null && (Wn = gh()); var r = e.isCubeTexture ? jn : Wn; n.add(new et(ga[0], r)); var i = r.uniforms; i.envMap.value = e, e.isCubeTexture || i.texelSize.value.set(1 / e.image.width, 1 / e.image.height), i.inputEncoding.value = fn[e.encoding], i.outputEncoding.value = fn[e.encoding], Ue.setRenderTarget(t), Bl(0, 0, 3 * hn, 2 * hn), Ue.render(n, Nl); }
function Fl(e) { var t = new Ln; t.add(new et(ga[0], e)), Ue.compile(t, Nl); }
function dh(e) { var t = new wt(3 * hn, 3 * hn, e); return t.texture.mapping = _i, t.texture.name = "PMREM.cubeUv", t.scissorTest = !0, t; }
function Bl(e, t, n, r) { var i = 1 / Ue.getPixelRatio(); e *= i, t *= i, n *= i, r *= i, Ue.setViewport(e, t, n, r), Ue.setScissor(e, t, n, r); }
function ph(e) { var t = Ue.autoClear; Ue.autoClear = !1; for (var n = 1; n < sh; n++) {
    var r = Math.sqrt(Ko[n] * Ko[n] - Ko[n - 1] * Ko[n - 1]), i = ch[(n - 1) % ch.length];
    vh(e, n - 1, n, r, i);
} Ue.autoClear = t; }
function vh(e, t, n, r, i) { mh(e, es, t, n, r, "latitudinal", i), mh(es, e, n, n, r, "longitudinal", i); }
function mh(e, t, n, r, i, a, o) { a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); var s = 3, l = new Ln; l.add(new et(ga[r], Qo)); var c = Qo.uniforms, u = lh[n] - 1, h = isFinite(i) ? Math.PI / (2 * u) : 2 * Math.PI / (2 * di - 1), f = i / h, d = isFinite(i) ? 1 + Math.floor(s * f) : di; d > di && console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${di}`); for (var p = [], g = 0, v = 0; v < di; ++v) {
    var w = v / f, y = Math.exp(-w * w / 2);
    p.push(y), v == 0 ? g += y : v < d && (g += 2 * y);
} for (var v = 0; v < p.length; v++)
    p[v] = p[v] / g; c.envMap.value = e.texture, c.samples.value = d, c.weights.value = p, c.latitudinal.value = a === "latitudinal", o && (c.poleAxis.value = o), c.dTheta.value = h, c.mipInt.value = kn - n, c.inputEncoding.value = fn[e.texture.encoding], c.outputEncoding.value = fn[e.texture.encoding]; var x = lh[r], w = 3 * Math.max(0, hn - 2 * x), E = (r === 0 ? 0 : 2 * hn) + 2 * x * (r > kn - fi ? r - kn + fi : 0); Ue.setRenderTarget(t), Bl(w, E, 3 * x, 2 * x), Ue.render(l, Nl); }
function Qg(e) {
    var t = new Float32Array(e), n = new M(0, 1, 0), r = new Un({ defines: { n: e }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: t }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: n }, inputEncoding: { value: fn[Ct] }, outputEncoding: { value: fn[Ct] } }, vertexShader: Ul(), fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform int samples;
uniform float weights[n];
uniform bool latitudinal;
uniform float dTheta;
uniform float mipInt;
uniform vec3 poleAxis;

${zl()}

#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>

void main() {
	gl_FragColor = vec4(0.0);
	for (int i = 0; i < n; i++) {
		if (i >= samples)
			break;
		for (int dir = -1; dir < 2; dir += 2) {
			if (i == 0 && dir == 1)
				continue;
			vec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);
			if (all(equal(axis, vec3(0.0))))
				axis = cross(vec3(0.0, 1.0, 0.0), vOutputDirection);
			axis = normalize(axis);
			float theta = dTheta * float(dir * i);
			float cosTheta = cos(theta);
			// Rodrigues' axis-angle rotation
			vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross(axis, vOutputDirection) * sin(theta)
					+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);
			gl_FragColor.rgb +=
					weights[i] * bilinearCubeUV(envMap, sampleDirection, mipInt);
		}
	}
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`, blending: Tn, depthTest: !1, depthWrite: !1 });
    return r.type = "SphericalGaussianBlur", r;
}
function gh() {
    var e = new U(1, 1), t = new Un({ uniforms: { envMap: { value: null }, texelSize: { value: e }, inputEncoding: { value: fn[Ct] }, outputEncoding: { value: fn[Ct] } }, vertexShader: Ul(), fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform vec2 texelSize;

${zl()}

#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494

void main() {
	gl_FragColor = vec4(0.0);
	vec3 outputDirection = normalize(vOutputDirection);
	vec2 uv;
	uv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;
	uv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;
	vec2 f = fract(uv / texelSize - 0.5);
	uv -= f * texelSize;
	vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x += texelSize.x;
	vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.y += texelSize.y;
	vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x -= texelSize.x;
	vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	vec3 tm = mix(tl, tr, f.x);
	vec3 bm = mix(bl, br, f.x);
	gl_FragColor.rgb = mix(tm, bm, f.y);
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`, blending: Tn, depthTest: !1, depthWrite: !1 });
    return t.type = "EquirectangularToCubeUV", t;
}
function yh() {
    var e = new Un({ uniforms: { envMap: { value: null }, inputEncoding: { value: fn[Ct] }, outputEncoding: { value: fn[Ct] } }, vertexShader: Ul(), fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform samplerCube envMap;

${zl()}

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`, blending: Tn, depthTest: !1, depthWrite: !1 });
    return e.type = "CubemapToCubeUV", e;
}
function Ul() {
    return `
precision mediump float;
precision mediump int;
attribute vec3 position;
attribute vec2 uv;
attribute float faceIndex;
varying vec3 vOutputDirection;
vec3 getDirection(vec2 uv, float face) {
	uv = 2.0 * uv - 1.0;
	vec3 direction = vec3(uv, 1.0);
	if (face == 0.0) {
		direction = direction.zyx;
		direction.z *= -1.0;
	} else if (face == 1.0) {
		direction = direction.xzy;
		direction.z *= -1.0;
	} else if (face == 3.0) {
		direction = direction.zyx;
		direction.x *= -1.0;
	} else if (face == 4.0) {
		direction = direction.xzy;
		direction.y *= -1.0;
	} else if (face == 5.0) {
		direction.xz *= -1.0;
	}
	return direction;
}
void main() {
	vOutputDirection = getDirection(uv, faceIndex);
	gl_Position = vec4( position, 1.0 );
}
	`;
}
function zl() {
    return `
uniform int inputEncoding;
uniform int outputEncoding;

#include <encodings_pars_fragment>

vec4 inputTexelToLinear(vec4 value){
	if(inputEncoding == 0){
		return value;
	}else if(inputEncoding == 1){
		return sRGBToLinear(value);
	}else if(inputEncoding == 2){
		return RGBEToLinear(value);
	}else if(inputEncoding == 3){
		return RGBMToLinear(value, 7.0);
	}else if(inputEncoding == 4){
		return RGBMToLinear(value, 16.0);
	}else if(inputEncoding == 5){
		return RGBDToLinear(value, 256.0);
	}else{
		return GammaToLinear(value, 2.2);
	}
}

vec4 linearToOutputTexel(vec4 value){
	if(outputEncoding == 0){
		return value;
	}else if(outputEncoding == 1){
		return LinearTosRGB(value);
	}else if(outputEncoding == 2){
		return LinearToRGBE(value);
	}else if(outputEncoding == 3){
		return LinearToRGBM(value, 7.0);
	}else if(outputEncoding == 4){
		return LinearToRGBM(value, 16.0);
	}else if(outputEncoding == 5){
		return LinearToRGBD(value, 256.0);
	}else{
		return LinearToGamma(value, 2.2);
	}
}

vec4 envMapTexelToLinear(vec4 color) {
	return inputTexelToLinear(color);
}
	`;
}
function Fy(e, t, n, r, i, a, o) { return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new Ai(e, t, n, i, a, o); }
var By = 0, Uy = 1;
function zy(e) { return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), e; }
function Gy(e) { return e === void 0 && (e = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), e.isMultiMaterial = !0, e.materials = e, e.clone = function () { return e.slice(); }, e; }
function Hy(e, t) { return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new Gi(e, t); }
function Vy(e) { return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new so(e); }
function ky(e, t) { return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new Gi(e, t); }
function Wy(e) { return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new rn(e); }
function jy(e) { return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new rn(e); }
function qy(e) { return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new rn(e); }
function Xy(e, t, n) { return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new M(e, t, n); }
function Yy(e, t) { return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new _e(e, t).setDynamic(!0); }
function Zy(e, t) { return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new Va(e, t); }
function Jy(e, t) { return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new ka(e, t); }
function $y(e, t) { return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new Wa(e, t); }
function Qy(e, t) { return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new ja(e, t); }
function Ky(e, t) { return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new Ir(e, t); }
function e0(e, t) { return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new qa(e, t); }
function t0(e, t) { return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new Or(e, t); }
function n0(e, t) { return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new $(e, t); }
function r0(e, t) { return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new Xa(e, t); }
fe.create = function (e, t) { return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(fe.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e; };
Object.assign(zn.prototype, { createPointsGeometry: function (e) { console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."); var t = this.getPoints(e); return this.createGeometry(t); }, createSpacedPointsGeometry: function (e) { console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."); var t = this.getSpacedPoints(e); return this.createGeometry(t); }, createGeometry: function (e) { console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."); for (var t = new we, n = 0, r = e.length; n < r; n++) {
        var i = e[n];
        t.vertices.push(new M(i.x, i.y, i.z || 0));
    } return t; } });
Object.assign(cn.prototype, { fromPoints: function (e) { return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e); } });
function Kg(e) { console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Mt.call(this, e), this.type = "catmullrom", this.closed = !0; }
Kg.prototype = Object.create(Mt.prototype);
function ey(e) { console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Mt.call(this, e), this.type = "catmullrom"; }
ey.prototype = Object.create(Mt.prototype);
function xh(e) { console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Mt.call(this, e), this.type = "catmullrom"; }
xh.prototype = Object.create(Mt.prototype);
Object.assign(xh.prototype, { initFromArray: function () { console.error("THREE.Spline: .initFromArray() has been removed."); }, getControlPointsArray: function () { console.error("THREE.Spline: .getControlPointsArray() has been removed."); }, reparametrizeByArcLength: function () { console.error("THREE.Spline: .reparametrizeByArcLength() has been removed."); } });
function i0(e) { return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."), new $o(e); }
function a0(e, t) { return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new Hn(e, t); }
function o0(e, t) { return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new nt(new na(e.geometry), new tt({ color: t !== void 0 ? t : 16777215 })); }
Dl.prototype.setColors = function () { console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."); };
da.prototype.update = function () { console.error("THREE.SkeletonHelper: update() no longer needs to be called."); };
function s0(e, t) { return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new nt(new Vi(e.geometry), new tt({ color: t !== void 0 ? t : 16777215 })); }
Object.assign(ke.prototype, { extractUrlBase: function (e) { return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Su.extractUrlBase(e); } });
ke.Handlers = { add: function () { console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."); }, get: function () { console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."); } };
function l0(e) { return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new Jt(e); }
function c0(e) { return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new nl(e); }
Object.assign(El.prototype, { setTexturePath: function (e) { return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e); } });
Object.assign(Ju.prototype, { center: function (e) { return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e); }, empty: function () { return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty(); }, isIntersectionBox: function (e) { return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e); }, size: function (e) { return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e); } });
Object.assign(Kt.prototype, { center: function (e) { return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e); }, empty: function () { return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty(); }, isIntersectionBox: function (e) { return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e); }, isIntersectionSphere: function (e) { return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e); }, size: function (e) { return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e); } });
Qu.prototype.center = function (e) { return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e); };
Object.assign(Ae, { random16: function () { return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random(); }, nearestPowerOfTwo: function (e) { return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Ae.floorPowerOfTwo(e); }, nextPowerOfTwo: function (e) { return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Ae.ceilPowerOfTwo(e); } });
Object.assign(mt.prototype, { flattenToArrayOffset: function (e, t) { return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t); }, multiplyVector3: function (e) { return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this); }, multiplyVector3Array: function () { console.error("THREE.Matrix3: .multiplyVector3Array() has been removed."); }, applyToBuffer: function (e) { return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e); }, applyToVector3Array: function () { console.error("THREE.Matrix3: .applyToVector3Array() has been removed."); } });
Object.assign(Re.prototype, { extractPosition: function (e) { return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e); }, flattenToArrayOffset: function (e, t) { return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t); }, getPosition: function () { return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new M().setFromMatrixColumn(this, 3); }, setRotationFromQuaternion: function (e) { return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e); }, multiplyToArray: function () { console.warn("THREE.Matrix4: .multiplyToArray() has been removed."); }, multiplyVector3: function (e) { return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this); }, multiplyVector4: function (e) { return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this); }, multiplyVector3Array: function () { console.error("THREE.Matrix4: .multiplyVector3Array() has been removed."); }, rotateAxis: function (e) { console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this); }, crossVector: function (e) { return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this); }, translate: function () { console.error("THREE.Matrix4: .translate() has been removed."); }, rotateX: function () { console.error("THREE.Matrix4: .rotateX() has been removed."); }, rotateY: function () { console.error("THREE.Matrix4: .rotateY() has been removed."); }, rotateZ: function () { console.error("THREE.Matrix4: .rotateZ() has been removed."); }, rotateByAxis: function () { console.error("THREE.Matrix4: .rotateByAxis() has been removed."); }, applyToBuffer: function (e) { return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e); }, applyToVector3Array: function () { console.error("THREE.Matrix4: .applyToVector3Array() has been removed."); }, makeFrustum: function (e, t, n, r, i, a) { return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, r, n, i, a); } });
en.prototype.isIntersectionLine = function (e) { return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e); };
Tt.prototype.multiplyVector3 = function (e) { return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this); };
Object.assign(Cr.prototype, { isIntersectionBox: function (e) { return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e); }, isIntersectionPlane: function (e) { return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e); }, isIntersectionSphere: function (e) { return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e); } });
Object.assign(pt.prototype, { area: function () { return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea(); }, barycoordFromPoint: function (e, t) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t); }, midpoint: function (e) { return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e); }, normal: function (e) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e); }, plane: function (e) { return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e); } });
Object.assign(pt, { barycoordFromPoint: function (e, t, n, r, i) { return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), pt.getBarycoord(e, t, n, r, i); }, normal: function (e, t, n, r) { return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), pt.getNormal(e, t, n, r); } });
Object.assign(cr.prototype, { extractAllPoints: function (e) { return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e); }, extrude: function (e) { return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Kr(this, e); }, makeGeometry: function (e) { return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new ti(this, e); } });
Object.assign(U.prototype, { fromAttribute: function (e, t, n) { return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n); }, distanceToManhattan: function (e) { return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e); }, lengthManhattan: function () { return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength(); } });
Object.assign(M.prototype, { setEulerFromRotationMatrix: function () { console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."); }, setEulerFromQuaternion: function () { console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."); }, getPositionFromMatrix: function (e) { return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e); }, getScaleFromMatrix: function (e) { return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e); }, getColumnFromMatrix: function (e, t) { return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e); }, applyProjection: function (e) { return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e); }, fromAttribute: function (e, t, n) { return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n); }, distanceToManhattan: function (e) { return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e); }, lengthManhattan: function () { return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength(); } });
Object.assign(Ze.prototype, { fromAttribute: function (e, t, n) { return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n); }, lengthManhattan: function () { return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength(); } });
Object.assign(we.prototype, { computeTangents: function () { console.error("THREE.Geometry: .computeTangents() has been removed."); }, computeLineDistances: function () { console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead."); } });
Object.assign(K.prototype, { getChildByName: function (e) { return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e); }, renderDepth: function () { console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."); }, translate: function (e, t) { return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e); }, getWorldRotation: function () { console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."); } });
Object.defineProperties(K.prototype, { eulerOrder: { get: function () { return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order; }, set: function (e) { console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e; } }, useQuaternion: { get: function () { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."); }, set: function () { console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."); } } });
Object.assign(et.prototype, { setDrawMode: function () { console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."); } });
Object.defineProperties(et.prototype, { drawMode: { get: function () { return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), Wf; }, set: function () { console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."); } } });
Object.defineProperties(uo.prototype, { objects: { get: function () { return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels; } } });
Object.defineProperty(ks.prototype, "useVertexTexture", { get: function () { console.warn("THREE.Skeleton: useVertexTexture has been removed."); }, set: function () { console.warn("THREE.Skeleton: useVertexTexture has been removed."); } });
ho.prototype.initBones = function () { console.error("THREE.SkinnedMesh: initBones() has been removed."); };
Object.defineProperty(fe.prototype, "__arcLengthDivisions", { get: function () { return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions; }, set: function (e) { console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e; } });
ct.prototype.setLens = function (e, t) { console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), t !== void 0 && (this.filmGauge = t), this.setFocalLength(e); };
Object.defineProperties($e.prototype, { onlyShadow: { set: function () { console.warn("THREE.Light: .onlyShadow has been removed."); } }, shadowCameraFov: { set: function (e) { console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e; } }, shadowCameraLeft: { set: function (e) { console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e; } }, shadowCameraRight: { set: function (e) { console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e; } }, shadowCameraTop: { set: function (e) { console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e; } }, shadowCameraBottom: { set: function (e) { console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e; } }, shadowCameraNear: { set: function (e) { console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e; } }, shadowCameraFar: { set: function (e) { console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e; } }, shadowCameraVisible: { set: function () { console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."); } }, shadowBias: { set: function (e) { console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e; } }, shadowDarkness: { set: function () { console.warn("THREE.Light: .shadowDarkness has been removed."); } }, shadowMapWidth: { set: function (e) { console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e; } }, shadowMapHeight: { set: function (e) { console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e; } } });
Object.defineProperties(_e.prototype, { length: { get: function () { return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length; } }, dynamic: { get: function () { return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === Mi; }, set: function () { console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(Mi); } } });
Object.assign(_e.prototype, { setDynamic: function (e) { return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Mi : Ia), this; }, copyIndicesArray: function () { console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed."); }, setArray: function () { console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"); } });
Object.assign(te.prototype, { addIndex: function (e) { console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e); }, addAttribute: function (e, t) { return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new _e(arguments[1], arguments[2]))) : e === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t); }, addDrawCall: function (e, t, n) { n !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t); }, clearDrawCalls: function () { console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups(); }, computeTangents: function () { console.warn("THREE.BufferGeometry: .computeTangents() has been removed."); }, computeOffsets: function () { console.warn("THREE.BufferGeometry: .computeOffsets() has been removed."); }, removeAttribute: function (e) { return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e); } });
Object.defineProperties(te.prototype, { drawcalls: { get: function () { return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups; } }, offsets: { get: function () { return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups; } } });
Object.defineProperties(Nn.prototype, { dynamic: { get: function () { return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === Mi; }, set: function (e) { console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(e); } } });
Object.assign(Nn.prototype, { setDynamic: function (e) { return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Mi : Ia), this; }, setArray: function () { console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"); } });
Object.assign(wn.prototype, { getArrays: function () { console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed."); }, addShapeList: function () { console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed."); }, addShape: function () { console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed."); } });
Object.defineProperties(Rl.prototype, { dynamic: { set: function () { console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead."); } }, onUpdate: { value: function () { return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this; } } });
Object.defineProperties(xe.prototype, { wrapAround: { get: function () { console.warn("THREE.Material: .wrapAround has been removed."); }, set: function () { console.warn("THREE.Material: .wrapAround has been removed."); } }, overdraw: { get: function () { console.warn("THREE.Material: .overdraw has been removed."); }, set: function () { console.warn("THREE.Material: .overdraw has been removed."); } }, wrapRGB: { get: function () { return console.warn("THREE.Material: .wrapRGB has been removed."), new ee; } }, shading: { get: function () { console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."); }, set: function (e) { console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = e === kl; } }, stencilMask: { get: function () { return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask; }, set: function (e) { console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e; } } });
Object.defineProperties(lr.prototype, { metal: { get: function () { return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1; }, set: function () { console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead"); } } });
Object.defineProperties(At.prototype, { derivatives: { get: function () { return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives; }, set: function (e) { console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e; } } });
Object.assign(Kc.prototype, { clearTarget: function (e, t, n, r) { console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, n, r); }, animate: function (e) { console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e); }, getCurrentRenderTarget: function () { return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget(); }, getMaxAnisotropy: function () { return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy(); }, getPrecision: function () { return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision; }, resetGLState: function () { return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset(); }, supportsFloatTextures: function () { return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float"); }, supportsHalfFloatTextures: function () { return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float"); }, supportsStandardDerivatives: function () { return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives"); }, supportsCompressedTextureS3TC: function () { return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc"); }, supportsCompressedTexturePVRTC: function () { return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc"); }, supportsBlendMinMax: function () { return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax"); }, supportsVertexTextures: function () { return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures; }, supportsInstancedArrays: function () { return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays"); }, enableScissorTest: function (e) { console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e); }, initMaterial: function () { console.warn("THREE.WebGLRenderer: .initMaterial() has been removed."); }, addPrePlugin: function () { console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed."); }, addPostPlugin: function () { console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed."); }, updateShadowMap: function () { console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed."); }, setFaceCulling: function () { console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed."); }, allocTextureUnit: function () { console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed."); }, setTexture: function () { console.warn("THREE.WebGLRenderer: .setTexture() has been removed."); }, setTexture2D: function () { console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed."); }, setTextureCube: function () { console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed."); }, getActiveMipMapLevel: function () { return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel(); } });
Object.defineProperties(Kc.prototype, { shadowMapEnabled: { get: function () { return this.shadowMap.enabled; }, set: function (e) { console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e; } }, shadowMapType: { get: function () { return this.shadowMap.type; }, set: function (e) { console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e; } }, shadowMapCullFace: { get: function () { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."); }, set: function () { console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."); } }, context: { get: function () { return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext(); } }, vr: { get: function () { return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr; } }, gammaInput: { get: function () { return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1; }, set: function () { console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."); } }, gammaOutput: { get: function () { return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1; }, set: function (e) { console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = e === !0 ? ps : Ct; } } });
Object.defineProperties($c.prototype, { cullFace: { get: function () { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."); }, set: function () { console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."); } }, renderReverseSided: { get: function () { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."); }, set: function () { console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."); } }, renderSingleSided: { get: function () { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."); }, set: function () { console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."); } } });
Object.defineProperties(nr.prototype, { activeCubeFace: { set: function () { console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget()."); } }, activeMipMapLevel: { set: function () { console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget()."); } } });
Object.defineProperties(wt.prototype, { wrapS: { get: function () { return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e; } }, wrapT: { get: function () { return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e; } }, magFilter: { get: function () { return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e; } }, minFilter: { get: function () { return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e; } }, anisotropy: { get: function () { return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e; } }, offset: { get: function () { return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e; } }, repeat: { get: function () { return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e; } }, format: { get: function () { return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e; } }, type: { get: function () { return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e; } }, generateMipmaps: { get: function () { return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps; }, set: function (e) { console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e; } } });
Object.defineProperties(ha.prototype, { load: { value: function (e) { console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."); var t = this, n = new Sl; return n.load(e, function (r) { t.setBuffer(r); }), this; } }, startTime: { set: function () { console.warn("THREE.Audio: .startTime is now .play( delay )."); } } });
Vu.prototype.getData = function () { return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData(); };
Pi.prototype.updateCubeMap = function (e, t) { return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t); };
var u0 = { merge: function (e, t, n) { console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."); var r; t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(), r = t.matrix, t = t.geometry), e.merge(t, r, n); }, center: function (e) { return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center(); } };
Yn.crossOrigin = void 0;
Yn.loadTexture = function (e, t, n, r) { console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."); var i = new il; i.setCrossOrigin(this.crossOrigin); var a = i.load(e, n, void 0, r); return t && (a.mapping = t), a; };
Yn.loadTextureCube = function (e, t, n, r) { console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."); var i = new rl; i.setCrossOrigin(this.crossOrigin); var a = i.load(e, n, void 0, r); return t && (a.mapping = t), a; };
Yn.loadCompressedTexture = function () { console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."); };
Yn.loadCompressedTextureCube = function () { console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."); };
function h0() { console.error("THREE.CanvasRenderer has been removed"); }
function f0() { console.error("THREE.JSONLoader has been removed."); }
var d0 = { createMultiMaterialObject: function () { console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js"); }, detach: function () { console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js"); }, attach: function () { console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js"); } };
function p0() { console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js"); }
typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Ih } }));
export { cf as ACESFilmicToneMapping, yr as AddEquation, af as AddOperation, jl as AdditiveBlending, mf as AlphaFormat, $h as AlwaysDepth, Zf as AlwaysStencilFunc, gl as AmbientLight, Ou as AmbientLightProbe, Yt as AnimationClip, bu as AnimationLoader, qu as AnimationMixer, Wg as AnimationObjectGroup, ut as AnimationUtils, sa as ArcCurve, zs as ArrayCamera, Vn as ArrowHelper, ha as Audio, Vu as AudioAnalyser, Du as AudioContext, zu as AudioListener, Sl as AudioLoader, $o as AxesHelper, i0 as AxisHelper, ht as BackSide, qf as BasicDepthPacking, oy as BasicShadowMap, c0 as BinaryTextureLoader, au as Bone, Qs as BooleanKeyframeTrack, a0 as BoundingBoxHelper, Ju as Box2, Kt as Box3, Yo as Box3Helper, Ci as BoxBufferGeometry, Rc as BoxGeometry, Hn as BoxHelper, _e as BufferAttribute, te as BufferGeometry, bl as BufferGeometryLoader, uf as ByteType, hi as Cache, xn as Camera, qo as CameraHelper, h0 as CanvasRenderer, xo as CanvasTexture, Mt as CatmullRomCurve3, lf as CineonToneMapping, ra as CircleBufferGeometry, Fo as CircleGeometry, St as ClampToEdgeWrapping, Bu as Clock, Kg as ClosedSplineCurve3, ee as Color, Ks as ColorKeyframeTrack, Hi as CompressedTexture, Mu as CompressedTextureLoader, No as ConeBufferGeometry, Oo as ConeGeometry, Pi as CubeCamera, Rc as CubeGeometry, os as CubeReflectionMapping, ss as CubeRefractionMapping, In as CubeTexture, rl as CubeTextureLoader, _i as CubeUVReflectionMapping, cs as CubeUVRefractionMapping, an as CubicBezierCurve, Mn as CubicBezierCurve3, Js as CubicInterpolant, Hl as CullFaceBack, Nh as CullFaceFront, ry as CullFaceFrontBack, Oh as CullFaceNone, fe as Curve, zn as CurvePath, Uh as CustomBlending, Bn as CylinderBufferGeometry, ri as CylinderGeometry, Xg as Cylindrical, Hr as DataTexture, Di as DataTexture2DArray, Ii as DataTexture3D, nl as DataTextureLoader, gy as DecrementStencilOp, xy as DecrementWrapStencilOp, bg as DefaultLoadingManager, xr as DepthFormat, bi as DepthStencilFormat, _o as DepthTexture, ml as DirectionalLight, ma as DirectionalLightHelper, vl as DirectionalLightShadow, $s as DiscreteInterpolant, qi as DodecahedronBufferGeometry, To as DodecahedronGeometry, wa as DoubleSide, jh as DstAlphaFactor, Xh as DstColorFactor, Yy as DynamicBufferAttribute, Iy as DynamicCopyUsage, Mi as DynamicDrawUsage, Cy as DynamicReadUsage, na as EdgesGeometry, o0 as EdgesHelper, Ht as EllipseCurve, Kh as EqualDepth, My as EqualStencilFunc, Ql as EquirectangularReflectionMapping, ls as EquirectangularRefractionMapping, Sr as Euler, dn as EventDispatcher, wn as ExtrudeBufferGeometry, Kr as ExtrudeGeometry, Ai as Face3, Fy as Face4, Bh as FaceColors, Jt as FileLoader, kl as FlatShading, n0 as Float32Attribute, $ as Float32BufferAttribute, r0 as Float64Attribute, Xa as Float64BufferAttribute, wi as FloatType, Hs as Fog, Gs as FogExp2, Cu as Font, Pu as FontLoader, ay as FrontFaceDirectionCCW, iy as FrontFaceDirectionCW, gi as FrontSide, to as Frustum, uc as GammaEncoding, we as Geometry, u0 as GeometryUtils, tf as GreaterDepth, ef as GreaterEqualDepth, Ay as GreaterEqualStencilFunc, Sy as GreaterStencilFunc, Dl as GridHelper, ro as Group, fs as HalfFloatType, ul as HemisphereLight, va as HemisphereLightHelper, Iu as HemisphereLightProbe, ji as IcosahedronBufferGeometry, So as IcosahedronGeometry, Lu as ImageBitmapLoader, oa as ImageLoader, Yn as ImageUtils, Vo as ImmediateRenderObject, my as IncrementStencilOp, yy as IncrementWrapStencilOp, wl as InstancedBufferAttribute, _l as InstancedBufferGeometry, Xu as InstancedInterleavedBuffer, Ws as InstancedMesh, Qy as Int16Attribute, ja as Int16BufferAttribute, e0 as Int32Attribute, qa as Int32BufferAttribute, Zy as Int8Attribute, Va as Int8BufferAttribute, ff as IntType, Nn as InterleavedBuffer, io as InterleavedBufferAttribute, Gt as Interpolant, Ca as InterpolateDiscrete, Pa as InterpolateLinear, ds as InterpolateSmooth, _y as InvertStencilOp, f0 as JSONLoader, ms as KeepStencilOp, yt as KeyframeTrack, uo as LOD, ta as LatheBufferGeometry, Io as LatheGeometry, yc as Layers, p0 as LensFlare, Qh as LessDepth, rs as LessEqualDepth, Ey as LessEqualStencilFunc, by as LessStencilFunc, $e as Light, un as LightProbe, Sn as LightShadow, zt as Line, Qu as Line3, tt as LineBasicMaterial, Ft as LineCurve, on as LineCurve3, ui as LineDashedMaterial, js as LineLoop, Uy as LinePieces, nt as LineSegments, By as LineStrip, Ct as LinearEncoding, ft as LinearFilter, Bo as LinearInterpolant, hy as LinearMipMapLinearFilter, uy as LinearMipMapNearestFilter, Ta as LinearMipmapLinearFilter, ec as LinearMipmapNearestFilter, is as LinearToneMapping, ke as Loader, Su as LoaderUtils, wu as LoadingManager, jf as LogLuvEncoding, Hf as LoopOnce, kf as LoopPingPong, Vf as LoopRepeat, yf as LuminanceAlphaFormat, gf as LuminanceFormat, ty as MOUSE, xe as Material, xl as MaterialLoader, Ae as Math, mt as Matrix3, Re as Matrix4, Zl as MaxEquation, et as Mesh, Xt as MeshBasicMaterial, rr as MeshDepthMaterial, ir as MeshDistanceMaterial, zy as MeshFaceMaterial, li as MeshLambertMaterial, ci as MeshMatcapMaterial, si as MeshNormalMaterial, lr as MeshPhongMaterial, ai as MeshPhysicalMaterial, bn as MeshStandardMaterial, oi as MeshToonMaterial, Yl as MinEquation, Sa as MirroredRepeatWrapping, rf as MixOperation, Gy as MultiMaterial, Xl as MultiplyBlending, ba as MultiplyOperation, st as NearestFilter, cy as NearestMipMapLinearFilter, ly as NearestMipMapNearestFilter, hs as NearestMipmapLinearFilter, us as NearestMipmapNearestFilter, Jh as NeverDepth, wy as NeverStencilFunc, Tn as NoBlending, Wl as NoColors, Ma as NoToneMapping, xi as NormalBlending, nf as NotEqualDepth, Ty as NotEqualStencilFunc, ia as NumberKeyframeTrack, K as Object3D, El as ObjectLoader, Yf as ObjectSpaceNormalMap, Jr as OctahedronBufferGeometry, Eo as OctahedronGeometry, Vh as OneFactor, qh as OneMinusDstAlphaFactor, Yh as OneMinusDstColorFactor, $l as OneMinusSrcAlphaFactor, Wh as OneMinusSrcColorFactor, ua as OrthographicCamera, Vl as PCFShadowMap, Fh as PCFSoftShadowMap, uh as PMREMGenerator, ki as ParametricBufferGeometry, wo as ParametricGeometry, Vy as Particle, jy as ParticleBasicMaterial, ky as ParticleSystem, qy as ParticleSystemMaterial, cn as Path, ct as PerspectiveCamera, en as Plane, kr as PlaneBufferGeometry, no as PlaneGeometry, Zo as PlaneHelper, Hy as PointCloud, Wy as PointCloudMaterial, pl as PointLight, pa as PointLightHelper, Gi as Points, rn as PointsMaterial, Il as PolarGridHelper, Nt as PolyhedronBufferGeometry, bo as PolyhedronGeometry, Hu as PositionalAudio, Et as PropertyBinding, ku as PropertyMixer, sn as QuadraticBezierCurve, En as QuadraticBezierCurve3, Tt as Quaternion, Uo as QuaternionKeyframeTrack, el as QuaternionLinearInterpolant, Ih as REVISION, Xf as RGBADepthPacking, Qt as RGBAFormat, Sf as RGBAIntegerFormat, Uf as RGBA_ASTC_10x10_Format, Nf as RGBA_ASTC_10x5_Format, Ff as RGBA_ASTC_10x6_Format, Bf as RGBA_ASTC_10x8_Format, zf as RGBA_ASTC_12x10_Format, Gf as RGBA_ASTC_12x12_Format, Af as RGBA_ASTC_4x4_Format, Lf as RGBA_ASTC_5x4_Format, Rf as RGBA_ASTC_5x5_Format, Cf as RGBA_ASTC_6x5_Format, Pf as RGBA_ASTC_6x6_Format, Df as RGBA_ASTC_8x5_Format, If as RGBA_ASTC_8x6_Format, Of as RGBA_ASTC_8x8_Format, cc as RGBA_PVRTC_2BPPV1_Format, lc as RGBA_PVRTC_4BPPV1_Format, rc as RGBA_S3TC_DXT1_Format, ic as RGBA_S3TC_DXT3_Format, ac as RGBA_S3TC_DXT5_Format, dc as RGBDEncoding, vs as RGBEEncoding, xf as RGBEFormat, qn as RGBFormat, Ef as RGBIntegerFormat, fc as RGBM16Encoding, hc as RGBM7Encoding, Tf as RGB_ETC1_Format, sc as RGB_PVRTC_2BPPV1_Format, oc as RGB_PVRTC_4BPPV1_Format, nc as RGB_S3TC_DXT1_Format, bf as RGFormat, Mf as RGIntegerFormat, Un as RawShaderMaterial, Cr as Ray, jg as Raycaster, yl as RectAreaLight, _f as RedFormat, wf as RedIntegerFormat, of as ReinhardToneMapping, Ea as RepeatWrapping, vy as ReplaceStencilOp, Gh as ReverseSubtractEquation, ea as RingBufferGeometry, Do as RingGeometry, Ln as Scene, d0 as SceneUtils, Pe as ShaderChunk, _n as ShaderLib, At as ShaderMaterial, ii as ShadowMaterial, cr as Shape, ni as ShapeBufferGeometry, ti as ShapeGeometry, Ru as ShapePath, Fn as ShapeUtils, hf as ShortType, ks as Skeleton, da as SkeletonHelper, ho as SkinnedMesh, sy as SmoothShading, Pn as Sphere, ei as SphereBufferGeometry, Po as SphereGeometry, qg as Spherical, Tl as SphericalHarmonics3, Kl as SphericalReflectionMapping, xh as Spline, ln as SplineCurve, ey as SplineCurve3, fl as SpotLight, fa as SpotLightHelper, hl as SpotLightShadow, so as Sprite, or as SpriteMaterial, Jl as SrcAlphaFactor, Zh as SrcAlphaSaturateFactor, kh as SrcColorFactor, Dy as StaticCopyUsage, Ia as StaticDrawUsage, Ry as StaticReadUsage, Ig as StereoCamera, Oy as StreamCopyUsage, Ly as StreamDrawUsage, Py as StreamReadUsage, tl as StringKeyframeTrack, zh as SubtractEquation, ql as SubtractiveBlending, ny as TOUCH, br as TangentSpaceNormalMap, Wi as TetrahedronBufferGeometry, Mo as TetrahedronGeometry, Ki as TextBufferGeometry, Co as TextGeometry, Ye as Texture, il as TextureLoader, Yi as TorusBufferGeometry, Ro as TorusGeometry, Xi as TorusKnotBufferGeometry, Lo as TorusKnotGeometry, pt as Triangle, dy as TriangleFanDrawMode, fy as TriangleStripDrawMode, Wf as TrianglesDrawMode, $r as TubeBufferGeometry, Ao as TubeGeometry, as as UVMapping, Ky as Uint16Attribute, Ir as Uint16BufferAttribute, t0 as Uint32Attribute, Or as Uint32BufferAttribute, Jy as Uint8Attribute, ka as Uint8BufferAttribute, $y as Uint8ClampedAttribute, Wa as Uint8ClampedBufferAttribute, sf as Uncharted2ToneMapping, Rl as Uniform, Q as UniformsLib, Ny as UniformsUtils, Aa as UnsignedByteType, Ra as UnsignedInt248Type, tc as UnsignedIntType, df as UnsignedShort4444Type, pf as UnsignedShort5551Type, vf as UnsignedShort565Type, La as UnsignedShortType, mi as VSMShadowMap, U as Vector2, M as Vector3, Ze as Vector4, aa as VectorKeyframeTrack, Xy as Vertex, yi as VertexColors, fu as VideoTexture, vc as WebGLMultisampleRenderTarget, wt as WebGLRenderTarget, nr as WebGLRenderTargetCube, Kc as WebGLRenderer, Km as WebGLUtils, Vi as WireframeGeometry, s0 as WireframeHelper, Da as WrapAroundEnding, l0 as XHRLoader, _r as ZeroCurvatureEnding, Hh as ZeroFactor, wr as ZeroSlopeEnding, py as ZeroStencilOp, ps as sRGBEncoding };
//!\ DECLARE ALIAS AFTER assign prototype !
