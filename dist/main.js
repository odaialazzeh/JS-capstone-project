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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --orange: #d57d1f;\r\n  --black: rgb(25, 42, 86, 0.9);\r\n  --light-color: #666;\r\n  --box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\r\n  --font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  background-color: #eee;\r\n  color: var(--black);\r\n}\r\n\r\nheader {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  box-shadow: var(--box-shadow);\r\n  width: 100%;\r\n  padding: 0.5em;\r\n  background-color: white;\r\n}\r\n\r\n.fa-cutlery {\r\n  color: var(--black);\r\n  font-size: 1.3em;\r\n}\r\n\r\n.meal-popup h4 span {\r\n  text-align: left;\r\n  font-weight: 500;\r\n  font-size: 1em;\r\n  margin-left: 0.3em;\r\n}\r\n\r\nheader .logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1em;\r\n  margin: 0 1.5em 0 0.3em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: var(--orange);\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  font-weight: 500;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  place-items: center;\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n  height: 5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 8em 0;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup p {\r\n  margin-right: 2em;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.meal-popup p {\r\n  text-align: left;\r\n  margin: 1em 1em;\r\n  line-height: 2em;\r\n  font-size: 1.1em;\r\n  font-weight: 500;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 25% 25%;\r\n  margin: 0 1em 5em 0;\r\n  width: 20em;\r\n  height: 33em;\r\n  background-color: white;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: auto 0;\r\n  width: 100%;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: left;\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.div-heart {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 10em;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart {\r\n  margin-left: 1em;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n  color: var(--orange);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:hover {\r\n  color: rgb(255, 165, 0, 0.7);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:active {\r\n  color: red;\r\n}\r\n\r\n.meal .div-like .div-heart label {\r\n  font-size: 1em;\r\n  color: var(--black);\r\n  margin-left: 1.2em;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal img {\r\n  width: 17em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: var(--black);\r\n  color: white;\r\n  width: 8em;\r\n  height: 2.5em;\r\n  font-weight: 500;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: medium;\r\n  place-self: center;\r\n  cursor: pointer;\r\n  margin-bottom: 3em;\r\n  border: none;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  box-shadow: var(--box-shadow);\r\n  background-color: rgb(241, 240, 240);\r\n}\r\n\r\n.meal-popup h2 {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 2.5em;\r\n}\r\n\r\n.meal-popup h4 {\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n  margin: 1em 1em;\r\n}\r\n\r\n/*\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n*/\r\n.meal-popup-div-img {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal-popup-div-img img {\r\n  width: 35em;\r\n  height: 30em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.meal-popup-comments-title {\r\n  margin-left: 1em;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n  width: 20em;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  width: 20em;\r\n  height: 8em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 2em;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n}\r\n\r\n.cat-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.cat-popup-div img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.cat-popup-div {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup-div-p {\r\n  font-size: 32px;\r\n}\r\n\r\n.cont-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup h2 {\r\n  margin-top: 2em;\r\n  font-size: 2em;\r\n}\r\n\r\n.cont-popup-div {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.cont-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.Ingredients {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.Ingredients ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.Ingredients ul li {\r\n  padding-bottom: 5em;\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n\r\n.Ingredients ul li img {\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n\r\n.Ingredients ul li h3 {\r\n  text-align: center;\r\n}\r\n\r\n.fa-times {\r\n  position: fixed;\r\n  top: 0.2em;\r\n  right: 1em;\r\n  color: var(--black);\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap\");\r\n\r\n:root {\r\n  --orange: #d57d1f;\r\n  --black: rgb(25, 42, 86, 0.9);\r\n  --light-color: #666;\r\n  --box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\r\n  --font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Poppins\", sans-serif;\r\n  background: white;\r\n  height: 100vh;\r\n  background-color: #eee;\r\n  color: var(--black);\r\n}\r\n\r\nheader {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  box-shadow: var(--box-shadow);\r\n  width: 100%;\r\n  padding: 0.5em;\r\n  background-color: white;\r\n}\r\n\r\n.fa-cutlery {\r\n  color: var(--black);\r\n  font-size: 1.3em;\r\n}\r\n\r\n.meal-popup h4 span {\r\n  text-align: left;\r\n  font-weight: 500;\r\n  font-size: 1em;\r\n  margin-left: 0.3em;\r\n}\r\n\r\nheader .logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\nheader .logo h1 {\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  line-height: 1em;\r\n  margin: 0 1.5em 0 0.3em;\r\n}\r\n\r\nheader .logo h1 span {\r\n  text-align: center;\r\n  color: var(--orange);\r\n}\r\n\r\nheader nav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style: none;\r\n}\r\n\r\nheader nav ul li {\r\n  padding-left: 1em;\r\n  cursor: pointer;\r\n}\r\n\r\nheader nav ul #meals {\r\n  margin: 0 1em 0 -3.5em;\r\n  font-weight: 500;\r\n  font-size: 1.1em;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  place-items: center;\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n  height: 5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\nfooter h2 {\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.home {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  margin: 8em 0;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup p {\r\n  margin-right: 2em;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.meal-popup p {\r\n  text-align: left;\r\n  margin: 1em 1em;\r\n  line-height: 2em;\r\n  font-size: 1.1em;\r\n  font-weight: 500;\r\n}\r\n\r\n.meal {\r\n  display: grid;\r\n  grid-template-rows: auto 25% 25%;\r\n  margin: 0 1em 5em 0;\r\n  width: 20em;\r\n  height: 33em;\r\n  background-color: white;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.meal .div-like {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: auto 0;\r\n  width: 100%;\r\n}\r\n\r\n.meal .div-like p {\r\n  text-align: left;\r\n  margin-left: 1em;\r\n  font-size: 1.2em;\r\n  font-weight: 500;\r\n}\r\n\r\n.div-heart {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 10em;\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart {\r\n  margin-left: 1em;\r\n  font-size: 1.7em;\r\n  cursor: pointer;\r\n  color: var(--orange);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:hover {\r\n  color: rgb(255, 165, 0, 0.7);\r\n}\r\n\r\n.meal .div-like .div-heart .fa-heart:active {\r\n  color: red;\r\n}\r\n\r\n.meal .div-like .div-heart label {\r\n  font-size: 1em;\r\n  color: var(--black);\r\n  margin-left: 1.2em;\r\n}\r\n\r\n.div-img {\r\n  place-self: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal img {\r\n  width: 17em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\nbutton {\r\n  text-align: center;\r\n  background-color: var(--black);\r\n  color: white;\r\n  width: 8em;\r\n  height: 2.5em;\r\n  font-weight: 500;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: medium;\r\n  place-self: center;\r\n  cursor: pointer;\r\n  margin-bottom: 3em;\r\n  border: none;\r\n  border-radius: 0.5em;\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n.random h2 {\r\n  margin: 3em 0 -3em 0;\r\n  font-size: 1.7em;\r\n  text-align: center;\r\n}\r\n\r\n.meal-popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  box-shadow: var(--box-shadow);\r\n  background-color: rgb(241, 240, 240);\r\n}\r\n\r\n.meal-popup h2 {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 2.5em;\r\n}\r\n\r\n.meal-popup h4 {\r\n  text-align: left;\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n  margin: 1em 1em;\r\n}\r\n\r\n/*\r\n.meal-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n*/\r\n.meal-popup-div-img {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 1em auto;\r\n}\r\n\r\n.meal-popup-div-img img {\r\n  width: 35em;\r\n  height: 30em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.meal-popup-comments-title {\r\n  margin-left: 1em;\r\n}\r\n\r\n.meal-popup-add-comment-form {\r\n  margin: 0 0 100px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.meal-popup-add-comment-form-username {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n  width: 20em;\r\n}\r\n\r\n.meal-popup-add-comment-form-comment {\r\n  padding: 0.4em;\r\n  border: 2px solid var(--black);\r\n  border-radius: 0.3em;\r\n  width: 20em;\r\n  height: 8em;\r\n  margin-bottom: 1em;\r\n  font-family: var(--font-family);\r\n}\r\n\r\n@keyframes change-color {\r\n  0% {\r\n    color: red;\r\n  }\r\n\r\n  100% {\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n.meal-popup-add-comment-form-res {\r\n  animation-name: change-color;\r\n  animation-duration: 5s;\r\n  font-size: 16px;\r\n  width: 256px;\r\n  font-weight: 300;\r\n  color: transparent;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 2em;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n}\r\n\r\n.cat-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.cat-popup-div img {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.cat-popup-div {\r\n  margin: 10px 50px 10px 50px;\r\n  text-align: center;\r\n}\r\n\r\n.cat-popup-div-p {\r\n  font-size: 32px;\r\n}\r\n\r\n.cont-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: rgb(241, 240, 240);\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n  z-index: 999;\r\n  padding: 0 32px 0 32px;\r\n  width: 100%;\r\n}\r\n\r\n.cont-popup h2 {\r\n  margin-top: 2em;\r\n  font-size: 2em;\r\n}\r\n\r\n.cont-popup-div {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.cont-popup-close-icon {\r\n  font-size: 32px;\r\n  color: black;\r\n  position: fixed;\r\n  top: 18px;\r\n  right: 28px;\r\n}\r\n\r\n.Ingredients {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.Ingredients ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.Ingredients ul li {\r\n  padding-bottom: 5em;\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n\r\n.Ingredients ul li img {\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n\r\n.Ingredients ul li h3 {\r\n  text-align: center;\r\n}\r\n\r\n.fa-times {\r\n  position: fixed;\r\n  top: 0.2em;\r\n  right: 1em;\r\n  color: var(--black);\r\n  font-size: 2em;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _module_show_popup_categories_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/show-popup-categories.js */ "./src/module/show-popup-categories.js");
/* harmony import */ var _module_show_popup_contacts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/show-popup-contacts.js */ "./src/module/show-popup-contacts.js");





(0,_module_display_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

const menuLogo = document.querySelector('.logo');
menuLogo.addEventListener('click', () => {
  (0,_module_display_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

const menuMeals = document.getElementById('meals');
menuMeals.addEventListener('click', () => {
  (0,_module_display_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

const menuCat = document.getElementById('categories');
menuCat.addEventListener('click', () => {
  (0,_module_show_popup_categories_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

const menuCont = document.getElementById('contacts');
menuCont.addEventListener('click', () => {
  (0,_module_show_popup_contacts_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});


/***/ }),

/***/ "./src/module/add-like.js":
/*!********************************!*\
  !*** ./src/module/add-like.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

async function addLike(id) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/otoY0fxXk5LjLMlhzjv8/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);

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

  (0,_show_comments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(itemId);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewComment);


/***/ }),

/***/ "./src/module/count-items.js":
/*!***********************************!*\
  !*** ./src/module/count-items.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const count = (parent) => parent.childElementCount;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (count);

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
/* harmony import */ var _add_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-like.js */ "./src/module/add-like.js");
/* harmony import */ var _count_items_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count-items.js */ "./src/module/count-items.js");
/* harmony import */ var _display_likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-likes.js */ "./src/module/display-likes.js");




// import displayComments from './display-comments.js';

async function getData(filter = '') {
  let response;
  if (filter === '') {
    response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
  } else {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`);
  }
  const data = await response.json();
  const lengthData = data.meals.length;
  const header = document.querySelector('.head');
  const random = document.querySelector('.random');
  const listSection = document.querySelector('.home');
  listSection.before(header);
  listSection.before(random);
  listSection.replaceChildren();
  for (let i = 0; i < lengthData; i += 1) {
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

    const div3 = document.createElement('div');
    div3.className = 'div-heart';
    div3.id = 'div-heart';
    div2.appendChild(div3);

    // # likes
    const like = document.createElement('i');
    like.className = 'fa-solid fa-heart';
    like.id = data.meals[i].idMeal;
    div3.appendChild(like);

    (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.meals[i].idMeal);

    const likeCount = document.createElement('label');
    likeCount.id = `id${data.meals[i].idMeal}`;
    likeCount.innerHTML = '';
    div3.appendChild(likeCount);

    const button = document.createElement('button');
    button.id = data.meals[i].idMeal;
    button.innerHTML = 'Comment';
    list.appendChild(button);

    listSection.append(list);

    button.addEventListener('click', (e) => {
      const { id } = e.target;
      (0,_show_popup_comment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
    });

    like.addEventListener('click', (e) => {
      const { id } = e.target;
      (0,_add_like_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
      (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
    });
  }
  const parent = document.getElementById('data');
  const counter = document.getElementById('meals');
  counter.innerHTML = `Meals (${(0,_count_items_js__WEBPACK_IMPORTED_MODULE_2__["default"])(parent)})`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);


/***/ }),

/***/ "./src/module/display-likes.js":
/*!*************************************!*\
  !*** ./src/module/display-likes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function showlikes(id) {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/otoY0fxXk5LjLMlhzjv8/likes',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  try {
    const data = await response.json();
    const likeCount = document.getElementById(`id${id}`);
    data.map((like) => {
      if (like.item_id === id) {
        likeCount.textContent = `${like.likes} likes`;
      }
      return true;
    });
  } catch (err) {
    // do nothing
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showlikes);

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
async function showCommentsList(id) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  const mealBtn = document.getElementById(id);
  if (mealBtn) {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

    try {
      const data = await response.json();

      const parent = document.querySelector('.meal-popup-comments-container');
      parent.innerHTML = '';
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCommentsList);


/***/ }),

/***/ "./src/module/show-popup-categories.js":
/*!*********************************************!*\
  !*** ./src/module/show-popup-categories.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-home.js */ "./src/module/display-home.js");


async function showPopupCategories() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();

  const mainSection = document.querySelector('header');
  const cat = document.createElement('div');
  cat.className = 'cat-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'cat-popup-close-icon fa fa-times';
  cat.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    cat.remove();
  });

  data.categories.forEach((dataCat) => {
    const div = document.createElement('div');
    div.className = 'cat-popup-div';
    cat.appendChild(div);

    const divImg = document.createElement('div');
    divImg.className = 'cat-popup-div-img';
    cat.appendChild(divImg);

    const img = document.createElement('img');
    img.src = `${dataCat.strCategoryThumb}`;
    div.appendChild(img);

    const p1 = document.createElement('h2');
    p1.textContent = `${dataCat.strCategory}`;
    div.appendChild(p1);

    img.addEventListener('click', () => {
      (0,_display_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCat.strCategory);
      cat.remove();
    });

    mainSection.appendChild(cat);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopupCategories);


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
  closeIcon.className = 'fa fa-times';
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

  const IngredientsDiv = document.createElement('div');
  IngredientsDiv.className = 'Ingredients';
  meal.appendChild(IngredientsDiv);

  const Ingredients = document.createElement('ul');
  IngredientsDiv.appendChild(Ingredients);

  for (let i = 9; i < 29; i += 1) {
    const value = Object.values(data.meals[0])[i];
    if (value !== '') {
      const IngredientsItems1 = document.createElement('li');
      Ingredients.appendChild(IngredientsItems1);

      const imgIngredients1 = document.createElement('img');
      imgIngredients1.src = `https://www.themealdb.com/images/ingredients/${value}.png`;
      IngredientsItems1.appendChild(imgIngredients1);

      const IngredientsName1 = document.createElement('h3');
      IngredientsName1.textContent = value;
      IngredientsItems1.appendChild(IngredientsName1);
    }
  }

  const Category = document.createElement('h4');
  Category.textContent = 'Category: ';
  meal.appendChild(Category);

  const CategorySpan1 = document.createElement('span');
  CategorySpan1.textContent = data.meals[0].strCategory;
  Category.appendChild(CategorySpan1);

  const Area = document.createElement('h4');
  Area.textContent = 'Area: ';
  meal.appendChild(Area);

  const CategorySpan2 = document.createElement('span');
  CategorySpan2.textContent = data.meals[0].strArea;
  Area.appendChild(CategorySpan2);

  const d = document.createElement('p');
  d.textContent = `${data.meals[0].strInstructions}`;
  meal.appendChild(d);

  // Comments
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'meal-popup-comments-container';
  meal.appendChild(commentsContainer);

  (0,_show_comments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);

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


/***/ }),

/***/ "./src/module/show-popup-contacts.js":
/*!*******************************************!*\
  !*** ./src/module/show-popup-contacts.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showPopupContacts = () => {
  const mainSection = document.querySelector('header');
  const cont = document.createElement('div');
  cont.className = 'cont-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'cont-popup-close-icon fa fa-times';
  cont.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    cont.remove();
  });

  const p1 = document.createElement('h2');
  p1.textContent = 'Contacts:';
  cont.appendChild(p1);

  const div = document.createElement('div');
  div.className = 'cont-popup-div';
  cont.appendChild(div);

  const div1 = document.createElement('div');
  div.appendChild(div1);

  const p2 = document.createElement('p');
  p2.className = 'cont-popup-p';
  p2.innerHTML = ` 
  👤 Odai Alazzeh <br>
      GitHub: @odaialazzeh <br>
      Twitter: @odaialazzeh4 <br>
      <a href="https://www.linkedin.com/in/odai-alazzeh-01546024a/">LinkedIn</a>`;
  div1.appendChild(p2);

  const div2 = document.createElement('div');
  div.appendChild(div2);

  const p3 = document.createElement('p');
  p3.className = 'cont-popup-p';
  p3.innerHTML = ` 
  👤 Sergiy Shkolnik <br>
  GitHub: @SergSkol <br>
  Twitter: @sps676 <br>
  <a href="https://www.linkedin.com/in/sergiy-shkolnik-7801a53/">LinkedIn</a>`;
  div2.appendChild(p3);

  mainSection.appendChild(cont);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopupContacts);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxLQUFLLEtBQUssVUFB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9hZGQtbGlrZS5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9hZGQtbmV3LWNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvY291bnQtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvZGlzcGxheS1ob21lLmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL2Rpc3BsYXktbGlrZXMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvc2hvdy1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9KUy1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZS9zaG93LXBvcHVwLWNhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vSlMtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGUvc2hvdy1wb3B1cC1jb21tZW50LmpzIiwid2VicGFjazovL0pTLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlL3Nob3ctcG9wdXAtY29udGFjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMTAwOzMwMDs0MDA7NzAwOzkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1vcmFuZ2U6ICNkNTdkMWY7XFxyXFxuICAtLWJsYWNrOiByZ2IoMjUsIDQyLCA4NiwgMC45KTtcXHJcXG4gIC0tbGlnaHQtY29sb3I6ICM2NjY7XFxyXFxuICAtLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAtLWZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWN1dGxlcnkge1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIGg0IHNwYW4ge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28gaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxyXFxuICBtYXJnaW46IDAgMS41ZW0gMCAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHNwYW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsICNtZWFscyB7XFxyXFxuICBtYXJnaW46IDAgMWVtIDAgLTMuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGgyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDhlbSAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwIHAge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cCBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBtYXJnaW46IDFlbSAxZW07XFxyXFxuICBsaW5lLWhlaWdodDogMmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMjUlIDI1JTtcXHJcXG4gIG1hcmdpbjogMCAxZW0gNWVtIDA7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG4gIGhlaWdodDogMzNlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5kaXYtaGVhcnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5kaXYtaGVhcnQgLmZhLWhlYXJ0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxuICBmb250LXNpemU6IDEuN2VtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZGl2LWhlYXJ0IC5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMTY1LCAwLCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCAuZmEtaGVhcnQ6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZGl2LWhlYXJ0IGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi1pbWcge1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgaW1nIHtcXHJcXG4gIHdpZHRoOiAxN2VtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogOGVtO1xcclxcbiAgaGVpZ2h0OiAyLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tIGgyIHtcXHJcXG4gIG1hcmdpbjogM2VtIDAgLTNlbSAwO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDAsIDI0MCk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAgaDQge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIG1hcmdpbjogMWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4ubWVhbC1wb3B1cC1jbG9zZS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMThweDtcXHJcXG4gIHJpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG4qL1xcclxcbi5tZWFsLXBvcHVwLWRpdi1pbWcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWRpdi1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAzNWVtO1xcclxcbiAgaGVpZ2h0OiAzMGVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWNvbW1lbnRzLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0ge1xcclxcbiAgbWFyZ2luOiAwIDAgMTAwcHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS11c2VybmFtZSB7XFxyXFxuICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLWNvbW1lbnQge1xcclxcbiAgcGFkZGluZzogMC40ZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbiAgaGVpZ2h0OiA4ZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZS1jb2xvciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tcmVzIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2UtY29sb3I7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgd2lkdGg6IDI1NnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDAsIDI0MCk7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAtY2xvc2UtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDE4cHg7XFxyXFxuICByaWdodDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cC1kaXYgaW1nIHtcXHJcXG4gIG1hcmdpbjogMTBweCA1MHB4IDEwcHggNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cC1kaXYge1xcclxcbiAgbWFyZ2luOiAxMHB4IDUwcHggMTBweCA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0LXBvcHVwLWRpdi1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MCwgMjQwKTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHBhZGRpbmc6IDAgMzJweCAwIDMycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtcG9wdXAgaDIge1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtcG9wdXAtY2xvc2UtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDE4cHg7XFxyXFxuICByaWdodDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uSW5ncmVkaWVudHMgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uSW5ncmVkaWVudHMgdWwgbGkge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVlbTtcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAxMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uSW5ncmVkaWVudHMgdWwgbGkgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAxMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uSW5ncmVkaWVudHMgdWwgbGkgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdGltZXMge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwLjJlbTtcXHJcXG4gIHJpZ2h0OiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0Msb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsU0FBUztFQUNULGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIs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QUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMTAwOzMwMDs0MDA7NzAwOzkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1vcmFuZ2U6ICNkNTdkMWY7XFxyXFxuICAtLWJsYWNrOiByZ2IoMjUsIDQyLCA4NiwgMC45KTtcXHJcXG4gIC0tbGlnaHQtY29sb3I6ICM2NjY7XFxyXFxuICAtLWJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAtLWZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWN1dGxlcnkge1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIGg0IHNwYW4ge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmxvZ28gaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxyXFxuICBtYXJnaW46IDAgMS41ZW0gMCAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5sb2dvIGgxIHNwYW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsIGxpIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsICNtZWFscyB7XFxyXFxuICBtYXJnaW46IDAgMWVtIDAgLTMuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGgyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDhlbSAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwIHAge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cCBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBtYXJnaW46IDFlbSAxZW07XFxyXFxuICBsaW5lLWhlaWdodDogMmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMjUlIDI1JTtcXHJcXG4gIG1hcmdpbjogMCAxZW0gNWVtIDA7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG4gIGhlaWdodDogMzNlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5kaXYtaGVhcnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgLmRpdi1saWtlIC5kaXYtaGVhcnQgLmZhLWhlYXJ0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxuICBmb250LXNpemU6IDEuN2VtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZGl2LWhlYXJ0IC5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMTY1LCAwLCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbCAuZGl2LWxpa2UgLmRpdi1oZWFydCAuZmEtaGVhcnQ6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsIC5kaXYtbGlrZSAuZGl2LWhlYXJ0IGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi1pbWcge1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwgaW1nIHtcXHJcXG4gIHdpZHRoOiAxN2VtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogOGVtO1xcclxcbiAgaGVpZ2h0OiAyLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFuZG9tIGgyIHtcXHJcXG4gIG1hcmdpbjogM2VtIDAgLTNlbSAwO1xcclxcbiAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDAsIDI0MCk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAyLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAgaDQge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIG1hcmdpbjogMWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4ubWVhbC1wb3B1cC1jbG9zZS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMThweDtcXHJcXG4gIHJpZ2h0OiAyOHB4O1xcclxcbn1cXHJcXG4qL1xcclxcbi5tZWFsLXBvcHVwLWRpdi1pbWcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWRpdi1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiAzNWVtO1xcclxcbiAgaGVpZ2h0OiAzMGVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWNvbW1lbnRzLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0ge1xcclxcbiAgbWFyZ2luOiAwIDAgMTAwcHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS11c2VybmFtZSB7XFxyXFxuICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLWNvbW1lbnQge1xcclxcbiAgcGFkZGluZzogMC40ZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbiAgaGVpZ2h0OiA4ZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZS1jb2xvciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tcmVzIHtcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2UtY29sb3I7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgd2lkdGg6IDI1NnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDAsIDI0MCk7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbi5jYXQtcG9wdXAtY2xvc2UtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDE4cHg7XFxyXFxuICByaWdodDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cC1kaXYgaW1nIHtcXHJcXG4gIG1hcmdpbjogMTBweCA1MHB4IDEwcHggNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdC1wb3B1cC1kaXYge1xcclxcbiAgbWFyZ2luOiAxMHB4IDUwcHggMTBweCA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0LXBvcHVwLWRpdi1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MCwgMjQwKTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHBhZGRpbmc6IDAgMzJweCAwIDMycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtcG9wdXAgaDIge1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250LXBvcHVwLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnQtcG9wdXAtY2xvc2UtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDE4cHg7XFxyXFxuICByaWdodDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLkluZ3JlZGllbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uSW5ncmVkaWVudHMgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uSW5ncmVkaWVudHMgdWwgbGkge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVlbTtcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAxMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uSW5ncmVkaWVudHMgdWwgbGkgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAxMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uSW5ncmVkaWVudHMgdWwgbGkgaDMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdGltZXMge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwLjJlbTtcXHJcXG4gIHJpZ2h0OiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGUvZGlzcGxheS1ob21lLmpzJztcbmltcG9ydCBzaG93UG9wdXBDYXRlZ29yaWVzIGZyb20gJy4vbW9kdWxlL3Nob3ctcG9wdXAtY2F0ZWdvcmllcy5qcyc7XG5pbXBvcnQgc2hvd1BvcHVwQ29udGFjdHMgZnJvbSAnLi9tb2R1bGUvc2hvdy1wb3B1cC1jb250YWN0cy5qcyc7XG5cbmdldERhdGEoKTtcblxuY29uc3QgbWVudUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xubWVudUxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGdldERhdGEoKTtcbn0pO1xuXG5jb25zdCBtZW51TWVhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbHMnKTtcbm1lbnVNZWFscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2V0RGF0YSgpO1xufSk7XG5cbmNvbnN0IG1lbnVDYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcmllcycpO1xubWVudUNhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2hvd1BvcHVwQ2F0ZWdvcmllcygpO1xufSk7XG5cbmNvbnN0IG1lbnVDb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzJyk7XG5tZW51Q29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2hvd1BvcHVwQ29udGFjdHMoKTtcbn0pO1xuIiwiXG5hc3luYyBmdW5jdGlvbiBhZGRMaWtlKGlkKSB7XG4gIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9vdG9ZMGZ4WGs1TGpMTWxoemp2OC9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZExpa2U7IiwiaW1wb3J0IHNob3dDb21tZW50c0xpc3QgZnJvbSAnLi9zaG93LWNvbW1lbnRzLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gYWRkTmV3Q29tbWVudChpdGVtSWQsIHVzZXJuYW1lLCBjb21tZW50KSB7XG4gIGNvbnN0IGFwaUtleSA9ICd0bkUyazZQNUJkWjJIQ1RqYmQwVic7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBpS2V5fS9jb21tZW50cy9gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBjb21tZW50LFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuICBhd2FpdCByZXNwb25zZTtcblxuICBzaG93Q29tbWVudHNMaXN0KGl0ZW1JZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE5ld0NvbW1lbnQ7XG4iLCJjb25zdCBjb3VudCA9IChwYXJlbnQpID0+IHBhcmVudC5jaGlsZEVsZW1lbnRDb3VudDtcblxuZXhwb3J0IGRlZmF1bHQgY291bnQ7IiwiaW1wb3J0IHNob3dQb3B1cENvbW1lbnQgZnJvbSAnLi9zaG93LXBvcHVwLWNvbW1lbnQuanMnO1xuaW1wb3J0IGFkZExpa2UgZnJvbSAnLi9hZGQtbGlrZS5qcyc7XG5pbXBvcnQgY291bnQgZnJvbSAnLi9jb3VudC1pdGVtcy5qcyc7XG5pbXBvcnQgc2hvd2xpa2VzIGZyb20gJy4vZGlzcGxheS1saWtlcy5qcyc7XG4vLyBpbXBvcnQgZGlzcGxheUNvbW1lbnRzIGZyb20gJy4vZGlzcGxheS1jb21tZW50cy5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoZmlsdGVyID0gJycpIHtcbiAgbGV0IHJlc3BvbnNlO1xuICBpZiAoZmlsdGVyID09PSAnJykge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP3MnKTtcbiAgfSBlbHNlIHtcbiAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9jPSR7ZmlsdGVyfWApO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGxlbmd0aERhdGEgPSBkYXRhLm1lYWxzLmxlbmd0aDtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWQnKTtcbiAgY29uc3QgcmFuZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbScpO1xuICBjb25zdCBsaXN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gIGxpc3RTZWN0aW9uLmJlZm9yZShoZWFkZXIpO1xuICBsaXN0U2VjdGlvbi5iZWZvcmUocmFuZG9tKTtcbiAgbGlzdFNlY3Rpb24ucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoRGF0YTsgaSArPSAxKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3QuY2xhc3NOYW1lID0gJ21lYWwnO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdkaXYtaW1nJztcbiAgICBsaXN0LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBjb25zdCBkZXNjcnB0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlc2NycHQxLnNyYyA9IGAke2RhdGEubWVhbHNbaV0uc3RyTWVhbFRodW1ifWA7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlc2NycHQxKTtcblxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYyLmNsYXNzTmFtZSA9ICdkaXYtbGlrZSc7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChkaXYyKTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IGAke2RhdGEubWVhbHNbaV0uc3RyTWVhbH1gO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2My5jbGFzc05hbWUgPSAnZGl2LWhlYXJ0JztcbiAgICBkaXYzLmlkID0gJ2Rpdi1oZWFydCc7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChkaXYzKTtcblxuICAgIC8vICMgbGlrZXNcbiAgICBjb25zdCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGxpa2UuY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWhlYXJ0JztcbiAgICBsaWtlLmlkID0gZGF0YS5tZWFsc1tpXS5pZE1lYWw7XG4gICAgZGl2My5hcHBlbmRDaGlsZChsaWtlKTtcblxuICAgIHNob3dsaWtlcyhkYXRhLm1lYWxzW2ldLmlkTWVhbCk7XG5cbiAgICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxpa2VDb3VudC5pZCA9IGBpZCR7ZGF0YS5tZWFsc1tpXS5pZE1lYWx9YDtcbiAgICBsaWtlQ291bnQuaW5uZXJIVE1MID0gJyc7XG4gICAgZGl2My5hcHBlbmRDaGlsZChsaWtlQ291bnQpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlkID0gZGF0YS5tZWFsc1tpXS5pZE1lYWw7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICdDb21tZW50JztcbiAgICBsaXN0LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBsaXN0U2VjdGlvbi5hcHBlbmQobGlzdCk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQ7XG4gICAgICBzaG93UG9wdXBDb21tZW50KGlkKTtcbiAgICB9KTtcblxuICAgIGxpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQ7XG4gICAgICBhZGRMaWtlKGlkKTtcbiAgICAgIHNob3dsaWtlcyhpZCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEnKTtcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFscycpO1xuICBjb3VudGVyLmlubmVySFRNTCA9IGBNZWFscyAoJHtjb3VudChwYXJlbnQpfSlgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhO1xuIiwiYXN5bmMgZnVuY3Rpb24gc2hvd2xpa2VzKGlkKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL290b1kwZnhYazVMakxNbGh6anY4L2xpa2VzJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KTtcblxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgbGlrZUNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlkJHtpZH1gKTtcbiAgICBkYXRhLm1hcCgobGlrZSkgPT4ge1xuICAgICAgaWYgKGxpa2UuaXRlbV9pZCA9PT0gaWQpIHtcbiAgICAgICAgbGlrZUNvdW50LnRleHRDb250ZW50ID0gYCR7bGlrZS5saWtlc30gbGlrZXNgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93bGlrZXM7IiwiYXN5bmMgZnVuY3Rpb24gc2hvd0NvbW1lbnRzTGlzdChpZCkge1xuICBjb25zdCBhcGlLZXkgPSAndG5FMms2UDVCZFoySENUamJkMFYnO1xuICBjb25zdCBtZWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpZiAobWVhbEJ0bikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBpS2V5fS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbC1wb3B1cC1jb21tZW50cy1jb250YWluZXInKTtcbiAgICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWNvbW1lbnRzLXRpdGxlJztcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtkYXRhLmxlbmd0aCB8fCAwfSlgO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbW1lbnRSb3cuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtY29tbWVudHMtcm93JztcbiAgICAgICAgY29tbWVudFJvdy5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fSBgO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29tbWVudFJvdyk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0NvbW1lbnRzTGlzdDtcbiIsImltcG9ydCBnZXREYXRhIGZyb20gJy4vZGlzcGxheS1ob21lLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gc2hvd1BvcHVwQ2F0ZWdvcmllcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2NhdGVnb3JpZXMucGhwJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3QgY2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhdC5jbGFzc05hbWUgPSAnY2F0LXBvcHVwJztcblxuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNsb3NlSWNvbi5jbGFzc05hbWUgPSAnY2F0LXBvcHVwLWNsb3NlLWljb24gZmEgZmEtdGltZXMnO1xuICBjYXQuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2F0LnJlbW92ZSgpO1xuICB9KTtcblxuICBkYXRhLmNhdGVnb3JpZXMuZm9yRWFjaCgoZGF0YUNhdCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnY2F0LXBvcHVwLWRpdic7XG4gICAgY2F0LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBjb25zdCBkaXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZJbWcuY2xhc3NOYW1lID0gJ2NhdC1wb3B1cC1kaXYtaW1nJztcbiAgICBjYXQuYXBwZW5kQ2hpbGQoZGl2SW1nKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBgJHtkYXRhQ2F0LnN0ckNhdGVnb3J5VGh1bWJ9YDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwMS50ZXh0Q29udGVudCA9IGAke2RhdGFDYXQuc3RyQ2F0ZWdvcnl9YDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocDEpO1xuXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2V0RGF0YShkYXRhQ2F0LnN0ckNhdGVnb3J5KTtcbiAgICAgIGNhdC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGNhdCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93UG9wdXBDYXRlZ29yaWVzO1xuIiwiaW1wb3J0IGFkZE5ld0NvbW1lbnQgZnJvbSAnLi9hZGQtbmV3LWNvbW1lbnQuanMnO1xuaW1wb3J0IHNob3dDb21tZW50c0xpc3QgZnJvbSAnLi9zaG93LWNvbW1lbnRzLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gc2hvd1BvcHVwQ29tbWVudChpZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7aWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwJztcblxuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNsb3NlSWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtdGltZXMnO1xuICBtZWFsLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgY2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1lYWwucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtZGl2LWltZyc7XG4gIG1lYWwuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9IGAke2RhdGEubWVhbHNbMF0uc3RyTWVhbFRodW1ifWA7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcDEudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1lYWxzWzBdLnN0ck1lYWx9YDtcbiAgbWVhbC5hcHBlbmRDaGlsZChwMSk7XG5cbiAgY29uc3QgSW5ncmVkaWVudHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgSW5ncmVkaWVudHNEaXYuY2xhc3NOYW1lID0gJ0luZ3JlZGllbnRzJztcbiAgbWVhbC5hcHBlbmRDaGlsZChJbmdyZWRpZW50c0Rpdik7XG5cbiAgY29uc3QgSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBJbmdyZWRpZW50c0Rpdi5hcHBlbmRDaGlsZChJbmdyZWRpZW50cyk7XG5cbiAgZm9yIChsZXQgaSA9IDk7IGkgPCAyOTsgaSArPSAxKSB7XG4gICAgY29uc3QgdmFsdWUgPSBPYmplY3QudmFsdWVzKGRhdGEubWVhbHNbMF0pW2ldO1xuICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IEluZ3JlZGllbnRzSXRlbXMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIEluZ3JlZGllbnRzLmFwcGVuZENoaWxkKEluZ3JlZGllbnRzSXRlbXMxKTtcblxuICAgICAgY29uc3QgaW1nSW5ncmVkaWVudHMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbWdJbmdyZWRpZW50czEuc3JjID0gYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vaW1hZ2VzL2luZ3JlZGllbnRzLyR7dmFsdWV9LnBuZ2A7XG4gICAgICBJbmdyZWRpZW50c0l0ZW1zMS5hcHBlbmRDaGlsZChpbWdJbmdyZWRpZW50czEpO1xuXG4gICAgICBjb25zdCBJbmdyZWRpZW50c05hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIEluZ3JlZGllbnRzTmFtZTEudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIEluZ3JlZGllbnRzSXRlbXMxLmFwcGVuZENoaWxkKEluZ3JlZGllbnRzTmFtZTEpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IENhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgQ2F0ZWdvcnkudGV4dENvbnRlbnQgPSAnQ2F0ZWdvcnk6ICc7XG4gIG1lYWwuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnkpO1xuXG4gIGNvbnN0IENhdGVnb3J5U3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIENhdGVnb3J5U3BhbjEudGV4dENvbnRlbnQgPSBkYXRhLm1lYWxzWzBdLnN0ckNhdGVnb3J5O1xuICBDYXRlZ29yeS5hcHBlbmRDaGlsZChDYXRlZ29yeVNwYW4xKTtcblxuICBjb25zdCBBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgQXJlYS50ZXh0Q29udGVudCA9ICdBcmVhOiAnO1xuICBtZWFsLmFwcGVuZENoaWxkKEFyZWEpO1xuXG4gIGNvbnN0IENhdGVnb3J5U3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIENhdGVnb3J5U3BhbjIudGV4dENvbnRlbnQgPSBkYXRhLm1lYWxzWzBdLnN0ckFyZWE7XG4gIEFyZWEuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlTcGFuMik7XG5cbiAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZC50ZXh0Q29udGVudCA9IGAke2RhdGEubWVhbHNbMF0uc3RySW5zdHJ1Y3Rpb25zfWA7XG4gIG1lYWwuYXBwZW5kQ2hpbGQoZCk7XG5cbiAgLy8gQ29tbWVudHNcbiAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudHNDb250YWluZXIuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtY29tbWVudHMtY29udGFpbmVyJztcbiAgbWVhbC5hcHBlbmRDaGlsZChjb21tZW50c0NvbnRhaW5lcik7XG5cbiAgc2hvd0NvbW1lbnRzTGlzdChpZCk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtJztcbiAgbWVhbC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBmb3JtVGl0bGUuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS10aXRsZSc7XG4gIGZvcm1UaXRsZS5pbm5lckhUTUwgPSAnQWRkIGEgY29tbWVudCc7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICBjb25zdCBmb3JtVXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBmb3JtVXNlcm5hbWUuY2xhc3NOYW1lID0gJ21lYWwtcG9wdXAtYWRkLWNvbW1lbnQtZm9ybS11c2VybmFtZSc7XG4gIGZvcm1Vc2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgbmFtZScpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Vc2VybmFtZSk7XG5cbiAgY29uc3QgZm9ybUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBmb3JtQ29tbWVudC5jbGFzc05hbWUgPSAnbWVhbC1wb3B1cC1hZGQtY29tbWVudC1mb3JtLWNvbW1lbnQnO1xuICBmb3JtQ29tbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgaW5zaWdodHMnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQ29tbWVudCk7XG5cbiAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmb3JtQnRuLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tYnRuJztcbiAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgY29tbWVudCcpO1xuICBmb3JtQnRuLmlubmVySFRNTCA9ICdDb21tZW50JztcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnRuKTtcblxuICBjb25zdCBmb3JtUmVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb3JtUmVzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tcmVzJztcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUmVzQ29udGFpbmVyKTtcblxuICBmb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZvcm1Vc2VybmFtZS52YWx1ZSAmJiBmb3JtQ29tbWVudC52YWx1ZSkge1xuICAgICAgYWRkTmV3Q29tbWVudChpZCwgZm9ybVVzZXJuYW1lLnZhbHVlLCBmb3JtQ29tbWVudC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZvcm1SZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBmb3JtUmVzLmNsYXNzTmFtZSA9ICdtZWFsLXBvcHVwLWFkZC1jb21tZW50LWZvcm0tcmVzJztcbiAgICAgIGZvcm1SZXMuaW5uZXJIVE1MID0gJ1VzZXJuYW1lIGFuZCBjb21tZW50IHNob3VsZCBub3QgYmUgZW1wdHknO1xuICAgICAgZm9ybVJlc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIGZvcm1SZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVJlcyk7XG4gICAgfVxuICB9KTtcblxuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtZWFsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd1BvcHVwQ29tbWVudDtcbiIsImNvbnN0IHNob3dQb3B1cENvbnRhY3RzID0gKCkgPT4ge1xuICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICBjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnQuY2xhc3NOYW1lID0gJ2NvbnQtcG9wdXAnO1xuXG4gIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY2xvc2VJY29uLmNsYXNzTmFtZSA9ICdjb250LXBvcHVwLWNsb3NlLWljb24gZmEgZmEtdGltZXMnO1xuICBjb250LmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgY2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcDEudGV4dENvbnRlbnQgPSAnQ29udGFjdHM6JztcbiAgY29udC5hcHBlbmRDaGlsZChwMSk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSAnY29udC1wb3B1cC1kaXYnO1xuICBjb250LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZGl2MSk7XG5cbiAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAyLmNsYXNzTmFtZSA9ICdjb250LXBvcHVwLXAnO1xuICBwMi5pbm5lckhUTUwgPSBgIFxuICDwn5GkIE9kYWkgQWxhenplaCA8YnI+XG4gICAgICBHaXRIdWI6IEBvZGFpYWxhenplaCA8YnI+XG4gICAgICBUd2l0dGVyOiBAb2RhaWFsYXp6ZWg0IDxicj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vb2RhaS1hbGF6emVoLTAxNTQ2MDI0YS9cIj5MaW5rZWRJbjwvYT5gO1xuICBkaXYxLmFwcGVuZENoaWxkKHAyKTtcblxuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5hcHBlbmRDaGlsZChkaXYyKTtcblxuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDMuY2xhc3NOYW1lID0gJ2NvbnQtcG9wdXAtcCc7XG4gIHAzLmlubmVySFRNTCA9IGAgXG4gIPCfkaQgU2VyZ2l5IFNoa29sbmlrIDxicj5cbiAgR2l0SHViOiBAU2VyZ1Nrb2wgPGJyPlxuICBUd2l0dGVyOiBAc3BzNjc2IDxicj5cbiAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zZXJnaXktc2hrb2xuaWstNzgwMWE1My9cIj5MaW5rZWRJbjwvYT5gO1xuICBkaXYyLmFwcGVuZENoaWxkKHAzKTtcblxuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChjb250KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dQb3B1cENvbnRhY3RzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9