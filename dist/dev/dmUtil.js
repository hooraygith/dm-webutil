(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dmUtil", [], factory);
	else if(typeof exports === 'object')
		exports["dmUtil"] = factory();
	else
		root["dmUtil"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(27)('wks')
  , uid        = __webpack_require__(16)
  , Symbol     = __webpack_require__(0).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(34)
  , defined = __webpack_require__(20);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(7)
  , createDesc = __webpack_require__(15);
module.exports = __webpack_require__(5) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(8)
  , IE8_DOM_DEFINE = __webpack_require__(33)
  , toPrimitive    = __webpack_require__(29)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(38)
  , enumBugKeys = __webpack_require__(21);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var Config={config:{path:'/',affix:'',domain:'',exp_day:10},init:function init(config){for(var i in config){Config.config[i]=config[i];}}};var init=exports.init=Config.init;var config=exports.config=Config.config;exports.default=config;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(55);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(57);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(56);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(0)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(67)
  , hide      = __webpack_require__(6)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
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

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f
  , has = __webpack_require__(3)
  , TAG = __webpack_require__(1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys')
  , uid    = __webpack_require__(16);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
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

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(0)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(23)
  , wksExt         = __webpack_require__(31)
  , defineProperty = __webpack_require__(7).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12)
  , document = __webpack_require__(0).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(9)(function(){
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(23)
  , $export        = __webpack_require__(22)
  , redefine       = __webpack_require__(39)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(3)
  , Iterators      = __webpack_require__(13)
  , $iterCreate    = __webpack_require__(71)
  , setToStringTag = __webpack_require__(25)
  , getPrototypeOf = __webpack_require__(79)
  , ITERATOR       = __webpack_require__(1)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(8)
  , dPs         = __webpack_require__(76)
  , enumBugKeys = __webpack_require__(21)
  , IE_PROTO    = __webpack_require__(26)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(69).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(38)
  , hiddenKeys = __webpack_require__(21).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(3)
  , toIObject    = __webpack_require__(4)
  , arrayIndexOf = __webpack_require__(65)(false)
  , IE_PROTO     = __webpack_require__(26)('IE_PROTO');

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

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(80)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(35)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
var global        = __webpack_require__(0)
  , hide          = __webpack_require__(6)
  , Iterators     = __webpack_require__(13)
  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(51);var _config=__webpack_require__(11);var _error=__webpack_require__(49);var _md=__webpack_require__(50);var _md2=_interopRequireDefault(_md);var _base=__webpack_require__(46);var _cookie=__webpack_require__(48);var _session=__webpack_require__(52);var _cache=__webpack_require__(47);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * Created by otherlite on 2016/7/3.
 */module.exports={// 设置config
init:_config.init,// error收集
bug:_error.bug,bugInit:_error.bugInit,// md5加密
md5:_md2.default,// base64
encode:_base.encode,decode:_base.decode,// cookie
getCookie:_cookie.getCookie,setCookie:_cookie.setCookie,delCookie:_cookie.delCookie,// cache
setCache:_cache.setCache,getCache:_cache.getCache,removeCache:_cache.removeCache,clearCache:_cache.clearCache,// session
setSession:_session.setSession,getSession:_session.getSession,removeSession:_session.removeSession,clearSession:_session.clearSession};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable *//*
 CryptoJS v3.1.2
 code.google.com/p/crypto-js
 (c) 2009-2013 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 */var CryptoJS=CryptoJS||function(h,r){var k={},l=k.lib={},n=function n(){},f=l.Base={extend:function extend(a){n.prototype=this;var b=new n();a&&b.mixIn(a);b.hasOwnProperty('init')||(b.init=function(){b.$super.init.apply(this,arguments);});b.init.prototype=b;b.$super=this;return b;},create:function create(){var a=this.extend();a.init.apply(a,arguments);return a;},init:function init(){},mixIn:function mixIn(a){for(var b in a){a.hasOwnProperty(b)&&(this[b]=a[b]);}a.hasOwnProperty('toString')&&(this.toString=a.toString);},clone:function clone(){return this.init.prototype.extend(this);}},j=l.WordArray=f.extend({init:function init(a,b){a=this.words=a||[];this.sigBytes=b!=r?b:4*a.length;},toString:function toString(a){return(a||s).stringify(this);},concat:function concat(a){var b=this.words,d=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)for(var e=0;e<a;e++){b[c+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((c+e)%4);}else if(d.length>65535)for(e=0;e<a;e+=4){b[c+e>>>2]=d[e>>>2];}else b.push.apply(b,d);this.sigBytes+=a;return this;},clamp:function clamp(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<32-8*(b%4);a.length=h.ceil(b/4);},clone:function clone(){var a=f.clone.call(this);a.words=this.words.slice(0);return a;},random:function random(a){for(var b=[],d=0;d<a;d+=4){b.push(4294967296*h.random()|0);}return new j.init(b,a);}}),m=k.enc={},s=m.Hex={stringify:function stringify(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){var e=b[c>>>2]>>>24-8*(c%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16));}return d.join('');},parse:function parse(a){for(var b=a.length,d=[],c=0;c<b;c+=2){d[c>>>3]|=parseInt(a.substr(c,2),16)<<24-4*(c%8);}return new j.init(d,b/2);}},p=m.Latin1={stringify:function stringify(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));}return d.join('');},parse:function parse(a){for(var b=a.length,d=[],c=0;c<b;c++){d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);}return new j.init(d,b);}},t=m.Utf8={stringify:function stringify(a){try{return decodeURIComponent(escape(p.stringify(a)));}catch(b){throw Error('Malformed UTF-8 data');}},parse:function parse(a){return p.parse(unescape(encodeURIComponent(a)));}},q=l.BufferedBlockAlgorithm=f.extend({reset:function reset(){this._data=new j.init();this._nDataBytes=0;},_append:function _append(a){typeof a==='string'&&(a=t.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes;},_process:function _process(a){var b=this._data,d=b.words,c=b.sigBytes,e=this.blockSize,f=c/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;c=h.min(4*a,c);if(a){for(var g=0;g<a;g+=e){this._doProcessBlock(d,g);}g=d.splice(0,a);b.sigBytes-=c;}return new j.init(g,c);},clone:function clone(){var a=f.clone.call(this);a._data=this._data.clone();return a;},_minBufferSize:0});l.Hasher=q.extend({cfg:f.extend(),init:function init(a){this.cfg=this.cfg.extend(a);this.reset();},reset:function reset(){q.reset.call(this);this._doReset();},update:function update(a){this._append(a);this._process();return this;},finalize:function finalize(a){a&&this._append(a);return this._doFinalize();},blockSize:16,_createHelper:function _createHelper(a){return function(b,d){return new a.init(d).finalize(b);};},_createHmacHelper:function _createHmacHelper(a){return function(b,d){return new u.HMAC.init(a,d).finalize(b);};}});var u=k.algo={};return k;}(Math);module.exports=CryptoJS;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable *//*
 CryptoJS v3.0.2
 code.google.com/p/crypto-js
 (c) 2009-2012 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 */var CryptoJS=__webpack_require__(44);(function(){var h=CryptoJS,j=h.lib.WordArray;h.enc.Base64={stringify:function stringify(b){var e=b.words,f=b.sigBytes,c=this._map;b.clamp();b=[];for(var a=0;a<f;a+=3){for(var d=(e[a>>>2]>>>24-8*(a%4)&255)<<16|(e[a+1>>>2]>>>24-8*((a+1)%4)&255)<<8|e[a+2>>>2]>>>24-8*((a+2)%4)&255,g=0;g<4&&a+0.75*g<f;g++){b.push(c.charAt(d>>>6*(3-g)&63));}}if(e=c.charAt(64))for(;b.length%4;){b.push(e);}return b.join('');},parse:function parse(b){var e=b.length,f=this._map,c=f.charAt(64);c&&(c=b.indexOf(c),c!=-1&&(e=c));for(var c=[],a=0,d=0;d<e;d++){if(d%4){var g=f.indexOf(b.charAt(d-1))<<2*(d%4),h=f.indexOf(b.charAt(d))>>>6-2*(d%4);c[a>>>2]|=(g|h)<<24-8*(a%4);a++;}}return j.create(c,a);},_map:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='};})();module.exports=CryptoJS;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.decode=exports.encode=undefined;var _stringify=__webpack_require__(54);var _stringify2=_interopRequireDefault(_stringify);var _typeof2=__webpack_require__(18);var _typeof3=_interopRequireDefault(_typeof2);var _encBase64Min=__webpack_require__(45);var _encBase64Min2=_interopRequireDefault(_encBase64Min);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var base64={// base64编码
encode:function encode(data){if((typeof data==='undefined'?'undefined':(0,_typeof3.default)(data))==='object'){data=(0,_stringify2.default)(data);}var str=_encBase64Min2.default.enc.Utf8.parse(data);return _encBase64Min2.default.enc.Base64.stringify(str);},// base64解码
decode:function decode(str){var words=_encBase64Min2.default.enc.Base64.parse(str);return JSON.parse(words.toString(_encBase64Min2.default.enc.Utf8));}};/**
 * Created by otherlite on 2016/5/4.
 */var encode=exports.encode=base64.encode;var decode=exports.decode=base64.decode;exports.default=base64;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.clearCache=exports.removeCache=exports.getCache=exports.setCache=undefined;var _extends2=__webpack_require__(17);var _extends3=_interopRequireDefault(_extends2);var _config=__webpack_require__(11);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var cache={/**
     * 设置缓存
     */setCache:function setCache(key,value,opt){var _config$opt=(0,_extends3.default)({},_config.config,opt),affix=_config$opt.affix;localStorage.setItem(''+key+affix,value);},/**
     * 获取缓存
     */getCache:function getCache(key,opt){var _config$opt2=(0,_extends3.default)({},_config.config,opt),affix=_config$opt2.affix;return localStorage.getItem(''+key+affix);},/**
     * 移除缓存
     */removeCache:function removeCache(key,opt){var _config$opt3=(0,_extends3.default)({},_config.config,opt),affix=_config$opt3.affix;localStorage.removeItem(''+key+affix);},/**
     * 清空所有缓存
     */clearCache:function clearCache(){localStorage.clear();}};/**
 * Created by otherlite on 2016/5/27.
 *
 */var setCache=exports.setCache=cache.setCache;var getCache=exports.getCache=cache.getCache;var removeCache=exports.removeCache=cache.removeCache;var clearCache=exports.clearCache=cache.clearCache;exports.default=cache;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.delCookie=exports.setCookie=exports.getCookie=undefined;var _extends2=__webpack_require__(17);var _extends3=_interopRequireDefault(_extends2);var _getIterator2=__webpack_require__(53);var _getIterator3=_interopRequireDefault(_getIterator2);var _config=__webpack_require__(11);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var expiresTime=function expiresTime(day){// 获取过期时间
var exp=new Date();exp.setTime(exp.getTime()+day*24*60*60*1000);return exp.toUTCString();};/**
 * Created by otherlite on 2016/3/15.
 */var cookie={getAllCookie:function getAllCookie(){// 获取所有cookie
if(!document.cookie)return{};var cookies=document.cookie.split('; ');var result={};var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(cookies),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _cookie=_step.value;var index=_cookie.indexOf('=');result[decodeURIComponent(_cookie.substr(0,index))]=decodeURIComponent(_cookie.substr(index+1));}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return result;},// 获取指定cookie
getCookie:function getCookie(key,opt){// 获取指定cookie
var _config$opt=(0,_extends3.default)({},_config.config,opt),affix=_config$opt.affix;return cookie.getAllCookie()[''+key+affix];},// 设置cookie
setCookie:function setCookie(key,value,opt){var _config$opt2=(0,_extends3.default)({},_config.config,opt),affix=_config$opt2.affix,domain=_config$opt2.domain,path=_config$opt2.path,exp_day=_config$opt2.exp_day;var str=''+key+affix+'='+encodeURIComponent(value)+';path='+path+';expires='+expiresTime(exp_day)+';';if(domain!=='localhost'){str+='domain='+domain+';';}document.cookie=str;},// 删除cookie
delCookie:function delCookie(key,opt){var _config$opt3=(0,_extends3.default)({},_config.config,opt),affix=_config$opt3.affix,domain=_config$opt3.domain,path=_config$opt3.path;var str=''+key+affix+'=0;expires='+new Date(0).toUTCString()+';path='+path+';domain='+domain+';';document.cookie=str;}};var getCookie=exports.getCookie=cookie.getCookie;var setCookie=exports.setCookie=cookie.setCookie;var delCookie=exports.delCookie=cookie.delCookie;exports.default=cookie;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});/**
 * Created by otherlite on 2016/6/15.
 *//* global bughd */var error={bugInit:function bugInit(data){window.bughd&&bughd('user',data);},bug:function bug(type,error,data){// 发送异常
window.bughd&&bughd('notify',type,error,data);}};var bug=exports.bug=error.bug;var bugInit=exports.bugInit=error.bugInit;exports.default=error;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2=__webpack_require__(18);var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* eslint-disable *//*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 *//* global unescape, define, module */;(function($){'use strict';/*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */function safe_add(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&0xFFFF;}/*
  * Bitwise rotate a 32-bit number to the left.
  */function bit_rol(num,cnt){return num<<cnt|num>>>32-cnt;}/*
  * These functions implement the four basic operations the algorithm uses.
  */function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);}function md5_ff(a,b,c,d,x,s,t){return md5_cmn(b&c|~b&d,a,b,x,s,t);}function md5_gg(a,b,c,d,x,s,t){return md5_cmn(b&d|c&~d,a,b,x,s,t);}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t);}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|~d),a,b,x,s,t);}/*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */function binl_md5(x,len){/* append padding */x[len>>5]|=0x80<<len%32;x[(len+64>>>9<<4)+14]=len;var i;var olda;var oldb;var oldc;var oldd;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(i=0;i<x.length;i+=16){olda=a;oldb=b;oldc=c;oldd=d;a=md5_ff(a,b,c,d,x[i],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}return[a,b,c,d];}/*
  * Convert an array of little-endian words to a string
  */function binl2rstr(input){var i;var output='';for(i=0;i<input.length*32;i+=8){output+=String.fromCharCode(input[i>>5]>>>i%32&0xFF);}return output;}/*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */function rstr2binl(input){var i;var output=[];output[(input.length>>2)-1]=undefined;for(i=0;i<output.length;i+=1){output[i]=0;}for(i=0;i<input.length*8;i+=8){output[i>>5]|=(input.charCodeAt(i/8)&0xFF)<<i%32;}return output;}/*
  * Calculate the MD5 of a raw string
  */function rstr_md5(s){return binl2rstr(binl_md5(rstr2binl(s),s.length*8));}/*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */function rstr_hmac_md5(key,data){var i;var bkey=rstr2binl(key);var ipad=[];var opad=[];var hash;ipad[15]=opad[15]=undefined;if(bkey.length>16){bkey=binl_md5(bkey,key.length*8);}for(i=0;i<16;i+=1){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C;}hash=binl_md5(ipad.concat(rstr2binl(data)),512+data.length*8);return binl2rstr(binl_md5(opad.concat(hash),512+128));}/*
  * Convert a raw string to a hex string
  */function rstr2hex(input){var hex_tab='0123456789abcdef';var output='';var x;var i;for(i=0;i<input.length;i+=1){x=input.charCodeAt(i);output+=hex_tab.charAt(x>>>4&0x0F)+hex_tab.charAt(x&0x0F);}return output;}/*
  * Encode a string as utf-8
  */function str2rstr_utf8(input){return unescape(encodeURIComponent(input));}/*
  * Take string arguments and return either raw or hex encoded strings
  */function raw_md5(s){return rstr_md5(str2rstr_utf8(s));}function hex_md5(s){return rstr2hex(raw_md5(s));}function raw_hmac_md5(k,d){return rstr_hmac_md5(str2rstr_utf8(k),str2rstr_utf8(d));}function hex_hmac_md5(k,d){return rstr2hex(raw_hmac_md5(k,d));}function md5(string,key,raw){if(!key){if(!raw){return hex_md5(string);}return raw_md5(string);}if(!raw){return hex_hmac_md5(key,string);}return raw_hmac_md5(key,string);}if(true){!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return md5;}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if((typeof module==='undefined'?'undefined':(0,_typeof3.default)(module))==='object'&&module.exports){module.exports=md5;}else{$.md5=md5;}})(undefined);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _typeof2=__webpack_require__(18);var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* eslint-disable *//* global PushStream WebSocketWrapper EventSourceWrapper EventSource *//* jshint evil: true, plusplus: false, regexp: false *//**
The MIT License (MIT)

Copyright (c) 2010-2014 Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>

This file is part of Nginx Push Stream Module.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

pushstream.js

Created: Nov 01, 2011
Authors: Wandenberg Peixoto <wandenberg@gmail.com>, Rogério Carvalho Schneider <stockrt@gmail.com>
 */(function(window,document,undefined){'use strict';/* prevent duplicate declaration */if(window.PushStream){return;}var Utils={};var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];var valueToTwoDigits=function valueToTwoDigits(value){return(value<10?'0':'')+value;};Utils.dateToUTCString=function(date){var time=valueToTwoDigits(date.getUTCHours())+':'+valueToTwoDigits(date.getUTCMinutes())+':'+valueToTwoDigits(date.getUTCSeconds());return days[date.getUTCDay()]+', '+valueToTwoDigits(date.getUTCDate())+' '+months[date.getUTCMonth()]+' '+date.getUTCFullYear()+' '+time+' GMT';};var extend=function extend(){var object=arguments[0]||{};for(var i=0;i<arguments.length;i++){var settings=arguments[i];for(var attr in settings){if(!settings.hasOwnProperty||settings.hasOwnProperty(attr)){object[attr]=settings[attr];}}}return object;};var validChars=/^[\],:{}\s]*$/,validEscape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,validTokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,validBraces=/(?:^|:|,)(?:\s*\[)+/g;var trim=function trim(value){return value.replace(/^\s*/,'').replace(/\s*$/,'');};Utils.parseJSON=function(data){if(!data||!isString(data)){return null;}// Make sure leading/trailing whitespace is removed (IE can't handle it)
data=trim(data);// Attempt to parse using the native JSON parser first
if(window.JSON&&window.JSON.parse){try{return window.JSON.parse(data);}catch(e){throw'Invalid JSON: '+data;}}// Make sure the incoming data is actual JSON
// Logic borrowed from http://json.org/json2.js
if(validChars.test(data.replace(validEscape,'@').replace(validTokens,']').replace(validBraces,''))){return new Function('return '+data)();}throw'Invalid JSON: '+data;};var getControlParams=function getControlParams(pushstream){var data={};data[pushstream.tagArgument]='';data[pushstream.timeArgument]='';data[pushstream.eventIdArgument]='';if(pushstream.messagesControlByArgument){data[pushstream.tagArgument]=Number(pushstream._etag);if(pushstream._lastModified){data[pushstream.timeArgument]=pushstream._lastModified;}else if(pushstream._lastEventId){data[pushstream.eventIdArgument]=pushstream._lastEventId;}}return data;};var getTime=function getTime(){return new Date().getTime();};var currentTimestampParam=function currentTimestampParam(){return{'_':getTime()};};var objectToUrlParams=function objectToUrlParams(settings){var params=settings;if((typeof settings==='undefined'?'undefined':(0,_typeof3.default)(settings))==='object'){params='';for(var attr in settings){if(!settings.hasOwnProperty||settings.hasOwnProperty(attr)){params+='&'+attr+'='+window.escape(settings[attr]);}}params=params.substring(1);}return params||'';};var addParamsToUrl=function addParamsToUrl(url,params){return url+(url.indexOf('?')<0?'?':'&')+objectToUrlParams(params);};var isArray=Array.isArray||function(obj){return Object.prototype.toString.call(obj)==='[object Array]';};var isString=function isString(obj){return Object.prototype.toString.call(obj)==='[object String]';};var isDate=function isDate(obj){return Object.prototype.toString.call(obj)==='[object Date]';};var Log4js={logger:null,debug:function debug(){if(PushStream.LOG_LEVEL==='debug'){Log4js._log.apply(Log4js._log,arguments);}},info:function info(){if(PushStream.LOG_LEVEL==='info'||PushStream.LOG_LEVEL==='debug'){Log4js._log.apply(Log4js._log,arguments);}},error:function error(){Log4js._log.apply(Log4js._log,arguments);},_initLogger:function _initLogger(){var console=window.console;if(console&&console.log){if(console.log.apply){Log4js.logger=console.log;}else if((0,_typeof3.default)(console.log)==='object'&&Function.prototype.bind){Log4js.logger=Function.prototype.bind.call(console.log,console);}else if((0,_typeof3.default)(console.log)==='object'&&Function.prototype.call){Log4js.logger=function(){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments));};}}},_log:function _log(){if(!Log4js.logger){Log4js._initLogger();}if(Log4js.logger){try{Log4js.logger.apply(window.console,arguments);}catch(e){Log4js._initLogger();if(Log4js.logger){Log4js.logger.apply(window.console,arguments);}}}var logElement=document.getElementById(PushStream.LOG_OUTPUT_ELEMENT_ID);if(logElement){var str='';for(var i=0;i<arguments.length;i++){str+=arguments[i]+' ';}logElement.innerHTML+=str+'\n';var lines=logElement.innerHTML.split('\n');if(lines.length>100){logElement.innerHTML=lines.slice(-100).join('\n');}}}};var Ajax={_getXHRObject:function _getXHRObject(crossDomain){var xhr=false;if(crossDomain){try{xhr=new window.XDomainRequest();}catch(e){}if(xhr){return xhr;}}try{xhr=new window.XMLHttpRequest();}catch(e1){try{xhr=new window.ActiveXObject('Msxml2.XMLHTTP');}catch(e2){try{xhr=new window.ActiveXObject('Microsoft.XMLHTTP');}catch(e3){xhr=false;}}}return xhr;},_send:function _send(settings,post){settings=settings||{};settings.timeout=settings.timeout||30000;var xhr=Ajax._getXHRObject(settings.crossDomain);if(!xhr||!settings.url){return;}Ajax.clear(settings);settings.xhr=xhr;if(window.XDomainRequest&&xhr instanceof window.XDomainRequest){xhr.onload=function(){if(settings.afterReceive){settings.afterReceive(xhr);}if(settings.success){settings.success(xhr.responseText);}};xhr.onerror=xhr.ontimeout=function(){if(settings.afterReceive){settings.afterReceive(xhr);}if(settings.error){settings.error(xhr.status);}};}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){Ajax.clear(settings);if(settings.afterReceive){settings.afterReceive(xhr);}if(xhr.status===200){if(settings.success){settings.success(xhr.responseText);}}else{if(settings.error){settings.error(xhr.status);}}}};}if(settings.beforeOpen){settings.beforeOpen(xhr);}var params={};var body=null;var method='GET';if(post){body=objectToUrlParams(settings.data);method='POST';}else{params=settings.data||{};}xhr.open(method,addParamsToUrl(settings.url,extend({},params,currentTimestampParam())),true);if(settings.beforeSend){settings.beforeSend(xhr);}var onerror=function onerror(){Ajax.clear(settings);try{xhr.abort();}catch(e){/* ignore error on closing */}settings.error(304);};if(post){if(xhr.setRequestHeader){xhr.setRequestHeader('Accept','application/json');xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');}}else{settings.timeoutId=window.setTimeout(onerror,settings.timeout+2000);}xhr.send(body);return xhr;},_clear_xhr:function _clear_xhr(xhr){if(xhr){xhr.onreadystatechange=null;}},_clear_script:function _clear_script(script){// Handling memory leak in IE, removing and dereference the script
if(script){script.onerror=script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script);}}},_clear_timeout:function _clear_timeout(settings){settings.timeoutId=clearTimer(settings.timeoutId);},_clear_jsonp:function _clear_jsonp(settings){var callbackFunctionName=settings.data.callback;if(callbackFunctionName){window[callbackFunctionName]=function(){window[callbackFunctionName]=null;};}},clear:function clear(settings){Ajax._clear_timeout(settings);Ajax._clear_jsonp(settings);Ajax._clear_script(document.getElementById(settings.scriptId));Ajax._clear_xhr(settings.xhr);},jsonp:function jsonp(settings){settings.timeout=settings.timeout||30000;Ajax.clear(settings);var head=document.head||document.getElementsByTagName('head')[0];var script=document.createElement('script');var startTime=getTime();var onerror=function onerror(){Ajax.clear(settings);var endTime=getTime();settings.error(endTime-startTime>settings.timeout/2?304:403);};var onload=function onload(){Ajax.clear(settings);settings.load();};var onsuccess=function onsuccess(){settings.afterSuccess=true;settings.success.apply(null,arguments);};script.onerror=onerror;script.onload=script.onreadystatechange=function(eventLoad){if(!script.readyState||/loaded|complete/.test(script.readyState)){if(settings.afterSuccess){onload();}else{onerror();}}};if(settings.beforeOpen){settings.beforeOpen({});}if(settings.beforeSend){settings.beforeSend({});}settings.timeoutId=window.setTimeout(onerror,settings.timeout+2000);settings.scriptId=settings.scriptId||getTime();settings.afterSuccess=null;settings.data.callback=settings.scriptId+'_onmessage_'+getTime();window[settings.data.callback]=onsuccess;script.setAttribute('src',addParamsToUrl(settings.url,extend({},settings.data,currentTimestampParam())));script.setAttribute('async','async');script.setAttribute('id',settings.scriptId);// Use insertBefore instead of appendChild to circumvent an IE6 bug.
head.insertBefore(script,head.firstChild);return settings;},load:function load(settings){return Ajax._send(settings,false);},post:function post(settings){return Ajax._send(settings,true);}};var escapeText=function escapeText(text){return text?window.escape(text):'';};var unescapeText=function unescapeText(text){return text?window.unescape(text):'';};Utils.parseMessage=function(messageText,keys){var msg=messageText;if(isString(messageText)){msg=Utils.parseJSON(messageText);}var message={id:msg[keys.jsonIdKey],channel:msg[keys.jsonChannelKey],text:isString(msg[keys.jsonTextKey])?unescapeText(msg[keys.jsonTextKey]):msg[keys.jsonTextKey],tag:msg[keys.jsonTagKey],time:msg[keys.jsonTimeKey],eventid:msg[keys.jsonEventIdKey]||''};return message;};var getBacktrack=function getBacktrack(options){return options.backtrack?'.b'+Number(options.backtrack):'';};var getChannelsPath=function getChannelsPath(channels,withBacktrack){var path='';for(var channelName in channels){if(!channels.hasOwnProperty||channels.hasOwnProperty(channelName)){path+='/'+channelName+(withBacktrack?getBacktrack(channels[channelName]):'');}}return path;};var getSubscriberUrl=function getSubscriberUrl(pushstream,prefix,extraParams,withBacktrack){var websocket=pushstream.wrapper.type===WebSocketWrapper.TYPE;var useSSL=pushstream.useSSL;var port=normalizePort(useSSL,pushstream.port);var url=websocket?useSSL?'wss://':'ws://':useSSL?'https://':'http://';url+=pushstream.host;url+=port?':'+port:'';url+=prefix;var channels=getChannelsPath(pushstream.channels,withBacktrack);if(pushstream.channelsByArgument){var channelParam={};channelParam[pushstream.channelsArgument]=channels.substring(1);extraParams=extend({},extraParams,channelParam);}else{url+=channels;}return addParamsToUrl(url,extraParams);};var getPublisherUrl=function getPublisherUrl(pushstream){var port=normalizePort(pushstream.useSSL,pushstream.port);var url=pushstream.useSSL?'https://':'http://';url+=pushstream.host;url+=port?':'+port:'';url+=pushstream.urlPrefixPublisher;url+='?id='+getChannelsPath(pushstream.channels,false);return url;};Utils.extract_xss_domain=function(domain){// if domain is an ip address return it, else return ate least the last two parts of it
if(domain.match(/^(\d{1,3}\.){3}\d{1,3}$/)){return domain;}var domainParts=domain.split('.');// if the domain ends with 3 chars or 2 chars preceded by more than 4 chars,
// we can keep only 2 parts, else we have to keep at least 3 (or all domain name)
var keepNumber=Math.max(domainParts.length-1,domain.match(/(\w{4,}\.\w{2}|\.\w{3,})$/)?2:3);return domainParts.slice(-1*keepNumber).join('.');};var normalizePort=function normalizePort(useSSL,port){port=Number(port||(useSSL?443:80));return!useSSL&&port===80||useSSL&&port===443?'':port;};Utils.isCrossDomainUrl=function(url){if(!url){return false;}var parser=document.createElement('a');parser.href=url;var srcPort=normalizePort(window.location.protocol==='https:',window.location.port);var dstPort=normalizePort(parser.protocol==='https:',parser.port);return window.location.protocol!==parser.protocol||window.location.hostname!==parser.hostname||srcPort!==dstPort;};var linker=function linker(method,instance){return function(){return method.apply(instance,arguments);};};var clearTimer=function clearTimer(timer){if(timer){window.clearTimeout(timer);}return null;};/* common callbacks */var onmessageCallback=function onmessageCallback(event){Log4js.info('['+this.type+'] message received',arguments);var message=Utils.parseMessage(event.data,this.pushstream);if(message.tag){this.pushstream._etag=message.tag;}if(message.time){this.pushstream._lastModified=message.time;}if(message.eventid){this.pushstream._lastEventId=message.eventid;}this.pushstream._onmessage(message.text,message.id,message.channel,message.eventid,true,message.time);};var onopenCallback=function onopenCallback(){this.pushstream._onopen();Log4js.info('['+this.type+'] connection opened');};var onerrorCallback=function onerrorCallback(event){Log4js.info('['+this.type+'] error (disconnected by server):',event);if(this.pushstream.readyState===PushStream.OPEN&&this.type===EventSourceWrapper.TYPE&&event.type==='error'&&this.connection.readyState===window.EventSource.CONNECTING){// EventSource already has a reconnection function using the last-event-id header
return;}this._closeCurrentConnection();this.pushstream._onerror({type:event&&(event.type==='load'||event.type==='close'&&event.code===1006)||this.pushstream.readyState===PushStream.CONNECTING?'load':'timeout'});};/* wrappers */var WebSocketWrapper=function WebSocketWrapper(pushstream){if(!window.WebSocket&&!window.MozWebSocket){throw'WebSocket not supported';}this.type=WebSocketWrapper.TYPE;this.pushstream=pushstream;this.connection=null;};WebSocketWrapper.TYPE='WebSocket';WebSocketWrapper.prototype={connect:function connect(){this._closeCurrentConnection();var params=extend({},this.pushstream.extraParams(),currentTimestampParam(),getControlParams(this.pushstream));var url=getSubscriberUrl(this.pushstream,this.pushstream.urlPrefixWebsocket,params,!this.pushstream._useControlArguments());this.connection=window.WebSocket?new window.WebSocket(url):new window.MozWebSocket(url);this.connection.onerror=linker(onerrorCallback,this);this.connection.onclose=linker(onerrorCallback,this);this.connection.onopen=linker(onopenCallback,this);this.connection.onmessage=linker(onmessageCallback,this);Log4js.info('[WebSocket] connecting to:',url);},disconnect:function disconnect(){if(this.connection){Log4js.debug('[WebSocket] closing connection to:',this.connection.url);this.connection.onclose=null;this._closeCurrentConnection();this.pushstream._onclose();}},_closeCurrentConnection:function _closeCurrentConnection(){if(this.connection){try{this.connection.close();}catch(e){/* ignore error on closing */}this.connection=null;}},sendMessage:function sendMessage(message){if(this.connection){this.connection.send(message);}}};var EventSourceWrapper=function EventSourceWrapper(pushstream){if(!window.EventSource){throw'EventSource not supported';}this.type=EventSourceWrapper.TYPE;this.pushstream=pushstream;this.connection=null;};EventSourceWrapper.TYPE='EventSource';EventSourceWrapper.prototype={connect:function connect(){this._closeCurrentConnection();var params=extend({},this.pushstream.extraParams(),currentTimestampParam(),getControlParams(this.pushstream));var url=getSubscriberUrl(this.pushstream,this.pushstream.urlPrefixEventsource,params,!this.pushstream._useControlArguments());this.connection=new window.EventSource(url);this.connection.onerror=linker(onerrorCallback,this);this.connection.onopen=linker(onopenCallback,this);this.connection.onmessage=linker(onmessageCallback,this);Log4js.info('[EventSource] connecting to:',url);},disconnect:function disconnect(){if(this.connection){Log4js.debug('[EventSource] closing connection to:',this.connection.url);this.connection.onclose=null;this._closeCurrentConnection();this.pushstream._onclose();}},_closeCurrentConnection:function _closeCurrentConnection(){if(this.connection){try{this.connection.close();}catch(e){/* ignore error on closing */}this.connection=null;}}};var StreamWrapper=function StreamWrapper(pushstream){this.type=StreamWrapper.TYPE;this.pushstream=pushstream;this.connection=null;this.url=null;this.frameloadtimer=null;this.pingtimer=null;this.iframeId='PushStreamManager_'+pushstream.id;};StreamWrapper.TYPE='Stream';StreamWrapper.prototype={connect:function connect(){this._closeCurrentConnection();var domain=Utils.extract_xss_domain(this.pushstream.host);try{document.domain=domain;}catch(e){Log4js.error('[Stream] (warning) problem setting document.domain = '+domain+' (OBS: IE8 does not support set IP numbers as domain)');}var params=extend({},this.pushstream.extraParams(),currentTimestampParam(),{'streamid':this.pushstream.id},getControlParams(this.pushstream));this.url=getSubscriberUrl(this.pushstream,this.pushstream.urlPrefixStream,params,!this.pushstream._useControlArguments());Log4js.debug('[Stream] connecting to:',this.url);this.loadFrame(this.url);},disconnect:function disconnect(){if(this.connection){Log4js.debug('[Stream] closing connection to:',this.url);this._closeCurrentConnection();this.pushstream._onclose();}},_clear_iframe:function _clear_iframe(){var oldIframe=document.getElementById(this.iframeId);if(oldIframe){oldIframe.onload=null;oldIframe.src='about:blank';if(oldIframe.parentNode){oldIframe.parentNode.removeChild(oldIframe);}}},_closeCurrentConnection:function _closeCurrentConnection(){this._clear_iframe();if(this.connection){this.pingtimer=clearTimer(this.pingtimer);this.frameloadtimer=clearTimer(this.frameloadtimer);this.connection=null;this.transferDoc=null;if(typeof window.CollectGarbage==='function'){window.CollectGarbage();}}},loadFrame:function loadFrame(url){this._clear_iframe();var ifr=null;if('ActiveXObject'in window){var transferDoc=new window.ActiveXObject('htmlfile');transferDoc.open();transferDoc.write('\x3C'+'html'+'\x3E\x3C'+'script'+'\x3E'+"document.domain='"+document.domain+"';\x3C"+'/script'+'\x3E');transferDoc.write('\x3C'+'body'+'\x3E\x3C'+"iframe id='"+this.iframeId+"' src='"+url+"'\x3E\x3C"+'/iframe'+'\x3E\x3C'+'/body'+'\x3E\x3C'+'/html'+'\x3E');transferDoc.parentWindow.PushStream=PushStream;transferDoc.close();ifr=transferDoc.getElementById(this.iframeId);this.transferDoc=transferDoc;}else{ifr=document.createElement('IFRAME');ifr.style.width='1px';ifr.style.height='1px';ifr.style.border='none';ifr.style.position='absolute';ifr.style.top='-10px';ifr.style.marginTop='-10px';ifr.style.zIndex='-20';ifr.PushStream=PushStream;document.body.appendChild(ifr);ifr.setAttribute('src',url);ifr.setAttribute('id',this.iframeId);}ifr.onload=linker(onerrorCallback,this);this.connection=ifr;this.frameloadtimer=window.setTimeout(linker(onerrorCallback,this),this.pushstream.timeout);},register:function register(iframeWindow){this.frameloadtimer=clearTimer(this.frameloadtimer);iframeWindow.p=linker(this.process,this);this.connection.onload=linker(this._onframeloaded,this);this.pushstream._onopen();this.setPingTimer();Log4js.info('[Stream] frame registered');},process:function process(id,channel,text,eventid,time,tag){this.pingtimer=clearTimer(this.pingtimer);Log4js.info('[Stream] message received',arguments);if(id!==-1){if(tag){this.pushstream._etag=tag;}if(time){this.pushstream._lastModified=time;}if(eventid){this.pushstream._lastEventId=eventid;}}this.pushstream._onmessage(unescapeText(text),id,channel,eventid||'',true,time);this.setPingTimer();},_onframeloaded:function _onframeloaded(){Log4js.info('[Stream] frame loaded (disconnected by server)');this.pushstream._onerror({type:'timeout'});this.connection.onload=null;this.disconnect();},setPingTimer:function setPingTimer(){if(this.pingtimer){clearTimer(this.pingtimer);}this.pingtimer=window.setTimeout(linker(onerrorCallback,this),this.pushstream.pingtimeout);}};var LongPollingWrapper=function LongPollingWrapper(pushstream){this.type=LongPollingWrapper.TYPE;this.pushstream=pushstream;this.connection=null;this.opentimer=null;this.messagesQueue=[];this._linkedInternalListen=linker(this._internalListen,this);this.xhrSettings={timeout:this.pushstream.timeout,data:{},url:null,success:linker(this.onmessage,this),error:linker(this.onerror,this),load:linker(this.onload,this),beforeSend:linker(this.beforeSend,this),afterReceive:linker(this.afterReceive,this)};};LongPollingWrapper.TYPE='LongPolling';LongPollingWrapper.prototype={connect:function connect(){this.messagesQueue=[];this._closeCurrentConnection();this.urlWithBacktrack=getSubscriberUrl(this.pushstream,this.pushstream.urlPrefixLongpolling,{},true);this.urlWithoutBacktrack=getSubscriberUrl(this.pushstream,this.pushstream.urlPrefixLongpolling,{},false);this.xhrSettings.url=this.urlWithBacktrack;this.useJSONP=this.pushstream._crossDomain||this.pushstream.useJSONP;this.xhrSettings.scriptId='PushStreamManager_'+this.pushstream.id;if(this.useJSONP){this.pushstream.messagesControlByArgument=true;}this._listen();this.opentimer=window.setTimeout(linker(onopenCallback,this),150);Log4js.info('[LongPolling] connecting to:',this.xhrSettings.url);},_listen:function _listen(){if(this._internalListenTimeout){clearTimer(this._internalListenTimeout);}this._internalListenTimeout=window.setTimeout(this._linkedInternalListen,100);},_internalListen:function _internalListen(){if(this.pushstream._keepConnected){this.xhrSettings.url=this.pushstream._useControlArguments()?this.urlWithoutBacktrack:this.urlWithBacktrack;this.xhrSettings.data=extend({},this.pushstream.extraParams(),this.xhrSettings.data,getControlParams(this.pushstream));if(this.useJSONP){this.connection=Ajax.jsonp(this.xhrSettings);}else if(!this.connection){this.connection=Ajax.load(this.xhrSettings);}}},disconnect:function disconnect(){if(this.connection){Log4js.debug('[LongPolling] closing connection to:',this.xhrSettings.url);this._closeCurrentConnection();this.pushstream._onclose();}},_closeCurrentConnection:function _closeCurrentConnection(){this.opentimer=clearTimer(this.opentimer);if(this.connection){try{this.connection.abort();}catch(e){try{Ajax.clear(this.connection);}catch(e1){/* ignore error on closing */}}this.connection=null;this.xhrSettings.url=null;}},beforeSend:function beforeSend(xhr){if(!this.pushstream.messagesControlByArgument){xhr.setRequestHeader('If-None-Match',this.pushstream._etag);xhr.setRequestHeader('If-Modified-Since',this.pushstream._lastModified);}},afterReceive:function afterReceive(xhr){if(!this.pushstream.messagesControlByArgument){this.pushstream._etag=xhr.getResponseHeader('Etag');this.pushstream._lastModified=xhr.getResponseHeader('Last-Modified');}this.connection=null;},onerror:function onerror(status){this._closeCurrentConnection();if(this.pushstream._keepConnected){/* abort(), called by disconnect(), call this callback, but should be ignored */if(status===304){this._listen();}else{Log4js.info('[LongPolling] error (disconnected by server):',status);this.pushstream._onerror({type:status===403||this.pushstream.readyState===PushStream.CONNECTING?'load':'timeout'});}}},onload:function onload(){this._listen();},onmessage:function onmessage(responseText){if(this._internalListenTimeout){clearTimer(this._internalListenTimeout);}Log4js.info('[LongPolling] message received',responseText);var lastMessage=null;var messages=isArray(responseText)?responseText:responseText.replace(/\}\{/g,'}\r\n{').split('\r\n');for(var i=0;i<messages.length;i++){if(messages[i]){lastMessage=Utils.parseMessage(messages[i],this.pushstream);this.messagesQueue.push(lastMessage);if(this.pushstream.messagesControlByArgument&&lastMessage.time){this.pushstream._etag=lastMessage.tag;this.pushstream._lastModified=lastMessage.time;}}}this._listen();while(this.messagesQueue.length>0){var message=this.messagesQueue.shift();this.pushstream._onmessage(message.text,message.id,message.channel,message.eventid,this.messagesQueue.length===0,message.time);}}};/* mains class */var PushStreamManager=[];var PushStream=function PushStream(settings){settings=settings||{};this.id=PushStreamManager.push(this)-1;this.useSSL=settings.useSSL||false;this.host=settings.host||window.location.hostname;this.port=Number(settings.port||(this.useSSL?443:80));this.timeout=settings.timeout||30000;this.pingtimeout=settings.pingtimeout||30000;this.reconnectOnTimeoutInterval=settings.reconnectOnTimeoutInterval||3000;this.reconnectOnChannelUnavailableInterval=settings.reconnectOnChannelUnavailableInterval||60000;this.autoReconnect=settings.autoReconnect!==false;this.lastEventId=settings.lastEventId||null;this.messagesPublishedAfter=settings.messagesPublishedAfter;this.messagesControlByArgument=settings.messagesControlByArgument||false;this.tagArgument=settings.tagArgument||'tag';this.timeArgument=settings.timeArgument||'time';this.eventIdArgument=settings.eventIdArgument||'eventid';this.useJSONP=settings.useJSONP||false;this._reconnecttimer=null;this._etag=0;this._lastModified=null;this._lastEventId=null;this.urlPrefixPublisher=settings.urlPrefixPublisher||'/pub';this.urlPrefixStream=settings.urlPrefixStream||'/sub';this.urlPrefixEventsource=settings.urlPrefixEventsource||'/ev';this.urlPrefixLongpolling=settings.urlPrefixLongpolling||'/lp';this.urlPrefixWebsocket=settings.urlPrefixWebsocket||'/ws';this.jsonIdKey=settings.jsonIdKey||'id';this.jsonChannelKey=settings.jsonChannelKey||'channel';this.jsonTextKey=settings.jsonTextKey||'text';this.jsonTagKey=settings.jsonTagKey||'tag';this.jsonTimeKey=settings.jsonTimeKey||'time';this.jsonEventIdKey=settings.jsonEventIdKey||'eventid';this.modes=(settings.modes||'eventsource|websocket|stream|longpolling').split('|');this.wrappers=[];this.wrapper=null;this.onchanneldeleted=settings.onchanneldeleted||null;this.onmessage=settings.onmessage||null;this.onerror=settings.onerror||null;this.onstatuschange=settings.onstatuschange||null;this.extraParams=settings.extraParams||function(){return{};};this.channels={};this.channelsCount=0;this.channelsByArgument=settings.channelsByArgument||false;this.channelsArgument=settings.channelsArgument||'channels';this._crossDomain=Utils.isCrossDomainUrl(getPublisherUrl(this));for(var i=0;i<this.modes.length;i++){try{var wrapper=null;switch(this.modes[i]){case'websocket':wrapper=new WebSocketWrapper(this);break;case'eventsource':wrapper=new EventSourceWrapper(this);break;case'longpolling':wrapper=new LongPollingWrapper(this);break;case'stream':wrapper=new StreamWrapper(this);break;}this.wrappers[this.wrappers.length]=wrapper;}catch(e){Log4js.info(e);}}this.readyState=0;};/* constants */PushStream.LOG_LEVEL='error';/* debug, info, error */PushStream.LOG_OUTPUT_ELEMENT_ID='Log4jsLogOutput';/* status codes */PushStream.CLOSED=0;PushStream.CONNECTING=1;PushStream.OPEN=2;/* main code */PushStream.prototype={addChannel:function addChannel(channel,options){if(escapeText(channel)!==channel){throw'Invalid channel name! Channel has to be a set of [a-zA-Z0-9]';}Log4js.debug('entering addChannel');if(typeof this.channels[channel]!=='undefined'){throw'Cannot add channel '+channel+': already subscribed';}options=options||{};Log4js.info('adding channel',channel,options);this.channels[channel]=options;this.channelsCount++;if(this.readyState!==PushStream.CLOSED){this.connect();}Log4js.debug('leaving addChannel');},removeChannel:function removeChannel(channel){if(this.channels[channel]){Log4js.info('removing channel',channel);delete this.channels[channel];this.channelsCount--;}},removeAllChannels:function removeAllChannels(){Log4js.info('removing all channels');this.channels={};this.channelsCount=0;},_setState:function _setState(state){if(this.readyState!==state){Log4js.info('status changed',state);this.readyState=state;if(this.onstatuschange){this.onstatuschange(this.readyState);}}},connect:function connect(){Log4js.debug('entering connect');if(!this.host){throw'PushStream host not specified';}if(isNaN(this.port)){throw'PushStream port not specified';}if(!this.channelsCount){throw'No channels specified';}if(this.wrappers.length===0){throw'No available support for this browser';}this._keepConnected=true;this._lastUsedMode=0;this._connect();Log4js.debug('leaving connect');},disconnect:function disconnect(){Log4js.debug('entering disconnect');this._keepConnected=false;this._disconnect();this._setState(PushStream.CLOSED);Log4js.info('disconnected');Log4js.debug('leaving disconnect');},_useControlArguments:function _useControlArguments(){return this.messagesControlByArgument&&(this._lastModified!==null||this._lastEventId!==null);},_connect:function _connect(){if(this._lastEventId===null){this._lastEventId=this.lastEventId;}if(this._lastModified===null){var date=this.messagesPublishedAfter;if(!isDate(date)){var messagesPublishedAfter=Number(this.messagesPublishedAfter);if(messagesPublishedAfter>0){date=new Date();date.setTime(date.getTime()-messagesPublishedAfter*1000);}else if(messagesPublishedAfter<0){date=new Date(0);}}if(isDate(date)){this._lastModified=Utils.dateToUTCString(date);}}this._disconnect();this._setState(PushStream.CONNECTING);this.wrapper=this.wrappers[this._lastUsedMode++%this.wrappers.length];try{this.wrapper.connect();}catch(e){// each wrapper has a cleanup routine at disconnect method
if(this.wrapper){this.wrapper.disconnect();}}},_disconnect:function _disconnect(){this._reconnecttimer=clearTimer(this._reconnecttimer);if(this.wrapper){this.wrapper.disconnect();}},_onopen:function _onopen(){this._reconnecttimer=clearTimer(this._reconnecttimer);this._setState(PushStream.OPEN);if(this._lastUsedMode>0){this._lastUsedMode--;// use same mode on next connection
}},_onclose:function _onclose(){this._reconnecttimer=clearTimer(this._reconnecttimer);this._setState(PushStream.CLOSED);this._reconnect(this.reconnectOnTimeoutInterval);},_onmessage:function _onmessage(text,id,channel,eventid,isLastMessageFromBatch,time){Log4js.debug('message',text,id,channel,eventid,isLastMessageFromBatch,time);if(id===-2){if(this.onchanneldeleted){this.onchanneldeleted(channel);}}else if(id>0){if(this.onmessage){this.onmessage(text,id,channel,eventid,isLastMessageFromBatch,time);}}},_onerror:function _onerror(error){this._setState(PushStream.CLOSED);this._reconnect(error.type==='timeout'?this.reconnectOnTimeoutInterval:this.reconnectOnChannelUnavailableInterval);if(this.onerror){this.onerror(error);}},_reconnect:function _reconnect(timeout){if(this.autoReconnect&&this._keepConnected&&!this._reconnecttimer&&this.readyState!==PushStream.CONNECTING){Log4js.info('trying to reconnect in',timeout);this._reconnecttimer=window.setTimeout(linker(this._connect,this),timeout);}},sendMessage:function sendMessage(message,successCallback,errorCallback){message=escapeText(message);if(this.wrapper.type===WebSocketWrapper.TYPE){this.wrapper.sendMessage(message);if(successCallback){successCallback();}}else{Ajax.post({url:getPublisherUrl(this),data:message,success:successCallback,error:errorCallback,crossDomain:this._crossDomain});}}};PushStream.sendMessage=function(url,message,successCallback,errorCallback){Ajax.post({url:url,data:escapeText(message),success:successCallback,error:errorCallback});};// to make server header template more clear, it calls register and
// by a url parameter we find the stream wrapper instance
PushStream.register=function(iframe){var matcher=iframe.window.location.href.match(/streamid=([0-9]*)&?/);if(matcher[1]&&PushStreamManager[matcher[1]]){PushStreamManager[matcher[1]].wrapper.register(iframe);}};PushStream.unload=function(){for(var i=0;i<PushStreamManager.length;i++){try{PushStreamManager[i].disconnect();}catch(e){}}};/* make class public */window.PushStream=PushStream;window.PushStreamManager=PushStreamManager;if(window.attachEvent){window.attachEvent('onunload',PushStream.unload);}if(window.addEventListener){window.addEventListener.call(window,'unload',PushStream.unload,false);}})(window,document);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.clearSession=exports.removeSession=exports.getSession=exports.setSession=undefined;var _extends2=__webpack_require__(17);var _extends3=_interopRequireDefault(_extends2);var _config=__webpack_require__(11);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var session={/**
     * 设置缓存
     */setSession:function setSession(key,value,opt){var _config$opt=(0,_extends3.default)({},_config.config,opt),affix=_config$opt.affix;sessionStorage.setItem(''+key+affix,value);},/**
     * 获取缓存
     */getSession:function getSession(key,opt){var _config$opt2=(0,_extends3.default)({},_config.config,opt),affix=_config$opt2.affix;return sessionStorage.getItem(''+key+affix);},/**
     * 移除缓存
     */removeSession:function removeSession(key,opt){var _config$opt3=(0,_extends3.default)({},_config.config,opt),affix=_config$opt3.affix;sessionStorage.removeItem(''+key+affix);},/**
     * 清空所有缓存
     */clearSession:function clearSession(){sessionStorage.clear();}};/**
 * Created by otherlite on 2016/5/27.
 *
 */var setSession=exports.setSession=session.setSession;var getSession=exports.getSession=session.getSession;var removeSession=exports.removeSession=session.removeSession;var clearSession=exports.clearSession=session.clearSession;exports.default=session;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(61), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(41);
module.exports = __webpack_require__(84);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(2)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
module.exports = __webpack_require__(2).Object.assign;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
__webpack_require__(87);
__webpack_require__(89);
__webpack_require__(90);
module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(42);
module.exports = __webpack_require__(31).f('iterator');

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(4)
  , toLength  = __webpack_require__(82)
  , toIndex   = __webpack_require__(81);
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
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19)
  , TAG = __webpack_require__(1)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(63);
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

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(10)
  , gOPS    = __webpack_require__(24)
  , pIE     = __webpack_require__(14);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).document && document.documentElement;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(19);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(36)
  , descriptor     = __webpack_require__(15)
  , setToStringTag = __webpack_require__(25)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(10)
  , toIObject = __webpack_require__(4);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(16)('meta')
  , isObject = __webpack_require__(12)
  , has      = __webpack_require__(3)
  , setDesc  = __webpack_require__(7).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(9)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(10)
  , gOPS     = __webpack_require__(24)
  , pIE      = __webpack_require__(14)
  , toObject = __webpack_require__(40)
  , IObject  = __webpack_require__(34)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function(){
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

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(7)
  , anObject = __webpack_require__(8)
  , getKeys  = __webpack_require__(10);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(14)
  , createDesc     = __webpack_require__(15)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(29)
  , has            = __webpack_require__(3)
  , IE8_DOM_DEFINE = __webpack_require__(33)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(4)
  , gOPN      = __webpack_require__(37).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(3)
  , toObject    = __webpack_require__(40)
  , IE_PROTO    = __webpack_require__(26)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , defined   = __webpack_require__(20);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(66)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(13);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8)
  , get      = __webpack_require__(83);
module.exports = __webpack_require__(2).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(64)
  , step             = __webpack_require__(72)
  , Iterators        = __webpack_require__(13)
  , toIObject        = __webpack_require__(4);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(35)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(22);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(75)});

/***/ }),
/* 87 */
/***/ (function(module, exports) {



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(0)
  , has            = __webpack_require__(3)
  , DESCRIPTORS    = __webpack_require__(5)
  , $export        = __webpack_require__(22)
  , redefine       = __webpack_require__(39)
  , META           = __webpack_require__(74).KEY
  , $fails         = __webpack_require__(9)
  , shared         = __webpack_require__(27)
  , setToStringTag = __webpack_require__(25)
  , uid            = __webpack_require__(16)
  , wks            = __webpack_require__(1)
  , wksExt         = __webpack_require__(31)
  , wksDefine      = __webpack_require__(30)
  , keyOf          = __webpack_require__(73)
  , enumKeys       = __webpack_require__(68)
  , isArray        = __webpack_require__(70)
  , anObject       = __webpack_require__(8)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(29)
  , createDesc     = __webpack_require__(15)
  , _create        = __webpack_require__(36)
  , gOPNExt        = __webpack_require__(78)
  , $GOPD          = __webpack_require__(77)
  , $DP            = __webpack_require__(7)
  , $keys          = __webpack_require__(10)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(37).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(14).f  = $propertyIsEnumerable;
  __webpack_require__(24).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(23)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('asyncIterator');

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('observable');

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ })
/******/ ]);
});