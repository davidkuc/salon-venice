"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/UI/Mobile/SideNavButton/SideNavButton.tsx":
/*!******************************************************************!*\
  !*** ./src/components/UI/Mobile/SideNavButton/SideNavButton.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SideNavButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideNavButton.module.css */ \"./src/components/UI/Mobile/SideNavButton/SideNavButton.module.css\");\n/* harmony import */ var _SideNavButton_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideNavButton_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar SideNavButton = function(param) {\n    var path = param.path, children = param.children, className = param.className, textColor = param.textColor;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_SideNavButton_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"sidenav-button\"]), \" \").concat(className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: path,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"\".concat((_SideNavButton_module_css__WEBPACK_IMPORTED_MODULE_2___default().link)),\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\Mobile\\\\SideNavButton\\\\SideNavButton.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\Mobile\\\\SideNavButton\\\\SideNavButton.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\Mobile\\\\SideNavButton\\\\SideNavButton.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = SideNavButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNavButton);\nvar _c;\n$RefreshReg$(_c, \"SideNavButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9Nb2JpbGUvU2lkZU5hdkJ1dHRvbi9TaWRlTmF2QnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTZDO0FBRWhCO0FBUzdCLElBQU1FLGFBQWEsR0FBb0IsZ0JBS2pDO1FBSkpDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsU0FBUyxTQUFUQSxTQUFTLEVBQ1RDLFNBQVMsU0FBVEEsU0FBUztJQUVULHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNGLFNBQVMsRUFBRSxFQUFDLENBQTJCQSxNQUFTLENBQWxDTCxvRkFBcUIsRUFBQyxHQUFDLENBQVksUUFBVkssU0FBUyxDQUFFO2tCQUNyRCw0RUFBQ0osa0RBQUk7WUFBQ08sSUFBSSxFQUFFTCxJQUFJO3NCQUNkLDRFQUFDTSxHQUFDO2dCQUFDSixTQUFTLEVBQUUsRUFBQyxDQUFXLE9BQVRMLHVFQUFRLENBQUU7MEJBQUdJLFFBQVE7Ozs7O3FCQUFLOzs7OztpQkFDdEM7Ozs7O2FBQ0gsQ0FDTjtDQUNIO0FBYktGLEtBQUFBLGFBQWE7QUFlbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9Nb2JpbGUvU2lkZU5hdkJ1dHRvbi9TaWRlTmF2QnV0dG9uLnRzeD8yNWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcIi4vU2lkZU5hdkJ1dHRvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBjaGlsZHJlbjogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICB0ZXh0Q1NTPzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgU2lkZU5hdkJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICBwYXRoLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsYXNzTmFtZSxcclxuICB0ZXh0Q29sb3IsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2Nzc1tcInNpZGVuYXYtYnV0dG9uXCJdfSAke2NsYXNzTmFtZX1gfT5cclxuICAgICAgPExpbmsgaHJlZj17cGF0aH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtjc3MubGlua31gfT57Y2hpbGRyZW59PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU5hdkJ1dHRvbjtcclxuIl0sIm5hbWVzIjpbImNzcyIsIkxpbmsiLCJTaWRlTmF2QnV0dG9uIiwicGF0aCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidGV4dENvbG9yIiwiZGl2IiwiaHJlZiIsImEiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/Mobile/SideNavButton/SideNavButton.tsx\n"));

/***/ })

});