/* esm.sh - esbuild bundle(css-element-queries@1.2.3) deno production */
var J = Object.create;
var k = Object.defineProperty;
var U = Object.getOwnPropertyDescriptor;
var X = Object.getOwnPropertyNames;
var Y = Object.getPrototypeOf,
    Z = Object.prototype.hasOwnProperty;

var H = (u, r) => () => (r || u((r = {
  exports: {}
}).exports, r), r.exports);

var ee = (u, r, O, f) => {
  if (r && typeof r == "object" || typeof r == "function") for (let m of X(r)) !Z.call(u, m) && m !== O && k(u, m, {
    get: () => r[m],
    enumerable: !(f = U(r, m)) || f.enumerable
  });
  return u;
};

var te = (u, r, O) => (O = u != null ? J(Y(u)) : {}, ee(r || !u || !u.__esModule ? k(O, "default", {
  value: u,
  enumerable: !0
}) : O, u));

var F = H((N, $) => {
  "use strict";

  (function (u, r) {
    typeof define == "function" && define.amd ? define(r) : typeof N == "object" ? $.exports = r() : u.ResizeSensor = r();
  })(typeof document < "u" ? window : N, function () {
    if (typeof window > "u") return null;

    var u = typeof document < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")(),
        r = u.requestAnimationFrame || u.mozRequestAnimationFrame || u.webkitRequestAnimationFrame || function (d) {
      return u.setTimeout(d, 20);
    },
        O = u.cancelAnimationFrame || u.mozCancelAnimationFrame || u.webkitCancelAnimationFrame || function (d) {
      u.clearTimeout(d);
    };

    function f(d, h) {
      var s = Object.prototype.toString.call(d),
          A = s === "[object Array]" || s === "[object NodeList]" || s === "[object HTMLCollection]" || s === "[object Object]" || typeof jQuery < "u" && d instanceof jQuery || typeof Elements < "u" && d instanceof Elements,
          L = 0,
          n = d.length;
      if (A) for (; L < n; L++) h(d[L]);else h(d);
    }

    function m(d) {
      if (!d.getBoundingClientRect) return {
        width: d.offsetWidth,
        height: d.offsetHeight
      };
      var h = d.getBoundingClientRect();
      return {
        width: Math.round(h.width),
        height: Math.round(h.height)
      };
    }

    function b(d, h) {
      Object.keys(h).forEach(function (s) {
        d.style[s] = h[s];
      });
    }

    var q = function (d, h) {
      var s = 0;

      function A() {
        var n = [];

        this.add = function (C) {
          n.push(C);
        };

        var g, Q;
        this.call = function (C) {
          for (g = 0, Q = n.length; g < Q; g++) n[g].call(this, C);
        }, this.remove = function (C) {
          var z = [];

          for (g = 0, Q = n.length; g < Q; g++) n[g] !== C && z.push(n[g]);

          n = z;
        }, this.length = function () {
          return n.length;
        };
      }

      function L(n, g) {
        if (!!n) {
          if (n.resizedAttached) {
            n.resizedAttached.add(g);
            return;
          }

          n.resizedAttached = new A(), n.resizedAttached.add(g), n.resizeSensor = document.createElement("div"), n.resizeSensor.dir = "ltr", n.resizeSensor.className = "resize-sensor";
          var Q = {
            pointerEvents: "none",
            position: "absolute",
            left: "0px",
            top: "0px",
            right: "0px",
            bottom: "0px",
            overflow: "hidden",
            zIndex: "-1",
            visibility: "hidden",
            maxWidth: "100%"
          },
              C = {
            position: "absolute",
            left: "0px",
            top: "0px",
            transition: "0s"
          };
          b(n.resizeSensor, Q);
          var z = document.createElement("div");
          z.className = "resize-sensor-expand", b(z, Q);
          var R = document.createElement("div");
          b(R, C), z.appendChild(R);
          var E = document.createElement("div");
          E.className = "resize-sensor-shrink", b(E, Q);
          var T = document.createElement("div");
          b(T, C), b(T, {
            width: "200%",
            height: "200%"
          }), E.appendChild(T), n.resizeSensor.appendChild(z), n.resizeSensor.appendChild(E), n.appendChild(n.resizeSensor);
          var e = window.getComputedStyle(n),
              t = e ? e.getPropertyValue("position") : null;
          t !== "absolute" && t !== "relative" && t !== "fixed" && t !== "sticky" && (n.style.position = "relative");
          var i = !1,
              o = 0,
              a = m(n),
              l = 0,
              w = 0,
              c = !0;
          s = 0;

          var S = function () {
            var y = n.offsetWidth,
                M = n.offsetHeight;
            R.style.width = y + 10 + "px", R.style.height = M + 10 + "px", z.scrollLeft = y + 10, z.scrollTop = M + 10, E.scrollLeft = y + 10, E.scrollTop = M + 10;
          },
              v = function () {
            if (c) {
              var y = n.offsetWidth === 0 && n.offsetHeight === 0;

              if (y) {
                s || (s = r(function () {
                  s = 0, v();
                }));
                return;
              } else c = !1;
            }

            S();
          };

          n.resizeSensor.resetSensor = v;

          var I = function () {
            o = 0, i && (l = a.width, w = a.height, n.resizedAttached && n.resizedAttached.call(a));
          },
              x = function () {
            a = m(n), i = a.width !== l || a.height !== w, i && !o && (o = r(I)), v();
          },
              p = function (y, M, P) {
            y.attachEvent ? y.attachEvent("on" + M, P) : y.addEventListener(M, P);
          };

          p(z, "scroll", x), p(E, "scroll", x), s = r(function () {
            s = 0, v();
          });
        }
      }

      f(d, function (n) {
        L(n, h);
      }), this.detach = function (n) {
        s || (O(s), s = 0), q.detach(d, n);
      }, this.reset = function () {
        d.resizeSensor.resetSensor();
      };
    };

    if (q.reset = function (d) {
      f(d, function (h) {
        h.resizeSensor.resetSensor();
      });
    }, q.detach = function (d, h) {
      f(d, function (s) {
        !s || s.resizedAttached && typeof h == "function" && (s.resizedAttached.remove(h), s.resizedAttached.length()) || s.resizeSensor && (s.contains(s.resizeSensor) && s.removeChild(s.resizeSensor), delete s.resizeSensor, delete s.resizedAttached);
      });
    }, typeof MutationObserver < "u") {
      var j = new MutationObserver(function (d) {
        for (var h in d) if (d.hasOwnProperty(h)) for (var s = d[h].addedNodes, A = 0; A < s.length; A++) s[A].resizeSensor && q.reset(s[A]);
      });
      document.addEventListener("DOMContentLoaded", function (d) {
        j.observe(document.body, {
          childList: !0,
          subtree: !0
        });
      });
    }

    return q;
  });
});

var _ = H((W, V) => {
  "use strict";

  (function (u, r) {
    typeof define == "function" && define.amd ? define(["./ResizeSensor.js"], r) : typeof W == "object" ? V.exports = r(F()) : (u.ElementQueries = r(u.ResizeSensor), u.ElementQueries.listen());
  })(typeof document < "u" ? window : W, function (u) {
    var r = function () {
      var f,
          m = {},
          b = [];

      function q(e) {
        e || (e = document.documentElement);
        var t = window.getComputedStyle(e, null).fontSize;
        return parseFloat(t) || 16;
      }

      function j(e) {
        if (!e.getBoundingClientRect) return {
          width: e.offsetWidth,
          height: e.offsetHeight
        };
        var t = e.getBoundingClientRect();
        return {
          width: Math.round(t.width),
          height: Math.round(t.height)
        };
      }

      function d(e, t) {
        var i = t.split(/\d/),
            o = i[i.length - 1];

        switch (t = parseFloat(t), o) {
          case "px":
            return t;

          case "em":
            return t * q(e);

          case "rem":
            return t * q();

          case "vw":
            return t * document.documentElement.clientWidth / 100;

          case "vh":
            return t * document.documentElement.clientHeight / 100;

          case "vmin":
          case "vmax":
            var a = document.documentElement.clientWidth / 100,
                l = document.documentElement.clientHeight / 100,
                w = Math[o === "vmin" ? "min" : "max"];
            return t * w(a, l);

          default:
            return t;
        }
      }

      function h(e, t) {
        this.element = e;
        var i,
            o,
            a,
            l,
            w,
            c,
            S,
            v,
            I = ["min-width", "min-height", "max-width", "max-height"];

        this.call = function () {
          a = j(this.element), c = {};

          for (i in m[t]) !m[t].hasOwnProperty(i) || (o = m[t][i], l = d(this.element, o.value), w = o.property === "width" ? a.width : a.height, v = o.mode + "-" + o.property, S = "", o.mode === "min" && w >= l && (S += o.value), o.mode === "max" && w <= l && (S += o.value), c[v] || (c[v] = ""), S && (" " + c[v] + " ").indexOf(" " + S + " ") === -1 && (c[v] += " " + S));

          for (var x in I) !I.hasOwnProperty(x) || (c[I[x]] ? this.element.setAttribute(I[x], c[I[x]].substr(1)) : this.element.removeAttribute(I[x]));
        };
      }

      function s(e, t) {
        e.elementQueriesSetupInformation || (e.elementQueriesSetupInformation = new h(e, t)), e.elementQueriesSensor || (e.elementQueriesSensor = new u(e, function () {
          e.elementQueriesSetupInformation.call();
        }));
      }

      function A(e, t, i, o) {
        if (typeof m[e] > "u") {
          m[e] = [];
          var a = b.length;
          f.innerHTML += `
` + e + " {animation: 0.1s element-queries;}", f.innerHTML += `
` + e + " > .resize-sensor {min-width: " + a + "px;}", b.push(e);
        }

        m[e].push({
          mode: t,
          property: i,
          value: o
        });
      }

      function L(e) {
        var t;
        if (document.querySelectorAll && (t = e ? e.querySelectorAll.bind(e) : document.querySelectorAll.bind(document)), !t && typeof $$ < "u" && (t = $$), !t && typeof jQuery < "u" && (t = jQuery), !t) throw "No document.querySelectorAll, jQuery or Mootools's $$ found.";
        return t;
      }

      function n(e) {
        var t = L(e);

        for (var i in m) if (m.hasOwnProperty(i)) for (var o = t(i, e), a = 0, l = o.length; a < l; a++) s(o[a], i);
      }

      function g(e) {
        var t = [],
            i = [],
            o = [],
            a = 0,
            l = -1,
            w = [];

        for (var c in e.children) if (!!e.children.hasOwnProperty(c) && e.children[c].tagName && e.children[c].tagName.toLowerCase() === "img") {
          t.push(e.children[c]);
          var S = e.children[c].getAttribute("min-width") || e.children[c].getAttribute("data-min-width"),
              v = e.children[c].getAttribute("data-src") || e.children[c].getAttribute("url");
          o.push(v);
          var I = {
            minWidth: S
          };
          i.push(I), S ? e.children[c].style.display = "none" : (a = t.length - 1, e.children[c].style.display = "block");
        }

        l = a;

        function x() {
          var p = !1,
              y;

          for (y in t) !t.hasOwnProperty(y) || i[y].minWidth && e.offsetWidth > i[y].minWidth && (p = y);

          if (p || (p = a), l !== p) {
            if (w[p]) t[l].style.display = "none", t[p].style.display = "block", l = p;else {
              var M = new Image();
              M.onload = function () {
                t[p].src = o[p], t[l].style.display = "none", t[p].style.display = "block", w[p] = !0, l = p;
              }, M.src = o[p];
            }
          } else t[p].src = o[p];
        }

        e.resizeSensorInstance = new u(e, x), x();
      }

      function Q() {
        for (var e = L(), t = e("[data-responsive-image],[responsive-image]"), i = 0, o = t.length; i < o; i++) g(t[i]);
      }

      var C = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi,
          z = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;

      function R(e) {
        var t, i, o, a;

        for (e = e.replace(/'/g, '"'); (t = C.exec(e)) !== null;) for (i = t[1] + t[3], o = t[2]; (a = z.exec(o)) !== null;) A(i, a[1], a[2], a[3]);
      }

      function E(e) {
        var t = "";
        if (!!e) if (typeof e == "string") e = e.toLowerCase(), (e.indexOf("min-width") !== -1 || e.indexOf("max-width") !== -1) && R(e);else for (var i = 0, o = e.length; i < o; i++) e[i].type === 1 ? (t = e[i].selectorText || e[i].cssText, (t.indexOf("min-height") !== -1 || t.indexOf("max-height") !== -1 || t.indexOf("min-width") !== -1 || t.indexOf("max-width") !== -1) && R(t)) : e[i].type === 4 ? E(e[i].cssRules || e[i].rules) : e[i].type === 3 && e[i].styleSheet.hasOwnProperty("cssRules") && E(e[i].styleSheet.cssRules);
      }

      var T = !1;
      this.init = function () {
        var e = "animationstart";
        typeof document.documentElement.style.webkitAnimationName < "u" ? e = "webkitAnimationStart" : typeof document.documentElement.style.MozAnimationName < "u" ? e = "mozanimationstart" : typeof document.documentElement.style.OAnimationName < "u" && (e = "oanimationstart"), document.body.addEventListener(e, function (o) {
          var a = o.target,
              l = a && window.getComputedStyle(a, null),
              w = l && l.getPropertyValue("animation-name"),
              c = w && w.indexOf("element-queries") !== -1;

          if (c) {
            a.elementQueriesSensor = new u(a, function () {
              a.elementQueriesSetupInformation && a.elementQueriesSetupInformation.call();
            });
            var S = window.getComputedStyle(a.resizeSensor, null),
                v = S.getPropertyValue("min-width");
            v = parseInt(v.replace("px", "")), s(o.target, b[v]);
          }
        }), T || (f = document.createElement("style"), f.type = "text/css", f.innerHTML = "[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}", f.innerHTML += `
@keyframes element-queries { 0% { visibility: inherit; } }`, document.getElementsByTagName("head")[0].appendChild(f), T = !0);

        for (var t = 0, i = document.styleSheets.length; t < i; t++) try {
          document.styleSheets[t].href && document.styleSheets[t].href.indexOf("file://") === 0 && console.warn("CssElementQueries: unable to parse local css files, " + document.styleSheets[t].href), E(document.styleSheets[t].cssRules || document.styleSheets[t].rules || document.styleSheets[t].cssText);
        } catch {}

        Q();
      }, this.findElementQueriesElements = function (e) {
        n(e);
      }, this.update = function () {
        this.init();
      };
    };

    r.update = function () {
      r.instance.update();
    }, r.detach = function (f) {
      f.elementQueriesSetupInformation ? (f.elementQueriesSensor.detach(), delete f.elementQueriesSetupInformation, delete f.elementQueriesSensor) : f.resizeSensorInstance && (f.resizeSensorInstance.detach(), delete f.resizeSensorInstance);
    }, r.init = function () {
      r.instance || (r.instance = new r()), r.instance.init();
    };

    var O = function (f) {
      if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, !1);else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) var m = setInterval(function () {
        /loaded|complete/i.test(document.readyState) && (f(), clearInterval(m));
      }, 10);else window.onload = f;
    };

    return r.findElementQueriesElements = function (f) {
      r.instance.findElementQueriesElements(f);
    }, r.listen = function () {
      O(r.init);
    }, r;
  });
});

var D = H((re, B) => {
  B.exports = {
    ResizeSensor: F(),
    ElementQueries: _()
  };
});
var G = te(D()),
    {
  ResizeSensor: oe,
  ElementQueries: se
} = G,
    {
  default: K,
  ...ne
} = G,
    ae = K !== void 0 ? K : ne;
export { se as ElementQueries, oe as ResizeSensor, ae as default };