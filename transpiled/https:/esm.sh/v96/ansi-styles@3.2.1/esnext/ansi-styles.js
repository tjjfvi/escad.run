/* esm.sh - esbuild bundle(ansi-styles@3.2.1) esnext production */
import __color_convert$ from "/transpiled/https://esm.sh/v96/color-convert@1.9.3/esnext/color-convert.js";
var d = Object.create;
var u = Object.defineProperty;
var y = Object.getOwnPropertyDescriptor;
var h = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf,
    C = Object.prototype.hasOwnProperty;

var w = (o => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(o, {
  get: (e, n) => (typeof require < "u" ? require : e)[n]
}) : o)(function (o) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + o + '" is not supported');
});

var $ = (o, e) => () => (e || o((e = {
  exports: {}
}).exports, e), e.exports);

var k = (o, e, n, a) => {
  if (e && typeof e == "object" || typeof e == "function") for (let r of h(e)) !C.call(o, r) && r !== n && u(o, r, {
    get: () => e[r],
    enumerable: !(a = y(e, r)) || a.enumerable
  });
  return o;
};

var j = (o, e, n) => (n = o != null ? d(p(o)) : {}, k(e || !o || !o.__esModule ? u(n, "default", {
  value: o,
  enumerable: !0
}) : n, o));

var f = $((M, m) => {
  "use strict";

  var s = __color_convert$,
      l = (o, e) => function () {
    return `\x1B[${o.apply(s, arguments) + e}m`;
  },
      c = (o, e) => function () {
    let n = o.apply(s, arguments);
    return `\x1B[${38 + e};5;${n}m`;
  },
      b = (o, e) => function () {
    let n = o.apply(s, arguments);
    return `\x1B[${38 + e};2;${n[0]};${n[1]};${n[2]}m`;
  };

  function O() {
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

      for (let i of Object.keys(t)) {
        let g = t[i];
        e[i] = {
          open: `\x1B[${g[0]}m`,
          close: `\x1B[${g[1]}m`
        }, t[i] = e[i], o.set(g[0], g[1]);
      }

      Object.defineProperty(e, r, {
        value: t,
        enumerable: !1
      }), Object.defineProperty(e, "codes", {
        value: o,
        enumerable: !1
      });
    }

    let n = r => r,
        a = (r, t, i) => [r, t, i];

    e.color.close = "\x1B[39m", e.bgColor.close = "\x1B[49m", e.color.ansi = {
      ansi: l(n, 0)
    }, e.color.ansi256 = {
      ansi256: c(n, 0)
    }, e.color.ansi16m = {
      rgb: b(a, 0)
    }, e.bgColor.ansi = {
      ansi: l(n, 10)
    }, e.bgColor.ansi256 = {
      ansi256: c(n, 10)
    }, e.bgColor.ansi16m = {
      rgb: b(a, 10)
    };

    for (let r of Object.keys(s)) {
      if (typeof s[r] != "object") continue;
      let t = s[r];
      r === "ansi16" && (r = "ansi"), "ansi16" in t && (e.color.ansi[r] = l(t.ansi16, 0), e.bgColor.ansi[r] = l(t.ansi16, 10)), "ansi256" in t && (e.color.ansi256[r] = c(t.ansi256, 0), e.bgColor.ansi256[r] = c(t.ansi256, 10)), "rgb" in t && (e.color.ansi16m[r] = b(t.rgb, 0), e.bgColor.ansi16m[r] = b(t.rgb, 10));
    }

    return e;
  }

  Object.defineProperty(m, "exports", {
    enumerable: !0,
    get: O
  });
});

var _ = j(f()),
    {
  default: B,
  ...v
} = _,
    P = B !== void 0 ? B : v;

export { P as default };