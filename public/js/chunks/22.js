(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./resources/coreui/src/images/avatars/0.jpg":
/*!***************************************************!*\
  !*** ./resources/coreui/src/images/avatars/0.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/0.jpg?73476783ca0f7583198978de7073815b";

/***/ }),

/***/ "./resources/coreui/src/views/Profile/Profile.js":
/*!*******************************************************!*\
  !*** ./resources/coreui/src/views/Profile/Profile.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./resources/coreui/node_modules/history/esm/history.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./resources/coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./resources/coreui/node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./resources/coreui/node_modules/reactstrap/es/index.js");
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




 // import axios from 'axios';




var hashHistory = Object(history__WEBPACK_IMPORTED_MODULE_3__["createHashHistory"])();

var Profile = /*#__PURE__*/function (_Component) {
  _inherits(Profile, _Component);

  var _super = _createSuper(Profile);

  function Profile(props) {
    var _this;

    _classCallCheck(this, Profile);

    _this = _super.call(this, props); // ////////////////MODAL

    _this.handleChange = function (date) {
      _this.setState({
        startDate: date
      });
    };

    _this.togglePrimary = _this.togglePrimary.bind(_assertThisInitialized(_this)); // bing toggle functions and values

    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.toggle_identification = _this.toggle_identification.bind(_assertThisInitialized(_this));
    _this.toggle_app_instructions = _this.toggle_app_instructions.bind(_assertThisInitialized(_this)); // bind input values on change

    _this.onChangeFirstName = _this.onChangeFirstName.bind(_assertThisInitialized(_this));
    _this.onChangeLastName = _this.onChangeLastName.bind(_assertThisInitialized(_this));
    _this.onChangeMiddleName = _this.onChangeMiddleName.bind(_assertThisInitialized(_this));
    _this.onChangeEmail = _this.onChangeEmail.bind(_assertThisInitialized(_this));
    _this.onChangeZipCode = _this.onChangeZipCode.bind(_assertThisInitialized(_this));
    _this.onChangeTelephone = _this.onChangeTelephone.bind(_assertThisInitialized(_this));
    _this.onChangeTitle = _this.onChangeTitle.bind(_assertThisInitialized(_this));
    _this.onChangeGender = _this.onChangeGender.bind(_assertThisInitialized(_this));
    _this.onChangeDob = _this.onChangeDob.bind(_assertThisInitialized(_this));
    _this.onChangeNationality = _this.onChangeNationality.bind(_assertThisInitialized(_this));
    _this.onChangeCountryOfResidence = _this.onChangeCountryOfResidence.bind(_assertThisInitialized(_this));
    _this.onChangeDistrictProvinceState = _this.onChangeDistrictProvinceState.bind(_assertThisInitialized(_this));
    _this.onChangeContactAddress = _this.onChangeContactAddress.bind(_assertThisInitialized(_this));
    _this.onChangeHeight = _this.onChangeHeight.bind(_assertThisInitialized(_this));
    _this.onChangeWeight = _this.onChangeWeight.bind(_assertThisInitialized(_this)); // ////////////////////// DISABILITY //////////////////////////////////////////////////

    _this.onChangeDisabilityNone = _this.onChangeDisabilityNone.bind(_assertThisInitialized(_this));
    _this.onChangeDisabilityHearing = _this.onChangeDisabilityHearing.bind(_assertThisInitialized(_this));
    _this.onChangeDisabilityMobility = _this.onChangeDisabilityMobility.bind(_assertThisInitialized(_this));
    _this.onChangeDisabilitySight = _this.onChangeDisabilitySight.bind(_assertThisInitialized(_this));
    _this.onChangeDisabilityLearning = _this.onChangeDisabilityLearning.bind(_assertThisInitialized(_this));
    _this.onChangeDisabilityOthers = _this.onChangeDisabilityOthers.bind(_assertThisInitialized(_this)); // ////////////////////////////////////////////////////////////////////////////////////

    _this.onChangeNextKinName = _this.onChangeNextKinName.bind(_assertThisInitialized(_this));
    _this.onChangeNextKinRelationship = _this.onChangeNextKinRelationship.bind(_assertThisInitialized(_this));
    _this.onChangeNextKinOccupation = _this.onChangeNextKinOccupation.bind(_assertThisInitialized(_this));
    _this.onChangeNextKinPhone = _this.onChangeNextKinPhone.bind(_assertThisInitialized(_this));
    _this.onChangeNextKinEmail = _this.onChangeNextKinEmail.bind(_assertThisInitialized(_this)); // //////////// IDENTITY //////////////////////////////

    _this.onChangeProfilePicture = _this.onChangeProfilePicture.bind(_assertThisInitialized(_this)); // this.onChangePassportPhotograph         =this.onChangePassportPhotograph.bind(this);
    // this.onChangeTypeOfIdentification       =this.onChangeTypeOfIdentification.bind(this);
    // this.onChangeIdPassportNumber           =this.onChangeIdPassportNumber.bind(this);
    // this.onChangeIdPassportUpload         =this.onChangeIdPassportUpload.bind(this);
    // ///////////////////////////////////////////////////////

    _this.onChangeProgrammeFirstChoice = _this.onChangeProgrammeFirstChoice.bind(_assertThisInitialized(_this));
    _this.onChangeProgrammeSecondChoice = _this.onChangeProgrammeSecondChoice.bind(_assertThisInitialized(_this));
    _this.onChangeProgrammeThirdChoice = _this.onChangeProgrammeThirdChoice.bind(_assertThisInitialized(_this));
    _this.onChangeAcademicSession = _this.onChangeAcademicSession.bind(_assertThisInitialized(_this));
    _this.onChangeAdmissionIntake = _this.onChangeAdmissionIntake.bind(_assertThisInitialized(_this));
    _this.onChangeStudyMode = _this.onChangeStudyMode.bind(_assertThisInitialized(_this));
    _this.onChangePreviousResultTranscript = _this.onChangePreviousResultTranscript.bind(_assertThisInitialized(_this)); // ///////////////////////////////////////////////////////
    // /////////////////// MEDICAL HISTORY /////////////////////////////////////

    _this.onChangeMedicationsCurrentlyUsing = _this.onChangeMedicationsCurrentlyUsing.bind(_assertThisInitialized(_this));
    _this.onChangeAllergies = _this.onChangeAllergies.bind(_assertThisInitialized(_this));
    _this.onChangeBloodGroup = _this.onChangeBloodGroup.bind(_assertThisInitialized(_this));
    _this.onChangeUnderlyingConditions = _this.onChangeUnderlyingConditions.bind(_assertThisInitialized(_this));
    _this.onChangeFamilyMedicalHistory = _this.onChangeFamilyMedicalHistory.bind(_assertThisInitialized(_this));
    _this.onChangeHypertensive = _this.onChangeHypertensive.bind(_assertThisInitialized(_this));
    _this.onChangeDiabetic = _this.onChangeDiabetic.bind(_assertThisInitialized(_this)); // ////////////////// SHARE MEDICAL HISTORY //////////////////////////////

    _this.onChangeShareMedHistory = _this.onChangeShareMedHistory.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onSubmitMedicalHistory = _this.onSubmitMedicalHistory.bind(_assertThisInitialized(_this));
    _this.onSubmitShareMedHistory = _this.onSubmitShareMedHistory.bind(_assertThisInitialized(_this)); // ///////////// IDENTITY SUBMISSION /////////////////

    _this.onSubmitProfilePicture = _this.onSubmitProfilePicture.bind(_assertThisInitialized(_this)); // this.fileUploadIdPassport = this.fileUploadIdPassport.bind(this)
    // this.idPassportDetails = this.idPassportDetails.bind(this)

    _this.state = {
      token: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.auth_token : "",
      id: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.id : "",
      first_name: "",
      last_name: "",
      middle_name: "",
      email: "",
      zip_code: "",
      telephone: "",
      title: "",
      gender: "",
      dob: "",
      nationality: "",
      country_of_residence: "",
      district_province_state: "",
      contact_address: "",
      height: "",
      weight: "",
      // ///////// DISABILITY /////////////////////////////////////////
      disability_none: "",
      disability_hearing: "",
      disability_mobility: "",
      disability_sight: "",
      disability_learning: "",
      disability_others: "",
      // /////////////////////////////////////////////////////////////
      next_of_kin_name: "",
      next_of_kin_relationship: "",
      next_of_kin_occupation: "",
      next_of_kin_phone: "",
      next_of_kin_email: "",
      // /////////// IDENTITY ////////////////////////////////
      passport_photograph: "",
      type_of_identification: "",
      id_passport_number: "",
      profile_picture: null,
      // ////////////////////////////////////////////////////
      programme_first_choice: "",
      programme_second_choice: "",
      programme_third_choice: "",
      academic_session: "",
      admission_intake: "",
      study_mode: "",
      previous_result_transcript: "",
      // ////////////////////////////////////////////
      medications_currently_using: "",
      allergies: "",
      blood_group: "",
      underlying_conditions: "",
      family_medical_history: "",
      hypertensive: "",
      diabetic: "",
      status: "",
      created_at: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.created_at : "",
      user_type: localStorage["appState"] ? JSON.parse(localStorage["appState"]).user.user_type : "",
      collapse: false,
      collapse_identification: false,
      collapse_app_instructions: false,
      fadeIn: true,
      timeout: 300,
      // //////////////////////////////////////////////////
      avatar: __webpack_require__(/*! ./../../images/avatars/0.jpg */ "./resources/coreui/src/images/avatars/0.jpg"),
      metaValue: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
      startDate: new Date(),
      // //////////////////modal
      primary: false,
      share_med_history: "" // profile_pictureimageUrl: "/images/cam-medics-logo.png"

    };
    return _this;
  }

  _createClass(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:8000/api/user/get/" + this.state.id + "?token=".concat(this.state.token)).then(function (response) {
        console.log("It came back");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          console.log("It came back 2");

          _this2.setState({
            title: json.data.data.title,
            first_name: json.data.data.first_name,
            last_name: json.data.data.last_name,
            middle_name: json.data.data.middle_name,
            email: json.data.data.email,
            zip_code: json.data.data.zip_code,
            telephone: json.data.data.telephone,
            gender: json.data.data.gender,
            dob: json.data.data.dob,
            nationality: json.data.data.nationality,
            country_of_residence: json.data.data.country_of_residence,
            district_province_state: json.data.data.district_province_state,
            contact_address: json.data.data.contact_address,
            height: json.data.data.height,
            weight: json.data.data.weight,
            // ///////// DISABILITY /////////////////////////////////////////
            disability_none: json.data.data.disability_none,
            disability_hearing: json.data.data.disability_hearing,
            disability_mobility: json.data.data.disability_mobility,
            disability_sight: json.data.data.disability_sight,
            disability_learning: json.data.data.disability_learning,
            disability_others: json.data.data.disability_others,
            /////////////////////////////////////////////
            next_of_kin_name: json.data.data.next_kin_name,
            next_of_kin_relationship: json.data.data.next_kin_relationship,
            next_of_kin_occupation: json.data.data.next_kin_occupation,
            next_of_kin_phone: json.data.data.next_kin_phone,
            next_of_kin_email: json.data.data.next_kin_email,
            // /////////////////////////////////////////////
            // //////////////////////////////////////////////////////
            medications_currently_using: json.data.data.med_currently_using,
            allergies: json.data.data.med_allergies,
            blood_group: json.data.data.med_blood_group,
            underlying_conditions: json.data.data.med_underlying_conditions,
            family_medical_history: json.data.data.med_family_medical_history,
            hypertensive: json.data.data.med_hypertensive,
            diabetic: json.data.data.med_diabetic,
            profile_picture: json.data.data.profile_picture,
            status: json.data.data.status
          });
        } else alert("Login Failed!");
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    } // For datepicker

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
    } // /////////////// Share medical records

  }, {
    key: "togglePrimary",
    value: function togglePrimary() {
      this.setState({
        primary: !this.state.primary
      });
    } // ON Change of first name input

  }, {
    key: "onChangeFirstName",
    value: function onChangeFirstName(e) {
      this.setState({
        first_name: e.target.value
      });
    }
  }, {
    key: "onChangeLastName",
    value: function onChangeLastName(e) {
      this.setState({
        last_name: e.target.value
      });
    }
  }, {
    key: "onChangeLastName",
    value: function onChangeLastName(e) {
      this.setState({
        last_name: e.target.value
      });
    }
  }, {
    key: "onChangeMiddleName",
    value: function onChangeMiddleName(e) {
      this.setState({
        middle_name: e.target.value
      });
    }
  }, {
    key: "onChangeEmail",
    value: function onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
  }, {
    key: "onChangeZipCode",
    value: function onChangeZipCode(e) {
      this.setState({
        zip_code: e.target.value
      });
    }
  }, {
    key: "onChangeTelephone",
    value: function onChangeTelephone(e) {
      this.setState({
        telephone: e.target.value
      });
    }
  }, {
    key: "onChangeTitle",
    value: function onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
    }
  }, {
    key: "onChangeGender",
    value: function onChangeGender(e) {
      this.setState({
        gender: e.target.value
      });
    }
  }, {
    key: "onChangeDob",
    value: function onChangeDob(e) {
      this.setState({
        dob: e.target.value
      });
    }
  }, {
    key: "onChangeNationality",
    value: function onChangeNationality(e) {
      this.setState({
        nationality: e.target.value
      });
    }
  }, {
    key: "onChangeCountryOfResidence",
    value: function onChangeCountryOfResidence(e) {
      this.setState({
        country_of_residence: e.target.value
      });
    }
  }, {
    key: "onChangeDistrictProvinceState",
    value: function onChangeDistrictProvinceState(e) {
      this.setState({
        district_province_state: e.target.value
      });
    }
  }, {
    key: "onChangeContactAddress",
    value: function onChangeContactAddress(e) {
      this.setState({
        contact_address: e.target.value
      });
    }
  }, {
    key: "onChangeHeight",
    value: function onChangeHeight(e) {
      this.setState({
        height: e.target.value
      });
    }
  }, {
    key: "onChangeWeight",
    value: function onChangeWeight(e) {
      this.setState({
        weight: e.target.value
      });
    } // //////////////////////// DISABILITY /////////////////////////////////////////////////////////////

  }, {
    key: "onChangeDisabilityNone",
    value: function onChangeDisabilityNone(e) {
      this.setState({
        disability_none: !this.state.disability_none
      });
    }
  }, {
    key: "onChangeDisabilityHearing",
    value: function onChangeDisabilityHearing(e) {
      this.setState({
        disability_hearing: !this.state.disability_hearing
      });
    }
  }, {
    key: "onChangeDisabilityMobility",
    value: function onChangeDisabilityMobility(e) {
      this.setState({
        disability_mobility: !this.state.disability_mobility
      });
    }
  }, {
    key: "onChangeDisabilitySight",
    value: function onChangeDisabilitySight(e) {
      this.setState({
        disability_sight: !this.state.disability_sight
      });
    }
  }, {
    key: "onChangeDisabilityLearning",
    value: function onChangeDisabilityLearning(e) {
      this.setState({
        disability_learning: !this.state.disability_learning
      });
    }
  }, {
    key: "onChangeDisabilityOthers",
    value: function onChangeDisabilityOthers(e) {
      this.setState({
        disability_others: !this.state.disability_others
      });
    } ///////////////////////////////////////////////////////////////////////////////////////////////////

  }, {
    key: "onChangeNextKinName",
    value: function onChangeNextKinName(e) {
      this.setState({
        next_of_kin_name: e.target.value
      });
    }
  }, {
    key: "onChangeNextKinRelationship",
    value: function onChangeNextKinRelationship(e) {
      this.setState({
        next_of_kin_relationship: e.target.value
      });
    }
  }, {
    key: "onChangeNextKinOccupation",
    value: function onChangeNextKinOccupation(e) {
      this.setState({
        next_of_kin_occupation: e.target.value
      });
    }
  }, {
    key: "onChangeNextKinPhone",
    value: function onChangeNextKinPhone(e) {
      this.setState({
        next_of_kin_phone: e.target.value
      });
    }
  }, {
    key: "onChangeNextKinEmail",
    value: function onChangeNextKinEmail(e) {
      this.setState({
        next_of_kin_email: e.target.value
      });
    } // onChangePassportPhotograph(e)         { this.setState({ passport_photograph:e.target.value  }); }
    // ///////////////// IDENTITY ///////////////////////////////
    // pass in the file into state

  }, {
    key: "onChangeProfilePicture",
    value: function onChangeProfilePicture(e) {
      var _this3 = this;

      this.setState({
        profile_picture: e.target.files[0]
      }); // set a timwer and call the submit profile picture 

      var timeout = setTimeout(function () {
        // call to save images
        _this3.onSubmitProfilePicture(); // call to load contents again so the image can change


        _this3.componentDidMount();
      }, 1000); // },[]);
      // this.onSubmitProfilePicture()
    } // ///////////////////////////////////////////////////////////

  }, {
    key: "onChangeProgrammeFirstChoice",
    value: function onChangeProgrammeFirstChoice(e) {
      this.setState({
        programme_first_choice: e.target.value
      });
    }
  }, {
    key: "onChangeProgrammeSecondChoice",
    value: function onChangeProgrammeSecondChoice(e) {
      this.setState({
        programme_second_choice: e.target.value
      });
    }
  }, {
    key: "onChangeProgrammeThirdChoice",
    value: function onChangeProgrammeThirdChoice(e) {
      this.setState({
        programme_third_choice: e.target.value
      });
    }
  }, {
    key: "onChangeAcademicSession",
    value: function onChangeAcademicSession(e) {
      this.setState({
        academic_session: e.target.value
      });
    }
  }, {
    key: "onChangeAdmissionIntake",
    value: function onChangeAdmissionIntake(e) {
      this.setState({
        admission_intake: e.target.value
      });
    }
  }, {
    key: "onChangeStudyMode",
    value: function onChangeStudyMode(e) {
      this.setState({
        study_mode: e.target.value
      });
    }
  }, {
    key: "onChangePreviousResultTranscript",
    value: function onChangePreviousResultTranscript(e) {
      this.setState({
        previous_result_transcript: e.target.value
      });
    }
  }, {
    key: "onChangeStatus",
    value: function onChangeStatus(e) {
      this.setState({
        status: e.target.value
      });
    } // ////////////////////////////////////////////////////////////

  }, {
    key: "onChangeMedicationsCurrentlyUsing",
    value: function onChangeMedicationsCurrentlyUsing(e) {
      this.setState({
        medications_currently_using: e.target.value
      });
    }
  }, {
    key: "onChangeAllergies",
    value: function onChangeAllergies(e) {
      this.setState({
        allergies: e.target.value
      });
    }
  }, {
    key: "onChangeBloodGroup",
    value: function onChangeBloodGroup(e) {
      this.setState({
        blood_group: e.target.value
      });
    }
  }, {
    key: "onChangeUnderlyingConditions",
    value: function onChangeUnderlyingConditions(e) {
      this.setState({
        underlying_conditions: e.target.value
      });
    }
  }, {
    key: "onChangeFamilyMedicalHistory",
    value: function onChangeFamilyMedicalHistory(e) {
      this.setState({
        family_medical_history: e.target.value
      });
    }
  }, {
    key: "onChangeHypertensive",
    value: function onChangeHypertensive(e) {
      this.setState({
        hypertensive: e.target.value
      });
    }
  }, {
    key: "onChangeDiabetic",
    value: function onChangeDiabetic(e) {
      this.setState({
        diabetic: e.target.value
      });
    } // //////////////////// SHARE MED HISTORY /////////////////////////

  }, {
    key: "onChangeShareMedHistory",
    value: function onChangeShareMedHistory(e) {
      this.setState({
        share_med_history: e.target.value
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this4 = this;

      e.preventDefault();
      var application_data = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        middle_name: this.state.middle_name,
        email: this.state.email,
        zip_code: this.state.zip_code,
        telephone: this.state.telephone,
        title: this.state.title,
        gender: this.state.gender,
        dob: this.state.dob,
        nationality: this.state.nationality,
        country_of_residence: this.state.country_of_residence,
        district_province_state: this.state.district_province_state,
        contact_address: this.state.contact_address,
        height: this.state.height,
        weight: this.state.weight,
        disability_none: this.state.disability_none,
        disability_hearing: this.state.disability_hearing,
        disability_mobility: this.state.disability_mobility,
        disability_sight: this.state.disability_sight,
        disability_learning: this.state.disability_learning,
        disability_others: this.state.disability_others,
        next_kin_name: this.state.next_of_kin_name,
        next_kin_relationship: this.state.next_of_kin_relationship,
        next_kin_occupation: this.state.next_of_kin_occupation,
        next_kin_phone: this.state.next_of_kin_phone,
        next_kin_email: this.state.next_of_kin_email
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("http://localhost:8000/api/user/update/" + this.state.id + "?token=".concat(this.state.token), application_data).then(function (response) {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this4.setState({// applications_list: json.data.data.data,
          });
        } else alert("Login Failed!");
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    }
  }, {
    key: "onSubmitMedicalHistory",
    value: function onSubmitMedicalHistory(e) {
      var _this5 = this;

      e.preventDefault();
      var application_data = {
        med_currently_using: this.state.medications_currently_using,
        med_allergies: this.state.allergies,
        med_blood_group: this.state.blood_group,
        med_underlying_conditions: this.state.underlying_conditions,
        med_family_medical_history: this.state.family_medical_history,
        med_hypertensive: this.state.hypertensive,
        med_diabetic: this.state.diabetic
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("http://localhost:8000/api/user/updateMed/" + this.state.id + "?token=".concat(this.state.token), application_data).then(function (response) {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this5.setState({// applications_list: json.data.data.data,
          });
        } else alert("Login Failed!");
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    }
  }, {
    key: "onSubmitShareMedHistory",
    value: function onSubmitShareMedHistory(e) {
      var _this6 = this;

      e.preventDefault();
      var share_med_data = {
        share_med_history: this.state.share_med_history
      };
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("http://localhost:8000/api/user/shareMedHistory/" + this.state.id + "?token=".concat(this.state.token), share_med_data).then(function (response) {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      }).then(function (json) {
        if (json.data.success) {
          _this6.setState({// applications_list: json.data.data.data,
          });
        } else alert("Login Failed!");
      })["catch"](function (error) {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error("An Error Occuredd! ".concat(error));
      });
    }
  }, {
    key: "onSubmitProfilePicture",
    value: function onSubmitProfilePicture(e) {
      // e.preventDefault() // Stop form submit
      this.fileUploadProfilePicture(this.state.profile_picture).then(function (response) {
        console.log(response.data); // Call the function to get and store passport type n id number
        // this.idPassportDetails()
      });
    }
  }, {
    key: "fileUploadProfilePicture",
    value: function fileUploadProfilePicture(profile_picture) {
      var url = 'http://localhost:8000/api/user/updateProfilePicture/' + this.state.id + "?token=".concat(this.state.token);
      var formData = new FormData();
      formData.append('profile_picture', profile_picture);
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      return Object(axios__WEBPACK_IMPORTED_MODULE_4__["post"])(url, formData, config);
    } // idPassportDetails(){
    //   const application_data ={
    //     type_of_identification : this.state.type_of_identification, id_passport_number : this.state.id_passport_number
    //   }
    //   axios.put(`http://localhost:8000/api/user/updateIdDetails/`+this.state.id+`?token=${this.state.token}`, application_data)
    //   .then(response => {
    //     console.log("ROI Cartoon");
    //     console.log(response);
    //     return response;
    //   })
    //   .then(json => {
    //     if (json.data.success) {
    //       this.setState({ 
    //         // applications_list: json.data.data.data,
    //       });
    //     } else alert("Login Failed!");
    //   })
    //   .catch(error => {
    //     // redirect user to previous page if user does not have autorization to the page
    //     hashHistory.push('/premontessori');
    //     console.error(`An Error Occuredd! ${error}`);
    //   });
    // }

  }, {
    key: "trigerFileUpload",
    value: function trigerFileUpload() {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#profile_picture').trigger('click');
    } // onError() {
    //   this.setState({
    //     imageUrl: "/images/cam-medics-logo.png"
    //   })
    // }

  }, {
    key: "render",
    value: function render() {
      // gets the state value as a string and convert to boolean
      if (this.state.disability_none == "false") {
        this.state.disability_none = false;
      }

      if (this.state.disability_hearing == "false") {
        this.state.disability_hearing = false;
      }

      if (this.state.disability_mobility == "false") {
        this.state.disability_mobility = false;
      }

      if (this.state.disability_sight == "false") {
        this.state.disability_sight = false;
      }

      if (this.state.disability_learning == "false") {
        this.state.disability_learning = false;
      }

      if (this.state.disability_others == "false") {
        this.state.disability_others = false;
      }

      if (this.state.disability_none == "true") {
        this.state.disability_none = true;
      }

      if (this.state.disability_hearing == "true") {
        this.state.disability_hearing = true;
      }

      if (this.state.disability_mobility == "true") {
        this.state.disability_mobility = true;
      }

      if (this.state.disability_sight == "true") {
        this.state.disability_sight = true;
      }

      if (this.state.disability_learning == "true") {
        this.state.disability_learning = true;
      }

      if (this.state.disability_others == "true") {
        this.state.disability_others = true;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "12",
        sm: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Profile Form"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "12",
        sm: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], {
        className: "border-bottom text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb-3 mx-auto"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "rounded-circle",
        src: this.state.profile_picture,
        alt: this.state.name,
        width: "110"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "mb-0"
      }, this.state.first_name, " ", this.state.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-muted d-block mb-2"
      }, this.state.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroupItem"], {
        className: "px-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        block: true,
        outline: true,
        color: "success",
        onClick: this.trigerFileUpload
      }, "Update Profile Photograph"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "file",
        color: "primary",
        id: "profile_picture",
        style: {
          display: "none"
        },
        onChange: this.onChangeProfilePicture
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "text-muted d-block mb-2"
      }, this.state.metaTitle)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "12",
        sm: "9"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Profile Instructions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "primary",
        onClick: this.toggle_app_instructions,
        className: 'mb-1',
        id: "",
        size: "sm"
      }, "Toggle"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: this.state.collapse_app_instructions
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Thank you for choosing Cam Medics!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All communications regarding your application and responses to your inquiries will be sent to the email address that you have provided in your account. You are therefore encouraged to check your email regularly.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Using this account, you can start a new application or resume an existing application.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "How to Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "1. Complete the application forms.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "2. Upload the required academic documents and any other relevant documents.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "3. Upload your passport photo or take a webcam photo", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "You are required to scan all the academic documents and any other relevant documents prior to starting the online application process. In addition, you are required to have a passport photograph ready, if you do not wish to take a webcam photo.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "If you complete and submit your application without academic documents or with partial academic documents, you can still use this account to upload the required documents.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Editing Application Information: Before making the final submission of your application, you can edit your application information. However, after making the final submission of the application form, you will not be able to edit it."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Personal Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "primary",
        onClick: this.toggle,
        className: 'mb-1',
        id: "",
        size: "sm"
      }, "Toggle"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: this.state.collapse
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        onSubmit: this.onSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "12",
        sm: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        id: "title",
        value: this.state.title,
        onChange: this.onChangeTitle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " --- select --- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1"
      }, "Mr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "2"
      }, "Mrs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "3"
      }, "Ms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "3"
      }, "Miss")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Gender")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        id: "gender",
        value: this.state.gender,
        onChange: this.onChangeGender
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " --- select --- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1"
      }, "Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "2"
      }, "Female")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "First Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "first_name",
        defaultValue: this.state.first_name,
        onChange: this.onChangeFirstName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Middle Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "middle_name",
        defaultValue: this.state.middle_name,
        onChange: this.onChangeMiddleName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-envelope"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Last Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "last_name",
        defaultValue: this.state.last_name,
        onChange: this.onChangeLastName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Phone Number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        id: "zip_code",
        value: this.state.zip_code,
        onChange: this.onChangeZipCode
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " Zip Code "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "NG (+234)"
      }, "NG (+234)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "UG (+256)"
      }, "UG (+256)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "telephone",
        defaultValue: this.state.telephone,
        onChange: this.onChangeTelephone
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Date of Birth")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "date",
        id: "dob",
        defaultValue: this.state.dob,
        onChange: this.onChangeDob
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Nationality")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        id: "nationality",
        value: this.state.nationality,
        onChange: this.onChangeNationality
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " --- select --- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1"
      }, "Ghana"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "2"
      }, "Nigeria")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Country of Residence")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        id: "country_of_residence",
        value: this.state.country_of_residence,
        onChange: this.onChangeCountryOfResidence
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " --- select --- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "1"
      }, "Ghana"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "2"
      }, "Nigeria")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "District/Province/State")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "district_province_state",
        defaultValue: this.state.district_province_state,
        onChange: this.onChangeDistrictProvinceState
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Contact Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "textarea",
        id: "contact_address",
        rows: "2",
        defaultValue: this.state.contact_address,
        onChange: this.onChangeContactAddress,
        placeholder: "Contact Address"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "12",
        sm: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Height ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "height",
        defaultValue: this.state.height,
        onChange: this.onChangeHeight
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Weight ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "weight",
        defaultValue: this.state.weight,
        onChange: this.onChangeWeight
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Disability:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "12",
        sm: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        className: "form-check-input",
        type: "checkbox",
        id: "disability_none",
        checked: this.state.disability_none,
        onChange: this.onChangeDisabilityNone
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        className: "form-check-label",
        htmlFor: "checkbox1"
      }, "None")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        className: "form-check-input",
        type: "checkbox",
        id: "hearing",
        checked: this.state.disability_hearing,
        onChange: this.onChangeDisabilityHearing
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        className: "form-check-label",
        htmlFor: "checkbox2"
      }, "Hearing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        className: "form-check-input",
        type: "checkbox",
        id: "mobility",
        checked: this.state.disability_mobility,
        onChange: this.onChangeDisabilityMobility
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        className: "form-check-label",
        htmlFor: "checkbox3"
      }, "Mobility"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "12",
        sm: "6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        className: "form-check-input",
        type: "checkbox",
        id: "sight",
        checked: this.state.disability_sight,
        onChange: this.onChangeDisabilitySight
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        className: "form-check-label",
        htmlFor: "checkbox1"
      }, "Sight")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        className: "form-check-input",
        type: "checkbox",
        id: "learning_disability",
        checked: this.state.disability_learning,
        onChange: this.onChangeDisabilityLearning
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        className: "form-check-label",
        htmlFor: "checkbox2"
      }, "Learning Disability")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        check: true,
        className: "checkbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        className: "form-check-input",
        type: "checkbox",
        id: "others",
        checked: this.state.disability_others,
        onChange: this.onChangeDisabilityOthers
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        check: true,
        className: "form-check-label",
        htmlFor: "checkbox3"
      }, "others")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Next of Kin Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Full Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "next_of_kin_name",
        defaultValue: this.state.next_of_kin_name,
        onChange: this.onChangeNextKinName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Relationship")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "next_of_kin_relationship",
        defaultValue: this.state.next_of_kin_relationship,
        onChange: this.onChangeNextKinRelationship
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Occupation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "next_of_kin_occupation",
        defaultValue: this.state.next_of_kin_occupation,
        onChange: this.onChangeNextKinOccupation
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Phone")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "text",
        id: "next_of_kin_phone",
        defaultValue: this.state.next_of_kin_phone,
        onChange: this.onChangeNextKinPhone
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "email",
        id: "next_of_kin_email",
        defaultValue: this.state.next_of_kin_email,
        onChange: this.onChangeNextKinEmail
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        className: "form-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        type: "submit",
        size: "sm",
        color: "primary"
      }, "Update Personal Details")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-align-justify"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Medical History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "primary",
        onClick: this.toggle_identification,
        className: 'mb-1',
        id: "",
        size: "sm"
      }, "Toggle"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
        isOpen: this.state.collapse_identification
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        onSubmit: this.onSubmitMedicalHistory
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        xs: "12",
        sm: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "List of Medications You are Currently Using")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "textarea",
        id: "medications_currently_using",
        rows: "2",
        defaultValue: this.state.medications_currently_using,
        onChange: this.onChangeMedicationsCurrentlyUsing,
        placeholder: "List of Medications You are Currently Using"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Allergies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "textarea",
        id: "allergies",
        rows: "2",
        defaultValue: this.state.allergies,
        onChange: this.onChangeAllergies,
        placeholder: ":List of Allergies "
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Blood Group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        id: "blood_group",
        value: this.state.blood_group,
        onChange: this.onChangeBloodGroup
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
      }, "AB-")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Underlying Conditions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "textarea",
        id: "underlying_conditions",
        rows: "2",
        defaultValue: this.state.underlying_conditions,
        onChange: this.onChangeUnderlyingConditions,
        placeholder: ":Underlying conditions"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Family Medical History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "textarea",
        id: "family_medical_history",
        rows: "2",
        defaultValue: this.state.family_medical_history,
        onChange: this.onChangeFamilyMedicalHistory,
        placeholder: ":Family Medical History"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Hypertensive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        id: "hypertensive",
        value: this.state.hypertensive,
        onChange: this.onChangeHypertensive
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " --- select --- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Yes"
      }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "No"
      }, "No")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Diabetic")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "select",
        id: "diabetic",
        value: this.state.diabetic,
        onChange: this.onChangeDiabetic
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "0"
      }, " --- select --- "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Yes"
      }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "No"
      }, "No")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-user"
      }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        className: "form-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        type: "submit",
        size: "sm",
        color: "primary"
      }, "Update Medical History"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header-actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "primary",
        onClick: this.togglePrimary,
        className: 'mb-1',
        id: "",
        size: "sm"
      }, "Share Medical Record"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
        isOpen: this.state.primary,
        toggle: this.togglePrimary,
        className: 'modal-primary ' + this.props.className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalHeader"], {
        toggle: this.togglePrimary
      }, "Share Medical Record"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        onSubmit: this.onSubmitShareMedHistory
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "prepend"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, "Doctor / Airport email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        type: "textarea",
        id: "share_med_history",
        rows: "2",
        onChange: this.onChangeShareMedHistory,
        placeholder: "enter the doctor or airport email"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupAddon"], {
        addonType: "append"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-asterisk"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        type: "submit",
        size: "sm",
        color: "primary"
      }, "Share"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        color: "secondary",
        onClick: this.togglePrimary
      }, "Cancel")))))))));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

}]);