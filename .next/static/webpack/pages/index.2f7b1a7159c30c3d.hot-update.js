"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/UI/ImageSlider/ImageSlider.tsx":
/*!*******************************************************!*\
  !*** ./src/components/UI/ImageSlider/ImageSlider.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageSlider.module.css */ \"./src/components/UI/ImageSlider/ImageSlider.module.css\");\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backdrop/Backdrop */ \"./src/components/UI/Backdrop/Backdrop.tsx\");\n/* harmony import */ var _NavArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavArrow */ \"./src/components/UI/ImageSlider/NavArrow.tsx\");\n\n\n\n\n\n\nfunction ImageSlider(props) {\n    var images = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(props.images);\n    var lastId = images.length - 1;\n    var currentId = 0;\n    var navArrowHandler = function(direction) {\n        switch(direction){\n            case \"left\":\n        }\n    };\n    var exitClickHandler = function() {\n        props.onExitClick();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"img-container\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: exitClickHandler,\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"xmark-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                    icon: \"xmark\",\n                    inverse: true,\n                    size: \"5x\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"arrows-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"left\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"right\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_c = ImageSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci9JbWFnZVNsaWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBR3NCO0FBRXJCO0FBQ1Y7QUFTbEMsU0FBU0ksV0FBVyxDQUFDQyxLQUFZLEVBQUU7SUFDakMsSUFBTUMsTUFBTSxHQUFJLHFGQUFHRCxLQUFLLENBQUNDLE1BQU0sQ0FBWkQ7SUFDbkIsSUFBTUUsTUFBTSxHQUFHRCxNQUFNLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBRWhDLElBQUlDLFNBQVMsR0FBRyxDQUFDO0lBRWpCLElBQU1DLGVBQWUsR0FBRyxTQUFDQyxTQUFpQixFQUFLO1FBQzdDLE9BQVFBLFNBQVM7WUFDZixLQUFLLE1BQU0sQ0FBQztTQUNiO0tBQ0Y7SUFFRCxJQUFNQyxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCUCxLQUFLLENBQUNRLFdBQVcsRUFBRSxDQUFDO0tBQ3JCO0lBRUQscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFFZix3RUFBVzs7MEJBQzdCLDhEQUFDRSwwREFBUTs7OztvQkFBRzswQkFDWiw4REFBQ2MsS0FBRztnQkFBQ0QsU0FBUyxFQUFFZixpRkFBb0I7Ozs7O29CQUFROzBCQUM1Qyw4REFBQ2dCLEtBQUc7Z0JBQUNDLE9BQU8sRUFBRUwsZ0JBQWdCO2dCQUFFRyxTQUFTLEVBQUVmLG1GQUFzQjswQkFDL0QsNEVBQUNDLDJFQUFlO29CQUFDaUIsSUFBSSxFQUFFLE9BQU87b0JBQUVDLE9BQU87b0JBQUNDLElBQUksRUFBQyxJQUFJOzs7Ozt3QkFBRzs7Ozs7b0JBQ2hEOzBCQUNOLDhEQUFDSixLQUFHO2dCQUFDRCxTQUFTLEVBQUVmLG9GQUF1Qjs7a0NBQ3JDLDhEQUFDRyxpREFBUTt3QkFBQ2MsT0FBTyxFQUFFUCxlQUFlO3dCQUFFQyxTQUFTLEVBQUUsTUFBTTs7Ozs7NEJBQUk7a0NBQ3pELDhEQUFDUixpREFBUTt3QkFBQ2MsT0FBTyxFQUFFUCxlQUFlO3dCQUFFQyxTQUFTLEVBQUUsT0FBTzs7Ozs7NEJBQUk7Ozs7OztvQkFDdEQ7Ozs7OztZQUNFLENBQ1Y7Q0FDSDtBQTdCUVAsS0FBQUEsV0FBVztBQStCcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci9JbWFnZVNsaWRlci50c3g/MmNjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuL0ltYWdlU2xpZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiLi4vQmFja2Ryb3AvQmFja2Ryb3BcIjtcclxuaW1wb3J0IE5hdkFycm93IGZyb20gXCIuL05hdkFycm93XCI7XHJcbmltcG9ydCB7IEltYWdlT2JqIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy90eXBlc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBvbkV4aXRDbGljazogRnVuY3Rpb247XHJcbiAgaW1hZ2VzOiBJbWFnZU9ialtdO1xyXG4gIGluaXRpYWxJbWFnZUlkOiBudW1iZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBJbWFnZVNsaWRlcihwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCBpbWFnZXMgPSBbLi4ucHJvcHMuaW1hZ2VzXTtcclxuICBjb25zdCBsYXN0SWQgPSBpbWFnZXMubGVuZ3RoIC0gMTtcclxuXHJcbiAgbGV0IGN1cnJlbnRJZCA9IDA7XHJcblxyXG4gIGNvbnN0IG5hdkFycm93SGFuZGxlciA9IChkaXJlY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBleGl0Q2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcHJvcHMub25FeGl0Q2xpY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3Muc2VjdGlvbn0+XHJcbiAgICAgIDxCYWNrZHJvcCAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzW1wiaW1nLWNvbnRhaW5lclwiXX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgb25DbGljaz17ZXhpdENsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPXtjc3NbXCJ4bWFyay1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17XCJ4bWFya1wifSBpbnZlcnNlIHNpemU9XCI1eFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzW1wiYXJyb3dzLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPE5hdkFycm93IG9uQ2xpY2s9e25hdkFycm93SGFuZGxlcn0gZGlyZWN0aW9uPXtcImxlZnRcIn0gLz5cclxuICAgICAgICA8TmF2QXJyb3cgb25DbGljaz17bmF2QXJyb3dIYW5kbGVyfSBkaXJlY3Rpb249e1wicmlnaHRcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJjc3MiLCJGb250QXdlc29tZUljb24iLCJCYWNrZHJvcCIsIk5hdkFycm93IiwiSW1hZ2VTbGlkZXIiLCJwcm9wcyIsImltYWdlcyIsImxhc3RJZCIsImxlbmd0aCIsImN1cnJlbnRJZCIsIm5hdkFycm93SGFuZGxlciIsImRpcmVjdGlvbiIsImV4aXRDbGlja0hhbmRsZXIiLCJvbkV4aXRDbGljayIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwiaWNvbiIsImludmVyc2UiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/ImageSlider/ImageSlider.tsx\n"));

/***/ })

});