/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $accordion = $(".js-accordion");
  if (!$accordion.length) return;
  initAccordion();
  $accordion.on("click", ".accordion__head", function (e) {
    var target = $(e.currentTarget);
    var type = target.closest(".js-accordion").data("type");
    var parent = target.parent();
    var body = target.next();

    if (type === "toggle") {
      parent.toggleClass("accordion__item-show");
      parent.hasClass("accordion__item_show") ? body.css("max-height", body[0].scrollHeight) : body.css("max-height", 0);
    } else {
      parent.addClass("accordion__item_show").siblings().removeClass("accordion__item_show");
      body.css("max-height", body[0].scrollHeight).parent().siblings().find(".accordion__body").css("max-height", 0);
    }
  });

  function initAccordion() {
    $accordion.each(function (_, wrap) {
      var that = $(wrap);
      var activeItem = +that.data("active-item") || 0;
      that.find(".accordion__item").eq(activeItem).addClass("accordion__item_show");
      var body = that.find(".accordion__body").eq(activeItem);
      body.css("max-height", body[0].scrollHeight);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/brands/brands.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/brands/brands.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $brandsSlider = $(".js-brands-slider");
  var $window = $(window);
  var isConnectedSlick = false;
  var params = {
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 450,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 350,
      settings: {
        slidesToShow: 2
      }
    }]
  };
  if (!$brandsSlider.length) return;
  sliderMountEndUnmount();
  $window.on("resize", sliderMountEndUnmount);

  function sliderMountEndUnmount() {
    var isMobile = window.matchMedia("(max-width: 900px)").matches;

    if (isMobile && !isConnectedSlick) {
      $brandsSlider.slick(params);
      isConnectedSlick = true;
    } else if (!isMobile && isConnectedSlick) {
      $brandsSlider.slick("unslick");
      isConnectedSlick = false;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var regex = '\\+7 \\([0-6,9]{1}[0-9]{2}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}';
  $(".js-input-phone").inputmask({
    regex: regex
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./src/blocks/modules/product/timer.js");

$(function () {
  var $color = $('.js-product-color');

  if ($color.length > 0) {
    var getData = function getData(that) {
      var _that$parent$0$datase = that.parent()[0].dataset,
          model = _that$parent$0$datase.model,
          format = _that$parent$0$datase.format;
      var color = that[0].dataset.color;
      return {
        model: model,
        format: format,
        color: color
      };
    };

    var imageConverter = function imageConverter(that, model) {
      var image = that.parents('.product').find(".js-images[data-model=\"".concat(model, "\"] img"));
      var getImgPath = image.attr("src");
      var currentPath = getImgPath.substring(0, getImgPath.lastIndexOf("/") + 1);
      return function (newPath) {
        return image.attr("src", "".concat(currentPath).concat(newPath));
      };
    };

    $color.on("click", "li[data-color]", function (e) {
      var that = $(e.currentTarget);

      var _getData = getData(that),
          model = _getData.model,
          format = _getData.format,
          color = _getData.color;

      var renderImage = imageConverter(that, model);
      that.addClass("active").siblings().removeClass("active");
      renderImage("".concat(color, ".").concat(format));
    });
  }
});
var $timer = $(".js-timer");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/product/timer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/product/timer.js ***!
  \*********************************************/
/*! exports provided: MyTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTimer", function() { return MyTimer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MyTimer = /*#__PURE__*/function () {
  function MyTimer($timer, startTime) {
    _classCallCheck(this, MyTimer);

    this.$timer = $timer;
    this.startTime = startTime;
    this.mothNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.updateTimer = this.updateTimer.bind(this);
  }

  _createClass(MyTimer, [{
    key: "mount",
    value: function mount() {
      var _this = this;

      this.timerInterval = setInterval(function () {
        return _this.updateTimer();
      }, 1000);
    }
  }, {
    key: "addZero",
    value: function addZero(count) {
      return count < 10 ? "0" + count : count;
    }
  }, {
    key: "stopTimer",
    value: function stopTimer(days, time) {
      return days < 0 ? "00" : time;
    }
  }, {
    key: "tomorrowDate",
    value: function tomorrowDate(now) {
      var month = this.mothNames[now.getMonth()];
      var date = now.getDate() + 1;
      var year = now.getFullYear();
      var tomorrowDay = new Date("".concat(month, " ").concat(date, ", ").concat(year));
      return tomorrowDay;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(obj) {
      return !obj || Object.keys(obj).length === 0;
    }
  }, {
    key: "updateTimer",
    value: function updateTimer() {
      var now = new Date();
      var tomorrow = this.tomorrowDate(now);
      var stater = this.isEmpty(this.startTime) ? tomorrow : " ".concat(this.mothNames[this.startTime.month - 1], " ").concat(this.startTime.date, ", ").concat(now.getFullYear());
      var future = Date.parse(stater);
      var diff = future - now;
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor(diff / (1000 * 60 * 60));
      var mins = Math.floor(diff / (1000 * 60));
      var secs = Math.floor(diff / 1000);
      var timer = {
        d: this.stopTimer(days, this.addZero(days)),
        h: this.stopTimer(days, this.addZero(hours - days * 24)),
        m: this.stopTimer(days, this.addZero(mins - hours * 60)),
        s: this.stopTimer(days, this.addZero(secs - mins * 60))
      };
      this.$timer.innerHTML = this.template(timer);

      if (days < 0) {
        clearInterval(this.timerInterval);
      }
    }
  }, {
    key: "template",
    value: function template(_ref) {
      var d = _ref.d,
          h = _ref.h,
          m = _ref.m,
          s = _ref.s;
      return "\n            <div class=\"timer-wrap\">\n                <div class=\"timer-item\">\n                    <div class=\"timer-num\">".concat(d, "</div>\n                    <div class=\"timer-text\">\u0434\u043D\u0435\u0439</div>\n                </div>\n                <div class=\"timer-item\">\n                    <div class=\"timer-num\">").concat(h, "</div>\n                    <div class=\"timer-text\">\u0447\u0430\u0441\u043E\u0432</div>\n                </div>\n                <div class=\"timer-item\">\n                    <div class=\"timer-num\">").concat(m, "</div>\n                    <div class=\"timer-text\">\u043C\u0438\u043D\u0443\u0442</div>\n                </div>\n                <div class=\"timer-item\">\n                    <div class=\"timer-num\">").concat(s, "</div>\n                    <div class=\"timer-text\">\u0441\u0435\u043A\u0443\u043D\u0434</div>\n                </div>\n            </div>\n        ");
    }
  }]);

  return MyTimer;
}();

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_product_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/product/timer */ "./src/blocks/modules/product/timer.js");
/* harmony import */ var _modules_brands_brands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/brands/brands */ "./src/blocks/modules/brands/brands.js");
/* harmony import */ var _modules_brands_brands__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_brands_brands__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_5__);
 // import "%modules%/footer/footer";







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map