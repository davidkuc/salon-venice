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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageSlider.module.css */ \"./src/components/UI/ImageSlider/ImageSlider.module.css\");\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Backdrop/Backdrop */ \"./src/components/UI/Backdrop/Backdrop.tsx\");\n/* harmony import */ var _NavArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavArrow */ \"./src/components/UI/ImageSlider/NavArrow.tsx\");\n\n\n\n\n\n\nfunction ImageSlider(props) {\n    var navArrowHandler = function(direction) {\n        switch(direction){\n            case \"left\":\n        }\n    };\n    var images = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(props.images);\n    var exitClickHandler = function() {\n        props.onExitClick();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"img-container\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: exitClickHandler,\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"xmark-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                    icon: \"xmark\",\n                    inverse: true,\n                    size: \"5x\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"arrows-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"left\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"right\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_c = ImageSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci9JbWFnZVNsaWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBRXNCO0FBRXJCO0FBQ1Y7QUFRbEMsU0FBU0ksV0FBVyxDQUFDQyxLQUFZLEVBQUU7SUFJakMsSUFBTUMsZUFBZSxHQUFHLFNBQUNDLFNBQWlCLEVBQUs7UUFDN0MsT0FBUUEsU0FBUztZQUNmLEtBQUssTUFBTSxDQUFDO1NBQ2I7S0FDRjtJQUVELElBQU1DLE1BQU0sR0FBSSxxRkFBR0gsS0FBSyxDQUFDRyxNQUFNLENBQVpIO0lBRW5CLElBQU1JLGdCQUFnQixHQUFHLFdBQU07UUFDN0JKLEtBQUssQ0FBQ0ssV0FBVyxFQUFFLENBQUM7S0FDckI7SUFFRCxxQkFDRSw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUVaLHdFQUFXOzswQkFDN0IsOERBQUNFLDBEQUFROzs7O29CQUFHOzBCQUNaLDhEQUFDVyxLQUFHO2dCQUFDRCxTQUFTLEVBQUVaLGlGQUFvQjs7Ozs7b0JBQVE7MEJBQzVDLDhEQUFDYSxLQUFHO2dCQUFDQyxPQUFPLEVBQUVMLGdCQUFnQjtnQkFBRUcsU0FBUyxFQUFFWixtRkFBc0I7MEJBQy9ELDRFQUFDQywyRUFBZTtvQkFBQ2MsSUFBSSxFQUFFLE9BQU87b0JBQUVDLE9BQU87b0JBQUNDLElBQUksRUFBQyxJQUFJOzs7Ozt3QkFBRzs7Ozs7b0JBQ2hEOzBCQUNOLDhEQUFDSixLQUFHO2dCQUFDRCxTQUFTLEVBQUVaLG9GQUF1Qjs7a0NBQ3JDLDhEQUFDRyxpREFBUTt3QkFBQ1csT0FBTyxFQUFFUixlQUFlO3dCQUFFQyxTQUFTLEVBQUUsTUFBTTs7Ozs7NEJBQUk7a0NBQ3pELDhEQUFDSixpREFBUTt3QkFBQ1csT0FBTyxFQUFFUixlQUFlO3dCQUFFQyxTQUFTLEVBQUUsT0FBTzs7Ozs7NEJBQUk7Ozs7OztvQkFDdEQ7Ozs7OztZQUNFLENBQ1Y7Q0FDSDtBQTdCUUgsS0FBQUEsV0FBVztBQStCcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci9JbWFnZVNsaWRlci50c3g/MmNjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuL0ltYWdlU2xpZGVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiLi4vQmFja2Ryb3AvQmFja2Ryb3BcIjtcclxuaW1wb3J0IE5hdkFycm93IGZyb20gXCIuL05hdkFycm93XCI7XHJcbmltcG9ydCB7IEltYWdlT2JqIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy90eXBlc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBvbkV4aXRDbGljazogRnVuY3Rpb247XHJcbiAgaW1hZ2VzOiBJbWFnZU9ialtdO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VTbGlkZXIocHJvcHM6IFByb3BzKSB7XHJcblxyXG5cclxuICBcclxuICBjb25zdCBuYXZBcnJvd0hhbmRsZXIgPSAoZGlyZWN0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1hZ2VzID0gWy4uLnByb3BzLmltYWdlc107XHJcblxyXG4gIGNvbnN0IGV4aXRDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5vbkV4aXRDbGljaygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Nzcy5zZWN0aW9ufT5cclxuICAgICAgPEJhY2tkcm9wIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NbXCJpbWctY29udGFpbmVyXCJdfT48L2Rpdj5cclxuICAgICAgPGRpdiBvbkNsaWNrPXtleGl0Q2xpY2tIYW5kbGVyfSBjbGFzc05hbWU9e2Nzc1tcInhtYXJrLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtcInhtYXJrXCJ9IGludmVyc2Ugc2l6ZT1cIjV4XCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NbXCJhcnJvd3MtY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8TmF2QXJyb3cgb25DbGljaz17bmF2QXJyb3dIYW5kbGVyfSBkaXJlY3Rpb249e1wibGVmdFwifSAvPlxyXG4gICAgICAgIDxOYXZBcnJvdyBvbkNsaWNrPXtuYXZBcnJvd0hhbmRsZXJ9IGRpcmVjdGlvbj17XCJyaWdodFwifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlcjtcclxuIl0sIm5hbWVzIjpbImNzcyIsIkZvbnRBd2Vzb21lSWNvbiIsIkJhY2tkcm9wIiwiTmF2QXJyb3ciLCJJbWFnZVNsaWRlciIsInByb3BzIiwibmF2QXJyb3dIYW5kbGVyIiwiZGlyZWN0aW9uIiwiaW1hZ2VzIiwiZXhpdENsaWNrSGFuZGxlciIsIm9uRXhpdENsaWNrIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJpY29uIiwiaW52ZXJzZSIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UI/ImageSlider/ImageSlider.tsx\n"));

/***/ })

});