/* esm.sh - esbuild bundle(@babel/parser@7.19.3) esnext production */
var vs = Object.create;
var Fe = Object.defineProperty;
var Ls = Object.getOwnPropertyDescriptor;
var Ds = Object.getOwnPropertyNames;
var Ms = Object.getPrototypeOf,
    Os = Object.prototype.hasOwnProperty;

var Fs = (a, e) => () => (e || a((e = {
  exports: {}
}).exports, e), e.exports);

var Bs = (a, e, t, s) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of Ds(e)) !Os.call(a, i) && i !== t && Fe(a, i, {
    get: () => e[i],
    enumerable: !(s = Ls(e, i)) || s.enumerable
  });
  return a;
};

var _s = (a, e, t) => (t = a != null ? vs(Ms(a)) : {}, Bs(e || !a || !a.__esModule ? Fe(t, "default", {
  value: a,
  enumerable: !0
}) : t, a));

var Es = Fs(St => {
  "use strict";

  Object.defineProperty(St, "__esModule", {
    value: !0
  });

  function vt(a, e) {
    if (a == null) return {};
    var t = {},
        s = Object.keys(a),
        i,
        r;

    for (r = 0; r < s.length; r++) i = s[r], !(e.indexOf(i) >= 0) && (t[i] = a[i]);

    return t;
  }

  var O = class {
    constructor(e, t, s) {
      this.line = void 0, this.column = void 0, this.index = void 0, this.line = e, this.column = t, this.index = s;
    }

  },
      ot = class {
    constructor(e, t) {
      this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = e, this.end = t;
    }

  };

  function L(a, e) {
    let {
      line: t,
      column: s,
      index: i
    } = a;
    return new O(t, s + e, i + e);
  }

  var Jt = {
    SyntaxError: "BABEL_PARSER_SYNTAX_ERROR",
    SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
  },
      Rs = (a, e = a.length - 1) => ({
    get() {
      return a.reduce((t, s) => t[s], this);
    },

    set(t) {
      a.reduce((s, i, r) => r === e ? s[i] = t : s[i], this);
    }

  }),
      Us = (a, e, t) => Object.keys(t).map(s => [s, t[s]]).filter(([, s]) => !!s).map(([s, i]) => [s, typeof i == "function" ? {
    value: i,
    enumerable: !1
  } : typeof i.reflect == "string" ? Object.assign({}, i, Rs(i.reflect.split("."))) : i]).reduce((s, [i, r]) => Object.defineProperty(s, i, Object.assign({
    configurable: !0
  }, r)), Object.assign(new a(), e)),
      js = {
    ImportMetaOutsideModule: {
      message: `import.meta may appear only with 'sourceType: "module"'`,
      code: Jt.SourceTypeModuleError
    },
    ImportOutsideModule: {
      message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
      code: Jt.SourceTypeModuleError
    }
  },
      Be = {
    ArrayPattern: "array destructuring pattern",
    AssignmentExpression: "assignment expression",
    AssignmentPattern: "assignment expression",
    ArrowFunctionExpression: "arrow function expression",
    ConditionalExpression: "conditional expression",
    CatchClause: "catch clause",
    ForOfStatement: "for-of statement",
    ForInStatement: "for-in statement",
    ForStatement: "for-loop",
    FormalParameters: "function parameter list",
    Identifier: "identifier",
    ImportSpecifier: "import specifier",
    ImportDefaultSpecifier: "import default specifier",
    ImportNamespaceSpecifier: "import namespace specifier",
    ObjectPattern: "object destructuring pattern",
    ParenthesizedExpression: "parenthesized expression",
    RestElement: "rest element",
    UpdateExpression: {
      true: "prefix operation",
      false: "postfix operation"
    },
    VariableDeclarator: "variable declaration",
    YieldExpression: "yield expression"
  },
      Xt = ({
    type: a,
    prefix: e
  }) => a === "UpdateExpression" ? Be.UpdateExpression[String(e)] : Be[a],
      zs = {
    AccessorIsGenerator: ({
      kind: a
    }) => `A ${a}ter cannot be a generator.`,
    ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
    AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
    AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
    AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
    AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
    AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
    AwaitNotInAsyncFunction: "'await' is only allowed within async functions.",
    BadGetterArity: "A 'get' accesor must not have any formal parameters.",
    BadSetterArity: "A 'set' accesor must have exactly one formal parameter.",
    BadSetterRestParameter: "A 'set' accesor function argument must not be a rest parameter.",
    ConstructorClassField: "Classes may not have a field named 'constructor'.",
    ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
    ConstructorIsAccessor: "Class constructor may not be an accessor.",
    ConstructorIsAsync: "Constructor can't be an async function.",
    ConstructorIsGenerator: "Constructor can't be a generator.",
    DeclarationMissingInitializer: ({
      kind: a
    }) => `Missing initializer in ${a} declaration.`,
    DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
    DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax.",
    DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
    DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.",
    DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
    DecoratorStaticBlock: "Decorators can't be used with a static block.",
    DeletePrivateField: "Deleting a private field is not allowed.",
    DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
    DuplicateConstructor: "Duplicate constructor in the same class.",
    DuplicateDefaultExport: "Only one default export allowed per module.",
    DuplicateExport: ({
      exportName: a
    }) => `\`${a}\` has already been exported. Exported identifiers must be unique.`,
    DuplicateProto: "Redefinition of __proto__ property.",
    DuplicateRegExpFlags: "Duplicate regular expression flag.",
    ElementAfterRest: "Rest element must be last element.",
    EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
    ExportBindingIsString: ({
      localName: a,
      exportName: e
    }) => `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${a}' as '${e}' } from 'some-module'\`?`,
    ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
    ForInOfLoopInitializer: ({
      type: a
    }) => `'${a === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`,
    ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
    ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
    GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
    IllegalBreakContinue: ({
      type: a
    }) => `Unsyntactic ${a === "BreakStatement" ? "break" : "continue"}.`,
    IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
    IllegalReturn: "'return' outside of function.",
    ImportBindingIsString: ({
      importName: a
    }) => `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${a}" as foo }\`?`,
    ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.",
    ImportCallArity: ({
      maxArgumentCount: a
    }) => `\`import()\` requires exactly ${a === 1 ? "one argument" : "one or two arguments"}.`,
    ImportCallNotNewExpression: "Cannot use new with import(...).",
    ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
    ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
    IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
    InvalidBigIntLiteral: "Invalid BigIntLiteral.",
    InvalidCodePoint: "Code point out of bounds.",
    InvalidCoverInitializedName: "Invalid shorthand property initializer.",
    InvalidDecimal: "Invalid decimal.",
    InvalidDigit: ({
      radix: a
    }) => `Expected number in radix ${a}.`,
    InvalidEscapeSequence: "Bad character escape sequence.",
    InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
    InvalidEscapedReservedWord: ({
      reservedWord: a
    }) => `Escape sequence in keyword ${a}.`,
    InvalidIdentifier: ({
      identifierName: a
    }) => `Invalid identifier ${a}.`,
    InvalidLhs: ({
      ancestor: a
    }) => `Invalid left-hand side in ${Xt(a)}.`,
    InvalidLhsBinding: ({
      ancestor: a
    }) => `Binding invalid left-hand side in ${Xt(a)}.`,
    InvalidNumber: "Invalid number.",
    InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
    InvalidOrUnexpectedToken: ({
      unexpected: a
    }) => `Unexpected character '${a}'.`,
    InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
    InvalidPrivateFieldResolution: ({
      identifierName: a
    }) => `Private name #${a} is not defined.`,
    InvalidPropertyBindingPattern: "Binding member expression.",
    InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
    InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
    LabelRedeclaration: ({
      labelName: a
    }) => `Label '${a}' is already declared.`,
    LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
    LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
    MalformedRegExpFlags: "Invalid regular expression flag.",
    MissingClassName: "A class name is required.",
    MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
    MissingSemicolon: "Missing semicolon.",
    MissingPlugin: ({
      missingPlugin: a
    }) => `This experimental syntax requires enabling the parser plugin: ${a.map(e => JSON.stringify(e)).join(", ")}.`,
    MissingOneOfPlugins: ({
      missingPlugin: a
    }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${a.map(e => JSON.stringify(e)).join(", ")}.`,
    MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
    MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
    ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
    ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
    ModuleAttributesWithDuplicateKeys: ({
      key: a
    }) => `Duplicate key "${a}" is not allowed in module attributes.`,
    ModuleExportNameHasLoneSurrogate: ({
      surrogateCharCode: a
    }) => `An export name cannot include a lone surrogate, found '\\u${a.toString(16)}'.`,
    ModuleExportUndefined: ({
      localName: a
    }) => `Export '${a}' is not defined.`,
    MultipleDefaultsInSwitch: "Multiple default clauses.",
    NewlineAfterThrow: "Illegal newline after throw.",
    NoCatchOrFinally: "Missing catch or finally clause.",
    NumberIdentifier: "Identifier directly after number.",
    NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
    ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
    OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
    OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
    OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
    ParamDupe: "Argument name clash.",
    PatternHasAccessor: "Object pattern can't contain getter or setter.",
    PatternHasMethod: "Object pattern can't contain methods.",
    PrivateInExpectedIn: ({
      identifierName: a
    }) => `Private names are only allowed in property accesses (\`obj.#${a}\`) or in \`in\` expressions (\`#${a} in obj\`).`,
    PrivateNameRedeclaration: ({
      identifierName: a
    }) => `Duplicate private name #${a}.`,
    RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    RecordNoProto: "'__proto__' is not allowed in Record expressions.",
    RestTrailingComma: "Unexpected trailing comma after rest element.",
    SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
    StaticPrototype: "Classes may not have static property named prototype.",
    SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
    SuperPrivateField: "Private fields can't be accessed on super.",
    TrailingDecorator: "Decorators must be attached to a class element.",
    TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
    UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
    UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
    UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
    UnexpectedKeyword: ({
      keyword: a
    }) => `Unexpected keyword '${a}'.`,
    UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
    UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
    UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
    UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
    UnexpectedPrivateField: "Unexpected private name.",
    UnexpectedReservedWord: ({
      reservedWord: a
    }) => `Unexpected reserved word '${a}'.`,
    UnexpectedSuper: "'super' is only allowed in object methods and classes.",
    UnexpectedToken: ({
      expected: a,
      unexpected: e
    }) => `Unexpected token${e ? ` '${e}'.` : ""}${a ? `, expected "${a}"` : ""}`,
    UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
    UnsupportedBind: "Binding should be performed on object property.",
    UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
    UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
    UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
    UnsupportedMetaProperty: ({
      target: a,
      onlyValidPropertyName: e
    }) => `The only valid meta property for ${a} is ${a}.${e}.`,
    UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
    UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
    UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
    UnterminatedComment: "Unterminated comment.",
    UnterminatedRegExp: "Unterminated regular expression.",
    UnterminatedString: "Unterminated string constant.",
    UnterminatedTemplate: "Unterminated template.",
    VarRedeclaration: ({
      identifierName: a
    }) => `Identifier '${a}' has already been declared.`,
    YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
    YieldInParameter: "Yield expression is not allowed in formal parameters.",
    ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
  },
      Vs = {
    StrictDelete: "Deleting local variable in strict mode.",
    StrictEvalArguments: ({
      referenceName: a
    }) => `Assigning to '${a}' in strict mode.`,
    StrictEvalArgumentsBinding: ({
      bindingName: a
    }) => `Binding '${a}' in strict mode.`,
    StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
    StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
    StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
    StrictWith: "'with' in strict mode."
  },
      $s = new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]),
      qs = {
    PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
    PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
    PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
    PipeTopicUnconfiguredToken: ({
      token: a
    }) => `Invalid topic token ${a}. In order to use ${a} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${a}" }.`,
    PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
    PipeUnparenthesizedBody: ({
      type: a
    }) => `Hack-style pipe body cannot be an unparenthesized ${Xt({
      type: a
    })}; please wrap it in parentheses.`,
    PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
    PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
    PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
    PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
    PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
    PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
  },
      Ks = ["toMessage"],
      Hs = ["message"];

  function Ws(a) {
    let {
      toMessage: e
    } = a,
        t = vt(a, Ks);
    return function s({
      loc: i,
      details: r
    }) {
      return Us(SyntaxError, Object.assign({}, t, {
        loc: i
      }), {
        clone(n = {}) {
          let o = n.loc || {};
          return s({
            loc: new O("line" in o ? o.line : this.loc.line, "column" in o ? o.column : this.loc.column, "index" in o ? o.index : this.loc.index),
            details: Object.assign({}, this.details, n.details)
          });
        },

        details: {
          value: r,
          enumerable: !1
        },
        message: {
          get() {
            return `${e(this.details)} (${this.loc.line}:${this.loc.column})`;
          },

          set(n) {
            Object.defineProperty(this, "message", {
              value: n
            });
          }

        },
        pos: {
          reflect: "loc.index",
          enumerable: !0
        },
        missingPlugin: "missingPlugin" in r && {
          reflect: "details.missingPlugin",
          enumerable: !0
        }
      });
    };
  }

  function R(a, e) {
    if (Array.isArray(a)) return s => R(s, a[0]);
    let t = {};

    for (let s of Object.keys(a)) {
      let i = a[s],
          r = typeof i == "string" ? {
        message: () => i
      } : typeof i == "function" ? {
        message: i
      } : i,
          {
        message: n
      } = r,
          o = vt(r, Hs),
          h = typeof n == "string" ? () => n : n;
      t[s] = Ws(Object.assign({
        code: Jt.SyntaxError,
        reasonCode: s,
        toMessage: h
      }, e ? {
        syntaxPlugin: e
      } : {}, o));
    }

    return t;
  }

  var l = Object.assign({}, R(js), R(zs), R(Vs), R`pipelineOperator`(qs)),
      {
    defineProperty: Js
  } = Object,
      _e = (a, e) => Js(a, e, {
    enumerable: !1,
    value: a[e]
  });

  function lt(a) {
    return a.loc.start && _e(a.loc.start, "index"), a.loc.end && _e(a.loc.end, "index"), a;
  }

  var Xs = a => class extends a {
    parse() {
      let t = lt(super.parse());
      return this.options.tokens && (t.tokens = t.tokens.map(lt)), t;
    }

    parseRegExpLiteral({
      pattern: t,
      flags: s
    }) {
      let i = null;

      try {
        i = new RegExp(t, s);
      } catch {}

      let r = this.estreeParseLiteral(i);
      return r.regex = {
        pattern: t,
        flags: s
      }, r;
    }

    parseBigIntLiteral(t) {
      let s;

      try {
        s = BigInt(t);
      } catch {
        s = null;
      }

      let i = this.estreeParseLiteral(s);
      return i.bigint = String(i.value || t), i;
    }

    parseDecimalLiteral(t) {
      let i = this.estreeParseLiteral(null);
      return i.decimal = String(i.value || t), i;
    }

    estreeParseLiteral(t) {
      return this.parseLiteral(t, "Literal");
    }

    parseStringLiteral(t) {
      return this.estreeParseLiteral(t);
    }

    parseNumericLiteral(t) {
      return this.estreeParseLiteral(t);
    }

    parseNullLiteral() {
      return this.estreeParseLiteral(null);
    }

    parseBooleanLiteral(t) {
      return this.estreeParseLiteral(t);
    }

    directiveToStmt(t) {
      let s = t.value;
      delete t.value, s.type = "Literal", s.raw = s.extra.raw, s.value = s.extra.expressionValue;
      let i = t;
      return i.type = "ExpressionStatement", i.expression = s, i.directive = s.extra.rawValue, delete s.extra, i;
    }

    initFunction(t, s) {
      super.initFunction(t, s), t.expression = !1;
    }

    checkDeclaration(t) {
      t != null && this.isObjectProperty(t) ? this.checkDeclaration(t.value) : super.checkDeclaration(t);
    }

    getObjectOrClassMethodParams(t) {
      return t.value.params;
    }

    isValidDirective(t) {
      var s;
      return t.type === "ExpressionStatement" && t.expression.type === "Literal" && typeof t.expression.value == "string" && !((s = t.expression.extra) != null && s.parenthesized);
    }

    parseBlockBody(t, s, i, r, n) {
      super.parseBlockBody(t, s, i, r, n);
      let o = t.directives.map(h => this.directiveToStmt(h));
      t.body = o.concat(t.body), delete t.directives;
    }

    pushClassMethod(t, s, i, r, n, o) {
      this.parseMethod(s, i, r, n, o, "ClassMethod", !0), s.typeParameters && (s.value.typeParameters = s.typeParameters, delete s.typeParameters), t.body.push(s);
    }

    parsePrivateName() {
      let t = super.parsePrivateName();
      return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(t) : t;
    }

    convertPrivateNameToPrivateIdentifier(t) {
      let s = super.getPrivateNameSV(t);
      return t = t, delete t.id, t.name = s, t.type = "PrivateIdentifier", t;
    }

    isPrivateName(t) {
      return this.getPluginOption("estree", "classFeatures") ? t.type === "PrivateIdentifier" : super.isPrivateName(t);
    }

    getPrivateNameSV(t) {
      return this.getPluginOption("estree", "classFeatures") ? t.name : super.getPrivateNameSV(t);
    }

    parseLiteral(t, s) {
      let i = super.parseLiteral(t, s);
      return i.raw = i.extra.raw, delete i.extra, i;
    }

    parseFunctionBody(t, s, i = !1) {
      super.parseFunctionBody(t, s, i), t.expression = t.body.type !== "BlockStatement";
    }

    parseMethod(t, s, i, r, n, o, h = !1) {
      let c = this.startNode();
      return c.kind = t.kind, c = super.parseMethod(c, s, i, r, n, o, h), c.type = "FunctionExpression", delete c.kind, t.value = c, o === "ClassPrivateMethod" && (t.computed = !1), this.finishNode(t, "MethodDefinition");
    }

    parseClassProperty(...t) {
      let s = super.parseClassProperty(...t);
      return this.getPluginOption("estree", "classFeatures") && (s.type = "PropertyDefinition"), s;
    }

    parseClassPrivateProperty(...t) {
      let s = super.parseClassPrivateProperty(...t);
      return this.getPluginOption("estree", "classFeatures") && (s.type = "PropertyDefinition", s.computed = !1), s;
    }

    parseObjectMethod(t, s, i, r, n) {
      let o = super.parseObjectMethod(t, s, i, r, n);
      return o && (o.type = "Property", o.kind === "method" && (o.kind = "init"), o.shorthand = !1), o;
    }

    parseObjectProperty(t, s, i, r, n) {
      let o = super.parseObjectProperty(t, s, i, r, n);
      return o && (o.kind = "init", o.type = "Property"), o;
    }

    isValidLVal(t, s, i) {
      return t === "Property" ? "value" : super.isValidLVal(t, s, i);
    }

    isAssignable(t, s) {
      return t != null && this.isObjectProperty(t) ? this.isAssignable(t.value, s) : super.isAssignable(t, s);
    }

    toAssignable(t, s = !1) {
      if (t != null && this.isObjectProperty(t)) {
        let {
          key: i,
          value: r
        } = t;
        this.isPrivateName(i) && this.classScope.usePrivateName(this.getPrivateNameSV(i), i.loc.start), this.toAssignable(r, s);
      } else super.toAssignable(t, s);
    }

    toAssignableObjectExpressionProp(t, s, i) {
      t.kind === "get" || t.kind === "set" ? this.raise(l.PatternHasAccessor, {
        at: t.key
      }) : t.method ? this.raise(l.PatternHasMethod, {
        at: t.key
      }) : super.toAssignableObjectExpressionProp(t, s, i);
    }

    finishCallExpression(t, s) {
      let i = super.finishCallExpression(t, s);

      if (i.callee.type === "Import") {
        if (i.type = "ImportExpression", i.source = i.arguments[0], this.hasPlugin("importAssertions")) {
          var r;
          i.attributes = (r = i.arguments[1]) != null ? r : null;
        }

        delete i.arguments, delete i.callee;
      }

      return i;
    }

    toReferencedArguments(t) {
      t.type !== "ImportExpression" && super.toReferencedArguments(t);
    }

    parseExport(t) {
      let s = super.parseExport(t);

      switch (s.type) {
        case "ExportAllDeclaration":
          s.exported = null;
          break;

        case "ExportNamedDeclaration":
          s.specifiers.length === 1 && s.specifiers[0].type === "ExportNamespaceSpecifier" && (s.type = "ExportAllDeclaration", s.exported = s.specifiers[0].exported, delete s.specifiers);
          break;
      }

      return s;
    }

    parseSubscript(t, s, i, r, n) {
      let o = super.parseSubscript(t, s, i, r, n);

      if (n.optionalChainMember) {
        if ((o.type === "OptionalMemberExpression" || o.type === "OptionalCallExpression") && (o.type = o.type.substring(8)), n.stop) {
          let h = this.startNodeAtNode(o);
          return h.expression = o, this.finishNode(h, "ChainExpression");
        }
      } else (o.type === "MemberExpression" || o.type === "CallExpression") && (o.optional = !1);

      return o;
    }

    hasPropertyAsPrivateName(t) {
      return t.type === "ChainExpression" && (t = t.expression), super.hasPropertyAsPrivateName(t);
    }

    isOptionalChain(t) {
      return t.type === "ChainExpression";
    }

    isObjectProperty(t) {
      return t.type === "Property" && t.kind === "init" && !t.method;
    }

    isObjectMethod(t) {
      return t.method || t.kind === "get" || t.kind === "set";
    }

    finishNodeAt(t, s, i) {
      return lt(super.finishNodeAt(t, s, i));
    }

    resetStartLocation(t, s, i) {
      super.resetStartLocation(t, s, i), lt(t);
    }

    resetEndLocation(t, s = this.state.lastTokEndLoc) {
      super.resetEndLocation(t, s), lt(t);
    }

  },
      G = class {
    constructor(e, t) {
      this.token = void 0, this.preserveSpace = void 0, this.token = e, this.preserveSpace = !!t;
    }

  },
      I = {
    brace: new G("{"),
    j_oTag: new G("<tag"),
    j_cTag: new G("</tag"),
    j_expr: new G("<tag>...</tag>", !0)
  };

  I.template = new G("`", !0);
  var T = !0,
      f = !0,
      jt = !0,
      ut = !0,
      $ = !0,
      Gs = !0,
      Lt = class {
    constructor(e, t = {}) {
      this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.rightAssociative = !!t.rightAssociative, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = t.binop != null ? t.binop : null, this.updateContext = null;
    }

  },
      be = new Map();

  function A(a, e = {}) {
    e.keyword = a;
    let t = P(a, e);
    return be.set(a, t), t;
  }

  function k(a, e) {
    return P(a, {
      beforeExpr: T,
      binop: e
    });
  }

  var mt = -1,
      B = [],
      Te = [],
      ge = [],
      Ae = [],
      Se = [],
      we = [];

  function P(a, e = {}) {
    var t, s, i, r;
    return ++mt, Te.push(a), ge.push((t = e.binop) != null ? t : -1), Ae.push((s = e.beforeExpr) != null ? s : !1), Se.push((i = e.startsExpr) != null ? i : !1), we.push((r = e.prefix) != null ? r : !1), B.push(new Lt(a, e)), mt;
  }

  function S(a, e = {}) {
    var t, s, i, r;
    return ++mt, be.set(a, mt), Te.push(a), ge.push((t = e.binop) != null ? t : -1), Ae.push((s = e.beforeExpr) != null ? s : !1), Se.push((i = e.startsExpr) != null ? i : !1), we.push((r = e.prefix) != null ? r : !1), B.push(new Lt("name", e)), mt;
  }

  var Ys = {
    bracketL: P("[", {
      beforeExpr: T,
      startsExpr: f
    }),
    bracketHashL: P("#[", {
      beforeExpr: T,
      startsExpr: f
    }),
    bracketBarL: P("[|", {
      beforeExpr: T,
      startsExpr: f
    }),
    bracketR: P("]"),
    bracketBarR: P("|]"),
    braceL: P("{", {
      beforeExpr: T,
      startsExpr: f
    }),
    braceBarL: P("{|", {
      beforeExpr: T,
      startsExpr: f
    }),
    braceHashL: P("#{", {
      beforeExpr: T,
      startsExpr: f
    }),
    braceR: P("}"),
    braceBarR: P("|}"),
    parenL: P("(", {
      beforeExpr: T,
      startsExpr: f
    }),
    parenR: P(")"),
    comma: P(",", {
      beforeExpr: T
    }),
    semi: P(";", {
      beforeExpr: T
    }),
    colon: P(":", {
      beforeExpr: T
    }),
    doubleColon: P("::", {
      beforeExpr: T
    }),
    dot: P("."),
    question: P("?", {
      beforeExpr: T
    }),
    questionDot: P("?."),
    arrow: P("=>", {
      beforeExpr: T
    }),
    template: P("template"),
    ellipsis: P("...", {
      beforeExpr: T
    }),
    backQuote: P("`", {
      startsExpr: f
    }),
    dollarBraceL: P("${", {
      beforeExpr: T,
      startsExpr: f
    }),
    templateTail: P("...`", {
      startsExpr: f
    }),
    templateNonTail: P("...${", {
      beforeExpr: T,
      startsExpr: f
    }),
    at: P("@"),
    hash: P("#", {
      startsExpr: f
    }),
    interpreterDirective: P("#!..."),
    eq: P("=", {
      beforeExpr: T,
      isAssign: ut
    }),
    assign: P("_=", {
      beforeExpr: T,
      isAssign: ut
    }),
    slashAssign: P("_=", {
      beforeExpr: T,
      isAssign: ut
    }),
    xorAssign: P("_=", {
      beforeExpr: T,
      isAssign: ut
    }),
    moduloAssign: P("_=", {
      beforeExpr: T,
      isAssign: ut
    }),
    incDec: P("++/--", {
      prefix: $,
      postfix: Gs,
      startsExpr: f
    }),
    bang: P("!", {
      beforeExpr: T,
      prefix: $,
      startsExpr: f
    }),
    tilde: P("~", {
      beforeExpr: T,
      prefix: $,
      startsExpr: f
    }),
    doubleCaret: P("^^", {
      startsExpr: f
    }),
    doubleAt: P("@@", {
      startsExpr: f
    }),
    pipeline: k("|>", 0),
    nullishCoalescing: k("??", 1),
    logicalOR: k("||", 1),
    logicalAND: k("&&", 2),
    bitwiseOR: k("|", 3),
    bitwiseXOR: k("^", 4),
    bitwiseAND: k("&", 5),
    equality: k("==/!=/===/!==", 6),
    lt: k("</>/<=/>=", 7),
    gt: k("</>/<=/>=", 7),
    relational: k("</>/<=/>=", 7),
    bitShift: k("<</>>/>>>", 8),
    bitShiftL: k("<</>>/>>>", 8),
    bitShiftR: k("<</>>/>>>", 8),
    plusMin: P("+/-", {
      beforeExpr: T,
      binop: 9,
      prefix: $,
      startsExpr: f
    }),
    modulo: P("%", {
      binop: 10,
      startsExpr: f
    }),
    star: P("*", {
      binop: 10
    }),
    slash: k("/", 10),
    exponent: P("**", {
      beforeExpr: T,
      binop: 11,
      rightAssociative: !0
    }),
    _in: A("in", {
      beforeExpr: T,
      binop: 7
    }),
    _instanceof: A("instanceof", {
      beforeExpr: T,
      binop: 7
    }),
    _break: A("break"),
    _case: A("case", {
      beforeExpr: T
    }),
    _catch: A("catch"),
    _continue: A("continue"),
    _debugger: A("debugger"),
    _default: A("default", {
      beforeExpr: T
    }),
    _else: A("else", {
      beforeExpr: T
    }),
    _finally: A("finally"),
    _function: A("function", {
      startsExpr: f
    }),
    _if: A("if"),
    _return: A("return", {
      beforeExpr: T
    }),
    _switch: A("switch"),
    _throw: A("throw", {
      beforeExpr: T,
      prefix: $,
      startsExpr: f
    }),
    _try: A("try"),
    _var: A("var"),
    _const: A("const"),
    _with: A("with"),
    _new: A("new", {
      beforeExpr: T,
      startsExpr: f
    }),
    _this: A("this", {
      startsExpr: f
    }),
    _super: A("super", {
      startsExpr: f
    }),
    _class: A("class", {
      startsExpr: f
    }),
    _extends: A("extends", {
      beforeExpr: T
    }),
    _export: A("export"),
    _import: A("import", {
      startsExpr: f
    }),
    _null: A("null", {
      startsExpr: f
    }),
    _true: A("true", {
      startsExpr: f
    }),
    _false: A("false", {
      startsExpr: f
    }),
    _typeof: A("typeof", {
      beforeExpr: T,
      prefix: $,
      startsExpr: f
    }),
    _void: A("void", {
      beforeExpr: T,
      prefix: $,
      startsExpr: f
    }),
    _delete: A("delete", {
      beforeExpr: T,
      prefix: $,
      startsExpr: f
    }),
    _do: A("do", {
      isLoop: jt,
      beforeExpr: T
    }),
    _for: A("for", {
      isLoop: jt
    }),
    _while: A("while", {
      isLoop: jt
    }),
    _as: S("as", {
      startsExpr: f
    }),
    _assert: S("assert", {
      startsExpr: f
    }),
    _async: S("async", {
      startsExpr: f
    }),
    _await: S("await", {
      startsExpr: f
    }),
    _from: S("from", {
      startsExpr: f
    }),
    _get: S("get", {
      startsExpr: f
    }),
    _let: S("let", {
      startsExpr: f
    }),
    _meta: S("meta", {
      startsExpr: f
    }),
    _of: S("of", {
      startsExpr: f
    }),
    _sent: S("sent", {
      startsExpr: f
    }),
    _set: S("set", {
      startsExpr: f
    }),
    _static: S("static", {
      startsExpr: f
    }),
    _yield: S("yield", {
      startsExpr: f
    }),
    _asserts: S("asserts", {
      startsExpr: f
    }),
    _checks: S("checks", {
      startsExpr: f
    }),
    _exports: S("exports", {
      startsExpr: f
    }),
    _global: S("global", {
      startsExpr: f
    }),
    _implements: S("implements", {
      startsExpr: f
    }),
    _intrinsic: S("intrinsic", {
      startsExpr: f
    }),
    _infer: S("infer", {
      startsExpr: f
    }),
    _is: S("is", {
      startsExpr: f
    }),
    _mixins: S("mixins", {
      startsExpr: f
    }),
    _proto: S("proto", {
      startsExpr: f
    }),
    _require: S("require", {
      startsExpr: f
    }),
    _keyof: S("keyof", {
      startsExpr: f
    }),
    _readonly: S("readonly", {
      startsExpr: f
    }),
    _unique: S("unique", {
      startsExpr: f
    }),
    _abstract: S("abstract", {
      startsExpr: f
    }),
    _declare: S("declare", {
      startsExpr: f
    }),
    _enum: S("enum", {
      startsExpr: f
    }),
    _module: S("module", {
      startsExpr: f
    }),
    _namespace: S("namespace", {
      startsExpr: f
    }),
    _interface: S("interface", {
      startsExpr: f
    }),
    _type: S("type", {
      startsExpr: f
    }),
    _opaque: S("opaque", {
      startsExpr: f
    }),
    name: P("name", {
      startsExpr: f
    }),
    string: P("string", {
      startsExpr: f
    }),
    num: P("num", {
      startsExpr: f
    }),
    bigint: P("bigint", {
      startsExpr: f
    }),
    decimal: P("decimal", {
      startsExpr: f
    }),
    regexp: P("regexp", {
      startsExpr: f
    }),
    privateName: P("#name", {
      startsExpr: f
    }),
    eof: P("eof"),
    jsxName: P("jsxName"),
    jsxText: P("jsxText", {
      beforeExpr: !0
    }),
    jsxTagStart: P("jsxTagStart", {
      startsExpr: !0
    }),
    jsxTagEnd: P("jsxTagEnd"),
    placeholder: P("%%", {
      startsExpr: !0
    })
  };

  function w(a) {
    return a >= 93 && a <= 128;
  }

  function Qs(a) {
    return a <= 92;
  }

  function j(a) {
    return a >= 58 && a <= 128;
  }

  function es(a) {
    return a >= 58 && a <= 132;
  }

  function Zs(a) {
    return Ae[a];
  }

  function Gt(a) {
    return Se[a];
  }

  function ti(a) {
    return a >= 29 && a <= 33;
  }

  function Re(a) {
    return a >= 125 && a <= 127;
  }

  function ei(a) {
    return a >= 90 && a <= 92;
  }

  function Ce(a) {
    return a >= 58 && a <= 92;
  }

  function si(a) {
    return a >= 39 && a <= 59;
  }

  function ii(a) {
    return a === 34;
  }

  function ri(a) {
    return we[a];
  }

  function ai(a) {
    return a >= 117 && a <= 119;
  }

  function ni(a) {
    return a >= 120 && a <= 126;
  }

  function K(a) {
    return Te[a];
  }

  function It(a) {
    return ge[a];
  }

  function oi(a) {
    return a === 57;
  }

  function Dt(a) {
    return a >= 24 && a <= 25;
  }

  function F(a) {
    return B[a];
  }

  B[8].updateContext = a => {
    a.pop();
  }, B[5].updateContext = B[7].updateContext = B[23].updateContext = a => {
    a.push(I.brace);
  }, B[22].updateContext = a => {
    a[a.length - 1] === I.template ? a.pop() : a.push(I.template);
  }, B[138].updateContext = a => {
    a.push(I.j_expr, I.j_oTag);
  };
  var Ee = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
      ss = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F",
      hi = new RegExp("[" + Ee + "]"),
      ci = new RegExp("[" + Ee + ss + "]");
  Ee = ss = null;
  var is = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191],
      li = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

  function Yt(a, e) {
    let t = 65536;

    for (let s = 0, i = e.length; s < i; s += 2) {
      if (t += e[s], t > a) return !1;
      if (t += e[s + 1], t >= a) return !0;
    }

    return !1;
  }

  function _(a) {
    return a < 65 ? a === 36 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && hi.test(String.fromCharCode(a)) : Yt(a, is);
  }

  function it(a) {
    return a < 48 ? a === 36 : a < 58 ? !0 : a < 65 ? !1 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && ci.test(String.fromCharCode(a)) : Yt(a, is) || Yt(a, li);
  }

  var Ie = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  },
      ui = new Set(Ie.keyword),
      pi = new Set(Ie.strict),
      di = new Set(Ie.strictBind);

  function rs(a, e) {
    return e && a === "await" || a === "enum";
  }

  function as(a, e) {
    return rs(a, e) || pi.has(a);
  }

  function ns(a) {
    return di.has(a);
  }

  function os(a, e) {
    return as(a, e) || ns(a);
  }

  function fi(a) {
    return ui.has(a);
  }

  function mi(a, e, t) {
    return a === 64 && e === 64 && _(t);
  }

  var yi = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);

  function xi(a) {
    return yi.has(a);
  }

  var et = 0,
      yt = 1,
      U = 2,
      Ne = 4,
      hs = 8,
      Mt = 16,
      cs = 32,
      Y = 64,
      Qt = 128,
      rt = 256,
      wt = yt | U | rt,
      V = 1,
      Z = 2,
      ls = 4,
      H = 8,
      Nt = 16,
      us = 64,
      Ot = 128,
      Zt = 256,
      te = 512,
      ke = 1024,
      ee = 2048,
      xt = 4096,
      ps = V | Z | H | Ot,
      Q = V | 0 | H | 0,
      Ft = V | 0 | ls | 0,
      ds = V | 0 | Nt | 0,
      Pi = 0 | Z | 0 | Ot,
      bi = 0 | Z | 0 | 0,
      fs = V | Z | H | Zt,
      Ue = 0 | ke,
      X = 0 | us,
      Ti = V | 0 | 0 | us,
      gi = fs | te,
      Ai = 0 | ke,
      je = 0 | Z | 0 | xt,
      Si = ee,
      Bt = 4,
      ve = 2,
      Le = 1,
      zt = ve | Le,
      wi = ve | Bt,
      Ci = Le | Bt,
      Ei = ve,
      Ii = Le,
      Vt = 0,
      bt = class {
    constructor(e) {
      this.var = new Set(), this.lexical = new Set(), this.functions = new Set(), this.flags = e;
    }

  },
      Tt = class {
    constructor(e, t) {
      this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = new Map(), this.parser = e, this.inModule = t;
    }

    get inFunction() {
      return (this.currentVarScopeFlags() & U) > 0;
    }

    get allowSuper() {
      return (this.currentThisScopeFlags() & Mt) > 0;
    }

    get allowDirectSuper() {
      return (this.currentThisScopeFlags() & cs) > 0;
    }

    get inClass() {
      return (this.currentThisScopeFlags() & Y) > 0;
    }

    get inClassAndNotInNonArrowFunction() {
      let e = this.currentThisScopeFlags();
      return (e & Y) > 0 && (e & U) === 0;
    }

    get inStaticBlock() {
      for (let e = this.scopeStack.length - 1;; e--) {
        let {
          flags: t
        } = this.scopeStack[e];
        if (t & Qt) return !0;
        if (t & (wt | Y)) return !1;
      }
    }

    get inNonArrowFunction() {
      return (this.currentThisScopeFlags() & U) > 0;
    }

    get treatFunctionsAsVar() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }

    createScope(e) {
      return new bt(e);
    }

    enter(e) {
      this.scopeStack.push(this.createScope(e));
    }

    exit() {
      return this.scopeStack.pop().flags;
    }

    treatFunctionsAsVarInScope(e) {
      return !!(e.flags & (U | Qt) || !this.parser.inModule && e.flags & yt);
    }

    declareName(e, t, s) {
      let i = this.currentScope();
      if (t & H || t & Nt) this.checkRedeclarationInScope(i, e, t, s), t & Nt ? i.functions.add(e) : i.lexical.add(e), t & H && this.maybeExportDefined(i, e);else if (t & ls) for (let r = this.scopeStack.length - 1; r >= 0 && (i = this.scopeStack[r], this.checkRedeclarationInScope(i, e, t, s), i.var.add(e), this.maybeExportDefined(i, e), !(i.flags & wt)); --r);
      this.parser.inModule && i.flags & yt && this.undefinedExports.delete(e);
    }

    maybeExportDefined(e, t) {
      this.parser.inModule && e.flags & yt && this.undefinedExports.delete(t);
    }

    checkRedeclarationInScope(e, t, s, i) {
      this.isRedeclaredInScope(e, t, s) && this.parser.raise(l.VarRedeclaration, {
        at: i,
        identifierName: t
      });
    }

    isRedeclaredInScope(e, t, s) {
      return s & V ? s & H ? e.lexical.has(t) || e.functions.has(t) || e.var.has(t) : s & Nt ? e.lexical.has(t) || !this.treatFunctionsAsVarInScope(e) && e.var.has(t) : e.lexical.has(t) && !(e.flags & hs && e.lexical.values().next().value === t) || !this.treatFunctionsAsVarInScope(e) && e.functions.has(t) : !1;
    }

    checkLocalExport(e) {
      let {
        name: t
      } = e,
          s = this.scopeStack[0];
      !s.lexical.has(t) && !s.var.has(t) && !s.functions.has(t) && this.undefinedExports.set(t, e.loc.start);
    }

    currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }

    currentVarScopeFlags() {
      for (let e = this.scopeStack.length - 1;; e--) {
        let {
          flags: t
        } = this.scopeStack[e];
        if (t & wt) return t;
      }
    }

    currentThisScopeFlags() {
      for (let e = this.scopeStack.length - 1;; e--) {
        let {
          flags: t
        } = this.scopeStack[e];
        if (t & (wt | Y) && !(t & Ne)) return t;
      }
    }

  },
      se = class extends bt {
    constructor(...e) {
      super(...e), this.declareFunctions = new Set();
    }

  },
      ie = class extends Tt {
    createScope(e) {
      return new se(e);
    }

    declareName(e, t, s) {
      let i = this.currentScope();

      if (t & ee) {
        this.checkRedeclarationInScope(i, e, t, s), this.maybeExportDefined(i, e), i.declareFunctions.add(e);
        return;
      }

      super.declareName(e, t, s);
    }

    isRedeclaredInScope(e, t, s) {
      return super.isRedeclaredInScope(e, t, s) ? !0 : s & ee ? !e.declareFunctions.has(t) && (e.lexical.has(t) || e.functions.has(t)) : !1;
    }

    checkLocalExport(e) {
      this.scopeStack[0].declareFunctions.has(e.name) || super.checkLocalExport(e);
    }

  },
      re = class {
    constructor() {
      this.sawUnambiguousESM = !1, this.ambiguousScriptDifferentAst = !1;
    }

    hasPlugin(e) {
      if (typeof e == "string") return this.plugins.has(e);
      {
        let [t, s] = e;
        if (!this.hasPlugin(t)) return !1;
        let i = this.plugins.get(t);

        for (let r of Object.keys(s)) if (i?.[r] !== s[r]) return !1;

        return !0;
      }
    }

    getPluginOption(e, t) {
      var s;
      return (s = this.plugins.get(e)) == null ? void 0 : s[t];
    }

  };

  function ms(a, e) {
    a.trailingComments === void 0 ? a.trailingComments = e : a.trailingComments.unshift(...e);
  }

  function Ni(a, e) {
    a.leadingComments === void 0 ? a.leadingComments = e : a.leadingComments.unshift(...e);
  }

  function gt(a, e) {
    a.innerComments === void 0 ? a.innerComments = e : a.innerComments.unshift(...e);
  }

  function pt(a, e, t) {
    let s = null,
        i = e.length;

    for (; s === null && i > 0;) s = e[--i];

    s === null || s.start > t.start ? gt(a, t.comments) : ms(s, t.comments);
  }

  var ae = class extends re {
    addComment(e) {
      this.filename && (e.loc.filename = this.filename), this.state.comments.push(e);
    }

    processComment(e) {
      let {
        commentStack: t
      } = this.state,
          s = t.length;
      if (s === 0) return;
      let i = s - 1,
          r = t[i];
      r.start === e.end && (r.leadingNode = e, i--);
      let {
        start: n
      } = e;

      for (; i >= 0; i--) {
        let o = t[i],
            h = o.end;
        if (h > n) o.containingNode = e, this.finalizeComment(o), t.splice(i, 1);else {
          h === n && (o.trailingNode = e);
          break;
        }
      }
    }

    finalizeComment(e) {
      let {
        comments: t
      } = e;
      if (e.leadingNode !== null || e.trailingNode !== null) e.leadingNode !== null && ms(e.leadingNode, t), e.trailingNode !== null && Ni(e.trailingNode, t);else {
        let {
          containingNode: s,
          start: i
        } = e;
        if (this.input.charCodeAt(i - 1) === 44) switch (s.type) {
          case "ObjectExpression":
          case "ObjectPattern":
          case "RecordExpression":
            pt(s, s.properties, e);
            break;

          case "CallExpression":
          case "OptionalCallExpression":
            pt(s, s.arguments, e);
            break;

          case "FunctionDeclaration":
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "ObjectMethod":
          case "ClassMethod":
          case "ClassPrivateMethod":
            pt(s, s.params, e);
            break;

          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            pt(s, s.elements, e);
            break;

          case "ExportNamedDeclaration":
          case "ImportDeclaration":
            pt(s, s.specifiers, e);
            break;

          default:
            gt(s, t);
        } else gt(s, t);
      }
    }

    finalizeRemainingComments() {
      let {
        commentStack: e
      } = this.state;

      for (let t = e.length - 1; t >= 0; t--) this.finalizeComment(e[t]);

      this.state.commentStack = [];
    }

    resetPreviousNodeTrailingComments(e) {
      let {
        commentStack: t
      } = this.state,
          {
        length: s
      } = t;
      if (s === 0) return;
      let i = t[s - 1];
      i.leadingNode === e && (i.leadingNode = null);
    }

    takeSurroundingComments(e, t, s) {
      let {
        commentStack: i
      } = this.state,
          r = i.length;
      if (r === 0) return;
      let n = r - 1;

      for (; n >= 0; n--) {
        let o = i[n],
            h = o.end;
        if (o.start === s) o.leadingNode = e;else if (h === t) o.trailingNode = e;else if (h < t) break;
      }
    }

  },
      De = /\r\n?|[\n\u2028\u2029]/,
      Ct = new RegExp(De.source, "g");

  function Pt(a) {
    switch (a) {
      case 10:
      case 13:
      case 8232:
      case 8233:
        return !0;

      default:
        return !1;
    }
  }

  var $t = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
      ki = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y,
      ze = new RegExp("(?=(" + ki.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");

  function vi(a) {
    switch (a) {
      case 9:
      case 11:
      case 12:
      case 32:
      case 160:
      case 5760:
      case 8192:
      case 8193:
      case 8194:
      case 8195:
      case 8196:
      case 8197:
      case 8198:
      case 8199:
      case 8200:
      case 8201:
      case 8202:
      case 8239:
      case 8287:
      case 12288:
      case 65279:
        return !0;

      default:
        return !1;
    }
  }

  var At = class {
    constructor() {
      this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = !1, this.inType = !1, this.noAnonFunctionType = !1, this.hasFlowComment = !1, this.isAmbientContext = !1, this.inAbstractClass = !1, this.inDisallowConditionalTypesContext = !1, this.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      }, this.soloAwait = !1, this.inFSharpPipelineDirectBody = !1, this.labels = [], this.decoratorStack = [[]], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 135, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.context = [I.brace], this.canStartJSXElement = !0, this.containsEsc = !1, this.strictErrors = new Map(), this.tokensLength = 0;
    }

    init({
      strictMode: e,
      sourceType: t,
      startLine: s,
      startColumn: i
    }) {
      this.strict = e === !1 ? !1 : e === !0 ? !0 : t === "module", this.curLine = s, this.lineStart = -i, this.startLoc = this.endLoc = new O(s, i, 0);
    }

    curPosition() {
      return new O(this.curLine, this.pos - this.lineStart, this.pos);
    }

    clone(e) {
      let t = new At(),
          s = Object.keys(this);

      for (let i = 0, r = s.length; i < r; i++) {
        let n = s[i],
            o = this[n];
        !e && Array.isArray(o) && (o = o.slice()), t[n] = o;
      }

      return t;
    }

  },
      Li = function (e) {
    return e >= 48 && e <= 57;
  },
      Ve = {
    decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: new Set([46, 88, 95, 120])
  },
      Et = {
    bin: a => a === 48 || a === 49,
    oct: a => a >= 48 && a <= 55,
    dec: a => a >= 48 && a <= 57,
    hex: a => a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102
  };

  function $e(a, e, t, s, i, r) {
    let n = t,
        o = s,
        h = i,
        c = "",
        u = !1,
        p = t,
        {
      length: y
    } = e;

    for (;;) {
      if (t >= y) {
        r.unterminated(n, o, h), c += e.slice(p, t);
        break;
      }

      let d = e.charCodeAt(t);

      if (Di(a, d, e, t)) {
        c += e.slice(p, t);
        break;
      }

      if (d === 92) {
        c += e.slice(p, t);
        let m;
        ({
          ch: m,
          pos: t,
          lineStart: s,
          curLine: i
        } = Mi(e, t, s, i, a === "template", r)), m === null ? u = !0 : c += m, p = t;
      } else d === 8232 || d === 8233 ? (++t, ++i, s = t) : d === 10 || d === 13 ? a === "template" ? (c += e.slice(p, t) + `
`, ++t, d === 13 && e.charCodeAt(t) === 10 && ++t, ++i, p = s = t) : r.unterminated(n, o, h) : ++t;
    }

    return {
      pos: t,
      str: c,
      containsInvalid: u,
      lineStart: s,
      curLine: i
    };
  }

  function Di(a, e, t, s) {
    return a === "template" ? e === 96 || e === 36 && t.charCodeAt(s + 1) === 123 : e === (a === "double" ? 34 : 39);
  }

  function Mi(a, e, t, s, i, r) {
    let n = !i;
    e++;

    let o = c => ({
      pos: e,
      ch: c,
      lineStart: t,
      curLine: s
    }),
        h = a.charCodeAt(e++);

    switch (h) {
      case 110:
        return o(`
`);

      case 114:
        return o("\r");

      case 120:
        {
          let c;
          return ({
            code: c,
            pos: e
          } = ne(a, e, t, s, 2, !1, n, r)), o(c === null ? null : String.fromCharCode(c));
        }

      case 117:
        {
          let c;
          return ({
            code: c,
            pos: e
          } = xs(a, e, t, s, n, r)), o(c === null ? null : String.fromCodePoint(c));
        }

      case 116:
        return o("	");

      case 98:
        return o("\b");

      case 118:
        return o("\v");

      case 102:
        return o("\f");

      case 13:
        a.charCodeAt(e) === 10 && ++e;

      case 10:
        t = e, ++s;

      case 8232:
      case 8233:
        return o("");

      case 56:
      case 57:
        if (i) return o(null);
        r.strictNumericEscape(e - 1, t, s);

      default:
        if (h >= 48 && h <= 55) {
          let c = e - 1,
              p = a.slice(c, e + 2).match(/^[0-7]+/)[0],
              y = parseInt(p, 8);
          y > 255 && (p = p.slice(0, -1), y = parseInt(p, 8)), e += p.length - 1;
          let d = a.charCodeAt(e);

          if (p !== "0" || d === 56 || d === 57) {
            if (i) return o(null);
            r.strictNumericEscape(c, t, s);
          }

          return o(String.fromCharCode(y));
        }

        return o(String.fromCharCode(h));
    }
  }

  function ne(a, e, t, s, i, r, n, o) {
    let h = e,
        c;
    return ({
      n: c,
      pos: e
    } = ys(a, e, t, s, 16, i, r, !1, o)), c === null && (n ? o.invalidEscapeSequence(h, t, s) : e = h - 1), {
      code: c,
      pos: e
    };
  }

  function ys(a, e, t, s, i, r, n, o, h) {
    let c = e,
        u = i === 16 ? Ve.hex : Ve.decBinOct,
        p = i === 16 ? Et.hex : i === 10 ? Et.dec : i === 8 ? Et.oct : Et.bin,
        y = !1,
        d = 0;

    for (let m = 0, C = r ?? 1 / 0; m < C; ++m) {
      let g = a.charCodeAt(e),
          E;

      if (g === 95 && o !== "bail") {
        let v = a.charCodeAt(e - 1),
            D = a.charCodeAt(e + 1);
        o ? (Number.isNaN(D) || !p(D) || u.has(v) || u.has(D)) && h.unexpectedNumericSeparator(e, t, s) : h.numericSeparatorInEscapeSequence(e, t, s), ++e;
        continue;
      }

      if (g >= 97 ? E = g - 97 + 10 : g >= 65 ? E = g - 65 + 10 : Li(g) ? E = g - 48 : E = 1 / 0, E >= i) if (E <= 9 && h.invalidDigit(e, t, s, i)) E = 0;else if (n) E = 0, y = !0;else break;
      ++e, d = d * i + E;
    }

    return e === c || r != null && e - c !== r || y ? {
      n: null,
      pos: e
    } : {
      n: d,
      pos: e
    };
  }

  function xs(a, e, t, s, i, r) {
    let n = a.charCodeAt(e),
        o;

    if (n === 123) {
      if (++e, ({
        code: o,
        pos: e
      } = ne(a, e, t, s, a.indexOf("}", e) - e, !0, i, r)), ++e, o !== null && o > 1114111) if (i) r.invalidCodePoint(e, t, s);else return {
        code: null,
        pos: e
      };
    } else ({
      code: o,
      pos: e
    } = ne(a, e, t, s, 4, !1, i, r));

    return {
      code: o,
      pos: e
    };
  }

  var Oi = ["at"],
      Fi = ["at"];

  function dt(a, e, t) {
    return new O(t, a - e, a);
  }

  var Bi = new Set([103, 109, 115, 105, 121, 117, 100, 118]),
      M = class {
    constructor(e) {
      this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, this.loc = new ot(e.startLoc, e.endLoc);
    }

  },
      oe = class extends ae {
    constructor(e, t) {
      super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = {
        invalidDigit: (s, i, r, n) => this.options.errorRecovery ? (this.raise(l.InvalidDigit, {
          at: dt(s, i, r),
          radix: n
        }), !0) : !1,
        numericSeparatorInEscapeSequence: this.errorBuilder(l.NumericSeparatorInEscapeSequence),
        unexpectedNumericSeparator: this.errorBuilder(l.UnexpectedNumericSeparator)
      }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
        invalidEscapeSequence: this.errorBuilder(l.InvalidEscapeSequence),
        invalidCodePoint: this.errorBuilder(l.InvalidCodePoint)
      }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: (s, i, r) => {
          this.recordStrictModeErrors(l.StrictNumericEscape, {
            at: dt(s, i, r)
          });
        },
        unterminated: (s, i, r) => {
          throw this.raise(l.UnterminatedString, {
            at: dt(s - 1, i, r)
          });
        }
      }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: this.errorBuilder(l.StrictNumericEscape),
        unterminated: (s, i, r) => {
          throw this.raise(l.UnterminatedTemplate, {
            at: dt(s, i, r)
          });
        }
      }), this.state = new At(), this.state.init(e), this.input = t, this.length = t.length, this.isLookahead = !1;
    }

    pushToken(e) {
      this.tokens.length = this.state.tokensLength, this.tokens.push(e), ++this.state.tokensLength;
    }

    next() {
      this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new M(this.state)), this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
    }

    eat(e) {
      return this.match(e) ? (this.next(), !0) : !1;
    }

    match(e) {
      return this.state.type === e;
    }

    createLookaheadState(e) {
      return {
        pos: e.pos,
        value: null,
        type: e.type,
        start: e.start,
        end: e.end,
        context: [this.curContext()],
        inType: e.inType,
        startLoc: e.startLoc,
        lastTokEndLoc: e.lastTokEndLoc,
        curLine: e.curLine,
        lineStart: e.lineStart,
        curPosition: e.curPosition
      };
    }

    lookahead() {
      let e = this.state;
      this.state = this.createLookaheadState(e), this.isLookahead = !0, this.nextToken(), this.isLookahead = !1;
      let t = this.state;
      return this.state = e, t;
    }

    nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos);
    }

    nextTokenStartSince(e) {
      return $t.lastIndex = e, $t.test(this.input) ? $t.lastIndex : e;
    }

    lookaheadCharCode() {
      return this.input.charCodeAt(this.nextTokenStart());
    }

    codePointAtPos(e) {
      let t = this.input.charCodeAt(e);

      if ((t & 64512) === 55296 && ++e < this.input.length) {
        let s = this.input.charCodeAt(e);
        (s & 64512) === 56320 && (t = 65536 + ((t & 1023) << 10) + (s & 1023));
      }

      return t;
    }

    setStrict(e) {
      this.state.strict = e, e && (this.state.strictErrors.forEach(([t, s]) => this.raise(t, {
        at: s
      })), this.state.strictErrors.clear());
    }

    curContext() {
      return this.state.context[this.state.context.length - 1];
    }

    nextToken() {
      if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
        this.finishToken(135);
        return;
      }

      this.getTokenFromCode(this.codePointAtPos(this.state.pos));
    }

    skipBlockComment() {
      let e;
      this.isLookahead || (e = this.state.curPosition());
      let t = this.state.pos,
          s = this.input.indexOf("*/", t + 2);
      if (s === -1) throw this.raise(l.UnterminatedComment, {
        at: this.state.curPosition()
      });

      for (this.state.pos = s + 2, Ct.lastIndex = t + 2; Ct.test(this.input) && Ct.lastIndex <= s;) ++this.state.curLine, this.state.lineStart = Ct.lastIndex;

      if (this.isLookahead) return;
      let i = {
        type: "CommentBlock",
        value: this.input.slice(t + 2, s),
        start: t,
        end: s + 2,
        loc: new ot(e, this.state.curPosition())
      };
      return this.options.tokens && this.pushToken(i), i;
    }

    skipLineComment(e) {
      let t = this.state.pos,
          s;
      this.isLookahead || (s = this.state.curPosition());
      let i = this.input.charCodeAt(this.state.pos += e);
      if (this.state.pos < this.length) for (; !Pt(i) && ++this.state.pos < this.length;) i = this.input.charCodeAt(this.state.pos);
      if (this.isLookahead) return;
      let r = this.state.pos,
          n = this.input.slice(t + e, r),
          o = {
        type: "CommentLine",
        value: n,
        start: t,
        end: r,
        loc: new ot(s, this.state.curPosition())
      };
      return this.options.tokens && this.pushToken(o), o;
    }

    skipSpace() {
      let e = this.state.pos,
          t = [];

      t: for (; this.state.pos < this.length;) {
        let s = this.input.charCodeAt(this.state.pos);

        switch (s) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos;
            break;

          case 13:
            this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;

          case 10:
          case 8232:
          case 8233:
            ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
            break;

          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42:
                {
                  let i = this.skipBlockComment();
                  i !== void 0 && (this.addComment(i), this.options.attachComment && t.push(i));
                  break;
                }

              case 47:
                {
                  let i = this.skipLineComment(2);
                  i !== void 0 && (this.addComment(i), this.options.attachComment && t.push(i));
                  break;
                }

              default:
                break t;
            }

            break;

          default:
            if (vi(s)) ++this.state.pos;else if (s === 45 && !this.inModule) {
              let i = this.state.pos;

              if (this.input.charCodeAt(i + 1) === 45 && this.input.charCodeAt(i + 2) === 62 && (e === 0 || this.state.lineStart > e)) {
                let r = this.skipLineComment(3);
                r !== void 0 && (this.addComment(r), this.options.attachComment && t.push(r));
              } else break t;
            } else if (s === 60 && !this.inModule) {
              let i = this.state.pos;

              if (this.input.charCodeAt(i + 1) === 33 && this.input.charCodeAt(i + 2) === 45 && this.input.charCodeAt(i + 3) === 45) {
                let r = this.skipLineComment(4);
                r !== void 0 && (this.addComment(r), this.options.attachComment && t.push(r));
              } else break t;
            } else break t;
        }
      }

      if (t.length > 0) {
        let s = this.state.pos,
            i = {
          start: e,
          end: s,
          comments: t,
          leadingNode: null,
          trailingNode: null,
          containingNode: null
        };
        this.state.commentStack.push(i);
      }
    }

    finishToken(e, t) {
      this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
      let s = this.state.type;
      this.state.type = e, this.state.value = t, this.isLookahead || this.updateContext(s);
    }

    replaceToken(e) {
      this.state.type = e, this.updateContext();
    }

    readToken_numberSign() {
      if (this.state.pos === 0 && this.readToken_interpreter()) return;
      let e = this.state.pos + 1,
          t = this.codePointAtPos(e);
      if (t >= 48 && t <= 57) throw this.raise(l.UnexpectedDigitAfterHash, {
        at: this.state.curPosition()
      });

      if (t === 123 || t === 91 && this.hasPlugin("recordAndTuple")) {
        if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar") throw this.raise(t === 123 ? l.RecordExpressionHashIncorrectStartSyntaxType : l.TupleExpressionHashIncorrectStartSyntaxType, {
          at: this.state.curPosition()
        });
        this.state.pos += 2, t === 123 ? this.finishToken(7) : this.finishToken(1);
      } else _(t) ? (++this.state.pos, this.finishToken(134, this.readWord1(t))) : t === 92 ? (++this.state.pos, this.finishToken(134, this.readWord1())) : this.finishOp(27, 1);
    }

    readToken_dot() {
      let e = this.input.charCodeAt(this.state.pos + 1);

      if (e >= 48 && e <= 57) {
        this.readNumber(!0);
        return;
      }

      e === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
    }

    readToken_slash() {
      this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
    }

    readToken_interpreter() {
      if (this.state.pos !== 0 || this.length < 2) return !1;
      let e = this.input.charCodeAt(this.state.pos + 1);
      if (e !== 33) return !1;
      let t = this.state.pos;

      for (this.state.pos += 1; !Pt(e) && ++this.state.pos < this.length;) e = this.input.charCodeAt(this.state.pos);

      let s = this.input.slice(t + 2, this.state.pos);
      return this.finishToken(28, s), !0;
    }

    readToken_mult_modulo(e) {
      let t = e === 42 ? 55 : 54,
          s = 1,
          i = this.input.charCodeAt(this.state.pos + 1);
      e === 42 && i === 42 && (s++, i = this.input.charCodeAt(this.state.pos + 2), t = 57), i === 61 && !this.state.inType && (s++, t = e === 37 ? 33 : 30), this.finishOp(t, s);
    }

    readToken_pipe_amp(e) {
      let t = this.input.charCodeAt(this.state.pos + 1);

      if (t === e) {
        this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(e === 124 ? 41 : 42, 2);
        return;
      }

      if (e === 124) {
        if (t === 62) {
          this.finishOp(39, 2);
          return;
        }

        if (this.hasPlugin("recordAndTuple") && t === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(l.RecordExpressionBarIncorrectEndSyntaxType, {
            at: this.state.curPosition()
          });
          this.state.pos += 2, this.finishToken(9);
          return;
        }

        if (this.hasPlugin("recordAndTuple") && t === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(l.TupleExpressionBarIncorrectEndSyntaxType, {
            at: this.state.curPosition()
          });
          this.state.pos += 2, this.finishToken(4);
          return;
        }
      }

      if (t === 61) {
        this.finishOp(30, 2);
        return;
      }

      this.finishOp(e === 124 ? 43 : 45, 1);
    }

    readToken_caret() {
      let e = this.input.charCodeAt(this.state.pos + 1);
      if (e === 61 && !this.state.inType) this.finishOp(32, 2);else if (e === 94 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "^^"
      }])) {
        if (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94) throw this.unexpected();
      } else this.finishOp(44, 1);
    }

    readToken_atSign() {
      this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "@@"
      }]) ? this.finishOp(38, 2) : this.finishOp(26, 1);
    }

    readToken_plus_min(e) {
      let t = this.input.charCodeAt(this.state.pos + 1);

      if (t === e) {
        this.finishOp(34, 2);
        return;
      }

      t === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
    }

    readToken_lt() {
      let {
        pos: e
      } = this.state,
          t = this.input.charCodeAt(e + 1);

      if (t === 60) {
        if (this.input.charCodeAt(e + 2) === 61) {
          this.finishOp(30, 3);
          return;
        }

        this.finishOp(51, 2);
        return;
      }

      if (t === 61) {
        this.finishOp(49, 2);
        return;
      }

      this.finishOp(47, 1);
    }

    readToken_gt() {
      let {
        pos: e
      } = this.state,
          t = this.input.charCodeAt(e + 1);

      if (t === 62) {
        let s = this.input.charCodeAt(e + 2) === 62 ? 3 : 2;

        if (this.input.charCodeAt(e + s) === 61) {
          this.finishOp(30, s + 1);
          return;
        }

        this.finishOp(52, s);
        return;
      }

      if (t === 61) {
        this.finishOp(49, 2);
        return;
      }

      this.finishOp(48, 1);
    }

    readToken_eq_excl(e) {
      let t = this.input.charCodeAt(this.state.pos + 1);

      if (t === 61) {
        this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        return;
      }

      if (e === 61 && t === 62) {
        this.state.pos += 2, this.finishToken(19);
        return;
      }

      this.finishOp(e === 61 ? 29 : 35, 1);
    }

    readToken_question() {
      let e = this.input.charCodeAt(this.state.pos + 1),
          t = this.input.charCodeAt(this.state.pos + 2);
      e === 63 ? t === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : e === 46 && !(t >= 48 && t <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
    }

    getTokenFromCode(e) {
      switch (e) {
        case 46:
          this.readToken_dot();
          return;

        case 40:
          ++this.state.pos, this.finishToken(10);
          return;

        case 41:
          ++this.state.pos, this.finishToken(11);
          return;

        case 59:
          ++this.state.pos, this.finishToken(13);
          return;

        case 44:
          ++this.state.pos, this.finishToken(12);
          return;

        case 91:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(l.TupleExpressionBarIncorrectStartSyntaxType, {
              at: this.state.curPosition()
            });
            this.state.pos += 2, this.finishToken(2);
          } else ++this.state.pos, this.finishToken(0);

          return;

        case 93:
          ++this.state.pos, this.finishToken(3);
          return;

        case 123:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(l.RecordExpressionBarIncorrectStartSyntaxType, {
              at: this.state.curPosition()
            });
            this.state.pos += 2, this.finishToken(6);
          } else ++this.state.pos, this.finishToken(5);

          return;

        case 125:
          ++this.state.pos, this.finishToken(8);
          return;

        case 58:
          this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
          return;

        case 63:
          this.readToken_question();
          return;

        case 96:
          this.readTemplateToken();
          return;

        case 48:
          {
            let t = this.input.charCodeAt(this.state.pos + 1);

            if (t === 120 || t === 88) {
              this.readRadixNumber(16);
              return;
            }

            if (t === 111 || t === 79) {
              this.readRadixNumber(8);
              return;
            }

            if (t === 98 || t === 66) {
              this.readRadixNumber(2);
              return;
            }
          }

        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          this.readNumber(!1);
          return;

        case 34:
        case 39:
          this.readString(e);
          return;

        case 47:
          this.readToken_slash();
          return;

        case 37:
        case 42:
          this.readToken_mult_modulo(e);
          return;

        case 124:
        case 38:
          this.readToken_pipe_amp(e);
          return;

        case 94:
          this.readToken_caret();
          return;

        case 43:
        case 45:
          this.readToken_plus_min(e);
          return;

        case 60:
          this.readToken_lt();
          return;

        case 62:
          this.readToken_gt();
          return;

        case 61:
        case 33:
          this.readToken_eq_excl(e);
          return;

        case 126:
          this.finishOp(36, 1);
          return;

        case 64:
          this.readToken_atSign();
          return;

        case 35:
          this.readToken_numberSign();
          return;

        case 92:
          this.readWord();
          return;

        default:
          if (_(e)) {
            this.readWord(e);
            return;
          }

      }

      throw this.raise(l.InvalidOrUnexpectedToken, {
        at: this.state.curPosition(),
        unexpected: String.fromCodePoint(e)
      });
    }

    finishOp(e, t) {
      let s = this.input.slice(this.state.pos, this.state.pos + t);
      this.state.pos += t, this.finishToken(e, s);
    }

    readRegexp() {
      let e = this.state.startLoc,
          t = this.state.start + 1,
          s,
          i,
          {
        pos: r
      } = this.state;

      for (;; ++r) {
        if (r >= this.length) throw this.raise(l.UnterminatedRegExp, {
          at: L(e, 1)
        });
        let c = this.input.charCodeAt(r);
        if (Pt(c)) throw this.raise(l.UnterminatedRegExp, {
          at: L(e, 1)
        });
        if (s) s = !1;else {
          if (c === 91) i = !0;else if (c === 93 && i) i = !1;else if (c === 47 && !i) break;
          s = c === 92;
        }
      }

      let n = this.input.slice(t, r);
      ++r;

      let o = "",
          h = () => L(e, r + 2 - t);

      for (; r < this.length;) {
        let c = this.codePointAtPos(r),
            u = String.fromCharCode(c);
        if (Bi.has(c)) c === 118 ? (this.expectPlugin("regexpUnicodeSets", h()), o.includes("u") && this.raise(l.IncompatibleRegExpUVFlags, {
          at: h()
        })) : c === 117 && o.includes("v") && this.raise(l.IncompatibleRegExpUVFlags, {
          at: h()
        }), o.includes(u) && this.raise(l.DuplicateRegExpFlags, {
          at: h()
        });else if (it(c) || c === 92) this.raise(l.MalformedRegExpFlags, {
          at: h()
        });else break;
        ++r, o += u;
      }

      this.state.pos = r, this.finishToken(133, {
        pattern: n,
        flags: o
      });
    }

    readInt(e, t, s = !1, i = !0) {
      let {
        n: r,
        pos: n
      } = ys(this.input, this.state.pos, this.state.lineStart, this.state.curLine, e, t, s, i, this.errorHandlers_readInt);
      return this.state.pos = n, r;
    }

    readRadixNumber(e) {
      let t = this.state.curPosition(),
          s = !1;
      this.state.pos += 2;
      let i = this.readInt(e);
      i == null && this.raise(l.InvalidDigit, {
        at: L(t, 2),
        radix: e
      });
      let r = this.input.charCodeAt(this.state.pos);
      if (r === 110) ++this.state.pos, s = !0;else if (r === 109) throw this.raise(l.InvalidDecimal, {
        at: t
      });
      if (_(this.codePointAtPos(this.state.pos))) throw this.raise(l.NumberIdentifier, {
        at: this.state.curPosition()
      });

      if (s) {
        let n = this.input.slice(t.index, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(131, n);
        return;
      }

      this.finishToken(130, i);
    }

    readNumber(e) {
      let t = this.state.pos,
          s = this.state.curPosition(),
          i = !1,
          r = !1,
          n = !1,
          o = !1,
          h = !1;
      !e && this.readInt(10) === null && this.raise(l.InvalidNumber, {
        at: this.state.curPosition()
      });
      let c = this.state.pos - t >= 2 && this.input.charCodeAt(t) === 48;

      if (c) {
        let d = this.input.slice(t, this.state.pos);

        if (this.recordStrictModeErrors(l.StrictOctalLiteral, {
          at: s
        }), !this.state.strict) {
          let m = d.indexOf("_");
          m > 0 && this.raise(l.ZeroDigitNumericSeparator, {
            at: L(s, m)
          });
        }

        h = c && !/[89]/.test(d);
      }

      let u = this.input.charCodeAt(this.state.pos);
      if (u === 46 && !h && (++this.state.pos, this.readInt(10), i = !0, u = this.input.charCodeAt(this.state.pos)), (u === 69 || u === 101) && !h && (u = this.input.charCodeAt(++this.state.pos), (u === 43 || u === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(l.InvalidOrMissingExponent, {
        at: s
      }), i = !0, o = !0, u = this.input.charCodeAt(this.state.pos)), u === 110 && ((i || c) && this.raise(l.InvalidBigIntLiteral, {
        at: s
      }), ++this.state.pos, r = !0), u === 109 && (this.expectPlugin("decimal", this.state.curPosition()), (o || c) && this.raise(l.InvalidDecimal, {
        at: s
      }), ++this.state.pos, n = !0), _(this.codePointAtPos(this.state.pos))) throw this.raise(l.NumberIdentifier, {
        at: this.state.curPosition()
      });
      let p = this.input.slice(t, this.state.pos).replace(/[_mn]/g, "");

      if (r) {
        this.finishToken(131, p);
        return;
      }

      if (n) {
        this.finishToken(132, p);
        return;
      }

      let y = h ? parseInt(p, 8) : parseFloat(p);
      this.finishToken(130, y);
    }

    readCodePoint(e) {
      let {
        code: t,
        pos: s
      } = xs(this.input, this.state.pos, this.state.lineStart, this.state.curLine, e, this.errorHandlers_readCodePoint);
      return this.state.pos = s, t;
    }

    readString(e) {
      let {
        str: t,
        pos: s,
        curLine: i,
        lineStart: r
      } = $e(e === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
      this.state.pos = s + 1, this.state.lineStart = r, this.state.curLine = i, this.finishToken(129, t);
    }

    readTemplateContinuation() {
      this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
    }

    readTemplateToken() {
      let e = this.input[this.state.pos],
          {
        str: t,
        containsInvalid: s,
        pos: i,
        curLine: r,
        lineStart: n
      } = $e("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
      this.state.pos = i + 1, this.state.lineStart = n, this.state.curLine = r, this.input.codePointAt(i) === 96 ? this.finishToken(24, s ? null : e + t + "`") : (this.state.pos++, this.finishToken(25, s ? null : e + t + "${"));
    }

    recordStrictModeErrors(e, {
      at: t
    }) {
      let s = t.index;
      this.state.strict && !this.state.strictErrors.has(s) ? this.raise(e, {
        at: t
      }) : this.state.strictErrors.set(s, [e, t]);
    }

    readWord1(e) {
      this.state.containsEsc = !1;
      let t = "",
          s = this.state.pos,
          i = this.state.pos;

      for (e !== void 0 && (this.state.pos += e <= 65535 ? 1 : 2); this.state.pos < this.length;) {
        let r = this.codePointAtPos(this.state.pos);
        if (it(r)) this.state.pos += r <= 65535 ? 1 : 2;else if (r === 92) {
          this.state.containsEsc = !0, t += this.input.slice(i, this.state.pos);
          let n = this.state.curPosition(),
              o = this.state.pos === s ? _ : it;

          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(l.MissingUnicodeEscape, {
              at: this.state.curPosition()
            }), i = this.state.pos - 1;
            continue;
          }

          ++this.state.pos;
          let h = this.readCodePoint(!0);
          h !== null && (o(h) || this.raise(l.EscapedCharNotAnIdentifier, {
            at: n
          }), t += String.fromCodePoint(h)), i = this.state.pos;
        } else break;
      }

      return t + this.input.slice(i, this.state.pos);
    }

    readWord(e) {
      let t = this.readWord1(e),
          s = be.get(t);
      s !== void 0 ? this.finishToken(s, K(s)) : this.finishToken(128, t);
    }

    checkKeywordEscapes() {
      let {
        type: e
      } = this.state;
      Ce(e) && this.state.containsEsc && this.raise(l.InvalidEscapedReservedWord, {
        at: this.state.startLoc,
        reservedWord: K(e)
      });
    }

    raise(e, t) {
      let {
        at: s
      } = t,
          i = vt(t, Oi),
          r = s instanceof O ? s : s.loc.start,
          n = e({
        loc: r,
        details: i
      });
      if (!this.options.errorRecovery) throw n;
      return this.isLookahead || this.state.errors.push(n), n;
    }

    raiseOverwrite(e, t) {
      let {
        at: s
      } = t,
          i = vt(t, Fi),
          r = s instanceof O ? s : s.loc.start,
          n = r.index,
          o = this.state.errors;

      for (let h = o.length - 1; h >= 0; h--) {
        let c = o[h];
        if (c.loc.index === n) return o[h] = e({
          loc: r,
          details: i
        });
        if (c.loc.index < n) break;
      }

      return this.raise(e, t);
    }

    updateContext(e) {}

    unexpected(e, t) {
      throw this.raise(l.UnexpectedToken, {
        expected: t ? K(t) : null,
        at: e ?? this.state.startLoc
      });
    }

    expectPlugin(e, t) {
      if (this.hasPlugin(e)) return !0;
      throw this.raise(l.MissingPlugin, {
        at: t ?? this.state.startLoc,
        missingPlugin: [e]
      });
    }

    expectOnePlugin(e) {
      if (!e.some(t => this.hasPlugin(t))) throw this.raise(l.MissingOneOfPlugins, {
        at: this.state.startLoc,
        missingPlugin: e
      });
    }

    errorBuilder(e) {
      return (t, s, i) => {
        this.raise(e, {
          at: dt(t, s, i)
        });
      };
    }

  },
      he = class {
    constructor() {
      this.privateNames = new Set(), this.loneAccessors = new Map(), this.undefinedPrivateNames = new Map();
    }

  },
      ce = class {
    constructor(e) {
      this.parser = void 0, this.stack = [], this.undefinedPrivateNames = new Map(), this.parser = e;
    }

    current() {
      return this.stack[this.stack.length - 1];
    }

    enter() {
      this.stack.push(new he());
    }

    exit() {
      let e = this.stack.pop(),
          t = this.current();

      for (let [s, i] of Array.from(e.undefinedPrivateNames)) t ? t.undefinedPrivateNames.has(s) || t.undefinedPrivateNames.set(s, i) : this.parser.raise(l.InvalidPrivateFieldResolution, {
        at: i,
        identifierName: s
      });
    }

    declarePrivateName(e, t, s) {
      let {
        privateNames: i,
        loneAccessors: r,
        undefinedPrivateNames: n
      } = this.current(),
          o = i.has(e);

      if (t & zt) {
        let h = o && r.get(e);

        if (h) {
          let c = h & Bt,
              u = t & Bt,
              p = h & zt,
              y = t & zt;
          o = p === y || c !== u, o || r.delete(e);
        } else o || r.set(e, t);
      }

      o && this.parser.raise(l.PrivateNameRedeclaration, {
        at: s,
        identifierName: e
      }), i.add(e), n.delete(e);
    }

    usePrivateName(e, t) {
      let s;

      for (s of this.stack) if (s.privateNames.has(e)) return;

      s ? s.undefinedPrivateNames.set(e, t) : this.parser.raise(l.InvalidPrivateFieldResolution, {
        at: t,
        identifierName: e
      });
    }

  },
      _i = 0,
      Ps = 1,
      Me = 2,
      bs = 3,
      ht = class {
    constructor(e = _i) {
      this.type = void 0, this.type = e;
    }

    canBeArrowParameterDeclaration() {
      return this.type === Me || this.type === Ps;
    }

    isCertainlyParameterDeclaration() {
      return this.type === bs;
    }

  },
      _t = class extends ht {
    constructor(e) {
      super(e), this.declarationErrors = new Map();
    }

    recordDeclarationError(e, {
      at: t
    }) {
      let s = t.index;
      this.declarationErrors.set(s, [e, t]);
    }

    clearDeclarationError(e) {
      this.declarationErrors.delete(e);
    }

    iterateErrors(e) {
      this.declarationErrors.forEach(e);
    }

  },
      le = class {
    constructor(e) {
      this.parser = void 0, this.stack = [new ht()], this.parser = e;
    }

    enter(e) {
      this.stack.push(e);
    }

    exit() {
      this.stack.pop();
    }

    recordParameterInitializerError(e, {
      at: t
    }) {
      let s = {
        at: t.loc.start
      },
          {
        stack: i
      } = this,
          r = i.length - 1,
          n = i[r];

      for (; !n.isCertainlyParameterDeclaration();) {
        if (n.canBeArrowParameterDeclaration()) n.recordDeclarationError(e, s);else return;
        n = i[--r];
      }

      this.parser.raise(e, s);
    }

    recordArrowParemeterBindingError(e, {
      at: t
    }) {
      let {
        stack: s
      } = this,
          i = s[s.length - 1],
          r = {
        at: t.loc.start
      };
      if (i.isCertainlyParameterDeclaration()) this.parser.raise(e, r);else if (i.canBeArrowParameterDeclaration()) i.recordDeclarationError(e, r);else return;
    }

    recordAsyncArrowParametersError({
      at: e
    }) {
      let {
        stack: t
      } = this,
          s = t.length - 1,
          i = t[s];

      for (; i.canBeArrowParameterDeclaration();) i.type === Me && i.recordDeclarationError(l.AwaitBindingIdentifier, {
        at: e
      }), i = t[--s];
    }

    validateAsPattern() {
      let {
        stack: e
      } = this,
          t = e[e.length - 1];
      !t.canBeArrowParameterDeclaration() || t.iterateErrors(([s, i]) => {
        this.parser.raise(s, {
          at: i
        });
        let r = e.length - 2,
            n = e[r];

        for (; n.canBeArrowParameterDeclaration();) n.clearDeclarationError(i.index), n = e[--r];
      });
    }

  };

  function Ri() {
    return new ht(bs);
  }

  function Ui() {
    return new _t(Ps);
  }

  function ji() {
    return new _t(Me);
  }

  function Ts() {
    return new ht();
  }

  var at = 0,
      gs = 1,
      Ut = 2,
      As = 4,
      tt = 8,
      ue = class {
    constructor() {
      this.stacks = [];
    }

    enter(e) {
      this.stacks.push(e);
    }

    exit() {
      this.stacks.pop();
    }

    currentFlags() {
      return this.stacks[this.stacks.length - 1];
    }

    get hasAwait() {
      return (this.currentFlags() & Ut) > 0;
    }

    get hasYield() {
      return (this.currentFlags() & gs) > 0;
    }

    get hasReturn() {
      return (this.currentFlags() & As) > 0;
    }

    get hasIn() {
      return (this.currentFlags() & tt) > 0;
    }

  };

  function kt(a, e) {
    return (a ? Ut : 0) | (e ? gs : 0);
  }

  var pe = class extends oe {
    addExtra(e, t, s, i = !0) {
      if (!e) return;
      let r = e.extra = e.extra || {};
      i ? r[t] = s : Object.defineProperty(r, t, {
        enumerable: i,
        value: s
      });
    }

    isContextual(e) {
      return this.state.type === e && !this.state.containsEsc;
    }

    isUnparsedContextual(e, t) {
      let s = e + t.length;

      if (this.input.slice(e, s) === t) {
        let i = this.input.charCodeAt(s);
        return !(it(i) || (i & 64512) === 55296);
      }

      return !1;
    }

    isLookaheadContextual(e) {
      let t = this.nextTokenStart();
      return this.isUnparsedContextual(t, e);
    }

    eatContextual(e) {
      return this.isContextual(e) ? (this.next(), !0) : !1;
    }

    expectContextual(e, t) {
      if (!this.eatContextual(e)) throw t != null ? this.raise(t, {
        at: this.state.startLoc
      }) : this.unexpected(null, e);
    }

    canInsertSemicolon() {
      return this.match(135) || this.match(8) || this.hasPrecedingLineBreak();
    }

    hasPrecedingLineBreak() {
      return De.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start));
    }

    hasFollowingLineBreak() {
      return ze.lastIndex = this.state.end, ze.test(this.input);
    }

    isLineTerminator() {
      return this.eat(13) || this.canInsertSemicolon();
    }

    semicolon(e = !0) {
      (e ? this.isLineTerminator() : this.eat(13)) || this.raise(l.MissingSemicolon, {
        at: this.state.lastTokEndLoc
      });
    }

    expect(e, t) {
      this.eat(e) || this.unexpected(t, e);
    }

    tryParse(e, t = this.state.clone()) {
      let s = {
        node: null
      };

      try {
        let i = e((r = null) => {
          throw s.node = r, s;
        });

        if (this.state.errors.length > t.errors.length) {
          let r = this.state;
          return this.state = t, this.state.tokensLength = r.tokensLength, {
            node: i,
            error: r.errors[t.errors.length],
            thrown: !1,
            aborted: !1,
            failState: r
          };
        }

        return {
          node: i,
          error: null,
          thrown: !1,
          aborted: !1,
          failState: null
        };
      } catch (i) {
        let r = this.state;
        if (this.state = t, i instanceof SyntaxError) return {
          node: null,
          error: i,
          thrown: !0,
          aborted: !1,
          failState: r
        };
        if (i === s) return {
          node: s.node,
          error: null,
          thrown: !1,
          aborted: !0,
          failState: r
        };
        throw i;
      }
    }

    checkExpressionErrors(e, t) {
      if (!e) return !1;
      let {
        shorthandAssignLoc: s,
        doubleProtoLoc: i,
        privateKeyLoc: r,
        optionalParametersLoc: n
      } = e,
          o = !!s || !!i || !!n || !!r;
      if (!t) return o;
      s != null && this.raise(l.InvalidCoverInitializedName, {
        at: s
      }), i != null && this.raise(l.DuplicateProto, {
        at: i
      }), r != null && this.raise(l.UnexpectedPrivateField, {
        at: r
      }), n != null && this.unexpected(n);
    }

    isLiteralPropertyName() {
      return es(this.state.type);
    }

    isPrivateName(e) {
      return e.type === "PrivateName";
    }

    getPrivateNameSV(e) {
      return e.id.name;
    }

    hasPropertyAsPrivateName(e) {
      return (e.type === "MemberExpression" || e.type === "OptionalMemberExpression") && this.isPrivateName(e.property);
    }

    isOptionalChain(e) {
      return e.type === "OptionalMemberExpression" || e.type === "OptionalCallExpression";
    }

    isObjectProperty(e) {
      return e.type === "ObjectProperty";
    }

    isObjectMethod(e) {
      return e.type === "ObjectMethod";
    }

    initializeScopes(e = this.options.sourceType === "module") {
      let t = this.state.labels;
      this.state.labels = [];
      let s = this.exportedIdentifiers;
      this.exportedIdentifiers = new Set();
      let i = this.inModule;
      this.inModule = e;
      let r = this.scope,
          n = this.getScopeHandler();
      this.scope = new n(this, e);
      let o = this.prodParam;
      this.prodParam = new ue();
      let h = this.classScope;
      this.classScope = new ce(this);
      let c = this.expressionScope;
      return this.expressionScope = new le(this), () => {
        this.state.labels = t, this.exportedIdentifiers = s, this.inModule = i, this.scope = r, this.prodParam = o, this.classScope = h, this.expressionScope = c;
      };
    }

    enterInitialScopes() {
      let e = at;
      this.inModule && (e |= Ut), this.scope.enter(yt), this.prodParam.enter(e);
    }

    checkDestructuringPrivate(e) {
      let {
        privateKeyLoc: t
      } = e;
      t !== null && this.expectPlugin("destructuringPrivate", t);
    }

  },
      nt = class {
    constructor() {
      this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null;
    }

  },
      ct = class {
    constructor(e, t, s) {
      this.type = "", this.start = t, this.end = 0, this.loc = new ot(s), e != null && e.options.ranges && (this.range = [t, 0]), e != null && e.filename && (this.loc.filename = e.filename);
    }

  },
      Oe = ct.prototype;

  Oe.__clone = function () {
    let a = new ct(void 0, this.start, this.loc.start),
        e = Object.keys(this);

    for (let t = 0, s = e.length; t < s; t++) {
      let i = e[t];
      i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (a[i] = this[i]);
    }

    return a;
  };

  function zi(a) {
    return z(a);
  }

  function z(a) {
    let {
      type: e,
      start: t,
      end: s,
      loc: i,
      range: r,
      extra: n,
      name: o
    } = a,
        h = Object.create(Oe);
    return h.type = e, h.start = t, h.end = s, h.loc = i, h.range = r, h.extra = n, h.name = o, e === "Placeholder" && (h.expectedNode = a.expectedNode), h;
  }

  function Vi(a) {
    let {
      type: e,
      start: t,
      end: s,
      loc: i,
      range: r,
      extra: n
    } = a;
    if (e === "Placeholder") return zi(a);
    let o = Object.create(Oe);
    return o.type = e, o.start = t, o.end = s, o.loc = i, o.range = r, a.raw !== void 0 ? o.raw = a.raw : o.extra = n, o.value = a.value, o;
  }

  var de = class extends pe {
    startNode() {
      return new ct(this, this.state.start, this.state.startLoc);
    }

    startNodeAt(e, t) {
      return new ct(this, e, t);
    }

    startNodeAtNode(e) {
      return this.startNodeAt(e.start, e.loc.start);
    }

    finishNode(e, t) {
      return this.finishNodeAt(e, t, this.state.lastTokEndLoc);
    }

    finishNodeAt(e, t, s) {
      return e.type = t, e.end = s.index, e.loc.end = s, this.options.ranges && (e.range[1] = s.index), this.options.attachComment && this.processComment(e), e;
    }

    resetStartLocation(e, t, s) {
      e.start = t, e.loc.start = s, this.options.ranges && (e.range[0] = t);
    }

    resetEndLocation(e, t = this.state.lastTokEndLoc) {
      e.end = t.index, e.loc.end = t, this.options.ranges && (e.range[1] = t.index);
    }

    resetStartLocationFromNode(e, t) {
      this.resetStartLocation(e, t.start, t.loc.start);
    }

  },
      $i = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]),
      b = R`flow`({
    AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
    AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
    AssignReservedType: ({
      reservedType: a
    }) => `Cannot overwrite reserved type ${a}.`,
    DeclareClassElement: "The `declare` modifier can only appear on class fields.",
    DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
    DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
    EnumBooleanMemberNotInitialized: ({
      memberName: a,
      enumName: e
    }) => `Boolean enum members need to be initialized. Use either \`${a} = true,\` or \`${a} = false,\` in enum \`${e}\`.`,
    EnumDuplicateMemberName: ({
      memberName: a,
      enumName: e
    }) => `Enum member names need to be unique, but the name \`${a}\` has already been used before in enum \`${e}\`.`,
    EnumInconsistentMemberValues: ({
      enumName: a
    }) => `Enum \`${a}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,
    EnumInvalidExplicitType: ({
      invalidEnumType: a,
      enumName: e
    }) => `Enum type \`${a}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${e}\`.`,
    EnumInvalidExplicitTypeUnknownSupplied: ({
      enumName: a
    }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${a}\`.`,
    EnumInvalidMemberInitializerPrimaryType: ({
      enumName: a,
      memberName: e,
      explicitType: t
    }) => `Enum \`${a}\` has type \`${t}\`, so the initializer of \`${e}\` needs to be a ${t} literal.`,
    EnumInvalidMemberInitializerSymbolType: ({
      enumName: a,
      memberName: e
    }) => `Symbol enum members cannot be initialized. Use \`${e},\` in enum \`${a}\`.`,
    EnumInvalidMemberInitializerUnknownType: ({
      enumName: a,
      memberName: e
    }) => `The enum member initializer for \`${e}\` needs to be a literal (either a boolean, number, or string) in enum \`${a}\`.`,
    EnumInvalidMemberName: ({
      enumName: a,
      memberName: e,
      suggestion: t
    }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${e}\`, consider using \`${t}\`, in enum \`${a}\`.`,
    EnumNumberMemberNotInitialized: ({
      enumName: a,
      memberName: e
    }) => `Number enum members need to be initialized, e.g. \`${e} = 1\` in enum \`${a}\`.`,
    EnumStringMemberInconsistentlyInitailized: ({
      enumName: a
    }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${a}\`.`,
    GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
    ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
    InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
    InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
    InexactVariance: "Explicit inexact syntax cannot have variance.",
    InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
    MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
    NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
    NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
    PatternIsOptional: Object.assign({
      message: "A binding pattern parameter cannot be optional in an implementation signature."
    }, {
      reasonCode: "OptionalBindingPattern"
    }),
    SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
    SpreadVariance: "Spread properties cannot have variance.",
    ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
    ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
    ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
    ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
    ThisParamNoDefault: "The `this` parameter may not have a default value.",
    TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
    TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
    UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
    UnexpectedReservedType: ({
      reservedType: a
    }) => `Unexpected reserved type ${a}.`,
    UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
    UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
    UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
    UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
    UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
    UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
    UnsupportedDeclareExportKind: ({
      unsupportedExportKind: a,
      suggestion: e
    }) => `\`declare export ${a}\` is not supported. Use \`${e}\` instead.`,
    UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
    UnterminatedFlowComment: "Unterminated flow-comment."
  });

  function qi(a) {
    return a.type === "DeclareExportAllDeclaration" || a.type === "DeclareExportDeclaration" && (!a.declaration || a.declaration.type !== "TypeAlias" && a.declaration.type !== "InterfaceDeclaration");
  }

  function qt(a) {
    return a.importKind === "type" || a.importKind === "typeof";
  }

  function qe(a) {
    return j(a) && a !== 97;
  }

  var Ki = {
    const: "declare export var",
    let: "declare export var",
    type: "export type",
    interface: "export interface"
  };

  function Hi(a, e) {
    let t = [],
        s = [];

    for (let i = 0; i < a.length; i++) (e(a[i], i, a) ? t : s).push(a[i]);

    return [t, s];
  }

  var Wi = /\*?\s*@((?:no)?flow)\b/,
      Ji = a => class extends a {
    constructor(...t) {
      super(...t), this.flowPragma = void 0;
    }

    getScopeHandler() {
      return ie;
    }

    shouldParseTypes() {
      return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
    }

    shouldParseEnums() {
      return !!this.getPluginOption("flow", "enums");
    }

    finishToken(t, s) {
      return t !== 129 && t !== 13 && t !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(t, s);
    }

    addComment(t) {
      if (this.flowPragma === void 0) {
        let s = Wi.exec(t.value);
        if (s) if (s[1] === "flow") this.flowPragma = "flow";else if (s[1] === "noflow") this.flowPragma = "noflow";else throw new Error("Unexpected flow pragma");
      }

      return super.addComment(t);
    }

    flowParseTypeInitialiser(t) {
      let s = this.state.inType;
      this.state.inType = !0, this.expect(t || 14);
      let i = this.flowParseType();
      return this.state.inType = s, i;
    }

    flowParsePredicate() {
      let t = this.startNode(),
          s = this.state.startLoc;
      return this.next(), this.expectContextual(107), this.state.lastTokStart > s.index + 1 && this.raise(b.UnexpectedSpaceBetweenModuloChecks, {
        at: s
      }), this.eat(10) ? (t.value = super.parseExpression(), this.expect(11), this.finishNode(t, "DeclaredPredicate")) : this.finishNode(t, "InferredPredicate");
    }

    flowParseTypeAndPredicateInitialiser() {
      let t = this.state.inType;
      this.state.inType = !0, this.expect(14);
      let s = null,
          i = null;
      return this.match(54) ? (this.state.inType = t, i = this.flowParsePredicate()) : (s = this.flowParseType(), this.state.inType = t, this.match(54) && (i = this.flowParsePredicate())), [s, i];
    }

    flowParseDeclareClass(t) {
      return this.next(), this.flowParseInterfaceish(t, !0), this.finishNode(t, "DeclareClass");
    }

    flowParseDeclareFunction(t) {
      this.next();
      let s = t.id = this.parseIdentifier(),
          i = this.startNode(),
          r = this.startNode();
      this.match(47) ? i.typeParameters = this.flowParseTypeParameterDeclaration() : i.typeParameters = null, this.expect(10);
      let n = this.flowParseFunctionTypeParams();
      return i.params = n.params, i.rest = n.rest, i.this = n._this, this.expect(11), [i.returnType, t.predicate] = this.flowParseTypeAndPredicateInitialiser(), r.typeAnnotation = this.finishNode(i, "FunctionTypeAnnotation"), s.typeAnnotation = this.finishNode(r, "TypeAnnotation"), this.resetEndLocation(s), this.semicolon(), this.scope.declareName(t.id.name, Si, t.id.loc.start), this.finishNode(t, "DeclareFunction");
    }

    flowParseDeclare(t, s) {
      if (this.match(80)) return this.flowParseDeclareClass(t);
      if (this.match(68)) return this.flowParseDeclareFunction(t);
      if (this.match(74)) return this.flowParseDeclareVariable(t);
      if (this.eatContextual(123)) return this.match(16) ? this.flowParseDeclareModuleExports(t) : (s && this.raise(b.NestedDeclareModule, {
        at: this.state.lastTokStartLoc
      }), this.flowParseDeclareModule(t));
      if (this.isContextual(126)) return this.flowParseDeclareTypeAlias(t);
      if (this.isContextual(127)) return this.flowParseDeclareOpaqueType(t);
      if (this.isContextual(125)) return this.flowParseDeclareInterface(t);
      if (this.match(82)) return this.flowParseDeclareExportDeclaration(t, s);
      throw this.unexpected();
    }

    flowParseDeclareVariable(t) {
      return this.next(), t.id = this.flowParseTypeAnnotatableIdentifier(!0), this.scope.declareName(t.id.name, Ft, t.id.loc.start), this.semicolon(), this.finishNode(t, "DeclareVariable");
    }

    flowParseDeclareModule(t) {
      this.scope.enter(et), this.match(129) ? t.id = super.parseExprAtom() : t.id = this.parseIdentifier();
      let s = t.body = this.startNode(),
          i = s.body = [];

      for (this.expect(5); !this.match(8);) {
        let o = this.startNode();
        this.match(83) ? (this.next(), !this.isContextual(126) && !this.match(87) && this.raise(b.InvalidNonTypeImportInDeclareModule, {
          at: this.state.lastTokStartLoc
        }), super.parseImport(o)) : (this.expectContextual(121, b.UnsupportedStatementInDeclareModule), o = this.flowParseDeclare(o, !0)), i.push(o);
      }

      this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
      let r = null,
          n = !1;
      return i.forEach(o => {
        qi(o) ? (r === "CommonJS" && this.raise(b.AmbiguousDeclareModuleKind, {
          at: o
        }), r = "ES") : o.type === "DeclareModuleExports" && (n && this.raise(b.DuplicateDeclareModuleExports, {
          at: o
        }), r === "ES" && this.raise(b.AmbiguousDeclareModuleKind, {
          at: o
        }), r = "CommonJS", n = !0);
      }), t.kind = r || "CommonJS", this.finishNode(t, "DeclareModule");
    }

    flowParseDeclareExportDeclaration(t, s) {
      if (this.expect(82), this.eat(65)) return this.match(68) || this.match(80) ? t.declaration = this.flowParseDeclare(this.startNode()) : (t.declaration = this.flowParseType(), this.semicolon()), t.default = !0, this.finishNode(t, "DeclareExportDeclaration");

      if (this.match(75) || this.isLet() || (this.isContextual(126) || this.isContextual(125)) && !s) {
        let i = this.state.value;
        throw this.raise(b.UnsupportedDeclareExportKind, {
          at: this.state.startLoc,
          unsupportedExportKind: i,
          suggestion: Ki[i]
        });
      }

      if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(127)) return t.declaration = this.flowParseDeclare(this.startNode()), t.default = !1, this.finishNode(t, "DeclareExportDeclaration");
      if (this.match(55) || this.match(5) || this.isContextual(125) || this.isContextual(126) || this.isContextual(127)) return t = this.parseExport(t), t.type === "ExportNamedDeclaration" && (t.type = "ExportDeclaration", t.default = !1, delete t.exportKind), t.type = "Declare" + t.type, t;
      throw this.unexpected();
    }

    flowParseDeclareModuleExports(t) {
      return this.next(), this.expectContextual(108), t.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(t, "DeclareModuleExports");
    }

    flowParseDeclareTypeAlias(t) {
      this.next();
      let s = this.flowParseTypeAlias(t);
      return s.type = "DeclareTypeAlias", s;
    }

    flowParseDeclareOpaqueType(t) {
      this.next();
      let s = this.flowParseOpaqueType(t, !0);
      return s.type = "DeclareOpaqueType", s;
    }

    flowParseDeclareInterface(t) {
      return this.next(), this.flowParseInterfaceish(t), this.finishNode(t, "DeclareInterface");
    }

    flowParseInterfaceish(t, s = !1) {
      if (t.id = this.flowParseRestrictedIdentifier(!s, !0), this.scope.declareName(t.id.name, s ? ds : Q, t.id.loc.start), this.match(47) ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.extends = [], t.implements = [], t.mixins = [], this.eat(81)) do t.extends.push(this.flowParseInterfaceExtends()); while (!s && this.eat(12));

      if (this.isContextual(114)) {
        this.next();

        do t.mixins.push(this.flowParseInterfaceExtends()); while (this.eat(12));
      }

      if (this.isContextual(110)) {
        this.next();

        do t.implements.push(this.flowParseInterfaceExtends()); while (this.eat(12));
      }

      t.body = this.flowParseObjectType({
        allowStatic: s,
        allowExact: !1,
        allowSpread: !1,
        allowProto: s,
        allowInexact: !1
      });
    }

    flowParseInterfaceExtends() {
      let t = this.startNode();
      return t.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? t.typeParameters = this.flowParseTypeParameterInstantiation() : t.typeParameters = null, this.finishNode(t, "InterfaceExtends");
    }

    flowParseInterface(t) {
      return this.flowParseInterfaceish(t), this.finishNode(t, "InterfaceDeclaration");
    }

    checkNotUnderscore(t) {
      t === "_" && this.raise(b.UnexpectedReservedUnderscore, {
        at: this.state.startLoc
      });
    }

    checkReservedType(t, s, i) {
      !$i.has(t) || this.raise(i ? b.AssignReservedType : b.UnexpectedReservedType, {
        at: s,
        reservedType: t
      });
    }

    flowParseRestrictedIdentifier(t, s) {
      return this.checkReservedType(this.state.value, this.state.startLoc, s), this.parseIdentifier(t);
    }

    flowParseTypeAlias(t) {
      return t.id = this.flowParseRestrictedIdentifier(!1, !0), this.scope.declareName(t.id.name, Q, t.id.loc.start), this.match(47) ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(t, "TypeAlias");
    }

    flowParseOpaqueType(t, s) {
      return this.expectContextual(126), t.id = this.flowParseRestrictedIdentifier(!0, !0), this.scope.declareName(t.id.name, Q, t.id.loc.start), this.match(47) ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.supertype = null, this.match(14) && (t.supertype = this.flowParseTypeInitialiser(14)), t.impltype = null, s || (t.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(t, "OpaqueType");
    }

    flowParseTypeParameter(t = !1) {
      let s = this.state.startLoc,
          i = this.startNode(),
          r = this.flowParseVariance(),
          n = this.flowParseTypeAnnotatableIdentifier();
      return i.name = n.name, i.variance = r, i.bound = n.typeAnnotation, this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : t && this.raise(b.MissingTypeParamDefault, {
        at: s
      }), this.finishNode(i, "TypeParameter");
    }

    flowParseTypeParameterDeclaration() {
      let t = this.state.inType,
          s = this.startNode();
      s.params = [], this.state.inType = !0, this.match(47) || this.match(138) ? this.next() : this.unexpected();
      let i = !1;

      do {
        let r = this.flowParseTypeParameter(i);
        s.params.push(r), r.default && (i = !0), this.match(48) || this.expect(12);
      } while (!this.match(48));

      return this.expect(48), this.state.inType = t, this.finishNode(s, "TypeParameterDeclaration");
    }

    flowParseTypeParameterInstantiation() {
      let t = this.startNode(),
          s = this.state.inType;
      t.params = [], this.state.inType = !0, this.expect(47);
      let i = this.state.noAnonFunctionType;

      for (this.state.noAnonFunctionType = !1; !this.match(48);) t.params.push(this.flowParseType()), this.match(48) || this.expect(12);

      return this.state.noAnonFunctionType = i, this.expect(48), this.state.inType = s, this.finishNode(t, "TypeParameterInstantiation");
    }

    flowParseTypeParameterInstantiationCallOrNew() {
      let t = this.startNode(),
          s = this.state.inType;

      for (t.params = [], this.state.inType = !0, this.expect(47); !this.match(48);) t.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);

      return this.expect(48), this.state.inType = s, this.finishNode(t, "TypeParameterInstantiation");
    }

    flowParseInterfaceType() {
      let t = this.startNode();
      if (this.expectContextual(125), t.extends = [], this.eat(81)) do t.extends.push(this.flowParseInterfaceExtends()); while (this.eat(12));
      return t.body = this.flowParseObjectType({
        allowStatic: !1,
        allowExact: !1,
        allowSpread: !1,
        allowProto: !1,
        allowInexact: !1
      }), this.finishNode(t, "InterfaceTypeAnnotation");
    }

    flowParseObjectPropertyKey() {
      return this.match(130) || this.match(129) ? super.parseExprAtom() : this.parseIdentifier(!0);
    }

    flowParseObjectTypeIndexer(t, s, i) {
      return t.static = s, this.lookahead().type === 14 ? (t.id = this.flowParseObjectPropertyKey(), t.key = this.flowParseTypeInitialiser()) : (t.id = null, t.key = this.flowParseType()), this.expect(3), t.value = this.flowParseTypeInitialiser(), t.variance = i, this.finishNode(t, "ObjectTypeIndexer");
    }

    flowParseObjectTypeInternalSlot(t, s) {
      return t.static = s, t.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (t.method = !0, t.optional = !1, t.value = this.flowParseObjectTypeMethodish(this.startNodeAt(t.start, t.loc.start))) : (t.method = !1, this.eat(17) && (t.optional = !0), t.value = this.flowParseTypeInitialiser()), this.finishNode(t, "ObjectTypeInternalSlot");
    }

    flowParseObjectTypeMethodish(t) {
      for (t.params = [], t.rest = null, t.typeParameters = null, t.this = null, this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (t.this = this.flowParseFunctionTypeParam(!0), t.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) t.params.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);

      return this.eat(21) && (t.rest = this.flowParseFunctionTypeParam(!1)), this.expect(11), t.returnType = this.flowParseTypeInitialiser(), this.finishNode(t, "FunctionTypeAnnotation");
    }

    flowParseObjectTypeCallProperty(t, s) {
      let i = this.startNode();
      return t.static = s, t.value = this.flowParseObjectTypeMethodish(i), this.finishNode(t, "ObjectTypeCallProperty");
    }

    flowParseObjectType({
      allowStatic: t,
      allowExact: s,
      allowSpread: i,
      allowProto: r,
      allowInexact: n
    }) {
      let o = this.state.inType;
      this.state.inType = !0;
      let h = this.startNode();
      h.callProperties = [], h.properties = [], h.indexers = [], h.internalSlots = [];
      let c,
          u,
          p = !1;

      for (s && this.match(6) ? (this.expect(6), c = 9, u = !0) : (this.expect(5), c = 8, u = !1), h.exact = u; !this.match(c);) {
        let d = !1,
            m = null,
            C = null,
            g = this.startNode();

        if (r && this.isContextual(115)) {
          let v = this.lookahead();
          v.type !== 14 && v.type !== 17 && (this.next(), m = this.state.startLoc, t = !1);
        }

        if (t && this.isContextual(104)) {
          let v = this.lookahead();
          v.type !== 14 && v.type !== 17 && (this.next(), d = !0);
        }

        let E = this.flowParseVariance();
        if (this.eat(0)) m != null && this.unexpected(m), this.eat(0) ? (E && this.unexpected(E.loc.start), h.internalSlots.push(this.flowParseObjectTypeInternalSlot(g, d))) : h.indexers.push(this.flowParseObjectTypeIndexer(g, d, E));else if (this.match(10) || this.match(47)) m != null && this.unexpected(m), E && this.unexpected(E.loc.start), h.callProperties.push(this.flowParseObjectTypeCallProperty(g, d));else {
          let v = "init";

          if (this.isContextual(98) || this.isContextual(103)) {
            let ks = this.lookahead();
            es(ks.type) && (v = this.state.value, this.next());
          }

          let D = this.flowParseObjectTypeProperty(g, d, m, E, v, i, n ?? !u);
          D === null ? (p = !0, C = this.state.lastTokStartLoc) : h.properties.push(D);
        }
        this.flowObjectTypeSemicolon(), C && !this.match(8) && !this.match(9) && this.raise(b.UnexpectedExplicitInexactInObject, {
          at: C
        });
      }

      this.expect(c), i && (h.inexact = p);
      let y = this.finishNode(h, "ObjectTypeAnnotation");
      return this.state.inType = o, y;
    }

    flowParseObjectTypeProperty(t, s, i, r, n, o, h) {
      if (this.eat(21)) return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (o ? h || this.raise(b.InexactInsideExact, {
        at: this.state.lastTokStartLoc
      }) : this.raise(b.InexactInsideNonObject, {
        at: this.state.lastTokStartLoc
      }), r && this.raise(b.InexactVariance, {
        at: r
      }), null) : (o || this.raise(b.UnexpectedSpreadType, {
        at: this.state.lastTokStartLoc
      }), i != null && this.unexpected(i), r && this.raise(b.SpreadVariance, {
        at: r
      }), t.argument = this.flowParseType(), this.finishNode(t, "ObjectTypeSpreadProperty"));
      {
        t.key = this.flowParseObjectPropertyKey(), t.static = s, t.proto = i != null, t.kind = n;
        let c = !1;
        return this.match(47) || this.match(10) ? (t.method = !0, i != null && this.unexpected(i), r && this.unexpected(r.loc.start), t.value = this.flowParseObjectTypeMethodish(this.startNodeAt(t.start, t.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(t), !o && t.key.name === "constructor" && t.value.this && this.raise(b.ThisParamBannedInConstructor, {
          at: t.value.this
        })) : (n !== "init" && this.unexpected(), t.method = !1, this.eat(17) && (c = !0), t.value = this.flowParseTypeInitialiser(), t.variance = r), t.optional = c, this.finishNode(t, "ObjectTypeProperty");
      }
    }

    flowCheckGetterSetterParams(t) {
      let s = t.kind === "get" ? 0 : 1,
          i = t.value.params.length + (t.value.rest ? 1 : 0);
      t.value.this && this.raise(t.kind === "get" ? b.GetterMayNotHaveThisParam : b.SetterMayNotHaveThisParam, {
        at: t.value.this
      }), i !== s && this.raise(t.kind === "get" ? l.BadGetterArity : l.BadSetterArity, {
        at: t
      }), t.kind === "set" && t.value.rest && this.raise(l.BadSetterRestParameter, {
        at: t
      });
    }

    flowObjectTypeSemicolon() {
      !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
    }

    flowParseQualifiedTypeIdentifier(t, s, i) {
      t = t || this.state.start, s = s || this.state.startLoc;
      let r = i || this.flowParseRestrictedIdentifier(!0);

      for (; this.eat(16);) {
        let n = this.startNodeAt(t, s);
        n.qualification = r, n.id = this.flowParseRestrictedIdentifier(!0), r = this.finishNode(n, "QualifiedTypeIdentifier");
      }

      return r;
    }

    flowParseGenericType(t, s, i) {
      let r = this.startNodeAt(t, s);
      return r.typeParameters = null, r.id = this.flowParseQualifiedTypeIdentifier(t, s, i), this.match(47) && (r.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(r, "GenericTypeAnnotation");
    }

    flowParseTypeofType() {
      let t = this.startNode();
      return this.expect(87), t.argument = this.flowParsePrimaryType(), this.finishNode(t, "TypeofTypeAnnotation");
    }

    flowParseTupleType() {
      let t = this.startNode();

      for (t.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (t.types.push(this.flowParseType()), !this.match(3));) this.expect(12);

      return this.expect(3), this.finishNode(t, "TupleTypeAnnotation");
    }

    flowParseFunctionTypeParam(t) {
      let s = null,
          i = !1,
          r = null,
          n = this.startNode(),
          o = this.lookahead(),
          h = this.state.type === 78;
      return o.type === 14 || o.type === 17 ? (h && !t && this.raise(b.ThisParamMustBeFirst, {
        at: n
      }), s = this.parseIdentifier(h), this.eat(17) && (i = !0, h && this.raise(b.ThisParamMayNotBeOptional, {
        at: n
      })), r = this.flowParseTypeInitialiser()) : r = this.flowParseType(), n.name = s, n.optional = i, n.typeAnnotation = r, this.finishNode(n, "FunctionTypeParam");
    }

    reinterpretTypeAsFunctionTypeParam(t) {
      let s = this.startNodeAt(t.start, t.loc.start);
      return s.name = null, s.optional = !1, s.typeAnnotation = t, this.finishNode(s, "FunctionTypeParam");
    }

    flowParseFunctionTypeParams(t = []) {
      let s = null,
          i = null;

      for (this.match(78) && (i = this.flowParseFunctionTypeParam(!0), i.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) t.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);

      return this.eat(21) && (s = this.flowParseFunctionTypeParam(!1)), {
        params: t,
        rest: s,
        _this: i
      };
    }

    flowIdentToTypeAnnotation(t, s, i, r) {
      switch (r.name) {
        case "any":
          return this.finishNode(i, "AnyTypeAnnotation");

        case "bool":
        case "boolean":
          return this.finishNode(i, "BooleanTypeAnnotation");

        case "mixed":
          return this.finishNode(i, "MixedTypeAnnotation");

        case "empty":
          return this.finishNode(i, "EmptyTypeAnnotation");

        case "number":
          return this.finishNode(i, "NumberTypeAnnotation");

        case "string":
          return this.finishNode(i, "StringTypeAnnotation");

        case "symbol":
          return this.finishNode(i, "SymbolTypeAnnotation");

        default:
          return this.checkNotUnderscore(r.name), this.flowParseGenericType(t, s, r);
      }
    }

    flowParsePrimaryType() {
      let t = this.state.start,
          s = this.state.startLoc,
          i = this.startNode(),
          r,
          n,
          o = !1,
          h = this.state.noAnonFunctionType;

      switch (this.state.type) {
        case 5:
          return this.flowParseObjectType({
            allowStatic: !1,
            allowExact: !1,
            allowSpread: !0,
            allowProto: !1,
            allowInexact: !0
          });

        case 6:
          return this.flowParseObjectType({
            allowStatic: !1,
            allowExact: !0,
            allowSpread: !0,
            allowProto: !1,
            allowInexact: !1
          });

        case 0:
          return this.state.noAnonFunctionType = !1, n = this.flowParseTupleType(), this.state.noAnonFunctionType = h, n;

        case 47:
          return i.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), r = this.flowParseFunctionTypeParams(), i.params = r.params, i.rest = r.rest, i.this = r._this, this.expect(11), this.expect(19), i.returnType = this.flowParseType(), this.finishNode(i, "FunctionTypeAnnotation");

        case 10:
          if (this.next(), !this.match(11) && !this.match(21)) if (w(this.state.type) || this.match(78)) {
            let c = this.lookahead().type;
            o = c !== 17 && c !== 14;
          } else o = !0;

          if (o) {
            if (this.state.noAnonFunctionType = !1, n = this.flowParseType(), this.state.noAnonFunctionType = h, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19)) return this.expect(11), n;
            this.eat(12);
          }

          return n ? r = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(n)]) : r = this.flowParseFunctionTypeParams(), i.params = r.params, i.rest = r.rest, i.this = r._this, this.expect(11), this.expect(19), i.returnType = this.flowParseType(), i.typeParameters = null, this.finishNode(i, "FunctionTypeAnnotation");

        case 129:
          return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");

        case 85:
        case 86:
          return i.value = this.match(85), this.next(), this.finishNode(i, "BooleanLiteralTypeAnnotation");

        case 53:
          if (this.state.value === "-") {
            if (this.next(), this.match(130)) return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", i);
            if (this.match(131)) return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", i);
            throw this.raise(b.UnexpectedSubtractionOperand, {
              at: this.state.startLoc
            });
          }

          throw this.unexpected();

        case 130:
          return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");

        case 131:
          return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");

        case 88:
          return this.next(), this.finishNode(i, "VoidTypeAnnotation");

        case 84:
          return this.next(), this.finishNode(i, "NullLiteralTypeAnnotation");

        case 78:
          return this.next(), this.finishNode(i, "ThisTypeAnnotation");

        case 55:
          return this.next(), this.finishNode(i, "ExistsTypeAnnotation");

        case 87:
          return this.flowParseTypeofType();

        default:
          if (Ce(this.state.type)) {
            let c = K(this.state.type);
            return this.next(), super.createIdentifier(i, c);
          } else if (w(this.state.type)) return this.isContextual(125) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(t, s, i, this.parseIdentifier());

      }

      throw this.unexpected();
    }

    flowParsePostfixType() {
      let t = this.state.start,
          s = this.state.startLoc,
          i = this.flowParsePrimaryType(),
          r = !1;

      for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon();) {
        let n = this.startNodeAt(t, s),
            o = this.eat(18);
        r = r || o, this.expect(0), !o && this.match(3) ? (n.elementType = i, this.next(), i = this.finishNode(n, "ArrayTypeAnnotation")) : (n.objectType = i, n.indexType = this.flowParseType(), this.expect(3), r ? (n.optional = o, i = this.finishNode(n, "OptionalIndexedAccessType")) : i = this.finishNode(n, "IndexedAccessType"));
      }

      return i;
    }

    flowParsePrefixType() {
      let t = this.startNode();
      return this.eat(17) ? (t.typeAnnotation = this.flowParsePrefixType(), this.finishNode(t, "NullableTypeAnnotation")) : this.flowParsePostfixType();
    }

    flowParseAnonFunctionWithoutParens() {
      let t = this.flowParsePrefixType();

      if (!this.state.noAnonFunctionType && this.eat(19)) {
        let s = this.startNodeAt(t.start, t.loc.start);
        return s.params = [this.reinterpretTypeAsFunctionTypeParam(t)], s.rest = null, s.this = null, s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
      }

      return t;
    }

    flowParseIntersectionType() {
      let t = this.startNode();
      this.eat(45);
      let s = this.flowParseAnonFunctionWithoutParens();

      for (t.types = [s]; this.eat(45);) t.types.push(this.flowParseAnonFunctionWithoutParens());

      return t.types.length === 1 ? s : this.finishNode(t, "IntersectionTypeAnnotation");
    }

    flowParseUnionType() {
      let t = this.startNode();
      this.eat(43);
      let s = this.flowParseIntersectionType();

      for (t.types = [s]; this.eat(43);) t.types.push(this.flowParseIntersectionType());

      return t.types.length === 1 ? s : this.finishNode(t, "UnionTypeAnnotation");
    }

    flowParseType() {
      let t = this.state.inType;
      this.state.inType = !0;
      let s = this.flowParseUnionType();
      return this.state.inType = t, s;
    }

    flowParseTypeOrImplicitInstantiation() {
      if (this.state.type === 128 && this.state.value === "_") {
        let t = this.state.start,
            s = this.state.startLoc,
            i = this.parseIdentifier();
        return this.flowParseGenericType(t, s, i);
      } else return this.flowParseType();
    }

    flowParseTypeAnnotation() {
      let t = this.startNode();
      return t.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(t, "TypeAnnotation");
    }

    flowParseTypeAnnotatableIdentifier(t) {
      let s = t ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
      return this.match(14) && (s.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(s)), s;
    }

    typeCastToParameter(t) {
      return t.expression.typeAnnotation = t.typeAnnotation, this.resetEndLocation(t.expression, t.typeAnnotation.loc.end), t.expression;
    }

    flowParseVariance() {
      let t = null;
      return this.match(53) ? (t = this.startNode(), this.state.value === "+" ? t.kind = "plus" : t.kind = "minus", this.next(), this.finishNode(t, "Variance")) : t;
    }

    parseFunctionBody(t, s, i = !1) {
      return s ? this.forwardNoArrowParamsConversionAt(t, () => super.parseFunctionBody(t, !0, i)) : super.parseFunctionBody(t, !1, i);
    }

    parseFunctionBodyAndFinish(t, s, i = !1) {
      if (this.match(14)) {
        let r = this.startNode();
        [r.typeAnnotation, t.predicate] = this.flowParseTypeAndPredicateInitialiser(), t.returnType = r.typeAnnotation ? this.finishNode(r, "TypeAnnotation") : null;
      }

      return super.parseFunctionBodyAndFinish(t, s, i);
    }

    parseStatement(t, s) {
      if (this.state.strict && this.isContextual(125)) {
        let r = this.lookahead();

        if (j(r.type)) {
          let n = this.startNode();
          return this.next(), this.flowParseInterface(n);
        }
      } else if (this.shouldParseEnums() && this.isContextual(122)) {
        let r = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(r);
      }

      let i = super.parseStatement(t, s);
      return this.flowPragma === void 0 && !this.isValidDirective(i) && (this.flowPragma = null), i;
    }

    parseExpressionStatement(t, s) {
      if (s.type === "Identifier") {
        if (s.name === "declare") {
          if (this.match(80) || w(this.state.type) || this.match(68) || this.match(74) || this.match(82)) return this.flowParseDeclare(t);
        } else if (w(this.state.type)) {
          if (s.name === "interface") return this.flowParseInterface(t);
          if (s.name === "type") return this.flowParseTypeAlias(t);
          if (s.name === "opaque") return this.flowParseOpaqueType(t, !1);
        }
      }

      return super.parseExpressionStatement(t, s);
    }

    shouldParseExportDeclaration() {
      let {
        type: t
      } = this.state;
      return Re(t) || this.shouldParseEnums() && t === 122 ? !this.state.containsEsc : super.shouldParseExportDeclaration();
    }

    isExportDefaultSpecifier() {
      let {
        type: t
      } = this.state;
      return Re(t) || this.shouldParseEnums() && t === 122 ? this.state.containsEsc : super.isExportDefaultSpecifier();
    }

    parseExportDefaultExpression() {
      if (this.shouldParseEnums() && this.isContextual(122)) {
        let t = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(t);
      }

      return super.parseExportDefaultExpression();
    }

    parseConditional(t, s, i, r) {
      if (!this.match(17)) return t;

      if (this.state.maybeInArrowParameters) {
        let d = this.lookaheadCharCode();
        if (d === 44 || d === 61 || d === 58 || d === 41) return this.setOptionalParametersError(r), t;
      }

      this.expect(17);
      let n = this.state.clone(),
          o = this.state.noArrowAt,
          h = this.startNodeAt(s, i),
          {
        consequent: c,
        failed: u
      } = this.tryParseConditionalConsequent(),
          [p, y] = this.getArrowLikeExpressions(c);

      if (u || y.length > 0) {
        let d = [...o];

        if (y.length > 0) {
          this.state = n, this.state.noArrowAt = d;

          for (let m = 0; m < y.length; m++) d.push(y[m].start);

          ({
            consequent: c,
            failed: u
          } = this.tryParseConditionalConsequent()), [p, y] = this.getArrowLikeExpressions(c);
        }

        u && p.length > 1 && this.raise(b.AmbiguousConditionalArrow, {
          at: n.startLoc
        }), u && p.length === 1 && (this.state = n, d.push(p[0].start), this.state.noArrowAt = d, ({
          consequent: c,
          failed: u
        } = this.tryParseConditionalConsequent()));
      }

      return this.getArrowLikeExpressions(c, !0), this.state.noArrowAt = o, this.expect(14), h.test = t, h.consequent = c, h.alternate = this.forwardNoArrowParamsConversionAt(h, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(h, "ConditionalExpression");
    }

    tryParseConditionalConsequent() {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      let t = this.parseMaybeAssignAllowIn(),
          s = !this.match(14);
      return this.state.noArrowParamsConversionAt.pop(), {
        consequent: t,
        failed: s
      };
    }

    getArrowLikeExpressions(t, s) {
      let i = [t],
          r = [];

      for (; i.length !== 0;) {
        let n = i.pop();
        n.type === "ArrowFunctionExpression" ? (n.typeParameters || !n.returnType ? this.finishArrowValidation(n) : r.push(n), i.push(n.body)) : n.type === "ConditionalExpression" && (i.push(n.consequent), i.push(n.alternate));
      }

      return s ? (r.forEach(n => this.finishArrowValidation(n)), [r, []]) : Hi(r, n => n.params.every(o => this.isAssignable(o, !0)));
    }

    finishArrowValidation(t) {
      var s;
      this.toAssignableList(t.params, (s = t.extra) == null ? void 0 : s.trailingCommaLoc, !1), this.scope.enter(U | Ne), super.checkParams(t, !1, !0), this.scope.exit();
    }

    forwardNoArrowParamsConversionAt(t, s) {
      let i;
      return this.state.noArrowParamsConversionAt.indexOf(t.start) !== -1 ? (this.state.noArrowParamsConversionAt.push(this.state.start), i = s(), this.state.noArrowParamsConversionAt.pop()) : i = s(), i;
    }

    parseParenItem(t, s, i) {
      if (t = super.parseParenItem(t, s, i), this.eat(17) && (t.optional = !0, this.resetEndLocation(t)), this.match(14)) {
        let r = this.startNodeAt(s, i);
        return r.expression = t, r.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(r, "TypeCastExpression");
      }

      return t;
    }

    assertModuleNodeAllowed(t) {
      t.type === "ImportDeclaration" && (t.importKind === "type" || t.importKind === "typeof") || t.type === "ExportNamedDeclaration" && t.exportKind === "type" || t.type === "ExportAllDeclaration" && t.exportKind === "type" || super.assertModuleNodeAllowed(t);
    }

    parseExport(t) {
      let s = super.parseExport(t);
      return (s.type === "ExportNamedDeclaration" || s.type === "ExportAllDeclaration") && (s.exportKind = s.exportKind || "value"), s;
    }

    parseExportDeclaration(t) {
      if (this.isContextual(126)) {
        t.exportKind = "type";
        let s = this.startNode();
        return this.next(), this.match(5) ? (t.specifiers = this.parseExportSpecifiers(!0), super.parseExportFrom(t), null) : this.flowParseTypeAlias(s);
      } else if (this.isContextual(127)) {
        t.exportKind = "type";
        let s = this.startNode();
        return this.next(), this.flowParseOpaqueType(s, !1);
      } else if (this.isContextual(125)) {
        t.exportKind = "type";
        let s = this.startNode();
        return this.next(), this.flowParseInterface(s);
      } else if (this.shouldParseEnums() && this.isContextual(122)) {
        t.exportKind = "value";
        let s = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(s);
      } else return super.parseExportDeclaration(t);
    }

    eatExportStar(t) {
      return super.eatExportStar(t) ? !0 : this.isContextual(126) && this.lookahead().type === 55 ? (t.exportKind = "type", this.next(), this.next(), !0) : !1;
    }

    maybeParseExportNamespaceSpecifier(t) {
      let {
        startLoc: s
      } = this.state,
          i = super.maybeParseExportNamespaceSpecifier(t);
      return i && t.exportKind === "type" && this.unexpected(s), i;
    }

    parseClassId(t, s, i) {
      super.parseClassId(t, s, i), this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration());
    }

    parseClassMember(t, s, i) {
      let {
        startLoc: r
      } = this.state;

      if (this.isContextual(121)) {
        if (super.parseClassMemberFromModifier(t, s)) return;
        s.declare = !0;
      }

      super.parseClassMember(t, s, i), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(b.DeclareClassElement, {
        at: r
      }) : s.value && this.raise(b.DeclareClassFieldInitializer, {
        at: s.value
      }));
    }

    isIterator(t) {
      return t === "iterator" || t === "asyncIterator";
    }

    readIterator() {
      let t = super.readWord1(),
          s = "@@" + t;
      (!this.isIterator(t) || !this.state.inType) && this.raise(l.InvalidIdentifier, {
        at: this.state.curPosition(),
        identifierName: s
      }), this.finishToken(128, s);
    }

    getTokenFromCode(t) {
      let s = this.input.charCodeAt(this.state.pos + 1);
      return t === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (t === 62 || t === 60) ? this.finishOp(t === 62 ? 48 : 47, 1) : this.state.inType && t === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : mi(t, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(t);
    }

    isAssignable(t, s) {
      return t.type === "TypeCastExpression" ? this.isAssignable(t.expression, s) : super.isAssignable(t, s);
    }

    toAssignable(t, s = !1) {
      !s && t.type === "AssignmentExpression" && t.left.type === "TypeCastExpression" && (t.left = this.typeCastToParameter(t.left)), super.toAssignable(t, s);
    }

    toAssignableList(t, s, i) {
      for (let r = 0; r < t.length; r++) {
        let n = t[r];
        n?.type === "TypeCastExpression" && (t[r] = this.typeCastToParameter(n));
      }

      super.toAssignableList(t, s, i);
    }

    toReferencedList(t, s) {
      for (let r = 0; r < t.length; r++) {
        var i;
        let n = t[r];
        n && n.type === "TypeCastExpression" && !((i = n.extra) != null && i.parenthesized) && (t.length > 1 || !s) && this.raise(b.TypeCastInPattern, {
          at: n.typeAnnotation
        });
      }

      return t;
    }

    parseArrayLike(t, s, i, r) {
      let n = super.parseArrayLike(t, s, i, r);
      return s && !this.state.maybeInArrowParameters && this.toReferencedList(n.elements), n;
    }

    isValidLVal(t, s, i) {
      return t === "TypeCastExpression" || super.isValidLVal(t, s, i);
    }

    parseClassProperty(t) {
      return this.match(14) && (t.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(t);
    }

    parseClassPrivateProperty(t) {
      return this.match(14) && (t.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(t);
    }

    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }

    isClassProperty() {
      return this.match(14) || super.isClassProperty();
    }

    isNonstaticConstructor(t) {
      return !this.match(14) && super.isNonstaticConstructor(t);
    }

    pushClassMethod(t, s, i, r, n, o) {
      if (s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(t, s, i, r, n, o), s.params && n) {
        let h = s.params;
        h.length > 0 && this.isThisParam(h[0]) && this.raise(b.ThisParamBannedInConstructor, {
          at: s
        });
      } else if (s.type === "MethodDefinition" && n && s.value.params) {
        let h = s.value.params;
        h.length > 0 && this.isThisParam(h[0]) && this.raise(b.ThisParamBannedInConstructor, {
          at: s
        });
      }
    }

    pushClassPrivateMethod(t, s, i, r) {
      s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(t, s, i, r);
    }

    parseClassSuper(t) {
      if (super.parseClassSuper(t), t.superClass && this.match(47) && (t.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(110)) {
        this.next();
        let s = t.implements = [];

        do {
          let i = this.startNode();
          i.id = this.flowParseRestrictedIdentifier(!0), this.match(47) ? i.typeParameters = this.flowParseTypeParameterInstantiation() : i.typeParameters = null, s.push(this.finishNode(i, "ClassImplements"));
        } while (this.eat(12));
      }
    }

    checkGetterSetterParams(t) {
      super.checkGetterSetterParams(t);
      let s = this.getObjectOrClassMethodParams(t);

      if (s.length > 0) {
        let i = s[0];
        this.isThisParam(i) && t.kind === "get" ? this.raise(b.GetterMayNotHaveThisParam, {
          at: i
        }) : this.isThisParam(i) && this.raise(b.SetterMayNotHaveThisParam, {
          at: i
        });
      }
    }

    parsePropertyNamePrefixOperator(t) {
      t.variance = this.flowParseVariance();
    }

    parseObjPropValue(t, s, i, r, n, o, h, c) {
      t.variance && this.unexpected(t.variance.loc.start), delete t.variance;
      let u;
      this.match(47) && !h && (u = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
      let p = super.parseObjPropValue(t, s, i, r, n, o, h, c);
      return u && ((p.value || p).typeParameters = u), p;
    }

    parseAssignableListItemTypes(t) {
      return this.eat(17) && (t.type !== "Identifier" && this.raise(b.PatternIsOptional, {
        at: t
      }), this.isThisParam(t) && this.raise(b.ThisParamMayNotBeOptional, {
        at: t
      }), t.optional = !0), this.match(14) ? t.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(t) && this.raise(b.ThisParamAnnotationRequired, {
        at: t
      }), this.match(29) && this.isThisParam(t) && this.raise(b.ThisParamNoDefault, {
        at: t
      }), this.resetEndLocation(t), t;
    }

    parseMaybeDefault(t, s, i) {
      let r = super.parseMaybeDefault(t, s, i);
      return r.type === "AssignmentPattern" && r.typeAnnotation && r.right.start < r.typeAnnotation.start && this.raise(b.TypeBeforeInitializer, {
        at: r.typeAnnotation
      }), r;
    }

    shouldParseDefaultImport(t) {
      return qt(t) ? qe(this.state.type) : super.shouldParseDefaultImport(t);
    }

    parseImportSpecifierLocal(t, s, i) {
      s.local = qt(t) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(s, i));
    }

    maybeParseDefaultImportSpecifier(t) {
      t.importKind = "value";
      let s = null;

      if (this.match(87) ? s = "typeof" : this.isContextual(126) && (s = "type"), s) {
        let i = this.lookahead(),
            {
          type: r
        } = i;
        s === "type" && r === 55 && this.unexpected(null, i.type), (qe(r) || r === 5 || r === 55) && (this.next(), t.importKind = s);
      }

      return super.maybeParseDefaultImportSpecifier(t);
    }

    parseImportSpecifier(t, s, i, r, n) {
      let o = t.imported,
          h = null;
      o.type === "Identifier" && (o.name === "type" ? h = "type" : o.name === "typeof" && (h = "typeof"));
      let c = !1;

      if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
        let p = this.parseIdentifier(!0);
        h !== null && !j(this.state.type) ? (t.imported = p, t.importKind = h, t.local = z(p)) : (t.imported = o, t.importKind = null, t.local = this.parseIdentifier());
      } else {
        if (h !== null && j(this.state.type)) t.imported = this.parseIdentifier(!0), t.importKind = h;else {
          if (s) throw this.raise(l.ImportBindingIsString, {
            at: t,
            importName: o.value
          });
          t.imported = o, t.importKind = null;
        }
        this.eatContextual(93) ? t.local = this.parseIdentifier() : (c = !0, t.local = z(t.imported));
      }

      let u = qt(t);
      return i && u && this.raise(b.ImportTypeShorthandOnlyInPureImport, {
        at: t
      }), (i || u) && this.checkReservedType(t.local.name, t.local.loc.start, !0), c && !i && !u && this.checkReservedWord(t.local.name, t.loc.start, !0, !0), this.finishImportSpecifier(t, "ImportSpecifier");
    }

    parseBindingAtom() {
      switch (this.state.type) {
        case 78:
          return this.parseIdentifier(!0);

        default:
          return super.parseBindingAtom();
      }
    }

    parseFunctionParams(t, s) {
      let i = t.kind;
      i !== "get" && i !== "set" && this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(t, s);
    }

    parseVarId(t, s) {
      super.parseVarId(t, s), this.match(14) && (t.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(t.id));
    }

    parseAsyncArrowFromCallExpression(t, s) {
      if (this.match(14)) {
        let i = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = !0, t.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = i;
      }

      return super.parseAsyncArrowFromCallExpression(t, s);
    }

    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }

    parseMaybeAssign(t, s) {
      var i;
      let r = null,
          n;

      if (this.hasPlugin("jsx") && (this.match(138) || this.match(47))) {
        if (r = this.state.clone(), n = this.tryParse(() => super.parseMaybeAssign(t, s), r), !n.error) return n.node;
        let {
          context: c
        } = this.state,
            u = c[c.length - 1];
        (u === I.j_oTag || u === I.j_expr) && c.pop();
      }

      if ((i = n) != null && i.error || this.match(47)) {
        var o, h;
        r = r || this.state.clone();
        let c,
            u = this.tryParse(y => {
          var d;
          c = this.flowParseTypeParameterDeclaration();
          let m = this.forwardNoArrowParamsConversionAt(c, () => {
            let g = super.parseMaybeAssign(t, s);
            return this.resetStartLocationFromNode(g, c), g;
          });
          (d = m.extra) != null && d.parenthesized && y();
          let C = this.maybeUnwrapTypeCastExpression(m);
          return C.type !== "ArrowFunctionExpression" && y(), C.typeParameters = c, this.resetStartLocationFromNode(C, c), m;
        }, r),
            p = null;

        if (u.node && this.maybeUnwrapTypeCastExpression(u.node).type === "ArrowFunctionExpression") {
          if (!u.error && !u.aborted) return u.node.async && this.raise(b.UnexpectedTypeParameterBeforeAsyncArrowFunction, {
            at: c
          }), u.node;
          p = u.node;
        }

        if ((o = n) != null && o.node) return this.state = n.failState, n.node;
        if (p) return this.state = u.failState, p;
        throw (h = n) != null && h.thrown ? n.error : u.thrown ? u.error : this.raise(b.UnexpectedTokenAfterTypeParameter, {
          at: c
        });
      }

      return super.parseMaybeAssign(t, s);
    }

    parseArrow(t) {
      if (this.match(14)) {
        let s = this.tryParse(() => {
          let i = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = !0;
          let r = this.startNode();
          return [r.typeAnnotation, t.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = i, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), r;
        });
        if (s.thrown) return null;
        s.error && (this.state = s.failState), t.returnType = s.node.typeAnnotation ? this.finishNode(s.node, "TypeAnnotation") : null;
      }

      return super.parseArrow(t);
    }

    shouldParseArrow(t) {
      return this.match(14) || super.shouldParseArrow(t);
    }

    setArrowFunctionParameters(t, s) {
      this.state.noArrowParamsConversionAt.indexOf(t.start) !== -1 ? t.params = s : super.setArrowFunctionParameters(t, s);
    }

    checkParams(t, s, i, r = !0) {
      if (!(i && this.state.noArrowParamsConversionAt.indexOf(t.start) !== -1)) {
        for (let n = 0; n < t.params.length; n++) this.isThisParam(t.params[n]) && n > 0 && this.raise(b.ThisParamMustBeFirst, {
          at: t.params[n]
        });

        return super.checkParams(t, s, i, r);
      }
    }

    parseParenAndDistinguishExpression(t) {
      return super.parseParenAndDistinguishExpression(t && this.state.noArrowAt.indexOf(this.state.start) === -1);
    }

    parseSubscripts(t, s, i, r) {
      if (t.type === "Identifier" && t.name === "async" && this.state.noArrowAt.indexOf(s) !== -1) {
        this.next();
        let n = this.startNodeAt(s, i);
        n.callee = t, n.arguments = super.parseCallExpressionArguments(11, !1), t = this.finishNode(n, "CallExpression");
      } else if (t.type === "Identifier" && t.name === "async" && this.match(47)) {
        let n = this.state.clone(),
            o = this.tryParse(c => this.parseAsyncArrowWithTypeParameters(s, i) || c(), n);
        if (!o.error && !o.aborted) return o.node;
        let h = this.tryParse(() => super.parseSubscripts(t, s, i, r), n);
        if (h.node && !h.error) return h.node;
        if (o.node) return this.state = o.failState, o.node;
        if (h.node) return this.state = h.failState, h.node;
        throw o.error || h.error;
      }

      return super.parseSubscripts(t, s, i, r);
    }

    parseSubscript(t, s, i, r, n) {
      if (this.match(18) && this.isLookaheadToken_lt()) {
        if (n.optionalChainMember = !0, r) return n.stop = !0, t;
        this.next();
        let o = this.startNodeAt(s, i);
        return o.callee = t, o.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), o.arguments = this.parseCallExpressionArguments(11, !1), o.optional = !0, this.finishCallExpression(o, !0);
      } else if (!r && this.shouldParseTypes() && this.match(47)) {
        let o = this.startNodeAt(s, i);
        o.callee = t;
        let h = this.tryParse(() => (o.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), o.arguments = super.parseCallExpressionArguments(11, !1), n.optionalChainMember && (o.optional = !1), this.finishCallExpression(o, n.optionalChainMember)));
        if (h.node) return h.error && (this.state = h.failState), h.node;
      }

      return super.parseSubscript(t, s, i, r, n);
    }

    parseNewCallee(t) {
      super.parseNewCallee(t);
      let s = null;
      this.shouldParseTypes() && this.match(47) && (s = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), t.typeArguments = s;
    }

    parseAsyncArrowWithTypeParameters(t, s) {
      let i = this.startNodeAt(t, s);
      if (this.parseFunctionParams(i), !!this.parseArrow(i)) return super.parseArrowExpression(i, void 0, !0);
    }

    readToken_mult_modulo(t) {
      let s = this.input.charCodeAt(this.state.pos + 1);

      if (t === 42 && s === 47 && this.state.hasFlowComment) {
        this.state.hasFlowComment = !1, this.state.pos += 2, this.nextToken();
        return;
      }

      super.readToken_mult_modulo(t);
    }

    readToken_pipe_amp(t) {
      let s = this.input.charCodeAt(this.state.pos + 1);

      if (t === 124 && s === 125) {
        this.finishOp(9, 2);
        return;
      }

      super.readToken_pipe_amp(t);
    }

    parseTopLevel(t, s) {
      let i = super.parseTopLevel(t, s);
      return this.state.hasFlowComment && this.raise(b.UnterminatedFlowComment, {
        at: this.state.curPosition()
      }), i;
    }

    skipBlockComment() {
      if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
        if (this.state.hasFlowComment) throw this.raise(b.NestedFlowComment, {
          at: this.state.startLoc
        });
        this.hasFlowCommentCompletion();
        let t = this.skipFlowComment();
        t && (this.state.pos += t, this.state.hasFlowComment = !0);
        return;
      }

      if (this.state.hasFlowComment) {
        let t = this.input.indexOf("*-/", this.state.pos + 2);
        if (t === -1) throw this.raise(l.UnterminatedComment, {
          at: this.state.curPosition()
        });
        this.state.pos = t + 2 + 3;
        return;
      }

      return super.skipBlockComment();
    }

    skipFlowComment() {
      let {
        pos: t
      } = this.state,
          s = 2;

      for (; [32, 9].includes(this.input.charCodeAt(t + s));) s++;

      let i = this.input.charCodeAt(s + t),
          r = this.input.charCodeAt(s + t + 1);
      return i === 58 && r === 58 ? s + 2 : this.input.slice(s + t, s + t + 12) === "flow-include" ? s + 12 : i === 58 && r !== 58 ? s : !1;
    }

    hasFlowCommentCompletion() {
      if (this.input.indexOf("*/", this.state.pos) === -1) throw this.raise(l.UnterminatedComment, {
        at: this.state.curPosition()
      });
    }

    flowEnumErrorBooleanMemberNotInitialized(t, {
      enumName: s,
      memberName: i
    }) {
      this.raise(b.EnumBooleanMemberNotInitialized, {
        at: t,
        memberName: i,
        enumName: s
      });
    }

    flowEnumErrorInvalidMemberInitializer(t, s) {
      return this.raise(s.explicitType ? s.explicitType === "symbol" ? b.EnumInvalidMemberInitializerSymbolType : b.EnumInvalidMemberInitializerPrimaryType : b.EnumInvalidMemberInitializerUnknownType, Object.assign({
        at: t
      }, s));
    }

    flowEnumErrorNumberMemberNotInitialized(t, {
      enumName: s,
      memberName: i
    }) {
      this.raise(b.EnumNumberMemberNotInitialized, {
        at: t,
        enumName: s,
        memberName: i
      });
    }

    flowEnumErrorStringMemberInconsistentlyInitailized(t, {
      enumName: s
    }) {
      this.raise(b.EnumStringMemberInconsistentlyInitailized, {
        at: t,
        enumName: s
      });
    }

    flowEnumMemberInit() {
      let t = this.state.startLoc,
          s = () => this.match(12) || this.match(8);

      switch (this.state.type) {
        case 130:
          {
            let i = this.parseNumericLiteral(this.state.value);
            return s() ? {
              type: "number",
              loc: i.loc.start,
              value: i
            } : {
              type: "invalid",
              loc: t
            };
          }

        case 129:
          {
            let i = this.parseStringLiteral(this.state.value);
            return s() ? {
              type: "string",
              loc: i.loc.start,
              value: i
            } : {
              type: "invalid",
              loc: t
            };
          }

        case 85:
        case 86:
          {
            let i = this.parseBooleanLiteral(this.match(85));
            return s() ? {
              type: "boolean",
              loc: i.loc.start,
              value: i
            } : {
              type: "invalid",
              loc: t
            };
          }

        default:
          return {
            type: "invalid",
            loc: t
          };
      }
    }

    flowEnumMemberRaw() {
      let t = this.state.startLoc,
          s = this.parseIdentifier(!0),
          i = this.eat(29) ? this.flowEnumMemberInit() : {
        type: "none",
        loc: t
      };
      return {
        id: s,
        init: i
      };
    }

    flowEnumCheckExplicitTypeMismatch(t, s, i) {
      let {
        explicitType: r
      } = s;
      r !== null && r !== i && this.flowEnumErrorInvalidMemberInitializer(t, s);
    }

    flowEnumMembers({
      enumName: t,
      explicitType: s
    }) {
      let i = new Set(),
          r = {
        booleanMembers: [],
        numberMembers: [],
        stringMembers: [],
        defaultedMembers: []
      },
          n = !1;

      for (; !this.match(8);) {
        if (this.eat(21)) {
          n = !0;
          break;
        }

        let o = this.startNode(),
            {
          id: h,
          init: c
        } = this.flowEnumMemberRaw(),
            u = h.name;
        if (u === "") continue;
        /^[a-z]/.test(u) && this.raise(b.EnumInvalidMemberName, {
          at: h,
          memberName: u,
          suggestion: u[0].toUpperCase() + u.slice(1),
          enumName: t
        }), i.has(u) && this.raise(b.EnumDuplicateMemberName, {
          at: h,
          memberName: u,
          enumName: t
        }), i.add(u);
        let p = {
          enumName: t,
          explicitType: s,
          memberName: u
        };

        switch (o.id = h, c.type) {
          case "boolean":
            {
              this.flowEnumCheckExplicitTypeMismatch(c.loc, p, "boolean"), o.init = c.value, r.booleanMembers.push(this.finishNode(o, "EnumBooleanMember"));
              break;
            }

          case "number":
            {
              this.flowEnumCheckExplicitTypeMismatch(c.loc, p, "number"), o.init = c.value, r.numberMembers.push(this.finishNode(o, "EnumNumberMember"));
              break;
            }

          case "string":
            {
              this.flowEnumCheckExplicitTypeMismatch(c.loc, p, "string"), o.init = c.value, r.stringMembers.push(this.finishNode(o, "EnumStringMember"));
              break;
            }

          case "invalid":
            throw this.flowEnumErrorInvalidMemberInitializer(c.loc, p);

          case "none":
            switch (s) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(c.loc, p);
                break;

              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(c.loc, p);
                break;

              default:
                r.defaultedMembers.push(this.finishNode(o, "EnumDefaultedMember"));
            }

        }

        this.match(8) || this.expect(12);
      }

      return {
        members: r,
        hasUnknownMembers: n
      };
    }

    flowEnumStringMembers(t, s, {
      enumName: i
    }) {
      if (t.length === 0) return s;
      if (s.length === 0) return t;

      if (s.length > t.length) {
        for (let r of t) this.flowEnumErrorStringMemberInconsistentlyInitailized(r, {
          enumName: i
        });

        return s;
      } else {
        for (let r of s) this.flowEnumErrorStringMemberInconsistentlyInitailized(r, {
          enumName: i
        });

        return t;
      }
    }

    flowEnumParseExplicitType({
      enumName: t
    }) {
      if (!this.eatContextual(101)) return null;
      if (!w(this.state.type)) throw this.raise(b.EnumInvalidExplicitTypeUnknownSupplied, {
        at: this.state.startLoc,
        enumName: t
      });
      let {
        value: s
      } = this.state;
      return this.next(), s !== "boolean" && s !== "number" && s !== "string" && s !== "symbol" && this.raise(b.EnumInvalidExplicitType, {
        at: this.state.startLoc,
        enumName: t,
        invalidEnumType: s
      }), s;
    }

    flowEnumBody(t, s) {
      let i = s.name,
          r = s.loc.start,
          n = this.flowEnumParseExplicitType({
        enumName: i
      });
      this.expect(5);
      let {
        members: o,
        hasUnknownMembers: h
      } = this.flowEnumMembers({
        enumName: i,
        explicitType: n
      });

      switch (t.hasUnknownMembers = h, n) {
        case "boolean":
          return t.explicitType = !0, t.members = o.booleanMembers, this.expect(8), this.finishNode(t, "EnumBooleanBody");

        case "number":
          return t.explicitType = !0, t.members = o.numberMembers, this.expect(8), this.finishNode(t, "EnumNumberBody");

        case "string":
          return t.explicitType = !0, t.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, {
            enumName: i
          }), this.expect(8), this.finishNode(t, "EnumStringBody");

        case "symbol":
          return t.members = o.defaultedMembers, this.expect(8), this.finishNode(t, "EnumSymbolBody");

        default:
          {
            let c = () => (t.members = [], this.expect(8), this.finishNode(t, "EnumStringBody"));

            t.explicitType = !1;
            let u = o.booleanMembers.length,
                p = o.numberMembers.length,
                y = o.stringMembers.length,
                d = o.defaultedMembers.length;
            if (!u && !p && !y && !d) return c();
            if (!u && !p) return t.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, {
              enumName: i
            }), this.expect(8), this.finishNode(t, "EnumStringBody");

            if (!p && !y && u >= d) {
              for (let m of o.defaultedMembers) this.flowEnumErrorBooleanMemberNotInitialized(m.loc.start, {
                enumName: i,
                memberName: m.id.name
              });

              return t.members = o.booleanMembers, this.expect(8), this.finishNode(t, "EnumBooleanBody");
            } else if (!u && !y && p >= d) {
              for (let m of o.defaultedMembers) this.flowEnumErrorNumberMemberNotInitialized(m.loc.start, {
                enumName: i,
                memberName: m.id.name
              });

              return t.members = o.numberMembers, this.expect(8), this.finishNode(t, "EnumNumberBody");
            } else return this.raise(b.EnumInconsistentMemberValues, {
              at: r,
              enumName: i
            }), c();
          }
      }
    }

    flowParseEnumDeclaration(t) {
      let s = this.parseIdentifier();
      return t.id = s, t.body = this.flowEnumBody(this.startNode(), s), this.finishNode(t, "EnumDeclaration");
    }

    isLookaheadToken_lt() {
      let t = this.nextTokenStart();

      if (this.input.charCodeAt(t) === 60) {
        let s = this.input.charCodeAt(t + 1);
        return s !== 60 && s !== 61;
      }

      return !1;
    }

    maybeUnwrapTypeCastExpression(t) {
      return t.type === "TypeCastExpression" ? t.expression : t;
    }

  },
      Xi = {
    __proto__: null,
    quot: '"',
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: "\xA0",
    iexcl: "\xA1",
    cent: "\xA2",
    pound: "\xA3",
    curren: "\xA4",
    yen: "\xA5",
    brvbar: "\xA6",
    sect: "\xA7",
    uml: "\xA8",
    copy: "\xA9",
    ordf: "\xAA",
    laquo: "\xAB",
    not: "\xAC",
    shy: "\xAD",
    reg: "\xAE",
    macr: "\xAF",
    deg: "\xB0",
    plusmn: "\xB1",
    sup2: "\xB2",
    sup3: "\xB3",
    acute: "\xB4",
    micro: "\xB5",
    para: "\xB6",
    middot: "\xB7",
    cedil: "\xB8",
    sup1: "\xB9",
    ordm: "\xBA",
    raquo: "\xBB",
    frac14: "\xBC",
    frac12: "\xBD",
    frac34: "\xBE",
    iquest: "\xBF",
    Agrave: "\xC0",
    Aacute: "\xC1",
    Acirc: "\xC2",
    Atilde: "\xC3",
    Auml: "\xC4",
    Aring: "\xC5",
    AElig: "\xC6",
    Ccedil: "\xC7",
    Egrave: "\xC8",
    Eacute: "\xC9",
    Ecirc: "\xCA",
    Euml: "\xCB",
    Igrave: "\xCC",
    Iacute: "\xCD",
    Icirc: "\xCE",
    Iuml: "\xCF",
    ETH: "\xD0",
    Ntilde: "\xD1",
    Ograve: "\xD2",
    Oacute: "\xD3",
    Ocirc: "\xD4",
    Otilde: "\xD5",
    Ouml: "\xD6",
    times: "\xD7",
    Oslash: "\xD8",
    Ugrave: "\xD9",
    Uacute: "\xDA",
    Ucirc: "\xDB",
    Uuml: "\xDC",
    Yacute: "\xDD",
    THORN: "\xDE",
    szlig: "\xDF",
    agrave: "\xE0",
    aacute: "\xE1",
    acirc: "\xE2",
    atilde: "\xE3",
    auml: "\xE4",
    aring: "\xE5",
    aelig: "\xE6",
    ccedil: "\xE7",
    egrave: "\xE8",
    eacute: "\xE9",
    ecirc: "\xEA",
    euml: "\xEB",
    igrave: "\xEC",
    iacute: "\xED",
    icirc: "\xEE",
    iuml: "\xEF",
    eth: "\xF0",
    ntilde: "\xF1",
    ograve: "\xF2",
    oacute: "\xF3",
    ocirc: "\xF4",
    otilde: "\xF5",
    ouml: "\xF6",
    divide: "\xF7",
    oslash: "\xF8",
    ugrave: "\xF9",
    uacute: "\xFA",
    ucirc: "\xFB",
    uuml: "\xFC",
    yacute: "\xFD",
    thorn: "\xFE",
    yuml: "\xFF",
    OElig: "\u0152",
    oelig: "\u0153",
    Scaron: "\u0160",
    scaron: "\u0161",
    Yuml: "\u0178",
    fnof: "\u0192",
    circ: "\u02C6",
    tilde: "\u02DC",
    Alpha: "\u0391",
    Beta: "\u0392",
    Gamma: "\u0393",
    Delta: "\u0394",
    Epsilon: "\u0395",
    Zeta: "\u0396",
    Eta: "\u0397",
    Theta: "\u0398",
    Iota: "\u0399",
    Kappa: "\u039A",
    Lambda: "\u039B",
    Mu: "\u039C",
    Nu: "\u039D",
    Xi: "\u039E",
    Omicron: "\u039F",
    Pi: "\u03A0",
    Rho: "\u03A1",
    Sigma: "\u03A3",
    Tau: "\u03A4",
    Upsilon: "\u03A5",
    Phi: "\u03A6",
    Chi: "\u03A7",
    Psi: "\u03A8",
    Omega: "\u03A9",
    alpha: "\u03B1",
    beta: "\u03B2",
    gamma: "\u03B3",
    delta: "\u03B4",
    epsilon: "\u03B5",
    zeta: "\u03B6",
    eta: "\u03B7",
    theta: "\u03B8",
    iota: "\u03B9",
    kappa: "\u03BA",
    lambda: "\u03BB",
    mu: "\u03BC",
    nu: "\u03BD",
    xi: "\u03BE",
    omicron: "\u03BF",
    pi: "\u03C0",
    rho: "\u03C1",
    sigmaf: "\u03C2",
    sigma: "\u03C3",
    tau: "\u03C4",
    upsilon: "\u03C5",
    phi: "\u03C6",
    chi: "\u03C7",
    psi: "\u03C8",
    omega: "\u03C9",
    thetasym: "\u03D1",
    upsih: "\u03D2",
    piv: "\u03D6",
    ensp: "\u2002",
    emsp: "\u2003",
    thinsp: "\u2009",
    zwnj: "\u200C",
    zwj: "\u200D",
    lrm: "\u200E",
    rlm: "\u200F",
    ndash: "\u2013",
    mdash: "\u2014",
    lsquo: "\u2018",
    rsquo: "\u2019",
    sbquo: "\u201A",
    ldquo: "\u201C",
    rdquo: "\u201D",
    bdquo: "\u201E",
    dagger: "\u2020",
    Dagger: "\u2021",
    bull: "\u2022",
    hellip: "\u2026",
    permil: "\u2030",
    prime: "\u2032",
    Prime: "\u2033",
    lsaquo: "\u2039",
    rsaquo: "\u203A",
    oline: "\u203E",
    frasl: "\u2044",
    euro: "\u20AC",
    image: "\u2111",
    weierp: "\u2118",
    real: "\u211C",
    trade: "\u2122",
    alefsym: "\u2135",
    larr: "\u2190",
    uarr: "\u2191",
    rarr: "\u2192",
    darr: "\u2193",
    harr: "\u2194",
    crarr: "\u21B5",
    lArr: "\u21D0",
    uArr: "\u21D1",
    rArr: "\u21D2",
    dArr: "\u21D3",
    hArr: "\u21D4",
    forall: "\u2200",
    part: "\u2202",
    exist: "\u2203",
    empty: "\u2205",
    nabla: "\u2207",
    isin: "\u2208",
    notin: "\u2209",
    ni: "\u220B",
    prod: "\u220F",
    sum: "\u2211",
    minus: "\u2212",
    lowast: "\u2217",
    radic: "\u221A",
    prop: "\u221D",
    infin: "\u221E",
    ang: "\u2220",
    and: "\u2227",
    or: "\u2228",
    cap: "\u2229",
    cup: "\u222A",
    int: "\u222B",
    there4: "\u2234",
    sim: "\u223C",
    cong: "\u2245",
    asymp: "\u2248",
    ne: "\u2260",
    equiv: "\u2261",
    le: "\u2264",
    ge: "\u2265",
    sub: "\u2282",
    sup: "\u2283",
    nsub: "\u2284",
    sube: "\u2286",
    supe: "\u2287",
    oplus: "\u2295",
    otimes: "\u2297",
    perp: "\u22A5",
    sdot: "\u22C5",
    lceil: "\u2308",
    rceil: "\u2309",
    lfloor: "\u230A",
    rfloor: "\u230B",
    lang: "\u2329",
    rang: "\u232A",
    loz: "\u25CA",
    spades: "\u2660",
    clubs: "\u2663",
    hearts: "\u2665",
    diams: "\u2666"
  },
      W = R`jsx`({
    AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
    MissingClosingTagElement: ({
      openingTagName: a
    }) => `Expected corresponding JSX closing tag for <${a}>.`,
    MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
    UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
    UnexpectedToken: ({
      unexpected: a,
      HTMLEntity: e
    }) => `Unexpected token \`${a}\`. Did you mean \`${e}\` or \`{'${a}'}\`?`,
    UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
    UnterminatedJsxContent: "Unterminated JSX contents.",
    UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
  });

  function q(a) {
    return a ? a.type === "JSXOpeningFragment" || a.type === "JSXClosingFragment" : !1;
  }

  function st(a) {
    if (a.type === "JSXIdentifier") return a.name;
    if (a.type === "JSXNamespacedName") return a.namespace.name + ":" + a.name.name;
    if (a.type === "JSXMemberExpression") return st(a.object) + "." + st(a.property);
    throw new Error("Node had unexpected type: " + a.type);
  }

  var Gi = a => class extends a {
    jsxReadToken() {
      let t = "",
          s = this.state.pos;

      for (;;) {
        if (this.state.pos >= this.length) throw this.raise(W.UnterminatedJsxContent, {
          at: this.state.startLoc
        });
        let i = this.input.charCodeAt(this.state.pos);

        switch (i) {
          case 60:
          case 123:
            return this.state.pos === this.state.start ? i === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(138)) : super.getTokenFromCode(i) : (t += this.input.slice(s, this.state.pos), this.finishToken(137, t));

          case 38:
            t += this.input.slice(s, this.state.pos), t += this.jsxReadEntity(), s = this.state.pos;
            break;

          case 62:
          case 125:
          default:
            Pt(i) ? (t += this.input.slice(s, this.state.pos), t += this.jsxReadNewLine(!0), s = this.state.pos) : ++this.state.pos;
        }
      }
    }

    jsxReadNewLine(t) {
      let s = this.input.charCodeAt(this.state.pos),
          i;
      return ++this.state.pos, s === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, i = t ? `
` : `\r
`) : i = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, i;
    }

    jsxReadString(t) {
      let s = "",
          i = ++this.state.pos;

      for (;;) {
        if (this.state.pos >= this.length) throw this.raise(l.UnterminatedString, {
          at: this.state.startLoc
        });
        let r = this.input.charCodeAt(this.state.pos);
        if (r === t) break;
        r === 38 ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadEntity(), i = this.state.pos) : Pt(r) ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadNewLine(!1), i = this.state.pos) : ++this.state.pos;
      }

      return s += this.input.slice(i, this.state.pos++), this.finishToken(129, s);
    }

    jsxReadEntity() {
      let t = ++this.state.pos;

      if (this.codePointAtPos(this.state.pos) === 35) {
        ++this.state.pos;
        let s = 10;
        this.codePointAtPos(this.state.pos) === 120 && (s = 16, ++this.state.pos);
        let i = this.readInt(s, void 0, !1, "bail");
        if (i !== null && this.codePointAtPos(this.state.pos) === 59) return ++this.state.pos, String.fromCodePoint(i);
      } else {
        let s = 0,
            i = !1;

        for (; s++ < 10 && this.state.pos < this.length && !(i = this.codePointAtPos(this.state.pos) == 59);) ++this.state.pos;

        if (i) {
          let r = this.input.slice(t, this.state.pos),
              n = Xi[r];
          if (++this.state.pos, n) return n;
        }
      }

      return this.state.pos = t, "&";
    }

    jsxReadWord() {
      let t,
          s = this.state.pos;

      do t = this.input.charCodeAt(++this.state.pos); while (it(t) || t === 45);

      return this.finishToken(136, this.input.slice(s, this.state.pos));
    }

    jsxParseIdentifier() {
      let t = this.startNode();
      return this.match(136) ? t.name = this.state.value : Ce(this.state.type) ? t.name = K(this.state.type) : this.unexpected(), this.next(), this.finishNode(t, "JSXIdentifier");
    }

    jsxParseNamespacedName() {
      let t = this.state.start,
          s = this.state.startLoc,
          i = this.jsxParseIdentifier();
      if (!this.eat(14)) return i;
      let r = this.startNodeAt(t, s);
      return r.namespace = i, r.name = this.jsxParseIdentifier(), this.finishNode(r, "JSXNamespacedName");
    }

    jsxParseElementName() {
      let t = this.state.start,
          s = this.state.startLoc,
          i = this.jsxParseNamespacedName();
      if (i.type === "JSXNamespacedName") return i;

      for (; this.eat(16);) {
        let r = this.startNodeAt(t, s);
        r.object = i, r.property = this.jsxParseIdentifier(), i = this.finishNode(r, "JSXMemberExpression");
      }

      return i;
    }

    jsxParseAttributeValue() {
      let t;

      switch (this.state.type) {
        case 5:
          return t = this.startNode(), this.setContext(I.brace), this.next(), t = this.jsxParseExpressionContainer(t, I.j_oTag), t.expression.type === "JSXEmptyExpression" && this.raise(W.AttributeIsEmpty, {
            at: t
          }), t;

        case 138:
        case 129:
          return this.parseExprAtom();

        default:
          throw this.raise(W.UnsupportedJsxValue, {
            at: this.state.startLoc
          });
      }
    }

    jsxParseEmptyExpression() {
      let t = this.startNodeAt(this.state.lastTokEndLoc.index, this.state.lastTokEndLoc);
      return this.finishNodeAt(t, "JSXEmptyExpression", this.state.startLoc);
    }

    jsxParseSpreadChild(t) {
      return this.next(), t.expression = this.parseExpression(), this.setContext(I.j_expr), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(t, "JSXSpreadChild");
    }

    jsxParseExpressionContainer(t, s) {
      if (this.match(8)) t.expression = this.jsxParseEmptyExpression();else {
        let i = this.parseExpression();
        t.expression = i;
      }
      return this.setContext(s), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(t, "JSXExpressionContainer");
    }

    jsxParseAttribute() {
      let t = this.startNode();
      return this.match(5) ? (this.setContext(I.brace), this.next(), this.expect(21), t.argument = this.parseMaybeAssignAllowIn(), this.setContext(I.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(t, "JSXSpreadAttribute")) : (t.name = this.jsxParseNamespacedName(), t.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(t, "JSXAttribute"));
    }

    jsxParseOpeningElementAt(t, s) {
      let i = this.startNodeAt(t, s);
      return this.eat(139) ? this.finishNode(i, "JSXOpeningFragment") : (i.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(i));
    }

    jsxParseOpeningElementAfterName(t) {
      let s = [];

      for (; !this.match(56) && !this.match(139);) s.push(this.jsxParseAttribute());

      return t.attributes = s, t.selfClosing = this.eat(56), this.expect(139), this.finishNode(t, "JSXOpeningElement");
    }

    jsxParseClosingElementAt(t, s) {
      let i = this.startNodeAt(t, s);
      return this.eat(139) ? this.finishNode(i, "JSXClosingFragment") : (i.name = this.jsxParseElementName(), this.expect(139), this.finishNode(i, "JSXClosingElement"));
    }

    jsxParseElementAt(t, s) {
      let i = this.startNodeAt(t, s),
          r = [],
          n = this.jsxParseOpeningElementAt(t, s),
          o = null;

      if (!n.selfClosing) {
        t: for (;;) switch (this.state.type) {
          case 138:
            if (t = this.state.start, s = this.state.startLoc, this.next(), this.eat(56)) {
              o = this.jsxParseClosingElementAt(t, s);
              break t;
            }

            r.push(this.jsxParseElementAt(t, s));
            break;

          case 137:
            r.push(this.parseExprAtom());
            break;

          case 5:
            {
              let h = this.startNode();
              this.setContext(I.brace), this.next(), this.match(21) ? r.push(this.jsxParseSpreadChild(h)) : r.push(this.jsxParseExpressionContainer(h, I.j_expr));
              break;
            }

          default:
            throw this.unexpected();
        }

        q(n) && !q(o) && o !== null ? this.raise(W.MissingClosingTagFragment, {
          at: o
        }) : !q(n) && q(o) ? this.raise(W.MissingClosingTagElement, {
          at: o,
          openingTagName: st(n.name)
        }) : !q(n) && !q(o) && st(o.name) !== st(n.name) && this.raise(W.MissingClosingTagElement, {
          at: o,
          openingTagName: st(n.name)
        });
      }

      if (q(n) ? (i.openingFragment = n, i.closingFragment = o) : (i.openingElement = n, i.closingElement = o), i.children = r, this.match(47)) throw this.raise(W.UnwrappedAdjacentJSXElements, {
        at: this.state.startLoc
      });
      return q(n) ? this.finishNode(i, "JSXFragment") : this.finishNode(i, "JSXElement");
    }

    jsxParseElement() {
      let t = this.state.start,
          s = this.state.startLoc;
      return this.next(), this.jsxParseElementAt(t, s);
    }

    setContext(t) {
      let {
        context: s
      } = this.state;
      s[s.length - 1] = t;
    }

    parseExprAtom(t) {
      return this.match(137) ? this.parseLiteral(this.state.value, "JSXText") : this.match(138) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(138), this.jsxParseElement()) : super.parseExprAtom(t);
    }

    skipSpace() {
      this.curContext().preserveSpace || super.skipSpace();
    }

    getTokenFromCode(t) {
      let s = this.curContext();
      if (s === I.j_expr) return this.jsxReadToken();

      if (s === I.j_oTag || s === I.j_cTag) {
        if (_(t)) return this.jsxReadWord();
        if (t === 62) return ++this.state.pos, this.finishToken(139);
        if ((t === 34 || t === 39) && s === I.j_oTag) return this.jsxReadString(t);
      }

      return t === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33 ? (++this.state.pos, this.finishToken(138)) : super.getTokenFromCode(t);
    }

    updateContext(t) {
      let {
        context: s,
        type: i
      } = this.state;
      if (i === 56 && t === 138) s.splice(-2, 2, I.j_cTag), this.state.canStartJSXElement = !1;else if (i === 138) s.push(I.j_oTag);else if (i === 139) {
        let r = s[s.length - 1];
        r === I.j_oTag && t === 56 || r === I.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === I.j_expr) : (this.setContext(I.j_expr), this.state.canStartJSXElement = !0);
      } else this.state.canStartJSXElement = Zs(i);
    }

  },
      fe = class extends bt {
    constructor(...e) {
      super(...e), this.types = new Set(), this.enums = new Set(), this.constEnums = new Set(), this.classes = new Set(), this.exportOnlyBindings = new Set();
    }

  },
      me = class extends Tt {
    constructor(...e) {
      super(...e), this.importsStack = [];
    }

    createScope(e) {
      return this.importsStack.push(new Set()), new fe(e);
    }

    enter(e) {
      e == rt && this.importsStack.push(new Set()), super.enter(e);
    }

    exit() {
      let e = super.exit();
      return e == rt && this.importsStack.pop(), e;
    }

    hasImport(e, t) {
      let s = this.importsStack.length;
      if (this.importsStack[s - 1].has(e)) return !0;

      if (!t && s > 1) {
        for (let i = 0; i < s - 1; i++) if (this.importsStack[i].has(e)) return !0;
      }

      return !1;
    }

    declareName(e, t, s) {
      if (t & xt) {
        this.hasImport(e, !0) && this.parser.raise(l.VarRedeclaration, {
          at: s,
          identifierName: e
        }), this.importsStack[this.importsStack.length - 1].add(e);
        return;
      }

      let i = this.currentScope();

      if (t & ke) {
        this.maybeExportDefined(i, e), i.exportOnlyBindings.add(e);
        return;
      }

      super.declareName(e, t, s), t & Z && (t & V || (this.checkRedeclarationInScope(i, e, t, s), this.maybeExportDefined(i, e)), i.types.add(e)), t & Zt && i.enums.add(e), t & te && i.constEnums.add(e), t & Ot && i.classes.add(e);
    }

    isRedeclaredInScope(e, t, s) {
      if (e.enums.has(t)) {
        if (s & Zt) {
          let i = !!(s & te),
              r = e.constEnums.has(t);
          return i !== r;
        }

        return !0;
      }

      return s & Ot && e.classes.has(t) ? e.lexical.has(t) ? !!(s & V) : !1 : s & Z && e.types.has(t) ? !0 : super.isRedeclaredInScope(e, t, s);
    }

    checkLocalExport(e) {
      let {
        name: t
      } = e;
      if (this.hasImport(t)) return;
      let s = this.scopeStack.length;

      for (let i = s - 1; i >= 0; i--) {
        let r = this.scopeStack[i];
        if (r.types.has(t) || r.exportOnlyBindings.has(t)) return;
      }

      super.checkLocalExport(e);
    }

  },
      Yi = (a, e) => Object.hasOwnProperty.call(a, e) && a[e];

  function Qi(a) {
    if (a == null) throw new Error(`Unexpected ${a} value.`);
    return a;
  }

  function Ke(a) {
    if (!a) throw new Error("Assert fail");
  }

  var x = R`typescript`({
    AbstractMethodHasImplementation: ({
      methodName: a
    }) => `Method '${a}' cannot have an implementation because it is marked abstract.`,
    AbstractPropertyHasInitializer: ({
      propertyName: a
    }) => `Property '${a}' cannot have an initializer because it is marked abstract.`,
    AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
    AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
    CannotFindName: ({
      name: a
    }) => `Cannot find name '${a}'.`,
    ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
    ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
    ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
    ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
    DeclareAccessor: ({
      kind: a
    }) => `'declare' is not allowed in ${a}ters.`,
    DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
    DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
    DuplicateAccessibilityModifier: ({
      modifier: a
    }) => "Accessibility modifier already seen.",
    DuplicateModifier: ({
      modifier: a
    }) => `Duplicate modifier: '${a}'.`,
    EmptyHeritageClauseType: ({
      token: a
    }) => `'${a}' list cannot be empty.`,
    EmptyTypeArguments: "Type argument list cannot be empty.",
    EmptyTypeParameters: "Type parameter list cannot be empty.",
    ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
    ImportAliasHasImportType: "An import alias can not use 'import type'.",
    IncompatibleModifiers: ({
      modifiers: a
    }) => `'${a[0]}' modifier cannot be used with '${a[1]}' modifier.`,
    IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
    IndexSignatureHasAccessibility: ({
      modifier: a
    }) => `Index signatures cannot have an accessibility modifier ('${a}').`,
    IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
    IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
    IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
    InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
    InvalidModifierOnTypeMember: ({
      modifier: a
    }) => `'${a}' modifier cannot appear on a type member.`,
    InvalidModifierOnTypeParameter: ({
      modifier: a
    }) => `'${a}' modifier cannot appear on a type parameter.`,
    InvalidModifierOnTypeParameterPositions: ({
      modifier: a
    }) => `'${a}' modifier can only appear on a type parameter of a class, interface or type alias.`,
    InvalidModifiersOrder: ({
      orderedModifiers: a
    }) => `'${a[0]}' modifier must precede '${a[1]}' modifier.`,
    InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
    InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
    MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
    MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
    NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
    NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
    OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
    OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
    PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
    PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
    PrivateElementHasAccessibility: ({
      modifier: a
    }) => `Private elements cannot have an accessibility modifier ('${a}').`,
    ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
    ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
    ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
    SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
    SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
    SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
    SingleTypeParameterWithoutTrailingComma: ({
      typeParameterName: a
    }) => `Single type parameter ${a} should have a trailing comma. Example usage: <${a},>.`,
    StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
    TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
    TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
    TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
    TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
    UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
    UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
    UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
    UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
    UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
    UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
    UnsupportedSignatureParameterKind: ({
      type: a
    }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${a}.`
  });

  function Zi(a) {
    switch (a) {
      case "any":
        return "TSAnyKeyword";

      case "boolean":
        return "TSBooleanKeyword";

      case "bigint":
        return "TSBigIntKeyword";

      case "never":
        return "TSNeverKeyword";

      case "number":
        return "TSNumberKeyword";

      case "object":
        return "TSObjectKeyword";

      case "string":
        return "TSStringKeyword";

      case "symbol":
        return "TSSymbolKeyword";

      case "undefined":
        return "TSUndefinedKeyword";

      case "unknown":
        return "TSUnknownKeyword";

      default:
        return;
    }
  }

  function He(a) {
    return a === "private" || a === "public" || a === "protected";
  }

  function tr(a) {
    return a === "in" || a === "out";
  }

  var er = a => class extends a {
    getScopeHandler() {
      return me;
    }

    tsIsIdentifier() {
      return w(this.state.type);
    }

    tsTokenCanFollowModifier() {
      return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(134) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
    }

    tsNextTokenCanFollowModifier() {
      return this.next(), this.tsTokenCanFollowModifier();
    }

    tsParseModifier(t, s) {
      if (!w(this.state.type) && this.state.type !== 58) return;
      let i = this.state.value;

      if (t.indexOf(i) !== -1) {
        if (s && this.tsIsStartOfStaticBlocks()) return;
        if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return i;
      }
    }

    tsParseModifiers({
      modified: t,
      allowedModifiers: s,
      disallowedModifiers: i,
      stopOnStartOfClassStaticBlock: r,
      errorTemplate: n = x.InvalidModifierOnTypeMember
    }) {
      let o = (c, u, p, y) => {
        u === p && t[y] && this.raise(x.InvalidModifiersOrder, {
          at: c,
          orderedModifiers: [p, y]
        });
      },
          h = (c, u, p, y) => {
        (t[p] && u === y || t[y] && u === p) && this.raise(x.IncompatibleModifiers, {
          at: c,
          modifiers: [p, y]
        });
      };

      for (;;) {
        let {
          startLoc: c
        } = this.state,
            u = this.tsParseModifier(s.concat(i ?? []), r);
        if (!u) break;
        He(u) ? t.accessibility ? this.raise(x.DuplicateAccessibilityModifier, {
          at: c,
          modifier: u
        }) : (o(c, u, u, "override"), o(c, u, u, "static"), o(c, u, u, "readonly"), t.accessibility = u) : tr(u) ? (t[u] && this.raise(x.DuplicateModifier, {
          at: c,
          modifier: u
        }), t[u] = !0, o(c, u, "in", "out")) : (Object.hasOwnProperty.call(t, u) ? this.raise(x.DuplicateModifier, {
          at: c,
          modifier: u
        }) : (o(c, u, "static", "readonly"), o(c, u, "static", "override"), o(c, u, "override", "readonly"), o(c, u, "abstract", "override"), h(c, u, "declare", "override"), h(c, u, "static", "abstract")), t[u] = !0), i != null && i.includes(u) && this.raise(n, {
          at: c,
          modifier: u
        });
      }
    }

    tsIsListTerminator(t) {
      switch (t) {
        case "EnumMembers":
        case "TypeMembers":
          return this.match(8);

        case "HeritageClauseElement":
          return this.match(5);

        case "TupleElementTypes":
          return this.match(3);

        case "TypeParametersOrArguments":
          return this.match(48);
      }

      throw new Error("Unreachable");
    }

    tsParseList(t, s) {
      let i = [];

      for (; !this.tsIsListTerminator(t);) i.push(s());

      return i;
    }

    tsParseDelimitedList(t, s, i) {
      return Qi(this.tsParseDelimitedListWorker(t, s, !0, i));
    }

    tsParseDelimitedListWorker(t, s, i, r) {
      let n = [],
          o = -1;

      for (; !this.tsIsListTerminator(t);) {
        o = -1;
        let h = s();
        if (h == null) return;

        if (n.push(h), this.eat(12)) {
          o = this.state.lastTokStart;
          continue;
        }

        if (this.tsIsListTerminator(t)) break;
        i && this.expect(12);
        return;
      }

      return r && (r.value = o), n;
    }

    tsParseBracketedList(t, s, i, r, n) {
      r || (i ? this.expect(0) : this.expect(47));
      let o = this.tsParseDelimitedList(t, s, n);
      return i ? this.expect(3) : this.expect(48), o;
    }

    tsParseImportType() {
      let t = this.startNode();
      return this.expect(83), this.expect(10), this.match(129) || this.raise(x.UnsupportedImportTypeArgument, {
        at: this.state.startLoc
      }), t.argument = super.parseExprAtom(), this.expect(11), this.eat(16) && (t.qualifier = this.tsParseEntityName()), this.match(47) && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSImportType");
    }

    tsParseEntityName(t = !0) {
      let s = this.parseIdentifier(t);

      for (; this.eat(16);) {
        let i = this.startNodeAtNode(s);
        i.left = s, i.right = this.parseIdentifier(t), s = this.finishNode(i, "TSQualifiedName");
      }

      return s;
    }

    tsParseTypeReference() {
      let t = this.startNode();
      return t.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSTypeReference");
    }

    tsParseThisTypePredicate(t) {
      this.next();
      let s = this.startNodeAtNode(t);
      return s.parameterName = t, s.typeAnnotation = this.tsParseTypeAnnotation(!1), s.asserts = !1, this.finishNode(s, "TSTypePredicate");
    }

    tsParseThisTypeNode() {
      let t = this.startNode();
      return this.next(), this.finishNode(t, "TSThisType");
    }

    tsParseTypeQuery() {
      let t = this.startNode();
      return this.expect(87), this.match(83) ? t.exprName = this.tsParseImportType() : t.exprName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSTypeQuery");
    }

    tsParseInOutModifiers(t) {
      this.tsParseModifiers({
        modified: t,
        allowedModifiers: ["in", "out"],
        disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: x.InvalidModifierOnTypeParameter
      });
    }

    tsParseNoneModifiers(t) {
      this.tsParseModifiers({
        modified: t,
        allowedModifiers: [],
        disallowedModifiers: ["in", "out"],
        errorTemplate: x.InvalidModifierOnTypeParameterPositions
      });
    }

    tsParseTypeParameter(t = this.tsParseNoneModifiers.bind(this)) {
      let s = this.startNode();
      return t(s), s.name = this.tsParseTypeParameterName(), s.constraint = this.tsEatThenParseType(81), s.default = this.tsEatThenParseType(29), this.finishNode(s, "TSTypeParameter");
    }

    tsTryParseTypeParameters(t) {
      if (this.match(47)) return this.tsParseTypeParameters(t);
    }

    tsParseTypeParameters(t) {
      let s = this.startNode();
      this.match(47) || this.match(138) ? this.next() : this.unexpected();
      let i = {
        value: -1
      };
      return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, t), !1, !0, i), s.params.length === 0 && this.raise(x.EmptyTypeParameters, {
        at: s
      }), i.value !== -1 && this.addExtra(s, "trailingComma", i.value), this.finishNode(s, "TSTypeParameterDeclaration");
    }

    tsTryNextParseConstantContext() {
      if (this.lookahead().type !== 75) return null;
      this.next();
      let t = this.tsParseTypeReference();
      return t.typeParameters && this.raise(x.CannotFindName, {
        at: t.typeName,
        name: "const"
      }), t;
    }

    tsFillSignature(t, s) {
      let i = t === 19,
          r = "parameters",
          n = "typeAnnotation";
      s.typeParameters = this.tsTryParseTypeParameters(), this.expect(10), s[r] = this.tsParseBindingListForSignature(), i ? s[n] = this.tsParseTypeOrTypePredicateAnnotation(t) : this.match(t) && (s[n] = this.tsParseTypeOrTypePredicateAnnotation(t));
    }

    tsParseBindingListForSignature() {
      return super.parseBindingList(11, 41).map(t => (t.type !== "Identifier" && t.type !== "RestElement" && t.type !== "ObjectPattern" && t.type !== "ArrayPattern" && this.raise(x.UnsupportedSignatureParameterKind, {
        at: t,
        type: t.type
      }), t));
    }

    tsParseTypeMemberSemicolon() {
      !this.eat(12) && !this.isLineTerminator() && this.expect(13);
    }

    tsParseSignatureMember(t, s) {
      return this.tsFillSignature(14, s), this.tsParseTypeMemberSemicolon(), this.finishNode(s, t);
    }

    tsIsUnambiguouslyIndexSignature() {
      return this.next(), w(this.state.type) ? (this.next(), this.match(14)) : !1;
    }

    tsTryParseIndexSignature(t) {
      if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) return;
      this.expect(0);
      let s = this.parseIdentifier();
      s.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(s), this.expect(3), t.parameters = [s];
      let i = this.tsTryParseTypeAnnotation();
      return i && (t.typeAnnotation = i), this.tsParseTypeMemberSemicolon(), this.finishNode(t, "TSIndexSignature");
    }

    tsParsePropertyOrMethodSignature(t, s) {
      this.eat(17) && (t.optional = !0);
      let i = t;

      if (this.match(10) || this.match(47)) {
        s && this.raise(x.ReadonlyForMethodSignature, {
          at: t
        });
        let r = i;
        r.kind && this.match(47) && this.raise(x.AccesorCannotHaveTypeParameters, {
          at: this.state.curPosition()
        }), this.tsFillSignature(14, r), this.tsParseTypeMemberSemicolon();
        let n = "parameters",
            o = "typeAnnotation";
        if (r.kind === "get") r[n].length > 0 && (this.raise(l.BadGetterArity, {
          at: this.state.curPosition()
        }), this.isThisParam(r[n][0]) && this.raise(x.AccesorCannotDeclareThisParameter, {
          at: this.state.curPosition()
        }));else if (r.kind === "set") {
          if (r[n].length !== 1) this.raise(l.BadSetterArity, {
            at: this.state.curPosition()
          });else {
            let h = r[n][0];
            this.isThisParam(h) && this.raise(x.AccesorCannotDeclareThisParameter, {
              at: this.state.curPosition()
            }), h.type === "Identifier" && h.optional && this.raise(x.SetAccesorCannotHaveOptionalParameter, {
              at: this.state.curPosition()
            }), h.type === "RestElement" && this.raise(x.SetAccesorCannotHaveRestParameter, {
              at: this.state.curPosition()
            });
          }
          r[o] && this.raise(x.SetAccesorCannotHaveReturnType, {
            at: r[o]
          });
        } else r.kind = "method";
        return this.finishNode(r, "TSMethodSignature");
      } else {
        let r = i;
        s && (r.readonly = !0);
        let n = this.tsTryParseTypeAnnotation();
        return n && (r.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(r, "TSPropertySignature");
      }
    }

    tsParseTypeMember() {
      let t = this.startNode();
      if (this.match(10) || this.match(47)) return this.tsParseSignatureMember("TSCallSignatureDeclaration", t);

      if (this.match(77)) {
        let i = this.startNode();
        return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", t) : (t.key = this.createIdentifier(i, "new"), this.tsParsePropertyOrMethodSignature(t, !1));
      }

      this.tsParseModifiers({
        modified: t,
        allowedModifiers: ["readonly"],
        disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
      });
      let s = this.tsTryParseIndexSignature(t);
      return s || (super.parsePropertyName(t), !t.computed && t.key.type === "Identifier" && (t.key.name === "get" || t.key.name === "set") && this.tsTokenCanFollowModifier() && (t.kind = t.key.name, super.parsePropertyName(t)), this.tsParsePropertyOrMethodSignature(t, !!t.readonly));
    }

    tsParseTypeLiteral() {
      let t = this.startNode();
      return t.members = this.tsParseObjectTypeMembers(), this.finishNode(t, "TSTypeLiteral");
    }

    tsParseObjectTypeMembers() {
      this.expect(5);
      let t = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
      return this.expect(8), t;
    }

    tsIsStartOfMappedType() {
      return this.next(), this.eat(53) ? this.isContextual(118) : (this.isContextual(118) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? !1 : (this.next(), this.match(58)));
    }

    tsParseMappedTypeParameter() {
      let t = this.startNode();
      return t.name = this.tsParseTypeParameterName(), t.constraint = this.tsExpectThenParseType(58), this.finishNode(t, "TSTypeParameter");
    }

    tsParseMappedType() {
      let t = this.startNode();
      return this.expect(5), this.match(53) ? (t.readonly = this.state.value, this.next(), this.expectContextual(118)) : this.eatContextual(118) && (t.readonly = !0), this.expect(0), t.typeParameter = this.tsParseMappedTypeParameter(), t.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (t.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (t.optional = !0), t.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(t, "TSMappedType");
    }

    tsParseTupleType() {
      let t = this.startNode();
      t.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
      let s = !1,
          i = null;
      return t.elementTypes.forEach(r => {
        var n;
        let {
          type: o
        } = r;
        s && o !== "TSRestType" && o !== "TSOptionalType" && !(o === "TSNamedTupleMember" && r.optional) && this.raise(x.OptionalTypeBeforeRequired, {
          at: r
        }), s || (s = o === "TSNamedTupleMember" && r.optional || o === "TSOptionalType");
        let h = o;
        o === "TSRestType" && (r = r.typeAnnotation, h = r.type);
        let c = h === "TSNamedTupleMember";
        (n = i) != null || (i = c), i !== c && this.raise(x.MixedLabeledAndUnlabeledElements, {
          at: r
        });
      }), this.finishNode(t, "TSTupleType");
    }

    tsParseTupleElementType() {
      let {
        start: t,
        startLoc: s
      } = this.state,
          i = this.eat(21),
          r = this.tsParseType(),
          n = this.eat(17);

      if (this.eat(14)) {
        let h = this.startNodeAtNode(r);
        h.optional = n, r.type === "TSTypeReference" && !r.typeParameters && r.typeName.type === "Identifier" ? h.label = r.typeName : (this.raise(x.InvalidTupleMemberLabel, {
          at: r
        }), h.label = r), h.elementType = this.tsParseType(), r = this.finishNode(h, "TSNamedTupleMember");
      } else if (n) {
        let h = this.startNodeAtNode(r);
        h.typeAnnotation = r, r = this.finishNode(h, "TSOptionalType");
      }

      if (i) {
        let h = this.startNodeAt(t, s);
        h.typeAnnotation = r, r = this.finishNode(h, "TSRestType");
      }

      return r;
    }

    tsParseParenthesizedType() {
      let t = this.startNode();
      return this.expect(10), t.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(t, "TSParenthesizedType");
    }

    tsParseFunctionOrConstructorType(t, s) {
      let i = this.startNode();
      return t === "TSConstructorType" && (i.abstract = !!s, s && this.next(), this.next()), this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, i)), this.finishNode(i, t);
    }

    tsParseLiteralTypeNode() {
      let t = this.startNode();
      return t.literal = (() => {
        switch (this.state.type) {
          case 130:
          case 131:
          case 129:
          case 85:
          case 86:
            return super.parseExprAtom();

          default:
            throw this.unexpected();
        }
      })(), this.finishNode(t, "TSLiteralType");
    }

    tsParseTemplateLiteralType() {
      let t = this.startNode();
      return t.literal = super.parseTemplate(!1), this.finishNode(t, "TSLiteralType");
    }

    parseTemplateSubstitution() {
      return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
    }

    tsParseThisTypeOrThisTypePredicate() {
      let t = this.tsParseThisTypeNode();
      return this.isContextual(113) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(t) : t;
    }

    tsParseNonArrayType() {
      switch (this.state.type) {
        case 129:
        case 130:
        case 131:
        case 85:
        case 86:
          return this.tsParseLiteralTypeNode();

        case 53:
          if (this.state.value === "-") {
            let t = this.startNode(),
                s = this.lookahead();
            if (s.type !== 130 && s.type !== 131) throw this.unexpected();
            return t.literal = this.parseMaybeUnary(), this.finishNode(t, "TSLiteralType");
          }

          break;

        case 78:
          return this.tsParseThisTypeOrThisTypePredicate();

        case 87:
          return this.tsParseTypeQuery();

        case 83:
          return this.tsParseImportType();

        case 5:
          return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();

        case 0:
          return this.tsParseTupleType();

        case 10:
          return this.tsParseParenthesizedType();

        case 25:
        case 24:
          return this.tsParseTemplateLiteralType();

        default:
          {
            let {
              type: t
            } = this.state;

            if (w(t) || t === 88 || t === 84) {
              let s = t === 88 ? "TSVoidKeyword" : t === 84 ? "TSNullKeyword" : Zi(this.state.value);

              if (s !== void 0 && this.lookaheadCharCode() !== 46) {
                let i = this.startNode();
                return this.next(), this.finishNode(i, s);
              }

              return this.tsParseTypeReference();
            }
          }
      }

      throw this.unexpected();
    }

    tsParseArrayTypeOrHigher() {
      let t = this.tsParseNonArrayType();

      for (; !this.hasPrecedingLineBreak() && this.eat(0);) if (this.match(3)) {
        let s = this.startNodeAtNode(t);
        s.elementType = t, this.expect(3), t = this.finishNode(s, "TSArrayType");
      } else {
        let s = this.startNodeAtNode(t);
        s.objectType = t, s.indexType = this.tsParseType(), this.expect(3), t = this.finishNode(s, "TSIndexedAccessType");
      }

      return t;
    }

    tsParseTypeOperator() {
      let t = this.startNode(),
          s = this.state.value;
      return this.next(), t.operator = s, t.typeAnnotation = this.tsParseTypeOperatorOrHigher(), s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(t), this.finishNode(t, "TSTypeOperator");
    }

    tsCheckTypeAnnotationForReadOnly(t) {
      switch (t.typeAnnotation.type) {
        case "TSTupleType":
        case "TSArrayType":
          return;

        default:
          this.raise(x.UnexpectedReadonly, {
            at: t
          });
      }
    }

    tsParseInferType() {
      let t = this.startNode();
      this.expectContextual(112);
      let s = this.startNode();
      return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType()), t.typeParameter = this.finishNode(s, "TSTypeParameter"), this.finishNode(t, "TSInferType");
    }

    tsParseConstraintForInferType() {
      if (this.eat(81)) {
        let t = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
        if (this.state.inDisallowConditionalTypesContext || !this.match(17)) return t;
      }
    }

    tsParseTypeOperatorOrHigher() {
      return ai(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(112) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
    }

    tsParseUnionOrIntersectionType(t, s, i) {
      let r = this.startNode(),
          n = this.eat(i),
          o = [];

      do o.push(s()); while (this.eat(i));

      return o.length === 1 && !n ? o[0] : (r.types = o, this.finishNode(r, t));
    }

    tsParseIntersectionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
    }

    tsParseUnionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
    }

    tsIsStartOfFunctionType() {
      return this.match(47) ? !0 : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
    }

    tsSkipParameterStart() {
      if (w(this.state.type) || this.match(78)) return this.next(), !0;

      if (this.match(5)) {
        let {
          errors: t
        } = this.state,
            s = t.length;

        try {
          return this.parseObjectLike(8, !0), t.length === s;
        } catch {
          return !1;
        }
      }

      if (this.match(0)) {
        this.next();
        let {
          errors: t
        } = this.state,
            s = t.length;

        try {
          return super.parseBindingList(3, 93, !0), t.length === s;
        } catch {
          return !1;
        }
      }

      return !1;
    }

    tsIsUnambiguouslyStartOfFunctionType() {
      return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))));
    }

    tsParseTypeOrTypePredicateAnnotation(t) {
      return this.tsInType(() => {
        let s = this.startNode();
        this.expect(t);
        let i = this.startNode(),
            r = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));

        if (r && this.match(78)) {
          let h = this.tsParseThisTypeOrThisTypePredicate();
          return h.type === "TSThisType" ? (i.parameterName = h, i.asserts = !0, i.typeAnnotation = null, h = this.finishNode(i, "TSTypePredicate")) : (this.resetStartLocationFromNode(h, i), h.asserts = !0), s.typeAnnotation = h, this.finishNode(s, "TSTypeAnnotation");
        }

        let n = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
        if (!n) return r ? (i.parameterName = this.parseIdentifier(), i.asserts = r, i.typeAnnotation = null, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(!1, s);
        let o = this.tsParseTypeAnnotation(!1);
        return i.parameterName = n, i.typeAnnotation = o, i.asserts = r, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation");
      });
    }

    tsTryParseTypeOrTypePredicateAnnotation() {
      return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0;
    }

    tsTryParseTypeAnnotation() {
      return this.match(14) ? this.tsParseTypeAnnotation() : void 0;
    }

    tsTryParseType() {
      return this.tsEatThenParseType(14);
    }

    tsParseTypePredicatePrefix() {
      let t = this.parseIdentifier();
      if (this.isContextual(113) && !this.hasPrecedingLineBreak()) return this.next(), t;
    }

    tsParseTypePredicateAsserts() {
      if (this.state.type !== 106) return !1;
      let t = this.state.containsEsc;
      return this.next(), !w(this.state.type) && !this.match(78) ? !1 : (t && this.raise(l.InvalidEscapedReservedWord, {
        at: this.state.lastTokStartLoc,
        reservedWord: "asserts"
      }), !0);
    }

    tsParseTypeAnnotation(t = !0, s = this.startNode()) {
      return this.tsInType(() => {
        t && this.expect(14), s.typeAnnotation = this.tsParseType();
      }), this.finishNode(s, "TSTypeAnnotation");
    }

    tsParseType() {
      Ke(this.state.inType);
      let t = this.tsParseNonConditionalType();
      if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81)) return t;
      let s = this.startNodeAtNode(t);
      return s.checkType = t, s.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType()), this.expect(17), s.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.expect(14), s.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.finishNode(s, "TSConditionalType");
    }

    isAbstractConstructorSignature() {
      return this.isContextual(120) && this.lookahead().type === 77;
    }

    tsParseNonConditionalType() {
      return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
    }

    tsParseTypeAssertion() {
      this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(x.ReservedTypeAssertion, {
        at: this.state.startLoc
      });
      let t = this.startNode(),
          s = this.tsTryNextParseConstantContext();
      return t.typeAnnotation = s || this.tsNextThenParseType(), this.expect(48), t.expression = this.parseMaybeUnary(), this.finishNode(t, "TSTypeAssertion");
    }

    tsParseHeritageClause(t) {
      let s = this.state.startLoc,
          i = this.tsParseDelimitedList("HeritageClauseElement", () => {
        let r = this.startNode();
        return r.expression = this.tsParseEntityName(), this.match(47) && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSExpressionWithTypeArguments");
      });
      return i.length || this.raise(x.EmptyHeritageClauseType, {
        at: s,
        token: t
      }), i;
    }

    tsParseInterfaceDeclaration(t, s = {}) {
      if (this.hasFollowingLineBreak()) return null;
      this.expectContextual(125), s.declare && (t.declare = !0), w(this.state.type) ? (t.id = this.parseIdentifier(), this.checkIdentifier(t.id, Pi)) : (t.id = null, this.raise(x.MissingInterfaceName, {
        at: this.state.startLoc
      })), t.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(81) && (t.extends = this.tsParseHeritageClause("extends"));
      let i = this.startNode();
      return i.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), t.body = this.finishNode(i, "TSInterfaceBody"), this.finishNode(t, "TSInterfaceDeclaration");
    }

    tsParseTypeAliasDeclaration(t) {
      return t.id = this.parseIdentifier(), this.checkIdentifier(t.id, bi), t.typeAnnotation = this.tsInType(() => {
        if (t.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.expect(29), this.isContextual(111) && this.lookahead().type !== 16) {
          let s = this.startNode();
          return this.next(), this.finishNode(s, "TSIntrinsicKeyword");
        }

        return this.tsParseType();
      }), this.semicolon(), this.finishNode(t, "TSTypeAliasDeclaration");
    }

    tsInNoContext(t) {
      let s = this.state.context;
      this.state.context = [s[0]];

      try {
        return t();
      } finally {
        this.state.context = s;
      }
    }

    tsInType(t) {
      let s = this.state.inType;
      this.state.inType = !0;

      try {
        return t();
      } finally {
        this.state.inType = s;
      }
    }

    tsInDisallowConditionalTypesContext(t) {
      let s = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !0;

      try {
        return t();
      } finally {
        this.state.inDisallowConditionalTypesContext = s;
      }
    }

    tsInAllowConditionalTypesContext(t) {
      let s = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !1;

      try {
        return t();
      } finally {
        this.state.inDisallowConditionalTypesContext = s;
      }
    }

    tsEatThenParseType(t) {
      return this.match(t) ? this.tsNextThenParseType() : void 0;
    }

    tsExpectThenParseType(t) {
      return this.tsDoThenParseType(() => this.expect(t));
    }

    tsNextThenParseType() {
      return this.tsDoThenParseType(() => this.next());
    }

    tsDoThenParseType(t) {
      return this.tsInType(() => (t(), this.tsParseType()));
    }

    tsParseEnumMember() {
      let t = this.startNode();
      return t.id = this.match(129) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(!0), this.eat(29) && (t.initializer = super.parseMaybeAssignAllowIn()), this.finishNode(t, "TSEnumMember");
    }

    tsParseEnumDeclaration(t, s = {}) {
      return s.const && (t.const = !0), s.declare && (t.declare = !0), this.expectContextual(122), t.id = this.parseIdentifier(), this.checkIdentifier(t.id, t.const ? gi : fs), this.expect(5), t.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(t, "TSEnumDeclaration");
    }

    tsParseModuleBlock() {
      let t = this.startNode();
      return this.scope.enter(et), this.expect(5), super.parseBlockOrModuleBlockBody(t.body = [], void 0, !0, 8), this.scope.exit(), this.finishNode(t, "TSModuleBlock");
    }

    tsParseModuleOrNamespaceDeclaration(t, s = !1) {
      if (t.id = this.parseIdentifier(), s || this.checkIdentifier(t.id, Ai), this.eat(16)) {
        let i = this.startNode();
        this.tsParseModuleOrNamespaceDeclaration(i, !0), t.body = i;
      } else this.scope.enter(rt), this.prodParam.enter(at), t.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();

      return this.finishNode(t, "TSModuleDeclaration");
    }

    tsParseAmbientExternalModuleDeclaration(t) {
      return this.isContextual(109) ? (t.global = !0, t.id = this.parseIdentifier()) : this.match(129) ? t.id = super.parseStringLiteral(this.state.value) : this.unexpected(), this.match(5) ? (this.scope.enter(rt), this.prodParam.enter(at), t.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(t, "TSModuleDeclaration");
    }

    tsParseImportEqualsDeclaration(t, s) {
      t.isExport = s || !1, t.id = this.parseIdentifier(), this.checkIdentifier(t.id, xt), this.expect(29);
      let i = this.tsParseModuleReference();
      return t.importKind === "type" && i.type !== "TSExternalModuleReference" && this.raise(x.ImportAliasHasImportType, {
        at: i
      }), t.moduleReference = i, this.semicolon(), this.finishNode(t, "TSImportEqualsDeclaration");
    }

    tsIsExternalModuleReference() {
      return this.isContextual(116) && this.lookaheadCharCode() === 40;
    }

    tsParseModuleReference() {
      return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(!1);
    }

    tsParseExternalModuleReference() {
      let t = this.startNode();
      if (this.expectContextual(116), this.expect(10), !this.match(129)) throw this.unexpected();
      return t.expression = super.parseExprAtom(), this.expect(11), this.finishNode(t, "TSExternalModuleReference");
    }

    tsLookAhead(t) {
      let s = this.state.clone(),
          i = t();
      return this.state = s, i;
    }

    tsTryParseAndCatch(t) {
      let s = this.tryParse(i => t() || i());
      if (!(s.aborted || !s.node)) return s.error && (this.state = s.failState), s.node;
    }

    tsTryParse(t) {
      let s = this.state.clone(),
          i = t();
      if (i !== void 0 && i !== !1) return i;
      this.state = s;
    }

    tsTryParseDeclare(t) {
      if (this.isLineTerminator()) return;
      let s = this.state.type,
          i;
      return this.isContextual(99) && (s = 74, i = "let"), this.tsInAmbientContext(() => {
        if (s === 68) return t.declare = !0, super.parseFunctionStatement(t, !1, !0);
        if (s === 80) return t.declare = !0, this.parseClass(t, !0, !1);
        if (s === 122) return this.tsParseEnumDeclaration(t, {
          declare: !0
        });
        if (s === 109) return this.tsParseAmbientExternalModuleDeclaration(t);
        if (s === 75 || s === 74) return !this.match(75) || !this.isLookaheadContextual("enum") ? (t.declare = !0, this.parseVarStatement(t, i || this.state.value, !0)) : (this.expect(75), this.tsParseEnumDeclaration(t, {
          const: !0,
          declare: !0
        }));

        if (s === 125) {
          let r = this.tsParseInterfaceDeclaration(t, {
            declare: !0
          });
          if (r) return r;
        }

        if (w(s)) return this.tsParseDeclaration(t, this.state.value, !0);
      });
    }

    tsTryParseExportDeclaration() {
      return this.tsParseDeclaration(this.startNode(), this.state.value, !0);
    }

    tsParseExpressionStatement(t, s) {
      switch (s.name) {
        case "declare":
          {
            let i = this.tsTryParseDeclare(t);
            if (i) return i.declare = !0, i;
            break;
          }

        case "global":
          if (this.match(5)) {
            this.scope.enter(rt), this.prodParam.enter(at);
            let i = t;
            return i.global = !0, i.id = s, i.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(i, "TSModuleDeclaration");
          }

          break;

        default:
          return this.tsParseDeclaration(t, s.name, !1);
      }
    }

    tsParseDeclaration(t, s, i) {
      switch (s) {
        case "abstract":
          if (this.tsCheckLineTerminator(i) && (this.match(80) || w(this.state.type))) return this.tsParseAbstractDeclaration(t);
          break;

        case "module":
          if (this.tsCheckLineTerminator(i)) {
            if (this.match(129)) return this.tsParseAmbientExternalModuleDeclaration(t);
            if (w(this.state.type)) return this.tsParseModuleOrNamespaceDeclaration(t);
          }

          break;

        case "namespace":
          if (this.tsCheckLineTerminator(i) && w(this.state.type)) return this.tsParseModuleOrNamespaceDeclaration(t);
          break;

        case "type":
          if (this.tsCheckLineTerminator(i) && w(this.state.type)) return this.tsParseTypeAliasDeclaration(t);
          break;
      }
    }

    tsCheckLineTerminator(t) {
      return t ? this.hasFollowingLineBreak() ? !1 : (this.next(), !0) : !this.isLineTerminator();
    }

    tsTryParseGenericAsyncArrowFunction(t, s) {
      if (!this.match(47)) return;
      let i = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = !0;
      let r = this.tsTryParseAndCatch(() => {
        let n = this.startNodeAt(t, s);
        return n.typeParameters = this.tsParseTypeParameters(), super.parseFunctionParams(n), n.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), n;
      });
      if (this.state.maybeInArrowParameters = i, !!r) return super.parseArrowExpression(r, null, !0);
    }

    tsParseTypeArgumentsInExpression() {
      if (this.reScan_lt() === 47) return this.tsParseTypeArguments();
    }

    tsParseTypeArguments() {
      let t = this.startNode();
      return t.params = this.tsInType(() => this.tsInNoContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), t.params.length === 0 && this.raise(x.EmptyTypeArguments, {
        at: t
      }), this.expect(48), this.finishNode(t, "TSTypeParameterInstantiation");
    }

    tsIsDeclarationStart() {
      return ni(this.state.type);
    }

    isExportDefaultSpecifier() {
      return this.tsIsDeclarationStart() ? !1 : super.isExportDefaultSpecifier();
    }

    parseAssignableListItem(t, s) {
      let i = this.state.start,
          r = this.state.startLoc,
          n,
          o = !1,
          h = !1;

      if (t !== void 0) {
        let p = {};
        this.tsParseModifiers({
          modified: p,
          allowedModifiers: ["public", "private", "protected", "override", "readonly"]
        }), n = p.accessibility, h = p.override, o = p.readonly, t === !1 && (n || o || h) && this.raise(x.UnexpectedParameterModifier, {
          at: r
        });
      }

      let c = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(c);
      let u = this.parseMaybeDefault(c.start, c.loc.start, c);

      if (n || o || h) {
        let p = this.startNodeAt(i, r);
        return s.length && (p.decorators = s), n && (p.accessibility = n), o && (p.readonly = o), h && (p.override = h), u.type !== "Identifier" && u.type !== "AssignmentPattern" && this.raise(x.UnsupportedParameterPropertyKind, {
          at: p
        }), p.parameter = u, this.finishNode(p, "TSParameterProperty");
      }

      return s.length && (c.decorators = s), u;
    }

    isSimpleParameter(t) {
      return t.type === "TSParameterProperty" && super.isSimpleParameter(t.parameter) || super.isSimpleParameter(t);
    }

    parseFunctionBodyAndFinish(t, s, i = !1) {
      this.match(14) && (t.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
      let r = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
      return r && !this.match(5) && this.isLineTerminator() ? this.finishNode(t, r) : r === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(x.DeclareFunctionHasImplementation, {
        at: t
      }), t.declare) ? super.parseFunctionBodyAndFinish(t, r, i) : super.parseFunctionBodyAndFinish(t, s, i);
    }

    registerFunctionStatementId(t) {
      !t.body && t.id ? this.checkIdentifier(t.id, Ue) : super.registerFunctionStatementId(t);
    }

    tsCheckForInvalidTypeCasts(t) {
      t.forEach(s => {
        s?.type === "TSTypeCastExpression" && this.raise(x.UnexpectedTypeAnnotation, {
          at: s.typeAnnotation
        });
      });
    }

    toReferencedList(t, s) {
      return this.tsCheckForInvalidTypeCasts(t), t;
    }

    parseArrayLike(t, s, i, r) {
      let n = super.parseArrayLike(t, s, i, r);
      return n.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(n.elements), n;
    }

    parseSubscript(t, s, i, r, n) {
      if (!this.hasPrecedingLineBreak() && this.match(35)) {
        this.state.canStartJSXElement = !1, this.next();
        let h = this.startNodeAt(s, i);
        return h.expression = t, this.finishNode(h, "TSNonNullExpression");
      }

      let o = !1;

      if (this.match(18) && this.lookaheadCharCode() === 60) {
        if (r) return n.stop = !0, t;
        n.optionalChainMember = o = !0, this.next();
      }

      if (this.match(47) || this.match(51)) {
        let h,
            c = this.tsTryParseAndCatch(() => {
          if (!r && this.atPossibleAsyncArrow(t)) {
            let d = this.tsTryParseGenericAsyncArrowFunction(s, i);
            if (d) return d;
          }

          let u = this.tsParseTypeArgumentsInExpression();
          if (!u) return;

          if (o && !this.match(10)) {
            h = this.state.curPosition();
            return;
          }

          if (Dt(this.state.type)) {
            let d = super.parseTaggedTemplateExpression(t, s, i, n);
            return d.typeParameters = u, d;
          }

          if (!r && this.eat(10)) {
            let d = this.startNodeAt(s, i);
            return d.callee = t, d.arguments = this.parseCallExpressionArguments(11, !1), this.tsCheckForInvalidTypeCasts(d.arguments), d.typeParameters = u, n.optionalChainMember && (d.optional = o), this.finishCallExpression(d, n.optionalChainMember);
          }

          let p = this.state.type;
          if (p === 48 || p === 52 || p !== 10 && Gt(p) && !this.hasPrecedingLineBreak()) return;
          let y = this.startNodeAt(s, i);
          return y.expression = t, y.typeParameters = u, this.finishNode(y, "TSInstantiationExpression");
        });
        if (h && this.unexpected(h, 10), c) return c.type === "TSInstantiationExpression" && (this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(x.InvalidPropertyAccessAfterInstantiationExpression, {
          at: this.state.startLoc
        }), c;
      }

      return super.parseSubscript(t, s, i, r, n);
    }

    parseNewCallee(t) {
      var s;
      super.parseNewCallee(t);
      let {
        callee: i
      } = t;
      i.type === "TSInstantiationExpression" && !((s = i.extra) != null && s.parenthesized) && (t.typeParameters = i.typeParameters, t.callee = i.expression);
    }

    parseExprOp(t, s, i, r) {
      if (It(58) > r && !this.hasPrecedingLineBreak() && this.isContextual(93)) {
        let n = this.startNodeAt(s, i);
        n.expression = t;
        let o = this.tsTryNextParseConstantContext();
        return o ? n.typeAnnotation = o : n.typeAnnotation = this.tsNextThenParseType(), this.finishNode(n, "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, s, i, r);
      }

      return super.parseExprOp(t, s, i, r);
    }

    checkReservedWord(t, s, i, r) {
      this.state.isAmbientContext || super.checkReservedWord(t, s, i, r);
    }

    checkDuplicateExports() {}

    parseImport(t) {
      if (t.importKind = "value", w(this.state.type) || this.match(55) || this.match(5)) {
        let i = this.lookahead();
        if (this.isContextual(126) && i.type !== 12 && i.type !== 97 && i.type !== 29 && (t.importKind = "type", this.next(), i = this.lookahead()), w(this.state.type) && i.type === 29) return this.tsParseImportEqualsDeclaration(t);
      }

      let s = super.parseImport(t);
      return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(x.TypeImportCannotSpecifyDefaultAndNamed, {
        at: s
      }), s;
    }

    parseExport(t) {
      if (this.match(83)) return this.next(), this.isContextual(126) && this.lookaheadCharCode() !== 61 ? (t.importKind = "type", this.next()) : t.importKind = "value", this.tsParseImportEqualsDeclaration(t, !0);

      if (this.eat(29)) {
        let s = t;
        return s.expression = super.parseExpression(), this.semicolon(), this.finishNode(s, "TSExportAssignment");
      } else if (this.eatContextual(93)) {
        let s = t;
        return this.expectContextual(124), s.id = this.parseIdentifier(), this.semicolon(), this.finishNode(s, "TSNamespaceExportDeclaration");
      } else return this.isContextual(126) && this.lookahead().type === 5 ? (this.next(), t.exportKind = "type") : t.exportKind = "value", super.parseExport(t);
    }

    isAbstractClass() {
      return this.isContextual(120) && this.lookahead().type === 80;
    }

    parseExportDefaultExpression() {
      if (this.isAbstractClass()) {
        let t = this.startNode();
        return this.next(), t.abstract = !0, this.parseClass(t, !0, !0);
      }

      if (this.match(125)) {
        let t = this.tsParseInterfaceDeclaration(this.startNode());
        if (t) return t;
      }

      return super.parseExportDefaultExpression();
    }

    parseVarStatement(t, s, i = !1) {
      let {
        isAmbientContext: r
      } = this.state,
          n = super.parseVarStatement(t, s, i || r);
      if (!r) return n;

      for (let {
        id: o,
        init: h
      } of n.declarations) !h || (s !== "const" || !!o.typeAnnotation ? this.raise(x.InitializerNotAllowedInAmbientContext, {
        at: h
      }) : h.type !== "StringLiteral" && h.type !== "BooleanLiteral" && h.type !== "NumericLiteral" && h.type !== "BigIntLiteral" && (h.type !== "TemplateLiteral" || h.expressions.length > 0) && !sr(h) && this.raise(x.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, {
        at: h
      }));

      return n;
    }

    parseStatementContent(t, s) {
      if (this.match(75) && this.isLookaheadContextual("enum")) {
        let i = this.startNode();
        return this.expect(75), this.tsParseEnumDeclaration(i, {
          const: !0
        });
      }

      if (this.isContextual(122)) return this.tsParseEnumDeclaration(this.startNode());

      if (this.isContextual(125)) {
        let i = this.tsParseInterfaceDeclaration(this.startNode());
        if (i) return i;
      }

      return super.parseStatementContent(t, s);
    }

    parseAccessModifier() {
      return this.tsParseModifier(["public", "protected", "private"]);
    }

    tsHasSomeModifiers(t, s) {
      return s.some(i => He(i) ? t.accessibility === i : !!t[i]);
    }

    tsIsStartOfStaticBlocks() {
      return this.isContextual(104) && this.lookaheadCharCode() === 123;
    }

    parseClassMember(t, s, i) {
      let r = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
      this.tsParseModifiers({
        modified: s,
        allowedModifiers: r,
        disallowedModifiers: ["in", "out"],
        stopOnStartOfClassStaticBlock: !0,
        errorTemplate: x.InvalidModifierOnTypeParameterPositions
      });

      let n = () => {
        this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(s, r) && this.raise(x.StaticBlockCannotHaveModifier, {
          at: this.state.curPosition()
        }), super.parseClassStaticBlock(t, s)) : this.parseClassMemberWithIsStatic(t, s, i, !!s.static);
      };

      s.declare ? this.tsInAmbientContext(n) : n();
    }

    parseClassMemberWithIsStatic(t, s, i, r) {
      let n = this.tsTryParseIndexSignature(s);

      if (n) {
        t.body.push(n), s.abstract && this.raise(x.IndexSignatureHasAbstract, {
          at: s
        }), s.accessibility && this.raise(x.IndexSignatureHasAccessibility, {
          at: s,
          modifier: s.accessibility
        }), s.declare && this.raise(x.IndexSignatureHasDeclare, {
          at: s
        }), s.override && this.raise(x.IndexSignatureHasOverride, {
          at: s
        });
        return;
      }

      !this.state.inAbstractClass && s.abstract && this.raise(x.NonAbstractClassHasAbstractMethod, {
        at: s
      }), s.override && (i.hadSuperClass || this.raise(x.OverrideNotInSubClass, {
        at: s
      })), super.parseClassMemberWithIsStatic(t, s, i, r);
    }

    parsePostMemberNameModifiers(t) {
      this.eat(17) && (t.optional = !0), t.readonly && this.match(10) && this.raise(x.ClassMethodHasReadonly, {
        at: t
      }), t.declare && this.match(10) && this.raise(x.ClassMethodHasDeclare, {
        at: t
      });
    }

    parseExpressionStatement(t, s) {
      return (s.type === "Identifier" ? this.tsParseExpressionStatement(t, s) : void 0) || super.parseExpressionStatement(t, s);
    }

    shouldParseExportDeclaration() {
      return this.tsIsDeclarationStart() ? !0 : super.shouldParseExportDeclaration();
    }

    parseConditional(t, s, i, r) {
      if (!this.state.maybeInArrowParameters || !this.match(17)) return super.parseConditional(t, s, i, r);
      let n = this.tryParse(() => super.parseConditional(t, s, i));
      return n.node ? (n.error && (this.state = n.failState), n.node) : (n.error && super.setOptionalParametersError(r, n.error), t);
    }

    parseParenItem(t, s, i) {
      if (t = super.parseParenItem(t, s, i), this.eat(17) && (t.optional = !0, this.resetEndLocation(t)), this.match(14)) {
        let r = this.startNodeAt(s, i);
        return r.expression = t, r.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(r, "TSTypeCastExpression");
      }

      return t;
    }

    parseExportDeclaration(t) {
      if (!this.state.isAmbientContext && this.isContextual(121)) return this.tsInAmbientContext(() => this.parseExportDeclaration(t));
      let s = this.state.start,
          i = this.state.startLoc,
          r = this.eatContextual(121);
      if (r && (this.isContextual(121) || !this.shouldParseExportDeclaration())) throw this.raise(x.ExpectedAmbientAfterExportDeclare, {
        at: this.state.startLoc
      });
      let o = w(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(t);
      return o ? ((o.type === "TSInterfaceDeclaration" || o.type === "TSTypeAliasDeclaration" || r) && (t.exportKind = "type"), r && (this.resetStartLocation(o, s, i), o.declare = !0), o) : null;
    }

    parseClassId(t, s, i, r) {
      if ((!s || i) && this.isContextual(110)) return;
      super.parseClassId(t, s, i, t.declare ? Ue : ps);
      let n = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
      n && (t.typeParameters = n);
    }

    parseClassPropertyAnnotation(t) {
      !t.optional && this.eat(35) && (t.definite = !0);
      let s = this.tsTryParseTypeAnnotation();
      s && (t.typeAnnotation = s);
    }

    parseClassProperty(t) {
      if (this.parseClassPropertyAnnotation(t), this.state.isAmbientContext && !(t.readonly && !t.typeAnnotation) && this.match(29) && this.raise(x.DeclareClassFieldHasInitializer, {
        at: this.state.startLoc
      }), t.abstract && this.match(29)) {
        let {
          key: s
        } = t;
        this.raise(x.AbstractPropertyHasInitializer, {
          at: this.state.startLoc,
          propertyName: s.type === "Identifier" && !t.computed ? s.name : `[${this.input.slice(s.start, s.end)}]`
        });
      }

      return super.parseClassProperty(t);
    }

    parseClassPrivateProperty(t) {
      return t.abstract && this.raise(x.PrivateElementHasAbstract, {
        at: t
      }), t.accessibility && this.raise(x.PrivateElementHasAccessibility, {
        at: t,
        modifier: t.accessibility
      }), this.parseClassPropertyAnnotation(t), super.parseClassPrivateProperty(t);
    }

    pushClassMethod(t, s, i, r, n, o) {
      let h = this.tsTryParseTypeParameters();
      h && n && this.raise(x.ConstructorHasTypeParameters, {
        at: h
      });
      let {
        declare: c = !1,
        kind: u
      } = s;
      c && (u === "get" || u === "set") && this.raise(x.DeclareAccessor, {
        at: s,
        kind: u
      }), h && (s.typeParameters = h), super.pushClassMethod(t, s, i, r, n, o);
    }

    pushClassPrivateMethod(t, s, i, r) {
      let n = this.tsTryParseTypeParameters();
      n && (s.typeParameters = n), super.pushClassPrivateMethod(t, s, i, r);
    }

    declareClassPrivateMethodInScope(t, s) {
      t.type !== "TSDeclareMethod" && (t.type === "MethodDefinition" && !t.value.body || super.declareClassPrivateMethodInScope(t, s));
    }

    parseClassSuper(t) {
      super.parseClassSuper(t), t.superClass && (this.match(47) || this.match(51)) && (t.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(110) && (t.implements = this.tsParseHeritageClause("implements"));
    }

    parseObjPropValue(t, s, i, r, n, o, h, c) {
      let u = this.tsTryParseTypeParameters();
      return u && (t.typeParameters = u), super.parseObjPropValue(t, s, i, r, n, o, h, c);
    }

    parseFunctionParams(t, s) {
      let i = this.tsTryParseTypeParameters();
      i && (t.typeParameters = i), super.parseFunctionParams(t, s);
    }

    parseVarId(t, s) {
      super.parseVarId(t, s), t.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (t.definite = !0);
      let i = this.tsTryParseTypeAnnotation();
      i && (t.id.typeAnnotation = i, this.resetEndLocation(t.id));
    }

    parseAsyncArrowFromCallExpression(t, s) {
      return this.match(14) && (t.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(t, s);
    }

    parseMaybeAssign(t, s) {
      var i, r, n, o, h, c, u;
      let p, y, d;

      if (this.hasPlugin("jsx") && (this.match(138) || this.match(47))) {
        if (p = this.state.clone(), y = this.tryParse(() => super.parseMaybeAssign(t, s), p), !y.error) return y.node;
        let {
          context: g
        } = this.state,
            E = g[g.length - 1];
        (E === I.j_oTag || E === I.j_expr) && g.pop();
      }

      if (!((i = y) != null && i.error) && !this.match(47)) return super.parseMaybeAssign(t, s);
      (!p || p === this.state) && (p = this.state.clone());
      let m,
          C = this.tryParse(g => {
        var E, v;
        m = this.tsParseTypeParameters();
        let D = super.parseMaybeAssign(t, s);
        return (D.type !== "ArrowFunctionExpression" || (E = D.extra) != null && E.parenthesized) && g(), ((v = m) == null ? void 0 : v.params.length) !== 0 && this.resetStartLocationFromNode(D, m), D.typeParameters = m, D;
      }, p);
      if (!C.error && !C.aborted) return m && this.reportReservedArrowTypeParam(m), C.node;
      if (!y && (Ke(!this.hasPlugin("jsx")), d = this.tryParse(() => super.parseMaybeAssign(t, s), p), !d.error)) return d.node;
      if ((r = y) != null && r.node) return this.state = y.failState, y.node;
      if (C.node) return this.state = C.failState, m && this.reportReservedArrowTypeParam(m), C.node;
      if ((n = d) != null && n.node) return this.state = d.failState, d.node;
      throw (o = y) != null && o.thrown ? y.error : C.thrown ? C.error : (h = d) != null && h.thrown ? d.error : ((c = y) == null ? void 0 : c.error) || C.error || ((u = d) == null ? void 0 : u.error);
    }

    reportReservedArrowTypeParam(t) {
      var s;
      t.params.length === 1 && !((s = t.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(x.ReservedArrowTypeParam, {
        at: t
      });
    }

    parseMaybeUnary(t, s) {
      return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(t, s);
    }

    parseArrow(t) {
      if (this.match(14)) {
        let s = this.tryParse(i => {
          let r = this.tsParseTypeOrTypePredicateAnnotation(14);
          return (this.canInsertSemicolon() || !this.match(19)) && i(), r;
        });
        if (s.aborted) return;
        s.thrown || (s.error && (this.state = s.failState), t.returnType = s.node);
      }

      return super.parseArrow(t);
    }

    parseAssignableListItemTypes(t) {
      this.eat(17) && (t.type !== "Identifier" && !this.state.isAmbientContext && !this.state.inType && this.raise(x.PatternIsOptional, {
        at: t
      }), t.optional = !0);
      let s = this.tsTryParseTypeAnnotation();
      return s && (t.typeAnnotation = s), this.resetEndLocation(t), t;
    }

    isAssignable(t, s) {
      switch (t.type) {
        case "TSTypeCastExpression":
          return this.isAssignable(t.expression, s);

        case "TSParameterProperty":
          return !0;

        default:
          return super.isAssignable(t, s);
      }
    }

    toAssignable(t, s = !1) {
      switch (t.type) {
        case "ParenthesizedExpression":
          this.toAssignableParenthesizedExpression(t, s);
          break;

        case "TSAsExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
          s ? this.expressionScope.recordArrowParemeterBindingError(x.UnexpectedTypeCastInParameter, {
            at: t
          }) : this.raise(x.UnexpectedTypeCastInParameter, {
            at: t
          }), this.toAssignable(t.expression, s);
          break;

        case "AssignmentExpression":
          !s && t.left.type === "TSTypeCastExpression" && (t.left = this.typeCastToParameter(t.left));

        default:
          super.toAssignable(t, s);
      }
    }

    toAssignableParenthesizedExpression(t, s) {
      switch (t.expression.type) {
        case "TSAsExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
        case "ParenthesizedExpression":
          this.toAssignable(t.expression, s);
          break;

        default:
          super.toAssignable(t, s);
      }
    }

    checkToRestConversion(t, s) {
      switch (t.type) {
        case "TSAsExpression":
        case "TSTypeAssertion":
        case "TSNonNullExpression":
          this.checkToRestConversion(t.expression, !1);
          break;

        default:
          super.checkToRestConversion(t, s);
      }
    }

    isValidLVal(t, s, i) {
      return Yi({
        TSTypeCastExpression: !0,
        TSParameterProperty: "parameter",
        TSNonNullExpression: "expression",
        TSAsExpression: (i !== X || !s) && ["expression", !0],
        TSTypeAssertion: (i !== X || !s) && ["expression", !0]
      }, t) || super.isValidLVal(t, s, i);
    }

    parseBindingAtom() {
      switch (this.state.type) {
        case 78:
          return this.parseIdentifier(!0);

        default:
          return super.parseBindingAtom();
      }
    }

    parseMaybeDecoratorArguments(t) {
      if (this.match(47) || this.match(51)) {
        let s = this.tsParseTypeArgumentsInExpression();

        if (this.match(10)) {
          let i = super.parseMaybeDecoratorArguments(t);
          return i.typeParameters = s, i;
        }

        this.unexpected(null, 10);
      }

      return super.parseMaybeDecoratorArguments(t);
    }

    checkCommaAfterRest(t) {
      return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === t ? (this.next(), !1) : super.checkCommaAfterRest(t);
    }

    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }

    isClassProperty() {
      return this.match(35) || this.match(14) || super.isClassProperty();
    }

    parseMaybeDefault(t, s, i) {
      let r = super.parseMaybeDefault(t, s, i);
      return r.type === "AssignmentPattern" && r.typeAnnotation && r.right.start < r.typeAnnotation.start && this.raise(x.TypeAnnotationAfterAssign, {
        at: r.typeAnnotation
      }), r;
    }

    getTokenFromCode(t) {
      if (this.state.inType) {
        if (t === 62) return this.finishOp(48, 1);
        if (t === 60) return this.finishOp(47, 1);
      }

      return super.getTokenFromCode(t);
    }

    reScan_lt_gt() {
      let {
        type: t
      } = this.state;
      t === 47 ? (this.state.pos -= 1, this.readToken_lt()) : t === 48 && (this.state.pos -= 1, this.readToken_gt());
    }

    reScan_lt() {
      let {
        type: t
      } = this.state;
      return t === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : t;
    }

    toAssignableList(t, s, i) {
      for (let r = 0; r < t.length; r++) {
        let n = t[r];
        n?.type === "TSTypeCastExpression" && (t[r] = this.typeCastToParameter(n));
      }

      super.toAssignableList(t, s, i);
    }

    typeCastToParameter(t) {
      return t.expression.typeAnnotation = t.typeAnnotation, this.resetEndLocation(t.expression, t.typeAnnotation.loc.end), t.expression;
    }

    shouldParseArrow(t) {
      return this.match(14) ? t.every(s => this.isAssignable(s, !0)) : super.shouldParseArrow(t);
    }

    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }

    canHaveLeadingDecorator() {
      return super.canHaveLeadingDecorator() || this.isAbstractClass();
    }

    jsxParseOpeningElementAfterName(t) {
      if (this.match(47) || this.match(51)) {
        let s = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
        s && (t.typeParameters = s);
      }

      return super.jsxParseOpeningElementAfterName(t);
    }

    getGetterSetterExpectedParamCount(t) {
      let s = super.getGetterSetterExpectedParamCount(t),
          r = this.getObjectOrClassMethodParams(t)[0];
      return r && this.isThisParam(r) ? s + 1 : s;
    }

    parseCatchClauseParam() {
      let t = super.parseCatchClauseParam(),
          s = this.tsTryParseTypeAnnotation();
      return s && (t.typeAnnotation = s, this.resetEndLocation(t)), t;
    }

    tsInAmbientContext(t) {
      let s = this.state.isAmbientContext;
      this.state.isAmbientContext = !0;

      try {
        return t();
      } finally {
        this.state.isAmbientContext = s;
      }
    }

    parseClass(t, s, i) {
      let r = this.state.inAbstractClass;
      this.state.inAbstractClass = !!t.abstract;

      try {
        return super.parseClass(t, s, i);
      } finally {
        this.state.inAbstractClass = r;
      }
    }

    tsParseAbstractDeclaration(t) {
      if (this.match(80)) return t.abstract = !0, this.parseClass(t, !0, !1);

      if (this.isContextual(125)) {
        if (!this.hasFollowingLineBreak()) return t.abstract = !0, this.raise(x.NonClassMethodPropertyHasAbstractModifer, {
          at: t
        }), this.tsParseInterfaceDeclaration(t);
      } else this.unexpected(null, 80);
    }

    parseMethod(t, s, i, r, n, o, h) {
      let c = super.parseMethod(t, s, i, r, n, o, h);

      if (c.abstract && (this.hasPlugin("estree") ? !!c.value.body : !!c.body)) {
        let {
          key: p
        } = c;
        this.raise(x.AbstractMethodHasImplementation, {
          at: c,
          methodName: p.type === "Identifier" && !c.computed ? p.name : `[${this.input.slice(p.start, p.end)}]`
        });
      }

      return c;
    }

    tsParseTypeParameterName() {
      return this.parseIdentifier().name;
    }

    shouldParseAsAmbientContext() {
      return !!this.getPluginOption("typescript", "dts");
    }

    parse() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.parse();
    }

    getExpression() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.getExpression();
    }

    parseExportSpecifier(t, s, i, r) {
      return !s && r ? (this.parseTypeOnlyImportExportSpecifier(t, !1, i), this.finishNode(t, "ExportSpecifier")) : (t.exportKind = "value", super.parseExportSpecifier(t, s, i, r));
    }

    parseImportSpecifier(t, s, i, r, n) {
      return !s && r ? (this.parseTypeOnlyImportExportSpecifier(t, !0, i), this.finishNode(t, "ImportSpecifier")) : (t.importKind = "value", super.parseImportSpecifier(t, s, i, r, i ? je : xt));
    }

    parseTypeOnlyImportExportSpecifier(t, s, i) {
      let r = s ? "imported" : "local",
          n = s ? "local" : "exported",
          o = t[r],
          h,
          c = !1,
          u = !0,
          p = o.loc.start;

      if (this.isContextual(93)) {
        let d = this.parseIdentifier();

        if (this.isContextual(93)) {
          let m = this.parseIdentifier();
          j(this.state.type) ? (c = !0, o = d, h = s ? this.parseIdentifier() : this.parseModuleExportName(), u = !1) : (h = m, u = !1);
        } else j(this.state.type) ? (u = !1, h = s ? this.parseIdentifier() : this.parseModuleExportName()) : (c = !0, o = d);
      } else j(this.state.type) && (c = !0, s ? (o = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(o.name, o.loc.start, !0, !0)) : o = this.parseModuleExportName());

      c && i && this.raise(s ? x.TypeModifierIsUsedInTypeImports : x.TypeModifierIsUsedInTypeExports, {
        at: p
      }), t[r] = o, t[n] = h;
      let y = s ? "importKind" : "exportKind";
      t[y] = c ? "type" : "value", u && this.eatContextual(93) && (t[n] = s ? this.parseIdentifier() : this.parseModuleExportName()), t[n] || (t[n] = z(t[r])), s && this.checkIdentifier(t[n], c ? je : xt);
    }

  };

  function sr(a) {
    if (a.type !== "MemberExpression") return !1;
    let {
      computed: e,
      property: t
    } = a;
    return e && t.type !== "StringLiteral" && (t.type !== "TemplateLiteral" || t.expressions.length > 0) ? !1 : Ss(a.object);
  }

  function Ss(a) {
    return a.type === "Identifier" ? !0 : a.type !== "MemberExpression" || a.computed ? !1 : Ss(a.object);
  }

  var We = R`placeholders`({
    ClassNameIsRequired: "A class name is required.",
    UnexpectedSpace: "Unexpected space in placeholder."
  }),
      ir = a => class extends a {
    parsePlaceholder(t) {
      if (this.match(140)) {
        let s = this.startNode();
        return this.next(), this.assertNoSpace(), s.name = super.parseIdentifier(!0), this.assertNoSpace(), this.expect(140), this.finishPlaceholder(s, t);
      }
    }

    finishPlaceholder(t, s) {
      let i = !!(t.expectedNode && t.type === "Placeholder");
      return t.expectedNode = s, i ? t : this.finishNode(t, "Placeholder");
    }

    getTokenFromCode(t) {
      return t === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(140, 2) : super.getTokenFromCode(t);
    }

    parseExprAtom(t) {
      return this.parsePlaceholder("Expression") || super.parseExprAtom(t);
    }

    parseIdentifier(t) {
      return this.parsePlaceholder("Identifier") || super.parseIdentifier(t);
    }

    checkReservedWord(t, s, i, r) {
      t !== void 0 && super.checkReservedWord(t, s, i, r);
    }

    parseBindingAtom() {
      return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
    }

    isValidLVal(t, s, i) {
      return t === "Placeholder" || super.isValidLVal(t, s, i);
    }

    toAssignable(t, s) {
      t && t.type === "Placeholder" && t.expectedNode === "Expression" ? t.expectedNode = "Pattern" : super.toAssignable(t, s);
    }

    isLet(t) {
      return super.isLet(t) ? !0 : !this.isContextual(99) || t ? !1 : this.lookahead().type === 140;
    }

    verifyBreakContinue(t, s) {
      t.label && t.label.type === "Placeholder" || super.verifyBreakContinue(t, s);
    }

    parseExpressionStatement(t, s) {
      if (s.type !== "Placeholder" || s.extra && s.extra.parenthesized) return super.parseExpressionStatement(t, s);

      if (this.match(14)) {
        let i = t;
        return i.label = this.finishPlaceholder(s, "Identifier"), this.next(), i.body = super.parseStatement("label"), this.finishNode(i, "LabeledStatement");
      }

      return this.semicolon(), t.name = s.name, this.finishPlaceholder(t, "Statement");
    }

    parseBlock(t, s, i) {
      return this.parsePlaceholder("BlockStatement") || super.parseBlock(t, s, i);
    }

    parseFunctionId(t) {
      return this.parsePlaceholder("Identifier") || super.parseFunctionId(t);
    }

    parseClass(t, s, i) {
      let r = s ? "ClassDeclaration" : "ClassExpression";
      this.next(), this.takeDecorators(t);
      let n = this.state.strict,
          o = this.parsePlaceholder("Identifier");
      if (o) {
        if (this.match(81) || this.match(140) || this.match(5)) t.id = o;else {
          if (i || !s) return t.id = null, t.body = this.finishPlaceholder(o, "ClassBody"), this.finishNode(t, r);
          throw this.raise(We.ClassNameIsRequired, {
            at: this.state.startLoc
          });
        }
      } else this.parseClassId(t, s, i);
      return super.parseClassSuper(t), t.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!t.superClass, n), this.finishNode(t, r);
    }

    parseExport(t) {
      let s = this.parsePlaceholder("Identifier");
      if (!s) return super.parseExport(t);
      if (!this.isContextual(97) && !this.match(12)) return t.specifiers = [], t.source = null, t.declaration = this.finishPlaceholder(s, "Declaration"), this.finishNode(t, "ExportNamedDeclaration");
      this.expectPlugin("exportDefaultFrom");
      let i = this.startNode();
      return i.exported = s, t.specifiers = [this.finishNode(i, "ExportDefaultSpecifier")], super.parseExport(t);
    }

    isExportDefaultSpecifier() {
      if (this.match(65)) {
        let t = this.nextTokenStart();
        if (this.isUnparsedContextual(t, "from") && this.input.startsWith(K(140), this.nextTokenStartSince(t + 4))) return !0;
      }

      return super.isExportDefaultSpecifier();
    }

    maybeParseExportDefaultSpecifier(t) {
      return t.specifiers && t.specifiers.length > 0 ? !0 : super.maybeParseExportDefaultSpecifier(t);
    }

    checkExport(t) {
      let {
        specifiers: s
      } = t;
      s != null && s.length && (t.specifiers = s.filter(i => i.exported.type === "Placeholder")), super.checkExport(t), t.specifiers = s;
    }

    parseImport(t) {
      let s = this.parsePlaceholder("Identifier");
      if (!s) return super.parseImport(t);
      if (t.specifiers = [], !this.isContextual(97) && !this.match(12)) return t.source = this.finishPlaceholder(s, "StringLiteral"), this.semicolon(), this.finishNode(t, "ImportDeclaration");
      let i = this.startNodeAtNode(s);
      return i.local = s, t.specifiers.push(this.finishNode(i, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(t) || this.parseNamedImportSpecifiers(t)), this.expectContextual(97), t.source = this.parseImportSource(), this.semicolon(), this.finishNode(t, "ImportDeclaration");
    }

    parseImportSource() {
      return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
    }

    assertNoSpace() {
      this.state.start > this.state.lastTokEndLoc.index && this.raise(We.UnexpectedSpace, {
        at: this.state.lastTokEndLoc
      });
    }

  },
      rr = a => class extends a {
    parseV8Intrinsic() {
      if (this.match(54)) {
        let t = this.state.startLoc,
            s = this.startNode();

        if (this.next(), w(this.state.type)) {
          let i = this.parseIdentifierName(this.state.start),
              r = this.createIdentifier(s, i);
          if (r.type = "V8IntrinsicIdentifier", this.match(10)) return r;
        }

        this.unexpected(t);
      }
    }

    parseExprAtom(t) {
      return this.parseV8Intrinsic() || super.parseExprAtom(t);
    }

  };

  function N(a, e) {
    let [t, s] = typeof e == "string" ? [e, {}] : e,
        i = Object.keys(s),
        r = i.length === 0;
    return a.some(n => {
      if (typeof n == "string") return r && n === t;
      {
        let [o, h] = n;
        if (o !== t) return !1;

        for (let c of i) if (h[c] !== s[c]) return !1;

        return !0;
      }
    });
  }

  function J(a, e, t) {
    let s = a.find(i => Array.isArray(i) ? i[0] === e : i === e);
    return s && Array.isArray(s) && s.length > 1 ? s[1][t] : null;
  }

  var Je = ["minimal", "fsharp", "hack", "smart"],
      Xe = ["^^", "@@", "^", "%", "#"],
      Ge = ["hash", "bar"];

  function ar(a) {
    if (N(a, "decorators")) {
      if (N(a, "decorators-legacy")) throw new Error("Cannot use the decorators and decorators-legacy plugin together");
      let e = J(a, "decorators", "decoratorsBeforeExport");
      if (e != null && typeof e != "boolean") throw new Error("'decoratorsBeforeExport' must be a boolean.");
      let t = J(a, "decorators", "allowCallParenthesized");
      if (t != null && typeof t != "boolean") throw new Error("'allowCallParenthesized' must be a boolean.");
    }

    if (N(a, "flow") && N(a, "typescript")) throw new Error("Cannot combine flow and typescript plugins.");
    if (N(a, "placeholders") && N(a, "v8intrinsic")) throw new Error("Cannot combine placeholders and v8intrinsic plugins.");

    if (N(a, "pipelineOperator")) {
      let e = J(a, "pipelineOperator", "proposal");

      if (!Je.includes(e)) {
        let s = Je.map(i => `"${i}"`).join(", ");
        throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${s}.`);
      }

      let t = N(a, ["recordAndTuple", {
        syntaxType: "hash"
      }]);

      if (e === "hack") {
        if (N(a, "placeholders")) throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
        if (N(a, "v8intrinsic")) throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
        let s = J(a, "pipelineOperator", "topicToken");

        if (!Xe.includes(s)) {
          let i = Xe.map(r => `"${r}"`).join(", ");
          throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${i}.`);
        }

        if (s === "#" && t) throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
      } else if (e === "smart" && t) throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
    }

    if (N(a, "moduleAttributes")) {
      if (N(a, "importAssertions")) throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
      if (J(a, "moduleAttributes", "version") !== "may-2020") throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
    }

    if (N(a, "recordAndTuple") && J(a, "recordAndTuple", "syntaxType") != null && !Ge.includes(J(a, "recordAndTuple", "syntaxType"))) throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + Ge.map(e => `'${e}'`).join(", "));

    if (N(a, "asyncDoExpressions") && !N(a, "doExpressions")) {
      let e = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
      throw e.missingPlugins = "doExpressions", e;
    }
  }

  var ws = {
    estree: Xs,
    jsx: Gi,
    flow: Ji,
    typescript: er,
    v8intrinsic: rr,
    placeholders: ir
  },
      nr = Object.keys(ws),
      Ye = {
    sourceType: "script",
    sourceFilename: void 0,
    startColumn: 0,
    startLine: 1,
    allowAwaitOutsideFunction: !1,
    allowReturnOutsideFunction: !1,
    allowImportExportEverywhere: !1,
    allowSuperOutsideMethod: !1,
    allowUndeclaredExports: !1,
    plugins: [],
    strictMode: null,
    ranges: !1,
    tokens: !1,
    createParenthesizedExpressions: !1,
    errorRecovery: !1,
    attachComment: !0
  };

  function or(a) {
    let e = {};

    for (let t of Object.keys(Ye)) e[t] = a && a[t] != null ? a[t] : Ye[t];

    return e;
  }

  var hr = (a, e) => Object.hasOwnProperty.call(a, e) && a[e],
      Cs = a => a.type === "ParenthesizedExpression" ? Cs(a.expression) : a,
      ye = class extends de {
    toAssignable(e, t = !1) {
      var s, i;
      let r;

      switch ((e.type === "ParenthesizedExpression" || (s = e.extra) != null && s.parenthesized) && (r = Cs(e), t ? r.type === "Identifier" ? this.expressionScope.recordArrowParemeterBindingError(l.InvalidParenthesizedAssignment, {
        at: e
      }) : r.type !== "MemberExpression" && this.raise(l.InvalidParenthesizedAssignment, {
        at: e
      }) : this.raise(l.InvalidParenthesizedAssignment, {
        at: e
      })), e.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;

        case "ObjectExpression":
          e.type = "ObjectPattern";

          for (let o = 0, h = e.properties.length, c = h - 1; o < h; o++) {
            var n;
            let u = e.properties[o],
                p = o === c;
            this.toAssignableObjectExpressionProp(u, p, t), p && u.type === "RestElement" && (n = e.extra) != null && n.trailingCommaLoc && this.raise(l.RestTrailingComma, {
              at: e.extra.trailingCommaLoc
            });
          }

          break;

        case "ObjectProperty":
          {
            let {
              key: o,
              value: h
            } = e;
            this.isPrivateName(o) && this.classScope.usePrivateName(this.getPrivateNameSV(o), o.loc.start), this.toAssignable(h, t);
            break;
          }

        case "SpreadElement":
          throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");

        case "ArrayExpression":
          e.type = "ArrayPattern", this.toAssignableList(e.elements, (i = e.extra) == null ? void 0 : i.trailingCommaLoc, t);
          break;

        case "AssignmentExpression":
          e.operator !== "=" && this.raise(l.MissingEqInAssignment, {
            at: e.left.loc.end
          }), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
          break;

        case "ParenthesizedExpression":
          this.toAssignable(r, t);
          break;
      }
    }

    toAssignableObjectExpressionProp(e, t, s) {
      if (e.type === "ObjectMethod") this.raise(e.kind === "get" || e.kind === "set" ? l.PatternHasAccessor : l.PatternHasMethod, {
        at: e.key
      });else if (e.type === "SpreadElement") {
        e.type = "RestElement";
        let i = e.argument;
        this.checkToRestConversion(i, !1), this.toAssignable(i, s), t || this.raise(l.RestTrailingComma, {
          at: e
        });
      } else this.toAssignable(e, s);
    }

    toAssignableList(e, t, s) {
      let i = e.length - 1;

      for (let r = 0; r <= i; r++) {
        let n = e[r];

        if (!!n) {
          if (n.type === "SpreadElement") {
            n.type = "RestElement";
            let o = n.argument;
            this.checkToRestConversion(o, !0), this.toAssignable(o, s);
          } else this.toAssignable(n, s);

          n.type === "RestElement" && (r < i ? this.raise(l.RestTrailingComma, {
            at: n
          }) : t && this.raise(l.RestTrailingComma, {
            at: t
          }));
        }
      }
    }

    isAssignable(e, t) {
      switch (e.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          return !0;

        case "ObjectExpression":
          {
            let s = e.properties.length - 1;
            return e.properties.every((i, r) => i.type !== "ObjectMethod" && (r === s || i.type !== "SpreadElement") && this.isAssignable(i));
          }

        case "ObjectProperty":
          return this.isAssignable(e.value);

        case "SpreadElement":
          return this.isAssignable(e.argument);

        case "ArrayExpression":
          return e.elements.every(s => s === null || this.isAssignable(s));

        case "AssignmentExpression":
          return e.operator === "=";

        case "ParenthesizedExpression":
          return this.isAssignable(e.expression);

        case "MemberExpression":
        case "OptionalMemberExpression":
          return !t;

        default:
          return !1;
      }
    }

    toReferencedList(e, t) {
      return e;
    }

    toReferencedListDeep(e, t) {
      this.toReferencedList(e, t);

      for (let s of e) s?.type === "ArrayExpression" && this.toReferencedListDeep(s.elements);
    }

    parseSpread(e) {
      let t = this.startNode();
      return this.next(), t.argument = this.parseMaybeAssignAllowIn(e, void 0), this.finishNode(t, "SpreadElement");
    }

    parseRestBinding() {
      let e = this.startNode();
      return this.next(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
    }

    parseBindingAtom() {
      switch (this.state.type) {
        case 0:
          {
            let e = this.startNode();
            return this.next(), e.elements = this.parseBindingList(3, 93, !0), this.finishNode(e, "ArrayPattern");
          }

        case 5:
          return this.parseObjectLike(8, !0);
      }

      return this.parseIdentifier();
    }

    parseBindingList(e, t, s, i) {
      let r = [],
          n = !0;

      for (; !this.eat(e);) if (n ? n = !1 : this.expect(12), s && this.match(12)) r.push(null);else {
        if (this.eat(e)) break;

        if (this.match(21)) {
          if (r.push(this.parseAssignableListItemTypes(this.parseRestBinding())), !this.checkCommaAfterRest(t)) {
            this.expect(e);
            break;
          }
        } else {
          let o = [];

          for (this.match(26) && this.hasPlugin("decorators") && this.raise(l.UnsupportedParameterDecorator, {
            at: this.state.startLoc
          }); this.match(26);) o.push(this.parseDecorator());

          r.push(this.parseAssignableListItem(i, o));
        }
      }

      return r;
    }

    parseBindingRestProperty(e) {
      return this.next(), e.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(e, "RestElement");
    }

    parseBindingProperty() {
      let e = this.startNode(),
          {
        type: t,
        start: s,
        startLoc: i
      } = this.state;
      return t === 21 ? this.parseBindingRestProperty(e) : (t === 134 ? (this.expectPlugin("destructuringPrivate", i), this.classScope.usePrivateName(this.state.value, i), e.key = this.parsePrivateName()) : this.parsePropertyName(e), e.method = !1, this.parseObjPropValue(e, s, i, !1, !1, !0, !1));
    }

    parseAssignableListItem(e, t) {
      let s = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(s);
      let i = this.parseMaybeDefault(s.start, s.loc.start, s);
      return t.length && (s.decorators = t), i;
    }

    parseAssignableListItemTypes(e) {
      return e;
    }

    parseMaybeDefault(e, t, s) {
      var i, r, n;
      if (t = (i = t) != null ? i : this.state.startLoc, e = (r = e) != null ? r : this.state.start, s = (n = s) != null ? n : this.parseBindingAtom(), !this.eat(29)) return s;
      let o = this.startNodeAt(e, t);
      return o.left = s, o.right = this.parseMaybeAssignAllowIn(), this.finishNode(o, "AssignmentPattern");
    }

    isValidLVal(e, t, s) {
      return hr({
        AssignmentPattern: "left",
        RestElement: "argument",
        ObjectProperty: "value",
        ParenthesizedExpression: "expression",
        ArrayPattern: "elements",
        ObjectPattern: "properties"
      }, e);
    }

    checkLVal(e, {
      in: t,
      binding: s = X,
      checkClashes: i = !1,
      strictModeChanged: r = !1,
      allowingSloppyLetBinding: n = !(s & H),
      hasParenthesizedAncestor: o = !1
    }) {
      var h;
      let c = e.type;
      if (this.isObjectMethod(e)) return;

      if (c === "MemberExpression") {
        s !== X && this.raise(l.InvalidPropertyBindingPattern, {
          at: e
        });
        return;
      }

      if (e.type === "Identifier") {
        this.checkIdentifier(e, s, r, n);
        let {
          name: m
        } = e;
        i && (i.has(m) ? this.raise(l.ParamDupe, {
          at: e
        }) : i.add(m));
        return;
      }

      let u = this.isValidLVal(e.type, !(o || (h = e.extra) != null && h.parenthesized) && t.type === "AssignmentExpression", s);
      if (u === !0) return;

      if (u === !1) {
        let m = s === X ? l.InvalidLhs : l.InvalidLhsBinding;
        this.raise(m, {
          at: e,
          ancestor: t.type === "UpdateExpression" ? {
            type: "UpdateExpression",
            prefix: t.prefix
          } : {
            type: t.type
          }
        });
        return;
      }

      let [p, y] = Array.isArray(u) ? u : [u, c === "ParenthesizedExpression"],
          d = e.type === "ArrayPattern" || e.type === "ObjectPattern" || e.type === "ParenthesizedExpression" ? e : t;

      for (let m of [].concat(e[p])) m && this.checkLVal(m, {
        in: d,
        binding: s,
        checkClashes: i,
        allowingSloppyLetBinding: n,
        strictModeChanged: r,
        hasParenthesizedAncestor: y
      });
    }

    checkIdentifier(e, t, s = !1, i = !(t & H)) {
      this.state.strict && (s ? os(e.name, this.inModule) : ns(e.name)) && (t === X ? this.raise(l.StrictEvalArguments, {
        at: e,
        referenceName: e.name
      }) : this.raise(l.StrictEvalArgumentsBinding, {
        at: e,
        bindingName: e.name
      })), !i && e.name === "let" && this.raise(l.LetInLexicalBinding, {
        at: e
      }), t & X || this.declareNameFromIdentifier(e, t);
    }

    declareNameFromIdentifier(e, t) {
      this.scope.declareName(e.name, t, e.loc.start);
    }

    checkToRestConversion(e, t) {
      switch (e.type) {
        case "ParenthesizedExpression":
          this.checkToRestConversion(e.expression, t);
          break;

        case "Identifier":
        case "MemberExpression":
          break;

        case "ArrayExpression":
        case "ObjectExpression":
          if (t) break;

        default:
          this.raise(l.InvalidRestAssignmentPattern, {
            at: e
          });
      }
    }

    checkCommaAfterRest(e) {
      return this.match(12) ? (this.raise(this.lookaheadCharCode() === e ? l.RestTrailingComma : l.ElementAfterRest, {
        at: this.state.startLoc
      }), !0) : !1;
    }

  },
      xe = class extends ye {
    checkProto(e, t, s, i) {
      if (e.type === "SpreadElement" || this.isObjectMethod(e) || e.computed || e.shorthand) return;
      let r = e.key;

      if ((r.type === "Identifier" ? r.name : r.value) === "__proto__") {
        if (t) {
          this.raise(l.RecordNoProto, {
            at: r
          });
          return;
        }

        s.used && (i ? i.doubleProtoLoc === null && (i.doubleProtoLoc = r.loc.start) : this.raise(l.DuplicateProto, {
          at: r
        })), s.used = !0;
      }
    }

    shouldExitDescending(e, t) {
      return e.type === "ArrowFunctionExpression" && e.start === t;
    }

    getExpression() {
      this.enterInitialScopes(), this.nextToken();
      let e = this.parseExpression();
      return this.match(135) || this.unexpected(), this.finalizeRemainingComments(), e.comments = this.state.comments, e.errors = this.state.errors, this.options.tokens && (e.tokens = this.tokens), e;
    }

    parseExpression(e, t) {
      return e ? this.disallowInAnd(() => this.parseExpressionBase(t)) : this.allowInAnd(() => this.parseExpressionBase(t));
    }

    parseExpressionBase(e) {
      let t = this.state.start,
          s = this.state.startLoc,
          i = this.parseMaybeAssign(e);

      if (this.match(12)) {
        let r = this.startNodeAt(t, s);

        for (r.expressions = [i]; this.eat(12);) r.expressions.push(this.parseMaybeAssign(e));

        return this.toReferencedList(r.expressions), this.finishNode(r, "SequenceExpression");
      }

      return i;
    }

    parseMaybeAssignDisallowIn(e, t) {
      return this.disallowInAnd(() => this.parseMaybeAssign(e, t));
    }

    parseMaybeAssignAllowIn(e, t) {
      return this.allowInAnd(() => this.parseMaybeAssign(e, t));
    }

    setOptionalParametersError(e, t) {
      var s;
      e.optionalParametersLoc = (s = t?.loc) != null ? s : this.state.startLoc;
    }

    parseMaybeAssign(e, t) {
      let s = this.state.start,
          i = this.state.startLoc;

      if (this.isContextual(105) && this.prodParam.hasYield) {
        let h = this.parseYield();
        return t && (h = t.call(this, h, s, i)), h;
      }

      let r;
      e ? r = !1 : (e = new nt(), r = !0);
      let {
        type: n
      } = this.state;
      (n === 10 || w(n)) && (this.state.potentialArrowAt = this.state.start);
      let o = this.parseMaybeConditional(e);

      if (t && (o = t.call(this, o, s, i)), ti(this.state.type)) {
        let h = this.startNodeAt(s, i),
            c = this.state.value;
        return h.operator = c, this.match(29) ? (this.toAssignable(o, !0), h.left = o, e.doubleProtoLoc != null && e.doubleProtoLoc.index >= s && (e.doubleProtoLoc = null), e.shorthandAssignLoc != null && e.shorthandAssignLoc.index >= s && (e.shorthandAssignLoc = null), e.privateKeyLoc != null && e.privateKeyLoc.index >= s && (this.checkDestructuringPrivate(e), e.privateKeyLoc = null)) : h.left = o, this.next(), h.right = this.parseMaybeAssign(), this.checkLVal(o, {
          in: this.finishNode(h, "AssignmentExpression")
        }), h;
      } else r && this.checkExpressionErrors(e, !0);

      return o;
    }

    parseMaybeConditional(e) {
      let t = this.state.start,
          s = this.state.startLoc,
          i = this.state.potentialArrowAt,
          r = this.parseExprOps(e);
      return this.shouldExitDescending(r, i) ? r : this.parseConditional(r, t, s, e);
    }

    parseConditional(e, t, s, i) {
      if (this.eat(17)) {
        let r = this.startNodeAt(t, s);
        return r.test = e, r.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), r.alternate = this.parseMaybeAssign(), this.finishNode(r, "ConditionalExpression");
      }

      return e;
    }

    parseMaybeUnaryOrPrivate(e) {
      return this.match(134) ? this.parsePrivateName() : this.parseMaybeUnary(e);
    }

    parseExprOps(e) {
      let t = this.state.start,
          s = this.state.startLoc,
          i = this.state.potentialArrowAt,
          r = this.parseMaybeUnaryOrPrivate(e);
      return this.shouldExitDescending(r, i) ? r : this.parseExprOp(r, t, s, -1);
    }

    parseExprOp(e, t, s, i) {
      if (this.isPrivateName(e)) {
        let n = this.getPrivateNameSV(e);
        (i >= It(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(l.PrivateInExpectedIn, {
          at: e,
          identifierName: n
        }), this.classScope.usePrivateName(n, e.loc.start);
      }

      let r = this.state.type;

      if (si(r) && (this.prodParam.hasIn || !this.match(58))) {
        let n = It(r);

        if (n > i) {
          if (r === 39) {
            if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody) return e;
            this.checkPipelineAtInfixOperator(e, s);
          }

          let o = this.startNodeAt(t, s);
          o.left = e, o.operator = this.state.value;
          let h = r === 41 || r === 42,
              c = r === 40;
          if (c && (n = It(42)), this.next(), r === 39 && this.hasPlugin(["pipelineOperator", {
            proposal: "minimal"
          }]) && this.state.type === 96 && this.prodParam.hasAwait) throw this.raise(l.UnexpectedAwaitAfterPipelineBody, {
            at: this.state.startLoc
          });
          o.right = this.parseExprOpRightExpr(r, n);
          let u = this.finishNode(o, h || c ? "LogicalExpression" : "BinaryExpression"),
              p = this.state.type;
          if (c && (p === 41 || p === 42) || h && p === 40) throw this.raise(l.MixingCoalesceWithLogical, {
            at: this.state.startLoc
          });
          return this.parseExprOp(u, t, s, i);
        }
      }

      return e;
    }

    parseExprOpRightExpr(e, t) {
      let s = this.state.start,
          i = this.state.startLoc;

      switch (e) {
        case 39:
          switch (this.getPluginOption("pipelineOperator", "proposal")) {
            case "hack":
              return this.withTopicBindingContext(() => this.parseHackPipeBody());

            case "smart":
              return this.withTopicBindingContext(() => {
                if (this.prodParam.hasYield && this.isContextual(105)) throw this.raise(l.PipeBodyIsTighter, {
                  at: this.state.startLoc
                });
                return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(e, t), s, i);
              });

            case "fsharp":
              return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(t));
          }

        default:
          return this.parseExprOpBaseRightExpr(e, t);
      }
    }

    parseExprOpBaseRightExpr(e, t) {
      let s = this.state.start,
          i = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, i, oi(e) ? t - 1 : t);
    }

    parseHackPipeBody() {
      var e;
      let {
        startLoc: t
      } = this.state,
          s = this.parseMaybeAssign();
      return $s.has(s.type) && !((e = s.extra) != null && e.parenthesized) && this.raise(l.PipeUnparenthesizedBody, {
        at: t,
        type: s.type
      }), this.topicReferenceWasUsedInCurrentContext() || this.raise(l.PipeTopicUnused, {
        at: t
      }), s;
    }

    checkExponentialAfterUnary(e) {
      this.match(57) && this.raise(l.UnexpectedTokenUnaryExponentiation, {
        at: e.argument
      });
    }

    parseMaybeUnary(e, t) {
      let s = this.state.start,
          i = this.state.startLoc,
          r = this.isContextual(96);

      if (r && this.isAwaitAllowed()) {
        this.next();
        let c = this.parseAwait(s, i);
        return t || this.checkExponentialAfterUnary(c), c;
      }

      let n = this.match(34),
          o = this.startNode();

      if (ri(this.state.type)) {
        o.operator = this.state.value, o.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
        let c = this.match(89);

        if (this.next(), o.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), this.state.strict && c) {
          let u = o.argument;
          u.type === "Identifier" ? this.raise(l.StrictDelete, {
            at: o
          }) : this.hasPropertyAsPrivateName(u) && this.raise(l.DeletePrivateField, {
            at: o
          });
        }

        if (!n) return t || this.checkExponentialAfterUnary(o), this.finishNode(o, "UnaryExpression");
      }

      let h = this.parseUpdate(o, n, e);

      if (r) {
        let {
          type: c
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? Gt(c) : Gt(c) && !this.match(54)) && !this.isAmbiguousAwait()) return this.raiseOverwrite(l.AwaitNotInAsyncContext, {
          at: i
        }), this.parseAwait(s, i);
      }

      return h;
    }

    parseUpdate(e, t, s) {
      if (t) {
        let o = e;
        return this.checkLVal(o.argument, {
          in: this.finishNode(o, "UpdateExpression")
        }), e;
      }

      let i = this.state.start,
          r = this.state.startLoc,
          n = this.parseExprSubscripts(s);
      if (this.checkExpressionErrors(s, !1)) return n;

      for (; ii(this.state.type) && !this.canInsertSemicolon();) {
        let o = this.startNodeAt(i, r);
        o.operator = this.state.value, o.prefix = !1, o.argument = n, this.next(), this.checkLVal(n, {
          in: n = this.finishNode(o, "UpdateExpression")
        });
      }

      return n;
    }

    parseExprSubscripts(e) {
      let t = this.state.start,
          s = this.state.startLoc,
          i = this.state.potentialArrowAt,
          r = this.parseExprAtom(e);
      return this.shouldExitDescending(r, i) ? r : this.parseSubscripts(r, t, s);
    }

    parseSubscripts(e, t, s, i) {
      let r = {
        optionalChainMember: !1,
        maybeAsyncArrow: this.atPossibleAsyncArrow(e),
        stop: !1
      };

      do e = this.parseSubscript(e, t, s, i, r), r.maybeAsyncArrow = !1; while (!r.stop);

      return e;
    }

    parseSubscript(e, t, s, i, r) {
      let {
        type: n
      } = this.state;
      if (!i && n === 15) return this.parseBind(e, t, s, i, r);
      if (Dt(n)) return this.parseTaggedTemplateExpression(e, t, s, r);
      let o = !1;

      if (n === 18) {
        if (i && this.lookaheadCharCode() === 40) return r.stop = !0, e;
        r.optionalChainMember = o = !0, this.next();
      }

      if (!i && this.match(10)) return this.parseCoverCallAndAsyncArrowHead(e, t, s, r, o);
      {
        let h = this.eat(0);
        return h || o || this.eat(16) ? this.parseMember(e, t, s, r, h, o) : (r.stop = !0, e);
      }
    }

    parseMember(e, t, s, i, r, n) {
      let o = this.startNodeAt(t, s);
      return o.object = e, o.computed = r, r ? (o.property = this.parseExpression(), this.expect(3)) : this.match(134) ? (e.type === "Super" && this.raise(l.SuperPrivateField, {
        at: s
      }), this.classScope.usePrivateName(this.state.value, this.state.startLoc), o.property = this.parsePrivateName()) : o.property = this.parseIdentifier(!0), i.optionalChainMember ? (o.optional = n, this.finishNode(o, "OptionalMemberExpression")) : this.finishNode(o, "MemberExpression");
    }

    parseBind(e, t, s, i, r) {
      let n = this.startNodeAt(t, s);
      return n.object = e, this.next(), n.callee = this.parseNoCallExpr(), r.stop = !0, this.parseSubscripts(this.finishNode(n, "BindExpression"), t, s, i);
    }

    parseCoverCallAndAsyncArrowHead(e, t, s, i, r) {
      let n = this.state.maybeInArrowParameters,
          o = null;
      this.state.maybeInArrowParameters = !0, this.next();
      let h = this.startNodeAt(t, s);
      h.callee = e;
      let {
        maybeAsyncArrow: c,
        optionalChainMember: u
      } = i;
      c && (this.expressionScope.enter(ji()), o = new nt()), u && (h.optional = r), r ? h.arguments = this.parseCallExpressionArguments(11) : h.arguments = this.parseCallExpressionArguments(11, e.type === "Import", e.type !== "Super", h, o);
      let p = this.finishCallExpression(h, u);
      return c && this.shouldParseAsyncArrow() && !r ? (i.stop = !0, this.checkDestructuringPrivate(o), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), p = this.parseAsyncArrowFromCallExpression(this.startNodeAt(t, s), p)) : (c && (this.checkExpressionErrors(o, !0), this.expressionScope.exit()), this.toReferencedArguments(p)), this.state.maybeInArrowParameters = n, p;
    }

    toReferencedArguments(e, t) {
      this.toReferencedListDeep(e.arguments, t);
    }

    parseTaggedTemplateExpression(e, t, s, i) {
      let r = this.startNodeAt(t, s);
      return r.tag = e, r.quasi = this.parseTemplate(!0), i.optionalChainMember && this.raise(l.OptionalChainingNoTemplate, {
        at: s
      }), this.finishNode(r, "TaggedTemplateExpression");
    }

    atPossibleAsyncArrow(e) {
      return e.type === "Identifier" && e.name === "async" && this.state.lastTokEndLoc.index === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && e.start === this.state.potentialArrowAt;
    }

    finishCallExpression(e, t) {
      if (e.callee.type === "Import") if (e.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), e.arguments.length === 0 || e.arguments.length > 2) this.raise(l.ImportCallArity, {
        at: e,
        maxArgumentCount: this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1
      });else for (let s of e.arguments) s.type === "SpreadElement" && this.raise(l.ImportCallSpreadArgument, {
        at: s
      });
      return this.finishNode(e, t ? "OptionalCallExpression" : "CallExpression");
    }

    parseCallExpressionArguments(e, t, s, i, r) {
      let n = [],
          o = !0,
          h = this.state.inFSharpPipelineDirectBody;

      for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(e);) {
        if (o) o = !1;else if (this.expect(12), this.match(e)) {
          t && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(l.ImportCallArgumentTrailingComma, {
            at: this.state.lastTokStartLoc
          }), i && this.addTrailingCommaExtraToNode(i), this.next();
          break;
        }
        n.push(this.parseExprListItem(!1, r, s));
      }

      return this.state.inFSharpPipelineDirectBody = h, n;
    }

    shouldParseAsyncArrow() {
      return this.match(19) && !this.canInsertSemicolon();
    }

    parseAsyncArrowFromCallExpression(e, t) {
      var s;
      return this.resetPreviousNodeTrailingComments(t), this.expect(19), this.parseArrowExpression(e, t.arguments, !0, (s = t.extra) == null ? void 0 : s.trailingCommaLoc), t.innerComments && gt(e, t.innerComments), t.callee.trailingComments && gt(e, t.callee.trailingComments), e;
    }

    parseNoCallExpr() {
      let e = this.state.start,
          t = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), e, t, !0);
    }

    parseExprAtom(e) {
      let t,
          {
        type: s
      } = this.state;

      switch (s) {
        case 79:
          return this.parseSuper();

        case 83:
          return t = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(t) : (this.match(10) || this.raise(l.UnsupportedImport, {
            at: this.state.lastTokStartLoc
          }), this.finishNode(t, "Import"));

        case 78:
          return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");

        case 90:
          return this.parseDo(this.startNode(), !1);

        case 56:
        case 31:
          return this.readRegexp(), this.parseRegExpLiteral(this.state.value);

        case 130:
          return this.parseNumericLiteral(this.state.value);

        case 131:
          return this.parseBigIntLiteral(this.state.value);

        case 132:
          return this.parseDecimalLiteral(this.state.value);

        case 129:
          return this.parseStringLiteral(this.state.value);

        case 84:
          return this.parseNullLiteral();

        case 85:
          return this.parseBooleanLiteral(!0);

        case 86:
          return this.parseBooleanLiteral(!1);

        case 10:
          {
            let i = this.state.potentialArrowAt === this.state.start;
            return this.parseParenAndDistinguishExpression(i);
          }

        case 2:
        case 1:
          return this.parseArrayLike(this.state.type === 2 ? 4 : 3, !1, !0);

        case 0:
          return this.parseArrayLike(3, !0, !1, e);

        case 6:
        case 7:
          return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);

        case 5:
          return this.parseObjectLike(8, !1, !1, e);

        case 68:
          return this.parseFunctionOrFunctionSent();

        case 26:
          this.parseDecorators();

        case 80:
          return t = this.startNode(), this.takeDecorators(t), this.parseClass(t, !1);

        case 77:
          return this.parseNewOrNewTarget();

        case 25:
        case 24:
          return this.parseTemplate(!1);

        case 15:
          {
            t = this.startNode(), this.next(), t.object = null;
            let i = t.callee = this.parseNoCallExpr();
            if (i.type === "MemberExpression") return this.finishNode(t, "BindExpression");
            throw this.raise(l.UnsupportedBind, {
              at: i
            });
          }

        case 134:
          return this.raise(l.PrivateInExpectedIn, {
            at: this.state.startLoc,
            identifierName: this.state.value
          }), this.parsePrivateName();

        case 33:
          return this.parseTopicReferenceThenEqualsSign(54, "%");

        case 32:
          return this.parseTopicReferenceThenEqualsSign(44, "^");

        case 37:
        case 38:
          return this.parseTopicReference("hack");

        case 44:
        case 54:
        case 27:
          {
            let i = this.getPluginOption("pipelineOperator", "proposal");
            if (i) return this.parseTopicReference(i);
            throw this.unexpected();
          }

        case 47:
          {
            let i = this.input.codePointAt(this.nextTokenStart());

            if (_(i) || i === 62) {
              this.expectOnePlugin(["jsx", "flow", "typescript"]);
              break;
            } else throw this.unexpected();
          }

        default:
          if (w(s)) {
            if (this.isContextual(123) && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak()) return this.parseModuleExpression();
            let i = this.state.potentialArrowAt === this.state.start,
                r = this.state.containsEsc,
                n = this.parseIdentifier();

            if (!r && n.name === "async" && !this.canInsertSemicolon()) {
              let {
                type: o
              } = this.state;
              if (o === 68) return this.resetPreviousNodeTrailingComments(n), this.next(), this.parseFunction(this.startNodeAtNode(n), void 0, !0);
              if (w(o)) return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(n)) : n;
              if (o === 90) return this.resetPreviousNodeTrailingComments(n), this.parseDo(this.startNodeAtNode(n), !0);
            }

            return i && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(n), [n], !1)) : n;
          } else throw this.unexpected();

      }
    }

    parseTopicReferenceThenEqualsSign(e, t) {
      let s = this.getPluginOption("pipelineOperator", "proposal");
      if (s) return this.state.type = e, this.state.value = t, this.state.pos--, this.state.end--, this.state.endLoc = L(this.state.endLoc, -1), this.parseTopicReference(s);
      throw this.unexpected();
    }

    parseTopicReference(e) {
      let t = this.startNode(),
          s = this.state.startLoc,
          i = this.state.type;
      return this.next(), this.finishTopicReference(t, s, e, i);
    }

    finishTopicReference(e, t, s, i) {
      if (this.testTopicReferenceConfiguration(s, t, i)) {
        let r = s === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference";
        return this.topicReferenceIsAllowedInCurrentContext() || this.raise(s === "smart" ? l.PrimaryTopicNotAllowed : l.PipeTopicUnbound, {
          at: t
        }), this.registerTopicReference(), this.finishNode(e, r);
      } else throw this.raise(l.PipeTopicUnconfiguredToken, {
        at: t,
        token: K(i)
      });
    }

    testTopicReferenceConfiguration(e, t, s) {
      switch (e) {
        case "hack":
          return this.hasPlugin(["pipelineOperator", {
            topicToken: K(s)
          }]);

        case "smart":
          return s === 27;

        default:
          throw this.raise(l.PipeTopicRequiresHackPipes, {
            at: t
          });
      }
    }

    parseAsyncArrowUnaryFunction(e) {
      this.prodParam.enter(kt(!0, this.prodParam.hasYield));
      let t = [this.parseIdentifier()];
      return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(l.LineTerminatorBeforeArrow, {
        at: this.state.curPosition()
      }), this.expect(19), this.parseArrowExpression(e, t, !0);
    }

    parseDo(e, t) {
      this.expectPlugin("doExpressions"), t && this.expectPlugin("asyncDoExpressions"), e.async = t, this.next();
      let s = this.state.labels;
      return this.state.labels = [], t ? (this.prodParam.enter(Ut), e.body = this.parseBlock(), this.prodParam.exit()) : e.body = this.parseBlock(), this.state.labels = s, this.finishNode(e, "DoExpression");
    }

    parseSuper() {
      let e = this.startNode();
      return this.next(), this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod ? this.raise(l.SuperNotAllowed, {
        at: e
      }) : !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(l.UnexpectedSuper, {
        at: e
      }), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(l.UnsupportedSuper, {
        at: e
      }), this.finishNode(e, "Super");
    }

    parsePrivateName() {
      let e = this.startNode(),
          t = this.startNodeAt(this.state.start + 1, new O(this.state.curLine, this.state.start + 1 - this.state.lineStart, this.state.start + 1)),
          s = this.state.value;
      return this.next(), e.id = this.createIdentifier(t, s), this.finishNode(e, "PrivateName");
    }

    parseFunctionOrFunctionSent() {
      let e = this.startNode();

      if (this.next(), this.prodParam.hasYield && this.match(16)) {
        let t = this.createIdentifier(this.startNodeAtNode(e), "function");
        return this.next(), this.match(102) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(e, t, "sent");
      }

      return this.parseFunction(e);
    }

    parseMetaProperty(e, t, s) {
      e.meta = t;
      let i = this.state.containsEsc;
      return e.property = this.parseIdentifier(!0), (e.property.name !== s || i) && this.raise(l.UnsupportedMetaProperty, {
        at: e.property,
        target: t.name,
        onlyValidPropertyName: s
      }), this.finishNode(e, "MetaProperty");
    }

    parseImportMetaProperty(e) {
      let t = this.createIdentifier(this.startNodeAtNode(e), "import");
      return this.next(), this.isContextual(100) && (this.inModule || this.raise(l.ImportMetaOutsideModule, {
        at: t
      }), this.sawUnambiguousESM = !0), this.parseMetaProperty(e, t, "meta");
    }

    parseLiteralAtNode(e, t, s) {
      return this.addExtra(s, "rawValue", e), this.addExtra(s, "raw", this.input.slice(s.start, this.state.end)), s.value = e, this.next(), this.finishNode(s, t);
    }

    parseLiteral(e, t) {
      let s = this.startNode();
      return this.parseLiteralAtNode(e, t, s);
    }

    parseStringLiteral(e) {
      return this.parseLiteral(e, "StringLiteral");
    }

    parseNumericLiteral(e) {
      return this.parseLiteral(e, "NumericLiteral");
    }

    parseBigIntLiteral(e) {
      return this.parseLiteral(e, "BigIntLiteral");
    }

    parseDecimalLiteral(e) {
      return this.parseLiteral(e, "DecimalLiteral");
    }

    parseRegExpLiteral(e) {
      let t = this.parseLiteral(e.value, "RegExpLiteral");
      return t.pattern = e.pattern, t.flags = e.flags, t;
    }

    parseBooleanLiteral(e) {
      let t = this.startNode();
      return t.value = e, this.next(), this.finishNode(t, "BooleanLiteral");
    }

    parseNullLiteral() {
      let e = this.startNode();
      return this.next(), this.finishNode(e, "NullLiteral");
    }

    parseParenAndDistinguishExpression(e) {
      let t = this.state.start,
          s = this.state.startLoc,
          i;
      this.next(), this.expressionScope.enter(Ui());
      let r = this.state.maybeInArrowParameters,
          n = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
      let o = this.state.start,
          h = this.state.startLoc,
          c = [],
          u = new nt(),
          p = !0,
          y,
          d;

      for (; !this.match(11);) {
        if (p) p = !1;else if (this.expect(12, u.optionalParametersLoc === null ? null : u.optionalParametersLoc), this.match(11)) {
          d = this.state.startLoc;
          break;
        }

        if (this.match(21)) {
          let g = this.state.start,
              E = this.state.startLoc;
          if (y = this.state.startLoc, c.push(this.parseParenItem(this.parseRestBinding(), g, E)), !this.checkCommaAfterRest(41)) break;
        } else c.push(this.parseMaybeAssignAllowIn(u, this.parseParenItem));
      }

      let m = this.state.lastTokEndLoc;
      this.expect(11), this.state.maybeInArrowParameters = r, this.state.inFSharpPipelineDirectBody = n;
      let C = this.startNodeAt(t, s);
      return e && this.shouldParseArrow(c) && (C = this.parseArrow(C)) ? (this.checkDestructuringPrivate(u), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(C, c, !1), C) : (this.expressionScope.exit(), c.length || this.unexpected(this.state.lastTokStartLoc), d && this.unexpected(d), y && this.unexpected(y), this.checkExpressionErrors(u, !0), this.toReferencedListDeep(c, !0), c.length > 1 ? (i = this.startNodeAt(o, h), i.expressions = c, this.finishNode(i, "SequenceExpression"), this.resetEndLocation(i, m)) : i = c[0], this.wrapParenthesis(t, s, i));
    }

    wrapParenthesis(e, t, s) {
      if (!this.options.createParenthesizedExpressions) return this.addExtra(s, "parenthesized", !0), this.addExtra(s, "parenStart", e), this.takeSurroundingComments(s, e, this.state.lastTokEndLoc.index), s;
      let i = this.startNodeAt(e, t);
      return i.expression = s, this.finishNode(i, "ParenthesizedExpression");
    }

    shouldParseArrow(e) {
      return !this.canInsertSemicolon();
    }

    parseArrow(e) {
      if (this.eat(19)) return e;
    }

    parseParenItem(e, t, s) {
      return e;
    }

    parseNewOrNewTarget() {
      let e = this.startNode();

      if (this.next(), this.match(16)) {
        let t = this.createIdentifier(this.startNodeAtNode(e), "new");
        this.next();
        let s = this.parseMetaProperty(e, t, "target");
        return !this.scope.inNonArrowFunction && !this.scope.inClass && this.raise(l.UnexpectedNewTarget, {
          at: s
        }), s;
      }

      return this.parseNew(e);
    }

    parseNew(e) {
      if (this.parseNewCallee(e), this.eat(10)) {
        let t = this.parseExprList(11);
        this.toReferencedList(t), e.arguments = t;
      } else e.arguments = [];

      return this.finishNode(e, "NewExpression");
    }

    parseNewCallee(e) {
      e.callee = this.parseNoCallExpr(), e.callee.type === "Import" ? this.raise(l.ImportCallNotNewExpression, {
        at: e.callee
      }) : this.isOptionalChain(e.callee) ? this.raise(l.OptionalChainingNoNew, {
        at: this.state.lastTokEndLoc
      }) : this.eat(18) && this.raise(l.OptionalChainingNoNew, {
        at: this.state.startLoc
      });
    }

    parseTemplateElement(e) {
      let {
        start: t,
        startLoc: s,
        end: i,
        value: r
      } = this.state,
          n = t + 1,
          o = this.startNodeAt(n, L(s, 1));
      r === null && (e || this.raise(l.InvalidEscapeSequenceTemplate, {
        at: L(s, 2)
      }));
      let h = this.match(24),
          c = h ? -1 : -2,
          u = i + c;
      o.value = {
        raw: this.input.slice(n, u).replace(/\r\n?/g, `
`),
        cooked: r === null ? null : r.slice(1, c)
      }, o.tail = h, this.next();
      let p = this.finishNode(o, "TemplateElement");
      return this.resetEndLocation(p, L(this.state.lastTokEndLoc, c)), p;
    }

    parseTemplate(e) {
      let t = this.startNode();
      t.expressions = [];
      let s = this.parseTemplateElement(e);

      for (t.quasis = [s]; !s.tail;) t.expressions.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), t.quasis.push(s = this.parseTemplateElement(e));

      return this.finishNode(t, "TemplateLiteral");
    }

    parseTemplateSubstitution() {
      return this.parseExpression();
    }

    parseObjectLike(e, t, s, i) {
      s && this.expectPlugin("recordAndTuple");
      let r = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      let n = Object.create(null),
          o = !0,
          h = this.startNode();

      for (h.properties = [], this.next(); !this.match(e);) {
        if (o) o = !1;else if (this.expect(12), this.match(e)) {
          this.addTrailingCommaExtraToNode(h);
          break;
        }
        let u;
        t ? u = this.parseBindingProperty() : (u = this.parsePropertyDefinition(i), this.checkProto(u, s, n, i)), s && !this.isObjectProperty(u) && u.type !== "SpreadElement" && this.raise(l.InvalidRecordProperty, {
          at: u
        }), u.shorthand && this.addExtra(u, "shorthand", !0), h.properties.push(u);
      }

      this.next(), this.state.inFSharpPipelineDirectBody = r;
      let c = "ObjectExpression";
      return t ? c = "ObjectPattern" : s && (c = "RecordExpression"), this.finishNode(h, c);
    }

    addTrailingCommaExtraToNode(e) {
      this.addExtra(e, "trailingComma", this.state.lastTokStart), this.addExtra(e, "trailingCommaLoc", this.state.lastTokStartLoc, !1);
    }

    maybeAsyncOrAccessorProp(e) {
      return !e.computed && e.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
    }

    parsePropertyDefinition(e) {
      let t = [];
      if (this.match(26)) for (this.hasPlugin("decorators") && this.raise(l.UnsupportedPropertyDecorator, {
        at: this.state.startLoc
      }); this.match(26);) t.push(this.parseDecorator());
      let s = this.startNode(),
          i = !1,
          r = !1,
          n,
          o;
      if (this.match(21)) return t.length && this.unexpected(), this.parseSpread();
      t.length && (s.decorators = t, t = []), s.method = !1, e && (n = this.state.start, o = this.state.startLoc);
      let h = this.eat(55);
      this.parsePropertyNamePrefixOperator(s);
      let c = this.state.containsEsc,
          u = this.parsePropertyName(s, e);

      if (!h && !c && this.maybeAsyncOrAccessorProp(s)) {
        let p = u.name;
        p === "async" && !this.hasPrecedingLineBreak() && (i = !0, this.resetPreviousNodeTrailingComments(u), h = this.eat(55), this.parsePropertyName(s)), (p === "get" || p === "set") && (r = !0, this.resetPreviousNodeTrailingComments(u), s.kind = p, this.match(55) && (h = !0, this.raise(l.AccessorIsGenerator, {
          at: this.state.curPosition(),
          kind: p
        }), this.next()), this.parsePropertyName(s));
      }

      return this.parseObjPropValue(s, n, o, h, i, !1, r, e);
    }

    getGetterSetterExpectedParamCount(e) {
      return e.kind === "get" ? 0 : 1;
    }

    getObjectOrClassMethodParams(e) {
      return e.params;
    }

    checkGetterSetterParams(e) {
      var t;
      let s = this.getGetterSetterExpectedParamCount(e),
          i = this.getObjectOrClassMethodParams(e);
      i.length !== s && this.raise(e.kind === "get" ? l.BadGetterArity : l.BadSetterArity, {
        at: e
      }), e.kind === "set" && ((t = i[i.length - 1]) == null ? void 0 : t.type) === "RestElement" && this.raise(l.BadSetterRestParameter, {
        at: e
      });
    }

    parseObjectMethod(e, t, s, i, r) {
      if (r) {
        let n = this.parseMethod(e, t, !1, !1, !1, "ObjectMethod");
        return this.checkGetterSetterParams(n), n;
      }

      if (s || t || this.match(10)) return i && this.unexpected(), e.kind = "method", e.method = !0, this.parseMethod(e, t, s, !1, !1, "ObjectMethod");
    }

    parseObjectProperty(e, t, s, i, r) {
      if (e.shorthand = !1, this.eat(14)) return e.value = i ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(r), this.finishNode(e, "ObjectProperty");

      if (!e.computed && e.key.type === "Identifier") {
        if (this.checkReservedWord(e.key.name, e.key.loc.start, !0, !1), i) e.value = this.parseMaybeDefault(t, s, z(e.key));else if (this.match(29)) {
          let n = this.state.startLoc;
          r != null ? r.shorthandAssignLoc === null && (r.shorthandAssignLoc = n) : this.raise(l.InvalidCoverInitializedName, {
            at: n
          }), e.value = this.parseMaybeDefault(t, s, z(e.key));
        } else e.value = z(e.key);
        return e.shorthand = !0, this.finishNode(e, "ObjectProperty");
      }
    }

    parseObjPropValue(e, t, s, i, r, n, o, h) {
      let c = this.parseObjectMethod(e, i, r, n, o) || this.parseObjectProperty(e, t, s, n, h);
      return c || this.unexpected(), c;
    }

    parsePropertyName(e, t) {
      if (this.eat(0)) e.computed = !0, e.key = this.parseMaybeAssignAllowIn(), this.expect(3);else {
        let {
          type: s,
          value: i
        } = this.state,
            r;
        if (j(s)) r = this.parseIdentifier(!0);else switch (s) {
          case 130:
            r = this.parseNumericLiteral(i);
            break;

          case 129:
            r = this.parseStringLiteral(i);
            break;

          case 131:
            r = this.parseBigIntLiteral(i);
            break;

          case 132:
            r = this.parseDecimalLiteral(i);
            break;

          case 134:
            {
              let n = this.state.startLoc;
              t != null ? t.privateKeyLoc === null && (t.privateKeyLoc = n) : this.raise(l.UnexpectedPrivateField, {
                at: n
              }), r = this.parsePrivateName();
              break;
            }

          default:
            throw this.unexpected();
        }
        e.key = r, s !== 134 && (e.computed = !1);
      }
      return e.key;
    }

    initFunction(e, t) {
      e.id = null, e.generator = !1, e.async = !!t;
    }

    parseMethod(e, t, s, i, r, n, o = !1) {
      this.initFunction(e, s), e.generator = !!t;
      let h = i;
      this.scope.enter(U | Mt | (o ? Y : 0) | (r ? cs : 0)), this.prodParam.enter(kt(s, e.generator)), this.parseFunctionParams(e, h);
      let c = this.parseFunctionBodyAndFinish(e, n, !0);
      return this.prodParam.exit(), this.scope.exit(), c;
    }

    parseArrayLike(e, t, s, i) {
      s && this.expectPlugin("recordAndTuple");
      let r = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      let n = this.startNode();
      return this.next(), n.elements = this.parseExprList(e, !s, i, n), this.state.inFSharpPipelineDirectBody = r, this.finishNode(n, s ? "TupleExpression" : "ArrayExpression");
    }

    parseArrowExpression(e, t, s, i) {
      this.scope.enter(U | Ne);
      let r = kt(s, !1);
      !this.match(5) && this.prodParam.hasIn && (r |= tt), this.prodParam.enter(r), this.initFunction(e, s);
      let n = this.state.maybeInArrowParameters;
      return t && (this.state.maybeInArrowParameters = !0, this.setArrowFunctionParameters(e, t, i)), this.state.maybeInArrowParameters = !1, this.parseFunctionBody(e, !0), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = n, this.finishNode(e, "ArrowFunctionExpression");
    }

    setArrowFunctionParameters(e, t, s) {
      this.toAssignableList(t, s, !1), e.params = t;
    }

    parseFunctionBodyAndFinish(e, t, s = !1) {
      return this.parseFunctionBody(e, !1, s), this.finishNode(e, t);
    }

    parseFunctionBody(e, t, s = !1) {
      let i = t && !this.match(5);
      if (this.expressionScope.enter(Ts()), i) e.body = this.parseMaybeAssign(), this.checkParams(e, !1, t, !1);else {
        let r = this.state.strict,
            n = this.state.labels;
        this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | As), e.body = this.parseBlock(!0, !1, o => {
          let h = !this.isSimpleParamList(e.params);
          o && h && this.raise(l.IllegalLanguageModeDirective, {
            at: (e.kind === "method" || e.kind === "constructor") && !!e.key ? e.key.loc.end : e
          });
          let c = !r && this.state.strict;
          this.checkParams(e, !this.state.strict && !t && !s && !h, t, c), this.state.strict && e.id && this.checkIdentifier(e.id, Ti, c);
        }), this.prodParam.exit(), this.state.labels = n;
      }
      this.expressionScope.exit();
    }

    isSimpleParameter(e) {
      return e.type === "Identifier";
    }

    isSimpleParamList(e) {
      for (let t = 0, s = e.length; t < s; t++) if (!this.isSimpleParameter(e[t])) return !1;

      return !0;
    }

    checkParams(e, t, s, i = !0) {
      let r = !t && new Set(),
          n = {
        type: "FormalParameters"
      };

      for (let o of e.params) this.checkLVal(o, {
        in: n,
        binding: Ft,
        checkClashes: r,
        strictModeChanged: i
      });
    }

    parseExprList(e, t, s, i) {
      let r = [],
          n = !0;

      for (; !this.eat(e);) {
        if (n) n = !1;else if (this.expect(12), this.match(e)) {
          i && this.addTrailingCommaExtraToNode(i), this.next();
          break;
        }
        r.push(this.parseExprListItem(t, s));
      }

      return r;
    }

    parseExprListItem(e, t, s) {
      let i;
      if (this.match(12)) e || this.raise(l.UnexpectedToken, {
        at: this.state.curPosition(),
        unexpected: ","
      }), i = null;else if (this.match(21)) {
        let r = this.state.start,
            n = this.state.startLoc;
        i = this.parseParenItem(this.parseSpread(t), r, n);
      } else if (this.match(17)) {
        this.expectPlugin("partialApplication"), s || this.raise(l.UnexpectedArgumentPlaceholder, {
          at: this.state.startLoc
        });
        let r = this.startNode();
        this.next(), i = this.finishNode(r, "ArgumentPlaceholder");
      } else i = this.parseMaybeAssignAllowIn(t, this.parseParenItem);
      return i;
    }

    parseIdentifier(e) {
      let t = this.startNode(),
          s = this.parseIdentifierName(t.start, e);
      return this.createIdentifier(t, s);
    }

    createIdentifier(e, t) {
      return e.name = t, e.loc.identifierName = t, this.finishNode(e, "Identifier");
    }

    parseIdentifierName(e, t) {
      let s,
          {
        startLoc: i,
        type: r
      } = this.state;
      if (j(r)) s = this.state.value;else throw this.unexpected();
      let n = Qs(r);
      return t ? n && this.replaceToken(128) : this.checkReservedWord(s, i, n, !1), this.next(), s;
    }

    checkReservedWord(e, t, s, i) {
      if (e.length > 10 || !xi(e)) return;

      if (e === "yield") {
        if (this.prodParam.hasYield) {
          this.raise(l.YieldBindingIdentifier, {
            at: t
          });
          return;
        }
      } else if (e === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(l.AwaitBindingIdentifier, {
            at: t
          });
          return;
        }

        if (this.scope.inStaticBlock) {
          this.raise(l.AwaitBindingIdentifierInStaticBlock, {
            at: t
          });
          return;
        }

        this.expressionScope.recordAsyncArrowParametersError({
          at: t
        });
      } else if (e === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(l.ArgumentsInClass, {
          at: t
        });
        return;
      }

      if (s && fi(e)) {
        this.raise(l.UnexpectedKeyword, {
          at: t,
          keyword: e
        });
        return;
      }

      (this.state.strict ? i ? os : as : rs)(e, this.inModule) && this.raise(l.UnexpectedReservedWord, {
        at: t,
        reservedWord: e
      });
    }

    isAwaitAllowed() {
      return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction);
    }

    parseAwait(e, t) {
      let s = this.startNodeAt(e, t);
      return this.expressionScope.recordParameterInitializerError(l.AwaitExpressionFormalParameter, {
        at: s
      }), this.eat(55) && this.raise(l.ObsoleteAwaitStar, {
        at: s
      }), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (s.argument = this.parseMaybeUnary(null, !0)), this.finishNode(s, "AwaitExpression");
    }

    isAmbiguousAwait() {
      if (this.hasPrecedingLineBreak()) return !0;
      let {
        type: e
      } = this.state;
      return e === 53 || e === 10 || e === 0 || Dt(e) || e === 133 || e === 56 || this.hasPlugin("v8intrinsic") && e === 54;
    }

    parseYield() {
      let e = this.startNode();
      this.expressionScope.recordParameterInitializerError(l.YieldInParameter, {
        at: e
      }), this.next();
      let t = !1,
          s = null;
      if (!this.hasPrecedingLineBreak()) switch (t = this.eat(55), this.state.type) {
        case 13:
        case 135:
        case 8:
        case 11:
        case 3:
        case 9:
        case 14:
        case 12:
          if (!t) break;

        default:
          s = this.parseMaybeAssign();
      }
      return e.delegate = t, e.argument = s, this.finishNode(e, "YieldExpression");
    }

    checkPipelineAtInfixOperator(e, t) {
      this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }]) && e.type === "SequenceExpression" && this.raise(l.PipelineHeadSequenceExpression, {
        at: t
      });
    }

    parseSmartPipelineBodyInStyle(e, t, s) {
      if (this.isSimpleReference(e)) {
        let i = this.startNodeAt(t, s);
        return i.callee = e, this.finishNode(i, "PipelineBareFunction");
      } else {
        let i = this.startNodeAt(t, s);
        return this.checkSmartPipeTopicBodyEarlyErrors(s), i.expression = e, this.finishNode(i, "PipelineTopicExpression");
      }
    }

    isSimpleReference(e) {
      switch (e.type) {
        case "MemberExpression":
          return !e.computed && this.isSimpleReference(e.object);

        case "Identifier":
          return !0;

        default:
          return !1;
      }
    }

    checkSmartPipeTopicBodyEarlyErrors(e) {
      if (this.match(19)) throw this.raise(l.PipelineBodyNoArrow, {
        at: this.state.startLoc
      });
      this.topicReferenceWasUsedInCurrentContext() || this.raise(l.PipelineTopicUnused, {
        at: e
      });
    }

    withTopicBindingContext(e) {
      let t = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 1,
        maxTopicIndex: null
      };

      try {
        return e();
      } finally {
        this.state.topicContext = t;
      }
    }

    withSmartMixTopicForbiddingContext(e) {
      if (this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }])) {
        let t = this.state.topicContext;
        this.state.topicContext = {
          maxNumOfResolvableTopics: 0,
          maxTopicIndex: null
        };

        try {
          return e();
        } finally {
          this.state.topicContext = t;
        }
      } else return e();
    }

    withSoloAwaitPermittingContext(e) {
      let t = this.state.soloAwait;
      this.state.soloAwait = !0;

      try {
        return e();
      } finally {
        this.state.soloAwait = t;
      }
    }

    allowInAnd(e) {
      let t = this.prodParam.currentFlags();

      if (tt & ~t) {
        this.prodParam.enter(t | tt);

        try {
          return e();
        } finally {
          this.prodParam.exit();
        }
      }

      return e();
    }

    disallowInAnd(e) {
      let t = this.prodParam.currentFlags();

      if (tt & t) {
        this.prodParam.enter(t & ~tt);

        try {
          return e();
        } finally {
          this.prodParam.exit();
        }
      }

      return e();
    }

    registerTopicReference() {
      this.state.topicContext.maxTopicIndex = 0;
    }

    topicReferenceIsAllowedInCurrentContext() {
      return this.state.topicContext.maxNumOfResolvableTopics >= 1;
    }

    topicReferenceWasUsedInCurrentContext() {
      return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
    }

    parseFSharpPipelineBody(e) {
      let t = this.state.start,
          s = this.state.startLoc;
      this.state.potentialArrowAt = this.state.start;
      let i = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !0;
      let r = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), t, s, e);
      return this.state.inFSharpPipelineDirectBody = i, r;
    }

    parseModuleExpression() {
      this.expectPlugin("moduleBlocks");
      let e = this.startNode();
      this.next(), this.eat(5);
      let t = this.initializeScopes(!0);
      this.enterInitialScopes();
      let s = this.startNode();

      try {
        e.body = this.parseProgram(s, 8, "module");
      } finally {
        t();
      }

      return this.eat(8), this.finishNode(e, "ModuleExpression");
    }

    parsePropertyNamePrefixOperator(e) {}

  },
      Kt = {
    kind: "loop"
  },
      cr = {
    kind: "switch"
  },
      lr = 0,
      Ht = 1,
      Qe = 2,
      Ze = 4,
      ur = /[\uD800-\uDFFF]/u,
      Wt = /in(?:stanceof)?/y;

  function pr(a, e) {
    for (let t = 0; t < a.length; t++) {
      let s = a[t],
          {
        type: i
      } = s;

      if (typeof i == "number") {
        {
          if (i === 134) {
            let {
              loc: r,
              start: n,
              value: o,
              end: h
            } = s,
                c = n + 1,
                u = L(r.start, 1);
            a.splice(t, 1, new M({
              type: F(27),
              value: "#",
              start: n,
              end: c,
              startLoc: r.start,
              endLoc: u
            }), new M({
              type: F(128),
              value: o,
              start: c,
              end: h,
              startLoc: u,
              endLoc: r.end
            })), t++;
            continue;
          }

          if (Dt(i)) {
            let {
              loc: r,
              start: n,
              value: o,
              end: h
            } = s,
                c = n + 1,
                u = L(r.start, 1),
                p;
            e.charCodeAt(n) === 96 ? p = new M({
              type: F(22),
              value: "`",
              start: n,
              end: c,
              startLoc: r.start,
              endLoc: u
            }) : p = new M({
              type: F(8),
              value: "}",
              start: n,
              end: c,
              startLoc: r.start,
              endLoc: u
            });
            let y, d, m, C;
            i === 24 ? (d = h - 1, m = L(r.end, -1), y = o === null ? null : o.slice(1, -1), C = new M({
              type: F(22),
              value: "`",
              start: d,
              end: h,
              startLoc: m,
              endLoc: r.end
            })) : (d = h - 2, m = L(r.end, -2), y = o === null ? null : o.slice(1, -2), C = new M({
              type: F(23),
              value: "${",
              start: d,
              end: h,
              startLoc: m,
              endLoc: r.end
            })), a.splice(t, 1, p, new M({
              type: F(20),
              value: y,
              start: c,
              end: d,
              startLoc: u,
              endLoc: m
            }), C), t += 2;
            continue;
          }
        }
        s.type = F(i);
      }
    }

    return a;
  }

  var Pe = class extends xe {
    parseTopLevel(e, t) {
      return e.program = this.parseProgram(t), e.comments = this.state.comments, this.options.tokens && (e.tokens = pr(this.tokens, this.input)), this.finishNode(e, "File");
    }

    parseProgram(e, t = 135, s = this.options.sourceType) {
      if (e.sourceType = s, e.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(e, !0, !0, t), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0) for (let [i, r] of Array.from(this.scope.undefinedExports)) this.raise(l.ModuleExportUndefined, {
        at: r,
        localName: i
      });
      return this.finishNode(e, "Program");
    }

    stmtToDirective(e) {
      let t = e;
      t.type = "Directive", t.value = t.expression, delete t.expression;
      let s = t.value,
          i = s.value,
          r = this.input.slice(s.start, s.end),
          n = s.value = r.slice(1, -1);
      return this.addExtra(s, "raw", r), this.addExtra(s, "rawValue", n), this.addExtra(s, "expressionValue", i), s.type = "DirectiveLiteral", t;
    }

    parseInterpreterDirective() {
      if (!this.match(28)) return null;
      let e = this.startNode();
      return e.value = this.state.value, this.next(), this.finishNode(e, "InterpreterDirective");
    }

    isLet(e) {
      return this.isContextual(99) ? this.isLetKeyword(e) : !1;
    }

    isLetKeyword(e) {
      let t = this.nextTokenStart(),
          s = this.codePointAtPos(t);
      if (s === 92 || s === 91) return !0;
      if (e) return !1;
      if (s === 123) return !0;

      if (_(s)) {
        if (Wt.lastIndex = t, Wt.test(this.input)) {
          let i = this.codePointAtPos(Wt.lastIndex);
          if (!it(i) && i !== 92) return !1;
        }

        return !0;
      }

      return !1;
    }

    parseStatement(e, t) {
      return this.match(26) && this.parseDecorators(!0), this.parseStatementContent(e, t);
    }

    parseStatementContent(e, t) {
      let s = this.state.type,
          i = this.startNode(),
          r;

      switch (this.isLet(e) && (s = 74, r = "let"), s) {
        case 60:
          return this.parseBreakContinueStatement(i, !0);

        case 63:
          return this.parseBreakContinueStatement(i, !1);

        case 64:
          return this.parseDebuggerStatement(i);

        case 90:
          return this.parseDoStatement(i);

        case 91:
          return this.parseForStatement(i);

        case 68:
          if (this.lookaheadCharCode() === 46) break;
          return e && (this.state.strict ? this.raise(l.StrictFunction, {
            at: this.state.startLoc
          }) : e !== "if" && e !== "label" && this.raise(l.SloppyFunction, {
            at: this.state.startLoc
          })), this.parseFunctionStatement(i, !1, !e);

        case 80:
          return e && this.unexpected(), this.parseClass(i, !0);

        case 69:
          return this.parseIfStatement(i);

        case 70:
          return this.parseReturnStatement(i);

        case 71:
          return this.parseSwitchStatement(i);

        case 72:
          return this.parseThrowStatement(i);

        case 73:
          return this.parseTryStatement(i);

        case 75:
        case 74:
          return r = r || this.state.value, e && r !== "var" && this.raise(l.UnexpectedLexicalDeclaration, {
            at: this.state.startLoc
          }), this.parseVarStatement(i, r);

        case 92:
          return this.parseWhileStatement(i);

        case 76:
          return this.parseWithStatement(i);

        case 5:
          return this.parseBlock();

        case 13:
          return this.parseEmptyStatement(i);

        case 83:
          {
            let h = this.lookaheadCharCode();
            if (h === 40 || h === 46) break;
          }

        case 82:
          {
            !this.options.allowImportExportEverywhere && !t && this.raise(l.UnexpectedImportExport, {
              at: this.state.startLoc
            }), this.next();
            let h;
            return s === 83 ? (h = this.parseImport(i), h.type === "ImportDeclaration" && (!h.importKind || h.importKind === "value") && (this.sawUnambiguousESM = !0)) : (h = this.parseExport(i), (h.type === "ExportNamedDeclaration" && (!h.exportKind || h.exportKind === "value") || h.type === "ExportAllDeclaration" && (!h.exportKind || h.exportKind === "value") || h.type === "ExportDefaultDeclaration") && (this.sawUnambiguousESM = !0)), this.assertModuleNodeAllowed(h), h;
          }

        default:
          if (this.isAsyncFunction()) return e && this.raise(l.AsyncFunctionInSingleStatementContext, {
            at: this.state.startLoc
          }), this.next(), this.parseFunctionStatement(i, !0, !e);
      }

      let n = this.state.value,
          o = this.parseExpression();
      return w(s) && o.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(i, n, o, e) : this.parseExpressionStatement(i, o);
    }

    assertModuleNodeAllowed(e) {
      !this.options.allowImportExportEverywhere && !this.inModule && this.raise(l.ImportOutsideModule, {
        at: e
      });
    }

    takeDecorators(e) {
      let t = this.state.decoratorStack[this.state.decoratorStack.length - 1];
      t.length && (e.decorators = t, this.resetStartLocationFromNode(e, t[0]), this.state.decoratorStack[this.state.decoratorStack.length - 1] = []);
    }

    canHaveLeadingDecorator() {
      return this.match(80);
    }

    parseDecorators(e) {
      let t = this.state.decoratorStack[this.state.decoratorStack.length - 1];

      for (; this.match(26);) {
        let s = this.parseDecorator();
        t.push(s);
      }

      if (this.match(82)) e || this.unexpected(), this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(l.DecoratorExportClass, {
        at: this.state.startLoc
      });else if (!this.canHaveLeadingDecorator()) throw this.raise(l.UnexpectedLeadingDecorator, {
        at: this.state.startLoc
      });
    }

    parseDecorator() {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);
      let e = this.startNode();

      if (this.next(), this.hasPlugin("decorators")) {
        this.state.decoratorStack.push([]);
        let t = this.state.start,
            s = this.state.startLoc,
            i;

        if (this.match(10)) {
          let r = this.state.start,
              n = this.state.startLoc;
          this.next(), i = this.parseExpression(), this.expect(11), i = this.wrapParenthesis(r, n, i);
          let o = this.state.startLoc;
          e.expression = this.parseMaybeDecoratorArguments(i), this.getPluginOption("decorators", "allowCallParenthesized") === !1 && e.expression !== i && this.raise(l.DecoratorArgumentsOutsideParentheses, {
            at: o
          });
        } else {
          for (i = this.parseIdentifier(!1); this.eat(16);) {
            let r = this.startNodeAt(t, s);
            r.object = i, this.match(134) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), r.property = this.parsePrivateName()) : r.property = this.parseIdentifier(!0), r.computed = !1, i = this.finishNode(r, "MemberExpression");
          }

          e.expression = this.parseMaybeDecoratorArguments(i);
        }

        this.state.decoratorStack.pop();
      } else e.expression = this.parseExprSubscripts();

      return this.finishNode(e, "Decorator");
    }

    parseMaybeDecoratorArguments(e) {
      if (this.eat(10)) {
        let t = this.startNodeAtNode(e);
        return t.callee = e, t.arguments = this.parseCallExpressionArguments(11, !1), this.toReferencedList(t.arguments), this.finishNode(t, "CallExpression");
      }

      return e;
    }

    parseBreakContinueStatement(e, t) {
      return this.next(), this.isLineTerminator() ? e.label = null : (e.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(e, t), this.finishNode(e, t ? "BreakStatement" : "ContinueStatement");
    }

    verifyBreakContinue(e, t) {
      let s;

      for (s = 0; s < this.state.labels.length; ++s) {
        let i = this.state.labels[s];
        if ((e.label == null || i.name === e.label.name) && (i.kind != null && (t || i.kind === "loop") || e.label && t)) break;
      }

      if (s === this.state.labels.length) {
        let i = t ? "BreakStatement" : "ContinueStatement";
        this.raise(l.IllegalBreakContinue, {
          at: e,
          type: i
        });
      }
    }

    parseDebuggerStatement(e) {
      return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
    }

    parseHeaderExpression() {
      this.expect(10);
      let e = this.parseExpression();
      return this.expect(11), e;
    }

    parseDoStatement(e) {
      return this.next(), this.state.labels.push(Kt), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("do")), this.state.labels.pop(), this.expect(92), e.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(e, "DoWhileStatement");
    }

    parseForStatement(e) {
      this.next(), this.state.labels.push(Kt);
      let t = null;
      if (this.isAwaitAllowed() && this.eatContextual(96) && (t = this.state.lastTokStartLoc), this.scope.enter(et), this.expect(10), this.match(13)) return t !== null && this.unexpected(t), this.parseFor(e, null);
      let s = this.isContextual(99),
          i = s && this.isLetKeyword();

      if (this.match(74) || this.match(75) || i) {
        let c = this.startNode(),
            u = i ? "let" : this.state.value;
        this.next(), this.parseVar(c, !0, u);
        let p = this.finishNode(c, "VariableDeclaration");
        return (this.match(58) || this.isContextual(101)) && p.declarations.length === 1 ? this.parseForIn(e, p, t) : (t !== null && this.unexpected(t), this.parseFor(e, p));
      }

      let r = this.isContextual(95),
          n = new nt(),
          o = this.parseExpression(!0, n),
          h = this.isContextual(101);

      if (h && (s && this.raise(l.ForOfLet, {
        at: o
      }), t === null && r && o.type === "Identifier" && this.raise(l.ForOfAsync, {
        at: o
      })), h || this.match(58)) {
        this.checkDestructuringPrivate(n), this.toAssignable(o, !0);
        let c = h ? "ForOfStatement" : "ForInStatement";
        return this.checkLVal(o, {
          in: {
            type: c
          }
        }), this.parseForIn(e, o, t);
      } else this.checkExpressionErrors(n, !0);

      return t !== null && this.unexpected(t), this.parseFor(e, o);
    }

    parseFunctionStatement(e, t, s) {
      return this.next(), this.parseFunction(e, Ht | (s ? 0 : Qe), t);
    }

    parseIfStatement(e) {
      return this.next(), e.test = this.parseHeaderExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(66) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
    }

    parseReturnStatement(e) {
      return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(l.IllegalReturn, {
        at: this.state.startLoc
      }), this.next(), this.isLineTerminator() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
    }

    parseSwitchStatement(e) {
      this.next(), e.discriminant = this.parseHeaderExpression();
      let t = e.cases = [];
      this.expect(5), this.state.labels.push(cr), this.scope.enter(et);
      let s;

      for (let i; !this.match(8);) if (this.match(61) || this.match(65)) {
        let r = this.match(61);
        s && this.finishNode(s, "SwitchCase"), t.push(s = this.startNode()), s.consequent = [], this.next(), r ? s.test = this.parseExpression() : (i && this.raise(l.MultipleDefaultsInSwitch, {
          at: this.state.lastTokStartLoc
        }), i = !0, s.test = null), this.expect(14);
      } else s ? s.consequent.push(this.parseStatement(null)) : this.unexpected();

      return this.scope.exit(), s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(e, "SwitchStatement");
    }

    parseThrowStatement(e) {
      return this.next(), this.hasPrecedingLineBreak() && this.raise(l.NewlineAfterThrow, {
        at: this.state.lastTokEndLoc
      }), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
    }

    parseCatchClauseParam() {
      let e = this.parseBindingAtom(),
          t = e.type === "Identifier";
      return this.scope.enter(t ? hs : 0), this.checkLVal(e, {
        in: {
          type: "CatchClause"
        },
        binding: Q,
        allowingSloppyLetBinding: !0
      }), e;
    }

    parseTryStatement(e) {
      if (this.next(), e.block = this.parseBlock(), e.handler = null, this.match(62)) {
        let t = this.startNode();
        this.next(), this.match(10) ? (this.expect(10), t.param = this.parseCatchClauseParam(), this.expect(11)) : (t.param = null, this.scope.enter(et)), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(!1, !1)), this.scope.exit(), e.handler = this.finishNode(t, "CatchClause");
      }

      return e.finalizer = this.eat(67) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(l.NoCatchOrFinally, {
        at: e
      }), this.finishNode(e, "TryStatement");
    }

    parseVarStatement(e, t, s = !1) {
      return this.next(), this.parseVar(e, !1, t, s), this.semicolon(), this.finishNode(e, "VariableDeclaration");
    }

    parseWhileStatement(e) {
      return this.next(), e.test = this.parseHeaderExpression(), this.state.labels.push(Kt), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("while")), this.state.labels.pop(), this.finishNode(e, "WhileStatement");
    }

    parseWithStatement(e) {
      return this.state.strict && this.raise(l.StrictWith, {
        at: this.state.startLoc
      }), this.next(), e.object = this.parseHeaderExpression(), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("with")), this.finishNode(e, "WithStatement");
    }

    parseEmptyStatement(e) {
      return this.next(), this.finishNode(e, "EmptyStatement");
    }

    parseLabeledStatement(e, t, s, i) {
      for (let n of this.state.labels) n.name === t && this.raise(l.LabelRedeclaration, {
        at: s,
        labelName: t
      });

      let r = ei(this.state.type) ? "loop" : this.match(71) ? "switch" : null;

      for (let n = this.state.labels.length - 1; n >= 0; n--) {
        let o = this.state.labels[n];
        if (o.statementStart === e.start) o.statementStart = this.state.start, o.kind = r;else break;
      }

      return this.state.labels.push({
        name: t,
        kind: r,
        statementStart: this.state.start
      }), e.body = this.parseStatement(i ? i.indexOf("label") === -1 ? i + "label" : i : "label"), this.state.labels.pop(), e.label = s, this.finishNode(e, "LabeledStatement");
    }

    parseExpressionStatement(e, t) {
      return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
    }

    parseBlock(e = !1, t = !0, s) {
      let i = this.startNode();
      return e && this.state.strictErrors.clear(), this.expect(5), t && this.scope.enter(et), this.parseBlockBody(i, e, !1, 8, s), t && this.scope.exit(), this.finishNode(i, "BlockStatement");
    }

    isValidDirective(e) {
      return e.type === "ExpressionStatement" && e.expression.type === "StringLiteral" && !e.expression.extra.parenthesized;
    }

    parseBlockBody(e, t, s, i, r) {
      let n = e.body = [],
          o = e.directives = [];
      this.parseBlockOrModuleBlockBody(n, t ? o : void 0, s, i, r);
    }

    parseBlockOrModuleBlockBody(e, t, s, i, r) {
      let n = this.state.strict,
          o = !1,
          h = !1;

      for (; !this.match(i);) {
        let c = this.parseStatement(null, s);

        if (t && !h) {
          if (this.isValidDirective(c)) {
            let u = this.stmtToDirective(c);
            t.push(u), !o && u.value.value === "use strict" && (o = !0, this.setStrict(!0));
            continue;
          }

          h = !0, this.state.strictErrors.clear();
        }

        e.push(c);
      }

      r && r.call(this, o), n || this.setStrict(!1), this.next();
    }

    parseFor(e, t) {
      return e.init = t, this.semicolon(!1), e.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), e.update = this.match(11) ? null : this.parseExpression(), this.expect(11), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(e, "ForStatement");
    }

    parseForIn(e, t, s) {
      let i = this.match(58);
      return this.next(), i ? s !== null && this.unexpected(s) : e.await = s !== null, t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.state.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(l.ForInOfLoopInitializer, {
        at: t,
        type: i ? "ForInStatement" : "ForOfStatement"
      }), t.type === "AssignmentPattern" && this.raise(l.InvalidLhs, {
        at: t,
        ancestor: {
          type: "ForStatement"
        }
      }), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
    }

    parseVar(e, t, s, i = !1) {
      let r = e.declarations = [];

      for (e.kind = s;;) {
        let n = this.startNode();
        if (this.parseVarId(n, s), n.init = this.eat(29) ? t ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, n.init === null && !i && (n.id.type !== "Identifier" && !(t && (this.match(58) || this.isContextual(101))) ? this.raise(l.DeclarationMissingInitializer, {
          at: this.state.lastTokEndLoc,
          kind: "destructuring"
        }) : s === "const" && !(this.match(58) || this.isContextual(101)) && this.raise(l.DeclarationMissingInitializer, {
          at: this.state.lastTokEndLoc,
          kind: "const"
        })), r.push(this.finishNode(n, "VariableDeclarator")), !this.eat(12)) break;
      }

      return e;
    }

    parseVarId(e, t) {
      e.id = this.parseBindingAtom(), this.checkLVal(e.id, {
        in: {
          type: "VariableDeclarator"
        },
        binding: t === "var" ? Ft : Q
      });
    }

    parseFunction(e, t = lr, s = !1) {
      let i = t & Ht,
          r = t & Qe,
          n = !!i && !(t & Ze);
      this.initFunction(e, s), this.match(55) && r && this.raise(l.GeneratorInSingleStatementContext, {
        at: this.state.startLoc
      }), e.generator = this.eat(55), i && (e.id = this.parseFunctionId(n));
      let o = this.state.maybeInArrowParameters;
      return this.state.maybeInArrowParameters = !1, this.scope.enter(U), this.prodParam.enter(kt(s, e.generator)), i || (e.id = this.parseFunctionId()), this.parseFunctionParams(e, !1), this.withSmartMixTopicForbiddingContext(() => {
        this.parseFunctionBodyAndFinish(e, i ? "FunctionDeclaration" : "FunctionExpression");
      }), this.prodParam.exit(), this.scope.exit(), i && !r && this.registerFunctionStatementId(e), this.state.maybeInArrowParameters = o, e;
    }

    parseFunctionId(e) {
      return e || w(this.state.type) ? this.parseIdentifier() : null;
    }

    parseFunctionParams(e, t) {
      this.expect(10), this.expressionScope.enter(Ri()), e.params = this.parseBindingList(11, 41, !1, t), this.expressionScope.exit();
    }

    registerFunctionStatementId(e) {
      !e.id || this.scope.declareName(e.id.name, this.state.strict || e.generator || e.async ? this.scope.treatFunctionsAsVar ? Ft : Q : ds, e.id.loc.start);
    }

    parseClass(e, t, s) {
      this.next(), this.takeDecorators(e);
      let i = this.state.strict;
      return this.state.strict = !0, this.parseClassId(e, t, s), this.parseClassSuper(e), e.body = this.parseClassBody(!!e.superClass, i), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
    }

    isClassProperty() {
      return this.match(29) || this.match(13) || this.match(8);
    }

    isClassMethod() {
      return this.match(10);
    }

    isNonstaticConstructor(e) {
      return !e.computed && !e.static && (e.key.name === "constructor" || e.key.value === "constructor");
    }

    parseClassBody(e, t) {
      this.classScope.enter();
      let s = {
        hadConstructor: !1,
        hadSuperClass: e
      },
          i = [],
          r = this.startNode();
      if (r.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
        for (; !this.match(8);) {
          if (this.eat(13)) {
            if (i.length > 0) throw this.raise(l.DecoratorSemicolon, {
              at: this.state.lastTokEndLoc
            });
            continue;
          }

          if (this.match(26)) {
            i.push(this.parseDecorator());
            continue;
          }

          let n = this.startNode();
          i.length && (n.decorators = i, this.resetStartLocationFromNode(n, i[0]), i = []), this.parseClassMember(r, n, s), n.kind === "constructor" && n.decorators && n.decorators.length > 0 && this.raise(l.DecoratorConstructor, {
            at: n
          });
        }
      }), this.state.strict = t, this.next(), i.length) throw this.raise(l.TrailingDecorator, {
        at: this.state.startLoc
      });
      return this.classScope.exit(), this.finishNode(r, "ClassBody");
    }

    parseClassMemberFromModifier(e, t) {
      let s = this.parseIdentifier(!0);

      if (this.isClassMethod()) {
        let i = t;
        return i.kind = "method", i.computed = !1, i.key = s, i.static = !1, this.pushClassMethod(e, i, !1, !1, !1, !1), !0;
      } else if (this.isClassProperty()) {
        let i = t;
        return i.computed = !1, i.key = s, i.static = !1, e.body.push(this.parseClassProperty(i)), !0;
      }

      return this.resetPreviousNodeTrailingComments(s), !1;
    }

    parseClassMember(e, t, s) {
      let i = this.isContextual(104);

      if (i) {
        if (this.parseClassMemberFromModifier(e, t)) return;

        if (this.eat(5)) {
          this.parseClassStaticBlock(e, t);
          return;
        }
      }

      this.parseClassMemberWithIsStatic(e, t, s, i);
    }

    parseClassMemberWithIsStatic(e, t, s, i) {
      let r = t,
          n = t,
          o = t,
          h = t,
          c = t,
          u = r,
          p = r;

      if (t.static = i, this.parsePropertyNamePrefixOperator(t), this.eat(55)) {
        u.kind = "method";
        let g = this.match(134);

        if (this.parseClassElementName(u), g) {
          this.pushClassPrivateMethod(e, n, !0, !1);
          return;
        }

        this.isNonstaticConstructor(r) && this.raise(l.ConstructorIsGenerator, {
          at: r.key
        }), this.pushClassMethod(e, r, !0, !1, !1, !1);
        return;
      }

      let y = w(this.state.type) && !this.state.containsEsc,
          d = this.match(134),
          m = this.parseClassElementName(t),
          C = this.state.startLoc;

      if (this.parsePostMemberNameModifiers(p), this.isClassMethod()) {
        if (u.kind = "method", d) {
          this.pushClassPrivateMethod(e, n, !1, !1);
          return;
        }

        let g = this.isNonstaticConstructor(r),
            E = !1;
        g && (r.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(l.DuplicateConstructor, {
          at: m
        }), g && this.hasPlugin("typescript") && t.override && this.raise(l.OverrideOnConstructor, {
          at: m
        }), s.hadConstructor = !0, E = s.hadSuperClass), this.pushClassMethod(e, r, !1, !1, g, E);
      } else if (this.isClassProperty()) d ? this.pushClassPrivateProperty(e, h) : this.pushClassProperty(e, o);else if (y && m.name === "async" && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(m);
        let g = this.eat(55);
        p.optional && this.unexpected(C), u.kind = "method";
        let E = this.match(134);
        this.parseClassElementName(u), this.parsePostMemberNameModifiers(p), E ? this.pushClassPrivateMethod(e, n, g, !0) : (this.isNonstaticConstructor(r) && this.raise(l.ConstructorIsAsync, {
          at: r.key
        }), this.pushClassMethod(e, r, g, !0, !1, !1));
      } else if (y && (m.name === "get" || m.name === "set") && !(this.match(55) && this.isLineTerminator())) {
        this.resetPreviousNodeTrailingComments(m), u.kind = m.name;
        let g = this.match(134);
        this.parseClassElementName(r), g ? this.pushClassPrivateMethod(e, n, !1, !1) : (this.isNonstaticConstructor(r) && this.raise(l.ConstructorIsAccessor, {
          at: r.key
        }), this.pushClassMethod(e, r, !1, !1, !1, !1)), this.checkGetterSetterParams(r);
      } else if (y && m.name === "accessor" && !this.isLineTerminator()) {
        this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(m);
        let g = this.match(134);
        this.parseClassElementName(o), this.pushClassAccessorProperty(e, c, g);
      } else this.isLineTerminator() ? d ? this.pushClassPrivateProperty(e, h) : this.pushClassProperty(e, o) : this.unexpected();
    }

    parseClassElementName(e) {
      let {
        type: t,
        value: s
      } = this.state;

      if ((t === 128 || t === 129) && e.static && s === "prototype" && this.raise(l.StaticPrototype, {
        at: this.state.startLoc
      }), t === 134) {
        s === "constructor" && this.raise(l.ConstructorClassPrivateField, {
          at: this.state.startLoc
        });
        let i = this.parsePrivateName();
        return e.key = i, i;
      }

      return this.parsePropertyName(e);
    }

    parseClassStaticBlock(e, t) {
      var s;
      this.scope.enter(Y | Qt | Mt);
      let i = this.state.labels;
      this.state.labels = [], this.prodParam.enter(at);
      let r = t.body = [];
      this.parseBlockOrModuleBlockBody(r, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = i, e.body.push(this.finishNode(t, "StaticBlock")), (s = t.decorators) != null && s.length && this.raise(l.DecoratorStaticBlock, {
        at: t
      });
    }

    pushClassProperty(e, t) {
      !t.computed && (t.key.name === "constructor" || t.key.value === "constructor") && this.raise(l.ConstructorClassField, {
        at: t.key
      }), e.body.push(this.parseClassProperty(t));
    }

    pushClassPrivateProperty(e, t) {
      let s = this.parseClassPrivateProperty(t);
      e.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), Vt, s.key.loc.start);
    }

    pushClassAccessorProperty(e, t, s) {
      if (!s && !t.computed) {
        let r = t.key;
        (r.name === "constructor" || r.value === "constructor") && this.raise(l.ConstructorClassField, {
          at: r
        });
      }

      let i = this.parseClassAccessorProperty(t);
      e.body.push(i), s && this.classScope.declarePrivateName(this.getPrivateNameSV(i.key), Vt, i.key.loc.start);
    }

    pushClassMethod(e, t, s, i, r, n) {
      e.body.push(this.parseMethod(t, s, i, r, n, "ClassMethod", !0));
    }

    pushClassPrivateMethod(e, t, s, i) {
      let r = this.parseMethod(t, s, i, !1, !1, "ClassPrivateMethod", !0);
      e.body.push(r);
      let n = r.kind === "get" ? r.static ? wi : Ei : r.kind === "set" ? r.static ? Ci : Ii : Vt;
      this.declareClassPrivateMethodInScope(r, n);
    }

    declareClassPrivateMethodInScope(e, t) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(e.key), t, e.key.loc.start);
    }

    parsePostMemberNameModifiers(e) {}

    parseClassPrivateProperty(e) {
      return this.parseInitializer(e), this.semicolon(), this.finishNode(e, "ClassPrivateProperty");
    }

    parseClassProperty(e) {
      return this.parseInitializer(e), this.semicolon(), this.finishNode(e, "ClassProperty");
    }

    parseClassAccessorProperty(e) {
      return this.parseInitializer(e), this.semicolon(), this.finishNode(e, "ClassAccessorProperty");
    }

    parseInitializer(e) {
      this.scope.enter(Y | Mt), this.expressionScope.enter(Ts()), this.prodParam.enter(at), e.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
    }

    parseClassId(e, t, s, i = ps) {
      if (w(this.state.type)) e.id = this.parseIdentifier(), t && this.declareNameFromIdentifier(e.id, i);else if (s || !t) e.id = null;else throw this.raise(l.MissingClassName, {
        at: this.state.startLoc
      });
    }

    parseClassSuper(e) {
      e.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
    }

    parseExport(e) {
      let t = this.maybeParseExportDefaultSpecifier(e),
          s = !t || this.eat(12),
          i = s && this.eatExportStar(e),
          r = i && this.maybeParseExportNamespaceSpecifier(e),
          n = s && (!r || this.eat(12)),
          o = t || i;
      if (i && !r) return t && this.unexpected(), this.parseExportFrom(e, !0), this.finishNode(e, "ExportAllDeclaration");
      let h = this.maybeParseExportNamedSpecifiers(e);
      if (t && s && !i && !h || r && n && !h) throw this.unexpected(null, 5);
      let c;
      if (o || h ? (c = !1, this.parseExportFrom(e, o)) : c = this.maybeParseExportDeclaration(e), o || h || c) return this.checkExport(e, !0, !1, !!e.source), this.finishNode(e, "ExportNamedDeclaration");
      if (this.eat(65)) return e.declaration = this.parseExportDefaultExpression(), this.checkExport(e, !0, !0), this.finishNode(e, "ExportDefaultDeclaration");
      throw this.unexpected(null, 5);
    }

    eatExportStar(e) {
      return this.eat(55);
    }

    maybeParseExportDefaultSpecifier(e) {
      if (this.isExportDefaultSpecifier()) {
        this.expectPlugin("exportDefaultFrom");
        let t = this.startNode();
        return t.exported = this.parseIdentifier(!0), e.specifiers = [this.finishNode(t, "ExportDefaultSpecifier")], !0;
      }

      return !1;
    }

    maybeParseExportNamespaceSpecifier(e) {
      if (this.isContextual(93)) {
        e.specifiers || (e.specifiers = []);
        let t = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
        return this.next(), t.exported = this.parseModuleExportName(), e.specifiers.push(this.finishNode(t, "ExportNamespaceSpecifier")), !0;
      }

      return !1;
    }

    maybeParseExportNamedSpecifiers(e) {
      if (this.match(5)) {
        e.specifiers || (e.specifiers = []);
        let t = e.exportKind === "type";
        return e.specifiers.push(...this.parseExportSpecifiers(t)), e.source = null, e.declaration = null, this.hasPlugin("importAssertions") && (e.assertions = []), !0;
      }

      return !1;
    }

    maybeParseExportDeclaration(e) {
      return this.shouldParseExportDeclaration() ? (e.specifiers = [], e.source = null, this.hasPlugin("importAssertions") && (e.assertions = []), e.declaration = this.parseExportDeclaration(e), !0) : !1;
    }

    isAsyncFunction() {
      if (!this.isContextual(95)) return !1;
      let e = this.nextTokenStart();
      return !De.test(this.input.slice(this.state.pos, e)) && this.isUnparsedContextual(e, "function");
    }

    parseExportDefaultExpression() {
      let e = this.startNode(),
          t = this.isAsyncFunction();
      if (this.match(68) || t) return this.next(), t && this.next(), this.parseFunction(e, Ht | Ze, t);
      if (this.match(80)) return this.parseClass(e, !0, !0);
      if (this.match(26)) return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(l.DecoratorBeforeExport, {
        at: this.state.startLoc
      }), this.parseDecorators(!1), this.parseClass(e, !0, !0);
      if (this.match(75) || this.match(74) || this.isLet()) throw this.raise(l.UnsupportedDefaultExport, {
        at: this.state.startLoc
      });
      let s = this.parseMaybeAssignAllowIn();
      return this.semicolon(), s;
    }

    parseExportDeclaration(e) {
      return this.parseStatement(null);
    }

    isExportDefaultSpecifier() {
      let {
        type: e
      } = this.state;

      if (w(e)) {
        if (e === 95 && !this.state.containsEsc || e === 99) return !1;

        if ((e === 126 || e === 125) && !this.state.containsEsc) {
          let {
            type: i
          } = this.lookahead();
          if (w(i) && i !== 97 || i === 5) return this.expectOnePlugin(["flow", "typescript"]), !1;
        }
      } else if (!this.match(65)) return !1;

      let t = this.nextTokenStart(),
          s = this.isUnparsedContextual(t, "from");
      if (this.input.charCodeAt(t) === 44 || w(this.state.type) && s) return !0;

      if (this.match(65) && s) {
        let i = this.input.charCodeAt(this.nextTokenStartSince(t + 4));
        return i === 34 || i === 39;
      }

      return !1;
    }

    parseExportFrom(e, t) {
      if (this.eatContextual(97)) {
        e.source = this.parseImportSource(), this.checkExport(e);
        let s = this.maybeParseImportAssertions();
        s && (e.assertions = s, this.checkJSONModuleImport(e));
      } else t && this.unexpected();

      this.semicolon();
    }

    shouldParseExportDeclaration() {
      let {
        type: e
      } = this.state;

      if (e === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators"))) {
        if (this.getPluginOption("decorators", "decoratorsBeforeExport")) throw this.raise(l.DecoratorBeforeExport, {
          at: this.state.startLoc
        });
        return !0;
      }

      return e === 74 || e === 75 || e === 68 || e === 80 || this.isLet() || this.isAsyncFunction();
    }

    checkExport(e, t, s, i) {
      if (t) {
        if (s) {
          if (this.checkDuplicateExports(e, "default"), this.hasPlugin("exportDefaultFrom")) {
            var r;
            let o = e.declaration;
            o.type === "Identifier" && o.name === "from" && o.end - o.start === 4 && !((r = o.extra) != null && r.parenthesized) && this.raise(l.ExportDefaultFromAsIdentifier, {
              at: o
            });
          }
        } else if (e.specifiers && e.specifiers.length) for (let o of e.specifiers) {
          let {
            exported: h
          } = o,
              c = h.type === "Identifier" ? h.name : h.value;

          if (this.checkDuplicateExports(o, c), !i && o.local) {
            let {
              local: u
            } = o;
            u.type !== "Identifier" ? this.raise(l.ExportBindingIsString, {
              at: o,
              localName: u.value,
              exportName: c
            }) : (this.checkReservedWord(u.name, u.loc.start, !0, !1), this.scope.checkLocalExport(u));
          }
        } else if (e.declaration) {
          if (e.declaration.type === "FunctionDeclaration" || e.declaration.type === "ClassDeclaration") {
            let o = e.declaration.id;
            if (!o) throw new Error("Assertion failure");
            this.checkDuplicateExports(e, o.name);
          } else if (e.declaration.type === "VariableDeclaration") for (let o of e.declaration.declarations) this.checkDeclaration(o.id);
        }
      }

      if (this.state.decoratorStack[this.state.decoratorStack.length - 1].length) throw this.raise(l.UnsupportedDecoratorExport, {
        at: e
      });
    }

    checkDeclaration(e) {
      if (e.type === "Identifier") this.checkDuplicateExports(e, e.name);else if (e.type === "ObjectPattern") for (let t of e.properties) this.checkDeclaration(t);else if (e.type === "ArrayPattern") for (let t of e.elements) t && this.checkDeclaration(t);else e.type === "ObjectProperty" ? this.checkDeclaration(e.value) : e.type === "RestElement" ? this.checkDeclaration(e.argument) : e.type === "AssignmentPattern" && this.checkDeclaration(e.left);
    }

    checkDuplicateExports(e, t) {
      this.exportedIdentifiers.has(t) && (t === "default" ? this.raise(l.DuplicateDefaultExport, {
        at: e
      }) : this.raise(l.DuplicateExport, {
        at: e,
        exportName: t
      })), this.exportedIdentifiers.add(t);
    }

    parseExportSpecifiers(e) {
      let t = [],
          s = !0;

      for (this.expect(5); !this.eat(8);) {
        if (s) s = !1;else if (this.expect(12), this.eat(8)) break;
        let i = this.isContextual(126),
            r = this.match(129),
            n = this.startNode();
        n.local = this.parseModuleExportName(), t.push(this.parseExportSpecifier(n, r, e, i));
      }

      return t;
    }

    parseExportSpecifier(e, t, s, i) {
      return this.eatContextual(93) ? e.exported = this.parseModuleExportName() : t ? e.exported = Vi(e.local) : e.exported || (e.exported = z(e.local)), this.finishNode(e, "ExportSpecifier");
    }

    parseModuleExportName() {
      if (this.match(129)) {
        let e = this.parseStringLiteral(this.state.value),
            t = e.value.match(ur);
        return t && this.raise(l.ModuleExportNameHasLoneSurrogate, {
          at: e,
          surrogateCharCode: t[0].charCodeAt(0)
        }), e;
      }

      return this.parseIdentifier(!0);
    }

    isJSONModuleImport(e) {
      return e.assertions != null ? e.assertions.some(({
        key: t,
        value: s
      }) => s.value === "json" && (t.type === "Identifier" ? t.name === "type" : t.value === "type")) : !1;
    }

    checkJSONModuleImport(e) {
      if (this.isJSONModuleImport(e) && e.type !== "ExportAllDeclaration") {
        let {
          specifiers: t
        } = e;

        if (t != null) {
          let s = t.find(i => {
            let r;
            if (i.type === "ExportSpecifier" ? r = i.local : i.type === "ImportSpecifier" && (r = i.imported), r !== void 0) return r.type === "Identifier" ? r.name !== "default" : r.value !== "default";
          });
          s !== void 0 && this.raise(l.ImportJSONBindingNotDefault, {
            at: s.loc.start
          });
        }
      }
    }

    parseImport(e) {
      if (e.specifiers = [], !this.match(129)) {
        let i = !this.maybeParseDefaultImportSpecifier(e) || this.eat(12),
            r = i && this.maybeParseStarImportSpecifier(e);
        i && !r && this.parseNamedImportSpecifiers(e), this.expectContextual(97);
      }

      e.source = this.parseImportSource();
      let t = this.maybeParseImportAssertions();
      if (t) e.assertions = t;else {
        let s = this.maybeParseModuleAttributes();
        s && (e.attributes = s);
      }
      return this.checkJSONModuleImport(e), this.semicolon(), this.finishNode(e, "ImportDeclaration");
    }

    parseImportSource() {
      return this.match(129) || this.unexpected(), this.parseExprAtom();
    }

    shouldParseDefaultImport(e) {
      return w(this.state.type);
    }

    parseImportSpecifierLocal(e, t, s) {
      t.local = this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(t, s));
    }

    finishImportSpecifier(e, t, s = Q) {
      return this.checkLVal(e.local, {
        in: e,
        binding: s
      }), this.finishNode(e, t);
    }

    parseAssertEntries() {
      let e = [],
          t = new Set();

      do {
        if (this.match(8)) break;
        let s = this.startNode(),
            i = this.state.value;
        if (t.has(i) && this.raise(l.ModuleAttributesWithDuplicateKeys, {
          at: this.state.startLoc,
          key: i
        }), t.add(i), this.match(129) ? s.key = this.parseStringLiteral(i) : s.key = this.parseIdentifier(!0), this.expect(14), !this.match(129)) throw this.raise(l.ModuleAttributeInvalidValue, {
          at: this.state.startLoc
        });
        s.value = this.parseStringLiteral(this.state.value), e.push(this.finishNode(s, "ImportAttribute"));
      } while (this.eat(12));

      return e;
    }

    maybeParseModuleAttributes() {
      if (this.match(76) && !this.hasPrecedingLineBreak()) this.expectPlugin("moduleAttributes"), this.next();else return this.hasPlugin("moduleAttributes") ? [] : null;
      let e = [],
          t = new Set();

      do {
        let s = this.startNode();
        if (s.key = this.parseIdentifier(!0), s.key.name !== "type" && this.raise(l.ModuleAttributeDifferentFromType, {
          at: s.key
        }), t.has(s.key.name) && this.raise(l.ModuleAttributesWithDuplicateKeys, {
          at: s.key,
          key: s.key.name
        }), t.add(s.key.name), this.expect(14), !this.match(129)) throw this.raise(l.ModuleAttributeInvalidValue, {
          at: this.state.startLoc
        });
        s.value = this.parseStringLiteral(this.state.value), this.finishNode(s, "ImportAttribute"), e.push(s);
      } while (this.eat(12));

      return e;
    }

    maybeParseImportAssertions() {
      if (this.isContextual(94) && !this.hasPrecedingLineBreak()) this.expectPlugin("importAssertions"), this.next();else return this.hasPlugin("importAssertions") ? [] : null;
      this.eat(5);
      let e = this.parseAssertEntries();
      return this.eat(8), e;
    }

    maybeParseDefaultImportSpecifier(e) {
      return this.shouldParseDefaultImport(e) ? (this.parseImportSpecifierLocal(e, this.startNode(), "ImportDefaultSpecifier"), !0) : !1;
    }

    maybeParseStarImportSpecifier(e) {
      if (this.match(55)) {
        let t = this.startNode();
        return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(e, t, "ImportNamespaceSpecifier"), !0;
      }

      return !1;
    }

    parseNamedImportSpecifiers(e) {
      let t = !0;

      for (this.expect(5); !this.eat(8);) {
        if (t) t = !1;else {
          if (this.eat(14)) throw this.raise(l.DestructureNamedImport, {
            at: this.state.startLoc
          });
          if (this.expect(12), this.eat(8)) break;
        }
        let s = this.startNode(),
            i = this.match(129),
            r = this.isContextual(126);
        s.imported = this.parseModuleExportName();
        let n = this.parseImportSpecifier(s, i, e.importKind === "type" || e.importKind === "typeof", r, void 0);
        e.specifiers.push(n);
      }
    }

    parseImportSpecifier(e, t, s, i, r) {
      if (this.eatContextual(93)) e.local = this.parseIdentifier();else {
        let {
          imported: n
        } = e;
        if (t) throw this.raise(l.ImportBindingIsString, {
          at: e,
          importName: n.value
        });
        this.checkReservedWord(n.name, e.loc.start, !0, !0), e.local || (e.local = z(n));
      }
      return this.finishImportSpecifier(e, "ImportSpecifier", r);
    }

    isThisParam(e) {
      return e.type === "Identifier" && e.name === "this";
    }

  },
      Rt = class extends Pe {
    constructor(e, t) {
      e = or(e), super(e, t), this.options = e, this.initializeScopes(), this.plugins = dr(this.options.plugins), this.filename = e.sourceFilename;
    }

    getScopeHandler() {
      return Tt;
    }

    parse() {
      this.enterInitialScopes();
      let e = this.startNode(),
          t = this.startNode();
      return this.nextToken(), e.errors = null, this.parseTopLevel(e, t), e.errors = this.state.errors, e;
    }

  };

  function dr(a) {
    let e = new Map();

    for (let t of a) {
      let [s, i] = Array.isArray(t) ? t : [t, {}];
      e.has(s) || e.set(s, i || {});
    }

    return e;
  }

  function fr(a, e) {
    var t;

    if (((t = e) == null ? void 0 : t.sourceType) === "unambiguous") {
      e = Object.assign({}, e);

      try {
        e.sourceType = "module";
        let s = ft(e, a),
            i = s.parse();
        if (s.sawUnambiguousESM) return i;
        if (s.ambiguousScriptDifferentAst) try {
          return e.sourceType = "script", ft(e, a).parse();
        } catch {} else i.program.sourceType = "script";
        return i;
      } catch (s) {
        try {
          return e.sourceType = "script", ft(e, a).parse();
        } catch {}

        throw s;
      }
    } else return ft(e, a).parse();
  }

  function mr(a, e) {
    let t = ft(e, a);
    return t.options.strictMode && (t.state.strict = !0), t.getExpression();
  }

  function yr(a) {
    let e = {};

    for (let t of Object.keys(a)) e[t] = F(a[t]);

    return e;
  }

  var xr = yr(Ys);

  function ft(a, e) {
    let t = Rt;
    return a != null && a.plugins && (ar(a.plugins), t = Pr(a.plugins)), new t(a, e);
  }

  var ts = {};

  function Pr(a) {
    let e = nr.filter(i => N(a, i)),
        t = e.join("/"),
        s = ts[t];

    if (!s) {
      s = Rt;

      for (let i of e) s = ws[i](s);

      ts[t] = s;
    }

    return s;
  }

  St.parse = fr;
  St.parseExpression = mr;
  St.tokTypes = xr;
});

var Ns = _s(Es()),
    Nr = !0,
    {
  parse: kr,
  parseExpression: vr,
  tokTypes: Lr
} = Ns,
    {
  default: Is,
  ...br
} = Ns,
    Dr = Is !== void 0 ? Is : br;

export { Nr as __esModule, Dr as default, kr as parse, vr as parseExpression, Lr as tokTypes };