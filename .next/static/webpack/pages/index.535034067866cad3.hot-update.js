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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageSlider.module.css */ \"./src/components/UI/ImageSlider/ImageSlider.module.css\");\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Backdrop/Backdrop */ \"./src/components/UI/Backdrop/Backdrop.tsx\");\n/* harmony import */ var _NavArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavArrow */ \"./src/components/UI/ImageSlider/NavArrow.tsx\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ImageSlider(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currId = ref[0], setCurrId = ref[1];\n    var images = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(props.images);\n    var lastId = images.length - 1;\n    var navArrowHandler = function(direction) {\n        switch(direction){\n            case \"left\":\n                if (currentId === 0) {\n                    setCurrId(lastId);\n                } else {\n                    setCurrId(function(state) {});\n                }\n        }\n    };\n    var exitClickHandler = function() {\n        props.onExitClick();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"img-container\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: exitClickHandler,\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"xmark-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    icon: \"xmark\",\n                    inverse: true,\n                    size: \"5x\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"arrows-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"left\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"right\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageSlider, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = ImageSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci9JbWFnZVNsaWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDVjtBQUVnQztBQUVyQjtBQUNWOztBQVNsQyxTQUFTSyxXQUFXLENBQUNDLEtBQVksRUFBRTs7SUFDakMsSUFBNEJMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBaENNLE1BQU0sR0FBZU4sR0FBVyxHQUExQixFQUFFTyxTQUFTLEdBQUlQLEdBQVcsR0FBZjtJQUV4QixJQUFNUSxNQUFNLEdBQUkscUZBQUdILEtBQUssQ0FBQ0csTUFBTSxDQUFaSDtJQUNuQixJQUFNSSxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFFaEMsSUFBTUMsZUFBZSxHQUFHLFNBQUNDLFNBQWlCLEVBQUs7UUFDN0MsT0FBUUEsU0FBUztZQUNmLEtBQUssTUFBTTtnQkFDVCxJQUFJQyxTQUFTLEtBQUssQ0FBQyxFQUFFO29CQUNuQk4sU0FBUyxDQUFDRSxNQUFNLENBQUMsQ0FBRTtpQkFDcEIsTUFBTTtvQkFDTEYsU0FBUyxDQUFDLFNBQUNPLEtBQUssRUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDekI7U0FDSjtLQUNGO0lBRUQsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QlYsS0FBSyxDQUFDVyxXQUFXLEVBQUUsQ0FBQztLQUNyQjtJQUVELHFCQUNFLDhEQUFDQyxTQUFPO1FBQUNDLFNBQVMsRUFBRW5CLHdFQUFXOzswQkFDN0IsOERBQUNHLDBEQUFROzs7O29CQUFHOzBCQUNaLDhEQUFDaUIsS0FBRztnQkFBQ0QsU0FBUyxFQUFFbkIsaUZBQW9COzs7OztvQkFBUTswQkFDNUMsOERBQUNvQixLQUFHO2dCQUFDQyxPQUFPLEVBQUVMLGdCQUFnQjtnQkFBRUcsU0FBUyxFQUFFbkIsbUZBQXNCOzBCQUMvRCw0RUFBQ0UsMkVBQWU7b0JBQUNvQixJQUFJLEVBQUUsT0FBTztvQkFBRUMsT0FBTztvQkFBQ0MsSUFBSSxFQUFDLElBQUk7Ozs7O3dCQUFHOzs7OztvQkFDaEQ7MEJBQ04sOERBQUNKLEtBQUc7Z0JBQUNELFNBQVMsRUFBRW5CLG9GQUF1Qjs7a0NBQ3JDLDhEQUFDSSxpREFBUTt3QkFBQ2lCLE9BQU8sRUFBRVQsZUFBZTt3QkFBRUMsU0FBUyxFQUFFLE1BQU07Ozs7OzRCQUFJO2tDQUN6RCw4REFBQ1QsaURBQVE7d0JBQUNpQixPQUFPLEVBQUVULGVBQWU7d0JBQUVDLFNBQVMsRUFBRSxPQUFPOzs7Ozs0QkFBSTs7Ozs7O29CQUN0RDs7Ozs7O1lBQ0UsQ0FDVjtDQUNIO0dBbENRUixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUFvQ3BCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVUkvSW1hZ2VTbGlkZXIvSW1hZ2VTbGlkZXIudHN4PzJjYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwiLi9JbWFnZVNsaWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcblxyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIi4uL0JhY2tkcm9wL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBOYXZBcnJvdyBmcm9tIFwiLi9OYXZBcnJvd1wiO1xyXG5pbXBvcnQgeyBJbWFnZU9iaiB9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvdHlwZXNcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgb25FeGl0Q2xpY2s6IEZ1bmN0aW9uO1xyXG4gIGltYWdlczogSW1hZ2VPYmpbXTtcclxuICBpbml0aWFsSW1hZ2VJZDogbnVtYmVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VTbGlkZXIocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgW2N1cnJJZCwgc2V0Q3VycklkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBpbWFnZXMgPSBbLi4ucHJvcHMuaW1hZ2VzXTtcclxuICBjb25zdCBsYXN0SWQgPSBpbWFnZXMubGVuZ3RoIC0gMTtcclxuXHJcbiAgY29uc3QgbmF2QXJyb3dIYW5kbGVyID0gKGRpcmVjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgIGlmIChjdXJyZW50SWQgPT09IDApIHtcclxuICAgICAgICAgIHNldEN1cnJJZChsYXN0SWQpIDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0Q3VycklkKChzdGF0ZSk9PiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGV4aXRDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5vbkV4aXRDbGljaygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Nzcy5zZWN0aW9ufT5cclxuICAgICAgPEJhY2tkcm9wIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NbXCJpbWctY29udGFpbmVyXCJdfT48L2Rpdj5cclxuICAgICAgPGRpdiBvbkNsaWNrPXtleGl0Q2xpY2tIYW5kbGVyfSBjbGFzc05hbWU9e2Nzc1tcInhtYXJrLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtcInhtYXJrXCJ9IGludmVyc2Ugc2l6ZT1cIjV4XCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NbXCJhcnJvd3MtY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8TmF2QXJyb3cgb25DbGljaz17bmF2QXJyb3dIYW5kbGVyfSBkaXJlY3Rpb249e1wibGVmdFwifSAvPlxyXG4gICAgICAgIDxOYXZBcnJvdyBvbkNsaWNrPXtuYXZBcnJvd0hhbmRsZXJ9IGRpcmVjdGlvbj17XCJyaWdodFwifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlcjtcclxuIl0sIm5hbWVzIjpbImNzcyIsInVzZVN0YXRlIiwiRm9udEF3ZXNvbWVJY29uIiwiQmFja2Ryb3AiLCJOYXZBcnJvdyIsIkltYWdlU2xpZGVyIiwicHJvcHMiLCJjdXJySWQiLCJzZXRDdXJySWQiLCJpbWFnZXMiLCJsYXN0SWQiLCJsZW5ndGgiLCJuYXZBcnJvd0hhbmRsZXIiLCJkaXJlY3Rpb24iLCJjdXJyZW50SWQiLCJzdGF0ZSIsImV4aXRDbGlja0hhbmRsZXIiLCJvbkV4aXRDbGljayIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwiaWNvbiIsImludmVyc2UiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/ImageSlider/ImageSlider.tsx\n"));

/***/ })

});