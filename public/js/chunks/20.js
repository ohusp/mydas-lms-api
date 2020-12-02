(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./resources/coreui/src/assets/img/brand/sygnet.svg":
/*!**********************************************************!*\
  !*** ./resources/coreui/src/assets/img/brand/sygnet.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sygnet.svg?c8d5c2d9c0e8849271af0664df052817";

/***/ }),

/***/ "./resources/coreui/src/containers/DefaultLayout/DefaultHeader.js":
/*!************************************************************************!*\
  !*** ./resources/coreui/src/containers/DefaultLayout/DefaultHeader.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _images_logo_cam_medics_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/logo/cam-medics-logo.png */ "./resources/coreui/src/images/logo/cam-medics-logo.png");
/* harmony import */ var _images_logo_cam_medics_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_logo_cam_medics_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_brand_sygnet_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/brand/sygnet.svg */ "./resources/coreui/src/assets/img/brand/sygnet.svg");
/* harmony import */ var _assets_img_brand_sygnet_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_brand_sygnet_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2-react */ "./node_modules/sweetalert2-react/dist/sweetalert-react.min.js");
/* harmony import */ var sweetalert2_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-js-pagination */ "./node_modules/react-js-pagination/dist/Pagination.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
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










var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
var defaultProps = {};
var login_from = localStorage.getItem("login_from");

var DefaultHeader = /*#__PURE__*/function (_Component) {
  _inherits(DefaultHeader, _Component);

  var _super = _createSuper(DefaultHeader);

  function DefaultHeader(props) {
    var _this;

    _classCallCheck(this, DefaultHeader);

    _this = _super.call(this, props); // this.toggleViewCart = this.toggleViewCart.bind(this);
    // this.onChangeQty    = this.onChangeQty.bind(this);

    _this.state = {
      token: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.auth_token : "",
      id: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.id : "",
      username: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.username : "",
      user_type: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.user_type : "",
      // ////////////////////////////////////////////////////
      // snumber: 1,
      // items_list: [],
      product_in_cart: "0" // qty: "1",
      // primaryViewCart: false,

    };
    return _this;
  }

  _createClass(DefaultHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios.get("/api/patient/product_in_cart/get/" + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this2.setState({
            product_in_cart: json.data.data
          });
        } else {}
      })["catch"](function (error) {// redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        // console.error(`An Error Occuredd! ${error}`);
      });
    } // onChangeQty(e)   { this.setState({ qty:e.target.value  }, this.calculateSubtotal) }
    // calculateSubtotal(){
    //   alert(this.state.qty)
    // }
    // itemUpdate(e, item_id){
    //   // const item_id1 = item_id;
    //   // const qty   = e.target.value;
    //   const product_data ={
    //     item_id1 : item_id, 
    //     qty: e.target.value
    //   }
    //   axios.post(`/api/patient/product_qty/update/`+this.state.id+`?token=${this.state.token}`, product_data)
    //   .then(response => {
    //     return response;
    //   })
    //   .then(json => {
    //     if (json.data.success) {
    //       this.setState({
    //         successMessage: json.data.data,
    //         showSuccess: true
    //       }, this.componentDidMount);
    //     } else{
    //       this.setState({
    //         successMessage: json.data.data,
    //         showError: true
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     this.setState({
    //       showError: true
    //     });
    //   });
    //   // alert("item_id: "+ item_id1);
    //   // alert("qty: "+ qty);
    //   // this.setState({   }, this.componentDidMount)
    // }
    // /////////////// VIEW APPOINTMENTS
    // toggleViewCart() {
    //   this.setState({
    //     primaryViewCart: !this.state.primaryViewCart,
    //   });
    // }
    // viewCart()
    // {
    //   axios.get(`/api/patient/product_in_cart/get_all/`+this.state.id+`?token=${this.state.token}`)
    //   .then(response => {
    //     return response;
    //   })
    //   .then(json => {
    //     if (json.data.success) {
    //       this.setState({ 
    //         items_list: json.data.data,
    //         // itemsCountPerPage_appointments: json.data.data.per_page,
    //         // totalItemsCount_appointments: json.data.data.total,
    //         // activePage_appointments: json.data.data.current_page
    //       }, this.toggleViewCart());
    //     } else {
    //     }
    //   })
    //   .catch(error => {
    //     // redirect user to previous page if user does not have autorization to the page
    //     // hashHistory.push('/premontessori');
    //     console.error(`An Error Occuredd! ${error}`);
    //   });
    // }

  }, {
    key: "render",
    value: function render() {
      var _this3 = this; // eslint-disable-next-line


      var _this$props = this.props,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["children"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarToggler"], {
        className: "d-lg-none",
        display: "md",
        mobile: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppNavbarBrand"], {
        full: {
          src: _images_logo_cam_medics_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
          width: 89,
          height: 25,
          alt: 'CoreUI Logo'
        },
        minimized: {
          src: _assets_img_brand_sygnet_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
          width: 30,
          height: 30,
          alt: 'CoreUI Logo'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_coreui_react__WEBPACK_IMPORTED_MODULE_3__["AppSidebarToggler"], {
        className: "d-md-down-none",
        display: "lg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        className: "ml-auto",
        navbar: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        className: "d-md-down-none"
      }, login_from === "patient" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "#",
        className: "nav-link",
        replace: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/cart"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-cart-plus fa-2x mt-4"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
        pill: true,
        color: "danger",
        style: {
          padding: "5px 10px",
          fontSize: "12px"
        }
      }, this.state.product_in_cart)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["UncontrolledDropdown"], {
        nav: true,
        direction: "down"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        nav: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: '../../assets/img/avatars/6.jpg',
        className: "img-avatar",
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        right: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        onClick: function onClick(e) {
          return _this3.props.onLogout(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-lock"
      }), " Logout")))));
    }
  }]);

  return DefaultHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DefaultHeader);

/***/ }),

/***/ "./resources/coreui/src/images/logo/cam-medics-logo.png":
/*!**************************************************************!*\
  !*** ./resources/coreui/src/images/logo/cam-medics-logo.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cam-medics-logo.png?20d7a32b8eafe9ebd1a3a00687b3ed63";

/***/ })

}]);