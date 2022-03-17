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

/***/ "./src/eliminator.js":
/*!***************************!*\
  !*** ./src/eliminator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeCard\": () => (/* binding */ removeCard),\n/* harmony export */   \"removeList\": () => (/* binding */ removeList)\n/* harmony export */ });\nfunction removeList (id){\n    let listTasks = document.querySelector('.listTasks')\n    let list = document.getElementById(id-60)\n    listTasks.removeChild(list)\n}\n\nfunction removeCard (){\n    let box = document.getElementById('improvisado')\n    box.innerHTML = ''\n}\n\n\n\n//# sourceURL=webpack://todlist/./src/eliminator.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addInfoForm\": () => (/* binding */ addInfoForm),\n/* harmony export */   \"cleanerForm\": () => (/* binding */ cleanerForm),\n/* harmony export */   \"hidenForm\": () => (/* binding */ hidenForm),\n/* harmony export */   \"viewForm\": () => (/* binding */ viewForm)\n/* harmony export */ });\nfunction viewForm(){\n    let fondoForm = document.getElementById('screen')\n    fondoForm.classList.add('screen')\n    \n    let form = document.querySelector('.simodal')\n    form.classList.remove('nomodal')\n\n}\n\nfunction hidenForm(){\n    let fondoForm = document.getElementById('screen')\n    fondoForm.classList.remove('screen')\n\n    let form = document.querySelector('.simodal')\n    form.classList.add('nomodal')\n}\n\nfunction addInfoForm(){\n    let nameTask = document.getElementById('nameTask').value\n    let descripcionTask = document.getElementById('descripcionTask').value\n    let dateTask = document.getElementById('dateTask').value\n\n    return{\n        nameTask,\n        descripcionTask,\n        dateTask\n    }\n}\n\nfunction cleanerForm(){\n    document.getElementById('nameTask').value = ''\n    document.getElementById('descripcionTask').innerHTML =''\n    document.getElementById('descripcionTask').value =''\n    document.getElementById('dateTask').value = ''\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todlist/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _maker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maker.js */ \"./src/maker.js\");\n/* harmony import */ var _eliminator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eliminator */ \"./src/eliminator.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\n \n\n\n\n\n\nconsole.log('hola Diego')\n\nlet numberTasks = []\nclass admin {}\nlet allTasks = new admin\n\nwindow.addEventListener('click',(e)=>{\n  observerId(e.target.id)\n  observerClass(e.srcElement.className, e.target.id)\n})\n\nfunction observerId(e){\n  switch(e){\n    case 'addInfo':\n        ;(0,_form__WEBPACK_IMPORTED_MODULE_2__.viewForm)()\n        break;\n    case 'screen':\n        (0,_form__WEBPACK_IMPORTED_MODULE_2__.hidenForm)()\n        ;(0,_form__WEBPACK_IMPORTED_MODULE_2__.cleanerForm)()\n        break;\n    case 'submiTask':\n        reciverInfo()\n        ;(0,_form__WEBPACK_IMPORTED_MODULE_2__.hidenForm)()\n        ;(0,_form__WEBPACK_IMPORTED_MODULE_2__.cleanerForm)()\n        ;(0,_maker_js__WEBPACK_IMPORTED_MODULE_0__.makeListCard)(allTasks['task'+`${numberTasks.length -1}`].nameTask, numberTasks.length-1)\n        break;\n  }\n}\n\nfunction observerClass(e, id){\n  switch(e){\n    case 'listOne':\n      (0,_eliminator__WEBPACK_IMPORTED_MODULE_1__.removeCard)()\n      ;(0,_maker_js__WEBPACK_IMPORTED_MODULE_0__.makeCard)(allTasks['task'+`${id}`], id)\n      break;\n    case 'mark':\n      (0,_maker_js__WEBPACK_IMPORTED_MODULE_0__.marker)(id)\n      console.log(id)\n      break;\n    case 'delete':\n      (0,_eliminator__WEBPACK_IMPORTED_MODULE_1__.removeCard)()\n      ;(0,_eliminator__WEBPACK_IMPORTED_MODULE_1__.removeList)(id)\n  }\n}\n\n\n\nfunction reciverInfo (){\n  let i = numberTasks.length\n  allTasks['task'+`${i}`] = (0,_form__WEBPACK_IMPORTED_MODULE_2__.addInfoForm)()\n  numberTasks.push('a')\n}\n\n\n//console.log(document.getElementById('nameTask').value)\n\n//# sourceURL=webpack://todlist/./src/index.js?");

/***/ }),

/***/ "./src/maker.js":
/*!**********************!*\
  !*** ./src/maker.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeCard\": () => (/* binding */ makeCard),\n/* harmony export */   \"makeListCard\": () => (/* binding */ makeListCard),\n/* harmony export */   \"marker\": () => (/* binding */ marker)\n/* harmony export */ });\nfunction makeListCard (x, y){\n    let listTasks = document.querySelector('.listTasks')\n    let list = document.createElement('div')\n    let circle = document.createElement('div')\n    let div = document.createElement('div')\n    let spanName = document.createElement('span')\n    let personal = document.createElement('span')\n\n    list.classList.add('listOne')\n    list.id = y\n    circle.classList.add('circle')\n    personal.classList.add('personal')\n\n    spanName.innerHTML = x\n    personal.innerHTML = 'Personal'\n\n    div.append(spanName)\n    div.append(personal)\n    list.append(circle) \n    list.append(div)\n    listTasks.append(list)\n}\n\n\nfunction makeCard (x, y){\n    let improvisado = document.getElementById('improvisado')\n    let box = document.createElement('div')\n    box.classList.add('boxtext')\n    box.id = `4${y}`\n    let details = document.createElement('div')\n        let span = document.createElement('span')\n        let mark  = document.createElement('span')\n    let task = document.createElement('div')\n        let taskName = document.createElement('div')\n            let spanTaskName = document.createElement('span')\n        let taskDescripcion = document.createElement('div')\n            let spanTaskDescripcion = document.createElement('span')\n            let spanDescripcion = document.createElement('span')\n        let taskDate = document.createElement('div')\n            let spanTaskDate = document.createElement('span')\n            let spanDate = document.createElement('span')\n        let taskNotes = document.createElement('div')\n            let spanTaskNotes = document.createElement('span')\n            let spanNotes = document.createElement('span')\n    let remove = document.createElement('div')\n        let spanRemove = document.createElement('span')\n\n\n    details.classList.add('details')\n        mark.classList.add('mark')\n        mark.id = `2${y}`  \n    task.classList.add('task')\n        taskName.classList.add('taskName')\n    taskDescripcion.classList.add('taskDescripcion')    \n    taskDate.classList.add('taskDate')\n    taskNotes.classList.add('taskNotes')\n    remove.classList.add('delete')\n    \n\n    span.innerHTML = 'Task Details'\n    mark.innerHTML = 'Mark as done'\n    spanTaskName.innerHTML = x.nameTask\n    spanTaskDescripcion.innerHTML = 'DESCRIPCION'\n    spanDescripcion.innerHTML = x.descripcionTask\n    spanTaskDate.innerHTML = 'DATE'\n    spanDate.innerHTML = x.dateTask\n    spanTaskNotes.innerHTML = 'NOTES'\n    spanNotes.innerHTML = 'Aqui van notas muy chevere'\n\n    spanRemove.innerHTML = 'Delete Task'\n    spanRemove.id = `6${y}` \n    details.append(span)\n    details.append(mark)\n\n    taskName.append(spanTaskName)\n    taskDescripcion.append(spanTaskDescripcion)\n    taskDate.append(spanTaskDate)\n    taskNotes.append(spanTaskNotes)\n\n    task.append(taskName)    \n    task.append(taskDescripcion)\n    task.append(spanDescripcion)\n    task.append(taskDate)\n    task.append(spanDate)\n    task.append(taskNotes)\n    task.append(spanNotes)\n\n    remove.append(spanRemove)\n\n    taskDescripcion.classList.add('sub')\n    taskDate.classList.add('sub')\n    taskNotes.classList.add('sub')\n\n\n    box.append(details)\n    box.append(task)\n    box.append(remove)\n\n    improvisado.append(box)\n}\nfunction marker(x){\n    let objeto = document.getElementById(x-20)\n    objeto.classList.add('markList')\n    let objeto2 = document.getElementById(x-(-20))\n    objeto2.classList.add('markList')\n    \n}\n\n\n\n\n\n//# sourceURL=webpack://todlist/./src/maker.js?");

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