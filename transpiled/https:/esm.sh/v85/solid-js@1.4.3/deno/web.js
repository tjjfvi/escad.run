/* esm.sh - esbuild bundle(solid-js@1.4.3/web) deno production */
var D = Object.defineProperty;

var f = (t, e) => D(t, "name", {
  value: e,
  configurable: !0
});

import { createMemo as H, createRoot as q, createRenderEffect as g, sharedConfig as c, enableHydration as G, createSignal as A, onCleanup as C, splitProps as j, untrack as I } from "/transpiled/https://esm.sh/v85/solid-js@1.4.3/deno/solid-js.js";
import { ErrorBoundary as Fe, For as Ve, Index as _e, Match as Re, Show as ve, Suspense as Ke, SuspenseList as Ye, Switch as Xe, createComponent as Ue, createRenderEffect as We, getOwner as Je, mergeProps as Qe } from "/transpiled/https://esm.sh/v85/solid-js@1.4.3/deno/solid-js.js";

var F = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
    V = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...F]),
    _ = new Set(["innerHTML", "textContent", "innerText", "children"]),
    R = {
  className: "class",
  htmlFor: "for"
},
    k = {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
},
    v = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
    K = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
    Y = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
},
    he = new Set(["html", "base", "head", "link", "meta", "style", "title", "body", "address", "article", "aside", "footer", "header", "main", "nav", "section", "body", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rp", "rt", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "area", "audio", "img", "map", "track", "video", "embed", "iframe", "object", "param", "picture", "portal", "source", "svg", "math", "canvas", "noscript", "script", "del", "ins", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "button", "datalist", "fieldset", "form", "input", "label", "legend", "meter", "optgroup", "option", "output", "progress", "select", "textarea", "details", "dialog", "menu", "summary", "details", "slot", "template", "acronym", "applet", "basefont", "bgsound", "big", "blink", "center", "content", "dir", "font", "frame", "frameset", "hgroup", "image", "keygen", "marquee", "menuitem", "nobr", "noembed", "noframes", "plaintext", "rb", "rtc", "shadow", "spacer", "strike", "tt", "xmp", "a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "portal", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp", "input"]);

function ge(t, e) {
  return H(t, void 0, e ? void 0 : {
    equals: e
  });
}

f(ge, "memo");

function X(t, e, n) {
  let i = n.length,
      s = e.length,
      l = i,
      o = 0,
      r = 0,
      a = e[s - 1].nextSibling,
      d = null;

  for (; o < s || r < l;) {
    if (e[o] === n[r]) {
      o++, r++;
      continue;
    }

    for (; e[s - 1] === n[l - 1];) s--, l--;

    if (s === o) {
      let u = l < i ? r ? n[r - 1].nextSibling : n[l - r] : a;

      for (; r < l;) t.insertBefore(n[r++], u);
    } else if (l === r) for (; o < s;) (!d || !d.has(e[o])) && e[o].remove(), o++;else if (e[o] === n[l - 1] && n[r] === e[s - 1]) {
      let u = e[--s].nextSibling;
      t.insertBefore(n[r++], e[o++].nextSibling), t.insertBefore(n[--l], u), e[s] = n[l];
    } else {
      if (!d) {
        d = new Map();
        let m = r;

        for (; m < l;) d.set(n[m], m++);
      }

      let u = d.get(e[o]);
      if (u != null) {
        if (r < u && u < l) {
          let m = o,
              p = 1,
              E;

          for (; ++m < s && m < l && !((E = d.get(e[m])) == null || E !== u + p);) p++;

          if (p > u - r) {
            let O = e[o];

            for (; r < u;) t.insertBefore(n[r++], O);
          } else t.replaceChild(n[r++], e[o++]);
        } else o++;
      } else e[o++].remove();
    }
  }
}

f(X, "reconcileArrays");
var b = "_$DX_DELEGATE";

function U(t, e, n) {
  let i;
  return q(s => {
    i = s, e === document ? t() : w(e, t(), e.firstChild ? null : void 0, n);
  }), () => {
    i(), e.textContent = "";
  };
}

f(U, "render");

function ye(t, e, n) {
  let i = document.createElement("template");
  i.innerHTML = t;
  let s = i.content.firstChild;
  return n && (s = s.firstChild), s;
}

f(ye, "template");

function W(t, e = window.document) {
  let n = e[b] || (e[b] = new Set());

  for (let i = 0, s = t.length; i < s; i++) {
    let l = t[i];
    n.has(l) || (n.add(l), e.addEventListener(l, S));
  }
}

f(W, "delegateEvents");

function be(t = window.document) {
  if (t[b]) {
    for (let e of t[b].keys()) t.removeEventListener(e, S);

    delete t[b];
  }
}

f(be, "clearDelegatedEvents");

function J(t, e, n) {
  n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
}

f(J, "setAttribute");

function Q(t, e, n, i) {
  i == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, i);
}

f(Q, "setAttributeNS");

function Z(t, e) {
  e == null ? t.removeAttribute("class") : t.className = e;
}

f(Z, "className");

function z(t, e, n, i) {
  i ? Array.isArray(n) ? (t[`$$${e}`] = n[0], t[`$$${e}Data`] = n[1]) : t[`$$${e}`] = n : Array.isArray(n) ? t.addEventListener(e, s => n[0](n[1], s)) : t.addEventListener(e, n);
}

f(z, "addEventListener");

function ee(t, e, n = {}) {
  let i = Object.keys(e || {}),
      s = Object.keys(n),
      l,
      o;

  for (l = 0, o = s.length; l < o; l++) {
    let r = s[l];
    !r || r === "undefined" || e[r] || (L(t, r, !1), delete n[r]);
  }

  for (l = 0, o = i.length; l < o; l++) {
    let r = i[l],
        a = !!e[r];
    !r || r === "undefined" || n[r] === a || !a || (L(t, r, !0), n[r] = a);
  }

  return n;
}

f(ee, "classList");

function te(t, e, n = {}) {
  let i = t.style,
      s = typeof n == "string";
  if (e == null && s || typeof e == "string") return i.cssText = e;
  s && (i.cssText = void 0, n = {}), e || (e = {});
  let l, o;

  for (o in n) e[o] == null && i.removeProperty(o), delete n[o];

  for (o in e) l = e[o], l !== n[o] && (i.setProperty(o, l), n[o] = l);

  return n;
}

f(te, "style");

function ne(t, e, n, i) {
  typeof e == "function" ? g(s => T(t, e(), s, n, i)) : T(t, e, void 0, n, i);
}

f(ne, "spread");

function pe(t, e) {
  let n = t[e];
  return Object.defineProperty(t, e, {
    get() {
      return n();
    },

    enumerable: !0
  }), t;
}

f(pe, "dynamicProperty");

function we(t, e) {
  !c.context && (t.innerHTML = e);
}

f(we, "innerHTML");

function w(t, e, n, i) {
  if (n !== void 0 && !i && (i = []), typeof e != "function") return y(t, e, i, n);
  g(s => y(t, e(), s, n), i);
}

f(w, "insert");

function ie(t, e, n, i, s = {}, l = !1) {
  e || (e = {});

  for (let o in s) if (!(o in e)) {
    if (o === "children") continue;
    M(t, o, null, s[o], n, l);
  }

  for (let o in e) {
    if (o === "children") {
      i || y(t, e.children);
      continue;
    }

    let r = e[o];
    s[o] = M(t, o, r, s[o], n, l);
  }
}

f(ie, "assign");

function oe(t, e, n = {}) {
  c.completed = globalThis._$HY.completed, c.events = globalThis._$HY.events, c.load = globalThis._$HY.load, c.gather = s => P(e, s), c.registry = new Map(), c.context = {
    id: n.renderId || "",
    count: 0
  }, P(e, n.renderId);
  let i = U(t, e, [...e.childNodes]);
  return c.context = null, i;
}

f(oe, "hydrate$1");

function se(t) {
  let e, n;
  return !c.context || !(e = c.registry.get(n = re())) ? t.cloneNode(!0) : (c.completed && c.completed.add(e), c.registry.delete(n), e);
}

f(se, "getNextElement");

function xe(t, e) {
  for (; t && t.localName !== e;) t = t.nextSibling;

  return t;
}

f(xe, "getNextMatch");

function Se(t) {
  let e = t,
      n = 0,
      i = [];
  if (c.context) for (; e;) {
    if (e.nodeType === 8) {
      let s = e.nodeValue;
      if (s === "#") n++;else if (s === "/") {
        if (n === 0) return [e, i];
        n--;
      }
    }

    i.push(e), e = e.nextSibling;
  }
  return [e, i];
}

f(Se, "getNextMarker");

function Ne() {
  c.events && !c.events.queued && (queueMicrotask(() => {
    let {
      completed: t,
      events: e
    } = c;

    for (e.queued = !1; e.length;) {
      let [n, i] = e[0];
      if (!t.has(n)) return;
      S(i), e.shift();
    }
  }), c.events.queued = !0);
}

f(Ne, "runHydrationEvents");

function le(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase());
}

f(le, "toPropertyName");

function L(t, e, n) {
  let i = e.trim().split(/\s+/);

  for (let s = 0, l = i.length; s < l; s++) t.classList.toggle(i[s], n);
}

f(L, "toggleClassKey");

function M(t, e, n, i, s, l) {
  let o, r, a;
  if (e === "style") return te(t, n, i);
  if (e === "classList") return ee(t, n, i);
  if (n === i) return i;
  if (e === "ref") l || n(t);else if (e.slice(0, 3) === "on:") t.addEventListener(e.slice(3), n);else if (e.slice(0, 10) === "oncapture:") t.addEventListener(e.slice(10), n, !0);else if (e.slice(0, 2) === "on") {
    let d = e.slice(2).toLowerCase(),
        u = v.has(d);
    z(t, d, n, u), u && W([d]);
  } else if ((a = _.has(e)) || !s && (k[e] || (r = V.has(e))) || (o = t.nodeName.includes("-"))) e === "class" || e === "className" ? Z(t, n) : o && !r && !a ? t[le(e)] = n : t[k[e] || e] = n;else {
    let d = s && e.indexOf(":") > -1 && Y[e.split(":")[0]];
    d ? Q(t, d, e, n) : J(t, R[e] || e, n);
  }
  return n;
}

f(M, "assignProp");

function S(t) {
  let e = `$$${t.type}`,
      n = t.composedPath && t.composedPath()[0] || t.target;

  for (t.target !== n && Object.defineProperty(t, "target", {
    configurable: !0,
    value: n
  }), Object.defineProperty(t, "currentTarget", {
    configurable: !0,

    get() {
      return n || document;
    }

  }), c.registry && !c.done && (c.done = !0, document.querySelectorAll("[id^=pl-]").forEach(i => i.remove())); n !== null;) {
    let i = n[e];

    if (i && !n.disabled) {
      let s = n[`${e}Data`];
      if (s !== void 0 ? i(s, t) : i(t), t.cancelBubble) return;
    }

    n = n.host && n.host !== n && n.host instanceof Node ? n.host : n.parentNode;
  }
}

f(S, "eventHandler");

function T(t, e, n = {}, i, s) {
  return e || (e = {}), !s && "children" in e && g(() => n.children = y(t, e.children, n.children)), e.ref && e.ref(t), g(() => ie(t, e, i, !0, n, !0)), n;
}

f(T, "spreadExpression");

function y(t, e, n, i, s) {
  for (c.context && !n && (n = [...t.childNodes]); typeof n == "function";) n = n();

  if (e === n) return n;
  let l = typeof e,
      o = i !== void 0;

  if (t = o && n[0] && n[0].parentNode || t, l === "string" || l === "number") {
    if (c.context) return n;

    if (l === "number" && (e = e.toString()), o) {
      let r = n[0];
      r && r.nodeType === 3 ? r.data = e : r = document.createTextNode(e), n = h(t, n, i, r);
    } else n !== "" && typeof n == "string" ? n = t.firstChild.data = e : n = t.textContent = e;
  } else if (e == null || l === "boolean") {
    if (c.context) return n;
    n = h(t, n, i);
  } else {
    if (l === "function") return g(() => {
      let r = e();

      for (; typeof r == "function";) r = r();

      n = y(t, r, n, i);
    }), () => n;

    if (Array.isArray(e)) {
      let r = [];
      if (x(r, e, s)) return g(() => n = y(t, r, n, i, !0)), () => n;

      if (c.context) {
        for (let a = 0; a < r.length; a++) if (r[a].parentNode) return n = r;
      }

      if (r.length === 0) {
        if (n = h(t, n, i), o) return n;
      } else Array.isArray(n) ? n.length === 0 ? $(t, r, i) : X(t, n, r) : (n && h(t), $(t, r));

      n = r;
    } else if (e instanceof Node) {
      if (c.context && e.parentNode) return n = o ? [e] : e;

      if (Array.isArray(n)) {
        if (o) return n = h(t, n, i, e);
        h(t, n, null, e);
      } else n == null || n === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);

      n = e;
    }
  }

  return n;
}

f(y, "insertExpression");

function x(t, e, n) {
  let i = !1;

  for (let s = 0, l = e.length; s < l; s++) {
    let o = e[s],
        r;
    if (o instanceof Node) t.push(o);else if (!(o == null || o === !0 || o === !1)) if (Array.isArray(o)) i = x(t, o) || i;else if ((r = typeof o) == "string") t.push(document.createTextNode(o));else if (r === "function") {
      if (n) {
        for (; typeof o == "function";) o = o();

        i = x(t, Array.isArray(o) ? o : [o]) || i;
      } else t.push(o), i = !0;
    } else t.push(document.createTextNode(o.toString()));
  }

  return i;
}

f(x, "normalizeIncomingArray");

function $(t, e, n) {
  for (let i = 0, s = e.length; i < s; i++) t.insertBefore(e[i], n);
}

f($, "appendNodes");

function h(t, e, n, i) {
  if (n === void 0) return t.textContent = "";
  let s = i || document.createTextNode("");

  if (e.length) {
    let l = !1;

    for (let o = e.length - 1; o >= 0; o--) {
      let r = e[o];

      if (s !== r) {
        let a = r.parentNode === t;
        !l && !o ? a ? t.replaceChild(s, r) : t.insertBefore(s, n) : a && r.remove();
      } else l = !0;
    }
  } else t.insertBefore(s, n);

  return [s];
}

f(h, "cleanChildren");

function P(t, e) {
  let n = t.querySelectorAll("*[data-hk]");

  for (let i = 0; i < n.length; i++) {
    let s = n[i],
        l = s.getAttribute("data-hk");
    (!e || l.startsWith(e)) && !c.registry.has(l) && c.registry.set(l, s);
  }
}

f(P, "gatherHydratable");

function re() {
  let t = c.context;
  return `${t.id}${t.count++}`;
}

f(re, "getHydrationKey");

function Ee() {}

f(Ee, "Assets");

function Ae(t) {
  return c.context ? void 0 : t.children;
}

f(Ae, "NoHydration");

function N(t) {
  let e = new Error(`${t.name} is not supported in the browser, returning undefined`);
  console.error(e);
}

f(N, "throwInBrowser");

function fe(t, e) {
  N(fe);
}

f(fe, "renderToString");

function ce(t, e) {
  N(ce);
}

f(ce, "renderToStringAsync");

function ae(t, e) {
  N(ae);
}

f(ae, "renderToStream");

function Ce(t, ...e) {}

f(Ce, "ssr");

function ke(t) {}

f(ke, "resolveSSRNode");

function Le(t) {}

f(Le, "ssrClassList");

function Me(t) {}

f(Me, "ssrStyle");

function Te(t) {}

f(Te, "ssrSpread");

function $e(t, e) {}

f($e, "ssrBoolean");

function Pe() {}

f(Pe, "ssrHydrationKey");

function He(t) {}

f(He, "escape");

function qe() {}

f(qe, "generateHydrationScript");
var Be = !1,
    de = "http://www.w3.org/2000/svg";

function B(t, e = !1) {
  return e ? document.createElementNS(de, t) : document.createElement(t);
}

f(B, "createElement");
var Oe = f((...t) => (G(), oe(...t)), "hydrate");

function De(t) {
  let {
    useShadow: e
  } = t,
      n = document.createTextNode(""),
      i = t.mount || document.body;

  function s() {
    if (c.context) {
      let [l, o] = A(!1);
      return queueMicrotask(() => o(!0)), () => l() && t.children;
    } else return () => t.children;
  }

  if (f(s, "renderPortal"), i instanceof HTMLHeadElement) {
    let [l, o] = A(!1),
        r = f(() => o(!0), "cleanup");
    q(a => w(i, () => l() ? a() : s()(), null)), C(() => {
      c.context ? queueMicrotask(r) : r();
    });
  } else {
    let l = B(t.isSVG ? "g" : "div", t.isSVG),
        o = e && l.attachShadow ? l.attachShadow({
      mode: "open"
    }) : l;
    Object.defineProperty(l, "host", {
      get() {
        return n.parentNode;
      }

    }), w(o, s()), i.appendChild(l), t.ref && t.ref(l), C(() => i.removeChild(l));
  }

  return n;
}

f(De, "Portal");

function Ge(t) {
  let [e, n] = j(t, ["component"]);
  return H(() => {
    let i = e.component;

    switch (typeof i) {
      case "function":
        return I(() => i(n));

      case "string":
        let s = K.has(i),
            l = c.context ? se() : B(i, s);
        return ne(l, n, s), l;
    }
  });
}

f(Ge, "Dynamic");
export { R as Aliases, Ee as Assets, _ as ChildProperties, he as DOMElements, v as DelegatedEvents, Ge as Dynamic, Fe as ErrorBoundary, Ve as For, Ee as HydrationScript, _e as Index, Re as Match, Ae as NoHydration, De as Portal, k as PropAliases, V as Properties, K as SVGElements, Y as SVGNamespace, ve as Show, Ke as Suspense, Ye as SuspenseList, Xe as Switch, z as addEventListener, ie as assign, ee as classList, Z as className, be as clearDelegatedEvents, Ue as createComponent, W as delegateEvents, pe as dynamicProperty, We as effect, He as escape, qe as generateHydrationScript, re as getHydrationKey, se as getNextElement, Se as getNextMarker, xe as getNextMatch, Je as getOwner, Oe as hydrate, we as innerHTML, w as insert, Be as isServer, ge as memo, Qe as mergeProps, U as render, ae as renderToStream, fe as renderToString, ce as renderToStringAsync, ke as resolveSSRNode, Ne as runHydrationEvents, J as setAttribute, Q as setAttributeNS, ne as spread, Ce as ssr, $e as ssrBoolean, Le as ssrClassList, Pe as ssrHydrationKey, Te as ssrSpread, Me as ssrStyle, te as style, ye as template };