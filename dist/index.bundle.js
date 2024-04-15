/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AboutUs.jsx":
/*!*************************!*\
  !*** ./src/AboutUs.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AboutUs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aboutUs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "WHAT WE ARE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aboutUsCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Nashville-style fried chicken is characterized by it's oil dip, and spiced dust that it gets as soon as it comes out the fryer. This gives it its charcteristic red colour, and helps to coat your mouth with our delicious spice blends! Since our inception in 2012, Doug Stephen has been singmindedly focused on the perfection of this storied chicken, with the goal of sharing his mouth-watering creations to all of Vancouver!"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);

/***/ }),

/***/ "./src/Footer.jsx":
/*!************************!*\
  !*** ./src/Footer.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Locations() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "East Van: 905 COMMERCIAL DRIVE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "UBC: 6065 UNIVERSITY BOULEVARD"));
}
function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:doug@dlchickenshack.ca"
  }, "DOUG@DLCHICKENSHACK.CA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "(604) 283-1385"));
}
function Hours() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Mon to Fri: 11am - 9pm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sun: 11am - 4:30pm"));
}
function Footer() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openSection = _useState2[0],
    setOpenSection = _useState2[1];
  var handleClick = function handleClick(section) {
    setOpenSection(openSection === section ? null : section);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    onClick: function onClick() {
      return handleClick("locations");
    }
  }, "LOCATIONS"), openSection === "locations" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Locations, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    onClick: function onClick() {
      return handleClick("contact");
    }
  }, "CONTACT US"), openSection === "contact" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Contact, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    onClick: function onClick() {
      return handleClick("hours");
    }
  }, "HOURS"), openSection === "hours" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Hours, null))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/Header.jsx":
/*!************************!*\
  !*** ./src/Header.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flames_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flames.gif */ "./src/flames.gif");


function Header(props) {
  var logo = "https://static.wixstatic.com/media/4ca1eb_e2f97a86e959455e8ba0cb01a3bd0e5f~mv2.jpg/v1/fill/w_327,h_293,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/4ca1eb_e2f97a86e959455e8ba0cb01a3bd0e5f~mv2.jpg";
  var giftCardLink = "https://squareup.com/gift/MLWWKAFPWGTFJ/order";
  var eastVanLink = "https://dl-chicken-east-vancouver.square.site/";
  var UBCLink = "https://dl-chicken-ubc.square.site/";
  var handleMenuClick = function handleMenuClick() {
    props.setMainScreen("menu");
    console.log("working");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "backgroundImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "flameImages",
    src: _flames_gif__WEBPACK_IMPORTED_MODULE_1__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    id: "secretMenu"
  }, "DOWN LOW CHICKEN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "flameImages",
    src: _flames_gif__WEBPACK_IMPORTED_MODULE_1__
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: giftCardLink,
    target: "_blank"
  }, "GIFT CARDS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: eastVanLink,
    target: "_blank"
  }, "EAST VAN ORDERING"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: UBCLink,
    target: "_blank"
  }, "UBC ORDERING"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    id: "menuButton",
    onClick: handleMenuClick
  }, "MENU"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/HomePage.jsx":
/*!**************************!*\
  !*** ./src/HomePage.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DLMenu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DLMenu.jpg */ "./src/DLMenu.jpg");
/* harmony import */ var _MonthlySpecial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonthlySpecial */ "./src/MonthlySpecial.jsx");
/* harmony import */ var _AboutUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutUs */ "./src/AboutUs.jsx");
/* harmony import */ var _ScrollBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollBar */ "./src/ScrollBar.jsx");





var scrollImagesContext = __webpack_require__("./src/scroll-images sync \\.(png%7Cjpe?g%7Csvg)$");
var scrollImages = scrollImagesContext.keys().map(scrollImagesContext);
function MainScreen() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MonthlySpecial__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUs__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ScrollBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: scrollImages
  }));
}
function HomePage(props) {
  var menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _DLMenu_jpg__WEBPACK_IMPORTED_MODULE_1__,
    alt: "DL MENU"
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.mainScreen == "HomePage" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainScreen, null) : {
    menu: menu
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/MonthlySpecial.jsx":
/*!********************************!*\
  !*** ./src/MonthlySpecial.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _monthlySpecial_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monthlySpecial.jpg */ "./src/monthlySpecial.jpg");


function MonthlySpecial() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "monthlySpecial"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "WHAT'S GOING ON THIS MONTH?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "specialCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "gradientText"
  }, "The Hurricane!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "A specially crafted blend of flavours and spices, delivered straight to you every month!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _monthlySpecial_jpg__WEBPACK_IMPORTED_MODULE_1__,
    alt: "Chicken Sando"
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthlySpecial);

/***/ }),

/***/ "./src/ScrollBar.jsx":
/*!***************************!*\
  !*** ./src/ScrollBar.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");



function ScrollBar(_ref) {
  var images = _ref.images;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    emulateTouch: true
  }, images.map(function (image, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      key: index,
      src: image,
      alt: ""
    });
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollBar);
{
  /* <>
  <div className="imgContainer inlineSnaps">
    {images.map((image) => (
      <div className="scrollImages">
        <img src={image} alt="" />
      </div>
    ))}
  </div>
  </> */
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/Footer.jsx");
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomePage */ "./src/HomePage.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("HomePage"),
    _useState2 = _slicedToArray(_useState, 2),
    mainScreen = _useState2[0],
    setMainScreen = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setMainScreen: setMainScreen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HomePage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mainScreen: mainScreen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
var container = document.getElementById("root");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./the_logo.webp */ "./src/the_logo.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Madimi+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --header-colour: #e292219d;
  --body-card-colour: #b8b8b84d;
  --link-color: #2c4390;
}

* {
  font-family: Ceviche One;
  background-color: #170e3200;
  text-decoration: none;
  margin: 0;
  text-align: center;
}

body {
  height: 100%;
}

a {
  color: inherit;
  padding-bottom: 2px;
  text-decoration: underline 0.15em var(--link-color);
  text-underline-offset: 5px;
  transition: text-decoration-color 300ms;
}

a:hover {
  text-decoration-color: #00000000;
}

p {
  font-family: "Madimi One", sans-serif;
  color: #000000;
  font-size: 2svw;
}

img {
  max-width: 100%;
  border-radius: 15px;
  background: #dd4b4800;
}

h1 {
  color: #e23121;
  background: #dd4b4800;
}

h2 {
  background-color: #dd4b4800;
}

.gradientText {
  background-color: #e23121;
  background-image: linear-gradient(45deg, #ff0909, #3a9bd8);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.backgroundImage {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  display: block;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  height: 5000px;
  width: 5076px;
  filter: blur(5px);
  z-index: -1111;
  animation: slide 60s linear infinite;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1692px, -800px, 0);
  }
}

.root {
  display: flex;
  flex-direction: column;
  gap: 2svh;
  align-items: center;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding-bottom: 2svw;
  background-color: var(--header-colour);
}

.header h1 {
  display: flex;
  align-items: end;
  font-size: 5svw;
  margin-bottom: 2svh;
  gap: 10px;
}
.header > h1 > a {
  text-decoration-color: #e2312100;
}

.header > h1 > a:hover {
  text-decoration-color: #e23121;
}

.header img {
  width: 10svw;
}

.links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #2c4390;
  margin-left: 2svw;
  margin-right: 2svw;
  font-size: calc(16px + 1svw);
  gap: 3svw;
}

.menu-image {
  padding: 1svh;
}

.monthlySpecial {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2svh;
  color: #000102;
  border-radius: 15px;
}

.monthlySpecial h1 {
  font-size: 5svw;
  margin-bottom: 3svh;
}

.specialCard {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--body-card-colour);
  border-radius: 25px;
  max-width: 76svw;
  gap: 2vh;
}

.specialCard h2 {
  font-size: 4svw;
}

.specialCard img {
  inline-size: 100%;
  aspect-ratio: 4/3;
}

.links > a:hover {
  text-decoration-color: #e23121;
}

.aboutUs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2svw;
}

.aboutUs h1 {
  font-size: 5svw;
}

.aboutUsCard {
  padding: 1rem;
  border-radius: 25px;
  background-color: var(--body-card-colour);
  max-width: 76svw;
}

.slide {
  padding: 2%;
  background: #dd4a48;
  border-radius: 15px;
}

.slide img {
  aspect-ratio: 4/3;
  object-fit: cover;
}

.footer {
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
  margin-top: 2svh;
  margin-bottom: 3svh;
  margin-left: 1svw;
  margin-right: 1svw;
  width: 95%;
  padding: 1svh;
  background-color: var(--header-colour);
  color: var(--link-color);
  font-size: 3svw;
}

.footer > * > a {
  font-size: 3svw;
}

@media only screen and (max-width: 700px) {
  p {
    font-size: 4svw;
  }

  .header h1 {
    font-size: 15svw;
  }

  .header img {
    width: 15svw;
  }

  .monthlySpecial h1 {
    font-size: 10svw;
  }

  .monthlySpecial h2 {
    font-size: 8svw;
  }

  .specialCard {
    max-width: 98%;
  }

  .aboutUsCard {
    max-width: 98%;
  }

  .aboutUs h1 {
    font-size: 10svw;
  }

  .footer {
    font-size: 5svw;
  }

  .footer > * > a {
    font-size: 5svw;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Madimi+One&display=swap\");\r\n\r\n:root {\r\n  --header-colour: #e292219d;\r\n  --body-card-colour: #b8b8b84d;\r\n  --link-color: #2c4390;\r\n}\r\n\r\n* {\r\n  font-family: Ceviche One;\r\n  background-color: #170e3200;\r\n  text-decoration: none;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  padding-bottom: 2px;\r\n  text-decoration: underline 0.15em var(--link-color);\r\n  text-underline-offset: 5px;\r\n  transition: text-decoration-color 300ms;\r\n}\r\n\r\na:hover {\r\n  text-decoration-color: #00000000;\r\n}\r\n\r\np {\r\n  font-family: \"Madimi One\", sans-serif;\r\n  color: #000000;\r\n  font-size: 2svw;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  border-radius: 15px;\r\n  background: #dd4b4800;\r\n}\r\n\r\nh1 {\r\n  color: #e23121;\r\n  background: #dd4b4800;\r\n}\r\n\r\nh2 {\r\n  background-color: #dd4b4800;\r\n}\r\n\r\n.gradientText {\r\n  background-color: #e23121;\r\n  background-image: linear-gradient(45deg, #ff0909, #3a9bd8);\r\n  background-size: 100%;\r\n  background-repeat: repeat;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n}\r\n\r\n.backgroundImage {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  display: block;\r\n  background-image: url(./the_logo.webp);\r\n  height: 5000px;\r\n  width: 5076px;\r\n  filter: blur(5px);\r\n  z-index: -1111;\r\n  animation: slide 60s linear infinite;\r\n}\r\n\r\n@keyframes slide {\r\n  0% {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  100% {\r\n    transform: translate3d(-1692px, -800px, 0);\r\n  }\r\n}\r\n\r\n.root {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2svh;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 20px;\r\n  padding-bottom: 2svw;\r\n  background-color: var(--header-colour);\r\n}\r\n\r\n.header h1 {\r\n  display: flex;\r\n  align-items: end;\r\n  font-size: 5svw;\r\n  margin-bottom: 2svh;\r\n  gap: 10px;\r\n}\r\n.header > h1 > a {\r\n  text-decoration-color: #e2312100;\r\n}\r\n\r\n.header > h1 > a:hover {\r\n  text-decoration-color: #e23121;\r\n}\r\n\r\n.header img {\r\n  width: 10svw;\r\n}\r\n\r\n.links {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: #2c4390;\r\n  margin-left: 2svw;\r\n  margin-right: 2svw;\r\n  font-size: calc(16px + 1svw);\r\n  gap: 3svw;\r\n}\r\n\r\n.menu-image {\r\n  padding: 1svh;\r\n}\r\n\r\n.monthlySpecial {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 2svh;\r\n  color: #000102;\r\n  border-radius: 15px;\r\n}\r\n\r\n.monthlySpecial h1 {\r\n  font-size: 5svw;\r\n  margin-bottom: 3svh;\r\n}\r\n\r\n.specialCard {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: var(--body-card-colour);\r\n  border-radius: 25px;\r\n  max-width: 76svw;\r\n  gap: 2vh;\r\n}\r\n\r\n.specialCard h2 {\r\n  font-size: 4svw;\r\n}\r\n\r\n.specialCard img {\r\n  inline-size: 100%;\r\n  aspect-ratio: 4/3;\r\n}\r\n\r\n.links > a:hover {\r\n  text-decoration-color: #e23121;\r\n}\r\n\r\n.aboutUs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 2svw;\r\n}\r\n\r\n.aboutUs h1 {\r\n  font-size: 5svw;\r\n}\r\n\r\n.aboutUsCard {\r\n  padding: 1rem;\r\n  border-radius: 25px;\r\n  background-color: var(--body-card-colour);\r\n  max-width: 76svw;\r\n}\r\n\r\n.slide {\r\n  padding: 2%;\r\n  background: #dd4a48;\r\n  border-radius: 15px;\r\n}\r\n\r\n.slide img {\r\n  aspect-ratio: 4/3;\r\n  object-fit: cover;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  border-radius: 20px;\r\n  margin-top: 2svh;\r\n  margin-bottom: 3svh;\r\n  margin-left: 1svw;\r\n  margin-right: 1svw;\r\n  width: 95%;\r\n  padding: 1svh;\r\n  background-color: var(--header-colour);\r\n  color: var(--link-color);\r\n  font-size: 3svw;\r\n}\r\n\r\n.footer > * > a {\r\n  font-size: 3svw;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  p {\r\n    font-size: 4svw;\r\n  }\r\n\r\n  .header h1 {\r\n    font-size: 15svw;\r\n  }\r\n\r\n  .header img {\r\n    width: 15svw;\r\n  }\r\n\r\n  .monthlySpecial h1 {\r\n    font-size: 10svw;\r\n  }\r\n\r\n  .monthlySpecial h2 {\r\n    font-size: 8svw;\r\n  }\r\n\r\n  .specialCard {\r\n    max-width: 98%;\r\n  }\r\n\r\n  .aboutUsCard {\r\n    max-width: 98%;\r\n  }\r\n\r\n  .aboutUs h1 {\r\n    font-size: 10svw;\r\n  }\r\n\r\n  .footer {\r\n    font-size: 5svw;\r\n  }\r\n\r\n  .footer > * > a {\r\n    font-size: 5svw;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scroll-images sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*********************************************************************!*\
  !*** ./src/scroll-images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./doug-ubc.jpeg": "./src/scroll-images/doug-ubc.jpeg",
	"./img-10.jpg": "./src/scroll-images/img-10.jpg",
	"./img-2.jpg": "./src/scroll-images/img-2.jpg",
	"./img-3.jpeg": "./src/scroll-images/img-3.jpeg",
	"./img-4.png": "./src/scroll-images/img-4.png",
	"./img-5.jpeg": "./src/scroll-images/img-5.jpeg",
	"./img-6.jpg": "./src/scroll-images/img-6.jpg",
	"./img-7.jpg": "./src/scroll-images/img-7.jpg",
	"./img-8.png": "./src/scroll-images/img-8.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/scroll-images sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/DLMenu.jpg":
/*!************************!*\
  !*** ./src/DLMenu.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "97f7bf450d71affb3d12.jpg";

/***/ }),

/***/ "./src/flames.gif":
/*!************************!*\
  !*** ./src/flames.gif ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "18338d25fd35c2aac431.gif";

/***/ }),

/***/ "./src/monthlySpecial.jpg":
/*!********************************!*\
  !*** ./src/monthlySpecial.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5efdeff32a911f84af43.jpg";

/***/ }),

/***/ "./src/scroll-images/doug-ubc.jpeg":
/*!*****************************************!*\
  !*** ./src/scroll-images/doug-ubc.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fa72fe0e30f4628e11c2.jpeg";

/***/ }),

/***/ "./src/scroll-images/img-10.jpg":
/*!**************************************!*\
  !*** ./src/scroll-images/img-10.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "49e0be2df95e0cfe460d.jpg";

/***/ }),

/***/ "./src/scroll-images/img-2.jpg":
/*!*************************************!*\
  !*** ./src/scroll-images/img-2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1a02b7b1b3b2deecb512.jpg";

/***/ }),

/***/ "./src/scroll-images/img-3.jpeg":
/*!**************************************!*\
  !*** ./src/scroll-images/img-3.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "43775082a1e4d3445808.jpeg";

/***/ }),

/***/ "./src/scroll-images/img-4.png":
/*!*************************************!*\
  !*** ./src/scroll-images/img-4.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d53ba5bb7b6d3126eb78.png";

/***/ }),

/***/ "./src/scroll-images/img-5.jpeg":
/*!**************************************!*\
  !*** ./src/scroll-images/img-5.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae67368600d1008caa25.jpeg";

/***/ }),

/***/ "./src/scroll-images/img-6.jpg":
/*!*************************************!*\
  !*** ./src/scroll-images/img-6.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2b010ef2b7e8985ff3c5.jpg";

/***/ }),

/***/ "./src/scroll-images/img-7.jpg":
/*!*************************************!*\
  !*** ./src/scroll-images/img-7.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3006f5784c01995ef9f.jpg";

/***/ }),

/***/ "./src/scroll-images/img-8.png":
/*!*************************************!*\
  !*** ./src/scroll-images/img-8.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "39534221130492a51b90.png";

/***/ }),

/***/ "./src/the_logo.webp":
/*!***************************!*\
  !*** ./src/the_logo.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "678693abc1f4b6afc0cb.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_2nddldesign"] = self["webpackChunk_2nddldesign"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_getUrl_js-node_modules_react-dom_client_js-node_-f00bea"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FB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O1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzJuZGRsZGVzaWduLy4vc3JjL0Fib3V0VXMuanN4Iiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vc3JjL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9zcmMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL3NyYy9Ib21lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9zcmMvTW9udGhseVNwZWNpYWwuanN4Iiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vc3JjL1Njcm9sbEJhci5qc3giLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vc3JjL3Njcm9sbC1pbWFnZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEFib3V0VXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRVc1wiPlxyXG4gICAgICAgIDxoMT5XSEFUIFdFIEFSRTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFVzQ2FyZFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIE5hc2h2aWxsZS1zdHlsZSBmcmllZCBjaGlja2VuIGlzIGNoYXJhY3Rlcml6ZWQgYnkgaXQncyBvaWwgZGlwLCBhbmRcclxuICAgICAgICAgICAgc3BpY2VkIGR1c3QgdGhhdCBpdCBnZXRzIGFzIHNvb24gYXMgaXQgY29tZXMgb3V0IHRoZSBmcnllci4gVGhpc1xyXG4gICAgICAgICAgICBnaXZlcyBpdCBpdHMgY2hhcmN0ZXJpc3RpYyByZWQgY29sb3VyLCBhbmQgaGVscHMgdG8gY29hdCB5b3VyIG1vdXRoXHJcbiAgICAgICAgICAgIHdpdGggb3VyIGRlbGljaW91cyBzcGljZSBibGVuZHMhIFNpbmNlIG91ciBpbmNlcHRpb24gaW4gMjAxMiwgRG91Z1xyXG4gICAgICAgICAgICBTdGVwaGVuIGhhcyBiZWVuIHNpbmdtaW5kZWRseSBmb2N1c2VkIG9uIHRoZSBwZXJmZWN0aW9uIG9mIHRoaXNcclxuICAgICAgICAgICAgc3RvcmllZCBjaGlja2VuLCB3aXRoIHRoZSBnb2FsIG9mIHNoYXJpbmcgaGlzIG1vdXRoLXdhdGVyaW5nXHJcbiAgICAgICAgICAgIGNyZWF0aW9ucyB0byBhbGwgb2YgVmFuY291dmVyIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0VXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTG9jYXRpb25zKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD5FYXN0IFZhbjogOTA1IENPTU1FUkNJQUwgRFJJVkU8L3A+XHJcbiAgICAgIDxwPlVCQzogNjA2NSBVTklWRVJTSVRZIEJPVUxFVkFSRDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxhIGhyZWY9XCJtYWlsdG86ZG91Z0BkbGNoaWNrZW5zaGFjay5jYVwiPkRPVUdARExDSElDS0VOU0hBQ0suQ0E8L2E+XHJcbiAgICAgIDxwPig2MDQpIDI4My0xMzg1PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG91cnMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPk1vbiB0byBGcmk6IDExYW0gLSA5cG08L3A+XHJcbiAgICAgIDxwPlN1bjogMTFhbSAtIDQ6MzBwbTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICBjb25zdCBbb3BlblNlY3Rpb24sIHNldE9wZW5TZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChzZWN0aW9uKSA9PiB7XHJcbiAgICBzZXRPcGVuU2VjdGlvbihvcGVuU2VjdGlvbiA9PT0gc2VjdGlvbiA/IG51bGwgOiBzZWN0aW9uKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJsb2NhdGlvbnNcIil9PkxPQ0FUSU9OUzwvYT5cclxuICAgICAgICAgIHtvcGVuU2VjdGlvbiA9PT0gXCJsb2NhdGlvbnNcIiAmJiA8TG9jYXRpb25zIC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcImNvbnRhY3RcIil9PkNPTlRBQ1QgVVM8L2E+XHJcbiAgICAgICAgICB7b3BlblNlY3Rpb24gPT09IFwiY29udGFjdFwiICYmIDxDb250YWN0IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcImhvdXJzXCIpfT5IT1VSUzwvYT5cclxuICAgICAgICAgIHtvcGVuU2VjdGlvbiA9PT0gXCJob3Vyc1wiICYmIDxIb3VycyAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZsYW1lc0dpZiBmcm9tIFwiLi9mbGFtZXMuZ2lmXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuICBjb25zdCBsb2dvID1cclxuICAgIFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS80Y2ExZWJfZTJmOTdhODZlOTU5NDU1ZThiYTBjYjAxYTNiZDBlNWZ+bXYyLmpwZy92MS9maWxsL3dfMzI3LGhfMjkzLGFsX2MscV84MCx1c21fMS4yMF8xLjAwXzAuMDEsZW5jX2F1dG8vNGNhMWViX2UyZjk3YTg2ZTk1OTQ1NWU4YmEwY2IwMWEzYmQwZTVmfm12Mi5qcGdcIjtcclxuICBjb25zdCBnaWZ0Q2FyZExpbmsgPSBcImh0dHBzOi8vc3F1YXJldXAuY29tL2dpZnQvTUxXV0tBRlBXR1RGSi9vcmRlclwiO1xyXG4gIGNvbnN0IGVhc3RWYW5MaW5rID0gXCJodHRwczovL2RsLWNoaWNrZW4tZWFzdC12YW5jb3V2ZXIuc3F1YXJlLnNpdGUvXCI7XHJcbiAgY29uc3QgVUJDTGluayA9IFwiaHR0cHM6Ly9kbC1jaGlja2VuLXViYy5zcXVhcmUuc2l0ZS9cIjtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuc2V0TWFpblNjcmVlbihcIm1lbnVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZEltYWdlXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbGFtZUltYWdlc1wiIHNyYz17ZmxhbWVzR2lmfSAvPlxyXG4gICAgICAgICAgPGEgaWQ9XCJzZWNyZXRNZW51XCI+RE9XTiBMT1cgQ0hJQ0tFTjwvYT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxhbWVJbWFnZXNcIiBzcmM9e2ZsYW1lc0dpZn0gLz5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIHsvKiB7PGltZ1xyXG4gICAgICAgICAgc3JjPXtsb2dvfVxyXG4gICAgICAgICAgYWx0PVwiREwgQ2hpY2tlbiBMb2dvIC0gU21pcmtpbmcgQ2hpY2tlbiB3aXRoIGZ1Y2sgbWUgZXllc1wiXHJcbiAgICAgICAgPjwvaW1nPn0gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj17Z2lmdENhcmRMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgR0lGVCBDQVJEU1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj17ZWFzdFZhbkxpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICBFQVNUIFZBTiBPUkRFUklOR1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj17VUJDTGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIFVCQyBPUkRFUklOR1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaWQ9XCJtZW51QnV0dG9uXCIgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfT5cclxuICAgICAgICAgICAgTUVOVVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbWVudUltYWdlIGZyb20gXCIuL0RMTWVudS5qcGdcIjtcclxuaW1wb3J0IE1vbnRobHlTcGVjaWFsIGZyb20gXCIuL01vbnRobHlTcGVjaWFsXCI7XHJcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuL0Fib3V0VXNcIjtcclxuaW1wb3J0IFNjcm9sbGJhciBmcm9tIFwiLi9TY3JvbGxCYXJcIjtcclxuXHJcbmNvbnN0IHNjcm9sbEltYWdlc0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXHJcbiAgXCIuL3Njcm9sbC1pbWFnZXNcIixcclxuICBmYWxzZSxcclxuICAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC9cclxuKTtcclxuY29uc3Qgc2Nyb2xsSW1hZ2VzID0gc2Nyb2xsSW1hZ2VzQ29udGV4dC5rZXlzKCkubWFwKHNjcm9sbEltYWdlc0NvbnRleHQpO1xyXG5cclxuZnVuY3Rpb24gTWFpblNjcmVlbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1vbnRobHlTcGVjaWFsIC8+XHJcbiAgICAgIDxBYm91dFVzIC8+XHJcbiAgICAgIDxTY3JvbGxiYXIgaW1hZ2VzPXtzY3JvbGxJbWFnZXN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IG1lbnUgPSAoXHJcbiAgICA8PlxyXG4gICAgICA8aW1nIHNyYz17bWVudUltYWdlfSBhbHQ9XCJETCBNRU5VXCIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbiAgcmV0dXJuIDw+e3Byb3BzLm1haW5TY3JlZW4gPT0gXCJIb21lUGFnZVwiID8gPE1haW5TY3JlZW4gLz4gOiB7IG1lbnUgfX08Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb250aGx5U3BlY2lhbEltZyBmcm9tIFwiLi9tb250aGx5U3BlY2lhbC5qcGdcIjtcclxuXHJcbmZ1bmN0aW9uIE1vbnRobHlTcGVjaWFsKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRobHlTcGVjaWFsXCI+XHJcbiAgICAgICAgPGgxPldIQVQnUyBHT0lORyBPTiBUSElTIE1PTlRIPzwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVjaWFsQ2FyZFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImdyYWRpZW50VGV4dFwiPlRoZSBIdXJyaWNhbmUhPC9oMj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBBIHNwZWNpYWxseSBjcmFmdGVkIGJsZW5kIG9mIGZsYXZvdXJzIGFuZCBzcGljZXMsIGRlbGl2ZXJlZCBzdHJhaWdodFxyXG4gICAgICAgICAgICB0byB5b3UgZXZlcnkgbW9udGghXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8aW1nIHNyYz17bW9udGhseVNwZWNpYWxJbWd9IGFsdD1cIkNoaWNrZW4gU2FuZG9cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vbnRobHlTcGVjaWFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcclxuXHJcbmZ1bmN0aW9uIFNjcm9sbEJhcih7IGltYWdlcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgIGluZmluaXRlTG9vcD17dHJ1ZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgICBlbXVsYXRlVG91Y2g9e3RydWV9XHJcbiAgICAgID5cclxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz17aW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxCYXI7XHJcblxyXG57XHJcbiAgLyogPD5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImltZ0NvbnRhaW5lciBpbmxpbmVTbmFwc1wiPlxyXG4gICAge2ltYWdlcy5tYXAoKGltYWdlKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsSW1hZ2VzXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpfVxyXG4gIDwvZGl2PlxyXG48Lz4gKi9cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9Ib21lUGFnZVwiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttYWluU2NyZWVuLCBzZXRNYWluU2NyZWVuXSA9IHVzZVN0YXRlKFwiSG9tZVBhZ2VcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIHNldE1haW5TY3JlZW49e3NldE1haW5TY3JlZW59IC8+XHJcbiAgICAgIDxIb21lUGFnZSBtYWluU2NyZWVuPXttYWluU2NyZWVufSAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwIC8+KTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vdGhlX2xvZ28ud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2V2aWNoZStPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWFkaW1pK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1oZWFkZXItY29sb3VyOiAjZTI5MjIxOWQ7XHJcbiAgLS1ib2R5LWNhcmQtY29sb3VyOiAjYjhiOGI4NGQ7XHJcbiAgLS1saW5rLWNvbG9yOiAjMmM0MzkwO1xyXG59XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogQ2V2aWNoZSBPbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MGUzMjAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMC4xNWVtIHZhcigtLWxpbmstY29sb3IpO1xyXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xyXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbi1jb2xvciAzMDBtcztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwMDAwMDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1hZGltaSBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDJzdnc7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2RkNGI0ODAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNlMjMxMjE7XHJcbiAgYmFja2dyb3VuZDogI2RkNGI0ODAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGI0ODAwO1xyXG59XHJcblxyXG4uZ3JhZGllbnRUZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzMTIxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmMDkwOSwgIzNhOWJkOCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxufVxyXG5cclxuLmJhY2tncm91bmRJbWFnZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgaGVpZ2h0OiA1MDAwcHg7XHJcbiAgd2lkdGg6IDUwNzZweDtcclxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICB6LWluZGV4OiAtMTExMTtcclxuICBhbmltYXRpb246IHNsaWRlIDYwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTY5MnB4LCAtODAwcHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLnJvb3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDJzdmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnN2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3VyKTtcclxufVxyXG5cclxuLmhlYWRlciBoMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIGZvbnQtc2l6ZTogNXN2dztcclxuICBtYXJnaW4tYm90dG9tOiAyc3ZoO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG4uaGVhZGVyID4gaDEgPiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNlMjMxMjEwMDtcclxufVxyXG5cclxuLmhlYWRlciA+IGgxID4gYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxO1xyXG59XHJcblxyXG4uaGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwc3Z3O1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY29sb3I6ICMyYzQzOTA7XHJcbiAgbWFyZ2luLWxlZnQ6IDJzdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyc3Z3O1xyXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMXN2dyk7XHJcbiAgZ2FwOiAzc3Z3O1xyXG59XHJcblxyXG4ubWVudS1pbWFnZSB7XHJcbiAgcGFkZGluZzogMXN2aDtcclxufVxyXG5cclxuLm1vbnRobHlTcGVjaWFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyc3ZoO1xyXG4gIGNvbG9yOiAjMDAwMTAyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5tb250aGx5U3BlY2lhbCBoMSB7XHJcbiAgZm9udC1zaXplOiA1c3Z3O1xyXG4gIG1hcmdpbi1ib3R0b206IDNzdmg7XHJcbn1cclxuXHJcbi5zcGVjaWFsQ2FyZCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWNhcmQtY29sb3VyKTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIG1heC13aWR0aDogNzZzdnc7XHJcbiAgZ2FwOiAydmg7XHJcbn1cclxuXHJcbi5zcGVjaWFsQ2FyZCBoMiB7XHJcbiAgZm9udC1zaXplOiA0c3Z3O1xyXG59XHJcblxyXG4uc3BlY2lhbENhcmQgaW1nIHtcclxuICBpbmxpbmUtc2l6ZTogMTAwJTtcclxuICBhc3BlY3QtcmF0aW86IDQvMztcclxufVxyXG5cclxuLmxpbmtzID4gYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxO1xyXG59XHJcblxyXG4uYWJvdXRVcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnN2dztcclxufVxyXG5cclxuLmFib3V0VXMgaDEge1xyXG4gIGZvbnQtc2l6ZTogNXN2dztcclxufVxyXG5cclxuLmFib3V0VXNDYXJkIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jYXJkLWNvbG91cik7XHJcbiAgbWF4LXdpZHRoOiA3NnN2dztcclxufVxyXG5cclxuLnNsaWRlIHtcclxuICBwYWRkaW5nOiAyJTtcclxuICBiYWNrZ3JvdW5kOiAjZGQ0YTQ4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5zbGlkZSBpbWcge1xyXG4gIGFzcGVjdC1yYXRpbzogNC8zO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMnN2aDtcclxuICBtYXJnaW4tYm90dG9tOiAzc3ZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAxc3Z3O1xyXG4gIG1hcmdpbi1yaWdodDogMXN2dztcclxuICB3aWR0aDogOTUlO1xyXG4gIHBhZGRpbmc6IDFzdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG91cik7XHJcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogM3N2dztcclxufVxyXG5cclxuLmZvb3RlciA+ICogPiBhIHtcclxuICBmb250LXNpemU6IDNzdnc7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogNHN2dztcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAxNXN2dztcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxNXN2dztcclxuICB9XHJcblxyXG4gIC5tb250aGx5U3BlY2lhbCBoMSB7XHJcbiAgICBmb250LXNpemU6IDEwc3Z3O1xyXG4gIH1cclxuXHJcbiAgLm1vbnRobHlTcGVjaWFsIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogOHN2dztcclxuICB9XHJcblxyXG4gIC5zcGVjaWFsQ2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDk4JTtcclxuICB9XHJcblxyXG4gIC5hYm91dFVzQ2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDk4JTtcclxuICB9XHJcblxyXG4gIC5hYm91dFVzIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTBzdnc7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNXN2dztcclxuICB9XHJcblxyXG4gIC5mb290ZXIgPiAqID4gYSB7XHJcbiAgICBmb250LXNpemU6IDVzdnc7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsbURBQW1EO0VBQ25ELDBCQUEwQjtFQUMxQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMERBQTBEO0VBQzFELHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsY0FBYztFQUNkLHlEQUFzQztFQUN0QyxjQUFjO0VBQ2QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0U7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDBDQUEwQztFQUM1QztBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DZXZpY2hlK09uZSZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYWRpbWkrT25lJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0taGVhZGVyLWNvbG91cjogI2UyOTIyMTlkO1xcclxcbiAgLS1ib2R5LWNhcmQtY29sb3VyOiAjYjhiOGI4NGQ7XFxyXFxuICAtLWxpbmstY29sb3I6ICMyYzQzOTA7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6IENldmljaGUgT25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MGUzMjAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAwLjE1ZW0gdmFyKC0tbGluay1jb2xvcik7XFxyXFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbi1jb2xvciAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1hZGltaSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBmb250LXNpemU6IDJzdnc7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2RkNGI0ODAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBjb2xvcjogI2UyMzEyMTtcXHJcXG4gIGJhY2tncm91bmQ6ICNkZDRiNDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGI0ODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JhZGllbnRUZXh0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjMxMjE7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjA5MDksICMzYTliZDgpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZEltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3RoZV9sb2dvLndlYnApO1xcclxcbiAgaGVpZ2h0OiA1MDAwcHg7XFxyXFxuICB3aWR0aDogNTA3NnB4O1xcclxcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICB6LWluZGV4OiAtMTExMTtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGUgNjBzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTY5MnB4LCAtODAwcHgsIDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucm9vdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnN2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJzdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBoMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gIGZvbnQtc2l6ZTogNXN2dztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJzdmg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5oZWFkZXIgPiBoMSA+IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxMDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgPiBoMSA+IGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogMTBzdnc7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGNvbG9yOiAjMmM0MzkwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJzdnc7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJzdnc7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDFzdncpO1xcclxcbiAgZ2FwOiAzc3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pbWFnZSB7XFxyXFxuICBwYWRkaW5nOiAxc3ZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9udGhseVNwZWNpYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMnN2aDtcXHJcXG4gIGNvbG9yOiAjMDAwMTAyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRobHlTcGVjaWFsIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXN2dztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNzdmg7XFxyXFxufVxcclxcblxcclxcbi5zcGVjaWFsQ2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1jYXJkLWNvbG91cik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgbWF4LXdpZHRoOiA3NnN2dztcXHJcXG4gIGdhcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BlY2lhbENhcmQgaDIge1xcclxcbiAgZm9udC1zaXplOiA0c3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4uc3BlY2lhbENhcmQgaW1nIHtcXHJcXG4gIGlubGluZS1zaXplOiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyA+IGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRVcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyc3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRVcyBoMSB7XFxyXFxuICBmb250LXNpemU6IDVzdnc7XFxyXFxufVxcclxcblxcclxcbi5hYm91dFVzQ2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktY2FyZC1jb2xvdXIpO1xcclxcbiAgbWF4LXdpZHRoOiA3NnN2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlIHtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgYmFja2dyb3VuZDogI2RkNGE0ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZSBpbWcge1xcclxcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMnN2aDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNzdmg7XFxyXFxuICBtYXJnaW4tbGVmdDogMXN2dztcXHJcXG4gIG1hcmdpbi1yaWdodDogMXN2dztcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBwYWRkaW5nOiAxc3ZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG91cik7XFxyXFxuICBjb2xvcjogdmFyKC0tbGluay1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDNzdnc7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgPiAqID4gYSB7XFxyXFxuICBmb250LXNpemU6IDNzdnc7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gIHAge1xcclxcbiAgICBmb250LXNpemU6IDRzdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXN2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1c3Z3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vbnRobHlTcGVjaWFsIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHN2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb250aGx5U3BlY2lhbCBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHN2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zcGVjaWFsQ2FyZCB7XFxyXFxuICAgIG1heC13aWR0aDogOTglO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0VXNDYXJkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5OCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXRVcyBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBzdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9vdGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA1c3Z3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlciA+ICogPiBhIHtcXHJcXG4gICAgZm9udC1zaXplOiA1c3Z3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2RvdWctdWJjLmpwZWdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2RvdWctdWJjLmpwZWdcIixcblx0XCIuL2ltZy0xMC5qcGdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy0xMC5qcGdcIixcblx0XCIuL2ltZy0yLmpwZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTIuanBnXCIsXG5cdFwiLi9pbWctMy5qcGVnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctMy5qcGVnXCIsXG5cdFwiLi9pbWctNC5wbmdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy00LnBuZ1wiLFxuXHRcIi4vaW1nLTUuanBlZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTUuanBlZ1wiLFxuXHRcIi4vaW1nLTYuanBnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctNi5qcGdcIixcblx0XCIuL2ltZy03LmpwZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTcuanBnXCIsXG5cdFwiLi9pbWctOC5wbmdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy04LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9zY3JvbGwtaW1hZ2VzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXzJuZGRsZGVzaWduXCJdID0gc2VsZltcIndlYnBhY2tDaHVua18ybmRkbGRlc2lnblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9nZXRVcmxfanMtbm9kZV9tb2R1bGVzX3JlYWN0LWRvbV9jbGllbnRfanMtbm9kZV8tZjAwYmVhXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJBYm91dFVzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidXNlU3RhdGUiLCJMb2NhdGlvbnMiLCJDb250YWN0IiwiaHJlZiIsIkhvdXJzIiwiRm9vdGVyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlblNlY3Rpb24iLCJzZXRPcGVuU2VjdGlvbiIsImhhbmRsZUNsaWNrIiwic2VjdGlvbiIsIm9uQ2xpY2siLCJmbGFtZXNHaWYiLCJIZWFkZXIiLCJwcm9wcyIsImxvZ28iLCJnaWZ0Q2FyZExpbmsiLCJlYXN0VmFuTGluayIsIlVCQ0xpbmsiLCJoYW5kbGVNZW51Q2xpY2siLCJzZXRNYWluU2NyZWVuIiwiY29uc29sZSIsImxvZyIsInNyYyIsImlkIiwidGFyZ2V0IiwibWVudUltYWdlIiwiTW9udGhseVNwZWNpYWwiLCJTY3JvbGxiYXIiLCJzY3JvbGxJbWFnZXNDb250ZXh0IiwicmVxdWlyZSIsImNvbnRleHQiLCJzY3JvbGxJbWFnZXMiLCJrZXlzIiwibWFwIiwiTWFpblNjcmVlbiIsImltYWdlcyIsIkhvbWVQYWdlIiwibWVudSIsImFsdCIsIm1haW5TY3JlZW4iLCJtb250aGx5U3BlY2lhbEltZyIsIkNhcm91c2VsIiwiU2Nyb2xsQmFyIiwiX3JlZiIsImF1dG9QbGF5IiwiaW5maW5pdGVMb29wIiwic2hvd1N0YXR1cyIsImVtdWxhdGVUb3VjaCIsImltYWdlIiwiaW5kZXgiLCJrZXkiLCJjcmVhdGVSb290IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9