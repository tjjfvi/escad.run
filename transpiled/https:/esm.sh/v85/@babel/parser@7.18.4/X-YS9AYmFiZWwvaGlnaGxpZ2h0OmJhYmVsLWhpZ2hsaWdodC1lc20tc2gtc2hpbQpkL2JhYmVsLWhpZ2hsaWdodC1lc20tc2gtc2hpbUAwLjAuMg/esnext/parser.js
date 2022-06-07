/* esm.sh - esbuild bundle(@babel/parser@7.18.4) esnext production */
var Cs = Object.create;
var te = Object.defineProperty;
var Ss = Object.getOwnPropertyDescriptor;
var Es = Object.getOwnPropertyNames;
var Is = Object.getPrototypeOf,
    Ns = Object.prototype.hasOwnProperty;

var p = (r, t) => te(r, "name", {
  value: t,
  configurable: !0
});

var ks = (r, t) => () => (t || r((t = {
  exports: {}
}).exports, t), t.exports);

var vs = (r, t, e, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of Es(t)) !Ns.call(r, i) && i !== e && te(r, i, {
    get: () => t[i],
    enumerable: !(s = Ss(t, i)) || s.enumerable
  });
  return r;
};

var Fe = (r, t, e) => (e = r != null ? Cs(Is(r)) : {}, vs(t || !r || !r.__esModule ? te(e, "default", {
  value: r,
  enumerable: !0
}) : e, r));

var Me = ks(wt => {
  "use strict";

  Object.defineProperty(wt, "__esModule", {
    value: !0
  });

  function ce(r, t) {
    if (r == null) return {};
    var e = {},
        s = Object.keys(r),
        i,
        a;

    for (a = 0; a < s.length; a++) i = s[a], !(t.indexOf(i) >= 0) && (e[i] = r[i]);

    return e;
  }

  p(ce, "_objectWithoutPropertiesLoose");
  var O = class {
    constructor(t, e, s) {
      this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = e, this.index = s;
    }

  };
  p(O, "Position");
  var Z = class {
    constructor(t, e) {
      this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = e;
    }

  };
  p(Z, "SourceLocation");

  function v(r, t) {
    let {
      line: e,
      column: s,
      index: i
    } = r;
    return new O(e, s + t, i + t);
  }

  p(v, "createPositionWithColumnOffset");
  var le = Object.freeze({
    SyntaxError: "BABEL_PARSER_SYNTAX_ERROR",
    SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
  }),
      Ls = p((r, t = r.length - 1) => ({
    get() {
      return r.reduce((e, s) => e[s], this);
    },

    set(e) {
      r.reduce((s, i, a) => a === t ? s[i] = e : s[i], this);
    }

  }), "reflect"),
      Ds = p((r, t, e) => Object.keys(e).map(s => [s, e[s]]).filter(([, s]) => !!s).map(([s, i]) => [s, typeof i == "function" ? {
    value: i,
    enumerable: !1
  } : typeof i.reflect == "string" ? Object.assign({}, i, Ls(i.reflect.split("."))) : i]).reduce((s, [i, a]) => Object.defineProperty(s, i, Object.assign({
    configurable: !0
  }, a)), Object.assign(new r(), t)), "instantiate"),
      Ms = p(r => ({
    ImportMetaOutsideModule: r(`import.meta may appear only with 'sourceType: "module"'`, {
      code: le.SourceTypeModuleError
    }),
    ImportOutsideModule: r(`'import' and 'export' may appear only with 'sourceType: "module"'`, {
      code: le.SourceTypeModuleError
    })
  }), "ModuleErrors"),
      Be = {
    ArrayPattern: "array destructuring pattern",
    AssignmentExpression: "assignment expression",
    AssignmentPattern: "assignment expression",
    ArrowFunctionExpression: "arrow function expression",
    ConditionalExpression: "conditional expression",
    ForOfStatement: "for-of statement",
    ForInStatement: "for-in statement",
    ForStatement: "for-loop",
    FormalParameters: "function parameter list",
    Identifier: "identifier",
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
      ue = p(({
    type: r,
    prefix: t
  }) => r === "UpdateExpression" ? Be.UpdateExpression[String(t)] : Be[r], "toNodeDescription"),
      Os = p(r => ({
    AccessorIsGenerator: r(({
      kind: t
    }) => `A ${t}ter cannot be a generator.`),
    ArgumentsInClass: r("'arguments' is only allowed in functions and class methods."),
    AsyncFunctionInSingleStatementContext: r("Async functions can only be declared at the top level or inside a block."),
    AwaitBindingIdentifier: r("Can not use 'await' as identifier inside an async function."),
    AwaitBindingIdentifierInStaticBlock: r("Can not use 'await' as identifier inside a static block."),
    AwaitExpressionFormalParameter: r("'await' is not allowed in async function parameters."),
    AwaitNotInAsyncContext: r("'await' is only allowed within async functions and at the top levels of modules."),
    AwaitNotInAsyncFunction: r("'await' is only allowed within async functions."),
    BadGetterArity: r("A 'get' accesor must not have any formal parameters."),
    BadSetterArity: r("A 'set' accesor must have exactly one formal parameter."),
    BadSetterRestParameter: r("A 'set' accesor function argument must not be a rest parameter."),
    ConstructorClassField: r("Classes may not have a field named 'constructor'."),
    ConstructorClassPrivateField: r("Classes may not have a private field named '#constructor'."),
    ConstructorIsAccessor: r("Class constructor may not be an accessor."),
    ConstructorIsAsync: r("Constructor can't be an async function."),
    ConstructorIsGenerator: r("Constructor can't be a generator."),
    DeclarationMissingInitializer: r(({
      kind: t
    }) => `Missing initializer in ${t} declaration.`),
    DecoratorBeforeExport: r("Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax."),
    DecoratorConstructor: r("Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?"),
    DecoratorExportClass: r("Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead."),
    DecoratorSemicolon: r("Decorators must not be followed by a semicolon."),
    DecoratorStaticBlock: r("Decorators can't be used with a static block."),
    DeletePrivateField: r("Deleting a private field is not allowed."),
    DestructureNamedImport: r("ES2015 named imports do not destructure. Use another statement for destructuring after the import."),
    DuplicateConstructor: r("Duplicate constructor in the same class."),
    DuplicateDefaultExport: r("Only one default export allowed per module."),
    DuplicateExport: r(({
      exportName: t
    }) => `\`${t}\` has already been exported. Exported identifiers must be unique.`),
    DuplicateProto: r("Redefinition of __proto__ property."),
    DuplicateRegExpFlags: r("Duplicate regular expression flag."),
    ElementAfterRest: r("Rest element must be last element."),
    EscapedCharNotAnIdentifier: r("Invalid Unicode escape."),
    ExportBindingIsString: r(({
      localName: t,
      exportName: e
    }) => `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${t}' as '${e}' } from 'some-module'\`?`),
    ExportDefaultFromAsIdentifier: r("'from' is not allowed as an identifier after 'export default'."),
    ForInOfLoopInitializer: r(({
      type: t
    }) => `'${t === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`),
    ForOfAsync: r("The left-hand side of a for-of loop may not be 'async'."),
    ForOfLet: r("The left-hand side of a for-of loop may not start with 'let'."),
    GeneratorInSingleStatementContext: r("Generators can only be declared at the top level or inside a block."),
    IllegalBreakContinue: r(({
      type: t
    }) => `Unsyntactic ${t === "BreakStatement" ? "break" : "continue"}.`),
    IllegalLanguageModeDirective: r("Illegal 'use strict' directive in function with non-simple parameter list."),
    IllegalReturn: r("'return' outside of function."),
    ImportBindingIsString: r(({
      importName: t
    }) => `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${t}" as foo }\`?`),
    ImportCallArgumentTrailingComma: r("Trailing comma is disallowed inside import(...) arguments."),
    ImportCallArity: r(({
      maxArgumentCount: t
    }) => `\`import()\` requires exactly ${t === 1 ? "one argument" : "one or two arguments"}.`),
    ImportCallNotNewExpression: r("Cannot use new with import(...)."),
    ImportCallSpreadArgument: r("`...` is not allowed in `import()`."),
    IncompatibleRegExpUVFlags: r("The 'u' and 'v' regular expression flags cannot be enabled at the same time."),
    InvalidBigIntLiteral: r("Invalid BigIntLiteral."),
    InvalidCodePoint: r("Code point out of bounds."),
    InvalidCoverInitializedName: r("Invalid shorthand property initializer."),
    InvalidDecimal: r("Invalid decimal."),
    InvalidDigit: r(({
      radix: t
    }) => `Expected number in radix ${t}.`),
    InvalidEscapeSequence: r("Bad character escape sequence."),
    InvalidEscapeSequenceTemplate: r("Invalid escape sequence in template."),
    InvalidEscapedReservedWord: r(({
      reservedWord: t
    }) => `Escape sequence in keyword ${t}.`),
    InvalidIdentifier: r(({
      identifierName: t
    }) => `Invalid identifier ${t}.`),
    InvalidLhs: r(({
      ancestor: t
    }) => `Invalid left-hand side in ${ue(t)}.`),
    InvalidLhsBinding: r(({
      ancestor: t
    }) => `Binding invalid left-hand side in ${ue(t)}.`),
    InvalidNumber: r("Invalid number."),
    InvalidOrMissingExponent: r("Floating-point numbers require a valid exponent after the 'e'."),
    InvalidOrUnexpectedToken: r(({
      unexpected: t
    }) => `Unexpected character '${t}'.`),
    InvalidParenthesizedAssignment: r("Invalid parenthesized assignment pattern."),
    InvalidPrivateFieldResolution: r(({
      identifierName: t
    }) => `Private name #${t} is not defined.`),
    InvalidPropertyBindingPattern: r("Binding member expression."),
    InvalidRecordProperty: r("Only properties and spread elements are allowed in record definitions."),
    InvalidRestAssignmentPattern: r("Invalid rest operator's argument."),
    LabelRedeclaration: r(({
      labelName: t
    }) => `Label '${t}' is already declared.`),
    LetInLexicalBinding: r("'let' is not allowed to be used as a name in 'let' or 'const' declarations."),
    LineTerminatorBeforeArrow: r("No line break is allowed before '=>'."),
    MalformedRegExpFlags: r("Invalid regular expression flag."),
    MissingClassName: r("A class name is required."),
    MissingEqInAssignment: r("Only '=' operator can be used for specifying default value."),
    MissingSemicolon: r("Missing semicolon."),
    MissingPlugin: r(({
      missingPlugin: t
    }) => `This experimental syntax requires enabling the parser plugin: ${t.map(e => JSON.stringify(e)).join(", ")}.`),
    MissingOneOfPlugins: r(({
      missingPlugin: t
    }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${t.map(e => JSON.stringify(e)).join(", ")}.`),
    MissingUnicodeEscape: r("Expecting Unicode escape sequence \\uXXXX."),
    MixingCoalesceWithLogical: r("Nullish coalescing operator(??) requires parens when mixing with logical operators."),
    ModuleAttributeDifferentFromType: r("The only accepted module attribute is `type`."),
    ModuleAttributeInvalidValue: r("Only string literals are allowed as module attribute values."),
    ModuleAttributesWithDuplicateKeys: r(({
      key: t
    }) => `Duplicate key "${t}" is not allowed in module attributes.`),
    ModuleExportNameHasLoneSurrogate: r(({
      surrogateCharCode: t
    }) => `An export name cannot include a lone surrogate, found '\\u${t.toString(16)}'.`),
    ModuleExportUndefined: r(({
      localName: t
    }) => `Export '${t}' is not defined.`),
    MultipleDefaultsInSwitch: r("Multiple default clauses."),
    NewlineAfterThrow: r("Illegal newline after throw."),
    NoCatchOrFinally: r("Missing catch or finally clause."),
    NumberIdentifier: r("Identifier directly after number."),
    NumericSeparatorInEscapeSequence: r("Numeric separators are not allowed inside unicode escape sequences or hex escape sequences."),
    ObsoleteAwaitStar: r("'await*' has been removed from the async functions proposal. Use Promise.all() instead."),
    OptionalChainingNoNew: r("Constructors in/after an Optional Chain are not allowed."),
    OptionalChainingNoTemplate: r("Tagged Template Literals are not allowed in optionalChain."),
    OverrideOnConstructor: r("'override' modifier cannot appear on a constructor declaration."),
    ParamDupe: r("Argument name clash."),
    PatternHasAccessor: r("Object pattern can't contain getter or setter."),
    PatternHasMethod: r("Object pattern can't contain methods."),
    PrivateInExpectedIn: r(({
      identifierName: t
    }) => `Private names are only allowed in property accesses (\`obj.#${t}\`) or in \`in\` expressions (\`#${t} in obj\`).`),
    PrivateNameRedeclaration: r(({
      identifierName: t
    }) => `Duplicate private name #${t}.`),
    RecordExpressionBarIncorrectEndSyntaxType: r("Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."),
    RecordExpressionBarIncorrectStartSyntaxType: r("Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."),
    RecordExpressionHashIncorrectStartSyntaxType: r("Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'."),
    RecordNoProto: r("'__proto__' is not allowed in Record expressions."),
    RestTrailingComma: r("Unexpected trailing comma after rest element."),
    SloppyFunction: r("In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement."),
    StaticPrototype: r("Classes may not have static property named prototype."),
    SuperNotAllowed: r("`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?"),
    SuperPrivateField: r("Private fields can't be accessed on super."),
    TrailingDecorator: r("Decorators must be attached to a class element."),
    TupleExpressionBarIncorrectEndSyntaxType: r("Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."),
    TupleExpressionBarIncorrectStartSyntaxType: r("Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."),
    TupleExpressionHashIncorrectStartSyntaxType: r("Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'."),
    UnexpectedArgumentPlaceholder: r("Unexpected argument placeholder."),
    UnexpectedAwaitAfterPipelineBody: r('Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.'),
    UnexpectedDigitAfterHash: r("Unexpected digit after hash token."),
    UnexpectedImportExport: r("'import' and 'export' may only appear at the top level."),
    UnexpectedKeyword: r(({
      keyword: t
    }) => `Unexpected keyword '${t}'.`),
    UnexpectedLeadingDecorator: r("Leading decorators must be attached to a class declaration."),
    UnexpectedLexicalDeclaration: r("Lexical declaration cannot appear in a single-statement context."),
    UnexpectedNewTarget: r("`new.target` can only be used in functions or class properties."),
    UnexpectedNumericSeparator: r("A numeric separator is only allowed between two digits."),
    UnexpectedPrivateField: r("Unexpected private name."),
    UnexpectedReservedWord: r(({
      reservedWord: t
    }) => `Unexpected reserved word '${t}'.`),
    UnexpectedSuper: r("'super' is only allowed in object methods and classes."),
    UnexpectedToken: r(({
      expected: t,
      unexpected: e
    }) => `Unexpected token${e ? ` '${e}'.` : ""}${t ? `, expected "${t}"` : ""}`),
    UnexpectedTokenUnaryExponentiation: r("Illegal expression. Wrap left hand side or entire exponentiation in parentheses."),
    UnsupportedBind: r("Binding should be performed on object property."),
    UnsupportedDecoratorExport: r("A decorated export must export a class declaration."),
    UnsupportedDefaultExport: r("Only expressions, functions or classes are allowed as the `default` export."),
    UnsupportedImport: r("`import` can only be used in `import()` or `import.meta`."),
    UnsupportedMetaProperty: r(({
      target: t,
      onlyValidPropertyName: e
    }) => `The only valid meta property for ${t} is ${t}.${e}.`),
    UnsupportedParameterDecorator: r("Decorators cannot be used to decorate parameters."),
    UnsupportedPropertyDecorator: r("Decorators cannot be used to decorate object literal properties."),
    UnsupportedSuper: r("'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop])."),
    UnterminatedComment: r("Unterminated comment."),
    UnterminatedRegExp: r("Unterminated regular expression."),
    UnterminatedString: r("Unterminated string constant."),
    UnterminatedTemplate: r("Unterminated template."),
    VarRedeclaration: r(({
      identifierName: t
    }) => `Identifier '${t}' has already been declared.`),
    YieldBindingIdentifier: r("Can not use 'yield' as identifier inside a generator."),
    YieldInParameter: r("Yield expression is not allowed in formal parameters."),
    ZeroDigitNumericSeparator: r("Numeric separator can not be used after leading 0.")
  }), "StandardErrors"),
      Fs = p(r => ({
    StrictDelete: r("Deleting local variable in strict mode."),
    StrictEvalArguments: r(({
      referenceName: t
    }) => `Assigning to '${t}' in strict mode.`),
    StrictEvalArgumentsBinding: r(({
      bindingName: t
    }) => `Binding '${t}' in strict mode.`),
    StrictFunction: r("In strict mode code, functions can only be declared at top level or inside a block."),
    StrictNumericEscape: r("The only valid numeric escape in strict mode is '\\0'."),
    StrictOctalLiteral: r("Legacy octal literals are not allowed in strict mode."),
    StrictWith: r("'with' in strict mode.")
  }), "StrictModeErrors"),
      Bs = new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]),
      Rs = p(r => ({
    PipeBodyIsTighter: r("Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence."),
    PipeTopicRequiresHackPipes: r('Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'),
    PipeTopicUnbound: r("Topic reference is unbound; it must be inside a pipe body."),
    PipeTopicUnconfiguredToken: r(({
      token: t
    }) => `Invalid topic token ${t}. In order to use ${t} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${t}" }.`),
    PipeTopicUnused: r("Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once."),
    PipeUnparenthesizedBody: r(({
      type: t
    }) => `Hack-style pipe body cannot be an unparenthesized ${ue({
      type: t
    })}; please wrap it in parentheses.`),
    PipelineBodyNoArrow: r('Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.'),
    PipelineBodySequenceExpression: r("Pipeline body may not be a comma-separated sequence expression."),
    PipelineHeadSequenceExpression: r("Pipeline head should not be a comma-separated sequence expression."),
    PipelineTopicUnused: r("Pipeline is in topic style but does not use topic reference."),
    PrimaryTopicNotAllowed: r("Topic reference was used in a lexical context without topic binding."),
    PrimaryTopicRequiresSmartPipeline: r('Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.')
  }), "PipelineOperatorErrors"),
      Us = ["toMessage"];

  function js(r) {
    let {
      toMessage: t
    } = r,
        e = ce(r, Us);
    return p(function s({
      loc: i,
      details: a
    }) {
      return Ds(SyntaxError, Object.assign({}, e, {
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
          value: a,
          enumerable: !1
        },
        message: {
          get() {
            return `${t(this.details)} (${this.loc.line}:${this.loc.column})`;
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
        missingPlugin: "missingPlugin" in a && {
          reflect: "details.missingPlugin",
          enumerable: !0
        }
      });
    }, "constructor");
  }

  p(js, "toParseErrorConstructor");

  function $s(r, t) {
    return Object.assign({
      toMessage: typeof r == "string" ? () => r : r
    }, t);
  }

  p($s, "toParseErrorCredentials");

  function U(r, t) {
    if (Array.isArray(r)) return i => U(i, r[0]);
    let e = r($s),
        s = {};

    for (let i of Object.keys(e)) s[i] = js(Object.assign({
      code: le.SyntaxError,
      reasonCode: i
    }, t ? {
      syntaxPlugin: t
    } : {}, e[i]));

    return s;
  }

  p(U, "ParseErrorEnum");
  var l = Object.assign({}, U(Ms), U(Os), U(Fs), U`pipelineOperator`(Rs)),
      {
    defineProperty: zs
  } = Object,
      Re = p((r, t) => zs(r, t, {
    enumerable: !1,
    value: r[t]
  }), "toUnenumerable");

  function pt(r) {
    return r.loc.start && Re(r.loc.start, "index"), r.loc.end && Re(r.loc.end, "index"), r;
  }

  p(pt, "toESTreeLocation");

  var Vs = p(r => class extends r {
    parse() {
      let t = pt(super.parse());
      return this.options.tokens && (t.tokens = t.tokens.map(pt)), t;
    }

    parseRegExpLiteral({
      pattern: t,
      flags: e
    }) {
      let s = null;

      try {
        s = new RegExp(t, e);
      } catch {}

      let i = this.estreeParseLiteral(s);
      return i.regex = {
        pattern: t,
        flags: e
      }, i;
    }

    parseBigIntLiteral(t) {
      let e;

      try {
        e = BigInt(t);
      } catch {
        e = null;
      }

      let s = this.estreeParseLiteral(e);
      return s.bigint = String(s.value || t), s;
    }

    parseDecimalLiteral(t) {
      let s = this.estreeParseLiteral(null);
      return s.decimal = String(s.value || t), s;
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
      let e = t.value,
          s = this.startNodeAt(t.start, t.loc.start),
          i = this.startNodeAt(e.start, e.loc.start);
      return i.value = e.extra.expressionValue, i.raw = e.extra.raw, s.expression = this.finishNodeAt(i, "Literal", e.loc.end), s.directive = e.extra.raw.slice(1, -1), this.finishNodeAt(s, "ExpressionStatement", t.loc.end);
    }

    initFunction(t, e) {
      super.initFunction(t, e), t.expression = !1;
    }

    checkDeclaration(t) {
      t != null && this.isObjectProperty(t) ? this.checkDeclaration(t.value) : super.checkDeclaration(t);
    }

    getObjectOrClassMethodParams(t) {
      return t.value.params;
    }

    isValidDirective(t) {
      var e;
      return t.type === "ExpressionStatement" && t.expression.type === "Literal" && typeof t.expression.value == "string" && !((e = t.expression.extra) != null && e.parenthesized);
    }

    parseBlockBody(t, ...e) {
      super.parseBlockBody(t, ...e);
      let s = t.directives.map(i => this.directiveToStmt(i));
      t.body = s.concat(t.body), delete t.directives;
    }

    pushClassMethod(t, e, s, i, a, n) {
      this.parseMethod(e, s, i, a, n, "ClassMethod", !0), e.typeParameters && (e.value.typeParameters = e.typeParameters, delete e.typeParameters), t.body.push(e);
    }

    parsePrivateName() {
      let t = super.parsePrivateName();
      return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(t) : t;
    }

    convertPrivateNameToPrivateIdentifier(t) {
      let e = super.getPrivateNameSV(t);
      return t = t, delete t.id, t.name = e, t.type = "PrivateIdentifier", t;
    }

    isPrivateName(t) {
      return this.getPluginOption("estree", "classFeatures") ? t.type === "PrivateIdentifier" : super.isPrivateName(t);
    }

    getPrivateNameSV(t) {
      return this.getPluginOption("estree", "classFeatures") ? t.name : super.getPrivateNameSV(t);
    }

    parseLiteral(t, e) {
      let s = super.parseLiteral(t, e);
      return s.raw = s.extra.raw, delete s.extra, s;
    }

    parseFunctionBody(t, e, s = !1) {
      super.parseFunctionBody(t, e, s), t.expression = t.body.type !== "BlockStatement";
    }

    parseMethod(t, e, s, i, a, n, o = !1) {
      let h = this.startNode();
      return h.kind = t.kind, h = super.parseMethod(h, e, s, i, a, n, o), h.type = "FunctionExpression", delete h.kind, t.value = h, n === "ClassPrivateMethod" && (t.computed = !1), n = "MethodDefinition", this.finishNode(t, n);
    }

    parseClassProperty(...t) {
      let e = super.parseClassProperty(...t);
      return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition"), e;
    }

    parseClassPrivateProperty(...t) {
      let e = super.parseClassPrivateProperty(...t);
      return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition", e.computed = !1), e;
    }

    parseObjectMethod(t, e, s, i, a) {
      let n = super.parseObjectMethod(t, e, s, i, a);
      return n && (n.type = "Property", n.kind === "method" && (n.kind = "init"), n.shorthand = !1), n;
    }

    parseObjectProperty(t, e, s, i, a) {
      let n = super.parseObjectProperty(t, e, s, i, a);
      return n && (n.kind = "init", n.type = "Property"), n;
    }

    isValidLVal(t, ...e) {
      return t === "Property" ? "value" : super.isValidLVal(t, ...e);
    }

    isAssignable(t, e) {
      return t != null && this.isObjectProperty(t) ? this.isAssignable(t.value, e) : super.isAssignable(t, e);
    }

    toAssignable(t, e = !1) {
      if (t != null && this.isObjectProperty(t)) {
        let {
          key: s,
          value: i
        } = t;
        this.isPrivateName(s) && this.classScope.usePrivateName(this.getPrivateNameSV(s), s.loc.start), this.toAssignable(i, e);
      } else super.toAssignable(t, e);
    }

    toAssignableObjectExpressionProp(t) {
      t.kind === "get" || t.kind === "set" ? this.raise(l.PatternHasAccessor, {
        at: t.key
      }) : t.method ? this.raise(l.PatternHasMethod, {
        at: t.key
      }) : super.toAssignableObjectExpressionProp(...arguments);
    }

    finishCallExpression(t, e) {
      if (super.finishCallExpression(t, e), t.callee.type === "Import") {
        if (t.type = "ImportExpression", t.source = t.arguments[0], this.hasPlugin("importAssertions")) {
          var s;
          t.attributes = (s = t.arguments[1]) != null ? s : null;
        }

        delete t.arguments, delete t.callee;
      }

      return t;
    }

    toReferencedArguments(t) {
      t.type !== "ImportExpression" && super.toReferencedArguments(t);
    }

    parseExport(t) {
      switch (super.parseExport(t), t.type) {
        case "ExportAllDeclaration":
          t.exported = null;
          break;

        case "ExportNamedDeclaration":
          t.specifiers.length === 1 && t.specifiers[0].type === "ExportNamespaceSpecifier" && (t.type = "ExportAllDeclaration", t.exported = t.specifiers[0].exported, delete t.specifiers);
          break;
      }

      return t;
    }

    parseSubscript(t, e, s, i, a) {
      let n = super.parseSubscript(t, e, s, i, a);

      if (a.optionalChainMember) {
        if ((n.type === "OptionalMemberExpression" || n.type === "OptionalCallExpression") && (n.type = n.type.substring(8)), a.stop) {
          let o = this.startNodeAtNode(n);
          return o.expression = n, this.finishNode(o, "ChainExpression");
        }
      } else (n.type === "MemberExpression" || n.type === "CallExpression") && (n.optional = !1);

      return n;
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

    finishNodeAt(t, e, s) {
      return pt(super.finishNodeAt(t, e, s));
    }

    resetStartLocation(t, e, s) {
      super.resetStartLocation(t, e, s), pt(t);
    }

    resetEndLocation(t, e = this.state.lastTokEndLoc) {
      super.resetEndLocation(t, e), pt(t);
    }

  }, "estree"),
      _ = class {
    constructor(t, e) {
      this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!e;
    }

  };

  p(_, "TokContext");
  var E = {
    brace: new _("{"),
    j_oTag: new _("<tag"),
    j_cTag: new _("</tag"),
    j_expr: new _("<tag>...</tag>", !0)
  };
  E.template = new _("`", !0);
  var g = !0,
      f = !0,
      ee = !0,
      dt = !0,
      K = !0,
      qs = !0,
      xt = class {
    constructor(t, e = {}) {
      this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop != null ? e.binop : null, this.updateContext = null;
    }

  };
  p(xt, "ExportedTokenType");
  var Pe = new Map();

  function A(r, t = {}) {
    t.keyword = r;
    let e = P(r, t);
    return Pe.set(r, e), e;
  }

  p(A, "createKeyword");

  function L(r, t) {
    return P(r, {
      beforeExpr: g,
      binop: t
    });
  }

  p(L, "createBinop");
  var Pt = -1,
      B = [],
      be = [],
      Qt = [],
      Te = [],
      ge = [],
      Ae = [];

  function P(r, t = {}) {
    var e, s, i, a;
    return ++Pt, be.push(r), Qt.push((e = t.binop) != null ? e : -1), Te.push((s = t.beforeExpr) != null ? s : !1), ge.push((i = t.startsExpr) != null ? i : !1), Ae.push((a = t.prefix) != null ? a : !1), B.push(new xt(r, t)), Pt;
  }

  p(P, "createToken");

  function w(r, t = {}) {
    var e, s, i, a;
    return ++Pt, Pe.set(r, Pt), be.push(r), Qt.push((e = t.binop) != null ? e : -1), Te.push((s = t.beforeExpr) != null ? s : !1), ge.push((i = t.startsExpr) != null ? i : !1), Ae.push((a = t.prefix) != null ? a : !1), B.push(new xt("name", t)), Pt;
  }

  p(w, "createKeywordLike");
  var Ks = {
    bracketL: P("[", {
      beforeExpr: g,
      startsExpr: f
    }),
    bracketHashL: P("#[", {
      beforeExpr: g,
      startsExpr: f
    }),
    bracketBarL: P("[|", {
      beforeExpr: g,
      startsExpr: f
    }),
    bracketR: P("]"),
    bracketBarR: P("|]"),
    braceL: P("{", {
      beforeExpr: g,
      startsExpr: f
    }),
    braceBarL: P("{|", {
      beforeExpr: g,
      startsExpr: f
    }),
    braceHashL: P("#{", {
      beforeExpr: g,
      startsExpr: f
    }),
    braceR: P("}"),
    braceBarR: P("|}"),
    parenL: P("(", {
      beforeExpr: g,
      startsExpr: f
    }),
    parenR: P(")"),
    comma: P(",", {
      beforeExpr: g
    }),
    semi: P(";", {
      beforeExpr: g
    }),
    colon: P(":", {
      beforeExpr: g
    }),
    doubleColon: P("::", {
      beforeExpr: g
    }),
    dot: P("."),
    question: P("?", {
      beforeExpr: g
    }),
    questionDot: P("?."),
    arrow: P("=>", {
      beforeExpr: g
    }),
    template: P("template"),
    ellipsis: P("...", {
      beforeExpr: g
    }),
    backQuote: P("`", {
      startsExpr: f
    }),
    dollarBraceL: P("${", {
      beforeExpr: g,
      startsExpr: f
    }),
    templateTail: P("...`", {
      startsExpr: f
    }),
    templateNonTail: P("...${", {
      beforeExpr: g,
      startsExpr: f
    }),
    at: P("@"),
    hash: P("#", {
      startsExpr: f
    }),
    interpreterDirective: P("#!..."),
    eq: P("=", {
      beforeExpr: g,
      isAssign: dt
    }),
    assign: P("_=", {
      beforeExpr: g,
      isAssign: dt
    }),
    slashAssign: P("_=", {
      beforeExpr: g,
      isAssign: dt
    }),
    xorAssign: P("_=", {
      beforeExpr: g,
      isAssign: dt
    }),
    moduloAssign: P("_=", {
      beforeExpr: g,
      isAssign: dt
    }),
    incDec: P("++/--", {
      prefix: K,
      postfix: qs,
      startsExpr: f
    }),
    bang: P("!", {
      beforeExpr: g,
      prefix: K,
      startsExpr: f
    }),
    tilde: P("~", {
      beforeExpr: g,
      prefix: K,
      startsExpr: f
    }),
    doubleCaret: P("^^", {
      startsExpr: f
    }),
    doubleAt: P("@@", {
      startsExpr: f
    }),
    pipeline: L("|>", 0),
    nullishCoalescing: L("??", 1),
    logicalOR: L("||", 1),
    logicalAND: L("&&", 2),
    bitwiseOR: L("|", 3),
    bitwiseXOR: L("^", 4),
    bitwiseAND: L("&", 5),
    equality: L("==/!=/===/!==", 6),
    lt: L("</>/<=/>=", 7),
    gt: L("</>/<=/>=", 7),
    relational: L("</>/<=/>=", 7),
    bitShift: L("<</>>/>>>", 8),
    bitShiftL: L("<</>>/>>>", 8),
    bitShiftR: L("<</>>/>>>", 8),
    plusMin: P("+/-", {
      beforeExpr: g,
      binop: 9,
      prefix: K,
      startsExpr: f
    }),
    modulo: P("%", {
      binop: 10,
      startsExpr: f
    }),
    star: P("*", {
      binop: 10
    }),
    slash: L("/", 10),
    exponent: P("**", {
      beforeExpr: g,
      binop: 11,
      rightAssociative: !0
    }),
    _in: A("in", {
      beforeExpr: g,
      binop: 7
    }),
    _instanceof: A("instanceof", {
      beforeExpr: g,
      binop: 7
    }),
    _break: A("break"),
    _case: A("case", {
      beforeExpr: g
    }),
    _catch: A("catch"),
    _continue: A("continue"),
    _debugger: A("debugger"),
    _default: A("default", {
      beforeExpr: g
    }),
    _else: A("else", {
      beforeExpr: g
    }),
    _finally: A("finally"),
    _function: A("function", {
      startsExpr: f
    }),
    _if: A("if"),
    _return: A("return", {
      beforeExpr: g
    }),
    _switch: A("switch"),
    _throw: A("throw", {
      beforeExpr: g,
      prefix: K,
      startsExpr: f
    }),
    _try: A("try"),
    _var: A("var"),
    _const: A("const"),
    _with: A("with"),
    _new: A("new", {
      beforeExpr: g,
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
      beforeExpr: g
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
      beforeExpr: g,
      prefix: K,
      startsExpr: f
    }),
    _void: A("void", {
      beforeExpr: g,
      prefix: K,
      startsExpr: f
    }),
    _delete: A("delete", {
      beforeExpr: g,
      prefix: K,
      startsExpr: f
    }),
    _do: A("do", {
      isLoop: ee,
      beforeExpr: g
    }),
    _for: A("for", {
      isLoop: ee
    }),
    _while: A("while", {
      isLoop: ee
    }),
    _as: w("as", {
      startsExpr: f
    }),
    _assert: w("assert", {
      startsExpr: f
    }),
    _async: w("async", {
      startsExpr: f
    }),
    _await: w("await", {
      startsExpr: f
    }),
    _from: w("from", {
      startsExpr: f
    }),
    _get: w("get", {
      startsExpr: f
    }),
    _let: w("let", {
      startsExpr: f
    }),
    _meta: w("meta", {
      startsExpr: f
    }),
    _of: w("of", {
      startsExpr: f
    }),
    _sent: w("sent", {
      startsExpr: f
    }),
    _set: w("set", {
      startsExpr: f
    }),
    _static: w("static", {
      startsExpr: f
    }),
    _yield: w("yield", {
      startsExpr: f
    }),
    _asserts: w("asserts", {
      startsExpr: f
    }),
    _checks: w("checks", {
      startsExpr: f
    }),
    _exports: w("exports", {
      startsExpr: f
    }),
    _global: w("global", {
      startsExpr: f
    }),
    _implements: w("implements", {
      startsExpr: f
    }),
    _intrinsic: w("intrinsic", {
      startsExpr: f
    }),
    _infer: w("infer", {
      startsExpr: f
    }),
    _is: w("is", {
      startsExpr: f
    }),
    _mixins: w("mixins", {
      startsExpr: f
    }),
    _proto: w("proto", {
      startsExpr: f
    }),
    _require: w("require", {
      startsExpr: f
    }),
    _keyof: w("keyof", {
      startsExpr: f
    }),
    _readonly: w("readonly", {
      startsExpr: f
    }),
    _unique: w("unique", {
      startsExpr: f
    }),
    _abstract: w("abstract", {
      startsExpr: f
    }),
    _declare: w("declare", {
      startsExpr: f
    }),
    _enum: w("enum", {
      startsExpr: f
    }),
    _module: w("module", {
      startsExpr: f
    }),
    _namespace: w("namespace", {
      startsExpr: f
    }),
    _interface: w("interface", {
      startsExpr: f
    }),
    _type: w("type", {
      startsExpr: f
    }),
    _opaque: w("opaque", {
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

  function C(r) {
    return r >= 93 && r <= 128;
  }

  p(C, "tokenIsIdentifier");

  function Hs(r) {
    return r <= 92;
  }

  p(Hs, "tokenKeywordOrIdentifierIsKeyword");

  function z(r) {
    return r >= 58 && r <= 128;
  }

  p(z, "tokenIsKeywordOrIdentifier");

  function Ze(r) {
    return r >= 58 && r <= 132;
  }

  p(Ze, "tokenIsLiteralPropertyName");

  function _s(r) {
    return Te[r];
  }

  p(_s, "tokenComesBeforeExpression");

  function pe(r) {
    return ge[r];
  }

  p(pe, "tokenCanStartExpression");

  function Ws(r) {
    return r >= 29 && r <= 33;
  }

  p(Ws, "tokenIsAssignment");

  function Ue(r) {
    return r >= 125 && r <= 127;
  }

  p(Ue, "tokenIsFlowInterfaceOrTypeOrOpaque");

  function Xs(r) {
    return r >= 90 && r <= 92;
  }

  p(Xs, "tokenIsLoop");

  function we(r) {
    return r >= 58 && r <= 92;
  }

  p(we, "tokenIsKeyword");

  function Js(r) {
    return r >= 39 && r <= 59;
  }

  p(Js, "tokenIsOperator");

  function Gs(r) {
    return r === 34;
  }

  p(Gs, "tokenIsPostfix");

  function Ys(r) {
    return Ae[r];
  }

  p(Ys, "tokenIsPrefix");

  function Qs(r) {
    return r >= 117 && r <= 119;
  }

  p(Qs, "tokenIsTSTypeOperator");

  function Zs(r) {
    return r >= 120 && r <= 126;
  }

  p(Zs, "tokenIsTSDeclarationStart");

  function W(r) {
    return be[r];
  }

  p(W, "tokenLabelName");

  function It(r) {
    return Qt[r];
  }

  p(It, "tokenOperatorPrecedence");

  function ti(r) {
    return Qt[r] !== -1;
  }

  p(ti, "tokenIsBinaryOperator");

  function ei(r) {
    return r === 57;
  }

  p(ei, "tokenIsRightAssociative");

  function Wt(r) {
    return r >= 24 && r <= 25;
  }

  p(Wt, "tokenIsTemplate");

  function F(r) {
    return B[r];
  }

  p(F, "getExportedToken");
  B[8].updateContext = r => {
    r.pop();
  }, B[5].updateContext = B[7].updateContext = B[23].updateContext = r => {
    r.push(E.brace);
  }, B[22].updateContext = r => {
    r[r.length - 1] === E.template ? r.pop() : r.push(E.template);
  }, B[138].updateContext = r => {
    r.push(E.j_expr, E.j_oTag);
  };
  var Ce = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
      ts = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F",
      si = new RegExp("[" + Ce + "]"),
      ii = new RegExp("[" + Ce + ts + "]");
  Ce = ts = null;
  var es = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
      ri = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

  function de(r, t) {
    let e = 65536;

    for (let s = 0, i = t.length; s < i; s += 2) {
      if (e += t[s], e > r) return !1;
      if (e += t[s + 1], e >= r) return !0;
    }

    return !1;
  }

  p(de, "isInAstralSet");

  function R(r) {
    return r < 65 ? r === 36 : r <= 90 ? !0 : r < 97 ? r === 95 : r <= 122 ? !0 : r <= 65535 ? r >= 170 && si.test(String.fromCharCode(r)) : de(r, es);
  }

  p(R, "isIdentifierStart");

  function nt(r) {
    return r < 48 ? r === 36 : r < 58 ? !0 : r < 65 ? !1 : r <= 90 ? !0 : r < 97 ? r === 95 : r <= 122 ? !0 : r <= 65535 ? r >= 170 && ii.test(String.fromCharCode(r)) : de(r, es) || de(r, ri);
  }

  p(nt, "isIdentifierChar");
  var Se = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  },
      ai = new Set(Se.keyword),
      ni = new Set(Se.strict),
      oi = new Set(Se.strictBind);

  function ss(r, t) {
    return t && r === "await" || r === "enum";
  }

  p(ss, "isReservedWord");

  function is(r, t) {
    return ss(r, t) || ni.has(r);
  }

  p(is, "isStrictReservedWord");

  function rs(r) {
    return oi.has(r);
  }

  p(rs, "isStrictBindOnlyReservedWord");

  function as(r, t) {
    return is(r, t) || rs(r);
  }

  p(as, "isStrictBindReservedWord");

  function hi(r) {
    return ai.has(r);
  }

  p(hi, "isKeyword");

  function ci(r, t, e) {
    return r === 64 && t === 64 && R(e);
  }

  p(ci, "isIteratorStart");
  var li = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);

  function ui(r) {
    return li.has(r);
  }

  p(ui, "canBeReservedWord");
  var rt = 0,
      bt = 1,
      j = 2,
      Ee = 4,
      ns = 8,
      Xt = 16,
      os = 32,
      Q = 64,
      fe = 128,
      Nt = 256,
      Ct = bt | j | Nt,
      q = 1,
      ut = 2,
      hs = 4,
      X = 8,
      kt = 16,
      cs = 64,
      Jt = 128,
      me = 256,
      ye = 512,
      Ie = 1024,
      xe = 2048,
      ls = q | ut | X | Jt,
      $ = q | 0 | X | 0,
      Gt = q | 0 | hs | 0,
      us = q | 0 | kt | 0,
      pi = 0 | ut | 0 | Jt,
      di = 0 | ut | 0 | 0,
      ps = q | ut | X | me,
      je = 0 | Ie,
      G = 0 | cs,
      fi = q | 0 | 0 | cs,
      mi = ps | ye,
      yi = 0 | Ie,
      xi = xe,
      Yt = 4,
      Ne = 2,
      ke = 1,
      se = Ne | ke,
      Pi = Ne | Yt,
      bi = ke | Yt,
      Ti = Ne,
      gi = ke,
      ie = 0,
      vt = class {
    constructor() {
      this.sawUnambiguousESM = !1, this.ambiguousScriptDifferentAst = !1;
    }

    hasPlugin(t) {
      if (typeof t == "string") return this.plugins.has(t);
      {
        let [e, s] = t;
        if (!this.hasPlugin(e)) return !1;
        let i = this.plugins.get(e);

        for (let a of Object.keys(s)) if (i?.[a] !== s[a]) return !1;

        return !0;
      }
    }

    getPluginOption(t, e) {
      var s;
      return (s = this.plugins.get(t)) == null ? void 0 : s[e];
    }

  };
  p(vt, "BaseParser");

  function ds(r, t) {
    r.trailingComments === void 0 ? r.trailingComments = t : r.trailingComments.unshift(...t);
  }

  p(ds, "setTrailingComments");

  function Ai(r, t) {
    r.leadingComments === void 0 ? r.leadingComments = t : r.leadingComments.unshift(...t);
  }

  p(Ai, "setLeadingComments");

  function At(r, t) {
    r.innerComments === void 0 ? r.innerComments = t : r.innerComments.unshift(...t);
  }

  p(At, "setInnerComments");

  function ft(r, t, e) {
    let s = null,
        i = t.length;

    for (; s === null && i > 0;) s = t[--i];

    s === null || s.start > e.start ? At(r, e.comments) : ds(s, e.comments);
  }

  p(ft, "adjustInnerComments");
  var Lt = class extends vt {
    addComment(t) {
      this.filename && (t.loc.filename = this.filename), this.state.comments.push(t);
    }

    processComment(t) {
      let {
        commentStack: e
      } = this.state,
          s = e.length;
      if (s === 0) return;
      let i = s - 1,
          a = e[i];
      a.start === t.end && (a.leadingNode = t, i--);
      let {
        start: n
      } = t;

      for (; i >= 0; i--) {
        let o = e[i],
            h = o.end;
        if (h > n) o.containingNode = t, this.finalizeComment(o), e.splice(i, 1);else {
          h === n && (o.trailingNode = t);
          break;
        }
      }
    }

    finalizeComment(t) {
      let {
        comments: e
      } = t;
      if (t.leadingNode !== null || t.trailingNode !== null) t.leadingNode !== null && ds(t.leadingNode, e), t.trailingNode !== null && Ai(t.trailingNode, e);else {
        let {
          containingNode: s,
          start: i
        } = t;
        if (this.input.charCodeAt(i - 1) === 44) switch (s.type) {
          case "ObjectExpression":
          case "ObjectPattern":
          case "RecordExpression":
            ft(s, s.properties, t);
            break;

          case "CallExpression":
          case "OptionalCallExpression":
            ft(s, s.arguments, t);
            break;

          case "FunctionDeclaration":
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "ObjectMethod":
          case "ClassMethod":
          case "ClassPrivateMethod":
            ft(s, s.params, t);
            break;

          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            ft(s, s.elements, t);
            break;

          case "ExportNamedDeclaration":
          case "ImportDeclaration":
            ft(s, s.specifiers, t);
            break;

          default:
            At(s, e);
        } else At(s, e);
      }
    }

    finalizeRemainingComments() {
      let {
        commentStack: t
      } = this.state;

      for (let e = t.length - 1; e >= 0; e--) this.finalizeComment(t[e]);

      this.state.commentStack = [];
    }

    resetPreviousNodeTrailingComments(t) {
      let {
        commentStack: e
      } = this.state,
          {
        length: s
      } = e;
      if (s === 0) return;
      let i = e[s - 1];
      i.leadingNode === t && (i.leadingNode = null);
    }

    takeSurroundingComments(t, e, s) {
      let {
        commentStack: i
      } = this.state,
          a = i.length;
      if (a === 0) return;
      let n = a - 1;

      for (; n >= 0; n--) {
        let o = i[n],
            h = o.end;
        if (o.start === s) o.leadingNode = t;else if (h === e) o.trailingNode = t;else if (h < e) break;
      }
    }

  };
  p(Lt, "CommentsParser");
  var ve = /\r\n?|[\n\u2028\u2029]/,
      St = new RegExp(ve.source, "g");

  function Y(r) {
    switch (r) {
      case 10:
      case 13:
      case 8232:
      case 8233:
        return !0;

      default:
        return !1;
    }
  }

  p(Y, "isNewLine");
  var re = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
      wi = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y,
      $e = new RegExp("(?=(" + wi.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");

  function Ci(r) {
    switch (r) {
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

  p(Ci, "isWhitespace");
  var ot = class {
    constructor() {
      this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = !1, this.inType = !1, this.noAnonFunctionType = !1, this.hasFlowComment = !1, this.isAmbientContext = !1, this.inAbstractClass = !1, this.inDisallowConditionalTypesContext = !1, this.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      }, this.soloAwait = !1, this.inFSharpPipelineDirectBody = !1, this.labels = [], this.decoratorStack = [[]], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 135, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.context = [E.brace], this.canStartJSXElement = !0, this.containsEsc = !1, this.strictErrors = new Map(), this.tokensLength = 0;
    }

    init({
      strictMode: t,
      sourceType: e,
      startLine: s,
      startColumn: i
    }) {
      this.strict = t === !1 ? !1 : t === !0 ? !0 : e === "module", this.curLine = s, this.lineStart = -i, this.startLoc = this.endLoc = new O(s, i, 0);
    }

    curPosition() {
      return new O(this.curLine, this.pos - this.lineStart, this.pos);
    }

    clone(t) {
      let e = new ot(),
          s = Object.keys(this);

      for (let i = 0, a = s.length; i < a; i++) {
        let n = s[i],
            o = this[n];
        !t && Array.isArray(o) && (o = o.slice()), e[n] = o;
      }

      return e;
    }

  };
  p(ot, "State");
  var Si = ["at"],
      Ei = ["at"],
      Ii = p(function (t) {
    return t >= 48 && t <= 57;
  }, "isDigit"),
      Ni = new Set([103, 109, 115, 105, 121, 117, 100, 118]),
      ze = {
    decBinOct: new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: new Set([46, 88, 95, 120])
  },
      Et = {
    bin: r => r === 48 || r === 49,
    oct: r => r >= 48 && r <= 55,
    dec: r => r >= 48 && r <= 57,
    hex: r => r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102
  },
      M = class {
    constructor(t) {
      this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, this.loc = new Z(t.startLoc, t.endLoc);
    }

  };
  p(M, "Token");
  var Dt = class extends Lt {
    constructor(t, e) {
      super(), this.isLookahead = void 0, this.tokens = [], this.state = new ot(), this.state.init(t), this.input = e, this.length = e.length, this.isLookahead = !1;
    }

    pushToken(t) {
      this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
    }

    next() {
      this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new M(this.state)), this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
    }

    eat(t) {
      return this.match(t) ? (this.next(), !0) : !1;
    }

    match(t) {
      return this.state.type === t;
    }

    createLookaheadState(t) {
      return {
        pos: t.pos,
        value: null,
        type: t.type,
        start: t.start,
        end: t.end,
        context: [this.curContext()],
        inType: t.inType,
        startLoc: t.startLoc,
        lastTokEndLoc: t.lastTokEndLoc,
        curLine: t.curLine,
        lineStart: t.lineStart,
        curPosition: t.curPosition
      };
    }

    lookahead() {
      let t = this.state;
      this.state = this.createLookaheadState(t), this.isLookahead = !0, this.nextToken(), this.isLookahead = !1;
      let e = this.state;
      return this.state = t, e;
    }

    nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos);
    }

    nextTokenStartSince(t) {
      return re.lastIndex = t, re.test(this.input) ? re.lastIndex : t;
    }

    lookaheadCharCode() {
      return this.input.charCodeAt(this.nextTokenStart());
    }

    codePointAtPos(t) {
      let e = this.input.charCodeAt(t);

      if ((e & 64512) === 55296 && ++t < this.input.length) {
        let s = this.input.charCodeAt(t);
        (s & 64512) === 56320 && (e = 65536 + ((e & 1023) << 10) + (s & 1023));
      }

      return e;
    }

    setStrict(t) {
      this.state.strict = t, t && (this.state.strictErrors.forEach(([e, s]) => this.raise(e, {
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
      let t;
      this.isLookahead || (t = this.state.curPosition());
      let e = this.state.pos,
          s = this.input.indexOf("*/", e + 2);
      if (s === -1) throw this.raise(l.UnterminatedComment, {
        at: this.state.curPosition()
      });

      for (this.state.pos = s + 2, St.lastIndex = e + 2; St.test(this.input) && St.lastIndex <= s;) ++this.state.curLine, this.state.lineStart = St.lastIndex;

      if (this.isLookahead) return;
      let i = {
        type: "CommentBlock",
        value: this.input.slice(e + 2, s),
        start: e,
        end: s + 2,
        loc: new Z(t, this.state.curPosition())
      };
      return this.options.tokens && this.pushToken(i), i;
    }

    skipLineComment(t) {
      let e = this.state.pos,
          s;
      this.isLookahead || (s = this.state.curPosition());
      let i = this.input.charCodeAt(this.state.pos += t);
      if (this.state.pos < this.length) for (; !Y(i) && ++this.state.pos < this.length;) i = this.input.charCodeAt(this.state.pos);
      if (this.isLookahead) return;
      let a = this.state.pos,
          n = this.input.slice(e + t, a),
          o = {
        type: "CommentLine",
        value: n,
        start: e,
        end: a,
        loc: new Z(s, this.state.curPosition())
      };
      return this.options.tokens && this.pushToken(o), o;
    }

    skipSpace() {
      let t = this.state.pos,
          e = [];

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
                  i !== void 0 && (this.addComment(i), this.options.attachComment && e.push(i));
                  break;
                }

              case 47:
                {
                  let i = this.skipLineComment(2);
                  i !== void 0 && (this.addComment(i), this.options.attachComment && e.push(i));
                  break;
                }

              default:
                break t;
            }

            break;

          default:
            if (Ci(s)) ++this.state.pos;else if (s === 45 && !this.inModule) {
              let i = this.state.pos;

              if (this.input.charCodeAt(i + 1) === 45 && this.input.charCodeAt(i + 2) === 62 && (t === 0 || this.state.lineStart > t)) {
                let a = this.skipLineComment(3);
                a !== void 0 && (this.addComment(a), this.options.attachComment && e.push(a));
              } else break t;
            } else if (s === 60 && !this.inModule) {
              let i = this.state.pos;

              if (this.input.charCodeAt(i + 1) === 33 && this.input.charCodeAt(i + 2) === 45 && this.input.charCodeAt(i + 3) === 45) {
                let a = this.skipLineComment(4);
                a !== void 0 && (this.addComment(a), this.options.attachComment && e.push(a));
              } else break t;
            } else break t;
        }
      }

      if (e.length > 0) {
        let s = this.state.pos,
            i = {
          start: t,
          end: s,
          comments: e,
          leadingNode: null,
          trailingNode: null,
          containingNode: null
        };
        this.state.commentStack.push(i);
      }
    }

    finishToken(t, e) {
      this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
      let s = this.state.type;
      this.state.type = t, this.state.value = e, this.isLookahead || this.updateContext(s);
    }

    replaceToken(t) {
      this.state.type = t, this.updateContext();
    }

    readToken_numberSign() {
      if (this.state.pos === 0 && this.readToken_interpreter()) return;
      let t = this.state.pos + 1,
          e = this.codePointAtPos(t);
      if (e >= 48 && e <= 57) throw this.raise(l.UnexpectedDigitAfterHash, {
        at: this.state.curPosition()
      });

      if (e === 123 || e === 91 && this.hasPlugin("recordAndTuple")) {
        if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") !== "hash") throw this.raise(e === 123 ? l.RecordExpressionHashIncorrectStartSyntaxType : l.TupleExpressionHashIncorrectStartSyntaxType, {
          at: this.state.curPosition()
        });
        this.state.pos += 2, e === 123 ? this.finishToken(7) : this.finishToken(1);
      } else R(e) ? (++this.state.pos, this.finishToken(134, this.readWord1(e))) : e === 92 ? (++this.state.pos, this.finishToken(134, this.readWord1())) : this.finishOp(27, 1);
    }

    readToken_dot() {
      let t = this.input.charCodeAt(this.state.pos + 1);

      if (t >= 48 && t <= 57) {
        this.readNumber(!0);
        return;
      }

      t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
    }

    readToken_slash() {
      this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
    }

    readToken_interpreter() {
      if (this.state.pos !== 0 || this.length < 2) return !1;
      let t = this.input.charCodeAt(this.state.pos + 1);
      if (t !== 33) return !1;
      let e = this.state.pos;

      for (this.state.pos += 1; !Y(t) && ++this.state.pos < this.length;) t = this.input.charCodeAt(this.state.pos);

      let s = this.input.slice(e + 2, this.state.pos);
      return this.finishToken(28, s), !0;
    }

    readToken_mult_modulo(t) {
      let e = t === 42 ? 55 : 54,
          s = 1,
          i = this.input.charCodeAt(this.state.pos + 1);
      t === 42 && i === 42 && (s++, i = this.input.charCodeAt(this.state.pos + 2), e = 57), i === 61 && !this.state.inType && (s++, e = t === 37 ? 33 : 30), this.finishOp(e, s);
    }

    readToken_pipe_amp(t) {
      let e = this.input.charCodeAt(this.state.pos + 1);

      if (e === t) {
        this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(t === 124 ? 41 : 42, 2);
        return;
      }

      if (t === 124) {
        if (e === 62) {
          this.finishOp(39, 2);
          return;
        }

        if (this.hasPlugin("recordAndTuple") && e === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(l.RecordExpressionBarIncorrectEndSyntaxType, {
            at: this.state.curPosition()
          });
          this.state.pos += 2, this.finishToken(9);
          return;
        }

        if (this.hasPlugin("recordAndTuple") && e === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") throw this.raise(l.TupleExpressionBarIncorrectEndSyntaxType, {
            at: this.state.curPosition()
          });
          this.state.pos += 2, this.finishToken(4);
          return;
        }
      }

      if (e === 61) {
        this.finishOp(30, 2);
        return;
      }

      this.finishOp(t === 124 ? 43 : 45, 1);
    }

    readToken_caret() {
      let t = this.input.charCodeAt(this.state.pos + 1);
      if (t === 61 && !this.state.inType) this.finishOp(32, 2);else if (t === 94 && this.hasPlugin(["pipelineOperator", {
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

    readToken_plus_min(t) {
      let e = this.input.charCodeAt(this.state.pos + 1);

      if (e === t) {
        this.finishOp(34, 2);
        return;
      }

      e === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
    }

    readToken_lt() {
      let {
        pos: t
      } = this.state,
          e = this.input.charCodeAt(t + 1);

      if (e === 60) {
        if (this.input.charCodeAt(t + 2) === 61) {
          this.finishOp(30, 3);
          return;
        }

        this.finishOp(51, 2);
        return;
      }

      if (e === 61) {
        this.finishOp(49, 2);
        return;
      }

      this.finishOp(47, 1);
    }

    readToken_gt() {
      let {
        pos: t
      } = this.state,
          e = this.input.charCodeAt(t + 1);

      if (e === 62) {
        let s = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;

        if (this.input.charCodeAt(t + s) === 61) {
          this.finishOp(30, s + 1);
          return;
        }

        this.finishOp(52, s);
        return;
      }

      if (e === 61) {
        this.finishOp(49, 2);
        return;
      }

      this.finishOp(48, 1);
    }

    readToken_eq_excl(t) {
      let e = this.input.charCodeAt(this.state.pos + 1);

      if (e === 61) {
        this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        return;
      }

      if (t === 61 && e === 62) {
        this.state.pos += 2, this.finishToken(19);
        return;
      }

      this.finishOp(t === 61 ? 29 : 35, 1);
    }

    readToken_question() {
      let t = this.input.charCodeAt(this.state.pos + 1),
          e = this.input.charCodeAt(this.state.pos + 2);
      t === 63 ? e === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : t === 46 && !(e >= 48 && e <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
    }

    getTokenFromCode(t) {
      switch (t) {
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
            let e = this.input.charCodeAt(this.state.pos + 1);

            if (e === 120 || e === 88) {
              this.readRadixNumber(16);
              return;
            }

            if (e === 111 || e === 79) {
              this.readRadixNumber(8);
              return;
            }

            if (e === 98 || e === 66) {
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
          this.readString(t);
          return;

        case 47:
          this.readToken_slash();
          return;

        case 37:
        case 42:
          this.readToken_mult_modulo(t);
          return;

        case 124:
        case 38:
          this.readToken_pipe_amp(t);
          return;

        case 94:
          this.readToken_caret();
          return;

        case 43:
        case 45:
          this.readToken_plus_min(t);
          return;

        case 60:
          this.readToken_lt();
          return;

        case 62:
          this.readToken_gt();
          return;

        case 61:
        case 33:
          this.readToken_eq_excl(t);
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
          if (R(t)) {
            this.readWord(t);
            return;
          }

      }

      throw this.raise(l.InvalidOrUnexpectedToken, {
        at: this.state.curPosition(),
        unexpected: String.fromCodePoint(t)
      });
    }

    finishOp(t, e) {
      let s = this.input.slice(this.state.pos, this.state.pos + e);
      this.state.pos += e, this.finishToken(t, s);
    }

    readRegexp() {
      let t = this.state.startLoc,
          e = this.state.start + 1,
          s,
          i,
          {
        pos: a
      } = this.state;

      for (;; ++a) {
        if (a >= this.length) throw this.raise(l.UnterminatedRegExp, {
          at: v(t, 1)
        });
        let c = this.input.charCodeAt(a);
        if (Y(c)) throw this.raise(l.UnterminatedRegExp, {
          at: v(t, 1)
        });
        if (s) s = !1;else {
          if (c === 91) i = !0;else if (c === 93 && i) i = !1;else if (c === 47 && !i) break;
          s = c === 92;
        }
      }

      let n = this.input.slice(e, a);
      ++a;
      let o = "",
          h = p(() => v(t, a + 2 - e), "nextPos");

      for (; a < this.length;) {
        let c = this.codePointAtPos(a),
            u = String.fromCharCode(c);
        if (Ni.has(c)) c === 118 ? (this.expectPlugin("regexpUnicodeSets", h()), o.includes("u") && this.raise(l.IncompatibleRegExpUVFlags, {
          at: h()
        })) : c === 117 && o.includes("v") && this.raise(l.IncompatibleRegExpUVFlags, {
          at: h()
        }), o.includes(u) && this.raise(l.DuplicateRegExpFlags, {
          at: h()
        });else if (nt(c) || c === 92) this.raise(l.MalformedRegExpFlags, {
          at: h()
        });else break;
        ++a, o += u;
      }

      this.state.pos = a, this.finishToken(133, {
        pattern: n,
        flags: o
      });
    }

    readInt(t, e, s, i = !0) {
      let a = this.state.pos,
          n = t === 16 ? ze.hex : ze.decBinOct,
          o = t === 16 ? Et.hex : t === 10 ? Et.dec : t === 8 ? Et.oct : Et.bin,
          h = !1,
          c = 0;

      for (let u = 0, d = e ?? 1 / 0; u < d; ++u) {
        let x = this.input.charCodeAt(this.state.pos),
            m;

        if (x === 95 && i !== "bail") {
          let T = this.input.charCodeAt(this.state.pos - 1),
              S = this.input.charCodeAt(this.state.pos + 1);
          i ? (Number.isNaN(S) || !o(S) || n.has(T) || n.has(S)) && this.raise(l.UnexpectedNumericSeparator, {
            at: this.state.curPosition()
          }) : this.raise(l.NumericSeparatorInEscapeSequence, {
            at: this.state.curPosition()
          }), ++this.state.pos;
          continue;
        }

        if (x >= 97 ? m = x - 97 + 10 : x >= 65 ? m = x - 65 + 10 : Ii(x) ? m = x - 48 : m = 1 / 0, m >= t) if (this.options.errorRecovery && m <= 9) m = 0, this.raise(l.InvalidDigit, {
          at: this.state.curPosition(),
          radix: t
        });else if (s) m = 0, h = !0;else break;
        ++this.state.pos, c = c * t + m;
      }

      return this.state.pos === a || e != null && this.state.pos - a !== e || h ? null : c;
    }

    readRadixNumber(t) {
      let e = this.state.curPosition(),
          s = !1;
      this.state.pos += 2;
      let i = this.readInt(t);
      i == null && this.raise(l.InvalidDigit, {
        at: v(e, 2),
        radix: t
      });
      let a = this.input.charCodeAt(this.state.pos);
      if (a === 110) ++this.state.pos, s = !0;else if (a === 109) throw this.raise(l.InvalidDecimal, {
        at: e
      });
      if (R(this.codePointAtPos(this.state.pos))) throw this.raise(l.NumberIdentifier, {
        at: this.state.curPosition()
      });

      if (s) {
        let n = this.input.slice(e.index, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(131, n);
        return;
      }

      this.finishToken(130, i);
    }

    readNumber(t) {
      let e = this.state.pos,
          s = this.state.curPosition(),
          i = !1,
          a = !1,
          n = !1,
          o = !1,
          h = !1;
      !t && this.readInt(10) === null && this.raise(l.InvalidNumber, {
        at: this.state.curPosition()
      });
      let c = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;

      if (c) {
        let m = this.input.slice(e, this.state.pos);

        if (this.recordStrictModeErrors(l.StrictOctalLiteral, {
          at: s
        }), !this.state.strict) {
          let T = m.indexOf("_");
          T > 0 && this.raise(l.ZeroDigitNumericSeparator, {
            at: v(s, T)
          });
        }

        h = c && !/[89]/.test(m);
      }

      let u = this.input.charCodeAt(this.state.pos);
      if (u === 46 && !h && (++this.state.pos, this.readInt(10), i = !0, u = this.input.charCodeAt(this.state.pos)), (u === 69 || u === 101) && !h && (u = this.input.charCodeAt(++this.state.pos), (u === 43 || u === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(l.InvalidOrMissingExponent, {
        at: s
      }), i = !0, o = !0, u = this.input.charCodeAt(this.state.pos)), u === 110 && ((i || c) && this.raise(l.InvalidBigIntLiteral, {
        at: s
      }), ++this.state.pos, a = !0), u === 109 && (this.expectPlugin("decimal", this.state.curPosition()), (o || c) && this.raise(l.InvalidDecimal, {
        at: s
      }), ++this.state.pos, n = !0), R(this.codePointAtPos(this.state.pos))) throw this.raise(l.NumberIdentifier, {
        at: this.state.curPosition()
      });
      let d = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");

      if (a) {
        this.finishToken(131, d);
        return;
      }

      if (n) {
        this.finishToken(132, d);
        return;
      }

      let x = h ? parseInt(d, 8) : parseFloat(d);
      this.finishToken(130, x);
    }

    readCodePoint(t) {
      let e = this.input.charCodeAt(this.state.pos),
          s;

      if (e === 123) {
        if (++this.state.pos, s = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, !0, t), ++this.state.pos, s !== null && s > 1114111) if (t) this.raise(l.InvalidCodePoint, {
          at: this.state.curPosition()
        });else return null;
      } else s = this.readHexChar(4, !1, t);

      return s;
    }

    readString(t) {
      let e = "",
          s = ++this.state.pos;

      for (;;) {
        if (this.state.pos >= this.length) throw this.raise(l.UnterminatedString, {
          at: this.state.startLoc
        });
        let i = this.input.charCodeAt(this.state.pos);
        if (i === t) break;
        if (i === 92) e += this.input.slice(s, this.state.pos), e += this.readEscapedChar(!1), s = this.state.pos;else if (i === 8232 || i === 8233) ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;else {
          if (Y(i)) throw this.raise(l.UnterminatedString, {
            at: this.state.startLoc
          });
          ++this.state.pos;
        }
      }

      e += this.input.slice(s, this.state.pos++), this.finishToken(129, e);
    }

    readTemplateContinuation() {
      this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
    }

    readTemplateToken() {
      let t = "",
          e = this.state.pos,
          s = !1;

      for (++this.state.pos;;) {
        if (this.state.pos >= this.length) throw this.raise(l.UnterminatedTemplate, {
          at: v(this.state.startLoc, 1)
        });
        let i = this.input.charCodeAt(this.state.pos);

        if (i === 96) {
          ++this.state.pos, t += this.input.slice(e, this.state.pos), this.finishToken(24, s ? null : t);
          return;
        }

        if (i === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
          this.state.pos += 2, t += this.input.slice(e, this.state.pos), this.finishToken(25, s ? null : t);
          return;
        }

        if (i === 92) {
          t += this.input.slice(e, this.state.pos);
          let a = this.readEscapedChar(!0);
          a === null ? s = !0 : t += a, e = this.state.pos;
        } else if (Y(i)) {
          switch (t += this.input.slice(e, this.state.pos), ++this.state.pos, i) {
            case 13:
              this.input.charCodeAt(this.state.pos) === 10 && ++this.state.pos;

            case 10:
              t += `
`;
              break;

            default:
              t += String.fromCharCode(i);
              break;
          }

          ++this.state.curLine, this.state.lineStart = this.state.pos, e = this.state.pos;
        } else ++this.state.pos;
      }
    }

    recordStrictModeErrors(t, {
      at: e
    }) {
      let s = e.index;
      this.state.strict && !this.state.strictErrors.has(s) ? this.raise(t, {
        at: e
      }) : this.state.strictErrors.set(s, [t, e]);
    }

    readEscapedChar(t) {
      let e = !t,
          s = this.input.charCodeAt(++this.state.pos);

      switch (++this.state.pos, s) {
        case 110:
          return `
`;

        case 114:
          return "\r";

        case 120:
          {
            let i = this.readHexChar(2, !1, e);
            return i === null ? null : String.fromCharCode(i);
          }

        case 117:
          {
            let i = this.readCodePoint(e);
            return i === null ? null : String.fromCodePoint(i);
          }

        case 116:
          return "	";

        case 98:
          return "\b";

        case 118:
          return "\v";

        case 102:
          return "\f";

        case 13:
          this.input.charCodeAt(this.state.pos) === 10 && ++this.state.pos;

        case 10:
          this.state.lineStart = this.state.pos, ++this.state.curLine;

        case 8232:
        case 8233:
          return "";

        case 56:
        case 57:
          if (t) return null;
          this.recordStrictModeErrors(l.StrictNumericEscape, {
            at: v(this.state.curPosition(), -1)
          });

        default:
          if (s >= 48 && s <= 55) {
            let i = v(this.state.curPosition(), -1),
                n = this.input.slice(this.state.pos - 1, this.state.pos + 2).match(/^[0-7]+/)[0],
                o = parseInt(n, 8);
            o > 255 && (n = n.slice(0, -1), o = parseInt(n, 8)), this.state.pos += n.length - 1;
            let h = this.input.charCodeAt(this.state.pos);

            if (n !== "0" || h === 56 || h === 57) {
              if (t) return null;
              this.recordStrictModeErrors(l.StrictNumericEscape, {
                at: i
              });
            }

            return String.fromCharCode(o);
          }

          return String.fromCharCode(s);
      }
    }

    readHexChar(t, e, s) {
      let i = this.state.curPosition(),
          a = this.readInt(16, t, e, !1);
      return a === null && (s ? this.raise(l.InvalidEscapeSequence, {
        at: i
      }) : this.state.pos = i.index - 1), a;
    }

    readWord1(t) {
      this.state.containsEsc = !1;
      let e = "",
          s = this.state.pos,
          i = this.state.pos;

      for (t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2); this.state.pos < this.length;) {
        let a = this.codePointAtPos(this.state.pos);
        if (nt(a)) this.state.pos += a <= 65535 ? 1 : 2;else if (a === 92) {
          this.state.containsEsc = !0, e += this.input.slice(i, this.state.pos);
          let n = this.state.curPosition(),
              o = this.state.pos === s ? R : nt;

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
          }), e += String.fromCodePoint(h)), i = this.state.pos;
        } else break;
      }

      return e + this.input.slice(i, this.state.pos);
    }

    readWord(t) {
      let e = this.readWord1(t),
          s = Pe.get(e);
      s !== void 0 ? this.finishToken(s, W(s)) : this.finishToken(128, e);
    }

    checkKeywordEscapes() {
      let {
        type: t
      } = this.state;
      we(t) && this.state.containsEsc && this.raise(l.InvalidEscapedReservedWord, {
        at: this.state.startLoc,
        reservedWord: W(t)
      });
    }

    raise(t, e) {
      let {
        at: s
      } = e,
          i = ce(e, Si),
          a = s instanceof O ? s : s.loc.start,
          n = t({
        loc: a,
        details: i
      });
      if (!this.options.errorRecovery) throw n;
      return this.isLookahead || this.state.errors.push(n), n;
    }

    raiseOverwrite(t, e) {
      let {
        at: s
      } = e,
          i = ce(e, Ei),
          a = s instanceof O ? s : s.loc.start,
          n = a.index,
          o = this.state.errors;

      for (let h = o.length - 1; h >= 0; h--) {
        let c = o[h];
        if (c.loc.index === n) return o[h] = t({
          loc: a,
          details: i
        });
        if (c.loc.index < n) break;
      }

      return this.raise(t, e);
    }

    updateContext(t) {}

    unexpected(t, e) {
      throw this.raise(l.UnexpectedToken, {
        expected: e ? W(e) : null,
        at: t ?? this.state.startLoc
      });
    }

    expectPlugin(t, e) {
      if (this.hasPlugin(t)) return !0;
      throw this.raise(l.MissingPlugin, {
        at: e ?? this.state.startLoc,
        missingPlugin: [t]
      });
    }

    expectOnePlugin(t) {
      if (!t.some(e => this.hasPlugin(e))) throw this.raise(l.MissingOneOfPlugins, {
        at: this.state.startLoc,
        missingPlugin: t
      });
    }

  };
  p(Dt, "Tokenizer");
  var ht = class {
    constructor(t) {
      this.var = new Set(), this.lexical = new Set(), this.functions = new Set(), this.flags = t;
    }

  };
  p(ht, "Scope");
  var ct = class {
    constructor(t, e) {
      this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = new Map(), this.parser = t, this.inModule = e;
    }

    get inFunction() {
      return (this.currentVarScopeFlags() & j) > 0;
    }

    get allowSuper() {
      return (this.currentThisScopeFlags() & Xt) > 0;
    }

    get allowDirectSuper() {
      return (this.currentThisScopeFlags() & os) > 0;
    }

    get inClass() {
      return (this.currentThisScopeFlags() & Q) > 0;
    }

    get inClassAndNotInNonArrowFunction() {
      let t = this.currentThisScopeFlags();
      return (t & Q) > 0 && (t & j) === 0;
    }

    get inStaticBlock() {
      for (let t = this.scopeStack.length - 1;; t--) {
        let {
          flags: e
        } = this.scopeStack[t];
        if (e & fe) return !0;
        if (e & (Ct | Q)) return !1;
      }
    }

    get inNonArrowFunction() {
      return (this.currentThisScopeFlags() & j) > 0;
    }

    get treatFunctionsAsVar() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }

    createScope(t) {
      return new ht(t);
    }

    enter(t) {
      this.scopeStack.push(this.createScope(t));
    }

    exit() {
      this.scopeStack.pop();
    }

    treatFunctionsAsVarInScope(t) {
      return !!(t.flags & (j | fe) || !this.parser.inModule && t.flags & bt);
    }

    declareName(t, e, s) {
      let i = this.currentScope();
      if (e & X || e & kt) this.checkRedeclarationInScope(i, t, e, s), e & kt ? i.functions.add(t) : i.lexical.add(t), e & X && this.maybeExportDefined(i, t);else if (e & hs) for (let a = this.scopeStack.length - 1; a >= 0 && (i = this.scopeStack[a], this.checkRedeclarationInScope(i, t, e, s), i.var.add(t), this.maybeExportDefined(i, t), !(i.flags & Ct)); --a);
      this.parser.inModule && i.flags & bt && this.undefinedExports.delete(t);
    }

    maybeExportDefined(t, e) {
      this.parser.inModule && t.flags & bt && this.undefinedExports.delete(e);
    }

    checkRedeclarationInScope(t, e, s, i) {
      this.isRedeclaredInScope(t, e, s) && this.parser.raise(l.VarRedeclaration, {
        at: i,
        identifierName: e
      });
    }

    isRedeclaredInScope(t, e, s) {
      return s & q ? s & X ? t.lexical.has(e) || t.functions.has(e) || t.var.has(e) : s & kt ? t.lexical.has(e) || !this.treatFunctionsAsVarInScope(t) && t.var.has(e) : t.lexical.has(e) && !(t.flags & ns && t.lexical.values().next().value === e) || !this.treatFunctionsAsVarInScope(t) && t.functions.has(e) : !1;
    }

    checkLocalExport(t) {
      let {
        name: e
      } = t,
          s = this.scopeStack[0];
      !s.lexical.has(e) && !s.var.has(e) && !s.functions.has(e) && this.undefinedExports.set(e, t.loc.start);
    }

    currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }

    currentVarScopeFlags() {
      for (let t = this.scopeStack.length - 1;; t--) {
        let {
          flags: e
        } = this.scopeStack[t];
        if (e & Ct) return e;
      }
    }

    currentThisScopeFlags() {
      for (let t = this.scopeStack.length - 1;; t--) {
        let {
          flags: e
        } = this.scopeStack[t];
        if (e & (Ct | Q) && !(e & Ee)) return e;
      }
    }

  };
  p(ct, "ScopeHandler");
  var Mt = class extends ht {
    constructor(...t) {
      super(...t), this.declareFunctions = new Set();
    }

  };
  p(Mt, "FlowScope");
  var Ot = class extends ct {
    createScope(t) {
      return new Mt(t);
    }

    declareName(t, e, s) {
      let i = this.currentScope();

      if (e & xe) {
        this.checkRedeclarationInScope(i, t, e, s), this.maybeExportDefined(i, t), i.declareFunctions.add(t);
        return;
      }

      super.declareName(...arguments);
    }

    isRedeclaredInScope(t, e, s) {
      return super.isRedeclaredInScope(...arguments) ? !0 : s & xe ? !t.declareFunctions.has(e) && (t.lexical.has(e) || t.functions.has(e)) : !1;
    }

    checkLocalExport(t) {
      this.scopeStack[0].declareFunctions.has(t.name) || super.checkLocalExport(t);
    }

  };
  p(Ot, "FlowScopeHandler");
  var Ft = class {
    constructor() {
      this.privateNames = new Set(), this.loneAccessors = new Map(), this.undefinedPrivateNames = new Map();
    }

  };
  p(Ft, "ClassScope");
  var Bt = class {
    constructor(t) {
      this.parser = void 0, this.stack = [], this.undefinedPrivateNames = new Map(), this.parser = t;
    }

    current() {
      return this.stack[this.stack.length - 1];
    }

    enter() {
      this.stack.push(new Ft());
    }

    exit() {
      let t = this.stack.pop(),
          e = this.current();

      for (let [s, i] of Array.from(t.undefinedPrivateNames)) e ? e.undefinedPrivateNames.has(s) || e.undefinedPrivateNames.set(s, i) : this.parser.raise(l.InvalidPrivateFieldResolution, {
        at: i,
        identifierName: s
      });
    }

    declarePrivateName(t, e, s) {
      let {
        privateNames: i,
        loneAccessors: a,
        undefinedPrivateNames: n
      } = this.current(),
          o = i.has(t);

      if (e & se) {
        let h = o && a.get(t);

        if (h) {
          let c = h & Yt,
              u = e & Yt,
              d = h & se,
              x = e & se;
          o = d === x || c !== u, o || a.delete(t);
        } else o || a.set(t, e);
      }

      o && this.parser.raise(l.PrivateNameRedeclaration, {
        at: s,
        identifierName: t
      }), i.add(t), n.delete(t);
    }

    usePrivateName(t, e) {
      let s;

      for (s of this.stack) if (s.privateNames.has(t)) return;

      s ? s.undefinedPrivateNames.set(t, e) : this.parser.raise(l.InvalidPrivateFieldResolution, {
        at: e,
        identifierName: t
      });
    }

  };
  p(Bt, "ClassScopeHandler");
  var ki = 0,
      fs = 1,
      Le = 2,
      ms = 3,
      tt = class {
    constructor(t = ki) {
      this.type = void 0, this.type = t;
    }

    canBeArrowParameterDeclaration() {
      return this.type === Le || this.type === fs;
    }

    isCertainlyParameterDeclaration() {
      return this.type === ms;
    }

  };
  p(tt, "ExpressionScope");
  var Tt = class extends tt {
    constructor(t) {
      super(t), this.declarationErrors = new Map();
    }

    recordDeclarationError(t, {
      at: e
    }) {
      let s = e.index;
      this.declarationErrors.set(s, [t, e]);
    }

    clearDeclarationError(t) {
      this.declarationErrors.delete(t);
    }

    iterateErrors(t) {
      this.declarationErrors.forEach(t);
    }

  };
  p(Tt, "ArrowHeadParsingScope");
  var Rt = class {
    constructor(t) {
      this.parser = void 0, this.stack = [new tt()], this.parser = t;
    }

    enter(t) {
      this.stack.push(t);
    }

    exit() {
      this.stack.pop();
    }

    recordParameterInitializerError(t, {
      at: e
    }) {
      let s = {
        at: e.loc.start
      },
          {
        stack: i
      } = this,
          a = i.length - 1,
          n = i[a];

      for (; !n.isCertainlyParameterDeclaration();) {
        if (n.canBeArrowParameterDeclaration()) n.recordDeclarationError(t, s);else return;
        n = i[--a];
      }

      this.parser.raise(t, s);
    }

    recordArrowParemeterBindingError(t, {
      at: e
    }) {
      let {
        stack: s
      } = this,
          i = s[s.length - 1],
          a = {
        at: e.loc.start
      };
      if (i.isCertainlyParameterDeclaration()) this.parser.raise(t, a);else if (i.canBeArrowParameterDeclaration()) i.recordDeclarationError(t, a);else return;
    }

    recordAsyncArrowParametersError({
      at: t
    }) {
      let {
        stack: e
      } = this,
          s = e.length - 1,
          i = e[s];

      for (; i.canBeArrowParameterDeclaration();) i.type === Le && i.recordDeclarationError(l.AwaitBindingIdentifier, {
        at: t
      }), i = e[--s];
    }

    validateAsPattern() {
      let {
        stack: t
      } = this,
          e = t[t.length - 1];
      !e.canBeArrowParameterDeclaration() || e.iterateErrors(([s, i]) => {
        this.parser.raise(s, {
          at: i
        });
        let a = t.length - 2,
            n = t[a];

        for (; n.canBeArrowParameterDeclaration();) n.clearDeclarationError(i.index), n = t[--a];
      });
    }

  };
  p(Rt, "ExpressionScopeHandler");

  function vi() {
    return new tt(ms);
  }

  p(vi, "newParameterDeclarationScope");

  function Li() {
    return new Tt(fs);
  }

  p(Li, "newArrowHeadScope");

  function Di() {
    return new Tt(Le);
  }

  p(Di, "newAsyncArrowScope");

  function ys() {
    return new tt();
  }

  p(ys, "newExpressionScope");
  var lt = 0,
      xs = 1,
      Zt = 2,
      Ps = 4,
      it = 8,
      Ut = class {
    constructor() {
      this.stacks = [];
    }

    enter(t) {
      this.stacks.push(t);
    }

    exit() {
      this.stacks.pop();
    }

    currentFlags() {
      return this.stacks[this.stacks.length - 1];
    }

    get hasAwait() {
      return (this.currentFlags() & Zt) > 0;
    }

    get hasYield() {
      return (this.currentFlags() & xs) > 0;
    }

    get hasReturn() {
      return (this.currentFlags() & Ps) > 0;
    }

    get hasIn() {
      return (this.currentFlags() & it) > 0;
    }

  };
  p(Ut, "ProductionParameterHandler");

  function jt(r, t) {
    return (r ? Zt : 0) | (t ? xs : 0);
  }

  p(jt, "functionFlags");
  var $t = class extends Dt {
    addExtra(t, e, s, i = !0) {
      if (!t) return;
      let a = t.extra = t.extra || {};
      i ? a[e] = s : Object.defineProperty(a, e, {
        enumerable: i,
        value: s
      });
    }

    isContextual(t) {
      return this.state.type === t && !this.state.containsEsc;
    }

    isUnparsedContextual(t, e) {
      let s = t + e.length;

      if (this.input.slice(t, s) === e) {
        let i = this.input.charCodeAt(s);
        return !(nt(i) || (i & 64512) === 55296);
      }

      return !1;
    }

    isLookaheadContextual(t) {
      let e = this.nextTokenStart();
      return this.isUnparsedContextual(e, t);
    }

    eatContextual(t) {
      return this.isContextual(t) ? (this.next(), !0) : !1;
    }

    expectContextual(t, e) {
      if (!this.eatContextual(t)) throw e != null ? this.raise(e, {
        at: this.state.startLoc
      }) : this.unexpected(null, t);
    }

    canInsertSemicolon() {
      return this.match(135) || this.match(8) || this.hasPrecedingLineBreak();
    }

    hasPrecedingLineBreak() {
      return ve.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start));
    }

    hasFollowingLineBreak() {
      return $e.lastIndex = this.state.end, $e.test(this.input);
    }

    isLineTerminator() {
      return this.eat(13) || this.canInsertSemicolon();
    }

    semicolon(t = !0) {
      (t ? this.isLineTerminator() : this.eat(13)) || this.raise(l.MissingSemicolon, {
        at: this.state.lastTokEndLoc
      });
    }

    expect(t, e) {
      this.eat(t) || this.unexpected(e, t);
    }

    tryParse(t, e = this.state.clone()) {
      let s = {
        node: null
      };

      try {
        let i = t((a = null) => {
          throw s.node = a, s;
        });

        if (this.state.errors.length > e.errors.length) {
          let a = this.state;
          return this.state = e, this.state.tokensLength = a.tokensLength, {
            node: i,
            error: a.errors[e.errors.length],
            thrown: !1,
            aborted: !1,
            failState: a
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
        let a = this.state;
        if (this.state = e, i instanceof SyntaxError) return {
          node: null,
          error: i,
          thrown: !0,
          aborted: !1,
          failState: a
        };
        if (i === s) return {
          node: s.node,
          error: null,
          thrown: !1,
          aborted: !0,
          failState: a
        };
        throw i;
      }
    }

    checkExpressionErrors(t, e) {
      if (!t) return !1;
      let {
        shorthandAssignLoc: s,
        doubleProtoLoc: i,
        privateKeyLoc: a,
        optionalParametersLoc: n
      } = t,
          o = !!s || !!i || !!n || !!a;
      if (!e) return o;
      s != null && this.raise(l.InvalidCoverInitializedName, {
        at: s
      }), i != null && this.raise(l.DuplicateProto, {
        at: i
      }), a != null && this.raise(l.UnexpectedPrivateField, {
        at: a
      }), n != null && this.unexpected(n);
    }

    isLiteralPropertyName() {
      return Ze(this.state.type);
    }

    isPrivateName(t) {
      return t.type === "PrivateName";
    }

    getPrivateNameSV(t) {
      return t.id.name;
    }

    hasPropertyAsPrivateName(t) {
      return (t.type === "MemberExpression" || t.type === "OptionalMemberExpression") && this.isPrivateName(t.property);
    }

    isOptionalChain(t) {
      return t.type === "OptionalMemberExpression" || t.type === "OptionalCallExpression";
    }

    isObjectProperty(t) {
      return t.type === "ObjectProperty";
    }

    isObjectMethod(t) {
      return t.type === "ObjectMethod";
    }

    initializeScopes(t = this.options.sourceType === "module") {
      let e = this.state.labels;
      this.state.labels = [];
      let s = this.exportedIdentifiers;
      this.exportedIdentifiers = new Set();
      let i = this.inModule;
      this.inModule = t;
      let a = this.scope,
          n = this.getScopeHandler();
      this.scope = new n(this, t);
      let o = this.prodParam;
      this.prodParam = new Ut();
      let h = this.classScope;
      this.classScope = new Bt(this);
      let c = this.expressionScope;
      return this.expressionScope = new Rt(this), () => {
        this.state.labels = e, this.exportedIdentifiers = s, this.inModule = i, this.scope = a, this.prodParam = o, this.classScope = h, this.expressionScope = c;
      };
    }

    enterInitialScopes() {
      let t = lt;
      this.inModule && (t |= Zt), this.scope.enter(bt), this.prodParam.enter(t);
    }

    checkDestructuringPrivate(t) {
      let {
        privateKeyLoc: e
      } = t;
      e !== null && this.expectPlugin("destructuringPrivate", e);
    }

  };
  p($t, "UtilParser");
  var et = class {
    constructor() {
      this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null;
    }

  };
  p(et, "ExpressionErrors");
  var st = class {
    constructor(t, e, s) {
      this.type = "", this.start = e, this.end = 0, this.loc = new Z(s), t != null && t.options.ranges && (this.range = [e, 0]), t != null && t.filename && (this.loc.filename = t.filename);
    }

  };
  p(st, "Node");
  var De = st.prototype;

  De.__clone = function () {
    let r = new st(),
        t = Object.keys(this);

    for (let e = 0, s = t.length; e < s; e++) {
      let i = t[e];
      i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (r[i] = this[i]);
    }

    return r;
  };

  function Mi(r) {
    return V(r);
  }

  p(Mi, "clonePlaceholder");

  function V(r) {
    let {
      type: t,
      start: e,
      end: s,
      loc: i,
      range: a,
      extra: n,
      name: o
    } = r,
        h = Object.create(De);
    return h.type = t, h.start = e, h.end = s, h.loc = i, h.range = a, h.extra = n, h.name = o, t === "Placeholder" && (h.expectedNode = r.expectedNode), h;
  }

  p(V, "cloneIdentifier");

  function Oi(r) {
    let {
      type: t,
      start: e,
      end: s,
      loc: i,
      range: a,
      extra: n
    } = r;
    if (t === "Placeholder") return Mi(r);
    let o = Object.create(De);
    return o.type = t, o.start = e, o.end = s, o.loc = i, o.range = a, r.raw !== void 0 ? o.raw = r.raw : o.extra = n, o.value = r.value, o;
  }

  p(Oi, "cloneStringLiteral");
  var zt = class extends $t {
    startNode() {
      return new st(this, this.state.start, this.state.startLoc);
    }

    startNodeAt(t, e) {
      return new st(this, t, e);
    }

    startNodeAtNode(t) {
      return this.startNodeAt(t.start, t.loc.start);
    }

    finishNode(t, e) {
      return this.finishNodeAt(t, e, this.state.lastTokEndLoc);
    }

    finishNodeAt(t, e, s) {
      return t.type = e, t.end = s.index, t.loc.end = s, this.options.ranges && (t.range[1] = s.index), this.options.attachComment && this.processComment(t), t;
    }

    resetStartLocation(t, e, s) {
      t.start = e, t.loc.start = s, this.options.ranges && (t.range[0] = e);
    }

    resetEndLocation(t, e = this.state.lastTokEndLoc) {
      t.end = e.index, t.loc.end = e, this.options.ranges && (t.range[1] = e.index);
    }

    resetStartLocationFromNode(t, e) {
      this.resetStartLocation(t, e.start, e.loc.start);
    }

  };
  p(zt, "NodeUtils");
  var Fi = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]),
      b = U`flow`(r => ({
    AmbiguousConditionalArrow: r("Ambiguous expression: wrap the arrow functions in parentheses to disambiguate."),
    AmbiguousDeclareModuleKind: r("Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module."),
    AssignReservedType: r(({
      reservedType: t
    }) => `Cannot overwrite reserved type ${t}.`),
    DeclareClassElement: r("The `declare` modifier can only appear on class fields."),
    DeclareClassFieldInitializer: r("Initializers are not allowed in fields with the `declare` modifier."),
    DuplicateDeclareModuleExports: r("Duplicate `declare module.exports` statement."),
    EnumBooleanMemberNotInitialized: r(({
      memberName: t,
      enumName: e
    }) => `Boolean enum members need to be initialized. Use either \`${t} = true,\` or \`${t} = false,\` in enum \`${e}\`.`),
    EnumDuplicateMemberName: r(({
      memberName: t,
      enumName: e
    }) => `Enum member names need to be unique, but the name \`${t}\` has already been used before in enum \`${e}\`.`),
    EnumInconsistentMemberValues: r(({
      enumName: t
    }) => `Enum \`${t}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`),
    EnumInvalidExplicitType: r(({
      invalidEnumType: t,
      enumName: e
    }) => `Enum type \`${t}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${e}\`.`),
    EnumInvalidExplicitTypeUnknownSupplied: r(({
      enumName: t
    }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`),
    EnumInvalidMemberInitializerPrimaryType: r(({
      enumName: t,
      memberName: e,
      explicitType: s
    }) => `Enum \`${t}\` has type \`${s}\`, so the initializer of \`${e}\` needs to be a ${s} literal.`),
    EnumInvalidMemberInitializerSymbolType: r(({
      enumName: t,
      memberName: e
    }) => `Symbol enum members cannot be initialized. Use \`${e},\` in enum \`${t}\`.`),
    EnumInvalidMemberInitializerUnknownType: r(({
      enumName: t,
      memberName: e
    }) => `The enum member initializer for \`${e}\` needs to be a literal (either a boolean, number, or string) in enum \`${t}\`.`),
    EnumInvalidMemberName: r(({
      enumName: t,
      memberName: e,
      suggestion: s
    }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${e}\`, consider using \`${s}\`, in enum \`${t}\`.`),
    EnumNumberMemberNotInitialized: r(({
      enumName: t,
      memberName: e
    }) => `Number enum members need to be initialized, e.g. \`${e} = 1\` in enum \`${t}\`.`),
    EnumStringMemberInconsistentlyInitailized: r(({
      enumName: t
    }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${t}\`.`),
    GetterMayNotHaveThisParam: r("A getter cannot have a `this` parameter."),
    ImportTypeShorthandOnlyInPureImport: r("The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements."),
    InexactInsideExact: r("Explicit inexact syntax cannot appear inside an explicit exact object type."),
    InexactInsideNonObject: r("Explicit inexact syntax cannot appear in class or interface definitions."),
    InexactVariance: r("Explicit inexact syntax cannot have variance."),
    InvalidNonTypeImportInDeclareModule: r("Imports within a `declare module` body must always be `import type` or `import typeof`."),
    MissingTypeParamDefault: r("Type parameter declaration needs a default, since a preceding type parameter declaration has a default."),
    NestedDeclareModule: r("`declare module` cannot be used inside another `declare module`."),
    NestedFlowComment: r("Cannot have a flow comment inside another flow comment."),
    PatternIsOptional: r("A binding pattern parameter cannot be optional in an implementation signature.", {
      reasonCode: "OptionalBindingPattern"
    }),
    SetterMayNotHaveThisParam: r("A setter cannot have a `this` parameter."),
    SpreadVariance: r("Spread properties cannot have variance."),
    ThisParamAnnotationRequired: r("A type annotation is required for the `this` parameter."),
    ThisParamBannedInConstructor: r("Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions."),
    ThisParamMayNotBeOptional: r("The `this` parameter cannot be optional."),
    ThisParamMustBeFirst: r("The `this` parameter must be the first function parameter."),
    ThisParamNoDefault: r("The `this` parameter may not have a default value."),
    TypeBeforeInitializer: r("Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`."),
    TypeCastInPattern: r("The type cast expression is expected to be wrapped with parenthesis."),
    UnexpectedExplicitInexactInObject: r("Explicit inexact syntax must appear at the end of an inexact object."),
    UnexpectedReservedType: r(({
      reservedType: t
    }) => `Unexpected reserved type ${t}.`),
    UnexpectedReservedUnderscore: r("`_` is only allowed as a type argument to call or new."),
    UnexpectedSpaceBetweenModuloChecks: r("Spaces between `%` and `checks` are not allowed here."),
    UnexpectedSpreadType: r("Spread operator cannot appear in class or interface definitions."),
    UnexpectedSubtractionOperand: r('Unexpected token, expected "number" or "bigint".'),
    UnexpectedTokenAfterTypeParameter: r("Expected an arrow function after this type parameter declaration."),
    UnexpectedTypeParameterBeforeAsyncArrowFunction: r("Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`."),
    UnsupportedDeclareExportKind: r(({
      unsupportedExportKind: t,
      suggestion: e
    }) => `\`declare export ${t}\` is not supported. Use \`${e}\` instead.`),
    UnsupportedStatementInDeclareModule: r("Only declares and type imports are allowed inside declare module."),
    UnterminatedFlowComment: r("Unterminated flow-comment.")
  }));

  function Bi(r) {
    return r.type === "DeclareExportAllDeclaration" || r.type === "DeclareExportDeclaration" && (!r.declaration || r.declaration.type !== "TypeAlias" && r.declaration.type !== "InterfaceDeclaration");
  }

  p(Bi, "isEsModuleType");

  function ae(r) {
    return r.importKind === "type" || r.importKind === "typeof";
  }

  p(ae, "hasTypeImportKind");

  function Ve(r) {
    return z(r) && r !== 97;
  }

  p(Ve, "isMaybeDefaultImport");
  var Ri = {
    const: "declare export var",
    let: "declare export var",
    type: "export type",
    interface: "export interface"
  };

  function Ui(r, t) {
    let e = [],
        s = [];

    for (let i = 0; i < r.length; i++) (t(r[i], i, r) ? e : s).push(r[i]);

    return [e, s];
  }

  p(Ui, "partition");
  var ji = /\*?\s*@((?:no)?flow)\b/,
      $i = p(r => class extends r {
    constructor(...t) {
      super(...t), this.flowPragma = void 0;
    }

    getScopeHandler() {
      return Ot;
    }

    shouldParseTypes() {
      return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
    }

    shouldParseEnums() {
      return !!this.getPluginOption("flow", "enums");
    }

    finishToken(t, e) {
      return t !== 129 && t !== 13 && t !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(t, e);
    }

    addComment(t) {
      if (this.flowPragma === void 0) {
        let e = ji.exec(t.value);
        if (e) if (e[1] === "flow") this.flowPragma = "flow";else if (e[1] === "noflow") this.flowPragma = "noflow";else throw new Error("Unexpected flow pragma");
      }

      return super.addComment(t);
    }

    flowParseTypeInitialiser(t) {
      let e = this.state.inType;
      this.state.inType = !0, this.expect(t || 14);
      let s = this.flowParseType();
      return this.state.inType = e, s;
    }

    flowParsePredicate() {
      let t = this.startNode(),
          e = this.state.startLoc;
      return this.next(), this.expectContextual(107), this.state.lastTokStart > e.index + 1 && this.raise(b.UnexpectedSpaceBetweenModuloChecks, {
        at: e
      }), this.eat(10) ? (t.value = this.parseExpression(), this.expect(11), this.finishNode(t, "DeclaredPredicate")) : this.finishNode(t, "InferredPredicate");
    }

    flowParseTypeAndPredicateInitialiser() {
      let t = this.state.inType;
      this.state.inType = !0, this.expect(14);
      let e = null,
          s = null;
      return this.match(54) ? (this.state.inType = t, s = this.flowParsePredicate()) : (e = this.flowParseType(), this.state.inType = t, this.match(54) && (s = this.flowParsePredicate())), [e, s];
    }

    flowParseDeclareClass(t) {
      return this.next(), this.flowParseInterfaceish(t, !0), this.finishNode(t, "DeclareClass");
    }

    flowParseDeclareFunction(t) {
      this.next();
      let e = t.id = this.parseIdentifier(),
          s = this.startNode(),
          i = this.startNode();
      this.match(47) ? s.typeParameters = this.flowParseTypeParameterDeclaration() : s.typeParameters = null, this.expect(10);
      let a = this.flowParseFunctionTypeParams();
      return s.params = a.params, s.rest = a.rest, s.this = a._this, this.expect(11), [s.returnType, t.predicate] = this.flowParseTypeAndPredicateInitialiser(), i.typeAnnotation = this.finishNode(s, "FunctionTypeAnnotation"), e.typeAnnotation = this.finishNode(i, "TypeAnnotation"), this.resetEndLocation(e), this.semicolon(), this.scope.declareName(t.id.name, xi, t.id.loc.start), this.finishNode(t, "DeclareFunction");
    }

    flowParseDeclare(t, e) {
      if (this.match(80)) return this.flowParseDeclareClass(t);
      if (this.match(68)) return this.flowParseDeclareFunction(t);
      if (this.match(74)) return this.flowParseDeclareVariable(t);
      if (this.eatContextual(123)) return this.match(16) ? this.flowParseDeclareModuleExports(t) : (e && this.raise(b.NestedDeclareModule, {
        at: this.state.lastTokStartLoc
      }), this.flowParseDeclareModule(t));
      if (this.isContextual(126)) return this.flowParseDeclareTypeAlias(t);
      if (this.isContextual(127)) return this.flowParseDeclareOpaqueType(t);
      if (this.isContextual(125)) return this.flowParseDeclareInterface(t);
      if (this.match(82)) return this.flowParseDeclareExportDeclaration(t, e);
      throw this.unexpected();
    }

    flowParseDeclareVariable(t) {
      return this.next(), t.id = this.flowParseTypeAnnotatableIdentifier(!0), this.scope.declareName(t.id.name, Gt, t.id.loc.start), this.semicolon(), this.finishNode(t, "DeclareVariable");
    }

    flowParseDeclareModule(t) {
      this.scope.enter(rt), this.match(129) ? t.id = this.parseExprAtom() : t.id = this.parseIdentifier();
      let e = t.body = this.startNode(),
          s = e.body = [];

      for (this.expect(5); !this.match(8);) {
        let n = this.startNode();
        this.match(83) ? (this.next(), !this.isContextual(126) && !this.match(87) && this.raise(b.InvalidNonTypeImportInDeclareModule, {
          at: this.state.lastTokStartLoc
        }), this.parseImport(n)) : (this.expectContextual(121, b.UnsupportedStatementInDeclareModule), n = this.flowParseDeclare(n, !0)), s.push(n);
      }

      this.scope.exit(), this.expect(8), this.finishNode(e, "BlockStatement");
      let i = null,
          a = !1;
      return s.forEach(n => {
        Bi(n) ? (i === "CommonJS" && this.raise(b.AmbiguousDeclareModuleKind, {
          at: n
        }), i = "ES") : n.type === "DeclareModuleExports" && (a && this.raise(b.DuplicateDeclareModuleExports, {
          at: n
        }), i === "ES" && this.raise(b.AmbiguousDeclareModuleKind, {
          at: n
        }), i = "CommonJS", a = !0);
      }), t.kind = i || "CommonJS", this.finishNode(t, "DeclareModule");
    }

    flowParseDeclareExportDeclaration(t, e) {
      if (this.expect(82), this.eat(65)) return this.match(68) || this.match(80) ? t.declaration = this.flowParseDeclare(this.startNode()) : (t.declaration = this.flowParseType(), this.semicolon()), t.default = !0, this.finishNode(t, "DeclareExportDeclaration");

      if (this.match(75) || this.isLet() || (this.isContextual(126) || this.isContextual(125)) && !e) {
        let s = this.state.value;
        throw this.raise(b.UnsupportedDeclareExportKind, {
          at: this.state.startLoc,
          unsupportedExportKind: s,
          suggestion: Ri[s]
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
      return this.next(), this.flowParseTypeAlias(t), t.type = "DeclareTypeAlias", t;
    }

    flowParseDeclareOpaqueType(t) {
      return this.next(), this.flowParseOpaqueType(t, !0), t.type = "DeclareOpaqueType", t;
    }

    flowParseDeclareInterface(t) {
      return this.next(), this.flowParseInterfaceish(t), this.finishNode(t, "DeclareInterface");
    }

    flowParseInterfaceish(t, e = !1) {
      if (t.id = this.flowParseRestrictedIdentifier(!e, !0), this.scope.declareName(t.id.name, e ? us : $, t.id.loc.start), this.match(47) ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.extends = [], t.implements = [], t.mixins = [], this.eat(81)) do t.extends.push(this.flowParseInterfaceExtends()); while (!e && this.eat(12));

      if (this.isContextual(114)) {
        this.next();

        do t.mixins.push(this.flowParseInterfaceExtends()); while (this.eat(12));
      }

      if (this.isContextual(110)) {
        this.next();

        do t.implements.push(this.flowParseInterfaceExtends()); while (this.eat(12));
      }

      t.body = this.flowParseObjectType({
        allowStatic: e,
        allowExact: !1,
        allowSpread: !1,
        allowProto: e,
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

    checkReservedType(t, e, s) {
      !Fi.has(t) || this.raise(s ? b.AssignReservedType : b.UnexpectedReservedType, {
        at: e,
        reservedType: t
      });
    }

    flowParseRestrictedIdentifier(t, e) {
      return this.checkReservedType(this.state.value, this.state.startLoc, e), this.parseIdentifier(t);
    }

    flowParseTypeAlias(t) {
      return t.id = this.flowParseRestrictedIdentifier(!1, !0), this.scope.declareName(t.id.name, $, t.id.loc.start), this.match(47) ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(t, "TypeAlias");
    }

    flowParseOpaqueType(t, e) {
      return this.expectContextual(126), t.id = this.flowParseRestrictedIdentifier(!0, !0), this.scope.declareName(t.id.name, $, t.id.loc.start), this.match(47) ? t.typeParameters = this.flowParseTypeParameterDeclaration() : t.typeParameters = null, t.supertype = null, this.match(14) && (t.supertype = this.flowParseTypeInitialiser(14)), t.impltype = null, e || (t.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(t, "OpaqueType");
    }

    flowParseTypeParameter(t = !1) {
      let e = this.state.startLoc,
          s = this.startNode(),
          i = this.flowParseVariance(),
          a = this.flowParseTypeAnnotatableIdentifier();
      return s.name = a.name, s.variance = i, s.bound = a.typeAnnotation, this.match(29) ? (this.eat(29), s.default = this.flowParseType()) : t && this.raise(b.MissingTypeParamDefault, {
        at: e
      }), this.finishNode(s, "TypeParameter");
    }

    flowParseTypeParameterDeclaration() {
      let t = this.state.inType,
          e = this.startNode();
      e.params = [], this.state.inType = !0, this.match(47) || this.match(138) ? this.next() : this.unexpected();
      let s = !1;

      do {
        let i = this.flowParseTypeParameter(s);
        e.params.push(i), i.default && (s = !0), this.match(48) || this.expect(12);
      } while (!this.match(48));

      return this.expect(48), this.state.inType = t, this.finishNode(e, "TypeParameterDeclaration");
    }

    flowParseTypeParameterInstantiation() {
      let t = this.startNode(),
          e = this.state.inType;
      t.params = [], this.state.inType = !0, this.expect(47);
      let s = this.state.noAnonFunctionType;

      for (this.state.noAnonFunctionType = !1; !this.match(48);) t.params.push(this.flowParseType()), this.match(48) || this.expect(12);

      return this.state.noAnonFunctionType = s, this.expect(48), this.state.inType = e, this.finishNode(t, "TypeParameterInstantiation");
    }

    flowParseTypeParameterInstantiationCallOrNew() {
      let t = this.startNode(),
          e = this.state.inType;

      for (t.params = [], this.state.inType = !0, this.expect(47); !this.match(48);) t.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);

      return this.expect(48), this.state.inType = e, this.finishNode(t, "TypeParameterInstantiation");
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
      return this.match(130) || this.match(129) ? this.parseExprAtom() : this.parseIdentifier(!0);
    }

    flowParseObjectTypeIndexer(t, e, s) {
      return t.static = e, this.lookahead().type === 14 ? (t.id = this.flowParseObjectPropertyKey(), t.key = this.flowParseTypeInitialiser()) : (t.id = null, t.key = this.flowParseType()), this.expect(3), t.value = this.flowParseTypeInitialiser(), t.variance = s, this.finishNode(t, "ObjectTypeIndexer");
    }

    flowParseObjectTypeInternalSlot(t, e) {
      return t.static = e, t.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (t.method = !0, t.optional = !1, t.value = this.flowParseObjectTypeMethodish(this.startNodeAt(t.start, t.loc.start))) : (t.method = !1, this.eat(17) && (t.optional = !0), t.value = this.flowParseTypeInitialiser()), this.finishNode(t, "ObjectTypeInternalSlot");
    }

    flowParseObjectTypeMethodish(t) {
      for (t.params = [], t.rest = null, t.typeParameters = null, t.this = null, this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (t.this = this.flowParseFunctionTypeParam(!0), t.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) t.params.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);

      return this.eat(21) && (t.rest = this.flowParseFunctionTypeParam(!1)), this.expect(11), t.returnType = this.flowParseTypeInitialiser(), this.finishNode(t, "FunctionTypeAnnotation");
    }

    flowParseObjectTypeCallProperty(t, e) {
      let s = this.startNode();
      return t.static = e, t.value = this.flowParseObjectTypeMethodish(s), this.finishNode(t, "ObjectTypeCallProperty");
    }

    flowParseObjectType({
      allowStatic: t,
      allowExact: e,
      allowSpread: s,
      allowProto: i,
      allowInexact: a
    }) {
      let n = this.state.inType;
      this.state.inType = !0;
      let o = this.startNode();
      o.callProperties = [], o.properties = [], o.indexers = [], o.internalSlots = [];
      let h,
          c,
          u = !1;

      for (e && this.match(6) ? (this.expect(6), h = 9, c = !0) : (this.expect(5), h = 8, c = !1), o.exact = c; !this.match(h);) {
        let x = !1,
            m = null,
            T = null,
            S = this.startNode();

        if (i && this.isContextual(115)) {
          let N = this.lookahead();
          N.type !== 14 && N.type !== 17 && (this.next(), m = this.state.startLoc, t = !1);
        }

        if (t && this.isContextual(104)) {
          let N = this.lookahead();
          N.type !== 14 && N.type !== 17 && (this.next(), x = !0);
        }

        let I = this.flowParseVariance();
        if (this.eat(0)) m != null && this.unexpected(m), this.eat(0) ? (I && this.unexpected(I.loc.start), o.internalSlots.push(this.flowParseObjectTypeInternalSlot(S, x))) : o.indexers.push(this.flowParseObjectTypeIndexer(S, x, I));else if (this.match(10) || this.match(47)) m != null && this.unexpected(m), I && this.unexpected(I.loc.start), o.callProperties.push(this.flowParseObjectTypeCallProperty(S, x));else {
          let N = "init";

          if (this.isContextual(98) || this.isContextual(103)) {
            let Oe = this.lookahead();
            Ze(Oe.type) && (N = this.state.value, this.next());
          }

          let D = this.flowParseObjectTypeProperty(S, x, m, I, N, s, a ?? !c);
          D === null ? (u = !0, T = this.state.lastTokStartLoc) : o.properties.push(D);
        }
        this.flowObjectTypeSemicolon(), T && !this.match(8) && !this.match(9) && this.raise(b.UnexpectedExplicitInexactInObject, {
          at: T
        });
      }

      this.expect(h), s && (o.inexact = u);
      let d = this.finishNode(o, "ObjectTypeAnnotation");
      return this.state.inType = n, d;
    }

    flowParseObjectTypeProperty(t, e, s, i, a, n, o) {
      if (this.eat(21)) return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (n ? o || this.raise(b.InexactInsideExact, {
        at: this.state.lastTokStartLoc
      }) : this.raise(b.InexactInsideNonObject, {
        at: this.state.lastTokStartLoc
      }), i && this.raise(b.InexactVariance, {
        at: i
      }), null) : (n || this.raise(b.UnexpectedSpreadType, {
        at: this.state.lastTokStartLoc
      }), s != null && this.unexpected(s), i && this.raise(b.SpreadVariance, {
        at: i
      }), t.argument = this.flowParseType(), this.finishNode(t, "ObjectTypeSpreadProperty"));
      {
        t.key = this.flowParseObjectPropertyKey(), t.static = e, t.proto = s != null, t.kind = a;
        let h = !1;
        return this.match(47) || this.match(10) ? (t.method = !0, s != null && this.unexpected(s), i && this.unexpected(i.loc.start), t.value = this.flowParseObjectTypeMethodish(this.startNodeAt(t.start, t.loc.start)), (a === "get" || a === "set") && this.flowCheckGetterSetterParams(t), !n && t.key.name === "constructor" && t.value.this && this.raise(b.ThisParamBannedInConstructor, {
          at: t.value.this
        })) : (a !== "init" && this.unexpected(), t.method = !1, this.eat(17) && (h = !0), t.value = this.flowParseTypeInitialiser(), t.variance = i), t.optional = h, this.finishNode(t, "ObjectTypeProperty");
      }
    }

    flowCheckGetterSetterParams(t) {
      let e = t.kind === "get" ? 0 : 1,
          s = t.value.params.length + (t.value.rest ? 1 : 0);
      t.value.this && this.raise(t.kind === "get" ? b.GetterMayNotHaveThisParam : b.SetterMayNotHaveThisParam, {
        at: t.value.this
      }), s !== e && this.raise(t.kind === "get" ? l.BadGetterArity : l.BadSetterArity, {
        at: t
      }), t.kind === "set" && t.value.rest && this.raise(l.BadSetterRestParameter, {
        at: t
      });
    }

    flowObjectTypeSemicolon() {
      !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
    }

    flowParseQualifiedTypeIdentifier(t, e, s) {
      t = t || this.state.start, e = e || this.state.startLoc;
      let i = s || this.flowParseRestrictedIdentifier(!0);

      for (; this.eat(16);) {
        let a = this.startNodeAt(t, e);
        a.qualification = i, a.id = this.flowParseRestrictedIdentifier(!0), i = this.finishNode(a, "QualifiedTypeIdentifier");
      }

      return i;
    }

    flowParseGenericType(t, e, s) {
      let i = this.startNodeAt(t, e);
      return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(t, e, s), this.match(47) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
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
      let e = null,
          s = !1,
          i = null,
          a = this.startNode(),
          n = this.lookahead(),
          o = this.state.type === 78;
      return n.type === 14 || n.type === 17 ? (o && !t && this.raise(b.ThisParamMustBeFirst, {
        at: a
      }), e = this.parseIdentifier(o), this.eat(17) && (s = !0, o && this.raise(b.ThisParamMayNotBeOptional, {
        at: a
      })), i = this.flowParseTypeInitialiser()) : i = this.flowParseType(), a.name = e, a.optional = s, a.typeAnnotation = i, this.finishNode(a, "FunctionTypeParam");
    }

    reinterpretTypeAsFunctionTypeParam(t) {
      let e = this.startNodeAt(t.start, t.loc.start);
      return e.name = null, e.optional = !1, e.typeAnnotation = t, this.finishNode(e, "FunctionTypeParam");
    }

    flowParseFunctionTypeParams(t = []) {
      let e = null,
          s = null;

      for (this.match(78) && (s = this.flowParseFunctionTypeParam(!0), s.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21);) t.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);

      return this.eat(21) && (e = this.flowParseFunctionTypeParam(!1)), {
        params: t,
        rest: e,
        _this: s
      };
    }

    flowIdentToTypeAnnotation(t, e, s, i) {
      switch (i.name) {
        case "any":
          return this.finishNode(s, "AnyTypeAnnotation");

        case "bool":
        case "boolean":
          return this.finishNode(s, "BooleanTypeAnnotation");

        case "mixed":
          return this.finishNode(s, "MixedTypeAnnotation");

        case "empty":
          return this.finishNode(s, "EmptyTypeAnnotation");

        case "number":
          return this.finishNode(s, "NumberTypeAnnotation");

        case "string":
          return this.finishNode(s, "StringTypeAnnotation");

        case "symbol":
          return this.finishNode(s, "SymbolTypeAnnotation");

        default:
          return this.checkNotUnderscore(i.name), this.flowParseGenericType(t, e, i);
      }
    }

    flowParsePrimaryType() {
      let t = this.state.start,
          e = this.state.startLoc,
          s = this.startNode(),
          i,
          a,
          n = !1,
          o = this.state.noAnonFunctionType;

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
          return this.state.noAnonFunctionType = !1, a = this.flowParseTupleType(), this.state.noAnonFunctionType = o, a;

        case 47:
          return s.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), this.finishNode(s, "FunctionTypeAnnotation");

        case 10:
          if (this.next(), !this.match(11) && !this.match(21)) if (C(this.state.type) || this.match(78)) {
            let h = this.lookahead().type;
            n = h !== 17 && h !== 14;
          } else n = !0;

          if (n) {
            if (this.state.noAnonFunctionType = !1, a = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19)) return this.expect(11), a;
            this.eat(12);
          }

          return a ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(a)]) : i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");

        case 129:
          return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");

        case 85:
        case 86:
          return s.value = this.match(85), this.next(), this.finishNode(s, "BooleanLiteralTypeAnnotation");

        case 53:
          if (this.state.value === "-") {
            if (this.next(), this.match(130)) return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", s);
            if (this.match(131)) return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", s);
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
          return this.next(), this.finishNode(s, "VoidTypeAnnotation");

        case 84:
          return this.next(), this.finishNode(s, "NullLiteralTypeAnnotation");

        case 78:
          return this.next(), this.finishNode(s, "ThisTypeAnnotation");

        case 55:
          return this.next(), this.finishNode(s, "ExistsTypeAnnotation");

        case 87:
          return this.flowParseTypeofType();

        default:
          if (we(this.state.type)) {
            let h = W(this.state.type);
            return this.next(), super.createIdentifier(s, h);
          } else if (C(this.state.type)) return this.isContextual(125) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(t, e, s, this.parseIdentifier());

      }

      throw this.unexpected();
    }

    flowParsePostfixType() {
      let t = this.state.start,
          e = this.state.startLoc,
          s = this.flowParsePrimaryType(),
          i = !1;

      for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon();) {
        let a = this.startNodeAt(t, e),
            n = this.eat(18);
        i = i || n, this.expect(0), !n && this.match(3) ? (a.elementType = s, this.next(), s = this.finishNode(a, "ArrayTypeAnnotation")) : (a.objectType = s, a.indexType = this.flowParseType(), this.expect(3), i ? (a.optional = n, s = this.finishNode(a, "OptionalIndexedAccessType")) : s = this.finishNode(a, "IndexedAccessType"));
      }

      return s;
    }

    flowParsePrefixType() {
      let t = this.startNode();
      return this.eat(17) ? (t.typeAnnotation = this.flowParsePrefixType(), this.finishNode(t, "NullableTypeAnnotation")) : this.flowParsePostfixType();
    }

    flowParseAnonFunctionWithoutParens() {
      let t = this.flowParsePrefixType();

      if (!this.state.noAnonFunctionType && this.eat(19)) {
        let e = this.startNodeAt(t.start, t.loc.start);
        return e.params = [this.reinterpretTypeAsFunctionTypeParam(t)], e.rest = null, e.this = null, e.returnType = this.flowParseType(), e.typeParameters = null, this.finishNode(e, "FunctionTypeAnnotation");
      }

      return t;
    }

    flowParseIntersectionType() {
      let t = this.startNode();
      this.eat(45);
      let e = this.flowParseAnonFunctionWithoutParens();

      for (t.types = [e]; this.eat(45);) t.types.push(this.flowParseAnonFunctionWithoutParens());

      return t.types.length === 1 ? e : this.finishNode(t, "IntersectionTypeAnnotation");
    }

    flowParseUnionType() {
      let t = this.startNode();
      this.eat(43);
      let e = this.flowParseIntersectionType();

      for (t.types = [e]; this.eat(43);) t.types.push(this.flowParseIntersectionType());

      return t.types.length === 1 ? e : this.finishNode(t, "UnionTypeAnnotation");
    }

    flowParseType() {
      let t = this.state.inType;
      this.state.inType = !0;
      let e = this.flowParseUnionType();
      return this.state.inType = t, e;
    }

    flowParseTypeOrImplicitInstantiation() {
      if (this.state.type === 128 && this.state.value === "_") {
        let t = this.state.start,
            e = this.state.startLoc,
            s = this.parseIdentifier();
        return this.flowParseGenericType(t, e, s);
      } else return this.flowParseType();
    }

    flowParseTypeAnnotation() {
      let t = this.startNode();
      return t.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(t, "TypeAnnotation");
    }

    flowParseTypeAnnotatableIdentifier(t) {
      let e = t ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e)), e;
    }

    typeCastToParameter(t) {
      return t.expression.typeAnnotation = t.typeAnnotation, this.resetEndLocation(t.expression, t.typeAnnotation.loc.end), t.expression;
    }

    flowParseVariance() {
      let t = null;
      return this.match(53) && (t = this.startNode(), this.state.value === "+" ? t.kind = "plus" : t.kind = "minus", this.next(), this.finishNode(t, "Variance")), t;
    }

    parseFunctionBody(t, e, s = !1) {
      return e ? this.forwardNoArrowParamsConversionAt(t, () => super.parseFunctionBody(t, !0, s)) : super.parseFunctionBody(t, !1, s);
    }

    parseFunctionBodyAndFinish(t, e, s = !1) {
      if (this.match(14)) {
        let i = this.startNode();
        [i.typeAnnotation, t.predicate] = this.flowParseTypeAndPredicateInitialiser(), t.returnType = i.typeAnnotation ? this.finishNode(i, "TypeAnnotation") : null;
      }

      super.parseFunctionBodyAndFinish(t, e, s);
    }

    parseStatement(t, e) {
      if (this.state.strict && this.isContextual(125)) {
        let i = this.lookahead();

        if (z(i.type)) {
          let a = this.startNode();
          return this.next(), this.flowParseInterface(a);
        }
      } else if (this.shouldParseEnums() && this.isContextual(122)) {
        let i = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(i);
      }

      let s = super.parseStatement(t, e);
      return this.flowPragma === void 0 && !this.isValidDirective(s) && (this.flowPragma = null), s;
    }

    parseExpressionStatement(t, e) {
      if (e.type === "Identifier") {
        if (e.name === "declare") {
          if (this.match(80) || C(this.state.type) || this.match(68) || this.match(74) || this.match(82)) return this.flowParseDeclare(t);
        } else if (C(this.state.type)) {
          if (e.name === "interface") return this.flowParseInterface(t);
          if (e.name === "type") return this.flowParseTypeAlias(t);
          if (e.name === "opaque") return this.flowParseOpaqueType(t, !1);
        }
      }

      return super.parseExpressionStatement(t, e);
    }

    shouldParseExportDeclaration() {
      let {
        type: t
      } = this.state;
      return Ue(t) || this.shouldParseEnums() && t === 122 ? !this.state.containsEsc : super.shouldParseExportDeclaration();
    }

    isExportDefaultSpecifier() {
      let {
        type: t
      } = this.state;
      return Ue(t) || this.shouldParseEnums() && t === 122 ? this.state.containsEsc : super.isExportDefaultSpecifier();
    }

    parseExportDefaultExpression() {
      if (this.shouldParseEnums() && this.isContextual(122)) {
        let t = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(t);
      }

      return super.parseExportDefaultExpression();
    }

    parseConditional(t, e, s, i) {
      if (!this.match(17)) return t;

      if (this.state.maybeInArrowParameters) {
        let x = this.lookaheadCharCode();
        if (x === 44 || x === 61 || x === 58 || x === 41) return this.setOptionalParametersError(i), t;
      }

      this.expect(17);
      let a = this.state.clone(),
          n = this.state.noArrowAt,
          o = this.startNodeAt(e, s),
          {
        consequent: h,
        failed: c
      } = this.tryParseConditionalConsequent(),
          [u, d] = this.getArrowLikeExpressions(h);

      if (c || d.length > 0) {
        let x = [...n];

        if (d.length > 0) {
          this.state = a, this.state.noArrowAt = x;

          for (let m = 0; m < d.length; m++) x.push(d[m].start);

          ({
            consequent: h,
            failed: c
          } = this.tryParseConditionalConsequent()), [u, d] = this.getArrowLikeExpressions(h);
        }

        c && u.length > 1 && this.raise(b.AmbiguousConditionalArrow, {
          at: a.startLoc
        }), c && u.length === 1 && (this.state = a, x.push(u[0].start), this.state.noArrowAt = x, ({
          consequent: h,
          failed: c
        } = this.tryParseConditionalConsequent()));
      }

      return this.getArrowLikeExpressions(h, !0), this.state.noArrowAt = n, this.expect(14), o.test = t, o.consequent = h, o.alternate = this.forwardNoArrowParamsConversionAt(o, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(o, "ConditionalExpression");
    }

    tryParseConditionalConsequent() {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      let t = this.parseMaybeAssignAllowIn(),
          e = !this.match(14);
      return this.state.noArrowParamsConversionAt.pop(), {
        consequent: t,
        failed: e
      };
    }

    getArrowLikeExpressions(t, e) {
      let s = [t],
          i = [];

      for (; s.length !== 0;) {
        let a = s.pop();
        a.type === "ArrowFunctionExpression" ? (a.typeParameters || !a.returnType ? this.finishArrowValidation(a) : i.push(a), s.push(a.body)) : a.type === "ConditionalExpression" && (s.push(a.consequent), s.push(a.alternate));
      }

      return e ? (i.forEach(a => this.finishArrowValidation(a)), [i, []]) : Ui(i, a => a.params.every(n => this.isAssignable(n, !0)));
    }

    finishArrowValidation(t) {
      var e;
      this.toAssignableList(t.params, (e = t.extra) == null ? void 0 : e.trailingCommaLoc, !1), this.scope.enter(j | Ee), super.checkParams(t, !1, !0), this.scope.exit();
    }

    forwardNoArrowParamsConversionAt(t, e) {
      let s;
      return this.state.noArrowParamsConversionAt.indexOf(t.start) !== -1 ? (this.state.noArrowParamsConversionAt.push(this.state.start), s = e(), this.state.noArrowParamsConversionAt.pop()) : s = e(), s;
    }

    parseParenItem(t, e, s) {
      if (t = super.parseParenItem(t, e, s), this.eat(17) && (t.optional = !0, this.resetEndLocation(t)), this.match(14)) {
        let i = this.startNodeAt(e, s);
        return i.expression = t, i.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(i, "TypeCastExpression");
      }

      return t;
    }

    assertModuleNodeAllowed(t) {
      t.type === "ImportDeclaration" && (t.importKind === "type" || t.importKind === "typeof") || t.type === "ExportNamedDeclaration" && t.exportKind === "type" || t.type === "ExportAllDeclaration" && t.exportKind === "type" || super.assertModuleNodeAllowed(t);
    }

    parseExport(t) {
      let e = super.parseExport(t);
      return (e.type === "ExportNamedDeclaration" || e.type === "ExportAllDeclaration") && (e.exportKind = e.exportKind || "value"), e;
    }

    parseExportDeclaration(t) {
      if (this.isContextual(126)) {
        t.exportKind = "type";
        let e = this.startNode();
        return this.next(), this.match(5) ? (t.specifiers = this.parseExportSpecifiers(!0), this.parseExportFrom(t), null) : this.flowParseTypeAlias(e);
      } else if (this.isContextual(127)) {
        t.exportKind = "type";
        let e = this.startNode();
        return this.next(), this.flowParseOpaqueType(e, !1);
      } else if (this.isContextual(125)) {
        t.exportKind = "type";
        let e = this.startNode();
        return this.next(), this.flowParseInterface(e);
      } else if (this.shouldParseEnums() && this.isContextual(122)) {
        t.exportKind = "value";
        let e = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(e);
      } else return super.parseExportDeclaration(t);
    }

    eatExportStar(t) {
      return super.eatExportStar(...arguments) ? !0 : this.isContextual(126) && this.lookahead().type === 55 ? (t.exportKind = "type", this.next(), this.next(), !0) : !1;
    }

    maybeParseExportNamespaceSpecifier(t) {
      let {
        startLoc: e
      } = this.state,
          s = super.maybeParseExportNamespaceSpecifier(t);
      return s && t.exportKind === "type" && this.unexpected(e), s;
    }

    parseClassId(t, e, s) {
      super.parseClassId(t, e, s), this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration());
    }

    parseClassMember(t, e, s) {
      let {
        startLoc: i
      } = this.state;

      if (this.isContextual(121)) {
        if (this.parseClassMemberFromModifier(t, e)) return;
        e.declare = !0;
      }

      super.parseClassMember(t, e, s), e.declare && (e.type !== "ClassProperty" && e.type !== "ClassPrivateProperty" && e.type !== "PropertyDefinition" ? this.raise(b.DeclareClassElement, {
        at: i
      }) : e.value && this.raise(b.DeclareClassFieldInitializer, {
        at: e.value
      }));
    }

    isIterator(t) {
      return t === "iterator" || t === "asyncIterator";
    }

    readIterator() {
      let t = super.readWord1(),
          e = "@@" + t;
      (!this.isIterator(t) || !this.state.inType) && this.raise(l.InvalidIdentifier, {
        at: this.state.curPosition(),
        identifierName: e
      }), this.finishToken(128, e);
    }

    getTokenFromCode(t) {
      let e = this.input.charCodeAt(this.state.pos + 1);
      return t === 123 && e === 124 ? this.finishOp(6, 2) : this.state.inType && (t === 62 || t === 60) ? this.finishOp(t === 62 ? 48 : 47, 1) : this.state.inType && t === 63 ? e === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : ci(t, e, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(t);
    }

    isAssignable(t, e) {
      return t.type === "TypeCastExpression" ? this.isAssignable(t.expression, e) : super.isAssignable(t, e);
    }

    toAssignable(t, e = !1) {
      !e && t.type === "AssignmentExpression" && t.left.type === "TypeCastExpression" && (t.left = this.typeCastToParameter(t.left)), super.toAssignable(...arguments);
    }

    toAssignableList(t, e, s) {
      for (let i = 0; i < t.length; i++) {
        let a = t[i];
        a?.type === "TypeCastExpression" && (t[i] = this.typeCastToParameter(a));
      }

      super.toAssignableList(t, e, s);
    }

    toReferencedList(t, e) {
      for (let i = 0; i < t.length; i++) {
        var s;
        let a = t[i];
        a && a.type === "TypeCastExpression" && !((s = a.extra) != null && s.parenthesized) && (t.length > 1 || !e) && this.raise(b.TypeCastInPattern, {
          at: a.typeAnnotation
        });
      }

      return t;
    }

    parseArrayLike(t, e, s, i) {
      let a = super.parseArrayLike(t, e, s, i);
      return e && !this.state.maybeInArrowParameters && this.toReferencedList(a.elements), a;
    }

    isValidLVal(t, ...e) {
      return t === "TypeCastExpression" || super.isValidLVal(t, ...e);
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

    pushClassMethod(t, e, s, i, a, n) {
      if (e.variance && this.unexpected(e.variance.loc.start), delete e.variance, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(t, e, s, i, a, n), e.params && a) {
        let o = e.params;
        o.length > 0 && this.isThisParam(o[0]) && this.raise(b.ThisParamBannedInConstructor, {
          at: e
        });
      } else if (e.type === "MethodDefinition" && a && e.value.params) {
        let o = e.value.params;
        o.length > 0 && this.isThisParam(o[0]) && this.raise(b.ThisParamBannedInConstructor, {
          at: e
        });
      }
    }

    pushClassPrivateMethod(t, e, s, i) {
      e.variance && this.unexpected(e.variance.loc.start), delete e.variance, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(t, e, s, i);
    }

    parseClassSuper(t) {
      if (super.parseClassSuper(t), t.superClass && this.match(47) && (t.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(110)) {
        this.next();
        let e = t.implements = [];

        do {
          let s = this.startNode();
          s.id = this.flowParseRestrictedIdentifier(!0), this.match(47) ? s.typeParameters = this.flowParseTypeParameterInstantiation() : s.typeParameters = null, e.push(this.finishNode(s, "ClassImplements"));
        } while (this.eat(12));
      }
    }

    checkGetterSetterParams(t) {
      super.checkGetterSetterParams(t);
      let e = this.getObjectOrClassMethodParams(t);

      if (e.length > 0) {
        let s = e[0];
        this.isThisParam(s) && t.kind === "get" ? this.raise(b.GetterMayNotHaveThisParam, {
          at: s
        }) : this.isThisParam(s) && this.raise(b.SetterMayNotHaveThisParam, {
          at: s
        });
      }
    }

    parsePropertyNamePrefixOperator(t) {
      t.variance = this.flowParseVariance();
    }

    parseObjPropValue(t, e, s, i, a, n, o, h) {
      t.variance && this.unexpected(t.variance.loc.start), delete t.variance;
      let c;
      this.match(47) && !o && (c = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected()), super.parseObjPropValue(t, e, s, i, a, n, o, h), c && ((t.value || t).typeParameters = c);
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

    parseMaybeDefault(t, e, s) {
      let i = super.parseMaybeDefault(t, e, s);
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(b.TypeBeforeInitializer, {
        at: i.typeAnnotation
      }), i;
    }

    shouldParseDefaultImport(t) {
      return ae(t) ? Ve(this.state.type) : super.shouldParseDefaultImport(t);
    }

    parseImportSpecifierLocal(t, e, s) {
      e.local = ae(t) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(e, s));
    }

    maybeParseDefaultImportSpecifier(t) {
      t.importKind = "value";
      let e = null;

      if (this.match(87) ? e = "typeof" : this.isContextual(126) && (e = "type"), e) {
        let s = this.lookahead(),
            {
          type: i
        } = s;
        e === "type" && i === 55 && this.unexpected(null, s.type), (Ve(i) || i === 5 || i === 55) && (this.next(), t.importKind = e);
      }

      return super.maybeParseDefaultImportSpecifier(t);
    }

    parseImportSpecifier(t, e, s, i) {
      let a = t.imported,
          n = null;
      a.type === "Identifier" && (a.name === "type" ? n = "type" : a.name === "typeof" && (n = "typeof"));
      let o = !1;

      if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
        let c = this.parseIdentifier(!0);
        n !== null && !z(this.state.type) ? (t.imported = c, t.importKind = n, t.local = V(c)) : (t.imported = a, t.importKind = null, t.local = this.parseIdentifier());
      } else {
        if (n !== null && z(this.state.type)) t.imported = this.parseIdentifier(!0), t.importKind = n;else {
          if (e) throw this.raise(l.ImportBindingIsString, {
            at: t,
            importName: a.value
          });
          t.imported = a, t.importKind = null;
        }
        this.eatContextual(93) ? t.local = this.parseIdentifier() : (o = !0, t.local = V(t.imported));
      }

      let h = ae(t);
      return s && h && this.raise(b.ImportTypeShorthandOnlyInPureImport, {
        at: t
      }), (s || h) && this.checkReservedType(t.local.name, t.local.loc.start, !0), o && !s && !h && this.checkReservedWord(t.local.name, t.loc.start, !0, !0), this.finishImportSpecifier(t, "ImportSpecifier");
    }

    parseBindingAtom() {
      switch (this.state.type) {
        case 78:
          return this.parseIdentifier(!0);

        default:
          return super.parseBindingAtom();
      }
    }

    parseFunctionParams(t, e) {
      let s = t.kind;
      s !== "get" && s !== "set" && this.match(47) && (t.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(t, e);
    }

    parseVarId(t, e) {
      super.parseVarId(t, e), this.match(14) && (t.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(t.id));
    }

    parseAsyncArrowFromCallExpression(t, e) {
      if (this.match(14)) {
        let s = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = !0, t.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = s;
      }

      return super.parseAsyncArrowFromCallExpression(t, e);
    }

    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }

    parseMaybeAssign(t, e) {
      var s;
      let i = null,
          a;

      if (this.hasPlugin("jsx") && (this.match(138) || this.match(47))) {
        if (i = this.state.clone(), a = this.tryParse(() => super.parseMaybeAssign(t, e), i), !a.error) return a.node;
        let {
          context: h
        } = this.state,
            c = h[h.length - 1];
        (c === E.j_oTag || c === E.j_expr) && h.pop();
      }

      if ((s = a) != null && s.error || this.match(47)) {
        var n, o;
        i = i || this.state.clone();
        let h,
            c = this.tryParse(d => {
          var x;
          h = this.flowParseTypeParameterDeclaration();
          let m = this.forwardNoArrowParamsConversionAt(h, () => {
            let S = super.parseMaybeAssign(t, e);
            return this.resetStartLocationFromNode(S, h), S;
          });
          (x = m.extra) != null && x.parenthesized && d();
          let T = this.maybeUnwrapTypeCastExpression(m);
          return T.type !== "ArrowFunctionExpression" && d(), T.typeParameters = h, this.resetStartLocationFromNode(T, h), m;
        }, i),
            u = null;

        if (c.node && this.maybeUnwrapTypeCastExpression(c.node).type === "ArrowFunctionExpression") {
          if (!c.error && !c.aborted) return c.node.async && this.raise(b.UnexpectedTypeParameterBeforeAsyncArrowFunction, {
            at: h
          }), c.node;
          u = c.node;
        }

        if ((n = a) != null && n.node) return this.state = a.failState, a.node;
        if (u) return this.state = c.failState, u;
        throw (o = a) != null && o.thrown ? a.error : c.thrown ? c.error : this.raise(b.UnexpectedTokenAfterTypeParameter, {
          at: h
        });
      }

      return super.parseMaybeAssign(t, e);
    }

    parseArrow(t) {
      if (this.match(14)) {
        let e = this.tryParse(() => {
          let s = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = !0;
          let i = this.startNode();
          return [i.typeAnnotation, t.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = s, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), i;
        });
        if (e.thrown) return null;
        e.error && (this.state = e.failState), t.returnType = e.node.typeAnnotation ? this.finishNode(e.node, "TypeAnnotation") : null;
      }

      return super.parseArrow(t);
    }

    shouldParseArrow(t) {
      return this.match(14) || super.shouldParseArrow(t);
    }

    setArrowFunctionParameters(t, e) {
      this.state.noArrowParamsConversionAt.indexOf(t.start) !== -1 ? t.params = e : super.setArrowFunctionParameters(t, e);
    }

    checkParams(t, e, s) {
      if (!(s && this.state.noArrowParamsConversionAt.indexOf(t.start) !== -1)) {
        for (let i = 0; i < t.params.length; i++) this.isThisParam(t.params[i]) && i > 0 && this.raise(b.ThisParamMustBeFirst, {
          at: t.params[i]
        });

        return super.checkParams(...arguments);
      }
    }

    parseParenAndDistinguishExpression(t) {
      return super.parseParenAndDistinguishExpression(t && this.state.noArrowAt.indexOf(this.state.start) === -1);
    }

    parseSubscripts(t, e, s, i) {
      if (t.type === "Identifier" && t.name === "async" && this.state.noArrowAt.indexOf(e) !== -1) {
        this.next();
        let a = this.startNodeAt(e, s);
        a.callee = t, a.arguments = this.parseCallExpressionArguments(11, !1), t = this.finishNode(a, "CallExpression");
      } else if (t.type === "Identifier" && t.name === "async" && this.match(47)) {
        let a = this.state.clone(),
            n = this.tryParse(h => this.parseAsyncArrowWithTypeParameters(e, s) || h(), a);
        if (!n.error && !n.aborted) return n.node;
        let o = this.tryParse(() => super.parseSubscripts(t, e, s, i), a);
        if (o.node && !o.error) return o.node;
        if (n.node) return this.state = n.failState, n.node;
        if (o.node) return this.state = o.failState, o.node;
        throw n.error || o.error;
      }

      return super.parseSubscripts(t, e, s, i);
    }

    parseSubscript(t, e, s, i, a) {
      if (this.match(18) && this.isLookaheadToken_lt()) {
        if (a.optionalChainMember = !0, i) return a.stop = !0, t;
        this.next();
        let n = this.startNodeAt(e, s);
        return n.callee = t, n.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), n.arguments = this.parseCallExpressionArguments(11, !1), n.optional = !0, this.finishCallExpression(n, !0);
      } else if (!i && this.shouldParseTypes() && this.match(47)) {
        let n = this.startNodeAt(e, s);
        n.callee = t;
        let o = this.tryParse(() => (n.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), n.arguments = this.parseCallExpressionArguments(11, !1), a.optionalChainMember && (n.optional = !1), this.finishCallExpression(n, a.optionalChainMember)));
        if (o.node) return o.error && (this.state = o.failState), o.node;
      }

      return super.parseSubscript(t, e, s, i, a);
    }

    parseNewCallee(t) {
      super.parseNewCallee(t);
      let e = null;
      this.shouldParseTypes() && this.match(47) && (e = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), t.typeArguments = e;
    }

    parseAsyncArrowWithTypeParameters(t, e) {
      let s = this.startNodeAt(t, e);
      if (this.parseFunctionParams(s), !!this.parseArrow(s)) return this.parseArrowExpression(s, void 0, !0);
    }

    readToken_mult_modulo(t) {
      let e = this.input.charCodeAt(this.state.pos + 1);

      if (t === 42 && e === 47 && this.state.hasFlowComment) {
        this.state.hasFlowComment = !1, this.state.pos += 2, this.nextToken();
        return;
      }

      super.readToken_mult_modulo(t);
    }

    readToken_pipe_amp(t) {
      let e = this.input.charCodeAt(this.state.pos + 1);

      if (t === 124 && e === 125) {
        this.finishOp(9, 2);
        return;
      }

      super.readToken_pipe_amp(t);
    }

    parseTopLevel(t, e) {
      let s = super.parseTopLevel(t, e);
      return this.state.hasFlowComment && this.raise(b.UnterminatedFlowComment, {
        at: this.state.curPosition()
      }), s;
    }

    skipBlockComment() {
      if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
        if (this.state.hasFlowComment) throw this.raise(b.NestedFlowComment, {
          at: this.state.startLoc
        });
        this.hasFlowCommentCompletion(), this.state.pos += this.skipFlowComment(), this.state.hasFlowComment = !0;
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
          e = 2;

      for (; [32, 9].includes(this.input.charCodeAt(t + e));) e++;

      let s = this.input.charCodeAt(e + t),
          i = this.input.charCodeAt(e + t + 1);
      return s === 58 && i === 58 ? e + 2 : this.input.slice(e + t, e + t + 12) === "flow-include" ? e + 12 : s === 58 && i !== 58 ? e : !1;
    }

    hasFlowCommentCompletion() {
      if (this.input.indexOf("*/", this.state.pos) === -1) throw this.raise(l.UnterminatedComment, {
        at: this.state.curPosition()
      });
    }

    flowEnumErrorBooleanMemberNotInitialized(t, {
      enumName: e,
      memberName: s
    }) {
      this.raise(b.EnumBooleanMemberNotInitialized, {
        at: t,
        memberName: s,
        enumName: e
      });
    }

    flowEnumErrorInvalidMemberInitializer(t, e) {
      return this.raise(e.explicitType ? e.explicitType === "symbol" ? b.EnumInvalidMemberInitializerSymbolType : b.EnumInvalidMemberInitializerPrimaryType : b.EnumInvalidMemberInitializerUnknownType, Object.assign({
        at: t
      }, e));
    }

    flowEnumErrorNumberMemberNotInitialized(t, {
      enumName: e,
      memberName: s
    }) {
      this.raise(b.EnumNumberMemberNotInitialized, {
        at: t,
        enumName: e,
        memberName: s
      });
    }

    flowEnumErrorStringMemberInconsistentlyInitailized(t, {
      enumName: e
    }) {
      this.raise(b.EnumStringMemberInconsistentlyInitailized, {
        at: t,
        enumName: e
      });
    }

    flowEnumMemberInit() {
      let t = this.state.startLoc,
          e = p(() => this.match(12) || this.match(8), "endOfInit");

      switch (this.state.type) {
        case 130:
          {
            let s = this.parseNumericLiteral(this.state.value);
            return e() ? {
              type: "number",
              loc: s.loc.start,
              value: s
            } : {
              type: "invalid",
              loc: t
            };
          }

        case 129:
          {
            let s = this.parseStringLiteral(this.state.value);
            return e() ? {
              type: "string",
              loc: s.loc.start,
              value: s
            } : {
              type: "invalid",
              loc: t
            };
          }

        case 85:
        case 86:
          {
            let s = this.parseBooleanLiteral(this.match(85));
            return e() ? {
              type: "boolean",
              loc: s.loc.start,
              value: s
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
          e = this.parseIdentifier(!0),
          s = this.eat(29) ? this.flowEnumMemberInit() : {
        type: "none",
        loc: t
      };
      return {
        id: e,
        init: s
      };
    }

    flowEnumCheckExplicitTypeMismatch(t, e, s) {
      let {
        explicitType: i
      } = e;
      i !== null && i !== s && this.flowEnumErrorInvalidMemberInitializer(t, e);
    }

    flowEnumMembers({
      enumName: t,
      explicitType: e
    }) {
      let s = new Set(),
          i = {
        booleanMembers: [],
        numberMembers: [],
        stringMembers: [],
        defaultedMembers: []
      },
          a = !1;

      for (; !this.match(8);) {
        if (this.eat(21)) {
          a = !0;
          break;
        }

        let n = this.startNode(),
            {
          id: o,
          init: h
        } = this.flowEnumMemberRaw(),
            c = o.name;
        if (c === "") continue;
        /^[a-z]/.test(c) && this.raise(b.EnumInvalidMemberName, {
          at: o,
          memberName: c,
          suggestion: c[0].toUpperCase() + c.slice(1),
          enumName: t
        }), s.has(c) && this.raise(b.EnumDuplicateMemberName, {
          at: o,
          memberName: c,
          enumName: t
        }), s.add(c);
        let u = {
          enumName: t,
          explicitType: e,
          memberName: c
        };

        switch (n.id = o, h.type) {
          case "boolean":
            {
              this.flowEnumCheckExplicitTypeMismatch(h.loc, u, "boolean"), n.init = h.value, i.booleanMembers.push(this.finishNode(n, "EnumBooleanMember"));
              break;
            }

          case "number":
            {
              this.flowEnumCheckExplicitTypeMismatch(h.loc, u, "number"), n.init = h.value, i.numberMembers.push(this.finishNode(n, "EnumNumberMember"));
              break;
            }

          case "string":
            {
              this.flowEnumCheckExplicitTypeMismatch(h.loc, u, "string"), n.init = h.value, i.stringMembers.push(this.finishNode(n, "EnumStringMember"));
              break;
            }

          case "invalid":
            throw this.flowEnumErrorInvalidMemberInitializer(h.loc, u);

          case "none":
            switch (e) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(h.loc, u);
                break;

              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(h.loc, u);
                break;

              default:
                i.defaultedMembers.push(this.finishNode(n, "EnumDefaultedMember"));
            }

        }

        this.match(8) || this.expect(12);
      }

      return {
        members: i,
        hasUnknownMembers: a
      };
    }

    flowEnumStringMembers(t, e, {
      enumName: s
    }) {
      if (t.length === 0) return e;
      if (e.length === 0) return t;

      if (e.length > t.length) {
        for (let i of t) this.flowEnumErrorStringMemberInconsistentlyInitailized(i, {
          enumName: s
        });

        return e;
      } else {
        for (let i of e) this.flowEnumErrorStringMemberInconsistentlyInitailized(i, {
          enumName: s
        });

        return t;
      }
    }

    flowEnumParseExplicitType({
      enumName: t
    }) {
      if (!this.eatContextual(101)) return null;
      if (!C(this.state.type)) throw this.raise(b.EnumInvalidExplicitTypeUnknownSupplied, {
        at: this.state.startLoc,
        enumName: t
      });
      let {
        value: e
      } = this.state;
      return this.next(), e !== "boolean" && e !== "number" && e !== "string" && e !== "symbol" && this.raise(b.EnumInvalidExplicitType, {
        at: this.state.startLoc,
        enumName: t,
        invalidEnumType: e
      }), e;
    }

    flowEnumBody(t, e) {
      let s = e.name,
          i = e.loc.start,
          a = this.flowEnumParseExplicitType({
        enumName: s
      });
      this.expect(5);
      let {
        members: n,
        hasUnknownMembers: o
      } = this.flowEnumMembers({
        enumName: s,
        explicitType: a
      });

      switch (t.hasUnknownMembers = o, a) {
        case "boolean":
          return t.explicitType = !0, t.members = n.booleanMembers, this.expect(8), this.finishNode(t, "EnumBooleanBody");

        case "number":
          return t.explicitType = !0, t.members = n.numberMembers, this.expect(8), this.finishNode(t, "EnumNumberBody");

        case "string":
          return t.explicitType = !0, t.members = this.flowEnumStringMembers(n.stringMembers, n.defaultedMembers, {
            enumName: s
          }), this.expect(8), this.finishNode(t, "EnumStringBody");

        case "symbol":
          return t.members = n.defaultedMembers, this.expect(8), this.finishNode(t, "EnumSymbolBody");

        default:
          {
            let h = p(() => (t.members = [], this.expect(8), this.finishNode(t, "EnumStringBody")), "empty");
            t.explicitType = !1;
            let c = n.booleanMembers.length,
                u = n.numberMembers.length,
                d = n.stringMembers.length,
                x = n.defaultedMembers.length;
            if (!c && !u && !d && !x) return h();
            if (!c && !u) return t.members = this.flowEnumStringMembers(n.stringMembers, n.defaultedMembers, {
              enumName: s
            }), this.expect(8), this.finishNode(t, "EnumStringBody");

            if (!u && !d && c >= x) {
              for (let m of n.defaultedMembers) this.flowEnumErrorBooleanMemberNotInitialized(m.loc.start, {
                enumName: s,
                memberName: m.id.name
              });

              return t.members = n.booleanMembers, this.expect(8), this.finishNode(t, "EnumBooleanBody");
            } else if (!c && !d && u >= x) {
              for (let m of n.defaultedMembers) this.flowEnumErrorNumberMemberNotInitialized(m.loc.start, {
                enumName: s,
                memberName: m.id.name
              });

              return t.members = n.numberMembers, this.expect(8), this.finishNode(t, "EnumNumberBody");
            } else return this.raise(b.EnumInconsistentMemberValues, {
              at: i,
              enumName: s
            }), h();
          }
      }
    }

    flowParseEnumDeclaration(t) {
      let e = this.parseIdentifier();
      return t.id = e, t.body = this.flowEnumBody(this.startNode(), e), this.finishNode(t, "EnumDeclaration");
    }

    isLookaheadToken_lt() {
      let t = this.nextTokenStart();

      if (this.input.charCodeAt(t) === 60) {
        let e = this.input.charCodeAt(t + 1);
        return e !== 60 && e !== 61;
      }

      return !1;
    }

    maybeUnwrapTypeCastExpression(t) {
      return t.type === "TypeCastExpression" ? t.expression : t;
    }

  }, "flow"),
      zi = {
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
      J = U`jsx`(r => ({
    AttributeIsEmpty: r("JSX attributes must only be assigned a non-empty expression."),
    MissingClosingTagElement: r(({
      openingTagName: t
    }) => `Expected corresponding JSX closing tag for <${t}>.`),
    MissingClosingTagFragment: r("Expected corresponding JSX closing tag for <>."),
    UnexpectedSequenceExpression: r("Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?"),
    UnexpectedToken: r(({
      unexpected: t,
      HTMLEntity: e
    }) => `Unexpected token \`${t}\`. Did you mean \`${e}\` or \`{'${t}'}\`?`),
    UnsupportedJsxValue: r("JSX value should be either an expression or a quoted JSX text."),
    UnterminatedJsxContent: r("Unterminated JSX contents."),
    UnwrappedAdjacentJSXElements: r("Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?")
  }));

  function H(r) {
    return r ? r.type === "JSXOpeningFragment" || r.type === "JSXClosingFragment" : !1;
  }

  p(H, "isFragment");

  function at(r) {
    if (r.type === "JSXIdentifier") return r.name;
    if (r.type === "JSXNamespacedName") return r.namespace.name + ":" + r.name.name;
    if (r.type === "JSXMemberExpression") return at(r.object) + "." + at(r.property);
    throw new Error("Node had unexpected type: " + r.type);
  }

  p(at, "getQualifiedJSXName");
  var Vi = p(r => class extends r {
    jsxReadToken() {
      let t = "",
          e = this.state.pos;

      for (;;) {
        if (this.state.pos >= this.length) throw this.raise(J.UnterminatedJsxContent, {
          at: this.state.startLoc
        });
        let s = this.input.charCodeAt(this.state.pos);

        switch (s) {
          case 60:
          case 123:
            return this.state.pos === this.state.start ? s === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(138)) : super.getTokenFromCode(s) : (t += this.input.slice(e, this.state.pos), this.finishToken(137, t));

          case 38:
            t += this.input.slice(e, this.state.pos), t += this.jsxReadEntity(), e = this.state.pos;
            break;

          case 62:
          case 125:
          default:
            Y(s) ? (t += this.input.slice(e, this.state.pos), t += this.jsxReadNewLine(!0), e = this.state.pos) : ++this.state.pos;
        }
      }
    }

    jsxReadNewLine(t) {
      let e = this.input.charCodeAt(this.state.pos),
          s;
      return ++this.state.pos, e === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, s = t ? `
` : `\r
`) : s = String.fromCharCode(e), ++this.state.curLine, this.state.lineStart = this.state.pos, s;
    }

    jsxReadString(t) {
      let e = "",
          s = ++this.state.pos;

      for (;;) {
        if (this.state.pos >= this.length) throw this.raise(l.UnterminatedString, {
          at: this.state.startLoc
        });
        let i = this.input.charCodeAt(this.state.pos);
        if (i === t) break;
        i === 38 ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos) : Y(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(!1), s = this.state.pos) : ++this.state.pos;
      }

      return e += this.input.slice(s, this.state.pos++), this.finishToken(129, e);
    }

    jsxReadEntity() {
      let t = ++this.state.pos;

      if (this.codePointAtPos(this.state.pos) === 35) {
        ++this.state.pos;
        let e = 10;
        this.codePointAtPos(this.state.pos) === 120 && (e = 16, ++this.state.pos);
        let s = this.readInt(e, void 0, !1, "bail");
        if (s !== null && this.codePointAtPos(this.state.pos) === 59) return ++this.state.pos, String.fromCodePoint(s);
      } else {
        let e = 0,
            s = !1;

        for (; e++ < 10 && this.state.pos < this.length && !(s = this.codePointAtPos(this.state.pos) == 59);) ++this.state.pos;

        if (s) {
          let i = this.input.slice(t, this.state.pos),
              a = zi[i];
          if (++this.state.pos, a) return a;
        }
      }

      return this.state.pos = t, "&";
    }

    jsxReadWord() {
      let t,
          e = this.state.pos;

      do t = this.input.charCodeAt(++this.state.pos); while (nt(t) || t === 45);

      return this.finishToken(136, this.input.slice(e, this.state.pos));
    }

    jsxParseIdentifier() {
      let t = this.startNode();
      return this.match(136) ? t.name = this.state.value : we(this.state.type) ? t.name = W(this.state.type) : this.unexpected(), this.next(), this.finishNode(t, "JSXIdentifier");
    }

    jsxParseNamespacedName() {
      let t = this.state.start,
          e = this.state.startLoc,
          s = this.jsxParseIdentifier();
      if (!this.eat(14)) return s;
      let i = this.startNodeAt(t, e);
      return i.namespace = s, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
    }

    jsxParseElementName() {
      let t = this.state.start,
          e = this.state.startLoc,
          s = this.jsxParseNamespacedName();
      if (s.type === "JSXNamespacedName") return s;

      for (; this.eat(16);) {
        let i = this.startNodeAt(t, e);
        i.object = s, i.property = this.jsxParseIdentifier(), s = this.finishNode(i, "JSXMemberExpression");
      }

      return s;
    }

    jsxParseAttributeValue() {
      let t;

      switch (this.state.type) {
        case 5:
          return t = this.startNode(), this.setContext(E.brace), this.next(), t = this.jsxParseExpressionContainer(t, E.j_oTag), t.expression.type === "JSXEmptyExpression" && this.raise(J.AttributeIsEmpty, {
            at: t
          }), t;

        case 138:
        case 129:
          return this.parseExprAtom();

        default:
          throw this.raise(J.UnsupportedJsxValue, {
            at: this.state.startLoc
          });
      }
    }

    jsxParseEmptyExpression() {
      let t = this.startNodeAt(this.state.lastTokEndLoc.index, this.state.lastTokEndLoc);
      return this.finishNodeAt(t, "JSXEmptyExpression", this.state.startLoc);
    }

    jsxParseSpreadChild(t) {
      return this.next(), t.expression = this.parseExpression(), this.setContext(E.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(t, "JSXSpreadChild");
    }

    jsxParseExpressionContainer(t, e) {
      if (this.match(8)) t.expression = this.jsxParseEmptyExpression();else {
        let s = this.parseExpression();
        t.expression = s;
      }
      return this.setContext(e), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(t, "JSXExpressionContainer");
    }

    jsxParseAttribute() {
      let t = this.startNode();
      return this.match(5) ? (this.setContext(E.brace), this.next(), this.expect(21), t.argument = this.parseMaybeAssignAllowIn(), this.setContext(E.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(t, "JSXSpreadAttribute")) : (t.name = this.jsxParseNamespacedName(), t.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(t, "JSXAttribute"));
    }

    jsxParseOpeningElementAt(t, e) {
      let s = this.startNodeAt(t, e);
      return this.eat(139) ? this.finishNode(s, "JSXOpeningFragment") : (s.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(s));
    }

    jsxParseOpeningElementAfterName(t) {
      let e = [];

      for (; !this.match(56) && !this.match(139);) e.push(this.jsxParseAttribute());

      return t.attributes = e, t.selfClosing = this.eat(56), this.expect(139), this.finishNode(t, "JSXOpeningElement");
    }

    jsxParseClosingElementAt(t, e) {
      let s = this.startNodeAt(t, e);
      return this.eat(139) ? this.finishNode(s, "JSXClosingFragment") : (s.name = this.jsxParseElementName(), this.expect(139), this.finishNode(s, "JSXClosingElement"));
    }

    jsxParseElementAt(t, e) {
      let s = this.startNodeAt(t, e),
          i = [],
          a = this.jsxParseOpeningElementAt(t, e),
          n = null;

      if (!a.selfClosing) {
        t: for (;;) switch (this.state.type) {
          case 138:
            if (t = this.state.start, e = this.state.startLoc, this.next(), this.eat(56)) {
              n = this.jsxParseClosingElementAt(t, e);
              break t;
            }

            i.push(this.jsxParseElementAt(t, e));
            break;

          case 137:
            i.push(this.parseExprAtom());
            break;

          case 5:
            {
              let o = this.startNode();
              this.setContext(E.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o, E.j_expr));
              break;
            }

          default:
            throw this.unexpected();
        }

        H(a) && !H(n) && n !== null ? this.raise(J.MissingClosingTagFragment, {
          at: n
        }) : !H(a) && H(n) ? this.raise(J.MissingClosingTagElement, {
          at: n,
          openingTagName: at(a.name)
        }) : !H(a) && !H(n) && at(n.name) !== at(a.name) && this.raise(J.MissingClosingTagElement, {
          at: n,
          openingTagName: at(a.name)
        });
      }

      if (H(a) ? (s.openingFragment = a, s.closingFragment = n) : (s.openingElement = a, s.closingElement = n), s.children = i, this.match(47)) throw this.raise(J.UnwrappedAdjacentJSXElements, {
        at: this.state.startLoc
      });
      return H(a) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement");
    }

    jsxParseElement() {
      let t = this.state.start,
          e = this.state.startLoc;
      return this.next(), this.jsxParseElementAt(t, e);
    }

    setContext(t) {
      let {
        context: e
      } = this.state;
      e[e.length - 1] = t;
    }

    parseExprAtom(t) {
      return this.match(137) ? this.parseLiteral(this.state.value, "JSXText") : this.match(138) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(138), this.jsxParseElement()) : super.parseExprAtom(t);
    }

    skipSpace() {
      this.curContext().preserveSpace || super.skipSpace();
    }

    getTokenFromCode(t) {
      let e = this.curContext();
      if (e === E.j_expr) return this.jsxReadToken();

      if (e === E.j_oTag || e === E.j_cTag) {
        if (R(t)) return this.jsxReadWord();
        if (t === 62) return ++this.state.pos, this.finishToken(139);
        if ((t === 34 || t === 39) && e === E.j_oTag) return this.jsxReadString(t);
      }

      return t === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33 ? (++this.state.pos, this.finishToken(138)) : super.getTokenFromCode(t);
    }

    updateContext(t) {
      let {
        context: e,
        type: s
      } = this.state;
      if (s === 56 && t === 138) e.splice(-2, 2, E.j_cTag), this.state.canStartJSXElement = !1;else if (s === 138) e.push(E.j_oTag);else if (s === 139) {
        let i = e[e.length - 1];
        i === E.j_oTag && t === 56 || i === E.j_cTag ? (e.pop(), this.state.canStartJSXElement = e[e.length - 1] === E.j_expr) : (this.setContext(E.j_expr), this.state.canStartJSXElement = !0);
      } else this.state.canStartJSXElement = _s(s);
    }

  }, "jsx"),
      Vt = class extends ht {
    constructor(...t) {
      super(...t), this.types = new Set(), this.enums = new Set(), this.constEnums = new Set(), this.classes = new Set(), this.exportOnlyBindings = new Set();
    }

  };
  p(Vt, "TypeScriptScope");
  var qt = class extends ct {
    createScope(t) {
      return new Vt(t);
    }

    declareName(t, e, s) {
      let i = this.currentScope();

      if (e & Ie) {
        this.maybeExportDefined(i, t), i.exportOnlyBindings.add(t);
        return;
      }

      super.declareName(...arguments), e & ut && (e & q || (this.checkRedeclarationInScope(i, t, e, s), this.maybeExportDefined(i, t)), i.types.add(t)), e & me && i.enums.add(t), e & ye && i.constEnums.add(t), e & Jt && i.classes.add(t);
    }

    isRedeclaredInScope(t, e, s) {
      if (t.enums.has(e)) {
        if (s & me) {
          let i = !!(s & ye),
              a = t.constEnums.has(e);
          return i !== a;
        }

        return !0;
      }

      return s & Jt && t.classes.has(e) ? t.lexical.has(e) ? !!(s & q) : !1 : s & ut && t.types.has(e) ? !0 : super.isRedeclaredInScope(...arguments);
    }

    checkLocalExport(t) {
      let e = this.scopeStack[0],
          {
        name: s
      } = t;
      !e.types.has(s) && !e.exportOnlyBindings.has(s) && super.checkLocalExport(t);
    }

  };
  p(qt, "TypeScriptScopeHandler");
  var qi = p((r, t) => Object.hasOwnProperty.call(r, t) && r[t], "getOwn$1");

  function Ki(r) {
    if (r == null) throw new Error(`Unexpected ${r} value.`);
    return r;
  }

  p(Ki, "nonNull");

  function qe(r) {
    if (!r) throw new Error("Assert fail");
  }

  p(qe, "assert");

  function Hi(r) {
    return pe(r) || ti(r);
  }

  p(Hi, "tsTokenCanStartExpression");
  var y = U`typescript`(r => ({
    AbstractMethodHasImplementation: r(({
      methodName: t
    }) => `Method '${t}' cannot have an implementation because it is marked abstract.`),
    AbstractPropertyHasInitializer: r(({
      propertyName: t
    }) => `Property '${t}' cannot have an initializer because it is marked abstract.`),
    AccesorCannotDeclareThisParameter: r("'get' and 'set' accessors cannot declare 'this' parameters."),
    AccesorCannotHaveTypeParameters: r("An accessor cannot have type parameters."),
    CannotFindName: r(({
      name: t
    }) => `Cannot find name '${t}'.`),
    ClassMethodHasDeclare: r("Class methods cannot have the 'declare' modifier."),
    ClassMethodHasReadonly: r("Class methods cannot have the 'readonly' modifier."),
    ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: r("A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference."),
    ConstructorHasTypeParameters: r("Type parameters cannot appear on a constructor declaration."),
    DeclareAccessor: r(({
      kind: t
    }) => `'declare' is not allowed in ${t}ters.`),
    DeclareClassFieldHasInitializer: r("Initializers are not allowed in ambient contexts."),
    DeclareFunctionHasImplementation: r("An implementation cannot be declared in ambient contexts."),
    DuplicateAccessibilityModifier: r(({
      modifier: t
    }) => "Accessibility modifier already seen."),
    DuplicateModifier: r(({
      modifier: t
    }) => `Duplicate modifier: '${t}'.`),
    EmptyHeritageClauseType: r(({
      token: t
    }) => `'${t}' list cannot be empty.`),
    EmptyTypeArguments: r("Type argument list cannot be empty."),
    EmptyTypeParameters: r("Type parameter list cannot be empty."),
    ExpectedAmbientAfterExportDeclare: r("'export declare' must be followed by an ambient declaration."),
    ImportAliasHasImportType: r("An import alias can not use 'import type'."),
    IncompatibleModifiers: r(({
      modifiers: t
    }) => `'${t[0]}' modifier cannot be used with '${t[1]}' modifier.`),
    IndexSignatureHasAbstract: r("Index signatures cannot have the 'abstract' modifier."),
    IndexSignatureHasAccessibility: r(({
      modifier: t
    }) => `Index signatures cannot have an accessibility modifier ('${t}').`),
    IndexSignatureHasDeclare: r("Index signatures cannot have the 'declare' modifier."),
    IndexSignatureHasOverride: r("'override' modifier cannot appear on an index signature."),
    IndexSignatureHasStatic: r("Index signatures cannot have the 'static' modifier."),
    InitializerNotAllowedInAmbientContext: r("Initializers are not allowed in ambient contexts."),
    InvalidModifierOnTypeMember: r(({
      modifier: t
    }) => `'${t}' modifier cannot appear on a type member.`),
    InvalidModifierOnTypeParameter: r(({
      modifier: t
    }) => `'${t}' modifier cannot appear on a type parameter.`),
    InvalidModifierOnTypeParameterPositions: r(({
      modifier: t
    }) => `'${t}' modifier can only appear on a type parameter of a class, interface or type alias.`),
    InvalidModifiersOrder: r(({
      orderedModifiers: t
    }) => `'${t[0]}' modifier must precede '${t[1]}' modifier.`),
    InvalidTupleMemberLabel: r("Tuple members must be labeled with a simple identifier."),
    MissingInterfaceName: r("'interface' declarations must be followed by an identifier."),
    MixedLabeledAndUnlabeledElements: r("Tuple members must all have names or all not have names."),
    NonAbstractClassHasAbstractMethod: r("Abstract methods can only appear within an abstract class."),
    NonClassMethodPropertyHasAbstractModifer: r("'abstract' modifier can only appear on a class, method, or property declaration."),
    OptionalTypeBeforeRequired: r("A required element cannot follow an optional element."),
    OverrideNotInSubClass: r("This member cannot have an 'override' modifier because its containing class does not extend another class."),
    PatternIsOptional: r("A binding pattern parameter cannot be optional in an implementation signature."),
    PrivateElementHasAbstract: r("Private elements cannot have the 'abstract' modifier."),
    PrivateElementHasAccessibility: r(({
      modifier: t
    }) => `Private elements cannot have an accessibility modifier ('${t}').`),
    ReadonlyForMethodSignature: r("'readonly' modifier can only appear on a property declaration or index signature."),
    ReservedArrowTypeParam: r("This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`."),
    ReservedTypeAssertion: r("This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead."),
    SetAccesorCannotHaveOptionalParameter: r("A 'set' accessor cannot have an optional parameter."),
    SetAccesorCannotHaveRestParameter: r("A 'set' accessor cannot have rest parameter."),
    SetAccesorCannotHaveReturnType: r("A 'set' accessor cannot have a return type annotation."),
    SingleTypeParameterWithoutTrailingComma: r(({
      typeParameterName: t
    }) => `Single type parameter ${t} should have a trailing comma. Example usage: <${t},>.`),
    StaticBlockCannotHaveModifier: r("Static class blocks cannot have any modifier."),
    TypeAnnotationAfterAssign: r("Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`."),
    TypeImportCannotSpecifyDefaultAndNamed: r("A type-only import can specify a default import or named bindings, but not both."),
    TypeModifierIsUsedInTypeExports: r("The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement."),
    TypeModifierIsUsedInTypeImports: r("The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement."),
    UnexpectedParameterModifier: r("A parameter property is only allowed in a constructor implementation."),
    UnexpectedReadonly: r("'readonly' type modifier is only permitted on array and tuple literal types."),
    UnexpectedTypeAnnotation: r("Did not expect a type annotation here."),
    UnexpectedTypeCastInParameter: r("Unexpected type cast in parameter position."),
    UnsupportedImportTypeArgument: r("Argument in a type import must be a string literal."),
    UnsupportedParameterPropertyKind: r("A parameter property may not be declared using a binding pattern."),
    UnsupportedSignatureParameterKind: r(({
      type: t
    }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${t}.`)
  }));

  function _i(r) {
    switch (r) {
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

  p(_i, "keywordTypeFromName");

  function Ke(r) {
    return r === "private" || r === "public" || r === "protected";
  }

  p(Ke, "tsIsAccessModifier");

  function Wi(r) {
    return r === "in" || r === "out";
  }

  p(Wi, "tsIsVarianceAnnotations");
  var Xi = p(r => class extends r {
    getScopeHandler() {
      return qt;
    }

    tsIsIdentifier() {
      return C(this.state.type);
    }

    tsTokenCanFollowModifier() {
      return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(134) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
    }

    tsNextTokenCanFollowModifier() {
      return this.next(), this.tsTokenCanFollowModifier();
    }

    tsParseModifier(t, e) {
      if (!C(this.state.type) && this.state.type !== 58) return;
      let s = this.state.value;

      if (t.indexOf(s) !== -1) {
        if (e && this.tsIsStartOfStaticBlocks()) return;
        if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) return s;
      }
    }

    tsParseModifiers({
      modified: t,
      allowedModifiers: e,
      disallowedModifiers: s,
      stopOnStartOfClassStaticBlock: i,
      errorTemplate: a = y.InvalidModifierOnTypeMember
    }) {
      let n = p((h, c, u, d) => {
        c === u && t[d] && this.raise(y.InvalidModifiersOrder, {
          at: h,
          orderedModifiers: [u, d]
        });
      }, "enforceOrder"),
          o = p((h, c, u, d) => {
        (t[u] && c === d || t[d] && c === u) && this.raise(y.IncompatibleModifiers, {
          at: h,
          modifiers: [u, d]
        });
      }, "incompatible");

      for (;;) {
        let {
          startLoc: h
        } = this.state,
            c = this.tsParseModifier(e.concat(s ?? []), i);
        if (!c) break;
        Ke(c) ? t.accessibility ? this.raise(y.DuplicateAccessibilityModifier, {
          at: h,
          modifier: c
        }) : (n(h, c, c, "override"), n(h, c, c, "static"), n(h, c, c, "readonly"), t.accessibility = c) : Wi(c) ? (t[c] && this.raise(y.DuplicateModifier, {
          at: h,
          modifier: c
        }), t[c] = !0, n(h, c, "in", "out")) : (Object.hasOwnProperty.call(t, c) ? this.raise(y.DuplicateModifier, {
          at: h,
          modifier: c
        }) : (n(h, c, "static", "readonly"), n(h, c, "static", "override"), n(h, c, "override", "readonly"), n(h, c, "abstract", "override"), o(h, c, "declare", "override"), o(h, c, "static", "abstract")), t[c] = !0), s != null && s.includes(c) && this.raise(a, {
          at: h,
          modifier: c
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

    tsParseList(t, e) {
      let s = [];

      for (; !this.tsIsListTerminator(t);) s.push(e());

      return s;
    }

    tsParseDelimitedList(t, e, s) {
      return Ki(this.tsParseDelimitedListWorker(t, e, !0, s));
    }

    tsParseDelimitedListWorker(t, e, s, i) {
      let a = [],
          n = -1;

      for (; !this.tsIsListTerminator(t);) {
        n = -1;
        let o = e();
        if (o == null) return;

        if (a.push(o), this.eat(12)) {
          n = this.state.lastTokStart;
          continue;
        }

        if (this.tsIsListTerminator(t)) break;
        s && this.expect(12);
        return;
      }

      return i && (i.value = n), a;
    }

    tsParseBracketedList(t, e, s, i, a) {
      i || (s ? this.expect(0) : this.expect(47));
      let n = this.tsParseDelimitedList(t, e, a);
      return s ? this.expect(3) : this.expect(48), n;
    }

    tsParseImportType() {
      let t = this.startNode();
      return this.expect(83), this.expect(10), this.match(129) || this.raise(y.UnsupportedImportTypeArgument, {
        at: this.state.startLoc
      }), t.argument = this.parseExprAtom(), this.expect(11), this.eat(16) && (t.qualifier = this.tsParseEntityName()), this.match(47) && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSImportType");
    }

    tsParseEntityName(t = !0) {
      let e = this.parseIdentifier(t);

      for (; this.eat(16);) {
        let s = this.startNodeAtNode(e);
        s.left = e, s.right = this.parseIdentifier(t), e = this.finishNode(s, "TSQualifiedName");
      }

      return e;
    }

    tsParseTypeReference() {
      let t = this.startNode();
      return t.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (t.typeParameters = this.tsParseTypeArguments()), this.finishNode(t, "TSTypeReference");
    }

    tsParseThisTypePredicate(t) {
      this.next();
      let e = this.startNodeAtNode(t);
      return e.parameterName = t, e.typeAnnotation = this.tsParseTypeAnnotation(!1), e.asserts = !1, this.finishNode(e, "TSTypePredicate");
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
        errorTemplate: y.InvalidModifierOnTypeParameter
      });
    }

    tsParseNoneModifiers(t) {
      this.tsParseModifiers({
        modified: t,
        allowedModifiers: [],
        disallowedModifiers: ["in", "out"],
        errorTemplate: y.InvalidModifierOnTypeParameterPositions
      });
    }

    tsParseTypeParameter(t = this.tsParseNoneModifiers.bind(this)) {
      let e = this.startNode();
      return t(e), e.name = this.tsParseTypeParameterName(), e.constraint = this.tsEatThenParseType(81), e.default = this.tsEatThenParseType(29), this.finishNode(e, "TSTypeParameter");
    }

    tsTryParseTypeParameters(t) {
      if (this.match(47)) return this.tsParseTypeParameters(t);
    }

    tsParseTypeParameters(t) {
      let e = this.startNode();
      this.match(47) || this.match(138) ? this.next() : this.unexpected();
      let s = {
        value: -1
      };
      return e.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, t), !1, !0, s), e.params.length === 0 && this.raise(y.EmptyTypeParameters, {
        at: e
      }), s.value !== -1 && this.addExtra(e, "trailingComma", s.value), this.finishNode(e, "TSTypeParameterDeclaration");
    }

    tsTryNextParseConstantContext() {
      if (this.lookahead().type !== 75) return null;
      this.next();
      let t = this.tsParseTypeReference();
      return t.typeParameters && this.raise(y.CannotFindName, {
        at: t.typeName,
        name: "const"
      }), t;
    }

    tsFillSignature(t, e) {
      let s = t === 19,
          i = "parameters",
          a = "typeAnnotation";
      e.typeParameters = this.tsTryParseTypeParameters(), this.expect(10), e[i] = this.tsParseBindingListForSignature(), s ? e[a] = this.tsParseTypeOrTypePredicateAnnotation(t) : this.match(t) && (e[a] = this.tsParseTypeOrTypePredicateAnnotation(t));
    }

    tsParseBindingListForSignature() {
      return this.parseBindingList(11, 41).map(t => (t.type !== "Identifier" && t.type !== "RestElement" && t.type !== "ObjectPattern" && t.type !== "ArrayPattern" && this.raise(y.UnsupportedSignatureParameterKind, {
        at: t,
        type: t.type
      }), t));
    }

    tsParseTypeMemberSemicolon() {
      !this.eat(12) && !this.isLineTerminator() && this.expect(13);
    }

    tsParseSignatureMember(t, e) {
      return this.tsFillSignature(14, e), this.tsParseTypeMemberSemicolon(), this.finishNode(e, t);
    }

    tsIsUnambiguouslyIndexSignature() {
      return this.next(), C(this.state.type) ? (this.next(), this.match(14)) : !1;
    }

    tsTryParseIndexSignature(t) {
      if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) return;
      this.expect(0);
      let e = this.parseIdentifier();
      e.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(e), this.expect(3), t.parameters = [e];
      let s = this.tsTryParseTypeAnnotation();
      return s && (t.typeAnnotation = s), this.tsParseTypeMemberSemicolon(), this.finishNode(t, "TSIndexSignature");
    }

    tsParsePropertyOrMethodSignature(t, e) {
      this.eat(17) && (t.optional = !0);
      let s = t;

      if (this.match(10) || this.match(47)) {
        e && this.raise(y.ReadonlyForMethodSignature, {
          at: t
        });
        let i = s;
        i.kind && this.match(47) && this.raise(y.AccesorCannotHaveTypeParameters, {
          at: this.state.curPosition()
        }), this.tsFillSignature(14, i), this.tsParseTypeMemberSemicolon();
        let a = "parameters",
            n = "typeAnnotation";
        if (i.kind === "get") i[a].length > 0 && (this.raise(l.BadGetterArity, {
          at: this.state.curPosition()
        }), this.isThisParam(i[a][0]) && this.raise(y.AccesorCannotDeclareThisParameter, {
          at: this.state.curPosition()
        }));else if (i.kind === "set") {
          if (i[a].length !== 1) this.raise(l.BadSetterArity, {
            at: this.state.curPosition()
          });else {
            let o = i[a][0];
            this.isThisParam(o) && this.raise(y.AccesorCannotDeclareThisParameter, {
              at: this.state.curPosition()
            }), o.type === "Identifier" && o.optional && this.raise(y.SetAccesorCannotHaveOptionalParameter, {
              at: this.state.curPosition()
            }), o.type === "RestElement" && this.raise(y.SetAccesorCannotHaveRestParameter, {
              at: this.state.curPosition()
            });
          }
          i[n] && this.raise(y.SetAccesorCannotHaveReturnType, {
            at: i[n]
          });
        } else i.kind = "method";
        return this.finishNode(i, "TSMethodSignature");
      } else {
        let i = s;
        e && (i.readonly = !0);
        let a = this.tsTryParseTypeAnnotation();
        return a && (i.typeAnnotation = a), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSPropertySignature");
      }
    }

    tsParseTypeMember() {
      let t = this.startNode();
      if (this.match(10) || this.match(47)) return this.tsParseSignatureMember("TSCallSignatureDeclaration", t);

      if (this.match(77)) {
        let s = this.startNode();
        return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", t) : (t.key = this.createIdentifier(s, "new"), this.tsParsePropertyOrMethodSignature(t, !1));
      }

      this.tsParseModifiers({
        modified: t,
        allowedModifiers: ["readonly"],
        disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
      });
      let e = this.tsTryParseIndexSignature(t);
      return e || (this.parsePropertyName(t), !t.computed && t.key.type === "Identifier" && (t.key.name === "get" || t.key.name === "set") && this.tsTokenCanFollowModifier() && (t.kind = t.key.name, this.parsePropertyName(t)), this.tsParsePropertyOrMethodSignature(t, !!t.readonly));
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
      let e = !1,
          s = null;
      return t.elementTypes.forEach(i => {
        var a;
        let {
          type: n
        } = i;
        e && n !== "TSRestType" && n !== "TSOptionalType" && !(n === "TSNamedTupleMember" && i.optional) && this.raise(y.OptionalTypeBeforeRequired, {
          at: i
        }), e = e || n === "TSNamedTupleMember" && i.optional || n === "TSOptionalType", n === "TSRestType" && (i = i.typeAnnotation, n = i.type);
        let o = n === "TSNamedTupleMember";
        s = (a = s) != null ? a : o, s !== o && this.raise(y.MixedLabeledAndUnlabeledElements, {
          at: i
        });
      }), this.finishNode(t, "TSTupleType");
    }

    tsParseTupleElementType() {
      let {
        start: t,
        startLoc: e
      } = this.state,
          s = this.eat(21),
          i = this.tsParseType(),
          a = this.eat(17);

      if (this.eat(14)) {
        let o = this.startNodeAtNode(i);
        o.optional = a, i.type === "TSTypeReference" && !i.typeParameters && i.typeName.type === "Identifier" ? o.label = i.typeName : (this.raise(y.InvalidTupleMemberLabel, {
          at: i
        }), o.label = i), o.elementType = this.tsParseType(), i = this.finishNode(o, "TSNamedTupleMember");
      } else if (a) {
        let o = this.startNodeAtNode(i);
        o.typeAnnotation = i, i = this.finishNode(o, "TSOptionalType");
      }

      if (s) {
        let o = this.startNodeAt(t, e);
        o.typeAnnotation = i, i = this.finishNode(o, "TSRestType");
      }

      return i;
    }

    tsParseParenthesizedType() {
      let t = this.startNode();
      return this.expect(10), t.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(t, "TSParenthesizedType");
    }

    tsParseFunctionOrConstructorType(t, e) {
      let s = this.startNode();
      return t === "TSConstructorType" && (s.abstract = !!e, e && this.next(), this.next()), this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, s)), this.finishNode(s, t);
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
            return this.parseExprAtom();

          default:
            throw this.unexpected();
        }
      })(), this.finishNode(t, "TSLiteralType");
    }

    tsParseTemplateLiteralType() {
      let t = this.startNode();
      return t.literal = this.parseTemplate(!1), this.finishNode(t, "TSLiteralType");
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
                e = this.lookahead();
            if (e.type !== 130 && e.type !== 131) throw this.unexpected();
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

            if (C(t) || t === 88 || t === 84) {
              let e = t === 88 ? "TSVoidKeyword" : t === 84 ? "TSNullKeyword" : _i(this.state.value);

              if (e !== void 0 && this.lookaheadCharCode() !== 46) {
                let s = this.startNode();
                return this.next(), this.finishNode(s, e);
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
        let e = this.startNodeAtNode(t);
        e.elementType = t, this.expect(3), t = this.finishNode(e, "TSArrayType");
      } else {
        let e = this.startNodeAtNode(t);
        e.objectType = t, e.indexType = this.tsParseType(), this.expect(3), t = this.finishNode(e, "TSIndexedAccessType");
      }

      return t;
    }

    tsParseTypeOperator() {
      let t = this.startNode(),
          e = this.state.value;
      return this.next(), t.operator = e, t.typeAnnotation = this.tsParseTypeOperatorOrHigher(), e === "readonly" && this.tsCheckTypeAnnotationForReadOnly(t), this.finishNode(t, "TSTypeOperator");
    }

    tsCheckTypeAnnotationForReadOnly(t) {
      switch (t.typeAnnotation.type) {
        case "TSTupleType":
        case "TSArrayType":
          return;

        default:
          this.raise(y.UnexpectedReadonly, {
            at: t
          });
      }
    }

    tsParseInferType() {
      let t = this.startNode();
      this.expectContextual(112);
      let e = this.startNode();
      return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType()), t.typeParameter = this.finishNode(e, "TSTypeParameter"), this.finishNode(t, "TSInferType");
    }

    tsParseConstraintForInferType() {
      if (this.eat(81)) {
        let t = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
        if (this.state.inDisallowConditionalTypesContext || !this.match(17)) return t;
      }
    }

    tsParseTypeOperatorOrHigher() {
      return Qs(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(112) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
    }

    tsParseUnionOrIntersectionType(t, e, s) {
      let i = this.startNode(),
          a = this.eat(s),
          n = [];

      do n.push(e()); while (this.eat(s));

      return n.length === 1 && !a ? n[0] : (i.types = n, this.finishNode(i, t));
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
      if (C(this.state.type) || this.match(78)) return this.next(), !0;

      if (this.match(5)) {
        let {
          errors: t
        } = this.state,
            e = t.length;

        try {
          return this.parseObjectLike(8, !0), t.length === e;
        } catch {
          return !1;
        }
      }

      if (this.match(0)) {
        this.next();
        let {
          errors: t
        } = this.state,
            e = t.length;

        try {
          return this.parseBindingList(3, 93, !0), t.length === e;
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
        let e = this.startNode();
        this.expect(t);
        let s = this.startNode(),
            i = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));

        if (i && this.match(78)) {
          let o = this.tsParseThisTypeOrThisTypePredicate();
          return o.type === "TSThisType" ? (s.parameterName = o, s.asserts = !0, s.typeAnnotation = null, o = this.finishNode(s, "TSTypePredicate")) : (this.resetStartLocationFromNode(o, s), o.asserts = !0), e.typeAnnotation = o, this.finishNode(e, "TSTypeAnnotation");
        }

        let a = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
        if (!a) return i ? (s.parameterName = this.parseIdentifier(), s.asserts = i, s.typeAnnotation = null, e.typeAnnotation = this.finishNode(s, "TSTypePredicate"), this.finishNode(e, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(!1, e);
        let n = this.tsParseTypeAnnotation(!1);
        return s.parameterName = a, s.typeAnnotation = n, s.asserts = i, e.typeAnnotation = this.finishNode(s, "TSTypePredicate"), this.finishNode(e, "TSTypeAnnotation");
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
      return this.next(), !C(this.state.type) && !this.match(78) ? !1 : (t && this.raise(l.InvalidEscapedReservedWord, {
        at: this.state.lastTokStartLoc,
        reservedWord: "asserts"
      }), !0);
    }

    tsParseTypeAnnotation(t = !0, e = this.startNode()) {
      return this.tsInType(() => {
        t && this.expect(14), e.typeAnnotation = this.tsParseType();
      }), this.finishNode(e, "TSTypeAnnotation");
    }

    tsParseType() {
      qe(this.state.inType);
      let t = this.tsParseNonConditionalType();
      if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81)) return t;
      let e = this.startNodeAtNode(t);
      return e.checkType = t, e.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType()), this.expect(17), e.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.expect(14), e.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.finishNode(e, "TSConditionalType");
    }

    isAbstractConstructorSignature() {
      return this.isContextual(120) && this.lookahead().type === 77;
    }

    tsParseNonConditionalType() {
      return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
    }

    tsParseTypeAssertion() {
      this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(y.ReservedTypeAssertion, {
        at: this.state.startLoc
      });
      let t = this.startNode(),
          e = this.tsTryNextParseConstantContext();
      return t.typeAnnotation = e || this.tsNextThenParseType(), this.expect(48), t.expression = this.parseMaybeUnary(), this.finishNode(t, "TSTypeAssertion");
    }

    tsParseHeritageClause(t) {
      let e = this.state.startLoc,
          s = this.tsParseDelimitedList("HeritageClauseElement", () => {
        let i = this.startNode();
        return i.expression = this.tsParseEntityName(), this.match(47) && (i.typeParameters = this.tsParseTypeArguments()), this.finishNode(i, "TSExpressionWithTypeArguments");
      });
      return s.length || this.raise(y.EmptyHeritageClauseType, {
        at: e,
        token: t
      }), s;
    }

    tsParseInterfaceDeclaration(t, e = {}) {
      if (this.hasFollowingLineBreak()) return null;
      this.expectContextual(125), e.declare && (t.declare = !0), C(this.state.type) ? (t.id = this.parseIdentifier(), this.checkIdentifier(t.id, pi)) : (t.id = null, this.raise(y.MissingInterfaceName, {
        at: this.state.startLoc
      })), t.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(81) && (t.extends = this.tsParseHeritageClause("extends"));
      let s = this.startNode();
      return s.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), t.body = this.finishNode(s, "TSInterfaceBody"), this.finishNode(t, "TSInterfaceDeclaration");
    }

    tsParseTypeAliasDeclaration(t) {
      return t.id = this.parseIdentifier(), this.checkIdentifier(t.id, di), t.typeAnnotation = this.tsInType(() => {
        if (t.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.expect(29), this.isContextual(111) && this.lookahead().type !== 16) {
          let e = this.startNode();
          return this.next(), this.finishNode(e, "TSIntrinsicKeyword");
        }

        return this.tsParseType();
      }), this.semicolon(), this.finishNode(t, "TSTypeAliasDeclaration");
    }

    tsInNoContext(t) {
      let e = this.state.context;
      this.state.context = [e[0]];

      try {
        return t();
      } finally {
        this.state.context = e;
      }
    }

    tsInType(t) {
      let e = this.state.inType;
      this.state.inType = !0;

      try {
        return t();
      } finally {
        this.state.inType = e;
      }
    }

    tsInDisallowConditionalTypesContext(t) {
      let e = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !0;

      try {
        return t();
      } finally {
        this.state.inDisallowConditionalTypesContext = e;
      }
    }

    tsInAllowConditionalTypesContext(t) {
      let e = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !1;

      try {
        return t();
      } finally {
        this.state.inDisallowConditionalTypesContext = e;
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
      return t.id = this.match(129) ? this.parseExprAtom() : this.parseIdentifier(!0), this.eat(29) && (t.initializer = this.parseMaybeAssignAllowIn()), this.finishNode(t, "TSEnumMember");
    }

    tsParseEnumDeclaration(t, e = {}) {
      return e.const && (t.const = !0), e.declare && (t.declare = !0), this.expectContextual(122), t.id = this.parseIdentifier(), this.checkIdentifier(t.id, t.const ? mi : ps), this.expect(5), t.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(t, "TSEnumDeclaration");
    }

    tsParseModuleBlock() {
      let t = this.startNode();
      return this.scope.enter(rt), this.expect(5), this.parseBlockOrModuleBlockBody(t.body = [], void 0, !0, 8), this.scope.exit(), this.finishNode(t, "TSModuleBlock");
    }

    tsParseModuleOrNamespaceDeclaration(t, e = !1) {
      if (t.id = this.parseIdentifier(), e || this.checkIdentifier(t.id, yi), this.eat(16)) {
        let s = this.startNode();
        this.tsParseModuleOrNamespaceDeclaration(s, !0), t.body = s;
      } else this.scope.enter(Nt), this.prodParam.enter(lt), t.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();

      return this.finishNode(t, "TSModuleDeclaration");
    }

    tsParseAmbientExternalModuleDeclaration(t) {
      return this.isContextual(109) ? (t.global = !0, t.id = this.parseIdentifier()) : this.match(129) ? t.id = this.parseExprAtom() : this.unexpected(), this.match(5) ? (this.scope.enter(Nt), this.prodParam.enter(lt), t.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(t, "TSModuleDeclaration");
    }

    tsParseImportEqualsDeclaration(t, e) {
      t.isExport = e || !1, t.id = this.parseIdentifier(), this.checkIdentifier(t.id, $), this.expect(29);
      let s = this.tsParseModuleReference();
      return t.importKind === "type" && s.type !== "TSExternalModuleReference" && this.raise(y.ImportAliasHasImportType, {
        at: s
      }), t.moduleReference = s, this.semicolon(), this.finishNode(t, "TSImportEqualsDeclaration");
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
      return t.expression = this.parseExprAtom(), this.expect(11), this.finishNode(t, "TSExternalModuleReference");
    }

    tsLookAhead(t) {
      let e = this.state.clone(),
          s = t();
      return this.state = e, s;
    }

    tsTryParseAndCatch(t) {
      let e = this.tryParse(s => t() || s());
      if (!(e.aborted || !e.node)) return e.error && (this.state = e.failState), e.node;
    }

    tsTryParse(t) {
      let e = this.state.clone(),
          s = t();
      if (s !== void 0 && s !== !1) return s;
      this.state = e;
    }

    tsTryParseDeclare(t) {
      if (this.isLineTerminator()) return;
      let e = this.state.type,
          s;
      return this.isContextual(99) && (e = 74, s = "let"), this.tsInAmbientContext(() => {
        if (e === 68) return t.declare = !0, this.parseFunctionStatement(t, !1, !0);
        if (e === 80) return t.declare = !0, this.parseClass(t, !0, !1);
        if (e === 122) return this.tsParseEnumDeclaration(t, {
          declare: !0
        });
        if (e === 109) return this.tsParseAmbientExternalModuleDeclaration(t);
        if (e === 75 || e === 74) return !this.match(75) || !this.isLookaheadContextual("enum") ? (t.declare = !0, this.parseVarStatement(t, s || this.state.value, !0)) : (this.expect(75), this.tsParseEnumDeclaration(t, {
          const: !0,
          declare: !0
        }));

        if (e === 125) {
          let i = this.tsParseInterfaceDeclaration(t, {
            declare: !0
          });
          if (i) return i;
        }

        if (C(e)) return this.tsParseDeclaration(t, this.state.value, !0);
      });
    }

    tsTryParseExportDeclaration() {
      return this.tsParseDeclaration(this.startNode(), this.state.value, !0);
    }

    tsParseExpressionStatement(t, e) {
      switch (e.name) {
        case "declare":
          {
            let s = this.tsTryParseDeclare(t);
            if (s) return s.declare = !0, s;
            break;
          }

        case "global":
          if (this.match(5)) {
            this.scope.enter(Nt), this.prodParam.enter(lt);
            let s = t;
            return s.global = !0, s.id = e, s.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(s, "TSModuleDeclaration");
          }

          break;

        default:
          return this.tsParseDeclaration(t, e.name, !1);
      }
    }

    tsParseDeclaration(t, e, s) {
      switch (e) {
        case "abstract":
          if (this.tsCheckLineTerminator(s) && (this.match(80) || C(this.state.type))) return this.tsParseAbstractDeclaration(t);
          break;

        case "module":
          if (this.tsCheckLineTerminator(s)) {
            if (this.match(129)) return this.tsParseAmbientExternalModuleDeclaration(t);
            if (C(this.state.type)) return this.tsParseModuleOrNamespaceDeclaration(t);
          }

          break;

        case "namespace":
          if (this.tsCheckLineTerminator(s) && C(this.state.type)) return this.tsParseModuleOrNamespaceDeclaration(t);
          break;

        case "type":
          if (this.tsCheckLineTerminator(s) && C(this.state.type)) return this.tsParseTypeAliasDeclaration(t);
          break;
      }
    }

    tsCheckLineTerminator(t) {
      return t ? this.hasFollowingLineBreak() ? !1 : (this.next(), !0) : !this.isLineTerminator();
    }

    tsTryParseGenericAsyncArrowFunction(t, e) {
      if (!this.match(47)) return;
      let s = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = !0;
      let i = this.tsTryParseAndCatch(() => {
        let a = this.startNodeAt(t, e);
        return a.typeParameters = this.tsParseTypeParameters(), super.parseFunctionParams(a), a.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), a;
      });
      if (this.state.maybeInArrowParameters = s, !!i) return this.parseArrowExpression(i, null, !0);
    }

    tsParseTypeArgumentsInExpression() {
      if (this.reScan_lt() === 47) return this.tsParseTypeArguments();
    }

    tsParseTypeArguments() {
      let t = this.startNode();
      return t.params = this.tsInType(() => this.tsInNoContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), t.params.length === 0 && this.raise(y.EmptyTypeArguments, {
        at: t
      }), this.expect(48), this.finishNode(t, "TSTypeParameterInstantiation");
    }

    tsIsDeclarationStart() {
      return Zs(this.state.type);
    }

    isExportDefaultSpecifier() {
      return this.tsIsDeclarationStart() ? !1 : super.isExportDefaultSpecifier();
    }

    parseAssignableListItem(t, e) {
      let s = this.state.start,
          i = this.state.startLoc,
          a,
          n = !1,
          o = !1;

      if (t !== void 0) {
        let u = {};
        this.tsParseModifiers({
          modified: u,
          allowedModifiers: ["public", "private", "protected", "override", "readonly"]
        }), a = u.accessibility, o = u.override, n = u.readonly, t === !1 && (a || n || o) && this.raise(y.UnexpectedParameterModifier, {
          at: i
        });
      }

      let h = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(h);
      let c = this.parseMaybeDefault(h.start, h.loc.start, h);

      if (a || n || o) {
        let u = this.startNodeAt(s, i);
        return e.length && (u.decorators = e), a && (u.accessibility = a), n && (u.readonly = n), o && (u.override = o), c.type !== "Identifier" && c.type !== "AssignmentPattern" && this.raise(y.UnsupportedParameterPropertyKind, {
          at: u
        }), u.parameter = c, this.finishNode(u, "TSParameterProperty");
      }

      return e.length && (h.decorators = e), c;
    }

    isSimpleParameter(t) {
      return t.type === "TSParameterProperty" && super.isSimpleParameter(t.parameter) || super.isSimpleParameter(t);
    }

    parseFunctionBodyAndFinish(t, e, s = !1) {
      this.match(14) && (t.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
      let i = e === "FunctionDeclaration" ? "TSDeclareFunction" : e === "ClassMethod" || e === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;

      if (i && !this.match(5) && this.isLineTerminator()) {
        this.finishNode(t, i);
        return;
      }

      if (i === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(y.DeclareFunctionHasImplementation, {
        at: t
      }), t.declare)) {
        super.parseFunctionBodyAndFinish(t, i, s);
        return;
      }

      super.parseFunctionBodyAndFinish(t, e, s);
    }

    registerFunctionStatementId(t) {
      !t.body && t.id ? this.checkIdentifier(t.id, je) : super.registerFunctionStatementId(...arguments);
    }

    tsCheckForInvalidTypeCasts(t) {
      t.forEach(e => {
        e?.type === "TSTypeCastExpression" && this.raise(y.UnexpectedTypeAnnotation, {
          at: e.typeAnnotation
        });
      });
    }

    toReferencedList(t, e) {
      return this.tsCheckForInvalidTypeCasts(t), t;
    }

    parseArrayLike(...t) {
      let e = super.parseArrayLike(...t);
      return e.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(e.elements), e;
    }

    parseSubscript(t, e, s, i, a) {
      if (!this.hasPrecedingLineBreak() && this.match(35)) {
        this.state.canStartJSXElement = !1, this.next();
        let o = this.startNodeAt(e, s);
        return o.expression = t, this.finishNode(o, "TSNonNullExpression");
      }

      let n = !1;

      if (this.match(18) && this.lookaheadCharCode() === 60) {
        if (i) return a.stop = !0, t;
        a.optionalChainMember = n = !0, this.next();
      }

      if (this.match(47) || this.match(51)) {
        let o,
            h = this.tsTryParseAndCatch(() => {
          if (!i && this.atPossibleAsyncArrow(t)) {
            let d = this.tsTryParseGenericAsyncArrowFunction(e, s);
            if (d) return d;
          }

          let c = this.tsParseTypeArgumentsInExpression();
          if (!c) throw this.unexpected();
          if (n && !this.match(10)) throw o = this.state.curPosition(), this.unexpected();

          if (Wt(this.state.type)) {
            let d = this.parseTaggedTemplateExpression(t, e, s, a);
            return d.typeParameters = c, d;
          }

          if (!i && this.eat(10)) {
            let d = this.startNodeAt(e, s);
            return d.callee = t, d.arguments = this.parseCallExpressionArguments(11, !1), this.tsCheckForInvalidTypeCasts(d.arguments), d.typeParameters = c, a.optionalChainMember && (d.optional = n), this.finishCallExpression(d, a.optionalChainMember);
          }

          if (Hi(this.state.type) && this.state.type !== 10) throw this.unexpected();
          let u = this.startNodeAt(e, s);
          return u.expression = t, u.typeParameters = c, this.finishNode(u, "TSInstantiationExpression");
        });
        if (o && this.unexpected(o, 10), h) return h;
      }

      return super.parseSubscript(t, e, s, i, a);
    }

    parseNewCallee(t) {
      var e;
      super.parseNewCallee(t);
      let {
        callee: s
      } = t;
      s.type === "TSInstantiationExpression" && !((e = s.extra) != null && e.parenthesized) && (t.typeParameters = s.typeParameters, t.callee = s.expression);
    }

    parseExprOp(t, e, s, i) {
      if (It(58) > i && !this.hasPrecedingLineBreak() && this.isContextual(93)) {
        let a = this.startNodeAt(e, s);
        a.expression = t;
        let n = this.tsTryNextParseConstantContext();
        return n ? a.typeAnnotation = n : a.typeAnnotation = this.tsNextThenParseType(), this.finishNode(a, "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(a, e, s, i);
      }

      return super.parseExprOp(t, e, s, i);
    }

    checkReservedWord(t, e, s, i) {
      this.state.isAmbientContext || super.checkReservedWord(t, e, s, i);
    }

    checkDuplicateExports() {}

    parseImport(t) {
      if (t.importKind = "value", C(this.state.type) || this.match(55) || this.match(5)) {
        let s = this.lookahead();
        if (this.isContextual(126) && s.type !== 12 && s.type !== 97 && s.type !== 29 && (t.importKind = "type", this.next(), s = this.lookahead()), C(this.state.type) && s.type === 29) return this.tsParseImportEqualsDeclaration(t);
      }

      let e = super.parseImport(t);
      return e.importKind === "type" && e.specifiers.length > 1 && e.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(y.TypeImportCannotSpecifyDefaultAndNamed, {
        at: e
      }), e;
    }

    parseExport(t) {
      if (this.match(83)) return this.next(), this.isContextual(126) && this.lookaheadCharCode() !== 61 ? (t.importKind = "type", this.next()) : t.importKind = "value", this.tsParseImportEqualsDeclaration(t, !0);

      if (this.eat(29)) {
        let e = t;
        return e.expression = this.parseExpression(), this.semicolon(), this.finishNode(e, "TSExportAssignment");
      } else if (this.eatContextual(93)) {
        let e = t;
        return this.expectContextual(124), e.id = this.parseIdentifier(), this.semicolon(), this.finishNode(e, "TSNamespaceExportDeclaration");
      } else return this.isContextual(126) && this.lookahead().type === 5 ? (this.next(), t.exportKind = "type") : t.exportKind = "value", super.parseExport(t);
    }

    isAbstractClass() {
      return this.isContextual(120) && this.lookahead().type === 80;
    }

    parseExportDefaultExpression() {
      if (this.isAbstractClass()) {
        let t = this.startNode();
        return this.next(), t.abstract = !0, this.parseClass(t, !0, !0), t;
      }

      if (this.match(125)) {
        let t = this.tsParseInterfaceDeclaration(this.startNode());
        if (t) return t;
      }

      return super.parseExportDefaultExpression();
    }

    parseVarStatement(t, e, s = !1) {
      let {
        isAmbientContext: i
      } = this.state,
          a = super.parseVarStatement(t, e, s || i);
      if (!i) return a;

      for (let {
        id: n,
        init: o
      } of a.declarations) !o || (e !== "const" || !!n.typeAnnotation ? this.raise(y.InitializerNotAllowedInAmbientContext, {
        at: o
      }) : o.type !== "StringLiteral" && o.type !== "BooleanLiteral" && o.type !== "NumericLiteral" && o.type !== "BigIntLiteral" && (o.type !== "TemplateLiteral" || o.expressions.length > 0) && !Ji(o) && this.raise(y.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, {
        at: o
      }));

      return a;
    }

    parseStatementContent(t, e) {
      if (this.match(75) && this.isLookaheadContextual("enum")) {
        let s = this.startNode();
        return this.expect(75), this.tsParseEnumDeclaration(s, {
          const: !0
        });
      }

      if (this.isContextual(122)) return this.tsParseEnumDeclaration(this.startNode());

      if (this.isContextual(125)) {
        let s = this.tsParseInterfaceDeclaration(this.startNode());
        if (s) return s;
      }

      return super.parseStatementContent(t, e);
    }

    parseAccessModifier() {
      return this.tsParseModifier(["public", "protected", "private"]);
    }

    tsHasSomeModifiers(t, e) {
      return e.some(s => Ke(s) ? t.accessibility === s : !!t[s]);
    }

    tsIsStartOfStaticBlocks() {
      return this.isContextual(104) && this.lookaheadCharCode() === 123;
    }

    parseClassMember(t, e, s) {
      let i = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
      this.tsParseModifiers({
        modified: e,
        allowedModifiers: i,
        disallowedModifiers: ["in", "out"],
        stopOnStartOfClassStaticBlock: !0,
        errorTemplate: y.InvalidModifierOnTypeParameterPositions
      });
      let a = p(() => {
        this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(e, i) && this.raise(y.StaticBlockCannotHaveModifier, {
          at: this.state.curPosition()
        }), this.parseClassStaticBlock(t, e)) : this.parseClassMemberWithIsStatic(t, e, s, !!e.static);
      }, "callParseClassMemberWithIsStatic");
      e.declare ? this.tsInAmbientContext(a) : a();
    }

    parseClassMemberWithIsStatic(t, e, s, i) {
      let a = this.tsTryParseIndexSignature(e);

      if (a) {
        t.body.push(a), e.abstract && this.raise(y.IndexSignatureHasAbstract, {
          at: e
        }), e.accessibility && this.raise(y.IndexSignatureHasAccessibility, {
          at: e,
          modifier: e.accessibility
        }), e.declare && this.raise(y.IndexSignatureHasDeclare, {
          at: e
        }), e.override && this.raise(y.IndexSignatureHasOverride, {
          at: e
        });
        return;
      }

      !this.state.inAbstractClass && e.abstract && this.raise(y.NonAbstractClassHasAbstractMethod, {
        at: e
      }), e.override && (s.hadSuperClass || this.raise(y.OverrideNotInSubClass, {
        at: e
      })), super.parseClassMemberWithIsStatic(t, e, s, i);
    }

    parsePostMemberNameModifiers(t) {
      this.eat(17) && (t.optional = !0), t.readonly && this.match(10) && this.raise(y.ClassMethodHasReadonly, {
        at: t
      }), t.declare && this.match(10) && this.raise(y.ClassMethodHasDeclare, {
        at: t
      });
    }

    parseExpressionStatement(t, e) {
      return (e.type === "Identifier" ? this.tsParseExpressionStatement(t, e) : void 0) || super.parseExpressionStatement(t, e);
    }

    shouldParseExportDeclaration() {
      return this.tsIsDeclarationStart() ? !0 : super.shouldParseExportDeclaration();
    }

    parseConditional(t, e, s, i) {
      if (!this.state.maybeInArrowParameters || !this.match(17)) return super.parseConditional(t, e, s, i);
      let a = this.tryParse(() => super.parseConditional(t, e, s));
      return a.node ? (a.error && (this.state = a.failState), a.node) : (a.error && super.setOptionalParametersError(i, a.error), t);
    }

    parseParenItem(t, e, s) {
      if (t = super.parseParenItem(t, e, s), this.eat(17) && (t.optional = !0, this.resetEndLocation(t)), this.match(14)) {
        let i = this.startNodeAt(e, s);
        return i.expression = t, i.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(i, "TSTypeCastExpression");
      }

      return t;
    }

    parseExportDeclaration(t) {
      if (!this.state.isAmbientContext && this.isContextual(121)) return this.tsInAmbientContext(() => this.parseExportDeclaration(t));
      let e = this.state.start,
          s = this.state.startLoc,
          i = this.eatContextual(121);
      if (i && (this.isContextual(121) || !this.shouldParseExportDeclaration())) throw this.raise(y.ExpectedAmbientAfterExportDeclare, {
        at: this.state.startLoc
      });
      let n = C(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(t);
      return n ? ((n.type === "TSInterfaceDeclaration" || n.type === "TSTypeAliasDeclaration" || i) && (t.exportKind = "type"), i && (this.resetStartLocation(n, e, s), n.declare = !0), n) : null;
    }

    parseClassId(t, e, s) {
      if ((!e || s) && this.isContextual(110)) return;
      super.parseClassId(t, e, s, t.declare ? je : ls);
      let i = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
      i && (t.typeParameters = i);
    }

    parseClassPropertyAnnotation(t) {
      !t.optional && this.eat(35) && (t.definite = !0);
      let e = this.tsTryParseTypeAnnotation();
      e && (t.typeAnnotation = e);
    }

    parseClassProperty(t) {
      if (this.parseClassPropertyAnnotation(t), this.state.isAmbientContext && this.match(29) && this.raise(y.DeclareClassFieldHasInitializer, {
        at: this.state.startLoc
      }), t.abstract && this.match(29)) {
        let {
          key: e
        } = t;
        this.raise(y.AbstractPropertyHasInitializer, {
          at: this.state.startLoc,
          propertyName: e.type === "Identifier" && !t.computed ? e.name : `[${this.input.slice(e.start, e.end)}]`
        });
      }

      return super.parseClassProperty(t);
    }

    parseClassPrivateProperty(t) {
      return t.abstract && this.raise(y.PrivateElementHasAbstract, {
        at: t
      }), t.accessibility && this.raise(y.PrivateElementHasAccessibility, {
        at: t,
        modifier: t.accessibility
      }), this.parseClassPropertyAnnotation(t), super.parseClassPrivateProperty(t);
    }

    pushClassMethod(t, e, s, i, a, n) {
      let o = this.tsTryParseTypeParameters();
      o && a && this.raise(y.ConstructorHasTypeParameters, {
        at: o
      });
      let {
        declare: h = !1,
        kind: c
      } = e;
      h && (c === "get" || c === "set") && this.raise(y.DeclareAccessor, {
        at: e,
        kind: c
      }), o && (e.typeParameters = o), super.pushClassMethod(t, e, s, i, a, n);
    }

    pushClassPrivateMethod(t, e, s, i) {
      let a = this.tsTryParseTypeParameters();
      a && (e.typeParameters = a), super.pushClassPrivateMethod(t, e, s, i);
    }

    declareClassPrivateMethodInScope(t, e) {
      t.type !== "TSDeclareMethod" && (t.type === "MethodDefinition" && !t.value.body || super.declareClassPrivateMethodInScope(t, e));
    }

    parseClassSuper(t) {
      super.parseClassSuper(t), t.superClass && (this.match(47) || this.match(51)) && (t.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(110) && (t.implements = this.tsParseHeritageClause("implements"));
    }

    parseObjPropValue(t, ...e) {
      let s = this.tsTryParseTypeParameters();
      s && (t.typeParameters = s), super.parseObjPropValue(t, ...e);
    }

    parseFunctionParams(t, e) {
      let s = this.tsTryParseTypeParameters();
      s && (t.typeParameters = s), super.parseFunctionParams(t, e);
    }

    parseVarId(t, e) {
      super.parseVarId(t, e), t.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (t.definite = !0);
      let s = this.tsTryParseTypeAnnotation();
      s && (t.id.typeAnnotation = s, this.resetEndLocation(t.id));
    }

    parseAsyncArrowFromCallExpression(t, e) {
      return this.match(14) && (t.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(t, e);
    }

    parseMaybeAssign(...t) {
      var e, s, i, a, n, o, h;
      let c, u, d;

      if (this.hasPlugin("jsx") && (this.match(138) || this.match(47))) {
        if (c = this.state.clone(), u = this.tryParse(() => super.parseMaybeAssign(...t), c), !u.error) return u.node;
        let {
          context: T
        } = this.state,
            S = T[T.length - 1];
        (S === E.j_oTag || S === E.j_expr) && T.pop();
      }

      if (!((e = u) != null && e.error) && !this.match(47)) return super.parseMaybeAssign(...t);
      let x;
      c = c || this.state.clone();
      let m = this.tryParse(T => {
        var S, I, N;
        x = this.tsParseTypeParameters();
        let D = super.parseMaybeAssign(...t);
        return (D.type !== "ArrowFunctionExpression" || (S = D.extra) != null && S.parenthesized) && T(), ((I = x) == null ? void 0 : I.params.length) !== 0 && this.resetStartLocationFromNode(D, x), D.typeParameters = x, this.hasPlugin("jsx") && D.typeParameters.params.length === 1 && !((N = D.typeParameters.extra) != null && N.trailingComma) && D.typeParameters.params[0].constraint, D;
      }, c);
      if (!m.error && !m.aborted) return x && this.reportReservedArrowTypeParam(x), m.node;
      if (!u && (qe(!this.hasPlugin("jsx")), d = this.tryParse(() => super.parseMaybeAssign(...t), c), !d.error)) return d.node;
      if ((s = u) != null && s.node) return this.state = u.failState, u.node;
      if (m.node) return this.state = m.failState, x && this.reportReservedArrowTypeParam(x), m.node;
      if ((i = d) != null && i.node) return this.state = d.failState, d.node;
      throw (a = u) != null && a.thrown ? u.error : m.thrown ? m.error : (n = d) != null && n.thrown ? d.error : ((o = u) == null ? void 0 : o.error) || m.error || ((h = d) == null ? void 0 : h.error);
    }

    reportReservedArrowTypeParam(t) {
      var e;
      t.params.length === 1 && !((e = t.extra) != null && e.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(y.ReservedArrowTypeParam, {
        at: t
      });
    }

    parseMaybeUnary(t) {
      return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(t);
    }

    parseArrow(t) {
      if (this.match(14)) {
        let e = this.tryParse(s => {
          let i = this.tsParseTypeOrTypePredicateAnnotation(14);
          return (this.canInsertSemicolon() || !this.match(19)) && s(), i;
        });
        if (e.aborted) return;
        e.thrown || (e.error && (this.state = e.failState), t.returnType = e.node);
      }

      return super.parseArrow(t);
    }

    parseAssignableListItemTypes(t) {
      this.eat(17) && (t.type !== "Identifier" && !this.state.isAmbientContext && !this.state.inType && this.raise(y.PatternIsOptional, {
        at: t
      }), t.optional = !0);
      let e = this.tsTryParseTypeAnnotation();
      return e && (t.typeAnnotation = e), this.resetEndLocation(t), t;
    }

    isAssignable(t, e) {
      switch (t.type) {
        case "TSTypeCastExpression":
          return this.isAssignable(t.expression, e);

        case "TSParameterProperty":
          return !0;

        default:
          return super.isAssignable(t, e);
      }
    }

    toAssignable(t, e = !1) {
      switch (t.type) {
        case "ParenthesizedExpression":
          this.toAssignableParenthesizedExpression(t, e);
          break;

        case "TSAsExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
          e ? this.expressionScope.recordArrowParemeterBindingError(y.UnexpectedTypeCastInParameter, {
            at: t
          }) : this.raise(y.UnexpectedTypeCastInParameter, {
            at: t
          }), this.toAssignable(t.expression, e);
          break;

        case "AssignmentExpression":
          !e && t.left.type === "TSTypeCastExpression" && (t.left = this.typeCastToParameter(t.left));

        default:
          super.toAssignable(t, e);
      }
    }

    toAssignableParenthesizedExpression(t, e) {
      switch (t.expression.type) {
        case "TSAsExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
        case "ParenthesizedExpression":
          this.toAssignable(t.expression, e);
          break;

        default:
          super.toAssignable(t, e);
      }
    }

    checkToRestConversion(t, e) {
      switch (t.type) {
        case "TSAsExpression":
        case "TSTypeAssertion":
        case "TSNonNullExpression":
          this.checkToRestConversion(t.expression, !1);
          break;

        default:
          super.checkToRestConversion(t, e);
      }
    }

    isValidLVal(t, e, s) {
      return qi({
        TSTypeCastExpression: !0,
        TSParameterProperty: "parameter",
        TSNonNullExpression: "expression",
        TSAsExpression: (s !== G || !e) && ["expression", !0],
        TSTypeAssertion: (s !== G || !e) && ["expression", !0]
      }, t) || super.isValidLVal(t, e, s);
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
        let e = this.tsParseTypeArgumentsInExpression();

        if (this.match(10)) {
          let s = super.parseMaybeDecoratorArguments(t);
          return s.typeParameters = e, s;
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

    parseMaybeDefault(...t) {
      let e = super.parseMaybeDefault(...t);
      return e.type === "AssignmentPattern" && e.typeAnnotation && e.right.start < e.typeAnnotation.start && this.raise(y.TypeAnnotationAfterAssign, {
        at: e.typeAnnotation
      }), e;
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

    toAssignableList(t) {
      for (let e = 0; e < t.length; e++) {
        let s = t[e];
        s?.type === "TSTypeCastExpression" && (t[e] = this.typeCastToParameter(s));
      }

      super.toAssignableList(...arguments);
    }

    typeCastToParameter(t) {
      return t.expression.typeAnnotation = t.typeAnnotation, this.resetEndLocation(t.expression, t.typeAnnotation.loc.end), t.expression;
    }

    shouldParseArrow(t) {
      return this.match(14) ? t.every(e => this.isAssignable(e, !0)) : super.shouldParseArrow(t);
    }

    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }

    canHaveLeadingDecorator() {
      return super.canHaveLeadingDecorator() || this.isAbstractClass();
    }

    jsxParseOpeningElementAfterName(t) {
      if (this.match(47) || this.match(51)) {
        let e = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
        e && (t.typeParameters = e);
      }

      return super.jsxParseOpeningElementAfterName(t);
    }

    getGetterSetterExpectedParamCount(t) {
      let e = super.getGetterSetterExpectedParamCount(t),
          i = this.getObjectOrClassMethodParams(t)[0];
      return i && this.isThisParam(i) ? e + 1 : e;
    }

    parseCatchClauseParam() {
      let t = super.parseCatchClauseParam(),
          e = this.tsTryParseTypeAnnotation();
      return e && (t.typeAnnotation = e, this.resetEndLocation(t)), t;
    }

    tsInAmbientContext(t) {
      let e = this.state.isAmbientContext;
      this.state.isAmbientContext = !0;

      try {
        return t();
      } finally {
        this.state.isAmbientContext = e;
      }
    }

    parseClass(t, ...e) {
      let s = this.state.inAbstractClass;
      this.state.inAbstractClass = !!t.abstract;

      try {
        return super.parseClass(t, ...e);
      } finally {
        this.state.inAbstractClass = s;
      }
    }

    tsParseAbstractDeclaration(t) {
      if (this.match(80)) return t.abstract = !0, this.parseClass(t, !0, !1);

      if (this.isContextual(125)) {
        if (!this.hasFollowingLineBreak()) return t.abstract = !0, this.raise(y.NonClassMethodPropertyHasAbstractModifer, {
          at: t
        }), this.tsParseInterfaceDeclaration(t);
      } else this.unexpected(null, 80);
    }

    parseMethod(...t) {
      let e = super.parseMethod(...t);

      if (e.abstract && (this.hasPlugin("estree") ? !!e.value.body : !!e.body)) {
        let {
          key: i
        } = e;
        this.raise(y.AbstractMethodHasImplementation, {
          at: e,
          methodName: i.type === "Identifier" && !e.computed ? i.name : `[${this.input.slice(i.start, i.end)}]`
        });
      }

      return e;
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

    parseExportSpecifier(t, e, s, i) {
      return !e && i ? (this.parseTypeOnlyImportExportSpecifier(t, !1, s), this.finishNode(t, "ExportSpecifier")) : (t.exportKind = "value", super.parseExportSpecifier(t, e, s, i));
    }

    parseImportSpecifier(t, e, s, i) {
      return !e && i ? (this.parseTypeOnlyImportExportSpecifier(t, !0, s), this.finishNode(t, "ImportSpecifier")) : (t.importKind = "value", super.parseImportSpecifier(t, e, s, i));
    }

    parseTypeOnlyImportExportSpecifier(t, e, s) {
      let i = e ? "imported" : "local",
          a = e ? "local" : "exported",
          n = t[i],
          o,
          h = !1,
          c = !0,
          u = n.loc.start;

      if (this.isContextual(93)) {
        let x = this.parseIdentifier();

        if (this.isContextual(93)) {
          let m = this.parseIdentifier();
          z(this.state.type) ? (h = !0, n = x, o = e ? this.parseIdentifier() : this.parseModuleExportName(), c = !1) : (o = m, c = !1);
        } else z(this.state.type) ? (c = !1, o = e ? this.parseIdentifier() : this.parseModuleExportName()) : (h = !0, n = x);
      } else z(this.state.type) && (h = !0, e ? (n = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(n.name, n.loc.start, !0, !0)) : n = this.parseModuleExportName());

      h && s && this.raise(e ? y.TypeModifierIsUsedInTypeImports : y.TypeModifierIsUsedInTypeExports, {
        at: u
      }), t[i] = n, t[a] = o;
      let d = e ? "importKind" : "exportKind";
      t[d] = h ? "type" : "value", c && this.eatContextual(93) && (t[a] = e ? this.parseIdentifier() : this.parseModuleExportName()), t[a] || (t[a] = V(t[i])), e && this.checkIdentifier(t[a], $);
    }

  }, "typescript");

  function Ji(r) {
    if (r.type !== "MemberExpression") return !1;
    let {
      computed: t,
      property: e
    } = r;
    return t && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? !1 : bs(r.object);
  }

  p(Ji, "isPossiblyLiteralEnum");

  function bs(r) {
    return r.type === "Identifier" ? !0 : r.type !== "MemberExpression" || r.computed ? !1 : bs(r.object);
  }

  p(bs, "isUncomputedMemberExpressionChain");
  var He = U`placeholders`(r => ({
    ClassNameIsRequired: r("A class name is required."),
    UnexpectedSpace: r("Unexpected space in placeholder.")
  })),
      Gi = p(r => class extends r {
    parsePlaceholder(t) {
      if (this.match(140)) {
        let e = this.startNode();
        return this.next(), this.assertNoSpace(), e.name = super.parseIdentifier(!0), this.assertNoSpace(), this.expect(140), this.finishPlaceholder(e, t);
      }
    }

    finishPlaceholder(t, e) {
      let s = !!(t.expectedNode && t.type === "Placeholder");
      return t.expectedNode = e, s ? t : this.finishNode(t, "Placeholder");
    }

    getTokenFromCode(t) {
      return t === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(140, 2) : super.getTokenFromCode(...arguments);
    }

    parseExprAtom() {
      return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments);
    }

    parseIdentifier() {
      return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments);
    }

    checkReservedWord(t) {
      t !== void 0 && super.checkReservedWord(...arguments);
    }

    parseBindingAtom() {
      return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments);
    }

    isValidLVal(t, ...e) {
      return t === "Placeholder" || super.isValidLVal(t, ...e);
    }

    toAssignable(t) {
      t && t.type === "Placeholder" && t.expectedNode === "Expression" ? t.expectedNode = "Pattern" : super.toAssignable(...arguments);
    }

    isLet(t) {
      return super.isLet(t) ? !0 : !this.isContextual(99) || t ? !1 : this.lookahead().type === 140;
    }

    verifyBreakContinue(t) {
      t.label && t.label.type === "Placeholder" || super.verifyBreakContinue(...arguments);
    }

    parseExpressionStatement(t, e) {
      if (e.type !== "Placeholder" || e.extra && e.extra.parenthesized) return super.parseExpressionStatement(...arguments);

      if (this.match(14)) {
        let s = t;
        return s.label = this.finishPlaceholder(e, "Identifier"), this.next(), s.body = this.parseStatement("label"), this.finishNode(s, "LabeledStatement");
      }

      return this.semicolon(), t.name = e.name, this.finishPlaceholder(t, "Statement");
    }

    parseBlock() {
      return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments);
    }

    parseFunctionId() {
      return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments);
    }

    parseClass(t, e, s) {
      let i = e ? "ClassDeclaration" : "ClassExpression";
      this.next(), this.takeDecorators(t);
      let a = this.state.strict,
          n = this.parsePlaceholder("Identifier");
      if (n) {
        if (this.match(81) || this.match(140) || this.match(5)) t.id = n;else {
          if (s || !e) return t.id = null, t.body = this.finishPlaceholder(n, "ClassBody"), this.finishNode(t, i);
          throw this.raise(He.ClassNameIsRequired, {
            at: this.state.startLoc
          });
        }
      } else this.parseClassId(t, e, s);
      return this.parseClassSuper(t), t.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!t.superClass, a), this.finishNode(t, i);
    }

    parseExport(t) {
      let e = this.parsePlaceholder("Identifier");
      if (!e) return super.parseExport(...arguments);
      if (!this.isContextual(97) && !this.match(12)) return t.specifiers = [], t.source = null, t.declaration = this.finishPlaceholder(e, "Declaration"), this.finishNode(t, "ExportNamedDeclaration");
      this.expectPlugin("exportDefaultFrom");
      let s = this.startNode();
      return s.exported = e, t.specifiers = [this.finishNode(s, "ExportDefaultSpecifier")], super.parseExport(t);
    }

    isExportDefaultSpecifier() {
      if (this.match(65)) {
        let t = this.nextTokenStart();
        if (this.isUnparsedContextual(t, "from") && this.input.startsWith(W(140), this.nextTokenStartSince(t + 4))) return !0;
      }

      return super.isExportDefaultSpecifier();
    }

    maybeParseExportDefaultSpecifier(t) {
      return t.specifiers && t.specifiers.length > 0 ? !0 : super.maybeParseExportDefaultSpecifier(...arguments);
    }

    checkExport(t) {
      let {
        specifiers: e
      } = t;
      e != null && e.length && (t.specifiers = e.filter(s => s.exported.type === "Placeholder")), super.checkExport(t), t.specifiers = e;
    }

    parseImport(t) {
      let e = this.parsePlaceholder("Identifier");
      if (!e) return super.parseImport(...arguments);
      if (t.specifiers = [], !this.isContextual(97) && !this.match(12)) return t.source = this.finishPlaceholder(e, "StringLiteral"), this.semicolon(), this.finishNode(t, "ImportDeclaration");
      let s = this.startNodeAtNode(e);
      return s.local = e, this.finishNode(s, "ImportDefaultSpecifier"), t.specifiers.push(s), this.eat(12) && (this.maybeParseStarImportSpecifier(t) || this.parseNamedImportSpecifiers(t)), this.expectContextual(97), t.source = this.parseImportSource(), this.semicolon(), this.finishNode(t, "ImportDeclaration");
    }

    parseImportSource() {
      return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments);
    }

    assertNoSpace() {
      this.state.start > this.state.lastTokEndLoc.index && this.raise(He.UnexpectedSpace, {
        at: this.state.lastTokEndLoc
      });
    }

  }, "placeholders"),
      Yi = p(r => class extends r {
    parseV8Intrinsic() {
      if (this.match(54)) {
        let t = this.state.startLoc,
            e = this.startNode();

        if (this.next(), C(this.state.type)) {
          let s = this.parseIdentifierName(this.state.start),
              i = this.createIdentifier(e, s);
          if (i.type = "V8IntrinsicIdentifier", this.match(10)) return i;
        }

        this.unexpected(t);
      }
    }

    parseExprAtom() {
      return this.parseV8Intrinsic() || super.parseExprAtom(...arguments);
    }

  }, "v8intrinsic");

  function k(r, t) {
    let [e, s] = typeof t == "string" ? [t, {}] : t,
        i = Object.keys(s),
        a = i.length === 0;
    return r.some(n => {
      if (typeof n == "string") return a && n === e;
      {
        let [o, h] = n;
        if (o !== e) return !1;

        for (let c of i) if (h[c] !== s[c]) return !1;

        return !0;
      }
    });
  }

  p(k, "hasPlugin");

  function mt(r, t, e) {
    let s = r.find(i => Array.isArray(i) ? i[0] === t : i === t);
    return s && Array.isArray(s) ? s[1][e] : null;
  }

  p(mt, "getPluginOption");
  var _e = ["minimal", "fsharp", "hack", "smart"],
      We = ["^^", "@@", "^", "%", "#"],
      Xe = ["hash", "bar"];

  function Qi(r) {
    if (k(r, "decorators")) {
      if (k(r, "decorators-legacy")) throw new Error("Cannot use the decorators and decorators-legacy plugin together");
      let t = mt(r, "decorators", "decoratorsBeforeExport");
      if (t == null) throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.");
      if (typeof t != "boolean") throw new Error("'decoratorsBeforeExport' must be a boolean.");
    }

    if (k(r, "flow") && k(r, "typescript")) throw new Error("Cannot combine flow and typescript plugins.");
    if (k(r, "placeholders") && k(r, "v8intrinsic")) throw new Error("Cannot combine placeholders and v8intrinsic plugins.");

    if (k(r, "pipelineOperator")) {
      let t = mt(r, "pipelineOperator", "proposal");

      if (!_e.includes(t)) {
        let s = _e.map(i => `"${i}"`).join(", ");

        throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${s}.`);
      }

      let e = k(r, ["recordAndTuple", {
        syntaxType: "hash"
      }]);

      if (t === "hack") {
        if (k(r, "placeholders")) throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
        if (k(r, "v8intrinsic")) throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
        let s = mt(r, "pipelineOperator", "topicToken");

        if (!We.includes(s)) {
          let i = We.map(a => `"${a}"`).join(", ");
          throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${i}.`);
        }

        if (s === "#" && e) throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
      } else if (t === "smart" && e) throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
    }

    if (k(r, "moduleAttributes")) {
      if (k(r, "importAssertions")) throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
      if (mt(r, "moduleAttributes", "version") !== "may-2020") throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
    }

    if (k(r, "recordAndTuple") && !Xe.includes(mt(r, "recordAndTuple", "syntaxType"))) throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + Xe.map(t => `'${t}'`).join(", "));

    if (k(r, "asyncDoExpressions") && !k(r, "doExpressions")) {
      let t = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
      throw t.missingPlugins = "doExpressions", t;
    }
  }

  p(Qi, "validatePlugins");
  var Ts = {
    estree: Vs,
    jsx: Vi,
    flow: $i,
    typescript: Xi,
    v8intrinsic: Yi,
    placeholders: Gi
  },
      Zi = Object.keys(Ts),
      Je = {
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

  function tr(r) {
    let t = {};

    for (let e of Object.keys(Je)) t[e] = r && r[e] != null ? r[e] : Je[e];

    return t;
  }

  p(tr, "getOptions");
  var er = p((r, t) => Object.hasOwnProperty.call(r, t) && r[t], "getOwn"),
      gs = p(r => r.type === "ParenthesizedExpression" ? gs(r.expression) : r, "unwrapParenthesizedExpression"),
      Kt = class extends zt {
    toAssignable(t, e = !1) {
      var s, i;
      let a;

      switch ((t.type === "ParenthesizedExpression" || (s = t.extra) != null && s.parenthesized) && (a = gs(t), e ? a.type === "Identifier" ? this.expressionScope.recordArrowParemeterBindingError(l.InvalidParenthesizedAssignment, {
        at: t
      }) : a.type !== "MemberExpression" && this.raise(l.InvalidParenthesizedAssignment, {
        at: t
      }) : this.raise(l.InvalidParenthesizedAssignment, {
        at: t
      })), t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;

        case "ObjectExpression":
          t.type = "ObjectPattern";

          for (let o = 0, h = t.properties.length, c = h - 1; o < h; o++) {
            var n;
            let u = t.properties[o],
                d = o === c;
            this.toAssignableObjectExpressionProp(u, d, e), d && u.type === "RestElement" && (n = t.extra) != null && n.trailingCommaLoc && this.raise(l.RestTrailingComma, {
              at: t.extra.trailingCommaLoc
            });
          }

          break;

        case "ObjectProperty":
          {
            let {
              key: o,
              value: h
            } = t;
            this.isPrivateName(o) && this.classScope.usePrivateName(this.getPrivateNameSV(o), o.loc.start), this.toAssignable(h, e);
            break;
          }

        case "SpreadElement":
          throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");

        case "ArrayExpression":
          t.type = "ArrayPattern", this.toAssignableList(t.elements, (i = t.extra) == null ? void 0 : i.trailingCommaLoc, e);
          break;

        case "AssignmentExpression":
          t.operator !== "=" && this.raise(l.MissingEqInAssignment, {
            at: t.left.loc.end
          }), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
          break;

        case "ParenthesizedExpression":
          this.toAssignable(a, e);
          break;
      }
    }

    toAssignableObjectExpressionProp(t, e, s) {
      if (t.type === "ObjectMethod") this.raise(t.kind === "get" || t.kind === "set" ? l.PatternHasAccessor : l.PatternHasMethod, {
        at: t.key
      });else if (t.type === "SpreadElement") {
        t.type = "RestElement";
        let i = t.argument;
        this.checkToRestConversion(i, !1), this.toAssignable(i, s), e || this.raise(l.RestTrailingComma, {
          at: t
        });
      } else this.toAssignable(t, s);
    }

    toAssignableList(t, e, s) {
      let i = t.length - 1;

      for (let a = 0; a <= i; a++) {
        let n = t[a];

        if (!!n) {
          if (n.type === "SpreadElement") {
            n.type = "RestElement";
            let o = n.argument;
            this.checkToRestConversion(o, !0), this.toAssignable(o, s);
          } else this.toAssignable(n, s);

          n.type === "RestElement" && (a < i ? this.raise(l.RestTrailingComma, {
            at: n
          }) : e && this.raise(l.RestTrailingComma, {
            at: e
          }));
        }
      }
    }

    isAssignable(t, e) {
      switch (t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          return !0;

        case "ObjectExpression":
          {
            let s = t.properties.length - 1;
            return t.properties.every((i, a) => i.type !== "ObjectMethod" && (a === s || i.type !== "SpreadElement") && this.isAssignable(i));
          }

        case "ObjectProperty":
          return this.isAssignable(t.value);

        case "SpreadElement":
          return this.isAssignable(t.argument);

        case "ArrayExpression":
          return t.elements.every(s => s === null || this.isAssignable(s));

        case "AssignmentExpression":
          return t.operator === "=";

        case "ParenthesizedExpression":
          return this.isAssignable(t.expression);

        case "MemberExpression":
        case "OptionalMemberExpression":
          return !e;

        default:
          return !1;
      }
    }

    toReferencedList(t, e) {
      return t;
    }

    toReferencedListDeep(t, e) {
      this.toReferencedList(t, e);

      for (let s of t) s?.type === "ArrayExpression" && this.toReferencedListDeep(s.elements);
    }

    parseSpread(t, e) {
      let s = this.startNode();
      return this.next(), s.argument = this.parseMaybeAssignAllowIn(t, void 0, e), this.finishNode(s, "SpreadElement");
    }

    parseRestBinding() {
      let t = this.startNode();
      return this.next(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
    }

    parseBindingAtom() {
      switch (this.state.type) {
        case 0:
          {
            let t = this.startNode();
            return this.next(), t.elements = this.parseBindingList(3, 93, !0), this.finishNode(t, "ArrayPattern");
          }

        case 5:
          return this.parseObjectLike(8, !0);
      }

      return this.parseIdentifier();
    }

    parseBindingList(t, e, s, i) {
      let a = [],
          n = !0;

      for (; !this.eat(t);) if (n ? n = !1 : this.expect(12), s && this.match(12)) a.push(null);else {
        if (this.eat(t)) break;

        if (this.match(21)) {
          if (a.push(this.parseAssignableListItemTypes(this.parseRestBinding())), !this.checkCommaAfterRest(e)) {
            this.expect(t);
            break;
          }
        } else {
          let o = [];

          for (this.match(26) && this.hasPlugin("decorators") && this.raise(l.UnsupportedParameterDecorator, {
            at: this.state.startLoc
          }); this.match(26);) o.push(this.parseDecorator());

          a.push(this.parseAssignableListItem(i, o));
        }
      }

      return a;
    }

    parseBindingRestProperty(t) {
      return this.next(), t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
    }

    parseBindingProperty() {
      let t = this.startNode(),
          {
        type: e,
        start: s,
        startLoc: i
      } = this.state;
      return e === 21 ? this.parseBindingRestProperty(t) : (e === 134 ? (this.expectPlugin("destructuringPrivate", i), this.classScope.usePrivateName(this.state.value, i), t.key = this.parsePrivateName()) : this.parsePropertyName(t), t.method = !1, this.parseObjPropValue(t, s, i, !1, !1, !0, !1), t);
    }

    parseAssignableListItem(t, e) {
      let s = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(s);
      let i = this.parseMaybeDefault(s.start, s.loc.start, s);
      return e.length && (s.decorators = e), i;
    }

    parseAssignableListItemTypes(t) {
      return t;
    }

    parseMaybeDefault(t, e, s) {
      var i, a, n;
      if (e = (i = e) != null ? i : this.state.startLoc, t = (a = t) != null ? a : this.state.start, s = (n = s) != null ? n : this.parseBindingAtom(), !this.eat(29)) return s;
      let o = this.startNodeAt(t, e);
      return o.left = s, o.right = this.parseMaybeAssignAllowIn(), this.finishNode(o, "AssignmentPattern");
    }

    isValidLVal(t, e, s) {
      return er({
        AssignmentPattern: "left",
        RestElement: "argument",
        ObjectProperty: "value",
        ParenthesizedExpression: "expression",
        ArrayPattern: "elements",
        ObjectPattern: "properties"
      }, t);
    }

    checkLVal(t, {
      in: e,
      binding: s = G,
      checkClashes: i = !1,
      strictModeChanged: a = !1,
      allowingSloppyLetBinding: n = !(s & X),
      hasParenthesizedAncestor: o = !1
    }) {
      var h;
      let c = t.type;
      if (this.isObjectMethod(t)) return;

      if (c === "MemberExpression") {
        s !== G && this.raise(l.InvalidPropertyBindingPattern, {
          at: t
        });
        return;
      }

      if (t.type === "Identifier") {
        this.checkIdentifier(t, s, a, n);
        let {
          name: T
        } = t;
        i && (i.has(T) ? this.raise(l.ParamDupe, {
          at: t
        }) : i.add(T));
        return;
      }

      let u = this.isValidLVal(t.type, !(o || (h = t.extra) != null && h.parenthesized) && e.type === "AssignmentExpression", s);
      if (u === !0) return;

      if (u === !1) {
        let T = s === G ? l.InvalidLhs : l.InvalidLhsBinding;
        this.raise(T, {
          at: t,
          ancestor: e.type === "UpdateExpression" ? {
            type: "UpdateExpression",
            prefix: e.prefix
          } : {
            type: e.type
          }
        });
        return;
      }

      let [d, x] = Array.isArray(u) ? u : [u, c === "ParenthesizedExpression"],
          m = t.type === "ArrayPattern" || t.type === "ObjectPattern" || t.type === "ParenthesizedExpression" ? t : e;

      for (let T of [].concat(t[d])) T && this.checkLVal(T, {
        in: m,
        binding: s,
        checkClashes: i,
        allowingSloppyLetBinding: n,
        strictModeChanged: a,
        hasParenthesizedAncestor: x
      });
    }

    checkIdentifier(t, e, s = !1, i = !(e & X)) {
      this.state.strict && (s ? as(t.name, this.inModule) : rs(t.name)) && (e === G ? this.raise(l.StrictEvalArguments, {
        at: t,
        referenceName: t.name
      }) : this.raise(l.StrictEvalArgumentsBinding, {
        at: t,
        bindingName: t.name
      })), !i && t.name === "let" && this.raise(l.LetInLexicalBinding, {
        at: t
      }), e & G || this.declareNameFromIdentifier(t, e);
    }

    declareNameFromIdentifier(t, e) {
      this.scope.declareName(t.name, e, t.loc.start);
    }

    checkToRestConversion(t, e) {
      switch (t.type) {
        case "ParenthesizedExpression":
          this.checkToRestConversion(t.expression, e);
          break;

        case "Identifier":
        case "MemberExpression":
          break;

        case "ArrayExpression":
        case "ObjectExpression":
          if (e) break;

        default:
          this.raise(l.InvalidRestAssignmentPattern, {
            at: t
          });
      }
    }

    checkCommaAfterRest(t) {
      return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? l.RestTrailingComma : l.ElementAfterRest, {
        at: this.state.startLoc
      }), !0) : !1;
    }

  };
  p(Kt, "LValParser");
  var Ht = class extends Kt {
    checkProto(t, e, s, i) {
      if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand) return;
      let a = t.key;

      if ((a.type === "Identifier" ? a.name : a.value) === "__proto__") {
        if (e) {
          this.raise(l.RecordNoProto, {
            at: a
          });
          return;
        }

        s.used && (i ? i.doubleProtoLoc === null && (i.doubleProtoLoc = a.loc.start) : this.raise(l.DuplicateProto, {
          at: a
        })), s.used = !0;
      }
    }

    shouldExitDescending(t, e) {
      return t.type === "ArrowFunctionExpression" && t.start === e;
    }

    getExpression() {
      this.enterInitialScopes(), this.nextToken();
      let t = this.parseExpression();
      return this.match(135) || this.unexpected(), this.finalizeRemainingComments(), t.comments = this.state.comments, t.errors = this.state.errors, this.options.tokens && (t.tokens = this.tokens), t;
    }

    parseExpression(t, e) {
      return t ? this.disallowInAnd(() => this.parseExpressionBase(e)) : this.allowInAnd(() => this.parseExpressionBase(e));
    }

    parseExpressionBase(t) {
      let e = this.state.start,
          s = this.state.startLoc,
          i = this.parseMaybeAssign(t);

      if (this.match(12)) {
        let a = this.startNodeAt(e, s);

        for (a.expressions = [i]; this.eat(12);) a.expressions.push(this.parseMaybeAssign(t));

        return this.toReferencedList(a.expressions), this.finishNode(a, "SequenceExpression");
      }

      return i;
    }

    parseMaybeAssignDisallowIn(t, e) {
      return this.disallowInAnd(() => this.parseMaybeAssign(t, e));
    }

    parseMaybeAssignAllowIn(t, e) {
      return this.allowInAnd(() => this.parseMaybeAssign(t, e));
    }

    setOptionalParametersError(t, e) {
      var s;
      t.optionalParametersLoc = (s = e?.loc) != null ? s : this.state.startLoc;
    }

    parseMaybeAssign(t, e) {
      let s = this.state.start,
          i = this.state.startLoc;

      if (this.isContextual(105) && this.prodParam.hasYield) {
        let h = this.parseYield();
        return e && (h = e.call(this, h, s, i)), h;
      }

      let a;
      t ? a = !1 : (t = new et(), a = !0);
      let {
        type: n
      } = this.state;
      (n === 10 || C(n)) && (this.state.potentialArrowAt = this.state.start);
      let o = this.parseMaybeConditional(t);

      if (e && (o = e.call(this, o, s, i)), Ws(this.state.type)) {
        let h = this.startNodeAt(s, i),
            c = this.state.value;
        return h.operator = c, this.match(29) ? (this.toAssignable(o, !0), h.left = o, t.doubleProtoLoc != null && t.doubleProtoLoc.index >= s && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= s && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= s && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null)) : h.left = o, this.next(), h.right = this.parseMaybeAssign(), this.checkLVal(o, {
          in: this.finishNode(h, "AssignmentExpression")
        }), h;
      } else a && this.checkExpressionErrors(t, !0);

      return o;
    }

    parseMaybeConditional(t) {
      let e = this.state.start,
          s = this.state.startLoc,
          i = this.state.potentialArrowAt,
          a = this.parseExprOps(t);
      return this.shouldExitDescending(a, i) ? a : this.parseConditional(a, e, s, t);
    }

    parseConditional(t, e, s, i) {
      if (this.eat(17)) {
        let a = this.startNodeAt(e, s);
        return a.test = t, a.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), a.alternate = this.parseMaybeAssign(), this.finishNode(a, "ConditionalExpression");
      }

      return t;
    }

    parseMaybeUnaryOrPrivate(t) {
      return this.match(134) ? this.parsePrivateName() : this.parseMaybeUnary(t);
    }

    parseExprOps(t) {
      let e = this.state.start,
          s = this.state.startLoc,
          i = this.state.potentialArrowAt,
          a = this.parseMaybeUnaryOrPrivate(t);
      return this.shouldExitDescending(a, i) ? a : this.parseExprOp(a, e, s, -1);
    }

    parseExprOp(t, e, s, i) {
      if (this.isPrivateName(t)) {
        let n = this.getPrivateNameSV(t);
        (i >= It(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(l.PrivateInExpectedIn, {
          at: t,
          identifierName: n
        }), this.classScope.usePrivateName(n, t.loc.start);
      }

      let a = this.state.type;

      if (Js(a) && (this.prodParam.hasIn || !this.match(58))) {
        let n = It(a);

        if (n > i) {
          if (a === 39) {
            if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody) return t;
            this.checkPipelineAtInfixOperator(t, s);
          }

          let o = this.startNodeAt(e, s);
          o.left = t, o.operator = this.state.value;
          let h = a === 41 || a === 42,
              c = a === 40;
          if (c && (n = It(42)), this.next(), a === 39 && this.hasPlugin(["pipelineOperator", {
            proposal: "minimal"
          }]) && this.state.type === 96 && this.prodParam.hasAwait) throw this.raise(l.UnexpectedAwaitAfterPipelineBody, {
            at: this.state.startLoc
          });
          o.right = this.parseExprOpRightExpr(a, n), this.finishNode(o, h || c ? "LogicalExpression" : "BinaryExpression");
          let u = this.state.type;
          if (c && (u === 41 || u === 42) || h && u === 40) throw this.raise(l.MixingCoalesceWithLogical, {
            at: this.state.startLoc
          });
          return this.parseExprOp(o, e, s, i);
        }
      }

      return t;
    }

    parseExprOpRightExpr(t, e) {
      let s = this.state.start,
          i = this.state.startLoc;

      switch (t) {
        case 39:
          switch (this.getPluginOption("pipelineOperator", "proposal")) {
            case "hack":
              return this.withTopicBindingContext(() => this.parseHackPipeBody());

            case "smart":
              return this.withTopicBindingContext(() => {
                if (this.prodParam.hasYield && this.isContextual(105)) throw this.raise(l.PipeBodyIsTighter, {
                  at: this.state.startLoc
                });
                return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, e), s, i);
              });

            case "fsharp":
              return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(e));
          }

        default:
          return this.parseExprOpBaseRightExpr(t, e);
      }
    }

    parseExprOpBaseRightExpr(t, e) {
      let s = this.state.start,
          i = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, i, ei(t) ? e - 1 : e);
    }

    parseHackPipeBody() {
      var t;
      let {
        startLoc: e
      } = this.state,
          s = this.parseMaybeAssign();
      return Bs.has(s.type) && !((t = s.extra) != null && t.parenthesized) && this.raise(l.PipeUnparenthesizedBody, {
        at: e,
        type: s.type
      }), this.topicReferenceWasUsedInCurrentContext() || this.raise(l.PipeTopicUnused, {
        at: e
      }), s;
    }

    checkExponentialAfterUnary(t) {
      this.match(57) && this.raise(l.UnexpectedTokenUnaryExponentiation, {
        at: t.argument
      });
    }

    parseMaybeUnary(t, e) {
      let s = this.state.start,
          i = this.state.startLoc,
          a = this.isContextual(96);

      if (a && this.isAwaitAllowed()) {
        this.next();
        let c = this.parseAwait(s, i);
        return e || this.checkExponentialAfterUnary(c), c;
      }

      let n = this.match(34),
          o = this.startNode();

      if (Ys(this.state.type)) {
        o.operator = this.state.value, o.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
        let c = this.match(89);

        if (this.next(), o.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), this.state.strict && c) {
          let u = o.argument;
          u.type === "Identifier" ? this.raise(l.StrictDelete, {
            at: o
          }) : this.hasPropertyAsPrivateName(u) && this.raise(l.DeletePrivateField, {
            at: o
          });
        }

        if (!n) return e || this.checkExponentialAfterUnary(o), this.finishNode(o, "UnaryExpression");
      }

      let h = this.parseUpdate(o, n, t);

      if (a) {
        let {
          type: c
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? pe(c) : pe(c) && !this.match(54)) && !this.isAmbiguousAwait()) return this.raiseOverwrite(l.AwaitNotInAsyncContext, {
          at: i
        }), this.parseAwait(s, i);
      }

      return h;
    }

    parseUpdate(t, e, s) {
      if (e) return this.checkLVal(t.argument, {
        in: this.finishNode(t, "UpdateExpression")
      }), t;
      let i = this.state.start,
          a = this.state.startLoc,
          n = this.parseExprSubscripts(s);
      if (this.checkExpressionErrors(s, !1)) return n;

      for (; Gs(this.state.type) && !this.canInsertSemicolon();) {
        let o = this.startNodeAt(i, a);
        o.operator = this.state.value, o.prefix = !1, o.argument = n, this.next(), this.checkLVal(n, {
          in: n = this.finishNode(o, "UpdateExpression")
        });
      }

      return n;
    }

    parseExprSubscripts(t) {
      let e = this.state.start,
          s = this.state.startLoc,
          i = this.state.potentialArrowAt,
          a = this.parseExprAtom(t);
      return this.shouldExitDescending(a, i) ? a : this.parseSubscripts(a, e, s);
    }

    parseSubscripts(t, e, s, i) {
      let a = {
        optionalChainMember: !1,
        maybeAsyncArrow: this.atPossibleAsyncArrow(t),
        stop: !1
      };

      do t = this.parseSubscript(t, e, s, i, a), a.maybeAsyncArrow = !1; while (!a.stop);

      return t;
    }

    parseSubscript(t, e, s, i, a) {
      let {
        type: n
      } = this.state;
      if (!i && n === 15) return this.parseBind(t, e, s, i, a);
      if (Wt(n)) return this.parseTaggedTemplateExpression(t, e, s, a);
      let o = !1;

      if (n === 18) {
        if (i && this.lookaheadCharCode() === 40) return a.stop = !0, t;
        a.optionalChainMember = o = !0, this.next();
      }

      if (!i && this.match(10)) return this.parseCoverCallAndAsyncArrowHead(t, e, s, a, o);
      {
        let h = this.eat(0);
        return h || o || this.eat(16) ? this.parseMember(t, e, s, a, h, o) : (a.stop = !0, t);
      }
    }

    parseMember(t, e, s, i, a, n) {
      let o = this.startNodeAt(e, s);
      return o.object = t, o.computed = a, a ? (o.property = this.parseExpression(), this.expect(3)) : this.match(134) ? (t.type === "Super" && this.raise(l.SuperPrivateField, {
        at: s
      }), this.classScope.usePrivateName(this.state.value, this.state.startLoc), o.property = this.parsePrivateName()) : o.property = this.parseIdentifier(!0), i.optionalChainMember ? (o.optional = n, this.finishNode(o, "OptionalMemberExpression")) : this.finishNode(o, "MemberExpression");
    }

    parseBind(t, e, s, i, a) {
      let n = this.startNodeAt(e, s);
      return n.object = t, this.next(), n.callee = this.parseNoCallExpr(), a.stop = !0, this.parseSubscripts(this.finishNode(n, "BindExpression"), e, s, i);
    }

    parseCoverCallAndAsyncArrowHead(t, e, s, i, a) {
      let n = this.state.maybeInArrowParameters,
          o = null;
      this.state.maybeInArrowParameters = !0, this.next();
      let h = this.startNodeAt(e, s);
      h.callee = t;
      let {
        maybeAsyncArrow: c,
        optionalChainMember: u
      } = i;
      return c && (this.expressionScope.enter(Di()), o = new et()), u && (h.optional = a), a ? h.arguments = this.parseCallExpressionArguments(11) : h.arguments = this.parseCallExpressionArguments(11, t.type === "Import", t.type !== "Super", h, o), this.finishCallExpression(h, u), c && this.shouldParseAsyncArrow() && !a ? (i.stop = !0, this.checkDestructuringPrivate(o), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), h = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e, s), h)) : (c && (this.checkExpressionErrors(o, !0), this.expressionScope.exit()), this.toReferencedArguments(h)), this.state.maybeInArrowParameters = n, h;
    }

    toReferencedArguments(t, e) {
      this.toReferencedListDeep(t.arguments, e);
    }

    parseTaggedTemplateExpression(t, e, s, i) {
      let a = this.startNodeAt(e, s);
      return a.tag = t, a.quasi = this.parseTemplate(!0), i.optionalChainMember && this.raise(l.OptionalChainingNoTemplate, {
        at: s
      }), this.finishNode(a, "TaggedTemplateExpression");
    }

    atPossibleAsyncArrow(t) {
      return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && t.start === this.state.potentialArrowAt;
    }

    finishCallExpression(t, e) {
      if (t.callee.type === "Import") if (t.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), t.arguments.length === 0 || t.arguments.length > 2) this.raise(l.ImportCallArity, {
        at: t,
        maxArgumentCount: this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1
      });else for (let s of t.arguments) s.type === "SpreadElement" && this.raise(l.ImportCallSpreadArgument, {
        at: s
      });
      return this.finishNode(t, e ? "OptionalCallExpression" : "CallExpression");
    }

    parseCallExpressionArguments(t, e, s, i, a) {
      let n = [],
          o = !0,
          h = this.state.inFSharpPipelineDirectBody;

      for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(t);) {
        if (o) o = !1;else if (this.expect(12), this.match(t)) {
          e && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(l.ImportCallArgumentTrailingComma, {
            at: this.state.lastTokStartLoc
          }), i && this.addTrailingCommaExtraToNode(i), this.next();
          break;
        }
        n.push(this.parseExprListItem(!1, a, s));
      }

      return this.state.inFSharpPipelineDirectBody = h, n;
    }

    shouldParseAsyncArrow() {
      return this.match(19) && !this.canInsertSemicolon();
    }

    parseAsyncArrowFromCallExpression(t, e) {
      var s;
      return this.resetPreviousNodeTrailingComments(e), this.expect(19), this.parseArrowExpression(t, e.arguments, !0, (s = e.extra) == null ? void 0 : s.trailingCommaLoc), e.innerComments && At(t, e.innerComments), e.callee.trailingComments && At(t, e.callee.trailingComments), t;
    }

    parseNoCallExpr() {
      let t = this.state.start,
          e = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), t, e, !0);
    }

    parseExprAtom(t) {
      let e,
          {
        type: s
      } = this.state;

      switch (s) {
        case 79:
          return this.parseSuper();

        case 83:
          return e = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(e) : (this.match(10) || this.raise(l.UnsupportedImport, {
            at: this.state.lastTokStartLoc
          }), this.finishNode(e, "Import"));

        case 78:
          return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");

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
          return this.parseArrayLike(3, !0, !1, t);

        case 6:
        case 7:
          return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);

        case 5:
          return this.parseObjectLike(8, !1, !1, t);

        case 68:
          return this.parseFunctionOrFunctionSent();

        case 26:
          this.parseDecorators();

        case 80:
          return e = this.startNode(), this.takeDecorators(e), this.parseClass(e, !1);

        case 77:
          return this.parseNewOrNewTarget();

        case 25:
        case 24:
          return this.parseTemplate(!1);

        case 15:
          {
            e = this.startNode(), this.next(), e.object = null;
            let i = e.callee = this.parseNoCallExpr();
            if (i.type === "MemberExpression") return this.finishNode(e, "BindExpression");
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

            if (R(i) || i === 62) {
              this.expectOnePlugin(["jsx", "flow", "typescript"]);
              break;
            } else throw this.unexpected();
          }

        default:
          if (C(s)) {
            if (this.isContextual(123) && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak()) return this.parseModuleExpression();
            let i = this.state.potentialArrowAt === this.state.start,
                a = this.state.containsEsc,
                n = this.parseIdentifier();

            if (!a && n.name === "async" && !this.canInsertSemicolon()) {
              let {
                type: o
              } = this.state;
              if (o === 68) return this.resetPreviousNodeTrailingComments(n), this.next(), this.parseFunction(this.startNodeAtNode(n), void 0, !0);
              if (C(o)) return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(n)) : n;
              if (o === 90) return this.resetPreviousNodeTrailingComments(n), this.parseDo(this.startNodeAtNode(n), !0);
            }

            return i && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(n), [n], !1)) : n;
          } else throw this.unexpected();

      }
    }

    parseTopicReferenceThenEqualsSign(t, e) {
      let s = this.getPluginOption("pipelineOperator", "proposal");
      if (s) return this.state.type = t, this.state.value = e, this.state.pos--, this.state.end--, this.state.endLoc = v(this.state.endLoc, -1), this.parseTopicReference(s);
      throw this.unexpected();
    }

    parseTopicReference(t) {
      let e = this.startNode(),
          s = this.state.startLoc,
          i = this.state.type;
      return this.next(), this.finishTopicReference(e, s, t, i);
    }

    finishTopicReference(t, e, s, i) {
      if (this.testTopicReferenceConfiguration(s, e, i)) {
        let a = s === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference";
        return this.topicReferenceIsAllowedInCurrentContext() || this.raise(s === "smart" ? l.PrimaryTopicNotAllowed : l.PipeTopicUnbound, {
          at: e
        }), this.registerTopicReference(), this.finishNode(t, a);
      } else throw this.raise(l.PipeTopicUnconfiguredToken, {
        at: e,
        token: W(i)
      });
    }

    testTopicReferenceConfiguration(t, e, s) {
      switch (t) {
        case "hack":
          return this.hasPlugin(["pipelineOperator", {
            topicToken: W(s)
          }]);

        case "smart":
          return s === 27;

        default:
          throw this.raise(l.PipeTopicRequiresHackPipes, {
            at: e
          });
      }
    }

    parseAsyncArrowUnaryFunction(t) {
      this.prodParam.enter(jt(!0, this.prodParam.hasYield));
      let e = [this.parseIdentifier()];
      return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(l.LineTerminatorBeforeArrow, {
        at: this.state.curPosition()
      }), this.expect(19), this.parseArrowExpression(t, e, !0), t;
    }

    parseDo(t, e) {
      this.expectPlugin("doExpressions"), e && this.expectPlugin("asyncDoExpressions"), t.async = e, this.next();
      let s = this.state.labels;
      return this.state.labels = [], e ? (this.prodParam.enter(Zt), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = s, this.finishNode(t, "DoExpression");
    }

    parseSuper() {
      let t = this.startNode();
      return this.next(), this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod ? this.raise(l.SuperNotAllowed, {
        at: t
      }) : !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(l.UnexpectedSuper, {
        at: t
      }), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(l.UnsupportedSuper, {
        at: t
      }), this.finishNode(t, "Super");
    }

    parsePrivateName() {
      let t = this.startNode(),
          e = this.startNodeAt(this.state.start + 1, new O(this.state.curLine, this.state.start + 1 - this.state.lineStart, this.state.start + 1)),
          s = this.state.value;
      return this.next(), t.id = this.createIdentifier(e, s), this.finishNode(t, "PrivateName");
    }

    parseFunctionOrFunctionSent() {
      let t = this.startNode();

      if (this.next(), this.prodParam.hasYield && this.match(16)) {
        let e = this.createIdentifier(this.startNodeAtNode(t), "function");
        return this.next(), this.match(102) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t, e, "sent");
      }

      return this.parseFunction(t);
    }

    parseMetaProperty(t, e, s) {
      t.meta = e;
      let i = this.state.containsEsc;
      return t.property = this.parseIdentifier(!0), (t.property.name !== s || i) && this.raise(l.UnsupportedMetaProperty, {
        at: t.property,
        target: e.name,
        onlyValidPropertyName: s
      }), this.finishNode(t, "MetaProperty");
    }

    parseImportMetaProperty(t) {
      let e = this.createIdentifier(this.startNodeAtNode(t), "import");
      return this.next(), this.isContextual(100) && (this.inModule || this.raise(l.ImportMetaOutsideModule, {
        at: e
      }), this.sawUnambiguousESM = !0), this.parseMetaProperty(t, e, "meta");
    }

    parseLiteralAtNode(t, e, s) {
      return this.addExtra(s, "rawValue", t), this.addExtra(s, "raw", this.input.slice(s.start, this.state.end)), s.value = t, this.next(), this.finishNode(s, e);
    }

    parseLiteral(t, e) {
      let s = this.startNode();
      return this.parseLiteralAtNode(t, e, s);
    }

    parseStringLiteral(t) {
      return this.parseLiteral(t, "StringLiteral");
    }

    parseNumericLiteral(t) {
      return this.parseLiteral(t, "NumericLiteral");
    }

    parseBigIntLiteral(t) {
      return this.parseLiteral(t, "BigIntLiteral");
    }

    parseDecimalLiteral(t) {
      return this.parseLiteral(t, "DecimalLiteral");
    }

    parseRegExpLiteral(t) {
      let e = this.parseLiteral(t.value, "RegExpLiteral");
      return e.pattern = t.pattern, e.flags = t.flags, e;
    }

    parseBooleanLiteral(t) {
      let e = this.startNode();
      return e.value = t, this.next(), this.finishNode(e, "BooleanLiteral");
    }

    parseNullLiteral() {
      let t = this.startNode();
      return this.next(), this.finishNode(t, "NullLiteral");
    }

    parseParenAndDistinguishExpression(t) {
      let e = this.state.start,
          s = this.state.startLoc,
          i;
      this.next(), this.expressionScope.enter(Li());
      let a = this.state.maybeInArrowParameters,
          n = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
      let o = this.state.start,
          h = this.state.startLoc,
          c = [],
          u = new et(),
          d = !0,
          x,
          m;

      for (; !this.match(11);) {
        if (d) d = !1;else if (this.expect(12, u.optionalParametersLoc === null ? null : u.optionalParametersLoc), this.match(11)) {
          m = this.state.startLoc;
          break;
        }

        if (this.match(21)) {
          let I = this.state.start,
              N = this.state.startLoc;
          if (x = this.state.startLoc, c.push(this.parseParenItem(this.parseRestBinding(), I, N)), !this.checkCommaAfterRest(41)) break;
        } else c.push(this.parseMaybeAssignAllowIn(u, this.parseParenItem));
      }

      let T = this.state.lastTokEndLoc;
      this.expect(11), this.state.maybeInArrowParameters = a, this.state.inFSharpPipelineDirectBody = n;
      let S = this.startNodeAt(e, s);
      return t && this.shouldParseArrow(c) && (S = this.parseArrow(S)) ? (this.checkDestructuringPrivate(u), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(S, c, !1), S) : (this.expressionScope.exit(), c.length || this.unexpected(this.state.lastTokStartLoc), m && this.unexpected(m), x && this.unexpected(x), this.checkExpressionErrors(u, !0), this.toReferencedListDeep(c, !0), c.length > 1 ? (i = this.startNodeAt(o, h), i.expressions = c, this.finishNode(i, "SequenceExpression"), this.resetEndLocation(i, T)) : i = c[0], this.wrapParenthesis(e, s, i));
    }

    wrapParenthesis(t, e, s) {
      if (!this.options.createParenthesizedExpressions) return this.addExtra(s, "parenthesized", !0), this.addExtra(s, "parenStart", t), this.takeSurroundingComments(s, t, this.state.lastTokEndLoc.index), s;
      let i = this.startNodeAt(t, e);
      return i.expression = s, this.finishNode(i, "ParenthesizedExpression"), i;
    }

    shouldParseArrow(t) {
      return !this.canInsertSemicolon();
    }

    parseArrow(t) {
      if (this.eat(19)) return t;
    }

    parseParenItem(t, e, s) {
      return t;
    }

    parseNewOrNewTarget() {
      let t = this.startNode();

      if (this.next(), this.match(16)) {
        let e = this.createIdentifier(this.startNodeAtNode(t), "new");
        this.next();
        let s = this.parseMetaProperty(t, e, "target");
        return !this.scope.inNonArrowFunction && !this.scope.inClass && this.raise(l.UnexpectedNewTarget, {
          at: s
        }), s;
      }

      return this.parseNew(t);
    }

    parseNew(t) {
      if (this.parseNewCallee(t), this.eat(10)) {
        let e = this.parseExprList(11);
        this.toReferencedList(e), t.arguments = e;
      } else t.arguments = [];

      return this.finishNode(t, "NewExpression");
    }

    parseNewCallee(t) {
      t.callee = this.parseNoCallExpr(), t.callee.type === "Import" ? this.raise(l.ImportCallNotNewExpression, {
        at: t.callee
      }) : this.isOptionalChain(t.callee) ? this.raise(l.OptionalChainingNoNew, {
        at: this.state.lastTokEndLoc
      }) : this.eat(18) && this.raise(l.OptionalChainingNoNew, {
        at: this.state.startLoc
      });
    }

    parseTemplateElement(t) {
      let {
        start: e,
        startLoc: s,
        end: i,
        value: a
      } = this.state,
          n = e + 1,
          o = this.startNodeAt(n, v(s, 1));
      a === null && (t || this.raise(l.InvalidEscapeSequenceTemplate, {
        at: v(s, 2)
      }));
      let h = this.match(24),
          c = h ? -1 : -2,
          u = i + c;
      return o.value = {
        raw: this.input.slice(n, u).replace(/\r\n?/g, `
`),
        cooked: a === null ? null : a.slice(1, c)
      }, o.tail = h, this.next(), this.finishNode(o, "TemplateElement"), this.resetEndLocation(o, v(this.state.lastTokEndLoc, c)), o;
    }

    parseTemplate(t) {
      let e = this.startNode();
      e.expressions = [];
      let s = this.parseTemplateElement(t);

      for (e.quasis = [s]; !s.tail;) e.expressions.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), e.quasis.push(s = this.parseTemplateElement(t));

      return this.finishNode(e, "TemplateLiteral");
    }

    parseTemplateSubstitution() {
      return this.parseExpression();
    }

    parseObjectLike(t, e, s, i) {
      s && this.expectPlugin("recordAndTuple");
      let a = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      let n = Object.create(null),
          o = !0,
          h = this.startNode();

      for (h.properties = [], this.next(); !this.match(t);) {
        if (o) o = !1;else if (this.expect(12), this.match(t)) {
          this.addTrailingCommaExtraToNode(h);
          break;
        }
        let u;
        e ? u = this.parseBindingProperty() : (u = this.parsePropertyDefinition(i), this.checkProto(u, s, n, i)), s && !this.isObjectProperty(u) && u.type !== "SpreadElement" && this.raise(l.InvalidRecordProperty, {
          at: u
        }), u.shorthand && this.addExtra(u, "shorthand", !0), h.properties.push(u);
      }

      this.next(), this.state.inFSharpPipelineDirectBody = a;
      let c = "ObjectExpression";
      return e ? c = "ObjectPattern" : s && (c = "RecordExpression"), this.finishNode(h, c);
    }

    addTrailingCommaExtraToNode(t) {
      this.addExtra(t, "trailingComma", this.state.lastTokStart), this.addExtra(t, "trailingCommaLoc", this.state.lastTokStartLoc, !1);
    }

    maybeAsyncOrAccessorProp(t) {
      return !t.computed && t.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
    }

    parsePropertyDefinition(t) {
      let e = [];
      if (this.match(26)) for (this.hasPlugin("decorators") && this.raise(l.UnsupportedPropertyDecorator, {
        at: this.state.startLoc
      }); this.match(26);) e.push(this.parseDecorator());
      let s = this.startNode(),
          i = !1,
          a = !1,
          n,
          o;
      if (this.match(21)) return e.length && this.unexpected(), this.parseSpread();
      e.length && (s.decorators = e, e = []), s.method = !1, t && (n = this.state.start, o = this.state.startLoc);
      let h = this.eat(55);
      this.parsePropertyNamePrefixOperator(s);
      let c = this.state.containsEsc,
          u = this.parsePropertyName(s, t);

      if (!h && !c && this.maybeAsyncOrAccessorProp(s)) {
        let d = u.name;
        d === "async" && !this.hasPrecedingLineBreak() && (i = !0, this.resetPreviousNodeTrailingComments(u), h = this.eat(55), this.parsePropertyName(s)), (d === "get" || d === "set") && (a = !0, this.resetPreviousNodeTrailingComments(u), s.kind = d, this.match(55) && (h = !0, this.raise(l.AccessorIsGenerator, {
          at: this.state.curPosition(),
          kind: d
        }), this.next()), this.parsePropertyName(s));
      }

      return this.parseObjPropValue(s, n, o, h, i, !1, a, t), s;
    }

    getGetterSetterExpectedParamCount(t) {
      return t.kind === "get" ? 0 : 1;
    }

    getObjectOrClassMethodParams(t) {
      return t.params;
    }

    checkGetterSetterParams(t) {
      var e;
      let s = this.getGetterSetterExpectedParamCount(t),
          i = this.getObjectOrClassMethodParams(t);
      i.length !== s && this.raise(t.kind === "get" ? l.BadGetterArity : l.BadSetterArity, {
        at: t
      }), t.kind === "set" && ((e = i[i.length - 1]) == null ? void 0 : e.type) === "RestElement" && this.raise(l.BadSetterRestParameter, {
        at: t
      });
    }

    parseObjectMethod(t, e, s, i, a) {
      if (a) return this.parseMethod(t, e, !1, !1, !1, "ObjectMethod"), this.checkGetterSetterParams(t), t;
      if (s || e || this.match(10)) return i && this.unexpected(), t.kind = "method", t.method = !0, this.parseMethod(t, e, s, !1, !1, "ObjectMethod");
    }

    parseObjectProperty(t, e, s, i, a) {
      if (t.shorthand = !1, this.eat(14)) return t.value = i ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(a), this.finishNode(t, "ObjectProperty");

      if (!t.computed && t.key.type === "Identifier") {
        if (this.checkReservedWord(t.key.name, t.key.loc.start, !0, !1), i) t.value = this.parseMaybeDefault(e, s, V(t.key));else if (this.match(29)) {
          let n = this.state.startLoc;
          a != null ? a.shorthandAssignLoc === null && (a.shorthandAssignLoc = n) : this.raise(l.InvalidCoverInitializedName, {
            at: n
          }), t.value = this.parseMaybeDefault(e, s, V(t.key));
        } else t.value = V(t.key);
        return t.shorthand = !0, this.finishNode(t, "ObjectProperty");
      }
    }

    parseObjPropValue(t, e, s, i, a, n, o, h) {
      let c = this.parseObjectMethod(t, i, a, n, o) || this.parseObjectProperty(t, e, s, n, h);
      return c || this.unexpected(), c;
    }

    parsePropertyName(t, e) {
      if (this.eat(0)) t.computed = !0, t.key = this.parseMaybeAssignAllowIn(), this.expect(3);else {
        let {
          type: s,
          value: i
        } = this.state,
            a;
        if (z(s)) a = this.parseIdentifier(!0);else switch (s) {
          case 130:
            a = this.parseNumericLiteral(i);
            break;

          case 129:
            a = this.parseStringLiteral(i);
            break;

          case 131:
            a = this.parseBigIntLiteral(i);
            break;

          case 132:
            a = this.parseDecimalLiteral(i);
            break;

          case 134:
            {
              let n = this.state.startLoc;
              e != null ? e.privateKeyLoc === null && (e.privateKeyLoc = n) : this.raise(l.UnexpectedPrivateField, {
                at: n
              }), a = this.parsePrivateName();
              break;
            }

          default:
            throw this.unexpected();
        }
        t.key = a, s !== 134 && (t.computed = !1);
      }
      return t.key;
    }

    initFunction(t, e) {
      t.id = null, t.generator = !1, t.async = !!e;
    }

    parseMethod(t, e, s, i, a, n, o = !1) {
      this.initFunction(t, s), t.generator = !!e;
      let h = i;
      return this.scope.enter(j | Xt | (o ? Q : 0) | (a ? os : 0)), this.prodParam.enter(jt(s, t.generator)), this.parseFunctionParams(t, h), this.parseFunctionBodyAndFinish(t, n, !0), this.prodParam.exit(), this.scope.exit(), t;
    }

    parseArrayLike(t, e, s, i) {
      s && this.expectPlugin("recordAndTuple");
      let a = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      let n = this.startNode();
      return this.next(), n.elements = this.parseExprList(t, !s, i, n), this.state.inFSharpPipelineDirectBody = a, this.finishNode(n, s ? "TupleExpression" : "ArrayExpression");
    }

    parseArrowExpression(t, e, s, i) {
      this.scope.enter(j | Ee);
      let a = jt(s, !1);
      !this.match(5) && this.prodParam.hasIn && (a |= it), this.prodParam.enter(a), this.initFunction(t, s);
      let n = this.state.maybeInArrowParameters;
      return e && (this.state.maybeInArrowParameters = !0, this.setArrowFunctionParameters(t, e, i)), this.state.maybeInArrowParameters = !1, this.parseFunctionBody(t, !0), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = n, this.finishNode(t, "ArrowFunctionExpression");
    }

    setArrowFunctionParameters(t, e, s) {
      this.toAssignableList(e, s, !1), t.params = e;
    }

    parseFunctionBodyAndFinish(t, e, s = !1) {
      this.parseFunctionBody(t, !1, s), this.finishNode(t, e);
    }

    parseFunctionBody(t, e, s = !1) {
      let i = e && !this.match(5);
      if (this.expressionScope.enter(ys()), i) t.body = this.parseMaybeAssign(), this.checkParams(t, !1, e, !1);else {
        let a = this.state.strict,
            n = this.state.labels;
        this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | Ps), t.body = this.parseBlock(!0, !1, o => {
          let h = !this.isSimpleParamList(t.params);
          o && h && this.raise(l.IllegalLanguageModeDirective, {
            at: (t.kind === "method" || t.kind === "constructor") && !!t.key ? t.key.loc.end : t
          });
          let c = !a && this.state.strict;
          this.checkParams(t, !this.state.strict && !e && !s && !h, e, c), this.state.strict && t.id && this.checkIdentifier(t.id, fi, c);
        }), this.prodParam.exit(), this.state.labels = n;
      }
      this.expressionScope.exit();
    }

    isSimpleParameter(t) {
      return t.type === "Identifier";
    }

    isSimpleParamList(t) {
      for (let e = 0, s = t.length; e < s; e++) if (!this.isSimpleParameter(t[e])) return !1;

      return !0;
    }

    checkParams(t, e, s, i = !0) {
      let a = !e && new Set(),
          n = {
        type: "FormalParameters"
      };

      for (let o of t.params) this.checkLVal(o, {
        in: n,
        binding: Gt,
        checkClashes: a,
        strictModeChanged: i
      });
    }

    parseExprList(t, e, s, i) {
      let a = [],
          n = !0;

      for (; !this.eat(t);) {
        if (n) n = !1;else if (this.expect(12), this.match(t)) {
          i && this.addTrailingCommaExtraToNode(i), this.next();
          break;
        }
        a.push(this.parseExprListItem(e, s));
      }

      return a;
    }

    parseExprListItem(t, e, s) {
      let i;
      if (this.match(12)) t || this.raise(l.UnexpectedToken, {
        at: this.state.curPosition(),
        unexpected: ","
      }), i = null;else if (this.match(21)) {
        let a = this.state.start,
            n = this.state.startLoc;
        i = this.parseParenItem(this.parseSpread(e), a, n);
      } else if (this.match(17)) {
        this.expectPlugin("partialApplication"), s || this.raise(l.UnexpectedArgumentPlaceholder, {
          at: this.state.startLoc
        });
        let a = this.startNode();
        this.next(), i = this.finishNode(a, "ArgumentPlaceholder");
      } else i = this.parseMaybeAssignAllowIn(e, this.parseParenItem);
      return i;
    }

    parseIdentifier(t) {
      let e = this.startNode(),
          s = this.parseIdentifierName(e.start, t);
      return this.createIdentifier(e, s);
    }

    createIdentifier(t, e) {
      return t.name = e, t.loc.identifierName = e, this.finishNode(t, "Identifier");
    }

    parseIdentifierName(t, e) {
      let s,
          {
        startLoc: i,
        type: a
      } = this.state;
      if (z(a)) s = this.state.value;else throw this.unexpected();
      let n = Hs(a);
      return e ? n && this.replaceToken(128) : this.checkReservedWord(s, i, n, !1), this.next(), s;
    }

    checkReservedWord(t, e, s, i) {
      if (t.length > 10 || !ui(t)) return;

      if (t === "yield") {
        if (this.prodParam.hasYield) {
          this.raise(l.YieldBindingIdentifier, {
            at: e
          });
          return;
        }
      } else if (t === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(l.AwaitBindingIdentifier, {
            at: e
          });
          return;
        }

        if (this.scope.inStaticBlock) {
          this.raise(l.AwaitBindingIdentifierInStaticBlock, {
            at: e
          });
          return;
        }

        this.expressionScope.recordAsyncArrowParametersError({
          at: e
        });
      } else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(l.ArgumentsInClass, {
          at: e
        });
        return;
      }

      if (s && hi(t)) {
        this.raise(l.UnexpectedKeyword, {
          at: e,
          keyword: t
        });
        return;
      }

      (this.state.strict ? i ? as : is : ss)(t, this.inModule) && this.raise(l.UnexpectedReservedWord, {
        at: e,
        reservedWord: t
      });
    }

    isAwaitAllowed() {
      return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction);
    }

    parseAwait(t, e) {
      let s = this.startNodeAt(t, e);
      return this.expressionScope.recordParameterInitializerError(l.AwaitExpressionFormalParameter, {
        at: s
      }), this.eat(55) && this.raise(l.ObsoleteAwaitStar, {
        at: s
      }), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (s.argument = this.parseMaybeUnary(null, !0)), this.finishNode(s, "AwaitExpression");
    }

    isAmbiguousAwait() {
      if (this.hasPrecedingLineBreak()) return !0;
      let {
        type: t
      } = this.state;
      return t === 53 || t === 10 || t === 0 || Wt(t) || t === 133 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
    }

    parseYield() {
      let t = this.startNode();
      this.expressionScope.recordParameterInitializerError(l.YieldInParameter, {
        at: t
      }), this.next();
      let e = !1,
          s = null;
      if (!this.hasPrecedingLineBreak()) switch (e = this.eat(55), this.state.type) {
        case 13:
        case 135:
        case 8:
        case 11:
        case 3:
        case 9:
        case 14:
        case 12:
          if (!e) break;

        default:
          s = this.parseMaybeAssign();
      }
      return t.delegate = e, t.argument = s, this.finishNode(t, "YieldExpression");
    }

    checkPipelineAtInfixOperator(t, e) {
      this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }]) && t.type === "SequenceExpression" && this.raise(l.PipelineHeadSequenceExpression, {
        at: e
      });
    }

    parseSmartPipelineBodyInStyle(t, e, s) {
      let i = this.startNodeAt(e, s);
      return this.isSimpleReference(t) ? (i.callee = t, this.finishNode(i, "PipelineBareFunction")) : (this.checkSmartPipeTopicBodyEarlyErrors(s), i.expression = t, this.finishNode(i, "PipelineTopicExpression"));
    }

    isSimpleReference(t) {
      switch (t.type) {
        case "MemberExpression":
          return !t.computed && this.isSimpleReference(t.object);

        case "Identifier":
          return !0;

        default:
          return !1;
      }
    }

    checkSmartPipeTopicBodyEarlyErrors(t) {
      if (this.match(19)) throw this.raise(l.PipelineBodyNoArrow, {
        at: this.state.startLoc
      });
      this.topicReferenceWasUsedInCurrentContext() || this.raise(l.PipelineTopicUnused, {
        at: t
      });
    }

    withTopicBindingContext(t) {
      let e = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 1,
        maxTopicIndex: null
      };

      try {
        return t();
      } finally {
        this.state.topicContext = e;
      }
    }

    withSmartMixTopicForbiddingContext(t) {
      if (this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }])) {
        let e = this.state.topicContext;
        this.state.topicContext = {
          maxNumOfResolvableTopics: 0,
          maxTopicIndex: null
        };

        try {
          return t();
        } finally {
          this.state.topicContext = e;
        }
      } else return t();
    }

    withSoloAwaitPermittingContext(t) {
      let e = this.state.soloAwait;
      this.state.soloAwait = !0;

      try {
        return t();
      } finally {
        this.state.soloAwait = e;
      }
    }

    allowInAnd(t) {
      let e = this.prodParam.currentFlags();

      if (it & ~e) {
        this.prodParam.enter(e | it);

        try {
          return t();
        } finally {
          this.prodParam.exit();
        }
      }

      return t();
    }

    disallowInAnd(t) {
      let e = this.prodParam.currentFlags();

      if (it & e) {
        this.prodParam.enter(e & ~it);

        try {
          return t();
        } finally {
          this.prodParam.exit();
        }
      }

      return t();
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

    parseFSharpPipelineBody(t) {
      let e = this.state.start,
          s = this.state.startLoc;
      this.state.potentialArrowAt = this.state.start;
      let i = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !0;
      let a = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, s, t);
      return this.state.inFSharpPipelineDirectBody = i, a;
    }

    parseModuleExpression() {
      this.expectPlugin("moduleBlocks");
      let t = this.startNode();
      this.next(), this.eat(5);
      let e = this.initializeScopes(!0);
      this.enterInitialScopes();
      let s = this.startNode();

      try {
        t.body = this.parseProgram(s, 8, "module");
      } finally {
        e();
      }

      return this.eat(8), this.finishNode(t, "ModuleExpression");
    }

    parsePropertyNamePrefixOperator(t) {}

  };
  p(Ht, "ExpressionParser");
  var ne = {
    kind: "loop"
  },
      sr = {
    kind: "switch"
  },
      ir = 0,
      oe = 1,
      Ge = 2,
      Ye = 4,
      rr = /[\uD800-\uDFFF]/u,
      he = /in(?:stanceof)?/y;

  function ar(r, t) {
    for (let e = 0; e < r.length; e++) {
      let s = r[e],
          {
        type: i
      } = s;

      if (typeof i == "number") {
        {
          if (i === 134) {
            let {
              loc: a,
              start: n,
              value: o,
              end: h
            } = s,
                c = n + 1,
                u = v(a.start, 1);
            r.splice(e, 1, new M({
              type: F(27),
              value: "#",
              start: n,
              end: c,
              startLoc: a.start,
              endLoc: u
            }), new M({
              type: F(128),
              value: o,
              start: c,
              end: h,
              startLoc: u,
              endLoc: a.end
            })), e++;
            continue;
          }

          if (Wt(i)) {
            let {
              loc: a,
              start: n,
              value: o,
              end: h
            } = s,
                c = n + 1,
                u = v(a.start, 1),
                d;
            t.charCodeAt(n) === 96 ? d = new M({
              type: F(22),
              value: "`",
              start: n,
              end: c,
              startLoc: a.start,
              endLoc: u
            }) : d = new M({
              type: F(8),
              value: "}",
              start: n,
              end: c,
              startLoc: a.start,
              endLoc: u
            });
            let x, m, T, S;
            i === 24 ? (m = h - 1, T = v(a.end, -1), x = o === null ? null : o.slice(1, -1), S = new M({
              type: F(22),
              value: "`",
              start: m,
              end: h,
              startLoc: T,
              endLoc: a.end
            })) : (m = h - 2, T = v(a.end, -2), x = o === null ? null : o.slice(1, -2), S = new M({
              type: F(23),
              value: "${",
              start: m,
              end: h,
              startLoc: T,
              endLoc: a.end
            })), r.splice(e, 1, d, new M({
              type: F(20),
              value: x,
              start: c,
              end: m,
              startLoc: u,
              endLoc: T
            }), S), e += 2;
            continue;
          }
        }
        s.type = F(i);
      }
    }

    return r;
  }

  p(ar, "babel7CompatTokens");

  var _t = class extends Ht {
    parseTopLevel(t, e) {
      return t.program = this.parseProgram(e), t.comments = this.state.comments, this.options.tokens && (t.tokens = ar(this.tokens, this.input)), this.finishNode(t, "File");
    }

    parseProgram(t, e = 135, s = this.options.sourceType) {
      if (t.sourceType = s, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, !0, !0, e), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0) for (let [i, a] of Array.from(this.scope.undefinedExports)) this.raise(l.ModuleExportUndefined, {
        at: a,
        localName: i
      });
      return this.finishNode(t, "Program");
    }

    stmtToDirective(t) {
      let e = t;
      e.type = "Directive", e.value = e.expression, delete e.expression;
      let s = e.value,
          i = s.value,
          a = this.input.slice(s.start, s.end),
          n = s.value = a.slice(1, -1);
      return this.addExtra(s, "raw", a), this.addExtra(s, "rawValue", n), this.addExtra(s, "expressionValue", i), s.type = "DirectiveLiteral", e;
    }

    parseInterpreterDirective() {
      if (!this.match(28)) return null;
      let t = this.startNode();
      return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective");
    }

    isLet(t) {
      return this.isContextual(99) ? this.isLetKeyword(t) : !1;
    }

    isLetKeyword(t) {
      let e = this.nextTokenStart(),
          s = this.codePointAtPos(e);
      if (s === 92 || s === 91) return !0;
      if (t) return !1;
      if (s === 123) return !0;

      if (R(s)) {
        if (he.lastIndex = e, he.test(this.input)) {
          let i = this.codePointAtPos(he.lastIndex);
          if (!nt(i) && i !== 92) return !1;
        }

        return !0;
      }

      return !1;
    }

    parseStatement(t, e) {
      return this.match(26) && this.parseDecorators(!0), this.parseStatementContent(t, e);
    }

    parseStatementContent(t, e) {
      let s = this.state.type,
          i = this.startNode(),
          a;

      switch (this.isLet(t) && (s = 74, a = "let"), s) {
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
          return t && (this.state.strict ? this.raise(l.StrictFunction, {
            at: this.state.startLoc
          }) : t !== "if" && t !== "label" && this.raise(l.SloppyFunction, {
            at: this.state.startLoc
          })), this.parseFunctionStatement(i, !1, !t);

        case 80:
          return t && this.unexpected(), this.parseClass(i, !0);

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
          return a = a || this.state.value, t && a !== "var" && this.raise(l.UnexpectedLexicalDeclaration, {
            at: this.state.startLoc
          }), this.parseVarStatement(i, a);

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
            !this.options.allowImportExportEverywhere && !e && this.raise(l.UnexpectedImportExport, {
              at: this.state.startLoc
            }), this.next();
            let h;
            return s === 83 ? (h = this.parseImport(i), h.type === "ImportDeclaration" && (!h.importKind || h.importKind === "value") && (this.sawUnambiguousESM = !0)) : (h = this.parseExport(i), (h.type === "ExportNamedDeclaration" && (!h.exportKind || h.exportKind === "value") || h.type === "ExportAllDeclaration" && (!h.exportKind || h.exportKind === "value") || h.type === "ExportDefaultDeclaration") && (this.sawUnambiguousESM = !0)), this.assertModuleNodeAllowed(i), h;
          }

        default:
          if (this.isAsyncFunction()) return t && this.raise(l.AsyncFunctionInSingleStatementContext, {
            at: this.state.startLoc
          }), this.next(), this.parseFunctionStatement(i, !0, !t);
      }

      let n = this.state.value,
          o = this.parseExpression();
      return C(s) && o.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(i, n, o, t) : this.parseExpressionStatement(i, o);
    }

    assertModuleNodeAllowed(t) {
      !this.options.allowImportExportEverywhere && !this.inModule && this.raise(l.ImportOutsideModule, {
        at: t
      });
    }

    takeDecorators(t) {
      let e = this.state.decoratorStack[this.state.decoratorStack.length - 1];
      e.length && (t.decorators = e, this.resetStartLocationFromNode(t, e[0]), this.state.decoratorStack[this.state.decoratorStack.length - 1] = []);
    }

    canHaveLeadingDecorator() {
      return this.match(80);
    }

    parseDecorators(t) {
      let e = this.state.decoratorStack[this.state.decoratorStack.length - 1];

      for (; this.match(26);) {
        let s = this.parseDecorator();
        e.push(s);
      }

      if (this.match(82)) t || this.unexpected(), this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(l.DecoratorExportClass, {
        at: this.state.startLoc
      });else if (!this.canHaveLeadingDecorator()) throw this.raise(l.UnexpectedLeadingDecorator, {
        at: this.state.startLoc
      });
    }

    parseDecorator() {
      this.expectOnePlugin(["decorators-legacy", "decorators"]);
      let t = this.startNode();

      if (this.next(), this.hasPlugin("decorators")) {
        this.state.decoratorStack.push([]);
        let e = this.state.start,
            s = this.state.startLoc,
            i;

        if (this.match(10)) {
          let a = this.state.start,
              n = this.state.startLoc;
          this.next(), i = this.parseExpression(), this.expect(11), i = this.wrapParenthesis(a, n, i);
        } else for (i = this.parseIdentifier(!1); this.eat(16);) {
          let a = this.startNodeAt(e, s);
          a.object = i, a.property = this.parseIdentifier(!0), a.computed = !1, i = this.finishNode(a, "MemberExpression");
        }

        t.expression = this.parseMaybeDecoratorArguments(i), this.state.decoratorStack.pop();
      } else t.expression = this.parseExprSubscripts();

      return this.finishNode(t, "Decorator");
    }

    parseMaybeDecoratorArguments(t) {
      if (this.eat(10)) {
        let e = this.startNodeAtNode(t);
        return e.callee = t, e.arguments = this.parseCallExpressionArguments(11, !1), this.toReferencedList(e.arguments), this.finishNode(e, "CallExpression");
      }

      return t;
    }

    parseBreakContinueStatement(t, e) {
      return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, e), this.finishNode(t, e ? "BreakStatement" : "ContinueStatement");
    }

    verifyBreakContinue(t, e) {
      let s;

      for (s = 0; s < this.state.labels.length; ++s) {
        let i = this.state.labels[s];
        if ((t.label == null || i.name === t.label.name) && (i.kind != null && (e || i.kind === "loop") || t.label && e)) break;
      }

      if (s === this.state.labels.length) {
        let i = e ? "BreakStatement" : "ContinueStatement";
        this.raise(l.IllegalBreakContinue, {
          at: t,
          type: i
        });
      }
    }

    parseDebuggerStatement(t) {
      return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
    }

    parseHeaderExpression() {
      this.expect(10);
      let t = this.parseExpression();
      return this.expect(11), t;
    }

    parseDoStatement(t) {
      return this.next(), this.state.labels.push(ne), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("do")), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
    }

    parseForStatement(t) {
      this.next(), this.state.labels.push(ne);
      let e = null;
      if (this.isAwaitAllowed() && this.eatContextual(96) && (e = this.state.lastTokStartLoc), this.scope.enter(rt), this.expect(10), this.match(13)) return e !== null && this.unexpected(e), this.parseFor(t, null);
      let s = this.isContextual(99),
          i = s && this.isLetKeyword();

      if (this.match(74) || this.match(75) || i) {
        let c = this.startNode(),
            u = i ? "let" : this.state.value;
        return this.next(), this.parseVar(c, !0, u), this.finishNode(c, "VariableDeclaration"), (this.match(58) || this.isContextual(101)) && c.declarations.length === 1 ? this.parseForIn(t, c, e) : (e !== null && this.unexpected(e), this.parseFor(t, c));
      }

      let a = this.isContextual(95),
          n = new et(),
          o = this.parseExpression(!0, n),
          h = this.isContextual(101);

      if (h && (s && this.raise(l.ForOfLet, {
        at: o
      }), e === null && a && o.type === "Identifier" && this.raise(l.ForOfAsync, {
        at: o
      })), h || this.match(58)) {
        this.checkDestructuringPrivate(n), this.toAssignable(o, !0);
        let c = h ? "ForOfStatement" : "ForInStatement";
        return this.checkLVal(o, {
          in: {
            type: c
          }
        }), this.parseForIn(t, o, e);
      } else this.checkExpressionErrors(n, !0);

      return e !== null && this.unexpected(e), this.parseFor(t, o);
    }

    parseFunctionStatement(t, e, s) {
      return this.next(), this.parseFunction(t, oe | (s ? 0 : Ge), e);
    }

    parseIfStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(66) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement");
    }

    parseReturnStatement(t) {
      return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(l.IllegalReturn, {
        at: this.state.startLoc
      }), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
    }

    parseSwitchStatement(t) {
      this.next(), t.discriminant = this.parseHeaderExpression();
      let e = t.cases = [];
      this.expect(5), this.state.labels.push(sr), this.scope.enter(rt);
      let s;

      for (let i; !this.match(8);) if (this.match(61) || this.match(65)) {
        let a = this.match(61);
        s && this.finishNode(s, "SwitchCase"), e.push(s = this.startNode()), s.consequent = [], this.next(), a ? s.test = this.parseExpression() : (i && this.raise(l.MultipleDefaultsInSwitch, {
          at: this.state.lastTokStartLoc
        }), i = !0, s.test = null), this.expect(14);
      } else s ? s.consequent.push(this.parseStatement(null)) : this.unexpected();

      return this.scope.exit(), s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
    }

    parseThrowStatement(t) {
      return this.next(), this.hasPrecedingLineBreak() && this.raise(l.NewlineAfterThrow, {
        at: this.state.lastTokEndLoc
      }), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
    }

    parseCatchClauseParam() {
      let t = this.parseBindingAtom(),
          e = t.type === "Identifier";
      return this.scope.enter(e ? ns : 0), this.checkLVal(t, {
        in: {
          type: "CatchClause"
        },
        binding: $,
        allowingSloppyLetBinding: !0
      }), t;
    }

    parseTryStatement(t) {
      if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(62)) {
        let e = this.startNode();
        this.next(), this.match(10) ? (this.expect(10), e.param = this.parseCatchClauseParam(), this.expect(11)) : (e.param = null, this.scope.enter(rt)), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(!1, !1)), this.scope.exit(), t.handler = this.finishNode(e, "CatchClause");
      }

      return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(l.NoCatchOrFinally, {
        at: t
      }), this.finishNode(t, "TryStatement");
    }

    parseVarStatement(t, e, s = !1) {
      return this.next(), this.parseVar(t, !1, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration");
    }

    parseWhileStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(ne), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("while")), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
    }

    parseWithStatement(t) {
      return this.state.strict && this.raise(l.StrictWith, {
        at: this.state.startLoc
      }), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("with")), this.finishNode(t, "WithStatement");
    }

    parseEmptyStatement(t) {
      return this.next(), this.finishNode(t, "EmptyStatement");
    }

    parseLabeledStatement(t, e, s, i) {
      for (let n of this.state.labels) n.name === e && this.raise(l.LabelRedeclaration, {
        at: s,
        labelName: e
      });

      let a = Xs(this.state.type) ? "loop" : this.match(71) ? "switch" : null;

      for (let n = this.state.labels.length - 1; n >= 0; n--) {
        let o = this.state.labels[n];
        if (o.statementStart === t.start) o.statementStart = this.state.start, o.kind = a;else break;
      }

      return this.state.labels.push({
        name: e,
        kind: a,
        statementStart: this.state.start
      }), t.body = this.parseStatement(i ? i.indexOf("label") === -1 ? i + "label" : i : "label"), this.state.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement");
    }

    parseExpressionStatement(t, e) {
      return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
    }

    parseBlock(t = !1, e = !0, s) {
      let i = this.startNode();
      return t && this.state.strictErrors.clear(), this.expect(5), e && this.scope.enter(rt), this.parseBlockBody(i, t, !1, 8, s), e && this.scope.exit(), this.finishNode(i, "BlockStatement");
    }

    isValidDirective(t) {
      return t.type === "ExpressionStatement" && t.expression.type === "StringLiteral" && !t.expression.extra.parenthesized;
    }

    parseBlockBody(t, e, s, i, a) {
      let n = t.body = [],
          o = t.directives = [];
      this.parseBlockOrModuleBlockBody(n, e ? o : void 0, s, i, a);
    }

    parseBlockOrModuleBlockBody(t, e, s, i, a) {
      let n = this.state.strict,
          o = !1,
          h = !1;

      for (; !this.match(i);) {
        let c = this.parseStatement(null, s);

        if (e && !h) {
          if (this.isValidDirective(c)) {
            let u = this.stmtToDirective(c);
            e.push(u), !o && u.value.value === "use strict" && (o = !0, this.setStrict(!0));
            continue;
          }

          h = !0, this.state.strictErrors.clear();
        }

        t.push(c);
      }

      a && a.call(this, o), n || this.setStrict(!1), this.next();
    }

    parseFor(t, e) {
      return t.init = e, this.semicolon(!1), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
    }

    parseForIn(t, e, s) {
      let i = this.match(58);
      return this.next(), i ? s !== null && this.unexpected(s) : t.await = s !== null, e.type === "VariableDeclaration" && e.declarations[0].init != null && (!i || this.state.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(l.ForInOfLoopInitializer, {
        at: e,
        type: i ? "ForInStatement" : "ForOfStatement"
      }), e.type === "AssignmentPattern" && this.raise(l.InvalidLhs, {
        at: e,
        ancestor: {
          type: "ForStatement"
        }
      }), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement");
    }

    parseVar(t, e, s, i = !1) {
      let a = t.declarations = [];

      for (t.kind = s;;) {
        let n = this.startNode();
        if (this.parseVarId(n, s), n.init = this.eat(29) ? e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, n.init === null && !i && (n.id.type !== "Identifier" && !(e && (this.match(58) || this.isContextual(101))) ? this.raise(l.DeclarationMissingInitializer, {
          at: this.state.lastTokEndLoc,
          kind: "destructuring"
        }) : s === "const" && !(this.match(58) || this.isContextual(101)) && this.raise(l.DeclarationMissingInitializer, {
          at: this.state.lastTokEndLoc,
          kind: "const"
        })), a.push(this.finishNode(n, "VariableDeclarator")), !this.eat(12)) break;
      }

      return t;
    }

    parseVarId(t, e) {
      t.id = this.parseBindingAtom(), this.checkLVal(t.id, {
        in: {
          type: "VariableDeclarator"
        },
        binding: e === "var" ? Gt : $
      });
    }

    parseFunction(t, e = ir, s = !1) {
      let i = e & oe,
          a = e & Ge,
          n = !!i && !(e & Ye);
      this.initFunction(t, s), this.match(55) && a && this.raise(l.GeneratorInSingleStatementContext, {
        at: this.state.startLoc
      }), t.generator = this.eat(55), i && (t.id = this.parseFunctionId(n));
      let o = this.state.maybeInArrowParameters;
      return this.state.maybeInArrowParameters = !1, this.scope.enter(j), this.prodParam.enter(jt(s, t.generator)), i || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, !1), this.withSmartMixTopicForbiddingContext(() => {
        this.parseFunctionBodyAndFinish(t, i ? "FunctionDeclaration" : "FunctionExpression");
      }), this.prodParam.exit(), this.scope.exit(), i && !a && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = o, t;
    }

    parseFunctionId(t) {
      return t || C(this.state.type) ? this.parseIdentifier() : null;
    }

    parseFunctionParams(t, e) {
      this.expect(10), this.expressionScope.enter(vi()), t.params = this.parseBindingList(11, 41, !1, e), this.expressionScope.exit();
    }

    registerFunctionStatementId(t) {
      !t.id || this.scope.declareName(t.id.name, this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? Gt : $ : us, t.id.loc.start);
    }

    parseClass(t, e, s) {
      this.next(), this.takeDecorators(t);
      let i = this.state.strict;
      return this.state.strict = !0, this.parseClassId(t, e, s), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, i), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
    }

    isClassProperty() {
      return this.match(29) || this.match(13) || this.match(8);
    }

    isClassMethod() {
      return this.match(10);
    }

    isNonstaticConstructor(t) {
      return !t.computed && !t.static && (t.key.name === "constructor" || t.key.value === "constructor");
    }

    parseClassBody(t, e) {
      this.classScope.enter();
      let s = {
        hadConstructor: !1,
        hadSuperClass: t
      },
          i = [],
          a = this.startNode();
      if (a.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
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
          i.length && (n.decorators = i, this.resetStartLocationFromNode(n, i[0]), i = []), this.parseClassMember(a, n, s), n.kind === "constructor" && n.decorators && n.decorators.length > 0 && this.raise(l.DecoratorConstructor, {
            at: n
          });
        }
      }), this.state.strict = e, this.next(), i.length) throw this.raise(l.TrailingDecorator, {
        at: this.state.startLoc
      });
      return this.classScope.exit(), this.finishNode(a, "ClassBody");
    }

    parseClassMemberFromModifier(t, e) {
      let s = this.parseIdentifier(!0);

      if (this.isClassMethod()) {
        let i = e;
        return i.kind = "method", i.computed = !1, i.key = s, i.static = !1, this.pushClassMethod(t, i, !1, !1, !1, !1), !0;
      } else if (this.isClassProperty()) {
        let i = e;
        return i.computed = !1, i.key = s, i.static = !1, t.body.push(this.parseClassProperty(i)), !0;
      }

      return this.resetPreviousNodeTrailingComments(s), !1;
    }

    parseClassMember(t, e, s) {
      let i = this.isContextual(104);

      if (i) {
        if (this.parseClassMemberFromModifier(t, e)) return;

        if (this.eat(5)) {
          this.parseClassStaticBlock(t, e);
          return;
        }
      }

      this.parseClassMemberWithIsStatic(t, e, s, i);
    }

    parseClassMemberWithIsStatic(t, e, s, i) {
      let a = e,
          n = e,
          o = e,
          h = e,
          c = e,
          u = a,
          d = a;

      if (e.static = i, this.parsePropertyNamePrefixOperator(e), this.eat(55)) {
        u.kind = "method";
        let I = this.match(134);

        if (this.parseClassElementName(u), I) {
          this.pushClassPrivateMethod(t, n, !0, !1);
          return;
        }

        this.isNonstaticConstructor(a) && this.raise(l.ConstructorIsGenerator, {
          at: a.key
        }), this.pushClassMethod(t, a, !0, !1, !1, !1);
        return;
      }

      let x = C(this.state.type) && !this.state.containsEsc,
          m = this.match(134),
          T = this.parseClassElementName(e),
          S = this.state.startLoc;

      if (this.parsePostMemberNameModifiers(d), this.isClassMethod()) {
        if (u.kind = "method", m) {
          this.pushClassPrivateMethod(t, n, !1, !1);
          return;
        }

        let I = this.isNonstaticConstructor(a),
            N = !1;
        I && (a.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(l.DuplicateConstructor, {
          at: T
        }), I && this.hasPlugin("typescript") && e.override && this.raise(l.OverrideOnConstructor, {
          at: T
        }), s.hadConstructor = !0, N = s.hadSuperClass), this.pushClassMethod(t, a, !1, !1, I, N);
      } else if (this.isClassProperty()) m ? this.pushClassPrivateProperty(t, h) : this.pushClassProperty(t, o);else if (x && T.name === "async" && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(T);
        let I = this.eat(55);
        d.optional && this.unexpected(S), u.kind = "method";
        let N = this.match(134);
        this.parseClassElementName(u), this.parsePostMemberNameModifiers(d), N ? this.pushClassPrivateMethod(t, n, I, !0) : (this.isNonstaticConstructor(a) && this.raise(l.ConstructorIsAsync, {
          at: a.key
        }), this.pushClassMethod(t, a, I, !0, !1, !1));
      } else if (x && (T.name === "get" || T.name === "set") && !(this.match(55) && this.isLineTerminator())) {
        this.resetPreviousNodeTrailingComments(T), u.kind = T.name;
        let I = this.match(134);
        this.parseClassElementName(a), I ? this.pushClassPrivateMethod(t, n, !1, !1) : (this.isNonstaticConstructor(a) && this.raise(l.ConstructorIsAccessor, {
          at: a.key
        }), this.pushClassMethod(t, a, !1, !1, !1, !1)), this.checkGetterSetterParams(a);
      } else if (x && T.name === "accessor" && !this.isLineTerminator()) {
        this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(T);
        let I = this.match(134);
        this.parseClassElementName(o), this.pushClassAccessorProperty(t, c, I);
      } else this.isLineTerminator() ? m ? this.pushClassPrivateProperty(t, h) : this.pushClassProperty(t, o) : this.unexpected();
    }

    parseClassElementName(t) {
      let {
        type: e,
        value: s
      } = this.state;

      if ((e === 128 || e === 129) && t.static && s === "prototype" && this.raise(l.StaticPrototype, {
        at: this.state.startLoc
      }), e === 134) {
        s === "constructor" && this.raise(l.ConstructorClassPrivateField, {
          at: this.state.startLoc
        });
        let i = this.parsePrivateName();
        return t.key = i, i;
      }

      return this.parsePropertyName(t);
    }

    parseClassStaticBlock(t, e) {
      var s;
      this.scope.enter(Q | fe | Xt);
      let i = this.state.labels;
      this.state.labels = [], this.prodParam.enter(lt);
      let a = e.body = [];
      this.parseBlockOrModuleBlockBody(a, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = i, t.body.push(this.finishNode(e, "StaticBlock")), (s = e.decorators) != null && s.length && this.raise(l.DecoratorStaticBlock, {
        at: e
      });
    }

    pushClassProperty(t, e) {
      !e.computed && (e.key.name === "constructor" || e.key.value === "constructor") && this.raise(l.ConstructorClassField, {
        at: e.key
      }), t.body.push(this.parseClassProperty(e));
    }

    pushClassPrivateProperty(t, e) {
      let s = this.parseClassPrivateProperty(e);
      t.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), ie, s.key.loc.start);
    }

    pushClassAccessorProperty(t, e, s) {
      if (!s && !e.computed) {
        let a = e.key;
        (a.name === "constructor" || a.value === "constructor") && this.raise(l.ConstructorClassField, {
          at: a
        });
      }

      let i = this.parseClassAccessorProperty(e);
      t.body.push(i), s && this.classScope.declarePrivateName(this.getPrivateNameSV(i.key), ie, i.key.loc.start);
    }

    pushClassMethod(t, e, s, i, a, n) {
      t.body.push(this.parseMethod(e, s, i, a, n, "ClassMethod", !0));
    }

    pushClassPrivateMethod(t, e, s, i) {
      let a = this.parseMethod(e, s, i, !1, !1, "ClassPrivateMethod", !0);
      t.body.push(a);
      let n = a.kind === "get" ? a.static ? Pi : Ti : a.kind === "set" ? a.static ? bi : gi : ie;
      this.declareClassPrivateMethodInScope(a, n);
    }

    declareClassPrivateMethodInScope(t, e) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(t.key), e, t.key.loc.start);
    }

    parsePostMemberNameModifiers(t) {}

    parseClassPrivateProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty");
    }

    parseClassProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty");
    }

    parseClassAccessorProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassAccessorProperty");
    }

    parseInitializer(t) {
      this.scope.enter(Q | Xt), this.expressionScope.enter(ys()), this.prodParam.enter(lt), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
    }

    parseClassId(t, e, s, i = ls) {
      if (C(this.state.type)) t.id = this.parseIdentifier(), e && this.declareNameFromIdentifier(t.id, i);else if (s || !e) t.id = null;else throw this.raise(l.MissingClassName, {
        at: this.state.startLoc
      });
    }

    parseClassSuper(t) {
      t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
    }

    parseExport(t) {
      let e = this.maybeParseExportDefaultSpecifier(t),
          s = !e || this.eat(12),
          i = s && this.eatExportStar(t),
          a = i && this.maybeParseExportNamespaceSpecifier(t),
          n = s && (!a || this.eat(12)),
          o = e || i;
      if (i && !a) return e && this.unexpected(), this.parseExportFrom(t, !0), this.finishNode(t, "ExportAllDeclaration");
      let h = this.maybeParseExportNamedSpecifiers(t);
      if (e && s && !i && !h || a && n && !h) throw this.unexpected(null, 5);
      let c;
      if (o || h ? (c = !1, this.parseExportFrom(t, o)) : c = this.maybeParseExportDeclaration(t), o || h || c) return this.checkExport(t, !0, !1, !!t.source), this.finishNode(t, "ExportNamedDeclaration");
      if (this.eat(65)) return t.declaration = this.parseExportDefaultExpression(), this.checkExport(t, !0, !0), this.finishNode(t, "ExportDefaultDeclaration");
      throw this.unexpected(null, 5);
    }

    eatExportStar(t) {
      return this.eat(55);
    }

    maybeParseExportDefaultSpecifier(t) {
      if (this.isExportDefaultSpecifier()) {
        this.expectPlugin("exportDefaultFrom");
        let e = this.startNode();
        return e.exported = this.parseIdentifier(!0), t.specifiers = [this.finishNode(e, "ExportDefaultSpecifier")], !0;
      }

      return !1;
    }

    maybeParseExportNamespaceSpecifier(t) {
      if (this.isContextual(93)) {
        t.specifiers || (t.specifiers = []);
        let e = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
        return this.next(), e.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(e, "ExportNamespaceSpecifier")), !0;
      }

      return !1;
    }

    maybeParseExportNamedSpecifiers(t) {
      if (this.match(5)) {
        t.specifiers || (t.specifiers = []);
        let e = t.exportKind === "type";
        return t.specifiers.push(...this.parseExportSpecifiers(e)), t.source = null, t.declaration = null, this.hasPlugin("importAssertions") && (t.assertions = []), !0;
      }

      return !1;
    }

    maybeParseExportDeclaration(t) {
      return this.shouldParseExportDeclaration() ? (t.specifiers = [], t.source = null, this.hasPlugin("importAssertions") && (t.assertions = []), t.declaration = this.parseExportDeclaration(t), !0) : !1;
    }

    isAsyncFunction() {
      if (!this.isContextual(95)) return !1;
      let t = this.nextTokenStart();
      return !ve.test(this.input.slice(this.state.pos, t)) && this.isUnparsedContextual(t, "function");
    }

    parseExportDefaultExpression() {
      let t = this.startNode(),
          e = this.isAsyncFunction();
      if (this.match(68) || e) return this.next(), e && this.next(), this.parseFunction(t, oe | Ye, e);
      if (this.match(80)) return this.parseClass(t, !0, !0);
      if (this.match(26)) return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(l.DecoratorBeforeExport, {
        at: this.state.startLoc
      }), this.parseDecorators(!1), this.parseClass(t, !0, !0);
      if (this.match(75) || this.match(74) || this.isLet()) throw this.raise(l.UnsupportedDefaultExport, {
        at: this.state.startLoc
      });
      let s = this.parseMaybeAssignAllowIn();
      return this.semicolon(), s;
    }

    parseExportDeclaration(t) {
      return this.parseStatement(null);
    }

    isExportDefaultSpecifier() {
      let {
        type: t
      } = this.state;

      if (C(t)) {
        if (t === 95 && !this.state.containsEsc || t === 99) return !1;

        if ((t === 126 || t === 125) && !this.state.containsEsc) {
          let {
            type: i
          } = this.lookahead();
          if (C(i) && i !== 97 || i === 5) return this.expectOnePlugin(["flow", "typescript"]), !1;
        }
      } else if (!this.match(65)) return !1;

      let e = this.nextTokenStart(),
          s = this.isUnparsedContextual(e, "from");
      if (this.input.charCodeAt(e) === 44 || C(this.state.type) && s) return !0;

      if (this.match(65) && s) {
        let i = this.input.charCodeAt(this.nextTokenStartSince(e + 4));
        return i === 34 || i === 39;
      }

      return !1;
    }

    parseExportFrom(t, e) {
      if (this.eatContextual(97)) {
        t.source = this.parseImportSource(), this.checkExport(t);
        let s = this.maybeParseImportAssertions();
        s && (t.assertions = s);
      } else e && this.unexpected();

      this.semicolon();
    }

    shouldParseExportDeclaration() {
      let {
        type: t
      } = this.state;

      if (t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators"))) {
        if (this.getPluginOption("decorators", "decoratorsBeforeExport")) throw this.raise(l.DecoratorBeforeExport, {
          at: this.state.startLoc
        });
        return !0;
      }

      return t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
    }

    checkExport(t, e, s, i) {
      if (e) {
        if (s) {
          if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
            var a;
            let o = t.declaration;
            o.type === "Identifier" && o.name === "from" && o.end - o.start === 4 && !((a = o.extra) != null && a.parenthesized) && this.raise(l.ExportDefaultFromAsIdentifier, {
              at: o
            });
          }
        } else if (t.specifiers && t.specifiers.length) for (let o of t.specifiers) {
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
        } else if (t.declaration) {
          if (t.declaration.type === "FunctionDeclaration" || t.declaration.type === "ClassDeclaration") {
            let o = t.declaration.id;
            if (!o) throw new Error("Assertion failure");
            this.checkDuplicateExports(t, o.name);
          } else if (t.declaration.type === "VariableDeclaration") for (let o of t.declaration.declarations) this.checkDeclaration(o.id);
        }
      }

      if (this.state.decoratorStack[this.state.decoratorStack.length - 1].length) throw this.raise(l.UnsupportedDecoratorExport, {
        at: t
      });
    }

    checkDeclaration(t) {
      if (t.type === "Identifier") this.checkDuplicateExports(t, t.name);else if (t.type === "ObjectPattern") for (let e of t.properties) this.checkDeclaration(e);else if (t.type === "ArrayPattern") for (let e of t.elements) e && this.checkDeclaration(e);else t.type === "ObjectProperty" ? this.checkDeclaration(t.value) : t.type === "RestElement" ? this.checkDeclaration(t.argument) : t.type === "AssignmentPattern" && this.checkDeclaration(t.left);
    }

    checkDuplicateExports(t, e) {
      this.exportedIdentifiers.has(e) && (e === "default" ? this.raise(l.DuplicateDefaultExport, {
        at: t
      }) : this.raise(l.DuplicateExport, {
        at: t,
        exportName: e
      })), this.exportedIdentifiers.add(e);
    }

    parseExportSpecifiers(t) {
      let e = [],
          s = !0;

      for (this.expect(5); !this.eat(8);) {
        if (s) s = !1;else if (this.expect(12), this.eat(8)) break;
        let i = this.isContextual(126),
            a = this.match(129),
            n = this.startNode();
        n.local = this.parseModuleExportName(), e.push(this.parseExportSpecifier(n, a, t, i));
      }

      return e;
    }

    parseExportSpecifier(t, e, s, i) {
      return this.eatContextual(93) ? t.exported = this.parseModuleExportName() : e ? t.exported = Oi(t.local) : t.exported || (t.exported = V(t.local)), this.finishNode(t, "ExportSpecifier");
    }

    parseModuleExportName() {
      if (this.match(129)) {
        let t = this.parseStringLiteral(this.state.value),
            e = t.value.match(rr);
        return e && this.raise(l.ModuleExportNameHasLoneSurrogate, {
          at: t,
          surrogateCharCode: e[0].charCodeAt(0)
        }), t;
      }

      return this.parseIdentifier(!0);
    }

    parseImport(t) {
      if (t.specifiers = [], !this.match(129)) {
        let i = !this.maybeParseDefaultImportSpecifier(t) || this.eat(12),
            a = i && this.maybeParseStarImportSpecifier(t);
        i && !a && this.parseNamedImportSpecifiers(t), this.expectContextual(97);
      }

      t.source = this.parseImportSource();
      let e = this.maybeParseImportAssertions();
      if (e) t.assertions = e;else {
        let s = this.maybeParseModuleAttributes();
        s && (t.attributes = s);
      }
      return this.semicolon(), this.finishNode(t, "ImportDeclaration");
    }

    parseImportSource() {
      return this.match(129) || this.unexpected(), this.parseExprAtom();
    }

    shouldParseDefaultImport(t) {
      return C(this.state.type);
    }

    parseImportSpecifierLocal(t, e, s) {
      e.local = this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(e, s));
    }

    finishImportSpecifier(t, e) {
      return this.checkLVal(t.local, {
        in: t,
        binding: $
      }), this.finishNode(t, e);
    }

    parseAssertEntries() {
      let t = [],
          e = new Set();

      do {
        if (this.match(8)) break;
        let s = this.startNode(),
            i = this.state.value;
        if (e.has(i) && this.raise(l.ModuleAttributesWithDuplicateKeys, {
          at: this.state.startLoc,
          key: i
        }), e.add(i), this.match(129) ? s.key = this.parseStringLiteral(i) : s.key = this.parseIdentifier(!0), this.expect(14), !this.match(129)) throw this.raise(l.ModuleAttributeInvalidValue, {
          at: this.state.startLoc
        });
        s.value = this.parseStringLiteral(this.state.value), this.finishNode(s, "ImportAttribute"), t.push(s);
      } while (this.eat(12));

      return t;
    }

    maybeParseModuleAttributes() {
      if (this.match(76) && !this.hasPrecedingLineBreak()) this.expectPlugin("moduleAttributes"), this.next();else return this.hasPlugin("moduleAttributes") ? [] : null;
      let t = [],
          e = new Set();

      do {
        let s = this.startNode();
        if (s.key = this.parseIdentifier(!0), s.key.name !== "type" && this.raise(l.ModuleAttributeDifferentFromType, {
          at: s.key
        }), e.has(s.key.name) && this.raise(l.ModuleAttributesWithDuplicateKeys, {
          at: s.key,
          key: s.key.name
        }), e.add(s.key.name), this.expect(14), !this.match(129)) throw this.raise(l.ModuleAttributeInvalidValue, {
          at: this.state.startLoc
        });
        s.value = this.parseStringLiteral(this.state.value), this.finishNode(s, "ImportAttribute"), t.push(s);
      } while (this.eat(12));

      return t;
    }

    maybeParseImportAssertions() {
      if (this.isContextual(94) && !this.hasPrecedingLineBreak()) this.expectPlugin("importAssertions"), this.next();else return this.hasPlugin("importAssertions") ? [] : null;
      this.eat(5);
      let t = this.parseAssertEntries();
      return this.eat(8), t;
    }

    maybeParseDefaultImportSpecifier(t) {
      return this.shouldParseDefaultImport(t) ? (this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier"), !0) : !1;
    }

    maybeParseStarImportSpecifier(t) {
      if (this.match(55)) {
        let e = this.startNode();
        return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(t, e, "ImportNamespaceSpecifier"), !0;
      }

      return !1;
    }

    parseNamedImportSpecifiers(t) {
      let e = !0;

      for (this.expect(5); !this.eat(8);) {
        if (e) e = !1;else {
          if (this.eat(14)) throw this.raise(l.DestructureNamedImport, {
            at: this.state.startLoc
          });
          if (this.expect(12), this.eat(8)) break;
        }
        let s = this.startNode(),
            i = this.match(129),
            a = this.isContextual(126);
        s.imported = this.parseModuleExportName();
        let n = this.parseImportSpecifier(s, i, t.importKind === "type" || t.importKind === "typeof", a);
        t.specifiers.push(n);
      }
    }

    parseImportSpecifier(t, e, s, i) {
      if (this.eatContextual(93)) t.local = this.parseIdentifier();else {
        let {
          imported: a
        } = t;
        if (e) throw this.raise(l.ImportBindingIsString, {
          at: t,
          importName: a.value
        });
        this.checkReservedWord(a.name, t.loc.start, !0, !0), t.local || (t.local = V(a));
      }
      return this.finishImportSpecifier(t, "ImportSpecifier");
    }

    isThisParam(t) {
      return t.type === "Identifier" && t.name === "this";
    }

  };

  p(_t, "StatementParser");
  var gt = class extends _t {
    constructor(t, e) {
      t = tr(t), super(t, e), this.options = t, this.initializeScopes(), this.plugins = nr(this.options.plugins), this.filename = t.sourceFilename;
    }

    getScopeHandler() {
      return ct;
    }

    parse() {
      this.enterInitialScopes();
      let t = this.startNode(),
          e = this.startNode();
      return this.nextToken(), t.errors = null, this.parseTopLevel(t, e), t.errors = this.state.errors, t;
    }

  };
  p(gt, "Parser");

  function nr(r) {
    let t = new Map();

    for (let e of r) {
      let [s, i] = Array.isArray(e) ? e : [e, {}];
      t.has(s) || t.set(s, i || {});
    }

    return t;
  }

  p(nr, "pluginsMap");

  function or(r, t) {
    var e;

    if (((e = t) == null ? void 0 : e.sourceType) === "unambiguous") {
      t = Object.assign({}, t);

      try {
        t.sourceType = "module";
        let s = yt(t, r),
            i = s.parse();
        if (s.sawUnambiguousESM) return i;
        if (s.ambiguousScriptDifferentAst) try {
          return t.sourceType = "script", yt(t, r).parse();
        } catch {} else i.program.sourceType = "script";
        return i;
      } catch (s) {
        try {
          return t.sourceType = "script", yt(t, r).parse();
        } catch {}

        throw s;
      }
    } else return yt(t, r).parse();
  }

  p(or, "parse");

  function hr(r, t) {
    let e = yt(t, r);
    return e.options.strictMode && (e.state.strict = !0), e.getExpression();
  }

  p(hr, "parseExpression");

  function cr(r) {
    let t = {};

    for (let e of Object.keys(r)) t[e] = F(r[e]);

    return t;
  }

  p(cr, "generateExportedTokenTypes");
  var lr = cr(Ks);

  function yt(r, t) {
    let e = gt;
    return r != null && r.plugins && (Qi(r.plugins), e = ur(r.plugins)), new e(r, t);
  }

  p(yt, "getParser");
  var Qe = {};

  function ur(r) {
    let t = Zi.filter(i => k(r, i)),
        e = t.join("/"),
        s = Qe[e];

    if (!s) {
      s = gt;

      for (let i of t) s = Ts[i](s);

      Qe[e] = s;
    }

    return s;
  }

  p(ur, "getParserClass");
  wt.parse = or;
  wt.parseExpression = hr;
  wt.tokTypes = lr;
});
var As = Fe(Me()),
    ws = Fe(Me()),
    {
  __esModule: Ar,
  parse: wr,
  parseExpression: Cr,
  tokTypes: Sr
} = ws,
    {
  default: pr,
  ...dr
} = ws,
    Er = As.default ?? pr ?? dr;
export { Ar as __esModule, Er as default, wr as parse, Cr as parseExpression, Sr as tokTypes };