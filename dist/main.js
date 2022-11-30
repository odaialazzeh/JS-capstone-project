"use strict";
(self["webpackChunkJS_capstone_project"] = self["webpackChunkJS_capstone_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  color: black;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-top: 1em;\r\n}\r\n\r\nheader .logo {\r\n  border: 2px solid black;\r\n  border-radius: 5em;\r\n  height: 4.2em;\r\n  width: 4.2em;\r\n  margin: 0 1em 0 1em;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1.2em;\r\n  margin-top: 0.55em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: #d57d1f;\r\n}\r\n\r\nheader .logo h1 span::before {\r\n  content: \"\\a\";\r\n  white-space: pre;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  text-decoration: underline;\r\n  font-weight: bold;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  border: 3px solid black;\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  place-content: center;\r\n  margin: 10em auto;\r\n  width: 20em;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 20% 25%;\r\n  margin: 0 0 15em 0;\r\n  width: 20em;\r\n  height: 15em;\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 20em;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: center;\r\n  margin-left: 4em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.meal .div-like .fa-heart {\r\n  margin-right: 2em;\r\n  font-size: 1.7em;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.meal img {\r\n  width: 15em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 2px 2px 2px black;\r\n  width: 10em;\r\n  height: 2.5em;\r\n  font-weight: bold;\r\n  place-self: center;\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n}\r\n\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.meal-popup-div-img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n .meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,kCAAkC;EAClC,iBAAiB;EACjB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,0CAA0C;EAC1C,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,6BAA6B;EAC7B,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,SAAS;EACT,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,WAAW;EACb;AACF;;CAEC;EACC,4BAA4B;EAC5B,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap\");\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  color: black;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-top: 1em;\r\n}\r\n\r\nheader .logo {\r\n  border: 2px solid black;\r\n  border-radius: 5em;\r\n  height: 4.2em;\r\n  width: 4.2em;\r\n  margin: 0 1em 0 1em;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1.2em;\r\n  margin-top: 0.55em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: #d57d1f;\r\n}\r\n\r\nheader .logo h1 span::before {\r\n  content: \"\\a\";\r\n  white-space: pre;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  text-decoration: underline;\r\n  font-weight: bold;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  border: 3px solid black;\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  place-content: center;\r\n  margin: 10em auto;\r\n  width: 20em;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 20% 25%;\r\n  margin: 0 0 15em 0;\r\n  width: 20em;\r\n  height: 15em;\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 20em;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: center;\r\n  margin-left: 4em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.meal .div-like .fa-heart {\r\n  margin-right: 2em;\r\n  font-size: 1.7em;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.meal img {\r\n  width: 15em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 2px 2px 2px black;\r\n  width: 10em;\r\n  height: 2.5em;\r\n  font-weight: bold;\r\n  place-self: center;\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n}\r\n\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.meal-popup-div-img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n .meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module_display_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/display-home.js */ "./src/module/display-home.js");



(0,_module_display_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/module/add-new-comment.js":
/*!***************************************!*\
  !*** ./src/module/add-new-comment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-comments.js */ "./src/module/show-comments.js");


async function addNewComment(itemId, username, comment) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  await response;

  const parent = document.querySelector('.meal-popup-comments-container');
  parent.innerHTML = '';

  (0,_show_comments_js__WEBPACK_IMPORTED_MODULE_0__.showCommentsList)(itemId, parent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewComment);


/***/ }),

/***/ "./src/module/display-home.js":
/*!************************************!*\
  !*** ./src/module/display-home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-popup-comment.js */ "./src/module/show-popup-comment.js");


async function getData() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
  const data = await response.json();
  const header = document.querySelector('.head');
  const random = document.querySelector('.random');
  const listSection = document.querySelector('.home');
  listSection.before(header);
  listSection.before(random);
  for (let i = 0; i < 20; i += 1) {
    const list = document.createElement('div');
    list.className = 'meal';

    const div = document.createElement('div');
    div.className = 'div-img';
    list.appendChild(div);

    const descrpt1 = document.createElement('img');
    descrpt1.src = `${data.meals[i].strMealThumb}`;
    div.appendChild(descrpt1);

    const div2 = document.createElement('div');
    div2.className = 'div-like';
    list.appendChild(div2);

    const p = document.createElement('p');
    p.textContent = `${data.meals[i].strMeal}`;
    div2.appendChild(p);

    const like = document.createElement('i');
    like.className = 'fa-regular fa-heart';
    div2.appendChild(like);

    const button = document.createElement('button');
    button.id = data.meals[i].idMeal;
    button.innerHTML = `Comment`;
    list.appendChild(button);

    listSection.append(list);

    button.addEventListener('click', (e) => {
      const { id } = e.target;
      (0,_show_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ }),

/***/ "./src/module/show-comments.js":
/*!*************************************!*\
  !*** ./src/module/show-comments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCommentsList": () => (/* binding */ showCommentsList)
/* harmony export */ });
async function showCommentsList(id, parent) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  try {
    const data = await response.json();

    const title = document.createElement('h3');
    title.className = 'meal-popup-comments-title';
    title.innerHTML = `Comments (${data.length || 0})`;
    parent.appendChild(title);

    data.forEach((comment) => {
      const commentRow = document.createElement('p');
      commentRow.className = 'meal-popup-comments-row';
      commentRow.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment} `;
      parent.appendChild(commentRow);
    });
  } catch (err) {
    // do nothing
  }
}




/***/ }),

/***/ "./src/module/show-popup-comment.js":
/*!******************************************!*\
  !*** ./src/module/show-popup-comment.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_new_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-comment.js */ "./src/module/add-new-comment.js");
/* harmony import */ var _show_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-comments.js */ "./src/module/show-comments.js");



async function showPopupComment(id) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();

  const mainSection = document.querySelector('header');
  const meal = document.createElement('div');
  meal.className = 'meal-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'meal-popup-close-icon fa fa-times';
  meal.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    meal.remove();
  });

  const div = document.createElement('div');
  div.className = 'meal-popup-div-img';
  meal.appendChild(div);

  const img = document.createElement('img');
  img.src = `${data.meals[0].strMealThumb}`;
  div.appendChild(img);

  const p1 = document.createElement('h2');
  p1.textContent = `${data.meals[0].strMeal}`;
  meal.appendChild(p1);

  const p2 = document.createElement('p');
  p2.textContent = `Category: ${data.meals[0].strCategory}`;
  meal.appendChild(p2);

  const p3 = document.createElement('p');
  p3.textContent = `Area: ${data.meals[0].strArea}`;
  meal.appendChild(p3);

  const d = document.createElement('p');
  d.textContent = `${data.meals[0].strInstructions}`;
  meal.appendChild(d);

  // Comments
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'meal-popup-comments-container';
  meal.appendChild(commentsContainer);

  (0,_show_comments_js__WEBPACK_IMPORTED_MODULE_1__.showCommentsList)(id, commentsContainer);

  const form = document.createElement('form');
  form.className = 'meal-popup-add-comment-form';
  meal.appendChild(form);

  const formTitle = document.createElement('h3');
  formTitle.className = 'meal-popup-add-comment-form-title';
  formTitle.innerHTML = 'Add a comment';
  form.appendChild(formTitle);

  const formUsername = document.createElement('input');
  formUsername.className = 'meal-popup-add-comment-form-username';
  formUsername.setAttribute('placeholder', 'Your name');
  form.appendChild(formUsername);

  const formComment = document.createElement('textarea');
  formComment.className = 'meal-popup-add-comment-form-comment';
  formComment.setAttribute('placeholder', 'Your insights');
  form.appendChild(formComment);

  const formBtn = document.createElement('button');
  formBtn.className = 'meal-popup-add-comment-form-btn';
  formBtn.setAttribute('placeholder', 'Your comment');
  formBtn.innerHTML = 'Comment';
  form.appendChild(formBtn);

  const formResContainer = document.createElement('p');
  formResContainer.className = 'meal-popup-add-comment-form-res';
  form.appendChild(formResContainer);

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (formUsername.value && formComment.value) {
      (0,_add_new_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id, formUsername.value, formComment.value);
    } else {
        const formRes = document.createElement('p');
        formRes.className = 'meal-popup-add-comment-form-res';
        formRes.innerHTML = "Username and comment should not be empty";
        formResContainer.innerHTML = "";
        formResContainer.appendChild(formRes);
    }
  });

  mainSection.appendChild(meal);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopupComment);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUIsRUFBRSxpQkFBaUIsSUFBSSxpQkFBaUI7QUFDL0Y7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JxQjtBQUNHOztBQUVwRDtBQUNBLHVGQUF1RixHQUFHO0FBQzFGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSwyQkFBMkI7QUFDMUM7O0FBRUE7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDOztBQUVBO0FBQ0EsZ0NBQWdDLDBCQUEwQjtBQUMxRDs7QUFFQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7O0FBRUE7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsbUVBQWdCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBYTtBQUNuQixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2FkZC1uZXctY29tbWVudC5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9kaXNwbGF5LWhvbWUuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvc2hvdy1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9zaG93LXBvcHVwLWNvbW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMTAwOzMwMDs0MDA7NzAwOzkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxyXFxuICBoZWlnaHQ6IDQuMmVtO1xcclxcbiAgd2lkdGg6IDQuMmVtO1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMS4yZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjU1ZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBoMSBzcGFuIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZDU3ZDFmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28gaDEgc3Bhbjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcYVxcXCI7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCAjbWVhbHMge1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIC0zLjVlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBoMiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwZW0gYXV0bztcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDIwJSAyNSU7XFxyXFxuICBtYXJnaW46IDAgMCAxNWVtIDA7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG4gIGhlaWdodDogMTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogNGVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZmEtaGVhcnQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XFxyXFxuICBmb250LXNpemU6IDEuN2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LWltZyB7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIGltZyB7XFxyXFxuICB3aWR0aDogMTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMi41ZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbSBoMiB7XFxyXFxuICBtYXJnaW46IDNlbSAwIC0zZW0gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMzZTNlM2U7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBwYWRkaW5nOiAwIDMycHggMCAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1jbG9zZS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMThweDtcXHJcXG4gIHJpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1kaXYtaW1nIHtcXHJcXG4gIG1hcmdpbjogMTBweCA1MHB4IDEwcHggNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybSB7XFxyXFxuICBtYXJnaW46IDAgMCAxMDBweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXVzZXJuYW1lIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3Ige1xcclxcbiAgMCUge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4gLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1yZXMge1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZS1jb2xvcjtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMjU2cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztDQUVDO0VBQ0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAxMDA7MzAwOzQwMDs3MDA7OTAwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXHJcXG4gIGhlaWdodDogNC4yZW07XFxyXFxuICB3aWR0aDogNC4yZW07XFxyXFxuICBtYXJnaW46IDAgMWVtIDAgMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28gaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHNwYW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNkNTdkMWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBoMSBzcGFuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxhXFxcIjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsICNtZWFscyB7XFxyXFxuICBtYXJnaW46IDAgMWVtIDAgLTMuNWVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGgyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBlbSBhdXRvO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMjAlIDI1JTtcXHJcXG4gIG1hcmdpbjogMCAwIDE1ZW0gMDtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbiAgaGVpZ2h0OiAxNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0ZW07XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5mYS1oZWFydCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxufVxcclxcblxcclxcbi5kaXYtaW1nIHtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgaW1nIHtcXHJcXG4gIHdpZHRoOiAxNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAyLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tIGgyIHtcXHJcXG4gIG1hcmdpbjogM2VtIDAgLTNlbSAwO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgIzNlM2UzZTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHBhZGRpbmc6IDAgMzJweCAwIDMycHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWNsb3NlLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxOHB4O1xcclxcbiAgcmlnaHQ6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWRpdi1pbWcge1xcclxcbiAgbWFyZ2luOiAxMHB4IDUwcHggMTBweCA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tdXNlcm5hbWUge1xcclxcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xcclxcbiAgd2lkdGg6IDI1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLWNvbW1lbnQge1xcclxcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xcclxcbiAgd2lkdGg6IDI1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZS1jb2xvciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiAubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXJlcyB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlLWNvbG9yO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGUvZGlzcGxheS1ob21lLmpzJztcblxuZ2V0RGF0YSgpOyIsImltcG9ydCB7IHNob3dDb21tZW50c0xpc3QgfSBmcm9tICcuL3Nob3ctY29tbWVudHMuanMnO1xuXG5hc3luYyBmdW5jdGlvbiBhZGROZXdDb21tZW50KGl0ZW1JZCwgdXNlcm5hbWUsIGNvbW1lbnQpIHtcbiAgY29uc3QgYXBpS2V5ID0gJ3RuRTJrNlA1QmRaMkhDVGpiZDBWJztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcGlLZXl9L2NvbW1lbnRzL2AsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGNvbW1lbnQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIGF3YWl0IHJlc3BvbnNlO1xuXG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFsLXBvcHVwLWNvbW1lbnRzLWNvbnRhaW5lcicpO1xuICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgc2hvd0NvbW1lbnRzTGlzdChpdGVtSWQsIHBhcmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE5ld0NvbW1lbnQ7XG4iLCJpbXBvcnQgc2hvd1BvcHVwQ29tbWVudCBmcm9tICcuL3Nob3ctcG9wdXAtY29tbWVudC5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP3MnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWQnKTtcbiAgY29uc3QgcmFuZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbScpO1xuICBjb25zdCBsaXN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gIGxpc3RTZWN0aW9uLmJlZm9yZShoZWFkZXIpO1xuICBsaXN0U2VjdGlvbi5iZWZvcmUocmFuZG9tKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSArPSAxKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3QuY2xhc3NOYW1lID0gJ21lYWwnO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdkaXYtaW1nJztcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBjb25zdCBkZXNjcnB0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlc2NycHQxLnNyYyA9IGAke2RhdGEubWVhbHNbaV0uc3RyTWVhbFRodW1ifWA7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlc2NycHQxKTtcblxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYyLmNsYXNzTmFtZSA9ICdkaXYtbGlrZSc7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChkaXYyKTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IGAke2RhdGEubWVhbHNbaV0uc3RyTWVhbH1gO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBjb25zdCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGxpa2UuY2xhc3NOYW1lID0gJ2ZhLXJlZ3VsYXIgZmEtaGVhcnQnO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQobGlrZSk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaWQgPSBkYXRhLm1lYWxzW2ldLmlkTWVhbDtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gYENvbW1lbnRgO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGxpc3RTZWN0aW9uLmFwcGVuZChsaXN0KTtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSBlLnRhcmdldDtcbiAgICAgIHNob3dQb3B1cENvbW1lbnQoaWQpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7XG4iLCJhc3luYyBmdW5jdGlvbiBzaG93Q29tbWVudHNMaXN0KGlkLCBwYXJlbnQpIHtcbiAgY29uc3QgYXBpS2V5ID0gJ3RuRTJrNlA1QmRaMkhDVGpiZDBWJztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcGlLZXl9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1jb21tZW50cy10aXRsZSc7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2RhdGEubGVuZ3RoIHx8IDB9KWA7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbW1lbnRSb3cuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtY29tbWVudHMtcm93JztcbiAgICAgIGNvbW1lbnRSb3cuaW5uZXJIVE1MID0gYCR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9OiAke2NvbW1lbnQuY29tbWVudH0gYDtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb21tZW50Um93KTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG59XG5cbmV4cG9ydCB7IHNob3dDb21tZW50c0xpc3QgfTtcbiIsImltcG9ydCBhZGROZXdDb21tZW50IGZyb20gJy4vYWRkLW5ldy1jb21tZW50LmpzJztcbmltcG9ydCB7c2hvd0NvbW1lbnRzTGlzdH0gZnJvbSAnLi9zaG93LWNvbW1lbnRzLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gc2hvd1BvcHVwQ29tbWVudChpZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7aWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwJztcblxuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNsb3NlSWNvbi5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1jbG9zZS1pY29uIGZhIGZhLXRpbWVzJztcbiAgbWVhbC5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZWFsLnJlbW92ZSgpO1xuICB9KTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWRpdi1pbWcnO1xuICBtZWFsLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBgJHtkYXRhLm1lYWxzWzBdLnN0ck1lYWxUaHVtYn1gO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHAxLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZWFsc1swXS5zdHJNZWFsfWA7XG4gIG1lYWwuYXBwZW5kQ2hpbGQocDEpO1xuXG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMi50ZXh0Q29udGVudCA9IGBDYXRlZ29yeTogJHtkYXRhLm1lYWxzWzBdLnN0ckNhdGVnb3J5fWA7XG4gIG1lYWwuYXBwZW5kQ2hpbGQocDIpO1xuXG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMy50ZXh0Q29udGVudCA9IGBBcmVhOiAke2RhdGEubWVhbHNbMF0uc3RyQXJlYX1gO1xuICBtZWFsLmFwcGVuZENoaWxkKHAzKTtcblxuICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZWFsc1swXS5zdHJJbnN0cnVjdGlvbnN9YDtcbiAgbWVhbC5hcHBlbmRDaGlsZChkKTtcblxuICAvLyBDb21tZW50c1xuICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb21tZW50c0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1jb21tZW50cy1jb250YWluZXInO1xuICBtZWFsLmFwcGVuZENoaWxkKGNvbW1lbnRzQ29udGFpbmVyKTtcblxuICBzaG93Q29tbWVudHNMaXN0KGlkLCBjb21tZW50c0NvbnRhaW5lcik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtJztcbiAgbWVhbC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBmb3JtVGl0bGUuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS10aXRsZSc7XG4gIGZvcm1UaXRsZS5pbm5lckhUTUwgPSAnQWRkIGEgY29tbWVudCc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICBjb25zdCBmb3JtVXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBmb3JtVXNlcm5hbWUuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS11c2VybmFtZSc7XG4gIGZvcm1Vc2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Vc2VybmFtZSk7XG5cbiAgY29uc3QgZm9ybUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBmb3JtQ29tbWVudC5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLWNvbW1lbnQnO1xuICBmb3JtQ29tbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgaW5zaWdodHMnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQ29tbWVudCk7XG5cbiAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmb3JtQnRuLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tYnRuJztcbiAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgY29tbWVudCcpO1xuICBmb3JtQnRuLmlubmVySFRNTCA9ICdDb21tZW50JztcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnRuKTtcblxuICBjb25zdCBmb3JtUmVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb3JtUmVzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tcmVzJztcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUmVzQ29udGFpbmVyKTtcblxuICBmb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZvcm1Vc2VybmFtZS52YWx1ZSAmJiBmb3JtQ29tbWVudC52YWx1ZSkge1xuICAgICAgYWRkTmV3Q29tbWVudChpZCwgZm9ybVVzZXJuYW1lLnZhbHVlLCBmb3JtQ29tbWVudC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZm9ybVJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZm9ybVJlcy5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXJlcyc7XG4gICAgICAgIGZvcm1SZXMuaW5uZXJIVE1MID0gXCJVc2VybmFtZSBhbmQgY29tbWVudCBzaG91bGQgbm90IGJlIGVtcHR5XCI7XG4gICAgICAgIGZvcm1SZXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZm9ybVJlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUmVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1lYWwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93UG9wdXBDb21tZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9