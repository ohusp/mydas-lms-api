(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

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

/***/ "./resources/coreui/src/views/LabListPatients/LabListPatients.js":
/*!***********************************************************************!*\
  !*** ./resources/coreui/src/views/LabListPatients/LabListPatients.js ***!
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
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

var LabListPatients = /*#__PURE__*/function (_Component) {
  _inherits(LabListPatients, _Component);

  var _super = _createSuper(LabListPatients);

  function LabListPatients(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, LabListPatients);

    _this = _super.call(this, props); // ////////////////MODAL

    _this.handleChange = function (date) {
      _this.setState({
        startDate: date
      });
    };

    _this.togglePatientRec = function (patient_id, name) {
      // togglePatientRec(id, name) {
      // alert(patient_id);
      // alert(name)
      // console.log(patient_id);
      _this.setState({
        patientRec: !_this.state.patientRec,
        patient_id: patient_id,
        patient_name: name
      }, _this.getLabTestResults(patient_id, name));
    };

    _this.toggleViewAppointment = function (patient_id, name) {
      // console.log(patient_id);
      _this.setState({
        primaryViewAppointment: !_this.state.primaryViewAppointment,
        patient_id: patient_id,
        patient_name: name
      });
    };

    _this.togglePrimary = _this.togglePrimary.bind(_assertThisInitialized(_this));
    _this.toggleViewAppointment = _this.toggleViewAppointment.bind(_assertThisInitialized(_this));
    _this.togglePatientRec = _this.togglePatientRec.bind(_assertThisInitialized(_this));
    _this.onChangeLabResult = _this.onChangeLabResult.bind(_assertThisInitialized(_this));
    _this.onChangeLabTestName = _this.onChangeLabTestName.bind(_assertThisInitialized(_this));
    _this.onSubmitLabResult = _this.onSubmitLabResult.bind(_assertThisInitialized(_this)); // bing toggle functions and values

    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.toggle_identification = _this.toggle_identification.bind(_assertThisInitialized(_this));
    _this.toggle_app_instructions = _this.toggle_app_instructions.bind(_assertThisInitialized(_this)); // this.onChangeMedicationsCurrentlyUsingUpdate  =this.onChangeMedicationsCurrentlyUsingUpdate.bind(this);
    // this.onChangeAllergiesUpdate            =this.onChangeAllergiesUpdate.bind(this);
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
    // this.onSubmitMedicalRec = this.onSubmitMedicalRec.bind(this);
    // medical record tab toggle

    _this.toggleMedRecTab = _this.toggleMedRecTab.bind(_assertThisInitialized(_this));
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
      lab_test: [],
      lab_test_results: [],
      lab_result: "",
      lab_test_name: "",
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
      message_list: [],
      message_list_array: [],
      // for append chat message
      // ////////////////////////////////////////////////////
      applications_list: [],
      number: 1,
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
      currentPage2: '',
      status: '1',
      // ///////////////////// Appointment ///////////////////////////////
      appointment_id: "",
      appointment_date: "",
      appointment_time: "",
      appointment_subject: "",
      appointment_message: "",
      appointment_patient_username: "",
      appointment_patient_first_name: "",
      appointment_patient_last_name: "",
      appointment_patient_middle_name: ""
    }, _defineProperty(_this$state, "status", ""), _defineProperty(_this$state, "created_at", localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.created_at : ""), _defineProperty(_this$state, "user_type", localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.user_type : ""), _defineProperty(_this$state, "collapse", false), _defineProperty(_this$state, "collapse_identification", false), _defineProperty(_this$state, "collapse_app_instructions", false), _defineProperty(_this$state, "fadeIn", true), _defineProperty(_this$state, "timeout", 300), _defineProperty(_this$state, "patient_id", ""), _defineProperty(_this$state, "patient_name", ""), _defineProperty(_this$state, "startDate", new Date()), _defineProperty(_this$state, "primary", false), _defineProperty(_this$state, "primaryViewAppointment", false), _defineProperty(_this$state, "patientRec", false), _defineProperty(_this$state, "showSuccess", false), _defineProperty(_this$state, "showError", false), _defineProperty(_this$state, "successMessage", "Successful"), _defineProperty(_this$state, "errorMessage", "Failed"), _defineProperty(_this$state, "chat_btn_status", false), _this$state);
    _this.handlePageChange = _this.handlePageChange.bind(_assertThisInitialized(_this));
    return _this;
  } // medical record tab toggle


  _createClass(LabListPatients, [{
    key: "toggleMedRecTab",
    value: function toggleMedRecTab(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "onChangeMedicationsCurrentlyUsingUpdate",
    value: function onChangeMedicationsCurrentlyUsingUpdate(e) {
      this.setState({
        medications_currently_using_update: e.target.value
      });
    }
  }, {
    key: "onChangeAllergiesUpdate",
    value: function onChangeAllergiesUpdate(e) {
      this.setState({
        allergies_update: e.target.value
      });
    }
  }, {
    key: "onChangeBloodGroupUpdate",
    value: function onChangeBloodGroupUpdate(e) {
      this.setState({
        blood_group_update: e.target.value
      });
    }
  }, {
    key: "onChangeUnderlyingConditionsUpdate",
    value: function onChangeUnderlyingConditionsUpdate(e) {
      this.setState({
        underlying_conditions_update: e.target.value
      });
    }
  }, {
    key: "onChangeFamilyMedicalHistoryUpdate",
    value: function onChangeFamilyMedicalHistoryUpdate(e) {
      this.setState({
        family_medical_history_update: e.target.value
      });
    }
  }, {
    key: "onChangeHypertensiveUpdate",
    value: function onChangeHypertensiveUpdate(e) {
      this.setState({
        hypertensive_update: e.target.value
      });
    }
  }, {
    key: "onChangeDiabeticUpdate",
    value: function onChangeDiabeticUpdate(e) {
      this.setState({
        diabetic_update: e.target.value
      });
    }
  }, {
    key: "onChangePrescriptionUpdate",
    value: function onChangePrescriptionUpdate(e) {
      this.setState({
        prescription_update: e.target.value
      });
    }
  }, {
    key: "onChangeLabTestUpdate",
    value: function onChangeLabTestUpdate(e) {
      this.setState({
        lab_test_update: e.target.value
      });
    }
  }, {
    key: "onChangeNoteUpdate",
    value: function onChangeNoteUpdate(e) {
      this.setState({
        note_update: e.target.value
      });
    }
  }, {
    key: "onChangeLabResult",
    value: function onChangeLabResult(e) {
      this.setState({
        lab_result: e.target.value
      });
    }
  }, {
    key: "onChangeLabTestName",
    value: function onChangeLabTestName(e) {
      this.setState({
        lab_test_name: e.target.value
      });
    } // fetch data from db

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/patients_list/" + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        // console.log("ROI Cartoon");
        // console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          // console.log("applications_list");
          // console.log(typeof(json.data.data.data));
          // console.log(json.data.data.data);
          _this2.setState({
            applications_list: json.data.data.data,
            itemsCountPerPage: json.data.data.per_page,
            totalItemsCount: json.data.data.total,
            activePage: json.data.data.current_page
          });
        } else {}
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // Pagination handler

  }, {
    key: "handlePageChange",
    value: function handlePageChange(pageNumber) {
      var _this3 = this; // console.log(`active page is ${pageNumber}`);
      // this.setState({activePage: pageNumber});


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/patients_list/" + this.state.id + "?token=".concat(this.state.token, "&page=") + pageNumber).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this3.setState({
            applications_list: json.data.data.data,
            itemsCountPerPage: json.data.data.per_page,
            totalItemsCount: json.data.data.total,
            activePage: json.data.data.current_page
          });
        } else {}
      });
    }
  }, {
    key: "toggle_app_instructions",
    // toggle collapse and expand application instruction
    value: function toggle_app_instructions() {
      this.setState({
        collapse_app_instructions: !this.state.collapse_app_instructions
      });
    } // toggle collapse and expand personal data

  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        collapse: !this.state.collapse
      });
    } // toggle collapse and expand identification

  }, {
    key: "toggle_identification",
    value: function toggle_identification() {
      this.setState({
        collapse_identification: !this.state.collapse_identification
      });
    } // //////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////
    // /////////////// Patient chat

  }, {
    key: "togglePrimary",
    value: function togglePrimary(close) {
      // console.log(id);
      // if the variable passed is closed do not call axios
      // if(id == "close"){
      //   this.setState({
      //     primary: !this.state.primary,
      //   });
      // }else{
      if (close == "close") {
        clearInterval(this.interval);
        this.setState({
          primary: !this.state.primary
        });
      } else {
        this.setState({
          primary: !this.state.primary
        }, this.getMessages1);
      }
    }
  }, {
    key: "getMessages1",
    value: function getMessages1() {
      var _this4 = this;

      this.getMessages2();
      this.interval = setInterval(function () {
        return _this4.getMessages2();
      }, 5000);
    } // get messages

  }, {
    key: "getMessages2",
    value: function getMessages2() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/patient/chat/message/get/" + this.state.patient_id + '/' + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        // console.log("ROI Cartoon");
        // console.log(response);
        return response;
      }).then(function (json) {
        // console.log("json.data.messages.message");
        // console.log(typeof(json.data.messages.message));
        // console.log(json.data.messages.message);
        if (json.data.success) {
          //   console.log("applications_list");
          //   console.log(json.data.data.data);
          _this5.setState({
            message_list: json.data.messages.message
          }, _this5.loadMessages(json.data.messages.message));
        } else {}
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
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

      if (from == "lab") {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + message + "</li>");
      } else if (from == "patient") {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>" + message + "</li>");
      } else if (from == "lab_file") {
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
        }, 2000); // console.log(message);
        // console.log(testmessage);

        var send_message = {
          message: message
        };
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/lab/patient/chat/message/send/" + this.state.patient_id + '/' + this.state.id + "?token=".concat(this.state.token), send_message).then(function (response) {
          // console.log("ROI Cartoon");
          // console.log(response);
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
      var _this6 = this; // e.preventDefault() // Stop form submit


      this.uploadSendFile().then(function (response) {
        // console.log(response.data);
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
      var url = '/api/lab/patient/chat/file/send/' + this.state.patient_id + '/' + this.state.id + "?token=".concat(this.state.token);
      var formData = new FormData();
      formData.append('send_file', this.state.send_file);
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      return Object(axios__WEBPACK_IMPORTED_MODULE_4__["post"])(url, formData, config);
    } // //////////////////////////////////////////////////////////////////////////
    // /////////////// Patient records

  }, {
    key: "getLabTestRecommendations",
    value: function getLabTestRecommendations(patient_id, name) {
      var _this7 = this; // get patient medical records to display in modal


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/sharedLabTest/get/" + patient_id + '/' + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        // console.log("It came back");
        // console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          // console.log("med_currently_using");
          // console.log(json.data.med_currently_using)
          // console.log(json.status)
          _this7.setState({
            // //////////////////////////////////////////////////////
            personal_data_username: json.data.personal_data.username,
            personal_data_first_name: json.data.personal_data.first_name,
            personal_data_last_name: json.data.personal_data.last_name,
            personal_data_middle_name: json.data.personal_data.middle_name,
            personal_data_title: json.data.personal_data.title,
            personal_data_gender: json.data.personal_data.gender,
            personal_data_gender_others: json.data.personal_data.gender_others,
            personal_data_dob: json.data.personal_data.dob,
            personal_data_nationality: json.data.personal_data.nationality,
            personal_data_country_of_residence: json.data.personal_data.country_of_residence,
            personal_data_district_province_state: json.data.personal_data.district_province_state,
            personal_data_profile_picture: json.data.personal_data.profile_picture,
            status: json.data.status,
            lab_test: json.data.lab_test,
            patient_id: patient_id,
            patient_name: name
          }, _this7.togglePatientRec(patient_id, name));
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
    key: "getLabTestResults",
    value: function getLabTestResults(patient_id, name) {
      var _this8 = this; // alert(this.state.patient_id);
      // get patient medical records to display in modal


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/labResult/get/" + patient_id + '/' + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        // console.log("It came back");
        // console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this8.setState({
            lab_test_results: json.data.lab_results
          });
        } else {
          _this8.setState({// errorMessage: json.data.data,
            // showError: true
          });
        }
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // ///////////////////////////// VIEW APPOINTMENT /////////////////////////////

  }, {
    key: "viewAppointment",
    value: function viewAppointment(patient_id, name) {
      var _this9 = this; // get patient medical records to display in modal


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/appointment/get/" + patient_id + '/' + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        // console.log("It came back");
        // console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          // console.log(json.data)
          _this9.setState({
            // //////////////////////////////////////////////////////
            appointment_id: json.data.data.id,
            appointment_date: json.data.data.date,
            appointment_time: json.data.data.time,
            appointment_subject: json.data.data.subject,
            appointment_message: json.data.data.message,
            appointment_patient_username: json.data.data.patient_username,
            appointment_patient_first_name: json.data.data.patient_first_name,
            appointment_patient_last_name: json.data.data.patient_last_name,
            appointment_patient_middle_name: json.data.data.patient_middle_name,
            appointment_status: json.data.data.status
          }, _this9.toggleViewAppointment(patient_id, name));

          if (_this9.state.appointment_status == 1) {
            _this9.setState({
              appointment_status: 'Open',
              appointment_status_color: 'success',
              chat_btn_status: false
            });
          }

          if (_this9.state.appointment_status == 2) {
            _this9.setState({
              appointment_status: 'Close',
              appointment_status_color: 'danger',
              chat_btn_status: true
            });
          }
        } else {
          _this9.setState({
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
    key: "endAppointment",
    /////////////////////////////// End Appointment ///////////////////////////
    value: function endAppointment() {
      var _this10 = this; // get patient medical records to display in modal


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/lab/appointment/end/" + this.state.patient_id + '/' + this.state.id + '/' + this.state.appointment_id + "?token=".concat(this.state.token)).then(function (response) {
        // console.log("It came back");
        // console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          // console.log(json.data.data)
          _this10.setState({
            successMessage: json.data.data,
            showSuccess: true
          }, _this10.toggleViewAppointment());
        } else {
          _this10.setState({
            errorMessage: json.data.data,
            showError: true
          });
        }
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // //////////////////////////////////////////////////////////

  }, {
    key: "onSubmitLabResult",
    value: function onSubmitLabResult(e) {
      var _this11 = this;

      e.preventDefault();

      if (this.state.lab_test_name == "" || this.state.lab_result == "" || this.state.lab_test_name == null || this.state.lab_result == null) {
        this.setState({
          errorMessage: "Please fill all required field",
          showError: true
        });
      } else {
        var lab_result_save = {
          lab_test_name: this.state.lab_test_name,
          lab_result: this.state.lab_result
        };
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/lab/labResult/save/" + this.state.patient_id + '/' + this.state.id + "?token=".concat(this.state.token), lab_result_save) // axios.post(`api/products/add?token=${this.state.token}`, product_data)
        // axios.post('api/products/add', product_data, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer '+ `${this.state.token}`
        //     },      
        // })  
        .then(function (response) {
          // console.log("ROI Cartoon");
          // console.log(response);
          return response;
        }).then(function (json) {
          if (json.data.success) {
            _this11.setState({
              successMessage: "Lab result saved",
              showSuccess: true,
              patientRec: !_this11.state.patientRec
            });
          } else {
            _this11.setState({
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
    } // ///////////////// to append chat message

  }, {
    key: "render",
    value: function render() {
      var _this12 = this; // const { product_image} = this.state


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12",
        sm: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "My Patients"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12",
        lg: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), " List of Patients", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_external_link__WEBPACK_IMPORTED_MODULE_8__["ExternalLink"], {
        href: "https://live.cammedics.com/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "primary",
        style: {
          "float": "right"
        }
      }, "Start a Video Chat"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Middle Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPage2 = this.state.activePage * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.applications_list.map(function (application) {
        if (application.status == 1) {
          _this12.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
            color: "success"
          }, "Open");
        } else {
          _this12.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
            color: "danger"
          }, "Closed");
        }

        var patient_id = application.patient_id;
        var name = application.patient_first_name + " " + application.patient_last_name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: application.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this12.state.currentPage2++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.patient_username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.patient_first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.patient_last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.patient_middle_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _this12.state.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this12.getLabTestRecommendations(patient_id, name);
          },
          className: "btn-facebook btn-brand icon mr-1 mb-1",
          style: {
            marginRight: "15px"
          }
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-hospital-o",
          title: "View medical record"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this12.viewAppointment(patient_id, name);
          },
          className: "btn-facebook btn-brand icon mr-1 mb-1",
          title: "View appointment"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-calendar-check-o"
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
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: this.state.primary,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
        toggle: function toggle() {
          return _this12.togglePrimary("close", "close");
        }
      }, "Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.state.message_list_array), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "message_area",
        style: {
          maxHeight: "300px",
          overflowX: "auto"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "textarea",
        id: "message_box",
        rows: "2",
        onChange: this.onChangeMessageBox,
        placeholder: "type ..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-telegram fa-lg cammedics-color",
        style: {
          cursor: "pointer",
          fontSize: "2em"
        },
        onClick: this.sendMessage
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-paperclip fa-lg cammedics-color",
        style: {
          cursor: "pointer",
          fontSize: "2em",
          "float": "right"
        },
        onClick: this.trigerSendFile
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "file",
        color: "primary",
        id: "send_file",
        style: {
          display: "none"
        } // onChange={this.onChangeProfilePicture}
        ,
        onChange: function onChange(e) {
          _this12.sendFile(e);
        }
      })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this12.togglePrimary("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: this.state.patientRec,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
        toggle: function toggle() {
          return _this12.togglePatientRec("close", "close");
        }
      }, "Medical Records"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Laboratory test from doctors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmitLabResult
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Personal Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Username: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.personal_data_username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Title: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.personal_data_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "First Name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.personal_data_first_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Last Name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          textAlign: "left"
        }
      }, this.state.personal_data_last_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Middle Name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.personal_data_middle_name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Gender: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.personal_data_gender)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Date of Birth: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          textAlign: "right"
        }
      }, this.state.personal_data_dob))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Nationality: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.personal_data_nationality)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Country of Residence: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.personal_data_country_of_residence)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "District/Province/State: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.personal_data_district_province_state))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Laboratory Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.lab_test.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this12.toggleMedRecTab(meds.id + "lab");
          },
          action: true,
          active: _this12.state.activeTab === meds.id + "lab",
          style: {
            padding: "0.3rem 1.0rem"
          }
        }, meds.doc_name, " (", meds.doc_username, ") ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            color: "#ca333a",
            fontWeight: "600",
            fontSize: "10px",
            "float": "right",
            bottom: "3px"
          }
        }, meds.created_at));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabContent"], {
        activeTab: this.state.activeTab
      }, this.state.lab_test.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "lab"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.lab_test));
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Laboratory Results")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.lab_test_results.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this12.toggleMedRecTab(meds.id + "labR");
          },
          action: true,
          active: _this12.state.activeTab === meds.id + "labR",
          style: {
            padding: "0.3rem 1.0rem"
          }
        }, meds.lab_name, " (", meds.lab_username, ") ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            color: "#ca333a",
            fontWeight: "600",
            fontSize: "10px",
            "float": "right",
            bottom: "3px"
          }
        }, meds.created_at));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabContent"], {
        activeTab: this.state.activeTab
      }, this.state.lab_test_results.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "labR"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.lab_result));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Add Test Result"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"), "Test Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "text",
        id: "lab_test_name",
        defaultValue: this.state.lab_test_name,
        onChange: this.onChangeLabTestName
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "asterisk"
      }, "*"), "Test Result"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "textarea",
        id: "lab_result",
        rows: "4",
        defaultValue: this.state.lab_result,
        onChange: this.onChangeLabResult,
        placeholder: "enter laboratory result"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        className: "form-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          "float": "right",
          marginRight: "25px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "submit",
        color: "primary"
      }, "Save Result")))))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this12.togglePatientRec("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: this.state.primaryViewAppointment,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
        toggle: function toggle() {
          return _this12.toggleViewAppointment("close", "close");
        }
      }, "View Appointment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Appointment", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
        color: this.state.appointment_status_color,
        style: {
          "float": "right",
          padding: "5px 10px"
        }
      }, this.state.appointment_status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Patient Appointment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        size: "sm",
        onClick: function onClick() {
          return _this12.togglePrimary();
        },
        className: "btn-facebook btn-brand icon mr-1 mb-1",
        title: "Chat with patient",
        style: {
          "float": "right"
        },
        disabled: this.state.chat_btn_status
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-comments"
      }), " Send a Message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        style: {
          marginBottom: "25px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Date: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.appointment_date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Username: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.appointment_patient_username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Last name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.appointment_patient_last_name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Time: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.appointment_time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "First name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.appointment_patient_first_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Middle name: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.appointment_patient_middle_name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Subject: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.appointment_subject))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
        className: "justify-content-between"
      }, "Message: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, this.state.appointment_message))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "submit",
        size: "sm",
        color: "danger",
        style: {
          "float": "right"
        },
        onClick: function onClick() {
          return _this12.endAppointment();
        }
      }, "End Appointment"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this12.toggleViewAppointment("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "sweet_alert1",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this12.setState({
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
          return _this12.setState({
            showSuccess: false
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "sweet_alert2",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this12.setState({
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
          return _this12.setState({
            showError: false
          });
        }
      }));
    }
  }]);

  return LabListPatients;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LabListPatients);

/***/ })

}]);