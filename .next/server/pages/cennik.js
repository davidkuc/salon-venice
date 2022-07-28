/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/cennik";
exports.ids = ["pages/cennik"];
exports.modules = {

/***/ "./src/components/ServicesPrices/PriceList/PriceList.module.css":
/*!**********************************************************************!*\
  !*** ./src/components/ServicesPrices/PriceList/PriceList.module.css ***!
  \**********************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"number\": \"PriceList_number__p98mZ\",\n\t\"line-break\": \"PriceList_line-break__2VYyA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlc1ByaWNlcy9QcmljZUxpc3QvUHJpY2VMaXN0Lm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbG9uLXZlbmljZS8uL3NyYy9jb21wb25lbnRzL1NlcnZpY2VzUHJpY2VzL1ByaWNlTGlzdC9QcmljZUxpc3QubW9kdWxlLmNzcz81NzQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm51bWJlclwiOiBcIlByaWNlTGlzdF9udW1iZXJfX3A5OG1aXCIsXG5cdFwibGluZS1icmVha1wiOiBcIlByaWNlTGlzdF9saW5lLWJyZWFrX18yVll5QVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ServicesPrices/PriceList/PriceList.module.css\n");

/***/ }),

/***/ "./src/components/UI/TitleBar/TitleBar.module.css":
/*!********************************************************!*\
  !*** ./src/components/UI/TitleBar/TitleBar.module.css ***!
  \********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"title-bar\": \"TitleBar_title-bar__iOBrO\",\n\t\"text\": \"TitleBar_text__U9lEC\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9UaXRsZUJhci9UaXRsZUJhci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWxvbi12ZW5pY2UvLi9zcmMvY29tcG9uZW50cy9VSS9UaXRsZUJhci9UaXRsZUJhci5tb2R1bGUuY3NzPzBkMzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGl0bGUtYmFyXCI6IFwiVGl0bGVCYXJfdGl0bGUtYmFyX19pT0JyT1wiLFxuXHRcInRleHRcIjogXCJUaXRsZUJhcl90ZXh0X19VOWxFQ1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UI/TitleBar/TitleBar.module.css\n");

/***/ }),

/***/ "./src/components/ServicesPrices/PriceList/PriceList.tsx":
/*!***************************************************************!*\
  !*** ./src/components/ServicesPrices/PriceList/PriceList.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PriceList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriceList.module.css */ \"./src/components/ServicesPrices/PriceList/PriceList.module.css\");\n/* harmony import */ var _PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\r\n *\r\n * @param services Array of Services objects\r\n * @returns\r\n */ function PriceList({ number , title , services  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"price-list\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default().number),\n                    children: `.0${number}`\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"line-break\"])\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriceList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlc1ByaWNlcy9QcmljZUxpc3QvUHJpY2VMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFZTtBQVV6Qzs7UUFPYU8sU0FBUyxFQUFFTixHQUFHLENBQUMsWUFBWSxDQUFDOzs7c0ZBRWpDLE1BQUNPLEtBQUc7K0ZBQWdCTDs4QkFBUyxDQUFDLDhEQUFJQSxFQUFNLENBQUMsQ0FBQzs7Ozs7d0JBQU87OEJBQ2pELFFBQUNLLEtBQUc7b0JBQUNELFNBQVMsRUFBRU4sR0FBRyxDQUFDOzs7Ozt3QkFBcUI7Ozs7OztnQkFDckM7Ozs7O1lBQ0UsQ0FDVjtDQUNIO0FBRUQsZUFBZUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWxvbi12ZW5pY2UvLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlc1ByaWNlcy9QcmljZUxpc3QvUHJpY2VMaXN0LnRzeD9iM2UzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUHJpY2VMaXN0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL3R5cGVzXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc2VydmljZXM/OiBTZXJ2aWNlW107XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHNlcnZpY2VzIEFycmF5IG9mIFNlcnZpY2VzIG9iamVjdHNcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIFByaWNlTGlzdCh7IG51bWJlciwgdGl0bGUsIHNlcnZpY2VzIH06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzW1wicHJpY2UtbGlzdFwiXX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5udW1iZXJ9PntgLjAke251bWJlcn1gfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NbXCJsaW5lLWJyZWFrXCJdfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VMaXN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjc3MiLCJQcmljZUxpc3QiLCJudW1iZXIiLCJ0aXRsZSIsInNlcnZpY2VzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ServicesPrices/PriceList/PriceList.tsx\n");

/***/ }),

/***/ "./src/components/UI/TitleBar/TitleBar.tsx":
/*!*************************************************!*\
  !*** ./src/components/UI/TitleBar/TitleBar.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TitleBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TitleBar.module.css */ \"./src/components/UI/TitleBar/TitleBar.module.css\");\n/* harmony import */ var _TitleBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TitleBar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction TitleBar({ children  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_TitleBar_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"title-bar\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_TitleBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\TitleBar\\\\TitleBar.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\TitleBar\\\\TitleBar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleBar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9UaXRsZUJhci9UaXRsZUJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBRWM7QUFNeEMsU0FBU0UsUUFBUSxDQUFDLEVBQUVDLFFBQVEsR0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDQyxTQUFPO1FBQUNDLFNBQVMsRUFBRUosMEVBQWdCO2tCQUNsQyw0RUFBQ0ssS0FBRztZQUFDRCxTQUFTLEVBQUVKLGtFQUFRO3NCQUFHRSxRQUFROzs7OztnQkFBTzs7Ozs7WUFDbEMsQ0FDVjtDQUNIO0FBRUQsaUVBQWVELFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbG9uLXZlbmljZS8uL3NyYy9jb21wb25lbnRzL1VJL1RpdGxlQmFyL1RpdGxlQmFyLnRzeD9mNWMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vVGl0bGVCYXIubW9kdWxlLmNzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbj86IHN0cmluZztcclxufTtcclxuXHJcbmZ1bmN0aW9uIFRpdGxlQmFyKHsgY2hpbGRyZW4gfTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3NbXCJ0aXRsZS1iYXJcIl19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnRleHR9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaXRsZUJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3NzIiwiVGl0bGVCYXIiLCJjaGlsZHJlbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/TitleBar/TitleBar.tsx\n");

/***/ }),

/***/ "./src/pages/cennik/index.tsx":
/*!************************************!*\
  !*** ./src/pages/cennik/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UI_TitleBar_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UI/TitleBar/TitleBar */ \"./src/components/UI/TitleBar/TitleBar.tsx\");\n/* harmony import */ var _components_ServicesPrices_PriceList_PriceList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ServicesPrices/PriceList/PriceList */ \"./src/components/ServicesPrices/PriceList/PriceList.tsx\");\n\n\n\nfunction Cennik() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_TitleBar_TitleBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: \"Cennik\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\pages\\\\cennik\\\\index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ServicesPrices_PriceList_PriceList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                number: \"1\",\n                title: \"Zabiegi na twarz\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\pages\\\\cennik\\\\index.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\pages\\\\cennik\\\\index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cennik);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2VubmlrL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTREO0FBQ2dCO0FBRTVFLFNBQVNFLE1BQU0sR0FBRztJQUNoQixxQkFDRSw4REFBQ0MsTUFBSTs7MEJBQ0gsOERBQUNILHdFQUFROzBCQUFDLFFBQU07Ozs7O29CQUFXOzBCQUMzQiw4REFBQ0Msc0ZBQVM7Z0JBQUNHLE1BQU0sRUFBQyxHQUFHO2dCQUFDQyxLQUFLLEVBQUMsa0JBQWtCOzs7OztvQkFBYTs7Ozs7O1lBQ3RELENBQ1A7Q0FDSDtBQUVELGlFQUFlSCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWxvbi12ZW5pY2UvLi9zcmMvcGFnZXMvY2VubmlrL2luZGV4LnRzeD9kMGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZUJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VSS9UaXRsZUJhci9UaXRsZUJhclwiXHJcbmltcG9ydCBQcmljZUxpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VydmljZXNQcmljZXMvUHJpY2VMaXN0L1ByaWNlTGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gQ2VubmlrKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPFRpdGxlQmFyPkNlbm5pazwvVGl0bGVCYXI+XHJcbiAgICAgIDxQcmljZUxpc3QgbnVtYmVyPVwiMVwiIHRpdGxlPVwiWmFiaWVnaSBuYSB0d2FyelwiPjwvUHJpY2VMaXN0PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENlbm5paztcclxuIl0sIm5hbWVzIjpbIlRpdGxlQmFyIiwiUHJpY2VMaXN0IiwiQ2VubmlrIiwibWFpbiIsIm51bWJlciIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/cennik/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/cennik/index.tsx"));
module.exports = __webpack_exports__;

})();