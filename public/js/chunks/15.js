(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/coreui/src/images/logo/kiu-logo.png":
/*!*******************************************************!*\
  !*** ./resources/coreui/src/images/logo/kiu-logo.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/kiu-logo.png?9c6e38e56071ba59ca42078cfed5bca2";

/***/ }),

/***/ "./resources/coreui/src/views/Pages/Apply/Apply.js":
/*!*********************************************************!*\
  !*** ./resources/coreui/src/views/Pages/Apply/Apply.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/coreui/node_modules/reactstrap/es/index.js");
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


 // import {register} from './../../../functions/UserFunctions'

var validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

var validateForm = function validateForm(errors) {
  var valid = true;
  Object.values(errors).forEach(function (val) {
    return val.length > 0 && (valid = false);
  });
  return valid;
};

var Apply = /*#__PURE__*/function (_Component) {
  _inherits(Apply, _Component);

  var _super = _createSuper(Apply);

  function Apply() {
    var _this;

    _classCallCheck(this, Apply);

    _this = _super.call(this);

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
        // case 'fullName': 
        //   errors.fullName = 
        //     value.length < 5
        //       ? 'Full Name must be at least 5 characters long!'
        //       : '';
        //   break;
        case 'email':
          errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
          break;

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
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMsg: '',
      errors: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      alert_message: '',
      avatar: __webpack_require__(/*! ./../../../images/logo/kiu-logo.png */ "./resources/coreui/src/images/logo/kiu-logo.png"),
      kiu_logo: 'KIU Logo'
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Apply, [{
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

      if (this.state.first_name == "" || this.state.last_name == "" || this.state.email == "" || this.state.password == "" || this.state.confirmPassword == "") {
        this.setState({
          alert_message: "error"
        });
        this.setState({
          errorMsg: "Please fill all required fields"
        }); // validate check if theres no error in the form 
      } else if (validateForm(this.state.errors)) {
        var newUser = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password
        };
        axios.post('api/user/apply', newUser, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          if (response.data.success) {
            console.log("The form is correct");

            _this2.setState({
              alert_message: "success"
            });

            _this2.props.history.push('/login');
          } else {
            console.log(response.data.data);
            var _response$data$data = response.data.data,
                first_name = _response$data$data.first_name,
                last_name = _response$data$data.last_name,
                email = _response$data$data.email,
                password = _response$data$data.password; // if email error is returned, loop through it and display else display normal error

            if (email) {
              email.map(function (emailErr) {
                _this2.setState({
                  alert_message: "error"
                });

                _this2.setState({
                  errorMsg: emailErr
                });
              });
            } else {
              _this2.setState({
                alert_message: "error"
              });

              _this2.setState({
                errorMsg: "Please fill form correctly"
              });
            }
          }
        })["catch"](function (err) {
          console.log(err); // this.setState({alert_message:"success"});

          _this2.setState({
            alert_message: "error"
          });

          _this2.setState({
            errorMsg: "Please fill form correctly"
          });
        });
      } else {
        console.error(this.state.errors.email, ", ", this.state.errors.password);
        this.setState({
          alert_message: "error"
        });
        this.setState({
          errorMsg: "Please fill form correctly"
        });
      }
    } // this.setState({alert_message:"success"})
    //           }).catch(error=>{
    //               this.setState({alert_message:"error"});
    //           })

  }, {
    key: "render",
    value: function render() {
      var errors = this.state.errors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app flex-row align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: "9",
        lg: "7",
        xl: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb-3 mx-auto text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "",
        src: this.state.avatar,
        alt: this.state.kiu_logo,
        width: "110"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        className: "mx-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
        className: "p-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        noValidate: true,
        onSubmit: this.onSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Create an Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted"
      }, "Create your account and begin registration process"), this.state.alert_message == "success" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
        color: "success"
      }, "Registration Successful") : null, this.state.alert_message == "error" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
        color: "danger"
      }, this.state.errorMsg) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-user"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "first_name",
        placeholder: "Enter First Name",
        value: this.state.first_name,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-user"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "last_name",
        placeholder: "Enter Last Name",
        value: this.state.last_name,
        onChange: this.onChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], null, "@", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        name: "email",
        placeholder: "Enter Email",
        value: this.state.email,
        onChange: this.onChange // onBlur={this.onChange}
        ,
        noValidate: true
      })), errors.email.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        style: {
          marginBottom: 25
        },
        className: "mr-1",
        color: "danger"
      }, errors.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
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
      })), errors.password.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        style: {
          marginBottom: 25
        },
        className: "mr-1",
        color: "danger"
      }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        className: "mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-lock"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "password",
        placeholder: "Confirm password",
        name: "confirmPassword",
        value: this.state.confirmPassword,
        onChange: this.onChange // onBlur={this.onChange}
        ,
        noValidate: true
      })), errors.confirmPassword.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        style: {
          marginBottom: 25
        },
        className: "mr-1",
        color: "danger"
      }, errors.confirmPassword), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-lg kiu-btn btn-block"
      }, "Apply"))))))));
    }
  }]);

  return Apply;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Apply);

/***/ })

}]);