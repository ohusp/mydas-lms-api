(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./resources/coreui/src/images/logo/cam-medics-logo.png":
/*!**************************************************************!*\
  !*** ./resources/coreui/src/images/logo/cam-medics-logo.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cam-medics-logo.png?20d7a32b8eafe9ebd1a3a00687b3ed63";

/***/ }),

/***/ "./resources/coreui/src/views/Pages/ProvidersAgreement/ProvidersAgreement.js":
/*!***********************************************************************************!*\
  !*** ./resources/coreui/src/views/Pages/ProvidersAgreement/ProvidersAgreement.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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


 // import {register} from './../../../functions/UserFunctions'

var ProvidersAgreement = /*#__PURE__*/function (_Component) {
  _inherits(ProvidersAgreement, _Component);

  var _super = _createSuper(ProvidersAgreement);

  function ProvidersAgreement() {
    var _this;

    _classCallCheck(this, ProvidersAgreement);

    _this = _super.call(this);
    _this.state = {
      avatar: __webpack_require__(/*! ./../../../images/logo/cam-medics-logo.png */ "./resources/coreui/src/images/logo/cam-medics-logo.png"),
      Cam_Medics: 'CamMedics Logo'
    };
    return _this;
  }

  _createClass(ProvidersAgreement, [{
    key: "render",
    value: function render() {
      var errors = this.state.errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-row align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "justify-content-center",
        style: {
          textAlign: "justify",
          textJustify: "inter-word",
          fontSize: "16px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "12",
        lg: "12",
        xl: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb-3 mx-auto text-center",
        style: {
          marginTop: "50px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "",
        src: this.state.avatar,
        alt: this.state.Cam_Medics,
        width: "160"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        style: {
          marginTop: "50px",
          marginBottom: "50px"
        }
      }, "PROVIDERS' AGREEMENT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Agreement is made between International Medical Law Centre, St Kitts and Nevis, W.I., operators of CamMedics.com (The platform) on one hand \xA0and providers/ vendors of medical services via telemedicine using the platform, \xA0on the other."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The provider/ vendor undertakes that by clicking \"I agree\" at the bottom of this agreement, a binding legal contract is established and the terms are activated and becomes enforceable against the parties as if the formal contract was duly signed and executed in compliance with the relevant Laws."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xB7\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 The purpose of this Agreement is to regulate the utilization of the technology provided on the platform that delivers medical services via telemedicine to patients from providers like doctors hospitals, pharmacies, medical laboratories, Ports, and other ancillary service providers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xB7\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 The goal is to minimize the inconvenience, of time, travel and finances for both patient and provider."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xB7\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 Terms of Agreement", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Provider' Responsibility", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Provider shall ensure that only qualified and duly licensed personnel shall provide medical services to the Client. The provider by offering services on the platform represents that all ethical and \xA0legal qualifications and licenses required have been first \xA0obtained from the relevant authorizing and licensing bodies/ agencies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The provider when engaging or utilizing the platform, shall ensure that only properly licensed medical healthcare professionals shall be employed in conducting a diagnosis, procedure, treatment, or other healthcare services necessary in connection with this telemedicine services Agreement."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The provider shall have complete authority, management, and control over including, but not limited to, clinical diagnosis, procedure, treatment required or any other professional healthcare services necessary in connection with the provision of the telemedicine services in accordance with the relevant laws.\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "FEES", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Patients booking appointments on the platform, shall pay the total sum of consultation or Service fees plus handling fees for each consultation.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Consultation or service fees shall be determined by providers, while handing fees shall be fixed by operator/platform based on a percentage of the provider's consultation/ service fee."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The consultation/service fee shall be paid to the Providers, less statutory or operational deductions such as banking and payment platform charges.. The operator/platform shall maintain a complete record of all transactions and due payments which shall be made available to the provider upon demand."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "All Payments to the provider shall be due upon the completion of the consultation process \xA0with each patient.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "The process shall be complete upon the satisfactory delivery of product and service to the patient.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Payments may be subject to inter-banking, payment platforms or transactional approval delays."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Operator's Responsibility", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "The operator shall not control, direct, interfere, nor supervise the Provider in connection with the provision of medical services.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Limitation Against Practice of Medicine", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Notwithstanding any provision contained herein, this Agreement is not intended to"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "1.\xA0\xA0\xA0 Supervise any non-licensed medical professional or individual in the practice of medicine.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "2.\xA0\xA0\xA0 Constitute the use of the medical license by anyone other than the licensed physician or other duly licensed healthcare professional.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "3.\xA0\xA0\xA0 Perform any act that is contrary to state and federal laws.\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Provider shall remain entirely independent of operator/ platform as to", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "4.\xA0\xA0\xA0 Diagnosis and treatment of patients,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "5.\xA0\xA0\xA0 Prescription, order, or administration of any drug or medicine, and", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "6.\xA0\xA0\xA0 All other medical, professional and ethical affairs of Provider."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Confidential Information", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Any proprietary information such as, but not limited to relating to business operations, services, technology, software, among others, that the Provider may acquire from the Operator through the performance of this Agreement which is not considered public knowledge shall be recognized as Confidential Information. \xA0Provider shall not in any way disclose the Confidential Information without the prior written consent of the Operator In case of uncertainty whether such information is considered confidential, it shall always be presumed confidential for the benefit and protection of the Parties."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Arbitration", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Any disagreement pursuant to this agreement shall be subject to an Arbitration first before any further action."))))));
    }
  }]);

  return ProvidersAgreement;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProvidersAgreement);

/***/ })

}]);