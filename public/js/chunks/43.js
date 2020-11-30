(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./resources/coreui/src/images/logo/cam-medics-logo.png":
/*!**************************************************************!*\
  !*** ./resources/coreui/src/images/logo/cam-medics-logo.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cam-medics-logo.png?20d7a32b8eafe9ebd1a3a00687b3ed63";

/***/ }),

/***/ "./resources/coreui/src/views/Pages/PrivacyPolicy/PrivacyPolicy.js":
/*!*************************************************************************!*\
  !*** ./resources/coreui/src/views/Pages/PrivacyPolicy/PrivacyPolicy.js ***!
  \*************************************************************************/
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

var PrivacyPolicy = /*#__PURE__*/function (_Component) {
  _inherits(PrivacyPolicy, _Component);

  var _super = _createSuper(PrivacyPolicy);

  function PrivacyPolicy() {
    var _this;

    _classCallCheck(this, PrivacyPolicy);

    _this = _super.call(this);
    _this.state = {
      avatar: __webpack_require__(/*! ./../../../images/logo/cam-medics-logo.png */ "./resources/coreui/src/images/logo/cam-medics-logo.png"),
      Cam_Medics: 'CamMedics Logo'
    };
    return _this;
  }

  _createClass(PrivacyPolicy, [{
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
      }, "PRIVACY POLICY, CAMMEDICS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "International Medical Law Centre,  (\u201Cwe, \u201Cus\u201D, \u201Cour\u201D or \u201CCompany\u201D) operates cammedics.com website (\u201CSite\u201D) as well as provides telemedicine services. This policy applies to our website as well as to the services and applications we provide, collectively known as the \u201CServices.\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "CamMedics is committed to ensuring that your personal information shared over our Site and/or Services is protected and kept confidential. By accepting our Company\u2019s Terms of Use or providing information to us via our Site, you consent to the use and disclosure of Personally Identifiable Information (PII) and Protected Health Information (PHI) as outlined in this Privacy Policy. Please note that the use and disclosure of such information is also subject to the practices of the healthcare providers with whom you may interact through the Services, as described in the Notice of Privacy Practices, which is provided to you by such providers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To adjust your email and data preferences or opt out of further communications, please kindly notify us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " INFORMATION COLLECTION "), "PHI is information that includes, but is not limited to, identifying data such as name, social security number, address, contact information, as well as information about personal health issues and insurance submitted through our Services. CamMedics collects PHI and other PII that you voluntarily submit.Privacy is of the utmost importance so we are committed to protecting and keeping confidential all PII and PHI that identifies an individual whether or not it relates to an individual\u2019s past, present, or future physical or mental health condition.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CamMedics  maintains PHI in compliance with these rules and our contractual obligations with healthcare providers.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Our main focus is providing a platform to allow individuals to receive telehealth Services from various healthcare providers. CamMedics collects information solely for the purposes of providing the Services, marketing and promoting our Services to you, and for market research data. We use this information ourselves and share it as needed with our partners solely for their performance of contracted services for us. We may also collect PII for marketing, user experience monitoring and improvement, and related business purposes. We never sell PII that we collect.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CamMedics maintains web logs to record data about all visitors who use the Site and interact with the Services and we will store this information.  These logs may contain IP address information, type(s) of operating system(s) you use, the date and time you visited the site, and information about the type of device you use to connect to the Services and the Site pages you visited.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "All web logs are stored securely and are accessible to a very limited number of employees and contractors as required. Those with access to this data adhere to strict guidelines regarding user data security and privacy.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Collecting IP addresses is standard practice and done automatically by many websites, applications, and other services. CamMedics uses IP addresses to calculate usage levels of the Site, help diagnose problems with our servers, administer our Site, and monitor regions from which you navigate to our Site.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "You may be asked to submit personal information if you sign up for a demo, register for an event, access our free content, or make similar requests. Examples of free content include webinars, case studies, videos, and white papers. We may collect your name, job title, email address, phone number, and certain information about your company. We use this information to contact you about your request (such as a demo request or submitting a form asking for more information on our products and services) or provide you with requested content.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "If you submit any personal information that is not your own, you represent that you have the authority to do so and to permit us to use that information in accordance with this Privacy Policy. If you contact us with a question, comment, or complaint, we may collect your name and contact information (such as your email address or mailing address) in order for us to respond to your request. We may also keep a record of the correspondence in order to assist you in the future.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "If you sign up to receive marketing communications from CamMedics, we will collect your name and email address in order to email you regarding products and services that you have indicated are of interest to you. You may also be added to our marketing list when you create a CamMedics account or are issued one by your employer.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "If you apply for a job at CamMedics, you may provide us with certain personal information about yourself (such as that contained in a resume, cover letter, or similar employment-related materials). We use this information for the purpose of processing and responding to your application for current and future career opportunities."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " SUBMIT, ACCESS, ADJUST, OR REMOVE YOUR INFORMATION "), "If you would like to access, correct, amend, remove, obtain a copy, or limit the use of any PII about you that has been collected and stored by CamMedics, please notify our Data Protection officer or call us.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "For your protection, we may need to verify your identity before fulfilling your request to access, correct, amend, remove, obtain a copy, or limit the use of your PII. We will use the email address from your request to identify PII that CamMedics has collected and stored. We will respond to your request at our earliest convenience and in compliance with in accordance with applicable law.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "We may need to retain certain information for recordkeeping compliance, to complete transactions that you began prior to requesting such access, change or deletion, or in the event that you have an active account using our software and/or the Services. In general, we will retain your PII for the period necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "You have the ability to opt in to receiving messages from CamMedics, to opt out of receiving direct marketing or market research information, or to adjust your specific email preferences. To opt in to emails, adjust your email and data preferences, or opt out of further communications, kindly notify us.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "By actively opting into emails from CamMedics, you agree that your information may undergo processing including updating your record to reflect your affirmative request to receive emails and tracking within those emails such as when you open them and when you click on links. We use that data to determine which content resonates with you to personalize your experience with CamMedics and for other marketing purposes, such as determining your interest in our Services. If you do not want to have your data processed in this manner, you can opt out of emails from  CamMedics or you can abstain from opting into communications. We include a link to change your email preference or opt out on all marketing communications.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Please note that you may continue to receive certain transactional and account-related messages from us after opting out, such as system outage alerts."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " \u201CCOOKIES\u201D AND INTERNET TAGS "), "CamMedics may collect and process information about your use of the Services, such as the Site pages you visit, the website you came from and some of the searches you perform. We use this information to help improve the contents of the Site and the Services and to compile aggregate statistics about individuals using our Site and the Services for internal, market research purposes. In doing this, we may install \u201Ccookies\u201D that collect the domain name of the user, your internet service provider, your operating system, and the date and time of access. A cookie is a small piece of information, which is sent to your browser and stored on your computer or other device. Cookies do not damage your device. You can set your browser to notify you when you receive a cookie. This will enable you to decide if you want to accept it or not. If you do not accept cookies, you may not be able to use all functionality of your browser software or this Site. We may obtain the services of outside parties to assist us in collecting and processing information collected through cookies.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CamMedics  may also use internet tags (also known as action tags, web beacons, single-pixel GIFs, clear GIFs, invisible GIFs, and 1-by-1 GIFs) and cookies through the Services and may deploy these tags/cookies through a third-party advertising partner or a web analytical service partner which may be located and store the respective information (including your IP address) in a foreign country. These tags/cookies may be placed both on online advertisements that bring users to the Services and on different pages of the Site. We use this technology to measure the visitors\u2019 responses to the Site and the Services and the effectiveness of our advertising campaigns (including how many times a page is opened and what information is consulted) as well as to evaluate your use of the Services. The third-party partner or the web analytical service partner may be able to collect data about visitors to the Site and other sites because of these internet tags/cookies, may compose reports regarding the Site\u2019s activity for us and may provide further services which are related to the use of the Site and the internet. They may provide such information to other parties, if there is a legal requirement that they do so, or if they hire the other parties to process information on their behalf. If you would like more information about web tags and cookies associated with on-line advertising or to opt-out of third-party collection of this information, please visit the Network Advertising Initiative website https://www.networkadvertising.org. (We are not affiliated with the Networking Advertising Initiative in any way.)  If you opt out, please be advised that your user experience will be affected."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " MOBILE DEVICES "), "When you download or use apps created by us (e.g., to deliver the Services), we may receive information about your location and your mobile device, including a unique identifier for your device. We may use this information to provide you with location-based services, such as search results and other personalized content. Most mobile devices allow you to turn off location services."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " NON-PERSONAL DATA "), "CamMedics  may use non-personal information to analyze data into useful information. This process of data mining is done in the aggregate, is non-personal, and allows the site to find correlations and patterns in the data.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CamMedics does not provide any personal information to third party sites that display our interest-based ads. However, third parties (including the ad networks, ad-serving companies, and other service providers they may use) may assume that users who interact with or click on a personalized ad or content are part of the group that the ad or content is directed towards (for example, users in the Northwest who have experienced allergies). Also, some third parties may provide us information about you (such as the sites where you have been shown ads or demographic information) from offline and online sources that we may use to provide you more relevant and useful advertising."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " SHARING OF INFORMATION "), "CamMedics  shares PII and PHI as permitted by law and as authorized by you as described in the Terms of Use, this Privacy Policy, or otherwise. We do not sell PII that we collect.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CamMedics employs third parties to perform functions on our behalf. Examples include technical assistance, analyzing data, and providing marketing assistance. They have access to anonymized and non-anonymized personal information needed to perform their functions, but may not use this information for other purposes. Access to this information will permit them to provide services more efficiently and effectively to you and to us.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "For example: your IP address may be used to estimate your location and personalize your experience with the Services; we may share information such as IP address, user name, email address, and cookie and web beacon information with third parties in order to tailor advertising to our various market segments; your IP address and email address and the page you are viewing may be shared with a third party that operates the \u201Cchat\u201D feature for our Services; and aggregate data about IP addresses, pages loaded, time to load pages and errors encountered may be used by third-party performance monitoring and improvement products.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "These third parties may be required to disclose information, as described in the section below entitled \u201CDisclosures in Accordance with Law.\u201D", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "In some regions, CamMedics  partners with local resellers to offer our products and services. If you are located in those regions, we may share PII with those partners for customer relationship management or email marketing purposes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " SECURITY OF INFORMATION COLLECTED "), "CamMedics uses account information in a password-protected environment as a security measure to protect your data. We use administrative, physical, and technical safeguards to protect data.  We maintain a high level of data protection via safeguards such as data backup, audit controls, access controls, and data encryption. CamMedics use industry standard SSL/TLS encryption to enhance security of electronic data transmissions.  CamMedics will maintain all applicable HIPAA and other regulatory requirements to the extent that it has access to, or otherwise stores, processes or transmits PHI or PII.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "In addition, CamMedics urges you to take precautionary measures in maintaining the integrity of your data. Please be responsible for making sure no one can see or access your account and log-in/password information.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "If you use our Services through a potentially non-secure internet connection, such use is at your own risk. It is your responsibility to check beforehand on your employer\u2019s or such other site\u2019s privacy and security policy with respect to Internet use.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CamMedics is not responsible for your handling, sharing, re-sharing and/or distribution of your PHI or PII. Moreover, if you forward PHI or PII electronically to another person on or off the Service, we are not responsible for any harm or other consequences from third party use or re-sharing of your information."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " THIRD PARTY SITES/TRUSTED RELATIONSHIPS "), "As noted above, under HIPAA the Company may be a Business Associate of healthcare providers who use our Services. We may share information with healthcare providers who provide services to individuals, and they share information with us, for purposes related to treatment, payment and healthcare operations, and otherwise as agreed or authorized by you.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "In some cases, our Site contains links to other sites, including links to relevant thought leadership articles in third-party publications that are not directly affiliated with CamMedics.  We do not share your PHI or PII with those sites (unless you specifically authorize such sharing) and are not responsible for their privacy procedures.  We encourage you to learn their particular privacy policies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " DISCLOSURES IN ACCORDANCE WITH LAW "), "CamMedics  discloses PII about you as required or permitted by law, including complying with legal process (for example, we may disclose your information as necessary to comply with an authorized civil, criminal, or regulatory investigation). We fully cooperate with law enforcement agencies in identifying those who use our services for illegal activities and may, in our sole discretion, disclose personal information or other information to satisfy any law, regulation, subpoena, or government request. We reserve the right to release personal information or other information about users who we believe are engaged in illegal activities or are otherwise in violation of our Terms of Use, even without a subpoena, warrant, or court order, if we believe, in our sole discretion, that such disclosure is necessary or appropriate to operate our web site or to protect our rights or property, or that of our affiliates, or our officers, directors, employees, agents, third-party content providers, suppliers, sponsors, or licensors. We also reserve the right to report to law enforcement agencies any activities we reasonably believe in our sole discretion to be unlawful. If we are legally compelled to disclose information about you to a third party, we will attempt to notify you by sending an email to the email address in our records unless doing so would violate the law or unless you have not provided your email address to us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " CHILDREN "), "Our Site is not designed or intended to appeal to minors and we do not knowingly collect PII from children without the express consent of their parents or legal guardians.."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " CHANGES TO THIS PRIVACY POLICY "), "CamMedics may amend this Privacy Policy in the future. In the event changes are made, we will be sure to post changes at the Site and at other places we deem appropriate."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " QUESTIONS OR SUGGESTIONS "), "If you have any questions or suggestions on ways we can improve our privacy policy with respect to personal information, please call or email us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))))));
    }
  }]);

  return PrivacyPolicy;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PrivacyPolicy);

/***/ })

}]);