/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! font/SeaweedScript-Regular.ttf */ \"./src/font/SeaweedScript-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! font/SailorScrawlBlackRegular-mXBP.ttf */ \"./src/font/SailorScrawlBlackRegular-mXBP.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: seaweed;\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n@font-face {\r\n  font-family: sailor;\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n\r\n:root {\r\n  --blue: #084575;\r\n  --brown: #e7d5a7;\r\n  --beige: #f3efd5;\r\n  --gray: #c0b2a4;\r\n  --black: #152642;\r\n}\r\n\r\nbody {\r\n  background-color: var(--brown);\r\n  font-size: 32px;\r\n}\r\n\r\nh1 {\r\n  color: var(--blue);\r\n  font-family: \"seaweed\";\r\n  text-shadow: var(--black) 1px 1px 8px;\r\n}\r\n\r\ninput {\r\n  background-color: var(--gray);\r\n  border: 1px solid var(--black);\r\n}\r\n\r\nbutton {\r\n  background-color: var(--beige);\r\n  border: 1px solid var(--black);\r\n  box-shadow: 1px 1px var(--black);\r\n  border-radius: 10px;\r\n}\r\n\r\nbutton:active {\r\n  background-color: var(--gray);\r\n}\r\n\r\n.blue {\r\n  background-color: lightblue;\r\n}\r\n\r\n.green {\r\n  background-color: green;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.ship {\r\n  background-color: lightgray;\r\n}\r\n\r\n.miss {\r\n  background-color: brown;\r\n}\r\n\r\n.hit {\r\n  background-color: blueviolet;\r\n}\r\n\r\n.sunk {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#app-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: column-reverse;\r\n  align-items: center;\r\n}\r\n\r\n#starting-screen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 15%;\r\n  align-items: center;\r\n}\r\n\r\n#starting-screen h1 {\r\n  font-size: 96px;\r\n}\r\n\r\n#starting-screen button {\r\n  width: 125px;\r\n  height: 125px;\r\n  font-size: 80px;\r\n  color: var(--blue);\r\n}\r\n\r\n#player-info {\r\n  width: 40vw;\r\n  height: 20vh;\r\n  position: absolute;\r\n  top: 10%;\r\n  text-align: center;\r\n}\r\n\r\n#player-info h1 {\r\n  font-size: 30px;\r\n  font-family: \"sailor\";\r\n}\r\n\r\n#player-info button,\r\n.transition-message-box button {\r\n  height: 35px;\r\n  width: auto;\r\n  font-size: 18px;\r\n  font-family: \"sailor\";\r\n  margin: 5px;\r\n}\r\n\r\n#player-info-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n#name-input {\r\n  width: 70%;\r\n  height: 40px;\r\n  font-size: 30px;\r\n  text-align: center;\r\n}\r\n\r\n#player1-board,\r\n#player2-board {\r\n  width: fit-content;\r\n}\r\n\r\n.board {\r\n  border: 1px black solid;\r\n  border-radius: 10px;\r\n  background-color: rgb(212, 225, 230);\r\n  box-shadow: 1px 1px 2px var(--black);\r\n}\r\n\r\n.transition-message-box {\r\n  text-align: center;\r\n}\r\n\r\n.transition-message {\r\n  font-family: \"sailor\";\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.disabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.2;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.cell {\r\n  width: 45px;\r\n  height: 45px;\r\n  border: 1px dashed black;\r\n  border-radius: 10px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { LinkedList } = __webpack_require__(/*! ./linkedList */ \"./src/linkedList.js\");\r\n\r\nclass Ship {\r\n  constructor(name, length, isHorizontal) {\r\n    this.name = name;\r\n    this.length = length;\r\n    this.isHorizontal = isHorizontal;\r\n    this.hitCount = 0;\r\n    this.isSunk = false;\r\n    this.isPlaced = false;\r\n  }\r\n\r\n  hit() {\r\n    this.hitCount++;\r\n    if (this.checkIfSunk()) {\r\n      this.isSunk = true;\r\n    }\r\n  }\r\n\r\n  checkIfSunk() {\r\n    return this.length === this.hitCount;\r\n  }\r\n\r\n  randomizeIsHorizontal() {\r\n    this.isHorizontal = Math.floor(Math.random() * 2) > 0 ? true : false;\r\n  }\r\n}\r\n\r\nclass GameBoard {\r\n  constructor() {\r\n    this.ships = [\r\n      new Ship(\"Destroyer\", 2, true),\r\n      new Ship(\"Submarine\", 3, true),\r\n      new Ship(\"Cruiser\", 3, true),\r\n      new Ship(\"Battleship\", 4, true),\r\n      new Ship(\"Carrier\", 5, true),\r\n    ];\r\n    this.acceptingShipPlacement = true;\r\n    this.nextShipToPlace = this.ships[0];\r\n    this.boardMap = [\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n      [null, null, null, null, null, null, null, null, null, null],\r\n    ];\r\n    this.hits = [];\r\n    this.missedAttacks = [];\r\n    this.shotHistory = new LinkedList();\r\n  }\r\n\r\n  changeNextShipToPlace(nextShipID = null) {\r\n    if (!nextShipID) {\r\n      for (let i = 0; i < this.ships.length; i++) {\r\n        if (!this.ships[i].isPlaced) {\r\n          this.nextShipToPlace = this.ships[i];\r\n          i = this.ships.length;\r\n        }\r\n      }\r\n    } else {\r\n      this.nextShipToPlace = this.ships[nextShipID];\r\n    }\r\n  }\r\n\r\n  changeNextShipDirection() {\r\n    this.nextShipToPlace.isHorizontal = !this.nextShipToPlace.isHorizontal;\r\n  }\r\n\r\n  changeAcceptShipPlacementValue() {\r\n    this.acceptingShipPlacement = !this.acceptingShipPlacement;\r\n  }\r\n\r\n  placeShip(x, y) {\r\n    for (let i = 0; i < this.nextShipToPlace.length; i++) {\r\n      if (this.nextShipToPlace.isHorizontal) {\r\n        this.boardMap[y][x + i] = this.nextShipToPlace;\r\n        this.nextShipToPlace.isPlaced = true;\r\n      } else {\r\n        this.boardMap[y + i][x] = this.nextShipToPlace;\r\n        this.nextShipToPlace.isPlaced = true;\r\n      }\r\n    }\r\n    if (!this.checkIfAllShipsPlaced()) {\r\n      this.changeNextShipToPlace();\r\n    } else {\r\n      this.nextShipToPlace = new Ship(\"null\", 0, true);\r\n    }\r\n  }\r\n\r\n  checkIfAllShipsSunk() {\r\n    return this.ships.every((ship) => ship.isSunk === true);\r\n  }\r\n\r\n  checkIfAllShipsPlaced() {\r\n    return this.ships.every((ship) => ship.isPlaced === true);\r\n  }\r\n\r\n  checkIfValidShipPlacement(x, y) {\r\n    if (this.nextShipToPlace.isHorizontal) {\r\n      return !(\r\n        x + this.nextShipToPlace.length > 10 ||\r\n        this.checkAdjacentCellsForShips(x, y)\r\n      );\r\n    } else {\r\n      return !(\r\n        y + this.nextShipToPlace.length > 10 ||\r\n        this.checkAdjacentCellsForShips(x, y)\r\n      );\r\n    }\r\n  }\r\n\r\n  checkAdjacentCellsForShips(x, y) {\r\n    for (let i = 0; i < this.nextShipToPlace.length; i++) {\r\n      if (this.nextShipToPlace.isHorizontal) {\r\n        if (this.boardMap[y][x + i] !== null) {\r\n          return true;\r\n        }\r\n      } else {\r\n        if (this.boardMap[y + i][x] !== null) {\r\n          return true;\r\n        }\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    if (this.boardMap[y][x] === null) {\r\n      this.recordMissedAttack(x, y);\r\n      return false;\r\n    } else {\r\n      this.boardMap[y][x].hit();\r\n      this.recordHit(x, y);\r\n      return true;\r\n    }\r\n  }\r\n\r\n  recordHit(x, y) {\r\n    this.hits.push([x, y]);\r\n  }\r\n\r\n  recordMissedAttack(x, y) {\r\n    this.missedAttacks.push([x, y]);\r\n  }\r\n\r\n  recordShotInHistory(x, y, hitBool) {\r\n    this.shotHistory.addNode([x, y], hitBool);\r\n  }\r\n\r\n  coordinatesAreInHits(x, y) {\r\n    for (let i = 0; i < this.hits.length; i++) {\r\n      if (this.hits[i][0] === x && this.hits[i][1] === y) {\r\n        return true;\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n\r\n  coordinatesAreInMissedAttacks(x, y) {\r\n    for (let i = 0; i < this.missedAttacks.length; i++) {\r\n      if (this.missedAttacks[i][0] === x && this.missedAttacks[i][1] === y) {\r\n        return true;\r\n      }\r\n    }\r\n    return false;\r\n  }\r\n\r\n  getRandomCoordinates() {\r\n    let randomCoordinate = Math.floor(Math.random() * 100);\r\n    return [randomCoordinate % 10, Math.floor(randomCoordinate / 10)];\r\n  }\r\n}\r\n\r\nclass Player {\r\n  constructor(playerName = \"Computer\", AI = false) {\r\n    this.playerName = playerName;\r\n    this.AI = AI;\r\n    this.gameBoard = new GameBoard();\r\n  }\r\n\r\n  isAI() {\r\n    return this.AI;\r\n  }\r\n\r\n  getAITurnDecision() {\r\n    const previousMove = this.gameBoard.shotHistory.getTail();\r\n    if (!this.gameBoard.shotHistory.getRoot() || !previousMove.hitBool) {\r\n      let randomCoordinate = this.gameBoard.getRandomCoordinates();\r\n      while (\r\n        this.gameBoard.shotHistory.searchForCoordinates(\r\n          randomCoordinate[0],\r\n          randomCoordinate[1]\r\n        )\r\n      ) {\r\n        randomCoordinate = this.gameBoard.getRandomCoordinates();\r\n      }\r\n      return randomCoordinate;\r\n    } else {\r\n      const possibleMoves = [\r\n        [previousMove.coordinate[0] + 1, previousMove.coordinate[1]],\r\n        [previousMove.coordinate[0] - 1, previousMove.coordinate[1]],\r\n        [previousMove.coordinate[0], previousMove.coordinate[1] + 1],\r\n        [previousMove.coordinate[0], previousMove.coordinate[1] - 1],\r\n      ];\r\n\r\n      const filteredMoves = possibleMoves.filter(\r\n        (move) =>\r\n          move[0] < 10 &&\r\n          move[0] >= 0 &&\r\n          move[1] < 10 &&\r\n          move[1] >= 0 &&\r\n          !this.gameBoard.shotHistory.searchForCoordinates(move[0], move[1])\r\n      );\r\n      if (filteredMoves.length > 0) {\r\n        return filteredMoves[Math.floor(Math.random() * filteredMoves.length)];\r\n      } else {\r\n        let randomCoordinate = this.gameBoard.getRandomCoordinates();\r\n        while (\r\n          this.gameBoard.shotHistory.searchForCoordinates(\r\n            randomCoordinate[0],\r\n            randomCoordinate[1]\r\n          )\r\n        ) {\r\n          randomCoordinate = this.gameBoard.getRandomCoordinates();\r\n        }\r\n        return randomCoordinate;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = { Player, GameBoard, Ship };\r\n\n\n//# sourceURL=webpack://battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Player } = __webpack_require__(/*! ./battleship */ \"./src/battleship.js\");\r\n\r\nclass GameController {\r\n  constructor() {\r\n    this.players = [];\r\n    this.currentPlayerIndex = this.pickRandomPlayerIndex();\r\n    this.currentEnemyPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;\r\n  }\r\n\r\n  //closures\r\n  placeShipClosureBuilder(player, x, y, playerContainer) {\r\n    return function () {\r\n      if (!player.gameBoard.acceptingShipPlacement) {\r\n        return;\r\n      }\r\n      if (player.gameBoard.checkIfValidShipPlacement(x, y)) {\r\n        player.gameBoard.placeShip(x, y);\r\n        let rowArray = Array.from(playerContainer.firstChild.childNodes);\r\n        for (let i = 0; i < 10; i++) {\r\n          for (let j = 0; j < 10; j++) {\r\n            if (\r\n              typeof player.gameBoard.boardMap[i][j] === \"object\" &&\r\n              player.gameBoard.boardMap[i][j] !== null\r\n            ) {\r\n              rowArray[i].childNodes[j].classList.add(\"ship\");\r\n            }\r\n          }\r\n        }\r\n      }\r\n    };\r\n  }\r\n\r\n  showValidShipPlacementClosureBuilder(player, x, y, playerContainer) {\r\n    return function () {\r\n      if (!player.gameBoard.acceptingShipPlacement) {\r\n        return;\r\n      }\r\n      let rowArray = Array.from(playerContainer.firstChild.childNodes);\r\n      if (player.gameBoard.checkIfValidShipPlacement(x, y)) {\r\n        if (player.gameBoard.nextShipToPlace.isHorizontal) {\r\n          for (\r\n            let i = x;\r\n            i < 10 && i < x + player.gameBoard.nextShipToPlace.length;\r\n            i++\r\n          ) {\r\n            rowArray[y].childNodes[i].classList.add(\"green\");\r\n          }\r\n        } else {\r\n          for (\r\n            let i = y;\r\n            i < 10 && i < y + player.gameBoard.nextShipToPlace.length;\r\n            i++\r\n          ) {\r\n            rowArray[i].childNodes[x].classList.add(\"green\");\r\n          }\r\n        }\r\n      } else {\r\n        if (player.gameBoard.nextShipToPlace.isHorizontal) {\r\n          for (\r\n            let i = x;\r\n            i < 10 && i < x + player.gameBoard.nextShipToPlace.length;\r\n            i++\r\n          ) {\r\n            rowArray[y].childNodes[i].classList.add(\"red\");\r\n          }\r\n        } else {\r\n          for (\r\n            let i = y;\r\n            i < 10 && i < y + player.gameBoard.nextShipToPlace.length;\r\n            i++\r\n          ) {\r\n            rowArray[i].childNodes[x].classList.add(\"red\");\r\n          }\r\n        }\r\n      }\r\n    };\r\n  }\r\n\r\n  //DOM editors\r\n  buildPlayerInfoDiv() {\r\n    const playerInfoDiv = document.querySelector(\"#player-info\");\r\n\r\n    const playerInfoDivQuestion = document.createElement(\"h1\");\r\n    playerInfoDivQuestion.textContent = \"What's Player 1's name?\";\r\n\r\n    const playerInfoForm = document.createElement(\"form\");\r\n    playerInfoForm.id = \"player-info-form\";\r\n\r\n    const playerInfoLabel = document.createElement(\"label\");\r\n    playerInfoLabel.htmlFor = \"name-input\";\r\n\r\n    const playerInfoInput = document.createElement(\"input\");\r\n    playerInfoInput.id = \"name-input\";\r\n    playerInfoInput.type = \"text\";\r\n\r\n    const playerInfoSubmitButton = document.createElement(\"button\");\r\n    playerInfoSubmitButton.type = \"submit\";\r\n    playerInfoSubmitButton.id = \"player-submit-button\";\r\n    playerInfoSubmitButton.textContent = \"Next ➞\";\r\n\r\n    playerInfoForm.appendChild(playerInfoLabel);\r\n    playerInfoForm.appendChild(playerInfoInput);\r\n    playerInfoForm.appendChild(playerInfoSubmitButton);\r\n\r\n    playerInfoDiv.appendChild(playerInfoDivQuestion);\r\n    playerInfoDiv.appendChild(playerInfoForm);\r\n  }\r\n\r\n  clearPlayerInfoDiv() {\r\n    const playerInfoDiv = document.querySelector(\"#player-info\");\r\n    while (playerInfoDiv.firstChild) {\r\n      playerInfoDiv.removeChild(playerInfoDiv.firstChild);\r\n    }\r\n  }\r\n\r\n  buildBoard(index) {\r\n    const appContainer = document.querySelector(\"#app-container\");\r\n    const playerContainer = document.createElement(\"div\");\r\n    playerContainer.id = `player${index + 1}-board`;\r\n    const board = document.createElement(\"div\");\r\n    board.classList.add(\"board\");\r\n    playerContainer.appendChild(board);\r\n\r\n    for (let i = 0; i < 10; i++) {\r\n      const row = document.createElement(\"div\");\r\n      row.classList.add(\"row\");\r\n      board.appendChild(row);\r\n\r\n      for (let j = 0; j < 10; j++) {\r\n        const cell = document.createElement(\"div\");\r\n        cell.classList.add(\"cell\");\r\n        cell.classList.add(\"blue\");\r\n        if (\r\n          index === this.currentPlayerIndex &&\r\n          this.players[index].gameBoard.boardMap[i][j] !== null\r\n        ) {\r\n          cell.classList.remove(\"blue\");\r\n          cell.classList.add(\"ship\");\r\n        }\r\n        if (this.players[index].gameBoard.coordinatesAreInMissedAttacks(j, i)) {\r\n          cell.classList.remove(\"blue\");\r\n          cell.classList.add(\"miss\");\r\n        } else if (this.players[index].gameBoard.coordinatesAreInHits(j, i)) {\r\n          cell.classList.remove(\"blue\");\r\n          cell.classList.add(\"hit\");\r\n        }\r\n        row.appendChild(cell);\r\n      }\r\n    }\r\n\r\n    appContainer.appendChild(playerContainer);\r\n\r\n    this.buildPlayerNameDisplay(index, playerContainer);\r\n    this.buildScoreBoard(index, playerContainer);\r\n  }\r\n\r\n  buildPlayerNameDisplay(index, container) {\r\n    const playerNameDisplay = document.createElement(\"h1\");\r\n    playerNameDisplay.textContent = this.players[index].playerName;\r\n    playerNameDisplay.classList.add(\"player-name\");\r\n    container.appendChild(playerNameDisplay);\r\n  }\r\n\r\n  buildScoreBoard(index, container) {\r\n    const playerScoreBoard = document.createElement(\"div\");\r\n    this.players[index].gameBoard.ships.forEach((ship) => {\r\n      const shipDiv = document.createElement(\"div\");\r\n      shipDiv.id = ship.name.toLowerCase();\r\n      if (ship.checkIfSunk()) {\r\n        shipDiv.classList.add(\"sunk\");\r\n      }\r\n      const shipName = document.createElement(\"h2\");\r\n      shipName.textContent = ship.name;\r\n      shipDiv.appendChild(shipName);\r\n      playerScoreBoard.appendChild(shipDiv);\r\n    });\r\n    container.appendChild(playerScoreBoard);\r\n  }\r\n\r\n  clearBoards() {\r\n    for (let i = 0; i < 2; i++) {\r\n      const container = document.querySelector(`#player${i + 1}-board`);\r\n      if (container) {\r\n        container.parentNode.removeChild(container);\r\n      }\r\n    }\r\n  }\r\n\r\n  showTransitionalScreen(callback, message, buttonText) {\r\n    //a method to display a transitional screen between turns so that the players dont see eachothers boards\r\n    //takes a callback for the button to execute on click, as well as a message to display to the player and the text for the button\r\n\r\n    let transitionalScreen = document.createElement(\"div\");\r\n    transitionalScreen.classList.add(\"transition\");\r\n    let transitionalScreenMessageBox = document.createElement(\"div\");\r\n    transitionalScreenMessageBox.classList.add(\"transition-message-box\");\r\n    let transitionalScreenMessage = document.createElement(\"h1\");\r\n    transitionalScreenMessage.classList.add(\"transition-message\");\r\n    transitionalScreenMessage.textContent = message;\r\n    let transitionalScreenMessageBoxButton = document.createElement(\"button\");\r\n    transitionalScreenMessageBoxButton.textContent = buttonText;\r\n\r\n    transitionalScreenMessageBoxButton.addEventListener(\"click\", () => {\r\n      this.removeTransitionalScreen();\r\n      callback();\r\n    });\r\n\r\n    transitionalScreenMessageBox.appendChild(transitionalScreenMessage);\r\n    transitionalScreenMessageBox.appendChild(\r\n      transitionalScreenMessageBoxButton\r\n    );\r\n    transitionalScreen.appendChild(transitionalScreenMessageBox);\r\n    document.querySelector(\"body\").appendChild(transitionalScreen);\r\n  }\r\n\r\n  removeTransitionalScreen() {\r\n    let transitionalScreen = document.querySelector(\".transition\");\r\n    document.querySelector(\"body\").removeChild(transitionalScreen);\r\n  }\r\n\r\n  //game logic\r\n  pickRandomPlayerIndex() {\r\n    return Math.floor(Math.random() * 2);\r\n  }\r\n\r\n  validatePlayerName() {\r\n    const playerNameInput = document.querySelector(\"#name-input\");\r\n    playerNameInput.setCustomValidity(\"\");\r\n    if (playerNameInput.checkValidity) {\r\n      if (playerNameInput.value.length === 0) {\r\n        playerNameInput.setCustomValidity(\"Please input a name\");\r\n        playerNameInput.reportValidity();\r\n      }\r\n    }\r\n  }\r\n\r\n  getPlayer1Info() {\r\n    const playerInfoDiv = document.querySelector(\"#player-info\");\r\n    playerInfoDiv.classList.toggle(\"hidden\");\r\n    const playerInfoForm = document.querySelector(\"#player-info-form\");\r\n    const playerNameInput = document.querySelector(\"#name-input\");\r\n    playerNameInput.setAttribute(\"required\", \"\");\r\n    playerInfoForm.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      this.players.push(new Player(e.target[0].value));\r\n      this.checkIfPlayer2IsHuman(playerInfoDiv);\r\n    });\r\n  }\r\n\r\n  checkIfPlayer2IsHuman(playerInfoDiv) {\r\n    this.clearPlayerInfoDiv();\r\n    const AIorPlayerQuestion = document.createElement(\"h1\");\r\n    AIorPlayerQuestion.textContent = \"Is Player 2 a human or a computer?\";\r\n    playerInfoDiv.appendChild(AIorPlayerQuestion);\r\n\r\n    const humanButton = document.createElement(\"button\");\r\n    humanButton.textContent = \"Human\";\r\n    humanButton.addEventListener(\"click\", () => {\r\n      this.getPlayer2Info(playerInfoDiv);\r\n    });\r\n    playerInfoDiv.appendChild(humanButton);\r\n\r\n    const AIButton = document.createElement(\"button\");\r\n    AIButton.textContent = \"Computer\";\r\n    AIButton.addEventListener(\"click\", () => {\r\n      this.players.push(new Player(\"Computer\", true));\r\n      this.clearPlayerInfoDiv();\r\n      playerInfoDiv.classList.toggle(\"hidden\");\r\n      this.showTransitionalScreen(\r\n        () => {\r\n          this.pickPlayer1Ships();\r\n        },\r\n        `${this.players[0].playerName}, it's time to place your ships!`,\r\n        \"Start\"\r\n      );\r\n    });\r\n    playerInfoDiv.appendChild(AIButton);\r\n  }\r\n\r\n  getPlayer2Info(playerInfoDiv) {\r\n    this.clearPlayerInfoDiv();\r\n    const player2NameQuestion = document.createElement(\"h1\");\r\n    player2NameQuestion.textContent = \"What's Player 2's name?\";\r\n    playerInfoDiv.appendChild(player2NameQuestion);\r\n\r\n    const player2InfoForm = document.createElement(\"form\");\r\n    player2InfoForm.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      this.players.push(new Player(e.target[0].value));\r\n      this.clearPlayerInfoDiv();\r\n      playerInfoDiv.classList.toggle(\"hidden\");\r\n      this.showTransitionalScreen(\r\n        () => {\r\n          this.pickPlayer1Ships();\r\n        },\r\n        `${this.players[0].playerName}, it's time to place your ships!`,\r\n        \"Start\"\r\n      );\r\n    });\r\n\r\n    const player2FormLabel = document.createElement(\"label\");\r\n    player2FormLabel.htmlFor = \"name-input\";\r\n\r\n    const player2FormInput = document.createElement(\"input\");\r\n    player2FormInput.inputMode = \"text\";\r\n    player2FormInput.id = \"name-input\";\r\n    player2FormInput.setAttribute(\"required\", \"\");\r\n\r\n    const player2FormSubmitButton = document.createElement(\"button\");\r\n    player2FormSubmitButton.textContent = \"Play!\";\r\n    player2FormSubmitButton.type = \"submit\";\r\n\r\n    player2InfoForm.appendChild(player2FormLabel);\r\n    player2InfoForm.appendChild(player2FormInput);\r\n    player2InfoForm.appendChild(player2FormSubmitButton);\r\n    playerInfoDiv.appendChild(player2InfoForm);\r\n  }\r\n\r\n  pickPlayer1Ships() {\r\n    this.buildBoard(0);\r\n    const player1Cells = document.querySelectorAll(\"#player1-board .cell\");\r\n    const player1Container = document.querySelector(\"#player1-board\");\r\n\r\n    for (let i = 0; i < player1Cells.length; i++) {\r\n      player1Cells[i].onclick = this.placeShipClosureBuilder(\r\n        this.players[0],\r\n        i % 10,\r\n        Math.floor(i / 10),\r\n        player1Container\r\n      );\r\n      player1Cells[i].onmouseenter = this.showValidShipPlacementClosureBuilder(\r\n        this.players[0],\r\n        i % 10,\r\n        Math.floor(i / 10),\r\n        player1Container\r\n      );\r\n      player1Cells[i].addEventListener(\"mouseout\", () => {\r\n        let cellArray = Array.from(\r\n          document.querySelectorAll(\"#player1-board .cell\")\r\n        );\r\n        cellArray.forEach((cell) => {\r\n          cell.classList.remove(\"red\", \"green\");\r\n        });\r\n      });\r\n      player1Cells[i].addEventListener(\"click\", () => {\r\n        if (this.players[0].gameBoard.checkIfAllShipsPlaced()) {\r\n          this.clearBoards();\r\n          if (this.players[1].isAI()) {\r\n            this.showTransitionalScreen(\r\n              () => {\r\n                this.placeAIShips();\r\n                this.players[this.currentPlayerIndex].isAI()\r\n                  ? this.takeAITurn()\r\n                  : this.takeTurn();\r\n              },\r\n              `Let's start the game! ${this.players[1].playerName} goes first!`,\r\n              \"Start\"\r\n            );\r\n          } else {\r\n            this.showTransitionalScreen(\r\n              () => {\r\n                this.pickPlayer2Ships();\r\n              },\r\n              `${this.players[1].playerName}, it's time to place your ships!`,\r\n              \"Start\"\r\n            );\r\n          }\r\n        }\r\n      });\r\n    }\r\n\r\n    const changeShipOrientationButton = document.createElement(\"button\");\r\n    changeShipOrientationButton.textContent = \"Change ship direction\";\r\n    changeShipOrientationButton.onclick = () => {\r\n      this.players[0].gameBoard.changeNextShipDirection();\r\n    };\r\n    player1Container.appendChild(changeShipOrientationButton);\r\n  }\r\n\r\n  placeAIShips() {\r\n    while (!this.players[1].gameBoard.checkIfAllShipsPlaced()) {\r\n      let randomPosition = Math.floor(Math.random() * 100);\r\n      this.players[1].gameBoard.nextShipToPlace.randomizeIsHorizontal();\r\n      while (\r\n        !this.players[1].gameBoard.checkIfValidShipPlacement(\r\n          randomPosition % 10,\r\n          Math.floor(randomPosition / 10)\r\n        )\r\n      ) {\r\n        randomPosition = Math.floor(Math.random() * 100);\r\n      }\r\n      this.players[1].gameBoard.placeShip(\r\n        randomPosition % 10,\r\n        Math.floor(randomPosition / 10)\r\n      );\r\n    }\r\n  }\r\n\r\n  pickPlayer2Ships() {\r\n    this.buildBoard(1);\r\n    const player2Cells = document.querySelectorAll(\"#player2-board .cell\");\r\n    const player2Container = document.querySelector(\"#player2-board\");\r\n\r\n    for (let i = 0; i < player2Cells.length; i++) {\r\n      player2Cells[i].onclick = this.placeShipClosureBuilder(\r\n        this.players[1],\r\n        i % 10,\r\n        Math.floor(i / 10),\r\n        player2Container\r\n      );\r\n      player2Cells[i].onmouseenter = this.showValidShipPlacementClosureBuilder(\r\n        this.players[1],\r\n        i % 10,\r\n        Math.floor(i / 10),\r\n        player2Container\r\n      );\r\n      player2Cells[i].addEventListener(\"mouseout\", () => {\r\n        let cellArray = Array.from(\r\n          document.querySelectorAll(\"#player2-board .cell\")\r\n        );\r\n        cellArray.forEach((cell) => {\r\n          cell.classList.remove(\"red\", \"green\");\r\n        });\r\n      });\r\n      player2Cells[i].addEventListener(\"click\", () => {\r\n        if (this.players[1].gameBoard.checkIfAllShipsPlaced()) {\r\n          this.clearBoards();\r\n          this.showTransitionalScreen(\r\n            () => {\r\n              this.takeTurn();\r\n            },\r\n            `${\r\n              this.players[this.currentPlayerIndex].playerName\r\n            }, you're up first!`,\r\n            \"Start the game!\"\r\n          );\r\n        }\r\n      });\r\n    }\r\n\r\n    const changeShipOrientationButton = document.createElement(\"button\");\r\n    changeShipOrientationButton.textContent = \"Change ship direction\";\r\n    changeShipOrientationButton.onclick = () => {\r\n      this.players[1].gameBoard.changeNextShipDirection();\r\n    };\r\n    player2Container.appendChild(changeShipOrientationButton);\r\n  }\r\n\r\n  takeTurn() {\r\n    this.clearBoards();\r\n    this.buildBoard(this.currentPlayerIndex);\r\n    this.buildBoard(this.currentEnemyPlayerIndex);\r\n    const enemyCells = document.querySelectorAll(\r\n      `#player${this.currentEnemyPlayerIndex + 1}-board .cell`\r\n    );\r\n    for (let i = 0; i < enemyCells.length; i++) {\r\n      if (\r\n        !this.players[\r\n          this.currentEnemyPlayerIndex\r\n        ].gameBoard.coordinatesAreInMissedAttacks(i % 10, Math.floor(i / 10)) &&\r\n        !this.players[\r\n          this.currentEnemyPlayerIndex\r\n        ].gameBoard.coordinatesAreInHits(i % 10, Math.floor(i / 10))\r\n      ) {\r\n        enemyCells[i].addEventListener(\"mouseover\", () => {\r\n          enemyCells[i].classList.toggle(\"green\");\r\n        });\r\n        enemyCells[i].addEventListener(\"mouseout\", () => {\r\n          enemyCells[i].classList.toggle(\"green\");\r\n        });\r\n        enemyCells[i].addEventListener(\"click\", () => {\r\n          const hitBool = this.players[\r\n            this.currentEnemyPlayerIndex\r\n          ].gameBoard.receiveAttack(i % 10, Math.floor(i / 10));\r\n          this.players[this.currentPlayerIndex].gameBoard.recordShotInHistory(\r\n            i % 10,\r\n            Math.floor(i / 10),\r\n            hitBool\r\n          );\r\n          this.clearBoards();\r\n          if (\r\n            this.players[\r\n              this.currentEnemyPlayerIndex\r\n            ].gameBoard.checkIfAllShipsSunk()\r\n          ) {\r\n            this.endGame(this.currentPlayerIndex);\r\n          } else {\r\n            this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;\r\n            this.currentEnemyPlayerIndex =\r\n              this.currentEnemyPlayerIndex === 0 ? 1 : 0;\r\n            if (this.players[this.currentPlayerIndex].isAI()) {\r\n              this.takeAITurn();\r\n            } else {\r\n              this.showTransitionalScreen(\r\n                () => {\r\n                  this.takeTurn();\r\n                },\r\n                `${\r\n                  this.players[this.currentPlayerIndex].playerName\r\n                }, it's your turn!`,\r\n                \"Take Turn\"\r\n              );\r\n            }\r\n          }\r\n        });\r\n      }\r\n    }\r\n  }\r\n\r\n  takeAITurn() {\r\n    const coordinate =\r\n      this.players[this.currentPlayerIndex].getAITurnDecision();\r\n    const hitBool = this.players[\r\n      this.currentEnemyPlayerIndex\r\n    ].gameBoard.receiveAttack(coordinate[0], coordinate[1]);\r\n    this.players[this.currentPlayerIndex].gameBoard.recordShotInHistory(\r\n      coordinate[0],\r\n      coordinate[1],\r\n      hitBool\r\n    );\r\n    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;\r\n    this.currentEnemyPlayerIndex = this.currentEnemyPlayerIndex === 0 ? 1 : 0;\r\n    this.takeTurn();\r\n  }\r\n\r\n  endGame(winnerIndex) {\r\n    for (let i = 0; i < this.players.length; i++) {\r\n      this.buildBoard(i);\r\n    }\r\n    const winnerDialog = document.querySelector(\"#winner-dialog\");\r\n    winnerDialog.showModal();\r\n    const showWinnerDialogButton = document.querySelector(\r\n      \"#show-dialog-button\"\r\n    );\r\n    showWinnerDialogButton.classList.toggle(\"hidden\");\r\n\r\n    showWinnerDialogButton.onclick = () => {\r\n      winnerDialog.showModal();\r\n    };\r\n\r\n    document\r\n      .querySelector(\"#app-container\")\r\n      .appendChild(showWinnerDialogButton);\r\n\r\n    const winnerDialogText = document.querySelector(\"#winner-text\");\r\n    winnerDialogText.textContent = `${this.players[winnerIndex].playerName} wins!`;\r\n\r\n    const showBoardButton = document.querySelector(\"#show-board-button\");\r\n    showBoardButton.onclick = () => {\r\n      winnerDialog.close();\r\n    };\r\n\r\n    const playAgainButton = document.querySelector(\"#play-again-button\");\r\n    playAgainButton.onclick = () => {\r\n      winnerDialog.close();\r\n      showWinnerDialogButton.classList.toggle(\"hidden\");\r\n      this.clearBoards();\r\n      this.players = [];\r\n      this.buildPlayerInfoDiv();\r\n      this.getPlayer1Info();\r\n    };\r\n  }\r\n}\r\n\r\nmodule.exports = { GameController };\r\n\n\n//# sourceURL=webpack://battleship/./src/gameController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\nconst { GameController } = __webpack_require__(/*! ./gameController */ \"./src/gameController.js\");\r\n\r\nconst titleScreen = document.querySelector(\"#starting-screen\");\r\nconst startGameButton = document.querySelector(\"#start\");\r\nconst gameController = new GameController();\r\n\r\nstartGameButton.onclick = () => {\r\n    titleScreen.classList.toggle(\"hidden\");\r\n    gameController.buildPlayerInfoDiv();\r\n    gameController.getPlayer1Info();\r\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((module) => {

eval("class Node {\r\n  constructor(coordinate, hitBool) {\r\n    this.coordinate = coordinate;\r\n    this.hitBool = hitBool;\r\n    this.next = null;\r\n    this.prev = null;\r\n  }\r\n}\r\n\r\nclass LinkedList {\r\n  cosntructor() {\r\n    this.root = null;\r\n    this.tail = null;\r\n  }\r\n\r\n  addNode(value, hitBool) {\r\n    if (!this.root) {\r\n      const newNode = new Node(value, hitBool);\r\n      this.root = newNode;\r\n      this.tail = this.root;\r\n    } else {\r\n      let currentNode = this.tail;\r\n      const newNode = new Node(value, hitBool);\r\n      newNode.prev = currentNode;\r\n      currentNode.next = newNode;\r\n      this.tail = this.tail.next;\r\n    }\r\n  }\r\n\r\n  getRoot() {\r\n    return this.root;\r\n  }\r\n\r\n  getTail() {\r\n    return this.tail;\r\n  }\r\n\r\n  searchForCoordinates(x, y) {\r\n    let currentNode = this.root;\r\n    while (currentNode) {\r\n        if (currentNode.coordinate[0] === x && currentNode.coordinate[1] === y) {\r\n            return currentNode;\r\n        } else {\r\n            currentNode = currentNode.next;\r\n        }\r\n    }\r\n    return null;\r\n  }\r\n\r\n  printList() {\r\n    let currentNode = this.root;\r\n    let str = \"\";\r\n    while (currentNode) {\r\n        str += `${currentNode.coordinate}/${currentNode.hitBool} `;\r\n        currentNode = currentNode.next;\r\n    }\r\n    console.log(str);\r\n  }\r\n}\r\n\r\n\r\nmodule.exports = { LinkedList };\n\n//# sourceURL=webpack://battleship/./src/linkedList.js?");

/***/ }),

/***/ "./src/font/SailorScrawlBlackRegular-mXBP.ttf":
/*!****************************************************!*\
  !*** ./src/font/SailorScrawlBlackRegular-mXBP.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cd8d156e66034470b7f7.ttf\";\n\n//# sourceURL=webpack://battleship/./src/font/SailorScrawlBlackRegular-mXBP.ttf?");

/***/ }),

/***/ "./src/font/SeaweedScript-Regular.ttf":
/*!********************************************!*\
  !*** ./src/font/SeaweedScript-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"299b8804566bbf34190b.ttf\";\n\n//# sourceURL=webpack://battleship/./src/font/SeaweedScript-Regular.ttf?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;