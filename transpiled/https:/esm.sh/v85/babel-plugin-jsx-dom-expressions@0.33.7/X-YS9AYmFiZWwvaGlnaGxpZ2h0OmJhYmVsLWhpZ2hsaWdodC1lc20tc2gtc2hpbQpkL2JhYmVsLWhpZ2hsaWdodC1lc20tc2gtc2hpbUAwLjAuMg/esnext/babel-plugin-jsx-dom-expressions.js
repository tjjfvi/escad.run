/* esm.sh - esbuild bundle(babel-plugin-jsx-dom-expressions@0.33.7) esnext production */
import __html_entities$ from "/transpiled/https://esm.sh/v85/html-entities@2.3.2/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/html-entities.js";
import ___babel_helper_module_imports$ from "/transpiled/https://esm.sh/v85/@babel/helper-module-imports@7.16.0/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-module-imports.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v85/@babel/types@7.18.4/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/types.js";
import * as ___babel_plugin_syntax_jsx$$ from "/transpiled/https://esm.sh/v85/@babel/plugin-syntax-jsx@7.17.12/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/plugin-syntax-jsx.js";

const ___babel_plugin_syntax_jsx$ = Object.assign({
  __esModule: true
}, ___babel_plugin_syntax_jsx$$);

var ge = Object.create;
var W = Object.defineProperty;
var Ee = Object.getOwnPropertyDescriptor;
var be = Object.getOwnPropertyNames;
var Se = Object.getPrototypeOf,
    ve = Object.prototype.hasOwnProperty;

var g = (n, t) => W(n, "name", {
  value: t,
  configurable: !0
}),
    j = (n => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(n, {
  get: (t, r) => (typeof require != "undefined" ? require : t)[r]
}) : n)(function (n) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + n + '" is not supported');
});

var ye = (n, t) => () => (t || n((t = {
  exports: {}
}).exports, t), t.exports);

var he = (n, t, r, i) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of be(t)) !ve.call(n, s) && s !== r && W(n, s, {
    get: () => t[s],
    enumerable: !(i = Ee(t, s)) || i.enumerable
  });
  return n;
};

var Q = (n, t, r) => (r = n != null ? ge(Se(n)) : {}, he(t || !n || !n.__esModule ? W(r, "default", {
  value: n,
  enumerable: !0
}) : r, n));

var Z = ye((xn, ue) => {
  "use strict";

  var Le = ___babel_plugin_syntax_jsx$,
      Ce = ___babel_types$,
      we = ___babel_helper_module_imports$,
      ie = __html_entities$;

  function Ne(n) {
    return n && typeof n == "object" && "default" in n ? n : {
      default: n
    };
  }

  g(Ne, "_interopDefaultLegacy");

  function Xe(n) {
    if (n && n.__esModule) return n;
    var t = Object.create(null);
    return n && Object.keys(n).forEach(function (r) {
      if (r !== "default") {
        var i = Object.getOwnPropertyDescriptor(n, r);
        Object.defineProperty(t, r, i.get ? i : {
          enumerable: !0,
          get: function () {
            return n[r];
          }
        });
      }
    }), t.default = n, Object.freeze(t);
  }

  g(Xe, "_interopNamespace");
  var Je = Ne(Le),
      e = Xe(Ce),
      se = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
      $e = new Set(se),
      ke = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...se]),
      F = new Set(["innerHTML", "textContent", "innerText", "children"]),
      q = {
    className: "class",
    htmlFor: "for"
  },
      Ie = {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly"
  },
      Te = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
      G = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
      Fe = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
  },
      oe = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"],
      V = new Set(["class", "on", "oncapture", "style", "use", "prop", "attr"]);

  function N(n) {
    return n.hub.file.metadata.config;
  }

  g(N, "getConfig");
  var w = g((n, t) => {
    let r = N(n);
    return r?.renderers?.find(i => i.name === t) ?? r;
  }, "getRendererConfig");

  function v(n, t, r) {
    let i = n.scope.getProgramParent().data.imports || (n.scope.getProgramParent().data.imports = new Map());

    if (r = r || N(n).moduleName, i.has(`${r}:${t}`)) {
      let s = i.get(`${r}:${t}`);
      return e.cloneDeep(s);
    } else {
      let s = we.addNamed(n, t, r, {
        nameHint: `_$${t}`
      });
      return i.set(`${r}:${t}`, s), s;
    }
  }

  g(v, "registerImportMethod");

  function ae(n) {
    return e.isJSXMemberExpression(n) ? `${ae(n.object)}.${n.property.name}` : e.isJSXIdentifier(n) || e.isIdentifier(n) ? n.name : `${n.namespace.name}:${n.name.name}`;
  }

  g(ae, "jsxElementNameToString");

  function $(n) {
    let t = n.openingElement.name;
    return ae(t);
  }

  g($, "getTagName");

  function O(n) {
    return n[0] && n[0].toLowerCase() !== n[0] || n.includes(".") || /[^a-zA-Z]/.test(n[0]);
  }

  g(O, "isComponent");

  function X(n, {
    checkMember: t,
    checkTags: r,
    checkCallExpressions: i = !0,
    native: s
  }) {
    let l = N(n);
    l.generate === "ssr" && s && (t = !1, i = !1);
    let o = n.node;
    if (e.isFunction(o)) return !1;
    if (o.leadingComments && o.leadingComments[0] && o.leadingComments[0].value.trim() === l.staticMarker) return o.leadingComments.shift(), !1;
    if (i && e.isCallExpression(o) || t && (e.isMemberExpression(o) || e.isOptionalMemberExpression(o)) || r && (e.isJSXElement(o) || e.isJSXFragment(o))) return !0;
    let a;
    return n.traverse({
      Function(p) {
        e.isObjectMethod(p.node) && p.node.computed && (a = X(p.get("key"), {
          checkMember: t,
          checkTags: r,
          checkCallExpressions: i,
          native: s
        })), p.skip();
      },

      CallExpression(p) {
        i && (a = !0) && p.stop();
      },

      MemberExpression(p) {
        t && (a = !0) && p.stop();
      },

      OptionalMemberExpression(p) {
        t && (a = !0) && p.stop();
      },

      JSXElement(p) {
        r ? (a = !0) && p.stop() : p.skip();
      },

      JSXFragment(p) {
        r ? (a = !0) && p.stop() : p.skip();
      }

    }), a;
  }

  g(X, "isDynamic");

  function _(n) {
    let t = n.node,
        r,
        i;
    return e.isJSXExpressionContainer(t) && e.isJSXElement(n.parent) && !O($(n.parent)) && !e.isSequenceExpression(t.expression) && (r = n.get("expression").evaluate().value) !== void 0 && ((i = typeof r) == "string" || i === "number") && r;
  }

  g(_, "getStaticExpression");

  function T(n) {
    return n.filter(({
      node: t
    }) => !(e.isJSXExpressionContainer(t) && e.isJSXEmptyExpression(t.expression)) && (!e.isJSXText(t) || !/^[\r\n]\s*$/.test(t.extra.raw)));
  }

  g(T, "filterChildren");

  function R(n) {
    let t = 0;
    return n.forEach(r => {
      let i = r.node;
      !(e.isJSXExpressionContainer(i) && e.isJSXEmptyExpression(i.expression)) && (!e.isJSXText(i) || !/^\s*$/.test(i.extra.raw)) && t++;
    }), t > 1;
  }

  g(R, "checkLength");

  function z(n) {
    return n = n.replace(/\r/g, ""), /\n/g.test(n) && (n = n.split(`
`).map((t, r) => r ? t.replace(/^\s*/g, "") : t).filter(t => !/^\s*$/.test(t)).join(" ")), n.replace(/\s+/g, " ");
  }

  g(z, "trimWhitespace");

  function De(n) {
    return n.slice(2).toLowerCase();
  }

  g(De, "toEventName");

  function Me(n) {
    return n.toLowerCase().replace(/-([a-z])/g, (t, r) => r.toUpperCase());
  }

  g(Me, "toPropertyName");

  function je(n, t) {
    let r = t,
        i;

    for (; --r >= 0;) {
      let s = n[r];

      if (!!s) {
        if (s.text) {
          i = !0;
          break;
        }

        if (s.id) return !1;
      }
    }

    if (!i) return !1;

    for (r = t; ++r < n.length;) {
      let s = n[r];

      if (!!s) {
        if (s.text) return !0;
        if (s.id) return !1;
      }
    }

    return !1;
  }

  g(je, "wrappedByText");

  function P(n, t, r) {
    let i = N(n),
        s = n.node,
        l = v(n, i.memoWrapper),
        o,
        a,
        p;
    if (e.isConditionalExpression(s) && (X(n.get("consequent"), {
      checkTags: !0
    }) || X(n.get("alternate"), {
      checkTags: !0
    }))) o = X(n.get("test"), {
      checkMember: !0
    }), o && (a = s.test, e.isBinaryExpression(a) || (a = e.unaryExpression("!", e.unaryExpression("!", a, !0), !0)), p = t ? e.callExpression(l, [e.arrowFunctionExpression([], a), e.booleanLiteral(!0)]) : n.scope.generateUidIdentifier("_c$"), s.test = e.callExpression(p, []), (e.isConditionalExpression(s.consequent) || e.isLogicalExpression(s.consequent)) && (s.consequent = P(n.get("consequent"), t, !0)), (e.isConditionalExpression(s.alternate) || e.isLogicalExpression(s.alternate)) && (s.alternate = P(n.get("alternate"), t, !0)));else if (e.isLogicalExpression(s)) {
      let f = n;

      for (; f.node.operator !== "&&" && e.isLogicalExpression(f.node.left);) f = f.get("left");

      f.node.operator === "&&" && X(f.get("right"), {
        checkTags: !0
      }) && (o = X(f.get("left"), {
        checkMember: !0
      })), o && (a = f.node.left, e.isBinaryExpression(a) || (a = e.unaryExpression("!", e.unaryExpression("!", a, !0), !0)), p = t ? e.callExpression(l, [e.arrowFunctionExpression([], a), e.booleanLiteral(!0)]) : n.scope.generateUidIdentifier("_c$"), f.node.left = e.callExpression(p, []));
    }

    if (o && !t) {
      let f = [e.variableDeclaration("const", [e.variableDeclarator(p, i.memoWrapper ? e.callExpression(l, [e.arrowFunctionExpression([], a), e.booleanLiteral(!0)]) : e.arrowFunctionExpression([], a))]), e.arrowFunctionExpression([], s)];
      return r ? e.callExpression(e.arrowFunctionExpression([], e.blockStatement([f[0], e.returnStatement(f[1])])), []) : f;
    }

    return r ? s : e.arrowFunctionExpression([], s);
  }

  g(P, "transformCondition");

  function le(n) {
    return n.replace(/`/g, "\\`");
  }

  g(le, "escapeBackticks");

  function D(n, t) {
    if (typeof n != "string") return n;
    let r = t ? '"' : "<",
        i = t ? "&quot;" : "&lt;",
        s = n.indexOf(r),
        l = n.indexOf("&");
    if (s < 0 && l < 0) return n;
    let o = 0,
        a = "";

    for (; s >= 0 && l >= 0;) s < l ? (o < s && (a += n.substring(o, s)), a += i, o = s + 1, s = n.indexOf(r, o)) : (o < l && (a += n.substring(o, l)), a += "&amp;", o = l + 1, l = n.indexOf("&", o));

    if (s >= 0) do o < s && (a += n.substring(o, s)), a += i, o = s + 1, s = n.indexOf(r, o); while (s >= 0);else for (; l >= 0;) o < l && (a += n.substring(o, l)), a += "&amp;", o = l + 1, l = n.indexOf("&", o);
    return o < n.length ? a + n.substring(o) : a;
  }

  g(D, "escapeHTML");

  function Oe(n, t) {
    let r = $(n.node),
        i = N(n),
        s = t.topLevel && r != "svg" && G.has(r),
        l = oe.indexOf(r) > -1,
        o = r.indexOf("-") > -1,
        a = {
      template: `<${r}`,
      decl: [],
      exprs: [],
      dynamics: [],
      postExprs: [],
      isSVG: s,
      hasCustomElement: o,
      tagName: r,
      renderer: "dom"
    };

    if (r === "html" && i.hydratable && (a.skipTemplate = !0), s && (a.template = "<svg>" + a.template), t.skipId || (a.id = n.scope.generateUidIdentifier("el$")), Pe(n, a), i.contextToCustomElements && (r === "slot" || o) && Ve(n, a), a.template += ">", l || (Ae(n, a, i), a.template += `</${r}>`), t.topLevel && i.hydratable && a.hasHydratableEvent) {
      let p = v(n, "runHydrationEvents", w(n, "dom").moduleName);
      a.postExprs.push(e.expressionStatement(e.callExpression(p, [])));
    }

    return s && (a.template += "</svg>"), a;
  }

  g(Oe, "transformElement$3");

  function M(n, t, r, i, {
    isSVG: s,
    dynamic: l,
    prevId: o,
    isCE: a
  }) {
    let p = N(n),
        f,
        d;
    if ((f = r.split(":")) && f[1] && V.has(f[0]) && (r = f[1], d = f[0]), d === "style") return e.callExpression(e.memberExpression(e.memberExpression(t, e.identifier("style")), e.identifier("setProperty")), [e.stringLiteral(r), i]);
    if (d === "class") return e.callExpression(e.memberExpression(e.memberExpression(t, e.identifier("classList")), e.identifier("toggle")), [e.stringLiteral(r), i]);
    if (r === "style") return e.callExpression(v(n, "style", w(n, "dom").moduleName), o ? [t, i, o] : [t, i]);
    if (!s && r === "class") return e.callExpression(v(n, "className", w(n, "dom").moduleName), [t, i]);
    if (r === "classList") return e.callExpression(v(n, "classList", w(n, "dom").moduleName), o ? [t, i, o] : [t, i]);
    if (p.hydratable && r === "innerHTML") return e.callExpression(v(n, "innerHTML"), [t, i]);
    if (l && r === "textContent") return e.assignmentExpression("=", e.memberExpression(t, e.identifier("data")), i);
    let u = F.has(r),
        m = ke.has(r),
        E = Ie[r];
    if (d !== "attr" && (u || !s && m || a || d === "prop")) return a && !u && !m && d !== "prop" && (r = Me(r)), e.assignmentExpression("=", e.memberExpression(t, e.identifier(E || r)), i);
    let x = r.indexOf(":") > -1;
    r = q[r] || r, !s && (r = r.toLowerCase());
    let b = x && Fe[r.split(":")[0]];
    return b ? e.callExpression(v(n, "setAttributeNS", w(n, "dom").moduleName), [t, e.stringLiteral(b), e.stringLiteral(r), i]) : e.callExpression(v(n, "setAttribute", w(n, "dom").moduleName), [t, e.stringLiteral(r), i]);
  }

  g(M, "setAttr$2");

  function Y(n, t) {
    for (; e.isIdentifier(t);) {
      let r = n.scope.getBinding(t.name);
      if (r) {
        if (e.isVariableDeclarator(r.path.node)) t = r.path.node.init;else return !!e.isFunctionDeclaration(r.path.node);
      } else return !1;
    }

    return e.isFunction(t);
  }

  g(Y, "detectResolvableEventHandler");

  function Pe(n, t) {
    let r = t.id,
        i = !1,
        s,
        l = n.get("openingElement").get("attributes"),
        o = $(n.node),
        a = G.has(o),
        p = o.includes("-"),
        f = n.node.children.length > 0,
        d = N(n),
        u = l.find(x => x.node.name && x.node.name.name === "style" && e.isJSXExpressionContainer(x.node.value) && e.isObjectExpression(x.node.value.expression) && !x.node.value.expression.properties.some(b => e.isSpreadElement(b)));

    if (u) {
      let x = 0,
          b = u.node.value.expression.leadingComments;
      u.node.value.expression.properties.slice().forEach((c, S) => {
        c.computed || (b && (c.value.leadingComments = b), n.get("openingElement").node.attributes.splice(u.key + ++x, 0, e.JSXAttribute(e.JSXNamespacedName(e.JSXIdentifier("style"), e.JSXIdentifier(e.isIdentifier(c.key) ? c.key.name : c.key.value)), e.JSXExpressionContainer(c.value))), u.node.value.expression.properties.splice(S - x - 1, 1));
      }), u.node.value.expression.properties.length || n.get("openingElement").node.attributes.splice(u.key, 1);
    }

    l = n.get("openingElement").get("attributes");
    let m = l.find(x => x.node.name && x.node.name.name === "classList" && e.isJSXExpressionContainer(x.node.value) && e.isObjectExpression(x.node.value.expression) && !x.node.value.expression.properties.some(b => e.isSpreadElement(b) || b.computed || e.isStringLiteral(b.key) && (b.key.value.includes(" ") || b.key.value.includes(":"))));

    if (m) {
      let x = 0,
          b = m.node.value.expression.leadingComments,
          c = m.get("value").get("expression").get("properties");
      c.slice().forEach((S, L) => {
        let y = S.node,
            {
          confident: h,
          value: C
        } = S.get("value").evaluate();
        b && (y.value.leadingComments = b), h ? C && n.get("openingElement").node.attributes.splice(m.key + ++x, 0, e.JSXAttribute(e.JSXIdentifier("class"), e.stringLiteral(e.isIdentifier(y.key) ? y.key.name : y.key.value))) : n.get("openingElement").node.attributes.splice(m.key + ++x, 0, e.JSXAttribute(e.JSXNamespacedName(e.JSXIdentifier("class"), e.JSXIdentifier(e.isIdentifier(y.key) ? y.key.name : y.key.value)), e.JSXExpressionContainer(y.value))), c.splice(L - x - 1, 1);
      }), c.length || n.get("openingElement").node.attributes.splice(m.key, 1);
    }

    l = n.get("openingElement").get("attributes");
    let E = l.filter(x => x.node.name && (x.node.name.name === "class" || x.node.name.name === "className"));

    if (E.length > 1) {
      let x = E[0].node,
          b = [],
          c = [e.TemplateElement({
        raw: ""
      })];

      for (let S = 0; S < E.length; S++) {
        let L = E[S].node,
            y = S === E.length - 1;
        if (e.isJSXExpressionContainer(L.value)) b.push(e.logicalExpression("||", L.value.expression, e.stringLiteral(""))), c.push(e.TemplateElement({
          raw: y ? "" : " "
        }));else {
          let h = c.pop();
          c.push(e.TemplateElement({
            raw: (h ? h.value.raw : "") + `${L.value.value}` + (y ? "" : " ")
          }));
        }
        S && l.splice(l.indexOf(E[S]), 1);
      }

      b.length ? x.value = e.JSXExpressionContainer(e.TemplateLiteral(c, b)) : x.value = e.stringLiteral(c[0].value.raw);
    }

    n.get("openingElement").set("attributes", l.map(x => x.node)), n.get("openingElement").get("attributes").forEach(x => {
      let b = x.node;

      if (e.isJSXSpreadAttribute(b)) {
        t.exprs.push(e.expressionStatement(e.callExpression(v(x, "spread", w(n, "dom").moduleName), [r, X(x.get("argument"), {
          checkMember: !0
        }) ? e.isCallExpression(b.argument) && !b.argument.arguments.length ? b.argument.callee : e.arrowFunctionExpression([], b.argument) : b.argument, e.booleanLiteral(a), e.booleanLiteral(f)]))), i = !0;
        return;
      }

      let c = b.value,
          S = e.isJSXNamespacedName(b.name) ? `${b.name.namespace.name}:${b.name.name.name}` : b.name.name,
          L = e.isJSXNamespacedName(b.name) && V.has(b.name.namespace.name);

      if (e.isJSXExpressionContainer(c) && !S.startsWith("use:")) {
        let y = x.get("value").get("expression").evaluate().value,
            h;
        y !== void 0 && ((h = typeof y) == "string" || h === "number") && (c = e.stringLiteral(String(y)));
      }

      if (e.isJSXNamespacedName(b.name) && L && !e.isJSXExpressionContainer(c) && (b.value = c = e.JSXExpressionContainer(c || e.JSXEmptyExpression())), e.isJSXExpressionContainer(c) && (L || !(e.isStringLiteral(c.expression) || e.isNumericLiteral(c.expression)))) {
        if (S === "ref") {
          for (; e.isTSNonNullExpression(c.expression) || e.isTSAsExpression(c.expression);) c.expression = c.expression.expression;

          let y,
              h = e.isIdentifier(c.expression) && (y = n.scope.getBinding(c.expression.name)) && y.kind === "const";

          if (!h && e.isLVal(c.expression)) {
            let C = n.scope.generateUidIdentifier("_ref$");
            t.exprs.unshift(e.variableDeclaration("const", [e.variableDeclarator(C, c.expression)]), e.expressionStatement(e.conditionalExpression(e.binaryExpression("===", e.unaryExpression("typeof", C), e.stringLiteral("function")), e.callExpression(C, [r]), e.assignmentExpression("=", c.expression, r))));
          } else if (h || e.isFunction(c.expression)) t.exprs.unshift(e.expressionStatement(e.callExpression(c.expression, [r])));else if (e.isCallExpression(c.expression)) {
            let C = n.scope.generateUidIdentifier("_ref$");
            t.exprs.unshift(e.variableDeclaration("const", [e.variableDeclarator(C, c.expression)]), e.expressionStatement(e.logicalExpression("&&", e.binaryExpression("===", e.unaryExpression("typeof", C), e.stringLiteral("function")), e.callExpression(C, [r]))));
          }
        } else if (S.startsWith("use:")) b.name.name.type = "Identifier", t.exprs.unshift(e.expressionStatement(e.callExpression(b.name.name, [r, e.arrowFunctionExpression([], e.isJSXEmptyExpression(c.expression) ? e.booleanLiteral(!0) : c.expression)])));else if (S === "children") s = c;else if (S.startsWith("on")) {
          let y = De(S);

          if (S.startsWith("on:") || S.startsWith("oncapture:")) {
            let h = [e.stringLiteral(S.split(":")[1]), c.expression];
            t.exprs.push(e.expressionStatement(e.callExpression(e.memberExpression(r, e.identifier("addEventListener")), S.startsWith("oncapture:") ? h.concat(e.booleanLiteral(!0)) : h)));
          } else if (d.delegateEvents && (Te.has(y) || d.delegatedEvents.indexOf(y) !== -1)) {
            i = !0, (x.scope.getProgramParent().data.events || (x.scope.getProgramParent().data.events = new Set())).add(y);
            let C = c.expression,
                xe = Y(x, C);
            e.isArrayExpression(C) ? (C.elements.length > 1 && t.exprs.unshift(e.expressionStatement(e.assignmentExpression("=", e.memberExpression(r, e.identifier(`$$${y}Data`)), C.elements[1]))), C = C.elements[0], t.exprs.unshift(e.expressionStatement(e.assignmentExpression("=", e.memberExpression(r, e.identifier(`$$${y}`)), C)))) : e.isFunction(C) || xe ? t.exprs.unshift(e.expressionStatement(e.assignmentExpression("=", e.memberExpression(r, e.identifier(`$$${y}`)), C))) : t.exprs.unshift(e.expressionStatement(e.callExpression(v(n, "addEventListener", w(n, "dom").moduleName), [r, e.stringLiteral(y), C, e.booleanLiteral(!0)])));
          } else {
            let h = c.expression,
                C = Y(x, h);
            e.isArrayExpression(h) ? (h.elements.length > 1 ? h = e.arrowFunctionExpression([e.identifier("e")], e.callExpression(h.elements[0], [h.elements[1], e.identifier("e")])) : h = h.elements[0], t.exprs.unshift(e.expressionStatement(e.callExpression(e.memberExpression(r, e.identifier("addEventListener")), [e.stringLiteral(y), h])))) : e.isFunction(h) || C ? t.exprs.unshift(e.expressionStatement(e.callExpression(e.memberExpression(r, e.identifier("addEventListener")), [e.stringLiteral(y), h]))) : t.exprs.unshift(e.expressionStatement(e.callExpression(v(n, "addEventListener", w(n, "dom").moduleName), [r, e.stringLiteral(y), h])));
          }
        } else if (d.effectWrapper && X(x.get("value").get("expression"), {
          checkMember: !0
        })) {
          let y = r;
          S === "textContent" && (y = x.scope.generateUidIdentifier("el$"), s = e.JSXText(" "), s.extra = {
            raw: " ",
            rawValue: " "
          }, t.decl.push(e.variableDeclarator(y, e.memberExpression(r, e.identifier("firstChild"))))), t.dynamics.push({
            elem: y,
            key: S,
            value: c.expression,
            isSVG: a,
            isCE: p
          });
        } else t.exprs.push(e.expressionStatement(M(x, r, S, c.expression, {
          isSVG: a,
          isCE: p
        })));
      } else {
        if (d.hydratable && S === "$ServerOnly") {
          t.skipTemplate = !0;
          return;
        }

        e.isJSXExpressionContainer(c) && (c = c.expression), S = q[S] || S, c && F.has(S) ? t.exprs.push(e.expressionStatement(M(x, r, S, c, {
          isSVG: a,
          isCE: p
        }))) : (!a && (S = S.toLowerCase()), t.template += ` ${S}`, t.template += c ? `="${le(c.value)}"` : "");
      }
    }), !f && s && n.node.children.push(s), t.hasHydratableEvent = t.hasHydratableEvent || i;
  }

  g(Pe, "transformAttributes$2");

  function Ae(n, t, r) {
    let i = t.id && t.id.name,
        s = $(n.node),
        l,
        o = 0,
        a = T(n.get("children")),
        p = a.map((f, d) => I(f, {
      skipId: !t.id || !ce(a, d, r)
    })).reduce((f, d) => {
      if (!d) return f;
      let u = f.length;
      return d.text && u && f[u - 1].text ? f[u - 1].template += d.template : f.push(d), f;
    }, []);
    p.forEach((f, d) => {
      if (!!f) {
        if (f.tagName && f.renderer !== "dom") throw new Error(`<${f.tagName}> is not supported in <${s}>.
      Wrap the usage with a component that would render this element, eg. Canvas`);

        if (t.template += f.template, f.id) {
          if (f.tagName === "head") return;
          let u;
          r.hydratable && s === "html" && (u = v(n, "getNextMatch", w(n, "dom").moduleName));
          let m = e.memberExpression(e.identifier(i), e.identifier(o === 0 ? "firstChild" : "nextSibling"));
          t.decl.push(e.variableDeclarator(f.id, r.hydratable && s === "html" ? e.callExpression(u, [m, e.stringLiteral(f.tagName)]) : m)), t.decl.push(...f.decl), t.exprs.push(...f.exprs), t.dynamics.push(...f.dynamics), t.hasHydratableEvent = t.hasHydratableEvent || f.hasHydratableEvent, t.hasCustomElement = t.hasCustomElement || f.hasCustomElement, i = f.id.name, l = null, o++;
        } else if (f.exprs.length) {
          let u = v(n, "insert", w(n, "dom").moduleName),
              m = R(a),
              E = r.hydratable && m;

          if (E || je(p, d)) {
            let x, b;
            E && (i = ee(n, t, i, o++, "#")[0].name), l ? x = l : [x, b] = ee(n, t, i, o++, E ? "/" : ""), E || (l = x), t.exprs.push(e.expressionStatement(e.callExpression(u, b ? [t.id, f.exprs[0], x, b] : [t.id, f.exprs[0], x]))), i = x.name;
          } else m ? t.exprs.push(e.expressionStatement(e.callExpression(u, [t.id, f.exprs[0], pe(p, d) || e.nullLiteral()]))) : t.exprs.push(e.expressionStatement(e.callExpression(u, [t.id, f.exprs[0]])));
        } else l = null;
      }
    });
  }

  g(Ae, "transformChildren$2");

  function ee(n, t, r, i, s) {
    let l = n.scope.generateUidIdentifier("el$"),
        o = N(n),
        a;
    return t.template += `<!${s}>`, o.hydratable && s === "/" ? (a = n.scope.generateUidIdentifier("co$"), t.decl.push(e.variableDeclarator(e.arrayPattern([l, a]), e.callExpression(v(n, "getNextMarker", w(n, "dom").moduleName), [e.memberExpression(e.identifier(r), e.identifier("nextSibling"))])))) : t.decl.push(e.variableDeclarator(l, e.memberExpression(e.identifier(r), e.identifier(i === 0 ? "firstChild" : "nextSibling")))), [l, a];
  }

  g(ee, "createPlaceholder");

  function pe(n, t) {
    return n[t + 1] && (n[t + 1].id || pe(n, t + 1));
  }

  g(pe, "nextChild$1");

  function ce(n, t, r) {
    if (n[t - 1]) {
      let i = n[t - 1].node;
      if (e.isJSXExpressionContainer(i) && !e.isJSXEmptyExpression(i.expression) && !_(n[t - 1])) return !0;
      let s;
      if (e.isJSXElement(i) && (s = $(i)) && O(s)) return !0;
    }

    for (let i = t; i < n.length; i++) {
      let s = n[i].node;

      if (e.isJSXExpressionContainer(s)) {
        if (!e.isJSXEmptyExpression(s.expression) && !_(n[i])) return !0;
      } else if (e.isJSXElement(s)) {
        let l = $(s);
        if (O(l) || r.contextToCustomElements && (l === "slot" || l.indexOf("-") > -1) || s.openingElement.attributes.some(a => e.isJSXSpreadAttribute(a) || ["textContent", "innerHTML", "innerText"].includes(a.name.name) || a.name.namespace && a.name.namespace.name === "use" || e.isJSXExpressionContainer(a.value) && !(e.isStringLiteral(a.value.expression) || e.isNumericLiteral(a.value.expression)))) return !0;
        let o = T(n[i].get("children"));
        if (o.length && ce(o, 0, r)) return !0;
      }
    }
  }

  g(ce, "detectExpressions");

  function Ve(n, t) {
    t.exprs.push(e.expressionStatement(e.assignmentExpression("=", e.memberExpression(t.id, e.identifier("_$owner")), e.callExpression(v(n, "getOwner", w(n, "dom").moduleName), []))));
  }

  g(Ve, "contextToCustomElement");

  function We(n, t, r) {
    let i = N(n);
    return t.id ? (Ue(n, t), !(t.exprs.length || t.dynamics.length || t.postExprs.length) && t.decl.declarations.length === 1 ? t.decl.declarations[0].init : e.callExpression(e.arrowFunctionExpression([], e.blockStatement([t.decl, ...t.exprs.concat(He(n, t.dynamics) || [], t.postExprs || []), e.returnStatement(t.id)])), [])) : r && t.dynamic && i.memoWrapper ? e.callExpression(v(n, i.memoWrapper), [t.exprs[0]]) : t.exprs[0];
  }

  g(We, "createTemplate$2");

  function _e(n, t) {
    let r = t.map(i => {
      let s = {
        cooked: i.template,
        raw: i.template
      };
      return e.variableDeclarator(i.id, e.addComment(e.callExpression(v(n, "template", w(n, "dom").moduleName), [e.templateLiteral([e.templateElement(s, !0)], []), e.numericLiteral(i.elementCount)].concat(i.isSVG ? e.booleanLiteral(i.isSVG) : [])), "leading", "#__PURE__"));
    });
    n.node.body.unshift(e.variableDeclaration("const", r));
  }

  g(_e, "appendTemplates$1");

  function Ue(n, t) {
    let {
      hydratable: r
    } = N(n),
        i;

    if (t.template.length) {
      let s, l;

      if (!t.skipTemplate) {
        let o = n.scope.getProgramParent().data.templates || (n.scope.getProgramParent().data.templates = []);
        (s = o.find(a => a.template === t.template)) ? l = s.id : (l = n.scope.generateUidIdentifier("tmpl$"), o.push({
          id: l,
          template: t.template,
          elementCount: t.template.split("<").length - 1,
          isSVG: t.isSVG,
          renderer: "dom"
        }));
      }

      i = e.variableDeclarator(t.id, r ? e.callExpression(v(n, "getNextElement", w(n, "dom").moduleName), l ? [l] : []) : t.hasCustomElement ? e.callExpression(e.memberExpression(e.identifier("document"), e.identifier("importNode")), [l, e.booleanLiteral(!0)]) : e.callExpression(e.memberExpression(l, e.identifier("cloneNode")), [e.booleanLiteral(!0)]));
    }

    t.decl.unshift(i), t.decl = e.variableDeclaration("const", t.decl);
  }

  g(Ue, "registerTemplate");

  function He(n, t) {
    if (!t.length) return;
    let r = N(n),
        i = v(n, r.effectWrapper);

    if (t.length === 1) {
      let p = t[0].key === "classList" || t[0].key === "style" ? e.identifier("_$p") : void 0;
      return t[0].key.startsWith("class:") && !e.isBooleanLiteral(t[0].value) && !e.isUnaryExpression(t[0].value) && (t[0].value = e.unaryExpression("!", e.unaryExpression("!", t[0].value))), e.expressionStatement(e.callExpression(i, [e.arrowFunctionExpression(p ? [p] : [], M(n, t[0].elem, t[0].key, t[0].value, {
        isSVG: t[0].isSVG,
        isCE: t[0].isCE,
        dynamic: !0,
        prevId: p
      }))]));
    }

    let s = [],
        l = [],
        o = [],
        a = e.identifier("_p$");
    return t.forEach(({
      elem: p,
      key: f,
      value: d,
      isSVG: u,
      isCE: m
    }) => {
      let E = n.scope.generateUidIdentifier("v$");

      if (f.startsWith("class:") && !e.isBooleanLiteral(d) && !e.isUnaryExpression(d) && (d = e.unaryExpression("!", e.unaryExpression("!", d))), o.push(E), s.push(e.variableDeclarator(E, d)), f === "classList" || f === "style") {
        let x = e.memberExpression(a, E);
        l.push(e.expressionStatement(e.assignmentExpression("=", x, M(n, p, f, E, {
          isSVG: u,
          isCE: m,
          dynamic: !0,
          prevId: x
        }))));
      } else l.push(e.expressionStatement(e.logicalExpression("&&", e.binaryExpression("!==", E, e.memberExpression(a, E)), M(n, p, f, e.assignmentExpression("=", e.memberExpression(a, E), E), {
        isSVG: u,
        isCE: m,
        dynamic: !0
      }))));
    }), e.expressionStatement(e.callExpression(i, [e.arrowFunctionExpression([a], e.blockStatement([e.variableDeclaration("const", s), ...l, e.returnStatement(a)])), e.objectExpression(o.map(p => e.objectProperty(p, e.identifier("undefined"))))]));
  }

  g(He, "wrapDynamics$1");

  function me(n, t) {
    if (!t.template) return t.exprs[0];
    let r, i;
    if (!Array.isArray(t.template)) r = e.stringLiteral(t.template);else if (t.template.length === 1) r = e.stringLiteral(t.template[0]);else {
      let o = t.template.map(a => e.stringLiteral(a));
      r = e.arrayExpression(o);
    }
    let s = n.scope.getProgramParent().data.templates || (n.scope.getProgramParent().data.templates = []),
        l = s.find(o => e.isArrayExpression(o.template) && e.isArrayExpression(r) ? o.template.elements.every((a, p) => r.elements[p] && a.value === r.elements[p].value) : o.template.value === r.value);
    return l ? i = l.id : (i = n.scope.generateUidIdentifier("tmpl$"), s.push({
      id: i,
      template: r,
      renderer: "ssr"
    })), e.callExpression(v(n, "ssr"), t.template.length > 1 ? [i, ...t.templateValues] : [i]);
  }

  g(me, "createTemplate$1");

  function Be(n, t) {
    let r = t.map(i => e.variableDeclarator(i.id, i.template));
    n.node.body.unshift(e.variableDeclaration("const", r));
  }

  g(Be, "appendTemplates");

  function k(n, t) {
    let r;
    Array.isArray(t) && ([t, ...r] = t), n[n.length - 1] += t, r && r.length && n.push.apply(n, r);
  }

  g(k, "appendToTemplate");

  function qe(n, t) {
    let r = $(n.node),
        i = N(n),
        s = oe.indexOf(r) > -1,
        l = {
      template: [`<${r}`],
      templateValues: [],
      decl: [],
      exprs: [],
      dynamics: [],
      tagName: r,
      renderer: "ssr"
    };
    return t.topLevel && i.hydratable && (l.template.push(""), l.templateValues.push(e.callExpression(v(n, "ssrHydrationKey"), []))), Re(n, l), k(l.template, ">"), s || (ze(n, l, { ...i,
      ...t
    }), k(l.template, `</${r}>`)), l;
  }

  g(qe, "transformElement$2");

  function U(n, t) {
    return n = q[n] || n, !t && (n = n.toLowerCase()), n;
  }

  g(U, "toAttribute");

  function Ge(n, t, r, i, s) {
    let l;
    (l = r.split(":")) && l[1] && V.has(l[0]) && (r = l[1]), r = U(r, s);
    let o = e.callExpression(v(n, "ssrAttribute"), [e.stringLiteral(r), i, e.booleanLiteral(!1)]);
    if (t.template[t.template.length - 1].length) t.template.push(""), t.templateValues.push(o);else {
      let a = t.templateValues.length - 1;
      t.templateValues[a] = e.binaryExpression("+", t.templateValues[a], o);
    }
  }

  g(Ge, "setAttr$1");

  function J(n, t, r) {
    return e.isStringLiteral(t) || e.isNumericLiteral(t) ? t : e.isFunction(t) ? (t.body = J(n, t.body, r), t) : e.isTemplateLiteral(t) ? (t.expressions = t.expressions.map(i => J(n, i, r)), t) : e.isUnaryExpression(t) ? (t.argument = J(n, t.argument, r), t) : e.isBinaryExpression(t) ? (t.left = J(n, t.left, r), t.right = J(n, t.right, r), t) : e.isConditionalExpression(t) ? (t.consequent = J(n, t.consequent, r), t.alternate = J(n, t.alternate, r), t) : e.isLogicalExpression(t) ? (t.right = J(n, t.right, r), t.operator !== "&&" && (t.left = J(n, t.left, r)), t) : e.isCallExpression(t) && e.isFunction(t.callee) ? (e.isBlockStatement(t.callee.body) ? t.callee.body.body = t.callee.body.body.map(i => (e.isReturnStatement(i) && (i.argument = J(n, i.argument, r)), i)) : t.callee.body = J(n, t.callee.body, r), t) : e.callExpression(v(n, "escape"), [t].concat(r ? [e.booleanLiteral(!0)] : []));
  }

  g(J, "escapeExpression");

  function ne(n, t, r) {
    let i = [],
        s = t.find(l => l.node.name.name === n);

    for (let l = 0; l < r.length; l++) {
      let o = r[l].node,
          a = !e.isValidIdentifier(o.name.name.name);
      a || (o.name.name.type = "Identifier"), i.push(e.objectProperty(a ? e.stringLiteral(o.name.name.name) : o.name.name, e.isJSXExpressionContainer(o.value) ? o.value.expression : o.value)), (s || l) && t.splice(r[l].key, 1);
    }

    s && e.isJSXExpressionContainer(s.node.value) && e.isObjectExpression(s.node.value.expression) ? s.node.value.expression.properties.push(...i) : r[0].node = e.jsxAttribute(e.jsxIdentifier(n), e.jsxExpressionContainer(e.objectExpression(i)));
  }

  g(ne, "transformToObject");

  function Re(n, t) {
    let r,
        i = $(n.node),
        s = G.has(i),
        l = n.node.children.length > 0,
        o = n.get("openingElement").get("attributes"),
        a = o.filter(d => e.isJSXNamespacedName(d.node.name) && d.node.name.namespace.name === "style"),
        p = o.filter(d => e.isJSXNamespacedName(d.node.name) && d.node.name.namespace.name === "class");
    p.length && ne("classList", o, p);
    let f = o.filter(d => d.node.name && (d.node.name.name === "class" || d.node.name.name === "className" || d.node.name.name === "classList"));

    if (f.length > 1) {
      let d = f[0].node,
          u = [],
          m = [e.TemplateElement({
        raw: ""
      })];

      for (let E = 0; E < f.length; E++) {
        let x = f[E].node,
            b = E === f.length - 1;

        if (e.isJSXExpressionContainer(x.value)) {
          let c = x.value.expression;

          if (x.name.name === "classList") {
            if (e.isObjectExpression(c) && !c.properties.some(S => e.isSpreadElement(S))) {
              te(n, c, u, m), E && o.splice(o.indexOf(f[E]), 1);
              continue;
            }

            c = e.callExpression(v(n, "ssrClassList"), [c]);
          }

          u.push(e.logicalExpression("||", c, e.stringLiteral(""))), m.push(e.TemplateElement({
            raw: b ? "" : " "
          }));
        } else {
          let c = m.pop();
          m.push(e.TemplateElement({
            raw: (c ? c.value.raw : "") + (E ? " " : "") + `${x.value.value}` + (b ? "" : " ")
          }));
        }

        E && o.splice(o.indexOf(f[E]), 1);
      }

      d.value = e.JSXExpressionContainer(e.TemplateLiteral(m, u));
    }

    a.length && ne("style", o, a), o.forEach(d => {
      let u = d.node;

      if (e.isJSXSpreadAttribute(u)) {
        k(t.template, " "), t.template.push(""), t.templateValues.push(e.callExpression(v(d, "ssrSpread"), [X(d.get("argument"), {
          checkMember: !0,
          native: !0
        }) ? e.isCallExpression(u.argument) && !u.argument.arguments.length ? u.argument.callee : e.arrowFunctionExpression([], u.argument) : u.argument, e.booleanLiteral(s), e.booleanLiteral(l)]));
        return;
      }

      let m = u.value,
          E = e.isJSXNamespacedName(u.name) ? `${u.name.namespace.name}:${u.name.name.name}` : u.name.name,
          x = e.isJSXNamespacedName(u.name) && V.has(u.name.namespace.name);

      if ((e.isJSXNamespacedName(u.name) && x || F.has(E)) && !e.isJSXExpressionContainer(m) && (u.value = m = e.JSXExpressionContainer(m || e.JSXEmptyExpression())), e.isJSXExpressionContainer(m) && (x || F.has(E) || !(e.isStringLiteral(m.expression) || e.isNumericLiteral(m.expression)))) {
        if (E === "ref" || E.startsWith("use:") || E.startsWith("prop:") || E.startsWith("on")) return;
        if (F.has(E)) r = m, E === "innerHTML" && (n.doNotEscape = !0);else {
          let b = !0;

          if ($e.has(E)) {
            t.template.push("");
            let c = e.callExpression(v(d, "ssrAttribute"), [e.stringLiteral(E), m.expression, e.booleanLiteral(!0)]);
            t.templateValues.push(c);
            return;
          }

          if (E === "style") {
            if (e.isJSXExpressionContainer(m) && e.isObjectExpression(m.expression) && !m.expression.properties.some(c => e.isSpreadElement(c))) {
              let c = m.expression.properties.map((L, y) => e.binaryExpression("+", e.stringLiteral((y ? ";" : "") + (e.isIdentifier(L.key) ? L.key.name : L.key.value) + ":"), e.isStringLiteral(L.value) ? e.stringLiteral(D(L.value.value)) : e.isNumericLiteral(L.value) ? L.value : e.isTemplateLiteral(L.value) && L.value.expressions.length === 0 ? e.stringLiteral(D(L.value.quasis[0].value.raw)) : e.callExpression(v(n, "escape"), [L.value, e.booleanLiteral(!0)]))),
                  S = c[0];

              for (let L = 1; L < c.length; L++) S = e.binaryExpression("+", S, c[L]);

              m.expression = S;
            } else m.expression = e.callExpression(v(n, "ssrStyle"), [m.expression]);

            b = !1;
          }

          if (E === "classList") {
            if (e.isObjectExpression(m.expression) && !m.expression.properties.some(c => e.isSpreadElement(c))) {
              let c = [],
                  S = [e.TemplateElement({
                raw: ""
              })];
              te(n, m.expression, c, S), c.length ? c.length === 1 && !S[0].value.raw && !S[1].value.raw ? m.expression = c[0] : m.expression = e.templateLiteral(S, c) : m.expression = e.stringLiteral(S[0].value.raw);
            } else m.expression = e.callExpression(v(n, "ssrClassList"), [m.expression]);

            E = "class", b = !1;
          }

          b && (m.expression = J(n, m.expression, !0)), !b || e.isLiteral(m.expression) || e.isBinaryExpression(m.expression) ? (E = U(E, s), k(t.template, ` ${E}="`), t.template.push('"'), t.templateValues.push(m.expression)) : Ge(d, t, E, m.expression, s);
        }
      } else {
        if (E === "$ServerOnly") return;
        e.isJSXExpressionContainer(m) && (m = m.expression), E = U(E, s), k(t.template, ` ${E}`), k(t.template, m ? `="${D(m.value, !0)}"` : "");
      }
    }), !l && r && n.node.children.push(r);
  }

  g(Re, "transformAttributes$1");

  function te(n, t, r, i) {
    t.properties.forEach((s, l) => {
      let o = t.properties.length - 1 === l,
          a = s.key;

      if (e.isIdentifier(s.key) && !s.computed ? a = e.stringLiteral(a.name) : s.computed ? a = e.callExpression(v(n, "escape"), [s.key, e.booleanLiteral(!0)]) : a = e.stringLiteral(D(s.key.value)), e.isBooleanLiteral(s.value)) {
        if (s.value.value === !0) if (s.computed) r.push(a), i.push(e.TemplateElement({
          raw: o ? "" : " "
        }));else {
          let p = i.pop();
          i.push(e.TemplateElement({
            raw: (p ? p.value.raw : "") + (l ? " " : "") + `${a.value}` + (o ? "" : " ")
          }));
        }
      } else r.push(e.conditionalExpression(s.value, a, e.stringLiteral(""))), i.push(e.TemplateElement({
        raw: o ? "" : " "
      }));
    });
  }

  g(te, "transformClasslistObject");

  function ze(n, t, {
    hydratable: r
  }) {
    let i = n.doNotEscape,
        s = T(n.get("children"));
    s.forEach(l => {
      if (e.isJSXElement(l.node) && $(l.node) === "head") {
        let a = I(l, {
          doNotEscape: i,
          hydratable: !1
        });
        v(n, "NoHydration"), t.template.push(""), t.templateValues.push(e.callExpression(e.identifier("_$NoHydration"), [e.objectExpression([e.objectMethod("get", e.identifier("children"), [], e.blockStatement([e.returnStatement(me(n, a))]))])]));
        return;
      }

      let o = I(l, {
        doNotEscape: i
      });

      if (!!o && (k(t.template, o.template), t.templateValues.push.apply(t.templateValues, o.templateValues || []), o.exprs.length)) {
        let a = R(s),
            p = r && a;
        i || (o.exprs[0] = J(n, o.exprs[0])), p ? (k(t.template, "<!--#-->"), t.template.push(""), t.templateValues.push(o.exprs[0]), k(t.template, "<!--/-->")) : (t.template.push(""), t.templateValues.push(o.exprs[0]));
      }
    });
  }

  g(ze, "transformChildren$1");

  function Ke(n, t) {
    let r = $(n.node),
        i = {
      id: n.scope.generateUidIdentifier("el$"),
      decl: [],
      exprs: [],
      dynamics: [],
      postExprs: [],
      tagName: r,
      renderer: "universal"
    };
    return i.decl.push(e.variableDeclarator(i.id, e.callExpression(v(n, "createElement", w(n, "universal").moduleName), [e.stringLiteral(r)]))), Ze(n, i), Qe(n, i), i;
  }

  g(Ke, "transformElement$1");

  function Ze(n, t) {
    let r,
        i = t.id,
        s = n.node.children.length > 0,
        l = N(n);
    n.get("openingElement").get("attributes").forEach(o => {
      let a = o.node;

      if (e.isJSXSpreadAttribute(a)) {
        t.exprs.push(e.expressionStatement(e.callExpression(v(o, "spread", w(n, "universal").moduleName), [i, X(o.get("argument"), {
          checkMember: !0
        }) ? e.isCallExpression(a.argument) && !a.argument.arguments.length ? a.argument.callee : e.arrowFunctionExpression([], a.argument) : a.argument, e.booleanLiteral(s)])));
        return;
      }

      let p = a.value,
          f = e.isJSXNamespacedName(a.name) ? `${a.name.namespace.name}:${a.name.name.name}` : a.name.name,
          d = e.isJSXNamespacedName(a.name) && a.name.namespace.name === "use";
      if (e.isJSXNamespacedName(a.name) && d && !e.isJSXExpressionContainer(p) && (a.value = p = e.JSXExpressionContainer(p || e.JSXEmptyExpression())), e.isJSXExpressionContainer(p)) {
        if (f === "ref") {
          for (; e.isTSNonNullExpression(p.expression) || e.isTSAsExpression(p.expression);) p.expression = p.expression.expression;

          if (e.isLVal(p.expression)) {
            let u = n.scope.generateUidIdentifier("_ref$");
            t.exprs.unshift(e.variableDeclaration("const", [e.variableDeclarator(u, p.expression)]), e.expressionStatement(e.conditionalExpression(e.binaryExpression("===", e.unaryExpression("typeof", u), e.stringLiteral("function")), e.callExpression(u, [i]), e.assignmentExpression("=", p.expression, i))));
          } else if (e.isFunction(p.expression)) t.exprs.unshift(e.expressionStatement(e.callExpression(p.expression, [i])));else if (e.isCallExpression(p.expression)) {
            let u = n.scope.generateUidIdentifier("_ref$");
            t.exprs.unshift(e.variableDeclaration("const", [e.variableDeclarator(u, p.expression)]), e.expressionStatement(e.logicalExpression("&&", e.binaryExpression("===", e.unaryExpression("typeof", u), e.stringLiteral("function")), e.callExpression(u, [i]))));
          }
        } else f.startsWith("use:") ? (a.name.name.type = "Identifier", t.exprs.unshift(e.expressionStatement(e.callExpression(a.name.name, [i, e.arrowFunctionExpression([], e.isJSXEmptyExpression(p.expression) ? e.booleanLiteral(!0) : p.expression)])))) : f === "children" ? r = p : l.effectWrapper && X(o.get("value").get("expression"), {
          checkMember: !0
        }) ? t.dynamics.push({
          elem: i,
          key: f,
          value: p.expression
        }) : t.exprs.push(e.expressionStatement(A(o, i, f, p.expression)));
      } else t.exprs.push(e.expressionStatement(A(o, i, f, p)));
    }), !s && r && n.node.children.push(r);
  }

  g(Ze, "transformAttributes");

  function A(n, t, r, i, {
    prevId: s
  } = {}) {
    return i || (i = e.booleanLiteral(!0)), e.callExpression(v(n, "setProp", w(n, "universal").moduleName), s ? [t, e.stringLiteral(r), i, s] : [t, e.stringLiteral(r), i]);
  }

  g(A, "setAttr");

  function Qe(n, t) {
    let r = T(n.get("children")),
        i = R(r),
        s = r.map(I).reduce((o, a) => {
      if (!a) return o;
      let p = o.length;
      return a.text && p && o[p - 1].text ? o[p - 1].template += a.template : o.push(a), o;
    }, []),
        l = [];
    s.forEach((o, a) => {
      if (!!o) {
        if (o.tagName && o.renderer !== "universal") throw new Error(`<${o.tagName}> is not supported in <${$(n.node)}>.
        Wrap the usage with a component that would render this element, eg. Canvas`);

        if (o.id) {
          let p = v(n, "insertNode", w(n, "universal").moduleName),
              f = o.id;

          if (o.text) {
            let d = v(n, "createTextNode", w(n, "universal").moduleName);
            i ? t.decl.push(e.variableDeclarator(o.id, e.callExpression(d, [e.templateLiteral([e.templateElement({
              raw: o.template
            })], [])]))) : f = e.callExpression(d, [e.templateLiteral([e.templateElement({
              raw: o.template
            })], [])]);
          }

          l.push(e.expressionStatement(e.callExpression(p, [t.id, f]))), t.decl.push(...o.decl), t.exprs.push(...o.exprs), t.dynamics.push(...o.dynamics);
        } else if (o.exprs.length) {
          let p = v(n, "insert", w(n, "universal").moduleName);
          i ? t.exprs.push(e.expressionStatement(e.callExpression(p, [t.id, o.exprs[0], fe(s, a) || e.nullLiteral()]))) : t.exprs.push(e.expressionStatement(e.callExpression(p, [t.id, o.exprs[0]])));
        }
      }
    }), t.exprs.unshift(...l);
  }

  g(Qe, "transformChildren");

  function fe(n, t) {
    return n[t + 1] && (n[t + 1].id || fe(n, t + 1));
  }

  g(fe, "nextChild");

  function Ye(n, t, r) {
    let i = N(n);
    return t.id ? (t.decl = e.variableDeclaration("const", t.decl), !(t.exprs.length || t.dynamics.length || t.postExprs.length) && t.decl.declarations.length === 1 ? t.decl.declarations[0].init : e.callExpression(e.arrowFunctionExpression([], e.blockStatement([t.decl, ...t.exprs.concat(en(n, t.dynamics) || [], t.postExprs || []), e.returnStatement(t.id)])), [])) : r && t.dynamic && i.memoWrapper ? e.callExpression(v(n, i.memoWrapper), [t.exprs[0]]) : t.exprs[0];
  }

  g(Ye, "createTemplate");

  function en(n, t) {
    if (!t.length) return;
    let r = N(n),
        i = v(n, r.effectWrapper);

    if (t.length === 1) {
      let p = e.identifier("_$p");
      return e.expressionStatement(e.callExpression(i, [e.arrowFunctionExpression([p], A(n, t[0].elem, t[0].key, t[0].value, {
        dynamic: !0,
        prevId: p
      }))]));
    }

    let s = [],
        l = [],
        o = [],
        a = e.identifier("_p$");
    return t.forEach(({
      elem: p,
      key: f,
      value: d
    }) => {
      let u = n.scope.generateUidIdentifier("v$");
      o.push(u), s.push(e.variableDeclarator(u, d));
      let m = e.memberExpression(a, u);
      l.push(e.expressionStatement(e.logicalExpression("&&", e.binaryExpression("!==", u, e.memberExpression(a, u)), e.assignmentExpression("=", e.memberExpression(a, u), A(n, p, f, u, {
        dynamic: !0,
        prevId: m
      })))));
    }), e.expressionStatement(e.callExpression(i, [e.arrowFunctionExpression([a], e.blockStatement([e.variableDeclaration("const", s), ...l, e.returnStatement(a)])), e.objectExpression(o.map(p => e.objectProperty(p, e.identifier("undefined"))))]));
  }

  g(en, "wrapDynamics");

  function H(n) {
    if (e.isJSXIdentifier(n)) {
      if (e.isValidIdentifier(n.name)) n.type = "Identifier";else return e.stringLiteral(n.name);
    } else if (e.isJSXMemberExpression(n)) {
      let t = H(n.property),
          r = e.isStringLiteral(t);
      return e.memberExpression(H(n.object), t, r);
    }
    return n;
  }

  g(H, "convertComponentIdentifier");

  function B(n) {
    if (e.isJSXIdentifier(n)) {
      if (e.isValidIdentifier(n.name)) n.type = "Identifier";else return e.stringLiteral(n.name);
    } else {
      if (e.isJSXMemberExpression(n)) return e.memberExpression(B(n.object), B(n.property));
      if (e.isJSXNamespacedName(n)) return e.stringLiteral(`${n.namespace.name}:${n.name.name}`);
    }
    return n;
  }

  g(B, "convertJSXIdentifier");

  function nn(n) {
    let t = [],
        r = N(n),
        i = H(n.node.openingElement.name),
        s = [],
        l = [],
        o = !1,
        a = n.node.children.length > 0;

    if (r.builtIns.indexOf(i.name) > -1 && !n.scope.hasBinding(i.name)) {
      let d = v(n, i.name);
      i.name = d.name;
    }

    n.get("openingElement").get("attributes").forEach(d => {
      let u = d.node;
      if (e.isJSXSpreadAttribute(u)) l.length && (s.push(e.objectExpression(l)), l = []), s.push(X(d.get("argument"), {
        checkMember: !0
      }) && (o = !0) ? e.isCallExpression(u.argument) && !u.argument.arguments.length && !e.isCallExpression(u.argument.callee) && !e.isMemberExpression(u.argument.callee) ? u.argument.callee : e.arrowFunctionExpression([], u.argument) : u.argument);else {
        let m = u.value || e.booleanLiteral(!0),
            E = B(u.name),
            x = E.name;
        if (a && x === "children") return;
        if (e.isJSXExpressionContainer(m)) {
          if (x === "ref") {
            if (r.generate === "ssr") return;

            for (; e.isTSNonNullExpression(m.expression) || e.isTSAsExpression(m.expression);) m.expression = m.expression.expression;

            let b,
                c = e.isIdentifier(m.expression) && (b = n.scope.getBinding(m.expression.name)) && b.kind === "const";

            if (!c && e.isLVal(m.expression)) {
              let S = n.scope.generateUidIdentifier("_ref$");
              l.push(e.objectMethod("method", e.identifier("ref"), [e.identifier("r$")], e.blockStatement([e.variableDeclaration("const", [e.variableDeclarator(S, m.expression)]), e.expressionStatement(e.conditionalExpression(e.binaryExpression("===", e.unaryExpression("typeof", S), e.stringLiteral("function")), e.callExpression(S, [e.identifier("r$")]), e.assignmentExpression("=", m.expression, e.identifier("r$"))))])));
            } else if (c || e.isFunction(m.expression)) l.push(e.objectProperty(e.identifier("ref"), m.expression));else if (e.isCallExpression(m.expression)) {
              let S = n.scope.generateUidIdentifier("_ref$");
              l.push(e.objectMethod("method", e.identifier("ref"), [e.identifier("r$")], e.blockStatement([e.variableDeclaration("const", [e.variableDeclarator(S, m.expression)]), e.expressionStatement(e.logicalExpression("&&", e.binaryExpression("===", e.unaryExpression("typeof", S), e.stringLiteral("function")), e.callExpression(S, [e.identifier("r$")])))])));
            }
          } else if (X(d.get("value").get("expression"), {
            checkMember: !0,
            checkTags: !0
          })) {
            let b = r.wrapConditionals && r.generate !== "ssr" && (e.isLogicalExpression(m.expression) || e.isConditionalExpression(m.expression)) ? P(d.get("value").get("expression"), !0) : e.arrowFunctionExpression([], m.expression);
            l.push(e.objectMethod("get", E, [], e.blockStatement([e.returnStatement(b.body)]), !e.isValidIdentifier(x)));
          } else l.push(e.objectProperty(E, m.expression));
        } else l.push(e.objectProperty(E, m));
      }
    });
    let p = tn(n.get("children"), r);
    if (p && p[0]) if (p[1]) {
      let d = e.isCallExpression(p[0]) && e.isFunction(p[0].callee) ? p[0].callee.body : p[0].body;
      l.push(e.objectMethod("get", e.identifier("children"), [], e.isExpression(d) ? e.blockStatement([e.returnStatement(d)]) : d));
    } else l.push(e.objectProperty(e.identifier("children"), p[0]));
    (l.length || !s.length) && s.push(e.objectExpression(l)), (s.length > 1 || o) && (s = [e.callExpression(v(n, "mergeProps"), s)]);
    let f = [i, s[0]];

    if (t.push(e.callExpression(v(n, "createComponent"), f)), t.length > 1) {
      let d = t.pop();
      t = [e.callExpression(e.arrowFunctionExpression([], e.blockStatement([...t, e.returnStatement(d)])), [])];
    }

    return {
      exprs: t,
      template: "",
      component: !0
    };
  }

  g(nn, "transformComponent");

  function tn(n, t) {
    let r = T(n);
    if (!r.length) return;
    let i = !1,
        s = r.reduce((l, o) => {
      if (e.isJSXText(o.node)) {
        let a = ie.decode(z(o.node.extra.raw));
        a.length && l.push(e.stringLiteral(a));
      } else {
        let a = I(o, {
          topLevel: !0,
          componentChild: !0
        });
        i = i || a.dynamic, l.push(K(t, o, a)(o, a, r.length > 1));
      }

      return l;
    }, []);
    return s.length === 1 ? (s = s[0], !e.isJSXExpressionContainer(r[0]) && !e.isJSXSpreadChild(r[0]) && !e.isJSXText(r[0]) && (s = e.isCallExpression(s) && !s.arguments.length && !e.isIdentifier(s.callee) ? s.callee : e.arrowFunctionExpression([], s), i = !0)) : (s = e.arrowFunctionExpression([], e.arrayExpression(s)), i = !0), [s, i];
  }

  g(tn, "transformComponentChildren");

  function rn(n, t, r) {
    let i = T(n),
        s = i.reduce((l, o) => {
      if (e.isJSXText(o.node)) {
        let a = ie.decode(z(o.node.extra.raw));
        a.length && l.push(e.stringLiteral(a));
      } else {
        let a = I(o, {
          topLevel: !0,
          fragmentChild: !0
        });
        l.push(K(r, o, a)(o, a, !0));
      }

      return l;
    }, []);
    t.exprs.push(s.length === 1 ? s[0] : e.arrayExpression(s));
  }

  g(rn, "transformFragmentChildren");

  function re(n) {
    let t = N(n),
        r = sn(n),
        i = I(n, e.isJSXFragment(n.node) ? {} : {
      topLevel: !0
    }),
        s = K(t, n, i);
    n.replaceWith(r(s(n, i, !1)));
  }

  g(re, "transformJSX");

  function sn(n) {
    let t;
    return n.traverse({
      ThisExpression(r) {
        t || (t = r.scope.generateUidIdentifier("self$")), r.replaceWith(t);
      }

    }), r => {
      if (t) {
        let i = n.getStatementParent(),
            s = e.variableDeclaration("const", [e.variableDeclarator(t, e.thisExpression())]);
        i.insertBefore(s);
      }

      return r;
    };
  }

  g(sn, "transformThis");

  function I(n, t = {}) {
    let r = N(n),
        i = n.node,
        s;
    if (e.isJSXElement(i)) return on(r, n, t);

    if (e.isJSXFragment(i)) {
      let l = {
        template: "",
        decl: [],
        exprs: [],
        dynamics: []
      };
      return rn(n.get("children"), l, r), l;
    } else if (e.isJSXText(i) || (s = _(n))) {
      let l = s !== void 0 ? t.doNotEscape ? s.toString() : D(s.toString()) : z(i.extra.raw);
      if (!l.length) return null;
      let o = {
        template: r.generate === "ssr" ? l : le(l),
        decl: [],
        exprs: [],
        dynamics: [],
        postExprs: [],
        text: !0
      };
      return !t.skipId && r.generate !== "ssr" && (o.id = n.scope.generateUidIdentifier("el$")), o;
    } else if (e.isJSXExpressionContainer(i)) {
      if (e.isJSXEmptyExpression(i.expression)) return null;
      if (!X(n.get("expression"), {
        checkMember: !0,
        checkTags: !!t.componentChild,
        native: !t.componentChild
      })) return {
        exprs: [i.expression],
        template: ""
      };
      let l = r.wrapConditionals && r.generate !== "ssr" && (e.isLogicalExpression(i.expression) || e.isConditionalExpression(i.expression)) ? P(n.get("expression"), t.componentChild) : !t.componentChild && (r.generate !== "ssr" || t.fragmentChild) && e.isCallExpression(i.expression) && !e.isMemberExpression(i.expression.callee) && i.expression.arguments.length === 0 ? i.expression.callee : e.arrowFunctionExpression([], i.expression);
      return {
        exprs: l.length > 1 ? [e.callExpression(e.arrowFunctionExpression([], e.blockStatement([l[0], e.returnStatement(l[1])])), [])] : [l],
        template: "",
        dynamic: !0
      };
    } else if (e.isJSXSpreadChild(i)) return X(n.get("expression"), {
      checkMember: !0,
      native: !t.componentChild
    }) ? {
      exprs: [e.arrowFunctionExpression([], i.expression)],
      template: "",
      dynamic: !0
    } : {
      exprs: [i.expression],
      template: ""
    };
  }

  g(I, "transformNode");

  function K(n, t, r) {
    return r.tagName && r.renderer === "dom" || n.generate === "dom" ? We : r.renderer === "ssr" || n.generate === "ssr" ? me : Ye;
  }

  g(K, "getCreateTemplate");

  function on(n, t, r = {}) {
    let i = t.node,
        s = $(i);
    if (O(s)) return nn(t);
    let l;

    for (var o of n.renderers ?? []) if (o.elements.indexOf(s) !== -1) {
      l = o;
      break;
    }

    return l?.name === "dom" || N(t).generate === "dom" ? Oe(t, r) : N(t).generate === "ssr" ? qe(t, r) : Ke(t);
  }

  g(on, "transformElement");
  var an = g(n => {
    if (n.scope.data.events && n.node.body.push(e.expressionStatement(e.callExpression(v(n, "delegateEvents", w(n, "dom").moduleName), [e.arrayExpression(Array.from(n.scope.data.events).map(t => e.stringLiteral(t)))]))), n.scope.data.templates?.length) {
      let t = n.scope.data.templates.filter(i => i.renderer === "dom"),
          r = n.scope.data.templates.filter(i => i.renderer === "ssr");
      t.length > 0 && _e(n, t), r.length > 0 && Be(n, r);
    }
  }, "postprocess"),
      ln = {
    moduleName: "dom",
    generate: "dom",
    hydratable: !1,
    delegateEvents: !0,
    delegatedEvents: [],
    builtIns: [],
    requireImportSource: !1,
    wrapConditionals: !0,
    contextToCustomElements: !1,
    staticMarker: "@once",
    effectWrapper: "effect",
    memoWrapper: "memo"
  },
      pn = g((n, {
    opts: t
  }) => {
    let i = (n.hub.file.metadata.config = Object.assign({}, ln, t)).requireImportSource;

    if (i) {
      let s = n.hub.file.ast.comments;

      for (let l = 0; l < s.length; l++) {
        let o = s[l],
            a = o.value.indexOf("@jsxImportSource");
        if (a > -1 && o.value.slice(a).includes(i)) return;
      }

      n.skip();
    }
  }, "preprocess"),
      cn = g(() => ({
    name: "JSX DOM Expressions",
    inherits: Je.default,
    visitor: {
      JSXElement: re,
      JSXFragment: re,
      Program: {
        enter: pn,
        exit: an
      }
    }
  }), "index");
  ue.exports = cn;
});
var de = Q(Z()),
    mn = Q(Z()),
    {
  default: fn,
  ...un
} = mn,
    gn = de.default ?? fn ?? un;
export { gn as default };