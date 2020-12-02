(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./resources/coreui/src/images/logo/cam-medics-logo.png":
/*!**************************************************************!*\
  !*** ./resources/coreui/src/images/logo/cam-medics-logo.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cam-medics-logo.png?20d7a32b8eafe9ebd1a3a00687b3ed63";

/***/ }),

/***/ "./resources/coreui/src/views/Pages/ResetPasswordPatient/ResetPasswordPatient.js":
/*!***************************************************************************************!*\
  !*** ./resources/coreui/src/views/Pages/ResetPasswordPatient/ResetPasswordPatient.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aes */ "./node_modules/aes/index.js");
/* harmony import */ var aes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aes__WEBPACK_IMPORTED_MODULE_5__);
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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



 // import {login} from './../../../functions/UserFunctions'





var validateForm = function validateForm(errors) {
  var valid = true;
  Object.values(errors).forEach(function (val) {
    return val.length > 0 && (valid = false);
  });
  return valid;
};

var ResetPasswordPatient = /*#__PURE__*/function (_Component) {
  _inherits(ResetPasswordPatient, _Component);

  var _super = _createSuper(ResetPasswordPatient);

  function ResetPasswordPatient(props) {
    var _this;

    _classCallCheck(this, ResetPasswordPatient);

    _this = _super.call(this, props);

    _this.onChange = function (e) {
      _this.onChangeState(e); // this.handleChange(e)

    };

    _this.handleChange = function (event) {
      event.preventDefault();
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;
      var errors = _this.state.errors; // called to empty thec alert on top of the form

      _this.setState({
        alert_message: ""
      });

      switch (name) {
        case 'password':
          errors.password = value.length < 8 ? 'Password must be at least 8 characters long!' : '';
          break;

        case 'confirmPassword':
          if (_this.state.password !== value) {
            errors.confirmPassword = "Password and Confirm Password does not match.";
          } else {
            errors.confirmPassword = "";
          }

          break;

        default:
          break;
      }

      _this.setState(_defineProperty({
        errors: errors
      }, name, value));
    };

    _this.state = {
      // first_name: '',
      // last_name: '',
      // email: '',
      password: '',
      confirmPassword: '',
      url_string: '',
      errorMsg: '',
      errors: {
        // email: '',
        password: '',
        confirmPassword: ''
      },
      // alert_message:'',
      avatar: __webpack_require__(/*! ./../../../images/logo/cam-medics-logo.png */ "./resources/coreui/src/images/logo/cam-medics-logo.png"),
      Cam_Medics: 'Cam-Medics Logo'
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ResetPasswordPatient, [{
    key: "onChangeState",
    // onchange for setting state
    value: function onChangeState(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
      this.handleChange(e);
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault(); // validate check if fields are empty

      if (this.state.password == "" || this.state.confirmPassword == "") {
        this.setState({
          alert_message: "error"
        });
        this.setState({
          errorMsg: "Please fill all required fields"
        }); // validate check if theres no error in the form 
      } else if (validateForm(this.state.errors)) {
        var newUser = {
          password: this.state.password,
          url_string: this.state.url_string
        };
        var encrypted_user_data = Object(aes__WEBPACK_IMPORTED_MODULE_5__["AesEncrypt"])(newUser, 'where do you go when you by yourself');
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('api/patient/resetPassword', {
          user: encrypted_user_data
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          // console.log(response);
          if (response.data.success) {
            // console.log("Password Reset Successful")
            _this2.setState({
              alert_message: "success"
            }); // redirect after 3 secs


            var timer = setTimeout(function () {
              _this2.props.history.push('/login');
            }, 3000);
            return function () {
              return clearTimeout(timer);
            };
          } else {// console.log(response.data.data)
            // const { first_name, last_name, email, password } = response.data.data;
          }
        })["catch"](function (err) {
          // console.log(err)
          // this.setState({alert_message:"success"});
          _this2.setState({
            alert_message: "error"
          });

          _this2.setState({
            errorMsg: "Please fill form correctly"
          });
        });
      } else {
        console.error(this.state.errors.password);
        this.setState({
          alert_message: "error"
        });
        this.setState({
          errorMsg: "Please fill form correctly"
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      try {
        // get the url param
        var url_string = window.location.href;
        var url_string = url_string.split('?')[1];
        var url_string = url_string.split('=')[1]; // pass into state for later use

        this.state.url_string = url_string; // post param to check if reset password has been allowed

        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('api/patient/check', {
          url_string: url_string
        }).then(function (response) {
          // console.log(response);
          return response;
        }).then(function (json) {
          // if password reset is allowed stay on page, else redirect
          if (json.data.success) {} else _this3.props.history.push("/login");
        })["catch"](function (err) {
          // if theres error redirect to login page
          // console.log(err)
          _this3.props.history.push("/login");
        });
      } catch (error) {
        // if theres error redirect to login page
        // console.log(error)
        this.props.history.push("/login");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var errors = this.state.errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app flex-row align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        md: "8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb-3 mx-auto text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "",
        src: this.state.avatar,
        alt: this.state.Cam_Medics,
        width: "160"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "p-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        noValidate: true,
        onSubmit: this.onSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Reset Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted"
      }, "Enter new password"), this.state.alert_message == "success" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
        color: "success"
      }, "Password Reset Successful") : null, this.state.alert_message == "error" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
        color: "danger"
      }, this.state.errorMsg) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-lock"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        placeholder: "Enter Password",
        value: this.state.password,
        onChange: this.onChange // onBlur={this.onChange}
        ,
        noValidate: true
      })), errors.password.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        style: {
          marginBottom: 25
        },
        className: "mr-1",
        color: "danger"
      }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-lock"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "password",
        placeholder: "Confirm password",
        name: "confirmPassword",
        value: this.state.confirmPassword,
        onChange: this.onChange // onBlur={this.onChange}
        ,
        noValidate: true
      })), errors.confirmPassword.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        style: {
          marginBottom: 25
        },
        className: "mr-1",
        color: "danger"
      }, errors.confirmPassword), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-lg kiu-btn btn-block"
      }, "Reset Password")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "6",
        className: "text-right"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: "6",
        className: "text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/login"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "link",
        className: "px-0 kiu-color"
      }, " Sign In")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "text-white kiu-bg py-5 d-md-down-none",
        style: {
          width: '44%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Hospital without borders where innovative technology meets premium care.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "It's all about you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Don't Have An Account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/register"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "mt-3 cam-btn-white-bg",
        active: true,
        tabIndex: -1
      }, "Register Now!")))))))))));
    }
  }]);

  return ResetPasswordPatient;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResetPasswordPatient);

/***/ })

}]);