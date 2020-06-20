(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./resources/coreui/src/views/Base/Switches/Switches.js":
/*!**************************************************************!*\
  !*** ./resources/coreui/src/views/Base/Switches/Switches.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/coreui/node_modules/reactstrap/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./resources/coreui/node_modules/@coreui/react/es/index.js");
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





var Switches = /*#__PURE__*/function (_Component) {
  _inherits(Switches, _Component);

  var _super = _createSuper(Switches);

  function Switches() {
    _classCallCheck(this, Switches);

    return _super.apply(this, arguments);
  }

  _createClass(Switches, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'secondary',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'success',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'warning',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'info',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'danger',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'light',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'dark',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch pills"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'secondary',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'success',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'warning',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'info',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'danger',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'light',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'dark',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        defaultChecked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'secondary',
        defaultChecked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'success',
        defaultChecked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'warning',
        defaultChecked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'info',
        defaultChecked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'danger',
        defaultChecked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'light',
        defaultChecked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'dark',
        defaultChecked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary'
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "disabled")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        checked: true,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'secondary',
        checked: true,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'success',
        checked: true,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'warning',
        checked: true,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'info',
        checked: true,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'danger',
        checked: true,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'light',
        checked: true,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'dark',
        checked: true,
        disabled: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "outline=\"alt\"")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        checked: true,
        outline: 'alt'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'secondary',
        checked: true,
        outline: 'alt'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'success',
        checked: true,
        outline: 'alt'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'warning',
        checked: true,
        outline: 'alt'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'info',
        checked: true,
        outline: 'alt'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'danger',
        checked: true,
        outline: 'alt'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'light',
        checked: true,
        outline: 'alt'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'dark',
        checked: true,
        outline: 'alt'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        outline: 'alt',
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "label")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'secondary',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'success',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'warning',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'info',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'danger',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'light',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'dark',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "outline=\"alt\" label")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'primary',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'secondary',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'success',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'warning',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'info',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'danger',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'light',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'dark',
        defaultChecked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'primary',
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "3d Switch ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "outline=\"alt\" label")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'primary',
        defaultChecked: true,
        label: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'secondary',
        defaultChecked: true,
        label: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'success',
        defaultChecked: true,
        label: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'warning',
        defaultChecked: true,
        label: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'info',
        defaultChecked: true,
        label: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'danger',
        defaultChecked: true,
        label: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'light',
        defaultChecked: true,
        label: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'dark',
        defaultChecked: true,
        label: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        outline: 'alt',
        color: 'primary',
        label: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch outline", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'secondary',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'success',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'warning',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'info',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'danger',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'light',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'dark',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: true,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch outline pills", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'secondary',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'success',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'warning',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'info',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'danger',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'light',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'dark',
        outline: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: true,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch outline alternative", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'secondary',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'success',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'warning',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'info',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'danger',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'light',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'dark',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: 'alt',
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch outline alternative - pills", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'secondary',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'success',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'warning',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'info',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'danger',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'light',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'dark',
        outline: 'alt',
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: 'alt',
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'secondary',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'success',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'warning',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'info',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'danger',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'light',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'dark',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        label: true,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text pills", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'secondary',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'success',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'warning',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'info',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'danger',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'light',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'dark',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        label: true,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'secondary',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'success',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'warning',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'info',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'danger',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'light',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'dark',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: true,
        label: true,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline pills", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'secondary',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'success',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'warning',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'info',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'danger',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'light',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'dark',
        outline: true,
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: true,
        label: true,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative pills", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'secondary',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'success',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'warning',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'info',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'danger',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'light',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'dark',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: 'alt',
        label: true,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative pills", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'secondary',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'success',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'warning',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'info',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'danger',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'light',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'dark',
        outline: 'alt',
        label: true,
        checked: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: 'alt',
        label: true,
        disabled: true
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'secondary',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'success',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'warning',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'info',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'danger',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'light',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'dark',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: true,
        disabled: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative pills", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'secondary',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'success',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'warning',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'info',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'danger',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'light',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'dark',
        outline: true,
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: true,
        disabled: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'secondary',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'success',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'warning',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'info',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'danger',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'light',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'dark',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        color: 'primary',
        outline: 'alt',
        disabled: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12",
        md: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Switch with text outline alternative pills", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://coreui.io/pro/react/",
        className: "badge badge-danger"
      }, "CoreUI Pro")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'secondary',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'success',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'warning',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'info',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'danger',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'light',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'dark',
        outline: 'alt',
        checked: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: 'pill',
        color: 'primary',
        outline: 'alt',
        disabled: true,
        label: true,
        dataOn: "\u2713",
        dataOff: "\u2715"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, "Sizes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        hover: true,
        striped: true,
        className: "table-align-middle mb-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Example"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Props"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Large"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        checked: true,
        size: 'lg'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Add ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=", 'lg'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Normal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        checked: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_2__["AppSwitch"], {
        className: 'mx-1',
        variant: '3d',
        color: 'primary',
        checked: true,
        size: 'sm'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Add ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "size=", 'sm'))))))))));
    }
  }]);

  return Switches;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Switches);

/***/ })

}]);