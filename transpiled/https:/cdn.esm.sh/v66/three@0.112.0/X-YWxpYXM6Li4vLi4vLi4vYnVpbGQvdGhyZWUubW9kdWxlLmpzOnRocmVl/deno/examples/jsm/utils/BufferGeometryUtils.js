/* esm.sh - esbuild bundle(three@0.112.0/examples/jsm/utils/BufferGeometryUtils) deno production */
import { BufferAttribute as C, BufferGeometry as rr, InterleavedBuffer as tr, InterleavedBufferAttribute as er, TriangleFanDrawMode as j, TriangleStripDrawMode as ar, TrianglesDrawMode as nr, Vector2 as Z, Vector3 as E } from "/transpiled/https://cdn.esm.sh/v66/three@0.112.0/deno/three.js";
var ur = { computeTangents: function (r) { var f = r.index, a = r.attributes; if (f === null || a.position === void 0 || a.normal === void 0 || a.uv === void 0) {
        console.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
        return;
    } var v = f.array, h = a.position.array, e = a.normal.array, n = a.uv.array, i = h.length / 3; a.tangent === void 0 && r.setAttribute("tangent", new C(new Float32Array(4 * i), 4)); for (var u = a.tangent.array, A = [], l = [], o = 0; o < i; o++)
        A[o] = new E, l[o] = new E; var t = new E, d = new E, s = new E, p = new Z, z = new Z, c = new Z, w = new E, m = new E; function g(T, I, L) { t.fromArray(h, T * 3), d.fromArray(h, I * 3), s.fromArray(h, L * 3), p.fromArray(n, T * 2), z.fromArray(n, I * 2), c.fromArray(n, L * 2); var q = d.x - t.x, O = s.x - t.x, $ = d.y - t.y, J = s.y - t.y, K = d.z - t.z, Q = s.z - t.z, N = z.x - p.x, Y = c.x - p.x, P = z.y - p.y, _ = c.y - p.y, V = 1 / (N * _ - Y * P); w.set((_ * q - P * O) * V, (_ * $ - P * J) * V, (_ * K - P * Q) * V), m.set((N * O - Y * q) * V, (N * J - Y * $) * V, (N * Q - Y * K) * V), !!(isFinite(w.x) && isFinite(w.y) && isFinite(w.z) && isFinite(m.x) && isFinite(m.y) && isFinite(m.z)) && (A[T].add(w), A[I].add(w), A[L].add(w), l[T].add(m), l[I].add(m), l[L].add(m)); } var y = r.groups; y.length === 0 && (y = [{ start: 0, count: v.length }]); for (var o = 0, D = y.length; o < D; ++o)
        for (var B = y[o], U = B.start, H = B.count, b = U, x = U + H; b < x; b += 3)
            g(v[b + 0], v[b + 1], v[b + 2]); var X = new E, G = new E, S = new E, R = new E, F, M, k; function W(T) { S.fromArray(e, T * 3), R.copy(S), M = A[T], X.copy(M), X.sub(S.multiplyScalar(S.dot(M))).normalize(), G.crossVectors(R, M), k = G.dot(l[T]), F = k < 0 ? -1 : 1, u[T * 4] = X.x, u[T * 4 + 1] = X.y, u[T * 4 + 2] = X.z, u[T * 4 + 3] = F; } for (var o = 0, D = y.length; o < D; ++o)
        for (var B = y[o], U = B.start, H = B.count, b = U, x = U + H; b < x; b += 3)
            W(v[b + 0]), W(v[b + 1]), W(v[b + 2]); }, mergeBufferGeometries: function (r, f) { for (var a = r[0].index !== null, v = new Set(Object.keys(r[0].attributes)), h = new Set(Object.keys(r[0].morphAttributes)), e = {}, n = {}, i = r[0].morphTargetsRelative, u = new rr, A = 0, l = 0; l < r.length; ++l) {
        var o = r[l];
        if (a !== (o.index !== null))
            return null;
        for (var t in o.attributes) {
            if (!v.has(t))
                return null;
            e[t] === void 0 && (e[t] = []), e[t].push(o.attributes[t]);
        }
        if (i !== o.morphTargetsRelative)
            return null;
        for (var t in o.morphAttributes) {
            if (!h.has(t))
                return null;
            n[t] === void 0 && (n[t] = []), n[t].push(o.morphAttributes[t]);
        }
        if (u.userData.mergedUserData = u.userData.mergedUserData || [], u.userData.mergedUserData.push(o.userData), f) {
            var d;
            if (a)
                d = o.index.count;
            else if (o.attributes.position !== void 0)
                d = o.attributes.position.count;
            else
                return null;
            u.addGroup(A, d, l), A += d;
        }
    } if (a) {
        for (var s = 0, p = [], l = 0; l < r.length; ++l) {
            for (var z = r[l].index, c = 0; c < z.count; ++c)
                p.push(z.getX(c) + s);
            s += r[l].attributes.position.count;
        }
        u.setIndex(p);
    } for (var t in e) {
        var w = this.mergeBufferAttributes(e[t]);
        if (!w)
            return null;
        u.setAttribute(t, w);
    } for (var t in n) {
        var m = n[t][0].length;
        if (m === 0)
            break;
        u.morphAttributes = u.morphAttributes || {}, u.morphAttributes[t] = [];
        for (var l = 0; l < m; ++l) {
            for (var g = [], c = 0; c < n[t].length; ++c)
                g.push(n[t][c][l]);
            var y = this.mergeBufferAttributes(g);
            if (!y)
                return null;
            u.morphAttributes[t].push(y);
        }
    } return u; }, mergeBufferAttributes: function (r) { for (var f, a, v, h = 0, e = 0; e < r.length; ++e) {
        var n = r[e];
        if (n.isInterleavedBufferAttribute || (f === void 0 && (f = n.array.constructor), f !== n.array.constructor) || (a === void 0 && (a = n.itemSize), a !== n.itemSize) || (v === void 0 && (v = n.normalized), v !== n.normalized))
            return null;
        h += n.array.length;
    } for (var i = new f(h), u = 0, e = 0; e < r.length; ++e)
        i.set(r[e].array, u), u += r[e].array.length; return new C(i, a, v); }, interleaveAttributes: function (r) { for (var f, a = 0, v = 0, h = 0, e = r.length; h < e; ++h) {
        var n = r[h];
        if (f === void 0 && (f = n.array.constructor), f !== n.array.constructor)
            return console.warn("AttributeBuffers of different types cannot be interleaved"), null;
        a += n.array.length, v += n.itemSize;
    } for (var i = new tr(new f(a), v), u = 0, A = [], l = ["getX", "getY", "getZ", "getW"], o = ["setX", "setY", "setZ", "setW"], t = 0, e = r.length; t < e; t++) {
        var n = r[t], d = n.itemSize, s = n.count, p = new er(i, d, u, n.normalized);
        A.push(p), u += d;
        for (var z = 0; z < s; z++)
            for (var c = 0; c < d; c++)
                p[o[c]](z, n[l[c]](z));
    } return A; }, estimateBytesUsed: function (r) { var f = 0; for (var a in r.attributes) {
        var v = r.getAttribute(a);
        f += v.count * v.itemSize * v.array.BYTES_PER_ELEMENT;
    } var h = r.getIndex(); return f += h ? h.count * h.itemSize * h.array.BYTES_PER_ELEMENT : 0, f; }, mergeVertices: function (r, f = 1e-4) { f = Math.max(f, Number.EPSILON); for (var a = {}, v = r.getIndex(), h = r.getAttribute("position"), e = v ? v.count : h.count, n = 0, i = Object.keys(r.attributes), u = {}, A = {}, l = [], o = ["getX", "getY", "getZ", "getW"], t = 0, d = i.length; t < d; t++) {
        var s = i[t];
        u[s] = [];
        var p = r.morphAttributes[s];
        p && (A[s] = new Array(p.length).fill().map(() => []));
    } for (var z = Math.log10(1 / f), c = Math.pow(10, z), t = 0; t < e; t++) {
        for (var w = v ? v.getX(t) : t, m = "", g = 0, d = i.length; g < d; g++)
            for (var s = i[g], y = r.getAttribute(s), D = y.itemSize, B = 0; B < D; B++)
                m += `${~~(y[o[B]](w) * c)},`;
        if (m in a)
            l.push(a[m]);
        else {
            for (var g = 0, d = i.length; g < d; g++)
                for (var s = i[g], y = r.getAttribute(s), p = r.morphAttributes[s], D = y.itemSize, U = u[s], H = A[s], B = 0; B < D; B++) {
                    var b = o[B];
                    if (U.push(y[b](w)), p)
                        for (var x = 0, X = p.length; x < X; x++)
                            H[x].push(p[x][b](w));
                }
            a[m] = n, l.push(n), n++;
        }
    } let G = r.clone(); for (var t = 0, d = i.length; t < d; t++) {
        var s = i[t], S = r.getAttribute(s), R = new S.array.constructor(u[s]), y = new C(R, S.itemSize, S.normalized);
        if (G.setAttribute(s, y), s in A)
            for (var g = 0; g < A[s].length; g++) {
                var F = r.morphAttributes[s][g], R = new F.array.constructor(A[s][g]), M = new C(R, F.itemSize, F.normalized);
                G.morphAttributes[s][g] = M;
            }
    } return G.setIndex(l), G; }, toTrianglesDrawMode: function (r, f) { if (f === nr)
        return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r; if (f === j || f === ar) {
        var a = r.getIndex();
        if (a === null) {
            var v = [], h = r.getAttribute("position");
            if (h !== void 0) {
                for (var e = 0; e < h.count; e++)
                    v.push(e);
                r.setIndex(v), a = r.getIndex();
            }
            else
                return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
        }
        var n = a.count - 2, i = [];
        if (f === j)
            for (var e = 1; e <= n; e++)
                i.push(a.getX(0)), i.push(a.getX(e)), i.push(a.getX(e + 1));
        else
            for (var e = 0; e < n; e++)
                e % 2 === 0 ? (i.push(a.getX(e)), i.push(a.getX(e + 1)), i.push(a.getX(e + 2))) : (i.push(a.getX(e + 2)), i.push(a.getX(e + 1)), i.push(a.getX(e)));
        i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
        var u = r.clone();
        return u.setIndex(i), u.clearGroups(), u;
    }
    else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", f), r; } };
export { ur as BufferGeometryUtils };
