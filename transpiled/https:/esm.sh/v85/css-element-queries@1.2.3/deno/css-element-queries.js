/* esm.sh - esbuild bundle(css-element-queries@1.2.3) deno production */
var Y = Object.create;
var N = Object.defineProperty;
var Z = Object.getOwnPropertyDescriptor;
var _ = Object.getOwnPropertyNames;
var ee = Object.getPrototypeOf,
    te = Object.prototype.hasOwnProperty;

var c = (d, n) => N(d, "name", {
  value: n,
  configurable: !0
});

var F = (d, n) => () => (n || d((n = {
  exports: {}
}).exports, n), n.exports);

var ne = (d, n, M, f) => {
  if (n && typeof n == "object" || typeof n == "function") for (let p of _(n)) !te.call(d, p) && p !== M && N(d, p, {
    get: () => n[p],
    enumerable: !(f = Z(n, p)) || f.enumerable
  });
  return d;
};

var B = (d, n, M) => (M = d != null ? Y(ee(d)) : {}, ne(n || !d || !d.__esModule ? N(M, "default", {
  value: d,
  enumerable: !0
}) : M, d));

var $ = F((W, D) => {
  "use strict";

  (function (d, n) {
    typeof define == "function" && define.amd ? define(n) : typeof W == "object" ? D.exports = n() : d.ResizeSensor = n();
  })(typeof document < "u" ? window : W, function () {
    if (typeof window > "u") return null;

    var d = typeof document < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")(),
        n = d.requestAnimationFrame || d.mozRequestAnimationFrame || d.webkitRequestAnimationFrame || function (u) {
      return d.setTimeout(u, 20);
    },
        M = d.cancelAnimationFrame || d.mozCancelAnimationFrame || d.webkitCancelAnimationFrame || function (u) {
      d.clearTimeout(u);
    };

    function f(u, l) {
      var s = Object.prototype.toString.call(u),
          Q = s === "[object Array]" || s === "[object NodeList]" || s === "[object HTMLCollection]" || s === "[object Object]" || typeof jQuery < "u" && u instanceof jQuery || typeof Elements < "u" && u instanceof Elements,
          R = 0,
          i = u.length;
      if (Q) for (; R < i; R++) l(u[R]);else l(u);
    }

    c(f, "forEachElement");

    function p(u) {
      if (!u.getBoundingClientRect) return {
        width: u.offsetWidth,
        height: u.offsetHeight
      };
      var l = u.getBoundingClientRect();
      return {
        width: Math.round(l.width),
        height: Math.round(l.height)
      };
    }

    c(p, "getElementSize");

    function A(u, l) {
      Object.keys(l).forEach(function (s) {
        u.style[s] = l[s];
      });
    }

    c(A, "setStyle");
    var L = c(function (u, l) {
      var s = 0;

      function Q() {
        var i = [];

        this.add = function (I) {
          i.push(I);
        };

        var w, C;
        this.call = function (I) {
          for (w = 0, C = i.length; w < C; w++) i[w].call(this, I);
        }, this.remove = function (I) {
          var E = [];

          for (w = 0, C = i.length; w < C; w++) i[w] !== I && E.push(i[w]);

          i = E;
        }, this.length = function () {
          return i.length;
        };
      }

      c(Q, "EventQueue");

      function R(i, w) {
        if (!!i) {
          if (i.resizedAttached) {
            i.resizedAttached.add(w);
            return;
          }

          i.resizedAttached = new Q(), i.resizedAttached.add(w), i.resizeSensor = document.createElement("div"), i.resizeSensor.dir = "ltr", i.resizeSensor.className = "resize-sensor";
          var C = {
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
              I = {
            position: "absolute",
            left: "0px",
            top: "0px",
            transition: "0s"
          };
          A(i.resizeSensor, C);
          var E = document.createElement("div");
          E.className = "resize-sensor-expand", A(E, C);
          var T = document.createElement("div");
          A(T, I), E.appendChild(T);
          var x = document.createElement("div");
          x.className = "resize-sensor-shrink", A(x, C);
          var j = document.createElement("div");
          A(j, I), A(j, {
            width: "200%",
            height: "200%"
          }), x.appendChild(j), i.resizeSensor.appendChild(E), i.resizeSensor.appendChild(x), i.appendChild(i.resizeSensor);
          var e = window.getComputedStyle(i),
              t = e ? e.getPropertyValue("position") : null;
          t !== "absolute" && t !== "relative" && t !== "fixed" && t !== "sticky" && (i.style.position = "relative");
          var r = !1,
              o = 0,
              a = p(i),
              m = 0,
              S = 0,
              h = !0;
          s = 0;
          var z = c(function () {
            var g = i.offsetWidth,
                q = i.offsetHeight;
            T.style.width = g + 10 + "px", T.style.height = q + 10 + "px", E.scrollLeft = g + 10, E.scrollTop = q + 10, x.scrollLeft = g + 10, x.scrollTop = q + 10;
          }, "resetExpandShrink"),
              y = c(function () {
            if (h) {
              var g = i.offsetWidth === 0 && i.offsetHeight === 0;

              if (g) {
                s || (s = n(function () {
                  s = 0, y();
                }));
                return;
              } else h = !1;
            }

            z();
          }, "reset");
          i.resizeSensor.resetSensor = y;
          var O = c(function () {
            o = 0, r && (m = a.width, S = a.height, i.resizedAttached && i.resizedAttached.call(a));
          }, "onResized"),
              b = c(function () {
            a = p(i), r = a.width !== m || a.height !== S, r && !o && (o = n(O)), y();
          }, "onScroll"),
              v = c(function (g, q, V) {
            g.attachEvent ? g.attachEvent("on" + q, V) : g.addEventListener(q, V);
          }, "addEvent");
          v(E, "scroll", b), v(x, "scroll", b), s = n(function () {
            s = 0, y();
          });
        }
      }

      c(R, "attachResizeEvent"), f(u, function (i) {
        R(i, l);
      }), this.detach = function (i) {
        s || (M(s), s = 0), L.detach(u, i);
      }, this.reset = function () {
        u.resizeSensor.resetSensor();
      };
    }, "ResizeSensor");

    if (L.reset = function (u) {
      f(u, function (l) {
        l.resizeSensor.resetSensor();
      });
    }, L.detach = function (u, l) {
      f(u, function (s) {
        !s || s.resizedAttached && typeof l == "function" && (s.resizedAttached.remove(l), s.resizedAttached.length()) || s.resizeSensor && (s.contains(s.resizeSensor) && s.removeChild(s.resizeSensor), delete s.resizeSensor, delete s.resizedAttached);
      });
    }, typeof MutationObserver < "u") {
      var H = new MutationObserver(function (u) {
        for (var l in u) if (u.hasOwnProperty(l)) for (var s = u[l].addedNodes, Q = 0; Q < s.length; Q++) s[Q].resizeSensor && L.reset(s[Q]);
      });
      document.addEventListener("DOMContentLoaded", function (u) {
        H.observe(document.body, {
          childList: !0,
          subtree: !0
        });
      });
    }

    return L;
  });
});
var G = F((P, K) => {
  "use strict";

  (function (d, n) {
    typeof define == "function" && define.amd ? define(["./ResizeSensor.js"], n) : typeof P == "object" ? K.exports = n($()) : (d.ElementQueries = n(d.ResizeSensor), d.ElementQueries.listen());
  })(typeof document < "u" ? window : P, function (d) {
    var n = c(function () {
      var f,
          p = {},
          A = [];

      function L(e) {
        e || (e = document.documentElement);
        var t = window.getComputedStyle(e, null).fontSize;
        return parseFloat(t) || 16;
      }

      c(L, "getEmSize");

      function H(e) {
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

      c(H, "getElementSize");

      function u(e, t) {
        var r = t.split(/\d/),
            o = r[r.length - 1];

        switch (t = parseFloat(t), o) {
          case "px":
            return t;

          case "em":
            return t * L(e);

          case "rem":
            return t * L();

          case "vw":
            return t * document.documentElement.clientWidth / 100;

          case "vh":
            return t * document.documentElement.clientHeight / 100;

          case "vmin":
          case "vmax":
            var a = document.documentElement.clientWidth / 100,
                m = document.documentElement.clientHeight / 100,
                S = Math[o === "vmin" ? "min" : "max"];
            return t * S(a, m);

          default:
            return t;
        }
      }

      c(u, "convertToPx");

      function l(e, t) {
        this.element = e;
        var r,
            o,
            a,
            m,
            S,
            h,
            z,
            y,
            O = ["min-width", "min-height", "max-width", "max-height"];

        this.call = function () {
          a = H(this.element), h = {};

          for (r in p[t]) !p[t].hasOwnProperty(r) || (o = p[t][r], m = u(this.element, o.value), S = o.property === "width" ? a.width : a.height, y = o.mode + "-" + o.property, z = "", o.mode === "min" && S >= m && (z += o.value), o.mode === "max" && S <= m && (z += o.value), h[y] || (h[y] = ""), z && (" " + h[y] + " ").indexOf(" " + z + " ") === -1 && (h[y] += " " + z));

          for (var b in O) !O.hasOwnProperty(b) || (h[O[b]] ? this.element.setAttribute(O[b], h[O[b]].substr(1)) : this.element.removeAttribute(O[b]));
        };
      }

      c(l, "SetupInformation");

      function s(e, t) {
        e.elementQueriesSetupInformation || (e.elementQueriesSetupInformation = new l(e, t)), e.elementQueriesSensor || (e.elementQueriesSensor = new d(e, function () {
          e.elementQueriesSetupInformation.call();
        }));
      }

      c(s, "setupElement");

      function Q(e, t, r, o) {
        if (typeof p[e] > "u") {
          p[e] = [];
          var a = A.length;
          f.innerHTML += `
` + e + " {animation: 0.1s element-queries;}", f.innerHTML += `
` + e + " > .resize-sensor {min-width: " + a + "px;}", A.push(e);
        }

        p[e].push({
          mode: t,
          property: r,
          value: o
        });
      }

      c(Q, "queueQuery");

      function R(e) {
        var t;
        if (document.querySelectorAll && (t = e ? e.querySelectorAll.bind(e) : document.querySelectorAll.bind(document)), !t && typeof $$ < "u" && (t = $$), !t && typeof jQuery < "u" && (t = jQuery), !t) throw "No document.querySelectorAll, jQuery or Mootools's $$ found.";
        return t;
      }

      c(R, "getQuery");

      function i(e) {
        var t = R(e);

        for (var r in p) if (p.hasOwnProperty(r)) for (var o = t(r, e), a = 0, m = o.length; a < m; a++) s(o[a], r);
      }

      c(i, "findElementQueriesElements");

      function w(e) {
        var t = [],
            r = [],
            o = [],
            a = 0,
            m = -1,
            S = [];

        for (var h in e.children) if (!!e.children.hasOwnProperty(h) && e.children[h].tagName && e.children[h].tagName.toLowerCase() === "img") {
          t.push(e.children[h]);
          var z = e.children[h].getAttribute("min-width") || e.children[h].getAttribute("data-min-width"),
              y = e.children[h].getAttribute("data-src") || e.children[h].getAttribute("url");
          o.push(y);
          var O = {
            minWidth: z
          };
          r.push(O), z ? e.children[h].style.display = "none" : (a = t.length - 1, e.children[h].style.display = "block");
        }

        m = a;

        function b() {
          var v = !1,
              g;

          for (g in t) !t.hasOwnProperty(g) || r[g].minWidth && e.offsetWidth > r[g].minWidth && (v = g);

          if (v || (v = a), m !== v) {
            if (S[v]) t[m].style.display = "none", t[v].style.display = "block", m = v;else {
              var q = new Image();
              q.onload = function () {
                t[v].src = o[v], t[m].style.display = "none", t[v].style.display = "block", S[v] = !0, m = v;
              }, q.src = o[v];
            }
          } else t[v].src = o[v];
        }

        c(b, "check"), e.resizeSensorInstance = new d(e, b), b();
      }

      c(w, "attachResponsiveImage");

      function C() {
        for (var e = R(), t = e("[data-responsive-image],[responsive-image]"), r = 0, o = t.length; r < o; r++) w(t[r]);
      }

      c(C, "findResponsiveImages");
      var I = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi,
          E = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;

      function T(e) {
        var t, r, o, a;

        for (e = e.replace(/'/g, '"'); (t = I.exec(e)) !== null;) for (r = t[1] + t[3], o = t[2]; (a = E.exec(o)) !== null;) Q(r, a[1], a[2], a[3]);
      }

      c(T, "extractQuery");

      function x(e) {
        var t = "";
        if (!!e) if (typeof e == "string") e = e.toLowerCase(), (e.indexOf("min-width") !== -1 || e.indexOf("max-width") !== -1) && T(e);else for (var r = 0, o = e.length; r < o; r++) e[r].type === 1 ? (t = e[r].selectorText || e[r].cssText, (t.indexOf("min-height") !== -1 || t.indexOf("max-height") !== -1 || t.indexOf("min-width") !== -1 || t.indexOf("max-width") !== -1) && T(t)) : e[r].type === 4 ? x(e[r].cssRules || e[r].rules) : e[r].type === 3 && e[r].styleSheet.hasOwnProperty("cssRules") && x(e[r].styleSheet.cssRules);
      }

      c(x, "readRules");
      var j = !1;
      this.init = function () {
        var e = "animationstart";
        typeof document.documentElement.style.webkitAnimationName < "u" ? e = "webkitAnimationStart" : typeof document.documentElement.style.MozAnimationName < "u" ? e = "mozanimationstart" : typeof document.documentElement.style.OAnimationName < "u" && (e = "oanimationstart"), document.body.addEventListener(e, function (o) {
          var a = o.target,
              m = a && window.getComputedStyle(a, null),
              S = m && m.getPropertyValue("animation-name"),
              h = S && S.indexOf("element-queries") !== -1;

          if (h) {
            a.elementQueriesSensor = new d(a, function () {
              a.elementQueriesSetupInformation && a.elementQueriesSetupInformation.call();
            });
            var z = window.getComputedStyle(a.resizeSensor, null),
                y = z.getPropertyValue("min-width");
            y = parseInt(y.replace("px", "")), s(o.target, A[y]);
          }
        }), j || (f = document.createElement("style"), f.type = "text/css", f.innerHTML = "[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}", f.innerHTML += `
@keyframes element-queries { 0% { visibility: inherit; } }`, document.getElementsByTagName("head")[0].appendChild(f), j = !0);

        for (var t = 0, r = document.styleSheets.length; t < r; t++) try {
          document.styleSheets[t].href && document.styleSheets[t].href.indexOf("file://") === 0 && console.warn("CssElementQueries: unable to parse local css files, " + document.styleSheets[t].href), x(document.styleSheets[t].cssRules || document.styleSheets[t].rules || document.styleSheets[t].cssText);
        } catch {}

        C();
      }, this.findElementQueriesElements = function (e) {
        i(e);
      }, this.update = function () {
        this.init();
      };
    }, "ElementQueries");
    n.update = function () {
      n.instance.update();
    }, n.detach = function (f) {
      f.elementQueriesSetupInformation ? (f.elementQueriesSensor.detach(), delete f.elementQueriesSetupInformation, delete f.elementQueriesSensor) : f.resizeSensorInstance && (f.resizeSensorInstance.detach(), delete f.resizeSensorInstance);
    }, n.init = function () {
      n.instance || (n.instance = new n()), n.instance.init();
    };
    var M = c(function (f) {
      if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, !1);else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) var p = setInterval(function () {
        /loaded|complete/i.test(document.readyState) && (f(), clearInterval(p));
      }, 10);else window.onload = f;
    }, "domLoaded");
    return n.findElementQueriesElements = function (f) {
      n.instance.findElementQueriesElements(f);
    }, n.listen = function () {
      M(n.init);
    }, n;
  });
});
var k = F((se, J) => {
  J.exports = {
    ResizeSensor: $(),
    ElementQueries: G()
  };
});
var U = B(k()),
    X = B(k()),
    {
  ResizeSensor: ae,
  ElementQueries: de
} = X,
    {
  default: ie,
  ...re
} = X,
    ue = U.default ?? ie ?? re;
export { de as ElementQueries, ae as ResizeSensor, ue as default };