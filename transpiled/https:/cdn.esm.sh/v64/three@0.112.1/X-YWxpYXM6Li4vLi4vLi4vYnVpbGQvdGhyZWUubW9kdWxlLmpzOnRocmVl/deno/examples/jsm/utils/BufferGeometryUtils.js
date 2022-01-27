/* esm.sh - esbuild bundle(three@0.112.1/examples/jsm/utils/BufferGeometryUtils) deno production */
import { BufferAttribute as N, BufferGeometry as Z, InterleavedBuffer as F, InterleavedBufferAttribute as k, TriangleFanDrawMode as W, TriangleStripDrawMode as q, TrianglesDrawMode as O, Vector2 as _, Vector3 as E } from "/transpiled/https://cdn.esm.sh/v64/three@0.112.1/deno/three.js";
var J = { computeTangents: function (r) { var o = r.index, a = r.attributes; if (o === null || a.position === void 0 || a.normal === void 0 || a.uv === void 0) {
        console.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
        return;
    } var s = o.array, d = a.position.array, t = a.normal.array, n = a.uv.array, u = d.length / 3; a.tangent === void 0 && r.setAttribute("tangent", new N(new Float32Array(4 * u), 4)); for (var i = a.tangent.array, g = [], l = [], v = 0; v < u; v++)
        g[v] = new E, l[v] = new E; var e = new E, p = new E, f = new E, m = new _, y = new _, h = new _, T = new E, S = new E; function c(B, I, L) { e.fromArray(d, B * 3), p.fromArray(d, I * 3), f.fromArray(d, L * 3), m.fromArray(n, B * 2), y.fromArray(n, I * 2), h.fromArray(n, L * 2), p.sub(e), f.sub(e), y.sub(m), h.sub(m); var P = 1 / (y.x * h.y - h.x * y.y); !isFinite(P) || (T.copy(p).multiplyScalar(h.y).addScaledVector(f, -y.y).multiplyScalar(P), S.copy(f).multiplyScalar(y.x).addScaledVector(p, -h.x).multiplyScalar(P), g[B].add(T), g[I].add(T), g[L].add(T), l[B].add(S), l[I].add(S), l[L].add(S)); } var A = r.groups; A.length === 0 && (A = [{ start: 0, count: s.length }]); for (var v = 0, U = A.length; v < U; ++v)
        for (var w = A[v], X = w.start, H = w.count, b = X, z = X + H; b < z; b += 3)
            c(s[b + 0], s[b + 1], s[b + 2]); var x = new E, G = new E, D = new E, R = new E, V, M, C; function Y(B) { D.fromArray(t, B * 3), R.copy(D), M = g[B], x.copy(M), x.sub(D.multiplyScalar(D.dot(M))).normalize(), G.crossVectors(R, M), C = G.dot(l[B]), V = C < 0 ? -1 : 1, i[B * 4] = x.x, i[B * 4 + 1] = x.y, i[B * 4 + 2] = x.z, i[B * 4 + 3] = V; } for (var v = 0, U = A.length; v < U; ++v)
        for (var w = A[v], X = w.start, H = w.count, b = X, z = X + H; b < z; b += 3)
            Y(s[b + 0]), Y(s[b + 1]), Y(s[b + 2]); }, mergeBufferGeometries: function (r, o) { for (var a = r[0].index !== null, s = new Set(Object.keys(r[0].attributes)), d = new Set(Object.keys(r[0].morphAttributes)), t = {}, n = {}, u = r[0].morphTargetsRelative, i = new Z, g = 0, l = 0; l < r.length; ++l) {
        var v = r[l];
        if (a !== (v.index !== null))
            return null;
        for (var e in v.attributes) {
            if (!s.has(e))
                return null;
            t[e] === void 0 && (t[e] = []), t[e].push(v.attributes[e]);
        }
        if (u !== v.morphTargetsRelative)
            return null;
        for (var e in v.morphAttributes) {
            if (!d.has(e))
                return null;
            n[e] === void 0 && (n[e] = []), n[e].push(v.morphAttributes[e]);
        }
        if (i.userData.mergedUserData = i.userData.mergedUserData || [], i.userData.mergedUserData.push(v.userData), o) {
            var p;
            if (a)
                p = v.index.count;
            else if (v.attributes.position !== void 0)
                p = v.attributes.position.count;
            else
                return null;
            i.addGroup(g, p, l), g += p;
        }
    } if (a) {
        for (var f = 0, m = [], l = 0; l < r.length; ++l) {
            for (var y = r[l].index, h = 0; h < y.count; ++h)
                m.push(y.getX(h) + f);
            f += r[l].attributes.position.count;
        }
        i.setIndex(m);
    } for (var e in t) {
        var T = this.mergeBufferAttributes(t[e]);
        if (!T)
            return null;
        i.setAttribute(e, T);
    } for (var e in n) {
        var S = n[e][0].length;
        if (S === 0)
            break;
        i.morphAttributes = i.morphAttributes || {}, i.morphAttributes[e] = [];
        for (var l = 0; l < S; ++l) {
            for (var c = [], h = 0; h < n[e].length; ++h)
                c.push(n[e][h][l]);
            var A = this.mergeBufferAttributes(c);
            if (!A)
                return null;
            i.morphAttributes[e].push(A);
        }
    } return i; }, mergeBufferAttributes: function (r) { for (var o, a, s, d = 0, t = 0; t < r.length; ++t) {
        var n = r[t];
        if (n.isInterleavedBufferAttribute || (o === void 0 && (o = n.array.constructor), o !== n.array.constructor) || (a === void 0 && (a = n.itemSize), a !== n.itemSize) || (s === void 0 && (s = n.normalized), s !== n.normalized))
            return null;
        d += n.array.length;
    } for (var u = new o(d), i = 0, t = 0; t < r.length; ++t)
        u.set(r[t].array, i), i += r[t].array.length; return new N(u, a, s); }, interleaveAttributes: function (r) { for (var o, a = 0, s = 0, d = 0, t = r.length; d < t; ++d) {
        var n = r[d];
        if (o === void 0 && (o = n.array.constructor), o !== n.array.constructor)
            return console.warn("AttributeBuffers of different types cannot be interleaved"), null;
        a += n.array.length, s += n.itemSize;
    } for (var u = new F(new o(a), s), i = 0, g = [], l = ["getX", "getY", "getZ", "getW"], v = ["setX", "setY", "setZ", "setW"], e = 0, t = r.length; e < t; e++) {
        var n = r[e], p = n.itemSize, f = n.count, m = new k(u, p, i, n.normalized);
        g.push(m), i += p;
        for (var y = 0; y < f; y++)
            for (var h = 0; h < p; h++)
                m[v[h]](y, n[l[h]](y));
    } return g; }, estimateBytesUsed: function (r) { var o = 0; for (var a in r.attributes) {
        var s = r.getAttribute(a);
        o += s.count * s.itemSize * s.array.BYTES_PER_ELEMENT;
    } var d = r.getIndex(); return o += d ? d.count * d.itemSize * d.array.BYTES_PER_ELEMENT : 0, o; }, mergeVertices: function (r, o = 1e-4) { o = Math.max(o, Number.EPSILON); for (var a = {}, s = r.getIndex(), d = r.getAttribute("position"), t = s ? s.count : d.count, n = 0, u = Object.keys(r.attributes), i = {}, g = {}, l = [], v = ["getX", "getY", "getZ", "getW"], e = 0, p = u.length; e < p; e++) {
        var f = u[e];
        i[f] = [];
        var m = r.morphAttributes[f];
        m && (g[f] = new Array(m.length).fill().map(() => []));
    } for (var y = Math.log10(1 / o), h = Math.pow(10, y), e = 0; e < t; e++) {
        for (var T = s ? s.getX(e) : e, S = "", c = 0, p = u.length; c < p; c++)
            for (var f = u[c], A = r.getAttribute(f), U = A.itemSize, w = 0; w < U; w++)
                S += `${~~(A[v[w]](T) * h)},`;
        if (S in a)
            l.push(a[S]);
        else {
            for (var c = 0, p = u.length; c < p; c++)
                for (var f = u[c], A = r.getAttribute(f), m = r.morphAttributes[f], U = A.itemSize, X = i[f], H = g[f], w = 0; w < U; w++) {
                    var b = v[w];
                    if (X.push(A[b](T)), m)
                        for (var z = 0, x = m.length; z < x; z++)
                            H[z].push(m[z][b](T));
                }
            a[S] = n, l.push(n), n++;
        }
    } let G = r.clone(); for (var e = 0, p = u.length; e < p; e++) {
        var f = u[e], D = r.getAttribute(f), R = new D.array.constructor(i[f]), A = new N(R, D.itemSize, D.normalized);
        if (G.setAttribute(f, A), f in g)
            for (var c = 0; c < g[f].length; c++) {
                var V = r.morphAttributes[f][c], R = new V.array.constructor(g[f][c]), M = new N(R, V.itemSize, V.normalized);
                G.morphAttributes[f][c] = M;
            }
    } return G.setIndex(l), G; }, toTrianglesDrawMode: function (r, o) { if (o === O)
        return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r; if (o === W || o === q) {
        var a = r.getIndex();
        if (a === null) {
            var s = [], d = r.getAttribute("position");
            if (d !== void 0) {
                for (var t = 0; t < d.count; t++)
                    s.push(t);
                r.setIndex(s), a = r.getIndex();
            }
            else
                return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
        }
        var n = a.count - 2, u = [];
        if (o === W)
            for (var t = 1; t <= n; t++)
                u.push(a.getX(0)), u.push(a.getX(t)), u.push(a.getX(t + 1));
        else
            for (var t = 0; t < n; t++)
                t % 2 === 0 ? (u.push(a.getX(t)), u.push(a.getX(t + 1)), u.push(a.getX(t + 2))) : (u.push(a.getX(t + 2)), u.push(a.getX(t + 1)), u.push(a.getX(t)));
        u.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
        var i = r.clone();
        return i.setIndex(u), i.clearGroups(), i;
    }
    else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", o), r; } };
export { J as BufferGeometryUtils };
