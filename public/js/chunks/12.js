(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-clock/dist/Clock.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/react-clock/dist/Clock.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".react-clock {\n  display: block;\n  position: relative;\n}\n.react-clock,\n.react-clock *,\n.react-clock *:before,\n.react-clock *:after {\n  box-sizing: border-box;\n}\n.react-clock__face {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 1px solid black;\n  border-radius: 50%;\n}\n.react-clock__hand {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 50%;\n}\n.react-clock__hand__body {\n  position: absolute;\n  background-color: black;\n  transform: translateX(-50%);\n}\n.react-clock__mark {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  right: 50%;\n}\n.react-clock__mark__body {\n  position: absolute;\n  background-color: black;\n  transform: translateX(-50%);\n}\n.react-clock__mark__number {\n  position: absolute;\n  left: -40px;\n  width: 80px;\n  text-align: center;\n}\n.react-clock__second-hand__body {\n  background-color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-time-picker/dist/TimePicker.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/react-time-picker/dist/TimePicker.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".react-time-picker {\n  display: inline-flex;\n  position: relative;\n}\n.react-time-picker,\n.react-time-picker *,\n.react-time-picker *:before,\n.react-time-picker *:after {\n  box-sizing: border-box;\n}\n.react-time-picker--disabled {\n  background-color: #f0f0f0;\n  color: #6d6d6d;\n}\n.react-time-picker__wrapper {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  border: thin solid gray;\n}\n.react-time-picker__inputGroup {\n  min-width: calc((4px * 3) +  0.54em * 6  +  0.217em * 2);\n  flex-grow: 1;\n  padding: 0 2px;\n  box-sizing: content-box;\n}\n.react-time-picker__inputGroup__divider {\n  padding: 1px 0;\n  white-space: pre;\n}\n.react-time-picker__inputGroup__input {\n  min-width: 0.54em;\n  height: 100%;\n  position: relative;\n  padding: 0 1px;\n  border: 0;\n  background: none;\n  font: inherit;\n  box-sizing: content-box;\n  -moz-appearance: textfield;\n}\n.react-time-picker__inputGroup__input::-webkit-outer-spin-button,\n.react-time-picker__inputGroup__input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.react-time-picker__inputGroup__input:invalid {\n  background: rgba(255, 0, 0, 0.1);\n}\n.react-time-picker__inputGroup__input--hasLeadingZero {\n  margin-left: -0.54em;\n  padding-left: calc(1px +  0.54em);\n}\n.react-time-picker__inputGroup__amPm {\n  font: inherit;\n  -moz-appearance: menulist;\n}\n.react-time-picker__button {\n  border: 0;\n  background: transparent;\n  padding: 4px 6px;\n}\n.react-time-picker__button:enabled {\n  cursor: pointer;\n}\n.react-time-picker__button:enabled:hover .react-time-picker__button__icon,\n.react-time-picker__button:enabled:focus .react-time-picker__button__icon {\n  stroke: #0078d7;\n}\n.react-time-picker__button:disabled .react-time-picker__button__icon {\n  stroke: #6d6d6d;\n}\n.react-time-picker__button svg {\n  display: inherit;\n}\n.react-time-picker__clock {\n  width: 200px;\n  height: 200px;\n  max-width: 100vw;\n  padding: 25px;\n  background-color: white;\n  border: thin solid #a0a096;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1;\n}\n.react-time-picker__clock--closed {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/detect-element-overflow/dist/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/detect-element-overflow/dist/esm/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getRect = function getRect(element) {
  return element.getBoundingClientRect();
};

var detectElementOverflow = function detectElementOverflow(element, container) {
  return {
    get collidedTop() {
      return getRect(element).top < getRect(container).top;
    },

    get collidedBottom() {
      return getRect(element).bottom > getRect(container).bottom;
    },

    get collidedLeft() {
      return getRect(element).left < getRect(container).left;
    },

    get collidedRight() {
      return getRect(element).right > getRect(container).right;
    },

    get overflowTop() {
      return getRect(container).top - getRect(element).top;
    },

    get overflowBottom() {
      return getRect(element).bottom - getRect(container).bottom;
    },

    get overflowLeft() {
      return getRect(container).left - getRect(element).left;
    },

    get overflowRight() {
      return getRect(element).right - getRect(container).right;
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (detectElementOverflow);

/***/ }),

/***/ "./node_modules/make-event-props/dist/entry.js":
/*!*****************************************************!*\
  !*** ./node_modules/make-event-props/dist/entry.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.focusEvents = exports.keyboardEvents = exports.touchEvents = exports.mouseEvents = void 0;
// As defined on the list of supported mouse events: https://reactjs.org/docs/events.html#mouse-events
var mouseEvents = ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp']; // As defined on the list of supported touch events: https://reactjs.org/docs/events.html#touch-events

exports.mouseEvents = mouseEvents;
var touchEvents = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#keyboard-events

exports.touchEvents = touchEvents;
var keyboardEvents = ['onKeyDown', 'onKeyPress', 'onKeyUp']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#focus-events

exports.keyboardEvents = keyboardEvents;
var focusEvents = ['onFocus', 'onBlur'];
/**
 * Returns an object with on-event callback props curried with provided args.
 * @param {Object} props Props passed to a component.
 * @param {Function=} getArgs A function that returns argument(s) on-event callbacks
 *   shall be curried with.
 */

exports.focusEvents = focusEvents;

var makeEventProps = function makeEventProps(props, getArgs) {
  var eventProps = {};
  [].concat(mouseEvents, touchEvents, keyboardEvents, focusEvents).forEach(function (eventName) {
    if (props[eventName]) {
      eventProps[eventName] = function (event) {
        return getArgs ? props[eventName](event, getArgs(eventName)) : props[eventName](event);
      };
    }
  });
  return eventProps;
};

var _default = makeEventProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-clock/dist/Clock.css":
/*!*************************************************!*\
  !*** ./node_modules/react-clock/dist/Clock.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./Clock.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-clock/dist/Clock.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/react-clock/dist/Clock.js":
/*!************************************************!*\
  !*** ./node_modules/react-clock/dist/Clock.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Clock;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _Hand = _interopRequireDefault(__webpack_require__(/*! ./Hand */ "./node_modules/react-clock/dist/Hand.js"));

var _Mark = _interopRequireDefault(__webpack_require__(/*! ./Mark */ "./node_modules/react-clock/dist/Mark.js"));

var _dates = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-clock/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-clock/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Clock(_ref) {
  var className = _ref.className,
      hourHandLength = _ref.hourHandLength,
      hourHandOppositeLength = _ref.hourHandOppositeLength,
      hourHandWidth = _ref.hourHandWidth,
      hourMarksLength = _ref.hourMarksLength,
      hourMarksWidth = _ref.hourMarksWidth,
      minuteHandLength = _ref.minuteHandLength,
      minuteHandOppositeLength = _ref.minuteHandOppositeLength,
      minuteHandWidth = _ref.minuteHandWidth,
      minuteMarksLength = _ref.minuteMarksLength,
      minuteMarksWidth = _ref.minuteMarksWidth,
      renderHourMarks = _ref.renderHourMarks,
      renderMinuteHand = _ref.renderMinuteHand,
      renderMinuteMarks = _ref.renderMinuteMarks,
      renderNumbers = _ref.renderNumbers,
      renderSecondHand = _ref.renderSecondHand,
      secondHandLength = _ref.secondHandLength,
      secondHandOppositeLength = _ref.secondHandOppositeLength,
      secondHandWidth = _ref.secondHandWidth,
      size = _ref.size,
      value = _ref.value;

  function renderMinuteMarksFn() {
    if (!renderMinuteMarks) {
      return null;
    }

    var minuteMarks = [];

    for (var i = 1; i <= 60; i += 1) {
      var isHourMark = renderHourMarks && !(i % 5);

      if (!isHourMark) {
        minuteMarks.push(_react["default"].createElement(_Mark["default"], {
          key: "minute_".concat(i),
          angle: i * 6,
          length: minuteMarksLength,
          name: "minute",
          width: minuteMarksWidth
        }));
      }
    }

    return minuteMarks;
  }

  function renderHourMarksFn() {
    if (!renderHourMarks) {
      return null;
    }

    var hourMarks = [];

    for (var i = 1; i <= 12; i += 1) {
      hourMarks.push(_react["default"].createElement(_Mark["default"], {
        key: "hour_".concat(i),
        angle: i * 30,
        length: hourMarksLength,
        name: "hour",
        number: renderNumbers ? i : null,
        width: hourMarksWidth
      }));
    }

    return hourMarks;
  }

  function renderFace() {
    return _react["default"].createElement("div", {
      className: "react-clock__face"
    }, renderMinuteMarksFn(), renderHourMarksFn());
  }

  function renderHourHandFn() {
    var angle = value ? (0, _dates.getHours)(value) * 30 + (0, _dates.getMinutes)(value) / 2 + (0, _dates.getSeconds)(value) / 600 : 0;
    return _react["default"].createElement(_Hand["default"], {
      angle: angle,
      length: hourHandLength,
      name: "hour",
      oppositeLength: hourHandOppositeLength,
      width: hourHandWidth
    });
  }

  function renderMinuteHandFn() {
    if (!renderMinuteHand) {
      return null;
    }

    var angle = value ? (0, _dates.getHours)(value) * 360 + (0, _dates.getMinutes)(value) * 6 + (0, _dates.getSeconds)(value) / 10 : 0;
    return _react["default"].createElement(_Hand["default"], {
      angle: angle,
      length: minuteHandLength,
      name: "minute",
      oppositeLength: minuteHandOppositeLength,
      width: minuteHandWidth
    });
  }

  function renderSecondHandFn() {
    if (!renderSecondHand) {
      return null;
    }

    var angle = value ? (0, _dates.getMinutes)(value) * 360 + (0, _dates.getSeconds)(value) * 6 : 0;
    return _react["default"].createElement(_Hand["default"], {
      angle: angle,
      length: secondHandLength,
      name: "second",
      oppositeLength: secondHandOppositeLength,
      width: secondHandWidth
    });
  }

  return _react["default"].createElement("time", {
    className: (0, _mergeClassNames["default"])('react-clock', className),
    dateTime: value instanceof Date ? value.toISOString() : value,
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }, renderFace(), renderHourHandFn(), renderMinuteHandFn(), renderSecondHandFn());
}

Clock.defaultProps = {
  hourHandLength: 50,
  hourHandWidth: 4,
  hourMarksLength: 10,
  hourMarksWidth: 3,
  minuteHandLength: 70,
  minuteHandWidth: 2,
  minuteMarksLength: 6,
  minuteMarksWidth: 1,
  renderHourMarks: true,
  renderMinuteHand: true,
  renderMinuteMarks: true,
  renderSecondHand: true,
  secondHandLength: 90,
  secondHandWidth: 1,
  size: 150
};
Clock.propTypes = {
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  hourHandLength: _propTypes2.isHandLength,
  hourHandOppositeLength: _propTypes2.isOppositeHandLength,
  hourHandWidth: _propTypes2.isHandWidth,
  hourMarksLength: _propTypes2.isMarkLength,
  hourMarksWidth: _propTypes2.isMarkWidth,
  minuteHandLength: _propTypes2.isHandLength,
  minuteHandOppositeLength: _propTypes2.isOppositeHandLength,
  minuteHandWidth: _propTypes2.isHandWidth,
  minuteMarksLength: _propTypes2.isMarkLength,
  minuteMarksWidth: _propTypes2.isMarkWidth,
  renderHourMarks: _propTypes["default"].bool,
  renderMinuteHand: _propTypes["default"].bool,
  renderMinuteMarks: _propTypes["default"].bool,
  renderNumbers: _propTypes["default"].bool,
  renderSecondHand: _propTypes["default"].bool,
  secondHandLength: _propTypes2.isHandLength,
  secondHandOppositeLength: _propTypes2.isOppositeHandLength,
  secondHandWidth: _propTypes2.isHandWidth,
  size: _propTypes["default"].number,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)])
};

/***/ }),

/***/ "./node_modules/react-clock/dist/Hand.js":
/*!***********************************************!*\
  !*** ./node_modules/react-clock/dist/Hand.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hand;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-clock/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Hand(_ref) {
  var angle = _ref.angle,
      name = _ref.name,
      length = _ref.length,
      oppositeLength = _ref.oppositeLength,
      width = _ref.width;
  return _react["default"].createElement("div", {
    className: "react-clock__hand react-clock__".concat(name, "-hand"),
    style: {
      transform: "rotate(".concat(angle, "deg)")
    }
  }, _react["default"].createElement("div", {
    className: "react-clock__hand__body react-clock__".concat(name, "-hand__body"),
    style: {
      width: "".concat(width, "px"),
      top: "".concat(50 - length / 2, "%"),
      bottom: "".concat(50 - oppositeLength / 2, "%")
    }
  }));
}

Hand.defaultProps = {
  angle: 0,
  length: 100,
  oppositeLength: 10,
  width: 1
};
Hand.propTypes = {
  angle: _propTypes["default"].number,
  length: _propTypes2.isHandLength,
  name: _propTypes["default"].string.isRequired,
  oppositeLength: _propTypes2.isHandLength,
  width: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-clock/dist/Mark.js":
/*!***********************************************!*\
  !*** ./node_modules/react-clock/dist/Mark.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Mark;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-clock/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Mark(_ref) {
  var angle = _ref.angle,
      length = _ref.length,
      name = _ref.name,
      width = _ref.width,
      number = _ref.number;
  return _react["default"].createElement("div", {
    className: "react-clock__mark react-clock__".concat(name, "-mark"),
    style: {
      transform: "rotate(".concat(angle, "deg)")
    }
  }, _react["default"].createElement("div", {
    className: "react-clock__mark__body react-clock__".concat(name, "-mark__body"),
    style: {
      width: "".concat(width, "px"),
      top: 0,
      bottom: "".concat(100 - length / 2, "%")
    }
  }), number && _react["default"].createElement("div", {
    className: "react-clock__mark__number",
    style: {
      transform: "rotate(-".concat(angle, "deg)"),
      top: "".concat(length / 2, "%")
    }
  }, number));
}

Mark.defaultProps = {
  angle: 0,
  length: 10,
  width: 1
};
Mark.propTypes = {
  angle: _propTypes["default"].number,
  length: _propTypes2.isMarkLength,
  name: _propTypes["default"].string.isRequired,
  number: _propTypes["default"].number,
  width: _propTypes2.isMarkWidth
};

/***/ }),

/***/ "./node_modules/react-clock/dist/entry.nostyle.js":
/*!********************************************************!*\
  !*** ./node_modules/react-clock/dist/entry.nostyle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Clock", {
  enumerable: true,
  get: function get() {
    return _Clock["default"];
  }
});
exports["default"] = void 0;

var _Clock = _interopRequireDefault(__webpack_require__(/*! ./Clock */ "./node_modules/react-clock/dist/Clock.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _Clock["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-clock/dist/shared/dates.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-clock/dist/shared/dates.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHours = getHours;
exports.getMinutes = getMinutes;
exports.getSeconds = getSeconds;
var hourOptionalSecondsRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]))?$/;
var hourRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9])$/;

function getHours(date) {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string' && hourOptionalSecondsRegExp.test(date)) {
    var hourString = date.split(':')[0];
    return parseInt(hourString, 10);
  }

  throw new Error("Failed to get hours from date: ".concat(date, "."));
}

function getMinutes(date) {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string' && hourOptionalSecondsRegExp.test(date)) {
    var minuteString = date.split(':')[1];
    return parseInt(minuteString, 10);
  }

  throw new Error("Failed to get minutes from date: ".concat(date, "."));
}

function getSeconds(date) {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    if (hourRegExp.test(date)) {
      var secondString = date.split(':')[2];
      return parseInt(secondString, 10);
    }

    if (hourOptionalSecondsRegExp.test(date)) {
      return 0;
    }
  }

  throw new Error("Failed to get seconds from date: ".concat(date, "."));
}

/***/ }),

/***/ "./node_modules/react-clock/dist/shared/propTypes.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-clock/dist/shared/propTypes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMarkWidth = exports.isMarkLength = exports.isHandWidth = exports.isOppositeHandLength = exports.isHandLength = void 0;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-clock/dist/shared/utils.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isNumberBetween = function isNumberBetween(min, max) {
  return function (props, propName, componentName) {
    var value = props[propName];

    if ((0, _utils.isDefined)(value)) {
      if (typeof value !== 'number') {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(value), "` supplied to `").concat(componentName, "`, expected `number`."));
      }

      if (value < min || value > max) {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(value), "` supplied to `").concat(componentName, "`, length must be between ").concat(min, " and ").concat(max, "."));
      }
    } // Everything is fine


    return null;
  };
};

var isHandLength = isNumberBetween(0, 100);
exports.isHandLength = isHandLength;
var isOppositeHandLength = isNumberBetween(-100, 100);
exports.isOppositeHandLength = isOppositeHandLength;

var isHandWidth = function isHandWidth(props, propName, componentName) {
  var width = props[propName];

  if ((0, _utils.isDefined)(width)) {
    if (typeof width !== 'number') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(width), "` supplied to `").concat(componentName, "`, expected `number`."));
    }

    if (width < 0) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(width), "` supplied to `").concat(componentName, "`, width must be greater or equal to 0."));
    }
  } // Everything is fine


  return null;
};

exports.isHandWidth = isHandWidth;
var isMarkLength = isHandLength;
exports.isMarkLength = isMarkLength;
var isMarkWidth = isHandWidth;
exports.isMarkWidth = isMarkWidth;

/***/ }),

/***/ "./node_modules/react-clock/dist/shared/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-clock/dist/shared/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDefined = void 0;

/* eslint-disable import/prefer-default-export */

/**
 * Checks whether a variable is defined.
 *
 * @param {*} variable Variable to check
 */
var isDefined = function isDefined(variable) {
  return typeof variable !== 'undefined';
};

exports.isDefined = isDefined;

/***/ }),

/***/ "./node_modules/react-external-link/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/react-external-link/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: ExternalLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLink", function() { return ExternalLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var ExternalLink = function (_a) {
    var href = _a.href, children = _a.children, rest = __rest(_a, ["href", "children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", __assign({ target: "_blank", rel: "noopener noreferrer", href: href }, rest), children || href));
};




/***/ }),

/***/ "./node_modules/react-fit/dist/esm/Fit.js":
/*!************************************************!*\
  !*** ./node_modules/react-fit/dist/esm/Fit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var detect_element_overflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! detect-element-overflow */ "./node_modules/detect-element-overflow/dist/esm/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-fit/dist/esm/shared/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var isBrowser = typeof window !== 'undefined';
var isDisplayContentsSupported = isBrowser && 'CSS' in window && 'supports' in window.CSS && CSS.supports('display', 'contents');
var isMutationObserverSupported = isBrowser && 'MutationObserver' in window;

function capitalize(a) {
  return a[0].toUpperCase() + a.slice(1);
}

function findScrollContainer(element) {
  if (!element) {
    return undefined;
  }

  var parent = element.parentElement;

  while (parent) {
    var _window$getComputedSt = window.getComputedStyle(parent),
        overflow = _window$getComputedSt.overflow;

    if (overflow.split(' ').every(function (o) {
      return o === 'auto' || o === 'scroll';
    })) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return document.documentElement;
}

function alignAxis(_ref) {
  var axis = _ref.axis,
      container = _ref.container,
      element = _ref.element,
      invertAxis = _ref.invertAxis,
      secondary = _ref.secondary,
      scrollContainer = _ref.scrollContainer,
      spacing = _ref.spacing;
  var style = window.getComputedStyle(element);
  var parent = container.parentElement;
  var scrollContainerCollisions = Object(detect_element_overflow__WEBPACK_IMPORTED_MODULE_3__["default"])(parent, scrollContainer);
  var documentCollisions = Object(detect_element_overflow__WEBPACK_IMPORTED_MODULE_3__["default"])(parent, document.documentElement);
  var isX = axis === 'x';
  var startProperty = isX ? 'left' : 'top';
  var endProperty = isX ? 'right' : 'bottom';
  var sizeProperty = isX ? 'width' : 'height';
  var overflowStartProperty = "overflow".concat(capitalize(startProperty));
  var overflowEndProperty = "overflow".concat(capitalize(endProperty));
  var scrollProperty = "scroll".concat(capitalize(startProperty));
  var uppercasedSizeProperty = capitalize(sizeProperty);
  var offsetSizeProperty = "offset".concat(uppercasedSizeProperty);
  var clientSizeProperty = "client".concat(uppercasedSizeProperty);
  var minSizeProperty = "min-".concat(sizeProperty);
  var scrollbarWidth = scrollContainer[offsetSizeProperty] - scrollContainer[clientSizeProperty];
  var startSpacing = _typeof(spacing) === 'object' ? spacing[startProperty] : spacing;
  var availableStartSpace = -Math.max(scrollContainerCollisions[overflowStartProperty], documentCollisions[overflowStartProperty] + document.documentElement[scrollProperty]) - startSpacing;
  var endSpacing = _typeof(spacing) === 'object' ? spacing[endProperty] : spacing;
  var availableEndSpace = -Math.max(scrollContainerCollisions[overflowEndProperty], documentCollisions[overflowEndProperty] - document.documentElement[scrollProperty]) - endSpacing - scrollbarWidth;

  if (secondary) {
    availableStartSpace += parent[clientSizeProperty];
    availableEndSpace += parent[clientSizeProperty];
  }

  var offsetSize = element[offsetSizeProperty];

  function displayStart() {
    element.style[startProperty] = 'unset';
    element.style[endProperty] = secondary ? '0' : '100%';
  }

  function displayEnd() {
    element.style[startProperty] = secondary ? '0' : '100%';
    element.style[endProperty] = 'unset';
  }

  function displayIfFits(availableSpace, display) {
    var fits = offsetSize <= availableSpace;

    if (fits) {
      display();
    }

    return fits;
  }

  function displayStartIfFits() {
    return displayIfFits(availableStartSpace, displayStart);
  }

  function displayEndIfFits() {
    return displayIfFits(availableEndSpace, displayEnd);
  }

  function displayWhereverShrinkedFits() {
    var moreSpaceStart = availableStartSpace > availableEndSpace;
    var minSize = style[minSizeProperty] && parseInt(style[minSizeProperty], 10);

    function shrinkToSize(size) {
      if (minSize && size < minSize) {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])("<Fit />'s child will not fit anywhere with its current ".concat(minSizeProperty, " of ").concat(minSize, "px."));
      }

      var newSize = Math.max(size, minSize || 0);
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])("<Fit />'s child needed to have its ".concat(sizeProperty, " decreased to ").concat(newSize, "px."));
      element.style[sizeProperty] = "".concat(newSize, "px");
    }

    if (moreSpaceStart) {
      shrinkToSize(availableStartSpace);
      displayStart();
    } else {
      shrinkToSize(availableEndSpace);
      displayEnd();
    }
  }

  var fits;

  if (invertAxis) {
    fits = displayStartIfFits() || displayEndIfFits();
  } else {
    fits = displayEndIfFits() || displayStartIfFits();
  }

  if (!fits) {
    displayWhereverShrinkedFits();
  }
}

function alignMainAxis(args) {
  alignAxis(args);
}

function alignSecondaryAxis(args) {
  alignAxis(_objectSpread(_objectSpread({}, args), {}, {
    axis: args.axis === 'x' ? 'y' : 'x',
    secondary: true
  }));
}

function alignBothAxis(args) {
  var invertAxis = args.invertAxis,
      invertSecondaryAxis = args.invertSecondaryAxis,
      commonArgs = _objectWithoutProperties(args, ["invertAxis", "invertSecondaryAxis"]);

  alignMainAxis(_objectSpread(_objectSpread({}, commonArgs), {}, {
    invertAxis: invertAxis
  }));
  alignSecondaryAxis(_objectSpread(_objectSpread({}, commonArgs), {}, {
    invertAxis: invertSecondaryAxis
  }));
}

var Fit = /*#__PURE__*/function (_Component) {
  _inherits(Fit, _Component);

  var _super = _createSuper(Fit);

  function Fit() {
    var _this;

    _classCallCheck(this, Fit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onMutation", function () {
      _this.fit();
    });

    _defineProperty(_assertThisInitialized(_this), "mutationObserver", isMutationObserverSupported && new MutationObserver(_this.onMutation));

    _defineProperty(_assertThisInitialized(_this), "fit", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          scrollContainer = _assertThisInitialize.scrollContainer,
          container = _assertThisInitialize.container,
          element = _assertThisInitialize.element;

      if (!element) {
        return;
      }

      var elementWidth = element.clientWidth;
      var elementHeight = element.clientHeight; // No need to recalculate - already did that for current dimensions

      if (_this.elementWidth === elementWidth && _this.elementHeight === elementHeight) {
        return;
      } // Save the dimensions so that we know we don't need to repeat the function if unchanged


      _this.elementWidth = elementWidth;
      _this.elementHeight = elementHeight;
      var parent = container.parentElement; // Container was unmounted

      if (!parent) {
        return;
      }
      /**
       * We need to ensure that <Fit />'s child has a absolute position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */


      var style = window.getComputedStyle(element);
      var position = style.position;

      if (position !== 'absolute') {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])('<Fit />\'s child does not have absolute position. You should apply `position: absolute` to it.');
        element.style.position = 'absolute';
      }
      /**
       * We need to ensure that <Fit />'s parent has a relative position. Otherwise,
       * we wouldn't be able to place the child in the correct position.
       */


      var parentStyle = window.getComputedStyle(parent);
      var parentPosition = parentStyle.position;

      if (parentPosition !== 'relative' && parentPosition !== 'absolute') {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])('<Fit />\'s parent does not have relative position. You should apply `position: relative` to it.');
        parent.style.position = 'relative';
      }

      var _this$props = _this.props,
          invertAxis = _this$props.invertAxis,
          invertSecondaryAxis = _this$props.invertSecondaryAxis,
          mainAxis = _this$props.mainAxis,
          spacing = _this$props.spacing;
      alignBothAxis({
        container: container,
        element: element,
        invertAxis: invertAxis,
        invertSecondaryAxis: invertSecondaryAxis,
        axis: mainAxis,
        scrollContainer: scrollContainer,
        spacing: spacing
      });
    });

    return _this;
  }

  _createClass(Fit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!isDisplayContentsSupported) {
        // eslint-disable-next-line react/no-find-dom-node
        var element = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this);
        this.container = element;
        this.element = element;
        this.scrollContainer = findScrollContainer(element);
      }

      this.fit();

      if (isMutationObserverSupported) {
        this.mutationObserver.observe(this.element, {
          attributes: true,
          attributeFilter: ['class', 'style']
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var child = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);

      if (isDisplayContentsSupported) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          ref: function ref(container) {
            _this2.container = container;
            var element = container && container.firstChild;
            _this2.element = element;
            _this2.scrollContainer = findScrollContainer(element);
          },
          style: {
            display: 'contents'
          }
        }, child);
      }

      return child;
    }
  }]);

  return Fit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Fit.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  invertAxis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  invertSecondaryAxis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  mainAxis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['x', 'y']),
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
  })])
};
Fit.defaultProps = {
  mainAxis: 'y',
  spacing: 8
};

/***/ }),

/***/ "./node_modules/react-fit/dist/esm/shared/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-fit/dist/esm/shared/utils.js ***!
  \*********************************************************/
/*! exports provided: isProduction, warnOnDev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnDev", function() { return warnOnDev; });
/**
 * Checks whether we're running on a production build or not.
 */
var isProduction = "development" === 'production';

var consoleOnDev = function consoleOnDev(method) {
  if (!isProduction) {
    var _console;

    for (var _len = arguments.length, message = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      message[_key - 1] = arguments[_key];
    }

    // eslint-disable-next-line no-console
    (_console = console)[method].apply(_console, message);
  }
};

var warnOnDev = function warnOnDev() {
  for (var _len2 = arguments.length, message = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    message[_key2] = arguments[_key2];
  }

  return consoleOnDev.apply(void 0, ['warn'].concat(message));
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/Divider.js":
/*!********************************************************!*\
  !*** ./node_modules/react-time-picker/dist/Divider.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Divider;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Divider(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("span", {
    className: "react-time-picker__inputGroup__divider"
  }, children);
}

Divider.propTypes = {
  children: _propTypes["default"].node
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Divider = _interopRequireDefault(__webpack_require__(/*! ./Divider */ "./node_modules/react-time-picker/dist/Divider.js"));

var _Hour12Input = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/Hour12Input */ "./node_modules/react-time-picker/dist/TimeInput/Hour12Input.js"));

var _Hour24Input = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/Hour24Input */ "./node_modules/react-time-picker/dist/TimeInput/Hour24Input.js"));

var _MinuteInput = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/MinuteInput */ "./node_modules/react-time-picker/dist/TimeInput/MinuteInput.js"));

var _SecondInput = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/SecondInput */ "./node_modules/react-time-picker/dist/TimeInput/SecondInput.js"));

var _NativeInput = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/NativeInput */ "./node_modules/react-time-picker/dist/TimeInput/NativeInput.js"));

var _AmPm = _interopRequireDefault(__webpack_require__(/*! ./TimeInput/AmPm */ "./node_modules/react-time-picker/dist/TimeInput/AmPm.js"));

var _dateFormatter = __webpack_require__(/*! ./shared/dateFormatter */ "./node_modules/react-time-picker/dist/shared/dateFormatter.js");

var _dates = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-time-picker/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var allViews = ['hour', 'minute', 'second'];

function hoursAreDifferent(date1, date2) {
  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1 !== date2 // TODO: Compare 11:22:00 and 11:22 properly
  ;
}

function isValidInput(element) {
  return element.tagName === 'INPUT' && element.type === 'number';
}

function findInput(element, property) {
  var nextElement = element;

  do {
    nextElement = nextElement[property];
  } while (nextElement && !isValidInput(nextElement));

  return nextElement;
}

function focus(element) {
  if (element) {
    element.focus();
  }
}

function _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances) {
  var usedFunctions = [];
  var pattern = new RegExp(Object.keys(elementFunctions).map(function (el) {
    return "".concat(el, "+");
  }).join('|'), 'g');
  var matches = placeholder.match(pattern);
  return placeholder.split(pattern).reduce(function (arr, element, index) {
    var divider = element && // eslint-disable-next-line react/no-array-index-key
    _react["default"].createElement(_Divider["default"], {
      key: "separator_".concat(index)
    }, element);

    var res = [].concat(_toConsumableArray(arr), [divider]);
    var currentMatch = matches && matches[index];

    if (currentMatch) {
      var renderFunction = elementFunctions[currentMatch] || elementFunctions[Object.keys(elementFunctions).find(function (elementFunction) {
        return currentMatch.match(elementFunction);
      })];

      if (!allowMultipleInstances && usedFunctions.includes(renderFunction)) {
        res.push(currentMatch);
      } else {
        res.push(renderFunction(currentMatch, index));
        usedFunctions.push(renderFunction);
      }
    }

    return res;
  }, []);
}

var TimeInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimeInput, _PureComponent);

  function TimeInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimeInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimeInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      amPm: null,
      hour: null,
      minute: null,
      second: null
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      if (event.target === event.currentTarget) {
        // Wrapper was directly clicked
        var firstInput = event.target.children[1];
        focus(firstInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
        case _this.divider:
          {
            event.preventDefault();
            var input = event.target;
            var property = event.key === 'ArrowLeft' ? 'previousElementSibling' : 'nextElementSibling';
            var nextInput = findInput(input, property);
            focus(nextInput);
            break;
          }

        default:
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      var key = event.key,
          input = event.target;
      var isNumberKey = !isNaN(parseInt(key, 10));

      if (!isNumberKey) {
        return;
      }

      var value = input.value;
      var max = input.getAttribute('max');
      /**
       * Given 1, the smallest possible number the user could type by adding another digit is 10.
       * 10 would be a valid value given max = 12, so we won't jump to the next input.
       * However, given 2, smallers possible number would be 20, and thus keeping the focus in
       * this field doesn't make sense.
       */

      if (value * 10 > max || value.length >= max.length) {
        var property = 'nextElementSibling';
        var nextInput = findInput(input, property);
        focus(nextInput);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      switch (name) {
        case 'hour12':
          {
            _this.setState(function (prevState) {
              return {
                hour: value ? (0, _dates.convert12to24)(parseInt(value, 10), prevState.amPm) : null
              };
            }, _this.onChangeExternal);

            break;
          }

        case 'hour24':
          {
            _this.setState({
              hour: value ? parseInt(value, 10) : null
            }, _this.onChangeExternal);

            break;
          }

        default:
          {
            _this.setState(_defineProperty({}, name, value ? parseInt(value, 10) : null), _this.onChangeExternal);
          }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeNative", function (event) {
      var onChange = _this.props.onChange;
      var value = event.target.value;

      if (!onChange) {
        return;
      }

      var processedValue = function () {
        if (!value) {
          return null;
        }

        return value;
      }();

      onChange(processedValue, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeAmPm", function (event) {
      var value = event.target.value;

      _this.setState({
        amPm: value
      }, _this.onChangeExternal);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeExternal", function () {
      var onChange = _this.props.onChange;

      if (!onChange) {
        return;
      }

      var formElements = [_this.hour12Input, _this.hour24Input, _this.minuteInput, _this.secondInput, _this.amPmInput].filter(Boolean);
      var formElementsWithoutSelect = formElements.slice(0, -1);
      var values = {};
      formElements.forEach(function (formElement) {
        values[formElement.name] = formElement.value;
      });

      if (formElementsWithoutSelect.every(function (formElement) {
        return !formElement.value;
      })) {
        onChange(null, false);
      } else if (formElements.every(function (formElement) {
        return formElement.value && formElement.validity.valid;
      })) {
        var hour = parseInt(values.hour24 || (0, _dates.convert12to24)(values.hour12, values.amPm) || 0, 10);
        var minute = parseInt(values.minute || 0, 10);
        var second = parseInt(values.second || 0, 10);

        var padStart = function padStart(num) {
          return "0".concat(num).slice(-2);
        };

        var proposedValue = "".concat(padStart(hour), ":").concat(padStart(minute), ":").concat(padStart(second));

        var processedValue = _this.getProcessedValue(proposedValue);

        onChange(processedValue, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour", function (currentMatch, index) {
      if (/h/.test(currentMatch)) {
        return _this.renderHour12(currentMatch, index);
      }

      return _this.renderHour24(currentMatch, index);
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour12", function (currentMatch, index) {
      var _this$props = _this.props,
          autoFocus = _this$props.autoFocus,
          hourAriaLabel = _this$props.hourAriaLabel,
          hourPlaceholder = _this$props.hourPlaceholder;
      var _this$state = _this.state,
          amPm = _this$state.amPm,
          hour = _this$state.hour;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch && currentMatch.length === 2;
      return _react["default"].createElement(_Hour12Input["default"], _extends({
        key: "hour12"
      }, _this.commonInputProps, {
        amPm: amPm,
        ariaLabel: hourAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: hourPlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: hour
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour24", function (currentMatch, index) {
      var _this$props2 = _this.props,
          autoFocus = _this$props2.autoFocus,
          hourAriaLabel = _this$props2.hourAriaLabel,
          hourPlaceholder = _this$props2.hourPlaceholder;
      var hour = _this.state.hour;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch && currentMatch.length === 2;
      return _react["default"].createElement(_Hour24Input["default"], _extends({
        key: "hour24"
      }, _this.commonInputProps, {
        ariaLabel: hourAriaLabel,
        autoFocus: index === 0 && autoFocus,
        placeholder: hourPlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: hour
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderMinute", function (currentMatch, index) {
      var _this$props3 = _this.props,
          autoFocus = _this$props3.autoFocus,
          minuteAriaLabel = _this$props3.minuteAriaLabel,
          minutePlaceholder = _this$props3.minutePlaceholder;
      var _this$state2 = _this.state,
          hour = _this$state2.hour,
          minute = _this$state2.minute;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch && currentMatch.length === 2;
      return _react["default"].createElement(_MinuteInput["default"], _extends({
        key: "minute"
      }, _this.commonInputProps, {
        ariaLabel: minuteAriaLabel,
        autoFocus: index === 0 && autoFocus,
        hour: hour,
        placeholder: minutePlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: minute
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSecond", function (currentMatch, index) {
      var _this$props4 = _this.props,
          autoFocus = _this$props4.autoFocus,
          secondAriaLabel = _this$props4.secondAriaLabel,
          secondPlaceholder = _this$props4.secondPlaceholder;
      var _this$state3 = _this.state,
          hour = _this$state3.hour,
          minute = _this$state3.minute,
          second = _this$state3.second;

      if (currentMatch && currentMatch.length > 2) {
        throw new Error("Unsupported token: ".concat(currentMatch));
      }

      var showLeadingZeros = currentMatch ? currentMatch.length === 2 : true;
      return _react["default"].createElement(_SecondInput["default"], _extends({
        key: "second"
      }, _this.commonInputProps, {
        ariaLabel: secondAriaLabel,
        autoFocus: index === 0 && autoFocus,
        hour: hour,
        minute: minute,
        placeholder: secondPlaceholder,
        showLeadingZeros: showLeadingZeros,
        value: second
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderAmPm", function (currentMatch, index) {
      var _this$props5 = _this.props,
          amPmAriaLabel = _this$props5.amPmAriaLabel,
          autoFocus = _this$props5.autoFocus,
          locale = _this$props5.locale;
      var amPm = _this.state.amPm;
      return _react["default"].createElement(_AmPm["default"], _extends({
        key: "ampm"
      }, _this.commonInputProps, {
        ariaLabel: amPmAriaLabel,
        autoFocus: index === 0 && autoFocus,
        locale: locale,
        onChange: _this.onChangeAmPm,
        value: amPm
      }));
    });

    return _this;
  }

  _createClass(TimeInput, [{
    key: "getProcessedValue",

    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var _this2 = this;

      var processFunction = function () {
        switch (_this2.valueType) {
          case 'hour':
          case 'minute':
            return _dateUtils.getHoursMinutes;

          case 'second':
            return _dateUtils.getHoursMinutesSeconds;

          default:
            throw new Error('Invalid valueType.');
        }
      }();

      return processFunction(value);
    }
    /**
     * Returns value type that can be returned with currently applied settings.
     */

  }, {
    key: "renderCustomInputs",
    value: function renderCustomInputs() {
      var placeholder = this.placeholder;
      var format = this.props.format;
      var elementFunctions = {
        h: this.renderHour,
        H: this.renderHour,
        m: this.renderMinute,
        s: this.renderSecond,
        a: this.renderAmPm
      };
      var allowMultipleInstances = typeof format !== 'undefined';
      return _renderCustomInputs(placeholder, elementFunctions, allowMultipleInstances);
    }
  }, {
    key: "renderNativeInput",
    value: function renderNativeInput() {
      var _this$props6 = this.props,
          disabled = _this$props6.disabled,
          maxTime = _this$props6.maxTime,
          minTime = _this$props6.minTime,
          name = _this$props6.name,
          nativeInputAriaLabel = _this$props6.nativeInputAriaLabel,
          required = _this$props6.required,
          value = _this$props6.value;
      return _react["default"].createElement(_NativeInput["default"], {
        key: "time",
        ariaLabel: nativeInputAriaLabel,
        disabled: disabled,
        maxTime: maxTime,
        minTime: minTime,
        name: name,
        onChange: this.onChangeNative,
        required: required,
        value: value,
        valueType: this.valueType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      /* eslint-disable jsx-a11y/click-events-have-key-events */

      /* eslint-disable jsx-a11y/no-static-element-interactions */

      return _react["default"].createElement("div", {
        className: className,
        onClick: this.onClick
      }, this.renderNativeInput(), this.renderCustomInputs());
    }
  }, {
    key: "formatTime",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      var options = {
        hour: 'numeric'
      };
      var level = allViews.indexOf(maxDetail);

      if (level >= 1) {
        options.minute = 'numeric';
      }

      if (level >= 2) {
        options.second = 'numeric';
      }

      return (0, _dateFormatter.getFormatter)(options);
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "formatNumber",
    get: function get() {
      var options = {
        useGrouping: false
      };
      return (0, _dateFormatter.getFormatter)(options);
    }
  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return maxDetail;
    }
  }, {
    key: "divider",
    get: function get() {
      return this.placeholder.match(/[^0-9a-z]/i)[0];
    }
  }, {
    key: "placeholder",
    get: function get() {
      var _this$props7 = this.props,
          format = _this$props7.format,
          locale = _this$props7.locale;

      if (format) {
        return format;
      }

      var hour24 = 21;
      var hour12 = 9;
      var minute = 13;
      var second = 14;
      var date = new Date(2017, 0, 1, hour24, minute, second);
      return this.formatTime(locale, date).replace(this.formatNumber(locale, hour12), 'h').replace(this.formatNumber(locale, hour24), 'H').replace(this.formatNumber(locale, minute), 'mm').replace(this.formatNumber(locale, second), 'ss').replace(new RegExp((0, _utils.getAmPmLabels)(locale).join('|')), 'a');
    }
  }, {
    key: "commonInputProps",
    get: function get() {
      var _this3 = this;

      var _this$props8 = this.props,
          className = _this$props8.className,
          disabled = _this$props8.disabled,
          isClockOpen = _this$props8.isClockOpen,
          maxTime = _this$props8.maxTime,
          minTime = _this$props8.minTime,
          required = _this$props8.required;
      return {
        className: className,
        disabled: disabled,
        itemRef: function itemRef(ref, name) {
          // Save a reference to each input field
          _this3["".concat(name, "Input")] = ref;
        },
        maxTime: maxTime,
        minTime: minTime,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        placeholder: '--',
        // This is only for showing validity when editing
        required: required || isClockOpen
      };
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextState = {};
      /**
       * If isClockOpen flag has changed, we have to update it.
       * It's saved in state purely for use in getDerivedStateFromProps.
       */

      if (nextProps.isClockOpen !== prevState.isClockOpen) {
        nextState.isClockOpen = nextProps.isClockOpen;
      }
      /**
       * If the next value is different from the current one  (with an exception of situation in
       * which values provided are limited by minDate and maxDate so that the dates are the same),
       * get a new one.
       */


      var nextValue = nextProps.value;

      if ( // Toggling calendar visibility resets values
      nextState.isClockOpen // Flag was toggled
      || hoursAreDifferent(nextValue, prevState.value)) {
        if (nextValue) {
          var _convert24to = (0, _dates.convert24to12)((0, _dateUtils.getHours)(nextValue));

          var _convert24to2 = _slicedToArray(_convert24to, 2);

          nextState.amPm = _convert24to2[1];
          nextState.hour = (0, _dateUtils.getHours)(nextValue);
          nextState.minute = (0, _dateUtils.getMinutes)(nextValue);
          nextState.second = (0, _dateUtils.getSeconds)(nextValue);
        } else {
          nextState.amPm = null;
          nextState.hour = null;
          nextState.minute = null;
          nextState.second = null;
        }

        nextState.value = nextValue;
      }

      return nextState;
    }
  }]);

  return TimeInput;
}(_react.PureComponent);

exports["default"] = TimeInput;
TimeInput.defaultProps = {
  maxDetail: 'minute',
  name: 'time'
};
TimeInput.propTypes = {
  amPmAriaLabel: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  hourAriaLabel: _propTypes["default"].string,
  hourPlaceholder: _propTypes["default"].string,
  isClockOpen: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  maxDetail: _propTypes["default"].oneOf(allViews),
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  minuteAriaLabel: _propTypes["default"].string,
  minutePlaceholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  nativeInputAriaLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  secondAriaLabel: _propTypes["default"].string,
  secondPlaceholder: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes2.isTime, _propTypes["default"].instanceOf(Date)])
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/AmPm.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/AmPm.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AmPm;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-time-picker/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AmPm(_ref) {
  var ariaLabel = _ref.ariaLabel,
      className = _ref.className,
      disabled = _ref.disabled,
      itemRef = _ref.itemRef,
      locale = _ref.locale,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value;
  var amDisabled = minTime && (0, _dates.convert24to12)((0, _dateUtils.getHours)(minTime))[1] === 'pm';
  var pmDisabled = maxTime && (0, _dates.convert24to12)((0, _dateUtils.getHours)(maxTime))[1] === 'am';
  var name = 'amPm';

  var _getAmPmLabels = (0, _utils.getAmPmLabels)(locale),
      _getAmPmLabels2 = _slicedToArray(_getAmPmLabels, 2),
      amLabel = _getAmPmLabels2[0],
      pmLabel = _getAmPmLabels2[1];

  return _react["default"].createElement("select", {
    "aria-label": ariaLabel,
    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(name)),
    disabled: disabled,
    name: name,
    onChange: onChange,
    ref: function ref(_ref2) {
      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    required: required,
    value: value !== null ? value : ''
  }, !value && _react["default"].createElement("option", {
    value: ""
  }, "--"), _react["default"].createElement("option", {
    disabled: amDisabled,
    value: "am"
  }, amLabel), _react["default"].createElement("option", {
    disabled: pmDisabled,
    value: "pm"
  }, pmLabel));
}

AmPm.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].oneOf(['am', 'pm'])
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/Hour12Input.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/Hour12Input.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hour12Input;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-time-picker/dist/TimeInput/Input.js"));

var _dates = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-time-picker/dist/shared/dates.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Hour12Input(_ref) {
  var amPm = _ref.amPm,
      hour = _ref.hour,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["amPm", "hour", "maxTime", "minTime", "value"]);

  var maxHour = (0, _utils.safeMin)(12, maxTime && function () {
    var _convert24to = (0, _dates.convert24to12)((0, _dateUtils.getHours)(maxTime)),
        _convert24to2 = _slicedToArray(_convert24to, 2),
        maxHourResult = _convert24to2[0],
        maxAmPm = _convert24to2[1];

    if (maxAmPm !== amPm) {
      // pm is always after am, so we should ignore validation
      return null;
    }

    return maxHourResult;
  }());
  var minHour = (0, _utils.safeMax)(1, minTime && function () {
    var _convert24to3 = (0, _dates.convert24to12)((0, _dateUtils.getHours)(minTime)),
        _convert24to4 = _slicedToArray(_convert24to3, 2),
        minHourResult = _convert24to4[0],
        minAmPm = _convert24to4[1];

    if ( // pm is always after am, so we should ignore validation
    minAmPm !== amPm // If minHour is 12 am/pm, user should be able to enter 12, 1, ..., 11.
    || minHourResult === 12) {
      return null;
    }

    return minHourResult;
  }());
  var value12 = value !== null ? (0, _dates.convert24to12)(value)[0] : null;
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxHour,
    min: minHour,
    name: "hour12",
    nameForClass: "hour",
    value: value12
  }, otherProps));
}

Hour12Input.propTypes = {
  amPm: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].number,
  itemRef: _propTypes["default"].func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/Hour24Input.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/Hour24Input.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hour24Input;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-time-picker/dist/TimeInput/Input.js"));

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Hour24Input(_ref) {
  var hour = _ref.hour,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      otherProps = _objectWithoutProperties(_ref, ["hour", "maxTime", "minTime"]);

  var maxHour = (0, _utils.safeMin)(23, maxTime && (0, _dateUtils.getHours)(maxTime));
  var minHour = (0, _utils.safeMax)(0, minTime && (0, _dateUtils.getHours)(minTime));
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxHour,
    min: minHour,
    name: "hour24",
    nameForClass: "hour"
  }, otherProps));
}

Hour24Input.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].number,
  itemRef: _propTypes["default"].func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/Input.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/Input.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Input;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _updateInputWidth = _interopRequireWildcard(__webpack_require__(/*! update-input-width */ "./node_modules/update-input-width/dist/esm/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable jsx-a11y/no-autofocus */
function onFocus(event) {
  var target = event.target;
  requestAnimationFrame(function () {
    return target.select();
  });
}

function updateInputWidthOnFontLoad(element) {
  if (!document.fonts) {
    return;
  }

  var font = (0, _updateInputWidth.getFontShorthand)(element);

  if (!font) {
    return;
  }

  var isFontLoaded = document.fonts.check(font);

  if (isFontLoaded) {
    return;
  }

  function onLoadingDone() {
    (0, _updateInputWidth["default"])(element);
  }

  document.fonts.addEventListener('loadingdone', onLoadingDone);
}

function getSelectionString() {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.getSelection().toString();
}

var numberRegExp = /[0-9]/;

function makeOnKeyPress(maxLength) {
  return function onKeyPress(event) {
    var selection = getSelectionString();
    var value = event.target.value;

    if (numberRegExp.test(event.key) && (selection || value.length < maxLength)) {
      return;
    }

    event.preventDefault();
  };
}

function Input(_ref) {
  var ariaLabel = _ref.ariaLabel,
      autoFocus = _ref.autoFocus,
      className = _ref.className,
      disabled = _ref.disabled,
      itemRef = _ref.itemRef,
      max = _ref.max,
      min = _ref.min,
      name = _ref.name,
      nameForClass = _ref.nameForClass,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      _onKeyUp = _ref.onKeyUp,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '--' : _ref$placeholder,
      required = _ref.required,
      showLeadingZeros = _ref.showLeadingZeros,
      step = _ref.step,
      value = _ref.value;
  var hasLeadingZero = showLeadingZeros && value !== null && value < 10;
  var maxLength = max.toString().length;
  return [hasLeadingZero && _react["default"].createElement("span", {
    key: "leadingZero",
    className: "".concat(className, "__leadingZero")
  }, "0"), _react["default"].createElement("input", {
    key: "input",
    "aria-label": ariaLabel,
    autoComplete: "off",
    autoFocus: autoFocus,
    className: (0, _mergeClassNames["default"])("".concat(className, "__input"), "".concat(className, "__").concat(nameForClass || name), hasLeadingZero && "".concat(className, "__input--hasLeadingZero")),
    disabled: disabled,
    max: max,
    min: min,
    name: name,
    onChange: onChange,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    onKeyPress: makeOnKeyPress(maxLength),
    onKeyUp: function onKeyUp(event) {
      (0, _updateInputWidth["default"])(event.target);

      if (_onKeyUp) {
        _onKeyUp(event);
      }
    },
    placeholder: placeholder,
    ref: function ref(_ref2) {
      if (_ref2) {
        (0, _updateInputWidth["default"])(_ref2);
        updateInputWidthOnFontLoad(_ref2);
      }

      if (itemRef) {
        itemRef(_ref2, name);
      }
    },
    required: required,
    step: step,
    type: "number",
    value: value !== null ? value : ''
  })];
}

Input.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  itemRef: _propTypes["default"].func,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  step: _propTypes["default"].number,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/MinuteInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/MinuteInput.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MinuteInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-time-picker/dist/TimeInput/Input.js"));

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MinuteInput(_ref) {
  var hour = _ref.hour,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      _ref$showLeadingZeros = _ref.showLeadingZeros,
      showLeadingZeros = _ref$showLeadingZeros === void 0 ? true : _ref$showLeadingZeros,
      otherProps = _objectWithoutProperties(_ref, ["hour", "maxTime", "minTime", "showLeadingZeros"]);

  function isSameHour(date) {
    return date && hour === (0, _dateUtils.getHours)(date);
  }

  var maxMinute = (0, _utils.safeMin)(59, isSameHour(maxTime) && (0, _dateUtils.getMinutes)(maxTime));
  var minMinute = (0, _utils.safeMax)(0, isSameHour(minTime) && (0, _dateUtils.getMinutes)(minTime));
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxMinute,
    min: minMinute,
    name: "minute",
    showLeadingZeros: showLeadingZeros
  }, otherProps));
}

MinuteInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].number,
  itemRef: _propTypes["default"].func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/NativeInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/NativeInput.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NativeInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NativeInput(_ref) {
  var ariaLabel = _ref.ariaLabel,
      disabled = _ref.disabled,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      name = _ref.name,
      onChange = _ref.onChange,
      required = _ref.required,
      value = _ref.value,
      valueType = _ref.valueType;

  var nativeValueParser = function () {
    switch (valueType) {
      case 'hour':
        return function (receivedValue) {
          return "".concat((0, _dateUtils.getHours)(receivedValue), ":00");
        };

      case 'minute':
        return _dateUtils.getHoursMinutes;

      case 'second':
        return _dateUtils.getHoursMinutesSeconds;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  var step = function () {
    switch (valueType) {
      case 'hour':
        return 3600;

      case 'minute':
        return 60;

      case 'second':
        return 1;

      default:
        throw new Error('Invalid valueType.');
    }
  }();

  function stopPropagation(event) {
    event.stopPropagation();
  }

  return _react["default"].createElement("input", {
    "aria-label": ariaLabel,
    disabled: disabled,
    max: maxTime ? nativeValueParser(maxTime) : null,
    min: minTime ? nativeValueParser(minTime) : null,
    name: name,
    onChange: onChange,
    onFocus: stopPropagation,
    required: required,
    step: step,
    style: {
      visibility: 'hidden',
      position: 'absolute',
      top: '-9999px',
      left: '-9999px'
    },
    type: "time",
    value: value ? nativeValueParser(value) : ''
  });
}

NativeInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)]),
  valueType: _propTypes2.isValueType
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimeInput/SecondInput.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimeInput/SecondInput.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SecondInput;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _dateUtils = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-time-picker/dist/TimeInput/Input.js"));

var _propTypes2 = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SecondInput(_ref) {
  var hour = _ref.hour,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      minute = _ref.minute,
      _ref$showLeadingZeros = _ref.showLeadingZeros,
      showLeadingZeros = _ref$showLeadingZeros === void 0 ? true : _ref$showLeadingZeros,
      otherProps = _objectWithoutProperties(_ref, ["hour", "maxTime", "minTime", "minute", "showLeadingZeros"]);

  function isSameMinute(date) {
    return date && hour === (0, _dateUtils.getHours)(date) && minute === (0, _dateUtils.getMinutes)(date);
  }

  var maxSecond = (0, _utils.safeMin)(59, isSameMinute(maxTime) && (0, _dateUtils.getSeconds)(maxTime));
  var minSecond = (0, _utils.safeMax)(0, isSameMinute(minTime) && (0, _dateUtils.getSeconds)(minTime));
  return _react["default"].createElement(_Input["default"], _extends({
    max: maxSecond,
    min: minSecond,
    name: "second",
    showLeadingZeros: showLeadingZeros
  }, otherProps));
}

SecondInput.propTypes = {
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].number,
  itemRef: _propTypes["default"].func,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  minute: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].number
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimePicker.css":
/*!************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimePicker.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../postcss-loader/src??ref--7-2!./TimePicker.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-time-picker/dist/TimePicker.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/react-time-picker/dist/TimePicker.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-time-picker/dist/TimePicker.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _makeEventProps = _interopRequireDefault(__webpack_require__(/*! make-event-props */ "./node_modules/make-event-props/dist/entry.js"));

var _mergeClassNames = _interopRequireDefault(__webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js"));

var _reactFit = _interopRequireDefault(__webpack_require__(/*! react-fit */ "./node_modules/react-fit/dist/esm/Fit.js"));

var _entry = _interopRequireDefault(__webpack_require__(/*! react-clock/dist/entry.nostyle */ "./node_modules/react-clock/dist/entry.nostyle.js"));

var _TimeInput = _interopRequireDefault(__webpack_require__(/*! ./TimeInput */ "./node_modules/react-time-picker/dist/TimeInput.js"));

var _propTypes2 = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-time-picker/dist/shared/propTypes.js");

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-time-picker/dist/shared/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var allViews = ['hour', 'minute', 'second'];
var baseClassName = 'react-time-picker';
var outsideActionEvents = ['mousedown', 'focusin', 'touchstart'];

var TimePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimePicker, _PureComponent);

  function TimePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "onOutsideAction", function (event) {
      if (_this.wrapper && !_this.wrapper.contains(event.target)) {
        _this.closeClock();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      var closeClock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.closeClock;
      var onChange = _this.props.onChange;

      if (closeClock) {
        _this.closeClock();
      }

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus;

      if (onFocus) {
        onFocus(event);
      } // Internet Explorer still fires onFocus on disabled elements


      if (disabled) {
        return;
      }

      _this.openClock();
    });

    _defineProperty(_assertThisInitialized(_this), "openClock", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeClock", function () {
      _this.setState(function (prevState) {
        if (!prevState.isOpen) {
          return null;
        }

        return {
          isOpen: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleClock", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopPropagation", function (event) {
      return event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      return _this.onChange(null);
    });

    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleOutsideActionListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.state.isOpen;
      var _this$props2 = this.props,
          onClockClose = _this$props2.onClockClose,
          onClockOpen = _this$props2.onClockOpen;

      if (isOpen !== prevState.isOpen) {
        this.handleOutsideActionListeners();
        (0, _utils.callIfDefined)(isOpen ? onClockOpen : onClockClose);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleOutsideActionListeners(false);
    }
  }, {
    key: "handleOutsideActionListeners",
    value: function handleOutsideActionListeners(shouldListen) {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var shouldListenWithFallback = typeof shouldListen !== 'undefined' ? shouldListen : isOpen;
      var fnName = shouldListenWithFallback ? 'addEventListener' : 'removeEventListener';
      outsideActionEvents.forEach(function (eventName) {
        return document[fnName](eventName, _this2.onOutsideAction);
      });
    }
  }, {
    key: "renderInputs",
    value: function renderInputs() {
      var _this$props3 = this.props,
          amPmAriaLabel = _this$props3.amPmAriaLabel,
          autoFocus = _this$props3.autoFocus,
          clearAriaLabel = _this$props3.clearAriaLabel,
          clearIcon = _this$props3.clearIcon,
          clockAriaLabel = _this$props3.clockAriaLabel,
          clockIcon = _this$props3.clockIcon,
          disableClock = _this$props3.disableClock,
          disabled = _this$props3.disabled,
          format = _this$props3.format,
          hourAriaLabel = _this$props3.hourAriaLabel,
          hourPlaceholder = _this$props3.hourPlaceholder,
          isOpen = _this$props3.isOpen,
          locale = _this$props3.locale,
          maxDetail = _this$props3.maxDetail,
          maxTime = _this$props3.maxTime,
          minTime = _this$props3.minTime,
          minuteAriaLabel = _this$props3.minuteAriaLabel,
          minutePlaceholder = _this$props3.minutePlaceholder,
          name = _this$props3.name,
          nativeInputAriaLabel = _this$props3.nativeInputAriaLabel,
          required = _this$props3.required,
          secondAriaLabel = _this$props3.secondAriaLabel,
          secondPlaceholder = _this$props3.secondPlaceholder,
          value = _this$props3.value;

      var _concat = [].concat(value),
          _concat2 = _slicedToArray(_concat, 1),
          valueFrom = _concat2[0];

      var ariaLabelProps = {
        amPmAriaLabel: amPmAriaLabel,
        hourAriaLabel: hourAriaLabel,
        minuteAriaLabel: minuteAriaLabel,
        nativeInputAriaLabel: nativeInputAriaLabel,
        secondAriaLabel: secondAriaLabel
      };
      var placeholderProps = {
        hourPlaceholder: hourPlaceholder,
        minutePlaceholder: minutePlaceholder,
        secondPlaceholder: secondPlaceholder
      };
      return _react["default"].createElement("div", {
        className: "".concat(baseClassName, "__wrapper")
      }, _react["default"].createElement(_TimeInput["default"], _extends({}, ariaLabelProps, placeholderProps, {
        autoFocus: autoFocus,
        className: "".concat(baseClassName, "__inputGroup"),
        disabled: disabled,
        format: format,
        isClockOpen: isOpen,
        locale: locale,
        maxDetail: maxDetail,
        maxTime: maxTime,
        minTime: minTime,
        name: name,
        onChange: this.onChange,
        placeholder: this.placeholder,
        required: required,
        value: valueFrom
      })), clearIcon !== null && _react["default"].createElement("button", {
        "aria-label": clearAriaLabel,
        className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onClick: this.clear,
        onFocus: this.stopPropagation,
        type: "button"
      }, clearIcon), clockIcon !== null && !disableClock && _react["default"].createElement("button", {
        "aria-label": clockAriaLabel,
        className: "".concat(baseClassName, "__clock-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onBlur: this.resetValue,
        onClick: this.toggleClock,
        onFocus: this.stopPropagation,
        type: "button"
      }, clockIcon));
    }
  }, {
    key: "renderClock",
    value: function renderClock() {
      var disableClock = this.props.disableClock;
      var isOpen = this.state.isOpen;

      if (isOpen === null || disableClock) {
        return null;
      }

      var _this$props4 = this.props,
          clockClassName = _this$props4.clockClassName,
          timePickerClassName = _this$props4.className,
          maxDetail = _this$props4.maxDetail,
          onChange = _this$props4.onChange,
          value = _this$props4.value,
          clockProps = _objectWithoutProperties(_this$props4, ["clockClassName", "className", "maxDetail", "onChange", "value"]);

      var className = "".concat(baseClassName, "__clock");

      var _concat3 = [].concat(value),
          _concat4 = _slicedToArray(_concat3, 1),
          valueFrom = _concat4[0];

      var maxDetailIndex = allViews.indexOf(maxDetail);
      return _react["default"].createElement(_reactFit["default"], null, _react["default"].createElement("div", {
        className: (0, _mergeClassNames["default"])(className, "".concat(className, "--").concat(isOpen ? 'open' : 'closed'))
      }, _react["default"].createElement(_entry["default"], _extends({
        className: clockClassName,
        renderMinuteHand: maxDetailIndex > 0,
        renderSecondHand: maxDetailIndex > 1,
        value: valueFrom
      }, clockProps))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          className = _this$props5.className,
          disabled = _this$props5.disabled;
      var isOpen = this.state.isOpen;
      return _react["default"].createElement("div", _extends({
        className: (0, _mergeClassNames["default"])(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className)
      }, this.eventProps, {
        onFocus: this.onFocus,
        ref: function ref(_ref) {
          if (!_ref) {
            return;
          }

          _this3.wrapper = _ref;
        }
      }), this.renderInputs(), this.renderClock());
    }
  }, {
    key: "eventProps",
    get: function get() {
      return (0, _makeEventProps["default"])(this.props);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isOpen !== prevState.isOpenProps) {
        return {
          isOpen: nextProps.isOpen,
          isOpenProps: nextProps.isOpen
        };
      }

      return null;
    }
  }]);

  return TimePicker;
}(_react.PureComponent);

exports["default"] = TimePicker;
var iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 19,
  height: 19,
  viewBox: '0 0 19 19',
  stroke: 'black',
  strokeWidth: 2
};

var ClockIcon = _react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__clock-button__icon ").concat(baseClassName, "__button__icon"),
  fill: "none"
}), _react["default"].createElement("circle", {
  cx: "9.5",
  cy: "9.5",
  r: "7.5"
}), _react["default"].createElement("path", {
  d: "M9.5 4.5 v5 h4"
}));

var ClearIcon = _react["default"].createElement("svg", _extends({}, iconProps, {
  className: "".concat(baseClassName, "__clear-button__icon ").concat(baseClassName, "__button__icon")
}), _react["default"].createElement("line", {
  x1: "4",
  x2: "15",
  y1: "4",
  y2: "15"
}), _react["default"].createElement("line", {
  x1: "15",
  x2: "4",
  y1: "4",
  y2: "15"
}));

TimePicker.defaultProps = {
  clearIcon: ClearIcon,
  clockIcon: ClockIcon,
  closeClock: true,
  isOpen: null,
  maxDetail: 'minute'
};

var isValue = _propTypes["default"].oneOfType([_propTypes2.isTime, _propTypes["default"].instanceOf(Date)]);

TimePicker.propTypes = {
  amPmAriaLabel: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  clearAriaLabel: _propTypes["default"].string,
  clearIcon: _propTypes["default"].node,
  clockAriaLabel: _propTypes["default"].string,
  clockClassName: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  clockIcon: _propTypes["default"].node,
  closeClock: _propTypes["default"].bool,
  disableClock: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  format: _propTypes["default"].string,
  hourAriaLabel: _propTypes["default"].string,
  hourPlaceholder: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool,
  locale: _propTypes["default"].string,
  maxDetail: _propTypes["default"].oneOf(allViews),
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  minuteAriaLabel: _propTypes["default"].string,
  minutePlaceholder: _propTypes["default"].string,
  name: _propTypes["default"].string,
  nativeInputAriaLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onClockClose: _propTypes["default"].func,
  onClockOpen: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  secondAriaLabel: _propTypes["default"].string,
  secondPlaceholder: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([isValue, _propTypes["default"].arrayOf(isValue)])
};

/***/ }),

/***/ "./node_modules/react-time-picker/dist/entry.js":
/*!******************************************************!*\
  !*** ./node_modules/react-time-picker/dist/entry.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! react-clock/dist/Clock.css */ "./node_modules/react-clock/dist/Clock.css");

var _TimePicker = _interopRequireDefault(__webpack_require__(/*! ./TimePicker */ "./node_modules/react-time-picker/dist/TimePicker.js"));

__webpack_require__(/*! ./TimePicker.css */ "./node_modules/react-time-picker/dist/TimePicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// File is created during build phase and placed in dist directory
// eslint-disable-next-line import/no-unresolved
var _default = _TimePicker["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-time-picker/dist/shared/dateFormatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/shared/dateFormatter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatter = getFormatter;

var _getUserLocale = _interopRequireDefault(__webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/prefer-default-export */
function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || (0, _getUserLocale["default"])(), options);
  };
}

/***/ }),

/***/ "./node_modules/react-time-picker/dist/shared/dates.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/shared/dates.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert12to24 = convert12to24;
exports.convert24to12 = convert24to12;

function convert12to24(hour12, amPm) {
  var hour24 = parseInt(hour12, 10);

  if (amPm === 'am' && hour24 === 12) {
    hour24 = 0;
  } else if (amPm === 'pm' && hour24 < 12) {
    hour24 += 12;
  }

  return hour24;
}

function convert24to12(hour24) {
  var hour12 = hour24 % 12 || 12;
  return [hour12, hour24 < 12 ? 'am' : 'pm'];
}

/***/ }),

/***/ "./node_modules/react-time-picker/dist/shared/propTypes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/shared/propTypes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValueType = exports.isTime = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var allViews = ['hour', 'minute', 'second'];
var allValueTypes = [].concat(allViews);
var hourOptionalSecondsRegExp = /^(([0-1])?[0-9]|2[0-3]):[0-5][0-9](:([0-5][0-9]))?$/;

var isTime = function isTime(props, propName, componentName) {
  var time = props[propName];

  if (time) {
    if (!hourOptionalSecondsRegExp.test(time)) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate === "undefined" ? "undefined" : _typeof(minDate), "` supplied to `").concat(componentName, "`, expected time in HH:mm(:ss) format."));
    }
  } // Everything is fine


  return null;
};

exports.isTime = isTime;

var isValueType = _propTypes["default"].oneOf(allValueTypes);

exports.isValueType = isValueType;

/***/ }),

/***/ "./node_modules/react-time-picker/dist/shared/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-time-picker/dist/shared/utils.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAmPmLabels = getAmPmLabels;
exports.safeMin = safeMin;
exports.safeMax = safeMax;
exports.callIfDefined = void 0;

var _dateFormatter = __webpack_require__(/*! ./dateFormatter */ "./node_modules/react-time-picker/dist/shared/dateFormatter.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Calls a function, if it's defined, with specified arguments
 * @param {Function} fn
 * @param {Object} args
 */
var callIfDefined = function callIfDefined(fn) {
  if (fn && typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    fn.apply(void 0, args);
  }
};

exports.callIfDefined = callIfDefined;
var nines = ['9', '٩'];
var ninesRegExp = new RegExp("[".concat(nines.join(''), "]"));
var amPmFormatter = (0, _dateFormatter.getFormatter)({
  hour: 'numeric'
});

function getAmPmLabels(locale) {
  var amString = amPmFormatter(locale, new Date(2017, 0, 1, 9));
  var pmString = amPmFormatter(locale, new Date(2017, 0, 1, 21));

  var _amString$split = amString.split(ninesRegExp),
      _amString$split2 = _slicedToArray(_amString$split, 2),
      am1 = _amString$split2[0],
      am2 = _amString$split2[1];

  var _pmString$split = pmString.split(ninesRegExp),
      _pmString$split2 = _slicedToArray(_pmString$split, 2),
      pm1 = _pmString$split2[0],
      pm2 = _pmString$split2[1];

  if (pm2 !== undefined) {
    // If pm2 is undefined, nine was not found in pmString - this locale is not using 12-hour time
    if (am1 !== pm1) {
      return [am1, pm1].map(function (el) {
        return el.trim();
      });
    }

    if (am2 !== pm2) {
      return [am2, pm2].map(function (el) {
        return el.trim();
      });
    }
  } // Fallback


  return ['AM', 'PM'];
}

function isValidNumber(num) {
  return num !== null && num !== false && !Number.isNaN(Number(num));
}

function safeMin() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return Math.min.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
}

function safeMax() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return Math.max.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
}

/***/ }),

/***/ "./node_modules/update-input-width/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/update-input-width/dist/esm/index.js ***!
  \***********************************************************/
/*! exports provided: getFontShorthand, measureText, updateInputWidth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontShorthand", function() { return getFontShorthand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureText", function() { return measureText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputWidth", function() { return updateInputWidth; });
var allowedVariants = ['normal', 'small-caps'];
/**
 * Gets font CSS shorthand property given element.
 *
 * @param {HTMLElement} element Element to get font CSS shorthand property from
 */

function getFontShorthand(element) {
  var style = window.getComputedStyle(element);

  if (style.font) {
    return style.font;
  }

  var isFontDefined = style['font-family'] !== '';

  if (!isFontDefined) {
    return '';
  }

  var fontVariant = allowedVariants.includes(style['font-variant']) ? style['font-variant'] : 'normal';
  return "".concat(style['font-style'], " ").concat(fontVariant, " ").concat(style['font-weight'], " ").concat(style['font-size'], " / ").concat(style['line-height'], " ").concat(style['font-family']);
}
/**
 * Measures text width given text and font CSS shorthand.
 *
 * @param {String} text Text to measure
 * @param {String} font Font to use when measuring the text
 */

function measureText(text, font) {
  var canvas = measureText.canvas || (measureText.canvas = document.createElement('canvas'));
  var context = canvas.getContext('2d'); // Context type not supported

  if (!context) {
    return null;
  }

  context.font = font;

  var _context$measureText = context.measureText(text),
      width = _context$measureText.width;

  return Math.ceil(width);
}
/**
 * Updates input element width to fit its content given input element
 * @param {HTMLInputElement} element
 */

function updateInputWidth(element) {
  if (typeof window === 'undefined') {
    return null;
  }

  var font = getFontShorthand(element);
  var text = element.value || element.placeholder;
  var width = measureText(text, font);

  if (width === null) {
    return null;
  }

  element.style.width = "".concat(width, "px");
  return width;
}
/* harmony default export */ __webpack_exports__["default"] = (updateInputWidth);

/***/ })

}]);