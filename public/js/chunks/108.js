(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "./resources/coreui/src/views/Paystack/Paystack.js":
/*!*********************************************************!*\
  !*** ./resources/coreui/src/views/Paystack/Paystack.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-js-pagination */ "./node_modules/react-js-pagination/dist/Pagination.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-paypal-button-v2 */ "./node_modules/react-paypal-button-v2/lib/index.js");
/* harmony import */ var react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__);
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




 // import axios from 'axios';






var hashHistory = Object(history__WEBPACK_IMPORTED_MODULE_3__["createHashHistory"])();

var Paystack = /*#__PURE__*/function (_Component) {
  _inherits(Paystack, _Component);

  var _super = _createSuper(Paystack);

  function Paystack(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, Paystack);

    _this = _super.call(this, props); // ////////////////MODAL
    // bing toggle functions and values

    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.togglePrimary = _this.togglePrimary.bind(_assertThisInitialized(_this)); // this.toggle_identification    = this.toggle_identification.bind(this);
    // this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);
    // bind input values on change

    _this.onChangeLabName = _this.onChangeLabName.bind(_assertThisInitialized(_this));
    _this.onChangeLabDescription = _this.onChangeLabDescription.bind(_assertThisInitialized(_this));
    _this.onChangeLabPrice = _this.onChangeLabPrice.bind(_assertThisInitialized(_this)); // this.onChangeUsername     =this.onChangeUsername.bind(this);
    // this.onChangeEmail        =this.onChangeEmail.bind(this);
    // this.onChangeZipCode      =this.onChangeZipCode.bind(this);
    // this.onChangeTelephone    =this.onChangeTelephone.bind(this);
    // this.onChangePharmCountry     =this.onChangePharmCountry.bind(this);
    // this.onChangeDistrictProvinceState  =this.onChangeDistrictProvinceState.bind(this);
    // this.onChangePharmAddress         =this.onChangePharmAddress.bind(this);
    // /////////////////////////////////////////////////////////////////
    // //////////// IDENTITY //////////////////////////////
    // this.onChangeCompanyLogo         =this.onChangeCompanyLogo.bind(this);

    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onSubmitPayStackPayment = _this.onSubmitPayStackPayment.bind(_assertThisInitialized(_this)); // this.onSubmitMedicalHistory = this.onSubmitMedicalHistory.bind(this);
    // this.onSubmitShareMedHistory = this.onSubmitShareMedHistory.bind(this);
    // ///////////// IDENTITY SUBMISSION /////////////////
    // this.onSubmitCompanyLogo = this.onSubmitCompanyLogo.bind(this);
    // this.fileUploadIdPassport = this.fileUploadIdPassport.bind(this)
    // this.idPassportDetails = this.idPassportDetails.bind(this)

    _this.state = (_this$state = {
      token: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.auth_token : "",
      id: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.id : "",
      status: "",
      created_at: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.created_at : "",
      user_type: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.user_type : "",
      lab_name: "",
      lab_description: "",
      lab_price: "",
      email: "",
      // ////////////////////////////////////////////////////
      lab_test_list: [],
      number: 1,
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
      currentPage2: ''
    }, _defineProperty(_this$state, "status", '1'), _defineProperty(_this$state, "collapse", false), _defineProperty(_this$state, "collapse_identification", false), _defineProperty(_this$state, "collapse_app_instructions", false), _defineProperty(_this$state, "fadeIn", true), _defineProperty(_this$state, "timeout", 300), _defineProperty(_this$state, "startDate", new Date()), _defineProperty(_this$state, "primary", false), _this$state);
    _this.handlePageChange = _this.handlePageChange.bind(_assertThisInitialized(_this));
    return _this;
  } // fetch data from db


  _createClass(Paystack, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/test/list?token=".concat(this.state.token)).then(function (response) {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this2.setState({
            lab_test_list: json.data.data.data,
            itemsCountPerPage: json.data.data.per_page,
            totalItemsCount: json.data.data.total,
            activePage: json.data.data.current_page
          }, _this2.getPersonalData());
        } else alert("Login Failed!");
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // Pagination handler

  }, {
    key: "handlePageChange",
    value: function handlePageChange(pageNumber) {
      var _this3 = this;

      console.log("active page is ".concat(pageNumber)); // this.setState({activePage: pageNumber});

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/test/list?token=".concat(this.state.token, "&page=") + pageNumber).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this3.setState({
            lab_test_list: json.data.data.data,
            itemsCountPerPage: json.data.data.per_page,
            totalItemsCount: json.data.data.total,
            activePage: json.data.data.current_page
          });
        } else alert("Login Failed!");
      });
    }
  }, {
    key: "getPersonalData",
    value: function getPersonalData() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/get/" + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        console.log("It came back");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          console.log("It came back 2");

          _this4.setState({
            first_name: json.data.data.first_name,
            last_name: json.data.data.last_name,
            middle_name: json.data.data.middle_name,
            email: json.data.data.email
          }, _this4.getMedicalRec);
        } else {}
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // toggle collapse and expand personal data

  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        collapse: !this.state.collapse
      });
    } // ON Change of first name input

  }, {
    key: "onChangeLabName",
    value: function onChangeLabName(e) {
      this.setState({
        lab_name: e.target.value
      });
    }
  }, {
    key: "onChangeLabDescription",
    value: function onChangeLabDescription(e) {
      this.setState({
        lab_description: e.target.value
      });
    }
  }, {
    key: "onChangeLabPrice",
    value: function onChangeLabPrice(e) {
      this.setState({
        lab_price: e.target.value
      });
    } // ///////////////////////////////////////////////////////////

  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this5 = this; // alert("Hello World");


      e.preventDefault();
      var lab_data = {
        name: this.state.lab_name,
        description: this.state.lab_description,
        price: this.state.lab_price
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/lab/test/add/" + this.state.id + "?token=".concat(this.state.token), lab_data) // axios.post(`api/products/add?token=${this.state.token}`, product_data)
      // axios.post('api/products/add', product_data, {
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer '+ `${this.state.token}`
      //     },      
      // })  
      .then(function (response) {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      }).then(function (json) {
        // this.componentDidMount();
        if (json.data.success) {
          _this5.setState({
            last_inserted_id: json.data.data.last_inserted_id
          });
        } else alert("Login Failed!");
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    }
  }, {
    key: "takeTest",
    value: function takeTest() {
      this.setState({}, this.togglePrimary());
    }
  }, {
    key: "togglePrimary",
    value: function togglePrimary() {
      // console.log(id);
      this.setState({
        primary: !this.state.primary // patient_id: id,
        // patient_name: name,

      });
    }
  }, {
    key: "onSubmitPayStackPayment",
    value: function onSubmitPayStackPayment(e) {
      var _this6 = this; // alert("Hello World");
      //   e.preventDefault();


      var form = {
        email: "mendes.paul28@gmail.com",
        orderID: "345",
        amount: "90000",
        quantity: "2",
        currency: "NGN"
      }; // axios.post(`/api/pay/`+this.state.id+`?token=${this.state.token}`, form)
      // axios.post(`api/products/add?token=${this.state.token}`, product_data)

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('https://api.paystack.co/transaction/initialize', form, {
        headers: {
          // 'Content-Type': 'application/json',
          // 'Authorization': 'Bearer '+ `${this.state.token}`
          // 'Authorization': 'Bearer sk_test_d10dab80f78c1d15afef5e852bf936e997ebfdf8'
          // 'X-Auth-Token': 'Bearer sk_test_d10dab80f78c1d15afef5e852bf936e997ebfdf8',
          authorization: "Bearer sk_test_d10dab80f78c1d15afef5e852bf936e997ebfdf8",
          //replace TEST SECRET KEY with your actual test secret 
          //key from paystack
          "content-type": "application/json",
          "cache-control": "no-cache"
        }
      }).then(function (response) {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      }).then(function (json) {
        // this.componentDidMount();
        console.log("json.data.status");
        console.log(json.data.status);
        console.log("json.data.data");
        console.log(json.data.data);
        console.log("json.data.reference");
        console.log(json.data.data.reference);

        if (json.data.status) {
          axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://api.paystack.co/transaction/verify/' + json.data.data.reference, {
            headers: {
              authorization: "Bearer sk_test_d10dab80f78c1d15afef5e852bf936e997ebfdf8",
              //replace TEST SECRET KEY with your actual test secret 
              //key from paystack
              "content-type": "application/json",
              "cache-control": "no-cache"
            }
          }).then(function (response) {
            console.log("ROI Cartoon 556");
            console.log(response);
            return response;
          }).then(function (json) {
            // this.componentDidMount();
            if (json.data.success) {
              _this6.setState({
                last_inserted_id: json.data.data.last_inserted_id
              });
            } else alert("Login Failed!");
          })["catch"](function (error) {
            // redirect user to previous page if user does not have autorization to the page
            hashHistory.push('/premontessori');
            console.error("An Error Occuredd! ".concat(error));
          });
        } else alert("Login Failed!");
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: "12",
        sm: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Laboratory Tests"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_7__["PayPalButton"], {
        amount: "25.01" // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        ,
        onSuccess: function onSuccess(details, data) {
          alert("Transaction completed by " + details.payer.name.given_name + " " + details.payer.name.surname + "order ID" + data.orderID);
          console.log("details");
          alert(details);
          console.log(details);
          console.log("data");
          alert(data);
          console.log(data); // OPTIONAL: Call your server to save the transaction

          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        xs: "12",
        lg: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), " Laboratory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPage = this.state.activePage * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.lab_test_list.map(function (test) {
        if (test.status == 1) {
          _this7.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
            color: "success"
          }, "Completed");
        } else {
          _this7.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
            color: "danger"
          }, "Not Complete");
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: test.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this7.state.currentPage++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, test.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, test.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, test.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this7.takeTest(test.id);
          },
          className: "btn-facebook btn-brand icon mr-1 mb-1"
        }, "Take Test")));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default.a, {
        activePage: this.state.activePage,
        itemsCountPerPage: this.state.itemsCountPerPage,
        totalItemsCount: this.state.totalItemsCount,
        pageRangeDisplayed: this.state.pageRangeDisplayed,
        onChange: this.handlePageChange,
        itemClass: "page-item",
        linkClass: "page-link"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
        isOpen: this.state.primary,
        toggle: function toggle() {
          return _this7.togglePrimary("close", "close");
        },
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
        toggle: function toggle() {
          return _this7.togglePrimary("close", "close");
        }
      }, "Payment Methods"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Select payment method"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        size: "sm",
        onClick: function onClick() {
          return _this7.onSubmitPayStackPayment();
        },
        className: "btn-facebook btn-brand icon mr-1 mb-1"
      }, "Paystack")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this7.togglePrimary("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.onSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit",
        size: "sm",
        color: "primary"
      }, "Update Personal Details")));
    }
  }]);

  return Paystack;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Paystack);

/***/ })

}]);