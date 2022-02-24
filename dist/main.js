/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n#content {\\n  display: grid;\\n}\\n\\n.title {\\n  text-align: center;\\n  background: lightskyblue;\\n  padding: 20px;\\n}\\n\\n.copy {\\n  text-align: center;\\n  font-style: italic;\\n  padding: 20px;\\n}\\n\\n.tab-title {\\n  text-align: center;\\n  padding: 10px;\\n  padding-top: 0;\\n}\\n\\n.container {\\n  justify-self: center;\\n\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  gap: 10px;\\n\\n  padding: 10px;\\n  padding-bottom: 20px;\\n\\n  border-bottom: 1px solid black;\\n  width: 90%;\\n}\\n\\n.btn {\\n  background: lightcoral;\\n  padding: 10px;\\n  border-radius: 10px;\\n}\\n\\n/* HOME STYLING */\\n.container-home {\\n  display: grid;\\n}\\n\\n.home-hours-title {\\n  padding: 10px;\\n  text-align: center;\\n}\\n\\n.home-hours {\\n  text-align: center;\\n  padding: 5px 0 5px 0;\\n}\\n\\n/* MENU STYLING */\\n.container-menu {\\n  display: grid;\\n}\\n\\n.menu-category {\\n  text-align: center;\\n  padding: 10px;\\n}\\n\\n.menu-desc {\\n  text-align: center;\\n  padding: 10px;\\n}\\n\\n.item-container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.item-title {\\n  padding-left: 10px;\\n  justify-self: start;\\n}\\n\\n.item-descriptions {\\n  padding-left: 10px;\\n  font-style: italic;\\n}\\n\\n.item-price {\\n  padding: 10px;\\n  justify-self: end;\\n  align-self: center;\\n  grid-column: 2/3;\\n  grid-row: 1/3;\\n}\\n\\n/* CONTACT STYLING */\\n.container-contact {\\n  display: grid;\\n}\\n\\n.contact-us-info {\\n  text-align: center;\\n  padding: 10px;\\n}\\n\\n.contact-location,\\n.contact-phone,\\n.contact-email {\\n  text-align: center;\\n  font-style: italic;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page1/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page1/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ \"./src/modules.js\");\n\n\n\nconst btnListeners = () => {\n  const btnList = document.querySelectorAll(\".btn\");\n  btnList.forEach((btn) => {\n    btn.addEventListener(\"click\", switchTab);\n  });\n};\n\nconst switchTab = (e) => {\n  const text = e.target.textContent;\n  removeAllChildNodes(content);\n\n  if (text === \"HOME\") {\n    body.appendChild((0,_modules__WEBPACK_IMPORTED_MODULE_1__.module)());\n    btnListeners();\n  } else if (text === \"MENU\") {\n    body.appendChild((0,_modules__WEBPACK_IMPORTED_MODULE_1__.menuTab)());\n    btnListeners();\n  } else if (text === \"CONTACT\") {\n    body.appendChild((0,_modules__WEBPACK_IMPORTED_MODULE_1__.contactTab)());\n    btnListeners();\n  }\n};\n\nconst body = document.querySelector(\"body\");\nbody.appendChild((0,_modules__WEBPACK_IMPORTED_MODULE_1__.module)());\nbtnListeners();\n\nconst content = document.querySelector(\"#content\");\n\nconst removeAllChildNodes = (parent) => {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n};\n\nconst btnList = document.querySelectorAll(\".btn\");\nbtnList.forEach((btn) => {\n  btn.addEventListener(\"click\", switchTab);\n});\n\n\n//# sourceURL=webpack://restaurant-page1/./src/index.js?");

/***/ }),

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"module\": () => (/* binding */ module),\n/* harmony export */   \"menuTab\": () => (/* binding */ menuTab),\n/* harmony export */   \"contactTab\": () => (/* binding */ contactTab)\n/* harmony export */ });\nconst module = () => {\n  const content = document.querySelector(\"#content\");\n\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Igor's Italian Eatery\";\n  title.classList.add(\"title\");\n  content.appendChild(title);\n\n  const copy = document.createElement(\"p\");\n  copy.textContent = \"Best Food In Town!\";\n  copy.classList.add(\"copy\");\n  content.appendChild(copy);\n\n  const tab = document.createElement(\"h2\");\n  tab.textContent = \"Home\";\n  tab.classList.add(\"tab-title\");\n  content.appendChild(tab);\n\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.textContent = \"HOME\";\n  homeBtn.classList.add(\"btn\", \"btn-home\");\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.textContent = \"MENU\";\n  menuBtn.classList.add(\"btn\", \"btn-menu\");\n\n  const contactBtn = document.createElement(\"button\");\n  contactBtn.textContent = \"CONTACT\";\n  contactBtn.classList.add(\"btn\", \"btn-contact\");\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n  container.appendChild(homeBtn);\n  container.appendChild(menuBtn);\n  container.appendChild(contactBtn);\n  content.appendChild(container);\n\n  // divisor\n\n  const homeContainer = document.createElement(\"div\");\n  homeContainer.classList.add(\"container-home\");\n\n  const homeHoursTitle = document.createElement(\"h3\");\n  homeHoursTitle.textContent = \"Hours\";\n  homeHoursTitle.classList.add(\"home-hours-title\");\n  homeContainer.appendChild(homeHoursTitle);\n\n  const openingHours = [\n    \"Mon: 10a - 6p\",\n    \"Tue: 10a - 6p\",\n    \"Wed: 10a - 6p\",\n    \"Thu: 10a - 6p\",\n    \"Fri: 10a - 6p\",\n    \"Sat: 2p - 6p\",\n    \"Sun: CLOSED\",\n  ];\n\n  const homeHoursContainer = document.createElement(\"div\");\n\n  openingHours.forEach((hour) => {\n    const hourDay = document.createElement(\"p\");\n    hourDay.textContent = hour;\n    hourDay.classList.add(\"home-hours\");\n    homeHoursContainer.appendChild(hourDay);\n  });\n\n  homeContainer.appendChild(homeHoursContainer);\n\n  content.appendChild(homeContainer);\n\n  return content;\n};\n\nconst menuTab = () => {\n  const content = document.querySelector(\"#content\");\n\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Igor's Italian Eatery\";\n  title.classList.add(\"title\");\n  content.appendChild(title);\n\n  const copy = document.createElement(\"p\");\n  copy.textContent = \"Best Food In Town!\";\n  copy.classList.add(\"copy\");\n  content.appendChild(copy);\n\n  const tab = document.createElement(\"h2\");\n  tab.textContent = \"Menu\";\n  tab.classList.add(\"tab-title\");\n  content.appendChild(tab);\n\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.textContent = \"HOME\";\n  homeBtn.classList.add(\"btn\", \"btn-home\");\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.textContent = \"MENU\";\n  menuBtn.classList.add(\"btn\", \"btn-menu\");\n\n  const contactBtn = document.createElement(\"button\");\n  contactBtn.textContent = \"CONTACT\";\n  contactBtn.classList.add(\"btn\", \"btn-contact\");\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n  container.appendChild(homeBtn);\n  container.appendChild(menuBtn);\n  container.appendChild(contactBtn);\n  content.appendChild(container);\n\n  // divisor\n\n  const menuCategories = [\"Pasta\", \"Pizza\", \"Gelato\"];\n  // not sure how to add these next unique items. nested forEach? array method?\n  const menuDescriptions = [\"ipsi lorem\", \"ipsi lorem\", \"ipsi lorem\"];\n  const menuItems = [\n    [\"A\", \"B\", \"C\"],\n    [\"A\", \"B\", \"C\"],\n    [\"A\", \"B\", \"C\"],\n  ];\n  const menuItemDescriptions = [\n    [\"laurel\", \"yannel\", \"yennifer\"],\n    [\"laurel\", \"yannel\", \"yennifer\"],\n    [\"laurel\", \"yannel\", \"yennifer\"],\n  ];\n  const menuItemPrices = [\n    [12, 23, 34],\n    [12, 23, 34],\n    [12, 23, 34],\n  ];\n\n  menuCategories.forEach((category) => {\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"container-menu\");\n\n    const menuCategory = document.createElement(\"h3\");\n    menuCategory.textContent = category;\n    menuCategory.classList.add(\"menu-category\");\n    menuContainer.appendChild(menuCategory);\n\n    const menuCategoryDesc = document.createElement(\"p\");\n    menuCategoryDesc.textContent =\n      \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laborum architecto voluptas tempora repellat vel veniam delectus unde, accusamus modi?\";\n    menuCategoryDesc.classList.add(\"menu-desc\");\n    menuContainer.appendChild(menuCategoryDesc);\n\n    const menuItemContainer = document.createElement(\"div\");\n    menuItemContainer.classList.add(\"item-container\");\n    menuContainer.appendChild(menuItemContainer);\n\n    const menuItemTitles = document.createElement(\"p\");\n    menuItemTitles.textContent = \"item title\";\n    menuItemTitles.classList.add(\"item-title\");\n    menuItemContainer.appendChild(menuItemTitles);\n\n    const menuItemDescs = document.createElement(\"p\");\n    menuItemDescs.textContent = \"item description\";\n    menuItemDescs.classList.add(\"item-descriptions\");\n    menuItemContainer.appendChild(menuItemDescs);\n\n    const menuItemPrices = document.createElement(\"p\");\n    menuItemPrices.textContent = \"$123\";\n    menuItemPrices.classList.add(\"item-price\");\n    menuItemContainer.appendChild(menuItemPrices);\n\n    content.appendChild(menuContainer);\n  });\n\n  const appendMenuItems = () => {\n    //   code here\n  };\n\n  const appendMenuItemDescriptions = () => {\n    //   code here\n  };\n\n  const appendMenuPrices = () => {\n    //   code here\n  };\n\n  return content;\n};\n\nconst contactTab = () => {\n  const content = document.querySelector(\"#content\");\n\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Igor's Italian Eatery\";\n  title.classList.add(\"title\");\n  content.appendChild(title);\n\n  const copy = document.createElement(\"p\");\n  copy.textContent = \"Best Food In Town!\";\n  copy.classList.add(\"copy\");\n  content.appendChild(copy);\n\n  const tab = document.createElement(\"h2\");\n  tab.textContent = \"Contact\";\n  tab.classList.add(\"tab-title\");\n  content.appendChild(tab);\n\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.textContent = \"HOME\";\n  homeBtn.classList.add(\"btn\", \"btn-home\");\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.textContent = \"MENU\";\n  menuBtn.classList.add(\"btn\", \"btn-menu\");\n\n  const contactBtn = document.createElement(\"button\");\n  contactBtn.textContent = \"CONTACT\";\n  contactBtn.classList.add(\"btn\", \"btn-contact\");\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n  container.appendChild(homeBtn);\n  container.appendChild(menuBtn);\n  container.appendChild(contactBtn);\n  content.appendChild(container);\n\n  // divisor\n\n  const contactContainer = document.createElement(\"div\");\n  contactContainer.classList.add(\"container-contact\");\n\n  const contactUsInfo = document.createElement(\"p\");\n  contactUsInfo.textContent =\n    \"Let us know what you think! We're always open to suggestions.\";\n  contactUsInfo.classList.add(\"contact-us-info\");\n  contactContainer.appendChild(contactUsInfo);\n\n  const contactLocation = document.createElement(\"p\");\n  contactLocation.textContent = \"123 Alphabet Ln, New Vegas, NCR\";\n  contactLocation.classList.add(\"contact-location\");\n  contactContainer.appendChild(contactLocation);\n\n  const contactPhone = document.createElement(\"p\");\n  contactPhone.textContent = \"123-456-7890\";\n  contactPhone.classList.add(\"contact-phone\");\n  contactContainer.appendChild(contactPhone);\n\n  const contactEmail = document.createElement(\"p\");\n  contactEmail.textContent = \"iie-notARealEmail@intermail.com\";\n  contactEmail.classList.add(\"contact-email\");\n  contactContainer.appendChild(contactEmail);\n\n  content.appendChild(contactContainer);\n\n  return content;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page1/./src/modules.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;