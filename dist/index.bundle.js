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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Madimi+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --header-colour: #e292219d;
  --body-card-colour: #b8b8b84d;
  --link-color: #2c4390;
}

* {
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
  background-image: linear-gradient(45deg, #ff0909, #3a9bd8);
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
  font-size: 5svw;
  margin-bottom: 3svh;
}

.special-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--body-card-colour);
  border-radius: 25px;
  max-width: 76svw;
  gap: 2vh;
}

.special-card h2 {
  font-size: 4svw;
}

.special-card img {
  inline-size: 100%;
  aspect-ratio: 4/3;
}

.links {
  display: flex;
  align-items: center;
  color: #2c4390;
  margin-left: 2svw;
  margin-right: 2svw;
  font-size: calc(16px + 1svw);
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
  background-color: var(--body-card-colour);
}

.about-us h1 {
  font-size: 5svw;
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
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 20px;
  margin-top: 2svh;
  margin-bottom: 3svh;
  margin-left: 1svw;
  margin-right: 1svw;
  width: 95%;
  padding: 1svh;
  background-color: var(--header-colour);
}

.footer > * > a {
  font-size: 3svw;
}

.grid-box {
  display: flex;
  flex-direction: column;
  max-width: 30svw;
}

.grid-box > .panel > a {
  font-size: 2svw;
  text-underline-offset: 6px;
  color: var(--link-color);
}

.accordion {
  font-size: 4svw;
  padding: 0;
  border: none;
  color: var(--link-color);
}

.active,
.accordion:hover {
  padding: 5px;
}

.panel {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: max-height 0.2 ease-out;
}

@media only screen and (max-width: 700px) {
  p {
    font-size: 4svw;
  }

  .img-container {
    grid-auto-columns: 77%;
  }

  .header h1 {
    font-size: 15svw;
  }

  .header img {
    width: 15svw;
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

  .footer > * > a {
    font-size: 5svw;
  }

  .accordion {
    font-size: 10svw;
  }

  .grid-box > .panel > a {
    font-size: 3svw;
    text-underline-offset: 5px;
    text-wrap: balance;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,2BAA2B;EAC3B,qBAAqB;EACrB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,mDAAmD;EACnD,0BAA0B;EAC1B,uCAAuC;AACzC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,qCAAqC;EACrC,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,0DAA0D;EAC1D,qBAAqB;EACrB,yBAAyB;EACzB,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,OAAO;EACP,QAAQ;EACR,UAAU;EACV,cAAc;EACd,yDAAsC;EACtC,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE;IACE,+BAA+B;EACjC;EACA;IACE,0CAA0C;EAC5C;AACF;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB;EACpB,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,gCAAgC;AAClC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mCAAmC;EACnC,mBAAmB;EACnB,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,4BAA4B;EAC5B,SAAS;AACX;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,wBAAwB;EACxB,gBAAgB;EAChB,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,UAAU;EACV,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,0BAA0B;IAC1B,kBAAkB;EACpB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Ceviche+One&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Madimi+One&display=swap\");\r\n\r\n:root {\r\n  --header-colour: #e292219d;\r\n  --body-card-colour: #b8b8b84d;\r\n  --link-color: #2c4390;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: Ceviche One;\r\n  background-color: #170e3200;\r\n  text-decoration: none;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  padding-bottom: 2px;\r\n  text-decoration: underline 0.15em var(--link-color);\r\n  text-underline-offset: 5px;\r\n  transition: text-decoration-color 300ms;\r\n}\r\n\r\na:hover {\r\n  text-decoration-color: #00000000;\r\n}\r\n\r\np {\r\n  font-family: \"Madimi One\", sans-serif;\r\n  color: #000000;\r\n  font-size: 2svw;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  max-width: 100%;\r\n  border-radius: 15px;\r\n  background: #dd4b4800;\r\n}\r\n\r\nh1 {\r\n  color: #e23121;\r\n  background: #dd4b4800;\r\n}\r\n\r\nh2 {\r\n  background-color: #dd4b4800;\r\n}\r\n\r\n.gradient-text {\r\n  background-color: #e23121;\r\n  background-image: linear-gradient(45deg, #ff0909, #3a9bd8);\r\n  background-size: 100%;\r\n  background-repeat: repeat;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\r\n}\r\n\r\n.background-image {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  display: block;\r\n  background-image: url(./the_logo.webp);\r\n  height: 5000px;\r\n  width: 5076px;\r\n  filter: blur(5px);\r\n  z-index: -1111;\r\n  animation: slide 60s linear infinite;\r\n}\r\n\r\n@keyframes slide {\r\n  0% {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  100% {\r\n    transform: translate3d(-1692px, -800px, 0);\r\n  }\r\n}\r\n\r\n.site-body {\r\n  margin-top: 2svh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 20px;\r\n  padding-bottom: 2svw;\r\n  background-color: var(--header-colour);\r\n}\r\n\r\n.header h1 {\r\n  display: flex;\r\n  align-items: end;\r\n  font-size: 5svw;\r\n  margin-bottom: 2svh;\r\n  gap: 10px;\r\n}\r\n.header > h1 > a {\r\n  text-decoration-color: #e2312100;\r\n}\r\n\r\n.header > h1 > a:hover {\r\n  text-decoration-color: #e23121;\r\n}\r\n\r\n.header img {\r\n  width: 10svw;\r\n}\r\n\r\n.menu-image {\r\n  padding: 1svh;\r\n}\r\n\r\n.monthly-special {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 2svh;\r\n  color: #000102;\r\n  border-radius: 15px;\r\n}\r\n\r\n.monthly-special h1 {\r\n  font-size: 5svw;\r\n  margin-bottom: 3svh;\r\n}\r\n\r\n.special-card {\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: var(--body-card-colour);\r\n  border-radius: 25px;\r\n  max-width: 76svw;\r\n  gap: 2vh;\r\n}\r\n\r\n.special-card h2 {\r\n  font-size: 4svw;\r\n}\r\n\r\n.special-card img {\r\n  inline-size: 100%;\r\n  aspect-ratio: 4/3;\r\n}\r\n\r\n.links {\r\n  display: flex;\r\n  align-items: center;\r\n  color: #2c4390;\r\n  margin-left: 2svw;\r\n  margin-right: 2svw;\r\n  font-size: calc(16px + 1svw);\r\n  gap: 3svw;\r\n}\r\n\r\n.links > a:hover {\r\n  text-decoration-color: #e23121;\r\n}\r\n\r\n.about-us {\r\n  margin: 3svh;\r\n  color: #f9b572;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 20px;\r\n  background-color: var(--body-card-colour);\r\n}\r\n\r\n.about-us h1 {\r\n  font-size: 5svw;\r\n}\r\n\r\n.about-us p {\r\n  width: 95svw;\r\n}\r\n\r\n.img-container {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  grid-auto-columns: 30%;\r\n  grid-template-rows: auto;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  overscroll-behavior-inline: contain;\r\n}\r\n\r\n.inline-snaps {\r\n  scroll-snap-type: inline mandatory;\r\n  scroll-padding-inline: 4%;\r\n}\r\n\r\n.inline-snaps > * {\r\n  scroll-snap-align: start;\r\n}\r\n\r\n.scroll-images {\r\n  position: relative;\r\n  padding: 4%;\r\n  margin: 4%;\r\n  background: #dd4a48;\r\n  border-radius: 15px;\r\n}\r\n\r\n.scroll-images img {\r\n  inline-size: 100%;\r\n  aspect-ratio: 4/3;\r\n  object-fit: cover;\r\n}\r\n\r\n.footer {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  border-radius: 20px;\r\n  margin-top: 2svh;\r\n  margin-bottom: 3svh;\r\n  margin-left: 1svw;\r\n  margin-right: 1svw;\r\n  width: 95%;\r\n  padding: 1svh;\r\n  background-color: var(--header-colour);\r\n}\r\n\r\n.footer > * > a {\r\n  font-size: 3svw;\r\n}\r\n\r\n.grid-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 30svw;\r\n}\r\n\r\n.grid-box > .panel > a {\r\n  font-size: 2svw;\r\n  text-underline-offset: 6px;\r\n  color: var(--link-color);\r\n}\r\n\r\n.accordion {\r\n  font-size: 4svw;\r\n  padding: 0;\r\n  border: none;\r\n  color: var(--link-color);\r\n}\r\n\r\n.active,\r\n.accordion:hover {\r\n  padding: 5px;\r\n}\r\n\r\n.panel {\r\n  padding: 0 18px;\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  transition: max-height 0.2 ease-out;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  p {\r\n    font-size: 4svw;\r\n  }\r\n\r\n  .img-container {\r\n    grid-auto-columns: 77%;\r\n  }\r\n\r\n  .header h1 {\r\n    font-size: 15svw;\r\n  }\r\n\r\n  .header img {\r\n    width: 15svw;\r\n  }\r\n\r\n  .monthly-special h1 {\r\n    font-size: 10svw;\r\n  }\r\n\r\n  .monthly-special h2 {\r\n    font-size: 8svw;\r\n  }\r\n\r\n  .special-card {\r\n    max-width: 98%;\r\n  }\r\n\r\n  .about-us h1 {\r\n    font-size: 10svw;\r\n  }\r\n\r\n  .footer > * > a {\r\n    font-size: 5svw;\r\n  }\r\n\r\n  .accordion {\r\n    font-size: 10svw;\r\n  }\r\n\r\n  .grid-box > .panel > a {\r\n    font-size: 3svw;\r\n    text-underline-offset: 5px;\r\n    text-wrap: balance;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
    if (menuButton.innerHTML == "MENU") {
      //refactor this into seperate function
      menuButton.innerHTML = "TAKE ME BACK!";
      clearBody();
      makeMenuBody();
    } else {
      menuButton.innerHTML = "MENU";
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkdBQWtDO0FBQzlFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlIO0FBQ3pILHdIQUF3SDtBQUN4SCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9B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REFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDLHdCQUF3Qix3Q0FBUztBQUNqQztBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzJuZGRsZGVzaWduLy4vc3JjL3Njcm9sbC1pbWFnZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMm5kZGxkZXNpZ24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLzJuZGRsZGVzaWduL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8ybmRkbGRlc2lnbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi90aGVfbG9nby53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DZXZpY2hlK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYWRpbWkrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLWhlYWRlci1jb2xvdXI6ICNlMjkyMjE5ZDtcclxuICAtLWJvZHktY2FyZC1jb2xvdXI6ICNiOGI4Yjg0ZDtcclxuICAtLWxpbmstY29sb3I6ICMyYzQzOTA7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IENldmljaGUgT25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzBlMzIwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDAuMTVlbSB2YXIoLS1saW5rLWNvbG9yKTtcclxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcclxuICB0cmFuc2l0aW9uOiB0ZXh0LWRlY29yYXRpb24tY29sb3IgMzAwbXM7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzAwMDAwMDAwO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogXCJNYWRpbWkgT25lXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAyc3Z3O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZDRiNDgwMDtcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiAjZTIzMTIxO1xyXG4gIGJhY2tncm91bmQ6ICNkZDRiNDgwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiNDgwMDtcclxufVxyXG5cclxuLmdyYWRpZW50LXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjMxMjE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmYwOTA5LCAjM2E5YmQ4KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgaGVpZ2h0OiA1MDAwcHg7XHJcbiAgd2lkdGg6IDUwNzZweDtcclxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICB6LWluZGV4OiAtMTExMTtcclxuICBhbmltYXRpb246IHNsaWRlIDYwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTY5MnB4LCAtODAwcHgsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLnNpdGUtYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogMnN2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnN2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3VyKTtcclxufVxyXG5cclxuLmhlYWRlciBoMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIGZvbnQtc2l6ZTogNXN2dztcclxuICBtYXJnaW4tYm90dG9tOiAyc3ZoO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG4uaGVhZGVyID4gaDEgPiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNlMjMxMjEwMDtcclxufVxyXG5cclxuLmhlYWRlciA+IGgxID4gYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxO1xyXG59XHJcblxyXG4uaGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwc3Z3O1xyXG59XHJcblxyXG4ubWVudS1pbWFnZSB7XHJcbiAgcGFkZGluZzogMXN2aDtcclxufVxyXG5cclxuLm1vbnRobHktc3BlY2lhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMnN2aDtcclxuICBjb2xvcjogIzAwMDEwMjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ubW9udGhseS1zcGVjaWFsIGgxIHtcclxuICBmb250LXNpemU6IDVzdnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3N2aDtcclxufVxyXG5cclxuLnNwZWNpYWwtY2FyZCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWNhcmQtY29sb3VyKTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIG1heC13aWR0aDogNzZzdnc7XHJcbiAgZ2FwOiAydmg7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWNhcmQgaDIge1xyXG4gIGZvbnQtc2l6ZTogNHN2dztcclxufVxyXG5cclxuLnNwZWNpYWwtY2FyZCBpbWcge1xyXG4gIGlubGluZS1zaXplOiAxMDAlO1xyXG4gIGFzcGVjdC1yYXRpbzogNC8zO1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogIzJjNDM5MDtcclxuICBtYXJnaW4tbGVmdDogMnN2dztcclxuICBtYXJnaW4tcmlnaHQ6IDJzdnc7XHJcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAxc3Z3KTtcclxuICBnYXA6IDNzdnc7XHJcbn1cclxuXHJcbi5saW5rcyA+IGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2UyMzEyMTtcclxufVxyXG5cclxuLmFib3V0LXVzIHtcclxuICBtYXJnaW46IDNzdmg7XHJcbiAgY29sb3I6ICNmOWI1NzI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1jYXJkLWNvbG91cik7XHJcbn1cclxuXHJcbi5hYm91dC11cyBoMSB7XHJcbiAgZm9udC1zaXplOiA1c3Z3O1xyXG59XHJcblxyXG4uYWJvdXQtdXMgcCB7XHJcbiAgd2lkdGg6IDk1c3Z3O1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3ItaW5saW5lOiBjb250YWluO1xyXG59XHJcblxyXG4uaW5saW5lLXNuYXBzIHtcclxuICBzY3JvbGwtc25hcC10eXBlOiBpbmxpbmUgbWFuZGF0b3J5O1xyXG4gIHNjcm9sbC1wYWRkaW5nLWlubGluZTogNCU7XHJcbn1cclxuXHJcbi5pbmxpbmUtc25hcHMgPiAqIHtcclxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwtaW1hZ2VzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNCU7XHJcbiAgbWFyZ2luOiA0JTtcclxuICBiYWNrZ3JvdW5kOiAjZGQ0YTQ4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5zY3JvbGwtaW1hZ2VzIGltZyB7XHJcbiAgaW5saW5lLXNpemU6IDEwMCU7XHJcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDJzdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3N2aDtcclxuICBtYXJnaW4tbGVmdDogMXN2dztcclxuICBtYXJnaW4tcmlnaHQ6IDFzdnc7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nOiAxc3ZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvdXIpO1xyXG59XHJcblxyXG4uZm9vdGVyID4gKiA+IGEge1xyXG4gIGZvbnQtc2l6ZTogM3N2dztcclxufVxyXG5cclxuLmdyaWQtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiAzMHN2dztcclxufVxyXG5cclxuLmdyaWQtYm94ID4gLnBhbmVsID4gYSB7XHJcbiAgZm9udC1zaXplOiAyc3Z3O1xyXG4gIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcclxufVxyXG5cclxuLmFjY29yZGlvbiB7XHJcbiAgZm9udC1zaXplOiA0c3Z3O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcclxufVxyXG5cclxuLmFjdGl2ZSxcclxuLmFjY29yZGlvbjpob3ZlciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gIHBhZGRpbmc6IDAgMThweDtcclxuICBtYXgtaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjIgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogNHN2dztcclxuICB9XHJcblxyXG4gIC5pbWctY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiA3NyU7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTVzdnc7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIGltZyB7XHJcbiAgICB3aWR0aDogMTVzdnc7XHJcbiAgfVxyXG5cclxuICAubW9udGhseS1zcGVjaWFsIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTBzdnc7XHJcbiAgfVxyXG5cclxuICAubW9udGhseS1zcGVjaWFsIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogOHN2dztcclxuICB9XHJcblxyXG4gIC5zcGVjaWFsLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA5OCU7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdXMgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMHN2dztcclxuICB9XHJcblxyXG4gIC5mb290ZXIgPiAqID4gYSB7XHJcbiAgICBmb250LXNpemU6IDVzdnc7XHJcbiAgfVxyXG5cclxuICAuYWNjb3JkaW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBzdnc7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1ib3ggPiAucGFuZWwgPiBhIHtcclxuICAgIGZvbnQtc2l6ZTogM3N2dztcclxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xyXG4gICAgdGV4dC13cmFwOiBiYWxhbmNlO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtREFBbUQ7RUFD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QUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNldmljaGUrT25lJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hZGltaStPbmUmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1oZWFkZXItY29sb3VyOiAjZTI5MjIxOWQ7XFxyXFxuICAtLWJvZHktY2FyZC1jb2xvdXI6ICNiOGI4Yjg0ZDtcXHJcXG4gIC0tbGluay1jb2xvcjogIzJjNDM5MDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IENldmljaGUgT25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MGUzMjAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAwLjE1ZW0gdmFyKC0tbGluay1jb2xvcik7XFxyXFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IHRleHQtZGVjb3JhdGlvbi1jb2xvciAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMwMDAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1hZGltaSBPbmVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBmb250LXNpemU6IDJzdnc7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjQ4MDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGNvbG9yOiAjZTIzMTIxO1xcclxcbiAgYmFja2dyb3VuZDogI2RkNGI0ODAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjQ4MDA7XFxyXFxufVxcclxcblxcclxcbi5ncmFkaWVudC10ZXh0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjMxMjE7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjA5MDksICMzYTliZDgpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi90aGVfbG9nby53ZWJwKTtcXHJcXG4gIGhlaWdodDogNTAwMHB4O1xcclxcbiAgd2lkdGg6IDUwNzZweDtcXHJcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgei1pbmRleDogLTExMTE7XFxyXFxuICBhbmltYXRpb246IHNsaWRlIDYwcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE2OTJweCwgLTgwMHB4LCAwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtYm9keSB7XFxyXFxuICBtYXJnaW4tdG9wOiAyc3ZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyc3Z3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG91cik7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaDEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxuICBmb250LXNpemU6IDVzdnc7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyc3ZoO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uaGVhZGVyID4gaDEgPiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2UyMzEyMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyID4gaDEgPiBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2UyMzEyMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBpbWcge1xcclxcbiAgd2lkdGg6IDEwc3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pbWFnZSB7XFxyXFxuICBwYWRkaW5nOiAxc3ZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9udGhseS1zcGVjaWFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDJzdmg7XFxyXFxuICBjb2xvcjogIzAwMDEwMjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb250aGx5LXNwZWNpYWwgaDEge1xcclxcbiAgZm9udC1zaXplOiA1c3Z3O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3N2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwZWNpYWwtY2FyZCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1jYXJkLWNvbG91cik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgbWF4LXdpZHRoOiA3NnN2dztcXHJcXG4gIGdhcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BlY2lhbC1jYXJkIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNHN2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNwZWNpYWwtY2FyZCBpbWcge1xcclxcbiAgaW5saW5lLXNpemU6IDEwMCU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDQvMztcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICMyYzQzOTA7XFxyXFxuICBtYXJnaW4tbGVmdDogMnN2dztcXHJcXG4gIG1hcmdpbi1yaWdodDogMnN2dztcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMXN2dyk7XFxyXFxuICBnYXA6IDNzdnc7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyA+IGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZTIzMTIxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdXMge1xcclxcbiAgbWFyZ2luOiAzc3ZoO1xcclxcbiAgY29sb3I6ICNmOWI1NzI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWNhcmQtY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXVzIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXN2dztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXVzIHAge1xcclxcbiAgd2lkdGg6IDk1c3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLWlubGluZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZS1zbmFwcyB7XFxyXFxuICBzY3JvbGwtc25hcC10eXBlOiBpbmxpbmUgbWFuZGF0b3J5O1xcclxcbiAgc2Nyb2xsLXBhZGRpbmctaW5saW5lOiA0JTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZS1zbmFwcyA+ICoge1xcclxcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Nyb2xsLWltYWdlcyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG4gIG1hcmdpbjogNCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZGQ0YTQ4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjcm9sbC1pbWFnZXMgaW1nIHtcXHJcXG4gIGlubGluZS1zaXplOiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiA0LzM7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyc3ZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3N2aDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxc3Z3O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxc3Z3O1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIHBhZGRpbmc6IDFzdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3VyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciA+ICogPiBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3N2dztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWF4LXdpZHRoOiAzMHN2dztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtYm94ID4gLnBhbmVsID4gYSB7XFxyXFxuICBmb250LXNpemU6IDJzdnc7XFxyXFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDZweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saW5rLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjY29yZGlvbiB7XFxyXFxuICBmb250LXNpemU6IDRzdnc7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLFxcclxcbi5hY2NvcmRpb246aG92ZXIge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFuZWwge1xcclxcbiAgcGFkZGluZzogMCAxOHB4O1xcclxcbiAgbWF4LWhlaWdodDogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMiBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHN2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWctY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDc3JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDE1c3Z3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciBpbWcge1xcclxcbiAgICB3aWR0aDogMTVzdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9udGhseS1zcGVjaWFsIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHN2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb250aGx5LXNwZWNpYWwgaDIge1xcclxcbiAgICBmb250LXNpemU6IDhzdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3BlY2lhbC1jYXJkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5OCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtdXMgaDEge1xcclxcbiAgICBmb250LXNpemU6IDEwc3Z3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlciA+ICogPiBhIHtcXHJcXG4gICAgZm9udC1zaXplOiA1c3Z3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjY29yZGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBzdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ3JpZC1ib3ggPiAucGFuZWwgPiBhIHtcXHJcXG4gICAgZm9udC1zaXplOiAzc3Z3O1xcclxcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXHJcXG4gICAgdGV4dC13cmFwOiBiYWxhbmNlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKlxyXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XHJcbiAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfSkuam9pbihcIlwiKTtcclxuICB9O1xyXG5cclxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XHJcbiAgICB9XHJcbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcclxuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZWRpYSkge1xyXG4gICAgICAgIGlmICghaXRlbVsyXSkge1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gbGlzdDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xyXG4gIGlmICghb3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IHt9O1xyXG4gIH1cclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xyXG5cclxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cclxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcclxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XHJcbiAgfVxyXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcclxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XHJcbiAgfVxyXG5cclxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XHJcbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcclxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XHJcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcclxuICB9XHJcbiAgcmV0dXJuIHVybDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG4gIGlmICghY3NzTWFwcGluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XHJcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XHJcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcclxuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHN0eWxlc0luRE9NID0gW107XHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xyXG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xyXG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXHJcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcclxuICAgICAgICByZWZlcmVuY2VzOiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XHJcbiAgYXBpLnVwZGF0ZShvYmopO1xyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gdXBkYXRlcjtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcclxuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG5cclxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG4gIHJldHVybiBtZW1vW3RhcmdldF07XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG4gIGlmIChub25jZSkge1xyXG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcclxuICB9XHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuICBjc3MgKz0gb2JqLmNzcztcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9XHJcblxyXG4gIC8vIEZvciBvbGQgSUVcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXHJcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXHJcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cclxuICAgIH07XHJcbiAgfVxyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xyXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICB9IGVsc2Uge1xyXG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2RvdWctdWJjLmpwZWdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2RvdWctdWJjLmpwZWdcIixcblx0XCIuL2ltZy0xMC5qcGdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy0xMC5qcGdcIixcblx0XCIuL2ltZy0yLmpwZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTIuanBnXCIsXG5cdFwiLi9pbWctMy5qcGVnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctMy5qcGVnXCIsXG5cdFwiLi9pbWctNC5wbmdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy00LnBuZ1wiLFxuXHRcIi4vaW1nLTUuanBlZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTUuanBlZ1wiLFxuXHRcIi4vaW1nLTYuanBnXCI6IFwiLi9zcmMvc2Nyb2xsLWltYWdlcy9pbWctNi5qcGdcIixcblx0XCIuL2ltZy03LmpwZ1wiOiBcIi4vc3JjL3Njcm9sbC1pbWFnZXMvaW1nLTcuanBnXCIsXG5cdFwiLi9pbWctOC5wbmdcIjogXCIuL3NyYy9zY3JvbGwtaW1hZ2VzL2ltZy04LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9zY3JvbGwtaW1hZ2VzIHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0N3ZWJwKSRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBtZW51SW1hZ2UgZnJvbSBcIi4vRExNZW51LmpwZ1wiO1xyXG5pbXBvcnQgbW9udGhseVNwZWNpYWxJbWFnZSBmcm9tIFwiLi9tb250aGx5U3BlY2lhbC5qcGdcIjtcclxuaW1wb3J0IGZsYW1lc0dpZiBmcm9tIFwiLi9mbGFtZXMuZ2lmXCI7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSBcIi4vdGhlX2xvZ28ud2VicFwiO1xyXG5cclxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICByZXR1cm4gci5rZXlzKCkubWFwKHIpO1xyXG59XHJcbmNvbnN0IHNjcm9sbEltYWdlcyA9IGltcG9ydEFsbChcclxuICByZXF1aXJlLmNvbnRleHQoXCIuL3Njcm9sbC1pbWFnZXMvXCIsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3x3ZWJwKSQvKVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gc21vb3RoU2Nyb2xsKGVsZW1lbnQsIHNjcm9sbEFtb3VudCkge1xyXG4gIGxldCBzdGFydCA9IG51bGw7XHJcbiAgY29uc3Qgc3RlcCA9ICh0aW1lc3RhbXApID0+IHtcclxuICAgIGlmICghc3RhcnQpIHN0YXJ0ID0gdGltZXN0YW1wO1xyXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSBzdGFydDtcclxuICAgIGNvbnN0IGZyYWN0aW9uID0gcHJvZ3Jlc3MgLyAxMDAwMDsgLy8gQWRqdXN0IGFzIG5lZWRlZFxyXG5cclxuICAgIGlmIChmcmFjdGlvbiA8IDEpIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxCeSh7XHJcbiAgICAgICAgbGVmdDogc2Nyb2xsQW1vdW50ICogZnJhY3Rpb24sXHJcbiAgICAgICAgYmVoYXZpb3I6IFwiYXV0b1wiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxCeSh7XHJcbiAgICAgICAgbGVmdDogc2Nyb2xsQW1vdW50LFxyXG4gICAgICAgIGJlaGF2aW9yOiBcImF1dG9cIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbn1cclxuXHJcbmNvbnN0IGRvbU1hbmlwdWxhdG9yID0gKGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiLi90aGVfbG9nby53ZWJwXCI7XHJcbiAgY29uc3Qgc2l0ZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpdGUtYm9keVwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJCb2R5KCkge1xyXG4gICAgc2l0ZUJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZEltYWdlcyhpbWFnZXMpIHtcclxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWctY29udGFpbmVyXCIpO1xyXG4gICAgLy9jcmVhdGUgdGhlIC5zY3JvbGwtaW1hZ2VzIGRpdnMgYW5kIGFkZCB0byAuaW1nLWNvbnRhaW5lciBkaXZcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW1hZ2VEaXYuY2xhc3NMaXN0LmFkZChcInNjcm9sbC1pbWFnZXNcIik7XHJcblxyXG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpbWcuc3JjID0gaW1hZ2VzW2luZGV4XTtcclxuICAgICAgaW1hZ2VEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VEaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzbW9vdGhTY3JvbGwoaW1hZ2VDb250YWluZXIsIGV2dC5kZWx0YVkgPCAwID8gLTMwIDogMzApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWNjb3JkaW9uXCIpO1xyXG5cclxuICBsZXQgaTtcclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xyXG4gICAgYWNjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIFwiYWN0aXZlXCIgY2xhc3MsXHJcbiAgICB0byBoaWdobGlnaHQgdGhlIGJ1dHRvbiB0aGF0IGNvbnRyb2xzIHRoZSBwYW5lbCAqL1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGFjdGl2ZSBwYW5lbCAqL1xyXG4gICAgICBjb25zdCBwYW5lbCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZU1lbnVCb2R5KCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBtZW51LnNyYyA9IG1lbnVJbWFnZTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1hZ2VcIik7XHJcbiAgICBzaXRlQm9keS5hcHBlbmRDaGlsZChtZW51KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VTcGVjaWFsQ2FyZCgpIHtcclxuICAgIGNvbnN0IG1vbnRobHlTcGVjaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1vbnRobHlTcGVjaWFsLmNsYXNzTGlzdC5hZGQoXCJtb250aGx5LXNwZWNpYWxcIik7XHJcbiAgICBzaXRlQm9keS5hcHBlbmRDaGlsZChtb250aGx5U3BlY2lhbCk7XHJcbiAgICBjb25zdCBzcGVjaWFsSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBzcGVjaWFsSDEuaW5uZXJIVE1MID0gXCJXSEFUJ1MgR09JTkcgT04gVEhJUyBNT05USD9cIjtcclxuICAgIG1vbnRobHlTcGVjaWFsLmFwcGVuZENoaWxkKHNwZWNpYWxIMSk7XHJcbiAgICBjb25zdCBzcGVjaWFsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzcGVjaWFsQ2FyZC5jbGFzc0xpc3QuYWRkKFwic3BlY2lhbC1jYXJkXCIpO1xyXG4gICAgbW9udGhseVNwZWNpYWwuYXBwZW5kQ2hpbGQoc3BlY2lhbENhcmQpO1xyXG4gICAgY29uc3Qgc3BlY2lhbENhcmRIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHNwZWNpYWxDYXJkSDIuY2xhc3NMaXN0LmFkZChcImdyYWRpZW50LXRleHRcIik7XHJcbiAgICBzcGVjaWFsQ2FyZEgyLmlubmVySFRNTCA9IFwiVGhlIENhanVuIFNhbmRvIVwiO1xyXG4gICAgc3BlY2lhbENhcmQuYXBwZW5kQ2hpbGQoc3BlY2lhbENhcmRIMik7XHJcbiAgICBjb25zdCBzcGVjaWFsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHNwZWNpYWxEZXNjcmlwdGlvbi5pbm5lckhUTUwgPVxyXG4gICAgICBcIkEgc3BlY2lhbGx5IGNyYWZ0ZWQgYmxlbmQgb2Ygc3BpY2VzIHRvIG1peCB1cCBvdXIgbWVudSBldmVyeSBtb250aCEgQ2hlY2sgYmFjayBzb29uIHRvIHNlZSB3aGF0IHdlJ3ZlIGdvdCFcIjtcclxuICAgIHNwZWNpYWxDYXJkLmFwcGVuZENoaWxkKHNwZWNpYWxEZXNjcmlwdGlvbik7XHJcbiAgICBjb25zdCBzcGVjaWFsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgc3BlY2lhbEltYWdlLnNyYyA9IG1vbnRobHlTcGVjaWFsSW1hZ2U7XHJcbiAgICBzcGVjaWFsQ2FyZC5hcHBlbmRDaGlsZChzcGVjaWFsSW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZUFib3V0VXNDYXJkKCkge1xyXG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhYm91dFVzLmNsYXNzTGlzdC5hZGQoXCJhYm91dC11c1wiKTtcclxuICAgIHNpdGVCb2R5LmFwcGVuZENoaWxkKGFib3V0VXMpO1xyXG4gICAgY29uc3QgYWJvdXRVc0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgYWJvdXRVc0gxLmlubmVySFRNTCA9IFwiV0hBVCBXRSBBUkVcIjtcclxuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoYWJvdXRVc0gxKTtcclxuICAgIGNvbnN0IGFib3V0VXNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYWJvdXRVc0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IGBOYXNodmlsbGUtc3R5bGUgZnJpZWQgY2hpY2tlbiBpcyBjaGFyYWN0ZXJpemVkIGJ5IGl0J3Mgb2lsIGRpcCwgYW5kXHJcbiAgICBzcGljZWQgZHVzdCB0aGF0IGl0IGdldHMgYXMgc29vbiBhcyBpdCBjb21lcyBvdXQgdGhlIGZyeWVyLiBUaGlzIGdpdmVzXHJcbiAgICBpdCBpdHMgY2hhcmN0ZXJpc3RpYyByZWQgY29sb3VyLCBhbmQgaGVscHMgdG8gY29hdCB5b3VyIG1vdXRoIHdpdGggb3VyXHJcbiAgICBkZWxpY2lvdXMgc3BpY2UgYmxlbmRzISBTaW5jZSBvdXIgaW5jZXB0aW9uIGluIDIwMTIsIERvdWcgU3RlcGhlbiBoYXNcclxuICAgIGJlZW4gc2luZ21pbmRlZGx5IGZvY3VzZWQgb24gdGhlIHBlcmZlY3Rpb24gb2YgdGhpcyBzdG9yaWVkIGNoaWNrZW4sXHJcbiAgICB3aXRoIHRoZSBnb2FsIG9mIHNoYXJpbmcgaGlzIG1vdXRoLXdhdGVyaW5nIGNyZWF0aW9ucyB0byBhbGwgb2ZcclxuICAgIFZhbmNvdXZlciFgO1xyXG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChhYm91dFVzRGVzY3JpcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZVNjcm9sbGFibGVJbWFnZXMoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxhYmxlSW1hZ2VCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2Nyb2xsYWJsZUltYWdlQmFyLmNsYXNzTGlzdC5hZGQoXCJpbWctY29udGFpbmVyXCIsIFwiaW5saW5lLXNuYXBzXCIpO1xyXG4gICAgc2l0ZUJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsYWJsZUltYWdlQmFyKTtcclxuICAgIGFkZEltYWdlcyhzY3JvbGxJbWFnZXMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZUhvbWVQYWdlKCkge1xyXG4gICAgY2xlYXJCb2R5KCk7XHJcbiAgICBtYWtlU3BlY2lhbENhcmQoKTtcclxuICAgIG1ha2VBYm91dFVzQ2FyZCgpO1xyXG4gICAgbWFrZVNjcm9sbGFibGVJbWFnZXMoKTtcclxuICAgIGFkZEdpZnMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpO1xyXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChtZW51QnV0dG9uLmlubmVySFRNTCA9PSBcIk1FTlVcIikge1xyXG4gICAgICAvL3JlZmFjdG9yIHRoaXMgaW50byBzZXBlcmF0ZSBmdW5jdGlvblxyXG4gICAgICBtZW51QnV0dG9uLmlubmVySFRNTCA9IFwiVEFLRSBNRSBCQUNLIVwiO1xyXG4gICAgICBjbGVhckJvZHkoKTtcclxuICAgICAgbWFrZU1lbnVCb2R5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZW51QnV0dG9uLmlubmVySFRNTCA9IFwiTUVOVVwiO1xyXG4gICAgICBtYWtlSG9tZVBhZ2UoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9nb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjcmV0LW1lbnVcIik7XHJcbiAgbG9nb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbWVudUJ1dHRvbi5pbm5lckhUTUwgPSBcIlRBS0UgTUUgQkFDSyFcIjtcclxuICAgIGNsZWFyQm9keSgpO1xyXG4gICAgY29uc3Qgc2VjcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBzZWNyZXQuaW5uZXJIVE1MID0gYFlvdSBmb3VuZCBvdXIgc2VjcmV0IG1lbnUhIFxyXG4gICAgVW5mb3J0dW5hdGVseSB0aGVyZXMgbm90aGluZyBoZXJlIHlldGA7XHJcbiAgICBzaXRlQm9keS5hcHBlbmRDaGlsZChzZWNyZXQpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBhZGRHaWZzKCkge1xyXG4gICAgY29uc3QgZ2lmcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGFtZS1pbWFnZXNcIik7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ2lmcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgZ2lmc1tpbmRleF0uc3JjID0gZmxhbWVzR2lmO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4geyBtYWtlSG9tZVBhZ2UgfTtcclxufSkoKTtcclxuXHJcbmRvbU1hbmlwdWxhdG9yLm1ha2VIb21lUGFnZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=