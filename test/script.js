(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _FormManager = __webpack_require__(2);

	var _FormManager2 = _interopRequireDefault(_FormManager);

	var _Rule = __webpack_require__(4);

	var _Rule2 = _interopRequireDefault(_Rule);

	var _Field = __webpack_require__(3);

	var _Field2 = _interopRequireDefault(_Field);

	var _Radio = __webpack_require__(45);

	var _Radio2 = _interopRequireDefault(_Radio);

	var _isEmpty = __webpack_require__(5);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _isNotEmpty = __webpack_require__(6);

	var _isNotEmpty2 = _interopRequireDefault(_isNotEmpty);

	var _isEmail = __webpack_require__(46);

	var _isEmail2 = _interopRequireDefault(_isEmail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		manager: _FormManager2.default,
		rules: {
			Rule: _Rule2.default,
			Field: _Field2.default,
			Radio: _Radio2.default
		},
		validators: {
			isEmpty: _isEmpty2.default,
			isNotEmpty: _isNotEmpty2.default,
			isEmail: _isEmail2.default
		}
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (form) {
		var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		return new FormManager(form, options);
	};

	var _Field = __webpack_require__(3);

	var _Field2 = _interopRequireDefault(_Field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(7);

	var css = __webpack_require__(44);

	var Messenger = function () {
		function Messenger() {
			var errorContainer = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

			_classCallCheck(this, Messenger);

			this.errorContainer = errorContainer;

			if (!!errorContainer) {
				this.errorContainer.addEventListener('click', this.hide.bind(this));
			}
		}

		_createClass(Messenger, [{
			key: 'clear',
			value: function clear() {
				if (!!this.errorContainer) {
					this.errorContainer.innerHTML = '';
				}
			}
		}, {
			key: 'hide',
			value: function hide() {
				if (!!this.errorContainer) {
					this.errorContainer.setAttribute('aria-hidden', 'true');
				}
			}
		}, {
			key: 'show',
			value: function show(message) {
				console.log(message);

				if (!!this.errorContainer) {
					this.errorContainer.innerHTML += '<div>' + message + '</div>';
					this.errorContainer.setAttribute('aria-hidden', 'false');
				}
			}
		}]);

		return Messenger;
	}();

	var FormManager = function () {
		function FormManager(form) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, FormManager);

			this.form = form;
			this.rules = [];
			this.options = Object.assign({}, options);

			var errorContainer = !!options.errorContainer ? options.errorContainer : this.form.querySelector('.main-error-container');
			this.messenger = new Messenger(errorContainer);

			this.form.addEventListener('submit', this.check.bind(this));
		}

		/**
	  * add
	  * @param name
	  * @param options
	  */


		_createClass(FormManager, [{
			key: 'add',
			value: function add(name) {
				var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

				// Search for fieldContainer

				var fieldContainer = false;
				if (!!options.fieldContainer) {
					fieldContainer = options.fieldContainer;
				} else {
					fieldContainer = this.form.querySelector('[name="' + name + '"]');
					fieldContainer = !!fieldContainer ? fieldContainer.parentNode : false;
				}

				// Search for error messenger

				if (!options.messenger && !!options.errorContainer) {
					options.messenger = new Messenger(options.errorContainer);
				}

				if (!options.messenger && !!fieldContainer && !!fieldContainer.querySelector('.error-container')) {
					options.messenger = new Messenger(fieldContainer.querySelector('.error-container'));
				}

				options = Object.assign({}, {
					type: _Field2.default,
					fieldContainer: fieldContainer,
					messenger: this.messenger,
					errorMessage: "Merci de remplir ce champ."
				}, options);

				this.rules.push(options.type(options).set(name, this.form));

				return this;
			}
		}, {
			key: 'submit',
			value: function submit(f) {
				this.options.submit = f;
				return this;
			}

			/**
	   *
	   * @param e
	   */

		}, {
			key: 'check',
			value: function check(e) {
				for (var i = 0, l = this.rules.length; i < l; i++) {
					var rule = this.rules[i];

					if (!!rule.messenger) {
						rule.messenger.clear();
					}
				}

				var ok = true;
				for (var _i = 0, _l = this.rules.length; _i < _l; _i++) {
					var _rule = this.rules[_i];
					var valid = _rule.validate();

					if (!valid) {
						if (!!_rule.messenger) {
							_rule.messenger.show(_rule.getError());
						}

						if (!!_rule.fieldContainer) {
							css.addClass(_rule.fieldContainer, 'error');
						}
					} else {
						if (!!_rule.messenger) {
							_rule.messenger.hide();
						}

						if (!!_rule.fieldContainer) {
							css.removeClass(_rule.fieldContainer, 'error');
						}
					}

					ok = valid && ok;
				}

				if (!ok) {
					e.preventDefault();
					return;
				}

				this.messenger.hide();

				if (!!this.options.submit) {
					e.preventDefault();

					this.options.submit(this);
				}
			}
		}]);

		return FormManager;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Rule = __webpack_require__(4);

	var _Rule2 = _interopRequireDefault(_Rule);

	var _isEmpty = __webpack_require__(5);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _isNotEmpty = __webpack_require__(6);

	var _isNotEmpty2 = _interopRequireDefault(_isNotEmpty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Field() {
		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		var o = (0, _Rule2.default)({
			required: true,

			modificator: function modificator(str) {
				return str.trim();
			},

			validator: _isNotEmpty2.default,

			set: function set(name, form) {
				this.name = name;
				this.form = form;
				this.element = form.querySelector('[name="' + name + '"]');

				if (!!this.element && !!this.messenger) {
					this.element.addEventListener('focus', this.messenger.hide.bind(this.messenger));
				}

				return this;
			},

			validate: function validate() {
				var value = this.element.value;

				if (!!value) {
					value = this.modificator(value);
					this.element.value = value;
				}

				// Either (not required and empty) or valid value
				return !this.required && (0, _isEmpty2.default)(value) || this.validator(value);
			}
		});

		return Object.assign(o, options);
	}

	exports.default = Field;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function Rule() {
		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		var o = {
			required: false,

			set: function set(name, form) {
				this.name = name;
				this.form = form;

				return this;
			},

			validate: function validate() {
				return !this.required;
			},

			getError: function getError() {
				return !!this.errorMessage ? this.errorMessage : '';
			}
		};

		return Object.assign(o, options);
	}

	exports.default = Rule;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function isEmpty(str) {
		return str === undefined || str === null || str === false || str === "" || str === 0 || str === "0";
	}

	exports.default = isEmpty;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _isEmpty = __webpack_require__(5);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isNotEmpty(str) {
		return !(0, _isEmpty2.default)(str);
	}

	exports.default = isNotEmpty;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	module.exports = __webpack_require__(11).Object.assign;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(9);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(27)});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(11)
	  , hide      = __webpack_require__(12)
	  , redefine  = __webpack_require__(22)
	  , ctx       = __webpack_require__(25)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.1'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(20)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(10).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , hide      = __webpack_require__(12)
	  , has       = __webpack_require__(23)
	  , SRC       = __webpack_require__(24)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(11).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(26);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(28)
	  , gOPS     = __webpack_require__(41)
	  , pIE      = __webpack_require__(42)
	  , toObject = __webpack_require__(43)
	  , IObject  = __webpack_require__(31)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(18)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(29)
	  , enumBugKeys = __webpack_require__(40);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(23)
	  , toIObject    = __webpack_require__(30)
	  , arrayIndexOf = __webpack_require__(34)(false)
	  , IE_PROTO     = __webpack_require__(38)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(31)
	  , defined = __webpack_require__(33);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(32);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(30)
	  , toLength  = __webpack_require__(35)
	  , toIndex   = __webpack_require__(37);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(36)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(39)('keys')
	  , uid    = __webpack_require__(24);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 41 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 42 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(33);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var cssClass = {
	    hasClass: function (element, className) {
	        if (element.classList) {
	            return element.classList.contains(className);
	        }
	        else {
	            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
	        }
	    },

	    addClass: function (element, className) {
	        if (!cssClass.hasClass(element, className)) {
	            if (element.classList) {
	                element.classList.add(className);
	            }
	            else {
	                element.className += ' ' + className;
	            }
	        }
	    },

	    removeClass: function (element, className) {
	        if (cssClass.hasClass(element, className)) {
	            if (element.classList) {
	                element.classList.remove(className);
	            }
	            else {
	                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	            }
	        }
	    }
	};

	module.exports = cssClass;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Rule = __webpack_require__(4);

	var _Rule2 = _interopRequireDefault(_Rule);

	var _isNotEmpty = __webpack_require__(6);

	var _isNotEmpty2 = _interopRequireDefault(_isNotEmpty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function Radio() {
		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		var o = (0, _Rule2.default)({
			set: function set(name, form) {
				var _this = this;

				this.name = name;
				this.form = form;

				if (!!this.messenger) {
					[].concat(_toConsumableArray(this.form.querySelectorAll('[name="' + this.name + '"]'))).forEach(function (elt) {
						return elt.addEventListener('focus', _this.messenger.hide.bind(_this.messenger));
					});
				}

				return this;
			},

			validate: function validate() {
				var c = this.form.querySelector('[name="' + this.name + '"]:checked');
				var value = !!c ? c.value : null;

				return (0, _isNotEmpty2.default)(value);
			}
		});

		return Object.assign(o, options);
	}

	exports.default = Radio;

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function isEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	exports.default = isEmail;

/***/ }
/******/ ]);
},{}],2:[function(require,module,exports){
(function (root, factory) {
	if ( typeof exports === 'object' ) {
		module.exports = factory();
	} else {
		root.domready = factory();
	}
}(this, function () {
	'use strict';

	var ready = false,
		stack = [];

	function completed() {
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			if ( document.addEventListener ) {
				document.removeEventListener('DOMContentLoaded', completed, false);
				window.removeEventListener('load', completed, false);
			} else {
				document.detachEvent("onreadystatechange", completed);
				window.detachEvent("onload", completed);
			}

			var f;
			while ( f = stack.shift() ) {
				setTimeout(f, 0);
			}

			ready = true;
		}
	}

	function domready(f) {
		if ( typeof f != 'function' ) {
			return;
		}

		if ( ready || (document.readyState === 'complete' ) ) {
			setTimeout(f, 0);
			return;
		}

		if ( stack.length <= 0 ) {
			if ( document.addEventListener ) {
				document.addEventListener('DOMContentLoaded', completed, false);
				window.addEventListener('load', completed, false);
			}
			else {
				document.attachEvent("onreadystatechange", completed);
				window.attachEvent("onload", completed);
			}
		}

		stack.push(f);
	}

	return domready;
}));

},{}],3:[function(require,module,exports){
"use strict";

const ready = require( 'mf-js/modules/dom/ready' );

const manager    = require( '../dist/mf-js-form' ).manager;
const rules      = require( '../dist/mf-js-form' ).rules;
const validators = require( '../dist/mf-js-form' ).validators;

ready( function () {
	let o = manager( document.querySelector( '.form-1' ) )
		.add( 'civility', {
			type:           rules.Radio,
			errorMessage:   'Merci de remplir votre civilité',
			fieldContainer: document.querySelector( '.form-1 .civility' )
		} )
		.add( 'firstname', {
			errorMessage: 'Merci de remplir votre prénom',
			modificator:  function ( str ) {
				return str.trim().toLocaleUpperCase().substr( 0, 1 ) + str.trim().toLocaleLowerCase().substr( 1 );
			}
		} )
		.add( 'user[lastname]', {
			errorMessage: 'Merci de remplir votre nom',
			modificator:  function ( str ) {
				return str.trim().toLocaleUpperCase();
			}
		} )
		.add( 'email', {
			errorMessage: 'Merci de remplir votre email',
			modificator:  function ( str ) {
				return str.trim().toLocaleLowerCase();
			},
			validator:    validators.isEmail
		} )
		.add( 'mobile', { required: false } )
		.add( 'phone', { required: false } )
		.add( 'one-phone', {
			type:         rules.Rule,
			errorMessage: 'Merci de remplir au moins un numéro de téléphone',
			validate:     function () {
				let v = (!!this.form.querySelector( '[name=mobile]' ).value || !!this.form.querySelector( '[name=phone]' ).value);
				return v;
			}
		} )
		.add( 'country', {
			errorMessage: 'Merci de remplir votre pays',
		} )
		.submit( _ => {
			console.log( 'Submitting...' );
		} );
} );

},{"../dist/mf-js-form":1,"mf-js/modules/dom/ready":2}]},{},[3]);
