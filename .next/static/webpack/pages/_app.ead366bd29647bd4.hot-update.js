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

/***/ "./src/components/Mobile/SideNav/SideNav.tsx":
/*!***************************************************!*\
  !*** ./src/components/Mobile/SideNav/SideNav.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SideNav_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideNav.module.css */ \"./src/components/Mobile/SideNav/SideNav.module.css\");\n/* harmony import */ var _SideNav_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SideNav_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Backdrop/Backdrop */ \"./src/components/UI/Backdrop/Backdrop.tsx\");\n/* harmony import */ var _UI_Mobile_SideNavButton_SideNavButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Mobile/SideNavButton/SideNavButton */ \"./src/components/UI/Mobile/SideNavButton/SideNavButton.tsx\");\n/* harmony import */ var _UI_BrandLink_BrandLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/BrandLink/BrandLink */ \"./src/components/UI/BrandLink/BrandLink.tsx\");\n/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/hooks */ \"./src/hooks/hooks.tsx\");\n/* harmony import */ var _store_side_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/side-nav */ \"./src/store/side-nav.tsx\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SideNav() {\n    _s();\n    var dispatch = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    var backdropClickHandler = function() {\n        dispatch(_store_side_nav__WEBPACK_IMPORTED_MODULE_5__.sideNavActions.close());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onClick: backdropClickHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Mobile\\\\SideNav\\\\SideNav.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_SideNav_module_css__WEBPACK_IMPORTED_MODULE_6___default().sideNav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_SideNav_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                        children: \"Venice\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Mobile\\\\SideNav\\\\SideNav.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Mobile_SideNavButton_SideNavButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        path: \"dummy\",\n                        children: \"Strona Gł\\xf3wna\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Mobile\\\\SideNav\\\\SideNav.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Mobile_SideNavButton_SideNavButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        path: \"dummy\",\n                        children: \"Cennik\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Mobile\\\\SideNav\\\\SideNav.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Mobile_SideNavButton_SideNavButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        path: \"dummy\",\n                        children: \"Kontakt\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Mobile\\\\SideNav\\\\SideNav.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_BrandLink_BrandLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        path: \"dummy\",\n                        icon: \"facebook-f\",\n                        children: \"Facebook\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Mobile\\\\SideNav\\\\SideNav.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_BrandLink_BrandLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        path: \"dummy\",\n                        icon: faInstagram,\n                        children: \"Instagram\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Mobile\\\\SideNav\\\\SideNav.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Mobile\\\\SideNav\\\\SideNav.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Mobile\\\\SideNav\\\\SideNav.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(SideNav, \"BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=\", false, function() {\n    return [\n        _hooks_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = SideNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNav);\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2JpbGUvU2lkZU5hdi9TaWRlTmF2LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFFVztBQUNzQjtBQUNuQjtBQUVpQjtBQUNiOztBQUd6RCxTQUFTTSxPQUFPLEdBQUc7O0lBQ2pCLElBQU1DLFFBQVEsR0FBR0gsNERBQWMsRUFBRTtJQUVqQyxJQUFNSSxvQkFBb0IsR0FBRyxXQUFNO1FBQ3JDRCxRQUFRLENBQUNGLGlFQUFvQixFQUFFLENBQUMsQ0FBQztLQUM5QjtJQUVELHFCQUNFLDhEQUFDSyxLQUFHOzswQkFDRiw4REFBQ1QsNkRBQVE7Z0JBQUNVLE9BQU8sRUFBRUgsb0JBQW9COzs7OztvQkFBSTswQkFDM0MsOERBQUNJLElBQUU7Z0JBQUNDLFNBQVMsRUFBRWIsb0VBQVc7O2tDQUN4Qiw4REFBQ2UsSUFBRTt3QkFBQ0YsU0FBUyxFQUFFYixrRUFBUztrQ0FBRSxRQUFNOzs7Ozs0QkFBSztrQ0FDckMsOERBQUNFLDhFQUFhO3dCQUFDZSxJQUFJLEVBQUUsT0FBTztrQ0FBRSxrQkFBYTs7Ozs7NEJBQWdCO2tDQUMzRCw4REFBQ2YsOEVBQWE7d0JBQUNlLElBQUksRUFBRSxPQUFPO2tDQUFFLFFBQU07Ozs7OzRCQUFnQjtrQ0FDcEQsOERBQUNmLDhFQUFhO3dCQUFDZSxJQUFJLEVBQUUsT0FBTztrQ0FBRSxTQUFPOzs7Ozs0QkFBZ0I7a0NBQ3JELDhEQUFDZCwrREFBUzt3QkFBQ2MsSUFBSSxFQUFFLE9BQU87d0JBQUVDLElBQUksRUFBQyxZQUFZO2tDQUFDLFVBRTVDOzs7Ozs0QkFBWTtrQ0FDWiw4REFBQ2YsK0RBQVM7d0JBQUNjLElBQUksRUFBRSxPQUFPO3dCQUFFQyxJQUFJLEVBQUVDLFdBQVc7a0NBQUUsV0FFN0M7Ozs7OzRCQUFZOzs7Ozs7b0JBQ1Q7Ozs7OztZQUNELENBQ047Q0FDSDtHQXhCUWIsT0FBTzs7UUFDR0Ysd0RBQWM7OztBQUR4QkUsS0FBQUEsT0FBTztBQTBCaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb2JpbGUvU2lkZU5hdi9TaWRlTmF2LnRzeD8wMTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcIi4vU2lkZU5hdi5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIi4uLy4uL1VJL0JhY2tkcm9wL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBTaWRlTmF2QnV0dG9uIGZyb20gXCIuLi8uLi9VSS9Nb2JpbGUvU2lkZU5hdkJ1dHRvbi9TaWRlTmF2QnV0dG9uXCI7XHJcbmltcG9ydCBCcmFuZExpbmsgZnJvbSBcIi4uLy4uL1VJL0JyYW5kTGluay9CcmFuZExpbmtcIjtcclxuXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi8uLi8uLi9ob29rcy9ob29rc1wiO1xyXG5pbXBvcnQgeyBzaWRlTmF2QWN0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zaWRlLW5hdlwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNpZGVOYXYoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBiYWNrZHJvcENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuZGlzcGF0Y2goc2lkZU5hdkFjdGlvbnMuY2xvc2UoKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCYWNrZHJvcCBvbkNsaWNrPXtiYWNrZHJvcENsaWNrSGFuZGxlcn0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17Y3NzLnNpZGVOYXZ9PlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2Nzcy50aXRsZX0+VmVuaWNlPC9saT5cclxuICAgICAgICA8U2lkZU5hdkJ1dHRvbiBwYXRoPXtcImR1bW15XCJ9PlN0cm9uYSBHxYLDs3duYTwvU2lkZU5hdkJ1dHRvbj5cclxuICAgICAgICA8U2lkZU5hdkJ1dHRvbiBwYXRoPXtcImR1bW15XCJ9PkNlbm5pazwvU2lkZU5hdkJ1dHRvbj5cclxuICAgICAgICA8U2lkZU5hdkJ1dHRvbiBwYXRoPXtcImR1bW15XCJ9PktvbnRha3Q8L1NpZGVOYXZCdXR0b24+XHJcbiAgICAgICAgPEJyYW5kTGluayBwYXRoPXtcImR1bW15XCJ9IGljb249XCJmYWNlYm9vay1mXCI+XHJcbiAgICAgICAgICBGYWNlYm9va1xyXG4gICAgICAgIDwvQnJhbmRMaW5rPlxyXG4gICAgICAgIDxCcmFuZExpbmsgcGF0aD17XCJkdW1teVwifSBpY29uPXtmYUluc3RhZ3JhbX0+XHJcbiAgICAgICAgICBJbnN0YWdyYW1cclxuICAgICAgICA8L0JyYW5kTGluaz5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXY7XHJcbiJdLCJuYW1lcyI6WyJjc3MiLCJCYWNrZHJvcCIsIlNpZGVOYXZCdXR0b24iLCJCcmFuZExpbmsiLCJ1c2VBcHBEaXNwYXRjaCIsInNpZGVOYXZBY3Rpb25zIiwiU2lkZU5hdiIsImRpc3BhdGNoIiwiYmFja2Ryb3BDbGlja0hhbmRsZXIiLCJjbG9zZSIsImRpdiIsIm9uQ2xpY2siLCJ1bCIsImNsYXNzTmFtZSIsInNpZGVOYXYiLCJsaSIsInRpdGxlIiwicGF0aCIsImljb24iLCJmYUluc3RhZ3JhbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Mobile/SideNav/SideNav.tsx\n"));

/***/ })

});