/* esm.sh - esbuild bundle(@babel/types@7.19.3) esnext production */
import __Process$ from "/transpiled/https://esm.sh/v96/node_process.js";
import ___babel_helper_string_parser$ from "/transpiled/https://esm.sh/v96/@babel/helper-string-parser@7.18.10/esnext/helper-string-parser.js";
import __to_fast_properties$ from "/transpiled/https://esm.sh/v96/to-fast-properties@2.0.0/esnext/to-fast-properties.js";
import ___babel_helper_validator_identifier$ from "/transpiled/https://esm.sh/v96/@babel/helper-validator-identifier@7.19.1/esnext/helper-validator-identifier.js";
var Ni = Object.create;
var Lr = Object.defineProperty;
var _i = Object.getOwnPropertyDescriptor;
var hi = Object.getOwnPropertyNames;
var Li = Object.getPrototypeOf,
    ji = Object.prototype.hasOwnProperty;

var se = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});

var A = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t), t.exports);

var Ci = (e, t, r, l) => {
  if (t && typeof t == "object" || typeof t == "function") for (let y of hi(t)) !ji.call(e, y) && y !== r && Lr(e, y, {
    get: () => t[y],
    enumerable: !(l = _i(t, y)) || l.enumerable
  });
  return e;
};

var Bi = (e, t, r) => (r = e != null ? Ni(Li(e)) : {}, Ci(t || !e || !e.__esModule ? Lr(r, "default", {
  value: e,
  enumerable: !0
}) : r, e));

var Te = A(Ye => {
  "use strict";

  Object.defineProperty(Ye, "__esModule", {
    value: !0
  });
  Ye.default = Mi;

  function Mi(e, t) {
    let r = Object.keys(t);

    for (let l of r) if (e[l] !== t[l]) return !1;

    return !0;
  }
});
var j = A(a => {
  "use strict";

  Object.defineProperty(a, "__esModule", {
    value: !0
  });
  a.isAccessor = zl;
  a.isAnyTypeAnnotation = Ts;
  a.isArgumentPlaceholder = Jo;
  a.isArrayExpression = wi;
  a.isArrayPattern = Ba;
  a.isArrayTypeAnnotation = ms;
  a.isArrowFunctionExpression = Ma;
  a.isAssignmentExpression = Fi;
  a.isAssignmentPattern = Ca;
  a.isAwaitExpression = ns;
  a.isBigIntLiteral = as;
  a.isBinary = Sl;
  a.isBinaryExpression = Ri;
  a.isBindExpression = Uo;
  a.isBlock = Pl;
  a.isBlockParent = bl;
  a.isBlockStatement = qi;
  a.isBooleanLiteral = la;
  a.isBooleanLiteralTypeAnnotation = Es;
  a.isBooleanTypeAnnotation = Ss;
  a.isBreakStatement = ki;
  a.isCallExpression = Xi;
  a.isCatchClause = Ji;
  a.isClass = Jl;
  a.isClassAccessorProperty = ps;
  a.isClassBody = wa;
  a.isClassDeclaration = Ra;
  a.isClassExpression = Fa;
  a.isClassImplements = Ps;
  a.isClassMethod = za;
  a.isClassPrivateMethod = cs;
  a.isClassPrivateProperty = fs;
  a.isClassProperty = ls;
  a.isCompletionStatement = Ol;
  a.isConditional = vl;
  a.isConditionalExpression = Ui;
  a.isContinueStatement = Wi;
  a.isDebuggerStatement = Gi;
  a.isDecimalLiteral = Zo;
  a.isDeclaration = Cl;
  a.isDeclareClass = As;
  a.isDeclareExportAllDeclaration = hs;
  a.isDeclareExportDeclaration = _s;
  a.isDeclareFunction = xs;
  a.isDeclareInterface = Os;
  a.isDeclareModule = vs;
  a.isDeclareModuleExports = gs;
  a.isDeclareOpaqueType = Ds;
  a.isDeclareTypeAlias = Is;
  a.isDeclareVariable = Ns;
  a.isDeclaredPredicate = Ls;
  a.isDecorator = Go;
  a.isDirective = Yi;
  a.isDirectiveLiteral = Vi;
  a.isDoExpression = zo;
  a.isDoWhileStatement = zi;
  a.isEmptyStatement = Qi;
  a.isEmptyTypeAnnotation = qs;
  a.isEnumBody = rp;
  a.isEnumBooleanBody = So;
  a.isEnumBooleanMember = Ao;
  a.isEnumDeclaration = mo;
  a.isEnumDefaultedMember = vo;
  a.isEnumMember = np;
  a.isEnumNumberBody = Eo;
  a.isEnumNumberMember = xo;
  a.isEnumStringBody = bo;
  a.isEnumStringMember = Oo;
  a.isEnumSymbolBody = Po;
  a.isExistsTypeAnnotation = js;
  a.isExportAllDeclaration = Ka;
  a.isExportDeclaration = Wl;
  a.isExportDefaultDeclaration = Ya;
  a.isExportDefaultSpecifier = Qo;
  a.isExportNamedDeclaration = Va;
  a.isExportNamespaceSpecifier = ss;
  a.isExportSpecifier = qa;
  a.isExpression = ml;
  a.isExpressionStatement = $i;
  a.isExpressionWrapper = Dl;
  a.isFile = Hi;
  a.isFlow = $l;
  a.isFlowBaseAnnotation = Zl;
  a.isFlowDeclaration = ep;
  a.isFlowPredicate = tp;
  a.isFlowType = Hl;
  a.isFor = Nl;
  a.isForInStatement = Zi;
  a.isForOfStatement = ka;
  a.isForStatement = ea;
  a.isForXStatement = _l;
  a.isFunction = hl;
  a.isFunctionDeclaration = ta;
  a.isFunctionExpression = ra;
  a.isFunctionParent = Ll;
  a.isFunctionTypeAnnotation = Cs;
  a.isFunctionTypeParam = Bs;
  a.isGenericTypeAnnotation = Ms;
  a.isIdentifier = na;
  a.isIfStatement = ia;
  a.isImmutable = Rl;
  a.isImport = is;
  a.isImportAttribute = Wo;
  a.isImportDeclaration = Xa;
  a.isImportDefaultSpecifier = Ja;
  a.isImportNamespaceSpecifier = Ua;
  a.isImportSpecifier = Wa;
  a.isIndexedAccessType = go;
  a.isInferredPredicate = ws;
  a.isInterfaceDeclaration = Rs;
  a.isInterfaceExtends = Fs;
  a.isInterfaceTypeAnnotation = Ks;
  a.isInterpreterDirective = Ki;
  a.isIntersectionTypeAnnotation = Ys;
  a.isJSX = ip;
  a.isJSXAttribute = Do;
  a.isJSXClosingElement = No;
  a.isJSXClosingFragment = Vo;
  a.isJSXElement = _o;
  a.isJSXEmptyExpression = ho;
  a.isJSXExpressionContainer = Lo;
  a.isJSXFragment = Ko;
  a.isJSXIdentifier = Co;
  a.isJSXMemberExpression = Bo;
  a.isJSXNamespacedName = Mo;
  a.isJSXOpeningElement = wo;
  a.isJSXOpeningFragment = Yo;
  a.isJSXSpreadAttribute = Fo;
  a.isJSXSpreadChild = jo;
  a.isJSXText = Ro;
  a.isLVal = Ml;
  a.isLabeledStatement = aa;
  a.isLiteral = Fl;
  a.isLogicalExpression = fa;
  a.isLoop = gl;
  a.isMemberExpression = ca;
  a.isMetaProperty = Ga;
  a.isMethod = Yl;
  a.isMiscellaneous = ap;
  a.isMixedTypeAnnotation = Vs;
  a.isModuleDeclaration = Ul;
  a.isModuleExpression = eu;
  a.isModuleSpecifier = Gl;
  a.isNewExpression = ya;
  a.isNoop = qo;
  a.isNullLiteral = ua;
  a.isNullLiteralTypeAnnotation = bs;
  a.isNullableTypeAnnotation = ks;
  a.isNumberLiteral = pp;
  a.isNumberLiteralTypeAnnotation = Xs;
  a.isNumberTypeAnnotation = Js;
  a.isNumericLiteral = oa;
  a.isObjectExpression = Ta;
  a.isObjectMember = Vl;
  a.isObjectMethod = ma;
  a.isObjectPattern = Qa;
  a.isObjectProperty = Sa;
  a.isObjectTypeAnnotation = Us;
  a.isObjectTypeCallProperty = Gs;
  a.isObjectTypeIndexer = zs;
  a.isObjectTypeInternalSlot = Ws;
  a.isObjectTypeProperty = Qs;
  a.isObjectTypeSpreadProperty = $s;
  a.isOpaqueType = Hs;
  a.isOptionalCallExpression = us;
  a.isOptionalIndexedAccessType = Io;
  a.isOptionalMemberExpression = os;
  a.isParenthesizedExpression = Aa;
  a.isPattern = Xl;
  a.isPatternLike = Bl;
  a.isPipelineBareFunction = nu;
  a.isPipelinePrimaryTopicReference = iu;
  a.isPipelineTopicExpression = ru;
  a.isPlaceholder = ko;
  a.isPrivate = Ql;
  a.isPrivateName = ys;
  a.isProgram = da;
  a.isProperty = ql;
  a.isPureish = jl;
  a.isQualifiedTypeIdentifier = Zs;
  a.isRecordExpression = $o;
  a.isRegExpLiteral = pa;
  a.isRegexLiteral = fp;
  a.isRestElement = Ea;
  a.isRestProperty = cp;
  a.isReturnStatement = ba;
  a.isScopable = El;
  a.isSequenceExpression = Pa;
  a.isSpreadElement = $a;
  a.isSpreadProperty = yp;
  a.isStandardized = Tl;
  a.isStatement = Al;
  a.isStaticBlock = ds;
  a.isStringLiteral = sa;
  a.isStringLiteralTypeAnnotation = eo;
  a.isStringTypeAnnotation = to;
  a.isSuper = Ha;
  a.isSwitchCase = xa;
  a.isSwitchStatement = Oa;
  a.isSymbolTypeAnnotation = ro;
  a.isTSAnyKeyword = du;
  a.isTSArrayType = Bu;
  a.isTSAsExpression = Zu;
  a.isTSBaseType = lp;
  a.isTSBigIntKeyword = mu;
  a.isTSBooleanKeyword = Tu;
  a.isTSCallSignatureDeclaration = lu;
  a.isTSConditionalType = Vu;
  a.isTSConstructSignatureDeclaration = pu;
  a.isTSConstructorType = _u;
  a.isTSDeclareFunction = su;
  a.isTSDeclareMethod = ou;
  a.isTSEntityName = wl;
  a.isTSEnumDeclaration = tl;
  a.isTSEnumMember = rl;
  a.isTSExportAssignment = ll;
  a.isTSExpressionWithTypeArguments = Gu;
  a.isTSExternalModuleReference = ol;
  a.isTSFunctionType = Nu;
  a.isTSImportEqualsDeclaration = sl;
  a.isTSImportType = al;
  a.isTSIndexSignature = yu;
  a.isTSIndexedAccessType = Ju;
  a.isTSInferType = qu;
  a.isTSInstantiationExpression = Hu;
  a.isTSInterfaceBody = Qu;
  a.isTSInterfaceDeclaration = zu;
  a.isTSIntersectionType = Yu;
  a.isTSIntrinsicKeyword = Su;
  a.isTSLiteralType = Wu;
  a.isTSMappedType = Uu;
  a.isTSMethodSignature = cu;
  a.isTSModuleBlock = il;
  a.isTSModuleDeclaration = nl;
  a.isTSNamedTupleMember = Ru;
  a.isTSNamespaceExportDeclaration = pl;
  a.isTSNeverKeyword = Eu;
  a.isTSNonNullExpression = ul;
  a.isTSNullKeyword = bu;
  a.isTSNumberKeyword = Pu;
  a.isTSObjectKeyword = Au;
  a.isTSOptionalType = wu;
  a.isTSParameterProperty = au;
  a.isTSParenthesizedType = ku;
  a.isTSPropertySignature = fu;
  a.isTSQualifiedName = uu;
  a.isTSRestType = Fu;
  a.isTSStringKeyword = xu;
  a.isTSSymbolKeyword = Ou;
  a.isTSThisType = Du;
  a.isTSTupleType = Mu;
  a.isTSType = up;
  a.isTSTypeAliasDeclaration = $u;
  a.isTSTypeAnnotation = fl;
  a.isTSTypeAssertion = el;
  a.isTSTypeElement = op;
  a.isTSTypeLiteral = Cu;
  a.isTSTypeOperator = Xu;
  a.isTSTypeParameter = dl;
  a.isTSTypeParameterDeclaration = yl;
  a.isTSTypeParameterInstantiation = cl;
  a.isTSTypePredicate = Lu;
  a.isTSTypeQuery = ju;
  a.isTSTypeReference = hu;
  a.isTSUndefinedKeyword = vu;
  a.isTSUnionType = Ku;
  a.isTSUnknownKeyword = gu;
  a.isTSVoidKeyword = Iu;
  a.isTaggedTemplateExpression = Za;
  a.isTemplateElement = es;
  a.isTemplateLiteral = ts;
  a.isTerminatorless = xl;
  a.isThisExpression = va;
  a.isThisTypeAnnotation = no;
  a.isThrowStatement = ga;
  a.isTopicReference = tu;
  a.isTryStatement = Ia;
  a.isTupleExpression = Ho;
  a.isTupleTypeAnnotation = io;
  a.isTypeAlias = so;
  a.isTypeAnnotation = oo;
  a.isTypeCastExpression = uo;
  a.isTypeParameter = lo;
  a.isTypeParameterDeclaration = po;
  a.isTypeParameterInstantiation = fo;
  a.isTypeScript = sp;
  a.isTypeofTypeAnnotation = ao;
  a.isUnaryExpression = Da;
  a.isUnaryLike = kl;
  a.isUnionTypeAnnotation = co;
  a.isUpdateExpression = Na;
  a.isUserWhitespacable = Kl;
  a.isV8IntrinsicIdentifier = Xo;
  a.isVariableDeclaration = _a;
  a.isVariableDeclarator = ha;
  a.isVariance = yo;
  a.isVoidTypeAnnotation = To;
  a.isWhile = Il;
  a.isWhileStatement = La;
  a.isWithStatement = ja;
  a.isYieldExpression = rs;
  var o = Te();

  function wi(e, t) {
    return e && e.type === "ArrayExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Fi(e, t) {
    return e && e.type === "AssignmentExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ri(e, t) {
    return e && e.type === "BinaryExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ki(e, t) {
    return e && e.type === "InterpreterDirective" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Yi(e, t) {
    return e && e.type === "Directive" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Vi(e, t) {
    return e && e.type === "DirectiveLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function qi(e, t) {
    return e && e.type === "BlockStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ki(e, t) {
    return e && e.type === "BreakStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Xi(e, t) {
    return e && e.type === "CallExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ji(e, t) {
    return e && e.type === "CatchClause" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ui(e, t) {
    return e && e.type === "ConditionalExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Wi(e, t) {
    return e && e.type === "ContinueStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Gi(e, t) {
    return e && e.type === "DebuggerStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function zi(e, t) {
    return e && e.type === "DoWhileStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Qi(e, t) {
    return e && e.type === "EmptyStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function $i(e, t) {
    return e && e.type === "ExpressionStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Hi(e, t) {
    return e && e.type === "File" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Zi(e, t) {
    return e && e.type === "ForInStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ea(e, t) {
    return e && e.type === "ForStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ta(e, t) {
    return e && e.type === "FunctionDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ra(e, t) {
    return e && e.type === "FunctionExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function na(e, t) {
    return e && e.type === "Identifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ia(e, t) {
    return e && e.type === "IfStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function aa(e, t) {
    return e && e.type === "LabeledStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function sa(e, t) {
    return e && e.type === "StringLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function oa(e, t) {
    return e && e.type === "NumericLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ua(e, t) {
    return e && e.type === "NullLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function la(e, t) {
    return e && e.type === "BooleanLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function pa(e, t) {
    return e && e.type === "RegExpLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function fa(e, t) {
    return e && e.type === "LogicalExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ca(e, t) {
    return e && e.type === "MemberExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ya(e, t) {
    return e && e.type === "NewExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function da(e, t) {
    return e && e.type === "Program" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ta(e, t) {
    return e && e.type === "ObjectExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ma(e, t) {
    return e && e.type === "ObjectMethod" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Sa(e, t) {
    return e && e.type === "ObjectProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ea(e, t) {
    return e && e.type === "RestElement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ba(e, t) {
    return e && e.type === "ReturnStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Pa(e, t) {
    return e && e.type === "SequenceExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Aa(e, t) {
    return e && e.type === "ParenthesizedExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function xa(e, t) {
    return e && e.type === "SwitchCase" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Oa(e, t) {
    return e && e.type === "SwitchStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function va(e, t) {
    return e && e.type === "ThisExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ga(e, t) {
    return e && e.type === "ThrowStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ia(e, t) {
    return e && e.type === "TryStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Da(e, t) {
    return e && e.type === "UnaryExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Na(e, t) {
    return e && e.type === "UpdateExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function _a(e, t) {
    return e && e.type === "VariableDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ha(e, t) {
    return e && e.type === "VariableDeclarator" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function La(e, t) {
    return e && e.type === "WhileStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ja(e, t) {
    return e && e.type === "WithStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ca(e, t) {
    return e && e.type === "AssignmentPattern" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ba(e, t) {
    return e && e.type === "ArrayPattern" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ma(e, t) {
    return e && e.type === "ArrowFunctionExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function wa(e, t) {
    return e && e.type === "ClassBody" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Fa(e, t) {
    return e && e.type === "ClassExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ra(e, t) {
    return e && e.type === "ClassDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ka(e, t) {
    return e && e.type === "ExportAllDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ya(e, t) {
    return e && e.type === "ExportDefaultDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Va(e, t) {
    return e && e.type === "ExportNamedDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function qa(e, t) {
    return e && e.type === "ExportSpecifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ka(e, t) {
    return e && e.type === "ForOfStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Xa(e, t) {
    return e && e.type === "ImportDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ja(e, t) {
    return e && e.type === "ImportDefaultSpecifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ua(e, t) {
    return e && e.type === "ImportNamespaceSpecifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Wa(e, t) {
    return e && e.type === "ImportSpecifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ga(e, t) {
    return e && e.type === "MetaProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function za(e, t) {
    return e && e.type === "ClassMethod" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Qa(e, t) {
    return e && e.type === "ObjectPattern" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function $a(e, t) {
    return e && e.type === "SpreadElement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ha(e, t) {
    return e && e.type === "Super" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Za(e, t) {
    return e && e.type === "TaggedTemplateExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function es(e, t) {
    return e && e.type === "TemplateElement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ts(e, t) {
    return e && e.type === "TemplateLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function rs(e, t) {
    return e && e.type === "YieldExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ns(e, t) {
    return e && e.type === "AwaitExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function is(e, t) {
    return e && e.type === "Import" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function as(e, t) {
    return e && e.type === "BigIntLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ss(e, t) {
    return e && e.type === "ExportNamespaceSpecifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function os(e, t) {
    return e && e.type === "OptionalMemberExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function us(e, t) {
    return e && e.type === "OptionalCallExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ls(e, t) {
    return e && e.type === "ClassProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ps(e, t) {
    return e && e.type === "ClassAccessorProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function fs(e, t) {
    return e && e.type === "ClassPrivateProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function cs(e, t) {
    return e && e.type === "ClassPrivateMethod" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ys(e, t) {
    return e && e.type === "PrivateName" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ds(e, t) {
    return e && e.type === "StaticBlock" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ts(e, t) {
    return e && e.type === "AnyTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ms(e, t) {
    return e && e.type === "ArrayTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ss(e, t) {
    return e && e.type === "BooleanTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Es(e, t) {
    return e && e.type === "BooleanLiteralTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function bs(e, t) {
    return e && e.type === "NullLiteralTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ps(e, t) {
    return e && e.type === "ClassImplements" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function As(e, t) {
    return e && e.type === "DeclareClass" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function xs(e, t) {
    return e && e.type === "DeclareFunction" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Os(e, t) {
    return e && e.type === "DeclareInterface" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function vs(e, t) {
    return e && e.type === "DeclareModule" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function gs(e, t) {
    return e && e.type === "DeclareModuleExports" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Is(e, t) {
    return e && e.type === "DeclareTypeAlias" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ds(e, t) {
    return e && e.type === "DeclareOpaqueType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ns(e, t) {
    return e && e.type === "DeclareVariable" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function _s(e, t) {
    return e && e.type === "DeclareExportDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function hs(e, t) {
    return e && e.type === "DeclareExportAllDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ls(e, t) {
    return e && e.type === "DeclaredPredicate" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function js(e, t) {
    return e && e.type === "ExistsTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Cs(e, t) {
    return e && e.type === "FunctionTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Bs(e, t) {
    return e && e.type === "FunctionTypeParam" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ms(e, t) {
    return e && e.type === "GenericTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ws(e, t) {
    return e && e.type === "InferredPredicate" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Fs(e, t) {
    return e && e.type === "InterfaceExtends" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Rs(e, t) {
    return e && e.type === "InterfaceDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ks(e, t) {
    return e && e.type === "InterfaceTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ys(e, t) {
    return e && e.type === "IntersectionTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Vs(e, t) {
    return e && e.type === "MixedTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function qs(e, t) {
    return e && e.type === "EmptyTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ks(e, t) {
    return e && e.type === "NullableTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Xs(e, t) {
    return e && e.type === "NumberLiteralTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Js(e, t) {
    return e && e.type === "NumberTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Us(e, t) {
    return e && e.type === "ObjectTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ws(e, t) {
    return e && e.type === "ObjectTypeInternalSlot" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Gs(e, t) {
    return e && e.type === "ObjectTypeCallProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function zs(e, t) {
    return e && e.type === "ObjectTypeIndexer" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Qs(e, t) {
    return e && e.type === "ObjectTypeProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function $s(e, t) {
    return e && e.type === "ObjectTypeSpreadProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Hs(e, t) {
    return e && e.type === "OpaqueType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Zs(e, t) {
    return e && e.type === "QualifiedTypeIdentifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function eo(e, t) {
    return e && e.type === "StringLiteralTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function to(e, t) {
    return e && e.type === "StringTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ro(e, t) {
    return e && e.type === "SymbolTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function no(e, t) {
    return e && e.type === "ThisTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function io(e, t) {
    return e && e.type === "TupleTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ao(e, t) {
    return e && e.type === "TypeofTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function so(e, t) {
    return e && e.type === "TypeAlias" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function oo(e, t) {
    return e && e.type === "TypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function uo(e, t) {
    return e && e.type === "TypeCastExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function lo(e, t) {
    return e && e.type === "TypeParameter" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function po(e, t) {
    return e && e.type === "TypeParameterDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function fo(e, t) {
    return e && e.type === "TypeParameterInstantiation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function co(e, t) {
    return e && e.type === "UnionTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function yo(e, t) {
    return e && e.type === "Variance" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function To(e, t) {
    return e && e.type === "VoidTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function mo(e, t) {
    return e && e.type === "EnumDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function So(e, t) {
    return e && e.type === "EnumBooleanBody" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Eo(e, t) {
    return e && e.type === "EnumNumberBody" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function bo(e, t) {
    return e && e.type === "EnumStringBody" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Po(e, t) {
    return e && e.type === "EnumSymbolBody" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ao(e, t) {
    return e && e.type === "EnumBooleanMember" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function xo(e, t) {
    return e && e.type === "EnumNumberMember" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Oo(e, t) {
    return e && e.type === "EnumStringMember" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function vo(e, t) {
    return e && e.type === "EnumDefaultedMember" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function go(e, t) {
    return e && e.type === "IndexedAccessType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Io(e, t) {
    return e && e.type === "OptionalIndexedAccessType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Do(e, t) {
    return e && e.type === "JSXAttribute" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function No(e, t) {
    return e && e.type === "JSXClosingElement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function _o(e, t) {
    return e && e.type === "JSXElement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ho(e, t) {
    return e && e.type === "JSXEmptyExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Lo(e, t) {
    return e && e.type === "JSXExpressionContainer" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function jo(e, t) {
    return e && e.type === "JSXSpreadChild" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Co(e, t) {
    return e && e.type === "JSXIdentifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Bo(e, t) {
    return e && e.type === "JSXMemberExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Mo(e, t) {
    return e && e.type === "JSXNamespacedName" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function wo(e, t) {
    return e && e.type === "JSXOpeningElement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Fo(e, t) {
    return e && e.type === "JSXSpreadAttribute" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ro(e, t) {
    return e && e.type === "JSXText" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ko(e, t) {
    return e && e.type === "JSXFragment" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Yo(e, t) {
    return e && e.type === "JSXOpeningFragment" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Vo(e, t) {
    return e && e.type === "JSXClosingFragment" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function qo(e, t) {
    return e && e.type === "Noop" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ko(e, t) {
    return e && e.type === "Placeholder" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Xo(e, t) {
    return e && e.type === "V8IntrinsicIdentifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Jo(e, t) {
    return e && e.type === "ArgumentPlaceholder" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Uo(e, t) {
    return e && e.type === "BindExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Wo(e, t) {
    return e && e.type === "ImportAttribute" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Go(e, t) {
    return e && e.type === "Decorator" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function zo(e, t) {
    return e && e.type === "DoExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Qo(e, t) {
    return e && e.type === "ExportDefaultSpecifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function $o(e, t) {
    return e && e.type === "RecordExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ho(e, t) {
    return e && e.type === "TupleExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Zo(e, t) {
    return e && e.type === "DecimalLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function eu(e, t) {
    return e && e.type === "ModuleExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function tu(e, t) {
    return e && e.type === "TopicReference" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ru(e, t) {
    return e && e.type === "PipelineTopicExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function nu(e, t) {
    return e && e.type === "PipelineBareFunction" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function iu(e, t) {
    return e && e.type === "PipelinePrimaryTopicReference" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function au(e, t) {
    return e && e.type === "TSParameterProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function su(e, t) {
    return e && e.type === "TSDeclareFunction" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ou(e, t) {
    return e && e.type === "TSDeclareMethod" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function uu(e, t) {
    return e && e.type === "TSQualifiedName" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function lu(e, t) {
    return e && e.type === "TSCallSignatureDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function pu(e, t) {
    return e && e.type === "TSConstructSignatureDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function fu(e, t) {
    return e && e.type === "TSPropertySignature" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function cu(e, t) {
    return e && e.type === "TSMethodSignature" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function yu(e, t) {
    return e && e.type === "TSIndexSignature" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function du(e, t) {
    return e && e.type === "TSAnyKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Tu(e, t) {
    return e && e.type === "TSBooleanKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function mu(e, t) {
    return e && e.type === "TSBigIntKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Su(e, t) {
    return e && e.type === "TSIntrinsicKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Eu(e, t) {
    return e && e.type === "TSNeverKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function bu(e, t) {
    return e && e.type === "TSNullKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Pu(e, t) {
    return e && e.type === "TSNumberKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Au(e, t) {
    return e && e.type === "TSObjectKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function xu(e, t) {
    return e && e.type === "TSStringKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ou(e, t) {
    return e && e.type === "TSSymbolKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function vu(e, t) {
    return e && e.type === "TSUndefinedKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function gu(e, t) {
    return e && e.type === "TSUnknownKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Iu(e, t) {
    return e && e.type === "TSVoidKeyword" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Du(e, t) {
    return e && e.type === "TSThisType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Nu(e, t) {
    return e && e.type === "TSFunctionType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function _u(e, t) {
    return e && e.type === "TSConstructorType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function hu(e, t) {
    return e && e.type === "TSTypeReference" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Lu(e, t) {
    return e && e.type === "TSTypePredicate" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ju(e, t) {
    return e && e.type === "TSTypeQuery" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Cu(e, t) {
    return e && e.type === "TSTypeLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Bu(e, t) {
    return e && e.type === "TSArrayType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Mu(e, t) {
    return e && e.type === "TSTupleType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function wu(e, t) {
    return e && e.type === "TSOptionalType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Fu(e, t) {
    return e && e.type === "TSRestType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ru(e, t) {
    return e && e.type === "TSNamedTupleMember" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ku(e, t) {
    return e && e.type === "TSUnionType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Yu(e, t) {
    return e && e.type === "TSIntersectionType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Vu(e, t) {
    return e && e.type === "TSConditionalType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function qu(e, t) {
    return e && e.type === "TSInferType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ku(e, t) {
    return e && e.type === "TSParenthesizedType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Xu(e, t) {
    return e && e.type === "TSTypeOperator" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ju(e, t) {
    return e && e.type === "TSIndexedAccessType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Uu(e, t) {
    return e && e.type === "TSMappedType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Wu(e, t) {
    return e && e.type === "TSLiteralType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Gu(e, t) {
    return e && e.type === "TSExpressionWithTypeArguments" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function zu(e, t) {
    return e && e.type === "TSInterfaceDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Qu(e, t) {
    return e && e.type === "TSInterfaceBody" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function $u(e, t) {
    return e && e.type === "TSTypeAliasDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Hu(e, t) {
    return e && e.type === "TSInstantiationExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Zu(e, t) {
    return e && e.type === "TSAsExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function el(e, t) {
    return e && e.type === "TSTypeAssertion" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function tl(e, t) {
    return e && e.type === "TSEnumDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function rl(e, t) {
    return e && e.type === "TSEnumMember" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function nl(e, t) {
    return e && e.type === "TSModuleDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function il(e, t) {
    return e && e.type === "TSModuleBlock" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function al(e, t) {
    return e && e.type === "TSImportType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function sl(e, t) {
    return e && e.type === "TSImportEqualsDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ol(e, t) {
    return e && e.type === "TSExternalModuleReference" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ul(e, t) {
    return e && e.type === "TSNonNullExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ll(e, t) {
    return e && e.type === "TSExportAssignment" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function pl(e, t) {
    return e && e.type === "TSNamespaceExportDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function fl(e, t) {
    return e && e.type === "TSTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function cl(e, t) {
    return e && e.type === "TSTypeParameterInstantiation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function yl(e, t) {
    return e && e.type === "TSTypeParameterDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function dl(e, t) {
    return e && e.type === "TSTypeParameter" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Tl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ArrayExpression" || r === "AssignmentExpression" || r === "BinaryExpression" || r === "InterpreterDirective" || r === "Directive" || r === "DirectiveLiteral" || r === "BlockStatement" || r === "BreakStatement" || r === "CallExpression" || r === "CatchClause" || r === "ConditionalExpression" || r === "ContinueStatement" || r === "DebuggerStatement" || r === "DoWhileStatement" || r === "EmptyStatement" || r === "ExpressionStatement" || r === "File" || r === "ForInStatement" || r === "ForStatement" || r === "FunctionDeclaration" || r === "FunctionExpression" || r === "Identifier" || r === "IfStatement" || r === "LabeledStatement" || r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "RegExpLiteral" || r === "LogicalExpression" || r === "MemberExpression" || r === "NewExpression" || r === "Program" || r === "ObjectExpression" || r === "ObjectMethod" || r === "ObjectProperty" || r === "RestElement" || r === "ReturnStatement" || r === "SequenceExpression" || r === "ParenthesizedExpression" || r === "SwitchCase" || r === "SwitchStatement" || r === "ThisExpression" || r === "ThrowStatement" || r === "TryStatement" || r === "UnaryExpression" || r === "UpdateExpression" || r === "VariableDeclaration" || r === "VariableDeclarator" || r === "WhileStatement" || r === "WithStatement" || r === "AssignmentPattern" || r === "ArrayPattern" || r === "ArrowFunctionExpression" || r === "ClassBody" || r === "ClassExpression" || r === "ClassDeclaration" || r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" || r === "ExportSpecifier" || r === "ForOfStatement" || r === "ImportDeclaration" || r === "ImportDefaultSpecifier" || r === "ImportNamespaceSpecifier" || r === "ImportSpecifier" || r === "MetaProperty" || r === "ClassMethod" || r === "ObjectPattern" || r === "SpreadElement" || r === "Super" || r === "TaggedTemplateExpression" || r === "TemplateElement" || r === "TemplateLiteral" || r === "YieldExpression" || r === "AwaitExpression" || r === "Import" || r === "BigIntLiteral" || r === "ExportNamespaceSpecifier" || r === "OptionalMemberExpression" || r === "OptionalCallExpression" || r === "ClassProperty" || r === "ClassAccessorProperty" || r === "ClassPrivateProperty" || r === "ClassPrivateMethod" || r === "PrivateName" || r === "StaticBlock" || r === "Placeholder" && (e.expectedNode === "Identifier" || e.expectedNode === "StringLiteral" || e.expectedNode === "BlockStatement" || e.expectedNode === "ClassBody") ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ml(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ArrayExpression" || r === "AssignmentExpression" || r === "BinaryExpression" || r === "CallExpression" || r === "ConditionalExpression" || r === "FunctionExpression" || r === "Identifier" || r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "RegExpLiteral" || r === "LogicalExpression" || r === "MemberExpression" || r === "NewExpression" || r === "ObjectExpression" || r === "SequenceExpression" || r === "ParenthesizedExpression" || r === "ThisExpression" || r === "UnaryExpression" || r === "UpdateExpression" || r === "ArrowFunctionExpression" || r === "ClassExpression" || r === "MetaProperty" || r === "Super" || r === "TaggedTemplateExpression" || r === "TemplateLiteral" || r === "YieldExpression" || r === "AwaitExpression" || r === "Import" || r === "BigIntLiteral" || r === "OptionalMemberExpression" || r === "OptionalCallExpression" || r === "TypeCastExpression" || r === "JSXElement" || r === "JSXFragment" || r === "BindExpression" || r === "DoExpression" || r === "RecordExpression" || r === "TupleExpression" || r === "DecimalLiteral" || r === "ModuleExpression" || r === "TopicReference" || r === "PipelineTopicExpression" || r === "PipelineBareFunction" || r === "PipelinePrimaryTopicReference" || r === "TSInstantiationExpression" || r === "TSAsExpression" || r === "TSTypeAssertion" || r === "TSNonNullExpression" || r === "Placeholder" && (e.expectedNode === "Expression" || e.expectedNode === "Identifier" || e.expectedNode === "StringLiteral") ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Sl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BinaryExpression" || r === "LogicalExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function El(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BlockStatement" || r === "CatchClause" || r === "DoWhileStatement" || r === "ForInStatement" || r === "ForStatement" || r === "FunctionDeclaration" || r === "FunctionExpression" || r === "Program" || r === "ObjectMethod" || r === "SwitchStatement" || r === "WhileStatement" || r === "ArrowFunctionExpression" || r === "ClassExpression" || r === "ClassDeclaration" || r === "ForOfStatement" || r === "ClassMethod" || r === "ClassPrivateMethod" || r === "StaticBlock" || r === "TSModuleBlock" || r === "Placeholder" && e.expectedNode === "BlockStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function bl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BlockStatement" || r === "CatchClause" || r === "DoWhileStatement" || r === "ForInStatement" || r === "ForStatement" || r === "FunctionDeclaration" || r === "FunctionExpression" || r === "Program" || r === "ObjectMethod" || r === "SwitchStatement" || r === "WhileStatement" || r === "ArrowFunctionExpression" || r === "ForOfStatement" || r === "ClassMethod" || r === "ClassPrivateMethod" || r === "StaticBlock" || r === "TSModuleBlock" || r === "Placeholder" && e.expectedNode === "BlockStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Pl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BlockStatement" || r === "Program" || r === "TSModuleBlock" || r === "Placeholder" && e.expectedNode === "BlockStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Al(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BlockStatement" || r === "BreakStatement" || r === "ContinueStatement" || r === "DebuggerStatement" || r === "DoWhileStatement" || r === "EmptyStatement" || r === "ExpressionStatement" || r === "ForInStatement" || r === "ForStatement" || r === "FunctionDeclaration" || r === "IfStatement" || r === "LabeledStatement" || r === "ReturnStatement" || r === "SwitchStatement" || r === "ThrowStatement" || r === "TryStatement" || r === "VariableDeclaration" || r === "WhileStatement" || r === "WithStatement" || r === "ClassDeclaration" || r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" || r === "ForOfStatement" || r === "ImportDeclaration" || r === "DeclareClass" || r === "DeclareFunction" || r === "DeclareInterface" || r === "DeclareModule" || r === "DeclareModuleExports" || r === "DeclareTypeAlias" || r === "DeclareOpaqueType" || r === "DeclareVariable" || r === "DeclareExportDeclaration" || r === "DeclareExportAllDeclaration" || r === "InterfaceDeclaration" || r === "OpaqueType" || r === "TypeAlias" || r === "EnumDeclaration" || r === "TSDeclareFunction" || r === "TSInterfaceDeclaration" || r === "TSTypeAliasDeclaration" || r === "TSEnumDeclaration" || r === "TSModuleDeclaration" || r === "TSImportEqualsDeclaration" || r === "TSExportAssignment" || r === "TSNamespaceExportDeclaration" || r === "Placeholder" && (e.expectedNode === "Statement" || e.expectedNode === "Declaration" || e.expectedNode === "BlockStatement") ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function xl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BreakStatement" || r === "ContinueStatement" || r === "ReturnStatement" || r === "ThrowStatement" || r === "YieldExpression" || r === "AwaitExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ol(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "BreakStatement" || r === "ContinueStatement" || r === "ReturnStatement" || r === "ThrowStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function vl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ConditionalExpression" || r === "IfStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function gl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "DoWhileStatement" || r === "ForInStatement" || r === "ForStatement" || r === "WhileStatement" || r === "ForOfStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Il(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "DoWhileStatement" || r === "WhileStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Dl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ExpressionStatement" || r === "ParenthesizedExpression" || r === "TypeCastExpression" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Nl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ForInStatement" || r === "ForStatement" || r === "ForOfStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function _l(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ForInStatement" || r === "ForOfStatement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function hl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "FunctionDeclaration" || r === "FunctionExpression" || r === "ObjectMethod" || r === "ArrowFunctionExpression" || r === "ClassMethod" || r === "ClassPrivateMethod" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ll(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "FunctionDeclaration" || r === "FunctionExpression" || r === "ObjectMethod" || r === "ArrowFunctionExpression" || r === "ClassMethod" || r === "ClassPrivateMethod" || r === "StaticBlock" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function jl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "FunctionDeclaration" || r === "FunctionExpression" || r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "RegExpLiteral" || r === "ArrowFunctionExpression" || r === "BigIntLiteral" || r === "DecimalLiteral" || r === "Placeholder" && e.expectedNode === "StringLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Cl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "FunctionDeclaration" || r === "VariableDeclaration" || r === "ClassDeclaration" || r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" || r === "ImportDeclaration" || r === "DeclareClass" || r === "DeclareFunction" || r === "DeclareInterface" || r === "DeclareModule" || r === "DeclareModuleExports" || r === "DeclareTypeAlias" || r === "DeclareOpaqueType" || r === "DeclareVariable" || r === "DeclareExportDeclaration" || r === "DeclareExportAllDeclaration" || r === "InterfaceDeclaration" || r === "OpaqueType" || r === "TypeAlias" || r === "EnumDeclaration" || r === "TSDeclareFunction" || r === "TSInterfaceDeclaration" || r === "TSTypeAliasDeclaration" || r === "TSEnumDeclaration" || r === "TSModuleDeclaration" || r === "Placeholder" && e.expectedNode === "Declaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Bl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "Identifier" || r === "RestElement" || r === "AssignmentPattern" || r === "ArrayPattern" || r === "ObjectPattern" || r === "TSAsExpression" || r === "TSTypeAssertion" || r === "TSNonNullExpression" || r === "Placeholder" && (e.expectedNode === "Pattern" || e.expectedNode === "Identifier") ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ml(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "Identifier" || r === "MemberExpression" || r === "RestElement" || r === "AssignmentPattern" || r === "ArrayPattern" || r === "ObjectPattern" || r === "TSParameterProperty" || r === "TSAsExpression" || r === "TSTypeAssertion" || r === "TSNonNullExpression" || r === "Placeholder" && (e.expectedNode === "Pattern" || e.expectedNode === "Identifier") ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function wl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "Identifier" || r === "TSQualifiedName" || r === "Placeholder" && e.expectedNode === "Identifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Fl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "RegExpLiteral" || r === "TemplateLiteral" || r === "BigIntLiteral" || r === "DecimalLiteral" || r === "Placeholder" && e.expectedNode === "StringLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Rl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "StringLiteral" || r === "NumericLiteral" || r === "NullLiteral" || r === "BooleanLiteral" || r === "BigIntLiteral" || r === "JSXAttribute" || r === "JSXClosingElement" || r === "JSXElement" || r === "JSXExpressionContainer" || r === "JSXSpreadChild" || r === "JSXOpeningElement" || r === "JSXText" || r === "JSXFragment" || r === "JSXOpeningFragment" || r === "JSXClosingFragment" || r === "DecimalLiteral" || r === "Placeholder" && e.expectedNode === "StringLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Kl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ObjectMethod" || r === "ObjectProperty" || r === "ObjectTypeInternalSlot" || r === "ObjectTypeCallProperty" || r === "ObjectTypeIndexer" || r === "ObjectTypeProperty" || r === "ObjectTypeSpreadProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Yl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ObjectMethod" || r === "ClassMethod" || r === "ClassPrivateMethod" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Vl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ObjectMethod" || r === "ObjectProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ql(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ObjectProperty" || r === "ClassProperty" || r === "ClassAccessorProperty" || r === "ClassPrivateProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function kl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "UnaryExpression" || r === "SpreadElement" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Xl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "AssignmentPattern" || r === "ArrayPattern" || r === "ObjectPattern" || r === "Placeholder" && e.expectedNode === "Pattern" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Jl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ClassExpression" || r === "ClassDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ul(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" || r === "ImportDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Wl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ExportAllDeclaration" || r === "ExportDefaultDeclaration" || r === "ExportNamedDeclaration" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Gl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ExportSpecifier" || r === "ImportDefaultSpecifier" || r === "ImportNamespaceSpecifier" || r === "ImportSpecifier" || r === "ExportNamespaceSpecifier" || r === "ExportDefaultSpecifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function zl(e, t) {
    return e && e.type === "ClassAccessorProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Ql(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "ClassPrivateProperty" || r === "ClassPrivateMethod" || r === "PrivateName" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function $l(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "AnyTypeAnnotation" || r === "ArrayTypeAnnotation" || r === "BooleanTypeAnnotation" || r === "BooleanLiteralTypeAnnotation" || r === "NullLiteralTypeAnnotation" || r === "ClassImplements" || r === "DeclareClass" || r === "DeclareFunction" || r === "DeclareInterface" || r === "DeclareModule" || r === "DeclareModuleExports" || r === "DeclareTypeAlias" || r === "DeclareOpaqueType" || r === "DeclareVariable" || r === "DeclareExportDeclaration" || r === "DeclareExportAllDeclaration" || r === "DeclaredPredicate" || r === "ExistsTypeAnnotation" || r === "FunctionTypeAnnotation" || r === "FunctionTypeParam" || r === "GenericTypeAnnotation" || r === "InferredPredicate" || r === "InterfaceExtends" || r === "InterfaceDeclaration" || r === "InterfaceTypeAnnotation" || r === "IntersectionTypeAnnotation" || r === "MixedTypeAnnotation" || r === "EmptyTypeAnnotation" || r === "NullableTypeAnnotation" || r === "NumberLiteralTypeAnnotation" || r === "NumberTypeAnnotation" || r === "ObjectTypeAnnotation" || r === "ObjectTypeInternalSlot" || r === "ObjectTypeCallProperty" || r === "ObjectTypeIndexer" || r === "ObjectTypeProperty" || r === "ObjectTypeSpreadProperty" || r === "OpaqueType" || r === "QualifiedTypeIdentifier" || r === "StringLiteralTypeAnnotation" || r === "StringTypeAnnotation" || r === "SymbolTypeAnnotation" || r === "ThisTypeAnnotation" || r === "TupleTypeAnnotation" || r === "TypeofTypeAnnotation" || r === "TypeAlias" || r === "TypeAnnotation" || r === "TypeCastExpression" || r === "TypeParameter" || r === "TypeParameterDeclaration" || r === "TypeParameterInstantiation" || r === "UnionTypeAnnotation" || r === "Variance" || r === "VoidTypeAnnotation" || r === "EnumDeclaration" || r === "EnumBooleanBody" || r === "EnumNumberBody" || r === "EnumStringBody" || r === "EnumSymbolBody" || r === "EnumBooleanMember" || r === "EnumNumberMember" || r === "EnumStringMember" || r === "EnumDefaultedMember" || r === "IndexedAccessType" || r === "OptionalIndexedAccessType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Hl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "AnyTypeAnnotation" || r === "ArrayTypeAnnotation" || r === "BooleanTypeAnnotation" || r === "BooleanLiteralTypeAnnotation" || r === "NullLiteralTypeAnnotation" || r === "ExistsTypeAnnotation" || r === "FunctionTypeAnnotation" || r === "GenericTypeAnnotation" || r === "InterfaceTypeAnnotation" || r === "IntersectionTypeAnnotation" || r === "MixedTypeAnnotation" || r === "EmptyTypeAnnotation" || r === "NullableTypeAnnotation" || r === "NumberLiteralTypeAnnotation" || r === "NumberTypeAnnotation" || r === "ObjectTypeAnnotation" || r === "StringLiteralTypeAnnotation" || r === "StringTypeAnnotation" || r === "SymbolTypeAnnotation" || r === "ThisTypeAnnotation" || r === "TupleTypeAnnotation" || r === "TypeofTypeAnnotation" || r === "UnionTypeAnnotation" || r === "VoidTypeAnnotation" || r === "IndexedAccessType" || r === "OptionalIndexedAccessType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function Zl(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "AnyTypeAnnotation" || r === "BooleanTypeAnnotation" || r === "NullLiteralTypeAnnotation" || r === "MixedTypeAnnotation" || r === "EmptyTypeAnnotation" || r === "NumberTypeAnnotation" || r === "StringTypeAnnotation" || r === "SymbolTypeAnnotation" || r === "ThisTypeAnnotation" || r === "VoidTypeAnnotation" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ep(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "DeclareClass" || r === "DeclareFunction" || r === "DeclareInterface" || r === "DeclareModule" || r === "DeclareModuleExports" || r === "DeclareTypeAlias" || r === "DeclareOpaqueType" || r === "DeclareVariable" || r === "DeclareExportDeclaration" || r === "DeclareExportAllDeclaration" || r === "InterfaceDeclaration" || r === "OpaqueType" || r === "TypeAlias" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function tp(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "DeclaredPredicate" || r === "InferredPredicate" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function rp(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "EnumBooleanBody" || r === "EnumNumberBody" || r === "EnumStringBody" || r === "EnumSymbolBody" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function np(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "EnumBooleanMember" || r === "EnumNumberMember" || r === "EnumStringMember" || r === "EnumDefaultedMember" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ip(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "JSXAttribute" || r === "JSXClosingElement" || r === "JSXElement" || r === "JSXEmptyExpression" || r === "JSXExpressionContainer" || r === "JSXSpreadChild" || r === "JSXIdentifier" || r === "JSXMemberExpression" || r === "JSXNamespacedName" || r === "JSXOpeningElement" || r === "JSXSpreadAttribute" || r === "JSXText" || r === "JSXFragment" || r === "JSXOpeningFragment" || r === "JSXClosingFragment" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function ap(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "Noop" || r === "Placeholder" || r === "V8IntrinsicIdentifier" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function sp(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "TSParameterProperty" || r === "TSDeclareFunction" || r === "TSDeclareMethod" || r === "TSQualifiedName" || r === "TSCallSignatureDeclaration" || r === "TSConstructSignatureDeclaration" || r === "TSPropertySignature" || r === "TSMethodSignature" || r === "TSIndexSignature" || r === "TSAnyKeyword" || r === "TSBooleanKeyword" || r === "TSBigIntKeyword" || r === "TSIntrinsicKeyword" || r === "TSNeverKeyword" || r === "TSNullKeyword" || r === "TSNumberKeyword" || r === "TSObjectKeyword" || r === "TSStringKeyword" || r === "TSSymbolKeyword" || r === "TSUndefinedKeyword" || r === "TSUnknownKeyword" || r === "TSVoidKeyword" || r === "TSThisType" || r === "TSFunctionType" || r === "TSConstructorType" || r === "TSTypeReference" || r === "TSTypePredicate" || r === "TSTypeQuery" || r === "TSTypeLiteral" || r === "TSArrayType" || r === "TSTupleType" || r === "TSOptionalType" || r === "TSRestType" || r === "TSNamedTupleMember" || r === "TSUnionType" || r === "TSIntersectionType" || r === "TSConditionalType" || r === "TSInferType" || r === "TSParenthesizedType" || r === "TSTypeOperator" || r === "TSIndexedAccessType" || r === "TSMappedType" || r === "TSLiteralType" || r === "TSExpressionWithTypeArguments" || r === "TSInterfaceDeclaration" || r === "TSInterfaceBody" || r === "TSTypeAliasDeclaration" || r === "TSInstantiationExpression" || r === "TSAsExpression" || r === "TSTypeAssertion" || r === "TSEnumDeclaration" || r === "TSEnumMember" || r === "TSModuleDeclaration" || r === "TSModuleBlock" || r === "TSImportType" || r === "TSImportEqualsDeclaration" || r === "TSExternalModuleReference" || r === "TSNonNullExpression" || r === "TSExportAssignment" || r === "TSNamespaceExportDeclaration" || r === "TSTypeAnnotation" || r === "TSTypeParameterInstantiation" || r === "TSTypeParameterDeclaration" || r === "TSTypeParameter" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function op(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "TSCallSignatureDeclaration" || r === "TSConstructSignatureDeclaration" || r === "TSPropertySignature" || r === "TSMethodSignature" || r === "TSIndexSignature" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function up(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "TSAnyKeyword" || r === "TSBooleanKeyword" || r === "TSBigIntKeyword" || r === "TSIntrinsicKeyword" || r === "TSNeverKeyword" || r === "TSNullKeyword" || r === "TSNumberKeyword" || r === "TSObjectKeyword" || r === "TSStringKeyword" || r === "TSSymbolKeyword" || r === "TSUndefinedKeyword" || r === "TSUnknownKeyword" || r === "TSVoidKeyword" || r === "TSThisType" || r === "TSFunctionType" || r === "TSConstructorType" || r === "TSTypeReference" || r === "TSTypePredicate" || r === "TSTypeQuery" || r === "TSTypeLiteral" || r === "TSArrayType" || r === "TSTupleType" || r === "TSOptionalType" || r === "TSRestType" || r === "TSUnionType" || r === "TSIntersectionType" || r === "TSConditionalType" || r === "TSInferType" || r === "TSParenthesizedType" || r === "TSTypeOperator" || r === "TSIndexedAccessType" || r === "TSMappedType" || r === "TSLiteralType" || r === "TSExpressionWithTypeArguments" || r === "TSImportType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function lp(e, t) {
    if (!e) return !1;
    let r = e.type;
    return r === "TSAnyKeyword" || r === "TSBooleanKeyword" || r === "TSBigIntKeyword" || r === "TSIntrinsicKeyword" || r === "TSNeverKeyword" || r === "TSNullKeyword" || r === "TSNumberKeyword" || r === "TSObjectKeyword" || r === "TSStringKeyword" || r === "TSSymbolKeyword" || r === "TSUndefinedKeyword" || r === "TSUnknownKeyword" || r === "TSVoidKeyword" || r === "TSThisType" || r === "TSLiteralType" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function pp(e, t) {
    return console.trace("The node type NumberLiteral has been renamed to NumericLiteral"), e && e.type === "NumberLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function fp(e, t) {
    return console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"), e && e.type === "RegexLiteral" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function cp(e, t) {
    return console.trace("The node type RestProperty has been renamed to RestElement"), e && e.type === "RestProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }

  function yp(e, t) {
    return console.trace("The node type SpreadProperty has been renamed to SpreadElement"), e && e.type === "SpreadProperty" ? typeof t > "u" ? !0 : (0, o.default)(e, t) : !1;
  }
});
var qe = A(Ve => {
  "use strict";

  Object.defineProperty(Ve, "__esModule", {
    value: !0
  });
  Ve.default = dp;
  var oe = j();

  function dp(e, t, r) {
    if (!(0, oe.isMemberExpression)(e)) return !1;
    let l = Array.isArray(t) ? t : t.split("."),
        y = [],
        d;

    for (d = e; (0, oe.isMemberExpression)(d); d = d.object) y.push(d.property);

    if (y.push(d), y.length < l.length || !r && y.length > l.length) return !1;

    for (let m = 0, x = y.length - 1; m < l.length; m++, x--) {
      let D = y[x],
          L;
      if ((0, oe.isIdentifier)(D)) L = D.name;else if ((0, oe.isStringLiteral)(D)) L = D.value;else if ((0, oe.isThisExpression)(D)) L = "this";else return !1;
      if (l[m] !== L) return !1;
    }

    return !0;
  }
});
var Xe = A(ke => {
  "use strict";

  Object.defineProperty(ke, "__esModule", {
    value: !0
  });
  ke.default = mp;
  var Tp = qe();

  function mp(e, t) {
    let r = e.split(".");
    return l => (0, Tp.default)(l, r, t);
  }
});
var jr = A(me => {
  "use strict";

  Object.defineProperty(me, "__esModule", {
    value: !0
  });
  me.default = void 0;
  var Sp = Xe(),
      Ep = (0, Sp.default)("React.Component"),
      bp = Ep;
  me.default = bp;
});
var Cr = A(Je => {
  "use strict";

  Object.defineProperty(Je, "__esModule", {
    value: !0
  });
  Je.default = Pp;

  function Pp(e) {
    return !!e && /^[a-z]/.test(e);
  }
});
var Se = A(Ue => {
  "use strict";

  Object.defineProperty(Ue, "__esModule", {
    value: !0
  });
  Ue.default = Ap;
  var Br = q();

  function Ap(e, t) {
    if (e === t) return !0;
    if (Br.ALIAS_KEYS[t]) return !1;
    let r = Br.FLIPPED_ALIAS_KEYS[t];

    if (r) {
      if (r[0] === e) return !0;

      for (let l of r) if (e === l) return !0;
    }

    return !1;
  }
});
var Ge = A(We => {
  "use strict";

  Object.defineProperty(We, "__esModule", {
    value: !0
  });
  We.default = Op;
  var xp = q();

  function Op(e, t) {
    if (e === t) return !0;
    let r = xp.PLACEHOLDERS_ALIAS[e];

    if (r) {
      for (let l of r) if (t === l) return !0;
    }

    return !1;
  }
});
var te = A(ze => {
  "use strict";

  Object.defineProperty(ze, "__esModule", {
    value: !0
  });
  ze.default = Np;
  var vp = Te(),
      gp = Se(),
      Ip = Ge(),
      Dp = q();

  function Np(e, t, r) {
    return t ? (0, gp.default)(t.type, e) ? typeof r > "u" ? !0 : (0, vp.default)(t, r) : !r && t.type === "Placeholder" && e in Dp.FLIPPED_ALIAS_KEYS ? (0, Ip.default)(t.expectedNode, e) : !1 : !1;
  }
});
var re = A($e => {
  "use strict";

  Object.defineProperty($e, "__esModule", {
    value: !0
  });
  $e.default = _p;
  var Qe = ___babel_helper_validator_identifier$;

  function _p(e, t = !0) {
    return typeof e != "string" || t && ((0, Qe.isKeyword)(e) || (0, Qe.isStrictReservedWord)(e, !0)) ? !1 : (0, Qe.isIdentifierName)(e);
  }
});
var W = A(I => {
  "use strict";

  Object.defineProperty(I, "__esModule", {
    value: !0
  });
  I.UPDATE_OPERATORS = I.UNARY_OPERATORS = I.STRING_UNARY_OPERATORS = I.STATEMENT_OR_BLOCK_KEYS = I.NUMBER_UNARY_OPERATORS = I.NUMBER_BINARY_OPERATORS = I.NOT_LOCAL_BINDING = I.LOGICAL_OPERATORS = I.INHERIT_KEYS = I.FOR_INIT_KEYS = I.FLATTENABLE_KEYS = I.EQUALITY_BINARY_OPERATORS = I.COMPARISON_BINARY_OPERATORS = I.COMMENT_KEYS = I.BOOLEAN_UNARY_OPERATORS = I.BOOLEAN_NUMBER_BINARY_OPERATORS = I.BOOLEAN_BINARY_OPERATORS = I.BLOCK_SCOPED_SYMBOL = I.BINARY_OPERATORS = I.ASSIGNMENT_OPERATORS = void 0;
  var hp = ["consequent", "body", "alternate"];
  I.STATEMENT_OR_BLOCK_KEYS = hp;
  var Lp = ["body", "expressions"];
  I.FLATTENABLE_KEYS = Lp;
  var jp = ["left", "init"];
  I.FOR_INIT_KEYS = jp;
  var Cp = ["leadingComments", "trailingComments", "innerComments"];
  I.COMMENT_KEYS = Cp;
  var Mr = ["||", "&&", "??"];
  I.LOGICAL_OPERATORS = Mr;
  var Bp = ["++", "--"];
  I.UPDATE_OPERATORS = Bp;
  var wr = [">", "<", ">=", "<="];
  I.BOOLEAN_NUMBER_BINARY_OPERATORS = wr;
  var Fr = ["==", "===", "!=", "!=="];
  I.EQUALITY_BINARY_OPERATORS = Fr;
  var Rr = [...Fr, "in", "instanceof"];
  I.COMPARISON_BINARY_OPERATORS = Rr;
  var Kr = [...Rr, ...wr];
  I.BOOLEAN_BINARY_OPERATORS = Kr;
  var He = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
  I.NUMBER_BINARY_OPERATORS = He;
  var Mp = ["+", ...He, ...Kr, "|>"];
  I.BINARY_OPERATORS = Mp;
  var wp = ["=", "+=", ...He.map(e => e + "="), ...Mr.map(e => e + "=")];
  I.ASSIGNMENT_OPERATORS = wp;
  var Yr = ["delete", "!"];
  I.BOOLEAN_UNARY_OPERATORS = Yr;
  var Vr = ["+", "-", "~"];
  I.NUMBER_UNARY_OPERATORS = Vr;
  var qr = ["typeof"];
  I.STRING_UNARY_OPERATORS = qr;
  var Fp = ["void", "throw", ...Yr, ...Vr, ...qr];
  I.UNARY_OPERATORS = Fp;
  var Rp = {
    optional: ["typeAnnotation", "typeParameters", "returnType"],
    force: ["start", "loc", "end"]
  };
  I.INHERIT_KEYS = Rp;
  var Kp = Symbol.for("var used to be block scoped");
  I.BLOCK_SCOPED_SYMBOL = Kp;
  var Yp = Symbol.for("should not be considered a local binding");
  I.NOT_LOCAL_BINDING = Yp;
});
var X = A(N => {
  "use strict";

  Object.defineProperty(N, "__esModule", {
    value: !0
  });
  N.VISITOR_KEYS = N.NODE_PARENT_VALIDATIONS = N.NODE_FIELDS = N.FLIPPED_ALIAS_KEYS = N.DEPRECATED_KEYS = N.BUILDER_KEYS = N.ALIAS_KEYS = void 0;
  N.arrayOf = Qr;
  N.arrayOfType = $r;
  N.assertEach = Hr;
  N.assertNodeOrValueType = Up;
  N.assertNodeType = Ze;
  N.assertOneOf = Jp;
  N.assertOptionalChainStart = Gp;
  N.assertShape = Wp;
  N.assertValueType = rt;
  N.chain = Zr;
  N.default = en;
  N.defineAliasedType = $p;
  N.typeIs = Ae;
  N.validate = tt;
  N.validateArrayOfType = Xp;
  N.validateOptional = qp;
  N.validateOptionalType = kp;
  N.validateType = Vp;
  var kr = te(),
      Pe = xe(),
      Xr = {};
  N.VISITOR_KEYS = Xr;
  var Jr = {};
  N.ALIAS_KEYS = Jr;
  var Ee = {};
  N.FLIPPED_ALIAS_KEYS = Ee;
  var Ur = {};
  N.NODE_FIELDS = Ur;
  var Wr = {};
  N.BUILDER_KEYS = Wr;
  var Gr = {};
  N.DEPRECATED_KEYS = Gr;
  var zr = {};
  N.NODE_PARENT_VALIDATIONS = zr;

  function be(e) {
    return Array.isArray(e) ? "array" : e === null ? "null" : typeof e;
  }

  function tt(e) {
    return {
      validate: e
    };
  }

  function Ae(e) {
    return typeof e == "string" ? Ze(e) : Ze(...e);
  }

  function Vp(e) {
    return tt(Ae(e));
  }

  function qp(e) {
    return {
      validate: e,
      optional: !0
    };
  }

  function kp(e) {
    return {
      validate: Ae(e),
      optional: !0
    };
  }

  function Qr(e) {
    return Zr(rt("array"), Hr(e));
  }

  function $r(e) {
    return Qr(Ae(e));
  }

  function Xp(e) {
    return tt($r(e));
  }

  function Hr(e) {
    function t(r, l, y) {
      if (!!Array.isArray(y)) for (let d = 0; d < y.length; d++) {
        let m = `${l}[${d}]`,
            x = y[d];
        e(r, m, x), __Process$.env.BABEL_TYPES_8_BREAKING && (0, Pe.validateChild)(r, m, x);
      }
    }

    return t.each = e, t;
  }

  function Jp(...e) {
    function t(r, l, y) {
      if (e.indexOf(y) < 0) throw new TypeError(`Property ${l} expected value to be one of ${JSON.stringify(e)} but got ${JSON.stringify(y)}`);
    }

    return t.oneOf = e, t;
  }

  function Ze(...e) {
    function t(r, l, y) {
      for (let d of e) if ((0, kr.default)(d, y)) {
        (0, Pe.validateChild)(r, l, y);
        return;
      }

      throw new TypeError(`Property ${l} of ${r.type} expected node to be of a type ${JSON.stringify(e)} but instead got ${JSON.stringify(y?.type)}`);
    }

    return t.oneOfNodeTypes = e, t;
  }

  function Up(...e) {
    function t(r, l, y) {
      for (let d of e) if (be(y) === d || (0, kr.default)(d, y)) {
        (0, Pe.validateChild)(r, l, y);
        return;
      }

      throw new TypeError(`Property ${l} of ${r.type} expected node to be of a type ${JSON.stringify(e)} but instead got ${JSON.stringify(y?.type)}`);
    }

    return t.oneOfNodeOrValueTypes = e, t;
  }

  function rt(e) {
    function t(r, l, y) {
      if (!(be(y) === e)) throw new TypeError(`Property ${l} expected type of ${e} but got ${be(y)}`);
    }

    return t.type = e, t;
  }

  function Wp(e) {
    function t(r, l, y) {
      let d = [];

      for (let m of Object.keys(e)) try {
        (0, Pe.validateField)(r, m, y[m], e[m]);
      } catch (x) {
        if (x instanceof TypeError) {
          d.push(x.message);
          continue;
        }

        throw x;
      }

      if (d.length) throw new TypeError(`Property ${l} of ${r.type} expected to have the following:
${d.join(`
`)}`);
    }

    return t.shapeOf = e, t;
  }

  function Gp() {
    function e(t) {
      var r;
      let l = t;

      for (; t;) {
        let {
          type: y
        } = l;

        if (y === "OptionalCallExpression") {
          if (l.optional) return;
          l = l.callee;
          continue;
        }

        if (y === "OptionalMemberExpression") {
          if (l.optional) return;
          l = l.object;
          continue;
        }

        break;
      }

      throw new TypeError(`Non-optional ${t.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(r = l) == null ? void 0 : r.type}`);
    }

    return e;
  }

  function Zr(...e) {
    function t(...r) {
      for (let l of e) l(...r);
    }

    if (t.chainOf = e, e.length >= 2 && "type" in e[0] && e[0].type === "array" && !("each" in e[1])) throw new Error('An assertValueType("array") validator can only be followed by an assertEach(...) validator.');
    return t;
  }

  var zp = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"],
      Qp = ["default", "optional", "validate"];

  function $p(...e) {
    return (t, r = {}) => {
      let l = r.aliases;

      if (!l) {
        var y, d;
        r.inherits && (l = (y = et[r.inherits].aliases) == null ? void 0 : y.slice()), (d = l) != null || (l = []), r.aliases = l;
      }

      let m = e.filter(x => !l.includes(x));
      return l.unshift(...m), en(t, r);
    };
  }

  function en(e, t = {}) {
    let r = t.inherits && et[t.inherits] || {},
        l = t.fields;

    if (!l && (l = {}, r.fields)) {
      let x = Object.getOwnPropertyNames(r.fields);

      for (let D of x) {
        let L = r.fields[D],
            F = L.default;
        if (Array.isArray(F) ? F.length > 0 : F && typeof F == "object") throw new Error("field defaults can only be primitives or empty arrays currently");
        l[D] = {
          default: Array.isArray(F) ? [] : F,
          optional: L.optional,
          validate: L.validate
        };
      }
    }

    let y = t.visitor || r.visitor || [],
        d = t.aliases || r.aliases || [],
        m = t.builder || r.builder || t.visitor || [];

    for (let x of Object.keys(t)) if (zp.indexOf(x) === -1) throw new Error(`Unknown type option "${x}" on ${e}`);

    t.deprecatedAlias && (Gr[t.deprecatedAlias] = e);

    for (let x of y.concat(m)) l[x] = l[x] || {};

    for (let x of Object.keys(l)) {
      let D = l[x];
      D.default !== void 0 && m.indexOf(x) === -1 && (D.optional = !0), D.default === void 0 ? D.default = null : !D.validate && D.default != null && (D.validate = rt(be(D.default)));

      for (let L of Object.keys(D)) if (Qp.indexOf(L) === -1) throw new Error(`Unknown field key "${L}" on ${e}.${x}`);
    }

    Xr[e] = t.visitor = y, Wr[e] = t.builder = m, Ur[e] = t.fields = l, Jr[e] = t.aliases = d, d.forEach(x => {
      Ee[x] = Ee[x] || [], Ee[x].push(e);
    }), t.validate && (zr[e] = t.validate), et[e] = t;
  }

  var et = {};
});
var it = A(R => {
  "use strict";

  Object.defineProperty(R, "__esModule", {
    value: !0
  });
  R.patternLikeCommon = R.functionTypeAnnotationCommon = R.functionDeclarationCommon = R.functionCommon = R.classMethodOrPropertyCommon = R.classMethodOrDeclareMethodCommon = void 0;
  var M = te(),
      Hp = re(),
      tn = ___babel_helper_validator_identifier$,
      Zp = ___babel_helper_string_parser$,
      ue = W(),
      n = X(),
      b = (0, n.defineAliasedType)("Standardized");
  b("ArrayExpression", {
    fields: {
      elements: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
        default: __Process$.env.BABEL_TYPES_8_BREAKING ? void 0 : []
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  });
  b("AssignmentExpression", {
    fields: {
      operator: {
        validate: function () {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return (0, n.assertValueType)("string");
          let e = (0, n.assertOneOf)(...ue.ASSIGNMENT_OPERATORS),
              t = (0, n.assertOneOf)("=");
          return function (r, l, y) {
            ((0, M.default)("Pattern", r.left) ? t : e)(r, l, y);
          };
        }()
      },
      left: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, n.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression") : (0, n.assertNodeType)("LVal")
      },
      right: {
        validate: (0, n.assertNodeType)("Expression")
      }
    },
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Expression"]
  });
  b("BinaryExpression", {
    builder: ["operator", "left", "right"],
    fields: {
      operator: {
        validate: (0, n.assertOneOf)(...ue.BINARY_OPERATORS)
      },
      left: {
        validate: function () {
          let e = (0, n.assertNodeType)("Expression"),
              t = (0, n.assertNodeType)("Expression", "PrivateName");
          return Object.assign(function (l, y, d) {
            (l.operator === "in" ? t : e)(l, y, d);
          }, {
            oneOfNodeTypes: ["Expression", "PrivateName"]
          });
        }()
      },
      right: {
        validate: (0, n.assertNodeType)("Expression")
      }
    },
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"]
  });
  b("InterpreterDirective", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, n.assertValueType)("string")
      }
    }
  });
  b("Directive", {
    visitor: ["value"],
    fields: {
      value: {
        validate: (0, n.assertNodeType)("DirectiveLiteral")
      }
    }
  });
  b("DirectiveLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, n.assertValueType)("string")
      }
    }
  });
  b("BlockStatement", {
    builder: ["body", "directives"],
    visitor: ["directives", "body"],
    fields: {
      directives: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Directive"))),
        default: []
      },
      body: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "Block", "Statement"]
  });
  b("BreakStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, n.assertNodeType)("Identifier"),
        optional: !0
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  b("CallExpression", {
    visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
    builder: ["callee", "arguments"],
    aliases: ["Expression"],
    fields: Object.assign({
      callee: {
        validate: (0, n.assertNodeType)("Expression", "Super", "V8IntrinsicIdentifier")
      },
      arguments: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
      }
    }, __Process$.env.BABEL_TYPES_8_BREAKING ? {} : {
      optional: {
        validate: (0, n.assertOneOf)(!0, !1),
        optional: !0
      }
    }, {
      typeArguments: {
        validate: (0, n.assertNodeType)("TypeParameterInstantiation"),
        optional: !0
      },
      typeParameters: {
        validate: (0, n.assertNodeType)("TSTypeParameterInstantiation"),
        optional: !0
      }
    })
  });
  b("CatchClause", {
    visitor: ["param", "body"],
    fields: {
      param: {
        validate: (0, n.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
        optional: !0
      },
      body: {
        validate: (0, n.assertNodeType)("BlockStatement")
      }
    },
    aliases: ["Scopable", "BlockParent"]
  });
  b("ConditionalExpression", {
    visitor: ["test", "consequent", "alternate"],
    fields: {
      test: {
        validate: (0, n.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, n.assertNodeType)("Expression")
      },
      alternate: {
        validate: (0, n.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression", "Conditional"]
  });
  b("ContinueStatement", {
    visitor: ["label"],
    fields: {
      label: {
        validate: (0, n.assertNodeType)("Identifier"),
        optional: !0
      }
    },
    aliases: ["Statement", "Terminatorless", "CompletionStatement"]
  });
  b("DebuggerStatement", {
    aliases: ["Statement"]
  });
  b("DoWhileStatement", {
    visitor: ["test", "body"],
    fields: {
      test: {
        validate: (0, n.assertNodeType)("Expression")
      },
      body: {
        validate: (0, n.assertNodeType)("Statement")
      }
    },
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
  });
  b("EmptyStatement", {
    aliases: ["Statement"]
  });
  b("ExpressionStatement", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, n.assertNodeType)("Expression")
      }
    },
    aliases: ["Statement", "ExpressionWrapper"]
  });
  b("File", {
    builder: ["program", "comments", "tokens"],
    visitor: ["program"],
    fields: {
      program: {
        validate: (0, n.assertNodeType)("Program")
      },
      comments: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, n.assertEach)((0, n.assertNodeType)("CommentBlock", "CommentLine")) : Object.assign(() => {}, {
          each: {
            oneOfNodeTypes: ["CommentBlock", "CommentLine"]
          }
        }),
        optional: !0
      },
      tokens: {
        validate: (0, n.assertEach)(Object.assign(() => {}, {
          type: "any"
        })),
        optional: !0
      }
    }
  });
  b("ForInStatement", {
    visitor: ["left", "right", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, n.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression") : (0, n.assertNodeType)("VariableDeclaration", "LVal")
      },
      right: {
        validate: (0, n.assertNodeType)("Expression")
      },
      body: {
        validate: (0, n.assertNodeType)("Statement")
      }
    }
  });
  b("ForStatement", {
    visitor: ["init", "test", "update", "body"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
    fields: {
      init: {
        validate: (0, n.assertNodeType)("VariableDeclaration", "Expression"),
        optional: !0
      },
      test: {
        validate: (0, n.assertNodeType)("Expression"),
        optional: !0
      },
      update: {
        validate: (0, n.assertNodeType)("Expression"),
        optional: !0
      },
      body: {
        validate: (0, n.assertNodeType)("Statement")
      }
    }
  });

  var ne = () => ({
    params: {
      validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Identifier", "Pattern", "RestElement")))
    },
    generator: {
      default: !1
    },
    async: {
      default: !1
    }
  });

  R.functionCommon = ne;

  var $ = () => ({
    returnType: {
      validate: (0, n.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    typeParameters: {
      validate: (0, n.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: !0
    }
  });

  R.functionTypeAnnotationCommon = $;

  var rn = () => Object.assign({}, ne(), {
    declare: {
      validate: (0, n.assertValueType)("boolean"),
      optional: !0
    },
    id: {
      validate: (0, n.assertNodeType)("Identifier"),
      optional: !0
    }
  });

  R.functionDeclarationCommon = rn;
  b("FunctionDeclaration", {
    builder: ["id", "params", "body", "generator", "async"],
    visitor: ["id", "params", "body", "returnType", "typeParameters"],
    fields: Object.assign({}, rn(), $(), {
      body: {
        validate: (0, n.assertNodeType)("BlockStatement")
      },
      predicate: {
        validate: (0, n.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: !0
      }
    }),
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
    validate: function () {
      if (!__Process$.env.BABEL_TYPES_8_BREAKING) return () => {};
      let e = (0, n.assertNodeType)("Identifier");
      return function (t, r, l) {
        (0, M.default)("ExportDefaultDeclaration", t) || e(l, "id", l.id);
      };
    }()
  });
  b("FunctionExpression", {
    inherits: "FunctionDeclaration",
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, ne(), $(), {
      id: {
        validate: (0, n.assertNodeType)("Identifier"),
        optional: !0
      },
      body: {
        validate: (0, n.assertNodeType)("BlockStatement")
      },
      predicate: {
        validate: (0, n.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: !0
      }
    })
  });

  var ie = () => ({
    typeAnnotation: {
      validate: (0, n.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: !0
    },
    decorators: {
      validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
      optional: !0
    }
  });

  R.patternLikeCommon = ie;
  b("Identifier", {
    builder: ["name"],
    visitor: ["typeAnnotation", "decorators"],
    aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
    fields: Object.assign({}, ie(), {
      name: {
        validate: (0, n.chain)((0, n.assertValueType)("string"), Object.assign(function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && !(0, Hp.default)(r, !1)) throw new TypeError(`"${r}" is not a valid identifier name`);
        }, {
          type: "string"
        }))
      },
      optional: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      }
    }),

    validate(e, t, r) {
      if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
      let l = /\.(\w+)$/.exec(t);
      if (!l) return;
      let [, y] = l,
          d = {
        computed: !1
      };

      if (y === "property") {
        if ((0, M.default)("MemberExpression", e, d) || (0, M.default)("OptionalMemberExpression", e, d)) return;
      } else if (y === "key") {
        if ((0, M.default)("Property", e, d) || (0, M.default)("Method", e, d)) return;
      } else if (y === "exported") {
        if ((0, M.default)("ExportSpecifier", e)) return;
      } else if (y === "imported") {
        if ((0, M.default)("ImportSpecifier", e, {
          imported: r
        })) return;
      } else if (y === "meta" && (0, M.default)("MetaProperty", e, {
        meta: r
      })) return;

      if (((0, tn.isKeyword)(r.name) || (0, tn.isReservedWord)(r.name, !1)) && r.name !== "this") throw new TypeError(`"${r.name}" is not a valid identifier`);
    }

  });
  b("IfStatement", {
    visitor: ["test", "consequent", "alternate"],
    aliases: ["Statement", "Conditional"],
    fields: {
      test: {
        validate: (0, n.assertNodeType)("Expression")
      },
      consequent: {
        validate: (0, n.assertNodeType)("Statement")
      },
      alternate: {
        optional: !0,
        validate: (0, n.assertNodeType)("Statement")
      }
    }
  });
  b("LabeledStatement", {
    visitor: ["label", "body"],
    aliases: ["Statement"],
    fields: {
      label: {
        validate: (0, n.assertNodeType)("Identifier")
      },
      body: {
        validate: (0, n.assertNodeType)("Statement")
      }
    }
  });
  b("StringLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, n.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  b("NumericLiteral", {
    builder: ["value"],
    deprecatedAlias: "NumberLiteral",
    fields: {
      value: {
        validate: (0, n.assertValueType)("number")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  b("NullLiteral", {
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  b("BooleanLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, n.assertValueType)("boolean")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  b("RegExpLiteral", {
    builder: ["pattern", "flags"],
    deprecatedAlias: "RegexLiteral",
    aliases: ["Expression", "Pureish", "Literal"],
    fields: {
      pattern: {
        validate: (0, n.assertValueType)("string")
      },
      flags: {
        validate: (0, n.chain)((0, n.assertValueType)("string"), Object.assign(function (e, t, r) {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
          let l = /[^gimsuy]/.exec(r);
          if (l) throw new TypeError(`"${l[0]}" is not a valid RegExp flag`);
        }, {
          type: "string"
        })),
        default: ""
      }
    }
  });
  b("LogicalExpression", {
    builder: ["operator", "left", "right"],
    visitor: ["left", "right"],
    aliases: ["Binary", "Expression"],
    fields: {
      operator: {
        validate: (0, n.assertOneOf)(...ue.LOGICAL_OPERATORS)
      },
      left: {
        validate: (0, n.assertNodeType)("Expression")
      },
      right: {
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  });
  b("MemberExpression", {
    builder: ["object", "property", "computed", ...(__Process$.env.BABEL_TYPES_8_BREAKING ? [] : ["optional"])],
    visitor: ["object", "property"],
    aliases: ["Expression", "LVal"],
    fields: Object.assign({
      object: {
        validate: (0, n.assertNodeType)("Expression", "Super")
      },
      property: {
        validate: function () {
          let e = (0, n.assertNodeType)("Identifier", "PrivateName"),
              t = (0, n.assertNodeType)("Expression"),
              r = function (l, y, d) {
            (l.computed ? t : e)(l, y, d);
          };

          return r.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"], r;
        }()
      },
      computed: {
        default: !1
      }
    }, __Process$.env.BABEL_TYPES_8_BREAKING ? {} : {
      optional: {
        validate: (0, n.assertOneOf)(!0, !1),
        optional: !0
      }
    })
  });
  b("NewExpression", {
    inherits: "CallExpression"
  });
  b("Program", {
    visitor: ["directives", "body"],
    builder: ["body", "directives", "sourceType", "interpreter"],
    fields: {
      sourceFile: {
        validate: (0, n.assertValueType)("string")
      },
      sourceType: {
        validate: (0, n.assertOneOf)("script", "module"),
        default: "script"
      },
      interpreter: {
        validate: (0, n.assertNodeType)("InterpreterDirective"),
        default: null,
        optional: !0
      },
      directives: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Directive"))),
        default: []
      },
      body: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "Block"]
  });
  b("ObjectExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
      }
    }
  });
  b("ObjectMethod", {
    builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
    fields: Object.assign({}, ne(), $(), {
      kind: Object.assign({
        validate: (0, n.assertOneOf)("method", "get", "set")
      }, __Process$.env.BABEL_TYPES_8_BREAKING ? {} : {
        default: "method"
      }),
      computed: {
        default: !1
      },
      key: {
        validate: function () {
          let e = (0, n.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"),
              t = (0, n.assertNodeType)("Expression"),
              r = function (l, y, d) {
            (l.computed ? t : e)(l, y, d);
          };

          return r.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral"], r;
        }()
      },
      decorators: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
        optional: !0
      },
      body: {
        validate: (0, n.assertNodeType)("BlockStatement")
      }
    }),
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
  });
  b("ObjectProperty", {
    builder: ["key", "value", "computed", "shorthand", ...(__Process$.env.BABEL_TYPES_8_BREAKING ? [] : ["decorators"])],
    fields: {
      computed: {
        default: !1
      },
      key: {
        validate: function () {
          let e = (0, n.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"),
              t = (0, n.assertNodeType)("Expression");
          return Object.assign(function (l, y, d) {
            (l.computed ? t : e)(l, y, d);
          }, {
            oneOfNodeTypes: ["Expression", "Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "PrivateName"]
          });
        }()
      },
      value: {
        validate: (0, n.assertNodeType)("Expression", "PatternLike")
      },
      shorthand: {
        validate: (0, n.chain)((0, n.assertValueType)("boolean"), Object.assign(function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && e.computed) throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }, {
          type: "boolean"
        }), function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && !(0, M.default)("Identifier", e.key)) throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }),
        default: !1
      },
      decorators: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
        optional: !0
      }
    },
    visitor: ["key", "value", "decorators"],
    aliases: ["UserWhitespacable", "Property", "ObjectMember"],
    validate: function () {
      let e = (0, n.assertNodeType)("Identifier", "Pattern", "TSAsExpression", "TSNonNullExpression", "TSTypeAssertion"),
          t = (0, n.assertNodeType)("Expression");
      return function (r, l, y) {
        if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
        ((0, M.default)("ObjectPattern", r) ? e : t)(y, "value", y.value);
      };
    }()
  });
  b("RestElement", {
    visitor: ["argument", "typeAnnotation"],
    builder: ["argument"],
    aliases: ["LVal", "PatternLike"],
    deprecatedAlias: "RestProperty",
    fields: Object.assign({}, ie(), {
      argument: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, n.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression") : (0, n.assertNodeType)("LVal")
      },
      optional: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      }
    }),

    validate(e, t) {
      if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
      let r = /(\w+)\[(\d+)\]/.exec(t);
      if (!r) throw new Error("Internal Babel error: malformed key.");
      let [, l, y] = r;
      if (e[l].length > +y + 1) throw new TypeError(`RestElement must be last element of ${l}`);
    }

  });
  b("ReturnStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, n.assertNodeType)("Expression"),
        optional: !0
      }
    }
  });
  b("SequenceExpression", {
    visitor: ["expressions"],
    fields: {
      expressions: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Expression")))
      }
    },
    aliases: ["Expression"]
  });
  b("ParenthesizedExpression", {
    visitor: ["expression"],
    aliases: ["Expression", "ExpressionWrapper"],
    fields: {
      expression: {
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  });
  b("SwitchCase", {
    visitor: ["test", "consequent"],
    fields: {
      test: {
        validate: (0, n.assertNodeType)("Expression"),
        optional: !0
      },
      consequent: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Statement")))
      }
    }
  });
  b("SwitchStatement", {
    visitor: ["discriminant", "cases"],
    aliases: ["Statement", "BlockParent", "Scopable"],
    fields: {
      discriminant: {
        validate: (0, n.assertNodeType)("Expression")
      },
      cases: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("SwitchCase")))
      }
    }
  });
  b("ThisExpression", {
    aliases: ["Expression"]
  });
  b("ThrowStatement", {
    visitor: ["argument"],
    aliases: ["Statement", "Terminatorless", "CompletionStatement"],
    fields: {
      argument: {
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  });
  b("TryStatement", {
    visitor: ["block", "handler", "finalizer"],
    aliases: ["Statement"],
    fields: {
      block: {
        validate: (0, n.chain)((0, n.assertNodeType)("BlockStatement"), Object.assign(function (e) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && !e.handler && !e.finalizer) throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }, {
          oneOfNodeTypes: ["BlockStatement"]
        }))
      },
      handler: {
        optional: !0,
        validate: (0, n.assertNodeType)("CatchClause")
      },
      finalizer: {
        optional: !0,
        validate: (0, n.assertNodeType)("BlockStatement")
      }
    }
  });
  b("UnaryExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: !0
      },
      argument: {
        validate: (0, n.assertNodeType)("Expression")
      },
      operator: {
        validate: (0, n.assertOneOf)(...ue.UNARY_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["UnaryLike", "Expression"]
  });
  b("UpdateExpression", {
    builder: ["operator", "argument", "prefix"],
    fields: {
      prefix: {
        default: !1
      },
      argument: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, n.assertNodeType)("Identifier", "MemberExpression") : (0, n.assertNodeType)("Expression")
      },
      operator: {
        validate: (0, n.assertOneOf)(...ue.UPDATE_OPERATORS)
      }
    },
    visitor: ["argument"],
    aliases: ["Expression"]
  });
  b("VariableDeclaration", {
    builder: ["kind", "declarations"],
    visitor: ["declarations"],
    aliases: ["Statement", "Declaration"],
    fields: {
      declare: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      kind: {
        validate: (0, n.assertOneOf)("var", "let", "const")
      },
      declarations: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("VariableDeclarator")))
      }
    },

    validate(e, t, r) {
      if (!!__Process$.env.BABEL_TYPES_8_BREAKING && !!(0, M.default)("ForXStatement", e, {
        left: r
      }) && r.declarations.length !== 1) throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${e.type}`);
    }

  });
  b("VariableDeclarator", {
    visitor: ["id", "init"],
    fields: {
      id: {
        validate: function () {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return (0, n.assertNodeType)("LVal");
          let e = (0, n.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
              t = (0, n.assertNodeType)("Identifier");
          return function (r, l, y) {
            (r.init ? e : t)(r, l, y);
          };
        }()
      },
      definite: {
        optional: !0,
        validate: (0, n.assertValueType)("boolean")
      },
      init: {
        optional: !0,
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  });
  b("WhileStatement", {
    visitor: ["test", "body"],
    aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
    fields: {
      test: {
        validate: (0, n.assertNodeType)("Expression")
      },
      body: {
        validate: (0, n.assertNodeType)("Statement")
      }
    }
  });
  b("WithStatement", {
    visitor: ["object", "body"],
    aliases: ["Statement"],
    fields: {
      object: {
        validate: (0, n.assertNodeType)("Expression")
      },
      body: {
        validate: (0, n.assertNodeType)("Statement")
      }
    }
  });
  b("AssignmentPattern", {
    visitor: ["left", "right", "decorators"],
    builder: ["left", "right"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, ie(), {
      left: {
        validate: (0, n.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression")
      },
      right: {
        validate: (0, n.assertNodeType)("Expression")
      },
      decorators: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
        optional: !0
      }
    })
  });
  b("ArrayPattern", {
    visitor: ["elements", "typeAnnotation"],
    builder: ["elements"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, ie(), {
      elements: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeOrValueType)("null", "PatternLike", "LVal")))
      },
      decorators: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
        optional: !0
      },
      optional: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      }
    })
  });
  b("ArrowFunctionExpression", {
    builder: ["params", "body", "async"],
    visitor: ["params", "body", "returnType", "typeParameters"],
    aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
    fields: Object.assign({}, ne(), $(), {
      expression: {
        validate: (0, n.assertValueType)("boolean")
      },
      body: {
        validate: (0, n.assertNodeType)("BlockStatement", "Expression")
      },
      predicate: {
        validate: (0, n.assertNodeType)("DeclaredPredicate", "InferredPredicate"),
        optional: !0
      }
    })
  });
  b("ClassBody", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")))
      }
    }
  });
  b("ClassExpression", {
    builder: ["id", "superClass", "body", "decorators"],
    visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
    aliases: ["Scopable", "Class", "Expression"],
    fields: {
      id: {
        validate: (0, n.assertNodeType)("Identifier"),
        optional: !0
      },
      typeParameters: {
        validate: (0, n.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: !0
      },
      body: {
        validate: (0, n.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: !0,
        validate: (0, n.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, n.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      },
      implements: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
        optional: !0
      },
      decorators: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
        optional: !0
      },
      mixins: {
        validate: (0, n.assertNodeType)("InterfaceExtends"),
        optional: !0
      }
    }
  });
  b("ClassDeclaration", {
    inherits: "ClassExpression",
    aliases: ["Scopable", "Class", "Statement", "Declaration"],
    fields: {
      id: {
        validate: (0, n.assertNodeType)("Identifier")
      },
      typeParameters: {
        validate: (0, n.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
        optional: !0
      },
      body: {
        validate: (0, n.assertNodeType)("ClassBody")
      },
      superClass: {
        optional: !0,
        validate: (0, n.assertNodeType)("Expression")
      },
      superTypeParameters: {
        validate: (0, n.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      },
      implements: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
        optional: !0
      },
      decorators: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
        optional: !0
      },
      mixins: {
        validate: (0, n.assertNodeType)("InterfaceExtends"),
        optional: !0
      },
      declare: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      abstract: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      }
    },
    validate: function () {
      let e = (0, n.assertNodeType)("Identifier");
      return function (t, r, l) {
        !__Process$.env.BABEL_TYPES_8_BREAKING || (0, M.default)("ExportDefaultDeclaration", t) || e(l, "id", l.id);
      };
    }()
  });
  b("ExportAllDeclaration", {
    visitor: ["source"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
    fields: {
      source: {
        validate: (0, n.assertNodeType)("StringLiteral")
      },
      exportKind: (0, n.validateOptional)((0, n.assertOneOf)("type", "value")),
      assertions: {
        optional: !0,
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("ImportAttribute")))
      }
    }
  });
  b("ExportDefaultDeclaration", {
    visitor: ["declaration"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
    fields: {
      declaration: {
        validate: (0, n.assertNodeType)("TSDeclareFunction", "FunctionDeclaration", "ClassDeclaration", "Expression")
      },
      exportKind: (0, n.validateOptional)((0, n.assertOneOf)("value"))
    }
  });
  b("ExportNamedDeclaration", {
    visitor: ["declaration", "specifiers", "source"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
    fields: {
      declaration: {
        optional: !0,
        validate: (0, n.chain)((0, n.assertNodeType)("Declaration"), Object.assign(function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && e.specifiers.length) throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }, {
          oneOfNodeTypes: ["Declaration"]
        }), function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && e.source) throw new TypeError("Cannot export a declaration from a source");
        })
      },
      assertions: {
        optional: !0,
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("ImportAttribute")))
      },
      specifiers: {
        default: [],
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)(function () {
          let e = (0, n.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier"),
              t = (0, n.assertNodeType)("ExportSpecifier");
          return __Process$.env.BABEL_TYPES_8_BREAKING ? function (r, l, y) {
            (r.source ? e : t)(r, l, y);
          } : e;
        }()))
      },
      source: {
        validate: (0, n.assertNodeType)("StringLiteral"),
        optional: !0
      },
      exportKind: (0, n.validateOptional)((0, n.assertOneOf)("type", "value"))
    }
  });
  b("ExportSpecifier", {
    visitor: ["local", "exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, n.assertNodeType)("Identifier")
      },
      exported: {
        validate: (0, n.assertNodeType)("Identifier", "StringLiteral")
      },
      exportKind: {
        validate: (0, n.assertOneOf)("type", "value"),
        optional: !0
      }
    }
  });
  b("ForOfStatement", {
    visitor: ["left", "right", "body"],
    builder: ["left", "right", "body", "await"],
    aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
    fields: {
      left: {
        validate: function () {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return (0, n.assertNodeType)("VariableDeclaration", "LVal");
          let e = (0, n.assertNodeType)("VariableDeclaration"),
              t = (0, n.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern", "TSAsExpression", "TSTypeAssertion", "TSNonNullExpression");
          return function (r, l, y) {
            (0, M.default)("VariableDeclaration", y) ? e(r, l, y) : t(r, l, y);
          };
        }()
      },
      right: {
        validate: (0, n.assertNodeType)("Expression")
      },
      body: {
        validate: (0, n.assertNodeType)("Statement")
      },
      await: {
        default: !1
      }
    }
  });
  b("ImportDeclaration", {
    visitor: ["specifiers", "source"],
    aliases: ["Statement", "Declaration", "ModuleDeclaration"],
    fields: {
      assertions: {
        optional: !0,
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("ImportAttribute")))
      },
      specifiers: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
      },
      source: {
        validate: (0, n.assertNodeType)("StringLiteral")
      },
      importKind: {
        validate: (0, n.assertOneOf)("type", "typeof", "value"),
        optional: !0
      }
    }
  });
  b("ImportDefaultSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, n.assertNodeType)("Identifier")
      }
    }
  });
  b("ImportNamespaceSpecifier", {
    visitor: ["local"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, n.assertNodeType)("Identifier")
      }
    }
  });
  b("ImportSpecifier", {
    visitor: ["local", "imported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      local: {
        validate: (0, n.assertNodeType)("Identifier")
      },
      imported: {
        validate: (0, n.assertNodeType)("Identifier", "StringLiteral")
      },
      importKind: {
        validate: (0, n.assertOneOf)("type", "typeof", "value"),
        optional: !0
      }
    }
  });
  b("MetaProperty", {
    visitor: ["meta", "property"],
    aliases: ["Expression"],
    fields: {
      meta: {
        validate: (0, n.chain)((0, n.assertNodeType)("Identifier"), Object.assign(function (e, t, r) {
          if (!__Process$.env.BABEL_TYPES_8_BREAKING) return;
          let l;

          switch (r.name) {
            case "function":
              l = "sent";
              break;

            case "new":
              l = "target";
              break;

            case "import":
              l = "meta";
              break;
          }

          if (!(0, M.default)("Identifier", e.property, {
            name: l
          })) throw new TypeError("Unrecognised MetaProperty");
        }, {
          oneOfNodeTypes: ["Identifier"]
        }))
      },
      property: {
        validate: (0, n.assertNodeType)("Identifier")
      }
    }
  });

  var Oe = () => ({
    abstract: {
      validate: (0, n.assertValueType)("boolean"),
      optional: !0
    },
    accessibility: {
      validate: (0, n.assertOneOf)("public", "private", "protected"),
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
      validate: (0, n.assertValueType)("boolean"),
      optional: !0
    },
    key: {
      validate: (0, n.chain)(function () {
        let e = (0, n.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral"),
            t = (0, n.assertNodeType)("Expression");
        return function (r, l, y) {
          (r.computed ? t : e)(r, l, y);
        };
      }(), (0, n.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression"))
    }
  });

  R.classMethodOrPropertyCommon = Oe;

  var nt = () => Object.assign({}, ne(), Oe(), {
    params: {
      validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
    },
    kind: {
      validate: (0, n.assertOneOf)("get", "set", "method", "constructor"),
      default: "method"
    },
    access: {
      validate: (0, n.chain)((0, n.assertValueType)("string"), (0, n.assertOneOf)("public", "private", "protected")),
      optional: !0
    },
    decorators: {
      validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
      optional: !0
    }
  });

  R.classMethodOrDeclareMethodCommon = nt;
  b("ClassMethod", {
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
    builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    fields: Object.assign({}, nt(), $(), {
      body: {
        validate: (0, n.assertNodeType)("BlockStatement")
      }
    })
  });
  b("ObjectPattern", {
    visitor: ["properties", "typeAnnotation", "decorators"],
    builder: ["properties"],
    aliases: ["Pattern", "PatternLike", "LVal"],
    fields: Object.assign({}, ie(), {
      properties: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("RestElement", "ObjectProperty")))
      }
    })
  });
  b("SpreadElement", {
    visitor: ["argument"],
    aliases: ["UnaryLike"],
    deprecatedAlias: "SpreadProperty",
    fields: {
      argument: {
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  });
  b("Super", {
    aliases: ["Expression"]
  });
  b("TaggedTemplateExpression", {
    visitor: ["tag", "quasi", "typeParameters"],
    builder: ["tag", "quasi"],
    aliases: ["Expression"],
    fields: {
      tag: {
        validate: (0, n.assertNodeType)("Expression")
      },
      quasi: {
        validate: (0, n.assertNodeType)("TemplateLiteral")
      },
      typeParameters: {
        validate: (0, n.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      }
    }
  });
  b("TemplateElement", {
    builder: ["value", "tail"],
    fields: {
      value: {
        validate: (0, n.chain)((0, n.assertShape)({
          raw: {
            validate: (0, n.assertValueType)("string")
          },
          cooked: {
            validate: (0, n.assertValueType)("string"),
            optional: !0
          }
        }), function (t) {
          let r = t.value.raw,
              l,
              y,
              d = !1;

          try {
            let m = () => {
              throw new Error();
            };

            ({
              str: l,
              containsInvalid: y
            } = (0, Zp.readStringContents)("template", r, 0, 0, 0, {
              unterminated() {
                d = !0;
              },

              strictNumericEscape: m,
              invalidEscapeSequence: m,
              numericSeparatorInEscapeSequence: m,
              unexpectedNumericSeparator: m,
              invalidDigit: m,
              invalidCodePoint: m
            }));
          } catch {
            d = !0, y = !0;
          }

          if (!d) throw new Error("Invalid raw");
          t.value.cooked = y ? null : l;
        })
      },
      tail: {
        default: !1
      }
    }
  });
  b("TemplateLiteral", {
    visitor: ["quasis", "expressions"],
    aliases: ["Expression", "Literal"],
    fields: {
      quasis: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("TemplateElement")))
      },
      expressions: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Expression", "TSType")), function (e, t, r) {
          if (e.quasis.length !== r.length + 1) throw new TypeError(`Number of ${e.type} quasis should be exactly one more than the number of expressions.
Expected ${r.length + 1} quasis but got ${e.quasis.length}`);
        })
      }
    }
  });
  b("YieldExpression", {
    builder: ["argument", "delegate"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      delegate: {
        validate: (0, n.chain)((0, n.assertValueType)("boolean"), Object.assign(function (e, t, r) {
          if (!!__Process$.env.BABEL_TYPES_8_BREAKING && r && !e.argument) throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }, {
          type: "boolean"
        })),
        default: !1
      },
      argument: {
        optional: !0,
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  });
  b("AwaitExpression", {
    builder: ["argument"],
    visitor: ["argument"],
    aliases: ["Expression", "Terminatorless"],
    fields: {
      argument: {
        validate: (0, n.assertNodeType)("Expression")
      }
    }
  });
  b("Import", {
    aliases: ["Expression"]
  });
  b("BigIntLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, n.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  b("ExportNamespaceSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: (0, n.assertNodeType)("Identifier")
      }
    }
  });
  b("OptionalMemberExpression", {
    builder: ["object", "property", "computed", "optional"],
    visitor: ["object", "property"],
    aliases: ["Expression"],
    fields: {
      object: {
        validate: (0, n.assertNodeType)("Expression")
      },
      property: {
        validate: function () {
          let e = (0, n.assertNodeType)("Identifier"),
              t = (0, n.assertNodeType)("Expression");
          return Object.assign(function (l, y, d) {
            (l.computed ? t : e)(l, y, d);
          }, {
            oneOfNodeTypes: ["Expression", "Identifier"]
          });
        }()
      },
      computed: {
        default: !1
      },
      optional: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, n.chain)((0, n.assertValueType)("boolean"), (0, n.assertOptionalChainStart)()) : (0, n.assertValueType)("boolean")
      }
    }
  });
  b("OptionalCallExpression", {
    visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
    builder: ["callee", "arguments", "optional"],
    aliases: ["Expression"],
    fields: {
      callee: {
        validate: (0, n.assertNodeType)("Expression")
      },
      arguments: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
      },
      optional: {
        validate: __Process$.env.BABEL_TYPES_8_BREAKING ? (0, n.chain)((0, n.assertValueType)("boolean"), (0, n.assertOptionalChainStart)()) : (0, n.assertValueType)("boolean")
      },
      typeArguments: {
        validate: (0, n.assertNodeType)("TypeParameterInstantiation"),
        optional: !0
      },
      typeParameters: {
        validate: (0, n.assertNodeType)("TSTypeParameterInstantiation"),
        optional: !0
      }
    }
  });
  b("ClassProperty", {
    visitor: ["key", "value", "typeAnnotation", "decorators"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property"],
    fields: Object.assign({}, Oe(), {
      value: {
        validate: (0, n.assertNodeType)("Expression"),
        optional: !0
      },
      definite: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      typeAnnotation: {
        validate: (0, n.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: !0
      },
      decorators: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
        optional: !0
      },
      readonly: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      declare: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      variance: {
        validate: (0, n.assertNodeType)("Variance"),
        optional: !0
      }
    })
  });
  b("ClassAccessorProperty", {
    visitor: ["key", "value", "typeAnnotation", "decorators"],
    builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
    aliases: ["Property", "Accessor"],
    fields: Object.assign({}, Oe(), {
      key: {
        validate: (0, n.chain)(function () {
          let e = (0, n.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "PrivateName"),
              t = (0, n.assertNodeType)("Expression");
          return function (r, l, y) {
            (r.computed ? t : e)(r, l, y);
          };
        }(), (0, n.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "BigIntLiteral", "Expression", "PrivateName"))
      },
      value: {
        validate: (0, n.assertNodeType)("Expression"),
        optional: !0
      },
      definite: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      typeAnnotation: {
        validate: (0, n.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: !0
      },
      decorators: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
        optional: !0
      },
      readonly: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      declare: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      variance: {
        validate: (0, n.assertNodeType)("Variance"),
        optional: !0
      }
    })
  });
  b("ClassPrivateProperty", {
    visitor: ["key", "value", "decorators", "typeAnnotation"],
    builder: ["key", "value", "decorators", "static"],
    aliases: ["Property", "Private"],
    fields: {
      key: {
        validate: (0, n.assertNodeType)("PrivateName")
      },
      value: {
        validate: (0, n.assertNodeType)("Expression"),
        optional: !0
      },
      typeAnnotation: {
        validate: (0, n.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
        optional: !0
      },
      decorators: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Decorator"))),
        optional: !0
      },
      static: {
        validate: (0, n.assertValueType)("boolean"),
        default: !1
      },
      readonly: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      definite: {
        validate: (0, n.assertValueType)("boolean"),
        optional: !0
      },
      variance: {
        validate: (0, n.assertNodeType)("Variance"),
        optional: !0
      }
    }
  });
  b("ClassPrivateMethod", {
    builder: ["kind", "key", "params", "body", "static"],
    visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
    aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
    fields: Object.assign({}, nt(), $(), {
      kind: {
        validate: (0, n.assertOneOf)("get", "set", "method"),
        default: "method"
      },
      key: {
        validate: (0, n.assertNodeType)("PrivateName")
      },
      body: {
        validate: (0, n.assertNodeType)("BlockStatement")
      }
    })
  });
  b("PrivateName", {
    visitor: ["id"],
    aliases: ["Private"],
    fields: {
      id: {
        validate: (0, n.assertNodeType)("Identifier")
      }
    }
  });
  b("StaticBlock", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, n.chain)((0, n.assertValueType)("array"), (0, n.assertEach)((0, n.assertNodeType)("Statement")))
      }
    },
    aliases: ["Scopable", "BlockParent", "FunctionParent"]
  });
});
var nn = A(() => {
  "use strict";

  var T = X(),
      O = (0, T.defineAliasedType)("Flow"),
      at = e => {
    O(e, {
      builder: ["id", "typeParameters", "extends", "body"],
      visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
      aliases: ["FlowDeclaration", "Statement", "Declaration"],
      fields: {
        id: (0, T.validateType)("Identifier"),
        typeParameters: (0, T.validateOptionalType)("TypeParameterDeclaration"),
        extends: (0, T.validateOptional)((0, T.arrayOfType)("InterfaceExtends")),
        mixins: (0, T.validateOptional)((0, T.arrayOfType)("InterfaceExtends")),
        implements: (0, T.validateOptional)((0, T.arrayOfType)("ClassImplements")),
        body: (0, T.validateType)("ObjectTypeAnnotation")
      }
    });
  };

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
  at("DeclareClass");
  O("DeclareFunction", {
    visitor: ["id"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, T.validateType)("Identifier"),
      predicate: (0, T.validateOptionalType)("DeclaredPredicate")
    }
  });
  at("DeclareInterface");
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
  at("InterfaceDeclaration");
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
var an = A(() => {
  "use strict";

  var h = X(),
      w = (0, h.defineAliasedType)("JSX");
  w("JSXAttribute", {
    visitor: ["name", "value"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: (0, h.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
      },
      value: {
        optional: !0,
        validate: (0, h.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
      }
    }
  });
  w("JSXClosingElement", {
    visitor: ["name"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: (0, h.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      }
    }
  });
  w("JSXElement", {
    builder: ["openingElement", "closingElement", "children", "selfClosing"],
    visitor: ["openingElement", "children", "closingElement"],
    aliases: ["Immutable", "Expression"],
    fields: Object.assign({
      openingElement: {
        validate: (0, h.assertNodeType)("JSXOpeningElement")
      },
      closingElement: {
        optional: !0,
        validate: (0, h.assertNodeType)("JSXClosingElement")
      },
      children: {
        validate: (0, h.chain)((0, h.assertValueType)("array"), (0, h.assertEach)((0, h.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
      }
    }, {
      selfClosing: {
        validate: (0, h.assertValueType)("boolean"),
        optional: !0
      }
    })
  });
  w("JSXEmptyExpression", {});
  w("JSXExpressionContainer", {
    visitor: ["expression"],
    aliases: ["Immutable"],
    fields: {
      expression: {
        validate: (0, h.assertNodeType)("Expression", "JSXEmptyExpression")
      }
    }
  });
  w("JSXSpreadChild", {
    visitor: ["expression"],
    aliases: ["Immutable"],
    fields: {
      expression: {
        validate: (0, h.assertNodeType)("Expression")
      }
    }
  });
  w("JSXIdentifier", {
    builder: ["name"],
    fields: {
      name: {
        validate: (0, h.assertValueType)("string")
      }
    }
  });
  w("JSXMemberExpression", {
    visitor: ["object", "property"],
    fields: {
      object: {
        validate: (0, h.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
      },
      property: {
        validate: (0, h.assertNodeType)("JSXIdentifier")
      }
    }
  });
  w("JSXNamespacedName", {
    visitor: ["namespace", "name"],
    fields: {
      namespace: {
        validate: (0, h.assertNodeType)("JSXIdentifier")
      },
      name: {
        validate: (0, h.assertNodeType)("JSXIdentifier")
      }
    }
  });
  w("JSXOpeningElement", {
    builder: ["name", "attributes", "selfClosing"],
    visitor: ["name", "attributes"],
    aliases: ["Immutable"],
    fields: {
      name: {
        validate: (0, h.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
      },
      selfClosing: {
        default: !1
      },
      attributes: {
        validate: (0, h.chain)((0, h.assertValueType)("array"), (0, h.assertEach)((0, h.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
      },
      typeParameters: {
        validate: (0, h.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
        optional: !0
      }
    }
  });
  w("JSXSpreadAttribute", {
    visitor: ["argument"],
    fields: {
      argument: {
        validate: (0, h.assertNodeType)("Expression")
      }
    }
  });
  w("JSXText", {
    aliases: ["Immutable"],
    builder: ["value"],
    fields: {
      value: {
        validate: (0, h.assertValueType)("string")
      }
    }
  });
  w("JSXFragment", {
    builder: ["openingFragment", "closingFragment", "children"],
    visitor: ["openingFragment", "children", "closingFragment"],
    aliases: ["Immutable", "Expression"],
    fields: {
      openingFragment: {
        validate: (0, h.assertNodeType)("JSXOpeningFragment")
      },
      closingFragment: {
        validate: (0, h.assertNodeType)("JSXClosingFragment")
      },
      children: {
        validate: (0, h.chain)((0, h.assertValueType)("array"), (0, h.assertEach)((0, h.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
      }
    }
  });
  w("JSXOpeningFragment", {
    aliases: ["Immutable"]
  });
  w("JSXClosingFragment", {
    aliases: ["Immutable"]
  });
});
var st = A(G => {
  "use strict";

  Object.defineProperty(G, "__esModule", {
    value: !0
  });
  G.PLACEHOLDERS_FLIPPED_ALIAS = G.PLACEHOLDERS_ALIAS = G.PLACEHOLDERS = void 0;
  var ef = X(),
      sn = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
  G.PLACEHOLDERS = sn;
  var ge = {
    Declaration: ["Statement"],
    Pattern: ["PatternLike", "LVal"]
  };
  G.PLACEHOLDERS_ALIAS = ge;

  for (let e of sn) {
    let t = ef.ALIAS_KEYS[e];
    t != null && t.length && (ge[e] = t);
  }

  var ve = {};
  G.PLACEHOLDERS_FLIPPED_ALIAS = ve;
  Object.keys(ge).forEach(e => {
    ge[e].forEach(t => {
      Object.hasOwnProperty.call(ve, t) || (ve[t] = []), ve[t].push(e);
    });
  });
});
var on = A(() => {
  "use strict";

  var Ie = X(),
      tf = st(),
      ot = (0, Ie.defineAliasedType)("Miscellaneous");
  ot("Noop", {
    visitor: []
  });
  ot("Placeholder", {
    visitor: [],
    builder: ["expectedNode", "name"],
    fields: {
      name: {
        validate: (0, Ie.assertNodeType)("Identifier")
      },
      expectedNode: {
        validate: (0, Ie.assertOneOf)(...tf.PLACEHOLDERS)
      }
    }
  });
  ot("V8IntrinsicIdentifier", {
    builder: ["name"],
    fields: {
      name: {
        validate: (0, Ie.assertValueType)("string")
      }
    }
  });
});
var un = A(() => {
  "use strict";

  var _ = X();

  (0, _.default)("ArgumentPlaceholder", {});
  (0, _.default)("BindExpression", {
    visitor: ["object", "callee"],
    aliases: ["Expression"],
    fields: __Process$.env.BABEL_TYPES_8_BREAKING ? {
      object: {
        validate: (0, _.assertNodeType)("Expression")
      },
      callee: {
        validate: (0, _.assertNodeType)("Expression")
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
  (0, _.default)("ImportAttribute", {
    visitor: ["key", "value"],
    fields: {
      key: {
        validate: (0, _.assertNodeType)("Identifier", "StringLiteral")
      },
      value: {
        validate: (0, _.assertNodeType)("StringLiteral")
      }
    }
  });
  (0, _.default)("Decorator", {
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, _.assertNodeType)("Expression")
      }
    }
  });
  (0, _.default)("DoExpression", {
    visitor: ["body"],
    builder: ["body", "async"],
    aliases: ["Expression"],
    fields: {
      body: {
        validate: (0, _.assertNodeType)("BlockStatement")
      },
      async: {
        validate: (0, _.assertValueType)("boolean"),
        default: !1
      }
    }
  });
  (0, _.default)("ExportDefaultSpecifier", {
    visitor: ["exported"],
    aliases: ["ModuleSpecifier"],
    fields: {
      exported: {
        validate: (0, _.assertNodeType)("Identifier")
      }
    }
  });
  (0, _.default)("RecordExpression", {
    visitor: ["properties"],
    aliases: ["Expression"],
    fields: {
      properties: {
        validate: (0, _.chain)((0, _.assertValueType)("array"), (0, _.assertEach)((0, _.assertNodeType)("ObjectProperty", "SpreadElement")))
      }
    }
  });
  (0, _.default)("TupleExpression", {
    fields: {
      elements: {
        validate: (0, _.chain)((0, _.assertValueType)("array"), (0, _.assertEach)((0, _.assertNodeType)("Expression", "SpreadElement"))),
        default: []
      }
    },
    visitor: ["elements"],
    aliases: ["Expression"]
  });
  (0, _.default)("DecimalLiteral", {
    builder: ["value"],
    fields: {
      value: {
        validate: (0, _.assertValueType)("string")
      }
    },
    aliases: ["Expression", "Pureish", "Literal", "Immutable"]
  });
  (0, _.default)("ModuleExpression", {
    visitor: ["body"],
    fields: {
      body: {
        validate: (0, _.assertNodeType)("Program")
      }
    },
    aliases: ["Expression"]
  });
  (0, _.default)("TopicReference", {
    aliases: ["Expression"]
  });
  (0, _.default)("PipelineTopicExpression", {
    builder: ["expression"],
    visitor: ["expression"],
    fields: {
      expression: {
        validate: (0, _.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression"]
  });
  (0, _.default)("PipelineBareFunction", {
    builder: ["callee"],
    visitor: ["callee"],
    fields: {
      callee: {
        validate: (0, _.assertNodeType)("Expression")
      }
    },
    aliases: ["Expression"]
  });
  (0, _.default)("PipelinePrimaryTopicReference", {
    aliases: ["Expression"]
  });
});
var Tn = A(() => {
  "use strict";

  var S = X(),
      ln = it(),
      rf = te(),
      v = (0, S.defineAliasedType)("TypeScript"),
      K = (0, S.assertValueType)("boolean"),
      pn = () => ({
    returnType: {
      validate: (0, S.assertNodeType)("TSTypeAnnotation", "Noop"),
      optional: !0
    },
    typeParameters: {
      validate: (0, S.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
      optional: !0
    }
  });

  v("TSParameterProperty", {
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
  v("TSDeclareFunction", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "params", "returnType"],
    fields: Object.assign({}, (0, ln.functionDeclarationCommon)(), pn())
  });
  v("TSDeclareMethod", {
    visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
    fields: Object.assign({}, (0, ln.classMethodOrDeclareMethodCommon)(), pn())
  });
  v("TSQualifiedName", {
    aliases: ["TSEntityName"],
    visitor: ["left", "right"],
    fields: {
      left: (0, S.validateType)("TSEntityName"),
      right: (0, S.validateType)("Identifier")
    }
  });

  var De = () => ({
    typeParameters: (0, S.validateOptionalType)("TSTypeParameterDeclaration"),
    parameters: (0, S.validateArrayOfType)(["Identifier", "RestElement"]),
    typeAnnotation: (0, S.validateOptionalType)("TSTypeAnnotation")
  }),
      fn = {
    aliases: ["TSTypeElement"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"],
    fields: De()
  };

  v("TSCallSignatureDeclaration", fn);
  v("TSConstructSignatureDeclaration", fn);

  var cn = () => ({
    key: (0, S.validateType)("Expression"),
    computed: {
      default: !1
    },
    optional: (0, S.validateOptional)(K)
  });

  v("TSPropertySignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeAnnotation", "initializer"],
    fields: Object.assign({}, cn(), {
      readonly: (0, S.validateOptional)(K),
      typeAnnotation: (0, S.validateOptionalType)("TSTypeAnnotation"),
      initializer: (0, S.validateOptionalType)("Expression"),
      kind: {
        validate: (0, S.assertOneOf)("get", "set")
      }
    })
  });
  v("TSMethodSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
    fields: Object.assign({}, De(), cn(), {
      kind: {
        validate: (0, S.assertOneOf)("method", "get", "set")
      }
    })
  });
  v("TSIndexSignature", {
    aliases: ["TSTypeElement"],
    visitor: ["parameters", "typeAnnotation"],
    fields: {
      readonly: (0, S.validateOptional)(K),
      static: (0, S.validateOptional)(K),
      parameters: (0, S.validateArrayOfType)("Identifier"),
      typeAnnotation: (0, S.validateOptionalType)("TSTypeAnnotation")
    }
  });
  var nf = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];

  for (let e of nf) v(e, {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });

  v("TSThisType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
  var yn = {
    aliases: ["TSType"],
    visitor: ["typeParameters", "parameters", "typeAnnotation"]
  };
  v("TSFunctionType", Object.assign({}, yn, {
    fields: De()
  }));
  v("TSConstructorType", Object.assign({}, yn, {
    fields: Object.assign({}, De(), {
      abstract: (0, S.validateOptional)(K)
    })
  }));
  v("TSTypeReference", {
    aliases: ["TSType"],
    visitor: ["typeName", "typeParameters"],
    fields: {
      typeName: (0, S.validateType)("TSEntityName"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  v("TSTypePredicate", {
    aliases: ["TSType"],
    visitor: ["parameterName", "typeAnnotation"],
    builder: ["parameterName", "typeAnnotation", "asserts"],
    fields: {
      parameterName: (0, S.validateType)(["Identifier", "TSThisType"]),
      typeAnnotation: (0, S.validateOptionalType)("TSTypeAnnotation"),
      asserts: (0, S.validateOptional)(K)
    }
  });
  v("TSTypeQuery", {
    aliases: ["TSType"],
    visitor: ["exprName", "typeParameters"],
    fields: {
      exprName: (0, S.validateType)(["TSEntityName", "TSImportType"]),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  v("TSTypeLiteral", {
    aliases: ["TSType"],
    visitor: ["members"],
    fields: {
      members: (0, S.validateArrayOfType)("TSTypeElement")
    }
  });
  v("TSArrayType", {
    aliases: ["TSType"],
    visitor: ["elementType"],
    fields: {
      elementType: (0, S.validateType)("TSType")
    }
  });
  v("TSTupleType", {
    aliases: ["TSType"],
    visitor: ["elementTypes"],
    fields: {
      elementTypes: (0, S.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
    }
  });
  v("TSOptionalType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  v("TSRestType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  v("TSNamedTupleMember", {
    visitor: ["label", "elementType"],
    builder: ["label", "elementType", "optional"],
    fields: {
      label: (0, S.validateType)("Identifier"),
      optional: {
        validate: K,
        default: !1
      },
      elementType: (0, S.validateType)("TSType")
    }
  });
  var dn = {
    aliases: ["TSType"],
    visitor: ["types"],
    fields: {
      types: (0, S.validateArrayOfType)("TSType")
    }
  };
  v("TSUnionType", dn);
  v("TSIntersectionType", dn);
  v("TSConditionalType", {
    aliases: ["TSType"],
    visitor: ["checkType", "extendsType", "trueType", "falseType"],
    fields: {
      checkType: (0, S.validateType)("TSType"),
      extendsType: (0, S.validateType)("TSType"),
      trueType: (0, S.validateType)("TSType"),
      falseType: (0, S.validateType)("TSType")
    }
  });
  v("TSInferType", {
    aliases: ["TSType"],
    visitor: ["typeParameter"],
    fields: {
      typeParameter: (0, S.validateType)("TSTypeParameter")
    }
  });
  v("TSParenthesizedType", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  v("TSTypeOperator", {
    aliases: ["TSType"],
    visitor: ["typeAnnotation"],
    fields: {
      operator: (0, S.validate)((0, S.assertValueType)("string")),
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  v("TSIndexedAccessType", {
    aliases: ["TSType"],
    visitor: ["objectType", "indexType"],
    fields: {
      objectType: (0, S.validateType)("TSType"),
      indexType: (0, S.validateType)("TSType")
    }
  });
  v("TSMappedType", {
    aliases: ["TSType"],
    visitor: ["typeParameter", "typeAnnotation", "nameType"],
    fields: {
      readonly: (0, S.validateOptional)((0, S.assertOneOf)(!0, !1, "+", "-")),
      typeParameter: (0, S.validateType)("TSTypeParameter"),
      optional: (0, S.validateOptional)((0, S.assertOneOf)(!0, !1, "+", "-")),
      typeAnnotation: (0, S.validateOptionalType)("TSType"),
      nameType: (0, S.validateOptionalType)("TSType")
    }
  });
  v("TSLiteralType", {
    aliases: ["TSType", "TSBaseType"],
    visitor: ["literal"],
    fields: {
      literal: {
        validate: function () {
          let e = (0, S.assertNodeType)("NumericLiteral", "BigIntLiteral"),
              t = (0, S.assertOneOf)("-"),
              r = (0, S.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral");

          function l(y, d, m) {
            (0, rf.default)("UnaryExpression", m) ? (t(m, "operator", m.operator), e(m, "argument", m.argument)) : r(y, d, m);
          }

          return l.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "TemplateLiteral", "UnaryExpression"], l;
        }()
      }
    }
  });
  v("TSExpressionWithTypeArguments", {
    aliases: ["TSType"],
    visitor: ["expression", "typeParameters"],
    fields: {
      expression: (0, S.validateType)("TSEntityName"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  v("TSInterfaceDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "extends", "body"],
    fields: {
      declare: (0, S.validateOptional)(K),
      id: (0, S.validateType)("Identifier"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterDeclaration"),
      extends: (0, S.validateOptional)((0, S.arrayOfType)("TSExpressionWithTypeArguments")),
      body: (0, S.validateType)("TSInterfaceBody")
    }
  });
  v("TSInterfaceBody", {
    visitor: ["body"],
    fields: {
      body: (0, S.validateArrayOfType)("TSTypeElement")
    }
  });
  v("TSTypeAliasDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "typeParameters", "typeAnnotation"],
    fields: {
      declare: (0, S.validateOptional)(K),
      id: (0, S.validateType)("Identifier"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterDeclaration"),
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  v("TSInstantiationExpression", {
    aliases: ["Expression"],
    visitor: ["expression", "typeParameters"],
    fields: {
      expression: (0, S.validateType)("Expression"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  v("TSAsExpression", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["expression", "typeAnnotation"],
    fields: {
      expression: (0, S.validateType)("Expression"),
      typeAnnotation: (0, S.validateType)("TSType")
    }
  });
  v("TSTypeAssertion", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["typeAnnotation", "expression"],
    fields: {
      typeAnnotation: (0, S.validateType)("TSType"),
      expression: (0, S.validateType)("Expression")
    }
  });
  v("TSEnumDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "members"],
    fields: {
      declare: (0, S.validateOptional)(K),
      const: (0, S.validateOptional)(K),
      id: (0, S.validateType)("Identifier"),
      members: (0, S.validateArrayOfType)("TSEnumMember"),
      initializer: (0, S.validateOptionalType)("Expression")
    }
  });
  v("TSEnumMember", {
    visitor: ["id", "initializer"],
    fields: {
      id: (0, S.validateType)(["Identifier", "StringLiteral"]),
      initializer: (0, S.validateOptionalType)("Expression")
    }
  });
  v("TSModuleDeclaration", {
    aliases: ["Statement", "Declaration"],
    visitor: ["id", "body"],
    fields: {
      declare: (0, S.validateOptional)(K),
      global: (0, S.validateOptional)(K),
      id: (0, S.validateType)(["Identifier", "StringLiteral"]),
      body: (0, S.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
    }
  });
  v("TSModuleBlock", {
    aliases: ["Scopable", "Block", "BlockParent"],
    visitor: ["body"],
    fields: {
      body: (0, S.validateArrayOfType)("Statement")
    }
  });
  v("TSImportType", {
    aliases: ["TSType"],
    visitor: ["argument", "qualifier", "typeParameters"],
    fields: {
      argument: (0, S.validateType)("StringLiteral"),
      qualifier: (0, S.validateOptionalType)("TSEntityName"),
      typeParameters: (0, S.validateOptionalType)("TSTypeParameterInstantiation")
    }
  });
  v("TSImportEqualsDeclaration", {
    aliases: ["Statement"],
    visitor: ["id", "moduleReference"],
    fields: {
      isExport: (0, S.validate)(K),
      id: (0, S.validateType)("Identifier"),
      moduleReference: (0, S.validateType)(["TSEntityName", "TSExternalModuleReference"]),
      importKind: {
        validate: (0, S.assertOneOf)("type", "value"),
        optional: !0
      }
    }
  });
  v("TSExternalModuleReference", {
    visitor: ["expression"],
    fields: {
      expression: (0, S.validateType)("StringLiteral")
    }
  });
  v("TSNonNullExpression", {
    aliases: ["Expression", "LVal", "PatternLike"],
    visitor: ["expression"],
    fields: {
      expression: (0, S.validateType)("Expression")
    }
  });
  v("TSExportAssignment", {
    aliases: ["Statement"],
    visitor: ["expression"],
    fields: {
      expression: (0, S.validateType)("Expression")
    }
  });
  v("TSNamespaceExportDeclaration", {
    aliases: ["Statement"],
    visitor: ["id"],
    fields: {
      id: (0, S.validateType)("Identifier")
    }
  });
  v("TSTypeAnnotation", {
    visitor: ["typeAnnotation"],
    fields: {
      typeAnnotation: {
        validate: (0, S.assertNodeType)("TSType")
      }
    }
  });
  v("TSTypeParameterInstantiation", {
    visitor: ["params"],
    fields: {
      params: {
        validate: (0, S.chain)((0, S.assertValueType)("array"), (0, S.assertEach)((0, S.assertNodeType)("TSType")))
      }
    }
  });
  v("TSTypeParameterDeclaration", {
    visitor: ["params"],
    fields: {
      params: {
        validate: (0, S.chain)((0, S.assertValueType)("array"), (0, S.assertEach)((0, S.assertNodeType)("TSTypeParameter")))
      }
    }
  });
  v("TSTypeParameter", {
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
var q = A(Y => {
  "use strict";

  Object.defineProperty(Y, "__esModule", {
    value: !0
  });
  Object.defineProperty(Y, "ALIAS_KEYS", {
    enumerable: !0,
    get: function () {
      return C.ALIAS_KEYS;
    }
  });
  Object.defineProperty(Y, "BUILDER_KEYS", {
    enumerable: !0,
    get: function () {
      return C.BUILDER_KEYS;
    }
  });
  Object.defineProperty(Y, "DEPRECATED_KEYS", {
    enumerable: !0,
    get: function () {
      return C.DEPRECATED_KEYS;
    }
  });
  Object.defineProperty(Y, "FLIPPED_ALIAS_KEYS", {
    enumerable: !0,
    get: function () {
      return C.FLIPPED_ALIAS_KEYS;
    }
  });
  Object.defineProperty(Y, "NODE_FIELDS", {
    enumerable: !0,
    get: function () {
      return C.NODE_FIELDS;
    }
  });
  Object.defineProperty(Y, "NODE_PARENT_VALIDATIONS", {
    enumerable: !0,
    get: function () {
      return C.NODE_PARENT_VALIDATIONS;
    }
  });
  Object.defineProperty(Y, "PLACEHOLDERS", {
    enumerable: !0,
    get: function () {
      return le.PLACEHOLDERS;
    }
  });
  Object.defineProperty(Y, "PLACEHOLDERS_ALIAS", {
    enumerable: !0,
    get: function () {
      return le.PLACEHOLDERS_ALIAS;
    }
  });
  Object.defineProperty(Y, "PLACEHOLDERS_FLIPPED_ALIAS", {
    enumerable: !0,
    get: function () {
      return le.PLACEHOLDERS_FLIPPED_ALIAS;
    }
  });
  Y.TYPES = void 0;
  Object.defineProperty(Y, "VISITOR_KEYS", {
    enumerable: !0,
    get: function () {
      return C.VISITOR_KEYS;
    }
  });
  var z = __to_fast_properties$;
  it();
  nn();
  an();
  on();
  un();
  Tn();
  var C = X(),
      le = st();
  z(C.VISITOR_KEYS);
  z(C.ALIAS_KEYS);
  z(C.FLIPPED_ALIAS_KEYS);
  z(C.NODE_FIELDS);
  z(C.BUILDER_KEYS);
  z(C.DEPRECATED_KEYS);
  z(le.PLACEHOLDERS_ALIAS);
  z(le.PLACEHOLDERS_FLIPPED_ALIAS);
  var af = [].concat(Object.keys(C.VISITOR_KEYS), Object.keys(C.FLIPPED_ALIAS_KEYS), Object.keys(C.DEPRECATED_KEYS));
  Y.TYPES = af;
});
var xe = A(pe => {
  "use strict";

  Object.defineProperty(pe, "__esModule", {
    value: !0
  });
  pe.default = sf;
  pe.validateChild = En;
  pe.validateField = Sn;
  var mn = q();

  function sf(e, t, r) {
    if (!e) return;
    let l = mn.NODE_FIELDS[e.type];
    if (!l) return;
    let y = l[t];
    Sn(e, t, r, y), En(e, t, r);
  }

  function Sn(e, t, r, l) {
    !(l != null && l.validate) || l.optional && r == null || l.validate(e, t, r);
  }

  function En(e, t, r) {
    if (r == null) return;
    let l = mn.NODE_PARENT_VALIDATIONS[r.type];
    !l || l(e, t, r);
  }
});
var bn = A(ut => {
  "use strict";

  Object.defineProperty(ut, "__esModule", {
    value: !0
  });
  ut.default = lf;
  var of = xe(),
      uf = Ne();

  function lf(e) {
    let t = uf.BUILDER_KEYS[e.type];

    for (let r of t) (0, of.default)(e, r, e[r]);

    return e;
  }
});
var V = A(i => {
  "use strict";

  Object.defineProperty(i, "__esModule", {
    value: !0
  });
  i.anyTypeAnnotation = Kc;
  i.argumentPlaceholder = dd;
  i.arrayExpression = pf;
  i.arrayPattern = ac;
  i.arrayTypeAnnotation = Yc;
  i.arrowFunctionExpression = sc;
  i.assignmentExpression = ff;
  i.assignmentPattern = ic;
  i.awaitExpression = Dc;
  i.bigIntLiteral = _c;
  i.binaryExpression = cf;
  i.bindExpression = Td;
  i.blockStatement = mf;
  i.booleanLiteral = wf;
  i.booleanLiteralTypeAnnotation = qc;
  i.booleanTypeAnnotation = Vc;
  i.breakStatement = Sf;
  i.callExpression = Ef;
  i.catchClause = bf;
  i.classAccessorProperty = Bc;
  i.classBody = oc;
  i.classDeclaration = lc;
  i.classExpression = uc;
  i.classImplements = Xc;
  i.classMethod = Pc;
  i.classPrivateMethod = wc;
  i.classPrivateProperty = Mc;
  i.classProperty = Cc;
  i.conditionalExpression = Pf;
  i.continueStatement = Af;
  i.debuggerStatement = xf;
  i.decimalLiteral = xd;
  i.declareClass = Jc;
  i.declareExportAllDeclaration = ey;
  i.declareExportDeclaration = Zc;
  i.declareFunction = Uc;
  i.declareInterface = Wc;
  i.declareModule = Gc;
  i.declareModuleExports = zc;
  i.declareOpaqueType = $c;
  i.declareTypeAlias = Qc;
  i.declareVariable = Hc;
  i.declaredPredicate = ty;
  i.decorator = Sd;
  i.directive = df;
  i.directiveLiteral = Tf;
  i.doExpression = Ed;
  i.doWhileStatement = Of;
  i.emptyStatement = vf;
  i.emptyTypeAnnotation = cy;
  i.enumBooleanBody = Yy;
  i.enumBooleanMember = Xy;
  i.enumDeclaration = Ky;
  i.enumDefaultedMember = Wy;
  i.enumNumberBody = Vy;
  i.enumNumberMember = Jy;
  i.enumStringBody = qy;
  i.enumStringMember = Uy;
  i.enumSymbolBody = ky;
  i.existsTypeAnnotation = ry;
  i.exportAllDeclaration = pc;
  i.exportDefaultDeclaration = fc;
  i.exportDefaultSpecifier = bd;
  i.exportNamedDeclaration = cc;
  i.exportNamespaceSpecifier = hc;
  i.exportSpecifier = yc;
  i.expressionStatement = gf;
  i.file = If;
  i.forInStatement = Df;
  i.forOfStatement = dc;
  i.forStatement = Nf;
  i.functionDeclaration = _f;
  i.functionExpression = hf;
  i.functionTypeAnnotation = ny;
  i.functionTypeParam = iy;
  i.genericTypeAnnotation = ay;
  i.identifier = Lf;
  i.ifStatement = jf;
  i.import = Nc;
  i.importAttribute = md;
  i.importDeclaration = Tc;
  i.importDefaultSpecifier = mc;
  i.importNamespaceSpecifier = Sc;
  i.importSpecifier = Ec;
  i.indexedAccessType = Gy;
  i.inferredPredicate = sy;
  i.interfaceDeclaration = uy;
  i.interfaceExtends = oy;
  i.interfaceTypeAnnotation = ly;
  i.interpreterDirective = yf;
  i.intersectionTypeAnnotation = py;
  i.jSXAttribute = i.jsxAttribute = Qy;
  i.jSXClosingElement = i.jsxClosingElement = $y;
  i.jSXClosingFragment = i.jsxClosingFragment = pd;
  i.jSXElement = i.jsxElement = Hy;
  i.jSXEmptyExpression = i.jsxEmptyExpression = Zy;
  i.jSXExpressionContainer = i.jsxExpressionContainer = ed;
  i.jSXFragment = i.jsxFragment = ud;
  i.jSXIdentifier = i.jsxIdentifier = rd;
  i.jSXMemberExpression = i.jsxMemberExpression = nd;
  i.jSXNamespacedName = i.jsxNamespacedName = id;
  i.jSXOpeningElement = i.jsxOpeningElement = ad;
  i.jSXOpeningFragment = i.jsxOpeningFragment = ld;
  i.jSXSpreadAttribute = i.jsxSpreadAttribute = sd;
  i.jSXSpreadChild = i.jsxSpreadChild = td;
  i.jSXText = i.jsxText = od;
  i.labeledStatement = Cf;
  i.logicalExpression = Ff;
  i.memberExpression = Rf;
  i.metaProperty = bc;
  i.mixedTypeAnnotation = fy;
  i.moduleExpression = Od;
  i.newExpression = Kf;
  i.noop = fd;
  i.nullLiteral = Mf;
  i.nullLiteralTypeAnnotation = kc;
  i.nullableTypeAnnotation = yy;
  i.numberLiteral = RT;
  i.numberLiteralTypeAnnotation = dy;
  i.numberTypeAnnotation = Ty;
  i.numericLiteral = Pn;
  i.objectExpression = Vf;
  i.objectMethod = qf;
  i.objectPattern = Ac;
  i.objectProperty = kf;
  i.objectTypeAnnotation = my;
  i.objectTypeCallProperty = Ey;
  i.objectTypeIndexer = by;
  i.objectTypeInternalSlot = Sy;
  i.objectTypeProperty = Py;
  i.objectTypeSpreadProperty = Ay;
  i.opaqueType = xy;
  i.optionalCallExpression = jc;
  i.optionalIndexedAccessType = zy;
  i.optionalMemberExpression = Lc;
  i.parenthesizedExpression = Uf;
  i.pipelineBareFunction = Id;
  i.pipelinePrimaryTopicReference = Dd;
  i.pipelineTopicExpression = gd;
  i.placeholder = cd;
  i.privateName = Fc;
  i.program = Yf;
  i.qualifiedTypeIdentifier = Oy;
  i.recordExpression = Pd;
  i.regExpLiteral = An;
  i.regexLiteral = KT;
  i.restElement = xn;
  i.restProperty = YT;
  i.returnStatement = Xf;
  i.sequenceExpression = Jf;
  i.spreadElement = On;
  i.spreadProperty = VT;
  i.staticBlock = Rc;
  i.stringLiteral = Bf;
  i.stringLiteralTypeAnnotation = vy;
  i.stringTypeAnnotation = gy;
  i.super = xc;
  i.switchCase = Wf;
  i.switchStatement = Gf;
  i.symbolTypeAnnotation = Iy;
  i.taggedTemplateExpression = Oc;
  i.templateElement = vc;
  i.templateLiteral = gc;
  i.thisExpression = zf;
  i.thisTypeAnnotation = Dy;
  i.throwStatement = Qf;
  i.topicReference = vd;
  i.tryStatement = $f;
  i.tSAnyKeyword = i.tsAnyKeyword = Fd;
  i.tSArrayType = i.tsArrayType = nT;
  i.tSAsExpression = i.tsAsExpression = xT;
  i.tSBigIntKeyword = i.tsBigIntKeyword = Kd;
  i.tSBooleanKeyword = i.tsBooleanKeyword = Rd;
  i.tSCallSignatureDeclaration = i.tsCallSignatureDeclaration = jd;
  i.tSConditionalType = i.tsConditionalType = pT;
  i.tSConstructSignatureDeclaration = i.tsConstructSignatureDeclaration = Cd;
  i.tSConstructorType = i.tsConstructorType = Hd;
  i.tSDeclareFunction = i.tsDeclareFunction = _d;
  i.tSDeclareMethod = i.tsDeclareMethod = hd;
  i.tSEnumDeclaration = i.tsEnumDeclaration = vT;
  i.tSEnumMember = i.tsEnumMember = gT;
  i.tSExportAssignment = i.tsExportAssignment = jT;
  i.tSExpressionWithTypeArguments = i.tsExpressionWithTypeArguments = ST;
  i.tSExternalModuleReference = i.tsExternalModuleReference = hT;
  i.tSFunctionType = i.tsFunctionType = $d;
  i.tSImportEqualsDeclaration = i.tsImportEqualsDeclaration = _T;
  i.tSImportType = i.tsImportType = NT;
  i.tSIndexSignature = i.tsIndexSignature = wd;
  i.tSIndexedAccessType = i.tsIndexedAccessType = dT;
  i.tSInferType = i.tsInferType = fT;
  i.tSInstantiationExpression = i.tsInstantiationExpression = AT;
  i.tSInterfaceBody = i.tsInterfaceBody = bT;
  i.tSInterfaceDeclaration = i.tsInterfaceDeclaration = ET;
  i.tSIntersectionType = i.tsIntersectionType = lT;
  i.tSIntrinsicKeyword = i.tsIntrinsicKeyword = Yd;
  i.tSLiteralType = i.tsLiteralType = mT;
  i.tSMappedType = i.tsMappedType = TT;
  i.tSMethodSignature = i.tsMethodSignature = Md;
  i.tSModuleBlock = i.tsModuleBlock = DT;
  i.tSModuleDeclaration = i.tsModuleDeclaration = IT;
  i.tSNamedTupleMember = i.tsNamedTupleMember = oT;
  i.tSNamespaceExportDeclaration = i.tsNamespaceExportDeclaration = CT;
  i.tSNeverKeyword = i.tsNeverKeyword = Vd;
  i.tSNonNullExpression = i.tsNonNullExpression = LT;
  i.tSNullKeyword = i.tsNullKeyword = qd;
  i.tSNumberKeyword = i.tsNumberKeyword = kd;
  i.tSObjectKeyword = i.tsObjectKeyword = Xd;
  i.tSOptionalType = i.tsOptionalType = aT;
  i.tSParameterProperty = i.tsParameterProperty = Nd;
  i.tSParenthesizedType = i.tsParenthesizedType = cT;
  i.tSPropertySignature = i.tsPropertySignature = Bd;
  i.tSQualifiedName = i.tsQualifiedName = Ld;
  i.tSRestType = i.tsRestType = sT;
  i.tSStringKeyword = i.tsStringKeyword = Jd;
  i.tSSymbolKeyword = i.tsSymbolKeyword = Ud;
  i.tSThisType = i.tsThisType = Qd;
  i.tSTupleType = i.tsTupleType = iT;
  i.tSTypeAliasDeclaration = i.tsTypeAliasDeclaration = PT;
  i.tSTypeAnnotation = i.tsTypeAnnotation = BT;
  i.tSTypeAssertion = i.tsTypeAssertion = OT;
  i.tSTypeLiteral = i.tsTypeLiteral = rT;
  i.tSTypeOperator = i.tsTypeOperator = yT;
  i.tSTypeParameter = i.tsTypeParameter = FT;
  i.tSTypeParameterDeclaration = i.tsTypeParameterDeclaration = wT;
  i.tSTypeParameterInstantiation = i.tsTypeParameterInstantiation = MT;
  i.tSTypePredicate = i.tsTypePredicate = eT;
  i.tSTypeQuery = i.tsTypeQuery = tT;
  i.tSTypeReference = i.tsTypeReference = Zd;
  i.tSUndefinedKeyword = i.tsUndefinedKeyword = Wd;
  i.tSUnionType = i.tsUnionType = uT;
  i.tSUnknownKeyword = i.tsUnknownKeyword = Gd;
  i.tSVoidKeyword = i.tsVoidKeyword = zd;
  i.tupleExpression = Ad;
  i.tupleTypeAnnotation = Ny;
  i.typeAlias = hy;
  i.typeAnnotation = Ly;
  i.typeCastExpression = jy;
  i.typeParameter = Cy;
  i.typeParameterDeclaration = By;
  i.typeParameterInstantiation = My;
  i.typeofTypeAnnotation = _y;
  i.unaryExpression = Hf;
  i.unionTypeAnnotation = wy;
  i.updateExpression = Zf;
  i.v8IntrinsicIdentifier = yd;
  i.variableDeclaration = ec;
  i.variableDeclarator = tc;
  i.variance = Fy;
  i.voidTypeAnnotation = Ry;
  i.whileStatement = rc;
  i.withStatement = nc;
  i.yieldExpression = Ic;
  var c = bn();

  function pf(e = []) {
    return (0, c.default)({
      type: "ArrayExpression",
      elements: e
    });
  }

  function ff(e, t, r) {
    return (0, c.default)({
      type: "AssignmentExpression",
      operator: e,
      left: t,
      right: r
    });
  }

  function cf(e, t, r) {
    return (0, c.default)({
      type: "BinaryExpression",
      operator: e,
      left: t,
      right: r
    });
  }

  function yf(e) {
    return (0, c.default)({
      type: "InterpreterDirective",
      value: e
    });
  }

  function df(e) {
    return (0, c.default)({
      type: "Directive",
      value: e
    });
  }

  function Tf(e) {
    return (0, c.default)({
      type: "DirectiveLiteral",
      value: e
    });
  }

  function mf(e, t = []) {
    return (0, c.default)({
      type: "BlockStatement",
      body: e,
      directives: t
    });
  }

  function Sf(e = null) {
    return (0, c.default)({
      type: "BreakStatement",
      label: e
    });
  }

  function Ef(e, t) {
    return (0, c.default)({
      type: "CallExpression",
      callee: e,
      arguments: t
    });
  }

  function bf(e = null, t) {
    return (0, c.default)({
      type: "CatchClause",
      param: e,
      body: t
    });
  }

  function Pf(e, t, r) {
    return (0, c.default)({
      type: "ConditionalExpression",
      test: e,
      consequent: t,
      alternate: r
    });
  }

  function Af(e = null) {
    return (0, c.default)({
      type: "ContinueStatement",
      label: e
    });
  }

  function xf() {
    return {
      type: "DebuggerStatement"
    };
  }

  function Of(e, t) {
    return (0, c.default)({
      type: "DoWhileStatement",
      test: e,
      body: t
    });
  }

  function vf() {
    return {
      type: "EmptyStatement"
    };
  }

  function gf(e) {
    return (0, c.default)({
      type: "ExpressionStatement",
      expression: e
    });
  }

  function If(e, t = null, r = null) {
    return (0, c.default)({
      type: "File",
      program: e,
      comments: t,
      tokens: r
    });
  }

  function Df(e, t, r) {
    return (0, c.default)({
      type: "ForInStatement",
      left: e,
      right: t,
      body: r
    });
  }

  function Nf(e = null, t = null, r = null, l) {
    return (0, c.default)({
      type: "ForStatement",
      init: e,
      test: t,
      update: r,
      body: l
    });
  }

  function _f(e = null, t, r, l = !1, y = !1) {
    return (0, c.default)({
      type: "FunctionDeclaration",
      id: e,
      params: t,
      body: r,
      generator: l,
      async: y
    });
  }

  function hf(e = null, t, r, l = !1, y = !1) {
    return (0, c.default)({
      type: "FunctionExpression",
      id: e,
      params: t,
      body: r,
      generator: l,
      async: y
    });
  }

  function Lf(e) {
    return (0, c.default)({
      type: "Identifier",
      name: e
    });
  }

  function jf(e, t, r = null) {
    return (0, c.default)({
      type: "IfStatement",
      test: e,
      consequent: t,
      alternate: r
    });
  }

  function Cf(e, t) {
    return (0, c.default)({
      type: "LabeledStatement",
      label: e,
      body: t
    });
  }

  function Bf(e) {
    return (0, c.default)({
      type: "StringLiteral",
      value: e
    });
  }

  function Pn(e) {
    return (0, c.default)({
      type: "NumericLiteral",
      value: e
    });
  }

  function Mf() {
    return {
      type: "NullLiteral"
    };
  }

  function wf(e) {
    return (0, c.default)({
      type: "BooleanLiteral",
      value: e
    });
  }

  function An(e, t = "") {
    return (0, c.default)({
      type: "RegExpLiteral",
      pattern: e,
      flags: t
    });
  }

  function Ff(e, t, r) {
    return (0, c.default)({
      type: "LogicalExpression",
      operator: e,
      left: t,
      right: r
    });
  }

  function Rf(e, t, r = !1, l = null) {
    return (0, c.default)({
      type: "MemberExpression",
      object: e,
      property: t,
      computed: r,
      optional: l
    });
  }

  function Kf(e, t) {
    return (0, c.default)({
      type: "NewExpression",
      callee: e,
      arguments: t
    });
  }

  function Yf(e, t = [], r = "script", l = null) {
    return (0, c.default)({
      type: "Program",
      body: e,
      directives: t,
      sourceType: r,
      interpreter: l,
      sourceFile: null
    });
  }

  function Vf(e) {
    return (0, c.default)({
      type: "ObjectExpression",
      properties: e
    });
  }

  function qf(e = "method", t, r, l, y = !1, d = !1, m = !1) {
    return (0, c.default)({
      type: "ObjectMethod",
      kind: e,
      key: t,
      params: r,
      body: l,
      computed: y,
      generator: d,
      async: m
    });
  }

  function kf(e, t, r = !1, l = !1, y = null) {
    return (0, c.default)({
      type: "ObjectProperty",
      key: e,
      value: t,
      computed: r,
      shorthand: l,
      decorators: y
    });
  }

  function xn(e) {
    return (0, c.default)({
      type: "RestElement",
      argument: e
    });
  }

  function Xf(e = null) {
    return (0, c.default)({
      type: "ReturnStatement",
      argument: e
    });
  }

  function Jf(e) {
    return (0, c.default)({
      type: "SequenceExpression",
      expressions: e
    });
  }

  function Uf(e) {
    return (0, c.default)({
      type: "ParenthesizedExpression",
      expression: e
    });
  }

  function Wf(e = null, t) {
    return (0, c.default)({
      type: "SwitchCase",
      test: e,
      consequent: t
    });
  }

  function Gf(e, t) {
    return (0, c.default)({
      type: "SwitchStatement",
      discriminant: e,
      cases: t
    });
  }

  function zf() {
    return {
      type: "ThisExpression"
    };
  }

  function Qf(e) {
    return (0, c.default)({
      type: "ThrowStatement",
      argument: e
    });
  }

  function $f(e, t = null, r = null) {
    return (0, c.default)({
      type: "TryStatement",
      block: e,
      handler: t,
      finalizer: r
    });
  }

  function Hf(e, t, r = !0) {
    return (0, c.default)({
      type: "UnaryExpression",
      operator: e,
      argument: t,
      prefix: r
    });
  }

  function Zf(e, t, r = !1) {
    return (0, c.default)({
      type: "UpdateExpression",
      operator: e,
      argument: t,
      prefix: r
    });
  }

  function ec(e, t) {
    return (0, c.default)({
      type: "VariableDeclaration",
      kind: e,
      declarations: t
    });
  }

  function tc(e, t = null) {
    return (0, c.default)({
      type: "VariableDeclarator",
      id: e,
      init: t
    });
  }

  function rc(e, t) {
    return (0, c.default)({
      type: "WhileStatement",
      test: e,
      body: t
    });
  }

  function nc(e, t) {
    return (0, c.default)({
      type: "WithStatement",
      object: e,
      body: t
    });
  }

  function ic(e, t) {
    return (0, c.default)({
      type: "AssignmentPattern",
      left: e,
      right: t
    });
  }

  function ac(e) {
    return (0, c.default)({
      type: "ArrayPattern",
      elements: e
    });
  }

  function sc(e, t, r = !1) {
    return (0, c.default)({
      type: "ArrowFunctionExpression",
      params: e,
      body: t,
      async: r,
      expression: null
    });
  }

  function oc(e) {
    return (0, c.default)({
      type: "ClassBody",
      body: e
    });
  }

  function uc(e = null, t = null, r, l = null) {
    return (0, c.default)({
      type: "ClassExpression",
      id: e,
      superClass: t,
      body: r,
      decorators: l
    });
  }

  function lc(e, t = null, r, l = null) {
    return (0, c.default)({
      type: "ClassDeclaration",
      id: e,
      superClass: t,
      body: r,
      decorators: l
    });
  }

  function pc(e) {
    return (0, c.default)({
      type: "ExportAllDeclaration",
      source: e
    });
  }

  function fc(e) {
    return (0, c.default)({
      type: "ExportDefaultDeclaration",
      declaration: e
    });
  }

  function cc(e = null, t = [], r = null) {
    return (0, c.default)({
      type: "ExportNamedDeclaration",
      declaration: e,
      specifiers: t,
      source: r
    });
  }

  function yc(e, t) {
    return (0, c.default)({
      type: "ExportSpecifier",
      local: e,
      exported: t
    });
  }

  function dc(e, t, r, l = !1) {
    return (0, c.default)({
      type: "ForOfStatement",
      left: e,
      right: t,
      body: r,
      await: l
    });
  }

  function Tc(e, t) {
    return (0, c.default)({
      type: "ImportDeclaration",
      specifiers: e,
      source: t
    });
  }

  function mc(e) {
    return (0, c.default)({
      type: "ImportDefaultSpecifier",
      local: e
    });
  }

  function Sc(e) {
    return (0, c.default)({
      type: "ImportNamespaceSpecifier",
      local: e
    });
  }

  function Ec(e, t) {
    return (0, c.default)({
      type: "ImportSpecifier",
      local: e,
      imported: t
    });
  }

  function bc(e, t) {
    return (0, c.default)({
      type: "MetaProperty",
      meta: e,
      property: t
    });
  }

  function Pc(e = "method", t, r, l, y = !1, d = !1, m = !1, x = !1) {
    return (0, c.default)({
      type: "ClassMethod",
      kind: e,
      key: t,
      params: r,
      body: l,
      computed: y,
      static: d,
      generator: m,
      async: x
    });
  }

  function Ac(e) {
    return (0, c.default)({
      type: "ObjectPattern",
      properties: e
    });
  }

  function On(e) {
    return (0, c.default)({
      type: "SpreadElement",
      argument: e
    });
  }

  function xc() {
    return {
      type: "Super"
    };
  }

  function Oc(e, t) {
    return (0, c.default)({
      type: "TaggedTemplateExpression",
      tag: e,
      quasi: t
    });
  }

  function vc(e, t = !1) {
    return (0, c.default)({
      type: "TemplateElement",
      value: e,
      tail: t
    });
  }

  function gc(e, t) {
    return (0, c.default)({
      type: "TemplateLiteral",
      quasis: e,
      expressions: t
    });
  }

  function Ic(e = null, t = !1) {
    return (0, c.default)({
      type: "YieldExpression",
      argument: e,
      delegate: t
    });
  }

  function Dc(e) {
    return (0, c.default)({
      type: "AwaitExpression",
      argument: e
    });
  }

  function Nc() {
    return {
      type: "Import"
    };
  }

  function _c(e) {
    return (0, c.default)({
      type: "BigIntLiteral",
      value: e
    });
  }

  function hc(e) {
    return (0, c.default)({
      type: "ExportNamespaceSpecifier",
      exported: e
    });
  }

  function Lc(e, t, r = !1, l) {
    return (0, c.default)({
      type: "OptionalMemberExpression",
      object: e,
      property: t,
      computed: r,
      optional: l
    });
  }

  function jc(e, t, r) {
    return (0, c.default)({
      type: "OptionalCallExpression",
      callee: e,
      arguments: t,
      optional: r
    });
  }

  function Cc(e, t = null, r = null, l = null, y = !1, d = !1) {
    return (0, c.default)({
      type: "ClassProperty",
      key: e,
      value: t,
      typeAnnotation: r,
      decorators: l,
      computed: y,
      static: d
    });
  }

  function Bc(e, t = null, r = null, l = null, y = !1, d = !1) {
    return (0, c.default)({
      type: "ClassAccessorProperty",
      key: e,
      value: t,
      typeAnnotation: r,
      decorators: l,
      computed: y,
      static: d
    });
  }

  function Mc(e, t = null, r = null, l = !1) {
    return (0, c.default)({
      type: "ClassPrivateProperty",
      key: e,
      value: t,
      decorators: r,
      static: l
    });
  }

  function wc(e = "method", t, r, l, y = !1) {
    return (0, c.default)({
      type: "ClassPrivateMethod",
      kind: e,
      key: t,
      params: r,
      body: l,
      static: y
    });
  }

  function Fc(e) {
    return (0, c.default)({
      type: "PrivateName",
      id: e
    });
  }

  function Rc(e) {
    return (0, c.default)({
      type: "StaticBlock",
      body: e
    });
  }

  function Kc() {
    return {
      type: "AnyTypeAnnotation"
    };
  }

  function Yc(e) {
    return (0, c.default)({
      type: "ArrayTypeAnnotation",
      elementType: e
    });
  }

  function Vc() {
    return {
      type: "BooleanTypeAnnotation"
    };
  }

  function qc(e) {
    return (0, c.default)({
      type: "BooleanLiteralTypeAnnotation",
      value: e
    });
  }

  function kc() {
    return {
      type: "NullLiteralTypeAnnotation"
    };
  }

  function Xc(e, t = null) {
    return (0, c.default)({
      type: "ClassImplements",
      id: e,
      typeParameters: t
    });
  }

  function Jc(e, t = null, r = null, l) {
    return (0, c.default)({
      type: "DeclareClass",
      id: e,
      typeParameters: t,
      extends: r,
      body: l
    });
  }

  function Uc(e) {
    return (0, c.default)({
      type: "DeclareFunction",
      id: e
    });
  }

  function Wc(e, t = null, r = null, l) {
    return (0, c.default)({
      type: "DeclareInterface",
      id: e,
      typeParameters: t,
      extends: r,
      body: l
    });
  }

  function Gc(e, t, r = null) {
    return (0, c.default)({
      type: "DeclareModule",
      id: e,
      body: t,
      kind: r
    });
  }

  function zc(e) {
    return (0, c.default)({
      type: "DeclareModuleExports",
      typeAnnotation: e
    });
  }

  function Qc(e, t = null, r) {
    return (0, c.default)({
      type: "DeclareTypeAlias",
      id: e,
      typeParameters: t,
      right: r
    });
  }

  function $c(e, t = null, r = null) {
    return (0, c.default)({
      type: "DeclareOpaqueType",
      id: e,
      typeParameters: t,
      supertype: r
    });
  }

  function Hc(e) {
    return (0, c.default)({
      type: "DeclareVariable",
      id: e
    });
  }

  function Zc(e = null, t = null, r = null) {
    return (0, c.default)({
      type: "DeclareExportDeclaration",
      declaration: e,
      specifiers: t,
      source: r
    });
  }

  function ey(e) {
    return (0, c.default)({
      type: "DeclareExportAllDeclaration",
      source: e
    });
  }

  function ty(e) {
    return (0, c.default)({
      type: "DeclaredPredicate",
      value: e
    });
  }

  function ry() {
    return {
      type: "ExistsTypeAnnotation"
    };
  }

  function ny(e = null, t, r = null, l) {
    return (0, c.default)({
      type: "FunctionTypeAnnotation",
      typeParameters: e,
      params: t,
      rest: r,
      returnType: l
    });
  }

  function iy(e = null, t) {
    return (0, c.default)({
      type: "FunctionTypeParam",
      name: e,
      typeAnnotation: t
    });
  }

  function ay(e, t = null) {
    return (0, c.default)({
      type: "GenericTypeAnnotation",
      id: e,
      typeParameters: t
    });
  }

  function sy() {
    return {
      type: "InferredPredicate"
    };
  }

  function oy(e, t = null) {
    return (0, c.default)({
      type: "InterfaceExtends",
      id: e,
      typeParameters: t
    });
  }

  function uy(e, t = null, r = null, l) {
    return (0, c.default)({
      type: "InterfaceDeclaration",
      id: e,
      typeParameters: t,
      extends: r,
      body: l
    });
  }

  function ly(e = null, t) {
    return (0, c.default)({
      type: "InterfaceTypeAnnotation",
      extends: e,
      body: t
    });
  }

  function py(e) {
    return (0, c.default)({
      type: "IntersectionTypeAnnotation",
      types: e
    });
  }

  function fy() {
    return {
      type: "MixedTypeAnnotation"
    };
  }

  function cy() {
    return {
      type: "EmptyTypeAnnotation"
    };
  }

  function yy(e) {
    return (0, c.default)({
      type: "NullableTypeAnnotation",
      typeAnnotation: e
    });
  }

  function dy(e) {
    return (0, c.default)({
      type: "NumberLiteralTypeAnnotation",
      value: e
    });
  }

  function Ty() {
    return {
      type: "NumberTypeAnnotation"
    };
  }

  function my(e, t = [], r = [], l = [], y = !1) {
    return (0, c.default)({
      type: "ObjectTypeAnnotation",
      properties: e,
      indexers: t,
      callProperties: r,
      internalSlots: l,
      exact: y
    });
  }

  function Sy(e, t, r, l, y) {
    return (0, c.default)({
      type: "ObjectTypeInternalSlot",
      id: e,
      value: t,
      optional: r,
      static: l,
      method: y
    });
  }

  function Ey(e) {
    return (0, c.default)({
      type: "ObjectTypeCallProperty",
      value: e,
      static: null
    });
  }

  function by(e = null, t, r, l = null) {
    return (0, c.default)({
      type: "ObjectTypeIndexer",
      id: e,
      key: t,
      value: r,
      variance: l,
      static: null
    });
  }

  function Py(e, t, r = null) {
    return (0, c.default)({
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

  function Ay(e) {
    return (0, c.default)({
      type: "ObjectTypeSpreadProperty",
      argument: e
    });
  }

  function xy(e, t = null, r = null, l) {
    return (0, c.default)({
      type: "OpaqueType",
      id: e,
      typeParameters: t,
      supertype: r,
      impltype: l
    });
  }

  function Oy(e, t) {
    return (0, c.default)({
      type: "QualifiedTypeIdentifier",
      id: e,
      qualification: t
    });
  }

  function vy(e) {
    return (0, c.default)({
      type: "StringLiteralTypeAnnotation",
      value: e
    });
  }

  function gy() {
    return {
      type: "StringTypeAnnotation"
    };
  }

  function Iy() {
    return {
      type: "SymbolTypeAnnotation"
    };
  }

  function Dy() {
    return {
      type: "ThisTypeAnnotation"
    };
  }

  function Ny(e) {
    return (0, c.default)({
      type: "TupleTypeAnnotation",
      types: e
    });
  }

  function _y(e) {
    return (0, c.default)({
      type: "TypeofTypeAnnotation",
      argument: e
    });
  }

  function hy(e, t = null, r) {
    return (0, c.default)({
      type: "TypeAlias",
      id: e,
      typeParameters: t,
      right: r
    });
  }

  function Ly(e) {
    return (0, c.default)({
      type: "TypeAnnotation",
      typeAnnotation: e
    });
  }

  function jy(e, t) {
    return (0, c.default)({
      type: "TypeCastExpression",
      expression: e,
      typeAnnotation: t
    });
  }

  function Cy(e = null, t = null, r = null) {
    return (0, c.default)({
      type: "TypeParameter",
      bound: e,
      default: t,
      variance: r,
      name: null
    });
  }

  function By(e) {
    return (0, c.default)({
      type: "TypeParameterDeclaration",
      params: e
    });
  }

  function My(e) {
    return (0, c.default)({
      type: "TypeParameterInstantiation",
      params: e
    });
  }

  function wy(e) {
    return (0, c.default)({
      type: "UnionTypeAnnotation",
      types: e
    });
  }

  function Fy(e) {
    return (0, c.default)({
      type: "Variance",
      kind: e
    });
  }

  function Ry() {
    return {
      type: "VoidTypeAnnotation"
    };
  }

  function Ky(e, t) {
    return (0, c.default)({
      type: "EnumDeclaration",
      id: e,
      body: t
    });
  }

  function Yy(e) {
    return (0, c.default)({
      type: "EnumBooleanBody",
      members: e,
      explicitType: null,
      hasUnknownMembers: null
    });
  }

  function Vy(e) {
    return (0, c.default)({
      type: "EnumNumberBody",
      members: e,
      explicitType: null,
      hasUnknownMembers: null
    });
  }

  function qy(e) {
    return (0, c.default)({
      type: "EnumStringBody",
      members: e,
      explicitType: null,
      hasUnknownMembers: null
    });
  }

  function ky(e) {
    return (0, c.default)({
      type: "EnumSymbolBody",
      members: e,
      hasUnknownMembers: null
    });
  }

  function Xy(e) {
    return (0, c.default)({
      type: "EnumBooleanMember",
      id: e,
      init: null
    });
  }

  function Jy(e, t) {
    return (0, c.default)({
      type: "EnumNumberMember",
      id: e,
      init: t
    });
  }

  function Uy(e, t) {
    return (0, c.default)({
      type: "EnumStringMember",
      id: e,
      init: t
    });
  }

  function Wy(e) {
    return (0, c.default)({
      type: "EnumDefaultedMember",
      id: e
    });
  }

  function Gy(e, t) {
    return (0, c.default)({
      type: "IndexedAccessType",
      objectType: e,
      indexType: t
    });
  }

  function zy(e, t) {
    return (0, c.default)({
      type: "OptionalIndexedAccessType",
      objectType: e,
      indexType: t,
      optional: null
    });
  }

  function Qy(e, t = null) {
    return (0, c.default)({
      type: "JSXAttribute",
      name: e,
      value: t
    });
  }

  function $y(e) {
    return (0, c.default)({
      type: "JSXClosingElement",
      name: e
    });
  }

  function Hy(e, t = null, r, l = null) {
    return (0, c.default)({
      type: "JSXElement",
      openingElement: e,
      closingElement: t,
      children: r,
      selfClosing: l
    });
  }

  function Zy() {
    return {
      type: "JSXEmptyExpression"
    };
  }

  function ed(e) {
    return (0, c.default)({
      type: "JSXExpressionContainer",
      expression: e
    });
  }

  function td(e) {
    return (0, c.default)({
      type: "JSXSpreadChild",
      expression: e
    });
  }

  function rd(e) {
    return (0, c.default)({
      type: "JSXIdentifier",
      name: e
    });
  }

  function nd(e, t) {
    return (0, c.default)({
      type: "JSXMemberExpression",
      object: e,
      property: t
    });
  }

  function id(e, t) {
    return (0, c.default)({
      type: "JSXNamespacedName",
      namespace: e,
      name: t
    });
  }

  function ad(e, t, r = !1) {
    return (0, c.default)({
      type: "JSXOpeningElement",
      name: e,
      attributes: t,
      selfClosing: r
    });
  }

  function sd(e) {
    return (0, c.default)({
      type: "JSXSpreadAttribute",
      argument: e
    });
  }

  function od(e) {
    return (0, c.default)({
      type: "JSXText",
      value: e
    });
  }

  function ud(e, t, r) {
    return (0, c.default)({
      type: "JSXFragment",
      openingFragment: e,
      closingFragment: t,
      children: r
    });
  }

  function ld() {
    return {
      type: "JSXOpeningFragment"
    };
  }

  function pd() {
    return {
      type: "JSXClosingFragment"
    };
  }

  function fd() {
    return {
      type: "Noop"
    };
  }

  function cd(e, t) {
    return (0, c.default)({
      type: "Placeholder",
      expectedNode: e,
      name: t
    });
  }

  function yd(e) {
    return (0, c.default)({
      type: "V8IntrinsicIdentifier",
      name: e
    });
  }

  function dd() {
    return {
      type: "ArgumentPlaceholder"
    };
  }

  function Td(e, t) {
    return (0, c.default)({
      type: "BindExpression",
      object: e,
      callee: t
    });
  }

  function md(e, t) {
    return (0, c.default)({
      type: "ImportAttribute",
      key: e,
      value: t
    });
  }

  function Sd(e) {
    return (0, c.default)({
      type: "Decorator",
      expression: e
    });
  }

  function Ed(e, t = !1) {
    return (0, c.default)({
      type: "DoExpression",
      body: e,
      async: t
    });
  }

  function bd(e) {
    return (0, c.default)({
      type: "ExportDefaultSpecifier",
      exported: e
    });
  }

  function Pd(e) {
    return (0, c.default)({
      type: "RecordExpression",
      properties: e
    });
  }

  function Ad(e = []) {
    return (0, c.default)({
      type: "TupleExpression",
      elements: e
    });
  }

  function xd(e) {
    return (0, c.default)({
      type: "DecimalLiteral",
      value: e
    });
  }

  function Od(e) {
    return (0, c.default)({
      type: "ModuleExpression",
      body: e
    });
  }

  function vd() {
    return {
      type: "TopicReference"
    };
  }

  function gd(e) {
    return (0, c.default)({
      type: "PipelineTopicExpression",
      expression: e
    });
  }

  function Id(e) {
    return (0, c.default)({
      type: "PipelineBareFunction",
      callee: e
    });
  }

  function Dd() {
    return {
      type: "PipelinePrimaryTopicReference"
    };
  }

  function Nd(e) {
    return (0, c.default)({
      type: "TSParameterProperty",
      parameter: e
    });
  }

  function _d(e = null, t = null, r, l = null) {
    return (0, c.default)({
      type: "TSDeclareFunction",
      id: e,
      typeParameters: t,
      params: r,
      returnType: l
    });
  }

  function hd(e = null, t, r = null, l, y = null) {
    return (0, c.default)({
      type: "TSDeclareMethod",
      decorators: e,
      key: t,
      typeParameters: r,
      params: l,
      returnType: y
    });
  }

  function Ld(e, t) {
    return (0, c.default)({
      type: "TSQualifiedName",
      left: e,
      right: t
    });
  }

  function jd(e = null, t, r = null) {
    return (0, c.default)({
      type: "TSCallSignatureDeclaration",
      typeParameters: e,
      parameters: t,
      typeAnnotation: r
    });
  }

  function Cd(e = null, t, r = null) {
    return (0, c.default)({
      type: "TSConstructSignatureDeclaration",
      typeParameters: e,
      parameters: t,
      typeAnnotation: r
    });
  }

  function Bd(e, t = null, r = null) {
    return (0, c.default)({
      type: "TSPropertySignature",
      key: e,
      typeAnnotation: t,
      initializer: r,
      kind: null
    });
  }

  function Md(e, t = null, r, l = null) {
    return (0, c.default)({
      type: "TSMethodSignature",
      key: e,
      typeParameters: t,
      parameters: r,
      typeAnnotation: l,
      kind: null
    });
  }

  function wd(e, t = null) {
    return (0, c.default)({
      type: "TSIndexSignature",
      parameters: e,
      typeAnnotation: t
    });
  }

  function Fd() {
    return {
      type: "TSAnyKeyword"
    };
  }

  function Rd() {
    return {
      type: "TSBooleanKeyword"
    };
  }

  function Kd() {
    return {
      type: "TSBigIntKeyword"
    };
  }

  function Yd() {
    return {
      type: "TSIntrinsicKeyword"
    };
  }

  function Vd() {
    return {
      type: "TSNeverKeyword"
    };
  }

  function qd() {
    return {
      type: "TSNullKeyword"
    };
  }

  function kd() {
    return {
      type: "TSNumberKeyword"
    };
  }

  function Xd() {
    return {
      type: "TSObjectKeyword"
    };
  }

  function Jd() {
    return {
      type: "TSStringKeyword"
    };
  }

  function Ud() {
    return {
      type: "TSSymbolKeyword"
    };
  }

  function Wd() {
    return {
      type: "TSUndefinedKeyword"
    };
  }

  function Gd() {
    return {
      type: "TSUnknownKeyword"
    };
  }

  function zd() {
    return {
      type: "TSVoidKeyword"
    };
  }

  function Qd() {
    return {
      type: "TSThisType"
    };
  }

  function $d(e = null, t, r = null) {
    return (0, c.default)({
      type: "TSFunctionType",
      typeParameters: e,
      parameters: t,
      typeAnnotation: r
    });
  }

  function Hd(e = null, t, r = null) {
    return (0, c.default)({
      type: "TSConstructorType",
      typeParameters: e,
      parameters: t,
      typeAnnotation: r
    });
  }

  function Zd(e, t = null) {
    return (0, c.default)({
      type: "TSTypeReference",
      typeName: e,
      typeParameters: t
    });
  }

  function eT(e, t = null, r = null) {
    return (0, c.default)({
      type: "TSTypePredicate",
      parameterName: e,
      typeAnnotation: t,
      asserts: r
    });
  }

  function tT(e, t = null) {
    return (0, c.default)({
      type: "TSTypeQuery",
      exprName: e,
      typeParameters: t
    });
  }

  function rT(e) {
    return (0, c.default)({
      type: "TSTypeLiteral",
      members: e
    });
  }

  function nT(e) {
    return (0, c.default)({
      type: "TSArrayType",
      elementType: e
    });
  }

  function iT(e) {
    return (0, c.default)({
      type: "TSTupleType",
      elementTypes: e
    });
  }

  function aT(e) {
    return (0, c.default)({
      type: "TSOptionalType",
      typeAnnotation: e
    });
  }

  function sT(e) {
    return (0, c.default)({
      type: "TSRestType",
      typeAnnotation: e
    });
  }

  function oT(e, t, r = !1) {
    return (0, c.default)({
      type: "TSNamedTupleMember",
      label: e,
      elementType: t,
      optional: r
    });
  }

  function uT(e) {
    return (0, c.default)({
      type: "TSUnionType",
      types: e
    });
  }

  function lT(e) {
    return (0, c.default)({
      type: "TSIntersectionType",
      types: e
    });
  }

  function pT(e, t, r, l) {
    return (0, c.default)({
      type: "TSConditionalType",
      checkType: e,
      extendsType: t,
      trueType: r,
      falseType: l
    });
  }

  function fT(e) {
    return (0, c.default)({
      type: "TSInferType",
      typeParameter: e
    });
  }

  function cT(e) {
    return (0, c.default)({
      type: "TSParenthesizedType",
      typeAnnotation: e
    });
  }

  function yT(e) {
    return (0, c.default)({
      type: "TSTypeOperator",
      typeAnnotation: e,
      operator: null
    });
  }

  function dT(e, t) {
    return (0, c.default)({
      type: "TSIndexedAccessType",
      objectType: e,
      indexType: t
    });
  }

  function TT(e, t = null, r = null) {
    return (0, c.default)({
      type: "TSMappedType",
      typeParameter: e,
      typeAnnotation: t,
      nameType: r
    });
  }

  function mT(e) {
    return (0, c.default)({
      type: "TSLiteralType",
      literal: e
    });
  }

  function ST(e, t = null) {
    return (0, c.default)({
      type: "TSExpressionWithTypeArguments",
      expression: e,
      typeParameters: t
    });
  }

  function ET(e, t = null, r = null, l) {
    return (0, c.default)({
      type: "TSInterfaceDeclaration",
      id: e,
      typeParameters: t,
      extends: r,
      body: l
    });
  }

  function bT(e) {
    return (0, c.default)({
      type: "TSInterfaceBody",
      body: e
    });
  }

  function PT(e, t = null, r) {
    return (0, c.default)({
      type: "TSTypeAliasDeclaration",
      id: e,
      typeParameters: t,
      typeAnnotation: r
    });
  }

  function AT(e, t = null) {
    return (0, c.default)({
      type: "TSInstantiationExpression",
      expression: e,
      typeParameters: t
    });
  }

  function xT(e, t) {
    return (0, c.default)({
      type: "TSAsExpression",
      expression: e,
      typeAnnotation: t
    });
  }

  function OT(e, t) {
    return (0, c.default)({
      type: "TSTypeAssertion",
      typeAnnotation: e,
      expression: t
    });
  }

  function vT(e, t) {
    return (0, c.default)({
      type: "TSEnumDeclaration",
      id: e,
      members: t
    });
  }

  function gT(e, t = null) {
    return (0, c.default)({
      type: "TSEnumMember",
      id: e,
      initializer: t
    });
  }

  function IT(e, t) {
    return (0, c.default)({
      type: "TSModuleDeclaration",
      id: e,
      body: t
    });
  }

  function DT(e) {
    return (0, c.default)({
      type: "TSModuleBlock",
      body: e
    });
  }

  function NT(e, t = null, r = null) {
    return (0, c.default)({
      type: "TSImportType",
      argument: e,
      qualifier: t,
      typeParameters: r
    });
  }

  function _T(e, t) {
    return (0, c.default)({
      type: "TSImportEqualsDeclaration",
      id: e,
      moduleReference: t,
      isExport: null
    });
  }

  function hT(e) {
    return (0, c.default)({
      type: "TSExternalModuleReference",
      expression: e
    });
  }

  function LT(e) {
    return (0, c.default)({
      type: "TSNonNullExpression",
      expression: e
    });
  }

  function jT(e) {
    return (0, c.default)({
      type: "TSExportAssignment",
      expression: e
    });
  }

  function CT(e) {
    return (0, c.default)({
      type: "TSNamespaceExportDeclaration",
      id: e
    });
  }

  function BT(e) {
    return (0, c.default)({
      type: "TSTypeAnnotation",
      typeAnnotation: e
    });
  }

  function MT(e) {
    return (0, c.default)({
      type: "TSTypeParameterInstantiation",
      params: e
    });
  }

  function wT(e) {
    return (0, c.default)({
      type: "TSTypeParameterDeclaration",
      params: e
    });
  }

  function FT(e = null, t = null, r) {
    return (0, c.default)({
      type: "TSTypeParameter",
      constraint: e,
      default: t,
      name: r
    });
  }

  function RT(e) {
    return console.trace("The node type NumberLiteral has been renamed to NumericLiteral"), Pn(e);
  }

  function KT(e, t = "") {
    return console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"), An(e, t);
  }

  function YT(e) {
    return console.trace("The node type RestProperty has been renamed to RestElement"), xn(e);
  }

  function VT(e) {
    return console.trace("The node type SpreadProperty has been renamed to SpreadElement"), On(e);
  }
});
var vn = A(lt => {
  "use strict";

  Object.defineProperty(lt, "__esModule", {
    value: !0
  });
  lt.default = kT;
  var qT = V();

  function kT(e, t) {
    let r = e.value.split(/\r\n|\n|\r/),
        l = 0;

    for (let d = 0; d < r.length; d++) r[d].match(/[^ \t]/) && (l = d);

    let y = "";

    for (let d = 0; d < r.length; d++) {
      let m = r[d],
          x = d === 0,
          D = d === r.length - 1,
          L = d === l,
          F = m.replace(/\t/g, " ");
      x || (F = F.replace(/^[ ]+/, "")), D || (F = F.replace(/[ ]+$/, "")), F && (L || (F += " "), y += F);
    }

    y && t.push((0, qT.stringLiteral)(y));
  }
});
var gn = A(ft => {
  "use strict";

  Object.defineProperty(ft, "__esModule", {
    value: !0
  });
  ft.default = JT;
  var pt = j(),
      XT = vn();

  function JT(e) {
    let t = [];

    for (let r = 0; r < e.children.length; r++) {
      let l = e.children[r];

      if ((0, pt.isJSXText)(l)) {
        (0, XT.default)(l, t);
        continue;
      }

      (0, pt.isJSXExpressionContainer)(l) && (l = l.expression), !(0, pt.isJSXEmptyExpression)(l) && t.push(l);
    }

    return t;
  }
});
var yt = A(ct => {
  "use strict";

  Object.defineProperty(ct, "__esModule", {
    value: !0
  });
  ct.default = WT;
  var UT = q();

  function WT(e) {
    return !!(e && UT.VISITOR_KEYS[e.type]);
  }
});
var In = A(dt => {
  "use strict";

  Object.defineProperty(dt, "__esModule", {
    value: !0
  });
  dt.default = zT;
  var GT = yt();

  function zT(e) {
    if (!(0, GT.default)(e)) {
      var t;
      let r = (t = e?.type) != null ? t : JSON.stringify(e);
      throw new TypeError(`Not a valid node of type "${r}"`);
    }
  }
});
var Dn = A(s => {
  "use strict";

  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.assertAccessor = lA;
  s.assertAnyTypeAnnotation = hS;
  s.assertArgumentPlaceholder = ab;
  s.assertArrayExpression = $T;
  s.assertArrayPattern = zm;
  s.assertArrayTypeAnnotation = LS;
  s.assertArrowFunctionExpression = Qm;
  s.assertAssignmentExpression = HT;
  s.assertAssignmentPattern = Gm;
  s.assertAwaitExpression = ES;
  s.assertBigIntLiteral = PS;
  s.assertBinary = LP;
  s.assertBinaryExpression = ZT;
  s.assertBindExpression = sb;
  s.assertBlock = BP;
  s.assertBlockParent = CP;
  s.assertBlockStatement = nm;
  s.assertBooleanLiteral = vm;
  s.assertBooleanLiteralTypeAnnotation = CS;
  s.assertBooleanTypeAnnotation = jS;
  s.assertBreakStatement = im;
  s.assertCallExpression = am;
  s.assertCatchClause = sm;
  s.assertClass = aA;
  s.assertClassAccessorProperty = gS;
  s.assertClassBody = $m;
  s.assertClassDeclaration = Zm;
  s.assertClassExpression = Hm;
  s.assertClassImplements = MS;
  s.assertClassMethod = pS;
  s.assertClassPrivateMethod = DS;
  s.assertClassPrivateProperty = IS;
  s.assertClassProperty = vS;
  s.assertCompletionStatement = FP;
  s.assertConditional = RP;
  s.assertConditionalExpression = om;
  s.assertContinueStatement = um;
  s.assertDebuggerStatement = lm;
  s.assertDecimalLiteral = yb;
  s.assertDeclaration = WP;
  s.assertDeclareClass = wS;
  s.assertDeclareExportAllDeclaration = JS;
  s.assertDeclareExportDeclaration = XS;
  s.assertDeclareFunction = FS;
  s.assertDeclareInterface = RS;
  s.assertDeclareModule = KS;
  s.assertDeclareModuleExports = YS;
  s.assertDeclareOpaqueType = qS;
  s.assertDeclareTypeAlias = VS;
  s.assertDeclareVariable = kS;
  s.assertDeclaredPredicate = US;
  s.assertDecorator = ub;
  s.assertDirective = tm;
  s.assertDirectiveLiteral = rm;
  s.assertDoExpression = lb;
  s.assertDoWhileStatement = pm;
  s.assertEmptyStatement = fm;
  s.assertEmptyTypeAnnotation = nE;
  s.assertEnumBody = mA;
  s.assertEnumBooleanBody = LE;
  s.assertEnumBooleanMember = ME;
  s.assertEnumDeclaration = hE;
  s.assertEnumDefaultedMember = RE;
  s.assertEnumMember = SA;
  s.assertEnumNumberBody = jE;
  s.assertEnumNumberMember = wE;
  s.assertEnumStringBody = CE;
  s.assertEnumStringMember = FE;
  s.assertEnumSymbolBody = BE;
  s.assertExistsTypeAnnotation = WS;
  s.assertExportAllDeclaration = eS;
  s.assertExportDeclaration = oA;
  s.assertExportDefaultDeclaration = tS;
  s.assertExportDefaultSpecifier = pb;
  s.assertExportNamedDeclaration = rS;
  s.assertExportNamespaceSpecifier = AS;
  s.assertExportSpecifier = nS;
  s.assertExpression = hP;
  s.assertExpressionStatement = cm;
  s.assertExpressionWrapper = VP;
  s.assertFile = ym;
  s.assertFlow = fA;
  s.assertFlowBaseAnnotation = yA;
  s.assertFlowDeclaration = dA;
  s.assertFlowPredicate = TA;
  s.assertFlowType = cA;
  s.assertFor = qP;
  s.assertForInStatement = dm;
  s.assertForOfStatement = iS;
  s.assertForStatement = Tm;
  s.assertForXStatement = kP;
  s.assertFunction = XP;
  s.assertFunctionDeclaration = mm;
  s.assertFunctionExpression = Sm;
  s.assertFunctionParent = JP;
  s.assertFunctionTypeAnnotation = GS;
  s.assertFunctionTypeParam = zS;
  s.assertGenericTypeAnnotation = QS;
  s.assertIdentifier = Em;
  s.assertIfStatement = bm;
  s.assertImmutable = HP;
  s.assertImport = bS;
  s.assertImportAttribute = ob;
  s.assertImportDeclaration = aS;
  s.assertImportDefaultSpecifier = sS;
  s.assertImportNamespaceSpecifier = oS;
  s.assertImportSpecifier = uS;
  s.assertIndexedAccessType = KE;
  s.assertInferredPredicate = $S;
  s.assertInterfaceDeclaration = ZS;
  s.assertInterfaceExtends = HS;
  s.assertInterfaceTypeAnnotation = eE;
  s.assertInterpreterDirective = em;
  s.assertIntersectionTypeAnnotation = tE;
  s.assertJSX = EA;
  s.assertJSXAttribute = VE;
  s.assertJSXClosingElement = qE;
  s.assertJSXClosingFragment = tb;
  s.assertJSXElement = kE;
  s.assertJSXEmptyExpression = XE;
  s.assertJSXExpressionContainer = JE;
  s.assertJSXFragment = ZE;
  s.assertJSXIdentifier = WE;
  s.assertJSXMemberExpression = GE;
  s.assertJSXNamespacedName = zE;
  s.assertJSXOpeningElement = QE;
  s.assertJSXOpeningFragment = eb;
  s.assertJSXSpreadAttribute = $E;
  s.assertJSXSpreadChild = UE;
  s.assertJSXText = HE;
  s.assertLVal = zP;
  s.assertLabeledStatement = Pm;
  s.assertLiteral = $P;
  s.assertLogicalExpression = Im;
  s.assertLoop = KP;
  s.assertMemberExpression = Dm;
  s.assertMetaProperty = lS;
  s.assertMethod = eA;
  s.assertMiscellaneous = bA;
  s.assertMixedTypeAnnotation = rE;
  s.assertModuleDeclaration = sA;
  s.assertModuleExpression = db;
  s.assertModuleSpecifier = uA;
  s.assertNewExpression = Nm;
  s.assertNoop = rb;
  s.assertNullLiteral = Om;
  s.assertNullLiteralTypeAnnotation = BS;
  s.assertNullableTypeAnnotation = iE;
  s.assertNumberLiteral = vA;
  s.assertNumberLiteralTypeAnnotation = aE;
  s.assertNumberTypeAnnotation = sE;
  s.assertNumericLiteral = xm;
  s.assertObjectExpression = hm;
  s.assertObjectMember = tA;
  s.assertObjectMethod = Lm;
  s.assertObjectPattern = fS;
  s.assertObjectProperty = jm;
  s.assertObjectTypeAnnotation = oE;
  s.assertObjectTypeCallProperty = lE;
  s.assertObjectTypeIndexer = pE;
  s.assertObjectTypeInternalSlot = uE;
  s.assertObjectTypeProperty = fE;
  s.assertObjectTypeSpreadProperty = cE;
  s.assertOpaqueType = yE;
  s.assertOptionalCallExpression = OS;
  s.assertOptionalIndexedAccessType = YE;
  s.assertOptionalMemberExpression = xS;
  s.assertParenthesizedExpression = wm;
  s.assertPattern = iA;
  s.assertPatternLike = GP;
  s.assertPipelineBareFunction = Sb;
  s.assertPipelinePrimaryTopicReference = Eb;
  s.assertPipelineTopicExpression = mb;
  s.assertPlaceholder = nb;
  s.assertPrivate = pA;
  s.assertPrivateName = NS;
  s.assertProgram = _m;
  s.assertProperty = rA;
  s.assertPureish = UP;
  s.assertQualifiedTypeIdentifier = dE;
  s.assertRecordExpression = fb;
  s.assertRegExpLiteral = gm;
  s.assertRegexLiteral = gA;
  s.assertRestElement = Cm;
  s.assertRestProperty = IA;
  s.assertReturnStatement = Bm;
  s.assertScopable = jP;
  s.assertSequenceExpression = Mm;
  s.assertSpreadElement = cS;
  s.assertSpreadProperty = DA;
  s.assertStandardized = _P;
  s.assertStatement = MP;
  s.assertStaticBlock = _S;
  s.assertStringLiteral = Am;
  s.assertStringLiteralTypeAnnotation = TE;
  s.assertStringTypeAnnotation = mE;
  s.assertSuper = yS;
  s.assertSwitchCase = Fm;
  s.assertSwitchStatement = Rm;
  s.assertSymbolTypeAnnotation = SE;
  s.assertTSAnyKeyword = Nb;
  s.assertTSArrayType = Gb;
  s.assertTSAsExpression = yP;
  s.assertTSBaseType = OA;
  s.assertTSBigIntKeyword = hb;
  s.assertTSBooleanKeyword = _b;
  s.assertTSCallSignatureDeclaration = Ob;
  s.assertTSConditionalType = tP;
  s.assertTSConstructSignatureDeclaration = vb;
  s.assertTSConstructorType = kb;
  s.assertTSDeclareFunction = Pb;
  s.assertTSDeclareMethod = Ab;
  s.assertTSEntityName = QP;
  s.assertTSEnumDeclaration = TP;
  s.assertTSEnumMember = mP;
  s.assertTSExportAssignment = OP;
  s.assertTSExpressionWithTypeArguments = uP;
  s.assertTSExternalModuleReference = AP;
  s.assertTSFunctionType = qb;
  s.assertTSImportEqualsDeclaration = PP;
  s.assertTSImportType = bP;
  s.assertTSIndexSignature = Db;
  s.assertTSIndexedAccessType = aP;
  s.assertTSInferType = rP;
  s.assertTSInstantiationExpression = cP;
  s.assertTSInterfaceBody = pP;
  s.assertTSInterfaceDeclaration = lP;
  s.assertTSIntersectionType = eP;
  s.assertTSIntrinsicKeyword = Lb;
  s.assertTSLiteralType = oP;
  s.assertTSMappedType = sP;
  s.assertTSMethodSignature = Ib;
  s.assertTSModuleBlock = EP;
  s.assertTSModuleDeclaration = SP;
  s.assertTSNamedTupleMember = Hb;
  s.assertTSNamespaceExportDeclaration = vP;
  s.assertTSNeverKeyword = jb;
  s.assertTSNonNullExpression = xP;
  s.assertTSNullKeyword = Cb;
  s.assertTSNumberKeyword = Bb;
  s.assertTSObjectKeyword = Mb;
  s.assertTSOptionalType = Qb;
  s.assertTSParameterProperty = bb;
  s.assertTSParenthesizedType = nP;
  s.assertTSPropertySignature = gb;
  s.assertTSQualifiedName = xb;
  s.assertTSRestType = $b;
  s.assertTSStringKeyword = wb;
  s.assertTSSymbolKeyword = Fb;
  s.assertTSThisType = Vb;
  s.assertTSTupleType = zb;
  s.assertTSType = xA;
  s.assertTSTypeAliasDeclaration = fP;
  s.assertTSTypeAnnotation = gP;
  s.assertTSTypeAssertion = dP;
  s.assertTSTypeElement = AA;
  s.assertTSTypeLiteral = Wb;
  s.assertTSTypeOperator = iP;
  s.assertTSTypeParameter = NP;
  s.assertTSTypeParameterDeclaration = DP;
  s.assertTSTypeParameterInstantiation = IP;
  s.assertTSTypePredicate = Jb;
  s.assertTSTypeQuery = Ub;
  s.assertTSTypeReference = Xb;
  s.assertTSUndefinedKeyword = Rb;
  s.assertTSUnionType = Zb;
  s.assertTSUnknownKeyword = Kb;
  s.assertTSVoidKeyword = Yb;
  s.assertTaggedTemplateExpression = dS;
  s.assertTemplateElement = TS;
  s.assertTemplateLiteral = mS;
  s.assertTerminatorless = wP;
  s.assertThisExpression = Km;
  s.assertThisTypeAnnotation = EE;
  s.assertThrowStatement = Ym;
  s.assertTopicReference = Tb;
  s.assertTryStatement = Vm;
  s.assertTupleExpression = cb;
  s.assertTupleTypeAnnotation = bE;
  s.assertTypeAlias = AE;
  s.assertTypeAnnotation = xE;
  s.assertTypeCastExpression = OE;
  s.assertTypeParameter = vE;
  s.assertTypeParameterDeclaration = gE;
  s.assertTypeParameterInstantiation = IE;
  s.assertTypeScript = PA;
  s.assertTypeofTypeAnnotation = PE;
  s.assertUnaryExpression = qm;
  s.assertUnaryLike = nA;
  s.assertUnionTypeAnnotation = DE;
  s.assertUpdateExpression = km;
  s.assertUserWhitespacable = ZP;
  s.assertV8IntrinsicIdentifier = ib;
  s.assertVariableDeclaration = Xm;
  s.assertVariableDeclarator = Jm;
  s.assertVariance = NE;
  s.assertVoidTypeAnnotation = _E;
  s.assertWhile = YP;
  s.assertWhileStatement = Um;
  s.assertWithStatement = Wm;
  s.assertYieldExpression = SS;
  var QT = te();

  function u(e, t, r) {
    if (!(0, QT.default)(e, t, r)) throw new Error(`Expected type "${e}" with option ${JSON.stringify(r)}, but instead got "${t.type}".`);
  }

  function $T(e, t) {
    u("ArrayExpression", e, t);
  }

  function HT(e, t) {
    u("AssignmentExpression", e, t);
  }

  function ZT(e, t) {
    u("BinaryExpression", e, t);
  }

  function em(e, t) {
    u("InterpreterDirective", e, t);
  }

  function tm(e, t) {
    u("Directive", e, t);
  }

  function rm(e, t) {
    u("DirectiveLiteral", e, t);
  }

  function nm(e, t) {
    u("BlockStatement", e, t);
  }

  function im(e, t) {
    u("BreakStatement", e, t);
  }

  function am(e, t) {
    u("CallExpression", e, t);
  }

  function sm(e, t) {
    u("CatchClause", e, t);
  }

  function om(e, t) {
    u("ConditionalExpression", e, t);
  }

  function um(e, t) {
    u("ContinueStatement", e, t);
  }

  function lm(e, t) {
    u("DebuggerStatement", e, t);
  }

  function pm(e, t) {
    u("DoWhileStatement", e, t);
  }

  function fm(e, t) {
    u("EmptyStatement", e, t);
  }

  function cm(e, t) {
    u("ExpressionStatement", e, t);
  }

  function ym(e, t) {
    u("File", e, t);
  }

  function dm(e, t) {
    u("ForInStatement", e, t);
  }

  function Tm(e, t) {
    u("ForStatement", e, t);
  }

  function mm(e, t) {
    u("FunctionDeclaration", e, t);
  }

  function Sm(e, t) {
    u("FunctionExpression", e, t);
  }

  function Em(e, t) {
    u("Identifier", e, t);
  }

  function bm(e, t) {
    u("IfStatement", e, t);
  }

  function Pm(e, t) {
    u("LabeledStatement", e, t);
  }

  function Am(e, t) {
    u("StringLiteral", e, t);
  }

  function xm(e, t) {
    u("NumericLiteral", e, t);
  }

  function Om(e, t) {
    u("NullLiteral", e, t);
  }

  function vm(e, t) {
    u("BooleanLiteral", e, t);
  }

  function gm(e, t) {
    u("RegExpLiteral", e, t);
  }

  function Im(e, t) {
    u("LogicalExpression", e, t);
  }

  function Dm(e, t) {
    u("MemberExpression", e, t);
  }

  function Nm(e, t) {
    u("NewExpression", e, t);
  }

  function _m(e, t) {
    u("Program", e, t);
  }

  function hm(e, t) {
    u("ObjectExpression", e, t);
  }

  function Lm(e, t) {
    u("ObjectMethod", e, t);
  }

  function jm(e, t) {
    u("ObjectProperty", e, t);
  }

  function Cm(e, t) {
    u("RestElement", e, t);
  }

  function Bm(e, t) {
    u("ReturnStatement", e, t);
  }

  function Mm(e, t) {
    u("SequenceExpression", e, t);
  }

  function wm(e, t) {
    u("ParenthesizedExpression", e, t);
  }

  function Fm(e, t) {
    u("SwitchCase", e, t);
  }

  function Rm(e, t) {
    u("SwitchStatement", e, t);
  }

  function Km(e, t) {
    u("ThisExpression", e, t);
  }

  function Ym(e, t) {
    u("ThrowStatement", e, t);
  }

  function Vm(e, t) {
    u("TryStatement", e, t);
  }

  function qm(e, t) {
    u("UnaryExpression", e, t);
  }

  function km(e, t) {
    u("UpdateExpression", e, t);
  }

  function Xm(e, t) {
    u("VariableDeclaration", e, t);
  }

  function Jm(e, t) {
    u("VariableDeclarator", e, t);
  }

  function Um(e, t) {
    u("WhileStatement", e, t);
  }

  function Wm(e, t) {
    u("WithStatement", e, t);
  }

  function Gm(e, t) {
    u("AssignmentPattern", e, t);
  }

  function zm(e, t) {
    u("ArrayPattern", e, t);
  }

  function Qm(e, t) {
    u("ArrowFunctionExpression", e, t);
  }

  function $m(e, t) {
    u("ClassBody", e, t);
  }

  function Hm(e, t) {
    u("ClassExpression", e, t);
  }

  function Zm(e, t) {
    u("ClassDeclaration", e, t);
  }

  function eS(e, t) {
    u("ExportAllDeclaration", e, t);
  }

  function tS(e, t) {
    u("ExportDefaultDeclaration", e, t);
  }

  function rS(e, t) {
    u("ExportNamedDeclaration", e, t);
  }

  function nS(e, t) {
    u("ExportSpecifier", e, t);
  }

  function iS(e, t) {
    u("ForOfStatement", e, t);
  }

  function aS(e, t) {
    u("ImportDeclaration", e, t);
  }

  function sS(e, t) {
    u("ImportDefaultSpecifier", e, t);
  }

  function oS(e, t) {
    u("ImportNamespaceSpecifier", e, t);
  }

  function uS(e, t) {
    u("ImportSpecifier", e, t);
  }

  function lS(e, t) {
    u("MetaProperty", e, t);
  }

  function pS(e, t) {
    u("ClassMethod", e, t);
  }

  function fS(e, t) {
    u("ObjectPattern", e, t);
  }

  function cS(e, t) {
    u("SpreadElement", e, t);
  }

  function yS(e, t) {
    u("Super", e, t);
  }

  function dS(e, t) {
    u("TaggedTemplateExpression", e, t);
  }

  function TS(e, t) {
    u("TemplateElement", e, t);
  }

  function mS(e, t) {
    u("TemplateLiteral", e, t);
  }

  function SS(e, t) {
    u("YieldExpression", e, t);
  }

  function ES(e, t) {
    u("AwaitExpression", e, t);
  }

  function bS(e, t) {
    u("Import", e, t);
  }

  function PS(e, t) {
    u("BigIntLiteral", e, t);
  }

  function AS(e, t) {
    u("ExportNamespaceSpecifier", e, t);
  }

  function xS(e, t) {
    u("OptionalMemberExpression", e, t);
  }

  function OS(e, t) {
    u("OptionalCallExpression", e, t);
  }

  function vS(e, t) {
    u("ClassProperty", e, t);
  }

  function gS(e, t) {
    u("ClassAccessorProperty", e, t);
  }

  function IS(e, t) {
    u("ClassPrivateProperty", e, t);
  }

  function DS(e, t) {
    u("ClassPrivateMethod", e, t);
  }

  function NS(e, t) {
    u("PrivateName", e, t);
  }

  function _S(e, t) {
    u("StaticBlock", e, t);
  }

  function hS(e, t) {
    u("AnyTypeAnnotation", e, t);
  }

  function LS(e, t) {
    u("ArrayTypeAnnotation", e, t);
  }

  function jS(e, t) {
    u("BooleanTypeAnnotation", e, t);
  }

  function CS(e, t) {
    u("BooleanLiteralTypeAnnotation", e, t);
  }

  function BS(e, t) {
    u("NullLiteralTypeAnnotation", e, t);
  }

  function MS(e, t) {
    u("ClassImplements", e, t);
  }

  function wS(e, t) {
    u("DeclareClass", e, t);
  }

  function FS(e, t) {
    u("DeclareFunction", e, t);
  }

  function RS(e, t) {
    u("DeclareInterface", e, t);
  }

  function KS(e, t) {
    u("DeclareModule", e, t);
  }

  function YS(e, t) {
    u("DeclareModuleExports", e, t);
  }

  function VS(e, t) {
    u("DeclareTypeAlias", e, t);
  }

  function qS(e, t) {
    u("DeclareOpaqueType", e, t);
  }

  function kS(e, t) {
    u("DeclareVariable", e, t);
  }

  function XS(e, t) {
    u("DeclareExportDeclaration", e, t);
  }

  function JS(e, t) {
    u("DeclareExportAllDeclaration", e, t);
  }

  function US(e, t) {
    u("DeclaredPredicate", e, t);
  }

  function WS(e, t) {
    u("ExistsTypeAnnotation", e, t);
  }

  function GS(e, t) {
    u("FunctionTypeAnnotation", e, t);
  }

  function zS(e, t) {
    u("FunctionTypeParam", e, t);
  }

  function QS(e, t) {
    u("GenericTypeAnnotation", e, t);
  }

  function $S(e, t) {
    u("InferredPredicate", e, t);
  }

  function HS(e, t) {
    u("InterfaceExtends", e, t);
  }

  function ZS(e, t) {
    u("InterfaceDeclaration", e, t);
  }

  function eE(e, t) {
    u("InterfaceTypeAnnotation", e, t);
  }

  function tE(e, t) {
    u("IntersectionTypeAnnotation", e, t);
  }

  function rE(e, t) {
    u("MixedTypeAnnotation", e, t);
  }

  function nE(e, t) {
    u("EmptyTypeAnnotation", e, t);
  }

  function iE(e, t) {
    u("NullableTypeAnnotation", e, t);
  }

  function aE(e, t) {
    u("NumberLiteralTypeAnnotation", e, t);
  }

  function sE(e, t) {
    u("NumberTypeAnnotation", e, t);
  }

  function oE(e, t) {
    u("ObjectTypeAnnotation", e, t);
  }

  function uE(e, t) {
    u("ObjectTypeInternalSlot", e, t);
  }

  function lE(e, t) {
    u("ObjectTypeCallProperty", e, t);
  }

  function pE(e, t) {
    u("ObjectTypeIndexer", e, t);
  }

  function fE(e, t) {
    u("ObjectTypeProperty", e, t);
  }

  function cE(e, t) {
    u("ObjectTypeSpreadProperty", e, t);
  }

  function yE(e, t) {
    u("OpaqueType", e, t);
  }

  function dE(e, t) {
    u("QualifiedTypeIdentifier", e, t);
  }

  function TE(e, t) {
    u("StringLiteralTypeAnnotation", e, t);
  }

  function mE(e, t) {
    u("StringTypeAnnotation", e, t);
  }

  function SE(e, t) {
    u("SymbolTypeAnnotation", e, t);
  }

  function EE(e, t) {
    u("ThisTypeAnnotation", e, t);
  }

  function bE(e, t) {
    u("TupleTypeAnnotation", e, t);
  }

  function PE(e, t) {
    u("TypeofTypeAnnotation", e, t);
  }

  function AE(e, t) {
    u("TypeAlias", e, t);
  }

  function xE(e, t) {
    u("TypeAnnotation", e, t);
  }

  function OE(e, t) {
    u("TypeCastExpression", e, t);
  }

  function vE(e, t) {
    u("TypeParameter", e, t);
  }

  function gE(e, t) {
    u("TypeParameterDeclaration", e, t);
  }

  function IE(e, t) {
    u("TypeParameterInstantiation", e, t);
  }

  function DE(e, t) {
    u("UnionTypeAnnotation", e, t);
  }

  function NE(e, t) {
    u("Variance", e, t);
  }

  function _E(e, t) {
    u("VoidTypeAnnotation", e, t);
  }

  function hE(e, t) {
    u("EnumDeclaration", e, t);
  }

  function LE(e, t) {
    u("EnumBooleanBody", e, t);
  }

  function jE(e, t) {
    u("EnumNumberBody", e, t);
  }

  function CE(e, t) {
    u("EnumStringBody", e, t);
  }

  function BE(e, t) {
    u("EnumSymbolBody", e, t);
  }

  function ME(e, t) {
    u("EnumBooleanMember", e, t);
  }

  function wE(e, t) {
    u("EnumNumberMember", e, t);
  }

  function FE(e, t) {
    u("EnumStringMember", e, t);
  }

  function RE(e, t) {
    u("EnumDefaultedMember", e, t);
  }

  function KE(e, t) {
    u("IndexedAccessType", e, t);
  }

  function YE(e, t) {
    u("OptionalIndexedAccessType", e, t);
  }

  function VE(e, t) {
    u("JSXAttribute", e, t);
  }

  function qE(e, t) {
    u("JSXClosingElement", e, t);
  }

  function kE(e, t) {
    u("JSXElement", e, t);
  }

  function XE(e, t) {
    u("JSXEmptyExpression", e, t);
  }

  function JE(e, t) {
    u("JSXExpressionContainer", e, t);
  }

  function UE(e, t) {
    u("JSXSpreadChild", e, t);
  }

  function WE(e, t) {
    u("JSXIdentifier", e, t);
  }

  function GE(e, t) {
    u("JSXMemberExpression", e, t);
  }

  function zE(e, t) {
    u("JSXNamespacedName", e, t);
  }

  function QE(e, t) {
    u("JSXOpeningElement", e, t);
  }

  function $E(e, t) {
    u("JSXSpreadAttribute", e, t);
  }

  function HE(e, t) {
    u("JSXText", e, t);
  }

  function ZE(e, t) {
    u("JSXFragment", e, t);
  }

  function eb(e, t) {
    u("JSXOpeningFragment", e, t);
  }

  function tb(e, t) {
    u("JSXClosingFragment", e, t);
  }

  function rb(e, t) {
    u("Noop", e, t);
  }

  function nb(e, t) {
    u("Placeholder", e, t);
  }

  function ib(e, t) {
    u("V8IntrinsicIdentifier", e, t);
  }

  function ab(e, t) {
    u("ArgumentPlaceholder", e, t);
  }

  function sb(e, t) {
    u("BindExpression", e, t);
  }

  function ob(e, t) {
    u("ImportAttribute", e, t);
  }

  function ub(e, t) {
    u("Decorator", e, t);
  }

  function lb(e, t) {
    u("DoExpression", e, t);
  }

  function pb(e, t) {
    u("ExportDefaultSpecifier", e, t);
  }

  function fb(e, t) {
    u("RecordExpression", e, t);
  }

  function cb(e, t) {
    u("TupleExpression", e, t);
  }

  function yb(e, t) {
    u("DecimalLiteral", e, t);
  }

  function db(e, t) {
    u("ModuleExpression", e, t);
  }

  function Tb(e, t) {
    u("TopicReference", e, t);
  }

  function mb(e, t) {
    u("PipelineTopicExpression", e, t);
  }

  function Sb(e, t) {
    u("PipelineBareFunction", e, t);
  }

  function Eb(e, t) {
    u("PipelinePrimaryTopicReference", e, t);
  }

  function bb(e, t) {
    u("TSParameterProperty", e, t);
  }

  function Pb(e, t) {
    u("TSDeclareFunction", e, t);
  }

  function Ab(e, t) {
    u("TSDeclareMethod", e, t);
  }

  function xb(e, t) {
    u("TSQualifiedName", e, t);
  }

  function Ob(e, t) {
    u("TSCallSignatureDeclaration", e, t);
  }

  function vb(e, t) {
    u("TSConstructSignatureDeclaration", e, t);
  }

  function gb(e, t) {
    u("TSPropertySignature", e, t);
  }

  function Ib(e, t) {
    u("TSMethodSignature", e, t);
  }

  function Db(e, t) {
    u("TSIndexSignature", e, t);
  }

  function Nb(e, t) {
    u("TSAnyKeyword", e, t);
  }

  function _b(e, t) {
    u("TSBooleanKeyword", e, t);
  }

  function hb(e, t) {
    u("TSBigIntKeyword", e, t);
  }

  function Lb(e, t) {
    u("TSIntrinsicKeyword", e, t);
  }

  function jb(e, t) {
    u("TSNeverKeyword", e, t);
  }

  function Cb(e, t) {
    u("TSNullKeyword", e, t);
  }

  function Bb(e, t) {
    u("TSNumberKeyword", e, t);
  }

  function Mb(e, t) {
    u("TSObjectKeyword", e, t);
  }

  function wb(e, t) {
    u("TSStringKeyword", e, t);
  }

  function Fb(e, t) {
    u("TSSymbolKeyword", e, t);
  }

  function Rb(e, t) {
    u("TSUndefinedKeyword", e, t);
  }

  function Kb(e, t) {
    u("TSUnknownKeyword", e, t);
  }

  function Yb(e, t) {
    u("TSVoidKeyword", e, t);
  }

  function Vb(e, t) {
    u("TSThisType", e, t);
  }

  function qb(e, t) {
    u("TSFunctionType", e, t);
  }

  function kb(e, t) {
    u("TSConstructorType", e, t);
  }

  function Xb(e, t) {
    u("TSTypeReference", e, t);
  }

  function Jb(e, t) {
    u("TSTypePredicate", e, t);
  }

  function Ub(e, t) {
    u("TSTypeQuery", e, t);
  }

  function Wb(e, t) {
    u("TSTypeLiteral", e, t);
  }

  function Gb(e, t) {
    u("TSArrayType", e, t);
  }

  function zb(e, t) {
    u("TSTupleType", e, t);
  }

  function Qb(e, t) {
    u("TSOptionalType", e, t);
  }

  function $b(e, t) {
    u("TSRestType", e, t);
  }

  function Hb(e, t) {
    u("TSNamedTupleMember", e, t);
  }

  function Zb(e, t) {
    u("TSUnionType", e, t);
  }

  function eP(e, t) {
    u("TSIntersectionType", e, t);
  }

  function tP(e, t) {
    u("TSConditionalType", e, t);
  }

  function rP(e, t) {
    u("TSInferType", e, t);
  }

  function nP(e, t) {
    u("TSParenthesizedType", e, t);
  }

  function iP(e, t) {
    u("TSTypeOperator", e, t);
  }

  function aP(e, t) {
    u("TSIndexedAccessType", e, t);
  }

  function sP(e, t) {
    u("TSMappedType", e, t);
  }

  function oP(e, t) {
    u("TSLiteralType", e, t);
  }

  function uP(e, t) {
    u("TSExpressionWithTypeArguments", e, t);
  }

  function lP(e, t) {
    u("TSInterfaceDeclaration", e, t);
  }

  function pP(e, t) {
    u("TSInterfaceBody", e, t);
  }

  function fP(e, t) {
    u("TSTypeAliasDeclaration", e, t);
  }

  function cP(e, t) {
    u("TSInstantiationExpression", e, t);
  }

  function yP(e, t) {
    u("TSAsExpression", e, t);
  }

  function dP(e, t) {
    u("TSTypeAssertion", e, t);
  }

  function TP(e, t) {
    u("TSEnumDeclaration", e, t);
  }

  function mP(e, t) {
    u("TSEnumMember", e, t);
  }

  function SP(e, t) {
    u("TSModuleDeclaration", e, t);
  }

  function EP(e, t) {
    u("TSModuleBlock", e, t);
  }

  function bP(e, t) {
    u("TSImportType", e, t);
  }

  function PP(e, t) {
    u("TSImportEqualsDeclaration", e, t);
  }

  function AP(e, t) {
    u("TSExternalModuleReference", e, t);
  }

  function xP(e, t) {
    u("TSNonNullExpression", e, t);
  }

  function OP(e, t) {
    u("TSExportAssignment", e, t);
  }

  function vP(e, t) {
    u("TSNamespaceExportDeclaration", e, t);
  }

  function gP(e, t) {
    u("TSTypeAnnotation", e, t);
  }

  function IP(e, t) {
    u("TSTypeParameterInstantiation", e, t);
  }

  function DP(e, t) {
    u("TSTypeParameterDeclaration", e, t);
  }

  function NP(e, t) {
    u("TSTypeParameter", e, t);
  }

  function _P(e, t) {
    u("Standardized", e, t);
  }

  function hP(e, t) {
    u("Expression", e, t);
  }

  function LP(e, t) {
    u("Binary", e, t);
  }

  function jP(e, t) {
    u("Scopable", e, t);
  }

  function CP(e, t) {
    u("BlockParent", e, t);
  }

  function BP(e, t) {
    u("Block", e, t);
  }

  function MP(e, t) {
    u("Statement", e, t);
  }

  function wP(e, t) {
    u("Terminatorless", e, t);
  }

  function FP(e, t) {
    u("CompletionStatement", e, t);
  }

  function RP(e, t) {
    u("Conditional", e, t);
  }

  function KP(e, t) {
    u("Loop", e, t);
  }

  function YP(e, t) {
    u("While", e, t);
  }

  function VP(e, t) {
    u("ExpressionWrapper", e, t);
  }

  function qP(e, t) {
    u("For", e, t);
  }

  function kP(e, t) {
    u("ForXStatement", e, t);
  }

  function XP(e, t) {
    u("Function", e, t);
  }

  function JP(e, t) {
    u("FunctionParent", e, t);
  }

  function UP(e, t) {
    u("Pureish", e, t);
  }

  function WP(e, t) {
    u("Declaration", e, t);
  }

  function GP(e, t) {
    u("PatternLike", e, t);
  }

  function zP(e, t) {
    u("LVal", e, t);
  }

  function QP(e, t) {
    u("TSEntityName", e, t);
  }

  function $P(e, t) {
    u("Literal", e, t);
  }

  function HP(e, t) {
    u("Immutable", e, t);
  }

  function ZP(e, t) {
    u("UserWhitespacable", e, t);
  }

  function eA(e, t) {
    u("Method", e, t);
  }

  function tA(e, t) {
    u("ObjectMember", e, t);
  }

  function rA(e, t) {
    u("Property", e, t);
  }

  function nA(e, t) {
    u("UnaryLike", e, t);
  }

  function iA(e, t) {
    u("Pattern", e, t);
  }

  function aA(e, t) {
    u("Class", e, t);
  }

  function sA(e, t) {
    u("ModuleDeclaration", e, t);
  }

  function oA(e, t) {
    u("ExportDeclaration", e, t);
  }

  function uA(e, t) {
    u("ModuleSpecifier", e, t);
  }

  function lA(e, t) {
    u("Accessor", e, t);
  }

  function pA(e, t) {
    u("Private", e, t);
  }

  function fA(e, t) {
    u("Flow", e, t);
  }

  function cA(e, t) {
    u("FlowType", e, t);
  }

  function yA(e, t) {
    u("FlowBaseAnnotation", e, t);
  }

  function dA(e, t) {
    u("FlowDeclaration", e, t);
  }

  function TA(e, t) {
    u("FlowPredicate", e, t);
  }

  function mA(e, t) {
    u("EnumBody", e, t);
  }

  function SA(e, t) {
    u("EnumMember", e, t);
  }

  function EA(e, t) {
    u("JSX", e, t);
  }

  function bA(e, t) {
    u("Miscellaneous", e, t);
  }

  function PA(e, t) {
    u("TypeScript", e, t);
  }

  function AA(e, t) {
    u("TSTypeElement", e, t);
  }

  function xA(e, t) {
    u("TSType", e, t);
  }

  function OA(e, t) {
    u("TSBaseType", e, t);
  }

  function vA(e, t) {
    console.trace("The node type NumberLiteral has been renamed to NumericLiteral"), u("NumberLiteral", e, t);
  }

  function gA(e, t) {
    console.trace("The node type RegexLiteral has been renamed to RegExpLiteral"), u("RegexLiteral", e, t);
  }

  function IA(e, t) {
    console.trace("The node type RestProperty has been renamed to RestElement"), u("RestProperty", e, t);
  }

  function DA(e, t) {
    console.trace("The node type SpreadProperty has been renamed to SpreadElement"), u("SpreadProperty", e, t);
  }
});
var Nn = A(_e => {
  "use strict";

  Object.defineProperty(_e, "__esModule", {
    value: !0
  });
  _e.default = void 0;
  var k = V(),
      NA = _A;
  _e.default = NA;

  function _A(e) {
    switch (e) {
      case "string":
        return (0, k.stringTypeAnnotation)();

      case "number":
        return (0, k.numberTypeAnnotation)();

      case "undefined":
        return (0, k.voidTypeAnnotation)();

      case "boolean":
        return (0, k.booleanTypeAnnotation)();

      case "function":
        return (0, k.genericTypeAnnotation)((0, k.identifier)("Function"));

      case "object":
        return (0, k.genericTypeAnnotation)((0, k.identifier)("Object"));

      case "symbol":
        return (0, k.genericTypeAnnotation)((0, k.identifier)("Symbol"));

      case "bigint":
        return (0, k.anyTypeAnnotation)();
    }

    throw new Error("Invalid typeof value: " + e);
  }
});
var mt = A(Tt => {
  "use strict";

  Object.defineProperty(Tt, "__esModule", {
    value: !0
  });
  Tt.default = hn;
  var fe = j();

  function _n(e) {
    return (0, fe.isIdentifier)(e) ? e.name : `${e.id.name}.${_n(e.qualification)}`;
  }

  function hn(e) {
    let t = new Map(),
        r = new Map(),
        l = new Set(),
        y = [];

    for (let d = 0; d < e.length; d++) {
      let m = e[d];

      if (!!m && !(y.indexOf(m) >= 0)) {
        if ((0, fe.isAnyTypeAnnotation)(m)) return [m];

        if ((0, fe.isFlowBaseAnnotation)(m)) {
          r.set(m.type, m);
          continue;
        }

        if ((0, fe.isUnionTypeAnnotation)(m)) {
          l.has(m.types) || (e = e.concat(m.types), l.add(m.types));
          continue;
        }

        if ((0, fe.isGenericTypeAnnotation)(m)) {
          let x = _n(m.id);

          if (t.has(x)) {
            let D = t.get(x);
            D.typeParameters ? m.typeParameters && (D.typeParameters.params = hn(D.typeParameters.params.concat(m.typeParameters.params))) : D = m.typeParameters;
          } else t.set(x, m);

          continue;
        }

        y.push(m);
      }
    }

    for (let [, d] of r) y.push(d);

    for (let [, d] of t) y.push(d);

    return y;
  }
});
var Ln = A(St => {
  "use strict";

  Object.defineProperty(St, "__esModule", {
    value: !0
  });
  St.default = jA;
  var hA = V(),
      LA = mt();

  function jA(e) {
    let t = (0, LA.default)(e);
    return t.length === 1 ? t[0] : (0, hA.unionTypeAnnotation)(t);
  }
});
var Bn = A(Et => {
  "use strict";

  Object.defineProperty(Et, "__esModule", {
    value: !0
  });
  Et.default = Cn;
  var ce = j();

  function jn(e) {
    return (0, ce.isIdentifier)(e) ? e.name : `${e.right.name}.${jn(e.left)}`;
  }

  function Cn(e) {
    let t = new Map(),
        r = new Map(),
        l = new Set(),
        y = [];

    for (let d = 0; d < e.length; d++) {
      let m = e[d];

      if (!!m && !(y.indexOf(m) >= 0)) {
        if ((0, ce.isTSAnyKeyword)(m)) return [m];

        if ((0, ce.isTSBaseType)(m)) {
          r.set(m.type, m);
          continue;
        }

        if ((0, ce.isTSUnionType)(m)) {
          l.has(m.types) || (e.push(...m.types), l.add(m.types));
          continue;
        }

        if ((0, ce.isTSTypeReference)(m) && m.typeParameters) {
          let x = jn(m.typeName);

          if (t.has(x)) {
            let D = t.get(x);
            D.typeParameters ? m.typeParameters && (D.typeParameters.params = Cn(D.typeParameters.params.concat(m.typeParameters.params))) : D = m.typeParameters;
          } else t.set(x, m);

          continue;
        }

        y.push(m);
      }
    }

    for (let [, d] of r) y.push(d);

    for (let [, d] of t) y.push(d);

    return y;
  }
});
var Mn = A(bt => {
  "use strict";

  Object.defineProperty(bt, "__esModule", {
    value: !0
  });
  bt.default = wA;
  var CA = V(),
      BA = Bn(),
      MA = j();

  function wA(e) {
    let t = e.map(l => (0, MA.isTSTypeAnnotation)(l) ? l.typeAnnotation : l),
        r = (0, BA.default)(t);
    return r.length === 1 ? r[0] : (0, CA.tsUnionType)(r);
  }
});
var wn = A(p => {
  "use strict";

  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  Object.defineProperty(p, "AnyTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.anyTypeAnnotation;
    }
  });
  Object.defineProperty(p, "ArgumentPlaceholder", {
    enumerable: !0,
    get: function () {
      return f.argumentPlaceholder;
    }
  });
  Object.defineProperty(p, "ArrayExpression", {
    enumerable: !0,
    get: function () {
      return f.arrayExpression;
    }
  });
  Object.defineProperty(p, "ArrayPattern", {
    enumerable: !0,
    get: function () {
      return f.arrayPattern;
    }
  });
  Object.defineProperty(p, "ArrayTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.arrayTypeAnnotation;
    }
  });
  Object.defineProperty(p, "ArrowFunctionExpression", {
    enumerable: !0,
    get: function () {
      return f.arrowFunctionExpression;
    }
  });
  Object.defineProperty(p, "AssignmentExpression", {
    enumerable: !0,
    get: function () {
      return f.assignmentExpression;
    }
  });
  Object.defineProperty(p, "AssignmentPattern", {
    enumerable: !0,
    get: function () {
      return f.assignmentPattern;
    }
  });
  Object.defineProperty(p, "AwaitExpression", {
    enumerable: !0,
    get: function () {
      return f.awaitExpression;
    }
  });
  Object.defineProperty(p, "BigIntLiteral", {
    enumerable: !0,
    get: function () {
      return f.bigIntLiteral;
    }
  });
  Object.defineProperty(p, "BinaryExpression", {
    enumerable: !0,
    get: function () {
      return f.binaryExpression;
    }
  });
  Object.defineProperty(p, "BindExpression", {
    enumerable: !0,
    get: function () {
      return f.bindExpression;
    }
  });
  Object.defineProperty(p, "BlockStatement", {
    enumerable: !0,
    get: function () {
      return f.blockStatement;
    }
  });
  Object.defineProperty(p, "BooleanLiteral", {
    enumerable: !0,
    get: function () {
      return f.booleanLiteral;
    }
  });
  Object.defineProperty(p, "BooleanLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.booleanLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(p, "BooleanTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.booleanTypeAnnotation;
    }
  });
  Object.defineProperty(p, "BreakStatement", {
    enumerable: !0,
    get: function () {
      return f.breakStatement;
    }
  });
  Object.defineProperty(p, "CallExpression", {
    enumerable: !0,
    get: function () {
      return f.callExpression;
    }
  });
  Object.defineProperty(p, "CatchClause", {
    enumerable: !0,
    get: function () {
      return f.catchClause;
    }
  });
  Object.defineProperty(p, "ClassAccessorProperty", {
    enumerable: !0,
    get: function () {
      return f.classAccessorProperty;
    }
  });
  Object.defineProperty(p, "ClassBody", {
    enumerable: !0,
    get: function () {
      return f.classBody;
    }
  });
  Object.defineProperty(p, "ClassDeclaration", {
    enumerable: !0,
    get: function () {
      return f.classDeclaration;
    }
  });
  Object.defineProperty(p, "ClassExpression", {
    enumerable: !0,
    get: function () {
      return f.classExpression;
    }
  });
  Object.defineProperty(p, "ClassImplements", {
    enumerable: !0,
    get: function () {
      return f.classImplements;
    }
  });
  Object.defineProperty(p, "ClassMethod", {
    enumerable: !0,
    get: function () {
      return f.classMethod;
    }
  });
  Object.defineProperty(p, "ClassPrivateMethod", {
    enumerable: !0,
    get: function () {
      return f.classPrivateMethod;
    }
  });
  Object.defineProperty(p, "ClassPrivateProperty", {
    enumerable: !0,
    get: function () {
      return f.classPrivateProperty;
    }
  });
  Object.defineProperty(p, "ClassProperty", {
    enumerable: !0,
    get: function () {
      return f.classProperty;
    }
  });
  Object.defineProperty(p, "ConditionalExpression", {
    enumerable: !0,
    get: function () {
      return f.conditionalExpression;
    }
  });
  Object.defineProperty(p, "ContinueStatement", {
    enumerable: !0,
    get: function () {
      return f.continueStatement;
    }
  });
  Object.defineProperty(p, "DebuggerStatement", {
    enumerable: !0,
    get: function () {
      return f.debuggerStatement;
    }
  });
  Object.defineProperty(p, "DecimalLiteral", {
    enumerable: !0,
    get: function () {
      return f.decimalLiteral;
    }
  });
  Object.defineProperty(p, "DeclareClass", {
    enumerable: !0,
    get: function () {
      return f.declareClass;
    }
  });
  Object.defineProperty(p, "DeclareExportAllDeclaration", {
    enumerable: !0,
    get: function () {
      return f.declareExportAllDeclaration;
    }
  });
  Object.defineProperty(p, "DeclareExportDeclaration", {
    enumerable: !0,
    get: function () {
      return f.declareExportDeclaration;
    }
  });
  Object.defineProperty(p, "DeclareFunction", {
    enumerable: !0,
    get: function () {
      return f.declareFunction;
    }
  });
  Object.defineProperty(p, "DeclareInterface", {
    enumerable: !0,
    get: function () {
      return f.declareInterface;
    }
  });
  Object.defineProperty(p, "DeclareModule", {
    enumerable: !0,
    get: function () {
      return f.declareModule;
    }
  });
  Object.defineProperty(p, "DeclareModuleExports", {
    enumerable: !0,
    get: function () {
      return f.declareModuleExports;
    }
  });
  Object.defineProperty(p, "DeclareOpaqueType", {
    enumerable: !0,
    get: function () {
      return f.declareOpaqueType;
    }
  });
  Object.defineProperty(p, "DeclareTypeAlias", {
    enumerable: !0,
    get: function () {
      return f.declareTypeAlias;
    }
  });
  Object.defineProperty(p, "DeclareVariable", {
    enumerable: !0,
    get: function () {
      return f.declareVariable;
    }
  });
  Object.defineProperty(p, "DeclaredPredicate", {
    enumerable: !0,
    get: function () {
      return f.declaredPredicate;
    }
  });
  Object.defineProperty(p, "Decorator", {
    enumerable: !0,
    get: function () {
      return f.decorator;
    }
  });
  Object.defineProperty(p, "Directive", {
    enumerable: !0,
    get: function () {
      return f.directive;
    }
  });
  Object.defineProperty(p, "DirectiveLiteral", {
    enumerable: !0,
    get: function () {
      return f.directiveLiteral;
    }
  });
  Object.defineProperty(p, "DoExpression", {
    enumerable: !0,
    get: function () {
      return f.doExpression;
    }
  });
  Object.defineProperty(p, "DoWhileStatement", {
    enumerable: !0,
    get: function () {
      return f.doWhileStatement;
    }
  });
  Object.defineProperty(p, "EmptyStatement", {
    enumerable: !0,
    get: function () {
      return f.emptyStatement;
    }
  });
  Object.defineProperty(p, "EmptyTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.emptyTypeAnnotation;
    }
  });
  Object.defineProperty(p, "EnumBooleanBody", {
    enumerable: !0,
    get: function () {
      return f.enumBooleanBody;
    }
  });
  Object.defineProperty(p, "EnumBooleanMember", {
    enumerable: !0,
    get: function () {
      return f.enumBooleanMember;
    }
  });
  Object.defineProperty(p, "EnumDeclaration", {
    enumerable: !0,
    get: function () {
      return f.enumDeclaration;
    }
  });
  Object.defineProperty(p, "EnumDefaultedMember", {
    enumerable: !0,
    get: function () {
      return f.enumDefaultedMember;
    }
  });
  Object.defineProperty(p, "EnumNumberBody", {
    enumerable: !0,
    get: function () {
      return f.enumNumberBody;
    }
  });
  Object.defineProperty(p, "EnumNumberMember", {
    enumerable: !0,
    get: function () {
      return f.enumNumberMember;
    }
  });
  Object.defineProperty(p, "EnumStringBody", {
    enumerable: !0,
    get: function () {
      return f.enumStringBody;
    }
  });
  Object.defineProperty(p, "EnumStringMember", {
    enumerable: !0,
    get: function () {
      return f.enumStringMember;
    }
  });
  Object.defineProperty(p, "EnumSymbolBody", {
    enumerable: !0,
    get: function () {
      return f.enumSymbolBody;
    }
  });
  Object.defineProperty(p, "ExistsTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.existsTypeAnnotation;
    }
  });
  Object.defineProperty(p, "ExportAllDeclaration", {
    enumerable: !0,
    get: function () {
      return f.exportAllDeclaration;
    }
  });
  Object.defineProperty(p, "ExportDefaultDeclaration", {
    enumerable: !0,
    get: function () {
      return f.exportDefaultDeclaration;
    }
  });
  Object.defineProperty(p, "ExportDefaultSpecifier", {
    enumerable: !0,
    get: function () {
      return f.exportDefaultSpecifier;
    }
  });
  Object.defineProperty(p, "ExportNamedDeclaration", {
    enumerable: !0,
    get: function () {
      return f.exportNamedDeclaration;
    }
  });
  Object.defineProperty(p, "ExportNamespaceSpecifier", {
    enumerable: !0,
    get: function () {
      return f.exportNamespaceSpecifier;
    }
  });
  Object.defineProperty(p, "ExportSpecifier", {
    enumerable: !0,
    get: function () {
      return f.exportSpecifier;
    }
  });
  Object.defineProperty(p, "ExpressionStatement", {
    enumerable: !0,
    get: function () {
      return f.expressionStatement;
    }
  });
  Object.defineProperty(p, "File", {
    enumerable: !0,
    get: function () {
      return f.file;
    }
  });
  Object.defineProperty(p, "ForInStatement", {
    enumerable: !0,
    get: function () {
      return f.forInStatement;
    }
  });
  Object.defineProperty(p, "ForOfStatement", {
    enumerable: !0,
    get: function () {
      return f.forOfStatement;
    }
  });
  Object.defineProperty(p, "ForStatement", {
    enumerable: !0,
    get: function () {
      return f.forStatement;
    }
  });
  Object.defineProperty(p, "FunctionDeclaration", {
    enumerable: !0,
    get: function () {
      return f.functionDeclaration;
    }
  });
  Object.defineProperty(p, "FunctionExpression", {
    enumerable: !0,
    get: function () {
      return f.functionExpression;
    }
  });
  Object.defineProperty(p, "FunctionTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.functionTypeAnnotation;
    }
  });
  Object.defineProperty(p, "FunctionTypeParam", {
    enumerable: !0,
    get: function () {
      return f.functionTypeParam;
    }
  });
  Object.defineProperty(p, "GenericTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.genericTypeAnnotation;
    }
  });
  Object.defineProperty(p, "Identifier", {
    enumerable: !0,
    get: function () {
      return f.identifier;
    }
  });
  Object.defineProperty(p, "IfStatement", {
    enumerable: !0,
    get: function () {
      return f.ifStatement;
    }
  });
  Object.defineProperty(p, "Import", {
    enumerable: !0,
    get: function () {
      return f.import;
    }
  });
  Object.defineProperty(p, "ImportAttribute", {
    enumerable: !0,
    get: function () {
      return f.importAttribute;
    }
  });
  Object.defineProperty(p, "ImportDeclaration", {
    enumerable: !0,
    get: function () {
      return f.importDeclaration;
    }
  });
  Object.defineProperty(p, "ImportDefaultSpecifier", {
    enumerable: !0,
    get: function () {
      return f.importDefaultSpecifier;
    }
  });
  Object.defineProperty(p, "ImportNamespaceSpecifier", {
    enumerable: !0,
    get: function () {
      return f.importNamespaceSpecifier;
    }
  });
  Object.defineProperty(p, "ImportSpecifier", {
    enumerable: !0,
    get: function () {
      return f.importSpecifier;
    }
  });
  Object.defineProperty(p, "IndexedAccessType", {
    enumerable: !0,
    get: function () {
      return f.indexedAccessType;
    }
  });
  Object.defineProperty(p, "InferredPredicate", {
    enumerable: !0,
    get: function () {
      return f.inferredPredicate;
    }
  });
  Object.defineProperty(p, "InterfaceDeclaration", {
    enumerable: !0,
    get: function () {
      return f.interfaceDeclaration;
    }
  });
  Object.defineProperty(p, "InterfaceExtends", {
    enumerable: !0,
    get: function () {
      return f.interfaceExtends;
    }
  });
  Object.defineProperty(p, "InterfaceTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.interfaceTypeAnnotation;
    }
  });
  Object.defineProperty(p, "InterpreterDirective", {
    enumerable: !0,
    get: function () {
      return f.interpreterDirective;
    }
  });
  Object.defineProperty(p, "IntersectionTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.intersectionTypeAnnotation;
    }
  });
  Object.defineProperty(p, "JSXAttribute", {
    enumerable: !0,
    get: function () {
      return f.jsxAttribute;
    }
  });
  Object.defineProperty(p, "JSXClosingElement", {
    enumerable: !0,
    get: function () {
      return f.jsxClosingElement;
    }
  });
  Object.defineProperty(p, "JSXClosingFragment", {
    enumerable: !0,
    get: function () {
      return f.jsxClosingFragment;
    }
  });
  Object.defineProperty(p, "JSXElement", {
    enumerable: !0,
    get: function () {
      return f.jsxElement;
    }
  });
  Object.defineProperty(p, "JSXEmptyExpression", {
    enumerable: !0,
    get: function () {
      return f.jsxEmptyExpression;
    }
  });
  Object.defineProperty(p, "JSXExpressionContainer", {
    enumerable: !0,
    get: function () {
      return f.jsxExpressionContainer;
    }
  });
  Object.defineProperty(p, "JSXFragment", {
    enumerable: !0,
    get: function () {
      return f.jsxFragment;
    }
  });
  Object.defineProperty(p, "JSXIdentifier", {
    enumerable: !0,
    get: function () {
      return f.jsxIdentifier;
    }
  });
  Object.defineProperty(p, "JSXMemberExpression", {
    enumerable: !0,
    get: function () {
      return f.jsxMemberExpression;
    }
  });
  Object.defineProperty(p, "JSXNamespacedName", {
    enumerable: !0,
    get: function () {
      return f.jsxNamespacedName;
    }
  });
  Object.defineProperty(p, "JSXOpeningElement", {
    enumerable: !0,
    get: function () {
      return f.jsxOpeningElement;
    }
  });
  Object.defineProperty(p, "JSXOpeningFragment", {
    enumerable: !0,
    get: function () {
      return f.jsxOpeningFragment;
    }
  });
  Object.defineProperty(p, "JSXSpreadAttribute", {
    enumerable: !0,
    get: function () {
      return f.jsxSpreadAttribute;
    }
  });
  Object.defineProperty(p, "JSXSpreadChild", {
    enumerable: !0,
    get: function () {
      return f.jsxSpreadChild;
    }
  });
  Object.defineProperty(p, "JSXText", {
    enumerable: !0,
    get: function () {
      return f.jsxText;
    }
  });
  Object.defineProperty(p, "LabeledStatement", {
    enumerable: !0,
    get: function () {
      return f.labeledStatement;
    }
  });
  Object.defineProperty(p, "LogicalExpression", {
    enumerable: !0,
    get: function () {
      return f.logicalExpression;
    }
  });
  Object.defineProperty(p, "MemberExpression", {
    enumerable: !0,
    get: function () {
      return f.memberExpression;
    }
  });
  Object.defineProperty(p, "MetaProperty", {
    enumerable: !0,
    get: function () {
      return f.metaProperty;
    }
  });
  Object.defineProperty(p, "MixedTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.mixedTypeAnnotation;
    }
  });
  Object.defineProperty(p, "ModuleExpression", {
    enumerable: !0,
    get: function () {
      return f.moduleExpression;
    }
  });
  Object.defineProperty(p, "NewExpression", {
    enumerable: !0,
    get: function () {
      return f.newExpression;
    }
  });
  Object.defineProperty(p, "Noop", {
    enumerable: !0,
    get: function () {
      return f.noop;
    }
  });
  Object.defineProperty(p, "NullLiteral", {
    enumerable: !0,
    get: function () {
      return f.nullLiteral;
    }
  });
  Object.defineProperty(p, "NullLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.nullLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(p, "NullableTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.nullableTypeAnnotation;
    }
  });
  Object.defineProperty(p, "NumberLiteral", {
    enumerable: !0,
    get: function () {
      return f.numberLiteral;
    }
  });
  Object.defineProperty(p, "NumberLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.numberLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(p, "NumberTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.numberTypeAnnotation;
    }
  });
  Object.defineProperty(p, "NumericLiteral", {
    enumerable: !0,
    get: function () {
      return f.numericLiteral;
    }
  });
  Object.defineProperty(p, "ObjectExpression", {
    enumerable: !0,
    get: function () {
      return f.objectExpression;
    }
  });
  Object.defineProperty(p, "ObjectMethod", {
    enumerable: !0,
    get: function () {
      return f.objectMethod;
    }
  });
  Object.defineProperty(p, "ObjectPattern", {
    enumerable: !0,
    get: function () {
      return f.objectPattern;
    }
  });
  Object.defineProperty(p, "ObjectProperty", {
    enumerable: !0,
    get: function () {
      return f.objectProperty;
    }
  });
  Object.defineProperty(p, "ObjectTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.objectTypeAnnotation;
    }
  });
  Object.defineProperty(p, "ObjectTypeCallProperty", {
    enumerable: !0,
    get: function () {
      return f.objectTypeCallProperty;
    }
  });
  Object.defineProperty(p, "ObjectTypeIndexer", {
    enumerable: !0,
    get: function () {
      return f.objectTypeIndexer;
    }
  });
  Object.defineProperty(p, "ObjectTypeInternalSlot", {
    enumerable: !0,
    get: function () {
      return f.objectTypeInternalSlot;
    }
  });
  Object.defineProperty(p, "ObjectTypeProperty", {
    enumerable: !0,
    get: function () {
      return f.objectTypeProperty;
    }
  });
  Object.defineProperty(p, "ObjectTypeSpreadProperty", {
    enumerable: !0,
    get: function () {
      return f.objectTypeSpreadProperty;
    }
  });
  Object.defineProperty(p, "OpaqueType", {
    enumerable: !0,
    get: function () {
      return f.opaqueType;
    }
  });
  Object.defineProperty(p, "OptionalCallExpression", {
    enumerable: !0,
    get: function () {
      return f.optionalCallExpression;
    }
  });
  Object.defineProperty(p, "OptionalIndexedAccessType", {
    enumerable: !0,
    get: function () {
      return f.optionalIndexedAccessType;
    }
  });
  Object.defineProperty(p, "OptionalMemberExpression", {
    enumerable: !0,
    get: function () {
      return f.optionalMemberExpression;
    }
  });
  Object.defineProperty(p, "ParenthesizedExpression", {
    enumerable: !0,
    get: function () {
      return f.parenthesizedExpression;
    }
  });
  Object.defineProperty(p, "PipelineBareFunction", {
    enumerable: !0,
    get: function () {
      return f.pipelineBareFunction;
    }
  });
  Object.defineProperty(p, "PipelinePrimaryTopicReference", {
    enumerable: !0,
    get: function () {
      return f.pipelinePrimaryTopicReference;
    }
  });
  Object.defineProperty(p, "PipelineTopicExpression", {
    enumerable: !0,
    get: function () {
      return f.pipelineTopicExpression;
    }
  });
  Object.defineProperty(p, "Placeholder", {
    enumerable: !0,
    get: function () {
      return f.placeholder;
    }
  });
  Object.defineProperty(p, "PrivateName", {
    enumerable: !0,
    get: function () {
      return f.privateName;
    }
  });
  Object.defineProperty(p, "Program", {
    enumerable: !0,
    get: function () {
      return f.program;
    }
  });
  Object.defineProperty(p, "QualifiedTypeIdentifier", {
    enumerable: !0,
    get: function () {
      return f.qualifiedTypeIdentifier;
    }
  });
  Object.defineProperty(p, "RecordExpression", {
    enumerable: !0,
    get: function () {
      return f.recordExpression;
    }
  });
  Object.defineProperty(p, "RegExpLiteral", {
    enumerable: !0,
    get: function () {
      return f.regExpLiteral;
    }
  });
  Object.defineProperty(p, "RegexLiteral", {
    enumerable: !0,
    get: function () {
      return f.regexLiteral;
    }
  });
  Object.defineProperty(p, "RestElement", {
    enumerable: !0,
    get: function () {
      return f.restElement;
    }
  });
  Object.defineProperty(p, "RestProperty", {
    enumerable: !0,
    get: function () {
      return f.restProperty;
    }
  });
  Object.defineProperty(p, "ReturnStatement", {
    enumerable: !0,
    get: function () {
      return f.returnStatement;
    }
  });
  Object.defineProperty(p, "SequenceExpression", {
    enumerable: !0,
    get: function () {
      return f.sequenceExpression;
    }
  });
  Object.defineProperty(p, "SpreadElement", {
    enumerable: !0,
    get: function () {
      return f.spreadElement;
    }
  });
  Object.defineProperty(p, "SpreadProperty", {
    enumerable: !0,
    get: function () {
      return f.spreadProperty;
    }
  });
  Object.defineProperty(p, "StaticBlock", {
    enumerable: !0,
    get: function () {
      return f.staticBlock;
    }
  });
  Object.defineProperty(p, "StringLiteral", {
    enumerable: !0,
    get: function () {
      return f.stringLiteral;
    }
  });
  Object.defineProperty(p, "StringLiteralTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.stringLiteralTypeAnnotation;
    }
  });
  Object.defineProperty(p, "StringTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.stringTypeAnnotation;
    }
  });
  Object.defineProperty(p, "Super", {
    enumerable: !0,
    get: function () {
      return f.super;
    }
  });
  Object.defineProperty(p, "SwitchCase", {
    enumerable: !0,
    get: function () {
      return f.switchCase;
    }
  });
  Object.defineProperty(p, "SwitchStatement", {
    enumerable: !0,
    get: function () {
      return f.switchStatement;
    }
  });
  Object.defineProperty(p, "SymbolTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.symbolTypeAnnotation;
    }
  });
  Object.defineProperty(p, "TSAnyKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsAnyKeyword;
    }
  });
  Object.defineProperty(p, "TSArrayType", {
    enumerable: !0,
    get: function () {
      return f.tsArrayType;
    }
  });
  Object.defineProperty(p, "TSAsExpression", {
    enumerable: !0,
    get: function () {
      return f.tsAsExpression;
    }
  });
  Object.defineProperty(p, "TSBigIntKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsBigIntKeyword;
    }
  });
  Object.defineProperty(p, "TSBooleanKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsBooleanKeyword;
    }
  });
  Object.defineProperty(p, "TSCallSignatureDeclaration", {
    enumerable: !0,
    get: function () {
      return f.tsCallSignatureDeclaration;
    }
  });
  Object.defineProperty(p, "TSConditionalType", {
    enumerable: !0,
    get: function () {
      return f.tsConditionalType;
    }
  });
  Object.defineProperty(p, "TSConstructSignatureDeclaration", {
    enumerable: !0,
    get: function () {
      return f.tsConstructSignatureDeclaration;
    }
  });
  Object.defineProperty(p, "TSConstructorType", {
    enumerable: !0,
    get: function () {
      return f.tsConstructorType;
    }
  });
  Object.defineProperty(p, "TSDeclareFunction", {
    enumerable: !0,
    get: function () {
      return f.tsDeclareFunction;
    }
  });
  Object.defineProperty(p, "TSDeclareMethod", {
    enumerable: !0,
    get: function () {
      return f.tsDeclareMethod;
    }
  });
  Object.defineProperty(p, "TSEnumDeclaration", {
    enumerable: !0,
    get: function () {
      return f.tsEnumDeclaration;
    }
  });
  Object.defineProperty(p, "TSEnumMember", {
    enumerable: !0,
    get: function () {
      return f.tsEnumMember;
    }
  });
  Object.defineProperty(p, "TSExportAssignment", {
    enumerable: !0,
    get: function () {
      return f.tsExportAssignment;
    }
  });
  Object.defineProperty(p, "TSExpressionWithTypeArguments", {
    enumerable: !0,
    get: function () {
      return f.tsExpressionWithTypeArguments;
    }
  });
  Object.defineProperty(p, "TSExternalModuleReference", {
    enumerable: !0,
    get: function () {
      return f.tsExternalModuleReference;
    }
  });
  Object.defineProperty(p, "TSFunctionType", {
    enumerable: !0,
    get: function () {
      return f.tsFunctionType;
    }
  });
  Object.defineProperty(p, "TSImportEqualsDeclaration", {
    enumerable: !0,
    get: function () {
      return f.tsImportEqualsDeclaration;
    }
  });
  Object.defineProperty(p, "TSImportType", {
    enumerable: !0,
    get: function () {
      return f.tsImportType;
    }
  });
  Object.defineProperty(p, "TSIndexSignature", {
    enumerable: !0,
    get: function () {
      return f.tsIndexSignature;
    }
  });
  Object.defineProperty(p, "TSIndexedAccessType", {
    enumerable: !0,
    get: function () {
      return f.tsIndexedAccessType;
    }
  });
  Object.defineProperty(p, "TSInferType", {
    enumerable: !0,
    get: function () {
      return f.tsInferType;
    }
  });
  Object.defineProperty(p, "TSInstantiationExpression", {
    enumerable: !0,
    get: function () {
      return f.tsInstantiationExpression;
    }
  });
  Object.defineProperty(p, "TSInterfaceBody", {
    enumerable: !0,
    get: function () {
      return f.tsInterfaceBody;
    }
  });
  Object.defineProperty(p, "TSInterfaceDeclaration", {
    enumerable: !0,
    get: function () {
      return f.tsInterfaceDeclaration;
    }
  });
  Object.defineProperty(p, "TSIntersectionType", {
    enumerable: !0,
    get: function () {
      return f.tsIntersectionType;
    }
  });
  Object.defineProperty(p, "TSIntrinsicKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsIntrinsicKeyword;
    }
  });
  Object.defineProperty(p, "TSLiteralType", {
    enumerable: !0,
    get: function () {
      return f.tsLiteralType;
    }
  });
  Object.defineProperty(p, "TSMappedType", {
    enumerable: !0,
    get: function () {
      return f.tsMappedType;
    }
  });
  Object.defineProperty(p, "TSMethodSignature", {
    enumerable: !0,
    get: function () {
      return f.tsMethodSignature;
    }
  });
  Object.defineProperty(p, "TSModuleBlock", {
    enumerable: !0,
    get: function () {
      return f.tsModuleBlock;
    }
  });
  Object.defineProperty(p, "TSModuleDeclaration", {
    enumerable: !0,
    get: function () {
      return f.tsModuleDeclaration;
    }
  });
  Object.defineProperty(p, "TSNamedTupleMember", {
    enumerable: !0,
    get: function () {
      return f.tsNamedTupleMember;
    }
  });
  Object.defineProperty(p, "TSNamespaceExportDeclaration", {
    enumerable: !0,
    get: function () {
      return f.tsNamespaceExportDeclaration;
    }
  });
  Object.defineProperty(p, "TSNeverKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsNeverKeyword;
    }
  });
  Object.defineProperty(p, "TSNonNullExpression", {
    enumerable: !0,
    get: function () {
      return f.tsNonNullExpression;
    }
  });
  Object.defineProperty(p, "TSNullKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsNullKeyword;
    }
  });
  Object.defineProperty(p, "TSNumberKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsNumberKeyword;
    }
  });
  Object.defineProperty(p, "TSObjectKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsObjectKeyword;
    }
  });
  Object.defineProperty(p, "TSOptionalType", {
    enumerable: !0,
    get: function () {
      return f.tsOptionalType;
    }
  });
  Object.defineProperty(p, "TSParameterProperty", {
    enumerable: !0,
    get: function () {
      return f.tsParameterProperty;
    }
  });
  Object.defineProperty(p, "TSParenthesizedType", {
    enumerable: !0,
    get: function () {
      return f.tsParenthesizedType;
    }
  });
  Object.defineProperty(p, "TSPropertySignature", {
    enumerable: !0,
    get: function () {
      return f.tsPropertySignature;
    }
  });
  Object.defineProperty(p, "TSQualifiedName", {
    enumerable: !0,
    get: function () {
      return f.tsQualifiedName;
    }
  });
  Object.defineProperty(p, "TSRestType", {
    enumerable: !0,
    get: function () {
      return f.tsRestType;
    }
  });
  Object.defineProperty(p, "TSStringKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsStringKeyword;
    }
  });
  Object.defineProperty(p, "TSSymbolKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsSymbolKeyword;
    }
  });
  Object.defineProperty(p, "TSThisType", {
    enumerable: !0,
    get: function () {
      return f.tsThisType;
    }
  });
  Object.defineProperty(p, "TSTupleType", {
    enumerable: !0,
    get: function () {
      return f.tsTupleType;
    }
  });
  Object.defineProperty(p, "TSTypeAliasDeclaration", {
    enumerable: !0,
    get: function () {
      return f.tsTypeAliasDeclaration;
    }
  });
  Object.defineProperty(p, "TSTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.tsTypeAnnotation;
    }
  });
  Object.defineProperty(p, "TSTypeAssertion", {
    enumerable: !0,
    get: function () {
      return f.tsTypeAssertion;
    }
  });
  Object.defineProperty(p, "TSTypeLiteral", {
    enumerable: !0,
    get: function () {
      return f.tsTypeLiteral;
    }
  });
  Object.defineProperty(p, "TSTypeOperator", {
    enumerable: !0,
    get: function () {
      return f.tsTypeOperator;
    }
  });
  Object.defineProperty(p, "TSTypeParameter", {
    enumerable: !0,
    get: function () {
      return f.tsTypeParameter;
    }
  });
  Object.defineProperty(p, "TSTypeParameterDeclaration", {
    enumerable: !0,
    get: function () {
      return f.tsTypeParameterDeclaration;
    }
  });
  Object.defineProperty(p, "TSTypeParameterInstantiation", {
    enumerable: !0,
    get: function () {
      return f.tsTypeParameterInstantiation;
    }
  });
  Object.defineProperty(p, "TSTypePredicate", {
    enumerable: !0,
    get: function () {
      return f.tsTypePredicate;
    }
  });
  Object.defineProperty(p, "TSTypeQuery", {
    enumerable: !0,
    get: function () {
      return f.tsTypeQuery;
    }
  });
  Object.defineProperty(p, "TSTypeReference", {
    enumerable: !0,
    get: function () {
      return f.tsTypeReference;
    }
  });
  Object.defineProperty(p, "TSUndefinedKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsUndefinedKeyword;
    }
  });
  Object.defineProperty(p, "TSUnionType", {
    enumerable: !0,
    get: function () {
      return f.tsUnionType;
    }
  });
  Object.defineProperty(p, "TSUnknownKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsUnknownKeyword;
    }
  });
  Object.defineProperty(p, "TSVoidKeyword", {
    enumerable: !0,
    get: function () {
      return f.tsVoidKeyword;
    }
  });
  Object.defineProperty(p, "TaggedTemplateExpression", {
    enumerable: !0,
    get: function () {
      return f.taggedTemplateExpression;
    }
  });
  Object.defineProperty(p, "TemplateElement", {
    enumerable: !0,
    get: function () {
      return f.templateElement;
    }
  });
  Object.defineProperty(p, "TemplateLiteral", {
    enumerable: !0,
    get: function () {
      return f.templateLiteral;
    }
  });
  Object.defineProperty(p, "ThisExpression", {
    enumerable: !0,
    get: function () {
      return f.thisExpression;
    }
  });
  Object.defineProperty(p, "ThisTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.thisTypeAnnotation;
    }
  });
  Object.defineProperty(p, "ThrowStatement", {
    enumerable: !0,
    get: function () {
      return f.throwStatement;
    }
  });
  Object.defineProperty(p, "TopicReference", {
    enumerable: !0,
    get: function () {
      return f.topicReference;
    }
  });
  Object.defineProperty(p, "TryStatement", {
    enumerable: !0,
    get: function () {
      return f.tryStatement;
    }
  });
  Object.defineProperty(p, "TupleExpression", {
    enumerable: !0,
    get: function () {
      return f.tupleExpression;
    }
  });
  Object.defineProperty(p, "TupleTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.tupleTypeAnnotation;
    }
  });
  Object.defineProperty(p, "TypeAlias", {
    enumerable: !0,
    get: function () {
      return f.typeAlias;
    }
  });
  Object.defineProperty(p, "TypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.typeAnnotation;
    }
  });
  Object.defineProperty(p, "TypeCastExpression", {
    enumerable: !0,
    get: function () {
      return f.typeCastExpression;
    }
  });
  Object.defineProperty(p, "TypeParameter", {
    enumerable: !0,
    get: function () {
      return f.typeParameter;
    }
  });
  Object.defineProperty(p, "TypeParameterDeclaration", {
    enumerable: !0,
    get: function () {
      return f.typeParameterDeclaration;
    }
  });
  Object.defineProperty(p, "TypeParameterInstantiation", {
    enumerable: !0,
    get: function () {
      return f.typeParameterInstantiation;
    }
  });
  Object.defineProperty(p, "TypeofTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.typeofTypeAnnotation;
    }
  });
  Object.defineProperty(p, "UnaryExpression", {
    enumerable: !0,
    get: function () {
      return f.unaryExpression;
    }
  });
  Object.defineProperty(p, "UnionTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.unionTypeAnnotation;
    }
  });
  Object.defineProperty(p, "UpdateExpression", {
    enumerable: !0,
    get: function () {
      return f.updateExpression;
    }
  });
  Object.defineProperty(p, "V8IntrinsicIdentifier", {
    enumerable: !0,
    get: function () {
      return f.v8IntrinsicIdentifier;
    }
  });
  Object.defineProperty(p, "VariableDeclaration", {
    enumerable: !0,
    get: function () {
      return f.variableDeclaration;
    }
  });
  Object.defineProperty(p, "VariableDeclarator", {
    enumerable: !0,
    get: function () {
      return f.variableDeclarator;
    }
  });
  Object.defineProperty(p, "Variance", {
    enumerable: !0,
    get: function () {
      return f.variance;
    }
  });
  Object.defineProperty(p, "VoidTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return f.voidTypeAnnotation;
    }
  });
  Object.defineProperty(p, "WhileStatement", {
    enumerable: !0,
    get: function () {
      return f.whileStatement;
    }
  });
  Object.defineProperty(p, "WithStatement", {
    enumerable: !0,
    get: function () {
      return f.withStatement;
    }
  });
  Object.defineProperty(p, "YieldExpression", {
    enumerable: !0,
    get: function () {
      return f.yieldExpression;
    }
  });
  var f = V();
});
var Q = A(Pt => {
  "use strict";

  Object.defineProperty(Pt, "__esModule", {
    value: !0
  });
  Pt.default = FA;
  var Fn = q(),
      Rn = j(),
      J = Function.call.bind(Object.prototype.hasOwnProperty);

  function Kn(e, t, r, l) {
    return e && typeof e.type == "string" ? Vn(e, t, r, l) : e;
  }

  function Yn(e, t, r, l) {
    return Array.isArray(e) ? e.map(y => Kn(y, t, r, l)) : Kn(e, t, r, l);
  }

  function FA(e, t = !0, r = !1) {
    return Vn(e, t, r, new Map());
  }

  function Vn(e, t = !0, r = !1, l) {
    if (!e) return e;
    let {
      type: y
    } = e,
        d = {
      type: e.type
    };
    if ((0, Rn.isIdentifier)(e)) d.name = e.name, J(e, "optional") && typeof e.optional == "boolean" && (d.optional = e.optional), J(e, "typeAnnotation") && (d.typeAnnotation = t ? Yn(e.typeAnnotation, !0, r, l) : e.typeAnnotation);else if (J(Fn.NODE_FIELDS, y)) for (let m of Object.keys(Fn.NODE_FIELDS[y])) J(e, m) && (t ? d[m] = (0, Rn.isFile)(e) && m === "comments" ? he(e.comments, t, r, l) : Yn(e[m], !0, r, l) : d[m] = e[m]);else throw new Error(`Unknown node type: "${y}"`);
    return J(e, "loc") && (r ? d.loc = null : d.loc = e.loc), J(e, "leadingComments") && (d.leadingComments = he(e.leadingComments, t, r, l)), J(e, "innerComments") && (d.innerComments = he(e.innerComments, t, r, l)), J(e, "trailingComments") && (d.trailingComments = he(e.trailingComments, t, r, l)), J(e, "extra") && (d.extra = Object.assign({}, e.extra)), d;
  }

  function he(e, t, r, l) {
    return !e || !t ? e : e.map(y => {
      let d = l.get(y);
      if (d) return d;
      let {
        type: m,
        value: x,
        loc: D
      } = y,
          L = {
        type: m,
        value: x,
        loc: D
      };
      return r && (L.loc = null), l.set(y, L), L;
    });
  }
});
var qn = A(At => {
  "use strict";

  Object.defineProperty(At, "__esModule", {
    value: !0
  });
  At.default = KA;
  var RA = Q();

  function KA(e) {
    return (0, RA.default)(e, !1);
  }
});
var kn = A(xt => {
  "use strict";

  Object.defineProperty(xt, "__esModule", {
    value: !0
  });
  xt.default = VA;
  var YA = Q();

  function VA(e) {
    return (0, YA.default)(e);
  }
});
var Xn = A(Ot => {
  "use strict";

  Object.defineProperty(Ot, "__esModule", {
    value: !0
  });
  Ot.default = kA;
  var qA = Q();

  function kA(e) {
    return (0, qA.default)(e, !0, !0);
  }
});
var Jn = A(vt => {
  "use strict";

  Object.defineProperty(vt, "__esModule", {
    value: !0
  });
  vt.default = JA;
  var XA = Q();

  function JA(e) {
    return (0, XA.default)(e, !1, !0);
  }
});
var It = A(gt => {
  "use strict";

  Object.defineProperty(gt, "__esModule", {
    value: !0
  });
  gt.default = UA;

  function UA(e, t, r) {
    if (!r || !e) return e;
    let l = `${t}Comments`;
    return e[l] ? t === "leading" ? e[l] = r.concat(e[l]) : e[l].push(...r) : e[l] = r, e;
  }
});
var Un = A(Dt => {
  "use strict";

  Object.defineProperty(Dt, "__esModule", {
    value: !0
  });
  Dt.default = GA;
  var WA = It();

  function GA(e, t, r, l) {
    return (0, WA.default)(e, t, [{
      type: l ? "CommentLine" : "CommentBlock",
      value: r
    }]);
  }
});
var Le = A(Nt => {
  "use strict";

  Object.defineProperty(Nt, "__esModule", {
    value: !0
  });
  Nt.default = zA;

  function zA(e, t, r) {
    t && r && (t[e] = Array.from(new Set([].concat(t[e], r[e]).filter(Boolean))));
  }
});
var ht = A(_t => {
  "use strict";

  Object.defineProperty(_t, "__esModule", {
    value: !0
  });
  _t.default = $A;
  var QA = Le();

  function $A(e, t) {
    (0, QA.default)("innerComments", e, t);
  }
});
var jt = A(Lt => {
  "use strict";

  Object.defineProperty(Lt, "__esModule", {
    value: !0
  });
  Lt.default = ZA;
  var HA = Le();

  function ZA(e, t) {
    (0, HA.default)("leadingComments", e, t);
  }
});
var Bt = A(Ct => {
  "use strict";

  Object.defineProperty(Ct, "__esModule", {
    value: !0
  });
  Ct.default = t0;
  var e0 = Le();

  function t0(e, t) {
    (0, e0.default)("trailingComments", e, t);
  }
});
var wt = A(Mt => {
  "use strict";

  Object.defineProperty(Mt, "__esModule", {
    value: !0
  });
  Mt.default = a0;
  var r0 = Bt(),
      n0 = jt(),
      i0 = ht();

  function a0(e, t) {
    return (0, r0.default)(e, t), (0, n0.default)(e, t), (0, i0.default)(e, t), e;
  }
});
var Wn = A(Ft => {
  "use strict";

  Object.defineProperty(Ft, "__esModule", {
    value: !0
  });
  Ft.default = o0;
  var s0 = W();

  function o0(e) {
    return s0.COMMENT_KEYS.forEach(t => {
      e[t] = null;
    }), e;
  }
});
var Gn = A(E => {
  "use strict";

  Object.defineProperty(E, "__esModule", {
    value: !0
  });
  E.WHILE_TYPES = E.USERWHITESPACABLE_TYPES = E.UNARYLIKE_TYPES = E.TYPESCRIPT_TYPES = E.TSTYPE_TYPES = E.TSTYPEELEMENT_TYPES = E.TSENTITYNAME_TYPES = E.TSBASETYPE_TYPES = E.TERMINATORLESS_TYPES = E.STATEMENT_TYPES = E.STANDARDIZED_TYPES = E.SCOPABLE_TYPES = E.PUREISH_TYPES = E.PROPERTY_TYPES = E.PRIVATE_TYPES = E.PATTERN_TYPES = E.PATTERNLIKE_TYPES = E.OBJECTMEMBER_TYPES = E.MODULESPECIFIER_TYPES = E.MODULEDECLARATION_TYPES = E.MISCELLANEOUS_TYPES = E.METHOD_TYPES = E.LVAL_TYPES = E.LOOP_TYPES = E.LITERAL_TYPES = E.JSX_TYPES = E.IMMUTABLE_TYPES = E.FUNCTION_TYPES = E.FUNCTIONPARENT_TYPES = E.FOR_TYPES = E.FORXSTATEMENT_TYPES = E.FLOW_TYPES = E.FLOWTYPE_TYPES = E.FLOWPREDICATE_TYPES = E.FLOWDECLARATION_TYPES = E.FLOWBASEANNOTATION_TYPES = E.EXPRESSION_TYPES = E.EXPRESSIONWRAPPER_TYPES = E.EXPORTDECLARATION_TYPES = E.ENUMMEMBER_TYPES = E.ENUMBODY_TYPES = E.DECLARATION_TYPES = E.CONDITIONAL_TYPES = E.COMPLETIONSTATEMENT_TYPES = E.CLASS_TYPES = E.BLOCK_TYPES = E.BLOCKPARENT_TYPES = E.BINARY_TYPES = E.ACCESSOR_TYPES = void 0;
  var g = q(),
      u0 = g.FLIPPED_ALIAS_KEYS.Standardized;
  E.STANDARDIZED_TYPES = u0;
  var l0 = g.FLIPPED_ALIAS_KEYS.Expression;
  E.EXPRESSION_TYPES = l0;
  var p0 = g.FLIPPED_ALIAS_KEYS.Binary;
  E.BINARY_TYPES = p0;
  var f0 = g.FLIPPED_ALIAS_KEYS.Scopable;
  E.SCOPABLE_TYPES = f0;
  var c0 = g.FLIPPED_ALIAS_KEYS.BlockParent;
  E.BLOCKPARENT_TYPES = c0;
  var y0 = g.FLIPPED_ALIAS_KEYS.Block;
  E.BLOCK_TYPES = y0;
  var d0 = g.FLIPPED_ALIAS_KEYS.Statement;
  E.STATEMENT_TYPES = d0;
  var T0 = g.FLIPPED_ALIAS_KEYS.Terminatorless;
  E.TERMINATORLESS_TYPES = T0;
  var m0 = g.FLIPPED_ALIAS_KEYS.CompletionStatement;
  E.COMPLETIONSTATEMENT_TYPES = m0;
  var S0 = g.FLIPPED_ALIAS_KEYS.Conditional;
  E.CONDITIONAL_TYPES = S0;
  var E0 = g.FLIPPED_ALIAS_KEYS.Loop;
  E.LOOP_TYPES = E0;
  var b0 = g.FLIPPED_ALIAS_KEYS.While;
  E.WHILE_TYPES = b0;
  var P0 = g.FLIPPED_ALIAS_KEYS.ExpressionWrapper;
  E.EXPRESSIONWRAPPER_TYPES = P0;
  var A0 = g.FLIPPED_ALIAS_KEYS.For;
  E.FOR_TYPES = A0;
  var x0 = g.FLIPPED_ALIAS_KEYS.ForXStatement;
  E.FORXSTATEMENT_TYPES = x0;
  var O0 = g.FLIPPED_ALIAS_KEYS.Function;
  E.FUNCTION_TYPES = O0;
  var v0 = g.FLIPPED_ALIAS_KEYS.FunctionParent;
  E.FUNCTIONPARENT_TYPES = v0;
  var g0 = g.FLIPPED_ALIAS_KEYS.Pureish;
  E.PUREISH_TYPES = g0;
  var I0 = g.FLIPPED_ALIAS_KEYS.Declaration;
  E.DECLARATION_TYPES = I0;
  var D0 = g.FLIPPED_ALIAS_KEYS.PatternLike;
  E.PATTERNLIKE_TYPES = D0;
  var N0 = g.FLIPPED_ALIAS_KEYS.LVal;
  E.LVAL_TYPES = N0;
  var _0 = g.FLIPPED_ALIAS_KEYS.TSEntityName;
  E.TSENTITYNAME_TYPES = _0;
  var h0 = g.FLIPPED_ALIAS_KEYS.Literal;
  E.LITERAL_TYPES = h0;
  var L0 = g.FLIPPED_ALIAS_KEYS.Immutable;
  E.IMMUTABLE_TYPES = L0;
  var j0 = g.FLIPPED_ALIAS_KEYS.UserWhitespacable;
  E.USERWHITESPACABLE_TYPES = j0;
  var C0 = g.FLIPPED_ALIAS_KEYS.Method;
  E.METHOD_TYPES = C0;
  var B0 = g.FLIPPED_ALIAS_KEYS.ObjectMember;
  E.OBJECTMEMBER_TYPES = B0;
  var M0 = g.FLIPPED_ALIAS_KEYS.Property;
  E.PROPERTY_TYPES = M0;
  var w0 = g.FLIPPED_ALIAS_KEYS.UnaryLike;
  E.UNARYLIKE_TYPES = w0;
  var F0 = g.FLIPPED_ALIAS_KEYS.Pattern;
  E.PATTERN_TYPES = F0;
  var R0 = g.FLIPPED_ALIAS_KEYS.Class;
  E.CLASS_TYPES = R0;
  var K0 = g.FLIPPED_ALIAS_KEYS.ModuleDeclaration;
  E.MODULEDECLARATION_TYPES = K0;
  var Y0 = g.FLIPPED_ALIAS_KEYS.ExportDeclaration;
  E.EXPORTDECLARATION_TYPES = Y0;
  var V0 = g.FLIPPED_ALIAS_KEYS.ModuleSpecifier;
  E.MODULESPECIFIER_TYPES = V0;
  var q0 = g.FLIPPED_ALIAS_KEYS.Accessor;
  E.ACCESSOR_TYPES = q0;
  var k0 = g.FLIPPED_ALIAS_KEYS.Private;
  E.PRIVATE_TYPES = k0;
  var X0 = g.FLIPPED_ALIAS_KEYS.Flow;
  E.FLOW_TYPES = X0;
  var J0 = g.FLIPPED_ALIAS_KEYS.FlowType;
  E.FLOWTYPE_TYPES = J0;
  var U0 = g.FLIPPED_ALIAS_KEYS.FlowBaseAnnotation;
  E.FLOWBASEANNOTATION_TYPES = U0;
  var W0 = g.FLIPPED_ALIAS_KEYS.FlowDeclaration;
  E.FLOWDECLARATION_TYPES = W0;
  var G0 = g.FLIPPED_ALIAS_KEYS.FlowPredicate;
  E.FLOWPREDICATE_TYPES = G0;
  var z0 = g.FLIPPED_ALIAS_KEYS.EnumBody;
  E.ENUMBODY_TYPES = z0;
  var Q0 = g.FLIPPED_ALIAS_KEYS.EnumMember;
  E.ENUMMEMBER_TYPES = Q0;
  var $0 = g.FLIPPED_ALIAS_KEYS.JSX;
  E.JSX_TYPES = $0;
  var H0 = g.FLIPPED_ALIAS_KEYS.Miscellaneous;
  E.MISCELLANEOUS_TYPES = H0;
  var Z0 = g.FLIPPED_ALIAS_KEYS.TypeScript;
  E.TYPESCRIPT_TYPES = Z0;
  var ex = g.FLIPPED_ALIAS_KEYS.TSTypeElement;
  E.TSTYPEELEMENT_TYPES = ex;
  var tx = g.FLIPPED_ALIAS_KEYS.TSType;
  E.TSTYPE_TYPES = tx;
  var rx = g.FLIPPED_ALIAS_KEYS.TSBaseType;
  E.TSBASETYPE_TYPES = rx;
});
var Yt = A(Kt => {
  "use strict";

  Object.defineProperty(Kt, "__esModule", {
    value: !0
  });
  Kt.default = nx;
  var je = j(),
      Rt = V();

  function nx(e, t) {
    if ((0, je.isBlockStatement)(e)) return e;
    let r = [];
    return (0, je.isEmptyStatement)(e) ? r = [] : ((0, je.isStatement)(e) || ((0, je.isFunction)(t) ? e = (0, Rt.returnStatement)(e) : e = (0, Rt.expressionStatement)(e)), r = [e]), (0, Rt.blockStatement)(r);
  }
});
var zn = A(Vt => {
  "use strict";

  Object.defineProperty(Vt, "__esModule", {
    value: !0
  });
  Vt.default = ax;
  var ix = Yt();

  function ax(e, t = "body") {
    let r = (0, ix.default)(e[t], e);
    return e[t] = r, r;
  }
});
var kt = A(qt => {
  "use strict";

  Object.defineProperty(qt, "__esModule", {
    value: !0
  });
  qt.default = ux;
  var sx = re(),
      ox = ___babel_helper_validator_identifier$;

  function ux(e) {
    e = e + "";
    let t = "";

    for (let r of e) t += (0, ox.isIdentifierChar)(r.codePointAt(0)) ? r : "-";

    return t = t.replace(/^[-0-9]+/, ""), t = t.replace(/[-\s]+(.)?/g, function (r, l) {
      return l ? l.toUpperCase() : "";
    }), (0, sx.default)(t) || (t = `_${t}`), t || "_";
  }
});
var Qn = A(Xt => {
  "use strict";

  Object.defineProperty(Xt, "__esModule", {
    value: !0
  });
  Xt.default = px;
  var lx = kt();

  function px(e) {
    return e = (0, lx.default)(e), (e === "eval" || e === "arguments") && (e = "_" + e), e;
  }
});
var $n = A(Jt => {
  "use strict";

  Object.defineProperty(Jt, "__esModule", {
    value: !0
  });
  Jt.default = yx;
  var fx = j(),
      cx = V();

  function yx(e, t = e.key || e.property) {
    return !e.computed && (0, fx.isIdentifier)(t) && (t = (0, cx.stringLiteral)(t.name)), t;
  }
});
var Hn = A(Ce => {
  "use strict";

  Object.defineProperty(Ce, "__esModule", {
    value: !0
  });
  Ce.default = void 0;
  var ye = j(),
      dx = Tx;
  Ce.default = dx;

  function Tx(e) {
    if ((0, ye.isExpressionStatement)(e) && (e = e.expression), (0, ye.isExpression)(e)) return e;
    if ((0, ye.isClass)(e) ? e.type = "ClassExpression" : (0, ye.isFunction)(e) && (e.type = "FunctionExpression"), !(0, ye.isExpression)(e)) throw new Error(`cannot turn ${e.type} to an expression`);
    return e;
  }
});
var Gt = A(Wt => {
  "use strict";

  Object.defineProperty(Wt, "__esModule", {
    value: !0
  });
  Wt.default = Ut;
  var mx = q();

  function Ut(e, t, r) {
    if (!e) return;
    let l = mx.VISITOR_KEYS[e.type];

    if (!!l) {
      r = r || {}, t(e, r);

      for (let y of l) {
        let d = e[y];
        if (Array.isArray(d)) for (let m of d) Ut(m, t, r);else Ut(d, t, r);
      }
    }
  }
});
var Qt = A(zt => {
  "use strict";

  Object.defineProperty(zt, "__esModule", {
    value: !0
  });
  zt.default = bx;
  var Sx = W(),
      Zn = ["tokens", "start", "end", "loc", "raw", "rawValue"],
      Ex = [...Sx.COMMENT_KEYS, "comments", ...Zn];

  function bx(e, t = {}) {
    let r = t.preserveComments ? Zn : Ex;

    for (let y of r) e[y] != null && (e[y] = void 0);

    for (let y of Object.keys(e)) y[0] === "_" && e[y] != null && (e[y] = void 0);

    let l = Object.getOwnPropertySymbols(e);

    for (let y of l) e[y] = null;
  }
});
var Ht = A($t => {
  "use strict";

  Object.defineProperty($t, "__esModule", {
    value: !0
  });
  $t.default = xx;
  var Px = Gt(),
      Ax = Qt();

  function xx(e, t) {
    return (0, Px.default)(e, Ax.default, t), e;
  }
});
var ti = A(Zt => {
  "use strict";

  Object.defineProperty(Zt, "__esModule", {
    value: !0
  });
  Zt.default = H;
  var ei = j(),
      Ox = Q(),
      vx = Ht();

  function H(e, t = e.key) {
    let r;
    return e.kind === "method" ? H.increment() + "" : ((0, ei.isIdentifier)(t) ? r = t.name : (0, ei.isStringLiteral)(t) ? r = JSON.stringify(t.value) : r = JSON.stringify((0, vx.default)((0, Ox.default)(t))), e.computed && (r = `[${r}]`), e.static && (r = `static:${r}`), r);
  }

  H.uid = 0;

  H.increment = function () {
    return H.uid >= Number.MAX_SAFE_INTEGER ? H.uid = 0 : H.uid++;
  };
});
var de = A(tr => {
  "use strict";

  Object.defineProperty(tr, "__esModule", {
    value: !0
  });
  tr.default = er;
  var ae = j();

  function er(e, t, r) {
    let l = [].concat(e),
        y = Object.create(null);

    for (; l.length;) {
      let d = l.shift();
      if (!d) continue;
      let m = er.keys[d.type];

      if ((0, ae.isIdentifier)(d)) {
        t ? (y[d.name] = y[d.name] || []).push(d) : y[d.name] = d;
        continue;
      }

      if ((0, ae.isExportDeclaration)(d) && !(0, ae.isExportAllDeclaration)(d)) {
        (0, ae.isDeclaration)(d.declaration) && l.push(d.declaration);
        continue;
      }

      if (r) {
        if ((0, ae.isFunctionDeclaration)(d)) {
          l.push(d.id);
          continue;
        }

        if ((0, ae.isFunctionExpression)(d)) continue;
      }

      if (m) for (let x = 0; x < m.length; x++) {
        let D = m[x],
            L = d[D];
        L && (Array.isArray(L) ? l.push(...L) : l.push(L));
      }
    }

    return y;
  }

  er.keys = {
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
var ri = A(nr => {
  "use strict";

  Object.defineProperty(nr, "__esModule", {
    value: !0
  });
  nr.default = Be;
  var gx = de(),
      Z = j(),
      rr = V(),
      Ix = Q();

  function Be(e, t, r) {
    let l = [],
        y = !0;

    for (let d of e) if ((0, Z.isEmptyStatement)(d) || (y = !1), (0, Z.isExpression)(d)) l.push(d);else if ((0, Z.isExpressionStatement)(d)) l.push(d.expression);else if ((0, Z.isVariableDeclaration)(d)) {
      if (d.kind !== "var") return;

      for (let m of d.declarations) {
        let x = (0, gx.default)(m);

        for (let D of Object.keys(x)) r.push({
          kind: d.kind,
          id: (0, Ix.default)(x[D])
        });

        m.init && l.push((0, rr.assignmentExpression)("=", m.id, m.init));
      }

      y = !0;
    } else if ((0, Z.isIfStatement)(d)) {
      let m = d.consequent ? Be([d.consequent], t, r) : t.buildUndefinedNode(),
          x = d.alternate ? Be([d.alternate], t, r) : t.buildUndefinedNode();
      if (!m || !x) return;
      l.push((0, rr.conditionalExpression)(d.test, m, x));
    } else if ((0, Z.isBlockStatement)(d)) {
      let m = Be(d.body, t, r);
      if (!m) return;
      l.push(m);
    } else if ((0, Z.isEmptyStatement)(d)) e.indexOf(d) === 0 && (y = !0);else return;

    return y && l.push(t.buildUndefinedNode()), l.length === 1 ? l[0] : (0, rr.sequenceExpression)(l);
  }
});
var ni = A(ir => {
  "use strict";

  Object.defineProperty(ir, "__esModule", {
    value: !0
  });
  ir.default = Nx;
  var Dx = ri();

  function Nx(e, t) {
    if (!(e != null && e.length)) return;
    let r = [],
        l = (0, Dx.default)(e, t, r);

    if (!!l) {
      for (let y of r) t.push(y);

      return l;
    }
  }
});
var ii = A(we => {
  "use strict";

  Object.defineProperty(we, "__esModule", {
    value: !0
  });
  we.default = void 0;

  var Me = j(),
      _x = V(),
      hx = Lx;

  we.default = hx;

  function Lx(e, t) {
    if ((0, Me.isStatement)(e)) return e;
    let r = !1,
        l;
    if ((0, Me.isClass)(e)) r = !0, l = "ClassDeclaration";else if ((0, Me.isFunction)(e)) r = !0, l = "FunctionDeclaration";else if ((0, Me.isAssignmentExpression)(e)) return (0, _x.expressionStatement)(e);

    if (r && !e.id && (l = !1), !l) {
      if (t) return !1;
      throw new Error(`cannot turn ${e.type} to a statement`);
    }

    return e.type = l, e;
  }
});
var ai = A(Fe => {
  "use strict";

  Object.defineProperty(Fe, "__esModule", {
    value: !0
  });
  Fe.default = void 0;
  var jx = re(),
      B = V(),
      Cx = ar;
  Fe.default = Cx;
  var Bx = Function.call.bind(Object.prototype.toString);

  function Mx(e) {
    return Bx(e) === "[object RegExp]";
  }

  function wx(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]") return !1;
    let t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null;
  }

  function ar(e) {
    if (e === void 0) return (0, B.identifier)("undefined");
    if (e === !0 || e === !1) return (0, B.booleanLiteral)(e);
    if (e === null) return (0, B.nullLiteral)();
    if (typeof e == "string") return (0, B.stringLiteral)(e);

    if (typeof e == "number") {
      let t;
      if (Number.isFinite(e)) t = (0, B.numericLiteral)(Math.abs(e));else {
        let r;
        Number.isNaN(e) ? r = (0, B.numericLiteral)(0) : r = (0, B.numericLiteral)(1), t = (0, B.binaryExpression)("/", r, (0, B.numericLiteral)(0));
      }
      return (e < 0 || Object.is(e, -0)) && (t = (0, B.unaryExpression)("-", t)), t;
    }

    if (Mx(e)) {
      let t = e.source,
          r = e.toString().match(/\/([a-z]+|)$/)[1];
      return (0, B.regExpLiteral)(t, r);
    }

    if (Array.isArray(e)) return (0, B.arrayExpression)(e.map(ar));

    if (wx(e)) {
      let t = [];

      for (let r of Object.keys(e)) {
        let l;
        (0, jx.default)(r) ? l = (0, B.identifier)(r) : l = (0, B.stringLiteral)(r), t.push((0, B.objectProperty)(l, ar(e[r])));
      }

      return (0, B.objectExpression)(t);
    }

    throw new Error("don't know how to turn this value into a node");
  }
});
var si = A(sr => {
  "use strict";

  Object.defineProperty(sr, "__esModule", {
    value: !0
  });
  sr.default = Rx;
  var Fx = V();

  function Rx(e, t, r = !1) {
    return e.object = (0, Fx.memberExpression)(e.object, e.property, e.computed), e.property = t, e.computed = !!r, e;
  }
});
var ui = A(or => {
  "use strict";

  Object.defineProperty(or, "__esModule", {
    value: !0
  });
  or.default = Yx;
  var oi = W(),
      Kx = wt();

  function Yx(e, t) {
    if (!e || !t) return e;

    for (let r of oi.INHERIT_KEYS.optional) e[r] == null && (e[r] = t[r]);

    for (let r of Object.keys(t)) r[0] === "_" && r !== "__clone" && (e[r] = t[r]);

    for (let r of oi.INHERIT_KEYS.force) e[r] = t[r];

    return (0, Kx.default)(e, t), e;
  }
});
var li = A(ur => {
  "use strict";

  Object.defineProperty(ur, "__esModule", {
    value: !0
  });
  ur.default = kx;
  var Vx = V(),
      qx = Ne();

  function kx(e, t) {
    if ((0, qx.isSuper)(e.object)) throw new Error("Cannot prepend node to super property access (`super.foo`).");
    return e.object = (0, Vx.memberExpression)(t, e.object), e;
  }
});
var pi = A(Re => {
  "use strict";

  Object.defineProperty(Re, "__esModule", {
    value: !0
  });
  Re.default = void 0;
  var Xx = de(),
      Jx = Ux;
  Re.default = Jx;

  function Ux(e, t) {
    return (0, Xx.default)(e, t, !0);
  }
});
var fi = A(pr => {
  "use strict";

  Object.defineProperty(pr, "__esModule", {
    value: !0
  });
  pr.default = Gx;
  var Wx = q();

  function Gx(e, t, r) {
    typeof t == "function" && (t = {
      enter: t
    });
    let {
      enter: l,
      exit: y
    } = t;
    lr(e, l, y, r, []);
  }

  function lr(e, t, r, l, y) {
    let d = Wx.VISITOR_KEYS[e.type];

    if (!!d) {
      t && t(e, y, l);

      for (let m of d) {
        let x = e[m];
        if (Array.isArray(x)) for (let D = 0; D < x.length; D++) {
          let L = x[D];
          !L || (y.push({
            node: e,
            key: m,
            index: D
          }), lr(L, t, r, l, y), y.pop());
        } else x && (y.push({
          node: e,
          key: m
        }), lr(x, t, r, l, y), y.pop());
      }

      r && r(e, y, l);
    }
  }
});
var ci = A(fr => {
  "use strict";

  Object.defineProperty(fr, "__esModule", {
    value: !0
  });
  fr.default = Qx;
  var zx = de();

  function Qx(e, t, r) {
    if (r && e.type === "Identifier" && t.type === "ObjectProperty" && r.type === "ObjectExpression") return !1;
    let l = zx.default.keys[t.type];
    if (l) for (let y = 0; y < l.length; y++) {
      let d = l[y],
          m = t[d];

      if (Array.isArray(m)) {
        if (m.indexOf(e) >= 0) return !0;
      } else if (m === e) return !0;
    }
    return !1;
  }
});
var yr = A(cr => {
  "use strict";

  Object.defineProperty(cr, "__esModule", {
    value: !0
  });
  cr.default = Zx;
  var $x = j(),
      Hx = W();

  function Zx(e) {
    return (0, $x.isVariableDeclaration)(e) && (e.kind !== "var" || e[Hx.BLOCK_SCOPED_SYMBOL]);
  }
});
var di = A(dr => {
  "use strict";

  Object.defineProperty(dr, "__esModule", {
    value: !0
  });
  dr.default = tO;
  var yi = j(),
      eO = yr();

  function tO(e) {
    return (0, yi.isFunctionDeclaration)(e) || (0, yi.isClassDeclaration)(e) || (0, eO.default)(e);
  }
});
var Ti = A(Tr => {
  "use strict";

  Object.defineProperty(Tr, "__esModule", {
    value: !0
  });
  Tr.default = iO;
  var rO = Se(),
      nO = j();

  function iO(e) {
    return (0, rO.default)(e.type, "Immutable") ? !0 : (0, nO.isIdentifier)(e) ? e.name === "undefined" : !1;
  }
});
var Si = A(Sr => {
  "use strict";

  Object.defineProperty(Sr, "__esModule", {
    value: !0
  });
  Sr.default = mr;
  var mi = q();

  function mr(e, t) {
    if (typeof e != "object" || typeof t != "object" || e == null || t == null) return e === t;
    if (e.type !== t.type) return !1;
    let r = Object.keys(mi.NODE_FIELDS[e.type] || e.type),
        l = mi.VISITOR_KEYS[e.type];

    for (let y of r) {
      let d = e[y],
          m = t[y];
      if (typeof d != typeof m) return !1;

      if (!(d == null && m == null)) {
        if (d == null || m == null) return !1;

        if (Array.isArray(d)) {
          if (!Array.isArray(m) || d.length !== m.length) return !1;

          for (let x = 0; x < d.length; x++) if (!mr(d[x], m[x])) return !1;

          continue;
        }

        if (typeof d == "object" && !(l != null && l.includes(y))) {
          for (let x of Object.keys(d)) if (d[x] !== m[x]) return !1;

          continue;
        }

        if (!mr(d, m)) return !1;
      }
    }

    return !0;
  }
});
var Ei = A(Er => {
  "use strict";

  Object.defineProperty(Er, "__esModule", {
    value: !0
  });
  Er.default = aO;

  function aO(e, t, r) {
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
});
var bi = A(br => {
  "use strict";

  Object.defineProperty(br, "__esModule", {
    value: !0
  });
  br.default = sO;
  var ee = j();

  function sO(e, t) {
    return (0, ee.isBlockStatement)(e) && ((0, ee.isFunction)(t) || (0, ee.isCatchClause)(t)) ? !1 : (0, ee.isPattern)(e) && ((0, ee.isFunction)(t) || (0, ee.isCatchClause)(t)) ? !0 : (0, ee.isScopable)(e);
  }
});
var Ai = A(Pr => {
  "use strict";

  Object.defineProperty(Pr, "__esModule", {
    value: !0
  });
  Pr.default = oO;
  var Pi = j();

  function oO(e) {
    return (0, Pi.isImportDefaultSpecifier)(e) || (0, Pi.isIdentifier)(e.imported || e.exported, {
      name: "default"
    });
  }
});
var xi = A(Ar => {
  "use strict";

  Object.defineProperty(Ar, "__esModule", {
    value: !0
  });
  Ar.default = pO;
  var uO = re(),
      lO = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);

  function pO(e) {
    return (0, uO.default)(e) && !lO.has(e);
  }
});
var Oi = A(xr => {
  "use strict";

  Object.defineProperty(xr, "__esModule", {
    value: !0
  });
  xr.default = yO;
  var fO = j(),
      cO = W();

  function yO(e) {
    return (0, fO.isVariableDeclaration)(e, {
      kind: "var"
    }) && !e[cO.BLOCK_SCOPED_SYMBOL];
  }
});
var vi = A(() => {});
var Ne = A(P => {
  "use strict";

  Object.defineProperty(P, "__esModule", {
    value: !0
  });
  var U = {
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
  Object.defineProperty(P, "addComment", {
    enumerable: !0,
    get: function () {
      return gO.default;
    }
  });
  Object.defineProperty(P, "addComments", {
    enumerable: !0,
    get: function () {
      return IO.default;
    }
  });
  Object.defineProperty(P, "appendToMemberExpression", {
    enumerable: !0,
    get: function () {
      return qO.default;
    }
  });
  Object.defineProperty(P, "assertNode", {
    enumerable: !0,
    get: function () {
      return SO.default;
    }
  });
  Object.defineProperty(P, "buildMatchMemberExpression", {
    enumerable: !0,
    get: function () {
      return Tv.default;
    }
  });
  Object.defineProperty(P, "clone", {
    enumerable: !0,
    get: function () {
      return AO.default;
    }
  });
  Object.defineProperty(P, "cloneDeep", {
    enumerable: !0,
    get: function () {
      return xO.default;
    }
  });
  Object.defineProperty(P, "cloneDeepWithoutLoc", {
    enumerable: !0,
    get: function () {
      return OO.default;
    }
  });
  Object.defineProperty(P, "cloneNode", {
    enumerable: !0,
    get: function () {
      return PO.default;
    }
  });
  Object.defineProperty(P, "cloneWithoutLoc", {
    enumerable: !0,
    get: function () {
      return vO.default;
    }
  });
  Object.defineProperty(P, "createFlowUnionType", {
    enumerable: !0,
    get: function () {
      return gi.default;
    }
  });
  Object.defineProperty(P, "createTSUnionType", {
    enumerable: !0,
    get: function () {
      return bO.default;
    }
  });
  Object.defineProperty(P, "createTypeAnnotationBasedOnTypeof", {
    enumerable: !0,
    get: function () {
      return EO.default;
    }
  });
  Object.defineProperty(P, "createUnionTypeAnnotation", {
    enumerable: !0,
    get: function () {
      return gi.default;
    }
  });
  Object.defineProperty(P, "ensureBlock", {
    enumerable: !0,
    get: function () {
      return jO.default;
    }
  });
  Object.defineProperty(P, "getBindingIdentifiers", {
    enumerable: !0,
    get: function () {
      return GO.default;
    }
  });
  Object.defineProperty(P, "getOuterBindingIdentifiers", {
    enumerable: !0,
    get: function () {
      return zO.default;
    }
  });
  Object.defineProperty(P, "inheritInnerComments", {
    enumerable: !0,
    get: function () {
      return DO.default;
    }
  });
  Object.defineProperty(P, "inheritLeadingComments", {
    enumerable: !0,
    get: function () {
      return NO.default;
    }
  });
  Object.defineProperty(P, "inheritTrailingComments", {
    enumerable: !0,
    get: function () {
      return hO.default;
    }
  });
  Object.defineProperty(P, "inherits", {
    enumerable: !0,
    get: function () {
      return kO.default;
    }
  });
  Object.defineProperty(P, "inheritsComments", {
    enumerable: !0,
    get: function () {
      return _O.default;
    }
  });
  Object.defineProperty(P, "is", {
    enumerable: !0,
    get: function () {
      return HO.default;
    }
  });
  Object.defineProperty(P, "isBinding", {
    enumerable: !0,
    get: function () {
      return ZO.default;
    }
  });
  Object.defineProperty(P, "isBlockScoped", {
    enumerable: !0,
    get: function () {
      return ev.default;
    }
  });
  Object.defineProperty(P, "isImmutable", {
    enumerable: !0,
    get: function () {
      return tv.default;
    }
  });
  Object.defineProperty(P, "isLet", {
    enumerable: !0,
    get: function () {
      return rv.default;
    }
  });
  Object.defineProperty(P, "isNode", {
    enumerable: !0,
    get: function () {
      return nv.default;
    }
  });
  Object.defineProperty(P, "isNodesEquivalent", {
    enumerable: !0,
    get: function () {
      return iv.default;
    }
  });
  Object.defineProperty(P, "isPlaceholderType", {
    enumerable: !0,
    get: function () {
      return av.default;
    }
  });
  Object.defineProperty(P, "isReferenced", {
    enumerable: !0,
    get: function () {
      return sv.default;
    }
  });
  Object.defineProperty(P, "isScope", {
    enumerable: !0,
    get: function () {
      return ov.default;
    }
  });
  Object.defineProperty(P, "isSpecifierDefault", {
    enumerable: !0,
    get: function () {
      return uv.default;
    }
  });
  Object.defineProperty(P, "isType", {
    enumerable: !0,
    get: function () {
      return lv.default;
    }
  });
  Object.defineProperty(P, "isValidES3Identifier", {
    enumerable: !0,
    get: function () {
      return pv.default;
    }
  });
  Object.defineProperty(P, "isValidIdentifier", {
    enumerable: !0,
    get: function () {
      return fv.default;
    }
  });
  Object.defineProperty(P, "isVar", {
    enumerable: !0,
    get: function () {
      return cv.default;
    }
  });
  Object.defineProperty(P, "matchesPattern", {
    enumerable: !0,
    get: function () {
      return yv.default;
    }
  });
  Object.defineProperty(P, "prependToMemberExpression", {
    enumerable: !0,
    get: function () {
      return XO.default;
    }
  });
  P.react = void 0;
  Object.defineProperty(P, "removeComments", {
    enumerable: !0,
    get: function () {
      return LO.default;
    }
  });
  Object.defineProperty(P, "removeProperties", {
    enumerable: !0,
    get: function () {
      return JO.default;
    }
  });
  Object.defineProperty(P, "removePropertiesDeep", {
    enumerable: !0,
    get: function () {
      return UO.default;
    }
  });
  Object.defineProperty(P, "removeTypeDuplicates", {
    enumerable: !0,
    get: function () {
      return WO.default;
    }
  });
  Object.defineProperty(P, "shallowEqual", {
    enumerable: !0,
    get: function () {
      return $O.default;
    }
  });
  Object.defineProperty(P, "toBindingIdentifierName", {
    enumerable: !0,
    get: function () {
      return CO.default;
    }
  });
  Object.defineProperty(P, "toBlock", {
    enumerable: !0,
    get: function () {
      return BO.default;
    }
  });
  Object.defineProperty(P, "toComputedKey", {
    enumerable: !0,
    get: function () {
      return MO.default;
    }
  });
  Object.defineProperty(P, "toExpression", {
    enumerable: !0,
    get: function () {
      return wO.default;
    }
  });
  Object.defineProperty(P, "toIdentifier", {
    enumerable: !0,
    get: function () {
      return FO.default;
    }
  });
  Object.defineProperty(P, "toKeyAlias", {
    enumerable: !0,
    get: function () {
      return RO.default;
    }
  });
  Object.defineProperty(P, "toSequenceExpression", {
    enumerable: !0,
    get: function () {
      return KO.default;
    }
  });
  Object.defineProperty(P, "toStatement", {
    enumerable: !0,
    get: function () {
      return YO.default;
    }
  });
  Object.defineProperty(P, "traverse", {
    enumerable: !0,
    get: function () {
      return Ke.default;
    }
  });
  Object.defineProperty(P, "traverseFast", {
    enumerable: !0,
    get: function () {
      return QO.default;
    }
  });
  Object.defineProperty(P, "validate", {
    enumerable: !0,
    get: function () {
      return dv.default;
    }
  });
  Object.defineProperty(P, "valueToNode", {
    enumerable: !0,
    get: function () {
      return VO.default;
    }
  });
  var dO = jr(),
      TO = Cr(),
      mO = gn(),
      SO = In(),
      Or = Dn();
  Object.keys(Or).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(U, e) || e in P && P[e] === Or[e] || Object.defineProperty(P, e, {
      enumerable: !0,
      get: function () {
        return Or[e];
      }
    });
  });
  var EO = Nn(),
      gi = Ln(),
      bO = Mn(),
      vr = V();
  Object.keys(vr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(U, e) || e in P && P[e] === vr[e] || Object.defineProperty(P, e, {
      enumerable: !0,
      get: function () {
        return vr[e];
      }
    });
  });
  var gr = wn();
  Object.keys(gr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(U, e) || e in P && P[e] === gr[e] || Object.defineProperty(P, e, {
      enumerable: !0,
      get: function () {
        return gr[e];
      }
    });
  });

  var PO = Q(),
      AO = qn(),
      xO = kn(),
      OO = Xn(),
      vO = Jn(),
      gO = Un(),
      IO = It(),
      DO = ht(),
      NO = jt(),
      _O = wt(),
      hO = Bt(),
      LO = Wn(),
      Ir = Gn();

  Object.keys(Ir).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(U, e) || e in P && P[e] === Ir[e] || Object.defineProperty(P, e, {
      enumerable: !0,
      get: function () {
        return Ir[e];
      }
    });
  });
  var Dr = W();
  Object.keys(Dr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(U, e) || e in P && P[e] === Dr[e] || Object.defineProperty(P, e, {
      enumerable: !0,
      get: function () {
        return Dr[e];
      }
    });
  });
  var jO = zn(),
      CO = Qn(),
      BO = Yt(),
      MO = $n(),
      wO = Hn(),
      FO = kt(),
      RO = ti(),
      KO = ni(),
      YO = ii(),
      VO = ai(),
      Nr = q();
  Object.keys(Nr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(U, e) || e in P && P[e] === Nr[e] || Object.defineProperty(P, e, {
      enumerable: !0,
      get: function () {
        return Nr[e];
      }
    });
  });
  var qO = si(),
      kO = ui(),
      XO = li(),
      JO = Qt(),
      UO = Ht(),
      WO = mt(),
      GO = de(),
      zO = pi(),
      Ke = fi();
  Object.keys(Ke).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(U, e) || e in P && P[e] === Ke[e] || Object.defineProperty(P, e, {
      enumerable: !0,
      get: function () {
        return Ke[e];
      }
    });
  });

  var QO = Gt(),
      $O = Te(),
      HO = te(),
      ZO = ci(),
      ev = di(),
      tv = Ti(),
      rv = yr(),
      nv = yt(),
      iv = Si(),
      av = Ge(),
      sv = Ei(),
      ov = bi(),
      uv = Ai(),
      lv = Se(),
      pv = xi(),
      fv = re(),
      cv = Oi(),
      yv = qe(),
      dv = xe(),
      Tv = Xe(),
      _r = j();

  Object.keys(_r).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(U, e) || e in P && P[e] === _r[e] || Object.defineProperty(P, e, {
      enumerable: !0,
      get: function () {
        return _r[e];
      }
    });
  });
  var hr = vi();
  Object.keys(hr).forEach(function (e) {
    e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(U, e) || e in P && P[e] === hr[e] || Object.defineProperty(P, e, {
      enumerable: !0,
      get: function () {
        return hr[e];
      }
    });
  });
  var mv = {
    isReactComponent: dO.default,
    isCompatTag: TO.default,
    buildChildren: mO.default
  };
  P.react = mv;
});
var Di = Bi(Ne()),
    $g = !0,
    {
  addComment: Hg,
  addComments: Zg,
  appendToMemberExpression: eI,
  assertNode: tI,
  buildMatchMemberExpression: rI,
  clone: nI,
  cloneDeep: iI,
  cloneDeepWithoutLoc: aI,
  cloneNode: sI,
  cloneWithoutLoc: oI,
  createFlowUnionType: uI,
  createTSUnionType: lI,
  createTypeAnnotationBasedOnTypeof: pI,
  createUnionTypeAnnotation: fI,
  ensureBlock: cI,
  getBindingIdentifiers: yI,
  getOuterBindingIdentifiers: dI,
  inheritInnerComments: TI,
  inheritLeadingComments: mI,
  inheritTrailingComments: SI,
  inherits: EI,
  inheritsComments: bI,
  is: PI,
  isBinding: AI,
  isBlockScoped: xI,
  isImmutable: OI,
  isLet: vI,
  isNode: gI,
  isNodesEquivalent: II,
  isPlaceholderType: DI,
  isReferenced: NI,
  isScope: _I,
  isSpecifierDefault: hI,
  isType: LI,
  isValidES3Identifier: jI,
  isValidIdentifier: CI,
  isVar: BI,
  matchesPattern: MI,
  prependToMemberExpression: wI,
  react: FI,
  removeComments: RI,
  removeProperties: KI,
  removePropertiesDeep: YI,
  removeTypeDuplicates: VI,
  shallowEqual: qI,
  toBindingIdentifierName: kI,
  toBlock: XI,
  toComputedKey: JI,
  toExpression: UI,
  toIdentifier: WI,
  toKeyAlias: GI,
  toSequenceExpression: zI,
  toStatement: QI,
  traverse: $I,
  traverseFast: HI,
  validate: ZI,
  valueToNode: eD
} = Di,
    {
  default: Ii,
  ...Sv
} = Di,
    tD = Ii !== void 0 ? Ii : Sv;
export { $g as __esModule, Hg as addComment, Zg as addComments, eI as appendToMemberExpression, tI as assertNode, rI as buildMatchMemberExpression, nI as clone, iI as cloneDeep, aI as cloneDeepWithoutLoc, sI as cloneNode, oI as cloneWithoutLoc, uI as createFlowUnionType, lI as createTSUnionType, pI as createTypeAnnotationBasedOnTypeof, fI as createUnionTypeAnnotation, tD as default, cI as ensureBlock, yI as getBindingIdentifiers, dI as getOuterBindingIdentifiers, TI as inheritInnerComments, mI as inheritLeadingComments, SI as inheritTrailingComments, EI as inherits, bI as inheritsComments, PI as is, AI as isBinding, xI as isBlockScoped, OI as isImmutable, vI as isLet, gI as isNode, II as isNodesEquivalent, DI as isPlaceholderType, NI as isReferenced, _I as isScope, hI as isSpecifierDefault, LI as isType, jI as isValidES3Identifier, CI as isValidIdentifier, BI as isVar, MI as matchesPattern, wI as prependToMemberExpression, FI as react, RI as removeComments, KI as removeProperties, YI as removePropertiesDeep, VI as removeTypeDuplicates, qI as shallowEqual, kI as toBindingIdentifierName, XI as toBlock, JI as toComputedKey, UI as toExpression, WI as toIdentifier, GI as toKeyAlias, zI as toSequenceExpression, QI as toStatement, $I as traverse, HI as traverseFast, ZI as validate, eD as valueToNode };