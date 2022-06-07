/* esm.sh - esbuild bundle(glob@7.2.3) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import __once$ from "/transpiled/https://esm.sh/v85/once@1.4.0/esnext/once.js";
import __util$ from "/transpiled/https://esm.sh/v85/util@0.12.4/esnext/util.bundle.js";
import __inflight$ from "/transpiled/https://esm.sh/v85/inflight@1.0.6/esnext/inflight.js";
import __events$ from "/transpiled/https://esm.sh/v85/events@3.3.0/esnext/events.bundle.js";
import __fs_realpath$ from "/transpiled/https://esm.sh/v85/fs.realpath@1.0.0/esnext/fs.realpath.js";
import __fs$ from "/transpiled/https://esm.sh/v85/node_fs.js";
import __path_is_absolute$ from "/transpiled/https://esm.sh/v85/path-is-absolute@1.0.1/esnext/path-is-absolute.js";
import __assert$ from "/transpiled/https://esm.sh/v85/assert@2.0.0/esnext/assert.bundle.js";
import __path$ from "/transpiled/https://esm.sh/v85/path-browserify@1.0.1/esnext/path-browserify.bundle.js";
import __inherits$ from "/transpiled/https://esm.sh/v85/inherits@2.0.4/esnext/inherits.js";
import __minimatch$ from "/transpiled/https://esm.sh/v85/minimatch@3.1.2/esnext/minimatch.js";
var tt = Object.create;
var j = Object.defineProperty;
var rt = Object.getOwnPropertyDescriptor;
var et = Object.getOwnPropertyNames;
var it = Object.getPrototypeOf,
    at = Object.prototype.hasOwnProperty;

var m = (t, r) => j(t, "name", {
  value: r,
  configurable: !0
}),
    d = (t => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(t, {
  get: (r, e) => (typeof require != "undefined" ? require : r)[e]
}) : t)(function (t) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + t + '" is not supported');
});

var R = (t, r) => () => (r || t((r = {
  exports: {}
}).exports, r), r.exports);

var st = (t, r, e, i) => {
  if (r && typeof r == "object" || typeof r == "function") for (let a of et(r)) !at.call(t, a) && a !== e && j(t, a, {
    get: () => r[a],
    enumerable: !(i = rt(r, a)) || i.enumerable
  });
  return t;
};

var $ = (t, r, e) => (e = t != null ? tt(it(t)) : {}, st(r || !t || !t.__esModule ? j(e, "default", {
  value: t,
  enumerable: !0
}) : e, t));

var D = R(k => {
  k.setopts = lt;
  k.ownProp = W;
  k.makeAbs = O;
  k.finish = ft;
  k.mark = vt;
  k.isIgnored = B;
  k.childrenIgnored = mt;

  function W(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }

  m(W, "ownProp");
  var nt = __fs$,
      I = __path$,
      ht = __minimatch$,
      U = __path_is_absolute$,
      q = ht.Minimatch;

  function ot(t, r) {
    return t.localeCompare(r, "en");
  }

  m(ot, "alphasort");

  function ct(t, r) {
    t.ignore = r.ignore || [], Array.isArray(t.ignore) || (t.ignore = [t.ignore]), t.ignore.length && (t.ignore = t.ignore.map(ut));
  }

  m(ct, "setupIgnores");

  function ut(t) {
    var r = null;

    if (t.slice(-3) === "/**") {
      var e = t.replace(/(\/\*\*)+$/, "");
      r = new q(e, {
        dot: !0
      });
    }

    return {
      matcher: new q(t, {
        dot: !0
      }),
      gmatcher: r
    };
  }

  m(ut, "ignoreMap");

  function lt(t, r, e) {
    if (e || (e = {}), e.matchBase && r.indexOf("/") === -1) {
      if (e.noglobstar) throw new Error("base matching requires globstar");
      r = "**/" + r;
    }

    t.silent = !!e.silent, t.pattern = r, t.strict = e.strict !== !1, t.realpath = !!e.realpath, t.realpathCache = e.realpathCache || Object.create(null), t.follow = !!e.follow, t.dot = !!e.dot, t.mark = !!e.mark, t.nodir = !!e.nodir, t.nodir && (t.mark = !0), t.sync = !!e.sync, t.nounique = !!e.nounique, t.nonull = !!e.nonull, t.nosort = !!e.nosort, t.nocase = !!e.nocase, t.stat = !!e.stat, t.noprocess = !!e.noprocess, t.absolute = !!e.absolute, t.fs = e.fs || nt, t.maxLength = e.maxLength || 1 / 0, t.cache = e.cache || Object.create(null), t.statCache = e.statCache || Object.create(null), t.symlinks = e.symlinks || Object.create(null), ct(t, e), t.changedCwd = !1;

    var i = __Process$.cwd();

    W(e, "cwd") ? (t.cwd = I.resolve(e.cwd), t.changedCwd = t.cwd !== i) : t.cwd = i, t.root = e.root || I.resolve(t.cwd, "/"), t.root = I.resolve(t.root), __Process$.platform === "win32" && (t.root = t.root.replace(/\\/g, "/")), t.cwdAbs = U(t.cwd) ? t.cwd : O(t, t.cwd), __Process$.platform === "win32" && (t.cwdAbs = t.cwdAbs.replace(/\\/g, "/")), t.nomount = !!e.nomount, e.nonegate = !0, e.nocomment = !0, e.allowWindowsEscape = !1, t.minimatch = new q(r, e), t.options = t.minimatch.options;
  }

  m(lt, "setopts");

  function ft(t) {
    for (var r = t.nounique, e = r ? [] : Object.create(null), i = 0, a = t.matches.length; i < a; i++) {
      var n = t.matches[i];

      if (!n || Object.keys(n).length === 0) {
        if (t.nonull) {
          var s = t.minimatch.globSet[i];
          r ? e.push(s) : e[s] = !0;
        }
      } else {
        var h = Object.keys(n);
        r ? e.push.apply(e, h) : h.forEach(function (o) {
          e[o] = !0;
        });
      }
    }

    if (r || (e = Object.keys(e)), t.nosort || (e = e.sort(ot)), t.mark) {
      for (var i = 0; i < e.length; i++) e[i] = t._mark(e[i]);

      t.nodir && (e = e.filter(function (o) {
        var l = !/\/$/.test(o),
            _ = t.cache[o] || t.cache[O(t, o)];

        return l && _ && (l = _ !== "DIR" && !Array.isArray(_)), l;
      }));
    }

    t.ignore.length && (e = e.filter(function (o) {
      return !B(t, o);
    })), t.found = e;
  }

  m(ft, "finish");

  function vt(t, r) {
    var e = O(t, r),
        i = t.cache[e],
        a = r;

    if (i) {
      var n = i === "DIR" || Array.isArray(i),
          s = r.slice(-1) === "/";

      if (n && !s ? a += "/" : !n && s && (a = a.slice(0, -1)), a !== r) {
        var h = O(t, a);
        t.statCache[h] = t.statCache[e], t.cache[h] = t.cache[e];
      }
    }

    return a;
  }

  m(vt, "mark");

  function O(t, r) {
    var e = r;
    return r.charAt(0) === "/" ? e = I.join(t.root, r) : U(r) || r === "" ? e = r : t.changedCwd ? e = I.resolve(t.cwd, r) : e = I.resolve(r), __Process$.platform === "win32" && (e = e.replace(/\\/g, "/")), e;
  }

  m(O, "makeAbs");

  function B(t, r) {
    return t.ignore.length ? t.ignore.some(function (e) {
      return e.matcher.match(r) || !!(e.gmatcher && e.gmatcher.match(r));
    }) : !1;
  }

  m(B, "isIgnored");

  function mt(t, r) {
    return t.ignore.length ? t.ignore.some(function (e) {
      return !!(e.gmatcher && e.gmatcher.match(r));
    }) : !1;
  }

  m(mt, "childrenIgnored");
});
var V = R((Mt, J) => {
  J.exports = H;
  H.GlobSync = y;
  var dt = __fs_realpath$,
      K = __minimatch$,
      Gt = K.Minimatch,
      Tt = N().Glob,
      Ct = __util$,
      G = __path$,
      z = __assert$,
      L = __path_is_absolute$,
      A = D(),
      yt = A.setopts,
      T = A.ownProp,
      _t = A.childrenIgnored,
      gt = A.isIgnored;

  function H(t, r) {
    if (typeof r == "function" || arguments.length === 3) throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    return new y(t, r).found;
  }

  m(H, "globSync");

  function y(t, r) {
    if (!t) throw new Error("must provide pattern");
    if (typeof r == "function" || arguments.length === 3) throw new TypeError(`callback provided to sync glob
See: https://github.com/isaacs/node-glob/issues/167`);
    if (!(this instanceof y)) return new y(t, r);
    if (yt(this, t, r), this.noprocess) return this;
    var e = this.minimatch.set.length;
    this.matches = new Array(e);

    for (var i = 0; i < e; i++) this._process(this.minimatch.set[i], i, !1);

    this._finish();
  }

  m(y, "GlobSync");

  y.prototype._finish = function () {
    if (z.ok(this instanceof y), this.realpath) {
      var t = this;
      this.matches.forEach(function (r, e) {
        var i = t.matches[e] = Object.create(null);

        for (var a in r) try {
          a = t._makeAbs(a);
          var n = dt.realpathSync(a, t.realpathCache);
          i[n] = !0;
        } catch (s) {
          if (s.syscall === "stat") i[t._makeAbs(a)] = !0;else throw s;
        }
      });
    }

    A.finish(this);
  };

  y.prototype._process = function (t, r, e) {
    z.ok(this instanceof y);

    for (var i = 0; typeof t[i] == "string";) i++;

    var a;

    switch (i) {
      case t.length:
        this._processSimple(t.join("/"), r);

        return;

      case 0:
        a = null;
        break;

      default:
        a = t.slice(0, i).join("/");
        break;
    }

    var n = t.slice(i),
        s;
    a === null ? s = "." : ((L(a) || L(t.map(function (l) {
      return typeof l == "string" ? l : "[*]";
    }).join("/"))) && (!a || !L(a)) && (a = "/" + a), s = a);

    var h = this._makeAbs(s);

    if (!_t(this, s)) {
      var o = n[0] === K.GLOBSTAR;
      o ? this._processGlobStar(a, s, h, n, r, e) : this._processReaddir(a, s, h, n, r, e);
    }
  };

  y.prototype._processReaddir = function (t, r, e, i, a, n) {
    var s = this._readdir(e, n);

    if (!!s) {
      for (var h = i[0], o = !!this.minimatch.negate, l = h._glob, _ = this.dot || l.charAt(0) === ".", g = [], f = 0; f < s.length; f++) {
        var c = s[f];

        if (c.charAt(0) !== "." || _) {
          var v;
          o && !t ? v = !c.match(h) : v = c.match(h), v && g.push(c);
        }
      }

      var p = g.length;

      if (p !== 0) {
        if (i.length === 1 && !this.mark && !this.stat) {
          this.matches[a] || (this.matches[a] = Object.create(null));

          for (var f = 0; f < p; f++) {
            var c = g[f];
            t && (t.slice(-1) !== "/" ? c = t + "/" + c : c = t + c), c.charAt(0) === "/" && !this.nomount && (c = G.join(this.root, c)), this._emitMatch(a, c);
          }

          return;
        }

        i.shift();

        for (var f = 0; f < p; f++) {
          var c = g[f],
              w;
          t ? w = [t, c] : w = [c], this._process(w.concat(i), a, n);
        }
      }
    }
  };

  y.prototype._emitMatch = function (t, r) {
    if (!gt(this, r)) {
      var e = this._makeAbs(r);

      if (this.mark && (r = this._mark(r)), this.absolute && (r = e), !this.matches[t][r]) {
        if (this.nodir) {
          var i = this.cache[e];
          if (i === "DIR" || Array.isArray(i)) return;
        }

        this.matches[t][r] = !0, this.stat && this._stat(r);
      }
    }
  };

  y.prototype._readdirInGlobStar = function (t) {
    if (this.follow) return this._readdir(t, !1);
    var r, e, i;

    try {
      e = this.fs.lstatSync(t);
    } catch (n) {
      if (n.code === "ENOENT") return null;
    }

    var a = e && e.isSymbolicLink();
    return this.symlinks[t] = a, !a && e && !e.isDirectory() ? this.cache[t] = "FILE" : r = this._readdir(t, !1), r;
  };

  y.prototype._readdir = function (t, r) {
    var e;
    if (r && !T(this.symlinks, t)) return this._readdirInGlobStar(t);

    if (T(this.cache, t)) {
      var i = this.cache[t];
      if (!i || i === "FILE") return null;
      if (Array.isArray(i)) return i;
    }

    try {
      return this._readdirEntries(t, this.fs.readdirSync(t));
    } catch (a) {
      return this._readdirError(t, a), null;
    }
  };

  y.prototype._readdirEntries = function (t, r) {
    if (!this.mark && !this.stat) for (var e = 0; e < r.length; e++) {
      var i = r[e];
      t === "/" ? i = t + i : i = t + "/" + i, this.cache[i] = !0;
    }
    return this.cache[t] = r, r;
  };

  y.prototype._readdirError = function (t, r) {
    switch (r.code) {
      case "ENOTSUP":
      case "ENOTDIR":
        var e = this._makeAbs(t);

        if (this.cache[e] = "FILE", e === this.cwdAbs) {
          var i = new Error(r.code + " invalid cwd " + this.cwd);
          throw i.path = this.cwd, i.code = r.code, i;
        }

        break;

      case "ENOENT":
      case "ELOOP":
      case "ENAMETOOLONG":
      case "UNKNOWN":
        this.cache[this._makeAbs(t)] = !1;
        break;

      default:
        if (this.cache[this._makeAbs(t)] = !1, this.strict) throw r;
        this.silent || console.error("glob error", r);
        break;
    }
  };

  y.prototype._processGlobStar = function (t, r, e, i, a, n) {
    var s = this._readdir(e, n);

    if (!!s) {
      var h = i.slice(1),
          o = t ? [t] : [],
          l = o.concat(h);

      this._process(l, a, !1);

      var _ = s.length,
          g = this.symlinks[e];
      if (!(g && n)) for (var f = 0; f < _; f++) {
        var c = s[f];

        if (!(c.charAt(0) === "." && !this.dot)) {
          var v = o.concat(s[f], h);

          this._process(v, a, !0);

          var p = o.concat(s[f], i);

          this._process(p, a, !0);
        }
      }
    }
  };

  y.prototype._processSimple = function (t, r) {
    var e = this._stat(t);

    if (this.matches[r] || (this.matches[r] = Object.create(null)), !!e) {
      if (t && L(t) && !this.nomount) {
        var i = /[\/\\]$/.test(t);
        t.charAt(0) === "/" ? t = G.join(this.root, t) : (t = G.resolve(this.root, t), i && (t += "/"));
      }

      __Process$.platform === "win32" && (t = t.replace(/\\/g, "/")), this._emitMatch(r, t);
    }
  };

  y.prototype._stat = function (t) {
    var r = this._makeAbs(t),
        e = t.slice(-1) === "/";

    if (t.length > this.maxLength) return !1;

    if (!this.stat && T(this.cache, r)) {
      var s = this.cache[r];
      if (Array.isArray(s) && (s = "DIR"), !e || s === "DIR") return s;
      if (e && s === "FILE") return !1;
    }

    var i,
        a = this.statCache[r];

    if (!a) {
      var n;

      try {
        n = this.fs.lstatSync(r);
      } catch (h) {
        if (h && (h.code === "ENOENT" || h.code === "ENOTDIR")) return this.statCache[r] = !1, !1;
      }

      if (n && n.isSymbolicLink()) try {
        a = this.fs.statSync(r);
      } catch {
        a = n;
      } else a = n;
    }

    this.statCache[r] = a;
    var s = !0;
    return a && (s = a.isDirectory() ? "DIR" : "FILE"), this.cache[r] = this.cache[r] || s, e && s === "FILE" ? !1 : s;
  };

  y.prototype._mark = function (t) {
    return A.mark(this, t);
  };

  y.prototype._makeAbs = function (t) {
    return A.makeAbs(this, t);
  };
});
var N = R((Qt, Y) => {
  Y.exports = E;
  var pt = __fs_realpath$,
      X = __minimatch$,
      Ft = X.Minimatch,
      wt = __inherits$,
      kt = __events$.EventEmitter,
      C = __path$,
      M = __assert$,
      S = __path_is_absolute$,
      P = V(),
      b = D(),
      At = b.setopts,
      F = b.ownProp,
      Q = __inflight$,
      Pt = __util$,
      Et = b.childrenIgnored,
      bt = b.isIgnored,
      It = __once$;

  function E(t, r, e) {
    if (typeof r == "function" && (e = r, r = {}), r || (r = {}), r.sync) {
      if (e) throw new TypeError("callback provided to sync glob");
      return P(t, r);
    }

    return new u(t, r, e);
  }

  m(E, "glob");
  E.sync = P;
  var Ot = E.GlobSync = P.GlobSync;
  E.glob = E;

  function St(t, r) {
    if (r === null || typeof r != "object") return t;

    for (var e = Object.keys(r), i = e.length; i--;) t[e[i]] = r[e[i]];

    return t;
  }

  m(St, "extend");

  E.hasMagic = function (t, r) {
    var e = St({}, r);
    e.noprocess = !0;
    var i = new u(t, e),
        a = i.minimatch.set;
    if (!t) return !1;
    if (a.length > 1) return !0;

    for (var n = 0; n < a[0].length; n++) if (typeof a[0][n] != "string") return !0;

    return !1;
  };

  E.Glob = u;
  wt(u, kt);

  function u(t, r, e) {
    if (typeof r == "function" && (e = r, r = null), r && r.sync) {
      if (e) throw new TypeError("callback provided to sync glob");
      return new Ot(t, r);
    }

    if (!(this instanceof u)) return new u(t, r, e);
    At(this, t, r), this._didRealPath = !1;
    var i = this.minimatch.set.length;
    this.matches = new Array(i), typeof e == "function" && (e = It(e), this.on("error", e), this.on("end", function (o) {
      e(null, o);
    }));
    var a = this;
    if (this._processing = 0, this._emitQueue = [], this._processQueue = [], this.paused = !1, this.noprocess) return this;
    if (i === 0) return h();

    for (var n = !0, s = 0; s < i; s++) this._process(this.minimatch.set[s], s, !1, h);

    n = !1;

    function h() {
      --a._processing, a._processing <= 0 && (n ? __Process$.nextTick(function () {
        a._finish();
      }) : a._finish());
    }

    m(h, "done");
  }

  m(u, "Glob");

  u.prototype._finish = function () {
    if (M(this instanceof u), !this.aborted) {
      if (this.realpath && !this._didRealpath) return this._realpath();
      b.finish(this), this.emit("end", this.found);
    }
  };

  u.prototype._realpath = function () {
    if (this._didRealpath) return;
    this._didRealpath = !0;
    var t = this.matches.length;
    if (t === 0) return this._finish();

    for (var r = this, e = 0; e < this.matches.length; e++) this._realpathSet(e, i);

    function i() {
      --t === 0 && r._finish();
    }

    m(i, "next");
  };

  u.prototype._realpathSet = function (t, r) {
    var e = this.matches[t];
    if (!e) return r();
    var i = Object.keys(e),
        a = this,
        n = i.length;
    if (n === 0) return r();
    var s = this.matches[t] = Object.create(null);
    i.forEach(function (h, o) {
      h = a._makeAbs(h), pt.realpath(h, a.realpathCache, function (l, _) {
        l ? l.syscall === "stat" ? s[h] = !0 : a.emit("error", l) : s[_] = !0, --n === 0 && (a.matches[t] = s, r());
      });
    });
  };

  u.prototype._mark = function (t) {
    return b.mark(this, t);
  };

  u.prototype._makeAbs = function (t) {
    return b.makeAbs(this, t);
  };

  u.prototype.abort = function () {
    this.aborted = !0, this.emit("abort");
  };

  u.prototype.pause = function () {
    this.paused || (this.paused = !0, this.emit("pause"));
  };

  u.prototype.resume = function () {
    if (this.paused) {
      if (this.emit("resume"), this.paused = !1, this._emitQueue.length) {
        var t = this._emitQueue.slice(0);

        this._emitQueue.length = 0;

        for (var r = 0; r < t.length; r++) {
          var e = t[r];

          this._emitMatch(e[0], e[1]);
        }
      }

      if (this._processQueue.length) {
        var i = this._processQueue.slice(0);

        this._processQueue.length = 0;

        for (var r = 0; r < i.length; r++) {
          var a = i[r];
          this._processing--, this._process(a[0], a[1], a[2], a[3]);
        }
      }
    }
  };

  u.prototype._process = function (t, r, e, i) {
    if (M(this instanceof u), M(typeof i == "function"), !this.aborted) {
      if (this._processing++, this.paused) {
        this._processQueue.push([t, r, e, i]);

        return;
      }

      for (var a = 0; typeof t[a] == "string";) a++;

      var n;

      switch (a) {
        case t.length:
          this._processSimple(t.join("/"), r, i);

          return;

        case 0:
          n = null;
          break;

        default:
          n = t.slice(0, a).join("/");
          break;
      }

      var s = t.slice(a),
          h;
      n === null ? h = "." : ((S(n) || S(t.map(function (_) {
        return typeof _ == "string" ? _ : "[*]";
      }).join("/"))) && (!n || !S(n)) && (n = "/" + n), h = n);

      var o = this._makeAbs(h);

      if (Et(this, h)) return i();
      var l = s[0] === X.GLOBSTAR;
      l ? this._processGlobStar(n, h, o, s, r, e, i) : this._processReaddir(n, h, o, s, r, e, i);
    }
  };

  u.prototype._processReaddir = function (t, r, e, i, a, n, s) {
    var h = this;

    this._readdir(e, n, function (o, l) {
      return h._processReaddir2(t, r, e, i, a, n, l, s);
    });
  };

  u.prototype._processReaddir2 = function (t, r, e, i, a, n, s, h) {
    if (!s) return h();

    for (var o = i[0], l = !!this.minimatch.negate, _ = o._glob, g = this.dot || _.charAt(0) === ".", f = [], c = 0; c < s.length; c++) {
      var v = s[c];

      if (v.charAt(0) !== "." || g) {
        var p;
        l && !t ? p = !v.match(o) : p = v.match(o), p && f.push(v);
      }
    }

    var w = f.length;
    if (w === 0) return h();

    if (i.length === 1 && !this.mark && !this.stat) {
      this.matches[a] || (this.matches[a] = Object.create(null));

      for (var c = 0; c < w; c++) {
        var v = f[c];
        t && (t !== "/" ? v = t + "/" + v : v = t + v), v.charAt(0) === "/" && !this.nomount && (v = C.join(this.root, v)), this._emitMatch(a, v);
      }

      return h();
    }

    i.shift();

    for (var c = 0; c < w; c++) {
      var v = f[c],
          Rt;
      t && (t !== "/" ? v = t + "/" + v : v = t + v), this._process([v].concat(i), a, n, h);
    }

    h();
  };

  u.prototype._emitMatch = function (t, r) {
    if (!this.aborted && !bt(this, r)) {
      if (this.paused) {
        this._emitQueue.push([t, r]);

        return;
      }

      var e = S(r) ? r : this._makeAbs(r);

      if (this.mark && (r = this._mark(r)), this.absolute && (r = e), !this.matches[t][r]) {
        if (this.nodir) {
          var i = this.cache[e];
          if (i === "DIR" || Array.isArray(i)) return;
        }

        this.matches[t][r] = !0;
        var a = this.statCache[e];
        a && this.emit("stat", r, a), this.emit("match", r);
      }
    }
  };

  u.prototype._readdirInGlobStar = function (t, r) {
    if (this.aborted) return;
    if (this.follow) return this._readdir(t, !1, r);
    var e = "lstat\0" + t,
        i = this,
        a = Q(e, n);
    a && i.fs.lstat(t, a);

    function n(s, h) {
      if (s && s.code === "ENOENT") return r();
      var o = h && h.isSymbolicLink();
      i.symlinks[t] = o, !o && h && !h.isDirectory() ? (i.cache[t] = "FILE", r()) : i._readdir(t, !1, r);
    }

    m(n, "lstatcb_");
  };

  u.prototype._readdir = function (t, r, e) {
    if (!this.aborted && (e = Q("readdir\0" + t + "\0" + r, e), !!e)) {
      if (r && !F(this.symlinks, t)) return this._readdirInGlobStar(t, e);

      if (F(this.cache, t)) {
        var i = this.cache[t];
        if (!i || i === "FILE") return e();
        if (Array.isArray(i)) return e(null, i);
      }

      var a = this;
      a.fs.readdir(t, Lt(this, t, e));
    }
  };

  function Lt(t, r, e) {
    return function (i, a) {
      i ? t._readdirError(r, i, e) : t._readdirEntries(r, a, e);
    };
  }

  m(Lt, "readdirCb");

  u.prototype._readdirEntries = function (t, r, e) {
    if (!this.aborted) {
      if (!this.mark && !this.stat) for (var i = 0; i < r.length; i++) {
        var a = r[i];
        t === "/" ? a = t + a : a = t + "/" + a, this.cache[a] = !0;
      }
      return this.cache[t] = r, e(null, r);
    }
  };

  u.prototype._readdirError = function (t, r, e) {
    if (!this.aborted) {
      switch (r.code) {
        case "ENOTSUP":
        case "ENOTDIR":
          var i = this._makeAbs(t);

          if (this.cache[i] = "FILE", i === this.cwdAbs) {
            var a = new Error(r.code + " invalid cwd " + this.cwd);
            a.path = this.cwd, a.code = r.code, this.emit("error", a), this.abort();
          }

          break;

        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
          this.cache[this._makeAbs(t)] = !1;
          break;

        default:
          this.cache[this._makeAbs(t)] = !1, this.strict && (this.emit("error", r), this.abort()), this.silent || console.error("glob error", r);
          break;
      }

      return e();
    }
  };

  u.prototype._processGlobStar = function (t, r, e, i, a, n, s) {
    var h = this;

    this._readdir(e, n, function (o, l) {
      h._processGlobStar2(t, r, e, i, a, n, l, s);
    });
  };

  u.prototype._processGlobStar2 = function (t, r, e, i, a, n, s, h) {
    if (!s) return h();

    var o = i.slice(1),
        l = t ? [t] : [],
        _ = l.concat(o);

    this._process(_, a, !1, h);

    var g = this.symlinks[e],
        f = s.length;
    if (g && n) return h();

    for (var c = 0; c < f; c++) {
      var v = s[c];

      if (!(v.charAt(0) === "." && !this.dot)) {
        var p = l.concat(s[c], o);

        this._process(p, a, !0, h);

        var w = l.concat(s[c], i);

        this._process(w, a, !0, h);
      }
    }

    h();
  };

  u.prototype._processSimple = function (t, r, e) {
    var i = this;

    this._stat(t, function (a, n) {
      i._processSimple2(t, r, a, n, e);
    });
  };

  u.prototype._processSimple2 = function (t, r, e, i, a) {
    if (this.matches[r] || (this.matches[r] = Object.create(null)), !i) return a();

    if (t && S(t) && !this.nomount) {
      var n = /[\/\\]$/.test(t);
      t.charAt(0) === "/" ? t = C.join(this.root, t) : (t = C.resolve(this.root, t), n && (t += "/"));
    }

    __Process$.platform === "win32" && (t = t.replace(/\\/g, "/")), this._emitMatch(r, t), a();
  };

  u.prototype._stat = function (t, r) {
    var e = this._makeAbs(t),
        i = t.slice(-1) === "/";

    if (t.length > this.maxLength) return r();

    if (!this.stat && F(this.cache, e)) {
      var a = this.cache[e];
      if (Array.isArray(a) && (a = "DIR"), !i || a === "DIR") return r(null, a);
      if (i && a === "FILE") return r();
    }

    var n,
        s = this.statCache[e];

    if (s !== void 0) {
      if (s === !1) return r(null, s);
      var h = s.isDirectory() ? "DIR" : "FILE";
      return i && h === "FILE" ? r() : r(null, h, s);
    }

    var o = this,
        l = Q("stat\0" + e, _);
    l && o.fs.lstat(e, l);

    function _(g, f) {
      if (f && f.isSymbolicLink()) return o.fs.stat(e, function (c, v) {
        c ? o._stat2(t, e, null, f, r) : o._stat2(t, e, c, v, r);
      });

      o._stat2(t, e, g, f, r);
    }

    m(_, "lstatcb_");
  };

  u.prototype._stat2 = function (t, r, e, i, a) {
    if (e && (e.code === "ENOENT" || e.code === "ENOTDIR")) return this.statCache[r] = !1, a();
    var n = t.slice(-1) === "/";
    if (this.statCache[r] = i, r.slice(-1) === "/" && i && !i.isDirectory()) return a(null, !1, i);
    var s = !0;
    return i && (s = i.isDirectory() ? "DIR" : "FILE"), this.cache[r] = this.cache[r] || s, n && s === "FILE" ? a() : a(null, s, i);
  };
});
var Z = $(N()),
    x = $(N()),
    {
  sync: $t,
  glob: Wt,
  hasMagic: Ut,
  Glob: Bt
} = x,
    {
  default: Nt,
  ...jt
} = x,
    Kt = Z.default ?? Nt ?? jt;
export { Bt as Glob, Kt as default, Wt as glob, Ut as hasMagic, $t as sync };