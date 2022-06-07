/* esm.sh - esbuild bundle(@babel/types@7.18.4) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v85/node_process.js";
import __to_fast_properties$ from "/transpiled/https://esm.sh/v85/to-fast-properties@2.0.0/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/to-fast-properties.js";
import ___babel_helper_validator_identifier$ from "/transpiled/https://esm.sh/v85/@babel/helper-validator-identifier@7.16.7/X-YS9AYmFiZWwvaGlnaGxpZ2h0OmJhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbQpkL2JhYmVsLWhpZ2hsaWdodC1lc20tc2gtc2hpbUAwLjAuMg/esnext/helper-validator-identifier.js";
var Ni = Object.create;
var Ye = Object.defineProperty;
var _i = Object.getOwnPropertyDescriptor;
var hi = Object.getOwnPropertyNames;
var Li = Object.getPrototypeOf,
    ji = Object.prototype.hasOwnProperty;

var n = (e, t) => Ye(e, "name", {
  value: t,
  configurable: !0
}),
    de = (e => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
  get: (t, r) => (typeof require != "undefined" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var x = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var Ci = (e, t, r, p) => {
  if (t && typeof t == "object" || typeof t == "function") for (let d of hi(t)) !ji.call(e, d) && d !== r && Ye(e, d, {
    get: () => t[d],
    enumerable: !(p = _i(t, d)) || p.enumerable
  });
  return e;
};

var Cr = (e, t, r) => (r = e != null ? Ni(Li(e)) : {}, Ci(t || !e || !e.__esModule ? Ye(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var Te = x(Ve => {
  "use strict";

  Object.defineProperty(Ve, "__esModule", {
    value: !0
  });
  Ve.default = Bi;

  function Bi(e, t) {
    let r = Object.keys(t);

    for (let p of r) if (e[p] !== t[p]) return !1;

    return !0;
  }

  n(Bi, "shallowEqual");
});
var C = x(s => {
  "use strict";

  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.isAccessor = Gl;
  s.isAnyTypeAnnotation = ds;
  s.isArgumentPlaceholder = Xo;
  s.isArrayExpression = Mi;
  s.isArrayPattern = Ca;
  s.isArrayTypeAnnotation = Ts;
  s.isArrowFunctionExpression = Ba;
  s.isAssignmentExpression = wi;
  s.isAssignmentPattern = ja;
  s.isAwaitExpression = rs;
  s.isBigIntLiteral = is;
  s.isBinary = ml;
  s.isBinaryExpression = Fi;
  s.isBindExpression = Jo;
  s.isBlock = bl;
  s.isBlockParent = El;
  s.isBlockStatement = Vi;
  s.isBooleanLiteral = ua;
  s.isBooleanLiteralTypeAnnotation = Ss;
  s.isBooleanTypeAnnotation = ms;
  s.isBreakStatement = qi;
  s.isCallExpression = ki;
  s.isCatchClause = Xi;
  s.isClass = Xl;
  s.isClassAccessorProperty = ls;
  s.isClassBody = Ma;
  s.isClassDeclaration = Fa;
  s.isClassExpression = wa;
  s.isClassImplements = bs;
  s.isClassMethod = Ga;
  s.isClassPrivateMethod = fs;
  s.isClassPrivateProperty = ps;
  s.isClassProperty = us;
  s.isCompletionStatement = xl;
  s.isConditional = Ol;
  s.isConditionalExpression = Ji;
  s.isContinueStatement = Ui;
  s.isDebuggerStatement = Wi;
  s.isDecimalLiteral = Ho;
  s.isDeclaration = jl;
  s.isDeclareClass = Ps;
  s.isDeclareExportAllDeclaration = _s;
  s.isDeclareExportDeclaration = Ns;
  s.isDeclareFunction = As;
  s.isDeclareInterface = xs;
  s.isDeclareModule = Os;
  s.isDeclareModuleExports = vs;
  s.isDeclareOpaqueType = Is;
  s.isDeclareTypeAlias = gs;
  s.isDeclareVariable = Ds;
  s.isDeclaredPredicate = hs;
  s.isDecorator = Wo;
  s.isDirective = Ki;
  s.isDirectiveLiteral = Yi;
  s.isDoExpression = Go;
  s.isDoWhileStatement = Gi;
  s.isEmptyStatement = $i;
  s.isEmptyTypeAnnotation = Vs;
  s.isEnumBody = tp;
  s.isEnumBooleanBody = mo;
  s.isEnumBooleanMember = Po;
  s.isEnumDeclaration = To;
  s.isEnumDefaultedMember = Oo;
  s.isEnumMember = rp;
  s.isEnumNumberBody = So;
  s.isEnumNumberMember = Ao;
  s.isEnumStringBody = Eo;
  s.isEnumStringMember = xo;
  s.isEnumSymbolBody = bo;
  s.isExistsTypeAnnotation = Ls;
  s.isExportAllDeclaration = Ra;
  s.isExportDeclaration = Ul;
  s.isExportDefaultDeclaration = Ka;
  s.isExportDefaultSpecifier = $o;
  s.isExportNamedDeclaration = Ya;
  s.isExportNamespaceSpecifier = as;
  s.isExportSpecifier = Va;
  s.isExpression = Tl;
  s.isExpressionStatement = zi;
  s.isExpressionWrapper = Il;
  s.isFile = Qi;
  s.isFlow = zl;
  s.isFlowBaseAnnotation = Hl;
  s.isFlowDeclaration = Zl;
  s.isFlowPredicate = ep;
  s.isFlowType = Ql;
  s.isFor = Dl;
  s.isForInStatement = Hi;
  s.isForOfStatement = qa;
  s.isForStatement = Zi;
  s.isForXStatement = Nl;
  s.isFunction = _l;
  s.isFunctionDeclaration = ea;
  s.isFunctionExpression = ta;
  s.isFunctionParent = hl;
  s.isFunctionTypeAnnotation = js;
  s.isFunctionTypeParam = Cs;
  s.isGenericTypeAnnotation = Bs;
  s.isIdentifier = ra;
  s.isIfStatement = na;
  s.isImmutable = Fl;
  s.isImport = ns;
  s.isImportAttribute = Uo;
  s.isImportDeclaration = ka;
  s.isImportDefaultSpecifier = Xa;
  s.isImportNamespaceSpecifier = Ja;
  s.isImportSpecifier = Ua;
  s.isIndexedAccessType = vo;
  s.isInferredPredicate = Ms;
  s.isInterfaceDeclaration = Fs;
  s.isInterfaceExtends = ws;
  s.isInterfaceTypeAnnotation = Rs;
  s.isInterpreterDirective = Ri;
  s.isIntersectionTypeAnnotation = Ks;
  s.isJSX = np;
  s.isJSXAttribute = Io;
  s.isJSXClosingElement = Do;
  s.isJSXClosingFragment = Yo;
  s.isJSXElement = No;
  s.isJSXEmptyExpression = _o;
  s.isJSXExpressionContainer = ho;
  s.isJSXFragment = Ro;
  s.isJSXIdentifier = jo;
  s.isJSXMemberExpression = Co;
  s.isJSXNamespacedName = Bo;
  s.isJSXOpeningElement = Mo;
  s.isJSXOpeningFragment = Ko;
  s.isJSXSpreadAttribute = wo;
  s.isJSXSpreadChild = Lo;
  s.isJSXText = Fo;
  s.isLVal = Bl;
  s.isLabeledStatement = ia;
  s.isLiteral = wl;
  s.isLogicalExpression = pa;
  s.isLoop = vl;
  s.isMemberExpression = fa;
  s.isMetaProperty = Wa;
  s.isMethod = Kl;
  s.isMiscellaneous = ip;
  s.isMixedTypeAnnotation = Ys;
  s.isModuleDeclaration = Jl;
  s.isModuleExpression = Zo;
  s.isModuleSpecifier = Wl;
  s.isNewExpression = ca;
  s.isNoop = Vo;
  s.isNullLiteral = oa;
  s.isNullLiteralTypeAnnotation = Es;
  s.isNullableTypeAnnotation = qs;
  s.isNumberLiteral = lp;
  s.isNumberLiteralTypeAnnotation = ks;
  s.isNumberTypeAnnotation = Xs;
  s.isNumericLiteral = sa;
  s.isObjectExpression = da;
  s.isObjectMember = Yl;
  s.isObjectMethod = Ta;
  s.isObjectPattern = $a;
  s.isObjectProperty = ma;
  s.isObjectTypeAnnotation = Js;
  s.isObjectTypeCallProperty = Ws;
  s.isObjectTypeIndexer = Gs;
  s.isObjectTypeInternalSlot = Us;
  s.isObjectTypeProperty = $s;
  s.isObjectTypeSpreadProperty = zs;
  s.isOpaqueType = Qs;
  s.isOptionalCallExpression = os;
  s.isOptionalIndexedAccessType = go;
  s.isOptionalMemberExpression = ss;
  s.isParenthesizedExpression = Pa;
  s.isPattern = kl;
  s.isPatternLike = Cl;
  s.isPipelineBareFunction = ru;
  s.isPipelinePrimaryTopicReference = nu;
  s.isPipelineTopicExpression = tu;
  s.isPlaceholder = qo;
  s.isPrivate = $l;
  s.isPrivateName = cs;
  s.isProgram = ya;
  s.isProperty = Vl;
  s.isPureish = Ll;
  s.isQualifiedTypeIdentifier = Hs;
  s.isRecordExpression = zo;
  s.isRegExpLiteral = la;
  s.isRegexLiteral = pp;
  s.isRestElement = Sa;
  s.isRestProperty = fp;
  s.isReturnStatement = Ea;
  s.isScopable = Sl;
  s.isSequenceExpression = ba;
  s.isSpreadElement = za;
  s.isSpreadProperty = cp;
  s.isStandardized = dl;
  s.isStatement = Pl;
  s.isStaticBlock = ys;
  s.isStringLiteral = aa;
  s.isStringLiteralTypeAnnotation = Zs;
  s.isStringTypeAnnotation = eo;
  s.isSuper = Qa;
  s.isSwitchCase = Aa;
  s.isSwitchStatement = xa;
  s.isSymbolTypeAnnotation = to;
  s.isTSAnyKeyword = yu;
  s.isTSArrayType = Cu;
  s.isTSAsExpression = Hu;
  s.isTSBaseType = up;
  s.isTSBigIntKeyword = Tu;
  s.isTSBooleanKeyword = du;
  s.isTSCallSignatureDeclaration = uu;
  s.isTSConditionalType = Yu;
  s.isTSConstructSignatureDeclaration = lu;
  s.isTSConstructorType = Nu;
  s.isTSDeclareFunction = au;
  s.isTSDeclareMethod = su;
  s.isTSEntityName = Ml;
  s.isTSEnumDeclaration = el;
  s.isTSEnumMember = tl;
  s.isTSExportAssignment = ul;
  s.isTSExpressionWithTypeArguments = Wu;
  s.isTSExternalModuleReference = sl;
  s.isTSFunctionType = Du;
  s.isTSImportEqualsDeclaration = al;
  s.isTSImportType = il;
  s.isTSIndexSignature = cu;
  s.isTSIndexedAccessType = Xu;
  s.isTSInferType = Vu;
  s.isTSInstantiationExpression = Qu;
  s.isTSInterfaceBody = $u;
  s.isTSInterfaceDeclaration = Gu;
  s.isTSIntersectionType = Ku;
  s.isTSIntrinsicKeyword = mu;
  s.isTSLiteralType = Uu;
  s.isTSMappedType = Ju;
  s.isTSMethodSignature = fu;
  s.isTSModuleBlock = nl;
  s.isTSModuleDeclaration = rl;
  s.isTSNamedTupleMember = Fu;
  s.isTSNamespaceExportDeclaration = ll;
  s.isTSNeverKeyword = Su;
  s.isTSNonNullExpression = ol;
  s.isTSNullKeyword = Eu;
  s.isTSNumberKeyword = bu;
  s.isTSObjectKeyword = Pu;
  s.isTSOptionalType = Mu;
  s.isTSParameterProperty = iu;
  s.isTSParenthesizedType = qu;
  s.isTSPropertySignature = pu;
  s.isTSQualifiedName = ou;
  s.isTSRestType = wu;
  s.isTSStringKeyword = Au;
  s.isTSSymbolKeyword = xu;
  s.isTSThisType = Iu;
  s.isTSTupleType = Bu;
  s.isTSType = op;
  s.isTSTypeAliasDeclaration = zu;
  s.isTSTypeAnnotation = pl;
  s.isTSTypeAssertion = Zu;
  s.isTSTypeElement = sp;
  s.isTSTypeLiteral = ju;
  s.isTSTypeOperator = ku;
  s.isTSTypeParameter = yl;
  s.isTSTypeParameterDeclaration = cl;
  s.isTSTypeParameterInstantiation = fl;
  s.isTSTypePredicate = hu;
  s.isTSTypeQuery = Lu;
  s.isTSTypeReference = _u;
  s.isTSUndefinedKeyword = Ou;
  s.isTSUnionType = Ru;
  s.isTSUnknownKeyword = vu;
  s.isTSVoidKeyword = gu;
  s.isTaggedTemplateExpression = Ha;
  s.isTemplateElement = Za;
  s.isTemplateLiteral = es;
  s.isTerminatorless = Al;
  s.isThisExpression = Oa;
  s.isThisTypeAnnotation = ro;
  s.isThrowStatement = va;
  s.isTopicReference = eu;
  s.isTryStatement = ga;
  s.isTupleExpression = Qo;
  s.isTupleTypeAnnotation = no;
  s.isTypeAlias = ao;
  s.isTypeAnnotation = so;
  s.isTypeCastExpression = oo;
  s.isTypeParameter = uo;
  s.isTypeParameterDeclaration = lo;
  s.isTypeParameterInstantiation = po;
  s.isTypeScript = ap;
  s.isTypeofTypeAnnotation = io;
  s.isUnaryExpression = Ia;
  s.isUnaryLike = ql;
  s.isUnionTypeAnnotation = fo;
  s.isUpdateExpression = Da;
  s.isUserWhitespacable = Rl;
  s.isV8IntrinsicIdentifier = ko;
  s.isVariableDeclaration = Na;
  s.isVariableDeclarator = _a;
  s.isVariance = co;
  s.isVoidTypeAnnotation = yo;
  s.isWhile = gl;
  s.isWhileStatement = ha;
  s.isWithStatement = La;
  s.isYieldExpression = ts;
  var u = Te();

  function Mi(e, t) {
    return e && e.type === "ArrayExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Mi, "isArrayExpression");

  function wi(e, t) {
    return e && e.type === "AssignmentExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(wi, "isAssignmentExpression");

  function Fi(e, t) {
    return e && e.type === "BinaryExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Fi, "isBinaryExpression");

  function Ri(e, t) {
    return e && e.type === "InterpreterDirective" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ri, "isInterpreterDirective");

  function Ki(e, t) {
    return e && e.type === "Directive" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ki, "isDirective");

  function Yi(e, t) {
    return e && e.type === "DirectiveLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Yi, "isDirectiveLiteral");

  function Vi(e, t) {
    return e && e.type === "BlockStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Vi, "isBlockStatement");

  function qi(e, t) {
    return e && e.type === "BreakStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(qi, "isBreakStatement");

  function ki(e, t) {
    return e && e.type === "CallExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ki, "isCallExpression");

  function Xi(e, t) {
    return e && e.type === "CatchClause" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Xi, "isCatchClause");

  function Ji(e, t) {
    return e && e.type === "ConditionalExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ji, "isConditionalExpression");

  function Ui(e, t) {
    return e && e.type === "ContinueStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ui, "isContinueStatement");

  function Wi(e, t) {
    return e && e.type === "DebuggerStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Wi, "isDebuggerStatement");

  function Gi(e, t) {
    return e && e.type === "DoWhileStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Gi, "isDoWhileStatement");

  function $i(e, t) {
    return e && e.type === "EmptyStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n($i, "isEmptyStatement");

  function zi(e, t) {
    return e && e.type === "ExpressionStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(zi, "isExpressionStatement");

  function Qi(e, t) {
    return e && e.type === "File" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Qi, "isFile");

  function Hi(e, t) {
    return e && e.type === "ForInStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Hi, "isForInStatement");

  function Zi(e, t) {
    return e && e.type === "ForStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Zi, "isForStatement");

  function ea(e, t) {
    return e && e.type === "FunctionDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ea, "isFunctionDeclaration");

  function ta(e, t) {
    return e && e.type === "FunctionExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ta, "isFunctionExpression");

  function ra(e, t) {
    return e && e.type === "Identifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ra, "isIdentifier");

  function na(e, t) {
    return e && e.type === "IfStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(na, "isIfStatement");

  function ia(e, t) {
    return e && e.type === "LabeledStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ia, "isLabeledStatement");

  function aa(e, t) {
    return e && e.type === "StringLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(aa, "isStringLiteral");

  function sa(e, t) {
    return e && e.type === "NumericLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(sa, "isNumericLiteral");

  function oa(e, t) {
    return e && e.type === "NullLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(oa, "isNullLiteral");

  function ua(e, t) {
    return e && e.type === "BooleanLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ua, "isBooleanLiteral");

  function la(e, t) {
    return e && e.type === "RegExpLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(la, "isRegExpLiteral");

  function pa(e, t) {
    return e && e.type === "LogicalExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(pa, "isLogicalExpression");

  function fa(e, t) {
    return e && e.type === "MemberExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(fa, "isMemberExpression");

  function ca(e, t) {
    return e && e.type === "NewExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ca, "isNewExpression");

  function ya(e, t) {
    return e && e.type === "Program" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ya, "isProgram");

  function da(e, t) {
    return e && e.type === "ObjectExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(da, "isObjectExpression");

  function Ta(e, t) {
    return e && e.type === "ObjectMethod" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ta, "isObjectMethod");

  function ma(e, t) {
    return e && e.type === "ObjectProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ma, "isObjectProperty");

  function Sa(e, t) {
    return e && e.type === "RestElement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Sa, "isRestElement");

  function Ea(e, t) {
    return e && e.type === "ReturnStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ea, "isReturnStatement");

  function ba(e, t) {
    return e && e.type === "SequenceExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ba, "isSequenceExpression");

  function Pa(e, t) {
    return e && e.type === "ParenthesizedExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Pa, "isParenthesizedExpression");

  function Aa(e, t) {
    return e && e.type === "SwitchCase" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Aa, "isSwitchCase");

  function xa(e, t) {
    return e && e.type === "SwitchStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(xa, "isSwitchStatement");

  function Oa(e, t) {
    return e && e.type === "ThisExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Oa, "isThisExpression");

  function va(e, t) {
    return e && e.type === "ThrowStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(va, "isThrowStatement");

  function ga(e, t) {
    return e && e.type === "TryStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ga, "isTryStatement");

  function Ia(e, t) {
    return e && e.type === "UnaryExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ia, "isUnaryExpression");

  function Da(e, t) {
    return e && e.type === "UpdateExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Da, "isUpdateExpression");

  function Na(e, t) {
    return e && e.type === "VariableDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Na, "isVariableDeclaration");

  function _a(e, t) {
    return e && e.type === "VariableDeclarator" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(_a, "isVariableDeclarator");

  function ha(e, t) {
    return e && e.type === "WhileStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ha, "isWhileStatement");

  function La(e, t) {
    return e && e.type === "WithStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(La, "isWithStatement");

  function ja(e, t) {
    return e && e.type === "AssignmentPattern" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ja, "isAssignmentPattern");

  function Ca(e, t) {
    return e && e.type === "ArrayPattern" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ca, "isArrayPattern");

  function Ba(e, t) {
    return e && e.type === "ArrowFunctionExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ba, "isArrowFunctionExpression");

  function Ma(e, t) {
    return e && e.type === "ClassBody" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ma, "isClassBody");

  function wa(e, t) {
    return e && e.type === "ClassExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(wa, "isClassExpression");

  function Fa(e, t) {
    return e && e.type === "ClassDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Fa, "isClassDeclaration");

  function Ra(e, t) {
    return e && e.type === "ExportAllDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ra, "isExportAllDeclaration");

  function Ka(e, t) {
    return e && e.type === "ExportDefaultDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ka, "isExportDefaultDeclaration");

  function Ya(e, t) {
    return e && e.type === "ExportNamedDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ya, "isExportNamedDeclaration");

  function Va(e, t) {
    return e && e.type === "ExportSpecifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Va, "isExportSpecifier");

  function qa(e, t) {
    return e && e.type === "ForOfStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(qa, "isForOfStatement");

  function ka(e, t) {
    return e && e.type === "ImportDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ka, "isImportDeclaration");

  function Xa(e, t) {
    return e && e.type === "ImportDefaultSpecifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Xa, "isImportDefaultSpecifier");

  function Ja(e, t) {
    return e && e.type === "ImportNamespaceSpecifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ja, "isImportNamespaceSpecifier");

  function Ua(e, t) {
    return e && e.type === "ImportSpecifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ua, "isImportSpecifier");

  function Wa(e, t) {
    return e && e.type === "MetaProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Wa, "isMetaProperty");

  function Ga(e, t) {
    return e && e.type === "ClassMethod" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ga, "isClassMethod");

  function $a(e, t) {
    return e && e.type === "ObjectPattern" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n($a, "isObjectPattern");

  function za(e, t) {
    return e && e.type === "SpreadElement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(za, "isSpreadElement");

  function Qa(e, t) {
    return e && e.type === "Super" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Qa, "isSuper");

  function Ha(e, t) {
    return e && e.type === "TaggedTemplateExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ha, "isTaggedTemplateExpression");

  function Za(e, t) {
    return e && e.type === "TemplateElement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Za, "isTemplateElement");

  function es(e, t) {
    return e && e.type === "TemplateLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(es, "isTemplateLiteral");

  function ts(e, t) {
    return e && e.type === "YieldExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ts, "isYieldExpression");

  function rs(e, t) {
    return e && e.type === "AwaitExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(rs, "isAwaitExpression");

  function ns(e, t) {
    return e && e.type === "Import" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ns, "isImport");

  function is(e, t) {
    return e && e.type === "BigIntLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(is, "isBigIntLiteral");

  function as(e, t) {
    return e && e.type === "ExportNamespaceSpecifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(as, "isExportNamespaceSpecifier");

  function ss(e, t) {
    return e && e.type === "OptionalMemberExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ss, "isOptionalMemberExpression");

  function os(e, t) {
    return e && e.type === "OptionalCallExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(os, "isOptionalCallExpression");

  function us(e, t) {
    return e && e.type === "ClassProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(us, "isClassProperty");

  function ls(e, t) {
    return e && e.type === "ClassAccessorProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ls, "isClassAccessorProperty");

  function ps(e, t) {
    return e && e.type === "ClassPrivateProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ps, "isClassPrivateProperty");

  function fs(e, t) {
    return e && e.type === "ClassPrivateMethod" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(fs, "isClassPrivateMethod");

  function cs(e, t) {
    return e && e.type === "PrivateName" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(cs, "isPrivateName");

  function ys(e, t) {
    return e && e.type === "StaticBlock" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ys, "isStaticBlock");

  function ds(e, t) {
    return e && e.type === "AnyTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ds, "isAnyTypeAnnotation");

  function Ts(e, t) {
    return e && e.type === "ArrayTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ts, "isArrayTypeAnnotation");

  function ms(e, t) {
    return e && e.type === "BooleanTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ms, "isBooleanTypeAnnotation");

  function Ss(e, t) {
    return e && e.type === "BooleanLiteralTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ss, "isBooleanLiteralTypeAnnotation");

  function Es(e, t) {
    return e && e.type === "NullLiteralTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Es, "isNullLiteralTypeAnnotation");

  function bs(e, t) {
    return e && e.type === "ClassImplements" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(bs, "isClassImplements");

  function Ps(e, t) {
    return e && e.type === "DeclareClass" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ps, "isDeclareClass");

  function As(e, t) {
    return e && e.type === "DeclareFunction" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(As, "isDeclareFunction");

  function xs(e, t) {
    return e && e.type === "DeclareInterface" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(xs, "isDeclareInterface");

  function Os(e, t) {
    return e && e.type === "DeclareModule" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Os, "isDeclareModule");

  function vs(e, t) {
    return e && e.type === "DeclareModuleExports" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(vs, "isDeclareModuleExports");

  function gs(e, t) {
    return e && e.type === "DeclareTypeAlias" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(gs, "isDeclareTypeAlias");

  function Is(e, t) {
    return e && e.type === "DeclareOpaqueType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Is, "isDeclareOpaqueType");

  function Ds(e, t) {
    return e && e.type === "DeclareVariable" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ds, "isDeclareVariable");

  function Ns(e, t) {
    return e && e.type === "DeclareExportDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ns, "isDeclareExportDeclaration");

  function _s(e, t) {
    return e && e.type === "DeclareExportAllDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(_s, "isDeclareExportAllDeclaration");

  function hs(e, t) {
    return e && e.type === "DeclaredPredicate" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(hs, "isDeclaredPredicate");

  function Ls(e, t) {
    return e && e.type === "ExistsTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ls, "isExistsTypeAnnotation");

  function js(e, t) {
    return e && e.type === "FunctionTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(js, "isFunctionTypeAnnotation");

  function Cs(e, t) {
    return e && e.type === "FunctionTypeParam" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Cs, "isFunctionTypeParam");

  function Bs(e, t) {
    return e && e.type === "GenericTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Bs, "isGenericTypeAnnotation");

  function Ms(e, t) {
    return e && e.type === "InferredPredicate" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ms, "isInferredPredicate");

  function ws(e, t) {
    return e && e.type === "InterfaceExtends" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ws, "isInterfaceExtends");

  function Fs(e, t) {
    return e && e.type === "InterfaceDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Fs, "isInterfaceDeclaration");

  function Rs(e, t) {
    return e && e.type === "InterfaceTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Rs, "isInterfaceTypeAnnotation");

  function Ks(e, t) {
    return e && e.type === "IntersectionTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ks, "isIntersectionTypeAnnotation");

  function Ys(e, t) {
    return e && e.type === "MixedTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ys, "isMixedTypeAnnotation");

  function Vs(e, t) {
    return e && e.type === "EmptyTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Vs, "isEmptyTypeAnnotation");

  function qs(e, t) {
    return e && e.type === "NullableTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(qs, "isNullableTypeAnnotation");

  function ks(e, t) {
    return e && e.type === "NumberLiteralTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ks, "isNumberLiteralTypeAnnotation");

  function Xs(e, t) {
    return e && e.type === "NumberTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Xs, "isNumberTypeAnnotation");

  function Js(e, t) {
    return e && e.type === "ObjectTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Js, "isObjectTypeAnnotation");

  function Us(e, t) {
    return e && e.type === "ObjectTypeInternalSlot" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Us, "isObjectTypeInternalSlot");

  function Ws(e, t) {
    return e && e.type === "ObjectTypeCallProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ws, "isObjectTypeCallProperty");

  function Gs(e, t) {
    return e && e.type === "ObjectTypeIndexer" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Gs, "isObjectTypeIndexer");

  function $s(e, t) {
    return e && e.type === "ObjectTypeProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n($s, "isObjectTypeProperty");

  function zs(e, t) {
    return e && e.type === "ObjectTypeSpreadProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(zs, "isObjectTypeSpreadProperty");

  function Qs(e, t) {
    return e && e.type === "OpaqueType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Qs, "isOpaqueType");

  function Hs(e, t) {
    return e && e.type === "QualifiedTypeIdentifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Hs, "isQualifiedTypeIdentifier");

  function Zs(e, t) {
    return e && e.type === "StringLiteralTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Zs, "isStringLiteralTypeAnnotation");

  function eo(e, t) {
    return e && e.type === "StringTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(eo, "isStringTypeAnnotation");

  function to(e, t) {
    return e && e.type === "SymbolTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(to, "isSymbolTypeAnnotation");

  function ro(e, t) {
    return e && e.type === "ThisTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ro, "isThisTypeAnnotation");

  function no(e, t) {
    return e && e.type === "TupleTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(no, "isTupleTypeAnnotation");

  function io(e, t) {
    return e && e.type === "TypeofTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(io, "isTypeofTypeAnnotation");

  function ao(e, t) {
    return e && e.type === "TypeAlias" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ao, "isTypeAlias");

  function so(e, t) {
    return e && e.type === "TypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(so, "isTypeAnnotation");

  function oo(e, t) {
    return e && e.type === "TypeCastExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(oo, "isTypeCastExpression");

  function uo(e, t) {
    return e && e.type === "TypeParameter" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(uo, "isTypeParameter");

  function lo(e, t) {
    return e && e.type === "TypeParameterDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(lo, "isTypeParameterDeclaration");

  function po(e, t) {
    return e && e.type === "TypeParameterInstantiation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(po, "isTypeParameterInstantiation");

  function fo(e, t) {
    return e && e.type === "UnionTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(fo, "isUnionTypeAnnotation");

  function co(e, t) {
    return e && e.type === "Variance" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(co, "isVariance");

  function yo(e, t) {
    return e && e.type === "VoidTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(yo, "isVoidTypeAnnotation");

  function To(e, t) {
    return e && e.type === "EnumDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(To, "isEnumDeclaration");

  function mo(e, t) {
    return e && e.type === "EnumBooleanBody" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(mo, "isEnumBooleanBody");

  function So(e, t) {
    return e && e.type === "EnumNumberBody" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(So, "isEnumNumberBody");

  function Eo(e, t) {
    return e && e.type === "EnumStringBody" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Eo, "isEnumStringBody");

  function bo(e, t) {
    return e && e.type === "EnumSymbolBody" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(bo, "isEnumSymbolBody");

  function Po(e, t) {
    return e && e.type === "EnumBooleanMember" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Po, "isEnumBooleanMember");

  function Ao(e, t) {
    return e && e.type === "EnumNumberMember" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ao, "isEnumNumberMember");

  function xo(e, t) {
    return e && e.type === "EnumStringMember" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(xo, "isEnumStringMember");

  function Oo(e, t) {
    return e && e.type === "EnumDefaultedMember" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Oo, "isEnumDefaultedMember");

  function vo(e, t) {
    return e && e.type === "IndexedAccessType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(vo, "isIndexedAccessType");

  function go(e, t) {
    return e && e.type === "OptionalIndexedAccessType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(go, "isOptionalIndexedAccessType");

  function Io(e, t) {
    return e && e.type === "JSXAttribute" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Io, "isJSXAttribute");

  function Do(e, t) {
    return e && e.type === "JSXClosingElement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Do, "isJSXClosingElement");

  function No(e, t) {
    return e && e.type === "JSXElement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(No, "isJSXElement");

  function _o(e, t) {
    return e && e.type === "JSXEmptyExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(_o, "isJSXEmptyExpression");

  function ho(e, t) {
    return e && e.type === "JSXExpressionContainer" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ho, "isJSXExpressionContainer");

  function Lo(e, t) {
    return e && e.type === "JSXSpreadChild" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Lo, "isJSXSpreadChild");

  function jo(e, t) {
    return e && e.type === "JSXIdentifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(jo, "isJSXIdentifier");

  function Co(e, t) {
    return e && e.type === "JSXMemberExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Co, "isJSXMemberExpression");

  function Bo(e, t) {
    return e && e.type === "JSXNamespacedName" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Bo, "isJSXNamespacedName");

  function Mo(e, t) {
    return e && e.type === "JSXOpeningElement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Mo, "isJSXOpeningElement");

  function wo(e, t) {
    return e && e.type === "JSXSpreadAttribute" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(wo, "isJSXSpreadAttribute");

  function Fo(e, t) {
    return e && e.type === "JSXText" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Fo, "isJSXText");

  function Ro(e, t) {
    return e && e.type === "JSXFragment" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ro, "isJSXFragment");

  function Ko(e, t) {
    return e && e.type === "JSXOpeningFragment" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ko, "isJSXOpeningFragment");

  function Yo(e, t) {
    return e && e.type === "JSXClosingFragment" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Yo, "isJSXClosingFragment");

  function Vo(e, t) {
    return e && e.type === "Noop" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Vo, "isNoop");

  function qo(e, t) {
    return e && e.type === "Placeholder" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(qo, "isPlaceholder");

  function ko(e, t) {
    return e && e.type === "V8IntrinsicIdentifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ko, "isV8IntrinsicIdentifier");

  function Xo(e, t) {
    return e && e.type === "ArgumentPlaceholder" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Xo, "isArgumentPlaceholder");

  function Jo(e, t) {
    return e && e.type === "BindExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Jo, "isBindExpression");

  function Uo(e, t) {
    return e && e.type === "ImportAttribute" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Uo, "isImportAttribute");

  function Wo(e, t) {
    return e && e.type === "Decorator" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Wo, "isDecorator");

  function Go(e, t) {
    return e && e.type === "DoExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Go, "isDoExpression");

  function $o(e, t) {
    return e && e.type === "ExportDefaultSpecifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n($o, "isExportDefaultSpecifier");

  function zo(e, t) {
    return e && e.type === "RecordExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(zo, "isRecordExpression");

  function Qo(e, t) {
    return e && e.type === "TupleExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Qo, "isTupleExpression");

  function Ho(e, t) {
    return e && e.type === "DecimalLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ho, "isDecimalLiteral");

  function Zo(e, t) {
    return e && e.type === "ModuleExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Zo, "isModuleExpression");

  function eu(e, t) {
    return e && e.type === "TopicReference" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(eu, "isTopicReference");

  function tu(e, t) {
    return e && e.type === "PipelineTopicExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(tu, "isPipelineTopicExpression");

  function ru(e, t) {
    return e && e.type === "PipelineBareFunction" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ru, "isPipelineBareFunction");

  function nu(e, t) {
    return e && e.type === "PipelinePrimaryTopicReference" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(nu, "isPipelinePrimaryTopicReference");

  function iu(e, t) {
    return e && e.type === "TSParameterProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(iu, "isTSParameterProperty");

  function au(e, t) {
    return e && e.type === "TSDeclareFunction" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(au, "isTSDeclareFunction");

  function su(e, t) {
    return e && e.type === "TSDeclareMethod" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(su, "isTSDeclareMethod");

  function ou(e, t) {
    return e && e.type === "TSQualifiedName" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ou, "isTSQualifiedName");

  function uu(e, t) {
    return e && e.type === "TSCallSignatureDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(uu, "isTSCallSignatureDeclaration");

  function lu(e, t) {
    return e && e.type === "TSConstructSignatureDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(lu, "isTSConstructSignatureDeclaration");

  function pu(e, t) {
    return e && e.type === "TSPropertySignature" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(pu, "isTSPropertySignature");

  function fu(e, t) {
    return e && e.type === "TSMethodSignature" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(fu, "isTSMethodSignature");

  function cu(e, t) {
    return e && e.type === "TSIndexSignature" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(cu, "isTSIndexSignature");

  function yu(e, t) {
    return e && e.type === "TSAnyKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(yu, "isTSAnyKeyword");

  function du(e, t) {
    return e && e.type === "TSBooleanKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(du, "isTSBooleanKeyword");

  function Tu(e, t) {
    return e && e.type === "TSBigIntKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Tu, "isTSBigIntKeyword");

  function mu(e, t) {
    return e && e.type === "TSIntrinsicKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(mu, "isTSIntrinsicKeyword");

  function Su(e, t) {
    return e && e.type === "TSNeverKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Su, "isTSNeverKeyword");

  function Eu(e, t) {
    return e && e.type === "TSNullKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Eu, "isTSNullKeyword");

  function bu(e, t) {
    return e && e.type === "TSNumberKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(bu, "isTSNumberKeyword");

  function Pu(e, t) {
    return e && e.type === "TSObjectKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Pu, "isTSObjectKeyword");

  function Au(e, t) {
    return e && e.type === "TSStringKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Au, "isTSStringKeyword");

  function xu(e, t) {
    return e && e.type === "TSSymbolKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(xu, "isTSSymbolKeyword");

  function Ou(e, t) {
    return e && e.type === "TSUndefinedKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ou, "isTSUndefinedKeyword");

  function vu(e, t) {
    return e && e.type === "TSUnknownKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(vu, "isTSUnknownKeyword");

  function gu(e, t) {
    return e && e.type === "TSVoidKeyword" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(gu, "isTSVoidKeyword");

  function Iu(e, t) {
    return e && e.type === "TSThisType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Iu, "isTSThisType");

  function Du(e, t) {
    return e && e.type === "TSFunctionType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Du, "isTSFunctionType");

  function Nu(e, t) {
    return e && e.type === "TSConstructorType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Nu, "isTSConstructorType");

  function _u(e, t) {
    return e && e.type === "TSTypeReference" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(_u, "isTSTypeReference");

  function hu(e, t) {
    return e && e.type === "TSTypePredicate" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(hu, "isTSTypePredicate");

  function Lu(e, t) {
    return e && e.type === "TSTypeQuery" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Lu, "isTSTypeQuery");

  function ju(e, t) {
    return e && e.type === "TSTypeLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ju, "isTSTypeLiteral");

  function Cu(e, t) {
    return e && e.type === "TSArrayType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Cu, "isTSArrayType");

  function Bu(e, t) {
    return e && e.type === "TSTupleType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Bu, "isTSTupleType");

  function Mu(e, t) {
    return e && e.type === "TSOptionalType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Mu, "isTSOptionalType");

  function wu(e, t) {
    return e && e.type === "TSRestType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(wu, "isTSRestType");

  function Fu(e, t) {
    return e && e.type === "TSNamedTupleMember" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Fu, "isTSNamedTupleMember");

  function Ru(e, t) {
    return e && e.type === "TSUnionType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ru, "isTSUnionType");

  function Ku(e, t) {
    return e && e.type === "TSIntersectionType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ku, "isTSIntersectionType");

  function Yu(e, t) {
    return e && e.type === "TSConditionalType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Yu, "isTSConditionalType");

  function Vu(e, t) {
    return e && e.type === "TSInferType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Vu, "isTSInferType");

  function qu(e, t) {
    return e && e.type === "TSParenthesizedType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(qu, "isTSParenthesizedType");

  function ku(e, t) {
    return e && e.type === "TSTypeOperator" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ku, "isTSTypeOperator");

  function Xu(e, t) {
    return e && e.type === "TSIndexedAccessType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Xu, "isTSIndexedAccessType");

  function Ju(e, t) {
    return e && e.type === "TSMappedType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ju, "isTSMappedType");

  function Uu(e, t) {
    return e && e.type === "TSLiteralType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Uu, "isTSLiteralType");

  function Wu(e, t) {
    return e && e.type === "TSExpressionWithTypeArguments" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Wu, "isTSExpressionWithTypeArguments");

  function Gu(e, t) {
    return e && e.type === "TSInterfaceDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Gu, "isTSInterfaceDeclaration");

  function $u(e, t) {
    return e && e.type === "TSInterfaceBody" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n($u, "isTSInterfaceBody");

  function zu(e, t) {
    return e && e.type === "TSTypeAliasDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(zu, "isTSTypeAliasDeclaration");

  function Qu(e, t) {
    return e && e.type === "TSInstantiationExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Qu, "isTSInstantiationExpression");

  function Hu(e, t) {
    return e && e.type === "TSAsExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Hu, "isTSAsExpression");

  function Zu(e, t) {
    return e && e.type === "TSTypeAssertion" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Zu, "isTSTypeAssertion");

  function el(e, t) {
    return e && e.type === "TSEnumDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(el, "isTSEnumDeclaration");

  function tl(e, t) {
    return e && e.type === "TSEnumMember" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(tl, "isTSEnumMember");

  function rl(e, t) {
    return e && e.type === "TSModuleDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(rl, "isTSModuleDeclaration");

  function nl(e, t) {
    return e && e.type === "TSModuleBlock" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(nl, "isTSModuleBlock");

  function il(e, t) {
    return e && e.type === "TSImportType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(il, "isTSImportType");

  function al(e, t) {
    return e && e.type === "TSImportEqualsDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(al, "isTSImportEqualsDeclaration");

  function sl(e, t) {
    return e && e.type === "TSExternalModuleReference" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(sl, "isTSExternalModuleReference");

  function ol(e, t) {
    return e && e.type === "TSNonNullExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ol, "isTSNonNullExpression");

  function ul(e, t) {
    return e && e.type === "TSExportAssignment" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ul, "isTSExportAssignment");

  function ll(e, t) {
    return e && e.type === "TSNamespaceExportDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ll, "isTSNamespaceExportDeclaration");

  function pl(e, t) {
    return e && e.type === "TSTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(pl, "isTSTypeAnnotation");

  function fl(e, t) {
    return e && e.type === "TSTypeParameterInstantiation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(fl, "isTSTypeParameterInstantiation");

  function cl(e, t) {
    return e && e.type === "TSTypeParameterDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(cl, "isTSTypeParameterDeclaration");

  function yl(e, t) {
    return e && e.type === "TSTypeParameter" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(yl, "isTSTypeParameter");

  function dl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ArrayExpression" || r === "AssignmentExpression" || r === "BinaryExpression" || r === "InterpreterDirective" || r === "Directive" || r === "DirectiveLiteral" || r === "BlockStatement" || r === "BreakStatement" || r === "CallExpression" || r === "CatchClause" || r === "ConditionalExpression" || r === "ContinueStatement" || r === "DebuggerStatement" || r === "DoWhileStatement" || r === "EmptyStatement" || r === "ExpressionStatement" || r === "File" || r === "ForInStatement" || r === "ForStatement" || r === "FunctionDeclaration" || r === "FunctionExpression" || r === "Identifier" || r === "IfStatement" || r === "LabeledStatement" || r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "RegExpLiteral" || r === "LogicalExpression" || r === "MemberExpression" || r === "NewExpression" || r === "Program" || r === "ObjectExpression" || r === "ObjectMethod" || r === "ObjectProperty" || r === "RestElement" || r === "ReturnStatement" || r === "SequenceExpression" || r === "ParenthesizedExpression" || r === "SwitchCase" || r === "SwitchStatement" || r === "ThisExpression" || r === "ThrowStatement" || r === "TryStatement" || r === "UnaryExpression" || r === "UpdateExpression" || r === "VariableDeclaration" || r === "VariableDeclarator" || r === "WhileStatement" || r === "WithStatement" || r === "AssignmentPattern" || r === "ArrayPattern" || r === "ArrowFunctionExpression" || r === "ClassBody" || r === "ClassExpression" || r === "ClassDeclaration" || r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" || r === "ExportSpecifier" || r === "ForOfStatement" || r === "ImportDeclaration" || r === "ImportDefaultSpecifier" || r === "ImportNamespaceSpecifier" || r === "ImportSpecifier" || r === "MetaProperty" || r === "ClassMethod" || r === "ObjectPattern" || r === "SpreadElement" || r === "Super" || r === "TaggedTemplateExpression" || r === "TemplateElement" || r === "TemplateLiteral" || r === "YieldExpression" || r === "AwaitExpression" || r === "Import" || r === "BigIntLiteral" || r === "ExportNamespaceSpecifier" || r === "OptionalMemberExpression" || r === "OptionalCallExpression" || r === "ClassProperty" || r === "ClassAccessorProperty" || r === "ClassPrivateProperty" || r === "ClassPrivateMethod" || r === "PrivateName" || r === "StaticBlock" || r === "Placeholder" && (e.expectedNode === "Identifier" || e.expectedNode === "StringLiteral" || e.expectedNode === "BlockStatement" || e.expectedNode === "ClassBody") ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(dl, "isStandardized");

  function Tl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ArrayExpression" || r === "AssignmentExpression" || r === "BinaryExpression" || r === "CallExpression" || r === "ConditionalExpression" || r === "FunctionExpression" || r === "Identifier" || r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "RegExpLiteral" || r === "LogicalExpression" || r === "MemberExpression" || r === "NewExpression" || r === "ObjectExpression" || r === "SequenceExpression" || r === "ParenthesizedExpression" || r === "ThisExpression" || r === "UnaryExpression" || r === "UpdateExpression" || r === "ArrowFunctionExpression" || r === "ClassExpression" || r === "MetaProperty" || r === "Super" || r === "TaggedTemplateExpression" || r === "TemplateLiteral" || r === "YieldExpression" || r === "AwaitExpression" || r === "Import" || r === "BigIntLiteral" || r === "OptionalMemberExpression" || r === "OptionalCallExpression" || r === "TypeCastExpression" || r === "JSXElement" || r === "JSXFragment" || r === "BindExpression" || r === "DoExpression" || r === "RecordExpression" || r === "TupleExpression" || r === "DecimalLiteral" || r === "ModuleExpression" || r === "TopicReference" || r === "PipelineTopicExpression" || r === "PipelineBareFunction" || r === "PipelinePrimaryTopicReference" || r === "TSInstantiationExpression" || r === "TSAsExpression" || r === "TSTypeAssertion" || r === "TSNonNullExpression" || r === "Placeholder" && (e.expectedNode === "Expression" || e.expectedNode === "Identifier" || e.expectedNode === "StringLiteral") ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Tl, "isExpression");

  function ml(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BinaryExpression" || r === "LogicalExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ml, "isBinary");

  function Sl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BlockStatement" || r === "CatchClause" || r === "DoWhileStatement" || r === "ForInStatement" || r === "ForStatement" || r === "FunctionDeclaration" || r === "FunctionExpression" || r === "Program" || r === "ObjectMethod" || r === "SwitchStatement" || r === "WhileStatement" || r === "ArrowFunctionExpression" || r === "ClassExpression" || r === "ClassDeclaration" || r === "ForOfStatement" || r === "ClassMethod" || r === "ClassPrivateMethod" || r === "StaticBlock" || r === "TSModuleBlock" || r === "Placeholder" && e.expectedNode === "BlockStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Sl, "isScopable");

  function El(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BlockStatement" || r === "CatchClause" || r === "DoWhileStatement" || r === "ForInStatement" || r === "ForStatement" || r === "FunctionDeclaration" || r === "FunctionExpression" || r === "Program" || r === "ObjectMethod" || r === "SwitchStatement" || r === "WhileStatement" || r === "ArrowFunctionExpression" || r === "ForOfStatement" || r === "ClassMethod" || r === "ClassPrivateMethod" || r === "StaticBlock" || r === "TSModuleBlock" || r === "Placeholder" && e.expectedNode === "BlockStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(El, "isBlockParent");

  function bl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BlockStatement" || r === "Program" || r === "TSModuleBlock" || r === "Placeholder" && e.expectedNode === "BlockStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(bl, "isBlock");

  function Pl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BlockStatement" || r === "BreakStatement" || r === "ContinueStatement" || r === "DebuggerStatement" || r === "DoWhileStatement" || r === "EmptyStatement" || r === "ExpressionStatement" || r === "ForInStatement" || r === "ForStatement" || r === "FunctionDeclaration" || r === "IfStatement" || r === "LabeledStatement" || r === "ReturnStatement" || r === "SwitchStatement" || r === "ThrowStatement" || r === "TryStatement" || r === "VariableDeclaration" || r === "WhileStatement" || r === "WithStatement" || r === "ClassDeclaration" || r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" || r === "ForOfStatement" || r === "ImportDeclaration" || r === "DeclareClass" || r === "DeclareFunction" || r === "DeclareInterface" || r === "DeclareModule" || r === "DeclareModuleExports" || r === "DeclareTypeAlias" || r === "DeclareOpaqueType" || r === "DeclareVariable" || r === "DeclareExportDeclaration" || r === "DeclareExportAllDeclaration" || r === "InterfaceDeclaration" || r === "OpaqueType" || r === "TypeAlias" || r === "EnumDeclaration" || r === "TSDeclareFunction" || r === "TSInterfaceDeclaration" || r === "TSTypeAliasDeclaration" || r === "TSEnumDeclaration" || r === "TSModuleDeclaration" || r === "TSImportEqualsDeclaration" || r === "TSExportAssignment" || r === "TSNamespaceExportDeclaration" || r === "Placeholder" && (e.expectedNode === "Statement" || e.expectedNode === "Declaration" || e.expectedNode === "BlockStatement") ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Pl, "isStatement");

  function Al(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BreakStatement" || r === "ContinueStatement" || r === "ReturnStatement" || r === "ThrowStatement" || r === "YieldExpression" || r === "AwaitExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Al, "isTerminatorless");

  function xl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BreakStatement" || r === "ContinueStatement" || r === "ReturnStatement" || r === "ThrowStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(xl, "isCompletionStatement");

  function Ol(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ConditionalExpression" || r === "IfStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ol, "isConditional");

  function vl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "DoWhileStatement" || r === "ForInStatement" || r === "ForStatement" || r === "WhileStatement" || r === "ForOfStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(vl, "isLoop");

  function gl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "DoWhileStatement" || r === "WhileStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(gl, "isWhile");

  function Il(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ExpressionStatement" || r === "ParenthesizedExpression" || r === "TypeCastExpression" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Il, "isExpressionWrapper");

  function Dl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ForInStatement" || r === "ForStatement" || r === "ForOfStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Dl, "isFor");

  function Nl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ForInStatement" || r === "ForOfStatement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Nl, "isForXStatement");

  function _l(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "FunctionDeclaration" || r === "FunctionExpression" || r === "ObjectMethod" || r === "ArrowFunctionExpression" || r === "ClassMethod" || r === "ClassPrivateMethod" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(_l, "isFunction");

  function hl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "FunctionDeclaration" || r === "FunctionExpression" || r === "ObjectMethod" || r === "ArrowFunctionExpression" || r === "ClassMethod" || r === "ClassPrivateMethod" || r === "StaticBlock" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(hl, "isFunctionParent");

  function Ll(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "FunctionDeclaration" || r === "FunctionExpression" || r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "RegExpLiteral" || r === "ArrowFunctionExpression" || r === "BigIntLiteral" || r === "DecimalLiteral" || r === "Placeholder" && e.expectedNode === "StringLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ll, "isPureish");

  function jl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "FunctionDeclaration" || r === "VariableDeclaration" || r === "ClassDeclaration" || r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" || r === "ImportDeclaration" || r === "DeclareClass" || r === "DeclareFunction" || r === "DeclareInterface" || r === "DeclareModule" || r === "DeclareModuleExports" || r === "DeclareTypeAlias" || r === "DeclareOpaqueType" || r === "DeclareVariable" || r === "DeclareExportDeclaration" || r === "DeclareExportAllDeclaration" || r === "InterfaceDeclaration" || r === "OpaqueType" || r === "TypeAlias" || r === "EnumDeclaration" || r === "TSDeclareFunction" || r === "TSInterfaceDeclaration" || r === "TSTypeAliasDeclaration" || r === "TSEnumDeclaration" || r === "TSModuleDeclaration" || r === "Placeholder" && e.expectedNode === "Declaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(jl, "isDeclaration");

  function Cl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "Identifier" || r === "RestElement" || r === "AssignmentPattern" || r === "ArrayPattern" || r === "ObjectPattern" || r === "TSAsExpression" || r === "TSTypeAssertion" || r === "TSNonNullExpression" || r === "Placeholder" && (e.expectedNode === "Pattern" || e.expectedNode === "Identifier") ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Cl, "isPatternLike");

  function Bl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "Identifier" || r === "MemberExpression" || r === "RestElement" || r === "AssignmentPattern" || r === "ArrayPattern" || r === "ObjectPattern" || r === "TSParameterProperty" || r === "TSAsExpression" || r === "TSTypeAssertion" || r === "TSNonNullExpression" || r === "Placeholder" && (e.expectedNode === "Pattern" || e.expectedNode === "Identifier") ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Bl, "isLVal");

  function Ml(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "Identifier" || r === "TSQualifiedName" || r === "Placeholder" && e.expectedNode === "Identifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ml, "isTSEntityName");

  function wl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "RegExpLiteral" || r === "TemplateLiteral" || r === "BigIntLiteral" || r === "DecimalLiteral" || r === "Placeholder" && e.expectedNode === "StringLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(wl, "isLiteral");

  function Fl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "BigIntLiteral" || r === "JSXAttribute" || r === "JSXClosingElement" || r === "JSXElement" || r === "JSXExpressionContainer" || r === "JSXSpreadChild" || r === "JSXOpeningElement" || r === "JSXText" || r === "JSXFragment" || r === "JSXOpeningFragment" || r === "JSXClosingFragment" || r === "DecimalLiteral" || r === "Placeholder" && e.expectedNode === "StringLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Fl, "isImmutable");

  function Rl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ObjectMethod" || r === "ObjectProperty" || r === "ObjectTypeInternalSlot" || r === "ObjectTypeCallProperty" || r === "ObjectTypeIndexer" || r === "ObjectTypeProperty" || r === "ObjectTypeSpreadProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Rl, "isUserWhitespacable");

  function Kl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ObjectMethod" || r === "ClassMethod" || r === "ClassPrivateMethod" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Kl, "isMethod");

  function Yl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ObjectMethod" || r === "ObjectProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Yl, "isObjectMember");

  function Vl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ObjectProperty" || r === "ClassProperty" || r === "ClassAccessorProperty" || r === "ClassPrivateProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Vl, "isProperty");

  function ql(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "UnaryExpression" || r === "SpreadElement" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ql, "isUnaryLike");

  function kl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "AssignmentPattern" || r === "ArrayPattern" || r === "ObjectPattern" || r === "Placeholder" && e.expectedNode === "Pattern" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(kl, "isPattern");

  function Xl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ClassExpression" || r === "ClassDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Xl, "isClass");

  function Jl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" || r === "ImportDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Jl, "isModuleDeclaration");

  function Ul(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ul, "isExportDeclaration");

  function Wl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ExportSpecifier" || r === "ImportDefaultSpecifier" || r === "ImportNamespaceSpecifier" || r === "ImportSpecifier" || r === "ExportNamespaceSpecifier" || r === "ExportDefaultSpecifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Wl, "isModuleSpecifier");

  function Gl(e, t) {
    return e && e.type === "ClassAccessorProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Gl, "isAccessor");

  function $l(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ClassPrivateProperty" || r === "ClassPrivateMethod" || r === "PrivateName" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n($l, "isPrivate");

  function zl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "AnyTypeAnnotation" || r === "ArrayTypeAnnotation" || r === "BooleanTypeAnnotation" || r === "BooleanLiteralTypeAnnotation" || r === "NullLiteralTypeAnnotation" || r === "ClassImplements" || r === "DeclareClass" || r === "DeclareFunction" || r === "DeclareInterface" || r === "DeclareModule" || r === "DeclareModuleExports" || r === "DeclareTypeAlias" || r === "DeclareOpaqueType" || r === "DeclareVariable" || r === "DeclareExportDeclaration" || r === "DeclareExportAllDeclaration" || r === "DeclaredPredicate" || r === "ExistsTypeAnnotation" || r === "FunctionTypeAnnotation" || r === "FunctionTypeParam" || r === "GenericTypeAnnotation" || r === "InferredPredicate" || r === "InterfaceExtends" || r === "InterfaceDeclaration" || r === "InterfaceTypeAnnotation" || r === "IntersectionTypeAnnotation" || r === "MixedTypeAnnotation" || r === "EmptyTypeAnnotation" || r === "NullableTypeAnnotation" || r === "NumberLiteralTypeAnnotation" || r === "NumberTypeAnnotation" || r === "ObjectTypeAnnotation" || r === "ObjectTypeInternalSlot" || r === "ObjectTypeCallProperty" || r === "ObjectTypeIndexer" || r === "ObjectTypeProperty" || r === "ObjectTypeSpreadProperty" || r === "OpaqueType" || r === "QualifiedTypeIdentifier" || r === "StringLiteralTypeAnnotation" || r === "StringTypeAnnotation" || r === "SymbolTypeAnnotation" || r === "ThisTypeAnnotation" || r === "TupleTypeAnnotation" || r === "TypeofTypeAnnotation" || r === "TypeAlias" || r === "TypeAnnotation" || r === "TypeCastExpression" || r === "TypeParameter" || r === "TypeParameterDeclaration" || r === "TypeParameterInstantiation" || r === "UnionTypeAnnotation" || r === "Variance" || r === "VoidTypeAnnotation" || r === "EnumDeclaration" || r === "EnumBooleanBody" || r === "EnumNumberBody" || r === "EnumStringBody" || r === "EnumSymbolBody" || r === "EnumBooleanMember" || r === "EnumNumberMember" || r === "EnumStringMember" || r === "EnumDefaultedMember" || r === "IndexedAccessType" || r === "OptionalIndexedAccessType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(zl, "isFlow");

  function Ql(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "AnyTypeAnnotation" || r === "ArrayTypeAnnotation" || r === "BooleanTypeAnnotation" || r === "BooleanLiteralTypeAnnotation" || r === "NullLiteralTypeAnnotation" || r === "ExistsTypeAnnotation" || r === "FunctionTypeAnnotation" || r === "GenericTypeAnnotation" || r === "InterfaceTypeAnnotation" || r === "IntersectionTypeAnnotation" || r === "MixedTypeAnnotation" || r === "EmptyTypeAnnotation" || r === "NullableTypeAnnotation" || r === "NumberLiteralTypeAnnotation" || r === "NumberTypeAnnotation" || r === "ObjectTypeAnnotation" || r === "StringLiteralTypeAnnotation" || r === "StringTypeAnnotation" || r === "SymbolTypeAnnotation" || r === "ThisTypeAnnotation" || r === "TupleTypeAnnotation" || r === "TypeofTypeAnnotation" || r === "UnionTypeAnnotation" || r === "VoidTypeAnnotation" || r === "IndexedAccessType" || r === "OptionalIndexedAccessType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Ql, "isFlowType");

  function Hl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "AnyTypeAnnotation" || r === "BooleanTypeAnnotation" || r === "NullLiteralTypeAnnotation" || r === "MixedTypeAnnotation" || r === "EmptyTypeAnnotation" || r === "NumberTypeAnnotation" || r === "StringTypeAnnotation" || r === "SymbolTypeAnnotation" || r === "ThisTypeAnnotation" || r === "VoidTypeAnnotation" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Hl, "isFlowBaseAnnotation");

  function Zl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "DeclareClass" || r === "DeclareFunction" || r === "DeclareInterface" || r === "DeclareModule" || r === "DeclareModuleExports" || r === "DeclareTypeAlias" || r === "DeclareOpaqueType" || r === "DeclareVariable" || r === "DeclareExportDeclaration" || r === "DeclareExportAllDeclaration" || r === "InterfaceDeclaration" || r === "OpaqueType" || r === "TypeAlias" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(Zl, "isFlowDeclaration");

  function ep(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "DeclaredPredicate" || r === "InferredPredicate" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ep, "isFlowPredicate");

  function tp(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "EnumBooleanBody" || r === "EnumNumberBody" || r === "EnumStringBody" || r === "EnumSymbolBody" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(tp, "isEnumBody");

  function rp(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "EnumBooleanMember" || r === "EnumNumberMember" || r === "EnumStringMember" || r === "EnumDefaultedMember" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(rp, "isEnumMember");

  function np(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "JSXAttribute" || r === "JSXClosingElement" || r === "JSXElement" || r === "JSXEmptyExpression" || r === "JSXExpressionContainer" || r === "JSXSpreadChild" || r === "JSXIdentifier" || r === "JSXMemberExpression" || r === "JSXNamespacedName" || r === "JSXOpeningElement" || r === "JSXSpreadAttribute" || r === "JSXText" || r === "JSXFragment" || r === "JSXOpeningFragment" || r === "JSXClosingFragment" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(np, "isJSX");

  function ip(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "Noop" || r === "Placeholder" || r === "V8IntrinsicIdentifier" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ip, "isMiscellaneous");

  function ap(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "TSParameterProperty" || r === "TSDeclareFunction" || r === "TSDeclareMethod" || r === "TSQualifiedName" || r === "TSCallSignatureDeclaration" || r === "TSConstructSignatureDeclaration" || r === "TSPropertySignature" || r === "TSMethodSignature" || r === "TSIndexSignature" || r === "TSAnyKeyword" || r === "TSBooleanKeyword" || r === "TSBigIntKeyword" || r === "TSIntrinsicKeyword" || r === "TSNeverKeyword" || r === "TSNullKeyword" || r === "TSNumberKeyword" || r === "TSObjectKeyword" || r === "TSStringKeyword" || r === "TSSymbolKeyword" || r === "TSUndefinedKeyword" || r === "TSUnknownKeyword" || r === "TSVoidKeyword" || r === "TSThisType" || r === "TSFunctionType" || r === "TSConstructorType" || r === "TSTypeReference" || r === "TSTypePredicate" || r === "TSTypeQuery" || r === "TSTypeLiteral" || r === "TSArrayType" || r === "TSTupleType" || r === "TSOptionalType" || r === "TSRestType" || r === "TSNamedTupleMember" || r === "TSUnionType" || r === "TSIntersectionType" || r === "TSConditionalType" || r === "TSInferType" || r === "TSParenthesizedType" || r === "TSTypeOperator" || r === "TSIndexedAccessType" || r === "TSMappedType" || r === "TSLiteralType" || r === "TSExpressionWithTypeArguments" || r === "TSInterfaceDeclaration" || r === "TSInterfaceBody" || r === "TSTypeAliasDeclaration" || r === "TSInstantiationExpression" || r === "TSAsExpression" || r === "TSTypeAssertion" || r === "TSEnumDeclaration" || r === "TSEnumMember" || r === "TSModuleDeclaration" || r === "TSModuleBlock" || r === "TSImportType" || r === "TSImportEqualsDeclaration" || r === "TSExternalModuleReference" || r === "TSNonNullExpression" || r === "TSExportAssignment" || r === "TSNamespaceExportDeclaration" || r === "TSTypeAnnotation" || r === "TSTypeParameterInstantiation" || r === "TSTypeParameterDeclaration" || r === "TSTypeParameter" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(ap, "isTypeScript");

  function sp(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "TSCallSignatureDeclaration" || r === "TSConstructSignatureDeclaration" || r === "TSPropertySignature" || r === "TSMethodSignature" || r === "TSIndexSignature" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(sp, "isTSTypeElement");

  function op(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "TSAnyKeyword" || r === "TSBooleanKeyword" || r === "TSBigIntKeyword" || r === "TSIntrinsicKeyword" || r === "TSNeverKeyword" || r === "TSNullKeyword" || r === "TSNumberKeyword" || r === "TSObjectKeyword" || r === "TSStringKeyword" || r === "TSSymbolKeyword" || r === "TSUndefinedKeyword" || r === "TSUnknownKeyword" || r === "TSVoidKeyword" || r === "TSThisType" || r === "TSFunctionType" || r === "TSConstructorType" || r === "TSTypeReference" || r === "TSTypePredicate" || r === "TSTypeQuery" || r === "TSTypeLiteral" || r === "TSArrayType" || r === "TSTupleType" || r === "TSOptionalType" || r === "TSRestType" || r === "TSUnionType" || r === "TSIntersectionType" || r === "TSConditionalType" || r === "TSInferType" || r === "TSParenthesizedType" || r === "TSTypeOperator" || r === "TSIndexedAccessType" || r === "TSMappedType" || r === "TSLiteralType" || r === "TSExpressionWithTypeArguments" || r === "TSImportType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(op, "isTSType");

  function up(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "TSAnyKeyword" || r === "TSBooleanKeyword" || r === "TSBigIntKeyword" || r === "TSIntrinsicKeyword" || r === "TSNeverKeyword" || r === "TSNullKeyword" || r === "TSNumberKeyword" || r === "TSObjectKeyword" || r === "TSStringKeyword" || r === "TSSymbolKeyword" || r === "TSUndefinedKeyword" || r === "TSUnknownKeyword" || r === "TSVoidKeyword" || r === "TSThisType" || r === "TSLiteralType" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(up, "isTSBaseType");

  function lp(e, t) {
    return console.trace("The node type NumberLiteral has been renamed to NumericLiteral"), e && e.type === "NumberLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(lp, "isNumberLiteral");

  function pp(e, t) {
    return console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"), e && e.type === "RegexLiteral" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(pp, "isRegexLiteral");

  function fp(e, t) {
    return console.trace("The node type RestProperty has been renamed to RestElement"), e && e.type === "RestProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(fp, "isRestProperty");

  function cp(e, t) {
    return console.trace("The node type SpreadProperty has been renamed to SpreadElement"), e && e.type === "SpreadProperty" ? typeof t > "u" ? !0 : (0, u.default)(e, t) : !1;
  }

  n(cp, "isSpreadProperty");
});
var ke = x(qe => {
  "use strict";

  Object.defineProperty(qe, "__esModule", {
    value: !0
  });
  qe.default = yp;
  var oe = C();

  function yp(e, t, r) {
    if (!(0, oe.isMemberExpression)(e)) return !1;
    let p = Array.isArray(t) ? t : t.split("."),
        d = [],
        m;

    for (m = e; (0, oe.isMemberExpression)(m); m = m.object) d.push(m.property);

    if (d.push(m), d.length < p.length || !r && d.length > p.length) return !1;

    for (let E = 0, v = d.length - 1; E < p.length; E++, v--) {
      let N = d[v],
          j;
      if ((0, oe.isIdentifier)(N)) j = N.name;else if ((0, oe.isStringLiteral)(N)) j = N.value;else if ((0, oe.isThisExpression)(N)) j = "this";else return !1;
      if (p[E] !== j) return !1;
    }

    return !0;
  }

  n(yp, "matchesPattern");
});
var Je = x(Xe => {
  "use strict";

  Object.defineProperty(Xe, "__esModule", {
    value: !0
  });
  Xe.default = Tp;
  var dp = ke();

  function Tp(e, t) {
    let r = e.split(".");
    return p => (0, dp.default)(p, r, t);
  }

  n(Tp, "buildMatchMemberExpression");
});
var Br = x(me => {
  "use strict";

  Object.defineProperty(me, "__esModule", {
    value: !0
  });
  me.default = void 0;
  var mp = Je(),
      Sp = (0, mp.default)("React.Component"),
      Ep = Sp;
  me.default = Ep;
});
var Mr = x(Ue => {
  "use strict";

  Object.defineProperty(Ue, "__esModule", {
    value: !0
  });
  Ue.default = bp;

  function bp(e) {
    return !!e && /^[a-z]/.test(e);
  }

  n(bp, "isCompatTag");
});
var Se = x(We => {
  "use strict";

  Object.defineProperty(We, "__esModule", {
    value: !0
  });
  We.default = Pp;
  var wr = k();

  function Pp(e, t) {
    if (e === t) return !0;
    if (wr.ALIAS_KEYS[t]) return !1;
    let r = wr.FLIPPED_ALIAS_KEYS[t];

    if (r) {
      if (r[0] === e) return !0;

      for (let p of r) if (e === p) return !0;
    }

    return !1;
  }

  n(Pp, "isType");
});
var $e = x(Ge => {
  "use strict";

  Object.defineProperty(Ge, "__esModule", {
    value: !0
  });
  Ge.default = xp;
  var Ap = k();

  function xp(e, t) {
    if (e === t) return !0;
    let r = Ap.PLACEHOLDERS_ALIAS[e];

    if (r) {
      for (let p of r) if (t === p) return !0;
    }

    return !1;
  }

  n(xp, "isPlaceholderType");
});
var re = x(ze => {
  "use strict";

  Object.defineProperty(ze, "__esModule", {
    value: !0
  });
  ze.default = Dp;
  var Op = Te(),
      vp = Se(),
      gp = $e(),
      Ip = k();

  function Dp(e, t, r) {
    return t ? (0, vp.default)(t.type, e) ? typeof r > "u" ? !0 : (0, Op.default)(t, r) : !r && t.type === "Placeholder" && e in Ip.FLIPPED_ALIAS_KEYS ? (0, gp.default)(t.expectedNode, e) : !1 : !1;
  }

  n(Dp, "is");
});
var ne = x(He => {
  "use strict";

  Object.defineProperty(He, "__esModule", {
    value: !0
  });
  He.default = Np;
  var Qe = ___babel_helper_validator_identifier$;

  function Np(e, t = !0) {
    return typeof e != "string" || t && ((0, Qe.isKeyword)(e) || (0, Qe.isStrictReservedWord)(e, !0)) ? !1 : (0, Qe.isIdentifierName)(e);
  }

  n(Np, "isValidIdentifier");
});
var G = x(D => {
  "use strict";

  Object.defineProperty(D, "__esModule", {
    value: !0
  });
  D.UPDATE_OPERATORS = D.UNARY_OPERATORS = D.STRING_UNARY_OPERATORS = D.STATEMENT_OR_BLOCK_KEYS = D.NUMBER_UNARY_OPERATORS = D.NUMBER_BINARY_OPERATORS = D.NOT_LOCAL_BINDING = D.LOGICAL_OPERATORS = D.INHERIT_KEYS = D.FOR_INIT_KEYS = D.FLATTENABLE_KEYS = D.EQUALITY_BINARY_OPERATORS = D.COMPARISON_BINARY_OPERATORS = D.COMMENT_KEYS = D.BOOLEAN_UNARY_OPERATORS = D.BOOLEAN_NUMBER_BINARY_OPERATORS = D.BOOLEAN_BINARY_OPERATORS = D.BLOCK_SCOPED_SYMBOL = D.BINARY_OPERATORS = D.ASSIGNMENT_OPERATORS = void 0;
  var _p = ["consequent", "body", "alternate"];
  D.STATEMENT_OR_BLOCK_KEYS = _p;
  var hp = ["body", "expressions"];
  D.FLATTENABLE_KEYS = hp;
  var Lp = ["left", "init"];
  D.FOR_INIT_KEYS = Lp;
  var jp = ["leadingComments", "trailingComments", "innerComments"];
  D.COMMENT_KEYS = jp;
  var Fr = ["||", "&&", "??"];
  D.LOGICAL_OPERATORS = Fr;
  var Cp = ["++", "--"];
  D.UPDATE_OPERATORS = Cp;
  var Rr = [">", "<", ">=", "<="];
  D.BOOLEAN_NUMBER_BINARY_OPERATORS = Rr;
  var Kr = ["==", "===", "!=", "!=="];
  D.EQUALITY_BINARY_OPERATORS = Kr;
  var Yr = [...Kr, "in", "instanceof"];
  D.COMPARISON_BINARY_OPERATORS = Yr;
  var Vr = [...Yr, ...Rr];
  D.BOOLEAN_BINARY_OPERATORS = Vr;
  var Ze = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
  D.NUMBER_BINARY_OPERATORS = Ze;
  var Bp = ["+", ...Ze, ...Vr, "|>"];
  D.BINARY_OPERATORS = Bp;
  var Mp = ["=", "+=", ...Ze.map(e => e + "="), ...Fr.map(e => e + "=")];
  D.ASSIGNMENT_OPERATORS = Mp;
  var qr = ["delete", "!"];
  D.BOOLEAN_UNARY_OPERATORS = qr;
  var kr = ["+", "-", "~"];
  D.NUMBER_UNARY_OPERATORS = kr;
  var Xr = ["typeof"];
  D.STRING_UNARY_OPERATORS = Xr;
  var wp = ["void", "throw", ...qr, ...kr, ...Xr];
  D.UNARY_OPERATORS = wp;
  var Fp = {
    optional: ["typeAnnotation", "typeParameters", "returnType"],
    force: ["start", "loc", "end"]
  };
  D.INHERIT_KEYS = Fp;
  var Rp = Symbol.for("var used to be block scoped");
  D.BLOCK_SCOPED_SYMBOL = Rp;
  var Kp = Symbol.for("should not be considered a local binding");
  D.NOT_LOCAL_BINDING = Kp;
});
var J = x(_ => {
  "use strict";

  Object.defineProperty(_, "__esModule", {
    value: !0
  });
  _.VISITOR_KEYS = _.NODE_PARENT_VALIDATIONS = _.NODE_FIELDS = _.FLIPPED_ALIAS_KEYS = _.DEPRECATED_KEYS = _.BUILDER_KEYS = _.ALIAS_KEYS = void 0;
  _.arrayOf = Hr;
  _.arrayOfType = Zr;
  _.assertEach = en;
  _.assertNodeOrValueType = Jp;
  _.assertNodeType = et;
  _.assertOneOf = Xp;
  _.assertOptionalChainStart = Wp;
  _.assertShape = Up;
  _.assertValueType = nt;
  _.chain = tn;
  _.default = rn;
  _.defineAliasedType = zp;
  _.typeIs = Ae;
  _.validate = rt;
  _.validateArrayOfType = kp;
  _.validateOptional = Vp;
  _.validateOptionalType = qp;
  _.validateType = Yp;
  var Jr = re(),
      Pe = xe(),
      Ur = {};
  _.VISITOR_KEYS = Ur;
  var Wr = {};
  _.ALIAS_KEYS = Wr;
  var Ee = {};
  _.FLIPPED_ALIAS_KEYS = Ee;
  var Gr = {};
  _.NODE_FIELDS = Gr;
  var $r = {};
  _.BUILDER_KEYS = $r;
  var zr = {};
  _.DEPRECATED_KEYS = zr;
  var Qr = {};
  _.NODE_PARENT_VALIDATIONS = Qr;

  function be(e) {
    return Array.isArray(e) ? "array" : e === null ? "null" : typeof e;
  }

  n(be, "getType");

  function rt(e) {
    return {
      validate: e
    };
  }

  n(rt, "validate");

  function Ae(e) {
    return typeof e == "string" ? et(e) : et(...e);
  }

  n(Ae, "typeIs");

  function Yp(e) {
    return rt(Ae(e));
  }

  n(Yp, "validateType");

  function Vp(e) {
    return {
      validate: e,
      optional: !0
    };
  }

  n(Vp, "validateOptional");

  function qp(e) {
    return {
      validate: Ae(e),
      optional: !0
    };
  }

  n(qp, "validateOptionalType");

  function Hr(e) {
    return tn(nt("array"), en(e));
  }

  n(Hr, "arrayOf");

  function Zr(e) {
    return Hr(Ae(e));
  }

  n(Zr, "arrayOfType");

  function kp(e) {
    return rt(Zr(e));
  }

  n(kp, "validateArrayOfType");

  function en(e) {
    function t(r, p, d) {
      if (!!Array.isArray(d)) for (let m = 0; m < d.length; m++) {
        let E = `${p}[${m}]`,
            v = d[m];
        e(r, E, v), __Process$.env.BABEL_TYPES_8_BREAKING && (0, Pe.validateChild)(r, E, v);
      }
    }

    return n(t, "validator"), t.each = e, t;
  }

  n(en, "assertEach");

  function Xp(...e) {
    function t(r, p, d) {
      if (e.indexOf(d) < 0) throw new TypeError(`Property ${p} expected value to be one of ${JSON.stringify(e)} but got ${JSON.stringify(d)}`);
    }

    return n(t, "validate"), t.oneOf = e, t;
  }

  n(Xp, "assertOneOf");

  function et(...e) {
    function t(r, p, d) {
      for (let m of e) if ((0, Jr.default)(m, d)) {
        (0, Pe.validateChild)(r, p, d);
        return;
      }

      throw new TypeError(`Property ${p} of ${r.type} expected node to be of a type ${JSON.stringify(e)} but instead got ${JSON.stringify(d?.type)}`);
    }

    return n(t, "validate"), t.oneOfNodeTypes = e, t;
  }

  n(et, "assertNodeType");

  function Jp(...e) {
    function t(r, p, d) {
      for (let m of e) if (be(d) === m || (0, Jr.default)(m, d)) {
        (0, Pe.validateChild)(r, p, d);
        return;
      }

      throw new TypeError(`Property ${p} of ${r.type} expected node to be of a type ${JSON.stringify(e)} but instead got ${JSON.stringify(d?.type)}`);
    }

    return n(t, "validate"), t.oneOfNodeOrValueTypes = e, t;
  }

  n(Jp, "assertNodeOrValueType");

  function nt(e) {
    function t(r, p, d) {
      if (!(be(d) === e)) throw new TypeError(`Property ${p} expected type of ${e} but got ${be(d)}`);
    }

    return n(t, "validate"), t.type = e, t;
  }

  n(nt, "assertValueType");

  function Up(e) {
    function t(r, p, d) {
      let m = [];

      for (let E of Object.keys(e)) try {
        (0, Pe.validateField)(r, E, d[E], e[E]);
      } catch (v) {
        if (v instanceof TypeError) {
          m.push(v.message);
          continue;
        }

        throw v;
      }

      if (m.length) throw new TypeError(`Property ${p} of ${r.type} expected to have the following:
${m.join(`
`)}`);
    }

    return n(t, "validate"), t.shapeOf = e, t;
  }

  n(Up, "assertShape");

  function Wp() {
    function e(t) {
      var r;
      let p = t;

      for (; t;) {
        let {
          type: d
        } = p;

        if (d === "OptionalCallExpression") {
          if (p.optional) return;
          p = p.callee;
          continue;
        }

        if (d === "OptionalMemberExpression") {
          if (p.optional) return;
          p = p.object;
          continue;
        }

        break;
      }

      throw new TypeError(`Non-optional ${t.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(r = p) == null ? void 0 : r.type}`);
    }

    return n(e, "validate"), e;
  }

  n(Wp, "assertOptionalChainStart");

  function tn(...e) {
    function t(...r) {
      for (let p of e) p(...r);
    }

    if (n(t, "validate"), t.chainOf = e, e.length >= 2 && "type" in e[0] && e[0].type === "array" && !("each" in e[1])) throw new Error('An assertValueType("array") validator can only be followed by an assertEach(...) validator.');
    return t;
  }

  n(tn, "chain");
  var Gp = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"],
      $p = ["default", "optional", "validate"];

  function zp(...e) {
    return (t, r = {}) => {
      let p = r.aliases;

      if (!p) {
        var d, m;
        r.inherits && (p = (d = tt[r.inherits].aliases) == null ? void 0 : d.slice()), (m = p) != null || (p = []), r.aliases = p;
      }

      let E = e.filter(v => !p.includes(v));
      return p.unshift(...E), rn(t, r);
    };
  }

  n(zp, "defineAliasedType");

  function rn(e, t = {}) {
    let r = t.inherits && tt[t.inherits] || {},
        p = t.fields;

    if (!p && (p = {}, r.fields)) {
      let v = Object.getOwnPropertyNames(r.fields);

      for (let N of v) {
        let j = r.fields[N],
            K = j.default;
        if (Array.isArray(K) ? K.length > 0 : K && typeof K == "object") throw new Error("field defaults can only be primitives or empty arrays currently");
        p[N] = {
          default: Array.isArray(K) ? [] : K,
          optional: j.optional,
          validate: j.validate
        };
      }
    }

    let d = t.visitor || r.visitor || [],
        m = t.aliases || r.aliases || [],
        E = t.builder || r.builder || t.visitor || [];

    for (let v of Object.keys(t)) if (Gp.indexOf(v) === -1) throw new Error(`Unknown type option "${v}" on ${e}`);

    t.deprecatedAlias && (zr[t.deprecatedAlias] = e);

    for (let v of d.concat(E)) p[v] = p[v] || {};

    for (let v of Object.keys(p)) {
      let N = p[v];
      N.default !== void 0 && E.indexOf(v) === -1 && (N.optional = !0), N.default === void 0 ? N.default = null : !N.validate && N.default != null && (N.validate = nt(be(N.default)));

      for (let j of Object.keys(N)) if ($p.indexOf(j) === -1) throw new Error(`Unknown field key "${j}" on ${e}.${v}`);
    }

    Ur[e] = t.visitor = d, $r[e] = t.builder = E, Gr[e] = t.fields = p, Wr[e] = t.aliases = m, m.forEach(v => {
      Ee[v] = Ee[v] || [], Ee[v].push(e);
    }), t.validate && (Qr[e] = t.validate), tt[e] = t;
  }

  n(rn, "defineType");
  var tt = {};
});
var at = x(Y => {
  "use strict";

  Object.defineProperty(Y, "__esModule", {
    value: !0
  });
  Y.patternLikeCommon = Y.functionTypeAnnotationCommon = Y.functionDeclarationCommon = Y.functionCommon = Y.classMethodOrPropertyCommon = Y.classMethodOrDeclareMethodCommon = void 0;
  var F = re(),
      Qp = ne(),
      nn = ___babel_helper_validator_identifier$,
      ue = G(),
      i = J(),
      P = (0, i.defineAliasedType)("Standardized");
  P("ArrayExpression", {
    fields: {
      elements: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
        default: __Process$.env.BABEL_TYPES_8_BREAKING ? void 0 : []
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  });
  P("AssignmentExpression", {
    fields: {
      operator: {
        validate: function () {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return (0, i.assertValueType)("string");
          let e = (0, i.assertOneOf)(...ue.ASSIGNMENT_OPERATORS),
              t = (0, i.assertOneOf)("=");
          return function (r, p, d) {
            ((0, F.default)("Pattern", r.left) ? t : e)(r, p, d);
          };
        }()
      },
      left: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, i.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression") : (0, i.assertNodeType)("LVal")
      },
      right: {
        validate: (0, i.assertNodeType)("Expression")
      }
    },
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Expression"]
  });
  P("BinaryExpression", {
    builder: ["operator", "left", "right"],
    fields: {
      operator: {
        validate: (0, i.assertOneOf)(...ue.BINARY_OPERATORS)
      },
      left: {
        validate: function () {
          let e = (0, i.assertNodeType)("Expression"),
              t = (0, i.assertNodeType)("Expression", "PrivateName"),
              r = n(function (p, d, m) {
            (p.operator === "in" ? t : e)(p, d, m);
          }, "validator");
          return r.oneOfNodeTypes = ["Expression", "PrivateName"], r;
        }()
      },
      right: {
        validate: (0, i.assertNodeType)("Expression")
      }
    },
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"]
  });
  P("InterpreterDirective", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, i.assertValueType)("string")
      }
    }
  });
  P("Directive", {
    visitor: ["value"],
    fields: {
      value: {
        validate: (0, i.assertNodeType)("DirectiveLiteral")
      }
    }
  });
  P("DirectiveLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, i.assertValueType)("string")
      }
    }
  });
  P("BlockStatement", {
    builder: ["body", "directives"],
    visitor: ["directives", "body"],
    fields: {
      directives: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Directive"))),
        default: []
      },
      body: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "Block", "Statement"]
  });
  P("BreakStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, i.assertNodeType)("Identifier"),
        optional: !0
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  P("CallExpression", {
    visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
    builder: ["callee", "arguments"],
    aliases: ["Expression"],
    fields: Object.assign({
      callee: {
        validate: (0, i.assertNodeType)("Expression", "V8IntrinsicIdentifier")
      },
      arguments: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
      }
    }, __Process$.env.BABEL_TYPES_8_BREAKING ? {} : {
      optional: {
        validate: (0, i.assertOneOf)(!0, !1),
        optional: !0
      }
    }, {
      typeArguments: {
        validate: (0, i.assertNodeType)("TypeParameterInstantiation"),
        optional: !0
      },
      typeParameters: {
        validate: (0, i.assertNodeType)("TSTypeParameterInstantiation"),
        optional: !0
      }
    })
  });
  P("CatchClause", {
    visitor: ["param", "body"],
    fields: {
      param: {
        validate: (0, i.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
        optional: !0
      },
      body: {
        validate: (0, i.assertNodeType)("BlockStatement")
      }
    },
    aliases: ["Scopable", "BlockParent"]
  });
  P("ConditionalExpression", {
    visitor: ["test", "consequent", "alternate"],
    fields: {
      test: {
        validate: (0, i.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, i.assertNodeType)("Expression")
      },
      alternate: {
        validate: (0, i.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression", "Conditional"]
  });
  P("ContinueStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, i.assertNodeType)("Identifier"),
        optional: !0
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  P("DebuggerStatement", {
    aliases: ["Statement"]
  });
  P("DoWhileStatement", {
    visitor: ["test", "body"],
    fields: {
      test: {
        validate: (0, i.assertNodeType)("Expression")
      },
      body: {
        validate: (0, i.assertNodeType)("Statement")
      }
    },
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
  });
  P("EmptyStatement", {
    aliases: ["Statement"]
  });
  P("ExpressionStatement", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, i.assertNodeType)("Expression")
      }
    },
    aliases: ["Statement", "ExpressionWrapper"]
  });
  P("File", {
    builder: ["program", "comments", "tokens"],
    visitor: ["program"],
    fields: {
      program: {
        validate: (0, i.assertNodeType)("Program")
      },
      comments: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, i.assertEach)((0, i.assertNodeType)("CommentBlock", "CommentLine")) : Object.assign(() => {}, {
          each: {
            oneOfNodeTypes: ["CommentBlock", "CommentLine"]
          }
        }),
        optional: !0
      },
      tokens: {
        validate: (0, i.assertEach)(Object.assign(() => {}, {
          type: "any"
        })),
        optional: !0
      }
    }
  });
  P("ForInStatement", {
    visitor: ["left", "right", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, i.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression") : (0, i.assertNodeType)("VariableDeclaration", "LVal")
      },
      right: {
        validate: (0, i.assertNodeType)("Expression")
      },
      body: {
        validate: (0, i.assertNodeType)("Statement")
      }
    }
  });
  P("ForStatement", {
    visitor: ["init", "test", "update", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
    fields: {
      init: {
        validate: (0, i.assertNodeType)("VariableDeclaration", "Expression"),
        optional: !0
      },
      test: {
        validate: (0, i.assertNodeType)("Expression"),
        optional: !0
      },
      update: {
        validate: (0, i.assertNodeType)("Expression"),
        optional: !0
      },
      body: {
        validate: (0, i.assertNodeType)("Statement")
      }
    }
  });
  var ie = {
    params: {
      validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Identifier", "Pattern", "RestElement")))
    },
    generator: {
      default: !1
    },
    async: {
      default: !1
    }
  };
  Y.functionCommon = ie;
  var H = {
    returnType: {
      validate: (0, i.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    typeParameters: {
      validate: (0, i.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: !0
    }
  };
  Y.functionTypeAnnotationCommon = H;
  var an = Object.assign({}, ie, {
    declare: {
      validate: (0, i.assertValueType)("boolean"),
      optional: !0
    },
    id: {
      validate: (0, i.assertNodeType)("Identifier"),
      optional: !0
    }
  });
  Y.functionDeclarationCommon = an;
  P("FunctionDeclaration", {
    builder: ["id", "params", "body", "generator", "async"],
    visitor: ["id", "params", "body", "returnType", "typeParameters"],
    fields: Object.assign({}, an, H, {
      body: {
        validate: (0, i.assertNodeType)("BlockStatement")
      },
      predicate: {
        validate: (0, i.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: !0
      }
    }),
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
    validate: function () {
      if (!__Process$.env.BABEL_TYPES_8_BREAKING) return () => {};
      let e = (0, i.assertNodeType)("Identifier");
      return function (t, r, p) {
        (0, F.default)("ExportDefaultDeclaration", t) || e(p, "id", p.id);
      };
    }()
  });
  P("FunctionExpression", {
    inherits: "FunctionDeclaration",
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, ie, H, {
      id: {
        validate: (0, i.assertNodeType)("Identifier"),
        optional: !0
      },
      body: {
        validate: (0, i.assertNodeType)("BlockStatement")
      },
      predicate: {
        validate: (0, i.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: !0
      }
    })
  });
  var ae = {
    typeAnnotation: {
      validate: (0, i.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    decorators: {
      validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator")))
    }
  };
  Y.patternLikeCommon = ae;
  P("Identifier", {
    builder: ["name"],
    visitor: ["typeAnnotation", "decorators"],
    aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
    fields: Object.assign({}, ae, {
      name: {
        validate: (0, i.chain)((0, i.assertValueType)("string"), Object.assign(function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && !(0, Qp.default)(r, !1)) throw new TypeError(`"${r}" is not a valid identifier name`);
        }, {
          type: "string"
        }))
      },
      optional: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      }
    }),

    validate(e, t, r) {
      if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
      let p = /\.(\w+)$/.exec(t);
      if (!p) return;
      let [, d] = p,
          m = {
        computed: !1
      };

      if (d === "property") {
        if ((0, F.default)("MemberExpression", e, m) || (0, F.default)("OptionalMemberExpression", e, m)) return;
      } else if (d === "key") {
        if ((0, F.default)("Property", e, m) || (0, F.default)("Method", e, m)) return;
      } else if (d === "exported") {
        if ((0, F.default)("ExportSpecifier", e)) return;
      } else if (d === "imported") {
        if ((0, F.default)("ImportSpecifier", e, {
          imported: r
        })) return;
      } else if (d === "meta" && (0, F.default)("MetaProperty", e, {
        meta: r
      })) return;

      if (((0, nn.isKeyword)(r.name) || (0, nn.isReservedWord)(r.name, !1)) && r.name !== "this") throw new TypeError(`"${r.name}" is not a valid identifier`);
    }

  });
  P("IfStatement", {
    visitor: ["test", "consequent", "alternate"],
    aliases: ["Statement", "Conditional"],
    fields: {
      test: {
        validate: (0, i.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, i.assertNodeType)("Statement")
      },
      alternate: {
        optional: !0,
        validate: (0, i.assertNodeType)("Statement")
      }
    }
  });
  P("LabeledStatement", {
    visitor: ["label", "body"],
    aliases: ["Statement"],
    fields: {
      label: {
        validate: (0, i.assertNodeType)("Identifier")
      },
      body: {
        validate: (0, i.assertNodeType)("Statement")
      }
    }
  });
  P("StringLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, i.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  P("NumericLiteral", {
    builder: ["value"],
    deprecatedAlias: "NumberLiteral",
    fields: {
      value: {
        validate: (0, i.assertValueType)("number")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  P("NullLiteral", {
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  P("BooleanLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, i.assertValueType)("boolean")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  P("RegExpLiteral", {
    builder: ["pattern", "flags"],
    deprecatedAlias: "RegexLiteral",
    aliases: ["Expression", "Pureish", "Literal"],
    fields: {
      pattern: {
        validate: (0, i.assertValueType)("string")
      },
      flags: {
        validate: (0, i.chain)((0, i.assertValueType)("string"), Object.assign(function (e, t, r) {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
          let p = /[^gimsuy]/.exec(r);
          if (p) throw new TypeError(`"${p[0]}" is not a valid RegExp flag`);
        }, {
          type: "string"
        })),
        default: ""
      }
    }
  });
  P("LogicalExpression", {
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"],
    fields: {
      operator: {
        validate: (0, i.assertOneOf)(...ue.LOGICAL_OPERATORS)
      },
      left: {
        validate: (0, i.assertNodeType)("Expression")
      },
      right: {
        validate: (0, i.assertNodeType)("Expression")
      }
    }
  });
  P("MemberExpression", {
    builder: ["object", "property", "computed", ...(__Process$.env.BABEL_TYPES_8_BREAKING ? [] : ["optional"])],
    visitor: ["object", "property"],
    aliases: ["Expression", "LVal"],
    fields: Object.assign({
      object: {
        validate: (0, i.assertNodeType)("Expression")
      },
      property: {
        validate: function () {
          let e = (0, i.assertNodeType)("Identifier", "PrivateName"),
              t = (0, i.assertNodeType)("Expression"),
              r = n(function (p, d, m) {
            (p.computed ? t : e)(p, d, m);
          }, "validator");
          return r.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"], r;
        }()
      },
      computed: {
        default: !1
      }
    }, __Process$.env.BABEL_TYPES_8_BREAKING ? {} : {
      optional: {
        validate: (0, i.assertOneOf)(!0, !1),
        optional: !0
      }
    })
  });
  P("NewExpression", {
    inherits: "CallExpression"
  });
  P("Program", {
    visitor: ["directives", "body"],
    builder: ["body", "directives", "sourceType", "interpreter"],
    fields: {
      sourceFile: {
        validate: (0, i.assertValueType)("string")
      },
      sourceType: {
        validate: (0, i.assertOneOf)("script", "module"),
        default: "script"
      },
      interpreter: {
        validate: (0, i.assertNodeType)("InterpreterDirective"),
        default: null,
        optional: !0
      },
      directives: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Directive"))),
        default: []
      },
      body: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "Block"]
  });
  P("ObjectExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
      }
    }
  });
  P("ObjectMethod", {
    builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
    fields: Object.assign({}, ie, H, {
      kind: Object.assign({
        validate: (0, i.assertOneOf)("method", "get", "set")
      }, __Process$.env.BABEL_TYPES_8_BREAKING ? {} : {
        default: "method"
      }),
      computed: {
        default: !1
      },
      key: {
        validate: function () {
          let e = (0, i.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral"),
              t = (0, i.assertNodeType)("Expression"),
              r = n(function (p, d, m) {
            (p.computed ? t : e)(p, d, m);
          }, "validator");
          return r.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"], r;
        }()
      },
      decorators: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
        optional: !0
      },
      body: {
        validate: (0, i.assertNodeType)("BlockStatement")
      }
    }),
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
  });
  P("ObjectProperty", {
    builder: ["key", "value", "computed", "shorthand", ...(__Process$.env.BABEL_TYPES_8_BREAKING ? [] : ["decorators"])],
    fields: {
      computed: {
        default: !1
      },
      key: {
        validate: function () {
          let e = (0, i.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"),
              t = (0, i.assertNodeType)("Expression"),
              r = n(function (p, d, m) {
            (p.computed ? t : e)(p, d, m);
          }, "validator");
          return r.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"], r;
        }()
      },
      value: {
        validate: (0, i.assertNodeType)("Expression", "PatternLike")
      },
      shorthand: {
        validate: (0, i.chain)((0, i.assertValueType)("boolean"), Object.assign(function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && e.computed) throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }, {
          type: "boolean"
        }), function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && !(0, F.default)("Identifier", e.key)) throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }),
        default: !1
      },
      decorators: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
        optional: !0
      }
    },
    visitor: ["key", "value", "decorators"],
    aliases: ["UserWhitespacable", "Property", "ObjectMember"],
    validate: function () {
      let e = (0, i.assertNodeType)("Identifier", "Pattern", "TSAsExpression", "TSNonNullExpression", "TSTypeAssertion"),
          t = (0, i.assertNodeType)("Expression");
      return function (r, p, d) {
        if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
        ((0, F.default)("ObjectPattern", r) ? e : t)(d, "value", d.value);
      };
    }()
  });
  P("RestElement", {
    visitor: ["argument", "typeAnnotation"],
    builder: ["argument"],
    aliases: ["LVal", "PatternLike"],
    deprecatedAlias: "RestProperty",
    fields: Object.assign({}, ae, {
      argument: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, i.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression") : (0, i.assertNodeType)("LVal")
      },
      optional: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      }
    }),

    validate(e, t) {
      if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
      let r = /(\w+)\[(\d+)\]/.exec(t);
      if (!r) throw new Error("Internal Babel error: malformed key.");
      let [, p, d] = r;
      if (e[p].length > d + 1) throw new TypeError(`RestElement must be last element of ${p}`);
    }

  });
  P("ReturnStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, i.assertNodeType)("Expression"),
        optional: !0
      }
    }
  });
  P("SequenceExpression", {
    visitor: ["expressions"],
    fields: {
      expressions: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Expression")))
      }
    },
    aliases: ["Expression"]
  });
  P("ParenthesizedExpression", {
    visitor: ["expression"],
    aliases: ["Expression", "ExpressionWrapper"],
    fields: {
      expression: {
        validate: (0, i.assertNodeType)("Expression")
      }
    }
  });
  P("SwitchCase", {
    visitor: ["test", "consequent"],
    fields: {
      test: {
        validate: (0, i.assertNodeType)("Expression"),
        optional: !0
      },
      consequent: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Statement")))
      }
    }
  });
  P("SwitchStatement", {
    visitor: ["discriminant", "cases"],
    aliases: ["Statement", "BlockParent", "Scopable"],
    fields: {
      discriminant: {
        validate: (0, i.assertNodeType)("Expression")
      },
      cases: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("SwitchCase")))
      }
    }
  });
  P("ThisExpression", {
    aliases: ["Expression"]
  });
  P("ThrowStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, i.assertNodeType)("Expression")
      }
    }
  });
  P("TryStatement", {
    visitor: ["block", "handler", "finalizer"],
    aliases: ["Statement"],
    fields: {
      block: {
        validate: (0, i.chain)((0, i.assertNodeType)("BlockStatement"), Object.assign(function (e) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && !e.handler && !e.finalizer) throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }, {
          oneOfNodeTypes: ["BlockStatement"]
        }))
      },
      handler: {
        optional: !0,
        validate: (0, i.assertNodeType)("CatchClause")
      },
      finalizer: {
        optional: !0,
        validate: (0, i.assertNodeType)("BlockStatement")
      }
    }
  });
  P("UnaryExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: !0
      },
      argument: {
        validate: (0, i.assertNodeType)("Expression")
      },
      operator: {
        validate: (0, i.assertOneOf)(...ue.UNARY_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["UnaryLike", "Expression"]
  });
  P("UpdateExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: !1
      },
      argument: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, i.assertNodeType)("Identifier", "MemberExpression") : (0, i.assertNodeType)("Expression")
      },
      operator: {
        validate: (0, i.assertOneOf)(...ue.UPDATE_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["Expression"]
  });
  P("VariableDeclaration", {
    builder: ["kind", "declarations"],
    visitor: ["declarations"],
    aliases: ["Statement", "Declaration"],
    fields: {
      declare: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      kind: {
        validate: (0, i.assertOneOf)("var", "let", "const")
      },
      declarations: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("VariableDeclarator")))
      }
    },

    validate(e, t, r) {
      if (!!__Process$.env.BABEL_TYPES_8_BREAKING && !!(0, F.default)("ForXStatement", e, {
        left: r
      }) && r.declarations.length !== 1) throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${e.type}`);
    }

  });
  P("VariableDeclarator", {
    visitor: ["id", "init"],
    fields: {
      id: {
        validate: function () {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return (0, i.assertNodeType)("LVal");
          let e = (0, i.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
              t = (0, i.assertNodeType)("Identifier");
          return function (r, p, d) {
            (r.init ? e : t)(r, p, d);
          };
        }()
      },
      definite: {
        optional: !0,
        validate: (0, i.assertValueType)("boolean")
      },
      init: {
        optional: !0,
        validate: (0, i.assertNodeType)("Expression")
      }
    }
  });
  P("WhileStatement", {
    visitor: ["test", "body"],
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
    fields: {
      test: {
        validate: (0, i.assertNodeType)("Expression")
      },
      body: {
        validate: (0, i.assertNodeType)("Statement")
      }
    }
  });
  P("WithStatement", {
    visitor: ["object", "body"],
    aliases: ["Statement"],
    fields: {
      object: {
        validate: (0, i.assertNodeType)("Expression")
      },
      body: {
        validate: (0, i.assertNodeType)("Statement")
      }
    }
  });
  P("AssignmentPattern", {
    visitor: ["left", "right", "decorators"],
    builder: ["left", "right"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, ae, {
      left: {
        validate: (0, i.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression")
      },
      right: {
        validate: (0, i.assertNodeType)("Expression")
      },
      decorators: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
        optional: !0
      }
    })
  });
  P("ArrayPattern", {
    visitor: ["elements", "typeAnnotation"],
    builder: ["elements"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, ae, {
      elements: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeOrValueType)("null", "PatternLike")))
      },
      decorators: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
        optional: !0
      },
      optional: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      }
    })
  });
  P("ArrowFunctionExpression", {
    builder: ["params", "body", "async"],
    visitor: ["params", "body", "returnType", "typeParameters"],
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, ie, H, {
      expression: {
        validate: (0, i.assertValueType)("boolean")
      },
      body: {
        validate: (0, i.assertNodeType)("BlockStatement", "Expression")
      },
      predicate: {
        validate: (0, i.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: !0
      }
    })
  });
  P("ClassBody", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")))
      }
    }
  });
  P("ClassExpression", {
    builder: ["id", "superClass", "body", "decorators"],
    visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
    aliases: ["Scopable", "Class", "Expression"],
    fields: {
      id: {
        validate: (0, i.assertNodeType)("Identifier"),
        optional: !0
      },
      typeParameters: {
        validate: (0, i.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: !0
      },
      body: {
        validate: (0, i.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: !0,
        validate: (0, i.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, i.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      },
      implements: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
        optional: !0
      },
      decorators: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
        optional: !0
      },
      mixins: {
        validate: (0, i.assertNodeType)("InterfaceExtends"),
        optional: !0
      }
    }
  });
  P("ClassDeclaration", {
    inherits: "ClassExpression",
    aliases: ["Scopable", "Class", "Statement", "Declaration"],
    fields: {
      id: {
        validate: (0, i.assertNodeType)("Identifier")
      },
      typeParameters: {
        validate: (0, i.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: !0
      },
      body: {
        validate: (0, i.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: !0,
        validate: (0, i.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, i.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      },
      implements: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
        optional: !0
      },
      decorators: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
        optional: !0
      },
      mixins: {
        validate: (0, i.assertNodeType)("InterfaceExtends"),
        optional: !0
      },
      declare: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      abstract: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      }
    },
    validate: function () {
      let e = (0, i.assertNodeType)("Identifier");
      return function (t, r, p) {
        !__Process$.env.BABEL_TYPES_8_BREAKING || (0, F.default)("ExportDefaultDeclaration", t) || e(p, "id", p.id);
      };
    }()
  });
  P("ExportAllDeclaration", {
    visitor: ["source"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
    fields: {
      source: {
        validate: (0, i.assertNodeType)("StringLiteral")
      },
      exportKind: (0, i.validateOptional)((0, i.assertOneOf)("type", "value")),
      assertions: {
        optional: !0,
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("ImportAttribute")))
      }
    }
  });
  P("ExportDefaultDeclaration", {
    visitor: ["declaration"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
    fields: {
      declaration: {
        validate: (0, i.assertNodeType)("FunctionDeclaration", "ClassDeclaration", "Expression")
      },
      exportKind: (0, i.validateOptional)((0, i.assertOneOf)("value"))
    }
  });
  P("ExportNamedDeclaration", {
    visitor: ["declaration", "specifiers", "source"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
    fields: {
      declaration: {
        optional: !0,
        validate: (0, i.chain)((0, i.assertNodeType)("Declaration"), Object.assign(function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && e.specifiers.length) throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }, {
          oneOfNodeTypes: ["Declaration"]
        }), function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && e.source) throw new TypeError("Cannot export a declaration from a source");
        })
      },
      assertions: {
        optional: !0,
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("ImportAttribute")))
      },
      specifiers: {
        default: [],
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)(function () {
          let e = (0, i.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier"),
              t = (0, i.assertNodeType)("ExportSpecifier");
          return __Process$.env.BABEL_TYPES_8_BREAKING ? function (r, p, d) {
            (r.source ? e : t)(r, p, d);
          } : e;
        }()))
      },
      source: {
        validate: (0, i.assertNodeType)("StringLiteral"),
        optional: !0
      },
      exportKind: (0, i.validateOptional)((0, i.assertOneOf)("type", "value"))
    }
  });
  P("ExportSpecifier", {
    visitor: ["local", "exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, i.assertNodeType)("Identifier")
      },
      exported: {
        validate: (0, i.assertNodeType)("Identifier", "StringLiteral")
      },
      exportKind: {
        validate: (0, i.assertOneOf)("type", "value"),
        optional: !0
      }
    }
  });
  P("ForOfStatement", {
    visitor: ["left", "right", "body"],
    builder: ["left", "right", "body", "await"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: function () {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return (0, i.assertNodeType)("VariableDeclaration", "LVal");
          let e = (0, i.assertNodeType)("VariableDeclaration"),
              t = (0, i.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression");
          return function (r, p, d) {
            (0, F.default)("VariableDeclaration", d) ? e(r, p, d) : t(r, p, d);
          };
        }()
      },
      right: {
        validate: (0, i.assertNodeType)("Expression")
      },
      body: {
        validate: (0, i.assertNodeType)("Statement")
      },
      await: {
        default: !1
      }
    }
  });
  P("ImportDeclaration", {
    visitor: ["specifiers", "source"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration"],
    fields: {
      assertions: {
        optional: !0,
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("ImportAttribute")))
      },
      specifiers: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
      },
      source: {
        validate: (0, i.assertNodeType)("StringLiteral")
      },
      importKind: {
        validate: (0, i.assertOneOf)("type", "typeof", "value"),
        optional: !0
      }
    }
  });
  P("ImportDefaultSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, i.assertNodeType)("Identifier")
      }
    }
  });
  P("ImportNamespaceSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, i.assertNodeType)("Identifier")
      }
    }
  });
  P("ImportSpecifier", {
    visitor: ["local", "imported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, i.assertNodeType)("Identifier")
      },
      imported: {
        validate: (0, i.assertNodeType)("Identifier", "StringLiteral")
      },
      importKind: {
        validate: (0, i.assertOneOf)("type", "typeof", "value"),
        optional: !0
      }
    }
  });
  P("MetaProperty", {
    visitor: ["meta", "property"],
    aliases: ["Expression"],
    fields: {
      meta: {
        validate: (0, i.chain)((0, i.assertNodeType)("Identifier"), Object.assign(function (e, t, r) {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
          let p;

          switch (r.name) {
            case "function":
              p = "sent";
              break;

            case "new":
              p = "target";
              break;

            case "import":
              p = "meta";
              break;
          }

          if (!(0, F.default)("Identifier", e.property, {
            name: p
          })) throw new TypeError("Unrecognised MetaProperty");
        }, {
          oneOfNodeTypes: ["Identifier"]
        }))
      },
      property: {
        validate: (0, i.assertNodeType)("Identifier")
      }
    }
  });
  var Oe = {
    abstract: {
      validate: (0, i.assertValueType)("boolean"),
      optional: !0
    },
    accessibility: {
      validate: (0, i.assertOneOf)("public", "private", "protected"),
      optional: !0
    },
    static: {
      default: !1
    },
    override: {
      default: !1
    },
    computed: {
      default: !1
    },
    optional: {
      validate: (0, i.assertValueType)("boolean"),
      optional: !0
    },
    key: {
      validate: (0, i.chain)(function () {
        let e = (0, i.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral"),
            t = (0, i.assertNodeType)("Expression");
        return function (r, p, d) {
          (r.computed ? t : e)(r, p, d);
        };
      }(), (0, i.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
    }
  };
  Y.classMethodOrPropertyCommon = Oe;
  var it = Object.assign({}, ie, Oe, {
    params: {
      validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
    },
    kind: {
      validate: (0, i.assertOneOf)("get", "set", "method", "constructor"),
      default: "method"
    },
    access: {
      validate: (0, i.chain)((0, i.assertValueType)("string"), (0, i.assertOneOf)("public", "private", "protected")),
      optional: !0
    },
    decorators: {
      validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
      optional: !0
    }
  });
  Y.classMethodOrDeclareMethodCommon = it;
  P("ClassMethod", {
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
    builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    fields: Object.assign({}, it, H, {
      body: {
        validate: (0, i.assertNodeType)("BlockStatement")
      }
    })
  });
  P("ObjectPattern", {
    visitor: ["properties", "typeAnnotation", "decorators"],
    builder: ["properties"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, ae, {
      properties: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("RestElement", "ObjectProperty")))
      }
    })
  });
  P("SpreadElement", {
    visitor: ["argument"],
    aliases: ["UnaryLike"],
    deprecatedAlias: "SpreadProperty",
    fields: {
      argument: {
        validate: (0, i.assertNodeType)("Expression")
      }
    }
  });
  P("Super", {
    aliases: ["Expression"]
  });
  P("TaggedTemplateExpression", {
    visitor: ["tag", "quasi", "typeParameters"],
    builder: ["tag", "quasi"],
    aliases: ["Expression"],
    fields: {
      tag: {
        validate: (0, i.assertNodeType)("Expression")
      },
      quasi: {
        validate: (0, i.assertNodeType)("TemplateLiteral")
      },
      typeParameters: {
        validate: (0, i.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      }
    }
  });
  P("TemplateElement", {
    builder: ["value", "tail"],
    fields: {
      value: {
        validate: (0, i.assertShape)({
          raw: {
            validate: (0, i.assertValueType)("string")
          },
          cooked: {
            validate: (0, i.assertValueType)("string"),
            optional: !0
          }
        })
      },
      tail: {
        default: !1
      }
    }
  });
  P("TemplateLiteral", {
    visitor: ["quasis", "expressions"],
    aliases: ["Expression", "Literal"],
    fields: {
      quasis: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("TemplateElement")))
      },
      expressions: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Expression", "TSType")), function (e, t, r) {
          if (e.quasis.length !== r.length + 1) throw new TypeError(`Number of ${e.type} quasis should be exactly one more than the number of expressions.
Expected ${r.length + 1} quasis but got ${e.quasis.length}`);
        })
      }
    }
  });
  P("YieldExpression", {
    builder: ["argument", "delegate"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      delegate: {
        validate: (0, i.chain)((0, i.assertValueType)("boolean"), Object.assign(function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && !e.argument) throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }, {
          type: "boolean"
        })),
        default: !1
      },
      argument: {
        optional: !0,
        validate: (0, i.assertNodeType)("Expression")
      }
    }
  });
  P("AwaitExpression", {
    builder: ["argument"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      argument: {
        validate: (0, i.assertNodeType)("Expression")
      }
    }
  });
  P("Import", {
    aliases: ["Expression"]
  });
  P("BigIntLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, i.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  P("ExportNamespaceSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: (0, i.assertNodeType)("Identifier")
      }
    }
  });
  P("OptionalMemberExpression", {
    builder: ["object", "property", "computed", "optional"],
    visitor: ["object", "property"],
    aliases: ["Expression"],
    fields: {
      object: {
        validate: (0, i.assertNodeType)("Expression")
      },
      property: {
        validate: function () {
          let e = (0, i.assertNodeType)("Identifier"),
              t = (0, i.assertNodeType)("Expression"),
              r = n(function (p, d, m) {
            (p.computed ? t : e)(p, d, m);
          }, "validator");
          return r.oneOfNodeTypes = ["Expression", "Identifier"], r;
        }()
      },
      computed: {
        default: !1
      },
      optional: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, i.chain)((0, i.assertValueType)("boolean"), (0, i.assertOptionalChainStart)()) : (0, i.assertValueType)("boolean")
      }
    }
  });
  P("OptionalCallExpression", {
    visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
    builder: ["callee", "arguments", "optional"],
    aliases: ["Expression"],
    fields: {
      callee: {
        validate: (0, i.assertNodeType)("Expression")
      },
      arguments: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
      },
      optional: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, i.chain)((0, i.assertValueType)("boolean"), (0, i.assertOptionalChainStart)()) : (0, i.assertValueType)("boolean")
      },
      typeArguments: {
        validate: (0, i.assertNodeType)("TypeParameterInstantiation"),
        optional: !0
      },
      typeParameters: {
        validate: (0, i.assertNodeType)("TSTypeParameterInstantiation"),
        optional: !0
      }
    }
  });
  P("ClassProperty", {
    visitor: ["key", "value", "typeAnnotation", "decorators"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property"],
    fields: Object.assign({}, Oe, {
      value: {
        validate: (0, i.assertNodeType)("Expression"),
        optional: !0
      },
      definite: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      typeAnnotation: {
        validate: (0, i.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: !0
      },
      decorators: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
        optional: !0
      },
      readonly: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      declare: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      variance: {
        validate: (0, i.assertNodeType)("Variance"),
        optional: !0
      }
    })
  });
  P("ClassAccessorProperty", {
    visitor: ["key", "value", "typeAnnotation", "decorators"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property", "Accessor"],
    fields: Object.assign({}, Oe, {
      key: {
        validate: (0, i.chain)(function () {
          let e = (0, i.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "PrivateName"),
              t = (0, i.assertNodeType)("Expression");
          return function (r, p, d) {
            (r.computed ? t : e)(r, p, d);
          };
        }(), (0, i.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression", "PrivateName"))
      },
      value: {
        validate: (0, i.assertNodeType)("Expression"),
        optional: !0
      },
      definite: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      typeAnnotation: {
        validate: (0, i.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: !0
      },
      decorators: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
        optional: !0
      },
      readonly: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      declare: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      variance: {
        validate: (0, i.assertNodeType)("Variance"),
        optional: !0
      }
    })
  });
  P("ClassPrivateProperty", {
    visitor: ["key", "value", "decorators", "typeAnnotation"],
    builder: ["key", "value", "decorators", "static"],
    aliases: ["Property", "Private"],
    fields: {
      key: {
        validate: (0, i.assertNodeType)("PrivateName")
      },
      value: {
        validate: (0, i.assertNodeType)("Expression"),
        optional: !0
      },
      typeAnnotation: {
        validate: (0, i.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: !0
      },
      decorators: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Decorator"))),
        optional: !0
      },
      readonly: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      definite: {
        validate: (0, i.assertValueType)("boolean"),
        optional: !0
      },
      variance: {
        validate: (0, i.assertNodeType)("Variance"),
        optional: !0
      }
    }
  });
  P("ClassPrivateMethod", {
    builder: ["kind", "key", "params", "body", "static"],
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
    fields: Object.assign({}, it, H, {
      key: {
        validate: (0, i.assertNodeType)("PrivateName")
      },
      body: {
        validate: (0, i.assertNodeType)("BlockStatement")
      }
    })
  });
  P("PrivateName", {
    visitor: ["id"],
    aliases: ["Private"],
    fields: {
      id: {
        validate: (0, i.assertNodeType)("Identifier")
      }
    }
  });
  P("StaticBlock", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, i.chain)((0, i.assertValueType)("array"), (0, i.assertEach)((0, i.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "FunctionParent"]
  });
});
var sn = x(() => {
  "use strict";

  var T = J(),
      O = (0, T.defineAliasedType)("Flow"),
      st = n((e, t = "TypeParameterDeclaration") => {
    O(e, {
      builder: ["id", "typeParameters", "extends", "body"],
      visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, T.validateType)("Identifier"),
        typeParameters: (0, T.validateOptionalType)(t),
        extends: (0, T.validateOptional)((0, T.arrayOfType)("InterfaceExtends")),
        mixins: (0, T.validateOptional)((0, T.arrayOfType)("InterfaceExtends")),
        implements: (0, T.validateOptional)((0, T.arrayOfType)("ClassImplements")),
        body: (0, T.validateType)("ObjectTypeAnnotation")
      }
    });
  }, "defineInterfaceishType");
  O("AnyTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("ArrayTypeAnnotation", {
    visitor: ["elementType"],
    aliases: ["FlowType"],
    fields: {
      elementType: (0, T.validateType)("FlowType")
    }
  });
  O("BooleanTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("BooleanLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["FlowType"],
    fields: {
      value: (0, T.validate)((0, T.assertValueType)("boolean"))
    }
  });
  O("NullLiteralTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("ClassImplements", {
    visitor: ["id", "typeParameters"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      typeParameters: (0, T.validateOptionalType)("TypeParameterInstantiation")
    }
  });
  st("DeclareClass");
  O("DeclareFunction", {
    visitor: ["id"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      predicate: (0, T.validateOptionalType)("DeclaredPredicate")
    }
  });
  st("DeclareInterface");
  O("DeclareModule", {
    builder: ["id", "body", "kind"],
    visitor: ["id", "body"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, T.validateType)(["Identifier", "StringLiteral"]),
      body: (0, T.validateType)("BlockStatement"),
      kind: (0, T.validateOptional)((0, T.assertOneOf)("CommonJS", "ES"))
    }
  });
  O("DeclareModuleExports", {
    visitor: ["typeAnnotation"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      typeAnnotation: (0, T.validateType)("TypeAnnotation")
    }
  });
  O("DeclareTypeAlias", {
    visitor: ["id", "typeParameters", "right"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      typeParameters: (0, T.validateOptionalType)("TypeParameterDeclaration"),
      right: (0, T.validateType)("FlowType")
    }
  });
  O("DeclareOpaqueType", {
    visitor: ["id", "typeParameters", "supertype"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      typeParameters: (0, T.validateOptionalType)("TypeParameterDeclaration"),
      supertype: (0, T.validateOptionalType)("FlowType"),
      impltype: (0, T.validateOptionalType)("FlowType")
    }
  });
  O("DeclareVariable", {
    visitor: ["id"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, T.validateType)("Identifier")
    }
  });
  O("DeclareExportDeclaration", {
    visitor: ["declaration", "specifiers", "source"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      declaration: (0, T.validateOptionalType)("Flow"),
      specifiers: (0, T.validateOptional)((0, T.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
      source: (0, T.validateOptionalType)("StringLiteral"),
      default: (0, T.validateOptional)((0, T.assertValueType)("boolean"))
    }
  });
  O("DeclareExportAllDeclaration", {
    visitor: ["source"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      source: (0, T.validateType)("StringLiteral"),
      exportKind: (0, T.validateOptional)((0, T.assertOneOf)("type", "value"))
    }
  });
  O("DeclaredPredicate", {
    visitor: ["value"],
    aliases: ["FlowPredicate"],
    fields: {
      value: (0, T.validateType)("Flow")
    }
  });
  O("ExistsTypeAnnotation", {
    aliases: ["FlowType"]
  });
  O("FunctionTypeAnnotation", {
    visitor: ["typeParameters", "params", "rest", "returnType"],
    aliases: ["FlowType"],
    fields: {
      typeParameters: (0, T.validateOptionalType)("TypeParameterDeclaration"),
      params: (0, T.validate)((0, T.arrayOfType)("FunctionTypeParam")),
      rest: (0, T.validateOptionalType)("FunctionTypeParam"),
      this: (0, T.validateOptionalType)("FunctionTypeParam"),
      returnType: (0, T.validateType)("FlowType")
    }
  });
  O("FunctionTypeParam", {
    visitor: ["name", "typeAnnotation"],
    fields: {
      name: (0, T.validateOptionalType)("Identifier"),
      typeAnnotation: (0, T.validateType)("FlowType"),
      optional: (0, T.validateOptional)((0, T.assertValueType)("boolean"))
    }
  });
  O("GenericTypeAnnotation", {
    visitor: ["id", "typeParameters"],
    aliases: ["FlowType"],
    fields: {
      id: (0, T.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
      typeParameters: (0, T.validateOptionalType)("TypeParameterInstantiation")
    }
  });
  O("InferredPredicate", {
    aliases: ["FlowPredicate"]
  });
  O("InterfaceExtends", {
    visitor: ["id", "typeParameters"],
    fields: {
      id: (0, T.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
      typeParameters: (0, T.validateOptionalType)("TypeParameterInstantiation")
    }
  });
  st("InterfaceDeclaration");
  O("InterfaceTypeAnnotation", {
    visitor: ["extends", "body"],
    aliases: ["FlowType"],
    fields: {
      extends: (0, T.validateOptional)((0, T.arrayOfType)("InterfaceExtends")),
      body: (0, T.validateType)("ObjectTypeAnnotation")
    }
  });
  O("IntersectionTypeAnnotation", {
    visitor: ["types"],
    aliases: ["FlowType"],
    fields: {
      types: (0, T.validate)((0, T.arrayOfType)("FlowType"))
    }
  });
  O("MixedTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("EmptyTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("NullableTypeAnnotation", {
    visitor: ["typeAnnotation"],
    aliases: ["FlowType"],
    fields: {
      typeAnnotation: (0, T.validateType)("FlowType")
    }
  });
  O("NumberLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["FlowType"],
    fields: {
      value: (0, T.validate)((0, T.assertValueType)("number"))
    }
  });
  O("NumberTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("ObjectTypeAnnotation", {
    visitor: ["properties", "indexers", "callProperties", "internalSlots"],
    aliases: ["FlowType"],
    builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
    fields: {
      properties: (0, T.validate)((0, T.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
      indexers: {
        validate: (0, T.arrayOfType)("ObjectTypeIndexer"),
        optional: !0,
        default: []
      },
      callProperties: {
        validate: (0, T.arrayOfType)("ObjectTypeCallProperty"),
        optional: !0,
        default: []
      },
      internalSlots: {
        validate: (0, T.arrayOfType)("ObjectTypeInternalSlot"),
        optional: !0,
        default: []
      },
      exact: {
        validate: (0, T.assertValueType)("boolean"),
        default: !1
      },
      inexact: (0, T.validateOptional)((0, T.assertValueType)("boolean"))
    }
  });
  O("ObjectTypeInternalSlot", {
    visitor: ["id", "value", "optional", "static", "method"],
    aliases: ["UserWhitespacable"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      value: (0, T.validateType)("FlowType"),
      optional: (0, T.validate)((0, T.assertValueType)("boolean")),
      static: (0, T.validate)((0, T.assertValueType)("boolean")),
      method: (0, T.validate)((0, T.assertValueType)("boolean"))
    }
  });
  O("ObjectTypeCallProperty", {
    visitor: ["value"],
    aliases: ["UserWhitespacable"],
    fields: {
      value: (0, T.validateType)("FlowType"),
      static: (0, T.validate)((0, T.assertValueType)("boolean"))
    }
  });
  O("ObjectTypeIndexer", {
    visitor: ["id", "key", "value", "variance"],
    aliases: ["UserWhitespacable"],
    fields: {
      id: (0, T.validateOptionalType)("Identifier"),
      key: (0, T.validateType)("FlowType"),
      value: (0, T.validateType)("FlowType"),
      static: (0, T.validate)((0, T.assertValueType)("boolean")),
      variance: (0, T.validateOptionalType)("Variance")
    }
  });
  O("ObjectTypeProperty", {
    visitor: ["key", "value", "variance"],
    aliases: ["UserWhitespacable"],
    fields: {
      key: (0, T.validateType)(["Identifier", "StringLiteral"]),
      value: (0, T.validateType)("FlowType"),
      kind: (0, T.validate)((0, T.assertOneOf)("init", "get", "set")),
      static: (0, T.validate)((0, T.assertValueType)("boolean")),
      proto: (0, T.validate)((0, T.assertValueType)("boolean")),
      optional: (0, T.validate)((0, T.assertValueType)("boolean")),
      variance: (0, T.validateOptionalType)("Variance"),
      method: (0, T.validate)((0, T.assertValueType)("boolean"))
    }
  });
  O("ObjectTypeSpreadProperty", {
    visitor: ["argument"],
    aliases: ["UserWhitespacable"],
    fields: {
      argument: (0, T.validateType)("FlowType")
    }
  });
  O("OpaqueType", {
    visitor: ["id", "typeParameters", "supertype", "impltype"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      typeParameters: (0, T.validateOptionalType)("TypeParameterDeclaration"),
      supertype: (0, T.validateOptionalType)("FlowType"),
      impltype: (0, T.validateType)("FlowType")
    }
  });
  O("QualifiedTypeIdentifier", {
    visitor: ["id", "qualification"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      qualification: (0, T.validateType)(["Identifier", "QualifiedTypeIdentifier"])
    }
  });
  O("StringLiteralTypeAnnotation", {
    builder: ["value"],
    aliases: ["FlowType"],
    fields: {
      value: (0, T.validate)((0, T.assertValueType)("string"))
    }
  });
  O("StringTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("SymbolTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("ThisTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("TupleTypeAnnotation", {
    visitor: ["types"],
    aliases: ["FlowType"],
    fields: {
      types: (0, T.validate)((0, T.arrayOfType)("FlowType"))
    }
  });
  O("TypeofTypeAnnotation", {
    visitor: ["argument"],
    aliases: ["FlowType"],
    fields: {
      argument: (0, T.validateType)("FlowType")
    }
  });
  O("TypeAlias", {
    visitor: ["id", "typeParameters", "right"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      typeParameters: (0, T.validateOptionalType)("TypeParameterDeclaration"),
      right: (0, T.validateType)("FlowType")
    }
  });
  O("TypeAnnotation", {
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, T.validateType)("FlowType")
    }
  });
  O("TypeCastExpression", {
    visitor: ["expression", "typeAnnotation"],
    aliases: ["ExpressionWrapper", "Expression"],
    fields: {
      expression: (0, T.validateType)("Expression"),
      typeAnnotation: (0, T.validateType)("TypeAnnotation")
    }
  });
  O("TypeParameter", {
    visitor: ["bound", "default", "variance"],
    fields: {
      name: (0, T.validate)((0, T.assertValueType)("string")),
      bound: (0, T.validateOptionalType)("TypeAnnotation"),
      default: (0, T.validateOptionalType)("FlowType"),
      variance: (0, T.validateOptionalType)("Variance")
    }
  });
  O("TypeParameterDeclaration", {
    visitor: ["params"],
    fields: {
      params: (0, T.validate)((0, T.arrayOfType)("TypeParameter"))
    }
  });
  O("TypeParameterInstantiation", {
    visitor: ["params"],
    fields: {
      params: (0, T.validate)((0, T.arrayOfType)("FlowType"))
    }
  });
  O("UnionTypeAnnotation", {
    visitor: ["types"],
    aliases: ["FlowType"],
    fields: {
      types: (0, T.validate)((0, T.arrayOfType)("FlowType"))
    }
  });
  O("Variance", {
    builder: ["kind"],
    fields: {
      kind: (0, T.validate)((0, T.assertOneOf)("minus", "plus"))
    }
  });
  O("VoidTypeAnnotation", {
    aliases: ["FlowType", "FlowBaseAnnotation"]
  });
  O("EnumDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "body"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      body: (0, T.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
    }
  });
  O("EnumBooleanBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: (0, T.validate)((0, T.assertValueType)("boolean")),
      members: (0, T.validateArrayOfType)("EnumBooleanMember"),
      hasUnknownMembers: (0, T.validate)((0, T.assertValueType)("boolean"))
    }
  });
  O("EnumNumberBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: (0, T.validate)((0, T.assertValueType)("boolean")),
      members: (0, T.validateArrayOfType)("EnumNumberMember"),
      hasUnknownMembers: (0, T.validate)((0, T.assertValueType)("boolean"))
    }
  });
  O("EnumStringBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      explicitType: (0, T.validate)((0, T.assertValueType)("boolean")),
      members: (0, T.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
      hasUnknownMembers: (0, T.validate)((0, T.assertValueType)("boolean"))
    }
  });
  O("EnumSymbolBody", {
    aliases: ["EnumBody"],
    visitor: ["members"],
    fields: {
      members: (0, T.validateArrayOfType)("EnumDefaultedMember"),
      hasUnknownMembers: (0, T.validate)((0, T.assertValueType)("boolean"))
    }
  });
  O("EnumBooleanMember", {
    aliases: ["EnumMember"],
    visitor: ["id"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      init: (0, T.validateType)("BooleanLiteral")
    }
  });
  O("EnumNumberMember", {
    aliases: ["EnumMember"],
    visitor: ["id", "init"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      init: (0, T.validateType)("NumericLiteral")
    }
  });
  O("EnumStringMember", {
    aliases: ["EnumMember"],
    visitor: ["id", "init"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      init: (0, T.validateType)("StringLiteral")
    }
  });
  O("EnumDefaultedMember", {
    aliases: ["EnumMember"],
    visitor: ["id"],
    fields: {
      id: (0, T.validateType)("Identifier")
    }
  });
  O("IndexedAccessType", {
    visitor: ["objectType", "indexType"],
    aliases: ["FlowType"],
    fields: {
      objectType: (0, T.validateType)("FlowType"),
      indexType: (0, T.validateType)("FlowType")
    }
  });
  O("OptionalIndexedAccessType", {
    visitor: ["objectType", "indexType"],
    aliases: ["FlowType"],
    fields: {
      objectType: (0, T.validateType)("FlowType"),
      indexType: (0, T.validateType)("FlowType"),
      optional: (0, T.validate)((0, T.assertValueType)("boolean"))
    }
  });
});
var on = x(() => {
  "use strict";

  var L = J(),
      R = (0, L.defineAliasedType)("JSX");
  R("JSXAttribute", {
    visitor: ["name", "value"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: (0, L.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
      },
      value: {
        optional: !0,
        validate: (0, L.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
      }
    }
  });
  R("JSXClosingElement", {
    visitor: ["name"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: (0, L.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      }
    }
  });
  R("JSXElement", {
    builder: ["openingElement", "closingElement", "children", "selfClosing"],
    visitor: ["openingElement", "children", "closingElement"],
    aliases: ["Immutable", "Expression"],
    fields: Object.assign({
      openingElement: {
        validate: (0, L.assertNodeType)("JSXOpeningElement")
      },
      closingElement: {
        optional: !0,
        validate: (0, L.assertNodeType)("JSXClosingElement")
      },
      children: {
        validate: (0, L.chain)((0, L.assertValueType)("array"), (0, L.assertEach)((0, L.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
      }
    }, {
      selfClosing: {
        validate: (0, L.assertValueType)("boolean"),
        optional: !0
      }
    })
  });
  R("JSXEmptyExpression", {});
  R("JSXExpressionContainer", {
    visitor: ["expression"],
    aliases: ["Immutable"],
    fields: {
      expression: {
        validate: (0, L.assertNodeType)("Expression", "JSXEmptyExpression")
      }
    }
  });
  R("JSXSpreadChild", {
    visitor: ["expression"],
    aliases: ["Immutable"],
    fields: {
      expression: {
        validate: (0, L.assertNodeType)("Expression")
      }
    }
  });
  R("JSXIdentifier", {
    builder: ["name"],
    fields: {
      name: {
        validate: (0, L.assertValueType)("string")
      }
    }
  });
  R("JSXMemberExpression", {
    visitor: ["object", "property"],
    fields: {
      object: {
        validate: (0, L.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
      },
      property: {
        validate: (0, L.assertNodeType)("JSXIdentifier")
      }
    }
  });
  R("JSXNamespacedName", {
    visitor: ["namespace", "name"],
    fields: {
      namespace: {
        validate: (0, L.assertNodeType)("JSXIdentifier")
      },
      name: {
        validate: (0, L.assertNodeType)("JSXIdentifier")
      }
    }
  });
  R("JSXOpeningElement", {
    builder: ["name", "attributes", "selfClosing"],
    visitor: ["name", "attributes"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: (0, L.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      },
      selfClosing: {
        default: !1
      },
      attributes: {
        validate: (0, L.chain)((0, L.assertValueType)("array"), (0, L.assertEach)((0, L.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
      },
      typeParameters: {
        validate: (0, L.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      }
    }
  });
  R("JSXSpreadAttribute", {
    visitor: ["argument"],
    fields: {
      argument: {
        validate: (0, L.assertNodeType)("Expression")
      }
    }
  });
  R("JSXText", {
    aliases: ["Immutable"],
    builder: ["value"],
    fields: {
      value: {
        validate: (0, L.assertValueType)("string")
      }
    }
  });
  R("JSXFragment", {
    builder: ["openingFragment", "closingFragment", "children"],
    visitor: ["openingFragment", "children", "closingFragment"],
    aliases: ["Immutable", "Expression"],
    fields: {
      openingFragment: {
        validate: (0, L.assertNodeType)("JSXOpeningFragment")
      },
      closingFragment: {
        validate: (0, L.assertNodeType)("JSXClosingFragment")
      },
      children: {
        validate: (0, L.chain)((0, L.assertValueType)("array"), (0, L.assertEach)((0, L.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
      }
    }
  });
  R("JSXOpeningFragment", {
    aliases: ["Immutable"]
  });
  R("JSXClosingFragment", {
    aliases: ["Immutable"]
  });
});
var ot = x($ => {
  "use strict";

  Object.defineProperty($, "__esModule", {
    value: !0
  });
  $.PLACEHOLDERS_FLIPPED_ALIAS = $.PLACEHOLDERS_ALIAS = $.PLACEHOLDERS = void 0;
  var Hp = J(),
      un = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
  $.PLACEHOLDERS = un;
  var ge = {
    Declaration: ["Statement"],
    Pattern: ["PatternLike", "LVal"]
  };
  $.PLACEHOLDERS_ALIAS = ge;

  for (let e of un) {
    let t = Hp.ALIAS_KEYS[e];
    t != null && t.length && (ge[e] = t);
  }

  var ve = {};
  $.PLACEHOLDERS_FLIPPED_ALIAS = ve;
  Object.keys(ge).forEach(e => {
    ge[e].forEach(t => {
      Object.hasOwnProperty.call(ve, t) || (ve[t] = []), ve[t].push(e);
    });
  });
});
var ln = x(() => {
  "use strict";

  var Ie = J(),
      Zp = ot(),
      ut = (0, Ie.defineAliasedType)("Miscellaneous");
  ut("Noop", {
    visitor: []
  });
  ut("Placeholder", {
    visitor: [],
    builder: ["expectedNode", "name"],
    fields: {
      name: {
        validate: (0, Ie.assertNodeType)("Identifier")
      },
      expectedNode: {
        validate: (0, Ie.assertOneOf)(...Zp.PLACEHOLDERS)
      }
    }
  });
  ut("V8IntrinsicIdentifier", {
    builder: ["name"],
    fields: {
      name: {
        validate: (0, Ie.assertValueType)("string")
      }
    }
  });
});
var pn = x(() => {
  "use strict";

  var h = J();
  (0, h.default)("ArgumentPlaceholder", {});
  (0, h.default)("BindExpression", {
    visitor: ["object", "callee"],
    aliases: ["Expression"],
    fields: __Process$.env.BABEL_TYPES_8_BREAKING ? {
      object: {
        validate: (0, h.assertNodeType)("Expression")
      },
      callee: {
        validate: (0, h.assertNodeType)("Expression")
      }
    } : {
      object: {
        validate: Object.assign(() => {}, {
          oneOfNodeTypes: ["Expression"]
        })
      },
      callee: {
        validate: Object.assign(() => {}, {
          oneOfNodeTypes: ["Expression"]
        })
      }
    }
  });
  (0, h.default)("ImportAttribute", {
    visitor: ["key", "value"],
    fields: {
      key: {
        validate: (0, h.assertNodeType)("Identifier", "StringLiteral")
      },
      value: {
        validate: (0, h.assertNodeType)("StringLiteral")
      }
    }
  });
  (0, h.default)("Decorator", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, h.assertNodeType)("Expression")
      }
    }
  });
  (0, h.default)("DoExpression", {
    visitor: ["body"],
    builder: ["body", "async"],
    aliases: ["Expression"],
    fields: {
      body: {
        validate: (0, h.assertNodeType)("BlockStatement")
      },
      async: {
        validate: (0, h.assertValueType)("boolean"),
        default: !1
      }
    }
  });
  (0, h.default)("ExportDefaultSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: (0, h.assertNodeType)("Identifier")
      }
    }
  });
  (0, h.default)("RecordExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: {
        validate: (0, h.chain)((0, h.assertValueType)("array"), (0, h.assertEach)((0, h.assertNodeType)("ObjectProperty", "SpreadElement")))
      }
    }
  });
  (0, h.default)("TupleExpression", {
    fields: {
      elements: {
        validate: (0, h.chain)((0, h.assertValueType)("array"), (0, h.assertEach)((0, h.assertNodeType)("Expression", "SpreadElement"))),
        default: []
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  });
  (0, h.default)("DecimalLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, h.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  (0, h.default)("ModuleExpression", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, h.assertNodeType)("Program")
      }
    },
    aliases: ["Expression"]
  });
  (0, h.default)("TopicReference", {
    aliases: ["Expression"]
  });
  (0, h.default)("PipelineTopicExpression", {
    builder: ["expression"],
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, h.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression"]
  });
  (0, h.default)("PipelineBareFunction", {
    builder: ["callee"],
    visitor: ["callee"],
    fields: {
      callee: {
        validate: (0, h.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression"]
  });
  (0, h.default)("PipelinePrimaryTopicReference", {
    aliases: ["Expression"]
  });
});
var Sn = x(() => {
  "use strict";

  var S = J(),
      fn = at(),
      ef = re(),
      g = (0, S.defineAliasedType)("TypeScript"),
      B = (0, S.assertValueType)("boolean"),
      cn = {
    returnType: {
      validate: (0, S.assertNodeType)("TSTypeAnnotation", "Noop"),
      optional: !0
    },
    typeParameters: {
      validate: (0, S.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
      optional: !0
    }
  };
  g("TSParameterProperty", {
    aliases: ["LVal"],
    visitor: ["parameter"],
    fields: {
      accessibility: {
        validate: (0, S.assertOneOf)("public", "private", "protected"),
        optional: !0
      },
      readonly: {
        validate: (0, S.assertValueType)("boolean"),
        optional: !0
      },
      parameter: {
        validate: (0, S.assertNodeType)("Identifier", "AssignmentPattern")
      },
      override: {
        validate: (0, S.assertValueType)("boolean"),
        optional: !0
      },
      decorators: {
        validate: (0, S.chain)((0, S.assertValueType)("array"), (0, S.assertEach)((0, S.assertNodeType)("Decorator"))),
        optional: !0
      }
    }
  });
  g("TSDeclareFunction", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "params", "returnType"],
    fields: Object.assign({}, fn.functionDeclarationCommon, cn)
  });
  g("TSDeclareMethod", {
    visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
    fields: Object.assign({}, fn.classMethodOrDeclareMethodCommon, cn)
  });
  g("TSQualifiedName", {
    aliases: ["TSEntityName"],
    visitor: ["left", "right"],
    fields: {
      left: (0, S.validateType)("TSEntityName"),
      right: (0, S.validateType)("Identifier")
    }
  });
  var De = {
    typeParameters: (0, S.validateOptionalType)("TSTypeParameterDeclaration"),
    parameters: (0, S.validateArrayOfType)(["Identifier", "RestElement"]),
    typeAnnotation: (0, S.validateOptionalType)("TSTypeAnnotation")
  },
      yn = {
    aliases: ["TSTypeElement"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"],
    fields: De
  };
  g("TSCallSignatureDeclaration", yn);
  g("TSConstructSignatureDeclaration", yn);
  var dn = {
    key: (0, S.validateType)("Expression"),
    computed: (0, S.validate)(B),
    optional: (0, S.validateOptional)(B)
  };
  g("TSPropertySignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeAnnotation", "initializer"],
    fields: Object.assign({}, dn, {
      readonly: (0, S.validateOptional)(B),
      typeAnnotation: (0, S.validateOptionalType)("TSTypeAnnotation"),
      initializer: (0, S.validateOptionalType)("Expression"),
      kind: {
        validate: (0, S.assertOneOf)("get", "set")
      }
    })
  });
  g("TSMethodSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
    fields: Object.assign({}, De, dn, {
      kind: {
        validate: (0, S.assertOneOf)("method", "get", "set")
      }
    })
  });
  g("TSIndexSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["parameters", "typeAnnotation"],
    fields: {
      readonly: (0, S.validateOptional)(B),
      static: (0, S.validateOptional)(B),
      parameters: (0, S.validateArrayOfType)("Identifier"),
      typeAnnotation: (0, S.validateOptionalType)("TSTypeAnnotation")
    }
  });
  var tf = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];

  for (let e of tf) g(e, {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });

  g("TSThisType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
  var Tn = {
    aliases: ["TSType"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"]
  };
  g("TSFunctionType", Object.assign({}, Tn, {
    fields: De
  }));
  g("TSConstructorType", Object.assign({}, Tn, {
    fields: Object.assign({}, De, {
      abstract: (0, S.validateOptional)(B)
    })
  }));
  g("TSTypeReference", {
    aliases: ["TSType"],
    visitor: ["typeName", "typeParameters"],
    fields: {
      typeName: (0, S.validateType)("TSEntityName"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  g("TSTypePredicate", {
    aliases: ["TSType"],
    visitor: ["parameterName", "typeAnnotation"],
    builder: ["parameterName", "typeAnnotation", "asserts"],
    fields: {
      parameterName: (0, S.validateType)(["Identifier", "TSThisType"]),
      typeAnnotation: (0, S.validateOptionalType)("TSTypeAnnotation"),
      asserts: (0, S.validateOptional)(B)
    }
  });
  g("TSTypeQuery", {
    aliases: ["TSType"],
    visitor: ["exprName", "typeParameters"],
    fields: {
      exprName: (0, S.validateType)(["TSEntityName", "TSImportType"]),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  g("TSTypeLiteral", {
    aliases: ["TSType"],
    visitor: ["members"],
    fields: {
      members: (0, S.validateArrayOfType)("TSTypeElement")
    }
  });
  g("TSArrayType", {
    aliases: ["TSType"],
    visitor: ["elementType"],
    fields: {
      elementType: (0, S.validateType)("TSType")
    }
  });
  g("TSTupleType", {
    aliases: ["TSType"],
    visitor: ["elementTypes"],
    fields: {
      elementTypes: (0, S.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
    }
  });
  g("TSOptionalType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  g("TSRestType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  g("TSNamedTupleMember", {
    visitor: ["label", "elementType"],
    builder: ["label", "elementType", "optional"],
    fields: {
      label: (0, S.validateType)("Identifier"),
      optional: {
        validate: B,
        default: !1
      },
      elementType: (0, S.validateType)("TSType")
    }
  });
  var mn = {
    aliases: ["TSType"],
    visitor: ["types"],
    fields: {
      types: (0, S.validateArrayOfType)("TSType")
    }
  };
  g("TSUnionType", mn);
  g("TSIntersectionType", mn);
  g("TSConditionalType", {
    aliases: ["TSType"],
    visitor: ["checkType", "extendsType", "trueType", "falseType"],
    fields: {
      checkType: (0, S.validateType)("TSType"),
      extendsType: (0, S.validateType)("TSType"),
      trueType: (0, S.validateType)("TSType"),
      falseType: (0, S.validateType)("TSType")
    }
  });
  g("TSInferType", {
    aliases: ["TSType"],
    visitor: ["typeParameter"],
    fields: {
      typeParameter: (0, S.validateType)("TSTypeParameter")
    }
  });
  g("TSParenthesizedType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  g("TSTypeOperator", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      operator: (0, S.validate)((0, S.assertValueType)("string")),
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  g("TSIndexedAccessType", {
    aliases: ["TSType"],
    visitor: ["objectType", "indexType"],
    fields: {
      objectType: (0, S.validateType)("TSType"),
      indexType: (0, S.validateType)("TSType")
    }
  });
  g("TSMappedType", {
    aliases: ["TSType"],
    visitor: ["typeParameter", "typeAnnotation", "nameType"],
    fields: {
      readonly: (0, S.validateOptional)(B),
      typeParameter: (0, S.validateType)("TSTypeParameter"),
      optional: (0, S.validateOptional)(B),
      typeAnnotation: (0, S.validateOptionalType)("TSType"),
      nameType: (0, S.validateOptionalType)("TSType")
    }
  });
  g("TSLiteralType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: ["literal"],
    fields: {
      literal: {
        validate: function () {
          let e = (0, S.assertNodeType)("NumericLiteral", "BigIntLiteral"),
              t = (0, S.assertOneOf)("-"),
              r = (0, S.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral");

          function p(d, m, E) {
            (0, ef.default)("UnaryExpression", E) ? (t(E, "operator", E.operator), e(E, "argument", E.argument)) : r(d, m, E);
          }

          return n(p, "validator"), p.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "UnaryExpression"], p;
        }()
      }
    }
  });
  g("TSExpressionWithTypeArguments", {
    aliases: ["TSType"],
    visitor: ["expression", "typeParameters"],
    fields: {
      expression: (0, S.validateType)("TSEntityName"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  g("TSInterfaceDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "extends", "body"],
    fields: {
      declare: (0, S.validateOptional)(B),
      id: (0, S.validateType)("Identifier"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterDeclaration"),
      extends: (0, S.validateOptional)((0, S.arrayOfType)("TSExpressionWithTypeArguments")),
      body: (0, S.validateType)("TSInterfaceBody")
    }
  });
  g("TSInterfaceBody", {
    visitor: ["body"],
    fields: {
      body: (0, S.validateArrayOfType)("TSTypeElement")
    }
  });
  g("TSTypeAliasDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "typeAnnotation"],
    fields: {
      declare: (0, S.validateOptional)(B),
      id: (0, S.validateType)("Identifier"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterDeclaration"),
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  g("TSInstantiationExpression", {
    aliases: ["Expression"],
    visitor: ["expression", "typeParameters"],
    fields: {
      expression: (0, S.validateType)("Expression"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  g("TSAsExpression", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["expression", "typeAnnotation"],
    fields: {
      expression: (0, S.validateType)("Expression"),
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  g("TSTypeAssertion", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["typeAnnotation", "expression"],
    fields: {
      typeAnnotation: (0, S.validateType)("TSType"),
      expression: (0, S.validateType)("Expression")
    }
  });
  g("TSEnumDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "members"],
    fields: {
      declare: (0, S.validateOptional)(B),
      const: (0, S.validateOptional)(B),
      id: (0, S.validateType)("Identifier"),
      members: (0, S.validateArrayOfType)("TSEnumMember"),
      initializer: (0, S.validateOptionalType)("Expression")
    }
  });
  g("TSEnumMember", {
    visitor: ["id", "initializer"],
    fields: {
      id: (0, S.validateType)(["Identifier", "StringLiteral"]),
      initializer: (0, S.validateOptionalType)("Expression")
    }
  });
  g("TSModuleDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "body"],
    fields: {
      declare: (0, S.validateOptional)(B),
      global: (0, S.validateOptional)(B),
      id: (0, S.validateType)(["Identifier", "StringLiteral"]),
      body: (0, S.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
    }
  });
  g("TSModuleBlock", {
    aliases: ["Scopable", "Block", "BlockParent"],
    visitor: ["body"],
    fields: {
      body: (0, S.validateArrayOfType)("Statement")
    }
  });
  g("TSImportType", {
    aliases: ["TSType"],
    visitor: ["argument", "qualifier", "typeParameters"],
    fields: {
      argument: (0, S.validateType)("StringLiteral"),
      qualifier: (0, S.validateOptionalType)("TSEntityName"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  g("TSImportEqualsDeclaration", {
    aliases: ["Statement"],
    visitor: ["id", "moduleReference"],
    fields: {
      isExport: (0, S.validate)(B),
      id: (0, S.validateType)("Identifier"),
      moduleReference: (0, S.validateType)(["TSEntityName", "TSExternalModuleReference"]),
      importKind: {
        validate: (0, S.assertOneOf)("type", "value"),
        optional: !0
      }
    }
  });
  g("TSExternalModuleReference", {
    visitor: ["expression"],
    fields: {
      expression: (0, S.validateType)("StringLiteral")
    }
  });
  g("TSNonNullExpression", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["expression"],
    fields: {
      expression: (0, S.validateType)("Expression")
    }
  });
  g("TSExportAssignment", {
    aliases: ["Statement"],
    visitor: ["expression"],
    fields: {
      expression: (0, S.validateType)("Expression")
    }
  });
  g("TSNamespaceExportDeclaration", {
    aliases: ["Statement"],
    visitor: ["id"],
    fields: {
      id: (0, S.validateType)("Identifier")
    }
  });
  g("TSTypeAnnotation", {
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: {
        validate: (0, S.assertNodeType)("TSType")
      }
    }
  });
  g("TSTypeParameterInstantiation", {
    visitor: ["params"],
    fields: {
      params: {
        validate: (0, S.chain)((0, S.assertValueType)("array"), (0, S.assertEach)((0, S.assertNodeType)("TSType")))
      }
    }
  });
  g("TSTypeParameterDeclaration", {
    visitor: ["params"],
    fields: {
      params: {
        validate: (0, S.chain)((0, S.assertValueType)("array"), (0, S.assertEach)((0, S.assertNodeType)("TSTypeParameter")))
      }
    }
  });
  g("TSTypeParameter", {
    builder: ["constraint", "default", "name"],
    visitor: ["constraint", "default"],
    fields: {
      name: {
        validate: (0, S.assertValueType)("string")
      },
      in: {
        validate: (0, S.assertValueType)("boolean"),
        optional: !0
      },
      out: {
        validate: (0, S.assertValueType)("boolean"),
        optional: !0
      },
      constraint: {
        validate: (0, S.assertNodeType)("TSType"),
        optional: !0
      },
      default: {
        validate: (0, S.assertNodeType)("TSType"),
        optional: !0
      }
    }
  });
});
var k = x(V => {
  "use strict";

  Object.defineProperty(V, "__esModule", {
    value: !0
  });
  Object.defineProperty(V, "ALIAS_KEYS", {
    enumerable: !0,
    get: function () {
      return M.ALIAS_KEYS;
    }
  });
  Object.defineProperty(V, "BUILDER_KEYS", {
    enumerable: !0,
    get: function () {
      return M.BUILDER_KEYS;
    }
  });
  Object.defineProperty(V, "DEPRECATED_KEYS", {
    enumerable: !0,
    get: function () {
      return M.DEPRECATED_KEYS;
    }
  });
  Object.defineProperty(V, "FLIPPED_ALIAS_KEYS", {
    enumerable: !0,
    get: function () {
      return M.FLIPPED_ALIAS_KEYS;
    }
  });
  Object.defineProperty(V, "NODE_FIELDS", {
    enumerable: !0,
    get: function () {
      return M.NODE_FIELDS;
    }
  });
  Object.defineProperty(V, "NODE_PARENT_VALIDATIONS", {
    enumerable: !0,
    get: function () {
      return M.NODE_PARENT_VALIDATIONS;
    }
  });
  Object.defineProperty(V, "PLACEHOLDERS", {
    enumerable: !0,
    get: function () {
      return le.PLACEHOLDERS;
    }
  });
  Object.defineProperty(V, "PLACEHOLDERS_ALIAS", {
    enumerable: !0,
    get: function () {
      return le.PLACEHOLDERS_ALIAS;
    }
  });
  Object.defineProperty(V, "PLACEHOLDERS_FLIPPED_ALIAS", {
    enumerable: !0,
    get: function () {
      return le.PLACEHOLDERS_FLIPPED_ALIAS;
    }
  });
  V.TYPES = void 0;
  Object.defineProperty(V, "VISITOR_KEYS", {
    enumerable: !0,
    get: function () {
      return M.VISITOR_KEYS;
    }
  });
  var z = __to_fast_properties$;
  at();
  sn();
  on();
  ln();
  pn();
  Sn();
  var M = J(),
      le = ot();
  z(M.VISITOR_KEYS);
  z(M.ALIAS_KEYS);
  z(M.FLIPPED_ALIAS_KEYS);
  z(M.NODE_FIELDS);
  z(M.BUILDER_KEYS);
  z(M.DEPRECATED_KEYS);
  z(le.PLACEHOLDERS_ALIAS);
  z(le.PLACEHOLDERS_FLIPPED_ALIAS);
  var rf = [].concat(Object.keys(M.VISITOR_KEYS), Object.keys(M.FLIPPED_ALIAS_KEYS), Object.keys(M.DEPRECATED_KEYS));
  V.TYPES = rf;
});
var xe = x(pe => {
  "use strict";

  Object.defineProperty(pe, "__esModule", {
    value: !0
  });
  pe.default = nf;
  pe.validateChild = Pn;
  pe.validateField = bn;
  var En = k();

  function nf(e, t, r) {
    if (!e) return;
    let p = En.NODE_FIELDS[e.type];
    if (!p) return;
    let d = p[t];
    bn(e, t, r, d), Pn(e, t, r);
  }

  n(nf, "validate");

  function bn(e, t, r, p) {
    !(p != null && p.validate) || p.optional && r == null || p.validate(e, t, r);
  }

  n(bn, "validateField");

  function Pn(e, t, r) {
    if (r == null) return;
    let p = En.NODE_PARENT_VALIDATIONS[r.type];
    !p || p(e, t, r);
  }

  n(Pn, "validateChild");
});
var An = x(lt => {
  "use strict";

  Object.defineProperty(lt, "__esModule", {
    value: !0
  });
  lt.default = of;
  var af = xe(),
      sf = Ne();

  function of(e) {
    let t = sf.BUILDER_KEYS[e.type];

    for (let r of t) (0, af.default)(e, r, e[r]);

    return e;
  }

  n(of, "validateNode");
});
var q = x(a => {
  "use strict";

  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  a.anyTypeAnnotation = Fc;
  a.argumentPlaceholder = cd;
  a.arrayExpression = uf;
  a.arrayPattern = nc;
  a.arrayTypeAnnotation = Rc;
  a.arrowFunctionExpression = ic;
  a.assignmentExpression = lf;
  a.assignmentPattern = rc;
  a.awaitExpression = gc;
  a.bigIntLiteral = Dc;
  a.binaryExpression = pf;
  a.bindExpression = yd;
  a.blockStatement = df;
  a.booleanLiteral = Bf;
  a.booleanLiteralTypeAnnotation = Yc;
  a.booleanTypeAnnotation = Kc;
  a.breakStatement = Tf;
  a.callExpression = mf;
  a.catchClause = Sf;
  a.classAccessorProperty = jc;
  a.classBody = ac;
  a.classDeclaration = oc;
  a.classExpression = sc;
  a.classImplements = qc;
  a.classMethod = Ec;
  a.classPrivateMethod = Bc;
  a.classPrivateProperty = Cc;
  a.classProperty = Lc;
  a.conditionalExpression = Ef;
  a.continueStatement = bf;
  a.debuggerStatement = Pf;
  a.decimalLiteral = Pd;
  a.declareClass = kc;
  a.declareExportAllDeclaration = Hc;
  a.declareExportDeclaration = Qc;
  a.declareFunction = Xc;
  a.declareInterface = Jc;
  a.declareModule = Uc;
  a.declareModuleExports = Wc;
  a.declareOpaqueType = $c;
  a.declareTypeAlias = Gc;
  a.declareVariable = zc;
  a.declaredPredicate = Zc;
  a.decorator = Td;
  a.directive = cf;
  a.directiveLiteral = yf;
  a.doExpression = md;
  a.doWhileStatement = Af;
  a.emptyStatement = xf;
  a.emptyTypeAnnotation = py;
  a.enumBooleanBody = Ry;
  a.enumBooleanMember = qy;
  a.enumDeclaration = Fy;
  a.enumDefaultedMember = Jy;
  a.enumNumberBody = Ky;
  a.enumNumberMember = ky;
  a.enumStringBody = Yy;
  a.enumStringMember = Xy;
  a.enumSymbolBody = Vy;
  a.existsTypeAnnotation = ey;
  a.exportAllDeclaration = uc;
  a.exportDefaultDeclaration = lc;
  a.exportDefaultSpecifier = Sd;
  a.exportNamedDeclaration = pc;
  a.exportNamespaceSpecifier = Nc;
  a.exportSpecifier = fc;
  a.expressionStatement = Of;
  a.file = vf;
  a.forInStatement = gf;
  a.forOfStatement = cc;
  a.forStatement = If;
  a.functionDeclaration = Df;
  a.functionExpression = Nf;
  a.functionTypeAnnotation = ty;
  a.functionTypeParam = ry;
  a.genericTypeAnnotation = ny;
  a.identifier = _f;
  a.ifStatement = hf;
  a.import = Ic;
  a.importAttribute = dd;
  a.importDeclaration = yc;
  a.importDefaultSpecifier = dc;
  a.importNamespaceSpecifier = Tc;
  a.importSpecifier = mc;
  a.indexedAccessType = Uy;
  a.inferredPredicate = iy;
  a.interfaceDeclaration = sy;
  a.interfaceExtends = ay;
  a.interfaceTypeAnnotation = oy;
  a.interpreterDirective = ff;
  a.intersectionTypeAnnotation = uy;
  a.jSXAttribute = a.jsxAttribute = Gy;
  a.jSXClosingElement = a.jsxClosingElement = $y;
  a.jSXClosingFragment = a.jsxClosingFragment = ud;
  a.jSXElement = a.jsxElement = zy;
  a.jSXEmptyExpression = a.jsxEmptyExpression = Qy;
  a.jSXExpressionContainer = a.jsxExpressionContainer = Hy;
  a.jSXFragment = a.jsxFragment = sd;
  a.jSXIdentifier = a.jsxIdentifier = ed;
  a.jSXMemberExpression = a.jsxMemberExpression = td;
  a.jSXNamespacedName = a.jsxNamespacedName = rd;
  a.jSXOpeningElement = a.jsxOpeningElement = nd;
  a.jSXOpeningFragment = a.jsxOpeningFragment = od;
  a.jSXSpreadAttribute = a.jsxSpreadAttribute = id;
  a.jSXSpreadChild = a.jsxSpreadChild = Zy;
  a.jSXText = a.jsxText = ad;
  a.labeledStatement = Lf;
  a.logicalExpression = Mf;
  a.memberExpression = wf;
  a.metaProperty = Sc;
  a.mixedTypeAnnotation = ly;
  a.moduleExpression = Ad;
  a.newExpression = Ff;
  a.noop = ld;
  a.nullLiteral = Cf;
  a.nullLiteralTypeAnnotation = Vc;
  a.nullableTypeAnnotation = fy;
  a.numberLiteral = wT;
  a.numberLiteralTypeAnnotation = cy;
  a.numberTypeAnnotation = yy;
  a.numericLiteral = xn;
  a.objectExpression = Kf;
  a.objectMethod = Yf;
  a.objectPattern = bc;
  a.objectProperty = Vf;
  a.objectTypeAnnotation = dy;
  a.objectTypeCallProperty = my;
  a.objectTypeIndexer = Sy;
  a.objectTypeInternalSlot = Ty;
  a.objectTypeProperty = Ey;
  a.objectTypeSpreadProperty = by;
  a.opaqueType = Py;
  a.optionalCallExpression = hc;
  a.optionalIndexedAccessType = Wy;
  a.optionalMemberExpression = _c;
  a.parenthesizedExpression = Xf;
  a.pipelineBareFunction = vd;
  a.pipelinePrimaryTopicReference = gd;
  a.pipelineTopicExpression = Od;
  a.placeholder = pd;
  a.privateName = Mc;
  a.program = Rf;
  a.qualifiedTypeIdentifier = Ay;
  a.recordExpression = Ed;
  a.regExpLiteral = On;
  a.regexLiteral = FT;
  a.restElement = vn;
  a.restProperty = RT;
  a.returnStatement = qf;
  a.sequenceExpression = kf;
  a.spreadElement = gn;
  a.spreadProperty = KT;
  a.staticBlock = wc;
  a.stringLiteral = jf;
  a.stringLiteralTypeAnnotation = xy;
  a.stringTypeAnnotation = Oy;
  a.super = Pc;
  a.switchCase = Jf;
  a.switchStatement = Uf;
  a.symbolTypeAnnotation = vy;
  a.taggedTemplateExpression = Ac;
  a.templateElement = xc;
  a.templateLiteral = Oc;
  a.thisExpression = Wf;
  a.thisTypeAnnotation = gy;
  a.throwStatement = Gf;
  a.topicReference = xd;
  a.tryStatement = $f;
  a.tSAnyKeyword = a.tsAnyKeyword = Md;
  a.tSArrayType = a.tsArrayType = tT;
  a.tSAsExpression = a.tsAsExpression = PT;
  a.tSBigIntKeyword = a.tsBigIntKeyword = Fd;
  a.tSBooleanKeyword = a.tsBooleanKeyword = wd;
  a.tSCallSignatureDeclaration = a.tsCallSignatureDeclaration = hd;
  a.tSConditionalType = a.tsConditionalType = uT;
  a.tSConstructSignatureDeclaration = a.tsConstructSignatureDeclaration = Ld;
  a.tSConstructorType = a.tsConstructorType = zd;
  a.tSDeclareFunction = a.tsDeclareFunction = Dd;
  a.tSDeclareMethod = a.tsDeclareMethod = Nd;
  a.tSEnumDeclaration = a.tsEnumDeclaration = xT;
  a.tSEnumMember = a.tsEnumMember = OT;
  a.tSExportAssignment = a.tsExportAssignment = hT;
  a.tSExpressionWithTypeArguments = a.tsExpressionWithTypeArguments = TT;
  a.tSExternalModuleReference = a.tsExternalModuleReference = NT;
  a.tSFunctionType = a.tsFunctionType = $d;
  a.tSImportEqualsDeclaration = a.tsImportEqualsDeclaration = DT;
  a.tSImportType = a.tsImportType = IT;
  a.tSIndexSignature = a.tsIndexSignature = Bd;
  a.tSIndexedAccessType = a.tsIndexedAccessType = cT;
  a.tSInferType = a.tsInferType = lT;
  a.tSInstantiationExpression = a.tsInstantiationExpression = bT;
  a.tSInterfaceBody = a.tsInterfaceBody = ST;
  a.tSInterfaceDeclaration = a.tsInterfaceDeclaration = mT;
  a.tSIntersectionType = a.tsIntersectionType = oT;
  a.tSIntrinsicKeyword = a.tsIntrinsicKeyword = Rd;
  a.tSLiteralType = a.tsLiteralType = dT;
  a.tSMappedType = a.tsMappedType = yT;
  a.tSMethodSignature = a.tsMethodSignature = Cd;
  a.tSModuleBlock = a.tsModuleBlock = gT;
  a.tSModuleDeclaration = a.tsModuleDeclaration = vT;
  a.tSNamedTupleMember = a.tsNamedTupleMember = aT;
  a.tSNamespaceExportDeclaration = a.tsNamespaceExportDeclaration = LT;
  a.tSNeverKeyword = a.tsNeverKeyword = Kd;
  a.tSNonNullExpression = a.tsNonNullExpression = _T;
  a.tSNullKeyword = a.tsNullKeyword = Yd;
  a.tSNumberKeyword = a.tsNumberKeyword = Vd;
  a.tSObjectKeyword = a.tsObjectKeyword = qd;
  a.tSOptionalType = a.tsOptionalType = nT;
  a.tSParameterProperty = a.tsParameterProperty = Id;
  a.tSParenthesizedType = a.tsParenthesizedType = pT;
  a.tSPropertySignature = a.tsPropertySignature = jd;
  a.tSQualifiedName = a.tsQualifiedName = _d;
  a.tSRestType = a.tsRestType = iT;
  a.tSStringKeyword = a.tsStringKeyword = kd;
  a.tSSymbolKeyword = a.tsSymbolKeyword = Xd;
  a.tSThisType = a.tsThisType = Gd;
  a.tSTupleType = a.tsTupleType = rT;
  a.tSTypeAliasDeclaration = a.tsTypeAliasDeclaration = ET;
  a.tSTypeAnnotation = a.tsTypeAnnotation = jT;
  a.tSTypeAssertion = a.tsTypeAssertion = AT;
  a.tSTypeLiteral = a.tsTypeLiteral = eT;
  a.tSTypeOperator = a.tsTypeOperator = fT;
  a.tSTypeParameter = a.tsTypeParameter = MT;
  a.tSTypeParameterDeclaration = a.tsTypeParameterDeclaration = BT;
  a.tSTypeParameterInstantiation = a.tsTypeParameterInstantiation = CT;
  a.tSTypePredicate = a.tsTypePredicate = Hd;
  a.tSTypeQuery = a.tsTypeQuery = Zd;
  a.tSTypeReference = a.tsTypeReference = Qd;
  a.tSUndefinedKeyword = a.tsUndefinedKeyword = Jd;
  a.tSUnionType = a.tsUnionType = sT;
  a.tSUnknownKeyword = a.tsUnknownKeyword = Ud;
  a.tSVoidKeyword = a.tsVoidKeyword = Wd;
  a.tupleExpression = bd;
  a.tupleTypeAnnotation = Iy;
  a.typeAlias = Ny;
  a.typeAnnotation = _y;
  a.typeCastExpression = hy;
  a.typeParameter = Ly;
  a.typeParameterDeclaration = jy;
  a.typeParameterInstantiation = Cy;
  a.typeofTypeAnnotation = Dy;
  a.unaryExpression = zf;
  a.unionTypeAnnotation = By;
  a.updateExpression = Qf;
  a.v8IntrinsicIdentifier = fd;
  a.variableDeclaration = Hf;
  a.variableDeclarator = Zf;
  a.variance = My;
  a.voidTypeAnnotation = wy;
  a.whileStatement = ec;
  a.withStatement = tc;
  a.yieldExpression = vc;
  var y = An();

  function uf(e = []) {
    return (0, y.default)({
      type: "ArrayExpression",
      elements: e
    });
  }

  n(uf, "arrayExpression");

  function lf(e, t, r) {
    return (0, y.default)({
      type: "AssignmentExpression",
      operator: e,
      left: t,
      right: r
    });
  }

  n(lf, "assignmentExpression");

  function pf(e, t, r) {
    return (0, y.default)({
      type: "BinaryExpression",
      operator: e,
      left: t,
      right: r
    });
  }

  n(pf, "binaryExpression");

  function ff(e) {
    return (0, y.default)({
      type: "InterpreterDirective",
      value: e
    });
  }

  n(ff, "interpreterDirective");

  function cf(e) {
    return (0, y.default)({
      type: "Directive",
      value: e
    });
  }

  n(cf, "directive");

  function yf(e) {
    return (0, y.default)({
      type: "DirectiveLiteral",
      value: e
    });
  }

  n(yf, "directiveLiteral");

  function df(e, t = []) {
    return (0, y.default)({
      type: "BlockStatement",
      body: e,
      directives: t
    });
  }

  n(df, "blockStatement");

  function Tf(e = null) {
    return (0, y.default)({
      type: "BreakStatement",
      label: e
    });
  }

  n(Tf, "breakStatement");

  function mf(e, t) {
    return (0, y.default)({
      type: "CallExpression",
      callee: e,
      arguments: t
    });
  }

  n(mf, "callExpression");

  function Sf(e = null, t) {
    return (0, y.default)({
      type: "CatchClause",
      param: e,
      body: t
    });
  }

  n(Sf, "catchClause");

  function Ef(e, t, r) {
    return (0, y.default)({
      type: "ConditionalExpression",
      test: e,
      consequent: t,
      alternate: r
    });
  }

  n(Ef, "conditionalExpression");

  function bf(e = null) {
    return (0, y.default)({
      type: "ContinueStatement",
      label: e
    });
  }

  n(bf, "continueStatement");

  function Pf() {
    return {
      type: "DebuggerStatement"
    };
  }

  n(Pf, "debuggerStatement");

  function Af(e, t) {
    return (0, y.default)({
      type: "DoWhileStatement",
      test: e,
      body: t
    });
  }

  n(Af, "doWhileStatement");

  function xf() {
    return {
      type: "EmptyStatement"
    };
  }

  n(xf, "emptyStatement");

  function Of(e) {
    return (0, y.default)({
      type: "ExpressionStatement",
      expression: e
    });
  }

  n(Of, "expressionStatement");

  function vf(e, t = null, r = null) {
    return (0, y.default)({
      type: "File",
      program: e,
      comments: t,
      tokens: r
    });
  }

  n(vf, "file");

  function gf(e, t, r) {
    return (0, y.default)({
      type: "ForInStatement",
      left: e,
      right: t,
      body: r
    });
  }

  n(gf, "forInStatement");

  function If(e = null, t = null, r = null, p) {
    return (0, y.default)({
      type: "ForStatement",
      init: e,
      test: t,
      update: r,
      body: p
    });
  }

  n(If, "forStatement");

  function Df(e = null, t, r, p = !1, d = !1) {
    return (0, y.default)({
      type: "FunctionDeclaration",
      id: e,
      params: t,
      body: r,
      generator: p,
      async: d
    });
  }

  n(Df, "functionDeclaration");

  function Nf(e = null, t, r, p = !1, d = !1) {
    return (0, y.default)({
      type: "FunctionExpression",
      id: e,
      params: t,
      body: r,
      generator: p,
      async: d
    });
  }

  n(Nf, "functionExpression");

  function _f(e) {
    return (0, y.default)({
      type: "Identifier",
      name: e
    });
  }

  n(_f, "identifier");

  function hf(e, t, r = null) {
    return (0, y.default)({
      type: "IfStatement",
      test: e,
      consequent: t,
      alternate: r
    });
  }

  n(hf, "ifStatement");

  function Lf(e, t) {
    return (0, y.default)({
      type: "LabeledStatement",
      label: e,
      body: t
    });
  }

  n(Lf, "labeledStatement");

  function jf(e) {
    return (0, y.default)({
      type: "StringLiteral",
      value: e
    });
  }

  n(jf, "stringLiteral");

  function xn(e) {
    return (0, y.default)({
      type: "NumericLiteral",
      value: e
    });
  }

  n(xn, "numericLiteral");

  function Cf() {
    return {
      type: "NullLiteral"
    };
  }

  n(Cf, "nullLiteral");

  function Bf(e) {
    return (0, y.default)({
      type: "BooleanLiteral",
      value: e
    });
  }

  n(Bf, "booleanLiteral");

  function On(e, t = "") {
    return (0, y.default)({
      type: "RegExpLiteral",
      pattern: e,
      flags: t
    });
  }

  n(On, "regExpLiteral");

  function Mf(e, t, r) {
    return (0, y.default)({
      type: "LogicalExpression",
      operator: e,
      left: t,
      right: r
    });
  }

  n(Mf, "logicalExpression");

  function wf(e, t, r = !1, p = null) {
    return (0, y.default)({
      type: "MemberExpression",
      object: e,
      property: t,
      computed: r,
      optional: p
    });
  }

  n(wf, "memberExpression");

  function Ff(e, t) {
    return (0, y.default)({
      type: "NewExpression",
      callee: e,
      arguments: t
    });
  }

  n(Ff, "newExpression");

  function Rf(e, t = [], r = "script", p = null) {
    return (0, y.default)({
      type: "Program",
      body: e,
      directives: t,
      sourceType: r,
      interpreter: p,
      sourceFile: null
    });
  }

  n(Rf, "program");

  function Kf(e) {
    return (0, y.default)({
      type: "ObjectExpression",
      properties: e
    });
  }

  n(Kf, "objectExpression");

  function Yf(e = "method", t, r, p, d = !1, m = !1, E = !1) {
    return (0, y.default)({
      type: "ObjectMethod",
      kind: e,
      key: t,
      params: r,
      body: p,
      computed: d,
      generator: m,
      async: E
    });
  }

  n(Yf, "objectMethod");

  function Vf(e, t, r = !1, p = !1, d = null) {
    return (0, y.default)({
      type: "ObjectProperty",
      key: e,
      value: t,
      computed: r,
      shorthand: p,
      decorators: d
    });
  }

  n(Vf, "objectProperty");

  function vn(e) {
    return (0, y.default)({
      type: "RestElement",
      argument: e
    });
  }

  n(vn, "restElement");

  function qf(e = null) {
    return (0, y.default)({
      type: "ReturnStatement",
      argument: e
    });
  }

  n(qf, "returnStatement");

  function kf(e) {
    return (0, y.default)({
      type: "SequenceExpression",
      expressions: e
    });
  }

  n(kf, "sequenceExpression");

  function Xf(e) {
    return (0, y.default)({
      type: "ParenthesizedExpression",
      expression: e
    });
  }

  n(Xf, "parenthesizedExpression");

  function Jf(e = null, t) {
    return (0, y.default)({
      type: "SwitchCase",
      test: e,
      consequent: t
    });
  }

  n(Jf, "switchCase");

  function Uf(e, t) {
    return (0, y.default)({
      type: "SwitchStatement",
      discriminant: e,
      cases: t
    });
  }

  n(Uf, "switchStatement");

  function Wf() {
    return {
      type: "ThisExpression"
    };
  }

  n(Wf, "thisExpression");

  function Gf(e) {
    return (0, y.default)({
      type: "ThrowStatement",
      argument: e
    });
  }

  n(Gf, "throwStatement");

  function $f(e, t = null, r = null) {
    return (0, y.default)({
      type: "TryStatement",
      block: e,
      handler: t,
      finalizer: r
    });
  }

  n($f, "tryStatement");

  function zf(e, t, r = !0) {
    return (0, y.default)({
      type: "UnaryExpression",
      operator: e,
      argument: t,
      prefix: r
    });
  }

  n(zf, "unaryExpression");

  function Qf(e, t, r = !1) {
    return (0, y.default)({
      type: "UpdateExpression",
      operator: e,
      argument: t,
      prefix: r
    });
  }

  n(Qf, "updateExpression");

  function Hf(e, t) {
    return (0, y.default)({
      type: "VariableDeclaration",
      kind: e,
      declarations: t
    });
  }

  n(Hf, "variableDeclaration");

  function Zf(e, t = null) {
    return (0, y.default)({
      type: "VariableDeclarator",
      id: e,
      init: t
    });
  }

  n(Zf, "variableDeclarator");

  function ec(e, t) {
    return (0, y.default)({
      type: "WhileStatement",
      test: e,
      body: t
    });
  }

  n(ec, "whileStatement");

  function tc(e, t) {
    return (0, y.default)({
      type: "WithStatement",
      object: e,
      body: t
    });
  }

  n(tc, "withStatement");

  function rc(e, t) {
    return (0, y.default)({
      type: "AssignmentPattern",
      left: e,
      right: t
    });
  }

  n(rc, "assignmentPattern");

  function nc(e) {
    return (0, y.default)({
      type: "ArrayPattern",
      elements: e
    });
  }

  n(nc, "arrayPattern");

  function ic(e, t, r = !1) {
    return (0, y.default)({
      type: "ArrowFunctionExpression",
      params: e,
      body: t,
      async: r,
      expression: null
    });
  }

  n(ic, "arrowFunctionExpression");

  function ac(e) {
    return (0, y.default)({
      type: "ClassBody",
      body: e
    });
  }

  n(ac, "classBody");

  function sc(e = null, t = null, r, p = null) {
    return (0, y.default)({
      type: "ClassExpression",
      id: e,
      superClass: t,
      body: r,
      decorators: p
    });
  }

  n(sc, "classExpression");

  function oc(e, t = null, r, p = null) {
    return (0, y.default)({
      type: "ClassDeclaration",
      id: e,
      superClass: t,
      body: r,
      decorators: p
    });
  }

  n(oc, "classDeclaration");

  function uc(e) {
    return (0, y.default)({
      type: "ExportAllDeclaration",
      source: e
    });
  }

  n(uc, "exportAllDeclaration");

  function lc(e) {
    return (0, y.default)({
      type: "ExportDefaultDeclaration",
      declaration: e
    });
  }

  n(lc, "exportDefaultDeclaration");

  function pc(e = null, t = [], r = null) {
    return (0, y.default)({
      type: "ExportNamedDeclaration",
      declaration: e,
      specifiers: t,
      source: r
    });
  }

  n(pc, "exportNamedDeclaration");

  function fc(e, t) {
    return (0, y.default)({
      type: "ExportSpecifier",
      local: e,
      exported: t
    });
  }

  n(fc, "exportSpecifier");

  function cc(e, t, r, p = !1) {
    return (0, y.default)({
      type: "ForOfStatement",
      left: e,
      right: t,
      body: r,
      await: p
    });
  }

  n(cc, "forOfStatement");

  function yc(e, t) {
    return (0, y.default)({
      type: "ImportDeclaration",
      specifiers: e,
      source: t
    });
  }

  n(yc, "importDeclaration");

  function dc(e) {
    return (0, y.default)({
      type: "ImportDefaultSpecifier",
      local: e
    });
  }

  n(dc, "importDefaultSpecifier");

  function Tc(e) {
    return (0, y.default)({
      type: "ImportNamespaceSpecifier",
      local: e
    });
  }

  n(Tc, "importNamespaceSpecifier");

  function mc(e, t) {
    return (0, y.default)({
      type: "ImportSpecifier",
      local: e,
      imported: t
    });
  }

  n(mc, "importSpecifier");

  function Sc(e, t) {
    return (0, y.default)({
      type: "MetaProperty",
      meta: e,
      property: t
    });
  }

  n(Sc, "metaProperty");

  function Ec(e = "method", t, r, p, d = !1, m = !1, E = !1, v = !1) {
    return (0, y.default)({
      type: "ClassMethod",
      kind: e,
      key: t,
      params: r,
      body: p,
      computed: d,
      static: m,
      generator: E,
      async: v
    });
  }

  n(Ec, "classMethod");

  function bc(e) {
    return (0, y.default)({
      type: "ObjectPattern",
      properties: e
    });
  }

  n(bc, "objectPattern");

  function gn(e) {
    return (0, y.default)({
      type: "SpreadElement",
      argument: e
    });
  }

  n(gn, "spreadElement");

  function Pc() {
    return {
      type: "Super"
    };
  }

  n(Pc, "_super");

  function Ac(e, t) {
    return (0, y.default)({
      type: "TaggedTemplateExpression",
      tag: e,
      quasi: t
    });
  }

  n(Ac, "taggedTemplateExpression");

  function xc(e, t = !1) {
    return (0, y.default)({
      type: "TemplateElement",
      value: e,
      tail: t
    });
  }

  n(xc, "templateElement");

  function Oc(e, t) {
    return (0, y.default)({
      type: "TemplateLiteral",
      quasis: e,
      expressions: t
    });
  }

  n(Oc, "templateLiteral");

  function vc(e = null, t = !1) {
    return (0, y.default)({
      type: "YieldExpression",
      argument: e,
      delegate: t
    });
  }

  n(vc, "yieldExpression");

  function gc(e) {
    return (0, y.default)({
      type: "AwaitExpression",
      argument: e
    });
  }

  n(gc, "awaitExpression");

  function Ic() {
    return {
      type: "Import"
    };
  }

  n(Ic, "_import");

  function Dc(e) {
    return (0, y.default)({
      type: "BigIntLiteral",
      value: e
    });
  }

  n(Dc, "bigIntLiteral");

  function Nc(e) {
    return (0, y.default)({
      type: "ExportNamespaceSpecifier",
      exported: e
    });
  }

  n(Nc, "exportNamespaceSpecifier");

  function _c(e, t, r = !1, p) {
    return (0, y.default)({
      type: "OptionalMemberExpression",
      object: e,
      property: t,
      computed: r,
      optional: p
    });
  }

  n(_c, "optionalMemberExpression");

  function hc(e, t, r) {
    return (0, y.default)({
      type: "OptionalCallExpression",
      callee: e,
      arguments: t,
      optional: r
    });
  }

  n(hc, "optionalCallExpression");

  function Lc(e, t = null, r = null, p = null, d = !1, m = !1) {
    return (0, y.default)({
      type: "ClassProperty",
      key: e,
      value: t,
      typeAnnotation: r,
      decorators: p,
      computed: d,
      static: m
    });
  }

  n(Lc, "classProperty");

  function jc(e, t = null, r = null, p = null, d = !1, m = !1) {
    return (0, y.default)({
      type: "ClassAccessorProperty",
      key: e,
      value: t,
      typeAnnotation: r,
      decorators: p,
      computed: d,
      static: m
    });
  }

  n(jc, "classAccessorProperty");

  function Cc(e, t = null, r = null, p) {
    return (0, y.default)({
      type: "ClassPrivateProperty",
      key: e,
      value: t,
      decorators: r,
      static: p
    });
  }

  n(Cc, "classPrivateProperty");

  function Bc(e = "method", t, r, p, d = !1) {
    return (0, y.default)({
      type: "ClassPrivateMethod",
      kind: e,
      key: t,
      params: r,
      body: p,
      static: d
    });
  }

  n(Bc, "classPrivateMethod");

  function Mc(e) {
    return (0, y.default)({
      type: "PrivateName",
      id: e
    });
  }

  n(Mc, "privateName");

  function wc(e) {
    return (0, y.default)({
      type: "StaticBlock",
      body: e
    });
  }

  n(wc, "staticBlock");

  function Fc() {
    return {
      type: "AnyTypeAnnotation"
    };
  }

  n(Fc, "anyTypeAnnotation");

  function Rc(e) {
    return (0, y.default)({
      type: "ArrayTypeAnnotation",
      elementType: e
    });
  }

  n(Rc, "arrayTypeAnnotation");

  function Kc() {
    return {
      type: "BooleanTypeAnnotation"
    };
  }

  n(Kc, "booleanTypeAnnotation");

  function Yc(e) {
    return (0, y.default)({
      type: "BooleanLiteralTypeAnnotation",
      value: e
    });
  }

  n(Yc, "booleanLiteralTypeAnnotation");

  function Vc() {
    return {
      type: "NullLiteralTypeAnnotation"
    };
  }

  n(Vc, "nullLiteralTypeAnnotation");

  function qc(e, t = null) {
    return (0, y.default)({
      type: "ClassImplements",
      id: e,
      typeParameters: t
    });
  }

  n(qc, "classImplements");

  function kc(e, t = null, r = null, p) {
    return (0, y.default)({
      type: "DeclareClass",
      id: e,
      typeParameters: t,
      extends: r,
      body: p
    });
  }

  n(kc, "declareClass");

  function Xc(e) {
    return (0, y.default)({
      type: "DeclareFunction",
      id: e
    });
  }

  n(Xc, "declareFunction");

  function Jc(e, t = null, r = null, p) {
    return (0, y.default)({
      type: "DeclareInterface",
      id: e,
      typeParameters: t,
      extends: r,
      body: p
    });
  }

  n(Jc, "declareInterface");

  function Uc(e, t, r = null) {
    return (0, y.default)({
      type: "DeclareModule",
      id: e,
      body: t,
      kind: r
    });
  }

  n(Uc, "declareModule");

  function Wc(e) {
    return (0, y.default)({
      type: "DeclareModuleExports",
      typeAnnotation: e
    });
  }

  n(Wc, "declareModuleExports");

  function Gc(e, t = null, r) {
    return (0, y.default)({
      type: "DeclareTypeAlias",
      id: e,
      typeParameters: t,
      right: r
    });
  }

  n(Gc, "declareTypeAlias");

  function $c(e, t = null, r = null) {
    return (0, y.default)({
      type: "DeclareOpaqueType",
      id: e,
      typeParameters: t,
      supertype: r
    });
  }

  n($c, "declareOpaqueType");

  function zc(e) {
    return (0, y.default)({
      type: "DeclareVariable",
      id: e
    });
  }

  n(zc, "declareVariable");

  function Qc(e = null, t = null, r = null) {
    return (0, y.default)({
      type: "DeclareExportDeclaration",
      declaration: e,
      specifiers: t,
      source: r
    });
  }

  n(Qc, "declareExportDeclaration");

  function Hc(e) {
    return (0, y.default)({
      type: "DeclareExportAllDeclaration",
      source: e
    });
  }

  n(Hc, "declareExportAllDeclaration");

  function Zc(e) {
    return (0, y.default)({
      type: "DeclaredPredicate",
      value: e
    });
  }

  n(Zc, "declaredPredicate");

  function ey() {
    return {
      type: "ExistsTypeAnnotation"
    };
  }

  n(ey, "existsTypeAnnotation");

  function ty(e = null, t, r = null, p) {
    return (0, y.default)({
      type: "FunctionTypeAnnotation",
      typeParameters: e,
      params: t,
      rest: r,
      returnType: p
    });
  }

  n(ty, "functionTypeAnnotation");

  function ry(e = null, t) {
    return (0, y.default)({
      type: "FunctionTypeParam",
      name: e,
      typeAnnotation: t
    });
  }

  n(ry, "functionTypeParam");

  function ny(e, t = null) {
    return (0, y.default)({
      type: "GenericTypeAnnotation",
      id: e,
      typeParameters: t
    });
  }

  n(ny, "genericTypeAnnotation");

  function iy() {
    return {
      type: "InferredPredicate"
    };
  }

  n(iy, "inferredPredicate");

  function ay(e, t = null) {
    return (0, y.default)({
      type: "InterfaceExtends",
      id: e,
      typeParameters: t
    });
  }

  n(ay, "interfaceExtends");

  function sy(e, t = null, r = null, p) {
    return (0, y.default)({
      type: "InterfaceDeclaration",
      id: e,
      typeParameters: t,
      extends: r,
      body: p
    });
  }

  n(sy, "interfaceDeclaration");

  function oy(e = null, t) {
    return (0, y.default)({
      type: "InterfaceTypeAnnotation",
      extends: e,
      body: t
    });
  }

  n(oy, "interfaceTypeAnnotation");

  function uy(e) {
    return (0, y.default)({
      type: "IntersectionTypeAnnotation",
      types: e
    });
  }

  n(uy, "intersectionTypeAnnotation");

  function ly() {
    return {
      type: "MixedTypeAnnotation"
    };
  }

  n(ly, "mixedTypeAnnotation");

  function py() {
    return {
      type: "EmptyTypeAnnotation"
    };
  }

  n(py, "emptyTypeAnnotation");

  function fy(e) {
    return (0, y.default)({
      type: "NullableTypeAnnotation",
      typeAnnotation: e
    });
  }

  n(fy, "nullableTypeAnnotation");

  function cy(e) {
    return (0, y.default)({
      type: "NumberLiteralTypeAnnotation",
      value: e
    });
  }

  n(cy, "numberLiteralTypeAnnotation");

  function yy() {
    return {
      type: "NumberTypeAnnotation"
    };
  }

  n(yy, "numberTypeAnnotation");

  function dy(e, t = [], r = [], p = [], d = !1) {
    return (0, y.default)({
      type: "ObjectTypeAnnotation",
      properties: e,
      indexers: t,
      callProperties: r,
      internalSlots: p,
      exact: d
    });
  }

  n(dy, "objectTypeAnnotation");

  function Ty(e, t, r, p, d) {
    return (0, y.default)({
      type: "ObjectTypeInternalSlot",
      id: e,
      value: t,
      optional: r,
      static: p,
      method: d
    });
  }

  n(Ty, "objectTypeInternalSlot");

  function my(e) {
    return (0, y.default)({
      type: "ObjectTypeCallProperty",
      value: e,
      static: null
    });
  }

  n(my, "objectTypeCallProperty");

  function Sy(e = null, t, r, p = null) {
    return (0, y.default)({
      type: "ObjectTypeIndexer",
      id: e,
      key: t,
      value: r,
      variance: p,
      static: null
    });
  }

  n(Sy, "objectTypeIndexer");

  function Ey(e, t, r = null) {
    return (0, y.default)({
      type: "ObjectTypeProperty",
      key: e,
      value: t,
      variance: r,
      kind: null,
      method: null,
      optional: null,
      proto: null,
      static: null
    });
  }

  n(Ey, "objectTypeProperty");

  function by(e) {
    return (0, y.default)({
      type: "ObjectTypeSpreadProperty",
      argument: e
    });
  }

  n(by, "objectTypeSpreadProperty");

  function Py(e, t = null, r = null, p) {
    return (0, y.default)({
      type: "OpaqueType",
      id: e,
      typeParameters: t,
      supertype: r,
      impltype: p
    });
  }

  n(Py, "opaqueType");

  function Ay(e, t) {
    return (0, y.default)({
      type: "QualifiedTypeIdentifier",
      id: e,
      qualification: t
    });
  }

  n(Ay, "qualifiedTypeIdentifier");

  function xy(e) {
    return (0, y.default)({
      type: "StringLiteralTypeAnnotation",
      value: e
    });
  }

  n(xy, "stringLiteralTypeAnnotation");

  function Oy() {
    return {
      type: "StringTypeAnnotation"
    };
  }

  n(Oy, "stringTypeAnnotation");

  function vy() {
    return {
      type: "SymbolTypeAnnotation"
    };
  }

  n(vy, "symbolTypeAnnotation");

  function gy() {
    return {
      type: "ThisTypeAnnotation"
    };
  }

  n(gy, "thisTypeAnnotation");

  function Iy(e) {
    return (0, y.default)({
      type: "TupleTypeAnnotation",
      types: e
    });
  }

  n(Iy, "tupleTypeAnnotation");

  function Dy(e) {
    return (0, y.default)({
      type: "TypeofTypeAnnotation",
      argument: e
    });
  }

  n(Dy, "typeofTypeAnnotation");

  function Ny(e, t = null, r) {
    return (0, y.default)({
      type: "TypeAlias",
      id: e,
      typeParameters: t,
      right: r
    });
  }

  n(Ny, "typeAlias");

  function _y(e) {
    return (0, y.default)({
      type: "TypeAnnotation",
      typeAnnotation: e
    });
  }

  n(_y, "typeAnnotation");

  function hy(e, t) {
    return (0, y.default)({
      type: "TypeCastExpression",
      expression: e,
      typeAnnotation: t
    });
  }

  n(hy, "typeCastExpression");

  function Ly(e = null, t = null, r = null) {
    return (0, y.default)({
      type: "TypeParameter",
      bound: e,
      default: t,
      variance: r,
      name: null
    });
  }

  n(Ly, "typeParameter");

  function jy(e) {
    return (0, y.default)({
      type: "TypeParameterDeclaration",
      params: e
    });
  }

  n(jy, "typeParameterDeclaration");

  function Cy(e) {
    return (0, y.default)({
      type: "TypeParameterInstantiation",
      params: e
    });
  }

  n(Cy, "typeParameterInstantiation");

  function By(e) {
    return (0, y.default)({
      type: "UnionTypeAnnotation",
      types: e
    });
  }

  n(By, "unionTypeAnnotation");

  function My(e) {
    return (0, y.default)({
      type: "Variance",
      kind: e
    });
  }

  n(My, "variance");

  function wy() {
    return {
      type: "VoidTypeAnnotation"
    };
  }

  n(wy, "voidTypeAnnotation");

  function Fy(e, t) {
    return (0, y.default)({
      type: "EnumDeclaration",
      id: e,
      body: t
    });
  }

  n(Fy, "enumDeclaration");

  function Ry(e) {
    return (0, y.default)({
      type: "EnumBooleanBody",
      members: e,
      explicitType: null,
      hasUnknownMembers: null
    });
  }

  n(Ry, "enumBooleanBody");

  function Ky(e) {
    return (0, y.default)({
      type: "EnumNumberBody",
      members: e,
      explicitType: null,
      hasUnknownMembers: null
    });
  }

  n(Ky, "enumNumberBody");

  function Yy(e) {
    return (0, y.default)({
      type: "EnumStringBody",
      members: e,
      explicitType: null,
      hasUnknownMembers: null
    });
  }

  n(Yy, "enumStringBody");

  function Vy(e) {
    return (0, y.default)({
      type: "EnumSymbolBody",
      members: e,
      hasUnknownMembers: null
    });
  }

  n(Vy, "enumSymbolBody");

  function qy(e) {
    return (0, y.default)({
      type: "EnumBooleanMember",
      id: e,
      init: null
    });
  }

  n(qy, "enumBooleanMember");

  function ky(e, t) {
    return (0, y.default)({
      type: "EnumNumberMember",
      id: e,
      init: t
    });
  }

  n(ky, "enumNumberMember");

  function Xy(e, t) {
    return (0, y.default)({
      type: "EnumStringMember",
      id: e,
      init: t
    });
  }

  n(Xy, "enumStringMember");

  function Jy(e) {
    return (0, y.default)({
      type: "EnumDefaultedMember",
      id: e
    });
  }

  n(Jy, "enumDefaultedMember");

  function Uy(e, t) {
    return (0, y.default)({
      type: "IndexedAccessType",
      objectType: e,
      indexType: t
    });
  }

  n(Uy, "indexedAccessType");

  function Wy(e, t) {
    return (0, y.default)({
      type: "OptionalIndexedAccessType",
      objectType: e,
      indexType: t,
      optional: null
    });
  }

  n(Wy, "optionalIndexedAccessType");

  function Gy(e, t = null) {
    return (0, y.default)({
      type: "JSXAttribute",
      name: e,
      value: t
    });
  }

  n(Gy, "jsxAttribute");

  function $y(e) {
    return (0, y.default)({
      type: "JSXClosingElement",
      name: e
    });
  }

  n($y, "jsxClosingElement");

  function zy(e, t = null, r, p = null) {
    return (0, y.default)({
      type: "JSXElement",
      openingElement: e,
      closingElement: t,
      children: r,
      selfClosing: p
    });
  }

  n(zy, "jsxElement");

  function Qy() {
    return {
      type: "JSXEmptyExpression"
    };
  }

  n(Qy, "jsxEmptyExpression");

  function Hy(e) {
    return (0, y.default)({
      type: "JSXExpressionContainer",
      expression: e
    });
  }

  n(Hy, "jsxExpressionContainer");

  function Zy(e) {
    return (0, y.default)({
      type: "JSXSpreadChild",
      expression: e
    });
  }

  n(Zy, "jsxSpreadChild");

  function ed(e) {
    return (0, y.default)({
      type: "JSXIdentifier",
      name: e
    });
  }

  n(ed, "jsxIdentifier");

  function td(e, t) {
    return (0, y.default)({
      type: "JSXMemberExpression",
      object: e,
      property: t
    });
  }

  n(td, "jsxMemberExpression");

  function rd(e, t) {
    return (0, y.default)({
      type: "JSXNamespacedName",
      namespace: e,
      name: t
    });
  }

  n(rd, "jsxNamespacedName");

  function nd(e, t, r = !1) {
    return (0, y.default)({
      type: "JSXOpeningElement",
      name: e,
      attributes: t,
      selfClosing: r
    });
  }

  n(nd, "jsxOpeningElement");

  function id(e) {
    return (0, y.default)({
      type: "JSXSpreadAttribute",
      argument: e
    });
  }

  n(id, "jsxSpreadAttribute");

  function ad(e) {
    return (0, y.default)({
      type: "JSXText",
      value: e
    });
  }

  n(ad, "jsxText");

  function sd(e, t, r) {
    return (0, y.default)({
      type: "JSXFragment",
      openingFragment: e,
      closingFragment: t,
      children: r
    });
  }

  n(sd, "jsxFragment");

  function od() {
    return {
      type: "JSXOpeningFragment"
    };
  }

  n(od, "jsxOpeningFragment");

  function ud() {
    return {
      type: "JSXClosingFragment"
    };
  }

  n(ud, "jsxClosingFragment");

  function ld() {
    return {
      type: "Noop"
    };
  }

  n(ld, "noop");

  function pd(e, t) {
    return (0, y.default)({
      type: "Placeholder",
      expectedNode: e,
      name: t
    });
  }

  n(pd, "placeholder");

  function fd(e) {
    return (0, y.default)({
      type: "V8IntrinsicIdentifier",
      name: e
    });
  }

  n(fd, "v8IntrinsicIdentifier");

  function cd() {
    return {
      type: "ArgumentPlaceholder"
    };
  }

  n(cd, "argumentPlaceholder");

  function yd(e, t) {
    return (0, y.default)({
      type: "BindExpression",
      object: e,
      callee: t
    });
  }

  n(yd, "bindExpression");

  function dd(e, t) {
    return (0, y.default)({
      type: "ImportAttribute",
      key: e,
      value: t
    });
  }

  n(dd, "importAttribute");

  function Td(e) {
    return (0, y.default)({
      type: "Decorator",
      expression: e
    });
  }

  n(Td, "decorator");

  function md(e, t = !1) {
    return (0, y.default)({
      type: "DoExpression",
      body: e,
      async: t
    });
  }

  n(md, "doExpression");

  function Sd(e) {
    return (0, y.default)({
      type: "ExportDefaultSpecifier",
      exported: e
    });
  }

  n(Sd, "exportDefaultSpecifier");

  function Ed(e) {
    return (0, y.default)({
      type: "RecordExpression",
      properties: e
    });
  }

  n(Ed, "recordExpression");

  function bd(e = []) {
    return (0, y.default)({
      type: "TupleExpression",
      elements: e
    });
  }

  n(bd, "tupleExpression");

  function Pd(e) {
    return (0, y.default)({
      type: "DecimalLiteral",
      value: e
    });
  }

  n(Pd, "decimalLiteral");

  function Ad(e) {
    return (0, y.default)({
      type: "ModuleExpression",
      body: e
    });
  }

  n(Ad, "moduleExpression");

  function xd() {
    return {
      type: "TopicReference"
    };
  }

  n(xd, "topicReference");

  function Od(e) {
    return (0, y.default)({
      type: "PipelineTopicExpression",
      expression: e
    });
  }

  n(Od, "pipelineTopicExpression");

  function vd(e) {
    return (0, y.default)({
      type: "PipelineBareFunction",
      callee: e
    });
  }

  n(vd, "pipelineBareFunction");

  function gd() {
    return {
      type: "PipelinePrimaryTopicReference"
    };
  }

  n(gd, "pipelinePrimaryTopicReference");

  function Id(e) {
    return (0, y.default)({
      type: "TSParameterProperty",
      parameter: e
    });
  }

  n(Id, "tsParameterProperty");

  function Dd(e = null, t = null, r, p = null) {
    return (0, y.default)({
      type: "TSDeclareFunction",
      id: e,
      typeParameters: t,
      params: r,
      returnType: p
    });
  }

  n(Dd, "tsDeclareFunction");

  function Nd(e = null, t, r = null, p, d = null) {
    return (0, y.default)({
      type: "TSDeclareMethod",
      decorators: e,
      key: t,
      typeParameters: r,
      params: p,
      returnType: d
    });
  }

  n(Nd, "tsDeclareMethod");

  function _d(e, t) {
    return (0, y.default)({
      type: "TSQualifiedName",
      left: e,
      right: t
    });
  }

  n(_d, "tsQualifiedName");

  function hd(e = null, t, r = null) {
    return (0, y.default)({
      type: "TSCallSignatureDeclaration",
      typeParameters: e,
      parameters: t,
      typeAnnotation: r
    });
  }

  n(hd, "tsCallSignatureDeclaration");

  function Ld(e = null, t, r = null) {
    return (0, y.default)({
      type: "TSConstructSignatureDeclaration",
      typeParameters: e,
      parameters: t,
      typeAnnotation: r
    });
  }

  n(Ld, "tsConstructSignatureDeclaration");

  function jd(e, t = null, r = null) {
    return (0, y.default)({
      type: "TSPropertySignature",
      key: e,
      typeAnnotation: t,
      initializer: r,
      kind: null
    });
  }

  n(jd, "tsPropertySignature");

  function Cd(e, t = null, r, p = null) {
    return (0, y.default)({
      type: "TSMethodSignature",
      key: e,
      typeParameters: t,
      parameters: r,
      typeAnnotation: p,
      kind: null
    });
  }

  n(Cd, "tsMethodSignature");

  function Bd(e, t = null) {
    return (0, y.default)({
      type: "TSIndexSignature",
      parameters: e,
      typeAnnotation: t
    });
  }

  n(Bd, "tsIndexSignature");

  function Md() {
    return {
      type: "TSAnyKeyword"
    };
  }

  n(Md, "tsAnyKeyword");

  function wd() {
    return {
      type: "TSBooleanKeyword"
    };
  }

  n(wd, "tsBooleanKeyword");

  function Fd() {
    return {
      type: "TSBigIntKeyword"
    };
  }

  n(Fd, "tsBigIntKeyword");

  function Rd() {
    return {
      type: "TSIntrinsicKeyword"
    };
  }

  n(Rd, "tsIntrinsicKeyword");

  function Kd() {
    return {
      type: "TSNeverKeyword"
    };
  }

  n(Kd, "tsNeverKeyword");

  function Yd() {
    return {
      type: "TSNullKeyword"
    };
  }

  n(Yd, "tsNullKeyword");

  function Vd() {
    return {
      type: "TSNumberKeyword"
    };
  }

  n(Vd, "tsNumberKeyword");

  function qd() {
    return {
      type: "TSObjectKeyword"
    };
  }

  n(qd, "tsObjectKeyword");

  function kd() {
    return {
      type: "TSStringKeyword"
    };
  }

  n(kd, "tsStringKeyword");

  function Xd() {
    return {
      type: "TSSymbolKeyword"
    };
  }

  n(Xd, "tsSymbolKeyword");

  function Jd() {
    return {
      type: "TSUndefinedKeyword"
    };
  }

  n(Jd, "tsUndefinedKeyword");

  function Ud() {
    return {
      type: "TSUnknownKeyword"
    };
  }

  n(Ud, "tsUnknownKeyword");

  function Wd() {
    return {
      type: "TSVoidKeyword"
    };
  }

  n(Wd, "tsVoidKeyword");

  function Gd() {
    return {
      type: "TSThisType"
    };
  }

  n(Gd, "tsThisType");

  function $d(e = null, t, r = null) {
    return (0, y.default)({
      type: "TSFunctionType",
      typeParameters: e,
      parameters: t,
      typeAnnotation: r
    });
  }

  n($d, "tsFunctionType");

  function zd(e = null, t, r = null) {
    return (0, y.default)({
      type: "TSConstructorType",
      typeParameters: e,
      parameters: t,
      typeAnnotation: r
    });
  }

  n(zd, "tsConstructorType");

  function Qd(e, t = null) {
    return (0, y.default)({
      type: "TSTypeReference",
      typeName: e,
      typeParameters: t
    });
  }

  n(Qd, "tsTypeReference");

  function Hd(e, t = null, r = null) {
    return (0, y.default)({
      type: "TSTypePredicate",
      parameterName: e,
      typeAnnotation: t,
      asserts: r
    });
  }

  n(Hd, "tsTypePredicate");

  function Zd(e, t = null) {
    return (0, y.default)({
      type: "TSTypeQuery",
      exprName: e,
      typeParameters: t
    });
  }

  n(Zd, "tsTypeQuery");

  function eT(e) {
    return (0, y.default)({
      type: "TSTypeLiteral",
      members: e
    });
  }

  n(eT, "tsTypeLiteral");

  function tT(e) {
    return (0, y.default)({
      type: "TSArrayType",
      elementType: e
    });
  }

  n(tT, "tsArrayType");

  function rT(e) {
    return (0, y.default)({
      type: "TSTupleType",
      elementTypes: e
    });
  }

  n(rT, "tsTupleType");

  function nT(e) {
    return (0, y.default)({
      type: "TSOptionalType",
      typeAnnotation: e
    });
  }

  n(nT, "tsOptionalType");

  function iT(e) {
    return (0, y.default)({
      type: "TSRestType",
      typeAnnotation: e
    });
  }

  n(iT, "tsRestType");

  function aT(e, t, r = !1) {
    return (0, y.default)({
      type: "TSNamedTupleMember",
      label: e,
      elementType: t,
      optional: r
    });
  }

  n(aT, "tsNamedTupleMember");

  function sT(e) {
    return (0, y.default)({
      type: "TSUnionType",
      types: e
    });
  }

  n(sT, "tsUnionType");

  function oT(e) {
    return (0, y.default)({
      type: "TSIntersectionType",
      types: e
    });
  }

  n(oT, "tsIntersectionType");

  function uT(e, t, r, p) {
    return (0, y.default)({
      type: "TSConditionalType",
      checkType: e,
      extendsType: t,
      trueType: r,
      falseType: p
    });
  }

  n(uT, "tsConditionalType");

  function lT(e) {
    return (0, y.default)({
      type: "TSInferType",
      typeParameter: e
    });
  }

  n(lT, "tsInferType");

  function pT(e) {
    return (0, y.default)({
      type: "TSParenthesizedType",
      typeAnnotation: e
    });
  }

  n(pT, "tsParenthesizedType");

  function fT(e) {
    return (0, y.default)({
      type: "TSTypeOperator",
      typeAnnotation: e,
      operator: null
    });
  }

  n(fT, "tsTypeOperator");

  function cT(e, t) {
    return (0, y.default)({
      type: "TSIndexedAccessType",
      objectType: e,
      indexType: t
    });
  }

  n(cT, "tsIndexedAccessType");

  function yT(e, t = null, r = null) {
    return (0, y.default)({
      type: "TSMappedType",
      typeParameter: e,
      typeAnnotation: t,
      nameType: r
    });
  }

  n(yT, "tsMappedType");

  function dT(e) {
    return (0, y.default)({
      type: "TSLiteralType",
      literal: e
    });
  }

  n(dT, "tsLiteralType");

  function TT(e, t = null) {
    return (0, y.default)({
      type: "TSExpressionWithTypeArguments",
      expression: e,
      typeParameters: t
    });
  }

  n(TT, "tsExpressionWithTypeArguments");

  function mT(e, t = null, r = null, p) {
    return (0, y.default)({
      type: "TSInterfaceDeclaration",
      id: e,
      typeParameters: t,
      extends: r,
      body: p
    });
  }

  n(mT, "tsInterfaceDeclaration");

  function ST(e) {
    return (0, y.default)({
      type: "TSInterfaceBody",
      body: e
    });
  }

  n(ST, "tsInterfaceBody");

  function ET(e, t = null, r) {
    return (0, y.default)({
      type: "TSTypeAliasDeclaration",
      id: e,
      typeParameters: t,
      typeAnnotation: r
    });
  }

  n(ET, "tsTypeAliasDeclaration");

  function bT(e, t = null) {
    return (0, y.default)({
      type: "TSInstantiationExpression",
      expression: e,
      typeParameters: t
    });
  }

  n(bT, "tsInstantiationExpression");

  function PT(e, t) {
    return (0, y.default)({
      type: "TSAsExpression",
      expression: e,
      typeAnnotation: t
    });
  }

  n(PT, "tsAsExpression");

  function AT(e, t) {
    return (0, y.default)({
      type: "TSTypeAssertion",
      typeAnnotation: e,
      expression: t
    });
  }

  n(AT, "tsTypeAssertion");

  function xT(e, t) {
    return (0, y.default)({
      type: "TSEnumDeclaration",
      id: e,
      members: t
    });
  }

  n(xT, "tsEnumDeclaration");

  function OT(e, t = null) {
    return (0, y.default)({
      type: "TSEnumMember",
      id: e,
      initializer: t
    });
  }

  n(OT, "tsEnumMember");

  function vT(e, t) {
    return (0, y.default)({
      type: "TSModuleDeclaration",
      id: e,
      body: t
    });
  }

  n(vT, "tsModuleDeclaration");

  function gT(e) {
    return (0, y.default)({
      type: "TSModuleBlock",
      body: e
    });
  }

  n(gT, "tsModuleBlock");

  function IT(e, t = null, r = null) {
    return (0, y.default)({
      type: "TSImportType",
      argument: e,
      qualifier: t,
      typeParameters: r
    });
  }

  n(IT, "tsImportType");

  function DT(e, t) {
    return (0, y.default)({
      type: "TSImportEqualsDeclaration",
      id: e,
      moduleReference: t,
      isExport: null
    });
  }

  n(DT, "tsImportEqualsDeclaration");

  function NT(e) {
    return (0, y.default)({
      type: "TSExternalModuleReference",
      expression: e
    });
  }

  n(NT, "tsExternalModuleReference");

  function _T(e) {
    return (0, y.default)({
      type: "TSNonNullExpression",
      expression: e
    });
  }

  n(_T, "tsNonNullExpression");

  function hT(e) {
    return (0, y.default)({
      type: "TSExportAssignment",
      expression: e
    });
  }

  n(hT, "tsExportAssignment");

  function LT(e) {
    return (0, y.default)({
      type: "TSNamespaceExportDeclaration",
      id: e
    });
  }

  n(LT, "tsNamespaceExportDeclaration");

  function jT(e) {
    return (0, y.default)({
      type: "TSTypeAnnotation",
      typeAnnotation: e
    });
  }

  n(jT, "tsTypeAnnotation");

  function CT(e) {
    return (0, y.default)({
      type: "TSTypeParameterInstantiation",
      params: e
    });
  }

  n(CT, "tsTypeParameterInstantiation");

  function BT(e) {
    return (0, y.default)({
      type: "TSTypeParameterDeclaration",
      params: e
    });
  }

  n(BT, "tsTypeParameterDeclaration");

  function MT(e = null, t = null, r) {
    return (0, y.default)({
      type: "TSTypeParameter",
      constraint: e,
      default: t,
      name: r
    });
  }

  n(MT, "tsTypeParameter");

  function wT(e) {
    return console.trace("The node type NumberLiteral has been renamed to NumericLiteral"), xn(e);
  }

  n(wT, "NumberLiteral");

  function FT(e, t = "") {
    return console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"), On(e, t);
  }

  n(FT, "RegexLiteral");

  function RT(e) {
    return console.trace("The node type RestProperty has been renamed to RestElement"), vn(e);
  }

  n(RT, "RestProperty");

  function KT(e) {
    return console.trace("The node type SpreadProperty has been renamed to SpreadElement"), gn(e);
  }

  n(KT, "SpreadProperty");
});
var In = x(pt => {
  "use strict";

  Object.defineProperty(pt, "__esModule", {
    value: !0
  });
  pt.default = VT;
  var YT = q();

  function VT(e, t) {
    let r = e.value.split(/\r\n|\n|\r/),
        p = 0;

    for (let m = 0; m < r.length; m++) r[m].match(/[^ \t]/) && (p = m);

    let d = "";

    for (let m = 0; m < r.length; m++) {
      let E = r[m],
          v = m === 0,
          N = m === r.length - 1,
          j = m === p,
          K = E.replace(/\t/g, " ");
      v || (K = K.replace(/^[ ]+/, "")), N || (K = K.replace(/[ ]+$/, "")), K && (j || (K += " "), d += K);
    }

    d && t.push((0, YT.stringLiteral)(d));
  }

  n(VT, "cleanJSXElementLiteralChild");
});
var Dn = x(ct => {
  "use strict";

  Object.defineProperty(ct, "__esModule", {
    value: !0
  });
  ct.default = kT;
  var ft = C(),
      qT = In();

  function kT(e) {
    let t = [];

    for (let r = 0; r < e.children.length; r++) {
      let p = e.children[r];

      if ((0, ft.isJSXText)(p)) {
        (0, qT.default)(p, t);
        continue;
      }

      (0, ft.isJSXExpressionContainer)(p) && (p = p.expression), !(0, ft.isJSXEmptyExpression)(p) && t.push(p);
    }

    return t;
  }

  n(kT, "buildChildren");
});
var dt = x(yt => {
  "use strict";

  Object.defineProperty(yt, "__esModule", {
    value: !0
  });
  yt.default = JT;
  var XT = k();

  function JT(e) {
    return !!(e && XT.VISITOR_KEYS[e.type]);
  }

  n(JT, "isNode");
});
var Nn = x(Tt => {
  "use strict";

  Object.defineProperty(Tt, "__esModule", {
    value: !0
  });
  Tt.default = WT;
  var UT = dt();

  function WT(e) {
    if (!(0, UT.default)(e)) {
      var t;
      let r = (t = e?.type) != null ? t : JSON.stringify(e);
      throw new TypeError(`Not a valid node of type "${r}"`);
    }
  }

  n(WT, "assertNode");
});

var _n = x(o => {
  "use strict";

  Object.defineProperty(o, "__esModule", {
    value: !0
  });
  o.assertAccessor = oA;
  o.assertAnyTypeAnnotation = NS;
  o.assertArgumentPlaceholder = nb;
  o.assertArrayExpression = $T;
  o.assertArrayPattern = Wm;
  o.assertArrayTypeAnnotation = _S;
  o.assertArrowFunctionExpression = Gm;
  o.assertAssignmentExpression = zT;
  o.assertAssignmentPattern = Um;
  o.assertAwaitExpression = mS;
  o.assertBigIntLiteral = ES;
  o.assertBinary = _P;
  o.assertBinaryExpression = QT;
  o.assertBindExpression = ib;
  o.assertBlock = jP;
  o.assertBlockParent = LP;
  o.assertBlockStatement = tm;
  o.assertBooleanLiteral = xm;
  o.assertBooleanLiteralTypeAnnotation = LS;
  o.assertBooleanTypeAnnotation = hS;
  o.assertBreakStatement = rm;
  o.assertCallExpression = nm;
  o.assertCatchClause = im;
  o.assertClass = nA;
  o.assertClassAccessorProperty = OS;
  o.assertClassBody = $m;
  o.assertClassDeclaration = Qm;
  o.assertClassExpression = zm;
  o.assertClassImplements = CS;
  o.assertClassMethod = uS;
  o.assertClassPrivateMethod = gS;
  o.assertClassPrivateProperty = vS;
  o.assertClassProperty = xS;
  o.assertCompletionStatement = MP;
  o.assertConditional = wP;
  o.assertConditionalExpression = am;
  o.assertContinueStatement = sm;
  o.assertDebuggerStatement = om;
  o.assertDecimalLiteral = fb;
  o.assertDeclaration = JP;
  o.assertDeclareClass = BS;
  o.assertDeclareExportAllDeclaration = kS;
  o.assertDeclareExportDeclaration = qS;
  o.assertDeclareFunction = MS;
  o.assertDeclareInterface = wS;
  o.assertDeclareModule = FS;
  o.assertDeclareModuleExports = RS;
  o.assertDeclareOpaqueType = YS;
  o.assertDeclareTypeAlias = KS;
  o.assertDeclareVariable = VS;
  o.assertDeclaredPredicate = XS;
  o.assertDecorator = sb;
  o.assertDirective = ZT;
  o.assertDirectiveLiteral = em;
  o.assertDoExpression = ob;
  o.assertDoWhileStatement = um;
  o.assertEmptyStatement = lm;
  o.assertEmptyTypeAnnotation = tE;
  o.assertEnumBody = dA;
  o.assertEnumBooleanBody = _E;
  o.assertEnumBooleanMember = CE;
  o.assertEnumDeclaration = NE;
  o.assertEnumDefaultedMember = wE;
  o.assertEnumMember = TA;
  o.assertEnumNumberBody = hE;
  o.assertEnumNumberMember = BE;
  o.assertEnumStringBody = LE;
  o.assertEnumStringMember = ME;
  o.assertEnumSymbolBody = jE;
  o.assertExistsTypeAnnotation = JS;
  o.assertExportAllDeclaration = Hm;
  o.assertExportDeclaration = aA;
  o.assertExportDefaultDeclaration = Zm;
  o.assertExportDefaultSpecifier = ub;
  o.assertExportNamedDeclaration = eS;
  o.assertExportNamespaceSpecifier = bS;
  o.assertExportSpecifier = tS;
  o.assertExpression = NP;
  o.assertExpressionStatement = pm;
  o.assertExpressionWrapper = KP;
  o.assertFile = fm;
  o.assertFlow = lA;
  o.assertFlowBaseAnnotation = fA;
  o.assertFlowDeclaration = cA;
  o.assertFlowPredicate = yA;
  o.assertFlowType = pA;
  o.assertFor = YP;
  o.assertForInStatement = cm;
  o.assertForOfStatement = rS;
  o.assertForStatement = ym;
  o.assertForXStatement = VP;
  o.assertFunction = qP;
  o.assertFunctionDeclaration = dm;
  o.assertFunctionExpression = Tm;
  o.assertFunctionParent = kP;
  o.assertFunctionTypeAnnotation = US;
  o.assertFunctionTypeParam = WS;
  o.assertGenericTypeAnnotation = GS;
  o.assertIdentifier = mm;
  o.assertIfStatement = Sm;
  o.assertImmutable = zP;
  o.assertImport = SS;
  o.assertImportAttribute = ab;
  o.assertImportDeclaration = nS;
  o.assertImportDefaultSpecifier = iS;
  o.assertImportNamespaceSpecifier = aS;
  o.assertImportSpecifier = sS;
  o.assertIndexedAccessType = FE;
  o.assertInferredPredicate = $S;
  o.assertInterfaceDeclaration = QS;
  o.assertInterfaceExtends = zS;
  o.assertInterfaceTypeAnnotation = HS;
  o.assertInterpreterDirective = HT;
  o.assertIntersectionTypeAnnotation = ZS;
  o.assertJSX = mA;
  o.assertJSXAttribute = KE;
  o.assertJSXClosingElement = YE;
  o.assertJSXClosingFragment = ZE;
  o.assertJSXElement = VE;
  o.assertJSXEmptyExpression = qE;
  o.assertJSXExpressionContainer = kE;
  o.assertJSXFragment = QE;
  o.assertJSXIdentifier = JE;
  o.assertJSXMemberExpression = UE;
  o.assertJSXNamespacedName = WE;
  o.assertJSXOpeningElement = GE;
  o.assertJSXOpeningFragment = HE;
  o.assertJSXSpreadAttribute = $E;
  o.assertJSXSpreadChild = XE;
  o.assertJSXText = zE;
  o.assertLVal = WP;
  o.assertLabeledStatement = Em;
  o.assertLiteral = $P;
  o.assertLogicalExpression = vm;
  o.assertLoop = FP;
  o.assertMemberExpression = gm;
  o.assertMetaProperty = oS;
  o.assertMethod = HP;
  o.assertMiscellaneous = SA;
  o.assertMixedTypeAnnotation = eE;
  o.assertModuleDeclaration = iA;
  o.assertModuleExpression = cb;
  o.assertModuleSpecifier = sA;
  o.assertNewExpression = Im;
  o.assertNoop = eb;
  o.assertNullLiteral = Am;
  o.assertNullLiteralTypeAnnotation = jS;
  o.assertNullableTypeAnnotation = rE;
  o.assertNumberLiteral = xA;
  o.assertNumberLiteralTypeAnnotation = nE;
  o.assertNumberTypeAnnotation = iE;
  o.assertNumericLiteral = Pm;
  o.assertObjectExpression = Nm;
  o.assertObjectMember = ZP;
  o.assertObjectMethod = _m;
  o.assertObjectPattern = lS;
  o.assertObjectProperty = hm;
  o.assertObjectTypeAnnotation = aE;
  o.assertObjectTypeCallProperty = oE;
  o.assertObjectTypeIndexer = uE;
  o.assertObjectTypeInternalSlot = sE;
  o.assertObjectTypeProperty = lE;
  o.assertObjectTypeSpreadProperty = pE;
  o.assertOpaqueType = fE;
  o.assertOptionalCallExpression = AS;
  o.assertOptionalIndexedAccessType = RE;
  o.assertOptionalMemberExpression = PS;
  o.assertParenthesizedExpression = Bm;
  o.assertPattern = rA;
  o.assertPatternLike = UP;
  o.assertPipelineBareFunction = Tb;
  o.assertPipelinePrimaryTopicReference = mb;
  o.assertPipelineTopicExpression = db;
  o.assertPlaceholder = tb;
  o.assertPrivate = uA;
  o.assertPrivateName = IS;
  o.assertProgram = Dm;
  o.assertProperty = eA;
  o.assertPureish = XP;
  o.assertQualifiedTypeIdentifier = cE;
  o.assertRecordExpression = lb;
  o.assertRegExpLiteral = Om;
  o.assertRegexLiteral = OA;
  o.assertRestElement = Lm;
  o.assertRestProperty = vA;
  o.assertReturnStatement = jm;
  o.assertScopable = hP;
  o.assertSequenceExpression = Cm;
  o.assertSpreadElement = pS;
  o.assertSpreadProperty = gA;
  o.assertStandardized = DP;
  o.assertStatement = CP;
  o.assertStaticBlock = DS;
  o.assertStringLiteral = bm;
  o.assertStringLiteralTypeAnnotation = yE;
  o.assertStringTypeAnnotation = dE;
  o.assertSuper = fS;
  o.assertSwitchCase = Mm;
  o.assertSwitchStatement = wm;
  o.assertSymbolTypeAnnotation = TE;
  o.assertTSAnyKeyword = Ib;
  o.assertTSArrayType = Ub;
  o.assertTSAsExpression = fP;
  o.assertTSBaseType = AA;
  o.assertTSBigIntKeyword = Nb;
  o.assertTSBooleanKeyword = Db;
  o.assertTSCallSignatureDeclaration = Ab;
  o.assertTSConditionalType = Zb;
  o.assertTSConstructSignatureDeclaration = xb;
  o.assertTSConstructorType = Vb;
  o.assertTSDeclareFunction = Eb;
  o.assertTSDeclareMethod = bb;
  o.assertTSEntityName = GP;
  o.assertTSEnumDeclaration = yP;
  o.assertTSEnumMember = dP;
  o.assertTSExportAssignment = AP;
  o.assertTSExpressionWithTypeArguments = sP;
  o.assertTSExternalModuleReference = bP;
  o.assertTSFunctionType = Yb;
  o.assertTSImportEqualsDeclaration = EP;
  o.assertTSImportType = SP;
  o.assertTSIndexSignature = gb;
  o.assertTSIndexedAccessType = nP;
  o.assertTSInferType = eP;
  o.assertTSInstantiationExpression = pP;
  o.assertTSInterfaceBody = uP;
  o.assertTSInterfaceDeclaration = oP;
  o.assertTSIntersectionType = Hb;
  o.assertTSIntrinsicKeyword = _b;
  o.assertTSLiteralType = aP;
  o.assertTSMappedType = iP;
  o.assertTSMethodSignature = vb;
  o.assertTSModuleBlock = mP;
  o.assertTSModuleDeclaration = TP;
  o.assertTSNamedTupleMember = zb;
  o.assertTSNamespaceExportDeclaration = xP;
  o.assertTSNeverKeyword = hb;
  o.assertTSNonNullExpression = PP;
  o.assertTSNullKeyword = Lb;
  o.assertTSNumberKeyword = jb;
  o.assertTSObjectKeyword = Cb;
  o.assertTSOptionalType = Gb;
  o.assertTSParameterProperty = Sb;
  o.assertTSParenthesizedType = tP;
  o.assertTSPropertySignature = Ob;
  o.assertTSQualifiedName = Pb;
  o.assertTSRestType = $b;
  o.assertTSStringKeyword = Bb;
  o.assertTSSymbolKeyword = Mb;
  o.assertTSThisType = Kb;
  o.assertTSTupleType = Wb;
  o.assertTSType = PA;
  o.assertTSTypeAliasDeclaration = lP;
  o.assertTSTypeAnnotation = OP;
  o.assertTSTypeAssertion = cP;
  o.assertTSTypeElement = bA;
  o.assertTSTypeLiteral = Jb;
  o.assertTSTypeOperator = rP;
  o.assertTSTypeParameter = IP;
  o.assertTSTypeParameterDeclaration = gP;
  o.assertTSTypeParameterInstantiation = vP;
  o.assertTSTypePredicate = kb;
  o.assertTSTypeQuery = Xb;
  o.assertTSTypeReference = qb;
  o.assertTSUndefinedKeyword = wb;
  o.assertTSUnionType = Qb;
  o.assertTSUnknownKeyword = Fb;
  o.assertTSVoidKeyword = Rb;
  o.assertTaggedTemplateExpression = cS;
  o.assertTemplateElement = yS;
  o.assertTemplateLiteral = dS;
  o.assertTerminatorless = BP;
  o.assertThisExpression = Fm;
  o.assertThisTypeAnnotation = mE;
  o.assertThrowStatement = Rm;
  o.assertTopicReference = yb;
  o.assertTryStatement = Km;
  o.assertTupleExpression = pb;
  o.assertTupleTypeAnnotation = SE;
  o.assertTypeAlias = bE;
  o.assertTypeAnnotation = PE;
  o.assertTypeCastExpression = AE;
  o.assertTypeParameter = xE;
  o.assertTypeParameterDeclaration = OE;
  o.assertTypeParameterInstantiation = vE;
  o.assertTypeScript = EA;
  o.assertTypeofTypeAnnotation = EE;
  o.assertUnaryExpression = Ym;
  o.assertUnaryLike = tA;
  o.assertUnionTypeAnnotation = gE;
  o.assertUpdateExpression = Vm;
  o.assertUserWhitespacable = QP;
  o.assertV8IntrinsicIdentifier = rb;
  o.assertVariableDeclaration = qm;
  o.assertVariableDeclarator = km;
  o.assertVariance = IE;
  o.assertVoidTypeAnnotation = DE;
  o.assertWhile = RP;
  o.assertWhileStatement = Xm;
  o.assertWithStatement = Jm;
  o.assertYieldExpression = TS;
  var GT = re();

  function l(e, t, r) {
    if (!(0, GT.default)(e, t, r)) throw new Error(`Expected type "${e}" with option ${JSON.stringify(r)}, but instead got "${t.type}".`);
  }

  n(l, "assert");

  function $T(e, t) {
    l("ArrayExpression", e, t);
  }

  n($T, "assertArrayExpression");

  function zT(e, t) {
    l("AssignmentExpression", e, t);
  }

  n(zT, "assertAssignmentExpression");

  function QT(e, t) {
    l("BinaryExpression", e, t);
  }

  n(QT, "assertBinaryExpression");

  function HT(e, t) {
    l("InterpreterDirective", e, t);
  }

  n(HT, "assertInterpreterDirective");

  function ZT(e, t) {
    l("Directive", e, t);
  }

  n(ZT, "assertDirective");

  function em(e, t) {
    l("DirectiveLiteral", e, t);
  }

  n(em, "assertDirectiveLiteral");

  function tm(e, t) {
    l("BlockStatement", e, t);
  }

  n(tm, "assertBlockStatement");

  function rm(e, t) {
    l("BreakStatement", e, t);
  }

  n(rm, "assertBreakStatement");

  function nm(e, t) {
    l("CallExpression", e, t);
  }

  n(nm, "assertCallExpression");

  function im(e, t) {
    l("CatchClause", e, t);
  }

  n(im, "assertCatchClause");

  function am(e, t) {
    l("ConditionalExpression", e, t);
  }

  n(am, "assertConditionalExpression");

  function sm(e, t) {
    l("ContinueStatement", e, t);
  }

  n(sm, "assertContinueStatement");

  function om(e, t) {
    l("DebuggerStatement", e, t);
  }

  n(om, "assertDebuggerStatement");

  function um(e, t) {
    l("DoWhileStatement", e, t);
  }

  n(um, "assertDoWhileStatement");

  function lm(e, t) {
    l("EmptyStatement", e, t);
  }

  n(lm, "assertEmptyStatement");

  function pm(e, t) {
    l("ExpressionStatement", e, t);
  }

  n(pm, "assertExpressionStatement");

  function fm(e, t) {
    l("File", e, t);
  }

  n(fm, "assertFile");

  function cm(e, t) {
    l("ForInStatement", e, t);
  }

  n(cm, "assertForInStatement");

  function ym(e, t) {
    l("ForStatement", e, t);
  }

  n(ym, "assertForStatement");

  function dm(e, t) {
    l("FunctionDeclaration", e, t);
  }

  n(dm, "assertFunctionDeclaration");

  function Tm(e, t) {
    l("FunctionExpression", e, t);
  }

  n(Tm, "assertFunctionExpression");

  function mm(e, t) {
    l("Identifier", e, t);
  }

  n(mm, "assertIdentifier");

  function Sm(e, t) {
    l("IfStatement", e, t);
  }

  n(Sm, "assertIfStatement");

  function Em(e, t) {
    l("LabeledStatement", e, t);
  }

  n(Em, "assertLabeledStatement");

  function bm(e, t) {
    l("StringLiteral", e, t);
  }

  n(bm, "assertStringLiteral");

  function Pm(e, t) {
    l("NumericLiteral", e, t);
  }

  n(Pm, "assertNumericLiteral");

  function Am(e, t) {
    l("NullLiteral", e, t);
  }

  n(Am, "assertNullLiteral");

  function xm(e, t) {
    l("BooleanLiteral", e, t);
  }

  n(xm, "assertBooleanLiteral");

  function Om(e, t) {
    l("RegExpLiteral", e, t);
  }

  n(Om, "assertRegExpLiteral");

  function vm(e, t) {
    l("LogicalExpression", e, t);
  }

  n(vm, "assertLogicalExpression");

  function gm(e, t) {
    l("MemberExpression", e, t);
  }

  n(gm, "assertMemberExpression");

  function Im(e, t) {
    l("NewExpression", e, t);
  }

  n(Im, "assertNewExpression");

  function Dm(e, t) {
    l("Program", e, t);
  }

  n(Dm, "assertProgram");

  function Nm(e, t) {
    l("ObjectExpression", e, t);
  }

  n(Nm, "assertObjectExpression");

  function _m(e, t) {
    l("ObjectMethod", e, t);
  }

  n(_m, "assertObjectMethod");

  function hm(e, t) {
    l("ObjectProperty", e, t);
  }

  n(hm, "assertObjectProperty");

  function Lm(e, t) {
    l("RestElement", e, t);
  }

  n(Lm, "assertRestElement");

  function jm(e, t) {
    l("ReturnStatement", e, t);
  }

  n(jm, "assertReturnStatement");

  function Cm(e, t) {
    l("SequenceExpression", e, t);
  }

  n(Cm, "assertSequenceExpression");

  function Bm(e, t) {
    l("ParenthesizedExpression", e, t);
  }

  n(Bm, "assertParenthesizedExpression");

  function Mm(e, t) {
    l("SwitchCase", e, t);
  }

  n(Mm, "assertSwitchCase");

  function wm(e, t) {
    l("SwitchStatement", e, t);
  }

  n(wm, "assertSwitchStatement");

  function Fm(e, t) {
    l("ThisExpression", e, t);
  }

  n(Fm, "assertThisExpression");

  function Rm(e, t) {
    l("ThrowStatement", e, t);
  }

  n(Rm, "assertThrowStatement");

  function Km(e, t) {
    l("TryStatement", e, t);
  }

  n(Km, "assertTryStatement");

  function Ym(e, t) {
    l("UnaryExpression", e, t);
  }

  n(Ym, "assertUnaryExpression");

  function Vm(e, t) {
    l("UpdateExpression", e, t);
  }

  n(Vm, "assertUpdateExpression");

  function qm(e, t) {
    l("VariableDeclaration", e, t);
  }

  n(qm, "assertVariableDeclaration");

  function km(e, t) {
    l("VariableDeclarator", e, t);
  }

  n(km, "assertVariableDeclarator");

  function Xm(e, t) {
    l("WhileStatement", e, t);
  }

  n(Xm, "assertWhileStatement");

  function Jm(e, t) {
    l("WithStatement", e, t);
  }

  n(Jm, "assertWithStatement");

  function Um(e, t) {
    l("AssignmentPattern", e, t);
  }

  n(Um, "assertAssignmentPattern");

  function Wm(e, t) {
    l("ArrayPattern", e, t);
  }

  n(Wm, "assertArrayPattern");

  function Gm(e, t) {
    l("ArrowFunctionExpression", e, t);
  }

  n(Gm, "assertArrowFunctionExpression");

  function $m(e, t) {
    l("ClassBody", e, t);
  }

  n($m, "assertClassBody");

  function zm(e, t) {
    l("ClassExpression", e, t);
  }

  n(zm, "assertClassExpression");

  function Qm(e, t) {
    l("ClassDeclaration", e, t);
  }

  n(Qm, "assertClassDeclaration");

  function Hm(e, t) {
    l("ExportAllDeclaration", e, t);
  }

  n(Hm, "assertExportAllDeclaration");

  function Zm(e, t) {
    l("ExportDefaultDeclaration", e, t);
  }

  n(Zm, "assertExportDefaultDeclaration");

  function eS(e, t) {
    l("ExportNamedDeclaration", e, t);
  }

  n(eS, "assertExportNamedDeclaration");

  function tS(e, t) {
    l("ExportSpecifier", e, t);
  }

  n(tS, "assertExportSpecifier");

  function rS(e, t) {
    l("ForOfStatement", e, t);
  }

  n(rS, "assertForOfStatement");

  function nS(e, t) {
    l("ImportDeclaration", e, t);
  }

  n(nS, "assertImportDeclaration");

  function iS(e, t) {
    l("ImportDefaultSpecifier", e, t);
  }

  n(iS, "assertImportDefaultSpecifier");

  function aS(e, t) {
    l("ImportNamespaceSpecifier", e, t);
  }

  n(aS, "assertImportNamespaceSpecifier");

  function sS(e, t) {
    l("ImportSpecifier", e, t);
  }

  n(sS, "assertImportSpecifier");

  function oS(e, t) {
    l("MetaProperty", e, t);
  }

  n(oS, "assertMetaProperty");

  function uS(e, t) {
    l("ClassMethod", e, t);
  }

  n(uS, "assertClassMethod");

  function lS(e, t) {
    l("ObjectPattern", e, t);
  }

  n(lS, "assertObjectPattern");

  function pS(e, t) {
    l("SpreadElement", e, t);
  }

  n(pS, "assertSpreadElement");

  function fS(e, t) {
    l("Super", e, t);
  }

  n(fS, "assertSuper");

  function cS(e, t) {
    l("TaggedTemplateExpression", e, t);
  }

  n(cS, "assertTaggedTemplateExpression");

  function yS(e, t) {
    l("TemplateElement", e, t);
  }

  n(yS, "assertTemplateElement");

  function dS(e, t) {
    l("TemplateLiteral", e, t);
  }

  n(dS, "assertTemplateLiteral");

  function TS(e, t) {
    l("YieldExpression", e, t);
  }

  n(TS, "assertYieldExpression");

  function mS(e, t) {
    l("AwaitExpression", e, t);
  }

  n(mS, "assertAwaitExpression");

  function SS(e, t) {
    l("Import", e, t);
  }

  n(SS, "assertImport");

  function ES(e, t) {
    l("BigIntLiteral", e, t);
  }

  n(ES, "assertBigIntLiteral");

  function bS(e, t) {
    l("ExportNamespaceSpecifier", e, t);
  }

  n(bS, "assertExportNamespaceSpecifier");

  function PS(e, t) {
    l("OptionalMemberExpression", e, t);
  }

  n(PS, "assertOptionalMemberExpression");

  function AS(e, t) {
    l("OptionalCallExpression", e, t);
  }

  n(AS, "assertOptionalCallExpression");

  function xS(e, t) {
    l("ClassProperty", e, t);
  }

  n(xS, "assertClassProperty");

  function OS(e, t) {
    l("ClassAccessorProperty", e, t);
  }

  n(OS, "assertClassAccessorProperty");

  function vS(e, t) {
    l("ClassPrivateProperty", e, t);
  }

  n(vS, "assertClassPrivateProperty");

  function gS(e, t) {
    l("ClassPrivateMethod", e, t);
  }

  n(gS, "assertClassPrivateMethod");

  function IS(e, t) {
    l("PrivateName", e, t);
  }

  n(IS, "assertPrivateName");

  function DS(e, t) {
    l("StaticBlock", e, t);
  }

  n(DS, "assertStaticBlock");

  function NS(e, t) {
    l("AnyTypeAnnotation", e, t);
  }

  n(NS, "assertAnyTypeAnnotation");

  function _S(e, t) {
    l("ArrayTypeAnnotation", e, t);
  }

  n(_S, "assertArrayTypeAnnotation");

  function hS(e, t) {
    l("BooleanTypeAnnotation", e, t);
  }

  n(hS, "assertBooleanTypeAnnotation");

  function LS(e, t) {
    l("BooleanLiteralTypeAnnotation", e, t);
  }

  n(LS, "assertBooleanLiteralTypeAnnotation");

  function jS(e, t) {
    l("NullLiteralTypeAnnotation", e, t);
  }

  n(jS, "assertNullLiteralTypeAnnotation");

  function CS(e, t) {
    l("ClassImplements", e, t);
  }

  n(CS, "assertClassImplements");

  function BS(e, t) {
    l("DeclareClass", e, t);
  }

  n(BS, "assertDeclareClass");

  function MS(e, t) {
    l("DeclareFunction", e, t);
  }

  n(MS, "assertDeclareFunction");

  function wS(e, t) {
    l("DeclareInterface", e, t);
  }

  n(wS, "assertDeclareInterface");

  function FS(e, t) {
    l("DeclareModule", e, t);
  }

  n(FS, "assertDeclareModule");

  function RS(e, t) {
    l("DeclareModuleExports", e, t);
  }

  n(RS, "assertDeclareModuleExports");

  function KS(e, t) {
    l("DeclareTypeAlias", e, t);
  }

  n(KS, "assertDeclareTypeAlias");

  function YS(e, t) {
    l("DeclareOpaqueType", e, t);
  }

  n(YS, "assertDeclareOpaqueType");

  function VS(e, t) {
    l("DeclareVariable", e, t);
  }

  n(VS, "assertDeclareVariable");

  function qS(e, t) {
    l("DeclareExportDeclaration", e, t);
  }

  n(qS, "assertDeclareExportDeclaration");

  function kS(e, t) {
    l("DeclareExportAllDeclaration", e, t);
  }

  n(kS, "assertDeclareExportAllDeclaration");

  function XS(e, t) {
    l("DeclaredPredicate", e, t);
  }

  n(XS, "assertDeclaredPredicate");

  function JS(e, t) {
    l("ExistsTypeAnnotation", e, t);
  }

  n(JS, "assertExistsTypeAnnotation");

  function US(e, t) {
    l("FunctionTypeAnnotation", e, t);
  }

  n(US, "assertFunctionTypeAnnotation");

  function WS(e, t) {
    l("FunctionTypeParam", e, t);
  }

  n(WS, "assertFunctionTypeParam");

  function GS(e, t) {
    l("GenericTypeAnnotation", e, t);
  }

  n(GS, "assertGenericTypeAnnotation");

  function $S(e, t) {
    l("InferredPredicate", e, t);
  }

  n($S, "assertInferredPredicate");

  function zS(e, t) {
    l("InterfaceExtends", e, t);
  }

  n(zS, "assertInterfaceExtends");

  function QS(e, t) {
    l("InterfaceDeclaration", e, t);
  }

  n(QS, "assertInterfaceDeclaration");

  function HS(e, t) {
    l("InterfaceTypeAnnotation", e, t);
  }

  n(HS, "assertInterfaceTypeAnnotation");

  function ZS(e, t) {
    l("IntersectionTypeAnnotation", e, t);
  }

  n(ZS, "assertIntersectionTypeAnnotation");

  function eE(e, t) {
    l("MixedTypeAnnotation", e, t);
  }

  n(eE, "assertMixedTypeAnnotation");

  function tE(e, t) {
    l("EmptyTypeAnnotation", e, t);
  }

  n(tE, "assertEmptyTypeAnnotation");

  function rE(e, t) {
    l("NullableTypeAnnotation", e, t);
  }

  n(rE, "assertNullableTypeAnnotation");

  function nE(e, t) {
    l("NumberLiteralTypeAnnotation", e, t);
  }

  n(nE, "assertNumberLiteralTypeAnnotation");

  function iE(e, t) {
    l("NumberTypeAnnotation", e, t);
  }

  n(iE, "assertNumberTypeAnnotation");

  function aE(e, t) {
    l("ObjectTypeAnnotation", e, t);
  }

  n(aE, "assertObjectTypeAnnotation");

  function sE(e, t) {
    l("ObjectTypeInternalSlot", e, t);
  }

  n(sE, "assertObjectTypeInternalSlot");

  function oE(e, t) {
    l("ObjectTypeCallProperty", e, t);
  }

  n(oE, "assertObjectTypeCallProperty");

  function uE(e, t) {
    l("ObjectTypeIndexer", e, t);
  }

  n(uE, "assertObjectTypeIndexer");

  function lE(e, t) {
    l("ObjectTypeProperty", e, t);
  }

  n(lE, "assertObjectTypeProperty");

  function pE(e, t) {
    l("ObjectTypeSpreadProperty", e, t);
  }

  n(pE, "assertObjectTypeSpreadProperty");

  function fE(e, t) {
    l("OpaqueType", e, t);
  }

  n(fE, "assertOpaqueType");

  function cE(e, t) {
    l("QualifiedTypeIdentifier", e, t);
  }

  n(cE, "assertQualifiedTypeIdentifier");

  function yE(e, t) {
    l("StringLiteralTypeAnnotation", e, t);
  }

  n(yE, "assertStringLiteralTypeAnnotation");

  function dE(e, t) {
    l("StringTypeAnnotation", e, t);
  }

  n(dE, "assertStringTypeAnnotation");

  function TE(e, t) {
    l("SymbolTypeAnnotation", e, t);
  }

  n(TE, "assertSymbolTypeAnnotation");

  function mE(e, t) {
    l("ThisTypeAnnotation", e, t);
  }

  n(mE, "assertThisTypeAnnotation");

  function SE(e, t) {
    l("TupleTypeAnnotation", e, t);
  }

  n(SE, "assertTupleTypeAnnotation");

  function EE(e, t) {
    l("TypeofTypeAnnotation", e, t);
  }

  n(EE, "assertTypeofTypeAnnotation");

  function bE(e, t) {
    l("TypeAlias", e, t);
  }

  n(bE, "assertTypeAlias");

  function PE(e, t) {
    l("TypeAnnotation", e, t);
  }

  n(PE, "assertTypeAnnotation");

  function AE(e, t) {
    l("TypeCastExpression", e, t);
  }

  n(AE, "assertTypeCastExpression");

  function xE(e, t) {
    l("TypeParameter", e, t);
  }

  n(xE, "assertTypeParameter");

  function OE(e, t) {
    l("TypeParameterDeclaration", e, t);
  }

  n(OE, "assertTypeParameterDeclaration");

  function vE(e, t) {
    l("TypeParameterInstantiation", e, t);
  }

  n(vE, "assertTypeParameterInstantiation");

  function gE(e, t) {
    l("UnionTypeAnnotation", e, t);
  }

  n(gE, "assertUnionTypeAnnotation");

  function IE(e, t) {
    l("Variance", e, t);
  }

  n(IE, "assertVariance");

  function DE(e, t) {
    l("VoidTypeAnnotation", e, t);
  }

  n(DE, "assertVoidTypeAnnotation");

  function NE(e, t) {
    l("EnumDeclaration", e, t);
  }

  n(NE, "assertEnumDeclaration");

  function _E(e, t) {
    l("EnumBooleanBody", e, t);
  }

  n(_E, "assertEnumBooleanBody");

  function hE(e, t) {
    l("EnumNumberBody", e, t);
  }

  n(hE, "assertEnumNumberBody");

  function LE(e, t) {
    l("EnumStringBody", e, t);
  }

  n(LE, "assertEnumStringBody");

  function jE(e, t) {
    l("EnumSymbolBody", e, t);
  }

  n(jE, "assertEnumSymbolBody");

  function CE(e, t) {
    l("EnumBooleanMember", e, t);
  }

  n(CE, "assertEnumBooleanMember");

  function BE(e, t) {
    l("EnumNumberMember", e, t);
  }

  n(BE, "assertEnumNumberMember");

  function ME(e, t) {
    l("EnumStringMember", e, t);
  }

  n(ME, "assertEnumStringMember");

  function wE(e, t) {
    l("EnumDefaultedMember", e, t);
  }

  n(wE, "assertEnumDefaultedMember");

  function FE(e, t) {
    l("IndexedAccessType", e, t);
  }

  n(FE, "assertIndexedAccessType");

  function RE(e, t) {
    l("OptionalIndexedAccessType", e, t);
  }

  n(RE, "assertOptionalIndexedAccessType");

  function KE(e, t) {
    l("JSXAttribute", e, t);
  }

  n(KE, "assertJSXAttribute");

  function YE(e, t) {
    l("JSXClosingElement", e, t);
  }

  n(YE, "assertJSXClosingElement");

  function VE(e, t) {
    l("JSXElement", e, t);
  }

  n(VE, "assertJSXElement");

  function qE(e, t) {
    l("JSXEmptyExpression", e, t);
  }

  n(qE, "assertJSXEmptyExpression");

  function kE(e, t) {
    l("JSXExpressionContainer", e, t);
  }

  n(kE, "assertJSXExpressionContainer");

  function XE(e, t) {
    l("JSXSpreadChild", e, t);
  }

  n(XE, "assertJSXSpreadChild");

  function JE(e, t) {
    l("JSXIdentifier", e, t);
  }

  n(JE, "assertJSXIdentifier");

  function UE(e, t) {
    l("JSXMemberExpression", e, t);
  }

  n(UE, "assertJSXMemberExpression");

  function WE(e, t) {
    l("JSXNamespacedName", e, t);
  }

  n(WE, "assertJSXNamespacedName");

  function GE(e, t) {
    l("JSXOpeningElement", e, t);
  }

  n(GE, "assertJSXOpeningElement");

  function $E(e, t) {
    l("JSXSpreadAttribute", e, t);
  }

  n($E, "assertJSXSpreadAttribute");

  function zE(e, t) {
    l("JSXText", e, t);
  }

  n(zE, "assertJSXText");

  function QE(e, t) {
    l("JSXFragment", e, t);
  }

  n(QE, "assertJSXFragment");

  function HE(e, t) {
    l("JSXOpeningFragment", e, t);
  }

  n(HE, "assertJSXOpeningFragment");

  function ZE(e, t) {
    l("JSXClosingFragment", e, t);
  }

  n(ZE, "assertJSXClosingFragment");

  function eb(e, t) {
    l("Noop", e, t);
  }

  n(eb, "assertNoop");

  function tb(e, t) {
    l("Placeholder", e, t);
  }

  n(tb, "assertPlaceholder");

  function rb(e, t) {
    l("V8IntrinsicIdentifier", e, t);
  }

  n(rb, "assertV8IntrinsicIdentifier");

  function nb(e, t) {
    l("ArgumentPlaceholder", e, t);
  }

  n(nb, "assertArgumentPlaceholder");

  function ib(e, t) {
    l("BindExpression", e, t);
  }

  n(ib, "assertBindExpression");

  function ab(e, t) {
    l("ImportAttribute", e, t);
  }

  n(ab, "assertImportAttribute");

  function sb(e, t) {
    l("Decorator", e, t);
  }

  n(sb, "assertDecorator");

  function ob(e, t) {
    l("DoExpression", e, t);
  }

  n(ob, "assertDoExpression");

  function ub(e, t) {
    l("ExportDefaultSpecifier", e, t);
  }

  n(ub, "assertExportDefaultSpecifier");

  function lb(e, t) {
    l("RecordExpression", e, t);
  }

  n(lb, "assertRecordExpression");

  function pb(e, t) {
    l("TupleExpression", e, t);
  }

  n(pb, "assertTupleExpression");

  function fb(e, t) {
    l("DecimalLiteral", e, t);
  }

  n(fb, "assertDecimalLiteral");

  function cb(e, t) {
    l("ModuleExpression", e, t);
  }

  n(cb, "assertModuleExpression");

  function yb(e, t) {
    l("TopicReference", e, t);
  }

  n(yb, "assertTopicReference");

  function db(e, t) {
    l("PipelineTopicExpression", e, t);
  }

  n(db, "assertPipelineTopicExpression");

  function Tb(e, t) {
    l("PipelineBareFunction", e, t);
  }

  n(Tb, "assertPipelineBareFunction");

  function mb(e, t) {
    l("PipelinePrimaryTopicReference", e, t);
  }

  n(mb, "assertPipelinePrimaryTopicReference");

  function Sb(e, t) {
    l("TSParameterProperty", e, t);
  }

  n(Sb, "assertTSParameterProperty");

  function Eb(e, t) {
    l("TSDeclareFunction", e, t);
  }

  n(Eb, "assertTSDeclareFunction");

  function bb(e, t) {
    l("TSDeclareMethod", e, t);
  }

  n(bb, "assertTSDeclareMethod");

  function Pb(e, t) {
    l("TSQualifiedName", e, t);
  }

  n(Pb, "assertTSQualifiedName");

  function Ab(e, t) {
    l("TSCallSignatureDeclaration", e, t);
  }

  n(Ab, "assertTSCallSignatureDeclaration");

  function xb(e, t) {
    l("TSConstructSignatureDeclaration", e, t);
  }

  n(xb, "assertTSConstructSignatureDeclaration");

  function Ob(e, t) {
    l("TSPropertySignature", e, t);
  }

  n(Ob, "assertTSPropertySignature");

  function vb(e, t) {
    l("TSMethodSignature", e, t);
  }

  n(vb, "assertTSMethodSignature");

  function gb(e, t) {
    l("TSIndexSignature", e, t);
  }

  n(gb, "assertTSIndexSignature");

  function Ib(e, t) {
    l("TSAnyKeyword", e, t);
  }

  n(Ib, "assertTSAnyKeyword");

  function Db(e, t) {
    l("TSBooleanKeyword", e, t);
  }

  n(Db, "assertTSBooleanKeyword");

  function Nb(e, t) {
    l("TSBigIntKeyword", e, t);
  }

  n(Nb, "assertTSBigIntKeyword");

  function _b(e, t) {
    l("TSIntrinsicKeyword", e, t);
  }

  n(_b, "assertTSIntrinsicKeyword");

  function hb(e, t) {
    l("TSNeverKeyword", e, t);
  }

  n(hb, "assertTSNeverKeyword");

  function Lb(e, t) {
    l("TSNullKeyword", e, t);
  }

  n(Lb, "assertTSNullKeyword");

  function jb(e, t) {
    l("TSNumberKeyword", e, t);
  }

  n(jb, "assertTSNumberKeyword");

  function Cb(e, t) {
    l("TSObjectKeyword", e, t);
  }

  n(Cb, "assertTSObjectKeyword");

  function Bb(e, t) {
    l("TSStringKeyword", e, t);
  }

  n(Bb, "assertTSStringKeyword");

  function Mb(e, t) {
    l("TSSymbolKeyword", e, t);
  }

  n(Mb, "assertTSSymbolKeyword");

  function wb(e, t) {
    l("TSUndefinedKeyword", e, t);
  }

  n(wb, "assertTSUndefinedKeyword");

  function Fb(e, t) {
    l("TSUnknownKeyword", e, t);
  }

  n(Fb, "assertTSUnknownKeyword");

  function Rb(e, t) {
    l("TSVoidKeyword", e, t);
  }

  n(Rb, "assertTSVoidKeyword");

  function Kb(e, t) {
    l("TSThisType", e, t);
  }

  n(Kb, "assertTSThisType");

  function Yb(e, t) {
    l("TSFunctionType", e, t);
  }

  n(Yb, "assertTSFunctionType");

  function Vb(e, t) {
    l("TSConstructorType", e, t);
  }

  n(Vb, "assertTSConstructorType");

  function qb(e, t) {
    l("TSTypeReference", e, t);
  }

  n(qb, "assertTSTypeReference");

  function kb(e, t) {
    l("TSTypePredicate", e, t);
  }

  n(kb, "assertTSTypePredicate");

  function Xb(e, t) {
    l("TSTypeQuery", e, t);
  }

  n(Xb, "assertTSTypeQuery");

  function Jb(e, t) {
    l("TSTypeLiteral", e, t);
  }

  n(Jb, "assertTSTypeLiteral");

  function Ub(e, t) {
    l("TSArrayType", e, t);
  }

  n(Ub, "assertTSArrayType");

  function Wb(e, t) {
    l("TSTupleType", e, t);
  }

  n(Wb, "assertTSTupleType");

  function Gb(e, t) {
    l("TSOptionalType", e, t);
  }

  n(Gb, "assertTSOptionalType");

  function $b(e, t) {
    l("TSRestType", e, t);
  }

  n($b, "assertTSRestType");

  function zb(e, t) {
    l("TSNamedTupleMember", e, t);
  }

  n(zb, "assertTSNamedTupleMember");

  function Qb(e, t) {
    l("TSUnionType", e, t);
  }

  n(Qb, "assertTSUnionType");

  function Hb(e, t) {
    l("TSIntersectionType", e, t);
  }

  n(Hb, "assertTSIntersectionType");

  function Zb(e, t) {
    l("TSConditionalType", e, t);
  }

  n(Zb, "assertTSConditionalType");

  function eP(e, t) {
    l("TSInferType", e, t);
  }

  n(eP, "assertTSInferType");

  function tP(e, t) {
    l("TSParenthesizedType", e, t);
  }

  n(tP, "assertTSParenthesizedType");

  function rP(e, t) {
    l("TSTypeOperator", e, t);
  }

  n(rP, "assertTSTypeOperator");

  function nP(e, t) {
    l("TSIndexedAccessType", e, t);
  }

  n(nP, "assertTSIndexedAccessType");

  function iP(e, t) {
    l("TSMappedType", e, t);
  }

  n(iP, "assertTSMappedType");

  function aP(e, t) {
    l("TSLiteralType", e, t);
  }

  n(aP, "assertTSLiteralType");

  function sP(e, t) {
    l("TSExpressionWithTypeArguments", e, t);
  }

  n(sP, "assertTSExpressionWithTypeArguments");

  function oP(e, t) {
    l("TSInterfaceDeclaration", e, t);
  }

  n(oP, "assertTSInterfaceDeclaration");

  function uP(e, t) {
    l("TSInterfaceBody", e, t);
  }

  n(uP, "assertTSInterfaceBody");

  function lP(e, t) {
    l("TSTypeAliasDeclaration", e, t);
  }

  n(lP, "assertTSTypeAliasDeclaration");

  function pP(e, t) {
    l("TSInstantiationExpression", e, t);
  }

  n(pP, "assertTSInstantiationExpression");

  function fP(e, t) {
    l("TSAsExpression", e, t);
  }

  n(fP, "assertTSAsExpression");

  function cP(e, t) {
    l("TSTypeAssertion", e, t);
  }

  n(cP, "assertTSTypeAssertion");

  function yP(e, t) {
    l("TSEnumDeclaration", e, t);
  }

  n(yP, "assertTSEnumDeclaration");

  function dP(e, t) {
    l("TSEnumMember", e, t);
  }

  n(dP, "assertTSEnumMember");

  function TP(e, t) {
    l("TSModuleDeclaration", e, t);
  }

  n(TP, "assertTSModuleDeclaration");

  function mP(e, t) {
    l("TSModuleBlock", e, t);
  }

  n(mP, "assertTSModuleBlock");

  function SP(e, t) {
    l("TSImportType", e, t);
  }

  n(SP, "assertTSImportType");

  function EP(e, t) {
    l("TSImportEqualsDeclaration", e, t);
  }

  n(EP, "assertTSImportEqualsDeclaration");

  function bP(e, t) {
    l("TSExternalModuleReference", e, t);
  }

  n(bP, "assertTSExternalModuleReference");

  function PP(e, t) {
    l("TSNonNullExpression", e, t);
  }

  n(PP, "assertTSNonNullExpression");

  function AP(e, t) {
    l("TSExportAssignment", e, t);
  }

  n(AP, "assertTSExportAssignment");

  function xP(e, t) {
    l("TSNamespaceExportDeclaration", e, t);
  }

  n(xP, "assertTSNamespaceExportDeclaration");

  function OP(e, t) {
    l("TSTypeAnnotation", e, t);
  }

  n(OP, "assertTSTypeAnnotation");

  function vP(e, t) {
    l("TSTypeParameterInstantiation", e, t);
  }

  n(vP, "assertTSTypeParameterInstantiation");

  function gP(e, t) {
    l("TSTypeParameterDeclaration", e, t);
  }

  n(gP, "assertTSTypeParameterDeclaration");

  function IP(e, t) {
    l("TSTypeParameter", e, t);
  }

  n(IP, "assertTSTypeParameter");

  function DP(e, t) {
    l("Standardized", e, t);
  }

  n(DP, "assertStandardized");

  function NP(e, t) {
    l("Expression", e, t);
  }

  n(NP, "assertExpression");

  function _P(e, t) {
    l("Binary", e, t);
  }

  n(_P, "assertBinary");

  function hP(e, t) {
    l("Scopable", e, t);
  }

  n(hP, "assertScopable");

  function LP(e, t) {
    l("BlockParent", e, t);
  }

  n(LP, "assertBlockParent");

  function jP(e, t) {
    l("Block", e, t);
  }

  n(jP, "assertBlock");

  function CP(e, t) {
    l("Statement", e, t);
  }

  n(CP, "assertStatement");

  function BP(e, t) {
    l("Terminatorless", e, t);
  }

  n(BP, "assertTerminatorless");

  function MP(e, t) {
    l("CompletionStatement", e, t);
  }

  n(MP, "assertCompletionStatement");

  function wP(e, t) {
    l("Conditional", e, t);
  }

  n(wP, "assertConditional");

  function FP(e, t) {
    l("Loop", e, t);
  }

  n(FP, "assertLoop");

  function RP(e, t) {
    l("While", e, t);
  }

  n(RP, "assertWhile");

  function KP(e, t) {
    l("ExpressionWrapper", e, t);
  }

  n(KP, "assertExpressionWrapper");

  function YP(e, t) {
    l("For", e, t);
  }

  n(YP, "assertFor");

  function VP(e, t) {
    l("ForXStatement", e, t);
  }

  n(VP, "assertForXStatement");

  function qP(e, t) {
    l("Function", e, t);
  }

  n(qP, "assertFunction");

  function kP(e, t) {
    l("FunctionParent", e, t);
  }

  n(kP, "assertFunctionParent");

  function XP(e, t) {
    l("Pureish", e, t);
  }

  n(XP, "assertPureish");

  function JP(e, t) {
    l("Declaration", e, t);
  }

  n(JP, "assertDeclaration");

  function UP(e, t) {
    l("PatternLike", e, t);
  }

  n(UP, "assertPatternLike");

  function WP(e, t) {
    l("LVal", e, t);
  }

  n(WP, "assertLVal");

  function GP(e, t) {
    l("TSEntityName", e, t);
  }

  n(GP, "assertTSEntityName");

  function $P(e, t) {
    l("Literal", e, t);
  }

  n($P, "assertLiteral");

  function zP(e, t) {
    l("Immutable", e, t);
  }

  n(zP, "assertImmutable");

  function QP(e, t) {
    l("UserWhitespacable", e, t);
  }

  n(QP, "assertUserWhitespacable");

  function HP(e, t) {
    l("Method", e, t);
  }

  n(HP, "assertMethod");

  function ZP(e, t) {
    l("ObjectMember", e, t);
  }

  n(ZP, "assertObjectMember");

  function eA(e, t) {
    l("Property", e, t);
  }

  n(eA, "assertProperty");

  function tA(e, t) {
    l("UnaryLike", e, t);
  }

  n(tA, "assertUnaryLike");

  function rA(e, t) {
    l("Pattern", e, t);
  }

  n(rA, "assertPattern");

  function nA(e, t) {
    l("Class", e, t);
  }

  n(nA, "assertClass");

  function iA(e, t) {
    l("ModuleDeclaration", e, t);
  }

  n(iA, "assertModuleDeclaration");

  function aA(e, t) {
    l("ExportDeclaration", e, t);
  }

  n(aA, "assertExportDeclaration");

  function sA(e, t) {
    l("ModuleSpecifier", e, t);
  }

  n(sA, "assertModuleSpecifier");

  function oA(e, t) {
    l("Accessor", e, t);
  }

  n(oA, "assertAccessor");

  function uA(e, t) {
    l("Private", e, t);
  }

  n(uA, "assertPrivate");

  function lA(e, t) {
    l("Flow", e, t);
  }

  n(lA, "assertFlow");

  function pA(e, t) {
    l("FlowType", e, t);
  }

  n(pA, "assertFlowType");

  function fA(e, t) {
    l("FlowBaseAnnotation", e, t);
  }

  n(fA, "assertFlowBaseAnnotation");

  function cA(e, t) {
    l("FlowDeclaration", e, t);
  }

  n(cA, "assertFlowDeclaration");

  function yA(e, t) {
    l("FlowPredicate", e, t);
  }

  n(yA, "assertFlowPredicate");

  function dA(e, t) {
    l("EnumBody", e, t);
  }

  n(dA, "assertEnumBody");

  function TA(e, t) {
    l("EnumMember", e, t);
  }

  n(TA, "assertEnumMember");

  function mA(e, t) {
    l("JSX", e, t);
  }

  n(mA, "assertJSX");

  function SA(e, t) {
    l("Miscellaneous", e, t);
  }

  n(SA, "assertMiscellaneous");

  function EA(e, t) {
    l("TypeScript", e, t);
  }

  n(EA, "assertTypeScript");

  function bA(e, t) {
    l("TSTypeElement", e, t);
  }

  n(bA, "assertTSTypeElement");

  function PA(e, t) {
    l("TSType", e, t);
  }

  n(PA, "assertTSType");

  function AA(e, t) {
    l("TSBaseType", e, t);
  }

  n(AA, "assertTSBaseType");

  function xA(e, t) {
    console.trace("The node type NumberLiteral has been renamed to NumericLiteral"), l("NumberLiteral", e, t);
  }

  n(xA, "assertNumberLiteral");

  function OA(e, t) {
    console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"), l("RegexLiteral", e, t);
  }

  n(OA, "assertRegexLiteral");

  function vA(e, t) {
    console.trace("The node type RestProperty has been renamed to RestElement"), l("RestProperty", e, t);
  }

  n(vA, "assertRestProperty");

  function gA(e, t) {
    console.trace("The node type SpreadProperty has been renamed to SpreadElement"), l("SpreadProperty", e, t);
  }

  n(gA, "assertSpreadProperty");
});

var hn = x(_e => {
  "use strict";

  Object.defineProperty(_e, "__esModule", {
    value: !0
  });
  _e.default = void 0;
  var X = q(),
      IA = DA;
  _e.default = IA;

  function DA(e) {
    switch (e) {
      case "string":
        return (0, X.stringTypeAnnotation)();

      case "number":
        return (0, X.numberTypeAnnotation)();

      case "undefined":
        return (0, X.voidTypeAnnotation)();

      case "boolean":
        return (0, X.booleanTypeAnnotation)();

      case "function":
        return (0, X.genericTypeAnnotation)((0, X.identifier)("Function"));

      case "object":
        return (0, X.genericTypeAnnotation)((0, X.identifier)("Object"));

      case "symbol":
        return (0, X.genericTypeAnnotation)((0, X.identifier)("Symbol"));

      case "bigint":
        return (0, X.anyTypeAnnotation)();
    }

    throw new Error("Invalid typeof value: " + e);
  }

  n(DA, "createTypeAnnotationBasedOnTypeof");
});
var St = x(mt => {
  "use strict";

  Object.defineProperty(mt, "__esModule", {
    value: !0
  });
  mt.default = jn;
  var fe = C();

  function Ln(e) {
    return (0, fe.isIdentifier)(e) ? e.name : `${e.id.name}.${Ln(e.qualification)}`;
  }

  n(Ln, "getQualifiedName");

  function jn(e) {
    let t = {},
        r = {},
        p = new Set(),
        d = [];

    for (let m = 0; m < e.length; m++) {
      let E = e[m];

      if (!!E && !(d.indexOf(E) >= 0)) {
        if ((0, fe.isAnyTypeAnnotation)(E)) return [E];

        if ((0, fe.isFlowBaseAnnotation)(E)) {
          r[E.type] = E;
          continue;
        }

        if ((0, fe.isUnionTypeAnnotation)(E)) {
          p.has(E.types) || (e = e.concat(E.types), p.add(E.types));
          continue;
        }

        if ((0, fe.isGenericTypeAnnotation)(E)) {
          let v = Ln(E.id);

          if (t[v]) {
            let N = t[v];
            N.typeParameters ? E.typeParameters && (N.typeParameters.params = jn(N.typeParameters.params.concat(E.typeParameters.params))) : N = E.typeParameters;
          } else t[v] = E;

          continue;
        }

        d.push(E);
      }
    }

    for (let m of Object.keys(r)) d.push(r[m]);

    for (let m of Object.keys(t)) d.push(t[m]);

    return d;
  }

  n(jn, "removeTypeDuplicates");
});
var Cn = x(Et => {
  "use strict";

  Object.defineProperty(Et, "__esModule", {
    value: !0
  });
  Et.default = hA;

  var NA = q(),
      _A = St();

  function hA(e) {
    let t = (0, _A.default)(e);
    return t.length === 1 ? t[0] : (0, NA.unionTypeAnnotation)(t);
  }

  n(hA, "createFlowUnionType");
});
var Bn = x(Pt => {
  "use strict";

  Object.defineProperty(Pt, "__esModule", {
    value: !0
  });
  Pt.default = LA;
  var bt = C();

  function LA(e) {
    let t = {},
        r = {},
        p = new Set(),
        d = [];

    for (let m = 0; m < e.length; m++) {
      let E = e[m];

      if (!!E && !(d.indexOf(E) >= 0)) {
        if ((0, bt.isTSAnyKeyword)(E)) return [E];

        if ((0, bt.isTSBaseType)(E)) {
          r[E.type] = E;
          continue;
        }

        if ((0, bt.isTSUnionType)(E)) {
          p.has(E.types) || (e.push(...E.types), p.add(E.types));
          continue;
        }

        d.push(E);
      }
    }

    for (let m of Object.keys(r)) d.push(r[m]);

    for (let m of Object.keys(t)) d.push(t[m]);

    return d;
  }

  n(LA, "removeTypeDuplicates");
});
var Mn = x(At => {
  "use strict";

  Object.defineProperty(At, "__esModule", {
    value: !0
  });
  At.default = BA;
  var jA = q(),
      CA = Bn();

  function BA(e) {
    let t = e.map(p => p.typeAnnotation),
        r = (0, CA.default)(t);
    return r.length === 1 ? r[0] : (0, jA.tsUnionType)(r);
  }

  n(BA, "createTSUnionType");
});
var wn = x(f => {
  "use strict";

  Object.defineProperty(f, "__esModule", {
    value: !0
  });
  Object.defineProperty(f, "AnyTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.anyTypeAnnotation;
    }
  });
  Object.defineProperty(f, "ArgumentPlaceholder", {
    enumerable: !0,
    get: function () {
      return c.argumentPlaceholder;
    }
  });
  Object.defineProperty(f, "ArrayExpression", {
    enumerable: !0,
    get: function () {
      return c.arrayExpression;
    }
  });
  Object.defineProperty(f, "ArrayPattern", {
    enumerable: !0,
    get: function () {
      return c.arrayPattern;
    }
  });
  Object.defineProperty(f, "ArrayTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.arrayTypeAnnotation;
    }
  });
  Object.defineProperty(f, "ArrowFunctionExpression", {
    enumerable: !0,
    get: function () {
      return c.arrowFunctionExpression;
    }
  });
  Object.defineProperty(f, "AssignmentExpression", {
    enumerable: !0,
    get: function () {
      return c.assignmentExpression;
    }
  });
  Object.defineProperty(f, "AssignmentPattern", {
    enumerable: !0,
    get: function () {
      return c.assignmentPattern;
    }
  });
  Object.defineProperty(f, "AwaitExpression", {
    enumerable: !0,
    get: function () {
      return c.awaitExpression;
    }
  });
  Object.defineProperty(f, "BigIntLiteral", {
    enumerable: !0,
    get: function () {
      return c.bigIntLiteral;
    }
  });
  Object.defineProperty(f, "BinaryExpression", {
    enumerable: !0,
    get: function () {
      return c.binaryExpression;
    }
  });
  Object.defineProperty(f, "BindExpression", {
    enumerable: !0,
    get: function () {
      return c.bindExpression;
    }
  });
  Object.defineProperty(f, "BlockStatement", {
    enumerable: !0,
    get: function () {
      return c.blockStatement;
    }
  });
  Object.defineProperty(f, "BooleanLiteral", {
    enumerable: !0,
    get: function () {
      return c.booleanLiteral;
    }
  });
  Object.defineProperty(f, "BooleanLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.booleanLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(f, "BooleanTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.booleanTypeAnnotation;
    }
  });
  Object.defineProperty(f, "BreakStatement", {
    enumerable: !0,
    get: function () {
      return c.breakStatement;
    }
  });
  Object.defineProperty(f, "CallExpression", {
    enumerable: !0,
    get: function () {
      return c.callExpression;
    }
  });
  Object.defineProperty(f, "CatchClause", {
    enumerable: !0,
    get: function () {
      return c.catchClause;
    }
  });
  Object.defineProperty(f, "ClassAccessorProperty", {
    enumerable: !0,
    get: function () {
      return c.classAccessorProperty;
    }
  });
  Object.defineProperty(f, "ClassBody", {
    enumerable: !0,
    get: function () {
      return c.classBody;
    }
  });
  Object.defineProperty(f, "ClassDeclaration", {
    enumerable: !0,
    get: function () {
      return c.classDeclaration;
    }
  });
  Object.defineProperty(f, "ClassExpression", {
    enumerable: !0,
    get: function () {
      return c.classExpression;
    }
  });
  Object.defineProperty(f, "ClassImplements", {
    enumerable: !0,
    get: function () {
      return c.classImplements;
    }
  });
  Object.defineProperty(f, "ClassMethod", {
    enumerable: !0,
    get: function () {
      return c.classMethod;
    }
  });
  Object.defineProperty(f, "ClassPrivateMethod", {
    enumerable: !0,
    get: function () {
      return c.classPrivateMethod;
    }
  });
  Object.defineProperty(f, "ClassPrivateProperty", {
    enumerable: !0,
    get: function () {
      return c.classPrivateProperty;
    }
  });
  Object.defineProperty(f, "ClassProperty", {
    enumerable: !0,
    get: function () {
      return c.classProperty;
    }
  });
  Object.defineProperty(f, "ConditionalExpression", {
    enumerable: !0,
    get: function () {
      return c.conditionalExpression;
    }
  });
  Object.defineProperty(f, "ContinueStatement", {
    enumerable: !0,
    get: function () {
      return c.continueStatement;
    }
  });
  Object.defineProperty(f, "DebuggerStatement", {
    enumerable: !0,
    get: function () {
      return c.debuggerStatement;
    }
  });
  Object.defineProperty(f, "DecimalLiteral", {
    enumerable: !0,
    get: function () {
      return c.decimalLiteral;
    }
  });
  Object.defineProperty(f, "DeclareClass", {
    enumerable: !0,
    get: function () {
      return c.declareClass;
    }
  });
  Object.defineProperty(f, "DeclareExportAllDeclaration", {
    enumerable: !0,
    get: function () {
      return c.declareExportAllDeclaration;
    }
  });
  Object.defineProperty(f, "DeclareExportDeclaration", {
    enumerable: !0,
    get: function () {
      return c.declareExportDeclaration;
    }
  });
  Object.defineProperty(f, "DeclareFunction", {
    enumerable: !0,
    get: function () {
      return c.declareFunction;
    }
  });
  Object.defineProperty(f, "DeclareInterface", {
    enumerable: !0,
    get: function () {
      return c.declareInterface;
    }
  });
  Object.defineProperty(f, "DeclareModule", {
    enumerable: !0,
    get: function () {
      return c.declareModule;
    }
  });
  Object.defineProperty(f, "DeclareModuleExports", {
    enumerable: !0,
    get: function () {
      return c.declareModuleExports;
    }
  });
  Object.defineProperty(f, "DeclareOpaqueType", {
    enumerable: !0,
    get: function () {
      return c.declareOpaqueType;
    }
  });
  Object.defineProperty(f, "DeclareTypeAlias", {
    enumerable: !0,
    get: function () {
      return c.declareTypeAlias;
    }
  });
  Object.defineProperty(f, "DeclareVariable", {
    enumerable: !0,
    get: function () {
      return c.declareVariable;
    }
  });
  Object.defineProperty(f, "DeclaredPredicate", {
    enumerable: !0,
    get: function () {
      return c.declaredPredicate;
    }
  });
  Object.defineProperty(f, "Decorator", {
    enumerable: !0,
    get: function () {
      return c.decorator;
    }
  });
  Object.defineProperty(f, "Directive", {
    enumerable: !0,
    get: function () {
      return c.directive;
    }
  });
  Object.defineProperty(f, "DirectiveLiteral", {
    enumerable: !0,
    get: function () {
      return c.directiveLiteral;
    }
  });
  Object.defineProperty(f, "DoExpression", {
    enumerable: !0,
    get: function () {
      return c.doExpression;
    }
  });
  Object.defineProperty(f, "DoWhileStatement", {
    enumerable: !0,
    get: function () {
      return c.doWhileStatement;
    }
  });
  Object.defineProperty(f, "EmptyStatement", {
    enumerable: !0,
    get: function () {
      return c.emptyStatement;
    }
  });
  Object.defineProperty(f, "EmptyTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.emptyTypeAnnotation;
    }
  });
  Object.defineProperty(f, "EnumBooleanBody", {
    enumerable: !0,
    get: function () {
      return c.enumBooleanBody;
    }
  });
  Object.defineProperty(f, "EnumBooleanMember", {
    enumerable: !0,
    get: function () {
      return c.enumBooleanMember;
    }
  });
  Object.defineProperty(f, "EnumDeclaration", {
    enumerable: !0,
    get: function () {
      return c.enumDeclaration;
    }
  });
  Object.defineProperty(f, "EnumDefaultedMember", {
    enumerable: !0,
    get: function () {
      return c.enumDefaultedMember;
    }
  });
  Object.defineProperty(f, "EnumNumberBody", {
    enumerable: !0,
    get: function () {
      return c.enumNumberBody;
    }
  });
  Object.defineProperty(f, "EnumNumberMember", {
    enumerable: !0,
    get: function () {
      return c.enumNumberMember;
    }
  });
  Object.defineProperty(f, "EnumStringBody", {
    enumerable: !0,
    get: function () {
      return c.enumStringBody;
    }
  });
  Object.defineProperty(f, "EnumStringMember", {
    enumerable: !0,
    get: function () {
      return c.enumStringMember;
    }
  });
  Object.defineProperty(f, "EnumSymbolBody", {
    enumerable: !0,
    get: function () {
      return c.enumSymbolBody;
    }
  });
  Object.defineProperty(f, "ExistsTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.existsTypeAnnotation;
    }
  });
  Object.defineProperty(f, "ExportAllDeclaration", {
    enumerable: !0,
    get: function () {
      return c.exportAllDeclaration;
    }
  });
  Object.defineProperty(f, "ExportDefaultDeclaration", {
    enumerable: !0,
    get: function () {
      return c.exportDefaultDeclaration;
    }
  });
  Object.defineProperty(f, "ExportDefaultSpecifier", {
    enumerable: !0,
    get: function () {
      return c.exportDefaultSpecifier;
    }
  });
  Object.defineProperty(f, "ExportNamedDeclaration", {
    enumerable: !0,
    get: function () {
      return c.exportNamedDeclaration;
    }
  });
  Object.defineProperty(f, "ExportNamespaceSpecifier", {
    enumerable: !0,
    get: function () {
      return c.exportNamespaceSpecifier;
    }
  });
  Object.defineProperty(f, "ExportSpecifier", {
    enumerable: !0,
    get: function () {
      return c.exportSpecifier;
    }
  });
  Object.defineProperty(f, "ExpressionStatement", {
    enumerable: !0,
    get: function () {
      return c.expressionStatement;
    }
  });
  Object.defineProperty(f, "File", {
    enumerable: !0,
    get: function () {
      return c.file;
    }
  });
  Object.defineProperty(f, "ForInStatement", {
    enumerable: !0,
    get: function () {
      return c.forInStatement;
    }
  });
  Object.defineProperty(f, "ForOfStatement", {
    enumerable: !0,
    get: function () {
      return c.forOfStatement;
    }
  });
  Object.defineProperty(f, "ForStatement", {
    enumerable: !0,
    get: function () {
      return c.forStatement;
    }
  });
  Object.defineProperty(f, "FunctionDeclaration", {
    enumerable: !0,
    get: function () {
      return c.functionDeclaration;
    }
  });
  Object.defineProperty(f, "FunctionExpression", {
    enumerable: !0,
    get: function () {
      return c.functionExpression;
    }
  });
  Object.defineProperty(f, "FunctionTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.functionTypeAnnotation;
    }
  });
  Object.defineProperty(f, "FunctionTypeParam", {
    enumerable: !0,
    get: function () {
      return c.functionTypeParam;
    }
  });
  Object.defineProperty(f, "GenericTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.genericTypeAnnotation;
    }
  });
  Object.defineProperty(f, "Identifier", {
    enumerable: !0,
    get: function () {
      return c.identifier;
    }
  });
  Object.defineProperty(f, "IfStatement", {
    enumerable: !0,
    get: function () {
      return c.ifStatement;
    }
  });
  Object.defineProperty(f, "Import", {
    enumerable: !0,
    get: function () {
      return c.import;
    }
  });
  Object.defineProperty(f, "ImportAttribute", {
    enumerable: !0,
    get: function () {
      return c.importAttribute;
    }
  });
  Object.defineProperty(f, "ImportDeclaration", {
    enumerable: !0,
    get: function () {
      return c.importDeclaration;
    }
  });
  Object.defineProperty(f, "ImportDefaultSpecifier", {
    enumerable: !0,
    get: function () {
      return c.importDefaultSpecifier;
    }
  });
  Object.defineProperty(f, "ImportNamespaceSpecifier", {
    enumerable: !0,
    get: function () {
      return c.importNamespaceSpecifier;
    }
  });
  Object.defineProperty(f, "ImportSpecifier", {
    enumerable: !0,
    get: function () {
      return c.importSpecifier;
    }
  });
  Object.defineProperty(f, "IndexedAccessType", {
    enumerable: !0,
    get: function () {
      return c.indexedAccessType;
    }
  });
  Object.defineProperty(f, "InferredPredicate", {
    enumerable: !0,
    get: function () {
      return c.inferredPredicate;
    }
  });
  Object.defineProperty(f, "InterfaceDeclaration", {
    enumerable: !0,
    get: function () {
      return c.interfaceDeclaration;
    }
  });
  Object.defineProperty(f, "InterfaceExtends", {
    enumerable: !0,
    get: function () {
      return c.interfaceExtends;
    }
  });
  Object.defineProperty(f, "InterfaceTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.interfaceTypeAnnotation;
    }
  });
  Object.defineProperty(f, "InterpreterDirective", {
    enumerable: !0,
    get: function () {
      return c.interpreterDirective;
    }
  });
  Object.defineProperty(f, "IntersectionTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.intersectionTypeAnnotation;
    }
  });
  Object.defineProperty(f, "JSXAttribute", {
    enumerable: !0,
    get: function () {
      return c.jsxAttribute;
    }
  });
  Object.defineProperty(f, "JSXClosingElement", {
    enumerable: !0,
    get: function () {
      return c.jsxClosingElement;
    }
  });
  Object.defineProperty(f, "JSXClosingFragment", {
    enumerable: !0,
    get: function () {
      return c.jsxClosingFragment;
    }
  });
  Object.defineProperty(f, "JSXElement", {
    enumerable: !0,
    get: function () {
      return c.jsxElement;
    }
  });
  Object.defineProperty(f, "JSXEmptyExpression", {
    enumerable: !0,
    get: function () {
      return c.jsxEmptyExpression;
    }
  });
  Object.defineProperty(f, "JSXExpressionContainer", {
    enumerable: !0,
    get: function () {
      return c.jsxExpressionContainer;
    }
  });
  Object.defineProperty(f, "JSXFragment", {
    enumerable: !0,
    get: function () {
      return c.jsxFragment;
    }
  });
  Object.defineProperty(f, "JSXIdentifier", {
    enumerable: !0,
    get: function () {
      return c.jsxIdentifier;
    }
  });
  Object.defineProperty(f, "JSXMemberExpression", {
    enumerable: !0,
    get: function () {
      return c.jsxMemberExpression;
    }
  });
  Object.defineProperty(f, "JSXNamespacedName", {
    enumerable: !0,
    get: function () {
      return c.jsxNamespacedName;
    }
  });
  Object.defineProperty(f, "JSXOpeningElement", {
    enumerable: !0,
    get: function () {
      return c.jsxOpeningElement;
    }
  });
  Object.defineProperty(f, "JSXOpeningFragment", {
    enumerable: !0,
    get: function () {
      return c.jsxOpeningFragment;
    }
  });
  Object.defineProperty(f, "JSXSpreadAttribute", {
    enumerable: !0,
    get: function () {
      return c.jsxSpreadAttribute;
    }
  });
  Object.defineProperty(f, "JSXSpreadChild", {
    enumerable: !0,
    get: function () {
      return c.jsxSpreadChild;
    }
  });
  Object.defineProperty(f, "JSXText", {
    enumerable: !0,
    get: function () {
      return c.jsxText;
    }
  });
  Object.defineProperty(f, "LabeledStatement", {
    enumerable: !0,
    get: function () {
      return c.labeledStatement;
    }
  });
  Object.defineProperty(f, "LogicalExpression", {
    enumerable: !0,
    get: function () {
      return c.logicalExpression;
    }
  });
  Object.defineProperty(f, "MemberExpression", {
    enumerable: !0,
    get: function () {
      return c.memberExpression;
    }
  });
  Object.defineProperty(f, "MetaProperty", {
    enumerable: !0,
    get: function () {
      return c.metaProperty;
    }
  });
  Object.defineProperty(f, "MixedTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.mixedTypeAnnotation;
    }
  });
  Object.defineProperty(f, "ModuleExpression", {
    enumerable: !0,
    get: function () {
      return c.moduleExpression;
    }
  });
  Object.defineProperty(f, "NewExpression", {
    enumerable: !0,
    get: function () {
      return c.newExpression;
    }
  });
  Object.defineProperty(f, "Noop", {
    enumerable: !0,
    get: function () {
      return c.noop;
    }
  });
  Object.defineProperty(f, "NullLiteral", {
    enumerable: !0,
    get: function () {
      return c.nullLiteral;
    }
  });
  Object.defineProperty(f, "NullLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.nullLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(f, "NullableTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.nullableTypeAnnotation;
    }
  });
  Object.defineProperty(f, "NumberLiteral", {
    enumerable: !0,
    get: function () {
      return c.numberLiteral;
    }
  });
  Object.defineProperty(f, "NumberLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.numberLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(f, "NumberTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.numberTypeAnnotation;
    }
  });
  Object.defineProperty(f, "NumericLiteral", {
    enumerable: !0,
    get: function () {
      return c.numericLiteral;
    }
  });
  Object.defineProperty(f, "ObjectExpression", {
    enumerable: !0,
    get: function () {
      return c.objectExpression;
    }
  });
  Object.defineProperty(f, "ObjectMethod", {
    enumerable: !0,
    get: function () {
      return c.objectMethod;
    }
  });
  Object.defineProperty(f, "ObjectPattern", {
    enumerable: !0,
    get: function () {
      return c.objectPattern;
    }
  });
  Object.defineProperty(f, "ObjectProperty", {
    enumerable: !0,
    get: function () {
      return c.objectProperty;
    }
  });
  Object.defineProperty(f, "ObjectTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.objectTypeAnnotation;
    }
  });
  Object.defineProperty(f, "ObjectTypeCallProperty", {
    enumerable: !0,
    get: function () {
      return c.objectTypeCallProperty;
    }
  });
  Object.defineProperty(f, "ObjectTypeIndexer", {
    enumerable: !0,
    get: function () {
      return c.objectTypeIndexer;
    }
  });
  Object.defineProperty(f, "ObjectTypeInternalSlot", {
    enumerable: !0,
    get: function () {
      return c.objectTypeInternalSlot;
    }
  });
  Object.defineProperty(f, "ObjectTypeProperty", {
    enumerable: !0,
    get: function () {
      return c.objectTypeProperty;
    }
  });
  Object.defineProperty(f, "ObjectTypeSpreadProperty", {
    enumerable: !0,
    get: function () {
      return c.objectTypeSpreadProperty;
    }
  });
  Object.defineProperty(f, "OpaqueType", {
    enumerable: !0,
    get: function () {
      return c.opaqueType;
    }
  });
  Object.defineProperty(f, "OptionalCallExpression", {
    enumerable: !0,
    get: function () {
      return c.optionalCallExpression;
    }
  });
  Object.defineProperty(f, "OptionalIndexedAccessType", {
    enumerable: !0,
    get: function () {
      return c.optionalIndexedAccessType;
    }
  });
  Object.defineProperty(f, "OptionalMemberExpression", {
    enumerable: !0,
    get: function () {
      return c.optionalMemberExpression;
    }
  });
  Object.defineProperty(f, "ParenthesizedExpression", {
    enumerable: !0,
    get: function () {
      return c.parenthesizedExpression;
    }
  });
  Object.defineProperty(f, "PipelineBareFunction", {
    enumerable: !0,
    get: function () {
      return c.pipelineBareFunction;
    }
  });
  Object.defineProperty(f, "PipelinePrimaryTopicReference", {
    enumerable: !0,
    get: function () {
      return c.pipelinePrimaryTopicReference;
    }
  });
  Object.defineProperty(f, "PipelineTopicExpression", {
    enumerable: !0,
    get: function () {
      return c.pipelineTopicExpression;
    }
  });
  Object.defineProperty(f, "Placeholder", {
    enumerable: !0,
    get: function () {
      return c.placeholder;
    }
  });
  Object.defineProperty(f, "PrivateName", {
    enumerable: !0,
    get: function () {
      return c.privateName;
    }
  });
  Object.defineProperty(f, "Program", {
    enumerable: !0,
    get: function () {
      return c.program;
    }
  });
  Object.defineProperty(f, "QualifiedTypeIdentifier", {
    enumerable: !0,
    get: function () {
      return c.qualifiedTypeIdentifier;
    }
  });
  Object.defineProperty(f, "RecordExpression", {
    enumerable: !0,
    get: function () {
      return c.recordExpression;
    }
  });
  Object.defineProperty(f, "RegExpLiteral", {
    enumerable: !0,
    get: function () {
      return c.regExpLiteral;
    }
  });
  Object.defineProperty(f, "RegexLiteral", {
    enumerable: !0,
    get: function () {
      return c.regexLiteral;
    }
  });
  Object.defineProperty(f, "RestElement", {
    enumerable: !0,
    get: function () {
      return c.restElement;
    }
  });
  Object.defineProperty(f, "RestProperty", {
    enumerable: !0,
    get: function () {
      return c.restProperty;
    }
  });
  Object.defineProperty(f, "ReturnStatement", {
    enumerable: !0,
    get: function () {
      return c.returnStatement;
    }
  });
  Object.defineProperty(f, "SequenceExpression", {
    enumerable: !0,
    get: function () {
      return c.sequenceExpression;
    }
  });
  Object.defineProperty(f, "SpreadElement", {
    enumerable: !0,
    get: function () {
      return c.spreadElement;
    }
  });
  Object.defineProperty(f, "SpreadProperty", {
    enumerable: !0,
    get: function () {
      return c.spreadProperty;
    }
  });
  Object.defineProperty(f, "StaticBlock", {
    enumerable: !0,
    get: function () {
      return c.staticBlock;
    }
  });
  Object.defineProperty(f, "StringLiteral", {
    enumerable: !0,
    get: function () {
      return c.stringLiteral;
    }
  });
  Object.defineProperty(f, "StringLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.stringLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(f, "StringTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.stringTypeAnnotation;
    }
  });
  Object.defineProperty(f, "Super", {
    enumerable: !0,
    get: function () {
      return c.super;
    }
  });
  Object.defineProperty(f, "SwitchCase", {
    enumerable: !0,
    get: function () {
      return c.switchCase;
    }
  });
  Object.defineProperty(f, "SwitchStatement", {
    enumerable: !0,
    get: function () {
      return c.switchStatement;
    }
  });
  Object.defineProperty(f, "SymbolTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.symbolTypeAnnotation;
    }
  });
  Object.defineProperty(f, "TSAnyKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsAnyKeyword;
    }
  });
  Object.defineProperty(f, "TSArrayType", {
    enumerable: !0,
    get: function () {
      return c.tsArrayType;
    }
  });
  Object.defineProperty(f, "TSAsExpression", {
    enumerable: !0,
    get: function () {
      return c.tsAsExpression;
    }
  });
  Object.defineProperty(f, "TSBigIntKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsBigIntKeyword;
    }
  });
  Object.defineProperty(f, "TSBooleanKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsBooleanKeyword;
    }
  });
  Object.defineProperty(f, "TSCallSignatureDeclaration", {
    enumerable: !0,
    get: function () {
      return c.tsCallSignatureDeclaration;
    }
  });
  Object.defineProperty(f, "TSConditionalType", {
    enumerable: !0,
    get: function () {
      return c.tsConditionalType;
    }
  });
  Object.defineProperty(f, "TSConstructSignatureDeclaration", {
    enumerable: !0,
    get: function () {
      return c.tsConstructSignatureDeclaration;
    }
  });
  Object.defineProperty(f, "TSConstructorType", {
    enumerable: !0,
    get: function () {
      return c.tsConstructorType;
    }
  });
  Object.defineProperty(f, "TSDeclareFunction", {
    enumerable: !0,
    get: function () {
      return c.tsDeclareFunction;
    }
  });
  Object.defineProperty(f, "TSDeclareMethod", {
    enumerable: !0,
    get: function () {
      return c.tsDeclareMethod;
    }
  });
  Object.defineProperty(f, "TSEnumDeclaration", {
    enumerable: !0,
    get: function () {
      return c.tsEnumDeclaration;
    }
  });
  Object.defineProperty(f, "TSEnumMember", {
    enumerable: !0,
    get: function () {
      return c.tsEnumMember;
    }
  });
  Object.defineProperty(f, "TSExportAssignment", {
    enumerable: !0,
    get: function () {
      return c.tsExportAssignment;
    }
  });
  Object.defineProperty(f, "TSExpressionWithTypeArguments", {
    enumerable: !0,
    get: function () {
      return c.tsExpressionWithTypeArguments;
    }
  });
  Object.defineProperty(f, "TSExternalModuleReference", {
    enumerable: !0,
    get: function () {
      return c.tsExternalModuleReference;
    }
  });
  Object.defineProperty(f, "TSFunctionType", {
    enumerable: !0,
    get: function () {
      return c.tsFunctionType;
    }
  });
  Object.defineProperty(f, "TSImportEqualsDeclaration", {
    enumerable: !0,
    get: function () {
      return c.tsImportEqualsDeclaration;
    }
  });
  Object.defineProperty(f, "TSImportType", {
    enumerable: !0,
    get: function () {
      return c.tsImportType;
    }
  });
  Object.defineProperty(f, "TSIndexSignature", {
    enumerable: !0,
    get: function () {
      return c.tsIndexSignature;
    }
  });
  Object.defineProperty(f, "TSIndexedAccessType", {
    enumerable: !0,
    get: function () {
      return c.tsIndexedAccessType;
    }
  });
  Object.defineProperty(f, "TSInferType", {
    enumerable: !0,
    get: function () {
      return c.tsInferType;
    }
  });
  Object.defineProperty(f, "TSInstantiationExpression", {
    enumerable: !0,
    get: function () {
      return c.tsInstantiationExpression;
    }
  });
  Object.defineProperty(f, "TSInterfaceBody", {
    enumerable: !0,
    get: function () {
      return c.tsInterfaceBody;
    }
  });
  Object.defineProperty(f, "TSInterfaceDeclaration", {
    enumerable: !0,
    get: function () {
      return c.tsInterfaceDeclaration;
    }
  });
  Object.defineProperty(f, "TSIntersectionType", {
    enumerable: !0,
    get: function () {
      return c.tsIntersectionType;
    }
  });
  Object.defineProperty(f, "TSIntrinsicKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsIntrinsicKeyword;
    }
  });
  Object.defineProperty(f, "TSLiteralType", {
    enumerable: !0,
    get: function () {
      return c.tsLiteralType;
    }
  });
  Object.defineProperty(f, "TSMappedType", {
    enumerable: !0,
    get: function () {
      return c.tsMappedType;
    }
  });
  Object.defineProperty(f, "TSMethodSignature", {
    enumerable: !0,
    get: function () {
      return c.tsMethodSignature;
    }
  });
  Object.defineProperty(f, "TSModuleBlock", {
    enumerable: !0,
    get: function () {
      return c.tsModuleBlock;
    }
  });
  Object.defineProperty(f, "TSModuleDeclaration", {
    enumerable: !0,
    get: function () {
      return c.tsModuleDeclaration;
    }
  });
  Object.defineProperty(f, "TSNamedTupleMember", {
    enumerable: !0,
    get: function () {
      return c.tsNamedTupleMember;
    }
  });
  Object.defineProperty(f, "TSNamespaceExportDeclaration", {
    enumerable: !0,
    get: function () {
      return c.tsNamespaceExportDeclaration;
    }
  });
  Object.defineProperty(f, "TSNeverKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsNeverKeyword;
    }
  });
  Object.defineProperty(f, "TSNonNullExpression", {
    enumerable: !0,
    get: function () {
      return c.tsNonNullExpression;
    }
  });
  Object.defineProperty(f, "TSNullKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsNullKeyword;
    }
  });
  Object.defineProperty(f, "TSNumberKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsNumberKeyword;
    }
  });
  Object.defineProperty(f, "TSObjectKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsObjectKeyword;
    }
  });
  Object.defineProperty(f, "TSOptionalType", {
    enumerable: !0,
    get: function () {
      return c.tsOptionalType;
    }
  });
  Object.defineProperty(f, "TSParameterProperty", {
    enumerable: !0,
    get: function () {
      return c.tsParameterProperty;
    }
  });
  Object.defineProperty(f, "TSParenthesizedType", {
    enumerable: !0,
    get: function () {
      return c.tsParenthesizedType;
    }
  });
  Object.defineProperty(f, "TSPropertySignature", {
    enumerable: !0,
    get: function () {
      return c.tsPropertySignature;
    }
  });
  Object.defineProperty(f, "TSQualifiedName", {
    enumerable: !0,
    get: function () {
      return c.tsQualifiedName;
    }
  });
  Object.defineProperty(f, "TSRestType", {
    enumerable: !0,
    get: function () {
      return c.tsRestType;
    }
  });
  Object.defineProperty(f, "TSStringKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsStringKeyword;
    }
  });
  Object.defineProperty(f, "TSSymbolKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsSymbolKeyword;
    }
  });
  Object.defineProperty(f, "TSThisType", {
    enumerable: !0,
    get: function () {
      return c.tsThisType;
    }
  });
  Object.defineProperty(f, "TSTupleType", {
    enumerable: !0,
    get: function () {
      return c.tsTupleType;
    }
  });
  Object.defineProperty(f, "TSTypeAliasDeclaration", {
    enumerable: !0,
    get: function () {
      return c.tsTypeAliasDeclaration;
    }
  });
  Object.defineProperty(f, "TSTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.tsTypeAnnotation;
    }
  });
  Object.defineProperty(f, "TSTypeAssertion", {
    enumerable: !0,
    get: function () {
      return c.tsTypeAssertion;
    }
  });
  Object.defineProperty(f, "TSTypeLiteral", {
    enumerable: !0,
    get: function () {
      return c.tsTypeLiteral;
    }
  });
  Object.defineProperty(f, "TSTypeOperator", {
    enumerable: !0,
    get: function () {
      return c.tsTypeOperator;
    }
  });
  Object.defineProperty(f, "TSTypeParameter", {
    enumerable: !0,
    get: function () {
      return c.tsTypeParameter;
    }
  });
  Object.defineProperty(f, "TSTypeParameterDeclaration", {
    enumerable: !0,
    get: function () {
      return c.tsTypeParameterDeclaration;
    }
  });
  Object.defineProperty(f, "TSTypeParameterInstantiation", {
    enumerable: !0,
    get: function () {
      return c.tsTypeParameterInstantiation;
    }
  });
  Object.defineProperty(f, "TSTypePredicate", {
    enumerable: !0,
    get: function () {
      return c.tsTypePredicate;
    }
  });
  Object.defineProperty(f, "TSTypeQuery", {
    enumerable: !0,
    get: function () {
      return c.tsTypeQuery;
    }
  });
  Object.defineProperty(f, "TSTypeReference", {
    enumerable: !0,
    get: function () {
      return c.tsTypeReference;
    }
  });
  Object.defineProperty(f, "TSUndefinedKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsUndefinedKeyword;
    }
  });
  Object.defineProperty(f, "TSUnionType", {
    enumerable: !0,
    get: function () {
      return c.tsUnionType;
    }
  });
  Object.defineProperty(f, "TSUnknownKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsUnknownKeyword;
    }
  });
  Object.defineProperty(f, "TSVoidKeyword", {
    enumerable: !0,
    get: function () {
      return c.tsVoidKeyword;
    }
  });
  Object.defineProperty(f, "TaggedTemplateExpression", {
    enumerable: !0,
    get: function () {
      return c.taggedTemplateExpression;
    }
  });
  Object.defineProperty(f, "TemplateElement", {
    enumerable: !0,
    get: function () {
      return c.templateElement;
    }
  });
  Object.defineProperty(f, "TemplateLiteral", {
    enumerable: !0,
    get: function () {
      return c.templateLiteral;
    }
  });
  Object.defineProperty(f, "ThisExpression", {
    enumerable: !0,
    get: function () {
      return c.thisExpression;
    }
  });
  Object.defineProperty(f, "ThisTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.thisTypeAnnotation;
    }
  });
  Object.defineProperty(f, "ThrowStatement", {
    enumerable: !0,
    get: function () {
      return c.throwStatement;
    }
  });
  Object.defineProperty(f, "TopicReference", {
    enumerable: !0,
    get: function () {
      return c.topicReference;
    }
  });
  Object.defineProperty(f, "TryStatement", {
    enumerable: !0,
    get: function () {
      return c.tryStatement;
    }
  });
  Object.defineProperty(f, "TupleExpression", {
    enumerable: !0,
    get: function () {
      return c.tupleExpression;
    }
  });
  Object.defineProperty(f, "TupleTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.tupleTypeAnnotation;
    }
  });
  Object.defineProperty(f, "TypeAlias", {
    enumerable: !0,
    get: function () {
      return c.typeAlias;
    }
  });
  Object.defineProperty(f, "TypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.typeAnnotation;
    }
  });
  Object.defineProperty(f, "TypeCastExpression", {
    enumerable: !0,
    get: function () {
      return c.typeCastExpression;
    }
  });
  Object.defineProperty(f, "TypeParameter", {
    enumerable: !0,
    get: function () {
      return c.typeParameter;
    }
  });
  Object.defineProperty(f, "TypeParameterDeclaration", {
    enumerable: !0,
    get: function () {
      return c.typeParameterDeclaration;
    }
  });
  Object.defineProperty(f, "TypeParameterInstantiation", {
    enumerable: !0,
    get: function () {
      return c.typeParameterInstantiation;
    }
  });
  Object.defineProperty(f, "TypeofTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.typeofTypeAnnotation;
    }
  });
  Object.defineProperty(f, "UnaryExpression", {
    enumerable: !0,
    get: function () {
      return c.unaryExpression;
    }
  });
  Object.defineProperty(f, "UnionTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.unionTypeAnnotation;
    }
  });
  Object.defineProperty(f, "UpdateExpression", {
    enumerable: !0,
    get: function () {
      return c.updateExpression;
    }
  });
  Object.defineProperty(f, "V8IntrinsicIdentifier", {
    enumerable: !0,
    get: function () {
      return c.v8IntrinsicIdentifier;
    }
  });
  Object.defineProperty(f, "VariableDeclaration", {
    enumerable: !0,
    get: function () {
      return c.variableDeclaration;
    }
  });
  Object.defineProperty(f, "VariableDeclarator", {
    enumerable: !0,
    get: function () {
      return c.variableDeclarator;
    }
  });
  Object.defineProperty(f, "Variance", {
    enumerable: !0,
    get: function () {
      return c.variance;
    }
  });
  Object.defineProperty(f, "VoidTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return c.voidTypeAnnotation;
    }
  });
  Object.defineProperty(f, "WhileStatement", {
    enumerable: !0,
    get: function () {
      return c.whileStatement;
    }
  });
  Object.defineProperty(f, "WithStatement", {
    enumerable: !0,
    get: function () {
      return c.withStatement;
    }
  });
  Object.defineProperty(f, "YieldExpression", {
    enumerable: !0,
    get: function () {
      return c.yieldExpression;
    }
  });
  var c = q();
});
var Q = x(xt => {
  "use strict";

  Object.defineProperty(xt, "__esModule", {
    value: !0
  });
  xt.default = MA;
  var Fn = k(),
      Rn = C(),
      U = Function.call.bind(Object.prototype.hasOwnProperty);

  function Kn(e, t, r, p) {
    return e && typeof e.type == "string" ? Vn(e, t, r, p) : e;
  }

  n(Kn, "cloneIfNode");

  function Yn(e, t, r, p) {
    return Array.isArray(e) ? e.map(d => Kn(d, t, r, p)) : Kn(e, t, r, p);
  }

  n(Yn, "cloneIfNodeOrArray");

  function MA(e, t = !0, r = !1) {
    return Vn(e, t, r, new Map());
  }

  n(MA, "cloneNode");

  function Vn(e, t = !0, r = !1, p) {
    if (!e) return e;
    let {
      type: d
    } = e,
        m = {
      type: e.type
    };
    if ((0, Rn.isIdentifier)(e)) m.name = e.name, U(e, "optional") && typeof e.optional == "boolean" && (m.optional = e.optional), U(e, "typeAnnotation") && (m.typeAnnotation = t ? Yn(e.typeAnnotation, !0, r, p) : e.typeAnnotation);else if (U(Fn.NODE_FIELDS, d)) for (let E of Object.keys(Fn.NODE_FIELDS[d])) U(e, E) && (t ? m[E] = (0, Rn.isFile)(e) && E === "comments" ? he(e.comments, t, r, p) : Yn(e[E], !0, r, p) : m[E] = e[E]);else throw new Error(`Unknown node type: "${d}"`);
    return U(e, "loc") && (r ? m.loc = null : m.loc = e.loc), U(e, "leadingComments") && (m.leadingComments = he(e.leadingComments, t, r, p)), U(e, "innerComments") && (m.innerComments = he(e.innerComments, t, r, p)), U(e, "trailingComments") && (m.trailingComments = he(e.trailingComments, t, r, p)), U(e, "extra") && (m.extra = Object.assign({}, e.extra)), m;
  }

  n(Vn, "cloneNodeInternal");

  function he(e, t, r, p) {
    return !e || !t ? e : e.map(d => {
      let m = p.get(d);
      if (m) return m;
      let {
        type: E,
        value: v,
        loc: N
      } = d,
          j = {
        type: E,
        value: v,
        loc: N
      };
      return r && (j.loc = null), p.set(d, j), j;
    });
  }

  n(he, "maybeCloneComments");
});
var qn = x(Ot => {
  "use strict";

  Object.defineProperty(Ot, "__esModule", {
    value: !0
  });
  Ot.default = FA;
  var wA = Q();

  function FA(e) {
    return (0, wA.default)(e, !1);
  }

  n(FA, "clone");
});
var kn = x(vt => {
  "use strict";

  Object.defineProperty(vt, "__esModule", {
    value: !0
  });
  vt.default = KA;
  var RA = Q();

  function KA(e) {
    return (0, RA.default)(e);
  }

  n(KA, "cloneDeep");
});
var Xn = x(gt => {
  "use strict";

  Object.defineProperty(gt, "__esModule", {
    value: !0
  });
  gt.default = VA;
  var YA = Q();

  function VA(e) {
    return (0, YA.default)(e, !0, !0);
  }

  n(VA, "cloneDeepWithoutLoc");
});
var Jn = x(It => {
  "use strict";

  Object.defineProperty(It, "__esModule", {
    value: !0
  });
  It.default = kA;
  var qA = Q();

  function kA(e) {
    return (0, qA.default)(e, !1, !0);
  }

  n(kA, "cloneWithoutLoc");
});
var Nt = x(Dt => {
  "use strict";

  Object.defineProperty(Dt, "__esModule", {
    value: !0
  });
  Dt.default = XA;

  function XA(e, t, r) {
    if (!r || !e) return e;
    let p = `${t}Comments`;
    return e[p] ? t === "leading" ? e[p] = r.concat(e[p]) : e[p].push(...r) : e[p] = r, e;
  }

  n(XA, "addComments");
});
var Un = x(_t => {
  "use strict";

  Object.defineProperty(_t, "__esModule", {
    value: !0
  });
  _t.default = UA;
  var JA = Nt();

  function UA(e, t, r, p) {
    return (0, JA.default)(e, t, [{
      type: p ? "CommentLine" : "CommentBlock",
      value: r
    }]);
  }

  n(UA, "addComment");
});
var Le = x(ht => {
  "use strict";

  Object.defineProperty(ht, "__esModule", {
    value: !0
  });
  ht.default = WA;

  function WA(e, t, r) {
    t && r && (t[e] = Array.from(new Set([].concat(t[e], r[e]).filter(Boolean))));
  }

  n(WA, "inherit");
});
var jt = x(Lt => {
  "use strict";

  Object.defineProperty(Lt, "__esModule", {
    value: !0
  });
  Lt.default = $A;
  var GA = Le();

  function $A(e, t) {
    (0, GA.default)("innerComments", e, t);
  }

  n($A, "inheritInnerComments");
});
var Bt = x(Ct => {
  "use strict";

  Object.defineProperty(Ct, "__esModule", {
    value: !0
  });
  Ct.default = QA;
  var zA = Le();

  function QA(e, t) {
    (0, zA.default)("leadingComments", e, t);
  }

  n(QA, "inheritLeadingComments");
});
var wt = x(Mt => {
  "use strict";

  Object.defineProperty(Mt, "__esModule", {
    value: !0
  });
  Mt.default = ZA;
  var HA = Le();

  function ZA(e, t) {
    (0, HA.default)("trailingComments", e, t);
  }

  n(ZA, "inheritTrailingComments");
});
var Rt = x(Ft => {
  "use strict";

  Object.defineProperty(Ft, "__esModule", {
    value: !0
  });
  Ft.default = n0;
  var e0 = wt(),
      t0 = Bt(),
      r0 = jt();

  function n0(e, t) {
    return (0, e0.default)(e, t), (0, t0.default)(e, t), (0, r0.default)(e, t), e;
  }

  n(n0, "inheritsComments");
});
var Wn = x(Kt => {
  "use strict";

  Object.defineProperty(Kt, "__esModule", {
    value: !0
  });
  Kt.default = a0;
  var i0 = G();

  function a0(e) {
    return i0.COMMENT_KEYS.forEach(t => {
      e[t] = null;
    }), e;
  }

  n(a0, "removeComments");
});
var Gn = x(b => {
  "use strict";

  Object.defineProperty(b, "__esModule", {
    value: !0
  });
  b.WHILE_TYPES = b.USERWHITESPACABLE_TYPES = b.UNARYLIKE_TYPES = b.TYPESCRIPT_TYPES = b.TSTYPE_TYPES = b.TSTYPEELEMENT_TYPES = b.TSENTITYNAME_TYPES = b.TSBASETYPE_TYPES = b.TERMINATORLESS_TYPES = b.STATEMENT_TYPES = b.STANDARDIZED_TYPES = b.SCOPABLE_TYPES = b.PUREISH_TYPES = b.PROPERTY_TYPES = b.PRIVATE_TYPES = b.PATTERN_TYPES = b.PATTERNLIKE_TYPES = b.OBJECTMEMBER_TYPES = b.MODULESPECIFIER_TYPES = b.MODULEDECLARATION_TYPES = b.MISCELLANEOUS_TYPES = b.METHOD_TYPES = b.LVAL_TYPES = b.LOOP_TYPES = b.LITERAL_TYPES = b.JSX_TYPES = b.IMMUTABLE_TYPES = b.FUNCTION_TYPES = b.FUNCTIONPARENT_TYPES = b.FOR_TYPES = b.FORXSTATEMENT_TYPES = b.FLOW_TYPES = b.FLOWTYPE_TYPES = b.FLOWPREDICATE_TYPES = b.FLOWDECLARATION_TYPES = b.FLOWBASEANNOTATION_TYPES = b.EXPRESSION_TYPES = b.EXPRESSIONWRAPPER_TYPES = b.EXPORTDECLARATION_TYPES = b.ENUMMEMBER_TYPES = b.ENUMBODY_TYPES = b.DECLARATION_TYPES = b.CONDITIONAL_TYPES = b.COMPLETIONSTATEMENT_TYPES = b.CLASS_TYPES = b.BLOCK_TYPES = b.BLOCKPARENT_TYPES = b.BINARY_TYPES = b.ACCESSOR_TYPES = void 0;
  var I = k(),
      s0 = I.FLIPPED_ALIAS_KEYS.Standardized;
  b.STANDARDIZED_TYPES = s0;
  var o0 = I.FLIPPED_ALIAS_KEYS.Expression;
  b.EXPRESSION_TYPES = o0;
  var u0 = I.FLIPPED_ALIAS_KEYS.Binary;
  b.BINARY_TYPES = u0;
  var l0 = I.FLIPPED_ALIAS_KEYS.Scopable;
  b.SCOPABLE_TYPES = l0;
  var p0 = I.FLIPPED_ALIAS_KEYS.BlockParent;
  b.BLOCKPARENT_TYPES = p0;
  var f0 = I.FLIPPED_ALIAS_KEYS.Block;
  b.BLOCK_TYPES = f0;
  var c0 = I.FLIPPED_ALIAS_KEYS.Statement;
  b.STATEMENT_TYPES = c0;
  var y0 = I.FLIPPED_ALIAS_KEYS.Terminatorless;
  b.TERMINATORLESS_TYPES = y0;
  var d0 = I.FLIPPED_ALIAS_KEYS.CompletionStatement;
  b.COMPLETIONSTATEMENT_TYPES = d0;
  var T0 = I.FLIPPED_ALIAS_KEYS.Conditional;
  b.CONDITIONAL_TYPES = T0;
  var m0 = I.FLIPPED_ALIAS_KEYS.Loop;
  b.LOOP_TYPES = m0;
  var S0 = I.FLIPPED_ALIAS_KEYS.While;
  b.WHILE_TYPES = S0;
  var E0 = I.FLIPPED_ALIAS_KEYS.ExpressionWrapper;
  b.EXPRESSIONWRAPPER_TYPES = E0;
  var b0 = I.FLIPPED_ALIAS_KEYS.For;
  b.FOR_TYPES = b0;
  var P0 = I.FLIPPED_ALIAS_KEYS.ForXStatement;
  b.FORXSTATEMENT_TYPES = P0;
  var A0 = I.FLIPPED_ALIAS_KEYS.Function;
  b.FUNCTION_TYPES = A0;
  var x0 = I.FLIPPED_ALIAS_KEYS.FunctionParent;
  b.FUNCTIONPARENT_TYPES = x0;
  var O0 = I.FLIPPED_ALIAS_KEYS.Pureish;
  b.PUREISH_TYPES = O0;
  var v0 = I.FLIPPED_ALIAS_KEYS.Declaration;
  b.DECLARATION_TYPES = v0;
  var g0 = I.FLIPPED_ALIAS_KEYS.PatternLike;
  b.PATTERNLIKE_TYPES = g0;
  var I0 = I.FLIPPED_ALIAS_KEYS.LVal;
  b.LVAL_TYPES = I0;
  var D0 = I.FLIPPED_ALIAS_KEYS.TSEntityName;
  b.TSENTITYNAME_TYPES = D0;
  var N0 = I.FLIPPED_ALIAS_KEYS.Literal;
  b.LITERAL_TYPES = N0;
  var _0 = I.FLIPPED_ALIAS_KEYS.Immutable;
  b.IMMUTABLE_TYPES = _0;
  var h0 = I.FLIPPED_ALIAS_KEYS.UserWhitespacable;
  b.USERWHITESPACABLE_TYPES = h0;
  var L0 = I.FLIPPED_ALIAS_KEYS.Method;
  b.METHOD_TYPES = L0;
  var j0 = I.FLIPPED_ALIAS_KEYS.ObjectMember;
  b.OBJECTMEMBER_TYPES = j0;
  var C0 = I.FLIPPED_ALIAS_KEYS.Property;
  b.PROPERTY_TYPES = C0;
  var B0 = I.FLIPPED_ALIAS_KEYS.UnaryLike;
  b.UNARYLIKE_TYPES = B0;
  var M0 = I.FLIPPED_ALIAS_KEYS.Pattern;
  b.PATTERN_TYPES = M0;
  var w0 = I.FLIPPED_ALIAS_KEYS.Class;
  b.CLASS_TYPES = w0;
  var F0 = I.FLIPPED_ALIAS_KEYS.ModuleDeclaration;
  b.MODULEDECLARATION_TYPES = F0;
  var R0 = I.FLIPPED_ALIAS_KEYS.ExportDeclaration;
  b.EXPORTDECLARATION_TYPES = R0;
  var K0 = I.FLIPPED_ALIAS_KEYS.ModuleSpecifier;
  b.MODULESPECIFIER_TYPES = K0;
  var Y0 = I.FLIPPED_ALIAS_KEYS.Accessor;
  b.ACCESSOR_TYPES = Y0;
  var V0 = I.FLIPPED_ALIAS_KEYS.Private;
  b.PRIVATE_TYPES = V0;
  var q0 = I.FLIPPED_ALIAS_KEYS.Flow;
  b.FLOW_TYPES = q0;
  var k0 = I.FLIPPED_ALIAS_KEYS.FlowType;
  b.FLOWTYPE_TYPES = k0;
  var X0 = I.FLIPPED_ALIAS_KEYS.FlowBaseAnnotation;
  b.FLOWBASEANNOTATION_TYPES = X0;
  var J0 = I.FLIPPED_ALIAS_KEYS.FlowDeclaration;
  b.FLOWDECLARATION_TYPES = J0;
  var U0 = I.FLIPPED_ALIAS_KEYS.FlowPredicate;
  b.FLOWPREDICATE_TYPES = U0;
  var W0 = I.FLIPPED_ALIAS_KEYS.EnumBody;
  b.ENUMBODY_TYPES = W0;
  var G0 = I.FLIPPED_ALIAS_KEYS.EnumMember;
  b.ENUMMEMBER_TYPES = G0;
  var $0 = I.FLIPPED_ALIAS_KEYS.JSX;
  b.JSX_TYPES = $0;
  var z0 = I.FLIPPED_ALIAS_KEYS.Miscellaneous;
  b.MISCELLANEOUS_TYPES = z0;
  var Q0 = I.FLIPPED_ALIAS_KEYS.TypeScript;
  b.TYPESCRIPT_TYPES = Q0;
  var H0 = I.FLIPPED_ALIAS_KEYS.TSTypeElement;
  b.TSTYPEELEMENT_TYPES = H0;
  var Z0 = I.FLIPPED_ALIAS_KEYS.TSType;
  b.TSTYPE_TYPES = Z0;
  var ex = I.FLIPPED_ALIAS_KEYS.TSBaseType;
  b.TSBASETYPE_TYPES = ex;
});
var qt = x(Vt => {
  "use strict";

  Object.defineProperty(Vt, "__esModule", {
    value: !0
  });
  Vt.default = tx;
  var je = C(),
      Yt = q();

  function tx(e, t) {
    if ((0, je.isBlockStatement)(e)) return e;
    let r = [];
    return (0, je.isEmptyStatement)(e) ? r = [] : ((0, je.isStatement)(e) || ((0, je.isFunction)(t) ? e = (0, Yt.returnStatement)(e) : e = (0, Yt.expressionStatement)(e)), r = [e]), (0, Yt.blockStatement)(r);
  }

  n(tx, "toBlock");
});
var $n = x(kt => {
  "use strict";

  Object.defineProperty(kt, "__esModule", {
    value: !0
  });
  kt.default = nx;
  var rx = qt();

  function nx(e, t = "body") {
    return e[t] = (0, rx.default)(e[t], e);
  }

  n(nx, "ensureBlock");
});
var Jt = x(Xt => {
  "use strict";

  Object.defineProperty(Xt, "__esModule", {
    value: !0
  });
  Xt.default = sx;
  var ix = ne(),
      ax = ___babel_helper_validator_identifier$;

  function sx(e) {
    e = e + "";
    let t = "";

    for (let r of e) t += (0, ax.isIdentifierChar)(r.codePointAt(0)) ? r : "-";

    return t = t.replace(/^[-0-9]+/, ""), t = t.replace(/[-\s]+(.)?/g, function (r, p) {
      return p ? p.toUpperCase() : "";
    }), (0, ix.default)(t) || (t = `_${t}`), t || "_";
  }

  n(sx, "toIdentifier");
});
var zn = x(Ut => {
  "use strict";

  Object.defineProperty(Ut, "__esModule", {
    value: !0
  });
  Ut.default = ux;
  var ox = Jt();

  function ux(e) {
    return e = (0, ox.default)(e), (e === "eval" || e === "arguments") && (e = "_" + e), e;
  }

  n(ux, "toBindingIdentifierName");
});
var Qn = x(Wt => {
  "use strict";

  Object.defineProperty(Wt, "__esModule", {
    value: !0
  });
  Wt.default = fx;
  var lx = C(),
      px = q();

  function fx(e, t = e.key || e.property) {
    return !e.computed && (0, lx.isIdentifier)(t) && (t = (0, px.stringLiteral)(t.name)), t;
  }

  n(fx, "toComputedKey");
});
var Hn = x(Ce => {
  "use strict";

  Object.defineProperty(Ce, "__esModule", {
    value: !0
  });
  Ce.default = void 0;
  var ce = C(),
      cx = yx;
  Ce.default = cx;

  function yx(e) {
    if ((0, ce.isExpressionStatement)(e) && (e = e.expression), (0, ce.isExpression)(e)) return e;
    if ((0, ce.isClass)(e) ? e.type = "ClassExpression" : (0, ce.isFunction)(e) && (e.type = "FunctionExpression"), !(0, ce.isExpression)(e)) throw new Error(`cannot turn ${e.type} to an expression`);
    return e;
  }

  n(yx, "toExpression");
});
var zt = x($t => {
  "use strict";

  Object.defineProperty($t, "__esModule", {
    value: !0
  });
  $t.default = Gt;
  var dx = k();

  function Gt(e, t, r) {
    if (!e) return;
    let p = dx.VISITOR_KEYS[e.type];

    if (!!p) {
      r = r || {}, t(e, r);

      for (let d of p) {
        let m = e[d];
        if (Array.isArray(m)) for (let E of m) Gt(E, t, r);else Gt(m, t, r);
      }
    }
  }

  n(Gt, "traverseFast");
});
var Ht = x(Qt => {
  "use strict";

  Object.defineProperty(Qt, "__esModule", {
    value: !0
  });
  Qt.default = Sx;
  var Tx = G(),
      Zn = ["tokens", "start", "end", "loc", "raw", "rawValue"],
      mx = Tx.COMMENT_KEYS.concat(["comments"]).concat(Zn);

  function Sx(e, t = {}) {
    let r = t.preserveComments ? Zn : mx;

    for (let d of r) e[d] != null && (e[d] = void 0);

    for (let d of Object.keys(e)) d[0] === "_" && e[d] != null && (e[d] = void 0);

    let p = Object.getOwnPropertySymbols(e);

    for (let d of p) e[d] = null;
  }

  n(Sx, "removeProperties");
});
var er = x(Zt => {
  "use strict";

  Object.defineProperty(Zt, "__esModule", {
    value: !0
  });
  Zt.default = Px;
  var Ex = zt(),
      bx = Ht();

  function Px(e, t) {
    return (0, Ex.default)(e, bx.default, t), e;
  }

  n(Px, "removePropertiesDeep");
});
var ti = x(tr => {
  "use strict";

  Object.defineProperty(tr, "__esModule", {
    value: !0
  });
  tr.default = Z;
  var ei = C(),
      Ax = Q(),
      xx = er();

  function Z(e, t = e.key) {
    let r;
    return e.kind === "method" ? Z.increment() + "" : ((0, ei.isIdentifier)(t) ? r = t.name : (0, ei.isStringLiteral)(t) ? r = JSON.stringify(t.value) : r = JSON.stringify((0, xx.default)((0, Ax.default)(t))), e.computed && (r = `[${r}]`), e.static && (r = `static:${r}`), r);
  }

  n(Z, "toKeyAlias");
  Z.uid = 0;

  Z.increment = function () {
    return Z.uid >= Number.MAX_SAFE_INTEGER ? Z.uid = 0 : Z.uid++;
  };
});
var ye = x(nr => {
  "use strict";

  Object.defineProperty(nr, "__esModule", {
    value: !0
  });
  nr.default = rr;
  var se = C();

  function rr(e, t, r) {
    let p = [].concat(e),
        d = Object.create(null);

    for (; p.length;) {
      let m = p.shift();
      if (!m) continue;
      let E = rr.keys[m.type];

      if ((0, se.isIdentifier)(m)) {
        t ? (d[m.name] = d[m.name] || []).push(m) : d[m.name] = m;
        continue;
      }

      if ((0, se.isExportDeclaration)(m) && !(0, se.isExportAllDeclaration)(m)) {
        (0, se.isDeclaration)(m.declaration) && p.push(m.declaration);
        continue;
      }

      if (r) {
        if ((0, se.isFunctionDeclaration)(m)) {
          p.push(m.id);
          continue;
        }

        if ((0, se.isFunctionExpression)(m)) continue;
      }

      if (E) for (let v = 0; v < E.length; v++) {
        let N = E[v];
        m[N] && (p = p.concat(m[N]));
      }
    }

    return d;
  }

  n(rr, "getBindingIdentifiers");
  rr.keys = {
    DeclareClass: ["id"],
    DeclareFunction: ["id"],
    DeclareModule: ["id"],
    DeclareVariable: ["id"],
    DeclareInterface: ["id"],
    DeclareTypeAlias: ["id"],
    DeclareOpaqueType: ["id"],
    InterfaceDeclaration: ["id"],
    TypeAlias: ["id"],
    OpaqueType: ["id"],
    CatchClause: ["param"],
    LabeledStatement: ["label"],
    UnaryExpression: ["argument"],
    AssignmentExpression: ["left"],
    ImportSpecifier: ["local"],
    ImportNamespaceSpecifier: ["local"],
    ImportDefaultSpecifier: ["local"],
    ImportDeclaration: ["specifiers"],
    ExportSpecifier: ["exported"],
    ExportNamespaceSpecifier: ["exported"],
    ExportDefaultSpecifier: ["exported"],
    FunctionDeclaration: ["id", "params"],
    FunctionExpression: ["id", "params"],
    ArrowFunctionExpression: ["params"],
    ObjectMethod: ["params"],
    ClassMethod: ["params"],
    ClassPrivateMethod: ["params"],
    ForInStatement: ["left"],
    ForOfStatement: ["left"],
    ClassDeclaration: ["id"],
    ClassExpression: ["id"],
    RestElement: ["argument"],
    UpdateExpression: ["argument"],
    ObjectProperty: ["value"],
    AssignmentPattern: ["left"],
    ArrayPattern: ["elements"],
    ObjectPattern: ["properties"],
    VariableDeclaration: ["declarations"],
    VariableDeclarator: ["id"]
  };
});
var ri = x(ar => {
  "use strict";

  Object.defineProperty(ar, "__esModule", {
    value: !0
  });
  ar.default = Be;
  var Ox = ye(),
      ee = C(),
      ir = q(),
      vx = Q();

  function Be(e, t, r) {
    let p = [],
        d = !0;

    for (let m of e) if ((0, ee.isEmptyStatement)(m) || (d = !1), (0, ee.isExpression)(m)) p.push(m);else if ((0, ee.isExpressionStatement)(m)) p.push(m.expression);else if ((0, ee.isVariableDeclaration)(m)) {
      if (m.kind !== "var") return;

      for (let E of m.declarations) {
        let v = (0, Ox.default)(E);

        for (let N of Object.keys(v)) r.push({
          kind: m.kind,
          id: (0, vx.default)(v[N])
        });

        E.init && p.push((0, ir.assignmentExpression)("=", E.id, E.init));
      }

      d = !0;
    } else if ((0, ee.isIfStatement)(m)) {
      let E = m.consequent ? Be([m.consequent], t, r) : t.buildUndefinedNode(),
          v = m.alternate ? Be([m.alternate], t, r) : t.buildUndefinedNode();
      if (!E || !v) return;
      p.push((0, ir.conditionalExpression)(m.test, E, v));
    } else if ((0, ee.isBlockStatement)(m)) {
      let E = Be(m.body, t, r);
      if (!E) return;
      p.push(E);
    } else if ((0, ee.isEmptyStatement)(m)) e.indexOf(m) === 0 && (d = !0);else return;

    return d && p.push(t.buildUndefinedNode()), p.length === 1 ? p[0] : (0, ir.sequenceExpression)(p);
  }

  n(Be, "gatherSequenceExpressions");
});
var ni = x(sr => {
  "use strict";

  Object.defineProperty(sr, "__esModule", {
    value: !0
  });
  sr.default = Ix;
  var gx = ri();

  function Ix(e, t) {
    if (!(e != null && e.length)) return;
    let r = [],
        p = (0, gx.default)(e, t, r);

    if (!!p) {
      for (let d of r) t.push(d);

      return p;
    }
  }

  n(Ix, "toSequenceExpression");
});
var ii = x(we => {
  "use strict";

  Object.defineProperty(we, "__esModule", {
    value: !0
  });
  we.default = void 0;
  var Me = C(),
      Dx = q(),
      Nx = _x;
  we.default = Nx;

  function _x(e, t) {
    if ((0, Me.isStatement)(e)) return e;
    let r = !1,
        p;
    if ((0, Me.isClass)(e)) r = !0, p = "ClassDeclaration";else if ((0, Me.isFunction)(e)) r = !0, p = "FunctionDeclaration";else if ((0, Me.isAssignmentExpression)(e)) return (0, Dx.expressionStatement)(e);

    if (r && !e.id && (p = !1), !p) {
      if (t) return !1;
      throw new Error(`cannot turn ${e.type} to a statement`);
    }

    return e.type = p, e;
  }

  n(_x, "toStatement");
});
var ai = x(Fe => {
  "use strict";

  Object.defineProperty(Fe, "__esModule", {
    value: !0
  });
  Fe.default = void 0;
  var hx = ne(),
      w = q(),
      Lx = or;
  Fe.default = Lx;
  var jx = Function.call.bind(Object.prototype.toString);

  function Cx(e) {
    return jx(e) === "[object RegExp]";
  }

  n(Cx, "isRegExp");

  function Bx(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return !1;
    let t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null;
  }

  n(Bx, "isPlainObject");

  function or(e) {
    if (e === void 0) return (0, w.identifier)("undefined");
    if (e === !0 || e === !1) return (0, w.booleanLiteral)(e);
    if (e === null) return (0, w.nullLiteral)();
    if (typeof e == "string") return (0, w.stringLiteral)(e);

    if (typeof e == "number") {
      let t;
      if (Number.isFinite(e)) t = (0, w.numericLiteral)(Math.abs(e));else {
        let r;
        Number.isNaN(e) ? r = (0, w.numericLiteral)(0) : r = (0, w.numericLiteral)(1), t = (0, w.binaryExpression)("/", r, (0, w.numericLiteral)(0));
      }
      return (e < 0 || Object.is(e, -0)) && (t = (0, w.unaryExpression)("-", t)), t;
    }

    if (Cx(e)) {
      let t = e.source,
          r = e.toString().match(/\/([a-z]+|)$/)[1];
      return (0, w.regExpLiteral)(t, r);
    }

    if (Array.isArray(e)) return (0, w.arrayExpression)(e.map(or));

    if (Bx(e)) {
      let t = [];

      for (let r of Object.keys(e)) {
        let p;
        (0, hx.default)(r) ? p = (0, w.identifier)(r) : p = (0, w.stringLiteral)(r), t.push((0, w.objectProperty)(p, or(e[r])));
      }

      return (0, w.objectExpression)(t);
    }

    throw new Error("don't know how to turn this value into a node");
  }

  n(or, "valueToNode");
});
var si = x(ur => {
  "use strict";

  Object.defineProperty(ur, "__esModule", {
    value: !0
  });
  ur.default = wx;
  var Mx = q();

  function wx(e, t, r = !1) {
    return e.object = (0, Mx.memberExpression)(e.object, e.property, e.computed), e.property = t, e.computed = !!r, e;
  }

  n(wx, "appendToMemberExpression");
});
var ui = x(lr => {
  "use strict";

  Object.defineProperty(lr, "__esModule", {
    value: !0
  });
  lr.default = Rx;
  var oi = G(),
      Fx = Rt();

  function Rx(e, t) {
    if (!e || !t) return e;

    for (let r of oi.INHERIT_KEYS.optional) e[r] == null && (e[r] = t[r]);

    for (let r of Object.keys(t)) r[0] === "_" && r !== "__clone" && (e[r] = t[r]);

    for (let r of oi.INHERIT_KEYS.force) e[r] = t[r];

    return (0, Fx.default)(e, t), e;
  }

  n(Rx, "inherits");
});
var li = x(pr => {
  "use strict";

  Object.defineProperty(pr, "__esModule", {
    value: !0
  });
  pr.default = Yx;
  var Kx = q();

  function Yx(e, t) {
    return e.object = (0, Kx.memberExpression)(t, e.object), e;
  }

  n(Yx, "prependToMemberExpression");
});
var pi = x(Re => {
  "use strict";

  Object.defineProperty(Re, "__esModule", {
    value: !0
  });
  Re.default = void 0;
  var Vx = ye(),
      qx = kx;
  Re.default = qx;

  function kx(e, t) {
    return (0, Vx.default)(e, t, !0);
  }

  n(kx, "getOuterBindingIdentifiers");
});
var fi = x(cr => {
  "use strict";

  Object.defineProperty(cr, "__esModule", {
    value: !0
  });
  cr.default = Jx;
  var Xx = k();

  function Jx(e, t, r) {
    typeof t == "function" && (t = {
      enter: t
    });
    let {
      enter: p,
      exit: d
    } = t;
    fr(e, p, d, r, []);
  }

  n(Jx, "traverse");

  function fr(e, t, r, p, d) {
    let m = Xx.VISITOR_KEYS[e.type];

    if (!!m) {
      t && t(e, d, p);

      for (let E of m) {
        let v = e[E];
        if (Array.isArray(v)) for (let N = 0; N < v.length; N++) {
          let j = v[N];
          !j || (d.push({
            node: e,
            key: E,
            index: N
          }), fr(j, t, r, p, d), d.pop());
        } else v && (d.push({
          node: e,
          key: E
        }), fr(v, t, r, p, d), d.pop());
      }

      r && r(e, d, p);
    }
  }

  n(fr, "traverseSimpleImpl");
});
var ci = x(yr => {
  "use strict";

  Object.defineProperty(yr, "__esModule", {
    value: !0
  });
  yr.default = Wx;
  var Ux = ye();

  function Wx(e, t, r) {
    if (r && e.type === "Identifier" && t.type === "ObjectProperty" && r.type === "ObjectExpression") return !1;
    let p = Ux.default.keys[t.type];
    if (p) for (let d = 0; d < p.length; d++) {
      let m = p[d],
          E = t[m];

      if (Array.isArray(E)) {
        if (E.indexOf(e) >= 0) return !0;
      } else if (E === e) return !0;
    }
    return !1;
  }

  n(Wx, "isBinding");
});
var Tr = x(dr => {
  "use strict";

  Object.defineProperty(dr, "__esModule", {
    value: !0
  });
  dr.default = zx;
  var Gx = C(),
      $x = G();

  function zx(e) {
    return (0, Gx.isVariableDeclaration)(e) && (e.kind !== "var" || e[$x.BLOCK_SCOPED_SYMBOL]);
  }

  n(zx, "isLet");
});
var di = x(mr => {
  "use strict";

  Object.defineProperty(mr, "__esModule", {
    value: !0
  });
  mr.default = Hx;
  var yi = C(),
      Qx = Tr();

  function Hx(e) {
    return (0, yi.isFunctionDeclaration)(e) || (0, yi.isClassDeclaration)(e) || (0, Qx.default)(e);
  }

  n(Hx, "isBlockScoped");
});
var Ti = x(Sr => {
  "use strict";

  Object.defineProperty(Sr, "__esModule", {
    value: !0
  });
  Sr.default = tO;
  var Zx = Se(),
      eO = C();

  function tO(e) {
    return (0, Zx.default)(e.type, "Immutable") ? !0 : (0, eO.isIdentifier)(e) ? e.name === "undefined" : !1;
  }

  n(tO, "isImmutable");
});
var Si = x(br => {
  "use strict";

  Object.defineProperty(br, "__esModule", {
    value: !0
  });
  br.default = Er;
  var mi = k();

  function Er(e, t) {
    if (typeof e != "object" || typeof t != "object" || e == null || t == null) return e === t;
    if (e.type !== t.type) return !1;
    let r = Object.keys(mi.NODE_FIELDS[e.type] || e.type),
        p = mi.VISITOR_KEYS[e.type];

    for (let d of r) {
      if (typeof e[d] != typeof t[d]) return !1;

      if (!(e[d] == null && t[d] == null)) {
        if (e[d] == null || t[d] == null) return !1;

        if (Array.isArray(e[d])) {
          if (!Array.isArray(t[d]) || e[d].length !== t[d].length) return !1;

          for (let m = 0; m < e[d].length; m++) if (!Er(e[d][m], t[d][m])) return !1;

          continue;
        }

        if (typeof e[d] == "object" && !(p != null && p.includes(d))) {
          for (let m of Object.keys(e[d])) if (e[d][m] !== t[d][m]) return !1;

          continue;
        }

        if (!Er(e[d], t[d])) return !1;
      }
    }

    return !0;
  }

  n(Er, "isNodesEquivalent");
});
var Ei = x(Pr => {
  "use strict";

  Object.defineProperty(Pr, "__esModule", {
    value: !0
  });
  Pr.default = rO;

  function rO(e, t, r) {
    switch (t.type) {
      case "MemberExpression":
      case "OptionalMemberExpression":
        return t.property === e ? !!t.computed : t.object === e;

      case "JSXMemberExpression":
        return t.object === e;

      case "VariableDeclarator":
        return t.init === e;

      case "ArrowFunctionExpression":
        return t.body === e;

      case "PrivateName":
        return !1;

      case "ClassMethod":
      case "ClassPrivateMethod":
      case "ObjectMethod":
        return t.key === e ? !!t.computed : !1;

      case "ObjectProperty":
        return t.key === e ? !!t.computed : !r || r.type !== "ObjectPattern";

      case "ClassProperty":
      case "ClassAccessorProperty":
        return t.key === e ? !!t.computed : !0;

      case "ClassPrivateProperty":
        return t.key !== e;

      case "ClassDeclaration":
      case "ClassExpression":
        return t.superClass === e;

      case "AssignmentExpression":
        return t.right === e;

      case "AssignmentPattern":
        return t.right === e;

      case "LabeledStatement":
        return !1;

      case "CatchClause":
        return !1;

      case "RestElement":
        return !1;

      case "BreakStatement":
      case "ContinueStatement":
        return !1;

      case "FunctionDeclaration":
      case "FunctionExpression":
        return !1;

      case "ExportNamespaceSpecifier":
      case "ExportDefaultSpecifier":
        return !1;

      case "ExportSpecifier":
        return r != null && r.source ? !1 : t.local === e;

      case "ImportDefaultSpecifier":
      case "ImportNamespaceSpecifier":
      case "ImportSpecifier":
        return !1;

      case "ImportAttribute":
        return !1;

      case "JSXAttribute":
        return !1;

      case "ObjectPattern":
      case "ArrayPattern":
        return !1;

      case "MetaProperty":
        return !1;

      case "ObjectTypeProperty":
        return t.key !== e;

      case "TSEnumMember":
        return t.id !== e;

      case "TSPropertySignature":
        return t.key === e ? !!t.computed : !0;
    }

    return !0;
  }

  n(rO, "isReferenced");
});
var bi = x(Ar => {
  "use strict";

  Object.defineProperty(Ar, "__esModule", {
    value: !0
  });
  Ar.default = nO;
  var te = C();

  function nO(e, t) {
    return (0, te.isBlockStatement)(e) && ((0, te.isFunction)(t) || (0, te.isCatchClause)(t)) ? !1 : (0, te.isPattern)(e) && ((0, te.isFunction)(t) || (0, te.isCatchClause)(t)) ? !0 : (0, te.isScopable)(e);
  }

  n(nO, "isScope");
});
var Ai = x(xr => {
  "use strict";

  Object.defineProperty(xr, "__esModule", {
    value: !0
  });
  xr.default = iO;
  var Pi = C();

  function iO(e) {
    return (0, Pi.isImportDefaultSpecifier)(e) || (0, Pi.isIdentifier)(e.imported || e.exported, {
      name: "default"
    });
  }

  n(iO, "isSpecifierDefault");
});
var xi = x(Or => {
  "use strict";

  Object.defineProperty(Or, "__esModule", {
    value: !0
  });
  Or.default = oO;
  var aO = ne(),
      sO = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);

  function oO(e) {
    return (0, aO.default)(e) && !sO.has(e);
  }

  n(oO, "isValidES3Identifier");
});
var Oi = x(vr => {
  "use strict";

  Object.defineProperty(vr, "__esModule", {
    value: !0
  });
  vr.default = pO;
  var uO = C(),
      lO = G();

  function pO(e) {
    return (0, uO.isVariableDeclaration)(e, {
      kind: "var"
    }) && !e[lO.BLOCK_SCOPED_SYMBOL];
  }

  n(pO, "isVar");
});
var vi = x(() => {});
var Ne = x(A => {
  "use strict";

  Object.defineProperty(A, "__esModule", {
    value: !0
  });
  var W = {
    react: !0,
    assertNode: !0,
    createTypeAnnotationBasedOnTypeof: !0,
    createUnionTypeAnnotation: !0,
    createFlowUnionType: !0,
    createTSUnionType: !0,
    cloneNode: !0,
    clone: !0,
    cloneDeep: !0,
    cloneDeepWithoutLoc: !0,
    cloneWithoutLoc: !0,
    addComment: !0,
    addComments: !0,
    inheritInnerComments: !0,
    inheritLeadingComments: !0,
    inheritsComments: !0,
    inheritTrailingComments: !0,
    removeComments: !0,
    ensureBlock: !0,
    toBindingIdentifierName: !0,
    toBlock: !0,
    toComputedKey: !0,
    toExpression: !0,
    toIdentifier: !0,
    toKeyAlias: !0,
    toSequenceExpression: !0,
    toStatement: !0,
    valueToNode: !0,
    appendToMemberExpression: !0,
    inherits: !0,
    prependToMemberExpression: !0,
    removeProperties: !0,
    removePropertiesDeep: !0,
    removeTypeDuplicates: !0,
    getBindingIdentifiers: !0,
    getOuterBindingIdentifiers: !0,
    traverse: !0,
    traverseFast: !0,
    shallowEqual: !0,
    is: !0,
    isBinding: !0,
    isBlockScoped: !0,
    isImmutable: !0,
    isLet: !0,
    isNode: !0,
    isNodesEquivalent: !0,
    isPlaceholderType: !0,
    isReferenced: !0,
    isScope: !0,
    isSpecifierDefault: !0,
    isType: !0,
    isValidES3Identifier: !0,
    isValidIdentifier: !0,
    isVar: !0,
    matchesPattern: !0,
    validate: !0,
    buildMatchMemberExpression: !0
  };
  Object.defineProperty(A, "addComment", {
    enumerable: !0,
    get: function () {
      return xO.default;
    }
  });
  Object.defineProperty(A, "addComments", {
    enumerable: !0,
    get: function () {
      return OO.default;
    }
  });
  Object.defineProperty(A, "appendToMemberExpression", {
    enumerable: !0,
    get: function () {
      return KO.default;
    }
  });
  Object.defineProperty(A, "assertNode", {
    enumerable: !0,
    get: function () {
      return dO.default;
    }
  });
  Object.defineProperty(A, "buildMatchMemberExpression", {
    enumerable: !0,
    get: function () {
      return cv.default;
    }
  });
  Object.defineProperty(A, "clone", {
    enumerable: !0,
    get: function () {
      return EO.default;
    }
  });
  Object.defineProperty(A, "cloneDeep", {
    enumerable: !0,
    get: function () {
      return bO.default;
    }
  });
  Object.defineProperty(A, "cloneDeepWithoutLoc", {
    enumerable: !0,
    get: function () {
      return PO.default;
    }
  });
  Object.defineProperty(A, "cloneNode", {
    enumerable: !0,
    get: function () {
      return SO.default;
    }
  });
  Object.defineProperty(A, "cloneWithoutLoc", {
    enumerable: !0,
    get: function () {
      return AO.default;
    }
  });
  Object.defineProperty(A, "createFlowUnionType", {
    enumerable: !0,
    get: function () {
      return gi.default;
    }
  });
  Object.defineProperty(A, "createTSUnionType", {
    enumerable: !0,
    get: function () {
      return mO.default;
    }
  });
  Object.defineProperty(A, "createTypeAnnotationBasedOnTypeof", {
    enumerable: !0,
    get: function () {
      return TO.default;
    }
  });
  Object.defineProperty(A, "createUnionTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return gi.default;
    }
  });
  Object.defineProperty(A, "ensureBlock", {
    enumerable: !0,
    get: function () {
      return _O.default;
    }
  });
  Object.defineProperty(A, "getBindingIdentifiers", {
    enumerable: !0,
    get: function () {
      return JO.default;
    }
  });
  Object.defineProperty(A, "getOuterBindingIdentifiers", {
    enumerable: !0,
    get: function () {
      return UO.default;
    }
  });
  Object.defineProperty(A, "inheritInnerComments", {
    enumerable: !0,
    get: function () {
      return vO.default;
    }
  });
  Object.defineProperty(A, "inheritLeadingComments", {
    enumerable: !0,
    get: function () {
      return gO.default;
    }
  });
  Object.defineProperty(A, "inheritTrailingComments", {
    enumerable: !0,
    get: function () {
      return DO.default;
    }
  });
  Object.defineProperty(A, "inherits", {
    enumerable: !0,
    get: function () {
      return YO.default;
    }
  });
  Object.defineProperty(A, "inheritsComments", {
    enumerable: !0,
    get: function () {
      return IO.default;
    }
  });
  Object.defineProperty(A, "is", {
    enumerable: !0,
    get: function () {
      return $O.default;
    }
  });
  Object.defineProperty(A, "isBinding", {
    enumerable: !0,
    get: function () {
      return zO.default;
    }
  });
  Object.defineProperty(A, "isBlockScoped", {
    enumerable: !0,
    get: function () {
      return QO.default;
    }
  });
  Object.defineProperty(A, "isImmutable", {
    enumerable: !0,
    get: function () {
      return HO.default;
    }
  });
  Object.defineProperty(A, "isLet", {
    enumerable: !0,
    get: function () {
      return ZO.default;
    }
  });
  Object.defineProperty(A, "isNode", {
    enumerable: !0,
    get: function () {
      return ev.default;
    }
  });
  Object.defineProperty(A, "isNodesEquivalent", {
    enumerable: !0,
    get: function () {
      return tv.default;
    }
  });
  Object.defineProperty(A, "isPlaceholderType", {
    enumerable: !0,
    get: function () {
      return rv.default;
    }
  });
  Object.defineProperty(A, "isReferenced", {
    enumerable: !0,
    get: function () {
      return nv.default;
    }
  });
  Object.defineProperty(A, "isScope", {
    enumerable: !0,
    get: function () {
      return iv.default;
    }
  });
  Object.defineProperty(A, "isSpecifierDefault", {
    enumerable: !0,
    get: function () {
      return av.default;
    }
  });
  Object.defineProperty(A, "isType", {
    enumerable: !0,
    get: function () {
      return sv.default;
    }
  });
  Object.defineProperty(A, "isValidES3Identifier", {
    enumerable: !0,
    get: function () {
      return ov.default;
    }
  });
  Object.defineProperty(A, "isValidIdentifier", {
    enumerable: !0,
    get: function () {
      return uv.default;
    }
  });
  Object.defineProperty(A, "isVar", {
    enumerable: !0,
    get: function () {
      return lv.default;
    }
  });
  Object.defineProperty(A, "matchesPattern", {
    enumerable: !0,
    get: function () {
      return pv.default;
    }
  });
  Object.defineProperty(A, "prependToMemberExpression", {
    enumerable: !0,
    get: function () {
      return VO.default;
    }
  });
  A.react = void 0;
  Object.defineProperty(A, "removeComments", {
    enumerable: !0,
    get: function () {
      return NO.default;
    }
  });
  Object.defineProperty(A, "removeProperties", {
    enumerable: !0,
    get: function () {
      return qO.default;
    }
  });
  Object.defineProperty(A, "removePropertiesDeep", {
    enumerable: !0,
    get: function () {
      return kO.default;
    }
  });
  Object.defineProperty(A, "removeTypeDuplicates", {
    enumerable: !0,
    get: function () {
      return XO.default;
    }
  });
  Object.defineProperty(A, "shallowEqual", {
    enumerable: !0,
    get: function () {
      return GO.default;
    }
  });
  Object.defineProperty(A, "toBindingIdentifierName", {
    enumerable: !0,
    get: function () {
      return hO.default;
    }
  });
  Object.defineProperty(A, "toBlock", {
    enumerable: !0,
    get: function () {
      return LO.default;
    }
  });
  Object.defineProperty(A, "toComputedKey", {
    enumerable: !0,
    get: function () {
      return jO.default;
    }
  });
  Object.defineProperty(A, "toExpression", {
    enumerable: !0,
    get: function () {
      return CO.default;
    }
  });
  Object.defineProperty(A, "toIdentifier", {
    enumerable: !0,
    get: function () {
      return BO.default;
    }
  });
  Object.defineProperty(A, "toKeyAlias", {
    enumerable: !0,
    get: function () {
      return MO.default;
    }
  });
  Object.defineProperty(A, "toSequenceExpression", {
    enumerable: !0,
    get: function () {
      return wO.default;
    }
  });
  Object.defineProperty(A, "toStatement", {
    enumerable: !0,
    get: function () {
      return FO.default;
    }
  });
  Object.defineProperty(A, "traverse", {
    enumerable: !0,
    get: function () {
      return Ke.default;
    }
  });
  Object.defineProperty(A, "traverseFast", {
    enumerable: !0,
    get: function () {
      return WO.default;
    }
  });
  Object.defineProperty(A, "validate", {
    enumerable: !0,
    get: function () {
      return fv.default;
    }
  });
  Object.defineProperty(A, "valueToNode", {
    enumerable: !0,
    get: function () {
      return RO.default;
    }
  });

  var fO = Br(),
      cO = Mr(),
      yO = Dn(),
      dO = Nn(),
      gr = _n();

  Object.keys(gr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(W, e) || e in A && A[e] === gr[e] || Object.defineProperty(A, e, {
      enumerable: !0,
      get: function () {
        return gr[e];
      }
    });
  });
  var TO = hn(),
      gi = Cn(),
      mO = Mn(),
      Ir = q();
  Object.keys(Ir).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(W, e) || e in A && A[e] === Ir[e] || Object.defineProperty(A, e, {
      enumerable: !0,
      get: function () {
        return Ir[e];
      }
    });
  });
  var Dr = wn();
  Object.keys(Dr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(W, e) || e in A && A[e] === Dr[e] || Object.defineProperty(A, e, {
      enumerable: !0,
      get: function () {
        return Dr[e];
      }
    });
  });
  var SO = Q(),
      EO = qn(),
      bO = kn(),
      PO = Xn(),
      AO = Jn(),
      xO = Un(),
      OO = Nt(),
      vO = jt(),
      gO = Bt(),
      IO = Rt(),
      DO = wt(),
      NO = Wn(),
      Nr = Gn();
  Object.keys(Nr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(W, e) || e in A && A[e] === Nr[e] || Object.defineProperty(A, e, {
      enumerable: !0,
      get: function () {
        return Nr[e];
      }
    });
  });

  var _r = G();

  Object.keys(_r).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(W, e) || e in A && A[e] === _r[e] || Object.defineProperty(A, e, {
      enumerable: !0,
      get: function () {
        return _r[e];
      }
    });
  });

  var _O = $n(),
      hO = zn(),
      LO = qt(),
      jO = Qn(),
      CO = Hn(),
      BO = Jt(),
      MO = ti(),
      wO = ni(),
      FO = ii(),
      RO = ai(),
      hr = k();

  Object.keys(hr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(W, e) || e in A && A[e] === hr[e] || Object.defineProperty(A, e, {
      enumerable: !0,
      get: function () {
        return hr[e];
      }
    });
  });
  var KO = si(),
      YO = ui(),
      VO = li(),
      qO = Ht(),
      kO = er(),
      XO = St(),
      JO = ye(),
      UO = pi(),
      Ke = fi();
  Object.keys(Ke).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(W, e) || e in A && A[e] === Ke[e] || Object.defineProperty(A, e, {
      enumerable: !0,
      get: function () {
        return Ke[e];
      }
    });
  });
  var WO = zt(),
      GO = Te(),
      $O = re(),
      zO = ci(),
      QO = di(),
      HO = Ti(),
      ZO = Tr(),
      ev = dt(),
      tv = Si(),
      rv = $e(),
      nv = Ei(),
      iv = bi(),
      av = Ai(),
      sv = Se(),
      ov = xi(),
      uv = ne(),
      lv = Oi(),
      pv = ke(),
      fv = xe(),
      cv = Je(),
      Lr = C();
  Object.keys(Lr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(W, e) || e in A && A[e] === Lr[e] || Object.defineProperty(A, e, {
      enumerable: !0,
      get: function () {
        return Lr[e];
      }
    });
  });
  var jr = vi();
  Object.keys(jr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(W, e) || e in A && A[e] === jr[e] || Object.defineProperty(A, e, {
      enumerable: !0,
      get: function () {
        return jr[e];
      }
    });
  });
  var yv = {
    isReactComponent: fO.default,
    isCompatTag: cO.default,
    buildChildren: yO.default
  };
  A.react = yv;
});
var Ii = Cr(Ne()),
    Di = Cr(Ne()),
    {
  __esModule: $g,
  addComment: zg,
  addComments: Qg,
  appendToMemberExpression: Hg,
  assertNode: Zg,
  buildMatchMemberExpression: eI,
  clone: tI,
  cloneDeep: rI,
  cloneDeepWithoutLoc: nI,
  cloneNode: iI,
  cloneWithoutLoc: aI,
  createFlowUnionType: sI,
  createTSUnionType: oI,
  createTypeAnnotationBasedOnTypeof: uI,
  createUnionTypeAnnotation: lI,
  ensureBlock: pI,
  getBindingIdentifiers: fI,
  getOuterBindingIdentifiers: cI,
  inheritInnerComments: yI,
  inheritLeadingComments: dI,
  inheritTrailingComments: TI,
  inherits: mI,
  inheritsComments: SI,
  is: EI,
  isBinding: bI,
  isBlockScoped: PI,
  isImmutable: AI,
  isLet: xI,
  isNode: OI,
  isNodesEquivalent: vI,
  isPlaceholderType: gI,
  isReferenced: II,
  isScope: DI,
  isSpecifierDefault: NI,
  isType: _I,
  isValidES3Identifier: hI,
  isValidIdentifier: LI,
  isVar: jI,
  matchesPattern: CI,
  prependToMemberExpression: BI,
  react: MI,
  removeComments: wI,
  removeProperties: FI,
  removePropertiesDeep: RI,
  removeTypeDuplicates: KI,
  shallowEqual: YI,
  toBindingIdentifierName: VI,
  toBlock: qI,
  toComputedKey: kI,
  toExpression: XI,
  toIdentifier: JI,
  toKeyAlias: UI,
  toSequenceExpression: WI,
  toStatement: GI,
  traverse: $I,
  traverseFast: zI,
  validate: QI,
  valueToNode: HI
} = Di,
    {
  default: dv,
  ...Tv
} = Di,
    ZI = Ii.default ?? dv ?? Tv;
export { $g as __esModule, zg as addComment, Qg as addComments, Hg as appendToMemberExpression, Zg as assertNode, eI as buildMatchMemberExpression, tI as clone, rI as cloneDeep, nI as cloneDeepWithoutLoc, iI as cloneNode, aI as cloneWithoutLoc, sI as createFlowUnionType, oI as createTSUnionType, uI as createTypeAnnotationBasedOnTypeof, lI as createUnionTypeAnnotation, ZI as default, pI as ensureBlock, fI as getBindingIdentifiers, cI as getOuterBindingIdentifiers, yI as inheritInnerComments, dI as inheritLeadingComments, TI as inheritTrailingComments, mI as inherits, SI as inheritsComments, EI as is, bI as isBinding, PI as isBlockScoped, AI as isImmutable, xI as isLet, OI as isNode, vI as isNodesEquivalent, gI as isPlaceholderType, II as isReferenced, DI as isScope, NI as isSpecifierDefault, _I as isType, hI as isValidES3Identifier, LI as isValidIdentifier, jI as isVar, CI as matchesPattern, BI as prependToMemberExpression, MI as react, wI as removeComments, FI as removeProperties, RI as removePropertiesDeep, KI as removeTypeDuplicates, YI as shallowEqual, VI as toBindingIdentifierName, qI as toBlock, kI as toComputedKey, XI as toExpression, JI as toIdentifier, UI as toKeyAlias, WI as toSequenceExpression, GI as toStatement, $I as traverse, zI as traverseFast, QI as validate, HI as valueToNode };