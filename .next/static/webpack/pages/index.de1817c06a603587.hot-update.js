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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageSlider.module.css */ \"./src/components/UI/ImageSlider/ImageSlider.module.css\");\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backdrop/Backdrop */ \"./src/components/UI/Backdrop/Backdrop.tsx\");\n/* harmony import */ var _NavArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavArrow */ \"./src/components/UI/ImageSlider/NavArrow.tsx\");\n\n\n\n\n\n\nfunction ImageSlider(props) {\n    var images = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(props.images);\n    var lastId = images.length - 1;\n    var currentId = 0;\n    var navArrowHandler = function(direction) {\n        switch(direction){\n            case \"left\":\n                currentId--;\n        }\n    };\n    var exitClickHandler = function() {\n        props.onExitClick();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"img-container\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: exitClickHandler,\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"xmark-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                    icon: \"xmark\",\n                    inverse: true,\n                    size: \"5x\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"arrows-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"left\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"right\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c = ImageSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci9JbWFnZVNsaWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBR3NCO0FBRXJCO0FBQ1Y7QUFTbEMsU0FBU0ksV0FBVyxDQUFDQyxLQUFZLEVBQUU7SUFDakMsSUFBTUMsTUFBTSxHQUFJLHFGQUFHRCxLQUFLLENBQUNDLE1BQU0sQ0FBWkQ7SUFDbkIsSUFBTUUsTUFBTSxHQUFHRCxNQUFNLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBQ2hDLElBQUlDLFNBQVMsR0FBRyxDQUFDO0lBRWpCLElBQU1DLGVBQWUsR0FBRyxTQUFDQyxTQUFpQixFQUFLO1FBQzdDLE9BQVFBLFNBQVM7WUFDZixLQUFLLE1BQU07Z0JBRVRGLFNBQVMsRUFBRSxDQUFDO1NBQ2Y7S0FDRjtJQUVELElBQU1HLGdCQUFnQixHQUFHLFdBQU07UUFDN0JQLEtBQUssQ0FBQ1EsV0FBVyxFQUFFLENBQUM7S0FDckI7SUFFRCxxQkFDRSw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUVmLHdFQUFXOzswQkFDN0IsOERBQUNFLDBEQUFROzs7O29CQUFHOzBCQUNaLDhEQUFDYyxLQUFHO2dCQUFDRCxTQUFTLEVBQUVmLGlGQUFvQjs7Ozs7b0JBQVE7MEJBQzVDLDhEQUFDZ0IsS0FBRztnQkFBQ0MsT0FBTyxFQUFFTCxnQkFBZ0I7Z0JBQUVHLFNBQVMsRUFBRWYsbUZBQXNCOzBCQUMvRCw0RUFBQ0MsMkVBQWU7b0JBQUNpQixJQUFJLEVBQUUsT0FBTztvQkFBRUMsT0FBTztvQkFBQ0MsSUFBSSxFQUFDLElBQUk7Ozs7O3dCQUFHOzs7OztvQkFDaEQ7MEJBQ04sOERBQUNKLEtBQUc7Z0JBQUNELFNBQVMsRUFBRWYsb0ZBQXVCOztrQ0FDckMsOERBQUNHLGlEQUFRO3dCQUFDYyxPQUFPLEVBQUVQLGVBQWU7d0JBQUVDLFNBQVMsRUFBRSxNQUFNOzs7Ozs0QkFBSTtrQ0FDekQsOERBQUNSLGlEQUFRO3dCQUFDYyxPQUFPLEVBQUVQLGVBQWU7d0JBQUVDLFNBQVMsRUFBRSxPQUFPOzs7Ozs0QkFBSTs7Ozs7O29CQUN0RDs7Ozs7O1lBQ0UsQ0FDVjtDQUNIO0FBOUJRUCxLQUFBQSxXQUFXO0FBZ0NwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VJL0ltYWdlU2xpZGVyL0ltYWdlU2xpZGVyLnRzeD8yY2MzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcIi4vSW1hZ2VTbGlkZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCIuLi9CYWNrZHJvcC9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgTmF2QXJyb3cgZnJvbSBcIi4vTmF2QXJyb3dcIjtcclxuaW1wb3J0IHsgSW1hZ2VPYmogfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL3R5cGVzXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG9uRXhpdENsaWNrOiBGdW5jdGlvbjtcclxuICBpbWFnZXM6IEltYWdlT2JqW107XHJcbiAgaW5pdGlhbEltYWdlSWQ6IG51bWJlcjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEltYWdlU2xpZGVyKHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IGltYWdlcyA9IFsuLi5wcm9wcy5pbWFnZXNdO1xyXG4gIGNvbnN0IGxhc3RJZCA9IGltYWdlcy5sZW5ndGggLSAxO1xyXG4gIGxldCBjdXJyZW50SWQgPSAwO1xyXG5cclxuICBjb25zdCBuYXZBcnJvd0hhbmRsZXIgPSAoZGlyZWN0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3VycmVudElkLS07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZXhpdENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHByb3BzLm9uRXhpdENsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y3NzLnNlY3Rpb259PlxyXG4gICAgICA8QmFja2Ryb3AgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc1tcImltZy1jb250YWluZXJcIl19PjwvZGl2PlxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e2V4aXRDbGlja0hhbmRsZXJ9IGNsYXNzTmFtZT17Y3NzW1wieG1hcmstY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1wieG1hcmtcIn0gaW52ZXJzZSBzaXplPVwiNXhcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc1tcImFycm93cy1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxOYXZBcnJvdyBvbkNsaWNrPXtuYXZBcnJvd0hhbmRsZXJ9IGRpcmVjdGlvbj17XCJsZWZ0XCJ9IC8+XHJcbiAgICAgICAgPE5hdkFycm93IG9uQ2xpY2s9e25hdkFycm93SGFuZGxlcn0gZGlyZWN0aW9uPXtcInJpZ2h0XCJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlU2xpZGVyO1xyXG4iXSwibmFtZXMiOlsiY3NzIiwiRm9udEF3ZXNvbWVJY29uIiwiQmFja2Ryb3AiLCJOYXZBcnJvdyIsIkltYWdlU2xpZGVyIiwicHJvcHMiLCJpbWFnZXMiLCJsYXN0SWQiLCJsZW5ndGgiLCJjdXJyZW50SWQiLCJuYXZBcnJvd0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJleGl0Q2xpY2tIYW5kbGVyIiwib25FeGl0Q2xpY2siLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsImljb24iLCJpbnZlcnNlIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UI/ImageSlider/ImageSlider.tsx\n"));

/***/ })

});