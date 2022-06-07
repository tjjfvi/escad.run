/* esm.sh - esbuild bundle(ansi-styles@3.2.1) esnext production */
import __color_convert$ from "/transpiled/https://esm.sh/v85/color-convert@1.9.3/esnext/color-convert.js";
var h = Object.create;
var m = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var $ = Object.getOwnPropertyNames;
var C = Object.getPrototypeOf,
    w = Object.prototype.hasOwnProperty;

var i = (o, e) => m(o, "name", {
  value: e,
  configurable: !0
}),
    k = (o => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(o, {
  get: (e, n) => (typeof require != "undefined" ? require : e)[n]
}) : o)(function (o) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + o + '" is not supported');
});

var j = (o, e) => () => (e || o((e = {
  exports: {}
}).exports, e), e.exports);

var O = (o, e, n, g) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of $(e)) !w.call(o, r) && r !== n && m(o, r, {
    get: () => e[r],
    enumerable: !(g = p(e, r)) || g.enumerable
  });
  return o;
};

var B = (o, e, n) => (n = o != null ? h(C(o)) : {}, O(e || !o || !o.__esModule ? m(n, "default", {
  value: o,
  enumerable: !0
}) : n, o));

var f = j((G, y) => {
  "use strict";

  var a = __color_convert$,
      c = i((o, e) => function () {
    return `\x1B[${o.apply(a, arguments) + e}m`;
  }, "wrapAnsi16"),
      b = i((o, e) => function () {
    let n = o.apply(a, arguments);
    return `\x1B[${38 + e};5;${n}m`;
  }, "wrapAnsi256"),
      u = i((o, e) => function () {
    let n = o.apply(a, arguments);
    return `\x1B[${38 + e};2;${n[0]};${n[1]};${n[2]}m`;
  }, "wrapAnsi16m");

  function v() {
    let o = new Map(),
        e = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    e.color.grey = e.color.gray;

    for (let r of Object.keys(e)) {
      let t = e[r];

      for (let s of Object.keys(t)) {
        let l = t[s];
        e[s] = {
          open: `\x1B[${l[0]}m`,
          close: `\x1B[${l[1]}m`
        }, t[s] = e[s], o.set(l[0], l[1]);
      }

      Object.defineProperty(e, r, {
        value: t,
        enumerable: !1
      }), Object.defineProperty(e, "codes", {
        value: o,
        enumerable: !1
      });
    }

    let n = i(r => r, "ansi2ansi"),
        g = i((r, t, s) => [r, t, s], "rgb2rgb");
    e.color.close = "\x1B[39m", e.bgColor.close = "\x1B[49m", e.color.ansi = {
      ansi: c(n, 0)
    }, e.color.ansi256 = {
      ansi256: b(n, 0)
    }, e.color.ansi16m = {
      rgb: u(g, 0)
    }, e.bgColor.ansi = {
      ansi: c(n, 10)
    }, e.bgColor.ansi256 = {
      ansi256: b(n, 10)
    }, e.bgColor.ansi16m = {
      rgb: u(g, 10)
    };

    for (let r of Object.keys(a)) {
      if (typeof a[r] != "object") continue;
      let t = a[r];
      r === "ansi16" && (r = "ansi"), "ansi16" in t && (e.color.ansi[r] = c(t.ansi16, 0), e.bgColor.ansi[r] = c(t.ansi16, 10)), "ansi256" in t && (e.color.ansi256[r] = b(t.ansi256, 0), e.bgColor.ansi256[r] = b(t.ansi256, 10)), "rgb" in t && (e.color.ansi16m[r] = u(t.rgb, 0), e.bgColor.ansi16m[r] = u(t.rgb, 10));
    }

    return e;
  }

  i(v, "assembleStyles");
  Object.defineProperty(y, "exports", {
    enumerable: !0,
    get: v
  });
});
var d = B(f()),
    A = B(f()),
    {
  default: M,
  ...P
} = A,
    N = d.default ?? M ?? P;
export { N as default };