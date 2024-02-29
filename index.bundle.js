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

body{
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

.menubody {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2svh;
}

.site-body {
    display: flex;
    flex-direction: column;
    height: auto;
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
}

.header>h1>a:hover {
    text-decoration-color: #F9B572;
}


.monthly-special {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2svh;
    padding: 1%;
    color: #F9B572;
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
    background: #CDFAD5;
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
    color: #F9B572;
    justify-content: space-around;
    align-items: center;
    margin-left: 2svw;
    margin-right: 2svw;
    font-size: calc(16px + 1svw);
    gap: 3svw;
}

.links>a:hover {
    text-decoration-color: #e23121;
}
/* .links a {
    border:  2px solid white;
}  for debugging issues with the clickable links*/

.about-us {
    margin: 3svh;
    color: #F9B572;
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

.inline-snaps>* {
    scroll-snap-align: start;
}

.scroll-images {
    position: relative;
    padding: 4%;
    margin: 4%;
    background: #CDFAD5;
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
    background-color: #DD4A48;
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

.active, .accordion:hover {
    background-color: #6456c8c2;
}

.panel {
    padding: 0 18px;
    background-color: #DD4A48;
    max-height: 0;
    color: #CDFAD5;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: max-height 0.2 ease-out;
}

.footer * {
    background-color: #DD4A48;
    color: #CDFAD5;
}

.footer p, .footer a {
    font-size: calc(24px + 0.1svw);
}

.secret {
    color: #e23121;
    margin-top: 2svh;
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

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@300&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    font-family: Ceviche One;\r\n    background-color: #170e32;\r\n    text-decoration: none;\r\n    margin: 0;\r\n}\r\n\r\nbody{\r\n    height: 100%;\r\n}\r\n\r\na {\r\n    background-color: #dd4b4800;\r\n    color: inherit;\r\n    padding-bottom: 2px;\r\n    text-decoration: underline 0.15em rgba(0, 0, 0, 0);\r\n    text-underline-offset: 5px;\r\n    transition: text-decoration-color 300ms;\r\n}\r\n\r\na:hover {\r\n    text-decoration-color: inherit;\r\n}\r\n\r\np {\r\n    font-family: Poppins sans-serif;\r\n    background-color: #dd4b4800;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n    border-radius: 15px;\r\n    background: #dd4b4800;\r\n}\r\n\r\nh1 {\r\n    color: #e23121;\r\n    background: #dd4b4800;\r\n}\r\n\r\nh2 {\r\n    background-color: #dd4b4800;\r\n}\r\n\r\n.gradient-text {\r\n    background-color: #e23121;\r\n    background-image: linear-gradient(45deg, #f3ec78, #af4261);\r\n    background-size: 100%;\r\n    background-repeat: repeat;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-clip: text;\r\n}\r\n\r\n.menubody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 2svh;\r\n}\r\n\r\n.site-body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: auto;\r\n    align-items: center;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 98%;\r\n    height: auto;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.header h1 {\r\n    margin-top: 2svh;\r\n    margin-bottom: 2svh;\r\n    font-size: 5svw;\r\n}\r\n\r\n.header>h1>a:hover {\r\n    text-decoration-color: #F9B572;\r\n}\r\n\r\n\r\n.monthly-special {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 2svh;\r\n    padding: 1%;\r\n    color: #F9B572;\r\n    border-radius: 15px;\r\n}\r\n\r\n.monthly-special h1 {\r\n    font-size: 4svw;\r\n    margin-bottom: 3svh;\r\n}\r\n\r\n\r\n.special-card {\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background: #CDFAD5;\r\n    border-radius: 25px;\r\n    max-width: 76svw;\r\n}\r\n\r\n.special-card h2 {\r\n    font-size: 3svw;\r\n    margin-bottom: 2svh;\r\n}\r\n\r\n.special-card p {\r\n    margin-bottom: 5svh;\r\n    font-size: 20px;\r\n}\r\n\r\n.special-card img {\r\n    inline-size: 100%;\r\n    aspect-ratio: 4/3;\r\n}\r\n\r\n.links {\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    color: #F9B572;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    margin-left: 2svw;\r\n    margin-right: 2svw;\r\n    font-size: calc(16px + 1svw);\r\n    gap: 3svw;\r\n}\r\n\r\n.links>a:hover {\r\n    text-decoration-color: #e23121;\r\n}\r\n/* .links a {\r\n    border:  2px solid white;\r\n}  for debugging issues with the clickable links*/\r\n\r\n.about-us {\r\n    margin: 3svh;\r\n    color: #F9B572;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.about-us h1 {\r\n    font-size: 4svw;\r\n}\r\n\r\n.about-us p {\r\n    width: 95svw;\r\n    font-size: calc(15px + 0.390625svw);\r\n}\r\n\r\n.img-container {\r\n    width: 100%;\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-auto-columns: 30%;\r\n    grid-template-rows: auto;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    overscroll-behavior-inline: contain;\r\n}\r\n\r\n\r\n.inline-snaps {\r\n    scroll-snap-type: inline mandatory;\r\n    scroll-padding-inline: 4%;\r\n}\r\n\r\n.inline-snaps>* {\r\n    scroll-snap-align: start;\r\n}\r\n\r\n.scroll-images {\r\n    position: relative;\r\n    padding: 4%;\r\n    margin: 4%;\r\n    background: #CDFAD5;\r\n    border-radius: 15px;\r\n}\r\n\r\n.scroll-image-title {\r\n    position: absolute;\r\n    font-family: Ceviche One;\r\n    font-size: 60px;\r\n    top: 45%;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #e23121;\r\n}\r\n\r\n.scroll-images img {\r\n    inline-size: 100%;\r\n    aspect-ratio: 4/3;\r\n    object-fit: cover;\r\n}\r\n\r\nimg.special-img {\r\n    width: fit-content;\r\n    height: fit-content;\r\n}\r\n\r\n.footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: #DD4A48;\r\n    border-radius: 20px;\r\n    margin-top: 2svh;\r\n    margin-bottom: 3svh;\r\n    margin-left: 1svw;\r\n    margin-right: 1svw;\r\n    width: 95%;\r\n    padding: 1svh;\r\n}\r\n.accordion {\r\n    font-size: 4svw;\r\n    padding: 0;\r\n    border: none;\r\n}\r\n\r\n.active, .accordion:hover {\r\n    background-color: #6456c8c2;\r\n}\r\n\r\n.panel {\r\n    padding: 0 18px;\r\n    background-color: #DD4A48;\r\n    max-height: 0;\r\n    color: #CDFAD5;\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    transition: max-height 0.2 ease-out;\r\n}\r\n\r\n.footer * {\r\n    background-color: #DD4A48;\r\n    color: #CDFAD5;\r\n}\r\n\r\n.footer p, .footer a {\r\n    font-size: calc(24px + 0.1svw);\r\n}\r\n\r\n.secret {\r\n    color: #e23121;\r\n    margin-top: 2svh;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n    .img-container {\r\n        grid-auto-columns: 77%;\r\n    }\r\n\r\n    .header h1 {\r\n        font-size: 15svw;\r\n    }\r\n\r\n    .monthly-special h1 {\r\n        font-size: 10svw;\r\n    }\r\n\r\n    .monthly-special h2 {\r\n        font-size: 8svw;\r\n    }\r\n\r\n    .special-card {\r\n        max-width: 98%;\r\n    }\r\n\r\n    .about-us h1 {\r\n        font-size: 10svw;\r\n    }\r\n\r\n    .accordion {\r\n        font-size: 10svw;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
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


function importAll(r) {
  return r.keys().map(r);
}
const scrollImages = importAll(
  __webpack_require__("./src/scroll-images sync \\.(png%7Cjpe?g%7Cwebp)$")
);

const imageContainer = document.querySelector(".img-container");

function addImages(images) {
  //create the .scroll-images divs and add to .img-container div
  for (let index = 0; index < images.length; index++) {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("scroll-images");

    const img = document.createElement("img");
    img.src = images[index];
    imageDiv.appendChild(img);
    imageContainer.appendChild(imageDiv);
  }
}

addImages(scrollImages);

imageContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  smoothScroll(imageContainer, evt.deltaY < 0 ? -30 : 30);
});

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlIO0FBQ3pILDJJQUEySTtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sUUFBUSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZ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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdFQUFpRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL3NyYy9zY3JvbGwtaW1hZ2VzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DZXZpY2hlK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbnRvbiZmYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiBDZXZpY2hlIE9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzBlMzI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGI0ODAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMC4xNWVtIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcclxuICAgIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbi1jb2xvciAzMDBtcztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiNDgwMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiNDgwMDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6ICNlMjMxMjE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjQ4MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiNDgwMDtcclxufVxyXG5cclxuLmdyYWRpZW50LXRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyMzEyMTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YzZWM3OCwgI2FmNDI2MSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbn1cclxuXHJcbi5tZW51Ym9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyc3ZoO1xyXG59XHJcblxyXG4uc2l0ZS1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMnN2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJzdmg7XHJcbiAgICBmb250LXNpemU6IDVzdnc7XHJcbn1cclxuXHJcbi5oZWFkZXI+aDE+YTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNGOUI1NzI7XHJcbn1cclxuXHJcblxyXG4ubW9udGhseS1zcGVjaWFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMnN2aDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgY29sb3I6ICNGOUI1NzI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ubW9udGhseS1zcGVjaWFsIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHN2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDNzdmg7XHJcbn1cclxuXHJcblxyXG4uc3BlY2lhbC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQ0RGQUQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1heC13aWR0aDogNzZzdnc7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWNhcmQgaDIge1xyXG4gICAgZm9udC1zaXplOiAzc3Z3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnN2aDtcclxufVxyXG5cclxuLnNwZWNpYWwtY2FyZCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVzdmg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWNhcmQgaW1nIHtcclxuICAgIGlubGluZS1zaXplOiAxMDAlO1xyXG4gICAgYXNwZWN0LXJhdGlvOiA0LzM7XHJcbn1cclxuXHJcbi5saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgY29sb3I6ICNGOUI1NzI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMnN2dztcclxuICAgIG1hcmdpbi1yaWdodDogMnN2dztcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMXN2dyk7XHJcbiAgICBnYXA6IDNzdnc7XHJcbn1cclxuXHJcbi5saW5rcz5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2UyMzEyMTtcclxufVxyXG4vKiAubGlua3MgYSB7XHJcbiAgICBib3JkZXI6ICAycHggc29saWQgd2hpdGU7XHJcbn0gIGZvciBkZWJ1Z2dpbmcgaXNzdWVzIHdpdGggdGhlIGNsaWNrYWJsZSBsaW5rcyovXHJcblxyXG4uYWJvdXQtdXMge1xyXG4gICAgbWFyZ2luOiAzc3ZoO1xyXG4gICAgY29sb3I6ICNGOUI1NzI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dC11cyBoMSB7XHJcbiAgICBmb250LXNpemU6IDRzdnc7XHJcbn1cclxuXHJcbi5hYm91dC11cyBwIHtcclxuICAgIHdpZHRoOiA5NXN2dztcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMC4zOTA2MjVzdncpO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZTogY29udGFpbjtcclxufVxyXG5cclxuXHJcbi5pbmxpbmUtc25hcHMge1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogaW5saW5lIG1hbmRhdG9yeTtcclxuICAgIHNjcm9sbC1wYWRkaW5nLWlubGluZTogNCU7XHJcbn1cclxuXHJcbi5pbmxpbmUtc25hcHM+KiB7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwtaW1hZ2VzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICAgIGJhY2tncm91bmQ6ICNDREZBRDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc2Nyb2xsLWltYWdlLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBDZXZpY2hlIE9uZTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2UyMzEyMTtcclxufVxyXG5cclxuLnNjcm9sbC1pbWFnZXMgaW1nIHtcclxuICAgIGlubGluZS1zaXplOiAxMDAlO1xyXG4gICAgYXNwZWN0LXJhdGlvOiA0LzM7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuaW1nLnNwZWNpYWwtaW1nIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RENEE0ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyc3ZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3N2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxc3Z3O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxc3Z3O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHBhZGRpbmc6IDFzdmg7XHJcbn1cclxuLmFjY29yZGlvbiB7XHJcbiAgICBmb250LXNpemU6IDRzdnc7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlLCAuYWNjb3JkaW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDU2YzhjMjtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDAgMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERDRBNDg7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgY29sb3I6ICNDREZBRDU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjIgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5mb290ZXIgKiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QTQ4O1xyXG4gICAgY29sb3I6ICNDREZBRDU7XHJcbn1cclxuXHJcbi5mb290ZXIgcCwgLmZvb3RlciBhIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC4xc3Z3KTtcclxufVxyXG5cclxuLnNlY3JldCB7XHJcbiAgICBjb2xvcjogI2UyMzEyMTtcclxuICAgIG1hcmdpbi10b3A6IDJzdmg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiA3NyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXN2dztcclxuICAgIH1cclxuXHJcbiAgICAubW9udGhseS1zcGVjaWFsIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDEwc3Z3O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb250aGx5LXNwZWNpYWwgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHN2dztcclxuICAgIH1cclxuXHJcbiAgICAuc3BlY2lhbC1jYXJkIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk4JTtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtdXMgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBzdnc7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjY29yZGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHN2dztcclxuICAgIH1cclxuXHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtEQUFrRDtJQUNsRCwwQkFBMEI7SUFDMUIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMERBQTBEO0lBQzFELHFCQUFxQjtJQUNyQix5QkFBeUI7SUFD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Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNldmljaGUrT25lJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFudG9uJmZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogQ2V2aWNoZSBPbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzBlMzI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjQ4MDA7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAwLjE1ZW0gcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbi1jb2xvciAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiNDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2RkNGI0ODAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiAjZTIzMTIxO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjQ4MDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGI0ODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JhZGllbnQtdGV4dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjMxMjE7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YzZWM3OCwgI2FmNDI2MSk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyc3ZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2l0ZS1ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDk4JTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBoMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJzdmg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJzdmg7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXN2dztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcj5oMT5hOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjRjlCNTcyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9udGhseS1zcGVjaWFsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJzdmg7XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgICBjb2xvcjogI0Y5QjU3MjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbnRobHktc3BlY2lhbCBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHN2dztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3N2aDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNwZWNpYWwtY2FyZCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNDREZBRDU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIG1heC13aWR0aDogNzZzdnc7XFxyXFxufVxcclxcblxcclxcbi5zcGVjaWFsLWNhcmQgaDIge1xcclxcbiAgICBmb250LXNpemU6IDNzdnc7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJzdmg7XFxyXFxufVxcclxcblxcclxcbi5zcGVjaWFsLWNhcmQgcCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVzdmg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwZWNpYWwtY2FyZCBpbWcge1xcclxcbiAgICBpbmxpbmUtc2l6ZTogMTAwJTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiA0LzM7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gICAgY29sb3I6ICNGOUI1NzI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMnN2dztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyc3Z3O1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTZweCArIDFzdncpO1xcclxcbiAgICBnYXA6IDNzdnc7XFxyXFxufVxcclxcblxcclxcbi5saW5rcz5hOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxO1xcclxcbn1cXHJcXG4vKiAubGlua3MgYSB7XFxyXFxuICAgIGJvcmRlcjogIDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59ICBmb3IgZGVidWdnaW5nIGlzc3VlcyB3aXRoIHRoZSBjbGlja2FibGUgbGlua3MqL1xcclxcblxcclxcbi5hYm91dC11cyB7XFxyXFxuICAgIG1hcmdpbjogM3N2aDtcXHJcXG4gICAgY29sb3I6ICNGOUI1NzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC11cyBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHN2dztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXVzIHAge1xcclxcbiAgICB3aWR0aDogOTVzdnc7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMC4zOTA2MjVzdncpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgICBncmlkLWF1dG8tY29sdW1uczogMzAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcnNjcm9sbC1iZWhhdmlvci1pbmxpbmU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi5pbmxpbmUtc25hcHMge1xcclxcbiAgICBzY3JvbGwtc25hcC10eXBlOiBpbmxpbmUgbWFuZGF0b3J5O1xcclxcbiAgICBzY3JvbGwtcGFkZGluZy1pbmxpbmU6IDQlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5saW5lLXNuYXBzPioge1xcclxcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zY3JvbGwtaW1hZ2VzIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiA0JTtcXHJcXG4gICAgbWFyZ2luOiA0JTtcXHJcXG4gICAgYmFja2dyb3VuZDogI0NERkFENTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcm9sbC1pbWFnZS10aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IENldmljaGUgT25lO1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIHRvcDogNDUlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2UyMzEyMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcm9sbC1pbWFnZXMgaW1nIHtcXHJcXG4gICAgaW5saW5lLXNpemU6IDEwMCU7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogNC8zO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLnNwZWNpYWwtaW1nIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RENEE0ODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnN2aDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3N2aDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDFzdnc7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXN2dztcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgcGFkZGluZzogMXN2aDtcXHJcXG59XFxyXFxuLmFjY29yZGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHN2dztcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLCAuYWNjb3JkaW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NTZjOGMyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFuZWwge1xcclxcbiAgICBwYWRkaW5nOiAwIDE4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERDRBNDg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDA7XFxyXFxuICAgIGNvbG9yOiAjQ0RGQUQ1O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMiBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAqIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RENEE0ODtcXHJcXG4gICAgY29sb3I6ICNDREZBRDU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgcCwgLmZvb3RlciBhIHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjFzdncpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjcmV0IHtcXHJcXG4gICAgY29sb3I6ICNlMjMxMjE7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJzdmg7XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmltZy1jb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDc3JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVzdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vbnRobHktc3BlY2lhbCBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwc3Z3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb250aGx5LXNwZWNpYWwgaDIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4c3Z3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zcGVjaWFsLWNhcmQge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5OCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LXVzIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBzdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFjY29yZGlvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwc3Z3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIG9sZCBJRVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcclxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxyXG4gICAgfTtcclxuICB9XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZG91Zy11YmMuanBlZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvZG91Zy11YmMuanBlZ1wiLFxuXHRcIi4vaW1nLTEwLmpwZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTEwLmpwZ1wiLFxuXHRcIi4vaW1nLTIuanBnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctMi5qcGdcIixcblx0XCIuL2ltZy0zLmpwZWdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy0zLmpwZWdcIixcblx0XCIuL2ltZy00LnBuZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTQucG5nXCIsXG5cdFwiLi9pbWctNS5qcGVnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctNS5qcGVnXCIsXG5cdFwiLi9pbWctNi5qcGdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy02LmpwZ1wiLFxuXHRcIi4vaW1nLTcuanBnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctNy5qcGdcIixcblx0XCIuL2ltZy04LnBuZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTgucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3Njcm9sbC1pbWFnZXMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3dlYnApJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICByZXR1cm4gci5rZXlzKCkubWFwKHIpO1xyXG59XHJcbmNvbnN0IHNjcm9sbEltYWdlcyA9IGltcG9ydEFsbChcclxuICByZXF1aXJlLmNvbnRleHQoXCIuL3Njcm9sbC1pbWFnZXMvXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3x3ZWJwKSQvKVxyXG4pO1xyXG5cclxuY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltZy1jb250YWluZXJcIik7XHJcblxyXG5mdW5jdGlvbiBhZGRJbWFnZXMoaW1hZ2VzKSB7XHJcbiAgLy9jcmVhdGUgdGhlIC5zY3JvbGwtaW1hZ2VzIGRpdnMgYW5kIGFkZCB0byAuaW1nLWNvbnRhaW5lciBkaXZcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW1hZ2VzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW1hZ2VEaXYuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1pbWFnZXNcIik7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmMgPSBpbWFnZXNbaW5kZXhdO1xyXG4gICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlRGl2KTtcclxuICB9XHJcbn1cclxuXHJcbmFkZEltYWdlcyhzY3JvbGxJbWFnZXMpO1xyXG5cclxuaW1hZ2VDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldnQpID0+IHtcclxuICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICBzbW9vdGhTY3JvbGwoaW1hZ2VDb250YWluZXIsIGV2dC5kZWx0YVkgPCAwID8gLTMwIDogMzApO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNtb290aFNjcm9sbChlbGVtZW50LCBzY3JvbGxBbW91bnQpIHtcclxuICBsZXQgc3RhcnQgPSBudWxsO1xyXG4gIGNvbnN0IHN0ZXAgPSAodGltZXN0YW1wKSA9PiB7XHJcbiAgICBpZiAoIXN0YXJ0KSBzdGFydCA9IHRpbWVzdGFtcDtcclxuICAgIGNvbnN0IHByb2dyZXNzID0gdGltZXN0YW1wIC0gc3RhcnQ7XHJcbiAgICBjb25zdCBmcmFjdGlvbiA9IHByb2dyZXNzIC8gMTAwMDA7IC8vIEFkanVzdCBhcyBuZWVkZWRcclxuXHJcbiAgICBpZiAoZnJhY3Rpb24gPCAxKSB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsQnkoe1xyXG4gICAgICAgIGxlZnQ6IHNjcm9sbEFtb3VudCAqIGZyYWN0aW9uLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcImF1dG9cIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsQnkoe1xyXG4gICAgICAgIGxlZnQ6IHNjcm9sbEFtb3VudCxcclxuICAgICAgICBiZWhhdmlvcjogXCJhdXRvXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==