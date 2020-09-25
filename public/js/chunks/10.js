(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/coreui/node_modules/@coreui/react/css/scrollbar.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./resources/coreui/node_modules/@coreui/react/css/scrollbar.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* rtl fix */\r\n.ps__rtl .ps__rail-y {\r\n    left: 0px !important;\r\n    right: unset;\r\n}\r\n*[dir=\"rtl\"] .ps__rail-y {\r\n    left: 0px !important;\r\n    right: unset;\r\n}\r\n\r\n.ps__rtl .ps__thumb-y {\r\n    left: 2px;\r\n    right: unset;\r\n}\r\n*[dir=\"rtl\"] .ps__thumb-y {\r\n  left: 2px;\r\n  right: unset;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/coreui/node_modules/react-perfect-scrollbar/dist/css/styles.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./resources/coreui/node_modules/react-perfect-scrollbar/dist/css/styles.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n.scrollbar-container {\n  position: relative;\n  height: 100%; }", ""]);

// exports


/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/css/scrollbar.css":
/*!***********************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/css/scrollbar.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/postcss-loader/src??ref--7-2!./scrollbar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/coreui/node_modules/@coreui/react/css/scrollbar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Aside.js":
/*!*****************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Aside.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared */ "./resources/coreui/node_modules/@coreui/react/es/Shared/index.js");
/* harmony import */ var _Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/toggle-classes */ "./resources/coreui/node_modules/@coreui/react/es/Shared/toggle-classes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  offCanvas: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
} : undefined;
var defaultProps = {
  tag: 'aside',
  display: '',
  fixed: false,
  isOpen: false,
  offCanvas: true
};

var AppAside = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppAside, _Component);

  function AppAside(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.isFixed = _this.isFixed.bind(_assertThisInitialized(_this));
    _this.isOffCanvas = _this.isOffCanvas.bind(_assertThisInitialized(_this));
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AppAside.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
    this.isOffCanvas(this.props.offCanvas);
    this.displayBreakpoint(this.props.display);
  };

  _proto.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('aside-menu-fixed');
    }
  };

  _proto.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('aside-menu-off-canvas');
    }
  };

  _proto.displayBreakpoint = function displayBreakpoint(display) {
    if (display && Object(_Shared__WEBPACK_IMPORTED_MODULE_3__["checkBreakpoint"])(display, _Shared__WEBPACK_IMPORTED_MODULE_3__["validBreakpoints"])) {
      var cssClass = "aside-menu-" + display + "-show";
      Object(_Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["default"])(cssClass, _Shared__WEBPACK_IMPORTED_MODULE_3__["asideMenuCssClasses"], true);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    delete attributes.display;
    delete attributes.fixed;
    delete attributes.offCanvas;
    delete attributes.isOpen;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'aside-menu');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), children);
  };

  return AppAside;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppAside.propTypes =  true ? propTypes : undefined;
AppAside.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppAside);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/AsideToggler.js":
/*!************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/AsideToggler.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/index */ "./resources/coreui/node_modules/@coreui/react/es/Shared/index.js");
/* harmony import */ var _Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/toggle-classes */ "./resources/coreui/node_modules/@coreui/react/es/Shared/toggle-classes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  defaultOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
} : undefined;
var defaultProps = {
  defaultOpen: false,
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};

var AppAsideToggler = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppAsideToggler, _Component);

  function AppAsideToggler(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.asideToggle = _this.asideToggle.bind(_assertThisInitialized(_this));
    _this.state = {};
    return _this;
  }

  var _proto = AppAsideToggler.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.toggle(this.props.defaultOpen);
  };

  _proto.toggle = function toggle(force) {
    var _ref = [this.props.display, this.props.mobile],
        display = _ref[0],
        mobile = _ref[1];
    var cssClass = _Shared_index__WEBPACK_IMPORTED_MODULE_3__["asideMenuCssClasses"][0];

    if (!mobile && display && Object(_Shared_index__WEBPACK_IMPORTED_MODULE_3__["checkBreakpoint"])(display, _Shared_index__WEBPACK_IMPORTED_MODULE_3__["validBreakpoints"])) {
      cssClass = "aside-menu-" + display + "-show";
    }

    Object(_Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["default"])(cssClass, _Shared_index__WEBPACK_IMPORTED_MODULE_3__["asideMenuCssClasses"], force);
  };

  _proto.asideToggle = function asideToggle(e) {
    e.preventDefault();
    this.toggle();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        type = _this$props.type,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "type", "tag"]);

    delete attributes.defaultOpen;
    delete attributes.display;
    delete attributes.mobile;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-toggler');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      type: type,
      className: classes
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.asideToggle(event);
      }
    }), children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "navbar-toggler-icon"
    }));
  };

  return AppAsideToggler;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppAsideToggler.propTypes =  true ? propTypes : undefined;
AppAsideToggler.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppAsideToggler);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Breadcrumb.js":
/*!**********************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Breadcrumb.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./resources/coreui/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./resources/coreui/node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var routes;

var getPaths = function getPaths(pathname) {
  var paths = ['/'];
  if (pathname === '/') return paths;
  pathname.split('/').reduce(function (prev, curr) {
    var currPath = prev + "/" + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

var findRouteName = function findRouteName(url) {
  var aroute = routes.find(function (route) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["matchPath"])(url, {
      path: route.path,
      exact: route.exact
    });
  });
  return aroute && aroute.name ? aroute.name : null;
};

var BreadcrumbsItem = function BreadcrumbsItem(_ref) {
  var match = _ref.match;
  var routeName = findRouteName(match.url);

  if (routeName) {
    return (// eslint-disable-next-line react/prop-types
      match.isExact ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
        active: true
      }, routeName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: match.url || ''
      }, routeName))
    );
  }

  return null;
};

BreadcrumbsItem.propTypes =  true ? {
  match: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  })
} : undefined;

var Breadcrumbs = function Breadcrumbs(args) {
  var paths = getPaths(args.location.pathname);
  var items = paths.map(function (path, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: i.toString(),
      path: path,
      component: BreadcrumbsItem
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], null, items);
};

var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  appRoutes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string])
} : undefined;
var defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{
    path: '/',
    exact: true,
    name: 'Home',
    component: null
  }]
};

var AppBreadcrumb = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppBreadcrumb, _Component);

  function AppBreadcrumb(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      routes: props.appRoutes
    };
    routes = _this.state.routes;
    return _this;
  }

  var _proto = AppBreadcrumb.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag"]);

    delete attributes.children;
    delete attributes.appRoutes;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, {
      className: classes
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({
      path: "/:path",
      component: Breadcrumbs
    }, attributes)));
  };

  return AppBreadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppBreadcrumb.propTypes =  true ? propTypes : undefined;
AppBreadcrumb.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppBreadcrumb);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Breadcrumb2.js":
/*!***********************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Breadcrumb2.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/coreui/node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var routes;
var router;

var getPaths = function getPaths(pathname) {
  var paths = ['/'];
  if (pathname === '/') return paths;
  pathname.split('/').reduce(function (prev, curr) {
    var currPath = prev + "/" + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

var findRouteName2 = function findRouteName2(url) {
  var matchPath = router.matchPath;
  var aroute = routes.find(function (route) {
    return matchPath(url, {
      path: route.path,
      exact: route.exact
    });
  });
  return aroute && aroute.name ? aroute.name : null;
};

var BreadcrumbsItem2 = function BreadcrumbsItem2(_ref) {
  var match = _ref.match;
  var routeName = findRouteName2(match.url);
  var Link = router.Link;

  if (routeName) {
    return (// eslint-disable-next-line react/prop-types
      match.isExact ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
        active: true
      }, routeName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
        to: match.url || ''
      }, routeName))
    );
  }

  return null;
};

BreadcrumbsItem2.propTypes =  true ? {
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })
} : undefined;

var Breadcrumbs2 = function Breadcrumbs2(args) {
  var Route = router.Route;
  var paths = getPaths(args.location.pathname);
  var items = paths.map(function (path, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, {
      key: i.toString(),
      path: path,
      component: BreadcrumbsItem2
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, items);
};

var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  appRoutes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  router: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
} : undefined;
var defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{
    path: '/',
    exact: true,
    name: 'Home',
    component: null
  }]
};

var AppBreadcrumb2 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppBreadcrumb2, _Component);

  function AppBreadcrumb2(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      routes: props.appRoutes
    };
    routes = _this.state.routes;
    router = props.router;
    return _this;
  }

  var _proto = AppBreadcrumb2.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag"]);

    delete attributes.children;
    delete attributes.appRoutes;
    delete attributes.router;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className);
    var Route = router.Route;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, {
      className: classes
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, _extends({
      path: "/:path",
      component: Breadcrumbs2
    }, attributes)));
  };

  return AppBreadcrumb2;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppBreadcrumb2.propTypes =  true ? propTypes : undefined;
AppBreadcrumb2.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppBreadcrumb2);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Footer.js":
/*!******************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Footer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
} : undefined;
var defaultProps = {
  tag: 'footer',
  fixed: false
};

var AppFooter = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppFooter, _Component);

  function AppFooter(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.isFixed = _this.isFixed.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AppFooter.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
  };

  _proto.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('footer-fixed');
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    delete attributes.fixed;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'app-footer');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      className: classes
    }, attributes), children);
  };

  return AppFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppFooter.propTypes =  true ? propTypes : undefined;
AppFooter.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppFooter);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Header.js":
/*!******************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Header.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
} : undefined;
var defaultProps = {
  tag: 'header',
  fixed: false
};

var AppHeader = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppHeader, _Component);

  function AppHeader() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AppHeader.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
  };

  _proto.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('header-fixed');
    }
  } // breakpoint(breakpoint) {
  //   return breakpoint || '';
  // }
  ;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    delete attributes.fixed;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'app-header', 'navbar');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      className: classes
    }, attributes), children);
  };

  return AppHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppHeader.propTypes =  true ? propTypes : undefined;
AppHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppHeader);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/HeaderDropdown.js":
/*!**************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/HeaderDropdown.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/coreui/node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var propTypes =  true ? _extends({
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
}, reactstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].propTypes) : undefined;
var defaultProps = {
  direction: 'down'
};

var AppHeaderDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppHeaderDropdown, _Component);

  function AppHeaderDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  var _proto = AppHeaderDropdown.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], _extends({
      nav: true,
      isOpen: this.state.dropdownOpen,
      toggle: this.toggle
    }, attributes), children);
  };

  return AppHeaderDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppHeaderDropdown.propTypes =  true ? propTypes : undefined;
AppHeaderDropdown.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppHeaderDropdown);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/NavbarBrand.js":
/*!***********************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/NavbarBrand.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var propTypes =  true ? {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  brand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  full: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  minimized: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
} : undefined;
var defaultProps = {
  tag: 'a'
};

var AppNavbarBrand = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppNavbarBrand, _Component);

  function AppNavbarBrand() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AppNavbarBrand.prototype;

  _proto.imgSrc = function imgSrc(brand) {
    return brand.src ? brand.src : '';
  };

  _proto.imgWidth = function imgWidth(brand) {
    return brand.width ? brand.width : 'auto';
  };

  _proto.imgHeight = function imgHeight(brand) {
    return brand.height ? brand.height : 'auto';
  };

  _proto.imgAlt = function imgAlt(brand) {
    return brand.alt ? brand.alt : '';
  };

  _proto.navbarBrandImg = function navbarBrandImg(props, classBrand, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.imgSrc(props),
      width: this.imgWidth(props),
      height: this.imgHeight(props),
      alt: this.imgAlt(props),
      className: classBrand,
      key: key.toString()
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-brand');
    var img = [];

    if (this.props.brand) {
      var props = this.props.brand;
      var classBrand = 'navbar-brand';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }

    if (this.props.full) {
      var _props = this.props.full;
      var _classBrand = 'navbar-brand-full';
      img.push(this.navbarBrandImg(_props, _classBrand, img.length + 1));
    }

    if (this.props.minimized) {
      var _props2 = this.props.minimized;
      var _classBrand2 = 'navbar-brand-minimized';
      img.push(this.navbarBrandImg(_props2, _classBrand2, img.length + 1));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), children || img);
  };

  return AppNavbarBrand;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppNavbarBrand.propTypes =  true ? propTypes : undefined;
AppNavbarBrand.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppNavbarBrand);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Shared/classes.js":
/*!**************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Shared/classes.js ***!
  \**************************************************************************/
/*! exports provided: sidebarCssClasses, asideMenuCssClasses, validBreakpoints, checkBreakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarCssClasses", function() { return sidebarCssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asideMenuCssClasses", function() { return asideMenuCssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validBreakpoints", function() { return validBreakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBreakpoint", function() { return checkBreakpoint; });
var sidebarCssClasses = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
var asideMenuCssClasses = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
var validBreakpoints = ['sm', 'md', 'lg', 'xl'];
function checkBreakpoint(breakpoint, list) {
  return list.indexOf(breakpoint) > -1;
}

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Shared/element-closest.js":
/*!**********************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Shared/element-closest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (ElementProto) {
  if (!ElementProto) {
    return;
  }

  if (typeof ElementProto.matches !== 'function') {
    ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof ElementProto.closest !== 'function') {
    ElementProto.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
})(typeof window !== 'undefined' && window.Element.prototype);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Shared/index.js":
/*!************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Shared/index.js ***!
  \************************************************************************/
/*! exports provided: sidebarCssClasses, asideMenuCssClasses, validBreakpoints, checkBreakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./resources/coreui/node_modules/@coreui/react/es/Shared/classes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebarCssClasses", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["sidebarCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asideMenuCssClasses", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["asideMenuCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validBreakpoints", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["validBreakpoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkBreakpoint", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["checkBreakpoint"]; });




/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Shared/layout/layout.js":
/*!********************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Shared/layout/layout.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LayoutHelper = /*#__PURE__*/function () {
  function LayoutHelper() {}

  LayoutHelper.sidebarToggle = function sidebarToggle(toggle) {
    var minimize = arguments.length ? toggle : !this.elClassList.contains('sidebar-minimized');
    this.sidebarMinimize(minimize);
    this.brandMinimize(minimize);
    this.sidebarPSToggle(!minimize);
    /*remove PS on sidebar minimized*/
  };

  LayoutHelper.sidebarMinimize = function sidebarMinimize(force) {
    return this.toggleClass('sidebar-minimized', force);
  };

  LayoutHelper.brandMinimize = function brandMinimize(force) {
    this.toggleClass('brand-minimized', force);
  } //  sidebar perfect scrollbar ugly hack
  ;

  LayoutHelper.sidebarPSToggle = function sidebarPSToggle(toggle) {
    if (this.isOnMobile()) {
      toggle = true;
    } else {
      var isSidebarMinimized = document.body.classList.contains('sidebar-minimized') || false;
      toggle = !isSidebarMinimized;
    }

    var ps = {
      y: {
        rail: {},
        thumb: {}
      }
    };
    var isRtl = getComputedStyle(document.documentElement).direction === 'rtl';
    var sidebar = document.querySelector('.sidebar-nav');
    ps.y.rail.on = document.querySelector('.sidebar-nav .ps__rail-y');
    ps.y.rail.off = document.querySelector('.sidebar-nav .ps__rail-y-off');
    ps.y.thumb.on = document.querySelector('.sidebar-nav .ps__thumb-y');
    ps.y.thumb.off = document.querySelector('.sidebar-nav .ps__thumb-y-off');

    if (sidebar) {
      if (toggle) {
        sidebar.classList.add('ps');
        sidebar.classList.add('ps-container');
        sidebar.classList.add('ps--active-y');

        if (ps.y.rail.off) {
          ps.y.rail.off.classList.add('ps__rail-y');
          ps.y.rail.off.removeAttribute('style');
          ps.y.rail.off.style.left = isRtl ? '0px' : 'unset';
          ps.y.rail.off.style.right = isRtl ? 'unset' : '0px';
          ps.y.rail.off.classList.remove('ps__rail-y-off');
        }

        if (ps.y.thumb.off) {
          ps.y.thumb.off.removeAttribute('style');
          ps.y.thumb.off.classList.add('ps__thumb-y');
          ps.y.thumb.off.classList.remove('ps__thumb-y-off');
        }
      } else {
        if (ps.y.rail.on) {
          ps.y.rail.on.classList.add('ps__rail-y-off');
          ps.y.rail.on.removeAttribute('style');
          ps.y.rail.on.classList.remove('ps__rail-y');
        }

        if (ps.y.thumb.on) {
          ps.y.thumb.on.classList.add('ps__thumb-y-off');
          ps.y.thumb.on.removeAttribute('style');
          ps.y.thumb.on.classList.remove('ps__thumb-y');
        }

        sidebar.classList.remove('ps');
        sidebar.classList.remove('ps-container');
        sidebar.classList.remove('ps--active-y');
      }
    }
  };

  LayoutHelper.toggleClass = function toggleClass(className, force) {
    if (force === true) {
      this.elClassList.add(className);
    } else if (force === false) {
      this.elClassList.remove(className);
    } else {
      this.elClassList.toggle(className);
    }

    return this.elClassList.contains(className);
  };

  LayoutHelper.isOnMobile = function isOnMobile() {
    var onMobile = false;

    try {
      var minimizerElement = document.querySelector('.sidebar-minimizer');

      if (minimizerElement) {
        onMobile = getComputedStyle(minimizerElement).getPropertyValue('display') === 'none';
      } else {
        var sidebarElement = document.querySelector('.sidebar .sidebar-nav');
        sidebarElement && (onMobile = getComputedStyle(sidebarElement).getPropertyValue('overflow-y') === 'auto');
      }
    } catch (ignore) {
      // eslint-disable-next-line
      console.warn('CoreUI isOnMobile failed to getComputedStyle', ignore);
    }

    return onMobile;
  };

  return LayoutHelper;
}();

_defineProperty(LayoutHelper, "elClassList", document.body.classList);

/* harmony default export */ __webpack_exports__["default"] = (LayoutHelper);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Shared/toggle-classes.js":
/*!*********************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Shared/toggle-classes.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggleClasses; });
function toggleClasses(toggleClass, classList, force) {
  var level = classList.indexOf(toggleClass);
  var removeClassList = classList.slice(0, level);
  removeClassList.map(function (className) {
    return document.body.classList.remove(className);
  });

  if (force === true) {
    document.body.classList.add(toggleClass);
  } else if (force === false) {
    document.body.classList.remove(toggleClass);
  } else {
    document.body.classList.toggle(toggleClass);
  }

  return document.body.classList.contains(toggleClass);
}

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Sidebar.js":
/*!*******************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Sidebar.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared */ "./resources/coreui/node_modules/@coreui/react/es/Shared/index.js");
/* harmony import */ var react_onclickout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-onclickout */ "./resources/coreui/node_modules/react-onclickout/index.js");
/* harmony import */ var react_onclickout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_onclickout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Shared_element_closest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shared/element-closest */ "./resources/coreui/node_modules/@coreui/react/es/Shared/element-closest.js");
/* harmony import */ var _Shared_element_closest__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Shared_element_closest__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared/layout/layout */ "./resources/coreui/node_modules/@coreui/react/es/Shared/layout/layout.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }








var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  compact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  display: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  minimized: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  offCanvas: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])
} : undefined;
var defaultProps = {
  tag: 'div',
  compact: false,
  display: '',
  fixed: false,
  minimized: false,
  isOpen: false,
  offCanvas: false
};

var AppSidebar = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebar, _Component);

  function AppSidebar(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.isCompact = _this.isCompact.bind(_assertThisInitialized(_this));
    _this.isFixed = _this.isFixed.bind(_assertThisInitialized(_this));
    _this.isMinimized = _this.isMinimized.bind(_assertThisInitialized(_this));
    _this.isOffCanvas = _this.isOffCanvas.bind(_assertThisInitialized(_this));
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_assertThisInitialized(_this));
    _this.hideMobile = _this.hideMobile.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AppSidebar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.displayBreakpoint(this.props.display);
    this.isCompact(this.props.compact);
    this.isFixed(this.props.fixed);
    this.isMinimized(this.props.minimized);
    this.isOffCanvas(this.props.offCanvas);
  };

  _proto.isCompact = function isCompact(compact) {
    if (compact) {
      document.body.classList.add('sidebar-compact');
    }
  };

  _proto.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('sidebar-fixed');
    }
  };

  _proto.isMinimized = function isMinimized(minimized) {
    _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarToggle(minimized);
  };

  _proto.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('sidebar-off-canvas');
    }
  };

  _proto.displayBreakpoint = function displayBreakpoint(display) {
    var cssTemplate = "sidebar-" + display + "-show";
    var _sidebarCssClasses$ = _Shared__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"][0],
        cssClass = _sidebarCssClasses$[0];

    if (display && _Shared__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"].indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }

    document.body.classList.add(cssClass);
  };

  _proto.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.remove('sidebar-show');
    }
  };

  _proto.onClickOut = function onClickOut(e) {
    if (typeof window !== 'undefined' && document.body.classList.contains('sidebar-show')) {
      if (!e.target.closest('[data-sidebar-toggler]')) {
        this.hideMobile();
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    delete attributes.compact;
    delete attributes.display;
    delete attributes.fixed;
    delete attributes.minimized;
    delete attributes.offCanvas;
    delete attributes.isOpen;
    delete attributes.staticContext;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'sidebar'); // sidebar-nav root

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_onclickout__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onClickOut: function onClickOut(e) {
        _this2.onClickOut(e);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      className: classes
    }, attributes), children));
  };

  return AppSidebar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebar.propTypes =  true ? propTypes : undefined;
AppSidebar.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppSidebar);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/SidebarFooter.js":
/*!*************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/SidebarFooter.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
} : undefined;
var defaultProps = {
  tag: 'div'
};

var AppSidebarFooter = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarFooter, _Component);

  function AppSidebarFooter() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AppSidebarFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-footer');
    var footer = children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      className: classes
    }, attributes), children) : null;
    return footer;
  };

  return AppSidebarFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarFooter.propTypes =  true ? propTypes : undefined;
AppSidebarFooter.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppSidebarFooter);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/SidebarForm.js":
/*!***********************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/SidebarForm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
} : undefined;
var defaultProps = {
  tag: 'div'
};

var AppSidebarForm = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarForm, _Component);

  function AppSidebarForm() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AppSidebarForm.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-form');
    var form = children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      className: classes
    }, attributes), children) : null;
    return form;
  };

  return AppSidebarForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarForm.propTypes =  true ? propTypes : undefined;
AppSidebarForm.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppSidebarForm);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/SidebarHeader.js":
/*!*************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/SidebarHeader.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
} : undefined;
var defaultProps = {
  tag: 'div'
};

var AppSidebarHeader = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarHeader, _Component);

  function AppSidebarHeader() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AppSidebarHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-header');
    var header = children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      className: classes
    }, attributes), children) : null;
    return header;
  };

  return AppSidebarHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarHeader.propTypes =  true ? propTypes : undefined;
AppSidebarHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppSidebarHeader);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/SidebarMinimizer.js":
/*!****************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/SidebarMinimizer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/layout/layout */ "./resources/coreui/node_modules/@coreui/react/es/Shared/layout/layout.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
} : undefined;
var defaultProps = {
  tag: 'button',
  type: 'button'
};

var AppSidebarMinimizer = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarMinimizer, _Component);

  function AppSidebarMinimizer(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AppSidebarMinimizer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var isMinimized = document.body.classList.contains('sidebar-minimized');
    _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarPSToggle(!isMinimized);
  };

  _proto.handleClick = function handleClick() {
    _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarToggle();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        type = _this$props.type,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag", "type"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-minimizer', 'mt-auto');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      className: classes,
      type: type
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.handleClick(event);
      }
    }), children);
  };

  return AppSidebarMinimizer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarMinimizer.propTypes =  true ? propTypes : undefined;
AppSidebarMinimizer.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppSidebarMinimizer);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/SidebarNav.js":
/*!**********************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/SidebarNav.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./resources/coreui/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./resources/coreui/node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ "./resources/coreui/node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./resources/coreui/node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6__);
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }








var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  navConfig: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  navFunc: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string])
} : undefined;
var defaultProps = {
  tag: 'nav',
  navConfig: {
    items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    }]
  },
  isOpen: false
};

var AppSidebarNav = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarNav, _Component);

  function AppSidebarNav(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.activeRoute = _this.activeRoute.bind(_assertThisInitialized(_this));
    _this.hideMobile = _this.hideMobile.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AppSidebarNav.prototype;

  _proto.handleClick = function handleClick(e) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('open');
  };

  _proto.activeRoute = function activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };

  _proto.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  } // nav list
  ;

  _proto.navList = function navList(items) {
    var _this2 = this;

    return items.map(function (item, index) {
      return _this2.navType(item, index);
    });
  } // nav type
  ;

  _proto.navType = function navType(item, idx) {
    return item.title ? this.navTitle(item, idx) : item.divider ? this.navDivider(item, idx) : item.label ? this.navLabel(item, idx) : item.children ? this.navDropdown(item, idx) : this.navItem(item, idx);
  } // nav list section title
  ;

  _proto.navTitle = function navTitle(title, key) {
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-title', title["class"]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: classes
    }, this.navWrapper(title), " ");
  } // simple wrapper for nav-title item
  ;

  _proto.navWrapper = function navWrapper(item) {
    return item.wrapper && item.wrapper.element ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  } // nav list divider
  ;

  _proto.navDivider = function navDivider(divider, key) {
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('divider', divider["class"]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: classes
    });
  } // nav label with nav link
  ;

  _proto.navLabel = function navLabel(item, key) {
    var classes = {
      item: classnames__WEBPACK_IMPORTED_MODULE_3___default()('hidden-cn', item["class"]),
      link: classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-label', item["class"] ? item["class"] : ''),
      icon: classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-icon', !item.icon ? 'fa fa-circle' : item.icon, item.label.variant ? "text-" + item.label.variant : '', item.label["class"] ? item.label["class"] : '')
    };
    return this.navLink(item, key, classes);
  } // nav dropdown
  ;

  _proto.navDropdown = function navDropdown(item, key) {
    var classIcon = classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-icon', item.icon);
    var attributes = JSON.parse(JSON.stringify(item.attributes || {}));
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-link', 'nav-dropdown-toggle', item["class"], attributes["class"]);
    delete attributes["class"];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: this.activeRoute(item.url, this.props)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({
      className: classes,
      href: "#",
      onClick: this.handleClick
    }, attributes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classIcon
    }), item.name, this.navBadge(item.badge)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "nav-dropdown-items"
    }, this.navList(item.children)));
  } // nav item with nav link
  ;

  _proto.navItem = function navItem(item, key) {
    var classes = {
      item: classnames__WEBPACK_IMPORTED_MODULE_3___default()(item["class"]),
      link: classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-link', item.variant ? "nav-link-" + item.variant : ''),
      icon: classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-icon', item.icon)
    };
    return this.navLink(item, key, classes);
  } // nav link
  ;

  _proto.navLink = function navLink(item, key, classes) {
    var url = item.url || '';
    var itemIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classes.icon
    });
    var itemBadge = this.navBadge(item.badge);
    var attributes = item.attributes || {};
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      key: key,
      className: classes.item
    }, attributes.disabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], _extends({
      href: '',
      className: classes.link
    }, attributes), itemIcon, item.name, itemBadge) : this.isExternal(url) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], _extends({
      href: url,
      className: classes.link,
      active: true
    }, attributes), itemIcon, item.name, itemBadge) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], _extends({
      to: url,
      className: classes.link,
      activeClassName: "active",
      onClick: this.hideMobile
    }, attributes), itemIcon, item.name, itemBadge));
  } // badge addon to NavItem
  ;

  _proto.navBadge = function navBadge(badge) {
    if (badge) {
      var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(badge["class"]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        className: classes,
        color: badge.variant
      }, badge.text);
    }

    return null;
  };

  _proto.isExternal = function isExternal(url) {
    var link = url ? url.substring(0, 4) : '';
    return link === 'http';
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        navConfig = _this$props.navConfig,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "navConfig"]);

    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.Tag;
    var navClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'sidebar-nav'); // ToDo: find better rtl fix

    var isRtl = getComputedStyle(document.documentElement).direction === 'rtl'; // sidebar-nav root

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
      className: navClasses
    }, attributes, {
      options: {
        suppressScrollX: !isRtl
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], null, children || this.navList(navConfig.items)));
  };

  return AppSidebarNav;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarNav.propTypes =  true ? propTypes : undefined;
AppSidebarNav.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppSidebarNav);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/SidebarNav2.js":
/*!***********************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/SidebarNav2.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./resources/coreui/node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./resources/coreui/node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./resources/coreui/node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/scrollbar.css */ "./resources/coreui/node_modules/@coreui/react/css/scrollbar.css");
/* harmony import */ var _css_scrollbar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shared/layout/layout */ "./resources/coreui/node_modules/@coreui/react/es/Shared/layout/layout.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  navConfig: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  navFunc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  props: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
var defaultProps = {
  tag: 'nav',
  navConfig: {
    items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    }]
  },
  isOpen: false,
  router: {
    RsNavLink: reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"]
  }
};

var AppSidebarNav2 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarNav2, _Component);

  function AppSidebarNav2(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "_scrollBarRef", null);

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.activeRoute = _this.activeRoute.bind(_assertThisInitialized(_this));
    _this.hideMobile = _this.hideMobile.bind(_assertThisInitialized(_this));
    _this.changes = null;
    _this.state = {
      sidebarMinimized: false
    };
    return _this;
  }

  var _proto = AppSidebarNav2.prototype;

  _proto.handleClick = function handleClick(e, item) {
    if (item.attributes && typeof item.attributes.onClick === 'function' && !this.isActiveRoute(item.url, this.props)) {
      item.attributes.onClick(e, item);
    } else {
      e.preventDefault();
    }

    e.currentTarget.parentElement.classList.toggle('open');
  };

  _proto.isActiveRoute = function isActiveRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1;
  };

  _proto.activeRoute = function activeRoute(routeName, props) {
    return this.isActiveRoute(routeName, props) ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };

  _proto.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  };

  _proto.getAttribs = function getAttribs(attributes) {
    return _extends({}, attributes);
  } // nav list
  ;

  _proto.navList = function navList(items) {
    var _this2 = this;

    return items.map(function (item, index) {
      return _this2.navType(item, index);
    });
  } // nav type
  ;

  _proto.navType = function navType(item, idx) {
    return item.title ? this.navTitle(item, idx) : item.divider ? this.navDivider(item, idx) : item.label ? this.navLabel(item, idx) : item.children ? this.navDropdown(item, idx) : this.navItem(item, idx);
  } // nav list section title
  ;

  _proto.navTitle = function navTitle(title, key) {
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-title', title["class"], title.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: classes
    }, this.navWrapper(title), " ");
  } // simple wrapper for nav-title item
  ;

  _proto.navWrapper = function navWrapper(item) {
    return item.wrapper && item.wrapper.element ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  } // nav list divider
  ;

  _proto.navDivider = function navDivider(divider, key) {
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('divider', divider["class"], divider.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: classes
    });
  } // nav label with nav link
  ;

  _proto.navLabel = function navLabel(item, key) {
    var classes = {
      item: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hidden-cn', item["class"]),
      link: classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-label', item["class"] ? item["class"] : ''),
      icon: classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-icon', !item.icon ? 'fa fa-circle' : item.icon, item.label.variant ? "text-" + item.label.variant : '', item.label["class"] ? item.label["class"] : '')
    };
    return this.navLink(item, key, classes);
  } // nav dropdown
  ;

  _proto.navDropdown = function navDropdown(item, key) {
    var _this3 = this;

    var itemIcon = this.navIcon(item);
    var attributes = this.getAttribs(item.attributes);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-link', 'nav-dropdown-toggle', item["class"], attributes["class"], attributes.className);
    delete attributes["class"];
    delete attributes.className;
    var itemAttr = this.getAttribs(item.itemAttr);
    var liClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-item', 'nav-dropdown', itemAttr["class"], itemAttr.className);
    delete itemAttr["class"];
    delete itemAttr.className;
    var NavLink = this.props.router.NavLink || reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", _extends({
      key: key,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(liClasses, {
        'open': this.isActiveRoute(item.url, this.props)
      })
    }, itemAttr), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, _extends({
      activeClassName: "open",
      className: classes,
      to: item.url || ''
    }, attributes, {
      onClick: function onClick(e) {
        return _this3.handleClick(e, item);
      }
    }), itemIcon, item.name, this.navBadge(item.badge)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "nav-dropdown-items"
    }, this.navList(item.children)));
  } // nav item with nav link
  ;

  _proto.navItem = function navItem(item, key) {
    var classes = {
      item: classnames__WEBPACK_IMPORTED_MODULE_2___default()(item["class"]),
      link: classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-link', item.variant ? "nav-link-" + item.variant : ''),
      icon: classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-icon', item.icon)
    };
    return this.navLink(item, key, classes);
  };

  _proto.navIcon = function navIcon(item) {
    var icon = item.icon;
    var iconObject = typeof icon === 'object' && icon !== null ? _extends({
      iconClass: icon["class"],
      iconClassName: icon.className
    }, icon) : {
      iconClass: icon
    };
    var iconClass = iconObject.iconClass,
        iconClassName = iconObject.iconClassName,
        innerText = iconObject.innerText,
        img = iconObject.img,
        attributes = iconObject.attributes;

    var iconAttr = _extends({}, attributes);

    delete iconAttr["class"];
    delete iconAttr.className;
    delete iconAttr.img;
    var iconImg = img && img.src ? img : null;
    var iconInner = innerText || null;
    var classIcon = classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-icon', iconClass, iconClassName);
    var iconComponent = iconImg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({}, iconAttr, {
      className: classIcon,
      src: iconImg.src
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", _extends({}, iconAttr, {
      className: classIcon
    }), iconInner);
    return iconComponent;
  } // nav link
  ;

  _proto.navLink = function navLink(item, key, classes) {
    var _this4 = this;

    var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    var url = item.url || '';
    var itemIcon = this.navIcon(item);
    var itemBadge = this.navBadge(item.badge);
    var attributes = this.getAttribs(item.attributes);
    classes.link = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.link, attributes["class"], attributes.className);
    delete attributes["class"];
    delete attributes.className;
    var itemAttr = this.getAttribs(item.itemAttr);
    classes.item = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.item, itemAttr["class"], itemAttr.className);
    delete itemAttr["class"];
    delete itemAttr.className;
    var NavLink = this.props.router.NavLink || reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], _extends({
      key: key,
      className: classes.item
    }, itemAttr), attributes.disabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], _extends({
      href: '',
      className: classes.link
    }, attributes), itemIcon, item.name, itemBadge) : this.isExternal(url, this.props) || NavLink === reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], _extends({
      href: url,
      className: classes.link,
      active: true
    }, attributes), itemIcon, item.name, itemBadge) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLink, _extends({
      to: url,
      className: classes.link,
      activeClassName: "active",
      onClick: function onClick() {
        return _this4.hideMobile(ref);
      },
      ref: ref
    }, attributes), itemIcon, item.name, itemBadge));
  } // badge addon to NavItem
  ;

  _proto.navBadge = function navBadge(badge) {
    if (badge) {
      var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(badge["class"], badge.className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        className: classes,
        color: badge.variant
      }, badge.text);
    }

    return null;
  };

  _proto.isExternal = function isExternal(url, props) {
    var linkType = typeof url;
    var link = linkType === 'string' ? url : linkType === 'object' && url.pathname ? url.pathname : linkType === 'function' && typeof url(props.location) === 'string' ? url(props.location) : linkType === 'function' && typeof url(props.location) === 'object' ? url(props.location).pathname : '';
    return link.substring(0, 4) === 'http';
  };

  _proto.observeDomMutations = function observeDomMutations() {
    var _this5 = this;

    if (window.MutationObserver) {
      // eslint-disable-next-line
      this.changes = new MutationObserver(function (mutations) {
        var isSidebarMinimized = document.body.classList.contains('sidebar-minimized') || false;

        _this5.setState({
          sidebarMinimized: isSidebarMinimized
        });

        _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_7__["default"].sidebarPSToggle(!isSidebarMinimized);
      });
      var element = document.body;
      this.changes.observe(element, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    window.addEventListener('resize', this.onResize);
  };

  _proto.onResize = function onResize() {
    _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_7__["default"].sidebarPSToggle(true);
  };

  _proto.componentDidMount = function componentDidMount() {
    this.observeDomMutations();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    try {
      this.changes.disconnect();
      window.removeEventListener('resize', this.onResize);
    } catch (ignore) {
      // eslint-disable-next-line
      console.warn('CoreUI SidebarNav failed to disconnect from MutationObserver', ignore);
    }
  };

  _proto.render = function render() {
    var _this6 = this;

    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        navConfig = _this$props.navConfig,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "navConfig"]);

    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.Tag;
    delete attributes.router;
    var navClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-nav');
    var options = Object.assign({}, {
      suppressScrollX: true,
      suppressScrollY: this.state.sidebarMinimized
    }); // sidebar-nav root

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
      className: navClasses
    }, attributes, {
      options: options,
      ref: function ref(_ref) {
        _this6._scrollBarRef = _ref;
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], null, children || this.navList(navConfig.items)));
  };

  return AppSidebarNav2;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarNav2.propTypes =  true ? propTypes : undefined;
AppSidebarNav2.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppSidebarNav2);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/SidebarToggler.js":
/*!**************************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/SidebarToggler.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/index */ "./resources/coreui/node_modules/@coreui/react/es/Shared/index.js");
/* harmony import */ var _Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/toggle-classes */ "./resources/coreui/node_modules/@coreui/react/es/Shared/toggle-classes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }






var propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
} : undefined;
var defaultProps = {
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};

var AppSidebarToggler = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSidebarToggler, _Component);

  function AppSidebarToggler(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.sidebarToggle = _this.sidebarToggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AppSidebarToggler.prototype;

  _proto.sidebarToggle = function sidebarToggle(e) {
    e.preventDefault();
    this.toggle();
  };

  _proto.toggle = function toggle(force) {
    var _ref = [this.props.display, this.props.mobile],
        display = _ref[0],
        mobile = _ref[1];
    var cssClass = _Shared_index__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"][0];

    if (!mobile && display && Object(_Shared_index__WEBPACK_IMPORTED_MODULE_3__["checkBreakpoint"])(display, _Shared_index__WEBPACK_IMPORTED_MODULE_3__["validBreakpoints"])) {
      cssClass = "sidebar-" + display + "-show";
    }

    Object(_Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["default"])(cssClass, _Shared_index__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"], force);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "tag"]);

    delete attributes.mobile;
    delete attributes.display;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-toggler');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      type: "button",
      className: classes
    }, attributes, {
      onClick: function onClick(event) {
        return _this2.sidebarToggle(event);
      },
      "data-sidebar-toggler": true
    }), children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "navbar-toggler-icon"
    }));
  };

  return AppSidebarToggler;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarToggler.propTypes =  true ? propTypes : undefined;
AppSidebarToggler.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppSidebarToggler);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/Switch.js":
/*!******************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/Switch.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./resources/coreui/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var propTypes =  true ? {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['', 'alt'])]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['', 'lg', 'sm']),
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['checkbox', 'radio']),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['', '3d', 'pill']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dataOn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dataOff: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
} : undefined;
var defaultProps = {
  color: 'secondary',
  label: false,
  outline: false,
  size: '',
  checked: false,
  defaultChecked: undefined,
  disabled: undefined,
  required: undefined,
  type: 'checkbox',
  variant: '',
  dataOn: 'On',
  dataOff: 'Off'
};

var AppSwitch = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AppSwitch, _Component);

  function AppSwitch(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind(_assertThisInitialized(_this));
    _this.state = {
      uncontrolled: !!_this.props.defaultChecked,
      checked: _this.props.defaultChecked || _this.props.checked,
      selected: []
    };
    return _this;
  }

  var _proto = AppSwitch.prototype;

  _proto.toggleState = function toggleState(check) {
    this.setState({
      checked: check
    });
  };

  _proto.handleChange = function handleChange(event) {
    var target = event.target;
    this.toggleState(target.checked);

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  _proto.handleKeyUp = function handleKeyUp(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleState(!this.state.checked);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (!this.state.uncontrolled && this.props.checked !== prevState.checked) {
      this.toggleState(this.props.checked);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        disabled = _this$props.disabled,
        color = _this$props.color,
        name = _this$props.name,
        label = _this$props.label,
        outline = _this$props.outline,
        size = _this$props.size,
        required = _this$props.required,
        type = _this$props.type,
        value = _this$props.value,
        dataOn = _this$props.dataOn,
        dataOff = _this$props.dataOff,
        variant = _this$props.variant,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "disabled", "color", "name", "label", "outline", "size", "required", "type", "value", "dataOn", "dataOff", "variant"]);

    var tabindex = attributes.tabIndex;
    delete attributes.tabIndex;
    delete attributes.checked;
    delete attributes.defaultChecked;
    delete attributes.onChange;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'switch', label ? 'switch-label' : false, size ? "switch-" + size : false, variant ? "switch-" + variant : false, "switch" + (outline ? '-outline' : '') + "-" + color + (outline === 'alt' ? '-alt' : ''), 'form-check-label');
    var inputClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('switch-input', 'form-check-input');
    var sliderClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('switch-slider');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: classes,
      tabIndex: tabindex,
      onKeyUp: this.handleKeyUp,
      onKeyDown: this.handleKeyDown
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
      type: type,
      className: inputClasses,
      onChange: this.handleChange,
      checked: this.state.checked,
      name: name,
      required: required,
      disabled: disabled,
      value: value,
      "aria-checked": this.state.checked,
      "aria-disabled": disabled,
      "aria-readonly": disabled
    }, attributes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: sliderClasses,
      "data-checked": dataOn,
      "data-unchecked": dataOff
    }));
  };

  return AppSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSwitch.propTypes =  true ? propTypes : undefined;
AppSwitch.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AppSwitch);

/***/ }),

/***/ "./resources/coreui/node_modules/@coreui/react/es/index.js":
/*!*****************************************************************!*\
  !*** ./resources/coreui/node_modules/@coreui/react/es/index.js ***!
  \*****************************************************************/
/*! exports provided: AppAside, AppAsideToggler, AppBreadcrumb, AppBreadcrumb2, AppFooter, AppHeader, AppHeaderDropdown, AppNavbarBrand, AppSidebar, AppSidebarFooter, AppSidebarForm, AppSidebarHeader, AppSidebarMinimizer, AppSidebarNav, AppSidebarNav2, AppSidebarToggler, AppSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aside */ "./resources/coreui/node_modules/@coreui/react/es/Aside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppAside", function() { return _Aside__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AsideToggler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideToggler */ "./resources/coreui/node_modules/@coreui/react/es/AsideToggler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppAsideToggler", function() { return _AsideToggler__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumb */ "./resources/coreui/node_modules/@coreui/react/es/Breadcrumb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumb", function() { return _Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Breadcrumb2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Breadcrumb2 */ "./resources/coreui/node_modules/@coreui/react/es/Breadcrumb2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumb2", function() { return _Breadcrumb2__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./resources/coreui/node_modules/@coreui/react/es/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return _Footer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./resources/coreui/node_modules/@coreui/react/es/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return _Header__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _HeaderDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderDropdown */ "./resources/coreui/node_modules/@coreui/react/es/HeaderDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeaderDropdown", function() { return _HeaderDropdown__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _NavbarBrand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavbarBrand */ "./resources/coreui/node_modules/@coreui/react/es/NavbarBrand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppNavbarBrand", function() { return _NavbarBrand__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sidebar */ "./resources/coreui/node_modules/@coreui/react/es/Sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebar", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _SidebarFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarFooter */ "./resources/coreui/node_modules/@coreui/react/es/SidebarFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarFooter", function() { return _SidebarFooter__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _SidebarForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarForm */ "./resources/coreui/node_modules/@coreui/react/es/SidebarForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarForm", function() { return _SidebarForm__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _SidebarHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarHeader */ "./resources/coreui/node_modules/@coreui/react/es/SidebarHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarHeader", function() { return _SidebarHeader__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _SidebarMinimizer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SidebarMinimizer */ "./resources/coreui/node_modules/@coreui/react/es/SidebarMinimizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarMinimizer", function() { return _SidebarMinimizer__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _SidebarNav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SidebarNav */ "./resources/coreui/node_modules/@coreui/react/es/SidebarNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNav", function() { return _SidebarNav__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _SidebarNav2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SidebarNav2 */ "./resources/coreui/node_modules/@coreui/react/es/SidebarNav2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNav2", function() { return _SidebarNav2__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _SidebarToggler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SidebarToggler */ "./resources/coreui/node_modules/@coreui/react/es/SidebarToggler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarToggler", function() { return _SidebarToggler__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Switch */ "./resources/coreui/node_modules/@coreui/react/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSwitch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_16__["default"]; });




































/***/ }),

/***/ "./resources/coreui/node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!***************************************************************************************!*\
  !*** ./resources/coreui/node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);
//# sourceMappingURL=perfect-scrollbar.esm.js.map


/***/ }),

/***/ "./resources/coreui/node_modules/react-onclickout/index.js":
/*!*****************************************************************!*\
  !*** ./resources/coreui/node_modules/react-onclickout/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./resources/coreui/node_modules/react-dom/index.js");

var ClickOutComponent = function (_React$Component) {
  _inherits(ClickOutComponent, _React$Component);

  function ClickOutComponent() {
    _classCallCheck(this, ClickOutComponent);

    return _possibleConstructorReturn(this, (ClickOutComponent.__proto__ || Object.getPrototypeOf(ClickOutComponent)).call(this));
  }

  _createClass(ClickOutComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      var elTouchIsClick = true;
      var documentTouchIsClick = true;
      var el = ReactDOM.findDOMNode(this);

      self.__documentTouchStarted = function (e) {
        el.removeEventListener('click', self.__elementClicked);
        document.removeEventListener('click', self.__documentClicked);
      };

      self.__documentTouchMoved = function (e) {
        documentTouchIsClick = false;
      };

      self.__documentTouchEnded = function (e) {
        if (documentTouchIsClick) self.__documentClicked(e);
        documentTouchIsClick = true;
      };

      self.__documentClicked = function (e) {
        if ((e.__clickedElements || []).indexOf(el) !== -1) return;

        var clickOutHandler = self.onClickOut || self.props.onClickOut;
        if (!clickOutHandler) {
          return console.warn('onClickOut is not defined.');
        }

        clickOutHandler.call(self, e);
      };

      self.__elementTouchMoved = function (e) {
        elTouchIsClick = false;
      };

      self.__elementTouchEnded = function (e) {
        if (elTouchIsClick) self.__elementClicked(e);
        elTouchIsClick = true;
      };

      self.__elementClicked = function (e) {
        e.__clickedElements = e.__clickedElements || [];
        e.__clickedElements.push(el);
      };

      setTimeout(function () {
        if (self.__unmounted) return;
        self.toggleListeners('addEventListener');
      }, 0);
    }
  }, {
    key: 'toggleListeners',
    value: function toggleListeners(listenerMethod) {
      var el = ReactDOM.findDOMNode(this);

      el[listenerMethod]('touchmove', this.__elementTouchMoved);
      el[listenerMethod]('touchend', this.__elementTouchEnded);
      el[listenerMethod]('click', this.__elementClicked);

      document[listenerMethod]('touchstart', this.__documentTouchStarted);
      document[listenerMethod]('touchmove', this.__documentTouchMoved);
      document[listenerMethod]('touchend', this.__documentTouchEnded);
      document[listenerMethod]('click', this.__documentClicked);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.toggleListeners('removeEventListener');
      this.__unmounted = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return Array.isArray(this.props.children) ? React.createElement(
        'div',
        null,
        this.props.children
      ) : React.Children.only(this.props.children);
    }
  }]);

  return ClickOutComponent;
}(React.Component);

module.exports = ClickOutComponent;


/***/ }),

/***/ "./resources/coreui/node_modules/react-perfect-scrollbar/dist/css/styles.css":
/*!***********************************************************************************!*\
  !*** ./resources/coreui/node_modules/react-perfect-scrollbar/dist/css/styles.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/postcss-loader/src??ref--7-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/coreui/node_modules/react-perfect-scrollbar/dist/css/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/coreui/node_modules/react-perfect-scrollbar/lib/index.js":
/*!****************************************************************************!*\
  !*** ./resources/coreui/node_modules/react-perfect-scrollbar/lib/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollbar = __webpack_require__(/*! ./scrollbar */ "./resources/coreui/node_modules/react-perfect-scrollbar/lib/scrollbar.js");

var _scrollbar2 = _interopRequireDefault(_scrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _scrollbar2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./resources/coreui/node_modules/react-perfect-scrollbar/lib/scrollbar.js":
/*!********************************************************************************!*\
  !*** ./resources/coreui/node_modules/react-perfect-scrollbar/lib/scrollbar.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./resources/coreui/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./resources/coreui/node_modules/prop-types/index.js");

var _perfectScrollbar = __webpack_require__(/*! perfect-scrollbar */ "./resources/coreui/node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar = function (_Component) {
  _inherits(ScrollBar, _Component);

  function ScrollBar(props) {
    _classCallCheck(this, ScrollBar);

    var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));

    _this.handleRef = _this.handleRef.bind(_this);
    _this._handlerByEvent = {};
    return _this;
  }

  _createClass(ScrollBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.option) {
        console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"');
      }

      this._ps = new _perfectScrollbar2.default(this._container, this.props.options || this.props.option);
      // hook up events
      this._updateEventHook();
      this._updateClassName();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this._updateEventHook(prevProps);

      this.updateScroll();

      if (prevProps.className !== this.props.className) {
        this._updateClassName();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      // unhook up evens
      Object.keys(this._handlerByEvent).forEach(function (key) {
        var value = _this2._handlerByEvent[key];

        if (value) {
          _this2._container.removeEventListener(key, value, false);
        }
      });
      this._handlerByEvent = {};
      this._ps.destroy();
      this._ps = null;
    }
  }, {
    key: '_updateEventHook',
    value: function _updateEventHook() {
      var _this3 = this;

      var prevProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // hook up events
      Object.keys(handlerNameByEvent).forEach(function (key) {
        var callback = _this3.props[handlerNameByEvent[key]];
        var prevCallback = prevProps[handlerNameByEvent[key]];
        if (callback !== prevCallback) {
          if (prevCallback) {
            var prevHandler = _this3._handlerByEvent[key];
            _this3._container.removeEventListener(key, prevHandler, false);
            _this3._handlerByEvent[key] = null;
          }
          if (callback) {
            var handler = function handler() {
              return callback(_this3._container);
            };
            _this3._container.addEventListener(key, handler, false);
            _this3._handlerByEvent[key] = handler;
          }
        }
      });
    }
  }, {
    key: '_updateClassName',
    value: function _updateClassName() {
      var className = this.props.className;


      var psClassNames = this._container.className.split(' ').filter(function (name) {
        return name.match(/^ps([-_].+|)$/);
      }).join(' ');

      if (this._container) {
        this._container.className = 'scrollbar-container' + (className ? ' ' + className : '') + (psClassNames ? ' ' + psClassNames : '');
      }
    }
  }, {
    key: 'updateScroll',
    value: function updateScroll() {
      this.props.onSync(this._ps);
    }
  }, {
    key: 'handleRef',
    value: function handleRef(ref) {
      this._container = ref;
      this.props.containerRef(ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          option = _props.option,
          options = _props.options,
          containerRef = _props.containerRef,
          onScrollY = _props.onScrollY,
          onScrollX = _props.onScrollX,
          onScrollUp = _props.onScrollUp,
          onScrollDown = _props.onScrollDown,
          onScrollLeft = _props.onScrollLeft,
          onScrollRight = _props.onScrollRight,
          onYReachStart = _props.onYReachStart,
          onYReachEnd = _props.onYReachEnd,
          onXReachStart = _props.onXReachStart,
          onXReachEnd = _props.onXReachEnd,
          component = _props.component,
          onSync = _props.onSync,
          children = _props.children,
          remainProps = _objectWithoutProperties(_props, ['className', 'style', 'option', 'options', 'containerRef', 'onScrollY', 'onScrollX', 'onScrollUp', 'onScrollDown', 'onScrollLeft', 'onScrollRight', 'onYReachStart', 'onYReachEnd', 'onXReachStart', 'onXReachEnd', 'component', 'onSync', 'children']);

      var Comp = component;

      return _react2.default.createElement(
        Comp,
        _extends({ style: style, ref: this.handleRef }, remainProps),
        children
      );
    }
  }]);

  return ScrollBar;
}(_react.Component);

exports.default = ScrollBar;


ScrollBar.defaultProps = {
  className: '',
  style: undefined,
  option: undefined,
  options: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined,
  onSync: function onSync(ps) {
    return ps.update();
  },
  component: 'div'
};

ScrollBar.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  className: _propTypes.PropTypes.string,
  style: _propTypes.PropTypes.object,
  option: _propTypes.PropTypes.object,
  options: _propTypes.PropTypes.object,
  containerRef: _propTypes.PropTypes.func,
  onScrollY: _propTypes.PropTypes.func,
  onScrollX: _propTypes.PropTypes.func,
  onScrollUp: _propTypes.PropTypes.func,
  onScrollDown: _propTypes.PropTypes.func,
  onScrollLeft: _propTypes.PropTypes.func,
  onScrollRight: _propTypes.PropTypes.func,
  onYReachStart: _propTypes.PropTypes.func,
  onYReachEnd: _propTypes.PropTypes.func,
  onXReachStart: _propTypes.PropTypes.func,
  onXReachEnd: _propTypes.PropTypes.func,
  onSync: _propTypes.PropTypes.func,
  component: _propTypes.PropTypes.string
};
module.exports = exports['default'];

/***/ })

}]);