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

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.module.css */ \"./src/components/Header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _providers_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/images */ \"./src/components/providers/images.tsx\");\n/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/hooks */ \"./src/hooks/hooks.tsx\");\n/* harmony import */ var _store_side_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/side-nav */ \"./src/store/side-nav.tsx\");\n/* harmony import */ var _UI_Hamburger_Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Hamburger/Hamburger */ \"./src/components/UI/Hamburger/Hamburger.tsx\");\n/* harmony import */ var _Mobile_SideNav_SideNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Mobile/SideNav/SideNav */ \"./src/components/Mobile/SideNav/SideNav.tsx\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive */ \"./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/Button/Button */ \"./src/components/UI/Button/Button.tsx\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var sideNavOpen = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.sideNav.isOpen;\n    });\n    var dispatch = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var hamburgerClickHandler = function() {\n        dispatch(_store_side_nav__WEBPACK_IMPORTED_MODULE_3__.sideNavActions.open());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().nav),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_responsive__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    maxWidth: 600,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"nav-list-mobile\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Hamburger_Hamburger__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    onClick: hamburgerClickHandler\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"img-container-mobile\"]),\n                                    children: (0,_providers_images__WEBPACK_IMPORTED_MODULE_1__.GetImage)(\"logo-venice.png\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        sideNavOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Mobile_SideNav_SideNav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 27\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_responsive__WEBPACK_IMPORTED_MODULE_8___default()), {\n                    minWidth: 600,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"nav-list\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                linkClassName: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"button-link\"]),\n                                path: \"dummy\",\n                                children: \"Strona Gł\\xf3wna\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                linkClassName: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"button-link\"]),\n                                path: \"dummy\",\n                                children: \"Cennik\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                linkClassName: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"button-link\"]),\n                                path: \"dummy\",\n                                children: \"Kontakt\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"img-container\"]),\n                                children: (0,_providers_images__WEBPACK_IMPORTED_MODULE_1__.GetImage)(\"logo-venice.png\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                linkClassName: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"button-link\"]),\n                                path: \"dummy\",\n                                children: \"Facebook\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Button_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                                linkClassName: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"button-link\"]),\n                                path: \"dummy\",\n                                children: \"Instagram\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Header\\\\Header.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"1CdC5OIT+hViVQGZnIF05axbPts=\", false, function() {\n    return [\n        _hooks_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _hooks_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDUztBQUVvQjtBQUNiO0FBRUo7QUFDRjtBQUNOO0FBQ0Q7O0FBRXpDLFNBQVNTLE1BQU0sR0FBRzs7SUFDaEIsSUFBTUMsV0FBVyxHQUFHUCw0REFBYyxDQUFDLFNBQUNRLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxPQUFPLENBQUNDLE1BQU07S0FBQSxDQUFDO0lBQ25FLElBQU1DLFFBQVEsR0FBR1osNERBQWMsRUFBRTtJQUVqQyxJQUFNYSxxQkFBcUIsR0FBRyxXQUFNO1FBQ2xDRCxRQUFRLENBQUNWLGdFQUFtQixFQUFFLENBQUMsQ0FBQztLQUNqQztJQUVELHFCQUNFLDhEQUFDYSxRQUFNO1FBQUNDLFNBQVMsRUFBRWxCLGtFQUFVO2tCQUMzQiw0RUFBQ21CLEtBQUc7WUFBQ0QsU0FBUyxFQUFFbEIsK0RBQU87OzhCQUNyQiw4REFBQ08seURBQVU7b0JBQUNhLFFBQVEsRUFBRSxHQUFHOztzQ0FDdkIsOERBQUNDLElBQUU7NEJBQUNILFNBQVMsRUFBRWxCLDhFQUFzQjs7OENBQ25DLDhEQUFDSywrREFBUztvQ0FBQ2lCLE9BQU8sRUFBRVAscUJBQXFCOzs7Ozt3Q0FBSTs4Q0FDN0MsOERBQUNRLEtBQUc7b0NBQUNMLFNBQVMsRUFBRWxCLG1GQUEyQjs4Q0FDeENDLDJEQUFRLENBQUMsaUJBQWlCLENBQUM7Ozs7O3dDQUN4Qjs7Ozs7O2dDQUNIO3dCQUNKUyxXQUFXLGtCQUFJLDhEQUFDSiwrREFBTzs7OztnQ0FBRzs7Ozs7O3dCQUNoQjs4QkFDYiw4REFBQ0MseURBQVU7b0JBQUNpQixRQUFRLEVBQUUsR0FBRzs4QkFDdkIsNEVBQUNILElBQUU7d0JBQUNILFNBQVMsRUFBRWxCLHVFQUFlOzswQ0FDNUIsOERBQUNRLHlEQUFNO2dDQUNMVSxTQUFTLEVBQUVsQixrRUFBVTtnQ0FDckIwQixhQUFhLEVBQUUxQiwwRUFBa0I7Z0NBQ2pDMkIsSUFBSSxFQUFDLE9BQU87MENBQ2Isa0JBRUQ7Ozs7O29DQUFTOzBDQUNULDhEQUFDbkIseURBQU07Z0NBQ0xVLFNBQVMsRUFBRWxCLGtFQUFVO2dDQUNyQjBCLGFBQWEsRUFBRTFCLDBFQUFrQjtnQ0FDakMyQixJQUFJLEVBQUMsT0FBTzswQ0FDYixRQUVEOzs7OztvQ0FBUzswQ0FDVCw4REFBQ25CLHlEQUFNO2dDQUNMVSxTQUFTLEVBQUVsQixrRUFBVTtnQ0FDckIwQixhQUFhLEVBQUUxQiwwRUFBa0I7Z0NBQ2pDMkIsSUFBSSxFQUFDLE9BQU87MENBQ2IsU0FFRDs7Ozs7b0NBQVM7MENBQ1QsOERBQUNDLElBQUU7Z0NBQUNWLFNBQVMsRUFBRWxCLDRFQUFvQjswQ0FDaENDLDJEQUFRLENBQUMsaUJBQWlCLENBQUM7Ozs7O29DQUN6QjswQ0FFTCw4REFBQ08seURBQU07Z0NBQ0xVLFNBQVMsRUFBRWxCLGtFQUFVO2dDQUNyQjBCLGFBQWEsRUFBRTFCLDBFQUFrQjtnQ0FDakMyQixJQUFJLEVBQUMsT0FBTzswQ0FDYixVQUVEOzs7OztvQ0FBUzswQ0FDVCw4REFBQ25CLHlEQUFNO2dDQUNMVSxTQUFTLEVBQUVsQixrRUFBVTtnQ0FDckIwQixhQUFhLEVBQUUxQiwwRUFBa0I7Z0NBQ2pDMkIsSUFBSSxFQUFDLE9BQU87MENBQ2IsV0FFRDs7Ozs7b0NBQVM7Ozs7Ozs0QkFDTjs7Ozs7d0JBQ007Ozs7OztnQkFDVDs7Ozs7WUFDQyxDQUNUO0NBQ0g7R0FsRVFsQixNQUFNOztRQUNPTix3REFBYztRQUNqQkQsd0RBQWM7OztBQUZ4Qk8sS0FBQUEsTUFBTTtBQW9FZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4PzhkMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBHZXRJbWFnZSB9IGZyb20gXCIuLi9wcm92aWRlcnMvaW1hZ2VzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vaG9va3MvaG9va3NcIjtcclxuaW1wb3J0IHsgc2lkZU5hdkFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2lkZS1uYXZcIjtcclxuXHJcbmltcG9ydCBIYW1idXJnZXIgZnJvbSBcIi4uL1VJL0hhbWJ1cmdlci9IYW1idXJnZXJcIjtcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4uL01vYmlsZS9TaWRlTmF2L1NpZGVOYXZcIjtcclxuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSBcInJlYWN0LXJlc3BvbnNpdmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vVUkvQnV0dG9uL0J1dHRvblwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHNpZGVOYXZPcGVuID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaWRlTmF2LmlzT3Blbik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBoYW1idXJnZXJDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzaWRlTmF2QWN0aW9ucy5vcGVuKCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y3NzLmhlYWRlcn0+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjc3MubmF2fT5cclxuICAgICAgICA8TWVkaWFRdWVyeSBtYXhXaWR0aD17NjAwfT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Nzc1tcIm5hdi1saXN0LW1vYmlsZVwiXX0+XHJcbiAgICAgICAgICAgIDxIYW1idXJnZXIgb25DbGljaz17aGFtYnVyZ2VyQ2xpY2tIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzW1wiaW1nLWNvbnRhaW5lci1tb2JpbGVcIl19PlxyXG4gICAgICAgICAgICAgIHtHZXRJbWFnZShcImxvZ28tdmVuaWNlLnBuZ1wiKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAge3NpZGVOYXZPcGVuICYmIDxTaWRlTmF2IC8+fVxyXG4gICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICA8TWVkaWFRdWVyeSBtaW5XaWR0aD17NjAwfT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Nzc1tcIm5hdi1saXN0XCJdfT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICBsaW5rQ2xhc3NOYW1lPXtjc3NbXCJidXR0b24tbGlua1wiXX1cclxuICAgICAgICAgICAgICBwYXRoPVwiZHVtbXlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3Ryb25hIEfFgsOzd25hXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuYnV0dG9ufVxyXG4gICAgICAgICAgICAgIGxpbmtDbGFzc05hbWU9e2Nzc1tcImJ1dHRvbi1saW5rXCJdfVxyXG4gICAgICAgICAgICAgIHBhdGg9XCJkdW1teVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDZW5uaWtcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5idXR0b259XHJcbiAgICAgICAgICAgICAgbGlua0NsYXNzTmFtZT17Y3NzW1wiYnV0dG9uLWxpbmtcIl19XHJcbiAgICAgICAgICAgICAgcGF0aD1cImR1bW15XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEtvbnRha3RcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Nzc1tcImltZy1jb250YWluZXJcIl19PlxyXG4gICAgICAgICAgICAgIHtHZXRJbWFnZShcImxvZ28tdmVuaWNlLnBuZ1wiKX1cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5idXR0b259XHJcbiAgICAgICAgICAgICAgbGlua0NsYXNzTmFtZT17Y3NzW1wiYnV0dG9uLWxpbmtcIl19XHJcbiAgICAgICAgICAgICAgcGF0aD1cImR1bW15XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEZhY2Vib29rXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuYnV0dG9ufVxyXG4gICAgICAgICAgICAgIGxpbmtDbGFzc05hbWU9e2Nzc1tcImJ1dHRvbi1saW5rXCJdfVxyXG4gICAgICAgICAgICAgIHBhdGg9XCJkdW1teVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBJbnN0YWdyYW1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJjc3MiLCJHZXRJbWFnZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzaWRlTmF2QWN0aW9ucyIsIkhhbWJ1cmdlciIsIlNpZGVOYXYiLCJNZWRpYVF1ZXJ5IiwiQnV0dG9uIiwiSGVhZGVyIiwic2lkZU5hdk9wZW4iLCJzdGF0ZSIsInNpZGVOYXYiLCJpc09wZW4iLCJkaXNwYXRjaCIsImhhbWJ1cmdlckNsaWNrSGFuZGxlciIsIm9wZW4iLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYXYiLCJtYXhXaWR0aCIsInVsIiwib25DbGljayIsImRpdiIsIm1pbldpZHRoIiwiYnV0dG9uIiwibGlua0NsYXNzTmFtZSIsInBhdGgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/Header.tsx\n"));

/***/ })

});