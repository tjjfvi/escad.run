/* esm.sh - esbuild bundle(babel-plugin-jsx-dom-expressions@0.33.7) esnext production */
import __html_entities$ from "/transpiled/https://esm.sh/v96/html-entities@2.3.2/esnext/html-entities.js";
import ___babel_helper_module_imports$ from "/transpiled/https://esm.sh/v96/@babel/helper-module-imports@7.16.0/esnext/helper-module-imports.js";
import ___babel_types$ from "/transpiled/https://esm.sh/v96/@babel/types@7.19.3/esnext/types.js";
import * as ___babel_plugin_syntax_jsx$ from "/transpiled/https://esm.sh/v96/@babel/plugin-syntax-jsx@7.18.6/esnext/plugin-syntax-jsx.js";
var de = Object.create;
var z = Object.defineProperty;
var xe = Object.getOwnPropertyDescriptor;
var ge = Object.getOwnPropertyNames;
var Ee = Object.getPrototypeOf,
    be = Object.prototype.hasOwnProperty;

var M = (n => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(n, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : n)(function (n) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + n + '" is not supported');
});

var Se = (n, t) => () => (t || n((t = {
  exports: {}
}).exports, t), t.exports);

var ve = (n, t, r, i) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of ge(t)) !be.call(n, s) && s !== r && z(n, s, {
    get: () => t[s],
    enumerable: !(i = xe(t, s)) || i.enumerable
  });
  return n;
};

var ye = (n, t, r) => (r = n != null ? de(Ee(n)) : {}, ve(t || !n || !n.__esModule ? z(r, "default", {
  value: n,
  enumerable: !0
}) : r, n));

var me = Se((un, ce) => {
  "use strict";

  var he = ___babel_plugin_syntax_jsx$,
      Le = ___babel_types$,
      Ce = ___babel_helper_module_imports$,
      ne = __html_entities$;

  function we(n) {
    return n && typeof n == "object" && "default" in n ? n : {
      default: n
    };
  }

  function Ne(n) {
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

  var Xe = we(he),
      e = Ne(Le),
      te = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
      Je = new Set(te),
      $e = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...te]),
      T = new Set(["innerHTML", "textContent", "innerText", "children"]),
      H = {
    className: "class",
    htmlFor: "for"
  },
      ke = {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly"
  },
      Ie = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
      B = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
      Te = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
  },
      re = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"],
      A = new Set(["class", "on", "oncapture", "style", "use", "prop", "attr"]);

  function w(n) {
    return n.hub.file.metadata.config;
  }

  var C = (n, t) => {
    let r = w(n);
    return r?.renderers?.find(i => i.name === t) ?? r;
  };

  function S(n, t, r) {
    let i = n.scope.getProgramParent().data.imports || (n.scope.getProgramParent().data.imports = new Map());

    if (r = r || w(n).moduleName, i.has(`${r}:${t}`)) {
      let s = i.get(`${r}:${t}`);
      return e.cloneDeep(s);
    } else {
      let s = Ce.addNamed(n, t, r, {
        nameHint: `_$${t}`
      });
      return i.set(`${r}:${t}`, s), s;
    }
  }

  function ie(n) {
    return e.isJSXMemberExpression(n) ? `${ie(n.object)}.${n.property.name}` : e.isJSXIdentifier(n) || e.isIdentifier(n) ? n.name : `${n.namespace.name}:${n.name.name}`;
  }

  function J(n) {
    let t = n.openingElement.name;
    return ie(t);
  }

  function j(n) {
    return n[0] && n[0].toLowerCase() !== n[0] || n.includes(".") || /[^a-zA-Z]/.test(n[0]);
  }

  function N(n, {
    checkMember: t,
    checkTags: r,
    checkCallExpressions: i = !0,
    native: s
  }) {
    let l = w(n);
    l.generate === "ssr" && s && (t = !1, i = !1);
    let o = n.node;
    if (e.isFunction(o)) return !1;
    if (o.leadingComments && o.leadingComments[0] && o.leadingComments[0].value.trim() === l.staticMarker) return o.leadingComments.shift(), !1;
    if (i && e.isCallExpression(o) || t && (e.isMemberExpression(o) || e.isOptionalMemberExpression(o)) || r && (e.isJSXElement(o) || e.isJSXFragment(o))) return !0;
    let a;
    return n.traverse({
      Function(p) {
        e.isObjectMethod(p.node) && p.node.computed && (a = N(p.get("key"), {
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

  function V(n) {
    let t = n.node,
        r,
        i;
    return e.isJSXExpressionContainer(t) && e.isJSXElement(n.parent) && !j(J(n.parent)) && !e.isSequenceExpression(t.expression) && (r = n.get("expression").evaluate().value) !== void 0 && ((i = typeof r) == "string" || i === "number") && r;
  }

  function I(n) {
    return n.filter(({
      node: t
    }) => !(e.isJSXExpressionContainer(t) && e.isJSXEmptyExpression(t.expression)) && (!e.isJSXText(t) || !/^[\r\n]\s*$/.test(t.extra.raw)));
  }

  function q(n) {
    let t = 0;
    return n.forEach(r => {
      let i = r.node;
      !(e.isJSXExpressionContainer(i) && e.isJSXEmptyExpression(i.expression)) && (!e.isJSXText(i) || !/^\s*$/.test(i.extra.raw)) && t++;
    }), t > 1;
  }

  function G(n) {
    return n = n.replace(/\r/g, ""), /\n/g.test(n) && (n = n.split(`
`).map((t, r) => r ? t.replace(/^\s*/g, "") : t).filter(t => !/^\s*$/.test(t)).join(" ")), n.replace(/\s+/g, " ");
  }

  function Fe(n) {
    return n.slice(2).toLowerCase();
  }

  function De(n) {
    return n.toLowerCase().replace(/-([a-z])/g, (t, r) => r.toUpperCase());
  }

  function Me(n, t) {
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

  function O(n, t, r) {
    let i = w(n),
        s = n.node,
        l = S(n, i.memoWrapper),
        o,
        a,
        p;
    if (e.isConditionalExpression(s) && (N(n.get("consequent"), {
      checkTags: !0
    }) || N(n.get("alternate"), {
      checkTags: !0
    }))) o = N(n.get("test"), {
      checkMember: !0
    }), o && (a = s.test, e.isBinaryExpression(a) || (a = e.unaryExpression("!", e.unaryExpression("!", a, !0), !0)), p = t ? e.callExpression(l, [e.arrowFunctionExpression([], a), e.booleanLiteral(!0)]) : n.scope.generateUidIdentifier("_c$"), s.test = e.callExpression(p, []), (e.isConditionalExpression(s.consequent) || e.isLogicalExpression(s.consequent)) && (s.consequent = O(n.get("consequent"), t, !0)), (e.isConditionalExpression(s.alternate) || e.isLogicalExpression(s.alternate)) && (s.alternate = O(n.get("alternate"), t, !0)));else if (e.isLogicalExpression(s)) {
      let f = n;

      for (; f.node.operator !== "&&" && e.isLogicalExpression(f.node.left);) f = f.get("left");

      f.node.operator === "&&" && N(f.get("right"), {
        checkTags: !0
      }) && (o = N(f.get("left"), {
        checkMember: !0
      })), o && (a = f.node.left, e.isBinaryExpression(a) || (a = e.unaryExpression("!", e.unaryExpression("!", a, !0), !0)), p = t ? e.callExpression(l, [e.arrowFunctionExpression([], a), e.booleanLiteral(!0)]) : n.scope.generateUidIdentifier("_c$"), f.node.left = e.callExpression(p, []));
    }

    if (o && !t) {
      let f = [e.variableDeclaration("const", [e.variableDeclarator(p, i.memoWrapper ? e.callExpression(l, [e.arrowFunctionExpression([], a), e.booleanLiteral(!0)]) : e.arrowFunctionExpression([], a))]), e.arrowFunctionExpression([], s)];
      return r ? e.callExpression(e.arrowFunctionExpression([], e.blockStatement([f[0], e.returnStatement(f[1])])), []) : f;
    }

    return r ? s : e.arrowFunctionExpression([], s);
  }

  function se(n) {
    return n.replace(/`/g, "\\`");
  }

  function F(n, t) {
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

  function je(n, t) {
    let r = J(n.node),
        i = w(n),
        s = t.topLevel && r != "svg" && B.has(r),
        l = re.indexOf(r) > -1,
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

    if (r === "html" && i.hydratable && (a.skipTemplate = !0), s && (a.template = "<svg>" + a.template), t.skipId || (a.id = n.scope.generateUidIdentifier("el$")), Oe(n, a), i.contextToCustomElements && (r === "slot" || o) && Ae(n, a), a.template += ">", l || (Pe(n, a, i), a.template += `</${r}>`), t.topLevel && i.hydratable && a.hasHydratableEvent) {
      let p = S(n, "runHydrationEvents", C(n, "dom").moduleName);
      a.postExprs.push(e.expressionStatement(e.callExpression(p, [])));
    }

    return s && (a.template += "</svg>"), a;
  }

  function D(n, t, r, i, {
    isSVG: s,
    dynamic: l,
    prevId: o,
    isCE: a
  }) {
    let p = w(n),
        f,
        d;
    if ((f = r.split(":")) && f[1] && A.has(f[0]) && (r = f[1], d = f[0]), d === "style") return e.callExpression(e.memberExpression(e.memberExpression(t, e.identifier("style")), e.identifier("setProperty")), [e.stringLiteral(r), i]);
    if (d === "class") return e.callExpression(e.memberExpression(e.memberExpression(t, e.identifier("classList")), e.identifier("toggle")), [e.stringLiteral(r), i]);
    if (r === "style") return e.callExpression(S(n, "style", C(n, "dom").moduleName), o ? [t, i, o] : [t, i]);
    if (!s && r === "class") return e.callExpression(S(n, "className", C(n, "dom").moduleName), [t, i]);
    if (r === "classList") return e.callExpression(S(n, "classList", C(n, "dom").moduleName), o ? [t, i, o] : [t, i]);
    if (p.hydratable && r === "innerHTML") return e.callExpression(S(n, "innerHTML"), [t, i]);
    if (l && r === "textContent") return e.assignmentExpression("=", e.memberExpression(t, e.identifier("data")), i);
    let u = T.has(r),
        m = $e.has(r),
        g = ke[r];
    if (d !== "attr" && (u || !s && m || a || d === "prop")) return a && !u && !m && d !== "prop" && (r = De(r)), e.assignmentExpression("=", e.memberExpression(t, e.identifier(g || r)), i);
    let x = r.indexOf(":") > -1;
    r = H[r] || r, !s && (r = r.toLowerCase());
    let E = x && Te[r.split(":")[0]];
    return E ? e.callExpression(S(n, "setAttributeNS", C(n, "dom").moduleName), [t, e.stringLiteral(E), e.stringLiteral(r), i]) : e.callExpression(S(n, "setAttribute", C(n, "dom").moduleName), [t, e.stringLiteral(r), i]);
  }

  function K(n, t) {
    for (; e.isIdentifier(t);) {
      let r = n.scope.getBinding(t.name);
      if (r) {
        if (e.isVariableDeclarator(r.path.node)) t = r.path.node.init;else return !!e.isFunctionDeclaration(r.path.node);
      } else return !1;
    }

    return e.isFunction(t);
  }

  function Oe(n, t) {
    let r = t.id,
        i = !1,
        s,
        l = n.get("openingElement").get("attributes"),
        o = J(n.node),
        a = B.has(o),
        p = o.includes("-"),
        f = n.node.children.length > 0,
        d = w(n),
        u = l.find(x => x.node.name && x.node.name.name === "style" && e.isJSXExpressionContainer(x.node.value) && e.isObjectExpression(x.node.value.expression) && !x.node.value.expression.properties.some(E => e.isSpreadElement(E)));

    if (u) {
      let x = 0,
          E = u.node.value.expression.leadingComments;
      u.node.value.expression.properties.slice().forEach((c, b) => {
        c.computed || (E && (c.value.leadingComments = E), n.get("openingElement").node.attributes.splice(u.key + ++x, 0, e.JSXAttribute(e.JSXNamespacedName(e.JSXIdentifier("style"), e.JSXIdentifier(e.isIdentifier(c.key) ? c.key.name : c.key.value)), e.JSXExpressionContainer(c.value))), u.node.value.expression.properties.splice(b - x - 1, 1));
      }), u.node.value.expression.properties.length || n.get("openingElement").node.attributes.splice(u.key, 1);
    }

    l = n.get("openingElement").get("attributes");
    let m = l.find(x => x.node.name && x.node.name.name === "classList" && e.isJSXExpressionContainer(x.node.value) && e.isObjectExpression(x.node.value.expression) && !x.node.value.expression.properties.some(E => e.isSpreadElement(E) || E.computed || e.isStringLiteral(E.key) && (E.key.value.includes(" ") || E.key.value.includes(":"))));

    if (m) {
      let x = 0,
          E = m.node.value.expression.leadingComments,
          c = m.get("value").get("expression").get("properties");
      c.slice().forEach((b, h) => {
        let v = b.node,
            {
          confident: y,
          value: L
        } = b.get("value").evaluate();
        E && (v.value.leadingComments = E), y ? L && n.get("openingElement").node.attributes.splice(m.key + ++x, 0, e.JSXAttribute(e.JSXIdentifier("class"), e.stringLiteral(e.isIdentifier(v.key) ? v.key.name : v.key.value))) : n.get("openingElement").node.attributes.splice(m.key + ++x, 0, e.JSXAttribute(e.JSXNamespacedName(e.JSXIdentifier("class"), e.JSXIdentifier(e.isIdentifier(v.key) ? v.key.name : v.key.value)), e.JSXExpressionContainer(v.value))), c.splice(h - x - 1, 1);
      }), c.length || n.get("openingElement").node.attributes.splice(m.key, 1);
    }

    l = n.get("openingElement").get("attributes");
    let g = l.filter(x => x.node.name && (x.node.name.name === "class" || x.node.name.name === "className"));

    if (g.length > 1) {
      let x = g[0].node,
          E = [],
          c = [e.TemplateElement({
        raw: ""
      })];

      for (let b = 0; b < g.length; b++) {
        let h = g[b].node,
            v = b === g.length - 1;
        if (e.isJSXExpressionContainer(h.value)) E.push(e.logicalExpression("||", h.value.expression, e.stringLiteral(""))), c.push(e.TemplateElement({
          raw: v ? "" : " "
        }));else {
          let y = c.pop();
          c.push(e.TemplateElement({
            raw: (y ? y.value.raw : "") + `${h.value.value}` + (v ? "" : " ")
          }));
        }
        b && l.splice(l.indexOf(g[b]), 1);
      }

      E.length ? x.value = e.JSXExpressionContainer(e.TemplateLiteral(c, E)) : x.value = e.stringLiteral(c[0].value.raw);
    }

    n.get("openingElement").set("attributes", l.map(x => x.node)), n.get("openingElement").get("attributes").forEach(x => {
      let E = x.node;

      if (e.isJSXSpreadAttribute(E)) {
        t.exprs.push(e.expressionStatement(e.callExpression(S(x, "spread", C(n, "dom").moduleName), [r, N(x.get("argument"), {
          checkMember: !0
        }) ? e.isCallExpression(E.argument) && !E.argument.arguments.length ? E.argument.callee : e.arrowFunctionExpression([], E.argument) : E.argument, e.booleanLiteral(a), e.booleanLiteral(f)]))), i = !0;
        return;
      }

      let c = E.value,
          b = e.isJSXNamespacedName(E.name) ? `${E.name.namespace.name}:${E.name.name.name}` : E.name.name,
          h = e.isJSXNamespacedName(E.name) && A.has(E.name.namespace.name);

      if (e.isJSXExpressionContainer(c) && !b.startsWith("use:")) {
        let v = x.get("value").get("expression").evaluate().value,
            y;
        v !== void 0 && ((y = typeof v) == "string" || y === "number") && (c = e.stringLiteral(String(v)));
      }

      if (e.isJSXNamespacedName(E.name) && h && !e.isJSXExpressionContainer(c) && (E.value = c = e.JSXExpressionContainer(c || e.JSXEmptyExpression())), e.isJSXExpressionContainer(c) && (h || !(e.isStringLiteral(c.expression) || e.isNumericLiteral(c.expression)))) {
        if (b === "ref") {
          for (; e.isTSNonNullExpression(c.expression) || e.isTSAsExpression(c.expression);) c.expression = c.expression.expression;

          let v,
              y = e.isIdentifier(c.expression) && (v = n.scope.getBinding(c.expression.name)) && v.kind === "const";

          if (!y && e.isLVal(c.expression)) {
            let L = n.scope.generateUidIdentifier("_ref$");
            t.exprs.unshift(e.variableDeclaration("const", [e.variableDeclarator(L, c.expression)]), e.expressionStatement(e.conditionalExpression(e.binaryExpression("===", e.unaryExpression("typeof", L), e.stringLiteral("function")), e.callExpression(L, [r]), e.assignmentExpression("=", c.expression, r))));
          } else if (y || e.isFunction(c.expression)) t.exprs.unshift(e.expressionStatement(e.callExpression(c.expression, [r])));else if (e.isCallExpression(c.expression)) {
            let L = n.scope.generateUidIdentifier("_ref$");
            t.exprs.unshift(e.variableDeclaration("const", [e.variableDeclarator(L, c.expression)]), e.expressionStatement(e.logicalExpression("&&", e.binaryExpression("===", e.unaryExpression("typeof", L), e.stringLiteral("function")), e.callExpression(L, [r]))));
          }
        } else if (b.startsWith("use:")) E.name.name.type = "Identifier", t.exprs.unshift(e.expressionStatement(e.callExpression(E.name.name, [r, e.arrowFunctionExpression([], e.isJSXEmptyExpression(c.expression) ? e.booleanLiteral(!0) : c.expression)])));else if (b === "children") s = c;else if (b.startsWith("on")) {
          let v = Fe(b);

          if (b.startsWith("on:") || b.startsWith("oncapture:")) {
            let y = [e.stringLiteral(b.split(":")[1]), c.expression];
            t.exprs.push(e.expressionStatement(e.callExpression(e.memberExpression(r, e.identifier("addEventListener")), b.startsWith("oncapture:") ? y.concat(e.booleanLiteral(!0)) : y)));
          } else if (d.delegateEvents && (Ie.has(v) || d.delegatedEvents.indexOf(v) !== -1)) {
            i = !0, (x.scope.getProgramParent().data.events || (x.scope.getProgramParent().data.events = new Set())).add(v);
            let L = c.expression,
                ue = K(x, L);
            e.isArrayExpression(L) ? (L.elements.length > 1 && t.exprs.unshift(e.expressionStatement(e.assignmentExpression("=", e.memberExpression(r, e.identifier(`$$${v}Data`)), L.elements[1]))), L = L.elements[0], t.exprs.unshift(e.expressionStatement(e.assignmentExpression("=", e.memberExpression(r, e.identifier(`$$${v}`)), L)))) : e.isFunction(L) || ue ? t.exprs.unshift(e.expressionStatement(e.assignmentExpression("=", e.memberExpression(r, e.identifier(`$$${v}`)), L))) : t.exprs.unshift(e.expressionStatement(e.callExpression(S(n, "addEventListener", C(n, "dom").moduleName), [r, e.stringLiteral(v), L, e.booleanLiteral(!0)])));
          } else {
            let y = c.expression,
                L = K(x, y);
            e.isArrayExpression(y) ? (y.elements.length > 1 ? y = e.arrowFunctionExpression([e.identifier("e")], e.callExpression(y.elements[0], [y.elements[1], e.identifier("e")])) : y = y.elements[0], t.exprs.unshift(e.expressionStatement(e.callExpression(e.memberExpression(r, e.identifier("addEventListener")), [e.stringLiteral(v), y])))) : e.isFunction(y) || L ? t.exprs.unshift(e.expressionStatement(e.callExpression(e.memberExpression(r, e.identifier("addEventListener")), [e.stringLiteral(v), y]))) : t.exprs.unshift(e.expressionStatement(e.callExpression(S(n, "addEventListener", C(n, "dom").moduleName), [r, e.stringLiteral(v), y])));
          }
        } else if (d.effectWrapper && N(x.get("value").get("expression"), {
          checkMember: !0
        })) {
          let v = r;
          b === "textContent" && (v = x.scope.generateUidIdentifier("el$"), s = e.JSXText(" "), s.extra = {
            raw: " ",
            rawValue: " "
          }, t.decl.push(e.variableDeclarator(v, e.memberExpression(r, e.identifier("firstChild"))))), t.dynamics.push({
            elem: v,
            key: b,
            value: c.expression,
            isSVG: a,
            isCE: p
          });
        } else t.exprs.push(e.expressionStatement(D(x, r, b, c.expression, {
          isSVG: a,
          isCE: p
        })));
      } else {
        if (d.hydratable && b === "$ServerOnly") {
          t.skipTemplate = !0;
          return;
        }

        e.isJSXExpressionContainer(c) && (c = c.expression), b = H[b] || b, c && T.has(b) ? t.exprs.push(e.expressionStatement(D(x, r, b, c, {
          isSVG: a,
          isCE: p
        }))) : (!a && (b = b.toLowerCase()), t.template += ` ${b}`, t.template += c ? `="${se(c.value)}"` : "");
      }
    }), !f && s && n.node.children.push(s), t.hasHydratableEvent = t.hasHydratableEvent || i;
  }

  function Pe(n, t, r) {
    let i = t.id && t.id.name,
        s = J(n.node),
        l,
        o = 0,
        a = I(n.get("children")),
        p = a.map((f, d) => k(f, {
      skipId: !t.id || !ae(a, d, r)
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
          r.hydratable && s === "html" && (u = S(n, "getNextMatch", C(n, "dom").moduleName));
          let m = e.memberExpression(e.identifier(i), e.identifier(o === 0 ? "firstChild" : "nextSibling"));
          t.decl.push(e.variableDeclarator(f.id, r.hydratable && s === "html" ? e.callExpression(u, [m, e.stringLiteral(f.tagName)]) : m)), t.decl.push(...f.decl), t.exprs.push(...f.exprs), t.dynamics.push(...f.dynamics), t.hasHydratableEvent = t.hasHydratableEvent || f.hasHydratableEvent, t.hasCustomElement = t.hasCustomElement || f.hasCustomElement, i = f.id.name, l = null, o++;
        } else if (f.exprs.length) {
          let u = S(n, "insert", C(n, "dom").moduleName),
              m = q(a),
              g = r.hydratable && m;

          if (g || Me(p, d)) {
            let x, E;
            g && (i = Z(n, t, i, o++, "#")[0].name), l ? x = l : [x, E] = Z(n, t, i, o++, g ? "/" : ""), g || (l = x), t.exprs.push(e.expressionStatement(e.callExpression(u, E ? [t.id, f.exprs[0], x, E] : [t.id, f.exprs[0], x]))), i = x.name;
          } else m ? t.exprs.push(e.expressionStatement(e.callExpression(u, [t.id, f.exprs[0], oe(p, d) || e.nullLiteral()]))) : t.exprs.push(e.expressionStatement(e.callExpression(u, [t.id, f.exprs[0]])));
        } else l = null;
      }
    });
  }

  function Z(n, t, r, i, s) {
    let l = n.scope.generateUidIdentifier("el$"),
        o = w(n),
        a;
    return t.template += `<!${s}>`, o.hydratable && s === "/" ? (a = n.scope.generateUidIdentifier("co$"), t.decl.push(e.variableDeclarator(e.arrayPattern([l, a]), e.callExpression(S(n, "getNextMarker", C(n, "dom").moduleName), [e.memberExpression(e.identifier(r), e.identifier("nextSibling"))])))) : t.decl.push(e.variableDeclarator(l, e.memberExpression(e.identifier(r), e.identifier(i === 0 ? "firstChild" : "nextSibling")))), [l, a];
  }

  function oe(n, t) {
    return n[t + 1] && (n[t + 1].id || oe(n, t + 1));
  }

  function ae(n, t, r) {
    if (n[t - 1]) {
      let i = n[t - 1].node;
      if (e.isJSXExpressionContainer(i) && !e.isJSXEmptyExpression(i.expression) && !V(n[t - 1])) return !0;
      let s;
      if (e.isJSXElement(i) && (s = J(i)) && j(s)) return !0;
    }

    for (let i = t; i < n.length; i++) {
      let s = n[i].node;

      if (e.isJSXExpressionContainer(s)) {
        if (!e.isJSXEmptyExpression(s.expression) && !V(n[i])) return !0;
      } else if (e.isJSXElement(s)) {
        let l = J(s);
        if (j(l) || r.contextToCustomElements && (l === "slot" || l.indexOf("-") > -1) || s.openingElement.attributes.some(a => e.isJSXSpreadAttribute(a) || ["textContent", "innerHTML", "innerText"].includes(a.name.name) || a.name.namespace && a.name.namespace.name === "use" || e.isJSXExpressionContainer(a.value) && !(e.isStringLiteral(a.value.expression) || e.isNumericLiteral(a.value.expression)))) return !0;
        let o = I(n[i].get("children"));
        if (o.length && ae(o, 0, r)) return !0;
      }
    }
  }

  function Ae(n, t) {
    t.exprs.push(e.expressionStatement(e.assignmentExpression("=", e.memberExpression(t.id, e.identifier("_$owner")), e.callExpression(S(n, "getOwner", C(n, "dom").moduleName), []))));
  }

  function Ve(n, t, r) {
    let i = w(n);
    return t.id ? (We(n, t), !(t.exprs.length || t.dynamics.length || t.postExprs.length) && t.decl.declarations.length === 1 ? t.decl.declarations[0].init : e.callExpression(e.arrowFunctionExpression([], e.blockStatement([t.decl, ...t.exprs.concat(Ue(n, t.dynamics) || [], t.postExprs || []), e.returnStatement(t.id)])), [])) : r && t.dynamic && i.memoWrapper ? e.callExpression(S(n, i.memoWrapper), [t.exprs[0]]) : t.exprs[0];
  }

  function _e(n, t) {
    let r = t.map(i => {
      let s = {
        cooked: i.template,
        raw: i.template
      };
      return e.variableDeclarator(i.id, e.addComment(e.callExpression(S(n, "template", C(n, "dom").moduleName), [e.templateLiteral([e.templateElement(s, !0)], []), e.numericLiteral(i.elementCount)].concat(i.isSVG ? e.booleanLiteral(i.isSVG) : [])), "leading", "#__PURE__"));
    });
    n.node.body.unshift(e.variableDeclaration("const", r));
  }

  function We(n, t) {
    let {
      hydratable: r
    } = w(n),
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

      i = e.variableDeclarator(t.id, r ? e.callExpression(S(n, "getNextElement", C(n, "dom").moduleName), l ? [l] : []) : t.hasCustomElement ? e.callExpression(e.memberExpression(e.identifier("document"), e.identifier("importNode")), [l, e.booleanLiteral(!0)]) : e.callExpression(e.memberExpression(l, e.identifier("cloneNode")), [e.booleanLiteral(!0)]));
    }

    t.decl.unshift(i), t.decl = e.variableDeclaration("const", t.decl);
  }

  function Ue(n, t) {
    if (!t.length) return;
    let r = w(n),
        i = S(n, r.effectWrapper);

    if (t.length === 1) {
      let p = t[0].key === "classList" || t[0].key === "style" ? e.identifier("_$p") : void 0;
      return t[0].key.startsWith("class:") && !e.isBooleanLiteral(t[0].value) && !e.isUnaryExpression(t[0].value) && (t[0].value = e.unaryExpression("!", e.unaryExpression("!", t[0].value))), e.expressionStatement(e.callExpression(i, [e.arrowFunctionExpression(p ? [p] : [], D(n, t[0].elem, t[0].key, t[0].value, {
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
      let g = n.scope.generateUidIdentifier("v$");

      if (f.startsWith("class:") && !e.isBooleanLiteral(d) && !e.isUnaryExpression(d) && (d = e.unaryExpression("!", e.unaryExpression("!", d))), o.push(g), s.push(e.variableDeclarator(g, d)), f === "classList" || f === "style") {
        let x = e.memberExpression(a, g);
        l.push(e.expressionStatement(e.assignmentExpression("=", x, D(n, p, f, g, {
          isSVG: u,
          isCE: m,
          dynamic: !0,
          prevId: x
        }))));
      } else l.push(e.expressionStatement(e.logicalExpression("&&", e.binaryExpression("!==", g, e.memberExpression(a, g)), D(n, p, f, e.assignmentExpression("=", e.memberExpression(a, g), g), {
        isSVG: u,
        isCE: m,
        dynamic: !0
      }))));
    }), e.expressionStatement(e.callExpression(i, [e.arrowFunctionExpression([a], e.blockStatement([e.variableDeclaration("const", s), ...l, e.returnStatement(a)])), e.objectExpression(o.map(p => e.objectProperty(p, e.identifier("undefined"))))]));
  }

  function le(n, t) {
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
    })), e.callExpression(S(n, "ssr"), t.template.length > 1 ? [i, ...t.templateValues] : [i]);
  }

  function He(n, t) {
    let r = t.map(i => e.variableDeclarator(i.id, i.template));
    n.node.body.unshift(e.variableDeclaration("const", r));
  }

  function $(n, t) {
    let r;
    Array.isArray(t) && ([t, ...r] = t), n[n.length - 1] += t, r && r.length && n.push.apply(n, r);
  }

  function Be(n, t) {
    let r = J(n.node),
        i = w(n),
        s = re.indexOf(r) > -1,
        l = {
      template: [`<${r}`],
      templateValues: [],
      decl: [],
      exprs: [],
      dynamics: [],
      tagName: r,
      renderer: "ssr"
    };
    return t.topLevel && i.hydratable && (l.template.push(""), l.templateValues.push(e.callExpression(S(n, "ssrHydrationKey"), []))), Ge(n, l), $(l.template, ">"), s || (Re(n, l, { ...i,
      ...t
    }), $(l.template, `</${r}>`)), l;
  }

  function _(n, t) {
    return n = H[n] || n, !t && (n = n.toLowerCase()), n;
  }

  function qe(n, t, r, i, s) {
    let l;
    (l = r.split(":")) && l[1] && A.has(l[0]) && (r = l[1]), r = _(r, s);
    let o = e.callExpression(S(n, "ssrAttribute"), [e.stringLiteral(r), i, e.booleanLiteral(!1)]);
    if (t.template[t.template.length - 1].length) t.template.push(""), t.templateValues.push(o);else {
      let a = t.templateValues.length - 1;
      t.templateValues[a] = e.binaryExpression("+", t.templateValues[a], o);
    }
  }

  function X(n, t, r) {
    return e.isStringLiteral(t) || e.isNumericLiteral(t) ? t : e.isFunction(t) ? (t.body = X(n, t.body, r), t) : e.isTemplateLiteral(t) ? (t.expressions = t.expressions.map(i => X(n, i, r)), t) : e.isUnaryExpression(t) ? (t.argument = X(n, t.argument, r), t) : e.isBinaryExpression(t) ? (t.left = X(n, t.left, r), t.right = X(n, t.right, r), t) : e.isConditionalExpression(t) ? (t.consequent = X(n, t.consequent, r), t.alternate = X(n, t.alternate, r), t) : e.isLogicalExpression(t) ? (t.right = X(n, t.right, r), t.operator !== "&&" && (t.left = X(n, t.left, r)), t) : e.isCallExpression(t) && e.isFunction(t.callee) ? (e.isBlockStatement(t.callee.body) ? t.callee.body.body = t.callee.body.body.map(i => (e.isReturnStatement(i) && (i.argument = X(n, i.argument, r)), i)) : t.callee.body = X(n, t.callee.body, r), t) : e.callExpression(S(n, "escape"), [t].concat(r ? [e.booleanLiteral(!0)] : []));
  }

  function Q(n, t, r) {
    let i = [],
        s = t.find(l => l.node.name.name === n);

    for (let l = 0; l < r.length; l++) {
      let o = r[l].node,
          a = !e.isValidIdentifier(o.name.name.name);
      a || (o.name.name.type = "Identifier"), i.push(e.objectProperty(a ? e.stringLiteral(o.name.name.name) : o.name.name, e.isJSXExpressionContainer(o.value) ? o.value.expression : o.value)), (s || l) && t.splice(r[l].key, 1);
    }

    s && e.isJSXExpressionContainer(s.node.value) && e.isObjectExpression(s.node.value.expression) ? s.node.value.expression.properties.push(...i) : r[0].node = e.jsxAttribute(e.jsxIdentifier(n), e.jsxExpressionContainer(e.objectExpression(i)));
  }

  function Ge(n, t) {
    let r,
        i = J(n.node),
        s = B.has(i),
        l = n.node.children.length > 0,
        o = n.get("openingElement").get("attributes"),
        a = o.filter(d => e.isJSXNamespacedName(d.node.name) && d.node.name.namespace.name === "style"),
        p = o.filter(d => e.isJSXNamespacedName(d.node.name) && d.node.name.namespace.name === "class");
    p.length && Q("classList", o, p);
    let f = o.filter(d => d.node.name && (d.node.name.name === "class" || d.node.name.name === "className" || d.node.name.name === "classList"));

    if (f.length > 1) {
      let d = f[0].node,
          u = [],
          m = [e.TemplateElement({
        raw: ""
      })];

      for (let g = 0; g < f.length; g++) {
        let x = f[g].node,
            E = g === f.length - 1;

        if (e.isJSXExpressionContainer(x.value)) {
          let c = x.value.expression;

          if (x.name.name === "classList") {
            if (e.isObjectExpression(c) && !c.properties.some(b => e.isSpreadElement(b))) {
              Y(n, c, u, m), g && o.splice(o.indexOf(f[g]), 1);
              continue;
            }

            c = e.callExpression(S(n, "ssrClassList"), [c]);
          }

          u.push(e.logicalExpression("||", c, e.stringLiteral(""))), m.push(e.TemplateElement({
            raw: E ? "" : " "
          }));
        } else {
          let c = m.pop();
          m.push(e.TemplateElement({
            raw: (c ? c.value.raw : "") + (g ? " " : "") + `${x.value.value}` + (E ? "" : " ")
          }));
        }

        g && o.splice(o.indexOf(f[g]), 1);
      }

      d.value = e.JSXExpressionContainer(e.TemplateLiteral(m, u));
    }

    a.length && Q("style", o, a), o.forEach(d => {
      let u = d.node;

      if (e.isJSXSpreadAttribute(u)) {
        $(t.template, " "), t.template.push(""), t.templateValues.push(e.callExpression(S(d, "ssrSpread"), [N(d.get("argument"), {
          checkMember: !0,
          native: !0
        }) ? e.isCallExpression(u.argument) && !u.argument.arguments.length ? u.argument.callee : e.arrowFunctionExpression([], u.argument) : u.argument, e.booleanLiteral(s), e.booleanLiteral(l)]));
        return;
      }

      let m = u.value,
          g = e.isJSXNamespacedName(u.name) ? `${u.name.namespace.name}:${u.name.name.name}` : u.name.name,
          x = e.isJSXNamespacedName(u.name) && A.has(u.name.namespace.name);

      if ((e.isJSXNamespacedName(u.name) && x || T.has(g)) && !e.isJSXExpressionContainer(m) && (u.value = m = e.JSXExpressionContainer(m || e.JSXEmptyExpression())), e.isJSXExpressionContainer(m) && (x || T.has(g) || !(e.isStringLiteral(m.expression) || e.isNumericLiteral(m.expression)))) {
        if (g === "ref" || g.startsWith("use:") || g.startsWith("prop:") || g.startsWith("on")) return;
        if (T.has(g)) r = m, g === "innerHTML" && (n.doNotEscape = !0);else {
          let E = !0;

          if (Je.has(g)) {
            t.template.push("");
            let c = e.callExpression(S(d, "ssrAttribute"), [e.stringLiteral(g), m.expression, e.booleanLiteral(!0)]);
            t.templateValues.push(c);
            return;
          }

          if (g === "style") {
            if (e.isJSXExpressionContainer(m) && e.isObjectExpression(m.expression) && !m.expression.properties.some(c => e.isSpreadElement(c))) {
              let c = m.expression.properties.map((h, v) => e.binaryExpression("+", e.stringLiteral((v ? ";" : "") + (e.isIdentifier(h.key) ? h.key.name : h.key.value) + ":"), e.isStringLiteral(h.value) ? e.stringLiteral(F(h.value.value)) : e.isNumericLiteral(h.value) ? h.value : e.isTemplateLiteral(h.value) && h.value.expressions.length === 0 ? e.stringLiteral(F(h.value.quasis[0].value.raw)) : e.callExpression(S(n, "escape"), [h.value, e.booleanLiteral(!0)]))),
                  b = c[0];

              for (let h = 1; h < c.length; h++) b = e.binaryExpression("+", b, c[h]);

              m.expression = b;
            } else m.expression = e.callExpression(S(n, "ssrStyle"), [m.expression]);

            E = !1;
          }

          if (g === "classList") {
            if (e.isObjectExpression(m.expression) && !m.expression.properties.some(c => e.isSpreadElement(c))) {
              let c = [],
                  b = [e.TemplateElement({
                raw: ""
              })];
              Y(n, m.expression, c, b), c.length ? c.length === 1 && !b[0].value.raw && !b[1].value.raw ? m.expression = c[0] : m.expression = e.templateLiteral(b, c) : m.expression = e.stringLiteral(b[0].value.raw);
            } else m.expression = e.callExpression(S(n, "ssrClassList"), [m.expression]);

            g = "class", E = !1;
          }

          E && (m.expression = X(n, m.expression, !0)), !E || e.isLiteral(m.expression) || e.isBinaryExpression(m.expression) ? (g = _(g, s), $(t.template, ` ${g}="`), t.template.push('"'), t.templateValues.push(m.expression)) : qe(d, t, g, m.expression, s);
        }
      } else {
        if (g === "$ServerOnly") return;
        e.isJSXExpressionContainer(m) && (m = m.expression), g = _(g, s), $(t.template, ` ${g}`), $(t.template, m ? `="${F(m.value, !0)}"` : "");
      }
    }), !l && r && n.node.children.push(r);
  }

  function Y(n, t, r, i) {
    t.properties.forEach((s, l) => {
      let o = t.properties.length - 1 === l,
          a = s.key;

      if (e.isIdentifier(s.key) && !s.computed ? a = e.stringLiteral(a.name) : s.computed ? a = e.callExpression(S(n, "escape"), [s.key, e.booleanLiteral(!0)]) : a = e.stringLiteral(F(s.key.value)), e.isBooleanLiteral(s.value)) {
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

  function Re(n, t, {
    hydratable: r
  }) {
    let i = n.doNotEscape,
        s = I(n.get("children"));
    s.forEach(l => {
      if (e.isJSXElement(l.node) && J(l.node) === "head") {
        let a = k(l, {
          doNotEscape: i,
          hydratable: !1
        });
        S(n, "NoHydration"), t.template.push(""), t.templateValues.push(e.callExpression(e.identifier("_$NoHydration"), [e.objectExpression([e.objectMethod("get", e.identifier("children"), [], e.blockStatement([e.returnStatement(le(n, a))]))])]));
        return;
      }

      let o = k(l, {
        doNotEscape: i
      });

      if (!!o && ($(t.template, o.template), t.templateValues.push.apply(t.templateValues, o.templateValues || []), o.exprs.length)) {
        let a = q(s),
            p = r && a;
        i || (o.exprs[0] = X(n, o.exprs[0])), p ? ($(t.template, "<!--#-->"), t.template.push(""), t.templateValues.push(o.exprs[0]), $(t.template, "<!--/-->")) : (t.template.push(""), t.templateValues.push(o.exprs[0]));
      }
    });
  }

  function ze(n, t) {
    let r = J(n.node),
        i = {
      id: n.scope.generateUidIdentifier("el$"),
      decl: [],
      exprs: [],
      dynamics: [],
      postExprs: [],
      tagName: r,
      renderer: "universal"
    };
    return i.decl.push(e.variableDeclarator(i.id, e.callExpression(S(n, "createElement", C(n, "universal").moduleName), [e.stringLiteral(r)]))), Ke(n, i), Ze(n, i), i;
  }

  function Ke(n, t) {
    let r,
        i = t.id,
        s = n.node.children.length > 0,
        l = w(n);
    n.get("openingElement").get("attributes").forEach(o => {
      let a = o.node;

      if (e.isJSXSpreadAttribute(a)) {
        t.exprs.push(e.expressionStatement(e.callExpression(S(o, "spread", C(n, "universal").moduleName), [i, N(o.get("argument"), {
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
        } else f.startsWith("use:") ? (a.name.name.type = "Identifier", t.exprs.unshift(e.expressionStatement(e.callExpression(a.name.name, [i, e.arrowFunctionExpression([], e.isJSXEmptyExpression(p.expression) ? e.booleanLiteral(!0) : p.expression)])))) : f === "children" ? r = p : l.effectWrapper && N(o.get("value").get("expression"), {
          checkMember: !0
        }) ? t.dynamics.push({
          elem: i,
          key: f,
          value: p.expression
        }) : t.exprs.push(e.expressionStatement(P(o, i, f, p.expression)));
      } else t.exprs.push(e.expressionStatement(P(o, i, f, p)));
    }), !s && r && n.node.children.push(r);
  }

  function P(n, t, r, i, {
    prevId: s
  } = {}) {
    return i || (i = e.booleanLiteral(!0)), e.callExpression(S(n, "setProp", C(n, "universal").moduleName), s ? [t, e.stringLiteral(r), i, s] : [t, e.stringLiteral(r), i]);
  }

  function Ze(n, t) {
    let r = I(n.get("children")),
        i = q(r),
        s = r.map(k).reduce((o, a) => {
      if (!a) return o;
      let p = o.length;
      return a.text && p && o[p - 1].text ? o[p - 1].template += a.template : o.push(a), o;
    }, []),
        l = [];
    s.forEach((o, a) => {
      if (!!o) {
        if (o.tagName && o.renderer !== "universal") throw new Error(`<${o.tagName}> is not supported in <${J(n.node)}>.
        Wrap the usage with a component that would render this element, eg. Canvas`);

        if (o.id) {
          let p = S(n, "insertNode", C(n, "universal").moduleName),
              f = o.id;

          if (o.text) {
            let d = S(n, "createTextNode", C(n, "universal").moduleName);
            i ? t.decl.push(e.variableDeclarator(o.id, e.callExpression(d, [e.templateLiteral([e.templateElement({
              raw: o.template
            })], [])]))) : f = e.callExpression(d, [e.templateLiteral([e.templateElement({
              raw: o.template
            })], [])]);
          }

          l.push(e.expressionStatement(e.callExpression(p, [t.id, f]))), t.decl.push(...o.decl), t.exprs.push(...o.exprs), t.dynamics.push(...o.dynamics);
        } else if (o.exprs.length) {
          let p = S(n, "insert", C(n, "universal").moduleName);
          i ? t.exprs.push(e.expressionStatement(e.callExpression(p, [t.id, o.exprs[0], pe(s, a) || e.nullLiteral()]))) : t.exprs.push(e.expressionStatement(e.callExpression(p, [t.id, o.exprs[0]])));
        }
      }
    }), t.exprs.unshift(...l);
  }

  function pe(n, t) {
    return n[t + 1] && (n[t + 1].id || pe(n, t + 1));
  }

  function Qe(n, t, r) {
    let i = w(n);
    return t.id ? (t.decl = e.variableDeclaration("const", t.decl), !(t.exprs.length || t.dynamics.length || t.postExprs.length) && t.decl.declarations.length === 1 ? t.decl.declarations[0].init : e.callExpression(e.arrowFunctionExpression([], e.blockStatement([t.decl, ...t.exprs.concat(Ye(n, t.dynamics) || [], t.postExprs || []), e.returnStatement(t.id)])), [])) : r && t.dynamic && i.memoWrapper ? e.callExpression(S(n, i.memoWrapper), [t.exprs[0]]) : t.exprs[0];
  }

  function Ye(n, t) {
    if (!t.length) return;
    let r = w(n),
        i = S(n, r.effectWrapper);

    if (t.length === 1) {
      let p = e.identifier("_$p");
      return e.expressionStatement(e.callExpression(i, [e.arrowFunctionExpression([p], P(n, t[0].elem, t[0].key, t[0].value, {
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
      l.push(e.expressionStatement(e.logicalExpression("&&", e.binaryExpression("!==", u, e.memberExpression(a, u)), e.assignmentExpression("=", e.memberExpression(a, u), P(n, p, f, u, {
        dynamic: !0,
        prevId: m
      })))));
    }), e.expressionStatement(e.callExpression(i, [e.arrowFunctionExpression([a], e.blockStatement([e.variableDeclaration("const", s), ...l, e.returnStatement(a)])), e.objectExpression(o.map(p => e.objectProperty(p, e.identifier("undefined"))))]));
  }

  function W(n) {
    if (e.isJSXIdentifier(n)) {
      if (e.isValidIdentifier(n.name)) n.type = "Identifier";else return e.stringLiteral(n.name);
    } else if (e.isJSXMemberExpression(n)) {
      let t = W(n.property),
          r = e.isStringLiteral(t);
      return e.memberExpression(W(n.object), t, r);
    }
    return n;
  }

  function U(n) {
    if (e.isJSXIdentifier(n)) {
      if (e.isValidIdentifier(n.name)) n.type = "Identifier";else return e.stringLiteral(n.name);
    } else {
      if (e.isJSXMemberExpression(n)) return e.memberExpression(U(n.object), U(n.property));
      if (e.isJSXNamespacedName(n)) return e.stringLiteral(`${n.namespace.name}:${n.name.name}`);
    }
    return n;
  }

  function en(n) {
    let t = [],
        r = w(n),
        i = W(n.node.openingElement.name),
        s = [],
        l = [],
        o = !1,
        a = n.node.children.length > 0;

    if (r.builtIns.indexOf(i.name) > -1 && !n.scope.hasBinding(i.name)) {
      let d = S(n, i.name);
      i.name = d.name;
    }

    n.get("openingElement").get("attributes").forEach(d => {
      let u = d.node;
      if (e.isJSXSpreadAttribute(u)) l.length && (s.push(e.objectExpression(l)), l = []), s.push(N(d.get("argument"), {
        checkMember: !0
      }) && (o = !0) ? e.isCallExpression(u.argument) && !u.argument.arguments.length && !e.isCallExpression(u.argument.callee) && !e.isMemberExpression(u.argument.callee) ? u.argument.callee : e.arrowFunctionExpression([], u.argument) : u.argument);else {
        let m = u.value || e.booleanLiteral(!0),
            g = U(u.name),
            x = g.name;
        if (a && x === "children") return;
        if (e.isJSXExpressionContainer(m)) {
          if (x === "ref") {
            if (r.generate === "ssr") return;

            for (; e.isTSNonNullExpression(m.expression) || e.isTSAsExpression(m.expression);) m.expression = m.expression.expression;

            let E,
                c = e.isIdentifier(m.expression) && (E = n.scope.getBinding(m.expression.name)) && E.kind === "const";

            if (!c && e.isLVal(m.expression)) {
              let b = n.scope.generateUidIdentifier("_ref$");
              l.push(e.objectMethod("method", e.identifier("ref"), [e.identifier("r$")], e.blockStatement([e.variableDeclaration("const", [e.variableDeclarator(b, m.expression)]), e.expressionStatement(e.conditionalExpression(e.binaryExpression("===", e.unaryExpression("typeof", b), e.stringLiteral("function")), e.callExpression(b, [e.identifier("r$")]), e.assignmentExpression("=", m.expression, e.identifier("r$"))))])));
            } else if (c || e.isFunction(m.expression)) l.push(e.objectProperty(e.identifier("ref"), m.expression));else if (e.isCallExpression(m.expression)) {
              let b = n.scope.generateUidIdentifier("_ref$");
              l.push(e.objectMethod("method", e.identifier("ref"), [e.identifier("r$")], e.blockStatement([e.variableDeclaration("const", [e.variableDeclarator(b, m.expression)]), e.expressionStatement(e.logicalExpression("&&", e.binaryExpression("===", e.unaryExpression("typeof", b), e.stringLiteral("function")), e.callExpression(b, [e.identifier("r$")])))])));
            }
          } else if (N(d.get("value").get("expression"), {
            checkMember: !0,
            checkTags: !0
          })) {
            let E = r.wrapConditionals && r.generate !== "ssr" && (e.isLogicalExpression(m.expression) || e.isConditionalExpression(m.expression)) ? O(d.get("value").get("expression"), !0) : e.arrowFunctionExpression([], m.expression);
            l.push(e.objectMethod("get", g, [], e.blockStatement([e.returnStatement(E.body)]), !e.isValidIdentifier(x)));
          } else l.push(e.objectProperty(g, m.expression));
        } else l.push(e.objectProperty(g, m));
      }
    });
    let p = nn(n.get("children"), r);
    if (p && p[0]) if (p[1]) {
      let d = e.isCallExpression(p[0]) && e.isFunction(p[0].callee) ? p[0].callee.body : p[0].body;
      l.push(e.objectMethod("get", e.identifier("children"), [], e.isExpression(d) ? e.blockStatement([e.returnStatement(d)]) : d));
    } else l.push(e.objectProperty(e.identifier("children"), p[0]));
    (l.length || !s.length) && s.push(e.objectExpression(l)), (s.length > 1 || o) && (s = [e.callExpression(S(n, "mergeProps"), s)]);
    let f = [i, s[0]];

    if (t.push(e.callExpression(S(n, "createComponent"), f)), t.length > 1) {
      let d = t.pop();
      t = [e.callExpression(e.arrowFunctionExpression([], e.blockStatement([...t, e.returnStatement(d)])), [])];
    }

    return {
      exprs: t,
      template: "",
      component: !0
    };
  }

  function nn(n, t) {
    let r = I(n);
    if (!r.length) return;
    let i = !1,
        s = r.reduce((l, o) => {
      if (e.isJSXText(o.node)) {
        let a = ne.decode(G(o.node.extra.raw));
        a.length && l.push(e.stringLiteral(a));
      } else {
        let a = k(o, {
          topLevel: !0,
          componentChild: !0
        });
        i = i || a.dynamic, l.push(R(t, o, a)(o, a, r.length > 1));
      }

      return l;
    }, []);
    return s.length === 1 ? (s = s[0], !e.isJSXExpressionContainer(r[0]) && !e.isJSXSpreadChild(r[0]) && !e.isJSXText(r[0]) && (s = e.isCallExpression(s) && !s.arguments.length && !e.isIdentifier(s.callee) ? s.callee : e.arrowFunctionExpression([], s), i = !0)) : (s = e.arrowFunctionExpression([], e.arrayExpression(s)), i = !0), [s, i];
  }

  function tn(n, t, r) {
    let i = I(n),
        s = i.reduce((l, o) => {
      if (e.isJSXText(o.node)) {
        let a = ne.decode(G(o.node.extra.raw));
        a.length && l.push(e.stringLiteral(a));
      } else {
        let a = k(o, {
          topLevel: !0,
          fragmentChild: !0
        });
        l.push(R(r, o, a)(o, a, !0));
      }

      return l;
    }, []);
    t.exprs.push(s.length === 1 ? s[0] : e.arrayExpression(s));
  }

  function ee(n) {
    let t = w(n),
        r = rn(n),
        i = k(n, e.isJSXFragment(n.node) ? {} : {
      topLevel: !0
    }),
        s = R(t, n, i);
    n.replaceWith(r(s(n, i, !1)));
  }

  function rn(n) {
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

  function k(n, t = {}) {
    let r = w(n),
        i = n.node,
        s;
    if (e.isJSXElement(i)) return sn(r, n, t);

    if (e.isJSXFragment(i)) {
      let l = {
        template: "",
        decl: [],
        exprs: [],
        dynamics: []
      };
      return tn(n.get("children"), l, r), l;
    } else if (e.isJSXText(i) || (s = V(n))) {
      let l = s !== void 0 ? t.doNotEscape ? s.toString() : F(s.toString()) : G(i.extra.raw);
      if (!l.length) return null;
      let o = {
        template: r.generate === "ssr" ? l : se(l),
        decl: [],
        exprs: [],
        dynamics: [],
        postExprs: [],
        text: !0
      };
      return !t.skipId && r.generate !== "ssr" && (o.id = n.scope.generateUidIdentifier("el$")), o;
    } else if (e.isJSXExpressionContainer(i)) {
      if (e.isJSXEmptyExpression(i.expression)) return null;
      if (!N(n.get("expression"), {
        checkMember: !0,
        checkTags: !!t.componentChild,
        native: !t.componentChild
      })) return {
        exprs: [i.expression],
        template: ""
      };
      let l = r.wrapConditionals && r.generate !== "ssr" && (e.isLogicalExpression(i.expression) || e.isConditionalExpression(i.expression)) ? O(n.get("expression"), t.componentChild) : !t.componentChild && (r.generate !== "ssr" || t.fragmentChild) && e.isCallExpression(i.expression) && !e.isMemberExpression(i.expression.callee) && i.expression.arguments.length === 0 ? i.expression.callee : e.arrowFunctionExpression([], i.expression);
      return {
        exprs: l.length > 1 ? [e.callExpression(e.arrowFunctionExpression([], e.blockStatement([l[0], e.returnStatement(l[1])])), [])] : [l],
        template: "",
        dynamic: !0
      };
    } else if (e.isJSXSpreadChild(i)) return N(n.get("expression"), {
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

  function R(n, t, r) {
    return r.tagName && r.renderer === "dom" || n.generate === "dom" ? Ve : r.renderer === "ssr" || n.generate === "ssr" ? le : Qe;
  }

  function sn(n, t, r = {}) {
    let i = t.node,
        s = J(i);
    if (j(s)) return en(t);
    let l;

    for (var o of n.renderers ?? []) if (o.elements.indexOf(s) !== -1) {
      l = o;
      break;
    }

    return l?.name === "dom" || w(t).generate === "dom" ? je(t, r) : w(t).generate === "ssr" ? Be(t, r) : ze(t);
  }

  var on = n => {
    if (n.scope.data.events && n.node.body.push(e.expressionStatement(e.callExpression(S(n, "delegateEvents", C(n, "dom").moduleName), [e.arrayExpression(Array.from(n.scope.data.events).map(t => e.stringLiteral(t)))]))), n.scope.data.templates?.length) {
      let t = n.scope.data.templates.filter(i => i.renderer === "dom"),
          r = n.scope.data.templates.filter(i => i.renderer === "ssr");
      t.length > 0 && _e(n, t), r.length > 0 && He(n, r);
    }
  },
      an = {
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
      ln = (n, {
    opts: t
  }) => {
    let i = (n.hub.file.metadata.config = Object.assign({}, an, t)).requireImportSource;

    if (i) {
      let s = n.hub.file.ast.comments;

      for (let l = 0; l < s.length; l++) {
        let o = s[l],
            a = o.value.indexOf("@jsxImportSource");
        if (a > -1 && o.value.slice(a).includes(i)) return;
      }

      n.skip();
    }
  },
      pn = () => ({
    name: "JSX DOM Expressions",
    inherits: Xe.default,
    visitor: {
      JSXElement: ee,
      JSXFragment: ee,
      Program: {
        enter: ln,
        exit: on
      }
    }
  });

  ce.exports = pn;
});
var cn = ye(me()),
    {
  default: fe,
  ...mn
} = cn,
    dn = fe !== void 0 ? fe : mn;
export { dn as default };