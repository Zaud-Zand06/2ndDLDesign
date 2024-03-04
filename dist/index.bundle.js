/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
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
  background-color: #dd4b4800;
  color: inherit;
  padding-bottom: 2px;
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  text-underline-offset: 5px;
  transition: text-decoration-color 300ms;
}

a:hover {
  text-decoration-color: inherit;
}

p {
  font-weight: 900px;
  background-color: #00000000;
  color: #000000;
  font-size: 5svh;
}

img {
  display: block;
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

.gradient-text {
  background-color: #e23121;
  background-image: linear-gradient(45deg, #f3ec78, #3a9bd8);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.background-image {
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

.site-body {
  margin-top: 2svh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  flex-direction: column;
  width: 98%;
  height: auto;
  align-items: center;
  justify-content: center;
}

.header h1 {
  margin-top: 2svh;
  margin-bottom: 2svh;
  font-size: 5svw;
  display: flex;
  gap: 3svw;
  align-items: end;
}
.header img {
  width: 15svw;
}

.header > h1 > a:hover {
  text-decoration-color: #f9b572;
}

.menu-image {
  padding: 1svh;
}
.monthly-special {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2svh;
  color: #000102;
  border-radius: 15px;
}

.monthly-special h1 {
  font-size: 5svh;
  margin-bottom: 3svh;
}

.special-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dd4a48;
  border-radius: 25px;
  max-width: 76svw;
  gap: 2vh;
}

.special-card h2 {
  font-size: 4svh;
}

.special-card img {
  inline-size: 100%;
  aspect-ratio: 4/3;
}

.links {
  display: flex;
  color: #2c4390;
  margin-left: 2svw;
  margin-right: 2svw;
  font-size: calc(16px + 1svh);
  gap: 3svw;
}

.links > a:hover {
  text-decoration-color: #e23121;
}

.about-us {
  margin: 3svh;
  color: #f9b572;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}

.about-us h1 {
  font-size: 5svh;
}

.about-us p {
  width: 95svw;
}

.img-container {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 30%;
  grid-template-rows: auto;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
}

.inline-snaps {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 4%;
}

.inline-snaps > * {
  scroll-snap-align: start;
}

.scroll-images {
  position: relative;
  padding: 4%;
  margin: 4%;
  background: #dd4a48;
  border-radius: 15px;
}

.scroll-images img {
  inline-size: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.footer {
  display: grid;
  background-color: #dd4a48;
  border-radius: 20px;
  margin-top: 2svh;
  margin-bottom: 3svh;
  margin-left: 1svw;
  margin-right: 1svw;
  width: 95%;
  padding: 1svh;
}
.accordion {
  font-size: 4svh;
  padding: 0;
  border: none;
}

.active,
.accordion:hover {
  padding: 5px;
  background-color: #913534;
  border-radius: 20px;
}

.panel {
  padding: 0 18px;
  background-color: #dd4a48;
  max-height: 0;
  color: #cdfad5;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: max-height 0.2 ease-out;
}

.panel p {
  color: #000000;
}

.footer * {
  color: #2c4390;
}

.footer p,
q .footer a {
  font-size: calc(24px + 0.1svh);
}

@media only screen and (max-width: 500px) {
  .img-container {
    grid-auto-columns: 77%;
  }

  .header h1 {
    font-size: 15svw;
  }

  .monthly-special h1 {
    font-size: 10svw;
  }

  .monthly-special h2 {
    font-size: 8svw;
  }

  .special-card {
    max-width: 98%;
  }

  .about-us h1 {
    font-size: 10svw;
  }

  .accordion {
    font-size: 10svw;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap\");\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: Ceviche One;\r\n  background-color: #170e3200;\r\n  text-decoration: none;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\na {\r\n  background-color: #dd4b4800;\r\n  color: inherit;\r\n  padding-bottom: 2px;\r\n  text-decoration: underline 0.15em rgba(0, 0, 0, 0);\r\n  text-underline-offset: 5px;\r\n  transition: text-decoration-color 300ms;\r\n}\r\n\r\na:hover {\r\n  text-decoration-color: inherit;\r\n}\r\n\r\np {\r\n  font-weight: 900px;\r\n  background-color: #00000000;\r\n  color: #000000;\r\n  font-size: 5svh;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  max-width: 100%;\r\n  border-radius: 15px;\r\n  background: #dd4b4800;\r\n}\r\n\r\nh1 {\r\n  color: #e23121;\r\n  background: #dd4b4800;\r\n}\r\n\r\nh2 {\r\n  background-color: #dd4b4800;\r\n}\r\n\r\n.gradient-text {\r\n  background-color: #e23121;\r\n  background-image: linear-gradient(45deg, #f3ec78, #3a9bd8);\r\n  background-size: 100%;\r\n  background-repeat: repeat;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n}\r\n\r\n.background-image {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  display: block;\r\n  background-image: url(./the_logo.webp);\r\n  height: 5000px;\r\n  width: 5076px;\r\n  filter: blur(5px);\r\n  z-index: -1111;\r\n  animation: slide 60s linear infinite;\r\n}\r\n\r\n@keyframes slide {\r\n  0% {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  100% {\r\n    transform: translate3d(-1692px, -800px, 0);\r\n  }\r\n}\r\n\r\n.site-body {\r\n  margin-top: 2svh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 98%;\r\n  height: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.header h1 {\r\n  margin-top: 2svh;\r\n  margin-bottom: 2svh;\r\n  font-size: 5svw;\r\n  display: flex;\r\n  gap: 3svw;\r\n  align-items: end;\r\n}\r\n.header img {\r\n  width: 15svw;\r\n}\r\n\r\n.header > h1 > a:hover {\r\n  text-decoration-color: #f9b572;\r\n}\r\n\r\n.menu-image {\r\n  padding: 1svh;\r\n}\r\n.monthly-special {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 2svh;\r\n  color: #000102;\r\n  border-radius: 15px;\r\n}\r\n\r\n.monthly-special h1 {\r\n  font-size: 5svh;\r\n  margin-bottom: 3svh;\r\n}\r\n\r\n.special-card {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: #dd4a48;\r\n  border-radius: 25px;\r\n  max-width: 76svw;\r\n  gap: 2vh;\r\n}\r\n\r\n.special-card h2 {\r\n  font-size: 4svh;\r\n}\r\n\r\n.special-card img {\r\n  inline-size: 100%;\r\n  aspect-ratio: 4/3;\r\n}\r\n\r\n.links {\r\n  display: flex;\r\n  color: #2c4390;\r\n  margin-left: 2svw;\r\n  margin-right: 2svw;\r\n  font-size: calc(16px + 1svh);\r\n  gap: 3svw;\r\n}\r\n\r\n.links > a:hover {\r\n  text-decoration-color: #e23121;\r\n}\r\n\r\n.about-us {\r\n  margin: 3svh;\r\n  color: #f9b572;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 20px;\r\n  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));\r\n}\r\n\r\n.about-us h1 {\r\n  font-size: 5svh;\r\n}\r\n\r\n.about-us p {\r\n  width: 95svw;\r\n}\r\n\r\n.img-container {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  grid-auto-columns: 30%;\r\n  grid-template-rows: auto;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  overscroll-behavior-inline: contain;\r\n}\r\n\r\n.inline-snaps {\r\n  scroll-snap-type: inline mandatory;\r\n  scroll-padding-inline: 4%;\r\n}\r\n\r\n.inline-snaps > * {\r\n  scroll-snap-align: start;\r\n}\r\n\r\n.scroll-images {\r\n  position: relative;\r\n  padding: 4%;\r\n  margin: 4%;\r\n  background: #dd4a48;\r\n  border-radius: 15px;\r\n}\r\n\r\n.scroll-images img {\r\n  inline-size: 100%;\r\n  aspect-ratio: 4/3;\r\n  object-fit: cover;\r\n}\r\n\r\n.footer {\r\n  display: grid;\r\n  background-color: #dd4a48;\r\n  border-radius: 20px;\r\n  margin-top: 2svh;\r\n  margin-bottom: 3svh;\r\n  margin-left: 1svw;\r\n  margin-right: 1svw;\r\n  width: 95%;\r\n  padding: 1svh;\r\n}\r\n.accordion {\r\n  font-size: 4svh;\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n.active,\r\n.accordion:hover {\r\n  padding: 5px;\r\n  background-color: #913534;\r\n  border-radius: 20px;\r\n}\r\n\r\n.panel {\r\n  padding: 0 18px;\r\n  background-color: #dd4a48;\r\n  max-height: 0;\r\n  color: #cdfad5;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  transition: max-height 0.2 ease-out;\r\n}\r\n\r\n.panel p {\r\n  color: #000000;\r\n}\r\n\r\n.footer * {\r\n  color: #2c4390;\r\n}\r\n\r\n.footer p,\r\nq .footer a {\r\n  font-size: calc(24px + 0.1svh);\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .img-container {\r\n    grid-auto-columns: 77%;\r\n  }\r\n\r\n  .header h1 {\r\n    font-size: 15svw;\r\n  }\r\n\r\n  .monthly-special h1 {\r\n    font-size: 10svw;\r\n  }\r\n\r\n  .monthly-special h2 {\r\n    font-size: 8svw;\r\n  }\r\n\r\n  .special-card {\r\n    max-width: 98%;\r\n  }\r\n\r\n  .about-us h1 {\r\n    font-size: 10svw;\r\n  }\r\n\r\n  .accordion {\r\n    font-size: 10svw;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scroll-images sync \\.(png%7Cjpe?g%7Cwebp)$":
/*!**********************************************************************!*\
  !*** ./src/scroll-images/ sync nonrecursive \.(png%7Cjpe?g%7Cwebp)$ ***!
  \**********************************************************************/
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
webpackContext.id = "./src/scroll-images sync \\.(png%7Cjpe?g%7Cwebp)$";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DLMenu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DLMenu.jpg */ "./src/DLMenu.jpg");
/* harmony import */ var _monthlySpecial_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monthlySpecial.jpg */ "./src/monthlySpecial.jpg");
/* harmony import */ var _flames_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flames.gif */ "./src/flames.gif");
/* harmony import */ var _the_logo_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./the_logo.webp */ "./src/the_logo.webp");






function importAll(r) {
  return r.keys().map(r);
}
const scrollImages = importAll(
  __webpack_require__("./src/scroll-images sync \\.(png%7Cjpe?g%7Cwebp)$")
);

function smoothScroll(element, scrollAmount) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const fraction = progress / 10000; // Adjust as needed

    if (fraction < 1) {
      element.scrollBy({
        left: scrollAmount * fraction,
        behavior: "auto",
      });
      requestAnimationFrame(step);
    } else {
      element.scrollBy({
        left: scrollAmount,
        behavior: "auto",
      });
    }
  };
  requestAnimationFrame(step);
}

const domManipulator = (function () {
  document.body.style.backgroundImage = "./the_logo.webp";
  const siteBody = document.querySelector(".site-body");

  function clearBody() {
    siteBody.innerHTML = "";
  }

  function addImages(images) {
    const imageContainer = document.querySelector(".img-container");
    //create the .scroll-images divs and add to .img-container div
    for (let index = 0; index < images.length; index++) {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("scroll-images");

      const img = document.createElement("img");
      img.src = images[index];
      imageDiv.appendChild(img);
      imageContainer.appendChild(imageDiv);
    }

    imageContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      smoothScroll(imageContainer, evt.deltaY < 0 ? -30 : 30);
    });
  }

  const acc = document.getElementsByClassName("accordion");

  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  function makeMenuBody() {
    const menu = document.createElement("img");
    menu.src = _DLMenu_jpg__WEBPACK_IMPORTED_MODULE_1__;
    menu.classList.add("menu-image");
    siteBody.appendChild(menu);
  }

  function makeSpecialCard() {
    const monthlySpecial = document.createElement("div");
    monthlySpecial.classList.add("monthly-special");
    siteBody.appendChild(monthlySpecial);
    const specialH1 = document.createElement("h1");
    specialH1.innerHTML = "WHAT'S GOING ON THIS MONTH?";
    monthlySpecial.appendChild(specialH1);
    const specialCard = document.createElement("div");
    specialCard.classList.add("special-card");
    monthlySpecial.appendChild(specialCard);
    const specialCardH2 = document.createElement("h2");
    specialCardH2.classList.add("gradient-text");
    specialCardH2.innerHTML = "The Cajun Sando!";
    specialCard.appendChild(specialCardH2);
    const specialDescription = document.createElement("p");
    specialDescription.innerHTML =
      "A specially crafted blend of spices to mix up our menu every month! Check back soon to see what we've got!";
    specialCard.appendChild(specialDescription);
    const specialImage = document.createElement("img");
    specialImage.src = _monthlySpecial_jpg__WEBPACK_IMPORTED_MODULE_2__;
    specialCard.appendChild(specialImage);
  }

  function makeAboutUsCard() {
    const aboutUs = document.createElement("div");
    aboutUs.classList.add("about-us");
    siteBody.appendChild(aboutUs);
    const aboutUsH1 = document.createElement("h1");
    aboutUsH1.innerHTML = "WHAT WE ARE";
    aboutUs.appendChild(aboutUsH1);
    const aboutUsDescription = document.createElement("p");
    aboutUsDescription.innerHTML = `Nashville-style fried chicken is characterized by it's oil dip, and
    spiced dust that it gets as soon as it comes out the fryer. This gives
    it its charcteristic red colour, and helps to coat your mouth with our
    delicious spice blends! Since our inception in 2012, Doug Stephen has
    been singmindedly focused on the perfection of this storied chicken,
    with the goal of sharing his mouth-watering creations to all of
    Vancouver!`;
    aboutUs.appendChild(aboutUsDescription);
  }

  function makeScrollableImages() {
    const scrollableImageBar = document.createElement("div");
    scrollableImageBar.classList.add("img-container", "inline-snaps");
    siteBody.appendChild(scrollableImageBar);
    addImages(scrollImages);
  }

  function makeHomePage() {
    clearBody();
    makeSpecialCard();
    makeAboutUsCard();
    makeScrollableImages();
    addGifs();
  }

  const menuButton = document.querySelector("#menu-button");
  menuButton.addEventListener("click", () => {
    if (menuButton.innerHTML == "CHECK OUT OUR MENU") {
      //refactor this into seperate function
      menuButton.innerHTML = "TAKE ME BACK!";
      clearBody();
      makeMenuBody();
    } else {
      menuButton.innerHTML = "CHECK OUT OUR MENU";
      makeHomePage();
    }
  });

  const logoButton = document.querySelector("#secret-menu");
  logoButton.addEventListener("click", () => {
    menuButton.innerHTML = "TAKE ME BACK!";
    clearBody();
    const secret = document.createElement("p");
    secret.innerHTML = `You found our secret menu! 
    Unfortunately theres nothing here yet`;
    siteBody.appendChild(secret);
  });

  function addGifs() {
    const gifs = document.getElementsByClassName("flame-images");
    for (let index = 0; index < gifs.length; index++) {
      gifs[index].src = _flames_gif__WEBPACK_IMPORTED_MODULE_3__;
    }
  }
  return { makeHomePage };
})();

domManipulator.makeHomePage();
domManipulator.backgroundMaker();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkdBQWtDO0FBQzlFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlIO0FBQ3pILHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEs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azovLzJuZGRsZGVzaWduLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL3NyYy9zY3JvbGwtaW1hZ2VzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vdGhlX2xvZ28ud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2V2aWNoZStPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogQ2V2aWNoZSBPbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MGUzMjAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiNDgwMDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDAuMTVlbSByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xyXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbi1jb2xvciAzMDBtcztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXdlaWdodDogOTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogNXN2aDtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZGQ0YjQ4MDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogI2UyMzEyMTtcclxuICBiYWNrZ3JvdW5kOiAjZGQ0YjQ4MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjQ4MDA7XHJcbn1cclxuXHJcbi5ncmFkaWVudC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzMTIxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YzZWM3OCwgIzNhOWJkOCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGhlaWdodDogNTAwMHB4O1xyXG4gIHdpZHRoOiA1MDc2cHg7XHJcbiAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgei1pbmRleDogLTExMTE7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZSA2MHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE2OTJweCwgLTgwMHB4LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5zaXRlLWJvZHkge1xyXG4gIG1hcmdpbi10b3A6IDJzdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogOTglO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICBtYXJnaW4tdG9wOiAyc3ZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDJzdmg7XHJcbiAgZm9udC1zaXplOiA1c3Z3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAzc3Z3O1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuLmhlYWRlciBpbWcge1xyXG4gIHdpZHRoOiAxNXN2dztcclxufVxyXG5cclxuLmhlYWRlciA+IGgxID4gYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZjliNTcyO1xyXG59XHJcblxyXG4ubWVudS1pbWFnZSB7XHJcbiAgcGFkZGluZzogMXN2aDtcclxufVxyXG4ubW9udGhseS1zcGVjaWFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyc3ZoO1xyXG4gIGNvbG9yOiAjMDAwMTAyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5tb250aGx5LXNwZWNpYWwgaDEge1xyXG4gIGZvbnQtc2l6ZTogNXN2aDtcclxuICBtYXJnaW4tYm90dG9tOiAzc3ZoO1xyXG59XHJcblxyXG4uc3BlY2lhbC1jYXJkIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNkZDRhNDg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBtYXgtd2lkdGg6IDc2c3Z3O1xyXG4gIGdhcDogMnZoO1xyXG59XHJcblxyXG4uc3BlY2lhbC1jYXJkIGgyIHtcclxuICBmb250LXNpemU6IDRzdmg7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWNhcmQgaW1nIHtcclxuICBpbmxpbmUtc2l6ZTogMTAwJTtcclxuICBhc3BlY3QtcmF0aW86IDQvMztcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjMmM0MzkwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyc3Z3O1xyXG4gIG1hcmdpbi1yaWdodDogMnN2dztcclxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDFzdmgpO1xyXG4gIGdhcDogM3N2dztcclxufVxyXG5cclxuLmxpbmtzID4gYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxO1xyXG59XHJcblxyXG4uYWJvdXQtdXMge1xyXG4gIG1hcmdpbjogM3N2aDtcclxuICBjb2xvcjogI2Y5YjU3MjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG59XHJcblxyXG4uYWJvdXQtdXMgaDEge1xyXG4gIGZvbnQtc2l6ZTogNXN2aDtcclxufVxyXG5cclxuLmFib3V0LXVzIHAge1xyXG4gIHdpZHRoOiA5NXN2dztcclxufVxyXG5cclxuLmltZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICBncmlkLWF1dG8tY29sdW1uczogMzAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZTogY29udGFpbjtcclxufVxyXG5cclxuLmlubGluZS1zbmFwcyB7XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogaW5saW5lIG1hbmRhdG9yeTtcclxuICBzY3JvbGwtcGFkZGluZy1pbmxpbmU6IDQlO1xyXG59XHJcblxyXG4uaW5saW5lLXNuYXBzID4gKiB7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG4uc2Nyb2xsLWltYWdlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDQlO1xyXG4gIG1hcmdpbjogNCU7XHJcbiAgYmFja2dyb3VuZDogI2RkNGE0ODtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc2Nyb2xsLWltYWdlcyBpbWcge1xyXG4gIGlubGluZS1zaXplOiAxMDAlO1xyXG4gIGFzcGVjdC1yYXRpbzogNC8zO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRhNDg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyc3ZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDNzdmg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFzdnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxc3Z3O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgcGFkZGluZzogMXN2aDtcclxufVxyXG4uYWNjb3JkaW9uIHtcclxuICBmb250LXNpemU6IDRzdmg7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUsXHJcbi5hY2NvcmRpb246aG92ZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTEzNTM0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgcGFkZGluZzogMCAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRhNDg7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBjb2xvcjogI2NkZmFkNTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ucGFuZWwgcCB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5mb290ZXIgKiB7XHJcbiAgY29sb3I6ICMyYzQzOTA7XHJcbn1cclxuXHJcbi5mb290ZXIgcCxcclxucSAuZm9vdGVyIGEge1xyXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC4xc3ZoKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5pbWctY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiA3NyU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTVzdnc7XHJcbiAgfVxyXG5cclxuICAubW9udGhseS1zcGVjaWFsIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTBzdnc7XHJcbiAgfVxyXG5cclxuICAubW9udGhseS1zcGVjaWFsIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogOHN2dztcclxuICB9XHJcblxyXG4gIC5zcGVjaWFsLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA5OCU7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdXMgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMHN2dztcclxuICB9XHJcblxyXG4gIC5hY2NvcmRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxMHN2dztcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrREFBa0Q7RUFDbEQsMEJBQTBCO0VBQzFCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBEQUEw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QkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNldmljaGUrT25lJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBDZXZpY2hlIE9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzBlMzIwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGI0ODAwO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMC4xNWVtIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbi1jb2xvciAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBmb250LXNpemU6IDVzdmg7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjQ4MDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGNvbG9yOiAjZTIzMTIxO1xcclxcbiAgYmFja2dyb3VuZDogI2RkNGI0ODAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjQ4MDA7XFxyXFxufVxcclxcblxcclxcbi5ncmFkaWVudC10ZXh0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjMxMjE7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmM2VjNzgsICMzYTliZDgpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi90aGVfbG9nby53ZWJwKTtcXHJcXG4gIGhlaWdodDogNTAwMHB4O1xcclxcbiAgd2lkdGg6IDUwNzZweDtcXHJcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgei1pbmRleDogLTExMTE7XFxyXFxuICBhbmltYXRpb246IHNsaWRlIDYwcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE2OTJweCwgLTgwMHB4LCAwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtYm9keSB7XFxyXFxuICBtYXJnaW4tdG9wOiAyc3ZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDk4JTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBoMSB7XFxyXFxuICBtYXJnaW4tdG9wOiAyc3ZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnN2aDtcXHJcXG4gIGZvbnQtc2l6ZTogNXN2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDNzdnc7XFxyXFxuICBhbGlnbi1pdGVtczogZW5kO1xcclxcbn1cXHJcXG4uaGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogMTVzdnc7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgPiBoMSA+IGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZjliNTcyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pbWFnZSB7XFxyXFxuICBwYWRkaW5nOiAxc3ZoO1xcclxcbn1cXHJcXG4ubW9udGhseS1zcGVjaWFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDJzdmg7XFxyXFxuICBjb2xvcjogIzAwMDEwMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb250aGx5LXNwZWNpYWwgaDEge1xcclxcbiAgZm9udC1zaXplOiA1c3ZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3N2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwZWNpYWwtY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2RkNGE0ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBtYXgtd2lkdGg6IDc2c3Z3O1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5zcGVjaWFsLWNhcmQgaDIge1xcclxcbiAgZm9udC1zaXplOiA0c3ZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BlY2lhbC1jYXJkIGltZyB7XFxyXFxuICBpbmxpbmUtc2l6ZTogMTAwJTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogNC8zO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbG9yOiAjMmM0MzkwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJzdnc7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJzdnc7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDFzdmgpO1xcclxcbiAgZ2FwOiAzc3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3MgPiBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2UyMzEyMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXVzIHtcXHJcXG4gIG1hcmdpbjogM3N2aDtcXHJcXG4gIGNvbG9yOiAjZjliNTcyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXVzIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXN2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXVzIHAge1xcclxcbiAgd2lkdGg6IDk1c3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZS1zbmFwcyB7XFxyXFxuICBzY3JvbGwtc25hcC10eXBlOiBpbmxpbmUgbWFuZGF0b3J5O1xcclxcbiAgc2Nyb2xsLXBhZGRpbmctaW5saW5lOiA0JTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZS1zbmFwcyA+ICoge1xcclxcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Nyb2xsLWltYWdlcyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG4gIG1hcmdpbjogNCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZGQ0YTQ4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcm9sbC1pbWFnZXMgaW1nIHtcXHJcXG4gIGlubGluZS1zaXplOiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGE0ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyc3ZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3N2aDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxc3Z3O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxc3Z3O1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIHBhZGRpbmc6IDFzdmg7XFxyXFxufVxcclxcbi5hY2NvcmRpb24ge1xcclxcbiAgZm9udC1zaXplOiA0c3ZoO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSxcXHJcXG4uYWNjb3JkaW9uOmhvdmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTM1MzQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFuZWwge1xcclxcbiAgcGFkZGluZzogMCAxOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGE0ODtcXHJcXG4gIG1heC1oZWlnaHQ6IDA7XFxyXFxuICBjb2xvcjogI2NkZmFkNTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMiBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhbmVsIHAge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgKiB7XFxyXFxuICBjb2xvcjogIzJjNDM5MDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBwLFxcclxcbnEgLmZvb3RlciBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC4xc3ZoKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgLmltZy1jb250YWluZXIge1xcclxcbiAgICBncmlkLWF1dG8tY29sdW1uczogNzclO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVzdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9udGhseS1zcGVjaWFsIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHN2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb250aGx5LXNwZWNpYWwgaDIge1xcclxcbiAgICBmb250LXNpemU6IDhzdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3BlY2lhbC1jYXJkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5OCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtdXMgaDEge1xcclxcbiAgICBmb250LXNpemU6IDEwc3Z3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjY29yZGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBzdnc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XHJcbiAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG4gIGlmICghdXJsKSB7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XHJcblxyXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxyXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xyXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcclxuICB9XHJcbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xyXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcclxuICB9XHJcblxyXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cclxuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xyXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcclxuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xyXG4gIH1cclxuICByZXR1cm4gdXJsO1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIG9sZCBJRVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcclxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxyXG4gICAgfTtcclxuICB9XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZG91Zy11YmMuanBlZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvZG91Zy11YmMuanBlZ1wiLFxuXHRcIi4vaW1nLTEwLmpwZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTEwLmpwZ1wiLFxuXHRcIi4vaW1nLTIuanBnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctMi5qcGdcIixcblx0XCIuL2ltZy0zLmpwZWdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy0zLmpwZWdcIixcblx0XCIuL2ltZy00LnBuZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTQucG5nXCIsXG5cdFwiLi9pbWctNS5qcGVnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctNS5qcGVnXCIsXG5cdFwiLi9pbWctNi5qcGdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy02LmpwZ1wiLFxuXHRcIi4vaW1nLTcuanBnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctNy5qcGdcIixcblx0XCIuL2ltZy04LnBuZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTgucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3Njcm9sbC1pbWFnZXMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3dlYnApJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IG1lbnVJbWFnZSBmcm9tIFwiLi9ETE1lbnUuanBnXCI7XHJcbmltcG9ydCBtb250aGx5U3BlY2lhbEltYWdlIGZyb20gXCIuL21vbnRobHlTcGVjaWFsLmpwZ1wiO1xyXG5pbXBvcnQgZmxhbWVzR2lmIGZyb20gXCIuL2ZsYW1lcy5naWZcIjtcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi90aGVfbG9nby53ZWJwXCI7XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIHJldHVybiByLmtleXMoKS5tYXAocik7XHJcbn1cclxuY29uc3Qgc2Nyb2xsSW1hZ2VzID0gaW1wb3J0QWxsKFxyXG4gIHJlcXVpcmUuY29udGV4dChcIi4vc2Nyb2xsLWltYWdlcy9cIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHdlYnApJC8pXHJcbik7XHJcblxyXG5mdW5jdGlvbiBzbW9vdGhTY3JvbGwoZWxlbWVudCwgc2Nyb2xsQW1vdW50KSB7XHJcbiAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICBjb25zdCBzdGVwID0gKHRpbWVzdGFtcCkgPT4ge1xyXG4gICAgaWYgKCFzdGFydCkgc3RhcnQgPSB0aW1lc3RhbXA7XHJcbiAgICBjb25zdCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xyXG4gICAgY29uc3QgZnJhY3Rpb24gPSBwcm9ncmVzcyAvIDEwMDAwOyAvLyBBZGp1c3QgYXMgbmVlZGVkXHJcblxyXG4gICAgaWYgKGZyYWN0aW9uIDwgMSkge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbEJ5KHtcclxuICAgICAgICBsZWZ0OiBzY3JvbGxBbW91bnQgKiBmcmFjdGlvbixcclxuICAgICAgICBiZWhhdmlvcjogXCJhdXRvXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbEJ5KHtcclxuICAgICAgICBsZWZ0OiBzY3JvbGxBbW91bnQsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwiYXV0b1wiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxufVxyXG5cclxuY29uc3QgZG9tTWFuaXB1bGF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCIuL3RoZV9sb2dvLndlYnBcIjtcclxuICBjb25zdCBzaXRlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2l0ZS1ib2R5XCIpO1xyXG5cclxuICBmdW5jdGlvbiBjbGVhckJvZHkoKSB7XHJcbiAgICBzaXRlQm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkSW1hZ2VzKGltYWdlcykge1xyXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltZy1jb250YWluZXJcIik7XHJcbiAgICAvL2NyZWF0ZSB0aGUgLnNjcm9sbC1pbWFnZXMgZGl2cyBhbmQgYWRkIHRvIC5pbWctY29udGFpbmVyIGRpdlxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGltYWdlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbWFnZURpdi5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsLWltYWdlc1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltZy5zcmMgPSBpbWFnZXNbaW5kZXhdO1xyXG4gICAgICBpbWFnZURpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZURpdik7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNtb290aFNjcm9sbChpbWFnZUNvbnRhaW5lciwgZXZ0LmRlbHRhWSA8IDAgPyAtMzAgOiAzMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY2NvcmRpb25cIik7XHJcblxyXG4gIGxldCBpO1xyXG5cclxuICBmb3IgKGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhY2NbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyxcclxuICAgIHRvIGhpZ2hsaWdodCB0aGUgYnV0dG9uIHRoYXQgY29udHJvbHMgdGhlIHBhbmVsICovXHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgYWN0aXZlIHBhbmVsICovXHJcbiAgICAgIGNvbnN0IHBhbmVsID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWtlTWVudUJvZHkoKSB7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIG1lbnUuc3JjID0gbWVudUltYWdlO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWFnZVwiKTtcclxuICAgIHNpdGVCb2R5LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZVNwZWNpYWxDYXJkKCkge1xyXG4gICAgY29uc3QgbW9udGhseVNwZWNpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbW9udGhseVNwZWNpYWwuY2xhc3NMaXN0LmFkZChcIm1vbnRobHktc3BlY2lhbFwiKTtcclxuICAgIHNpdGVCb2R5LmFwcGVuZENoaWxkKG1vbnRobHlTcGVjaWFsKTtcclxuICAgIGNvbnN0IHNwZWNpYWxIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHNwZWNpYWxIMS5pbm5lckhUTUwgPSBcIldIQVQnUyBHT0lORyBPTiBUSElTIE1PTlRIP1wiO1xyXG4gICAgbW9udGhseVNwZWNpYWwuYXBwZW5kQ2hpbGQoc3BlY2lhbEgxKTtcclxuICAgIGNvbnN0IHNwZWNpYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNwZWNpYWxDYXJkLmNsYXNzTGlzdC5hZGQoXCJzcGVjaWFsLWNhcmRcIik7XHJcbiAgICBtb250aGx5U3BlY2lhbC5hcHBlbmRDaGlsZChzcGVjaWFsQ2FyZCk7XHJcbiAgICBjb25zdCBzcGVjaWFsQ2FyZEgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgc3BlY2lhbENhcmRIMi5jbGFzc0xpc3QuYWRkKFwiZ3JhZGllbnQtdGV4dFwiKTtcclxuICAgIHNwZWNpYWxDYXJkSDIuaW5uZXJIVE1MID0gXCJUaGUgQ2FqdW4gU2FuZG8hXCI7XHJcbiAgICBzcGVjaWFsQ2FyZC5hcHBlbmRDaGlsZChzcGVjaWFsQ2FyZEgyKTtcclxuICAgIGNvbnN0IHNwZWNpYWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgc3BlY2lhbERlc2NyaXB0aW9uLmlubmVySFRNTCA9XHJcbiAgICAgIFwiQSBzcGVjaWFsbHkgY3JhZnRlZCBibGVuZCBvZiBzcGljZXMgdG8gbWl4IHVwIG91ciBtZW51IGV2ZXJ5IG1vbnRoISBDaGVjayBiYWNrIHNvb24gdG8gc2VlIHdoYXQgd2UndmUgZ290IVwiO1xyXG4gICAgc3BlY2lhbENhcmQuYXBwZW5kQ2hpbGQoc3BlY2lhbERlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IHNwZWNpYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBzcGVjaWFsSW1hZ2Uuc3JjID0gbW9udGhseVNwZWNpYWxJbWFnZTtcclxuICAgIHNwZWNpYWxDYXJkLmFwcGVuZENoaWxkKHNwZWNpYWxJbWFnZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWtlQWJvdXRVc0NhcmQoKSB7XHJcbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZChcImFib3V0LXVzXCIpO1xyXG4gICAgc2l0ZUJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRVcyk7XHJcbiAgICBjb25zdCBhYm91dFVzSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBhYm91dFVzSDEuaW5uZXJIVE1MID0gXCJXSEFUIFdFIEFSRVwiO1xyXG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChhYm91dFVzSDEpO1xyXG4gICAgY29uc3QgYWJvdXRVc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBhYm91dFVzRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYE5hc2h2aWxsZS1zdHlsZSBmcmllZCBjaGlja2VuIGlzIGNoYXJhY3Rlcml6ZWQgYnkgaXQncyBvaWwgZGlwLCBhbmRcclxuICAgIHNwaWNlZCBkdXN0IHRoYXQgaXQgZ2V0cyBhcyBzb29uIGFzIGl0IGNvbWVzIG91dCB0aGUgZnJ5ZXIuIFRoaXMgZ2l2ZXNcclxuICAgIGl0IGl0cyBjaGFyY3RlcmlzdGljIHJlZCBjb2xvdXIsIGFuZCBoZWxwcyB0byBjb2F0IHlvdXIgbW91dGggd2l0aCBvdXJcclxuICAgIGRlbGljaW91cyBzcGljZSBibGVuZHMhIFNpbmNlIG91ciBpbmNlcHRpb24gaW4gMjAxMiwgRG91ZyBTdGVwaGVuIGhhc1xyXG4gICAgYmVlbiBzaW5nbWluZGVkbHkgZm9jdXNlZCBvbiB0aGUgcGVyZmVjdGlvbiBvZiB0aGlzIHN0b3JpZWQgY2hpY2tlbixcclxuICAgIHdpdGggdGhlIGdvYWwgb2Ygc2hhcmluZyBoaXMgbW91dGgtd2F0ZXJpbmcgY3JlYXRpb25zIHRvIGFsbCBvZlxyXG4gICAgVmFuY291dmVyIWA7XHJcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKGFib3V0VXNEZXNjcmlwdGlvbik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWtlU2Nyb2xsYWJsZUltYWdlcygpIHtcclxuICAgIGNvbnN0IHNjcm9sbGFibGVJbWFnZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzY3JvbGxhYmxlSW1hZ2VCYXIuY2xhc3NMaXN0LmFkZChcImltZy1jb250YWluZXJcIiwgXCJpbmxpbmUtc25hcHNcIik7XHJcbiAgICBzaXRlQm9keS5hcHBlbmRDaGlsZChzY3JvbGxhYmxlSW1hZ2VCYXIpO1xyXG4gICAgYWRkSW1hZ2VzKHNjcm9sbEltYWdlcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWtlSG9tZVBhZ2UoKSB7XHJcbiAgICBjbGVhckJvZHkoKTtcclxuICAgIG1ha2VTcGVjaWFsQ2FyZCgpO1xyXG4gICAgbWFrZUFib3V0VXNDYXJkKCk7XHJcbiAgICBtYWtlU2Nyb2xsYWJsZUltYWdlcygpO1xyXG4gICAgYWRkR2lmcygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIik7XHJcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKG1lbnVCdXR0b24uaW5uZXJIVE1MID09IFwiQ0hFQ0sgT1VUIE9VUiBNRU5VXCIpIHtcclxuICAgICAgLy9yZWZhY3RvciB0aGlzIGludG8gc2VwZXJhdGUgZnVuY3Rpb25cclxuICAgICAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSBcIlRBS0UgTUUgQkFDSyFcIjtcclxuICAgICAgY2xlYXJCb2R5KCk7XHJcbiAgICAgIG1ha2VNZW51Qm9keSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSBcIkNIRUNLIE9VVCBPVVIgTUVOVVwiO1xyXG4gICAgICBtYWtlSG9tZVBhZ2UoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9nb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjcmV0LW1lbnVcIik7XHJcbiAgbG9nb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSBcIlRBS0UgTUUgQkFDSyFcIjtcclxuICAgIGNsZWFyQm9keSgpO1xyXG4gICAgY29uc3Qgc2VjcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBzZWNyZXQuaW5uZXJIVE1MID0gYFlvdSBmb3VuZCBvdXIgc2VjcmV0IG1lbnUhIFxyXG4gICAgVW5mb3J0dW5hdGVseSB0aGVyZXMgbm90aGluZyBoZXJlIHlldGA7XHJcbiAgICBzaXRlQm9keS5hcHBlbmRDaGlsZChzZWNyZXQpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBhZGRHaWZzKCkge1xyXG4gICAgY29uc3QgZ2lmcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGFtZS1pbWFnZXNcIik7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ2lmcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgZ2lmc1tpbmRleF0uc3JjID0gZmxhbWVzR2lmO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4geyBtYWtlSG9tZVBhZ2UgfTtcclxufSkoKTtcclxuXHJcbmRvbU1hbmlwdWxhdG9yLm1ha2VIb21lUGFnZSgpO1xyXG5kb21NYW5pcHVsYXRvci5iYWNrZ3JvdW5kTWFrZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9