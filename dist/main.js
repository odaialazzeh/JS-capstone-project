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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  color: black;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-top: 1em;\r\n}\r\n\r\nheader .logo {\r\n  border: 2px solid black;\r\n  border-radius: 5em;\r\n  height: 4.2em;\r\n  width: 4.2em;\r\n  margin: 0 1em 0 1em;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1.2em;\r\n  margin-top: 0.55em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: #d57d1f;\r\n}\r\n\r\nheader .logo h1 span::before {\r\n  content: \"\\a\";\r\n  white-space: pre;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  text-decoration: underline;\r\n  font-weight: bold;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  border: 3px solid black;\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  place-content: center;\r\n  margin: 10em auto;\r\n  width: 20em;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 20% 25%;\r\n  margin: 0 0 15em 0;\r\n  width: 20em;\r\n  height: 15em;\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 20em;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: center;\r\n  margin-left: 4em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.meal .div-like .fa-heart {\r\n  margin-right: 2em;\r\n  font-size: 1.7em;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.meal img {\r\n  width: 15em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 2px 2px 2px black;\r\n  width: 10em;\r\n  height: 2.5em;\r\n  font-weight: bold;\r\n  place-self: center;\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n}\r\n\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.meal-popup-div-img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,kCAAkC;EAClC,iBAAiB;EACjB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,0CAA0C;EAC1C,qBAAqB;EACrB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,6BAA6B;EAC7B,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;EACf,SAAS;EACT,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE,4BAA4B;EAC5B,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap\");\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  color: black;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  margin-top: 1em;\r\n}\r\n\r\nheader .logo {\r\n  border: 2px solid black;\r\n  border-radius: 5em;\r\n  height: 4.2em;\r\n  width: 4.2em;\r\n  margin: 0 1em 0 1em;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1.2em;\r\n  margin-top: 0.55em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: #d57d1f;\r\n}\r\n\r\nheader .logo h1 span::before {\r\n  content: \"\\a\";\r\n  white-space: pre;\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  text-decoration: underline;\r\n  font-weight: bold;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  border: 3px solid black;\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  place-content: center;\r\n  margin: 10em auto;\r\n  width: 20em;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 20% 25%;\r\n  margin: 0 0 15em 0;\r\n  width: 20em;\r\n  height: 15em;\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 20em;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: center;\r\n  margin-left: 4em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.meal .div-like .fa-heart {\r\n  margin-right: 2em;\r\n  font-size: 1.7em;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.meal img {\r\n  width: 15em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 2px 2px 2px black;\r\n  width: 10em;\r\n  height: 2.5em;\r\n  font-weight: bold;\r\n  place-self: center;\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: white;\r\n  border: 4px solid #3e3e3e;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n}\r\n\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.meal-popup-div-img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  margin: 0 0 10px 0;\r\n  width: 256px;\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
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

  (0,_show_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(itemId, parent);
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
    button.innerHTML = 'Comment';
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCommentsList);


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

  (0,_show_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id, commentsContainer);

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
      formRes.innerHTML = 'Username and comment should not be empty';
      formResContainer.innerHTML = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUIsRUFBRSxpQkFBaUIsSUFBSSxpQkFBaUI7QUFDL0Y7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmlCO0FBQ0M7O0FBRWxEO0FBQ0EsdUZBQXVGLEdBQUc7QUFDMUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDJCQUEyQjtBQUMxQzs7QUFFQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7O0FBRUE7QUFDQSxnQ0FBZ0MsMEJBQTBCO0FBQzFEOztBQUVBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDs7QUFFQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw2REFBZ0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFhO0FBQ25CLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvYWRkLW5ldy1jb21tZW50LmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2Rpc3BsYXktaG9tZS5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9zaG93LWNvbW1lbnRzLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL3Nob3ctcG9wdXAtY29tbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAxMDA7MzAwOzQwMDs3MDA7OTAwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXHJcXG4gIGhlaWdodDogNC4yZW07XFxyXFxuICB3aWR0aDogNC4yZW07XFxyXFxuICBtYXJnaW46IDAgMWVtIDAgMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28gaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHNwYW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNkNTdkMWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBoMSBzcGFuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxhXFxcIjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsICNtZWFscyB7XFxyXFxuICBtYXJnaW46IDAgMWVtIDAgLTMuNWVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGgyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBlbSBhdXRvO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMjAlIDI1JTtcXHJcXG4gIG1hcmdpbjogMCAwIDE1ZW0gMDtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbiAgaGVpZ2h0OiAxNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0ZW07XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5mYS1oZWFydCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxufVxcclxcblxcclxcbi5kaXYtaW1nIHtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgaW1nIHtcXHJcXG4gIHdpZHRoOiAxNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAyLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tIGgyIHtcXHJcXG4gIG1hcmdpbjogM2VtIDAgLTNlbSAwO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgIzNlM2UzZTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHBhZGRpbmc6IDAgMzJweCAwIDMycHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWNsb3NlLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxOHB4O1xcclxcbiAgcmlnaHQ6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWRpdi1pbWcge1xcclxcbiAgbWFyZ2luOiAxMHB4IDUwcHggMTBweCA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwMHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tdXNlcm5hbWUge1xcclxcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xcclxcbiAgd2lkdGg6IDI1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLWNvbW1lbnQge1xcclxcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xcclxcbiAgd2lkdGg6IDI1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZS1jb2xvciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tcmVzIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2UtY29sb3I7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgd2lkdGg6IDI1NnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMTAwOzMwMDs0MDA7NzAwOzkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28ge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxyXFxuICBoZWlnaHQ6IDQuMmVtO1xcclxcbiAgd2lkdGg6IDQuMmVtO1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMS4yZW07XFxyXFxuICBtYXJnaW4tdG9wOiAwLjU1ZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubG9nbyBoMSBzcGFuIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZDU3ZDFmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28gaDEgc3Bhbjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcYVxcXCI7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCBsaSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bCAjbWVhbHMge1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIC0zLjVlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBoMiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwZW0gYXV0bztcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDIwJSAyNSU7XFxyXFxuICBtYXJnaW46IDAgMCAxNWVtIDA7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG4gIGhlaWdodDogMTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogNGVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZmEtaGVhcnQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XFxyXFxuICBmb250LXNpemU6IDEuN2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2LWltZyB7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsIGltZyB7XFxyXFxuICB3aWR0aDogMTVlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMi41ZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbSBoMiB7XFxyXFxuICBtYXJnaW46IDNlbSAwIC0zZW0gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICMzZTNlM2U7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBwYWRkaW5nOiAwIDMycHggMCAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1jbG9zZS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMThweDtcXHJcXG4gIHJpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1kaXYtaW1nIHtcXHJcXG4gIG1hcmdpbjogMTBweCA1MHB4IDEwcHggNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybSB7XFxyXFxuICBtYXJnaW46IDAgMCAxMDBweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXVzZXJuYW1lIHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3Ige1xcclxcbiAgMCUge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXJlcyB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlLWNvbG9yO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAyNTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGUvZGlzcGxheS1ob21lLmpzJztcblxuZ2V0RGF0YSgpOyIsImltcG9ydCBzaG93Q29tbWVudHNMaXN0IGZyb20gJy4vc2hvdy1jb21tZW50cy5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZE5ld0NvbW1lbnQoaXRlbUlkLCB1c2VybmFtZSwgY29tbWVudCkge1xuICBjb25zdCBhcGlLZXkgPSAndG5FMms2UDVCZFoySENUamJkMFYnO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwaUtleX0vY29tbWVudHMvYCxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgY29tbWVudCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgYXdhaXQgcmVzcG9uc2U7XG5cbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWwtcG9wdXAtY29tbWVudHMtY29udGFpbmVyJyk7XG4gIHBhcmVudC5pbm5lckhUTUwgPSAnJztcblxuICBzaG93Q29tbWVudHNMaXN0KGl0ZW1JZCwgcGFyZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkTmV3Q29tbWVudDtcbiIsImltcG9ydCBzaG93UG9wdXBDb21tZW50IGZyb20gJy4vc2hvdy1wb3B1cC1jb21tZW50LmpzJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/cycpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZCcpO1xuICBjb25zdCByYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tJyk7XG4gIGNvbnN0IGxpc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgbGlzdFNlY3Rpb24uYmVmb3JlKGhlYWRlcik7XG4gIGxpc3RTZWN0aW9uLmJlZm9yZShyYW5kb20pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpICs9IDEpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdC5jbGFzc05hbWUgPSAnbWVhbCc7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2Rpdi1pbWcnO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGNvbnN0IGRlc2NycHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVzY3JwdDEuc3JjID0gYCR7ZGF0YS5tZWFsc1tpXS5zdHJNZWFsVGh1bWJ9YDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzY3JwdDEpO1xuXG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjIuY2xhc3NOYW1lID0gJ2Rpdi1saWtlJztcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRpdjIpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gYCR7ZGF0YS5tZWFsc1tpXS5zdHJNZWFsfWA7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChwKTtcblxuICAgIGNvbnN0IGxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbGlrZS5jbGFzc05hbWUgPSAnZmEtcmVndWxhciBmYS1oZWFydCc7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChsaWtlKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pZCA9IGRhdGEubWVhbHNbaV0uaWRNZWFsO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnQ29tbWVudCc7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgbGlzdFNlY3Rpb24uYXBwZW5kKGxpc3QpO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0O1xuICAgICAgc2hvd1BvcHVwQ29tbWVudChpZCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTtcbiIsImFzeW5jIGZ1bmN0aW9uIHNob3dDb21tZW50c0xpc3QoaWQsIHBhcmVudCkge1xuICBjb25zdCBhcGlLZXkgPSAndG5FMms2UDVCZFoySENUamJkMFYnO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwaUtleX0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWNvbW1lbnRzLXRpdGxlJztcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7ZGF0YS5sZW5ndGggfHwgMH0pYDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29tbWVudFJvdy5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1jb21tZW50cy1yb3cnO1xuICAgICAgY29tbWVudFJvdy5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fSBgO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbW1lbnRSb3cpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0NvbW1lbnRzTGlzdDtcbiIsImltcG9ydCBhZGROZXdDb21tZW50IGZyb20gJy4vYWRkLW5ldy1jb21tZW50LmpzJztcbmltcG9ydCBzaG93Q29tbWVudHNMaXN0IGZyb20gJy4vc2hvdy1jb21tZW50cy5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dQb3B1cENvbW1lbnQoaWQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke2lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gIGNvbnN0IG1lYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVhbC5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cCc7XG5cbiAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjbG9zZUljb24uY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtY2xvc2UtaWNvbiBmYSBmYS10aW1lcyc7XG4gIG1lYWwuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWVhbC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1kaXYtaW1nJztcbiAgbWVhbC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3JjID0gYCR7ZGF0YS5tZWFsc1swXS5zdHJNZWFsVGh1bWJ9YDtcbiAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwMS50ZXh0Q29udGVudCA9IGAke2RhdGEubWVhbHNbMF0uc3RyTWVhbH1gO1xuICBtZWFsLmFwcGVuZENoaWxkKHAxKTtcblxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSBgQ2F0ZWdvcnk6ICR7ZGF0YS5tZWFsc1swXS5zdHJDYXRlZ29yeX1gO1xuICBtZWFsLmFwcGVuZENoaWxkKHAyKTtcblxuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDMudGV4dENvbnRlbnQgPSBgQXJlYTogJHtkYXRhLm1lYWxzWzBdLnN0ckFyZWF9YDtcbiAgbWVhbC5hcHBlbmRDaGlsZChwMyk7XG5cbiAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZC50ZXh0Q29udGVudCA9IGAke2RhdGEubWVhbHNbMF0uc3RySW5zdHJ1Y3Rpb25zfWA7XG4gIG1lYWwuYXBwZW5kQ2hpbGQoZCk7XG5cbiAgLy8gQ29tbWVudHNcbiAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudHNDb250YWluZXIuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtY29tbWVudHMtY29udGFpbmVyJztcbiAgbWVhbC5hcHBlbmRDaGlsZChjb21tZW50c0NvbnRhaW5lcik7XG5cbiAgc2hvd0NvbW1lbnRzTGlzdChpZCwgY29tbWVudHNDb250YWluZXIpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybSc7XG4gIG1lYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgZm9ybVRpdGxlLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tdGl0bGUnO1xuICBmb3JtVGl0bGUuaW5uZXJIVE1MID0gJ0FkZCBhIGNvbW1lbnQnO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgY29uc3QgZm9ybVVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZm9ybVVzZXJuYW1lLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tdXNlcm5hbWUnO1xuICBmb3JtVXNlcm5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIG5hbWUnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVXNlcm5hbWUpO1xuXG4gIGNvbnN0IGZvcm1Db21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZm9ybUNvbW1lbnQuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS1jb21tZW50JztcbiAgZm9ybUNvbW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIGluc2lnaHRzJyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUNvbW1lbnQpO1xuXG4gIGNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZm9ybUJ0bi5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLWJ0bic7XG4gIGZvcm1CdG4uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIGNvbW1lbnQnKTtcbiAgZm9ybUJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudCc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ0bik7XG5cbiAgY29uc3QgZm9ybVJlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZm9ybVJlc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXJlcyc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJlc0NvbnRhaW5lcik7XG5cbiAgZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtVXNlcm5hbWUudmFsdWUgJiYgZm9ybUNvbW1lbnQudmFsdWUpIHtcbiAgICAgIGFkZE5ld0NvbW1lbnQoaWQsIGZvcm1Vc2VybmFtZS52YWx1ZSwgZm9ybUNvbW1lbnQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmb3JtUmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZm9ybVJlcy5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLXJlcyc7XG4gICAgICBmb3JtUmVzLmlubmVySFRNTCA9ICdVc2VybmFtZSBhbmQgY29tbWVudCBzaG91bGQgbm90IGJlIGVtcHR5JztcbiAgICAgIGZvcm1SZXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICBmb3JtUmVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1SZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQobWVhbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQb3B1cENvbW1lbnQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=