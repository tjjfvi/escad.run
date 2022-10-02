/* esm.sh - esbuild bundle(solid-js@1.4.3/web) esnext production */
import { createMemo as P, createRoot as H, createRenderEffect as h, sharedConfig as f, enableHydration as O, createSignal as E, onCleanup as A, splitProps as D, untrack as G } from "/transpiled/https://esm.sh/v96/solid-js@1.4.3/esnext/solid-js.js";
import { ErrorBoundary as Ge, For as je, Index as Ie, Match as Fe, Show as Ve, Suspense as _e, SuspenseList as Re, Switch as ve, createComponent as Ke, createRenderEffect as Ye, getOwner as Xe, mergeProps as Ue } from "/transpiled/https://esm.sh/v96/solid-js@1.4.3/esnext/solid-js.js";

var j = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
    I = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...j]),
    F = new Set(["innerHTML", "textContent", "innerText", "children"]),
    V = {
  className: "class",
  htmlFor: "for"
},
    C = {
  class: "className",
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
},
    _ = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
    R = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
    v = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
},
    de = new Set(["html", "base", "head", "link", "meta", "style", "title", "body", "address", "article", "aside", "footer", "header", "main", "nav", "section", "body", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "li", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "rp", "rt", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "area", "audio", "img", "map", "track", "video", "embed", "iframe", "object", "param", "picture", "portal", "source", "svg", "math", "canvas", "noscript", "script", "del", "ins", "caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "button", "datalist", "fieldset", "form", "input", "label", "legend", "meter", "optgroup", "option", "output", "progress", "select", "textarea", "details", "dialog", "menu", "summary", "details", "slot", "template", "acronym", "applet", "basefont", "bgsound", "big", "blink", "center", "content", "dir", "font", "frame", "frameset", "hgroup", "image", "keygen", "marquee", "menuitem", "nobr", "noembed", "noframes", "plaintext", "rb", "rtc", "shadow", "spacer", "strike", "tt", "xmp", "a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "portal", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp", "input"]);

function ue(n, e) {
  return P(n, void 0, e ? void 0 : {
    equals: e
  });
}

function K(n, e, t) {
  let i = t.length,
      s = e.length,
      l = i,
      o = 0,
      r = 0,
      c = e[s - 1].nextSibling,
      a = null;

  for (; o < s || r < l;) {
    if (e[o] === t[r]) {
      o++, r++;
      continue;
    }

    for (; e[s - 1] === t[l - 1];) s--, l--;

    if (s === o) {
      let d = l < i ? r ? t[r - 1].nextSibling : t[l - r] : c;

      for (; r < l;) n.insertBefore(t[r++], d);
    } else if (l === r) for (; o < s;) (!a || !a.has(e[o])) && e[o].remove(), o++;else if (e[o] === t[l - 1] && t[r] === e[s - 1]) {
      let d = e[--s].nextSibling;
      n.insertBefore(t[r++], e[o++].nextSibling), n.insertBefore(t[--l], d), e[s] = t[l];
    } else {
      if (!a) {
        a = new Map();
        let u = r;

        for (; u < l;) a.set(t[u], u++);
      }

      let d = a.get(e[o]);
      if (d != null) {
        if (r < d && d < l) {
          let u = o,
              b = 1,
              N;

          for (; ++u < s && u < l && !((N = a.get(e[u])) == null || N !== d + b);) b++;

          if (b > d - r) {
            let B = e[o];

            for (; r < d;) n.insertBefore(t[r++], B);
          } else n.replaceChild(t[r++], e[o++]);
        } else o++;
      } else e[o++].remove();
    }
  }
}

var y = "_$DX_DELEGATE";

function Y(n, e, t) {
  let i;
  return H(s => {
    i = s, e === document ? n() : p(e, n(), e.firstChild ? null : void 0, t);
  }), () => {
    i(), e.textContent = "";
  };
}

function me(n, e, t) {
  let i = document.createElement("template");
  i.innerHTML = n;
  let s = i.content.firstChild;
  return t && (s = s.firstChild), s;
}

function X(n, e = window.document) {
  let t = e[y] || (e[y] = new Set());

  for (let i = 0, s = n.length; i < s; i++) {
    let l = n[i];
    t.has(l) || (t.add(l), e.addEventListener(l, x));
  }
}

function he(n = window.document) {
  if (n[y]) {
    for (let e of n[y].keys()) n.removeEventListener(e, x);

    delete n[y];
  }
}

function U(n, e, t) {
  t == null ? n.removeAttribute(e) : n.setAttribute(e, t);
}

function W(n, e, t, i) {
  i == null ? n.removeAttributeNS(e, t) : n.setAttributeNS(e, t, i);
}

function J(n, e) {
  e == null ? n.removeAttribute("class") : n.className = e;
}

function Q(n, e, t, i) {
  i ? Array.isArray(t) ? (n[`$$${e}`] = t[0], n[`$$${e}Data`] = t[1]) : n[`$$${e}`] = t : Array.isArray(t) ? n.addEventListener(e, s => t[0](t[1], s)) : n.addEventListener(e, t);
}

function Z(n, e, t = {}) {
  let i = Object.keys(e || {}),
      s = Object.keys(t),
      l,
      o;

  for (l = 0, o = s.length; l < o; l++) {
    let r = s[l];
    !r || r === "undefined" || e[r] || (k(n, r, !1), delete t[r]);
  }

  for (l = 0, o = i.length; l < o; l++) {
    let r = i[l],
        c = !!e[r];
    !r || r === "undefined" || t[r] === c || !c || (k(n, r, !0), t[r] = c);
  }

  return t;
}

function z(n, e, t = {}) {
  let i = n.style,
      s = typeof t == "string";
  if (e == null && s || typeof e == "string") return i.cssText = e;
  s && (i.cssText = void 0, t = {}), e || (e = {});
  let l, o;

  for (o in t) e[o] == null && i.removeProperty(o), delete t[o];

  for (o in e) l = e[o], l !== t[o] && (i.setProperty(o, l), t[o] = l);

  return t;
}

function ee(n, e, t, i) {
  typeof e == "function" ? h(s => M(n, e(), s, t, i)) : M(n, e, void 0, t, i);
}

function ge(n, e) {
  let t = n[e];
  return Object.defineProperty(n, e, {
    get() {
      return t();
    },

    enumerable: !0
  }), n;
}

function ye(n, e) {
  !f.context && (n.innerHTML = e);
}

function p(n, e, t, i) {
  if (t !== void 0 && !i && (i = []), typeof e != "function") return g(n, e, i, t);
  h(s => g(n, e(), s, t), i);
}

function te(n, e, t, i, s = {}, l = !1) {
  e || (e = {});

  for (let o in s) if (!(o in e)) {
    if (o === "children") continue;
    L(n, o, null, s[o], t, l);
  }

  for (let o in e) {
    if (o === "children") {
      i || g(n, e.children);
      continue;
    }

    let r = e[o];
    s[o] = L(n, o, r, s[o], t, l);
  }
}

function ne(n, e, t = {}) {
  f.completed = globalThis._$HY.completed, f.events = globalThis._$HY.events, f.load = globalThis._$HY.load, f.gather = s => $(e, s), f.registry = new Map(), f.context = {
    id: t.renderId || "",
    count: 0
  }, $(e, t.renderId);
  let i = Y(n, e, [...e.childNodes]);
  return f.context = null, i;
}

function ie(n) {
  let e, t;
  return !f.context || !(e = f.registry.get(t = se())) ? n.cloneNode(!0) : (f.completed && f.completed.add(e), f.registry.delete(t), e);
}

function be(n, e) {
  for (; n && n.localName !== e;) n = n.nextSibling;

  return n;
}

function pe(n) {
  let e = n,
      t = 0,
      i = [];
  if (f.context) for (; e;) {
    if (e.nodeType === 8) {
      let s = e.nodeValue;
      if (s === "#") t++;else if (s === "/") {
        if (t === 0) return [e, i];
        t--;
      }
    }

    i.push(e), e = e.nextSibling;
  }
  return [e, i];
}

function we() {
  f.events && !f.events.queued && (queueMicrotask(() => {
    let {
      completed: n,
      events: e
    } = f;

    for (e.queued = !1; e.length;) {
      let [t, i] = e[0];
      if (!n.has(t)) return;
      x(i), e.shift();
    }
  }), f.events.queued = !0);
}

function oe(n) {
  return n.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}

function k(n, e, t) {
  let i = e.trim().split(/\s+/);

  for (let s = 0, l = i.length; s < l; s++) n.classList.toggle(i[s], t);
}

function L(n, e, t, i, s, l) {
  let o, r, c;
  if (e === "style") return z(n, t, i);
  if (e === "classList") return Z(n, t, i);
  if (t === i) return i;
  if (e === "ref") l || t(n);else if (e.slice(0, 3) === "on:") n.addEventListener(e.slice(3), t);else if (e.slice(0, 10) === "oncapture:") n.addEventListener(e.slice(10), t, !0);else if (e.slice(0, 2) === "on") {
    let a = e.slice(2).toLowerCase(),
        d = _.has(a);

    Q(n, a, t, d), d && X([a]);
  } else if ((c = F.has(e)) || !s && (C[e] || (r = I.has(e))) || (o = n.nodeName.includes("-"))) e === "class" || e === "className" ? J(n, t) : o && !r && !c ? n[oe(e)] = t : n[C[e] || e] = t;else {
    let a = s && e.indexOf(":") > -1 && v[e.split(":")[0]];
    a ? W(n, a, e, t) : U(n, V[e] || e, t);
  }
  return t;
}

function x(n) {
  let e = `$$${n.type}`,
      t = n.composedPath && n.composedPath()[0] || n.target;

  for (n.target !== t && Object.defineProperty(n, "target", {
    configurable: !0,
    value: t
  }), Object.defineProperty(n, "currentTarget", {
    configurable: !0,

    get() {
      return t || document;
    }

  }), f.registry && !f.done && (f.done = !0, document.querySelectorAll("[id^=pl-]").forEach(i => i.remove())); t !== null;) {
    let i = t[e];

    if (i && !t.disabled) {
      let s = t[`${e}Data`];
      if (s !== void 0 ? i(s, n) : i(n), n.cancelBubble) return;
    }

    t = t.host && t.host !== t && t.host instanceof Node ? t.host : t.parentNode;
  }
}

function M(n, e, t = {}, i, s) {
  return e || (e = {}), !s && "children" in e && h(() => t.children = g(n, e.children, t.children)), e.ref && e.ref(n), h(() => te(n, e, i, !0, t, !0)), t;
}

function g(n, e, t, i, s) {
  for (f.context && !t && (t = [...n.childNodes]); typeof t == "function";) t = t();

  if (e === t) return t;
  let l = typeof e,
      o = i !== void 0;

  if (n = o && t[0] && t[0].parentNode || n, l === "string" || l === "number") {
    if (f.context) return t;

    if (l === "number" && (e = e.toString()), o) {
      let r = t[0];
      r && r.nodeType === 3 ? r.data = e : r = document.createTextNode(e), t = m(n, t, i, r);
    } else t !== "" && typeof t == "string" ? t = n.firstChild.data = e : t = n.textContent = e;
  } else if (e == null || l === "boolean") {
    if (f.context) return t;
    t = m(n, t, i);
  } else {
    if (l === "function") return h(() => {
      let r = e();

      for (; typeof r == "function";) r = r();

      t = g(n, r, t, i);
    }), () => t;

    if (Array.isArray(e)) {
      let r = [];
      if (w(r, e, s)) return h(() => t = g(n, r, t, i, !0)), () => t;

      if (f.context) {
        for (let c = 0; c < r.length; c++) if (r[c].parentNode) return t = r;
      }

      if (r.length === 0) {
        if (t = m(n, t, i), o) return t;
      } else Array.isArray(t) ? t.length === 0 ? T(n, r, i) : K(n, t, r) : (t && m(n), T(n, r));

      t = r;
    } else if (e instanceof Node) {
      if (f.context && e.parentNode) return t = o ? [e] : e;

      if (Array.isArray(t)) {
        if (o) return t = m(n, t, i, e);
        m(n, t, null, e);
      } else t == null || t === "" || !n.firstChild ? n.appendChild(e) : n.replaceChild(e, n.firstChild);

      t = e;
    }
  }

  return t;
}

function w(n, e, t) {
  let i = !1;

  for (let s = 0, l = e.length; s < l; s++) {
    let o = e[s],
        r;
    if (o instanceof Node) n.push(o);else if (!(o == null || o === !0 || o === !1)) if (Array.isArray(o)) i = w(n, o) || i;else if ((r = typeof o) == "string") n.push(document.createTextNode(o));else if (r === "function") {
      if (t) {
        for (; typeof o == "function";) o = o();

        i = w(n, Array.isArray(o) ? o : [o]) || i;
      } else n.push(o), i = !0;
    } else n.push(document.createTextNode(o.toString()));
  }

  return i;
}

function T(n, e, t) {
  for (let i = 0, s = e.length; i < s; i++) n.insertBefore(e[i], t);
}

function m(n, e, t, i) {
  if (t === void 0) return n.textContent = "";
  let s = i || document.createTextNode("");

  if (e.length) {
    let l = !1;

    for (let o = e.length - 1; o >= 0; o--) {
      let r = e[o];

      if (s !== r) {
        let c = r.parentNode === n;
        !l && !o ? c ? n.replaceChild(s, r) : n.insertBefore(s, t) : c && r.remove();
      } else l = !0;
    }
  } else n.insertBefore(s, t);

  return [s];
}

function $(n, e) {
  let t = n.querySelectorAll("*[data-hk]");

  for (let i = 0; i < t.length; i++) {
    let s = t[i],
        l = s.getAttribute("data-hk");
    (!e || l.startsWith(e)) && !f.registry.has(l) && f.registry.set(l, s);
  }
}

function se() {
  let n = f.context;
  return `${n.id}${n.count++}`;
}

function xe() {}

function Se(n) {
  return f.context ? void 0 : n.children;
}

function S(n) {
  let e = new Error(`${n.name} is not supported in the browser, returning undefined`);
  console.error(e);
}

function le(n, e) {
  S(le);
}

function re(n, e) {
  S(re);
}

function fe(n, e) {
  S(fe);
}

function Ne(n, ...e) {}

function Ee(n) {}

function Ae(n) {}

function Ce(n) {}

function ke(n) {}

function Le(n, e) {}

function Me() {}

function Te(n) {}

function $e() {}

var Pe = !1,
    ce = "http://www.w3.org/2000/svg";

function q(n, e = !1) {
  return e ? document.createElementNS(ce, n) : document.createElement(n);
}

var He = (...n) => (O(), ne(...n));

function qe(n) {
  let {
    useShadow: e
  } = n,
      t = document.createTextNode(""),
      i = n.mount || document.body;

  function s() {
    if (f.context) {
      let [l, o] = E(!1);
      return queueMicrotask(() => o(!0)), () => l() && n.children;
    } else return () => n.children;
  }

  if (i instanceof HTMLHeadElement) {
    let [l, o] = E(!1),
        r = () => o(!0);

    H(c => p(i, () => l() ? c() : s()(), null)), A(() => {
      f.context ? queueMicrotask(r) : r();
    });
  } else {
    let l = q(n.isSVG ? "g" : "div", n.isSVG),
        o = e && l.attachShadow ? l.attachShadow({
      mode: "open"
    }) : l;
    Object.defineProperty(l, "host", {
      get() {
        return t.parentNode;
      }

    }), p(o, s()), i.appendChild(l), n.ref && n.ref(l), A(() => i.removeChild(l));
  }

  return t;
}

function Be(n) {
  let [e, t] = D(n, ["component"]);
  return P(() => {
    let i = e.component;

    switch (typeof i) {
      case "function":
        return G(() => i(t));

      case "string":
        let s = R.has(i),
            l = f.context ? ie() : q(i, s);
        return ee(l, t, s), l;
    }
  });
}

export { V as Aliases, xe as Assets, F as ChildProperties, de as DOMElements, _ as DelegatedEvents, Be as Dynamic, Ge as ErrorBoundary, je as For, xe as HydrationScript, Ie as Index, Fe as Match, Se as NoHydration, qe as Portal, C as PropAliases, I as Properties, R as SVGElements, v as SVGNamespace, Ve as Show, _e as Suspense, Re as SuspenseList, ve as Switch, Q as addEventListener, te as assign, Z as classList, J as className, he as clearDelegatedEvents, Ke as createComponent, X as delegateEvents, ge as dynamicProperty, Ye as effect, Te as escape, $e as generateHydrationScript, se as getHydrationKey, ie as getNextElement, pe as getNextMarker, be as getNextMatch, Xe as getOwner, He as hydrate, ye as innerHTML, p as insert, Pe as isServer, ue as memo, Ue as mergeProps, Y as render, fe as renderToStream, le as renderToString, re as renderToStringAsync, Ee as resolveSSRNode, we as runHydrationEvents, U as setAttribute, W as setAttributeNS, ee as spread, Ne as ssr, Le as ssrBoolean, Ae as ssrClassList, Me as ssrHydrationKey, ke as ssrSpread, Ce as ssrStyle, z as style, me as template };