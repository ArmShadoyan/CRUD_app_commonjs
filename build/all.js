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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\n//CRAD = crate (post),read(get),update(put),delete(delete);\r\nconst UI = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\r\nconst POST = __webpack_require__(/*! ./modules/postMethod */ \"./src/js/modules/postMethod.js\");\r\nconst GET = __webpack_require__(/*! ./modules/getMethode */ \"./src/js/modules/getMethode.js\");\r\nconst PUT = __webpack_require__(/*! ./modules/putMethode */ \"./src/js/modules/putMethode.js\");\r\nconst DELETE = __webpack_require__(/*! ./modules/deleteMethode */ \"./src/js/modules/deleteMethode.js\");\r\nconst COMPLETE = __webpack_require__(/*! ./modules/complete */ \"./src/js/modules/complete.js\");\r\n\r\nconst root = document.querySelector(\"#root\");\r\nconst url = \"http://localhost:8888/todo\";\r\n\r\nUI.start(); \r\n\r\nconst { form, screenInput} = UI;\r\n\r\nPOST(form,screenInput,url);\r\n\r\nasync function engine (){\r\n\tawait GET(UI,url);\r\n\tPUT (\r\n\t\tdocument.querySelectorAll(\".editBtn\"),\r\n\t\tdocument.querySelectorAll(\".saveBtn\"),\r\n\t\tdocument.querySelectorAll(\".listsBlockItemContent\"),\r\n\t\turl\r\n\t);\r\n\tDELETE (\r\n\t\tdocument.querySelectorAll(\".removeBtn\"),\r\n\t\turl\r\n\t);\r\n\tCOMPLETE(\r\n\t\t url,\r\n\t\t document.querySelectorAll(\".buttons input\"), \r\n\t\t document.querySelectorAll(\".listsBlockItemContent\")\r\n\t\t );\r\n\r\n}\r\nengine();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://crud/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/complete.js":
/*!************************************!*\
  !*** ./src/js/modules/complete.js ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = function (url, checkArr, id) {\r\n\tcheckArr.forEach((check, index) => {\r\n\t\tcheck.addEventListener(\"change\", async (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tif (check.checked) {\r\n\t\t\t\tawait fetch(`${url}/${parseInt(id[index].textContent)}`, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({ isComplete: true })\r\n\t\t\t\t});\r\n\t\t\t} else {\r\n\t\t\t\tawait fetch(`${url}/${parseInt(id[index].textContent)}`, {\r\n\t\t\t\t\tmethod: \"PATCH\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({ isComplete: false })\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/complete.js?");

/***/ }),

/***/ "./src/js/modules/deleteMethode.js":
/*!*****************************************!*\
  !*** ./src/js/modules/deleteMethode.js ***!
  \*****************************************/
/***/ ((module) => {

eval("module.exports = function (removeBtn,url) {\r\n\tremoveBtn.forEach(btn => {\r\n\t\tbtn.addEventListener(\"click\", async (e) => {\r\n\t\t\te.preventDefault();\r\n\r\n\t\t\tconst fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);\r\n\t\t\tbtn.parentElement.parentElement.remove();\r\n\r\n\t\t\tawait fetch(`${url}/${fakeID}`, {\r\n\t\t\t\tmethod: \"DELETE\"\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/deleteMethode.js?");

/***/ }),

/***/ "./src/js/modules/getMethode.js":
/*!**************************************!*\
  !*** ./src/js/modules/getMethode.js ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = async function GET(ui,url) {\r\n\treturn await fetch(url)\r\n\t\t.then(data => data.json())\r\n\t\t.then(data => {\r\n\t\t\tdata.forEach(obj => ui.toHTML(obj.id,obj.title,obj.isComplete))})};\n\n//# sourceURL=webpack://crud/./src/js/modules/getMethode.js?");

/***/ }),

/***/ "./src/js/modules/postMethod.js":
/*!**************************************!*\
  !*** ./src/js/modules/postMethod.js ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = function (form,screenInput,url) {\r\n\tform.addEventListener(\"submit\", async (e) => {\r\n\t\te.preventDefault();\r\n\r\n\t\tif (screenInput.value.trim() !== \"\") {\r\n\t\t\tawait fetch(url, {\r\n\t\t\t\tmethod: \"POST\",\r\n\t\t\t\theaders: {\r\n\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify({ title: screenInput.value.trim(), isComplete: false })\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\te.target.reset();\r\n\t});\r\n}\n\n//# sourceURL=webpack://crud/./src/js/modules/postMethod.js?");

/***/ }),

/***/ "./src/js/modules/putMethode.js":
/*!**************************************!*\
  !*** ./src/js/modules/putMethode.js ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = function (editBtnArray, saveBtnArray, content,url) {\r\n\teditBtnArray.forEach((editBtn, index) => {\r\n\t\teditBtn.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n\r\n\t\t\teditBtn.style.display = \"none\";\r\n\t\t\tsaveBtnArray[index].style.display = \"inline-block\";\r\n\t\t\tconst fakeID = parseInt(content[index].children[0].textContent);\r\n\t\t\tconst input = content[index].children[1];\r\n\t\t\tinput.classList.add(\"edit\");\r\n\t\t\tinput.removeAttribute(\"readonly\");\r\n\t\t\tsaveBtnArray[index].addEventListener(\"click\", async (e) => {\r\n\t\t\t\te.preventDefault();\r\n\r\n\t\t\t\tawait fetch(`${url}/${fakeID}`, {\r\n\t\t\t\t\tmethod: \"PUT\",\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t\t\"content-type\": \"application/json\"\r\n\t\t\t\t\t},\r\n\t\t\t\t\tbody: JSON.stringify({ title: input.value.trim(), isComplete: false })\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t});\r\n\t});\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://crud/./src/js/modules/putMethode.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = {\r\n\ttitle: document.createElement(\"h1\"),\r\n\tsubTitle : document.createElement(\"p\"),\r\n\tform : document.createElement(\"form\"),\r\n\tscreenBlock: document.createElement(\"div\"),\r\n\tscreenInput: document.createElement(\"input\"),\r\n\tscreenAddBtn: document.createElement(\"button\"),\r\n\tlistsBlock: document.createElement(\"div\"),\r\n\r\nelementOptions () {\r\n\tthis.title.textContent = \"CRUD\";\r\n\tthis.subTitle.textContent = \"Asyn Application\"\r\n\r\n\tthis.form.id = \"app-form\";\r\n\tthis.screenBlock.id = \"screenBlock\";\r\n\tthis.screenInput.type = \"text\";\r\n\tthis.screenInput.placeholder = \"Type here...\";\r\n\tthis.screenAddBtn.textContent = \"ADD\";\r\n\tthis.screenAddBtn.classList.add(\"fa\", \"fa-plus-circle\");\r\n\tthis.screenAddBtn.id = \"screenAddBtn\";\r\n\tthis.listsBlock.id = \"listsBlock\";\r\n},\r\n\r\nappendElements () {\r\n\troot.append(this.title, this.subTitle, this.form, this.listsBlock);\r\n\tthis.form.append(this.screenBlock);\r\n\tthis.screenBlock.append(this.screenInput, this.screenAddBtn);\r\n},\r\n\r\ntoHTML(id,title,state = false){\r\n\tthis.listsBlock.innerHTML += `\r\n\t<div class=\"listsBlockItem\">\r\n\t\t\t<div class=\"listsBlockItemContent\">\r\n\t\t\t\t<span>${id}</span>\r\n\t\t\t\t<input type=\"text\" value=\"${title}\" readonly>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"buttons\">\r\n\t\t\t\t<input type=\"checkbox\" class=\"checkbox\" name=\"item${id}\" ${state ? \"checked\" : \"\"}>\r\n\t\t\t\t<button class=\"removeBtn fa fa-trash\"></button>\r\n\t\t\t\t<button class=\"editBtn fa fa-pencil\"></button>\r\n\t\t\t\t<button class=\"saveBtn fa fa-save\"></button>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t</div>\r\n\t`\r\n},\r\nstart () {\r\n\tthis.elementOptions();\r\n\tthis.appendElements();\r\n}\r\n};\n\n//# sourceURL=webpack://crud/./src/js/modules/ui.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;