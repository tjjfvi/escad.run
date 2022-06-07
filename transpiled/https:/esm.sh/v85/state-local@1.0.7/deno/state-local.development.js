/* esm.sh - esbuild bundle(state-local@1.0.7) deno development */
var __defProp = Object.defineProperty;

var __name = (target, value) => __defProp(target, "name", {
  value,
  configurable: true
}); // esm-build-f03bb6687a4490eaed8d251b243efaa07ef53c5a-31f0acce/node_modules/state-local/lib/es/state-local.js


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

__name(_defineProperty, "_defineProperty");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

__name(ownKeys, "ownKeys");

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

__name(_objectSpread2, "_objectSpread2");

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

__name(compose, "compose");

function curry(fn) {
  return /* @__PURE__ */__name(function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  }, "curried");
}

__name(curry, "curry");

function isObject(value) {
  return {}.toString.call(value).includes("Object");
}

__name(isObject, "isObject");

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

__name(isEmpty, "isEmpty");

function isFunction(value) {
  return typeof value === "function";
}

__name(isFunction, "isFunction");

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

__name(hasOwnProperty, "hasOwnProperty");

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler("changeType");
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler("changeField");
  return changes;
}

__name(validateChanges, "validateChanges");

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler("selectorType");
}

__name(validateSelector, "validateSelector");

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler("handlerType");
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler("handlersType");
}

__name(validateHandler, "validateHandler");

function validateInitial(initial) {
  if (!initial) errorHandler("initialIsRequired");
  if (!isObject(initial)) errorHandler("initialType");
  if (isEmpty(initial)) errorHandler("initialContent");
}

__name(validateInitial, "validateInitial");

function throwError(errorMessages2, type) {
  throw new Error(errorMessages2[type] || errorMessages2["default"]);
}

__name(throwError, "throwError");

var errorMessages = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": "an unknown error accured in `state-local` package"
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function (state2) {
      return state2;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  __name(getState, "getState");

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  __name(setState, "setState");

  return [getState, setState];
}

__name(create, "create");

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

__name(extractChanges, "extractChanges");

function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}

__name(updateState, "updateState");

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

__name(didStateUpdate, "didStateUpdate");

var index = {
  create
};
var state_local_default = index;
export { state_local_default as default };