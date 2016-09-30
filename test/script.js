(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),u=n(4),a=r(u),s=n(3),c=r(s),f=n(45),l=r(f),d=n(5),p=r(d),v=n(6),h=r(v),m=n(46),y=r(m);t.exports={manager:i["default"],rules:{Rule:a["default"],Field:c["default"],Radio:l["default"]},validators:{isEmpty:p["default"],isNotEmpty:h["default"],isEmail:y["default"]}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e["default"]=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new f(t,e)};var u=n(3),a=r(u);n(7);var s=n(44),c=function(){function t(e){o(this,t)}return i(t,[{key:"hide",value:function(){}},{key:"show",value:function(t){console.log(t)}}]),t}(),f=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];o(this,t),this.form=e,this.rules=[],this.options=Object.assign({},n),this.messenger=new c,this.form.addEventListener("submit",this.check.bind(this))}return i(t,[{key:"add",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=!1;e.fieldContainer?n=e.fieldContainer:(n=this.form.querySelector("[name="+t+"]"),n=n?n.parentNode:!1);var r=!1;return e.errorContainer?r=e.errorContainer:(r=n.querySelector(".error-container"),r=r?r:!1),e=Object.assign({},{type:a["default"],fieldContainer:n,errorContainer:r,errorMessage:"Merci de remplir ce champ."},e),this.rules.push(e.type(e).set(t,this.form)),this}},{key:"check",value:function(t){this.messenger.hide();for(var e=!0,n=0,r=this.rules.length;r>n;n++){var o=this.rules[n],i=o.validate();i?(o.messenger&&o.messenger.hide(),o.fieldContainer&&s.removeClass(o.fieldContainer,"error")):(o.messenger?o.messenger.show(o.name):this.messenger.show(o.name),o.fieldContainer&&s.addClass(o.fieldContainer,"error")),e=i&&e}e?this.messenger.hide():t.preventDefault()}}]),t}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=(0,u["default"])({required:!0,modificator:function(t){return t.trim()},validator:f["default"],set:function(t,e){return this.name=t,this.form=e,this.element=e.querySelector("[name="+t+"]"),this},validate:function(){var t=this.element.value;return t&&(t=this.modificator(t),this.element.value=t),!this.required&&(0,s["default"])(t)||this.validator(t)}});return Object.assign(e,t)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),u=r(i),a=n(5),s=r(a),c=n(6),f=r(c);e["default"]=o},function(t,e){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e={required:!1,set:function(t,e){return this.name=t,this.form=e,this},validate:function(){return!this.required}};return Object.assign(e,t)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e){"use strict";function n(t){return void 0===t||null===t||t===!1||""===t||0===t||"0"===t}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){return!(0,u["default"])(t)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),u=r(i);e["default"]=o},function(t,e,n){n(8),t.exports=n(11).Object.assign},function(t,e,n){var r=n(9);r(r.S+r.F,"Object",{assign:n(27)})},function(t,e,n){var r=n(10),o=n(11),i=n(12),u=n(22),a=n(25),s="prototype",c=function(t,e,n){var f,l,d,p,v=t&c.F,h=t&c.G,m=t&c.S,y=t&c.P,g=t&c.B,b=h?r:m?r[e]||(r[e]={}):(r[e]||{})[s],x=h?o:o[e]||(o[e]={}),_=x[s]||(x[s]={});h&&(n=e);for(f in n)l=!v&&b&&void 0!==b[f],d=(l?b:n)[f],p=g&&l?a(d,r):y&&"function"==typeof d?a(Function.call,d):d,b&&u(b,f,d,t&c.U),x[f]!=d&&i(x,f,p),y&&_[f]!=d&&(_[f]=d)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.2.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(13),o=n(21);t.exports=n(17)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(14),o=n(16),i=n(20),u=Object.defineProperty;e.f=n(17)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(15);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(15),o=n(10).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(15);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(10),o=n(12),i=n(23),u=n(24)("src"),a="toString",s=Function[a],c=(""+s).split(a);n(11).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,a){var s="function"==typeof n;s&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(s&&(i(n,u)||o(n,u,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,a,function(){return"function"==typeof this&&this[u]||s.call(this)})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(26);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(28),o=n(41),i=n(42),u=n(43),a=n(31),s=Object.assign;t.exports=!s||n(18)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=u(t),s=arguments.length,c=1,f=o.f,l=i.f;s>c;)for(var d,p=a(arguments[c++]),v=f?r(p).concat(f(p)):r(p),h=v.length,m=0;h>m;)l.call(p,d=v[m++])&&(n[d]=p[d]);return n}:s},function(t,e,n){var r=n(29),o=n(40);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(23),o=n(30),i=n(34)(!1),u=n(38)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),s=0,c=[];for(n in a)n!=u&&r(a,n)&&c.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var r=n(31),o=n(33);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(30),o=n(35),i=n(37);t.exports=function(t){return function(e,n,u){var a,s=r(e),c=o(s.length),f=i(u,c);if(t&&n!=n){for(;c>f;)if(a=s[f++],a!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f;return!t&&-1}}},function(t,e,n){var r=n(36),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(36),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),0>t?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(39)("keys"),o=n(24);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(10),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(33);t.exports=function(t){return Object(r(t))}},function(t,e){var n={hasClass:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},addClass:function(t,e){n.hasClass(t,e)||(t.classList?t.classList.add(e):t.className+=" "+e)},removeClass:function(t,e){n.hasClass(t,e)&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}};t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=(0,u["default"])({set:function(t,e){return this.name=t,this.form=e,this},validate:function(){var t=this.form.querySelector("[name="+this.name+"]:checked"),e=t?t.value:null;return(0,s["default"])(e)}});return Object.assign(e,t)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),u=r(i),a=n(6),s=r(a);e["default"]=o},function(t,e){"use strict";function n(t){var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n}]);
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
			fieldContainer: document.querySelector( '.form-1 .civility' )
		} )
		.add( 'firstname', {
			modificator: function ( str ) {
				return str.trim().toLocaleUpperCase().substr( 0, 1 ) + str.trim().toLocaleLowerCase().substr( 1 );
			}
		} )
		.add( 'lastname', {
			modificator: function ( str ) {
				return str.trim().toLocaleUpperCase();
			}
		} )
		.add( 'email', {
			modificator: function ( str ) {
				return str.trim().toLocaleLowerCase();
			},
			validator:   validators.isEmail
		} )
		.add( 'mobile', { required: false } )
		.add( 'phone', { required: false } )
		.add( 'one-phone', {
			type:     rules.Rule,
			validate: function () {
				let v = (!!this.form.querySelector( '[name=mobile]' ).value || !!this.form.querySelector( '[name=phone]' ).value);
				return v;
			}
		} )
		.add( 'country' );
} );

},{"../dist/mf-js-form":1,"mf-js/modules/dom/ready":2}]},{},[3]);
