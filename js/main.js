/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_certificate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/certificate.js */ \"./src/js/module/certificate.js\");\n/* harmony import */ var _module_onClickHamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/onClickHamburger */ \"./src/js/module/onClickHamburger.js\");\n\r\n\r\n\r\n(0,_module_certificate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_module_onClickHamburger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/certificate.js":
/*!**************************************!*\
  !*** ./src/js/module/certificate.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_certificatePath_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/certificatePath.json */ \"./src/data/certificatePath.json\");\n/* harmony import */ var _changeDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeDisplay */ \"./src/js/module/changeDisplay.js\");\n/* harmony import */ var _disableElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disableElement */ \"./src/js/module/disableElement.js\");\n\r\n\r\n\r\n\r\nfunction createCertificate(pathToImg) {\r\n  const certificate = document.querySelector('.сertificate');\r\n  certificate.innerHTML = `<img class=\"certificate-img\" src=${pathToImg} alt=\"beOnMAX\" />`;\r\n}\r\n\r\nconst certificate = () => {\r\n  const certificateButtons = document.querySelectorAll('.certificate-button'),\r\n    modalCertificate = document.querySelector('.modal-certificate'),\r\n    overlayCertificate = modalCertificate.querySelector('.overlay_certificate'),\r\n    closeButton = modalCertificate.querySelector('.close');\r\n\r\n  certificateButtons.forEach((button) => {\r\n    let pathToImg = null;\r\n\r\n    //в зависимости от того какой дата атрибут у кнопки назначаем ей путь до картинки\r\n    switch (button.getAttribute('data-course')) {\r\n      case 'beonmax':\r\n        pathToImg = _data_certificatePath_json__WEBPACK_IMPORTED_MODULE_0__.beonmax;\r\n        break;\r\n\r\n      case 'rsstage0':\r\n        pathToImg = _data_certificatePath_json__WEBPACK_IMPORTED_MODULE_0__.rsstage0;\r\n        break;\r\n\r\n      case 'udemy':\r\n        pathToImg = _data_certificatePath_json__WEBPACK_IMPORTED_MODULE_0__.udemy;\r\n        break;\r\n    }\r\n\r\n    button.addEventListener('click', () => {\r\n      (0,_disableElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(button, 500);\r\n      (0,_changeDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(modalCertificate, 'block');\r\n      createCertificate(pathToImg);\r\n      setTimeout(() => overlayCertificate.classList.toggle('overlay_open'), 50);\r\n    });\r\n  });\r\n\r\n  closeButton.addEventListener('click', () => {\r\n    (0,_disableElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(closeButton, 1000);\r\n    overlayCertificate.classList.toggle('overlay_open');\r\n    setTimeout(() => (0,_changeDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(modalCertificate, 'none'), 500);\r\n  });\r\n\r\n  overlayCertificate.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('overlay_certificate')) {\r\n      (0,_disableElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(overlayCertificate, 500);\r\n      overlayCertificate.classList.toggle('overlay_open');\r\n      setTimeout(() => (0,_changeDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(modalCertificate, 'none'), 500);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (certificate);\r\n\n\n//# sourceURL=webpack://start/./src/js/module/certificate.js?");

/***/ }),

/***/ "./src/js/module/changeDisplay.js":
/*!****************************************!*\
  !*** ./src/js/module/changeDisplay.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction changeDisplay(element, condition) {\r\n  switch (condition) {\r\n    case 'block':\r\n      element.style.display = 'block';\r\n      break;\r\n    case 'none':\r\n      element.style.display = 'none';\r\n      break;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeDisplay);\r\n\n\n//# sourceURL=webpack://start/./src/js/module/changeDisplay.js?");

/***/ }),

/***/ "./src/js/module/disableElement.js":
/*!*****************************************!*\
  !*** ./src/js/module/disableElement.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst disableElement = (el, time) => {\r\n  el.style.pointerEvents = 'none';\r\n  setTimeout(() => (el.style.pointerEvents = 'auto'), time);\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (disableElement);\r\n\n\n//# sourceURL=webpack://start/./src/js/module/disableElement.js?");

/***/ }),

/***/ "./src/js/module/onClickHamburger.js":
/*!*******************************************!*\
  !*** ./src/js/module/onClickHamburger.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _disableElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disableElement */ \"./src/js/module/disableElement.js\");\n\r\n\r\nconst onClickHamburger = () => {\r\n  const hamburger = document.querySelector('.hamburger'),\r\n    hamburgerElements = hamburger.querySelectorAll('span'),\r\n    overlay = document.querySelector('.overlay_aside'),\r\n    menuList = document.querySelector('.aside__menu-list');\r\n\r\n  hamburger.addEventListener('click', () => {\r\n    (0,_disableElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hamburger, 400);\r\n    changeHamburgerView(hamburgerElements);\r\n    openMenu();\r\n  });\r\n\r\n  menuList.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('menu__link')) {\r\n      (0,_disableElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target, 400);\r\n      changeHamburgerView(hamburgerElements);\r\n      openMenu();\r\n    }\r\n  });\r\n\r\n  overlay.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('overlay')) {\r\n      (0,_disableElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(overlay, 400);\r\n      changeHamburgerView(hamburgerElements);\r\n      openMenu();\r\n    }\r\n  });\r\n};\r\n\r\nfunction changeHamburgerView(hamburgerElements) {\r\n  hamburgerElements.forEach((el, i) => {\r\n    if (i === 0 || i === 3) {\r\n      el.classList.toggle('hamburger__el_close');\r\n    }\r\n    if (i === 1) {\r\n      el.classList.toggle('hamburger__middle_close');\r\n    }\r\n    if (i === 2) {\r\n      el.classList.toggle('hamburger__visible_close');\r\n    }\r\n  });\r\n}\r\n\r\nfunction openMenu() {\r\n  const aside = document.querySelector('.aside'),\r\n    overlay = aside.querySelector('.overlay_aside'),\r\n    asideMenu = document.querySelector('.aside__menu'),\r\n    body = document.querySelector('body');\r\n\r\n  aside.classList.toggle('aside_open');\r\n  asideMenu.classList.toggle('aside__menu_open');\r\n  overlay.classList.toggle('overlay_open');\r\n  body.classList.toggle('overflowy_hidden');\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (onClickHamburger);\r\n\n\n//# sourceURL=webpack://start/./src/js/module/onClickHamburger.js?");

/***/ }),

/***/ "./src/data/certificatePath.json":
/*!***************************************!*\
  !*** ./src/data/certificatePath.json ***!
  \***************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"beonmax\":\"assets/img/beonmax.jpg\",\"rsstage0\":\"assets/img/rs-schoolstage0.jpg\",\"udemy\":\"assets/img/udemy.jpg\"}');\n\n//# sourceURL=webpack://start/./src/data/certificatePath.json?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;