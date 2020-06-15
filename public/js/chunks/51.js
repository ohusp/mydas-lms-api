(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./resources/coreui/src/views/Theme/Colors/Colors.js":
/*!***********************************************************!*\
  !*** ./resources/coreui/src/views/Theme/Colors/Colors.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./resources/coreui/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./resources/coreui/node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/coreui/dist/js/coreui-utilities */ "./resources/coreui/node_modules/@coreui/coreui/dist/js/coreui-utilities.js");
/* harmony import */ var _coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}







var ThemeView = /*#__PURE__*/function (_Component) {
  _inherits(ThemeView, _Component);

  var _super = _createSuper(ThemeView);

  function ThemeView(props) {
    var _this;

    _classCallCheck(this, ThemeView);

    _this = _super.call(this, props);
    _this.state = {
      bgColor: 'rgb(255, 255, 255)'
    };
    return _this;
  }

  _createClass(ThemeView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elem = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this).parentNode.firstChild;
      var color = window.getComputedStyle(elem).getPropertyValue('background-color');
      this.setState({
        bgColor: color || this.state.bgColor
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "w-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-muted"
      }, "HEX:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "font-weight-bold"
      }, Object(_coreui_coreui_dist_js_coreui_utilities__WEBPACK_IMPORTED_MODULE_4__["rgbToHex"])(this.state.bgColor))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "text-muted"
      }, "RGB:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "font-weight-bold"
      }, this.state.bgColor))));
    }
  }]);

  return ThemeView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ThemeColor = /*#__PURE__*/function (_Component2) {
  _inherits(ThemeColor, _Component2);

  var _super2 = _createSuper(ThemeColor);

  function ThemeColor() {
    _classCallCheck(this, ThemeColor);

    return _super2.apply(this, arguments);
  }

  _createClass(ThemeColor, [{
    key: "render",
    // constructor(props) {
    //   super(props);
    // }
    value: function render() {
      // const { className, children, ...attributes } = this.props
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'theme-color w-75 rounded mb-3');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xl: "2",
        md: "4",
        sm: "6",
        xs: "12",
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes,
        style: {
          paddingTop: '75%'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeView, null));
    }
  }]);

  return ThemeColor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Colors = /*#__PURE__*/function (_Component3) {
  _inherits(Colors, _Component3);

  var _super3 = _createSuper(Colors);

  function Colors() {
    _classCallCheck(this, Colors);

    return _super3.apply(this, arguments);
  }

  _createClass(Colors, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-drop"
      }), " Theme colors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Primary Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Secondary Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-success"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Success Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-danger"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Danger Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-warning"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Warning Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Info Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-light"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Light Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-dark"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Brand Dark Color"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-drop"
      }), " Grays"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 100 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-200"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 200 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-300"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 300 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-400"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 400 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-500"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 500 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-600"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 600 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-700"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 700 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-800"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 800 Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-gray-900"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Gray 900 Color"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-drop"
      }), " Additional colors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-blue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Blue Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-light-blue"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Light Blue Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-indigo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Indigo Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-purple"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Purple Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-pink"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Pink Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-red"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Red Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-orange"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Orange Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-yellow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Yellow Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-green"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Green Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-teal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Teal Color")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThemeColor, {
        className: "bg-cyan"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Cyan Color"))))));
    }
  }]);

  return Colors;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Colors);

/***/ })

}]);