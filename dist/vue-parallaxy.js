(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueParallaxy"] = factory();
	else
		root["VueParallaxy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';

	var _Parallax = __webpack_require__(1);

	var _Parallax2 = _interopRequireDefault(_Parallax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _Parallax2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(2)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/jjuszczak/Projekte/Privat/vue-parallax/src/components/Parallax.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2cfd1a30", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2cfd1a30", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Parallax.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2cfd1a30!./../../node_modules/sass-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Parallax.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2cfd1a30!./../../node_modules/sass-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Parallax.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.Masthead {\n  position: relative;\n  min-height: 21.875rem;\n  scroll-behavior: smooth;\n  overflow: hidden;\n  z-index: -1;\n}\n@media screen and (min-width: 768px) {\n.Masthead {\n      min-height: 100vh;\n}\n}\n.Masthead__image {\n    width: 100%;\n    overflow: hidden;\n    height: 120%;\n}\n.Masthead__image > img {\n      height: 100%;\n      max-width: none;\n      width: 100%;\n      -o-object-fit: cover;\n      object-fit: cover;\n      -o-object-position: bottom;\n      object-position: bottom;\n      font-family: \"object-fit: cover; object-position: bottom\";\n}\n.Masthead__image.is-parallax {\n      left: 0;\n      position: absolute;\n      will-change: transform;\n      right: 0;\n      top: 0;\n}\n.Masthead__image.is-parallax > img {\n        height: 100%;\n        max-width: none;\n        width: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n        -o-object-position: bottom;\n        object-position: bottom;\n        font-family: \"object-fit: cover; object-position: bottom\";\n}\n.Masthead__image.is-fixed {\n      position: fixed;\n}\n.Masthead__image.is-fixed > img {\n        height: 100vh;\n        max-width: none;\n}\n", "", {"version":3,"sources":["/./src/components/Parallax.vue"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;EACxB,iBAAiB;EACjB,YAAY;CACb;AACD;AACA;MACM,kBAAkB;CACvB;CACA;AACD;IACI,YAAY;IACZ,iBAAiB;IACjB,aAAa;CAChB;AACD;MACM,aAAa;MACb,gBAAgB;MAChB,YAAY;MACZ,qBAAqB;MACrB,kBAAkB;MAClB,2BAA2B;MAC3B,wBAAwB;MACxB,0DAA0D;CAC/D;AACD;MACM,QAAQ;MACR,mBAAmB;MACnB,uBAAuB;MACvB,SAAS;MACT,OAAO;CACZ;AACD;QACQ,aAAa;QACb,gBAAgB;QAChB,YAAY;QACZ,qBAAqB;QACrB,kBAAkB;QAClB,2BAA2B;QAC3B,wBAAwB;QACxB,0DAA0D;CACjE;AACD;MACM,gBAAgB;CACrB;AACD;QACQ,cAAc;QACd,gBAAgB;CACvB","file":"Parallax.vue","sourcesContent":["\n.Masthead {\n  position: relative;\n  min-height: 21.875rem;\n  scroll-behavior: smooth;\n  overflow: hidden;\n  z-index: -1;\n}\n@media screen and (min-width: 768px) {\n.Masthead {\n      min-height: 100vh;\n}\n}\n.Masthead__image {\n    width: 100%;\n    overflow: hidden;\n    height: 120%;\n}\n.Masthead__image > img {\n      height: 100%;\n      max-width: none;\n      width: 100%;\n      -o-object-fit: cover;\n      object-fit: cover;\n      -o-object-position: bottom;\n      object-position: bottom;\n      font-family: \"object-fit: cover; object-position: bottom\";\n}\n.Masthead__image.is-parallax {\n      left: 0;\n      position: absolute;\n      will-change: transform;\n      right: 0;\n      top: 0;\n}\n.Masthead__image.is-parallax > img {\n        height: 100%;\n        max-width: none;\n        width: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n        -o-object-position: bottom;\n        object-position: bottom;\n        font-family: \"object-fit: cover; object-position: bottom\";\n}\n.Masthead__image.is-fixed {\n      position: fixed;\n}\n.Masthead__image.is-fixed > img {\n        height: 100vh;\n        max-width: none;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    parallax: {
	      default: true,
	      type: Boolean
	    },
	    speedFactor: {
	      default: 0.15,
	      type: Number
	    },
	    fixed: {
	      default: false,
	      type: Boolean
	    },
	    breakpoint: {
	      default: '(min-width: 968px)',
	      type: String
	    },
	    sectionHeight: {
	      default: 70,
	      type: Number,
	      required: false
	    },
	    sectionClass: {
	      type: String,
	      default: 'Masthead'
	    },
	    containerClass: {
	      type: String,
	      default: 'Masthead__image'
	    },
	    parallaxClass: {
	      type: String,
	      default: 'is-parallax'
	    },
	    fixedClass: {
	      type: String,
	      default: 'is-fixed'
	    }
	  },

	  data: function data() {
	    return {
	      el: null,
	      mediaQuery: null
	    };
	  },
	  mounted: function mounted() {
	    if (this.parallax && !this.fixed) {
	      this.el = this.$refs.parallax;
	      window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
	        setTimeout(f, 1000 / 60);
	      };
	      this.init();
	    }
	  },


	  methods: {
	    animateElement: function animateElement() {
	      var parentHeight = this.$refs.block.offsetHeight;
	      var parallaxHeight = this.$refs.parallax.offsetHeight;
	      var availableOffset = parallaxHeight - parentHeight;
	      var animationValue = window.pageYOffset * this.speedFactor;

	      if (animationValue <= availableOffset && animationValue >= 0) {
	        this.el.style.transform = 'translate3d(0, ' + animationValue * -1 + 'px ,0)';
	      }
	    },
	    scrollHandler: function scrollHandler() {
	      var _this = this;

	      window.requestAnimationFrame(function () {
	        if (_this.isInView(_this.$refs.parallax)) {
	          _this.animateElement();
	        }
	      });
	    },
	    isInView: function isInView(el) {
	      var rect = el.getBoundingClientRect();

	      return rect.bottom >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
	    },
	    setupListener: function setupListener() {
	      if (this.mediaQuery.matches) {
	        window.addEventListener('scroll', this.scrollHandler, false);
	      } else {
	        window.removeEventListener('scroll', this.scrollHandler, false);
	      }
	    },
	    init: function init() {
	      this.mediaQuery = window.matchMedia(this.breakpoint);

	      if (this.mediaQuery) {
	        this.mediaQuery.addListener(this.setupListener);
	        this.setupListener();
	      }
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('section', {
	    ref: "block",
	    class: [_vm.sectionClass],
	    style: ({
	      height: _vm.sectionHeight + 'vh'
	    })
	  }, [_c('div', {
	    ref: "parallax",
	    class: [_vm.parallax ? _vm.parallaxClass : '', _vm.fixed ? _vm.fixedClass : '', _vm.containerClass]
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2cfd1a30", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;