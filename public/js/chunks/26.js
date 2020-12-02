(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

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

/***/ "./resources/coreui/src/views/Admin/Patients/Patients.js":
/*!***************************************************************!*\
  !*** ./resources/coreui/src/views/Admin/Patients/Patients.js ***!
  \***************************************************************/
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

var Patients = /*#__PURE__*/function (_Component) {
  _inherits(Patients, _Component);

  var _super = _createSuper(Patients);

  function Patients(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, Patients);

    _this = _super.call(this, props); // ////////////////MODAL

    _this.togglePatientView = function (patient_id, name) {
      // togglePatientRec(id, name) {
      console.log(patient_id);

      _this.setState({
        patientView: !_this.state.patientView,
        patient_id: patient_id,
        patient_name: name
      });
    };

    _this.handleChange = function (date) {
      _this.setState({
        startDate: date
      });
    };

    _this.togglePatientRec = function (patient_id, name) {
      // togglePatientRec(id, name) {
      console.log(patient_id);

      _this.setState({
        patientRec: !_this.state.patientRec,
        patient_id: patient_id,
        patient_name: name
      });
    };

    _this.toggleViewAppointment = function () {
      _this.setState({
        primaryViewAppointment: !_this.state.primaryViewAppointment
      });
    };

    _this.togglePatientView = _this.togglePatientView.bind(_assertThisInitialized(_this)); // this.togglePrimary = this.togglePrimary.bind(this);

    _this.toggleViewAppointment = _this.toggleViewAppointment.bind(_assertThisInitialized(_this));
    _this.togglePatientRec = _this.togglePatientRec.bind(_assertThisInitialized(_this)); // bing toggle functions and values

    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.toggle_identification = _this.toggle_identification.bind(_assertThisInitialized(_this));
    _this.toggle_app_instructions = _this.toggle_app_instructions.bind(_assertThisInitialized(_this));
    _this.onChangeMedicationsCurrentlyUsingUpdate = _this.onChangeMedicationsCurrentlyUsingUpdate.bind(_assertThisInitialized(_this));
    _this.onChangeAllergiesUpdate = _this.onChangeAllergiesUpdate.bind(_assertThisInitialized(_this));
    _this.onChangeBloodGroupUpdate = _this.onChangeBloodGroupUpdate.bind(_assertThisInitialized(_this));
    _this.onChangeUnderlyingConditionsUpdate = _this.onChangeUnderlyingConditionsUpdate.bind(_assertThisInitialized(_this));
    _this.onChangeFamilyMedicalHistoryUpdate = _this.onChangeFamilyMedicalHistoryUpdate.bind(_assertThisInitialized(_this));
    _this.onChangeHypertensiveUpdate = _this.onChangeHypertensiveUpdate.bind(_assertThisInitialized(_this));
    _this.onChangeDiabeticUpdate = _this.onChangeDiabeticUpdate.bind(_assertThisInitialized(_this));
    _this.onChangePrescriptionUpdate = _this.onChangePrescriptionUpdate.bind(_assertThisInitialized(_this));
    _this.onChangeLabTestUpdate = _this.onChangeLabTestUpdate.bind(_assertThisInitialized(_this));
    _this.onChangeNoteUpdate = _this.onChangeNoteUpdate.bind(_assertThisInitialized(_this)); // this.onChangeMessageBox  = this.onChangeMessageBox.bind(this);
    // this.sendFile = this.sendFile.bind(this);
    // this.submitSendFile = this.submitSendFile.bind(this);
    // this.sendMessage = this.sendMessage.bind(this);
    // /////////////////////////////////////////////////////////////////

    _this.onSubmitMedicalRec = _this.onSubmitMedicalRec.bind(_assertThisInitialized(_this)); // medical record tab toggle

    _this.toggleMedRecTab = _this.toggleMedRecTab.bind(_assertThisInitialized(_this));
    _this.state = (_this$state = {
      token: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.auth_token : "",
      id: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.id : "",
      username: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.username : "",
      first_name: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.first_name : "",
      last_name: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.last_name : "",
      middle_name: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.middle_name : "",
      // store array of data when a patient is clicked 
      medications_currently_using: [],
      allergies: [],
      blood_group: [],
      underlying_conditions: [],
      family_medical_history: [],
      hypertensive: [],
      diabetic: [],
      prescription: [],
      lab_test: [],
      note: [],
      // store new data entered to be stored/submitted
      medications_currently_using_update: "",
      allergies_update: "",
      blood_group_update: "",
      underlying_conditions_update: "",
      family_medical_history_update: "",
      hypertensive_update: "",
      diabetic_update: "",
      prescription_update: "",
      lab_test_update: "",
      note_update: "",
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
      appointments_list: [],
      number_appointments: 1,
      activePage_appointments: 1,
      itemsCountPerPage_appointments: 1,
      totalItemsCount_appointments: 1,
      pageRangeDisplayed_appointments: 3,
      currentPageAppointments: ''
    }, _defineProperty(_this$state, "status", '1'), _defineProperty(_this$state, "status", ""), _defineProperty(_this$state, "created_at", localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.created_at : ""), _defineProperty(_this$state, "user_type", localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.user_type : ""), _defineProperty(_this$state, "collapse", false), _defineProperty(_this$state, "collapse_identification", false), _defineProperty(_this$state, "collapse_app_instructions", false), _defineProperty(_this$state, "fadeIn", true), _defineProperty(_this$state, "timeout", 300), _defineProperty(_this$state, "patient_id", ""), _defineProperty(_this$state, "patient_name", ""), _defineProperty(_this$state, "startDate", new Date()), _defineProperty(_this$state, "patientView", false), _defineProperty(_this$state, "primary", false), _defineProperty(_this$state, "primaryViewAppointment", false), _defineProperty(_this$state, "patientRec", false), _defineProperty(_this$state, "showSuccess", false), _defineProperty(_this$state, "showError", false), _defineProperty(_this$state, "successMessage", "Successful"), _defineProperty(_this$state, "errorMessage", "Failed"), _defineProperty(_this$state, "chat_btn_status", false), _this$state);
    _this.handlePageChange = _this.handlePageChange.bind(_assertThisInitialized(_this));
    _this.handlePageChangeAppointments = _this.handlePageChangeAppointments.bind(_assertThisInitialized(_this));
    return _this;
  } // medical record tab toggle


  _createClass(Patients, [{
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
    } // fetch data from db

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/admin/patients_list?token=".concat(this.state.token)).then(function (response) {
        console.log("ROI Cartoon");
        console.log(response);
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
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // Pagination handler

  }, {
    key: "handlePageChange",
    value: function handlePageChange(pageNumber) {
      var _this3 = this; // console.log(`active page is ${pageNumber}`);
      // this.setState({activePage: pageNumber});


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/admin/patients_list?token=".concat(this.state.token, "&page=") + pageNumber).then(function (response) {
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
    key: "getPateintView",
    value: function getPateintView(patient_id, name) {
      var _this4 = this; // get patient medical records to display in modal


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/admin/patient/get/" + patient_id + "?token=".concat(this.state.token)).then(function (response) {
        console.log("It came back");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          console.log("med_currently_using");
          console.log(json.data.med_currently_using);
          console.log(json.status);

          _this4.setState(_defineProperty({
            // //////////////////////////////////////////////////////
            contact_address: json.data.data.contact_address,
            country_of_residence: json.data.data.country_of_residence,
            created_at: json.data.data.created_at,
            disabilities: json.data.data.disabilities,
            district_province_state: json.data.data.district_province_state,
            dob: json.data.data.dob,
            email: json.data.data.email,
            first_name: json.data.data.first_name,
            gender: json.data.data.gender,
            gender_others: json.data.data.gender_others,
            height: json.data.data.height,
            last_name: json.data.data.last_name,
            middle_name: json.data.data.middle_name,
            nationality: json.data.data.nationality,
            next_kin_email: json.data.data.next_kin_email,
            next_kin_name: json.data.data.next_kin_name,
            next_kin_occupation: json.data.data.next_kin_occupation,
            next_kin_phone: json.data.data.next_kin_phone,
            next_kin_relationship: json.data.data.next_kin_relationship,
            profile_picture: json.data.data.profile_picture,
            status: json.data.data.status,
            telephone: json.data.data.telephone,
            title: json.data.data.title,
            username: json.data.data.username,
            weight: json.data.data.weight,
            zip_code: json.data.data.zip_code
          }, "status", json.data.status), _this4.togglePatientView(patient_id, name));
        } else {
          _this4.setState({
            errorMessage: json.data.data,
            showError: true
          });
        }
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // ////////////////////////////////////////////////////////////////////////
    // /////////////////////////////////////////////////////////////////////////
    // /////////////////////////////////////////////////////////////////////////

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
    // //////////////////////////////////////////////////////////////////////////
    // /////////////// Patient records

  }, {
    key: "getPateintMedicalRec",
    value: function getPateintMedicalRec(patient_id, name) {
      var _this5 = this; // get patient medical records to display in modal


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/admin/patientMedRec/get/" + patient_id + "?token=".concat(this.state.token)).then(function (response) {
        console.log("It came back");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          console.log("med_currently_using");
          console.log(json.data.med_currently_using);
          console.log(json.status);

          _this5.setState({
            // //////////////////////////////////////////////////////
            medications_currently_using: json.data.med_currently_using,
            allergies: json.data.med_allergies,
            blood_group: json.data.med_blood_group,
            underlying_conditions: json.data.med_underlying_conditions,
            family_medical_history: json.data.med_family_medical_history,
            hypertensive: json.data.med_hypertensive,
            diabetic: json.data.med_diabetic,
            prescription: json.data.med_prescription,
            lab_test: json.data.med_lab_test,
            note: json.data.med_note,
            personal_data: json.data.personal_data,
            status: json.data.status
          }, _this5.togglePatientRec(patient_id, name));
        } else {
          _this5.setState({
            errorMessage: json.data.data,
            showError: true
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
      var _this6 = this;

      this.setState({
        patient_id: patient_id,
        patient_name: name
      }); // get patient medical records to display in modal

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/admin/appointments/get/" + patient_id + "?token=".concat(this.state.token)).then(function (response) {
        console.log("appointments_list");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          console.log("appointments_list");
          console.log(_typeof(json.data.data.data));
          console.log(json.data.data.data);

          _this6.setState({
            appointments_list: json.data.data.data,
            itemsCountPerPage_appointments: json.data.data.per_page,
            totalItemsCount_appointments: json.data.data.total,
            activePage_appointments: json.data.data.current_page
          }, _this6.toggleViewAppointment);
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
      var _this7 = this;

      console.log("active page is ".concat(pageNumber)); // this.setState({activePage: pageNumber});

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/admin/appointments/get/" + patient_id + "?token=".concat(this.state.token, "&page=") + pageNumber).then(function (response) {
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this7.setState({
            appointments_list: json.data.data.data,
            itemsCountPerPage_appointments: json.data.data.per_page,
            totalItemsCount_appointments: json.data.data.total,
            activePage_appointments: json.data.data.current_page
          });
        } else {}
      });
    }
  }, {
    key: "endAppointment",
    /////////////////////////////// End Appointment ///////////////////////////
    value: function endAppointment() {
      var _this8 = this; // get patient medical records to display in modal


      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/doc/appointment/end/" + this.state.patient_id + '/' + this.state.id + '/' + this.state.appointment_id + "?token=".concat(this.state.token)).then(function (response) {
        console.log("It came back");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          console.log(json.data.data);

          _this8.setState({
            successMessage: json.data.data,
            showSuccess: true
          }, _this8.toggleViewAppointment());
        } else {
          _this8.setState({
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
    key: "onSubmitMedicalRec",
    value: function onSubmitMedicalRec(e) {
      var _this9 = this;

      e.preventDefault();
      var med_rec_data = {
        med_currently_using: this.state.medications_currently_using_update,
        med_allergies: this.state.allergies_update,
        med_blood_group: this.state.blood_group_update,
        med_underlying_conditions: this.state.underlying_conditions_update,
        med_family_medical_history: this.state.family_medical_history_update,
        med_hypertensive: this.state.hypertensive_update,
        med_diabetic: this.state.diabetic_update,
        med_prescription: this.state.prescription_update,
        med_lab_test: this.state.lab_test_update,
        med_note: this.state.note_update
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/doc/patientMedRec/update/" + this.state.patient_id + '/' + this.state.id + "?token=".concat(this.state.token), med_rec_data) // axios.post(`api/products/add?token=${this.state.token}`, product_data)
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
        if (json.data.success) {
          _this9.setState({
            successMessage: "Updated successfully",
            showSuccess: true
          }, _this9.componentDidMount());
        } else {
          _this9.setState({
            errorMessage: "Updated failed",
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
    key: "render",
    value: function render() {
      var _this10 = this;

      if (this.state.gender == "0") {
        this.state.gender = "Not specified";
      }

      if (this.state.gender == "1") {
        this.state.gender = "Male";
      }

      if (this.state.gender == "2") {
        this.state.gender = "Female";
      }

      if (this.state.gender == "3") {
        this.state.gender = "Prefer not to say";
      }

      if (this.state.gender == "4") {
        this.state.gender = this.state.gender_others;
      }

      if (this.state.title == "0") {
        this.state.title = "Not specified";
      }

      if (this.state.title == "1") {
        this.state.title = "Mr";
      }

      if (this.state.title == "2") {
        this.state.title = "Mrs";
      }

      if (this.state.title == "3") {
        this.state.title = "Ms";
      }

      if (this.state.title == "4") {
        this.state.title = "Miss";
      } // const { product_image} = this.state


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12",
        sm: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Patients"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12",
        lg: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), " List of Patients"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "USERNAME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "FIRST Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "LAST Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "MIDDLE NAME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "EMAIL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "TELEPHONE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "STATUS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ACTION"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPage = this.state.activePage * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.applications_list.map(function (application) {
        if (application.status == 1) {
          _this10.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
            color: "success"
          }, "Open");
        } else {
          _this10.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
            color: "danger"
          }, "Closed");
        }

        var patient_id = application.id;
        var name = application.first_name + " " + application.last_name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: application.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this10.state.currentPage++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.middle_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, application.telephone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _this10.state.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this10.getPateintView(patient_id, name);
          },
          className: "btn-facebook btn-brand icon mr-1 mb-1",
          style: {
            marginRight: "15px"
          }
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-eye",
          title: "View patient"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          size: "sm",
          onClick: function onClick() {
            return _this10.getPateintMedicalRec(patient_id, name);
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
            return _this10.viewAppointment(patient_id, name);
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
        isOpen: this.state.patientView,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
        toggle: function toggle() {
          return _this10.togglePatientView("close", "close");
        }
      }, "View Patient"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Patient Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
        responsive: true,
        striped: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.first_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Middle Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.middle_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.gender)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Height"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.height)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Weight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.weight)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Zip Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.zip_code)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Telephone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.telephone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Date of Birth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.dob)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Nationality"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.nationality)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "District/Province/State"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.district_province_state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Country of Residence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.country_of_residence)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Next of kin email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.next_kin_email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Next of kin name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.next_kin_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Next of kin occupation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.next_kin_occupation)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Next of kin telephone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.next_kin_phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Next of kin Relationship"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.next_kin_relationship)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Registration Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.state.created_at))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this10.togglePatientView("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: this.state.patientRec,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1000px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
        toggle: function toggle() {
          return _this10.togglePatientRec("close", "close");
        }
      }, "Medical Records"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), this.state.patient_name, " Medical Records"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmitMedicalRec
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "List of Medications You are Currently Using")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.medications_currently_using.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "mcu");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "mcu",
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
      }, this.state.medications_currently_using.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "mcu"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.medications));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Medications currently using")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "textarea",
        id: "medications_currently_using_update",
        rows: "2",
        defaultValue: this.state.medications_currently_using_update,
        onChange: this.onChangeMedicationsCurrentlyUsingUpdate,
        placeholder: "enter medications currently using"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "List of Allergies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.allergies.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "all");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "all",
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
      }, this.state.allergies.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "all"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.allergies));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Allergies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "textarea",
        id: "allergies_update",
        rows: "2",
        defaultValue: this.state.allergies_update,
        onChange: this.onChangeAllergiesUpdate,
        placeholder: "list allergies "
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Blood Group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.blood_group.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "blo");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "blo",
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
      }, this.state.blood_group.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "blo"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.blood_group));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Blood Group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "select",
        id: "blood_group_update",
        value: this.state.blood_group_update,
        onChange: this.onChangeBloodGroupUpdate
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " --- select --- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "A+"
      }, "A+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "A-"
      }, "A-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "B+"
      }, "B+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "B-"
      }, "B-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "O+"
      }, "O+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "O-"
      }, "O-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "AB+"
      }, "AB+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "AB-"
      }, "AB-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Family medical history")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.family_medical_history.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "fmh");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "fmh",
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
      }, this.state.family_medical_history.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "fmh"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.family_medical_history));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Family medical history")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "textarea",
        id: "family_medical_history_update",
        rows: "2",
        defaultValue: this.state.family_medical_history_update,
        onChange: this.onChangeFamilyMedicalHistoryUpdate,
        placeholder: "enter family medical history"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Hypertensive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.hypertensive.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "hyp");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "hyp",
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
      }, this.state.hypertensive.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "hyp"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.hypertensive));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Hypertensive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "select",
        id: "hypertensive_update",
        value: this.state.hypertensive_update,
        onChange: this.onChangeHypertensiveUpdate
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " --- select --- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Yes"
      }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "No"
      }, "No")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Diabetic")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.diabetic.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "dia");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "dia",
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
      }, this.state.diabetic.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "dia"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.diabetic));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Diabetic")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "select",
        id: "diabetic_update",
        value: this.state.diabetic_update,
        onChange: this.onChangeDiabeticUpdate
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " --- update --- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Yes"
      }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "No"
      }, "No")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Other underlying conditions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.underlying_conditions.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "und");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "und",
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
      }, this.state.underlying_conditions.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "und"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.underlying_conditions));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Underlying Conditions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "textarea",
        id: "underlying_conditions_update",
        rows: "2",
        defaultValue: this.state.underlying_conditions_update,
        onChange: this.onChangeUnderlyingConditionsUpdate,
        placeholder: "Underlying conditions"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Prescription")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.prescription.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "pre");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "pre",
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
      }, this.state.prescription.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "pre"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.prescription));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Prescriptions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "textarea",
        id: "prescription_update",
        rows: "2",
        defaultValue: this.state.prescription_update,
        onChange: this.onChangePrescriptionUpdate,
        placeholder: "enter prescriptions"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Laboratory Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.lab_test.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "lab");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "lab",
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
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Laboratory Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "textarea",
        id: "lab_test_update",
        rows: "2",
        defaultValue: this.state.lab_test_update,
        onChange: this.onChangeLabTestUpdate,
        placeholder: "enter laboratory test update"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Enter other medical information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xs: "4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroup"], {
        id: "list-tab",
        role: "tablist"
      }, this.state.note.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ListGroupItem"], {
          key: meds.id,
          onClick: function onClick() {
            return _this10.toggleMedRecTab(meds.id + "not");
          },
          action: true,
          active: _this10.state.activeTab === meds.id + "not",
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
      }, this.state.note.map(function (meds) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["TabPane"], {
          key: meds.id,
          tabId: meds.id + "not"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, meds.note));
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, "Note")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        type: "textarea",
        id: "note_update",
        rows: "2",
        defaultValue: this.state.note_update,
        onChange: this.onChangeNoteUpdate,
        placeholder: "enter note"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        className: "form-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        type: "submit",
        size: "sm",
        color: "primary"
      }, "Update Medical Records")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this10.togglePatientRec("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: this.state.primaryViewAppointment,
        className: 'modal-primary ' + this.props.className,
        style: {
          maxWidth: "1400px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
        toggle: function toggle() {
          return _this10.toggleViewAppointment("close", "close");
        }
      }, "View Appointments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), "Appointments", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
        color: this.state.appointment_status_color,
        style: {
          "float": "right",
          padding: "5px 10px"
        }
      }, this.state.appointment_status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
        responsive: true,
        bordered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        scope: "col"
      }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "USERNAME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "SUBJECT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "MESSAGE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "DOCTOR'S USERNAME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "DOCTOR'S NAME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "DATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "TIME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "CURRENCY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "DOCTOR'S FEE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "TOTAL AMOUNT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "PAYID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "STATUS"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ( // Calculation for the page S/N
      this.state.currentPageAppointments = this.state.activePage_appointments * 10 - (10 - 1), // ////////////////////////////////////////////////////////////
      this.state.appointments_list.map(function (appointment) {
        if (appointment.status == 1) {
          _this10.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
            color: "success"
          }, "Open");
        } else {
          _this10.state.status = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
            color: "danger"
          }, "Closed");
        }

        var patient_id = appointment.id;
        var name = appointment.patient_first_name + " " + appointment.patient_last_name + " " + appointment.patient_middle_name;
        var doc_name = appointment.doc_first_name + " " + appointment.doc_last_name + " " + appointment.doc_middle_name;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: appointment.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          scope: "row"
        }, _this10.state.currentPageAppointments++), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.patient_username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.subject), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.doc_username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, doc_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.billing_amount_currency), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.billing_doctor_fee), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.billing_amount_value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, appointment.billing_payerID), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _this10.state.status));
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
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          return _this10.toggleViewAppointment("close", "close");
        }
      }, "Cancel"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "sweet_alert1",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this10.setState({
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
          return _this10.setState({
            showSuccess: false
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "sweet_alert2",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this10.setState({
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
          return _this10.setState({
            showError: false
          });
        }
      }));
    }
  }]);

  return Patients;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Patients);

/***/ })

}]);