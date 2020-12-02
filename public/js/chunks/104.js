(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./resources/coreui/src/views/PatientListLabs/PatientListLabs.js":
/*!***********************************************************************!*\
  !*** ./resources/coreui/src/views/PatientListLabs/PatientListLabs.js ***!
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

var PatientListLabs = /*#__PURE__*/function (_Component) {
  _inherits(PatientListLabs, _Component);

  var _super = _createSuper(PatientListLabs);

  function PatientListLabs(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, PatientListLabs);

    _this = _super.call(this, props); // ////////////////MODAL

    _this.onChange = function (time) {
      return _this.setState({
        time: time
      });
    };

    _this.handleChange = function (date) {
      _this.setState({
        startDate: date
      });
    };

    _this.togglePrimary = _this.togglePrimary.bind(_assertThisInitialized(_this));
    _this.toggleViewLab = _this.toggleViewLab.bind(_assertThisInitialized(_this));
    _this.toggleTakeTest = _this.toggleTakeTest.bind(_assertThisInitialized(_this));
    _this.toggleViewAppointments = _this.toggleViewAppointments.bind(_assertThisInitialized(_this));
    _this.toggleMakePayment = _this.toggleMakePayment.bind(_assertThisInitialized(_this)); // this.toggleEnterReport = this.toggleEnterReport.bind(this);
    // bing toggle functions and values
    // this.toggle = this.toggle.bind(this);
    // this.toggle_identification    = this.toggle_identification.bind(this);
    // this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);

    _this.onChangeDate = _this.onChangeDate.bind(_assertThisInitialized(_this));
    _this.onChangeTime = _this.onChangeTime.bind(_assertThisInitialized(_this));
    _this.onChangeSubject = _this.onChangeSubject.bind(_assertThisInitialized(_this));
    _this.onChangeMessage = _this.onChangeMessage.bind(_assertThisInitialized(_this)); // this.onChangeAllergiesUpdate            =this.onChangeAllergiesUpdate.bind(this);
    // this.onChangeBloodGroupUpdate           =this.onChangeBloodGroupUpdate.bind(this);
    // this.onChangeUnderlyingConditionsUpdate =this.onChangeUnderlyingConditionsUpdate.bind(this);
    // this.onChangeFamilyMedicalHistoryUpdate =this.onChangeFamilyMedicalHistoryUpdate.bind(this);
    // this.onChangeHypertensiveUpdate         =this.onChangeHypertensiveUpdate.bind(this);
    // this.onChangeDiabeticUpdate             =this.onChangeDiabeticUpdate.bind(this);
    // this.onChangePrescriptionUpdate         =this.onChangePrescriptionUpdate.bind(this);
    // this.onChangeLabTestUpdate              =this.onChangeLabTestUpdate.bind(this);
    // this.onChangeNoteUpdate                 =this.onChangeNoteUpdate.bind(this);

    _this.onChangeMessageBox = _this.onChangeMessageBox.bind(_assertThisInitialized(_this));
    _this.sendMessage = _this.sendMessage.bind(_assertThisInitialized(_this)); // /////////////////////////////////////////////////////////////////

    _this.onSubmitBookAppointment = _this.onSubmitBookAppointment.bind(_assertThisInitialized(_this)); // medical record tab toggle
    // this.toggleMedRecTab = this.toggleMedRecTab.bind(this);

    _this.onChangeDate = _this.onChangeDate.bind(_assertThisInitialized(_this));
    _this.onChangeTime = _this.onChangeTime.bind(_assertThisInitialized(_this));
    _this.state = (_this$state = {
      token: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.auth_token : "",
      id: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.id : "",
      username: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.username : "",
      first_name: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.first_name : "",
      last_name: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.last_name : "",
      middle_name: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.middle_name : "",
      // store array of data when a patient is clicked 
      // medications_currently_using: [],
      // allergies: [],
      // blood_group: [],
      // underlying_conditions: [],
      // family_medical_history: [],
      // hypertensive: [],
      // diabetic: [],
      // prescription: [],
      // lab_test: [],
      // note: [],
      // store new data entered to be stored/submitted
      // medications_currently_using_update: "",
      // allergies_update: "",
      // blood_group_update: "",
      // underlying_conditions_update: "",
      // family_medical_history_update: "",
      // hypertensive_update: "",
      // diabetic_update: "",
      // prescription_update: "",
      // lab_test_update: "",
      // note_update: "",
      currentTime: new Date().toLocaleString(),
      // for chat
      message_box: "",
      // for append chat message
      // ////////////////////////////////////////////////////
      labs_list: [],
      number: 1,
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
      currentPage2: '',
      status: '1',
      appointments_list: [],
      number_appointments: 1,
      activePage_appointments: 1,
      itemsCountPerPage_appointments: 1,
      totalItemsCount_appointments: 1,
      pageRangeDisplayed_appointments: 3,
      currentPage2_appointments: '',
      status_appointments: '1'
    }, _defineProperty(_this$state, "status", ""), _defineProperty(_this$state, "created_at", localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.created_at : ""), _defineProperty(_this$state, "user_type", localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.user_type : ""), _defineProperty(_this$state, "collapse", false), _defineProperty(_this$state, "collapse_identification", false), _defineProperty(_this$state, "collapse_app_instructions", false), _defineProperty(_this$state, "fadeIn", true), _defineProperty(_this$state, "timeout", 300), _defineProperty(_this$state, "lab_id", ""), _defineProperty(_this$state, "lab_name", ""), _defineProperty(_this$state, "startDate", new Date()), _defineProperty(_this$state, "date", ""), _defineProperty(_this$state, "time", '10:00'), _defineProperty(_this$state, "subject", ""), _defineProperty(_this$state, "message", ""), _defineProperty(_this$state, "primary", false), _defineProperty(_this$state, "primaryViewLab", false), _defineProperty(_this$state, "primaryTakeTest", false), _defineProperty(_this$state, "primaryViewAppointments", false), _defineProperty(_this$state, "primaryMakePayment", false), _defineProperty(_this$state, "enterReport", false), _defineProperty(_this$state, "showSuccess", false), _defineProperty(_this$state, "showError", false), _defineProperty(_this$state, "successMessage", "Successful"), _defineProperty(_this$state, "errorMessage", "Failed"), _defineProperty(_this$state, "test_fee", ""), _defineProperty(_this$state, "country_handling_fee", ""), _defineProperty(_this$state, "total_fee", ""), _defineProperty(_this$state, "chatBtn", ""), _defineProperty(_this$state, "lab_test_list", []), _defineProperty(_this$state, "number_lab_test", 1), _defineProperty(_this$state, "activePage_lab_test", 1), _defineProperty(_this$state, "itemsCountPerPage_lab_test", 1), _defineProperty(_this$state, "totalItemsCount_lab_test", 1), _defineProperty(_this$state, "pageRangeDisplayed_lab_test", 3), _defineProperty(_this$state, "currentPage2_lab_test", ''), _defineProperty(_this$state, "status_lab_test", '1'), _defineProperty(_this$state, "lab_result_list", []), _defineProperty(_this$state, "number_lab_result", 1), _defineProperty(_this$state, "activePage_lab_result", 1), _defineProperty(_this$state, "itemsCountPerPage_lab_result", 1), _defineProperty(_this$state, "totalItemsCount_lab_result", 1), _defineProperty(_this$state, "pageRangeDisplayed_lab_result", 3), _defineProperty(_this$state, "currentPage2_lab_result", ''), _defineProperty(_this$state, "status_lab_result", '1'), _defineProperty(_this$state, "test_id", ""), _this$state);
    _this.handlePageChange = _this.handlePageChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PatientListLabs, [{
    key: "onChangeDate",
    // medical record tab toggle
    // toggleMedRecTab(tab) {
    //   if (this.state.activeTab !== tab) {
    //     this.setState({
    //       activeTab: tab
    //     });
    //   }
    // }
    value: function onChangeDate(e) {
      this.setState({
        date: e.target.value
      });
    }
  }, {
    key: "onChangeTime",
    value: function onChangeTime(e) {
      this.setState({
        time: e.target.value
      });
    }
  }, {
    key: "onChangeSubject",
    value: function onChangeSubject(e) {
      this.setState({
        subject: e.target.value
      });
    }
  }, {
    key: "onChangeMessage",
    value: function onChangeMessage(e) {
      this.setState({
        message: e.target.value
      });
    } // onChangeAllergiesUpdate(e)      { this.setState({ allergies_update:e.target.value  }); }
    // onChangeBloodGroupUpdate(e)     { this.setState({ blood_group_update:e.target.value  }); }
    // onChangeUnderlyingConditionsUpdate(e)     { this.setState({ underlying_conditions_update:e.target.value  }); }
    // onChangeFamilyMedicalHistoryUpdate(e)     { this.setState({ family_medical_history_update:e.target.value  }); }
    // onChangeHypertensiveUpdate(e)     { this.setState({ hypertensive_update:e.target.value  }); }
    // onChangeDiabeticUpdate(e)         { this.setState({ diabetic_update:e.target.value  }); }
    // onChangePrescriptionUpdate(e)     { this.setState({ prescription_update:e.target.value  }); }
    // onChangeLabTestUpdate(e)          { this.setState({ lab_test_update:e.target.value  }); }
    // onChangeNoteUpdate(e)             { this.setState({ note_update:e.target.value  }); }

  }, {
    key: "onChangeDate",
    value: function onChangeDate(e) {
      this.setState({
        date: e.target.value
      });
    }
  }, {
    key: "onChangeTime",
    value: function onChangeTime(e) {
      this.setState({
        time: e.target.value
      });
    } // fetch data from db

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/labs_list/" + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this2.setState({
            labs_list: json.data.data.data,
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


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/labs_list/" + this.state.id + "?token=".concat(this.state.token, "&page=") + pageNumber).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this3.setState({
            labs_list: json.data.data.data,
            itemsCountPerPage: json.data.data.per_page,
            totalItemsCount: json.data.data.total,
            activePage: json.data.data.current_page
          });
        } else {}
      });
    }
  }, {
    key: "togglePrimary",
    // toggle collapse and expand application instruction
    // toggle_app_instructions() {
    //   this.setState({ collapse_app_instructions: !this.state.collapse_app_instructions });
    // }
    // toggle collapse and expand personal data
    // toggle() {
    //   this.setState({ collapse: !this.state.collapse });
    // }
    // toggle collapse and expand identification
    // toggle_identification() {
    //   this.setState({ collapse_identification: !this.state.collapse_identification });
    // }
    // //////////////////////////////////////////////////////////////////////
    // /////////////// Patient chat
    value: function togglePrimary(lab_id, lab_name) {
      this.setState({
        lab_id: lab_id,
        lab_name: lab_name
      }); // if the variable passed is closed do not call axios

      if (lab_id == "close") {
        clearInterval(this.interval);
        this.setState({
          primary: !this.state.primary
        });
      } else {
        this.setState({
          primary: !this.state.primary
        }, this.getMessages1(lab_id));
      }
    } // get message and set interval incase of new messages

  }, {
    key: "getMessages1",
    value: function getMessages1(lab_id) {
      var _this4 = this;

      this.getMessages2(lab_id);
      this.interval = setInterval(function () {
        return _this4.getMessages2(lab_id);
      }, 5000);
    } // get messages

  }, {
    key: "getMessages2",
    value: function getMessages2(lab_id) {
      var _this5 = this; // alert("Paulo");


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/lab/chat/message/get/" + lab_id + '/' + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this5.setState({
            message_list: json.data.messages.message
          }, _this5.loadMessages(json.data.messages.message));
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
    } // split the messages to know that of lab and patient

  }, {
    key: "splitMessage",
    value: function splitMessage(item) {
      var item_split = item.split("|-|");
      var from = item_split[0].slice(1);
      var id = item_split[1];
      var message = item_split[2];
      var fileName = item_split[3].slice(0, -1);

      if (from == "patient") {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + message + "</li>");
      } else if (from == "lab") {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + message + "</li>");
      } else if (from == "patient_file") {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<a href='" + message + "' target='_blank'><li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + fileName + "<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
      } else if (from == "lab_file") {
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
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/patient/lab/chat/message/send/" + this.state.lab_id + '/' + this.state.id + "?token=".concat(this.state.token), send_message).then(function (response) {
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
    key: "sendFile",
    value: function sendFile(e) {
      this.setState({
        send_file: e.target.files[0]
      }, this.submitSendFile);
    }
  }, {
    key: "trigerSendFile",
    value: function trigerSendFile() {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#send_file').trigger('click');
    }
  }, {
    key: "submitSendFile",
    value: function submitSendFile(e) {
      var _this6 = this; // e.preventDefault() // Stop form submit


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
        _this6.setState({
          showError: true
        });
      });
    }
  }, {
    key: "uploadSendFile",
    value: function uploadSendFile() {
      var url = '/api/patient/lab/chat/file/send/' + this.state.lab_id + '/' + this.state.id + "?token=".concat(this.state.token);
      var formData = new FormData();
      formData.append('send_file', this.state.send_file);
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      return Object(axios__WEBPACK_IMPORTED_MODULE_4__["post"])(url, formData, config);
    } // //////////////////////////////////////////////////////////////////////////
    // /////////////// VIEW Lab

  }, {
    key: "toggleViewLab",
    value: function toggleViewLab() {
      this.setState({
        primaryViewLab: !this.state.primaryViewLab // lab_id: id,
        // lab_name: name,

      }, this.labTests);
    }
  }, {
    key: "viewLab",
    value: function viewLab(lab_id, name) {
      var _this7 = this;

      this.setState({
        lab_id: lab_id,
        lab_name: name
      });
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/labs/get/" + lab_id + '/' + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this7.setState({
            lab_username: json.data.lab_data.username,
            lab_name: json.data.lab_data.name,
            lab_country: json.data.lab_data.country,
            lab_district_province_state: json.data.lab_data.district_province_state,
            lab_test_carried_out: json.data.lab_data.test_carried_out,
            logo: json.data.lab_data.logo,
            status: json.data.status
          }, _this7.toggleViewLab);
        } else {
          _this7.setState({
            errorMessage: json.data.data,
            showError: true
          });
        }
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    }
  }, {
    key: "labTests",
    value: function labTests() {
      var _this8 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/test/list/" + this.state.lab_id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        _this8.labResults();

        if (json.data.success) {
          _this8.setState({
            lab_test_list: json.data.data.data,
            itemsCountPerPage_lab_test: json.data.data.per_page,
            totalItemsCount_lab_test: json.data.data.total,
            activePage_lab_test: json.data.data.current_page
          });
        } else alert("Login Failed!");
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // Pagination handler

  }, {
    key: "handlePageChangeLabTests",
    value: function handlePageChangeLabTests(pageNumber) {
      var _this9 = this; // this.setState({activePage: pageNumber});


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/test/list/" + this.state.lab_id + "?token=".concat(this.state.token, "&page=") + pageNumber).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this9.setState({
            lab_test_list: json.data.data.data,
            itemsCountPerPage_lab_test: json.data.data.per_page,
            totalItemsCount_lab_test: json.data.data.total,
            activePage_lab_test: json.data.data.current_page
          });
        } else alert("Login Failed!");
      });
    }
  }, {
    key: "labResults",
    value: function labResults() {
      var _this10 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/lab/result/list/" + this.state.id + "/" + this.state.lab_id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this10.setState({
            lab_result_list: json.data.data.data,
            itemsCountPerPage_lab_result: json.data.data.per_page,
            totalItemsCount_lab_result: json.data.data.total,
            activePage_lab_result: json.data.data.current_page
          });
        } else alert("Login Failed!");
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // Pagination handler

  }, {
    key: "handlePageChangeLabResults",
    value: function handlePageChangeLabResults(pageNumber) {
      var _this11 = this; // this.setState({activePage: pageNumber});


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/lab/result/list/" + this.state.id + "/" + this.state.lab_id + "?token=".concat(this.state.token, "&page=") + pageNumber).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this11.setState({
            lab_result_list: json.data.data.data,
            itemsCountPerPage_lab_result: json.data.data.per_page,
            totalItemsCount_lab_result: json.data.data.total,
            activePage_lab_result: json.data.data.current_page
          });
        } else alert("Login Failed!");
      });
    } // ///////////////////////// TAKE TEST ////////////////////////////////////////////////

  }, {
    key: "toggleTakeTest",
    value: function toggleTakeTest() {
      this.setState({
        primaryTakeTest: !this.state.primaryTakeTest // lab_id: id,
        // lab_name: name,

      });
    }
  }, {
    key: "takeTest",
    value: function takeTest(test_id) {
      this.setState({
        test_id: test_id
      }, this.toggleTakeTest);
    } // ///////////////////////////////////////////////////////////////////////////////////
    // /////////////// Make payment

  }, {
    key: "toggleMakePayment",
    value: function toggleMakePayment(data1, data2) {
      if (data1 == "close") {
        this.setState({
          primaryMakePayment: false
        });
      } else {
        this.setState({
          primaryMakePayment: !this.state.primaryMakePayment
        });
      }
    }
  }, {
    key: "onSubmitBookAppointment",
    value: function onSubmitBookAppointment(e) {
      var _this12 = this;

      e.preventDefault();

      if (this.state.date == "" || this.state.time == "" || this.state.subject == "" || this.state.message == "" || this.state.date == null || this.state.time == null || this.state.subject == null || this.state.message == null) {
        this.setState({
          errorMessage: "Please fill all required field",
          showError: true
        });
      } else {
        // get lab test's fee
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/test_fee/get/" + this.state.lab_id + '/' + this.state.test_id + '/' + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
          return response;
        }).then(function (json) {
          if (json.data.success) {
            if (json.data.test_fee != 0) {
              _this12.setState({
                test_fee: json.data.test_fee,
                country_handling_fee: json.data.country_handling_fee,
                total_fee: json.data.total_fee
              }, _this12.toggleMakePayment());
            } else {
              _this12.setState({
                test_fee: json.data.test_fee,
                country_handling_fee: json.data.country_handling_fee,
                total_fee: json.data.total_fee
              }, _this12.onSubmitBookAppointment3());
            }
          } else {}
        })["catch"](function (error) {
          // redirect user to previous page if user does not have autorization to the page
          // hashHistory.push('/premontessori');
          console.error("An Error Occuredd! ".concat(error));
        });
      }
    }
  }, {
    key: "onSubmitBookAppointment2",
    value: function onSubmitBookAppointment2() {
      // e.preventDefault();
      // alert("here");
      this.setState({
        successMessage: "Payment successful",
        showSuccess: true
      }, this.onSubmitBookAppointment3);
    }
  }, {
    key: "onSubmitBookAppointment3",
    value: function onSubmitBookAppointment3() {
      var _this13 = this;

      var appointment_data = {
        date: this.state.date,
        time: this.state.time,
        subject: this.state.subject,
        message: this.state.message,
        // /////////////////////////////////////////////
        billing_amount_currency: this.state.billing_amount_currency,
        billing_amount_value: this.state.billing_amount_value,
        billing_test_fee: this.state.test_fee,
        billing_country_handling_fee: this.state.country_handling_fee,
        billing_email_address: this.state.billing_email_address,
        billing_name: this.state.billing_name,
        billing_orderID: this.state.billing_orderID,
        billing_payerID: this.state.billing_payerID
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/patient/book_test_appointment/" + this.state.lab_id + '/' + this.state.test_id + '/' + this.state.id + "?token=".concat(this.state.token), appointment_data).then(function (response) {
        return response;
      }, this.toggleMakePayment("close", "close")).then(function (json) {
        if (json.data.success) {
          _this13.setState({
            successMessage: json.data.data,
            showSuccess: true
          });
        } else {
          _this13.setState({
            successMessage: json.data.data,
            showError: true
          });
        }
      })["catch"](function (error) {
        _this13.setState({
          showError: true
        });
      });
    } // /////////////// VIEW APPOINTMENTS

  }, {
    key: "toggleViewAppointments",
    value: function toggleViewAppointments() {
      this.setState({
        primaryViewAppointments: !this.state.primaryViewAppointments // lab_id: id,
        // lab_name: name,

      });
    }
  }, {
    key: "viewAppointments",
    value: function viewAppointments() {
      var _this14 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/lab_appointments/get/" + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this14.setState({
            appointments_list: json.data.data.data,
            itemsCountPerPage_appointments: json.data.data.per_page,
            totalItemsCount_appointments: json.data.data.total,
            activePage_appointments: json.data.data.current_page
          }, _this14.toggleViewAppointments());
        } else {}
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    }
  }, {
    key: "handlePageChangeAppointments",
    value: function handlePageChangeAppointments(pageNumber) {
      var _this15 = this; // this.setState({activePage: pageNumber});


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/patient/lab_appointments/get/" + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this15.setState({
            appointments_list: json.data.data.data,
            itemsCountPerPage_appointments: json.data.data.per_page,
            totalItemsCount_appointments: json.data.data.total,
            activePage_appointments: json.data.data.current_page
          });
        } else {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this16 = this; // const { product_image} = this.state


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        sm: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Laboratories"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        lg: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), " List of Laboratories", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          "float": "right"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        type: "submit",
        size: "sm",
        color: "primary",
        onClick: function onClick() {
          return _this16.viewAppointments();
        }
      }, "View Appointments"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "District/Province/State"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPage = this.state.activePage * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.labs_list.map(function (lab) {
        if (lab.status == 1) {
          _this16.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "success"
          }, "Completed");
        } else {
          _this16.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "danger"
          }, "Not Complete");
        }

        var lab_id = lab.id;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: lab.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this16.state.currentPage++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, lab.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, lab.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, lab.country), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, lab.district_province_state), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this16.viewLab(lab_id, lab.yname);
          },
          className: "btn-facebook btn-brand icon mr-1 mb-1",
          style: {
            marginRight: "15px"
          }
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-eye"
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
        isOpen: this.state.primary,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], {
        toggle: function toggle() {
          return _this16.togglePrimary("close", "close");
        }
      }, "Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "File upload must not be more than 500kb"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
          _this16.sendFile(e);
        }
      })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this16.togglePrimary("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        isOpen: this.state.primaryViewLab,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], {
        toggle: function toggle() {
          return _this16.toggleViewLab("close", "close");
        }
      }, "View Laboratory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.lab_name, " Laboratory Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Laboratory Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], {
        style: {
          marginBottom: "25px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Username: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.lab_username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.lab_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Country: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.lab_country)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroupItem"], {
        className: "justify-content-between"
      }, "District/Province/State: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.lab_district_province_state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Tests: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.test_carried_out))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        lg: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), " Laboratory Tests"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPage_lab_test = this.state.activePage_lab_test * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.lab_test_list.map(function (test) {
        if (test.status == 1) {
          _this16.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "success"
          }, "Completed");
        } else {
          _this16.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "danger"
          }, "Not Complete");
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: test.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this16.state.currentPage_lab_test++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, test.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, test.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, test.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this16.takeTest(test.id);
          },
          className: "btn-facebook btn-brand icon mr-1 mb-1"
        }, "Take Test")));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default.a, {
        activePage: this.state.activePage_lab_test,
        itemsCountPerPage: this.state.itemsCountPerPage_lab_test,
        totalItemsCount: this.state.totalItemsCount_lab_test,
        pageRangeDisplayed: this.state.pageRangeDisplayed_lab_test,
        onChange: this.handlePageChangeLabTests,
        itemClass: "page-item",
        linkClass: "page-link"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        lg: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), " My Laboratory Results"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "NAME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "RESULT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "DATE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPage2_lab_result = this.state.activePage_lab_result * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.lab_result_list.map(function (test) {
        if (test.status == 1) {
          _this16.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "success"
          }, "Completed");
        } else {
          _this16.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "danger"
          }, "Not Complete");
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: test.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this16.state.currentPage2_lab_result++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, test.lab_test_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, test.lab_result), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, test.created_at));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default.a, {
        activePage: this.state.activePage_lab_result,
        itemsCountPerPage: this.state.itemsCountPerPage_lab_result,
        totalItemsCount: this.state.totalItemsCount_lab_result,
        pageRangeDisplayed: this.state.pageRangeDisplayed_lab_result,
        onChange: this.handlePageChangeLabResults,
        itemClass: "page-item",
        linkClass: "page-link"
      })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this16.toggleViewLab("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        isOpen: this.state.primaryTakeTest,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], {
        toggle: function toggle() {
          return _this16.toggleTakeTest("close", "close");
        }
      }, "Laboratory Test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Appointment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        onSubmit: this.onSubmitBookAppointment
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Book an appointment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"), "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "date",
        id: "date",
        defaultValue: this.state.date,
        onChange: this.onChangeDate
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "select",
        id: "time",
        defaultValue: this.state.time,
        onChange: this.onChangeTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "",
        selected: true
      }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "12:00 AM TO 12:30 AM"
      }, "12:00 AM TO 12:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "12:30 AM TO 01:00 PM"
      }, "12:30 AM TO 01:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "01:00 AM TO 01:30 AM"
      }, "01:00 AM TO 01:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "01:30 AM TO 02:00 AM"
      }, "01:30 AM TO 02:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "02:00 AM TO 02:30 AM"
      }, "02:00 AM TO 02:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "03:30 AM TO 03:00 AM"
      }, "03:30 AM TO 03:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "03:00 AM TO 03:30 AM"
      }, "03:00 AM TO 03:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "03:30 AM TO 04:00 AM"
      }, "03:30 AM TO 04:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "04:00 AM TO 04:30 AM"
      }, "04:00 AM TO 04:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "04:30 AM TO 05:00 AM"
      }, "04:30 AM TO 05:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "05:00 AM TO 05:30 AM"
      }, "05:00 AM TO 05:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "05:30 AM TO 06:00 AM"
      }, "05:30 AM TO 06:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "06:00 AM TO 06:30 AM"
      }, "06:00 AM TO 06:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "06:30 AM TO 07:00 AM"
      }, "06:30 AM TO 07:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "07:00 AM TO 07:30 AM"
      }, "07:00 AM TO 07:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "07:30 AM TO 08:00 AM"
      }, "07:30 AM TO 08:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "08:00 AM TO 08:30 AM"
      }, "08:00 AM TO 08:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "08:30 AM TO 09:00 AM"
      }, "08:30 AM TO 09:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "09:00 AM TO 09:30 AM"
      }, "09:00 AM TO 09:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "09:30 AM TO 10:00 AM"
      }, "09:30 AM TO 10:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "10:00 AM TO 10:30 AM"
      }, "10:00 AM TO 10:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "10:30 AM TO 11:00 AM"
      }, "10:30 AM TO 11:00 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "11:00 AM TO 11:30 AM"
      }, "11:00 AM TO 11:30 AM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "11:30 AM TO 12:00 PM"
      }, "11:30 AM TO 12:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "12:00 PM TO 01:30 PM"
      }, "12:00 PM TO 01:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "01:30 PM TO 02:00 PM"
      }, "01:30 PM TO 02:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "02:00 PM TO 02:30 PM"
      }, "02:00 PM TO 02:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "02:30 PM TO 03:00 PM"
      }, "02:30 PM TO 03:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "03:00 PM TO 03:30 PM"
      }, "03:00 PM TO 03:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "03:30 PM TO 04:00 PM"
      }, "03:30 PM TO 04:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "04:00 PM TO 04:30 PM"
      }, "04:00 PM TO 04:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "04:30 PM TO 05:00 PM"
      }, "04:30 PM TO 05:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "05:00 PM TO 05:30 PM"
      }, "05:00 PM TO 05:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "05:30 PM TO 06:00 PM"
      }, "05:30 PM TO 06:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "06:00 PM TO 06:30 PM"
      }, "06:00 PM TO 06:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "06:30 PM TO 07:00 PM"
      }, "06:30 PM TO 07:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "07:00 PM TO 07:30 PM"
      }, "07:00 PM TO 07:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "07:30 PM TO 08:00 PM"
      }, "07:30 PM TO 08:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "08:00 PM TO 08:30 PM"
      }, "08:00 PM TO 08:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "08:30 PM TO 09:00 PM"
      }, "08:30 PM TO 09:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "09:00 PM TO 09:30 PM"
      }, "09:00 PM TO 09:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "09:30 PM TO 10:00 PM"
      }, "09:30 PM TO 10:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "10:00 PM TO 10:30 PM"
      }, "10:00 PM TO 10:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "10:30 PM TO 11:00 PM"
      }, "10:30 PM TO 11:00 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "11:00 PM TO 11:30 PM"
      }, "11:00 PM TO 11:30 PM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "11:30 PM TO 12:00 PM"
      }, "11:30 PM TO 12:00 PM")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"), "Subject")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "text",
        id: "subject",
        defaultValue: this.state.subject,
        onChange: this.onChangeSubject
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"), "Message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        type: "textarea",
        id: "message",
        rows: "4",
        defaultValue: this.state.message,
        onChange: this.onChangeMessage,
        placeholder: " enter appointment message"
      }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
        className: "form-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        type: "submit",
        size: "sm",
        color: "primary"
      }, "Book appointment")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this16.toggleTakeTest("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        isOpen: this.state.primaryViewAppointments,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], {
        toggle: function toggle() {
          return _this16.toggleViewAppointments("close", "close");
        }
      }, "View Appointments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Appointments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        onSubmit: this.onSubmitPortReport
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "S/N"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Laboratory Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Subject"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPage2_appointments = this.state.activePage_appointments * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.appointments_list.map(function (appointment) {
        // if status is 1 allow chat else disable chat that is consultation is done
        if (appointment.status == 1) {
          _this16.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "success"
          }, "Open");
          _this16.state.chatBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
            size: "sm",
            onClick: function onClick() {
              return _this16.togglePrimary(appointment.lab_id, appointment.lab_name);
            },
            className: "btn-facebook btn-brand icon mr-1 mb-1"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fa fa-comments"
          }));
        }

        if (appointment.status == 2) {
          _this16.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
            color: "danger"
          }, "Close");
          _this16.state.chatBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
            size: "sm",
            onClick: function onClick() {
              return _this16.togglePrimary(appointment.lab_id, appointment.lab_name);
            },
            className: "btn-facebook btn-brand icon mr-1 mb-1",
            disabled: true
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fa fa-comments"
          }));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: appointment.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this16.state.currentPage2_appointments++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.lab_username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.lab_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.subject), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _this16.state.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _this16.state.chatBtn));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_6___default.a, {
        activePage: this.state.activePage_appointments,
        itemsCountPerPage: this.state.itemsCountPerPage_appointments,
        totalItemsCount: this.state.totalItemsCount_appointments,
        pageRangeDisplayed: this.state.pageRangeDisplayed_appointments,
        onChange: this.handlePageChangeAppointments,
        itemClass: "page-item",
        linkClass: "page-link"
      })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this16.toggleViewAppointments("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        isOpen: this.state.primaryMakePayment,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], {
        toggle: function toggle() {
          return _this16.toggleMakePayment("close", "close");
        }
      }, "Make Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Make Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "3",
        sm: "3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "6",
        sm: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Test Fee: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        style: {
          "float": "right"
        }
      }, "$", this.state.test_fee)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Handling Fee: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        style: {
          "float": "right"
        }
      }, "$", this.state.country_handling_fee)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Total: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        style: {
          "float": "right"
        }
      }, "$", this.state.total_fee))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          marginBottom: "25px"
        }
      }, "You can pay with your paypal account or with your debit or credit card."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_paypal_button_v2__WEBPACK_IMPORTED_MODULE_11__["PayPalButton"], {
        amount: this.state.total_fee // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        ,
        onSuccess: function onSuccess(details, data) {
          _this16.state.billing_amount_currency = details.purchase_units[0].amount.currency_code;
          _this16.state.billing_amount_value = details.purchase_units[0].amount.value;
          _this16.state.billing_orderID = data.orderID;
          _this16.state.billing_payerID = data.payerID;
          _this16.state.billing_email_address = details.payer.email_address;
          _this16.state.billing_name = details.payer.name.given_name + " " + details.payer.name.surname; // console.log(details);
          // console.log(data);
          // console.log(details.purchase_units[0].amount.currency_code)
          // console.log(details.purchase_units[0].amount.value)

          return _this16.onSubmitBookAppointment2();
        },
        onError: function onError(err) {
          alert(err);
          window.location.reload();
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: "3",
        sm: "3"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this16.toggleMakePayment("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "sweet_alert1",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this16.setState({
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
          return _this16.setState({
            showSuccess: false
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "sweet_alert2",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this16.setState({
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
          return _this16.setState({
            showError: false
          });
        }
      }));
    }
  }]);

  return PatientListLabs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PatientListLabs);

/***/ })

}]);