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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  font-family: Ceviche One;
  background-color: #170e32;
  text-decoration: none;
  margin: 0;
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
  font-family: Poppins sans-serif;
  background-color: #dd4b4800;
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
  background-image: linear-gradient(45deg, #f3ec78, #af4261);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.site-body {
  margin-top: 2svh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.site-body > p {
  font-family: Ceviche One;
  color: #e23121;
  font-size: 5svh;
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
  justify-content: center;
  align-items: center;
  margin-top: 2svh;
  padding: 1%;
  color: #f9b572;
  border-radius: 15px;
}

.monthly-special h1 {
  font-size: 4svw;
  margin-bottom: 3svh;
}

.special-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #cdfad5;
  border-radius: 25px;
  max-width: 76svw;
}

.special-card h2 {
  font-size: 3svw;
  margin-bottom: 2svh;
}

.special-card p {
  margin-bottom: 5svh;
  font-size: 20px;
}

.special-card img {
  inline-size: 100%;
  aspect-ratio: 4/3;
}

.links {
  display: flex;
  flex-flow: row nowrap;
  color: #f9b572;
  justify-content: space-around;
  align-items: center;
  margin-left: 2svw;
  margin-right: 2svw;
  font-size: calc(16px + 1svw);
  gap: 3svw;
}

.links > a:hover {
  text-decoration-color: #e23121;
}
/* .links a {
    border:  2px solid white;
}  for debugging issues with the clickable links*/

.about-us {
  margin: 3svh;
  color: #f9b572;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-us h1 {
  font-size: 4svw;
}

.about-us p {
  width: 95svw;
  font-size: calc(15px + 0.390625svw);
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
  background: #cdfad5;
  border-radius: 15px;
}

.scroll-image-title {
  position: absolute;
  font-family: Ceviche One;
  font-size: 60px;
  top: 45%;
  width: 100%;
  text-align: center;
  color: #e23121;
}

.scroll-images img {
  inline-size: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

img.special-img {
  width: fit-content;
  height: fit-content;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 4svw;
  padding: 0;
  border: none;
}

.active,
.accordion:hover {
  padding: 5px;
  background-color: #913534;
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

.footer * {
  background-color: #dd4a48;
  color: #cdfad5;
}

.footer p,
.footer a {
  font-size: calc(24px + 0.1svw);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@300&display=swap\");\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: Ceviche One;\r\n  background-color: #170e32;\r\n  text-decoration: none;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\na {\r\n  background-color: #dd4b4800;\r\n  color: inherit;\r\n  padding-bottom: 2px;\r\n  text-decoration: underline 0.15em rgba(0, 0, 0, 0);\r\n  text-underline-offset: 5px;\r\n  transition: text-decoration-color 300ms;\r\n}\r\n\r\na:hover {\r\n  text-decoration-color: inherit;\r\n}\r\n\r\np {\r\n  font-family: Poppins sans-serif;\r\n  background-color: #dd4b4800;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  max-width: 100%;\r\n  border-radius: 15px;\r\n  background: #dd4b4800;\r\n}\r\n\r\nh1 {\r\n  color: #e23121;\r\n  background: #dd4b4800;\r\n}\r\n\r\nh2 {\r\n  background-color: #dd4b4800;\r\n}\r\n\r\n.gradient-text {\r\n  background-color: #e23121;\r\n  background-image: linear-gradient(45deg, #f3ec78, #af4261);\r\n  background-size: 100%;\r\n  background-repeat: repeat;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n}\r\n\r\n.site-body {\r\n  margin-top: 2svh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.site-body > p {\r\n  font-family: Ceviche One;\r\n  color: #e23121;\r\n  font-size: 5svh;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 98%;\r\n  height: auto;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.header h1 {\r\n  margin-top: 2svh;\r\n  margin-bottom: 2svh;\r\n  font-size: 5svw;\r\n}\r\n\r\n.header > h1 > a:hover {\r\n  text-decoration-color: #f9b572;\r\n}\r\n\r\n.menu-image {\r\n  padding: 1svh;\r\n}\r\n.monthly-special {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 2svh;\r\n  padding: 1%;\r\n  color: #f9b572;\r\n  border-radius: 15px;\r\n}\r\n\r\n.monthly-special h1 {\r\n  font-size: 4svw;\r\n  margin-bottom: 3svh;\r\n}\r\n\r\n.special-card {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: #cdfad5;\r\n  border-radius: 25px;\r\n  max-width: 76svw;\r\n}\r\n\r\n.special-card h2 {\r\n  font-size: 3svw;\r\n  margin-bottom: 2svh;\r\n}\r\n\r\n.special-card p {\r\n  margin-bottom: 5svh;\r\n  font-size: 20px;\r\n}\r\n\r\n.special-card img {\r\n  inline-size: 100%;\r\n  aspect-ratio: 4/3;\r\n}\r\n\r\n.links {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n  color: #f9b572;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-left: 2svw;\r\n  margin-right: 2svw;\r\n  font-size: calc(16px + 1svw);\r\n  gap: 3svw;\r\n}\r\n\r\n.links > a:hover {\r\n  text-decoration-color: #e23121;\r\n}\r\n/* .links a {\r\n    border:  2px solid white;\r\n}  for debugging issues with the clickable links*/\r\n\r\n.about-us {\r\n  margin: 3svh;\r\n  color: #f9b572;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.about-us h1 {\r\n  font-size: 4svw;\r\n}\r\n\r\n.about-us p {\r\n  width: 95svw;\r\n  font-size: calc(15px + 0.390625svw);\r\n}\r\n\r\n.img-container {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  grid-auto-columns: 30%;\r\n  grid-template-rows: auto;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  overscroll-behavior-inline: contain;\r\n}\r\n\r\n.inline-snaps {\r\n  scroll-snap-type: inline mandatory;\r\n  scroll-padding-inline: 4%;\r\n}\r\n\r\n.inline-snaps > * {\r\n  scroll-snap-align: start;\r\n}\r\n\r\n.scroll-images {\r\n  position: relative;\r\n  padding: 4%;\r\n  margin: 4%;\r\n  background: #cdfad5;\r\n  border-radius: 15px;\r\n}\r\n\r\n.scroll-image-title {\r\n  position: absolute;\r\n  font-family: Ceviche One;\r\n  font-size: 60px;\r\n  top: 45%;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #e23121;\r\n}\r\n\r\n.scroll-images img {\r\n  inline-size: 100%;\r\n  aspect-ratio: 4/3;\r\n  object-fit: cover;\r\n}\r\n\r\nimg.special-img {\r\n  width: fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #dd4a48;\r\n  border-radius: 20px;\r\n  margin-top: 2svh;\r\n  margin-bottom: 3svh;\r\n  margin-left: 1svw;\r\n  margin-right: 1svw;\r\n  width: 95%;\r\n  padding: 1svh;\r\n}\r\n.accordion {\r\n  font-size: 4svw;\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n.active,\r\n.accordion:hover {\r\n  padding: 5px;\r\n  background-color: #913534;\r\n}\r\n\r\n.panel {\r\n  padding: 0 18px;\r\n  background-color: #dd4a48;\r\n  max-height: 0;\r\n  color: #cdfad5;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  transition: max-height 0.2 ease-out;\r\n}\r\n\r\n.footer * {\r\n  background-color: #dd4a48;\r\n  color: #cdfad5;\r\n}\r\n\r\n.footer p,\r\n.footer a {\r\n  font-size: calc(24px + 0.1svw);\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .img-container {\r\n    grid-auto-columns: 77%;\r\n  }\r\n\r\n  .header h1 {\r\n    font-size: 15svw;\r\n  }\r\n\r\n  .monthly-special h1 {\r\n    font-size: 10svw;\r\n  }\r\n\r\n  .monthly-special h2 {\r\n    font-size: 8svw;\r\n  }\r\n\r\n  .special-card {\r\n    max-width: 98%;\r\n  }\r\n\r\n  .about-us h1 {\r\n    font-size: 10svw;\r\n  }\r\n\r\n  .accordion {\r\n    font-size: 10svw;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
      "A specially crafted blend of spices bring the aroma and flavour of New Orleans to Vancouver!";
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
  return { makeHomePage };
})();

domManipulator.makeHomePage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlIO0FBQ3pILDJJQUEySTtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZ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O0FBQ0E7QUFDQSxlQUFlLHdDQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzJuZGRsZGVzaWduLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vc3JjL3Njcm9sbC1pbWFnZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNldmljaGUrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogQ2V2aWNoZSBPbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MGUzMjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiNDgwMDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDAuMTVlbSByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xyXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbi1jb2xvciAzMDBtcztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogUG9wcGlucyBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiNDgwMDtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZGQ0YjQ4MDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogI2UyMzEyMTtcclxuICBiYWNrZ3JvdW5kOiAjZGQ0YjQ4MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjQ4MDA7XHJcbn1cclxuXHJcbi5ncmFkaWVudC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzMTIxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YzZWM3OCwgI2FmNDI2MSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxufVxyXG5cclxuLnNpdGUtYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogMnN2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpdGUtYm9keSA+IHAge1xyXG4gIGZvbnQtZmFtaWx5OiBDZXZpY2hlIE9uZTtcclxuICBjb2xvcjogI2UyMzEyMTtcclxuICBmb250LXNpemU6IDVzdmg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogOTglO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICBtYXJnaW4tdG9wOiAyc3ZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDJzdmg7XHJcbiAgZm9udC1zaXplOiA1c3Z3O1xyXG59XHJcblxyXG4uaGVhZGVyID4gaDEgPiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNmOWI1NzI7XHJcbn1cclxuXHJcbi5tZW51LWltYWdlIHtcclxuICBwYWRkaW5nOiAxc3ZoO1xyXG59XHJcbi5tb250aGx5LXNwZWNpYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDJzdmg7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgY29sb3I6ICNmOWI1NzI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLm1vbnRobHktc3BlY2lhbCBoMSB7XHJcbiAgZm9udC1zaXplOiA0c3Z3O1xyXG4gIG1hcmdpbi1ib3R0b206IDNzdmg7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWNhcmQge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2NkZmFkNTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIG1heC13aWR0aDogNzZzdnc7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWNhcmQgaDIge1xyXG4gIGZvbnQtc2l6ZTogM3N2dztcclxuICBtYXJnaW4tYm90dG9tOiAyc3ZoO1xyXG59XHJcblxyXG4uc3BlY2lhbC1jYXJkIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDVzdmg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc3BlY2lhbC1jYXJkIGltZyB7XHJcbiAgaW5saW5lLXNpemU6IDEwMCU7XHJcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XHJcbn1cclxuXHJcbi5saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgY29sb3I6ICNmOWI1NzI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMnN2dztcclxuICBtYXJnaW4tcmlnaHQ6IDJzdnc7XHJcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAxc3Z3KTtcclxuICBnYXA6IDNzdnc7XHJcbn1cclxuXHJcbi5saW5rcyA+IGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2UyMzEyMTtcclxufVxyXG4vKiAubGlua3MgYSB7XHJcbiAgICBib3JkZXI6ICAycHggc29saWQgd2hpdGU7XHJcbn0gIGZvciBkZWJ1Z2dpbmcgaXNzdWVzIHdpdGggdGhlIGNsaWNrYWJsZSBsaW5rcyovXHJcblxyXG4uYWJvdXQtdXMge1xyXG4gIG1hcmdpbjogM3N2aDtcclxuICBjb2xvcjogI2Y5YjU3MjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFib3V0LXVzIGgxIHtcclxuICBmb250LXNpemU6IDRzdnc7XHJcbn1cclxuXHJcbi5hYm91dC11cyBwIHtcclxuICB3aWR0aDogOTVzdnc7XHJcbiAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAwLjM5MDYyNXN2dyk7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwJTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci1pbmxpbmU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5pbmxpbmUtc25hcHMge1xyXG4gIHNjcm9sbC1zbmFwLXR5cGU6IGlubGluZSBtYW5kYXRvcnk7XHJcbiAgc2Nyb2xsLXBhZGRpbmctaW5saW5lOiA0JTtcclxufVxyXG5cclxuLmlubGluZS1zbmFwcyA+ICoge1xyXG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLnNjcm9sbC1pbWFnZXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiA0JTtcclxuICBtYXJnaW46IDQlO1xyXG4gIGJhY2tncm91bmQ6ICNjZGZhZDU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLnNjcm9sbC1pbWFnZS10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBDZXZpY2hlIE9uZTtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgdG9wOiA0NSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZTIzMTIxO1xyXG59XHJcblxyXG4uc2Nyb2xsLWltYWdlcyBpbWcge1xyXG4gIGlubGluZS1zaXplOiAxMDAlO1xyXG4gIGFzcGVjdC1yYXRpbzogNC8zO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5pbWcuc3BlY2lhbC1pbWcge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YTQ4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMnN2aDtcclxuICBtYXJnaW4tYm90dG9tOiAzc3ZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAxc3Z3O1xyXG4gIG1hcmdpbi1yaWdodDogMXN2dztcclxuICB3aWR0aDogOTUlO1xyXG4gIHBhZGRpbmc6IDFzdmg7XHJcbn1cclxuLmFjY29yZGlvbiB7XHJcbiAgZm9udC1zaXplOiA0c3Z3O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlLFxyXG4uYWNjb3JkaW9uOmhvdmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxMzUzNDtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGE0ODtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjY2RmYWQ1O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjIgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5mb290ZXIgKiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGE0ODtcclxuICBjb2xvcjogI2NkZmFkNTtcclxufVxyXG5cclxuLmZvb3RlciBwLFxyXG4uZm9vdGVyIGEge1xyXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC4xc3Z3KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5pbWctY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiA3NyU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTVzdnc7XHJcbiAgfVxyXG5cclxuICAubW9udGhseS1zcGVjaWFsIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTBzdnc7XHJcbiAgfVxyXG5cclxuICAubW9udGhseS1zcGVjaWFsIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogOHN2dztcclxuICB9XHJcblxyXG4gIC5zcGVjaWFsLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA5OCU7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdXMgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMHN2dztcclxuICB9XHJcblxyXG4gIC5hY2NvcmRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxMHN2dztcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtEQUFrRDtFQUNsRCwwQkFBMEI7RUFDMUIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMERBQTBEO0VBQzFELHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTs7aURBRWlEOztBQUVqRDtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFFBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2V2aWNoZStPbmUmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW50b24mZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IENldmljaGUgT25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MGUzMjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGI0ODAwO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMC4xNWVtIHJnYmEoMCwgMCwgMCwgMCk7XFxyXFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbi1jb2xvciAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiNDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNkZDRiNDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgY29sb3I6ICNlMjMxMjE7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjQ4MDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiNDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYWRpZW50LXRleHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyMzEyMTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YzZWM3OCwgI2FmNDI2MSk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbi5zaXRlLWJvZHkge1xcclxcbiAgbWFyZ2luLXRvcDogMnN2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtYm9keSA+IHAge1xcclxcbiAgZm9udC1mYW1pbHk6IENldmljaGUgT25lO1xcclxcbiAgY29sb3I6ICNlMjMxMjE7XFxyXFxuICBmb250LXNpemU6IDVzdmg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogOTglO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGgxIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJzdmg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyc3ZoO1xcclxcbiAgZm9udC1zaXplOiA1c3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyID4gaDEgPiBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2Y5YjU3MjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaW1hZ2Uge1xcclxcbiAgcGFkZGluZzogMXN2aDtcXHJcXG59XFxyXFxuLm1vbnRobHktc3BlY2lhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDJzdmg7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG4gIGNvbG9yOiAjZjliNTcyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRobHktc3BlY2lhbCBoMSB7XFxyXFxuICBmb250LXNpemU6IDRzdnc7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzc3ZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BlY2lhbC1jYXJkIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2RmYWQ1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIG1heC13aWR0aDogNzZzdnc7XFxyXFxufVxcclxcblxcclxcbi5zcGVjaWFsLWNhcmQgaDIge1xcclxcbiAgZm9udC1zaXplOiAzc3Z3O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnN2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwZWNpYWwtY2FyZCBwIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVzdmg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zcGVjaWFsLWNhcmQgaW1nIHtcXHJcXG4gIGlubGluZS1zaXplOiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcclxcbiAgY29sb3I6ICNmOWI1NzI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMnN2dztcXHJcXG4gIG1hcmdpbi1yaWdodDogMnN2dztcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMXN2dyk7XFxyXFxuICBnYXA6IDNzdnc7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyA+IGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxO1xcclxcbn1cXHJcXG4vKiAubGlua3MgYSB7XFxyXFxuICAgIGJvcmRlcjogIDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59ICBmb3IgZGVidWdnaW5nIGlzc3VlcyB3aXRoIHRoZSBjbGlja2FibGUgbGlua3MqL1xcclxcblxcclxcbi5hYm91dC11cyB7XFxyXFxuICBtYXJnaW46IDNzdmg7XFxyXFxuICBjb2xvcjogI2Y5YjU3MjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXVzIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNHN2dztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXVzIHAge1xcclxcbiAgd2lkdGg6IDk1c3Z3O1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAwLjM5MDYyNXN2dyk7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICBncmlkLWF1dG8tY29sdW1uczogMzAlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3ItaW5saW5lOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5saW5lLXNuYXBzIHtcXHJcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IGlubGluZSBtYW5kYXRvcnk7XFxyXFxuICBzY3JvbGwtcGFkZGluZy1pbmxpbmU6IDQlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5saW5lLXNuYXBzID4gKiB7XFxyXFxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zY3JvbGwtaW1hZ2VzIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmc6IDQlO1xcclxcbiAgbWFyZ2luOiA0JTtcXHJcXG4gIGJhY2tncm91bmQ6ICNjZGZhZDU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Nyb2xsLWltYWdlLXRpdGxlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBDZXZpY2hlIE9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gIHRvcDogNDUlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2UyMzEyMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcm9sbC1pbWFnZXMgaW1nIHtcXHJcXG4gIGlubGluZS1zaXplOiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLnNwZWNpYWwtaW1nIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGE0ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyc3ZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3N2aDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxc3Z3O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxc3Z3O1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIHBhZGRpbmc6IDFzdmg7XFxyXFxufVxcclxcbi5hY2NvcmRpb24ge1xcclxcbiAgZm9udC1zaXplOiA0c3Z3O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSxcXHJcXG4uYWNjb3JkaW9uOmhvdmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTM1MzQ7XFxyXFxufVxcclxcblxcclxcbi5wYW5lbCB7XFxyXFxuICBwYWRkaW5nOiAwIDE4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YTQ4O1xcclxcbiAgbWF4LWhlaWdodDogMDtcXHJcXG4gIGNvbG9yOiAjY2RmYWQ1O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyICoge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGE0ODtcXHJcXG4gIGNvbG9yOiAjY2RmYWQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHAsXFxyXFxuLmZvb3RlciBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC4xc3Z3KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgLmltZy1jb250YWluZXIge1xcclxcbiAgICBncmlkLWF1dG8tY29sdW1uczogNzclO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVzdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9udGhseS1zcGVjaWFsIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHN2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb250aGx5LXNwZWNpYWwgaDIge1xcclxcbiAgICBmb250LXNpemU6IDhzdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3BlY2lhbC1jYXJkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5OCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtdXMgaDEge1xcclxcbiAgICBmb250LXNpemU6IDEwc3Z3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjY29yZGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBzdnc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIG9sZCBJRVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcclxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxyXG4gICAgfTtcclxuICB9XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZG91Zy11YmMuanBlZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvZG91Zy11YmMuanBlZ1wiLFxuXHRcIi4vaW1nLTEwLmpwZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTEwLmpwZ1wiLFxuXHRcIi4vaW1nLTIuanBnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctMi5qcGdcIixcblx0XCIuL2ltZy0zLmpwZWdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy0zLmpwZWdcIixcblx0XCIuL2ltZy00LnBuZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTQucG5nXCIsXG5cdFwiLi9pbWctNS5qcGVnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctNS5qcGVnXCIsXG5cdFwiLi9pbWctNi5qcGdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy02LmpwZ1wiLFxuXHRcIi4vaW1nLTcuanBnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctNy5qcGdcIixcblx0XCIuL2ltZy04LnBuZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTgucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3Njcm9sbC1pbWFnZXMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3dlYnApJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgbWVudUltYWdlIGZyb20gXCIuL0RMTWVudS5qcGdcIjtcclxuaW1wb3J0IG1vbnRobHlTcGVjaWFsSW1hZ2UgZnJvbSBcIi4vbW9udGhseVNwZWNpYWwuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIHJldHVybiByLmtleXMoKS5tYXAocik7XHJcbn1cclxuY29uc3Qgc2Nyb2xsSW1hZ2VzID0gaW1wb3J0QWxsKFxyXG4gIHJlcXVpcmUuY29udGV4dChcIi4vc2Nyb2xsLWltYWdlcy9cIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHdlYnApJC8pXHJcbik7XHJcblxyXG5mdW5jdGlvbiBzbW9vdGhTY3JvbGwoZWxlbWVudCwgc2Nyb2xsQW1vdW50KSB7XHJcbiAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuICBjb25zdCBzdGVwID0gKHRpbWVzdGFtcCkgPT4ge1xyXG4gICAgaWYgKCFzdGFydCkgc3RhcnQgPSB0aW1lc3RhbXA7XHJcbiAgICBjb25zdCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xyXG4gICAgY29uc3QgZnJhY3Rpb24gPSBwcm9ncmVzcyAvIDEwMDAwOyAvLyBBZGp1c3QgYXMgbmVlZGVkXHJcblxyXG4gICAgaWYgKGZyYWN0aW9uIDwgMSkge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbEJ5KHtcclxuICAgICAgICBsZWZ0OiBzY3JvbGxBbW91bnQgKiBmcmFjdGlvbixcclxuICAgICAgICBiZWhhdmlvcjogXCJhdXRvXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbEJ5KHtcclxuICAgICAgICBsZWZ0OiBzY3JvbGxBbW91bnQsXHJcbiAgICAgICAgYmVoYXZpb3I6IFwiYXV0b1wiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxufVxyXG5cclxuY29uc3QgZG9tTWFuaXB1bGF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNpdGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaXRlLWJvZHlcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyQm9keSgpIHtcclxuICAgIHNpdGVCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRJbWFnZXMoaW1hZ2VzKSB7XHJcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1nLWNvbnRhaW5lclwiKTtcclxuICAgIC8vY3JlYXRlIHRoZSAuc2Nyb2xsLWltYWdlcyBkaXZzIGFuZCBhZGQgdG8gLmltZy1jb250YWluZXIgZGl2XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW1hZ2VzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBpbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGltYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJzY3JvbGwtaW1hZ2VzXCIpO1xyXG5cclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaW1nLnNyYyA9IGltYWdlc1tpbmRleF07XHJcbiAgICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc21vb3RoU2Nyb2xsKGltYWdlQ29udGFpbmVyLCBldnQuZGVsdGFZIDwgMCA/IC0zMCA6IDMwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjY29yZGlvblwiKTtcclxuXHJcbiAgbGV0IGk7XHJcblxyXG4gIGZvciAoaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcclxuICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzLFxyXG4gICAgdG8gaGlnaGxpZ2h0IHRoZSBidXR0b24gdGhhdCBjb250cm9scyB0aGUgcGFuZWwgKi9cclxuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgLyogVG9nZ2xlIGJldHdlZW4gaGlkaW5nIGFuZCBzaG93aW5nIHRoZSBhY3RpdmUgcGFuZWwgKi9cclxuICAgICAgY29uc3QgcGFuZWwgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xyXG4gICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VNZW51Qm9keSgpIHtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbWVudS5zcmMgPSBtZW51SW1hZ2U7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWltYWdlXCIpO1xyXG4gICAgc2l0ZUJvZHkuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWtlU3BlY2lhbENhcmQoKSB7XHJcbiAgICBjb25zdCBtb250aGx5U3BlY2lhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtb250aGx5U3BlY2lhbC5jbGFzc0xpc3QuYWRkKFwibW9udGhseS1zcGVjaWFsXCIpO1xyXG4gICAgc2l0ZUJvZHkuYXBwZW5kQ2hpbGQobW9udGhseVNwZWNpYWwpO1xyXG4gICAgY29uc3Qgc3BlY2lhbEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgc3BlY2lhbEgxLmlubmVySFRNTCA9IFwiV0hBVCdTIEdPSU5HIE9OIFRISVMgTU9OVEg/XCI7XHJcbiAgICBtb250aGx5U3BlY2lhbC5hcHBlbmRDaGlsZChzcGVjaWFsSDEpO1xyXG4gICAgY29uc3Qgc3BlY2lhbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3BlY2lhbENhcmQuY2xhc3NMaXN0LmFkZChcInNwZWNpYWwtY2FyZFwiKTtcclxuICAgIG1vbnRobHlTcGVjaWFsLmFwcGVuZENoaWxkKHNwZWNpYWxDYXJkKTtcclxuICAgIGNvbnN0IHNwZWNpYWxDYXJkSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBzcGVjaWFsQ2FyZEgyLmNsYXNzTGlzdC5hZGQoXCJncmFkaWVudC10ZXh0XCIpO1xyXG4gICAgc3BlY2lhbENhcmRIMi5pbm5lckhUTUwgPSBcIlRoZSBDYWp1biBTYW5kbyFcIjtcclxuICAgIHNwZWNpYWxDYXJkLmFwcGVuZENoaWxkKHNwZWNpYWxDYXJkSDIpO1xyXG4gICAgY29uc3Qgc3BlY2lhbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBzcGVjaWFsRGVzY3JpcHRpb24uaW5uZXJIVE1MID1cclxuICAgICAgXCJBIHNwZWNpYWxseSBjcmFmdGVkIGJsZW5kIG9mIHNwaWNlcyBicmluZyB0aGUgYXJvbWEgYW5kIGZsYXZvdXIgb2YgTmV3IE9ybGVhbnMgdG8gVmFuY291dmVyIVwiO1xyXG4gICAgc3BlY2lhbENhcmQuYXBwZW5kQ2hpbGQoc3BlY2lhbERlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IHNwZWNpYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBzcGVjaWFsSW1hZ2Uuc3JjID0gbW9udGhseVNwZWNpYWxJbWFnZTtcclxuICAgIHNwZWNpYWxDYXJkLmFwcGVuZENoaWxkKHNwZWNpYWxJbWFnZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWtlQWJvdXRVc0NhcmQoKSB7XHJcbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZChcImFib3V0LXVzXCIpO1xyXG4gICAgc2l0ZUJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRVcyk7XHJcbiAgICBjb25zdCBhYm91dFVzSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBhYm91dFVzSDEuaW5uZXJIVE1MID0gXCJXSEFUIFdFIEFSRVwiO1xyXG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChhYm91dFVzSDEpO1xyXG4gICAgY29uc3QgYWJvdXRVc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBhYm91dFVzRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYE5hc2h2aWxsZS1zdHlsZSBmcmllZCBjaGlja2VuIGlzIGNoYXJhY3Rlcml6ZWQgYnkgaXQncyBvaWwgZGlwLCBhbmRcclxuICAgIHNwaWNlZCBkdXN0IHRoYXQgaXQgZ2V0cyBhcyBzb29uIGFzIGl0IGNvbWVzIG91dCB0aGUgZnJ5ZXIuIFRoaXMgZ2l2ZXNcclxuICAgIGl0IGl0cyBjaGFyY3RlcmlzdGljIHJlZCBjb2xvdXIsIGFuZCBoZWxwcyB0byBjb2F0IHlvdXIgbW91dGggd2l0aCBvdXJcclxuICAgIGRlbGljaW91cyBzcGljZSBibGVuZHMhIFNpbmNlIG91ciBpbmNlcHRpb24gaW4gMjAxMiwgRG91ZyBTdGVwaGVuIGhhc1xyXG4gICAgYmVlbiBzaW5nbWluZGVkbHkgZm9jdXNlZCBvbiB0aGUgcGVyZmVjdGlvbiBvZiB0aGlzIHN0b3JpZWQgY2hpY2tlbixcclxuICAgIHdpdGggdGhlIGdvYWwgb2Ygc2hhcmluZyBoaXMgbW91dGgtd2F0ZXJpbmcgY3JlYXRpb25zIHRvIGFsbCBvZlxyXG4gICAgVmFuY291dmVyIWA7XHJcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKGFib3V0VXNEZXNjcmlwdGlvbik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWtlU2Nyb2xsYWJsZUltYWdlcygpIHtcclxuICAgIGNvbnN0IHNjcm9sbGFibGVJbWFnZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzY3JvbGxhYmxlSW1hZ2VCYXIuY2xhc3NMaXN0LmFkZChcImltZy1jb250YWluZXJcIiwgXCJpbmxpbmUtc25hcHNcIik7XHJcbiAgICBzaXRlQm9keS5hcHBlbmRDaGlsZChzY3JvbGxhYmxlSW1hZ2VCYXIpO1xyXG4gICAgYWRkSW1hZ2VzKHNjcm9sbEltYWdlcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWtlSG9tZVBhZ2UoKSB7XHJcbiAgICBjbGVhckJvZHkoKTtcclxuICAgIG1ha2VTcGVjaWFsQ2FyZCgpO1xyXG4gICAgbWFrZUFib3V0VXNDYXJkKCk7XHJcbiAgICBtYWtlU2Nyb2xsYWJsZUltYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idXR0b25cIik7XHJcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKG1lbnVCdXR0b24uaW5uZXJIVE1MID09IFwiQ0hFQ0sgT1VUIE9VUiBNRU5VXCIpIHtcclxuICAgICAgLy9yZWZhY3RvciB0aGlzIGludG8gc2VwZXJhdGUgZnVuY3Rpb25cclxuICAgICAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSBcIlRBS0UgTUUgQkFDSyFcIjtcclxuICAgICAgY2xlYXJCb2R5KCk7XHJcbiAgICAgIG1ha2VNZW51Qm9keSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSBcIkNIRUNLIE9VVCBPVVIgTUVOVVwiO1xyXG4gICAgICBtYWtlSG9tZVBhZ2UoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9nb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjcmV0LW1lbnVcIik7XHJcbiAgbG9nb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSBcIlRBS0UgTUUgQkFDSyFcIjtcclxuICAgIGNsZWFyQm9keSgpO1xyXG4gICAgY29uc3Qgc2VjcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBzZWNyZXQuaW5uZXJIVE1MID0gYFlvdSBmb3VuZCBvdXIgc2VjcmV0IG1lbnUhIFxyXG4gICAgVW5mb3J0dW5hdGVseSB0aGVyZXMgbm90aGluZyBoZXJlIHlldGA7XHJcbiAgICBzaXRlQm9keS5hcHBlbmRDaGlsZChzZWNyZXQpO1xyXG4gIH0pO1xyXG4gIHJldHVybiB7IG1ha2VIb21lUGFnZSB9O1xyXG59KSgpO1xyXG5cclxuZG9tTWFuaXB1bGF0b3IubWFrZUhvbWVQYWdlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==