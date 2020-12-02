(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./resources/coreui/src/views/PharmListOrders/PharmListOrders.js":
/*!***********************************************************************!*\
  !*** ./resources/coreui/src/views/PharmListOrders/PharmListOrders.js ***!
  \***********************************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_external_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-external-link */ "./node_modules/react-external-link/dist/index.esm.js");
/* harmony import */ var sweetalert2_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2-react */ "./node_modules/sweetalert2-react/dist/sweetalert-react.min.js");
/* harmony import */ var sweetalert2_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_time_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-time-picker */ "./node_modules/react-time-picker/dist/entry.js");
/* harmony import */ var react_time_picker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_time_picker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-paypal-button-v2 */ "./node_modules/react-paypal-button-v2/lib/index.js");
/* harmony import */ var react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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

var PharmListOrders = /*#__PURE__*/function (_Component) {
  _inherits(PharmListOrders, _Component);

  var _super = _createSuper(PharmListOrders);

  function PharmListOrders(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, PharmListOrders);

    _this = _super.call(this, props);
    _this.toggleViewOrder = _this.toggleViewOrder.bind(_assertThisInitialized(_this)); // this.toggleViewProduct    = this.toggleViewProduct.bind(this);

    _this.togglePrimary = _this.togglePrimary.bind(_assertThisInitialized(_this));
    _this.onChangeMessageBox = _this.onChangeMessageBox.bind(_assertThisInitialized(_this));
    _this.sendMessage = _this.sendMessage.bind(_assertThisInitialized(_this));
    _this.state = (_this$state = {
      token: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.auth_token : "",
      id: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.id : "",
      username: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.username : "",
      first_name: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.first_name : "",
      last_name: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.last_name : "",
      middle_name: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.middle_name : "",
      status: "",
      created_at: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.created_at : "",
      user_type: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.user_type : "",
      // ////////////////////////////////////////////////////
      order_list: [],
      number: 1,
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
      currentPage2: ''
    }, _defineProperty(_this$state, "status", '1'), _defineProperty(_this$state, "cart_list", []), _defineProperty(_this$state, "number_cart", 1), _defineProperty(_this$state, "activePage_cart", 1), _defineProperty(_this$state, "itemsCountPerPage_cart", 1), _defineProperty(_this$state, "totalItemsCount_cart", 1), _defineProperty(_this$state, "pageRangeDisplayed_cart", 3), _defineProperty(_this$state, "currentPage2_cart", ''), _defineProperty(_this$state, "status_cart", '1'), _defineProperty(_this$state, "patient_id", ""), _defineProperty(_this$state, "patient_name", ""), _defineProperty(_this$state, "pharm_id", ""), _defineProperty(_this$state, "pharm_name", ""), _defineProperty(_this$state, "product_id", ""), _defineProperty(_this$state, "message_box", ""), _defineProperty(_this$state, "successMessage", "Successful"), _defineProperty(_this$state, "errorMessage", "Failed"), _defineProperty(_this$state, "primaryViewOrder", false), _defineProperty(_this$state, "primaryViewProduct", false), _this$state);
    _this.handlePageChange = _this.handlePageChange.bind(_assertThisInitialized(_this)); // this.handlePageChangeViewOrder=this.handlePageChangeViewOrder.bind(this);

    return _this;
  } // fetch data from db


  _createClass(PharmListOrders, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/pharm/order_list/" + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this2.setState({
            order_list: json.data.data.data,
            itemsCountPerPage: json.data.data.per_page,
            totalItemsCount: json.data.data.total,
            activePage: json.data.data.current_page
          });
        } else {}
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // Pagination handler

  }, {
    key: "handlePageChange",
    value: function handlePageChange(pageNumber) {
      var _this3 = this; // this.setState({activePage: pageNumber});


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/pharm/order_list/" + this.state.id + "?token=".concat(this.state.token, "&page=") + pageNumber).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this3.setState({
            order_list: json.data.data.data,
            itemsCountPerPage: json.data.data.per_page,
            totalItemsCount: json.data.data.total,
            activePage: json.data.data.current_page
          });
        } else {}
      });
    }
  }, {
    key: "viewOrder",
    value: function viewOrder(order_id, total_cart) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/pharm/order/get/" + order_id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this4.setState({
            cart_list: json.data.data,
            total_cart: total_cart // pharm_id: json.data.data[0].pharm_id,

          }, _this4.toggleViewOrder);
        } else {}
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } ////////////////////////////////////////////////////////////////////////

  }, {
    key: "toggleViewOrder",
    value: function toggleViewOrder() {
      this.setState({
        primaryViewOrder: !this.state.primaryViewOrder // pharm_id: pharm_id,
        // pharm_name: pharm_name,

      }, this.pharmProducts);
    }
  }, {
    key: "delivered",
    value: function delivered(order_id, patient_id) {
      var _this5 = this;

      var delivered = {
        order_id: order_id
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/pharm/product/delivered/" + patient_id + '/' + this.state.id + "?token=".concat(this.state.token), delivered).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this5.setState({
            successMessage: "Order delivered successfully",
            showSuccess: true
          }, _this5.componentDidMount);
        } else {
          _this5.setState({
            errorMessage: "Order delivery failed",
            showError: true
          });
        }
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // //////////////////////////////////////////////////////////////////////
    // /////////////// Patient chat

  }, {
    key: "togglePrimary",
    value: function togglePrimary(patient_id, patient_name) {
      this.setState({
        patient_id: patient_id,
        patient_name: patient_name
      }); // if the variable passed is closed do not call axios

      if (patient_id == "close") {
        clearInterval(this.interval);
        this.setState({
          primary: !this.state.primary
        });
      } else {
        this.setState({
          primary: !this.state.primary
        }, this.getMessages1(patient_id));
      }
    }
  }, {
    key: "getMessages1",
    value: function getMessages1(patient_id) {
      var _this6 = this;

      this.getMessages2();
      this.interval = setInterval(function () {
        return _this6.getMessages2(patient_id);
      }, 5000);
    } // get messages

  }, {
    key: "getMessages2",
    value: function getMessages2(patient_id) {
      var _this7 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/pharm/patient/chat/message/get/" + patient_id + '/' + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this7.setState({
            message_list: json.data.messages.message
          }, _this7.loadMessages(json.data.messages.message));
        } else {}
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // get messages from db, do a foreach on the array of messages

  }, {
    key: "loadMessages",
    value: function loadMessages(passMessageArray) {
      // empty message area before adding new message
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#message_area').empty();
      passMessageArray.forEach(this.splitMessage);
    } // split the messages to know that of pharm and patient

  }, {
    key: "splitMessage",
    value: function splitMessage(item) {
      var item_split = item.split("|-|");
      var from = item_split[0].slice(1);
      var id = item_split[1];
      var message = item_split[2];
      var fileName = item_split[3].slice(0, -1);

      if (from == "pharm") {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + message + "</li>");
      } else if (from == "patient") {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + message + "</li>");
      } else if (from == "pharm_file") {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<a href='" + message + "' target='_blank'><li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + fileName + "<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
      } else if (from == "patient_file") {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<a href='" + message + "' target='_blank'><li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + fileName + "<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
      }
    }
  }, {
    key: "onChangeMessageBox",
    value: function onChangeMessageBox(e) {
      this.setState({
        message_box: e.target.value
      });
    } // send chat message

  }, {
    key: "sendMessage",
    value: function sendMessage() {
      // const message ={ message_box : this.state.message_box }
      if (this.state.message_box != "") {
        var message = this.state.message_box;
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + message + "</li>"); // auto scroll to bottom of page

        jquery__WEBPACK_IMPORTED_MODULE_5___default()('#message_area').animate({
          scrollTop: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#message_area')[0].scrollHeight
        }, 2000);
        var send_message = {
          message: message
        };
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/pharm/patient/chat/message/send/" + this.state.patient_id + '/' + this.state.id + "?token=".concat(this.state.token), send_message).then(function (response) {
          return response;
        }).then(function (json) {
          if (json.status == 200) {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_box").val("");
          } else {}
        })["catch"](function (error) {
          // redirect user to previous page if user does not have autorization to the page
          // hashHistory.push('/premontessori');
          console.error("An Error Occuredd! ".concat(error));
        });
      }
    }
  }, {
    key: "trigerSendFile",
    value: function trigerSendFile() {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#send_file').trigger('click');
    }
  }, {
    key: "sendFile",
    value: function sendFile(e) {
      this.setState({
        send_file: e.target.files[0]
      }, this.submitSendFile);
    }
  }, {
    key: "submitSendFile",
    value: function submitSendFile(e) {
      var _this8 = this; // e.preventDefault() // Stop form submit


      this.uploadSendFile().then(function (response) {
        if (response.data.success) {// this.setState({
          //   successMessage: "Profile picture uploaded successfully",
          //   showSuccess: true
          // });
        } else {// this.setState({
            //   errorMessage: response.data.data.profile_picture,
            //   showError: true
            // });
          }
      })["catch"](function (error) {
        _this8.setState({
          showError: true
        });
      });
    }
  }, {
    key: "uploadSendFile",
    value: function uploadSendFile() {
      var url = '/api/pharm/patient/chat/file/send/' + this.state.patient_id + '/' + this.state.id + "?token=".concat(this.state.token);
      var formData = new FormData();
      formData.append('send_file', this.state.send_file);
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      return Object(axios__WEBPACK_IMPORTED_MODULE_4__["post"])(url, formData, config);
    } // //////////////////////////////////////////////////////////////////////////

  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var product_image = this.state.product_image;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        sm: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Orders"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        lg: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), " List of Orders", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_external_link__WEBPACK_IMPORTED_MODULE_8__["ExternalLink"], {
        href: "https://live.cammedics.com/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        size: "sm",
        color: "primary",
        style: {
          "float": "right"
        }
      }, "Start a Video Chat")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          "float": "right"
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "S/N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "NAME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "EMAIL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ORDER NO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "PAYER ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "AMOUNT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "CURRENCY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "DATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPage = this.state.activePage * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.order_list.map(function (order) {
        if (order.status == 1) {
          _this9.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "danger"
          }, "Not Delivered");
        } else {
          _this9.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "success"
          }, "Delivered");
        }

        var order_id = order.id;
        var patient_id = order.patient_id;
        var patient_username = order.patient_username;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: order.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this9.state.currentPage++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.billing_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.billing_email_address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.billing_orderID), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.billing_payerID), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.billing_cart_total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.billing_amount_currency), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, order.billing_create_time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _this9.state.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this9.viewOrder(order_id, order.billing_cart_total);
          },
          className: "btn-facebook btn-brand icon mr-1 mb-1",
          style: {
            marginRight: "15px"
          }
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-eye"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this9.togglePrimary(patient_id, patient_username);
          },
          className: "btn-facebook btn-brand icon mr-1 mb-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-comments"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this9.delivered(order_id, order.patient_id);
          },
          className: "btn-facebook btn-brand icon mr-1 mb-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-check"
        }))));
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
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        isOpen: this.state.primaryViewOrder,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1200px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], {
        toggle: function toggle() {
          return _this9.toggleViewOrder("close", "close");
        }
      }, "View Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Product Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "S/N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ITEM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "CATEGORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "QUANTITY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "UNIT PRICE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "SUBTOTAL"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPage = this.state.activePage * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.cart_list.map(function (item) {
        if (item.status == 1) {
          _this9.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "success"
          }, "Completed");
        } else {
          _this9.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "danger"
          }, "Not Complete");
        }

        var item_id = item.id; // const item_name  = item.name;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: item.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this9.state.currentPage++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.sub_total));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          "float": "right",
          fontSize: "16px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        style: {
          color: "#ca333a"
        }
      }, "TOTAL: $ ", this.state.total_cart, "(USD)")))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this9.toggleViewOrder("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        isOpen: this.state.primary,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], {
        toggle: function toggle() {
          return _this9.togglePrimary("close", "close");
        }
      }, "Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "message_area",
        style: {
          maxHeight: "300px",
          overflowX: "auto"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "textarea",
        id: "message_box",
        rows: "2",
        onChange: this.onChangeMessageBox,
        placeholder: "type ..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-telegram fa-lg cammedics-color",
        style: {
          cursor: "pointer",
          fontSize: "3em"
        },
        onClick: this.sendMessage
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-paperclip fa-lg cammedics-color",
        style: {
          cursor: "pointer",
          fontSize: "2em",
          "float": "right"
        },
        onClick: this.trigerSendFile
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "file",
        color: "primary",
        id: "send_file",
        style: {
          display: "none"
        } // onChange={this.onChangeProfilePicture}
        ,
        onChange: function onChange(e) {
          _this9.sendFile(e);
        }
      })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this9.togglePrimary("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "sweet_alert1",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this9.setState({
            showSuccess: true
          });
        }
      }, "Alert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(sweetalert2_react__WEBPACK_IMPORTED_MODULE_9___default.a, {
        show: this.state.showSuccess // title="Demo"
        ,
        type: "success",
        confirmButtonColor: "#2167ac",
        animation: "true",
        text: this.state.successMessage,
        onConfirm: function onConfirm() {
          return _this9.setState({
            showSuccess: false
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "sweet_alert2",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this9.setState({
            showError: true
          });
        }
      }, "Alert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(sweetalert2_react__WEBPACK_IMPORTED_MODULE_9___default.a, {
        show: this.state.showError // title="Demo"
        ,
        type: "warning",
        confirmButtonColor: "#2167ac",
        animation: "true",
        text: this.state.errorMessage,
        onConfirm: function onConfirm() {
          return _this9.setState({
            showError: false
          });
        }
      }));
    }
  }]);

  return PharmListOrders;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PharmListOrders);

/***/ })

}]);