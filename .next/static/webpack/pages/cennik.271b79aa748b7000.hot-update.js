"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cennik",{

/***/ "./src/components/ServicesPrices/PriceList/PriceList.tsx":
/*!***************************************************************!*\
  !*** ./src/components/ServicesPrices/PriceList/PriceList.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive */ \"./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PriceList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriceList.module.css */ \"./src/components/ServicesPrices/PriceList/PriceList.module.css\");\n/* harmony import */ var _PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ServiceElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceElement */ \"./src/components/ServicesPrices/PriceList/ServiceElement.tsx\");\n\n\n\n\nvar ScreenSize;\n(function(ScreenSize) {\n    ScreenSize[ScreenSize[\"max480\"] = 0] = \"max480\";\n    ScreenSize[ScreenSize[\"between480_600\"] = 1] = \"between480_600\";\n    ScreenSize[ScreenSize[\"beetween600_700\"] = 2] = \"beetween600_700\";\n    ScreenSize[ScreenSize[\"min700\"] = 3] = \"min700\";\n})(ScreenSize || (ScreenSize = {}));\n/**\r\n *\r\n * @param services Array of Services objects\r\n * @returns\r\n */ function PriceList(param) {\n    var number = param.number, title = param.title, services = param.services, _darkerBackground = param.darkerBackground, darkerBackground = _darkerBackground === void 0 ? false : _darkerBackground;\n    var pushServiceElement = function pushServiceElement(serviceElements, i, collection) {\n        serviceElements.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ServiceElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            name: collection[i - 1].name,\n            price: \"\".concat(collection[i - 1].price)\n        }, generateRandomKey(i - 1), false, {\n            fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n            lineNumber: 104,\n            columnNumber: 7\n        }, this));\n    };\n    var pushVerticalLineBreak_480_600 = function pushVerticalLineBreak_480_600(i, serviceElements) {\n        if (i === 1 || !(i % 2 === 0)) {\n            _pushVerticalLineBreak(serviceElements, i);\n        }\n    };\n    var _pushVerticalLineBreak = function _pushVerticalLineBreak(serviceElements, i) {\n        serviceElements.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"line-break-vertical-black\"])\n        }, generateRandomKey(i), false, {\n            fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n            lineNumber: 120,\n            columnNumber: 7\n        }, this));\n    };\n    var pushVerticalLineBreak_min700 = function pushVerticalLineBreak_min700(i, serviceElements) {\n        if (!(i % 3 === 0)) {\n            _pushVerticalLineBreak(serviceElements, i);\n        }\n    };\n    var pushVerticalLineBreak_600_700 = function pushVerticalLineBreak_600_700(i, serviceElements) {\n        if (!(i % 2 === 0)) {\n            _pushVerticalLineBreak(serviceElements, i);\n        }\n    };\n    var pushHorizontalLineBreak_max480 = function pushHorizontalLineBreak_max480(length, i, serviceElements) {\n        if (i !== length) {\n            serviceElements.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"line-break-horizontal-black\"])\n            }, generateRandomKey(i), false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, this));\n        }\n    };\n    var generateRandomKey = function(index) {\n        return \"\".concat(index, \"-\").concat(Math.random());\n    };\n    var mapToServiceElements = function(collection, screenSize) {\n        var length = collection.length;\n        var serviceElements = [];\n        var pushLineBreakFunc;\n        switch(screenSize){\n            case ScreenSize.max480:\n                pushLineBreakFunc = pushHorizontalLineBreak_max480.bind(null, length);\n                break;\n            case ScreenSize.between480_600:\n                pushLineBreakFunc = pushVerticalLineBreak_480_600;\n                break;\n            case ScreenSize.beetween600_700:\n                pushLineBreakFunc = pushVerticalLineBreak_600_700;\n                break;\n            case ScreenSize.min700:\n                pushLineBreakFunc = pushVerticalLineBreak_min700;\n                break;\n        }\n        for(var i = 1; i <= length; i++){\n            pushServiceElement(serviceElements, i, collection);\n            pushLineBreakFunc(i, serviceElements);\n        }\n        return serviceElements;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat((_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"price-list\"]), \" \").concat(darkerBackground && (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"price-list-darkerBackground\"])),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default().number),\n                        children: \".0\".concat(number)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"line-break\"])\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_PriceList_module_css__WEBPACK_IMPORTED_MODULE_2___default().services),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_responsive__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        maxWidth: 480,\n                        children: mapToServiceElements(services, ScreenSize.max480)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_responsive__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        minWidth: 480,\n                        maxWidth: 600,\n                        children: mapToServiceElements(services, ScreenSize.between480_600)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_responsive__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        minWidth: 600,\n                        maxWidth: 700,\n                        children: mapToServiceElements(services, ScreenSize.beetween600_700)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_responsive__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        minWidth: 700,\n                        children: mapToServiceElements(services, ScreenSize.min700)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\ServicesPrices\\\\PriceList\\\\PriceList.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_c = PriceList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriceList);\nvar _c;\n$RefreshReg$(_c, \"PriceList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlc1ByaWNlcy9QcmljZUxpc3QvUHJpY2VMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBDO0FBRUQ7QUFHSztJQVM5QyxVQUtDO1VBTElHLFVBQVU7SUFBVkEsVUFBVSxDQUFWQSxVQUFVLENBQ2JDLFFBQU0sSUFBTkEsQ0FBTSxJQUFOQSxRQUFNO0lBREhELFVBQVUsQ0FBVkEsVUFBVSxDQUViRSxnQkFBYyxJQUFkQSxDQUFjLElBQWRBLGdCQUFjO0lBRlhGLFVBQVUsQ0FBVkEsVUFBVSxDQUdiRyxpQkFBZSxJQUFmQSxDQUFlLElBQWZBLGlCQUFlO0lBSFpILFVBQVUsQ0FBVkEsVUFBVSxDQUliSSxRQUFNLElBQU5BLENBQU0sSUFBTkEsUUFBTTtHQUpISixVQUFVLEtBQVZBLFVBQVU7QUFPZjs7UUE0RVdVLGtCQUFrQixHQUEzQixTQUFTQTtRQUtQQztZQUdJSSxJQUFJLEVBQUVGLFVBQVUsQ0FBQ0QsQ0FBQztZQUNsQkksS0FBSyxFQUFFLEVBQUMsQ0FBMEIsT0FBeEJILFVBQVUsQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDSSxLQUFLLENBQUU7V0FGOUJDLGlCQUFpQixDQUFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7O2dCQUc3QixDQUNILENBQUM7S0FDSDtRQUVRTTtRQUNQLElBQUlOLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDQSxDQUFDO1lBQ2hCTzs7S0FFSDtRQUVRQSxzQkFBc0IsR0FBL0I7UUFDRVIsZUFBZSxDQUFDRyxJQUFJLGVBQ2xCLFFBQUNNOzs7Ozs7Z0JBR00sQ0FDUixDQUFDO0tBQ0g7UUFFUUU7UUFDUCxJQUFJLENBQUMsQ0FBQ1YsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEJPOztLQUVIO1FBRVFJO1FBQ1AsSUFBSSxDQUFDLENBQUNYLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7OztLQUdyQjtRQUVRWTtRQUtQLElBQUlaLENBQUMsS0FBS2EsTUFBTSxFQUFFOzs7ZUFHUFIsaUJBQWlCLENBQUNMLENBQUMsQ0FBQzs7OztvQkFFcEIsQ0FDUixDQUFDO1NBQ0g7S0FDRjtJQXZIRCxJQUFNSyxpQkFBaUIsR0FBRztRQUN4QixPQUFPLEVBQUMsQ0FBV1U7S0FDcEI7SUFFRDtRQUlFLElBQU1GLE1BQU0sR0FBR1osVUFBVSxDQUFDWSxNQUFNO1FBQ2hDLElBQUlkLGVBQWUsR0FBVSxFQUFFOztRQUkvQixPQUFRbUIsVUFBVTtZQUNoQixLQUFLOUIsVUFBVSxDQUFDQyxNQUFNO2dCQUNwQjhCLGlCQUFpQjtnQkFDakIsTUFBTTtZQUNSLEtBQUsvQixVQUFVO2dCQUNiK0IsaUJBQWlCO2dCQUNqQixNQUFNO1lBQ1IsS0FBSy9CO2dCQUNIK0IsaUJBQWlCLEdBQUdSO2dCQUNwQixNQUFNO1lBQ1IsS0FBS3ZCO2dCQUNIK0IsaUJBQWlCLEdBQUdUO2dCQUNwQixNQUFNO1NBQ1Q7UUFFRCxJQUFLLElBQUlWLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSWEsTUFBTTtZQUN6QmYsa0JBQWtCLENBQUNDLGVBQWUsRUFBRUMsQ0FBQyxFQUFFQyxVQUFVLENBQUMsQ0FBQztZQUVuRGtCO1NBQ0Q7UUFFRCxPQUFPcEIsZUFBZSxDQUFDO0tBQ3hCO0lBRUQscUJBQ0UsUUFBQ3NCLFNBQU87UUFDTlo7OztnQkFJS0EsU0FBUyw2REFBTWEsUUFBUzs7O3dCQUN0QmIsRUFBQUEsNkRBQVMsRUFBRXZCLEdBQUcsQ0FBQ1E7bUdBQXFCOzs7Ozs0QkFBUTtrQ0FDakQsUUFBQ2MsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFdkIsR0FBRyxDQUFDOzs7Ozs0QkFBcUI7a0NBQ3pDLFFBQUNzQixLQUFHO3dCQUFDQyxTQUFTLEVBQUV2QixHQUFHLENBQUNTO2tDQUFRQSxLQUFLOzs7Ozs0QkFBTzs7Ozs7O29CQUNwQzswQkFDTixRQUFDNEIsSUFBRTtnQkFBQ2QsU0FBUyxFQUFFdkIsR0FBRyxDQUFDVTs7O3dCQUNMNEIsRUFBQUEsNkRBQVEsQ0FBRSxHQUFHO2tHQUN0QlA7Ozs7OzRCQUNVO2tDQUNiLFFBQUNoQyxVQUFVO3dCQUFDd0MsUUFBUSxFQUFFLEdBQUc7d0JBQUVELFFBQVEsRUFBRSxHQUFHOzs7Ozs7NEJBRTNCO2tDQUNiLFFBQUN2QyxVQUFVO3dCQUFDd0MsUUFBUSxFQUFFLEdBQUc7d0JBQUVELFFBQVEsRUFBRSxHQUFHOzs7Ozs7NEJBRTNCO2tDQUNiLFFBQUN2QyxVQUFVO3dCQUFDd0MsUUFBUSxFQUFFLEdBQUc7a0NBQ3RCUjs7Ozs7NEJBQ1U7Ozs7OztvQkFDVjs7Ozs7O1lBQ0csQ0FDVjtDQXlESDtBQTlIUXhCLEtBQUFBLFNBQVM7QUFnSWxCLGVBQWVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlcnZpY2VzUHJpY2VzL1ByaWNlTGlzdC9QcmljZUxpc3QudHN4P2IzZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSBcInJlYWN0LXJlc3BvbnNpdmVcIjtcclxuXHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUHJpY2VMaXN0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL3R5cGVzXCI7XHJcbmltcG9ydCBTZXJ2aWNlRWxlbWVudCBmcm9tIFwiLi9TZXJ2aWNlRWxlbWVudFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBudW1iZXI6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHNlcnZpY2VzOiBTZXJ2aWNlW107XHJcbiAgZGFya2VyQmFja2dyb3VuZD86IGJvb2xlYW47XHJcbn07XHJcblxyXG5lbnVtIFNjcmVlblNpemUge1xyXG4gIG1heDQ4MCxcclxuICBiZXR3ZWVuNDgwXzYwMCxcclxuICBiZWV0d2VlbjYwMF83MDAsXHJcbiAgbWluNzAwLFxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHNlcnZpY2VzIEFycmF5IG9mIFNlcnZpY2VzIG9iamVjdHNcclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIFByaWNlTGlzdCh7XHJcbiAgbnVtYmVyLFxyXG4gIHRpdGxlLFxyXG4gIHNlcnZpY2VzLFxyXG4gIGRhcmtlckJhY2tncm91bmQgPSBmYWxzZSxcclxufTogUHJvcHMpIHtcclxuICBjb25zdCBnZW5lcmF0ZVJhbmRvbUtleSA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7aW5kZXh9LSR7TWF0aC5yYW5kb20oKX1gO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1hcFRvU2VydmljZUVsZW1lbnRzID0gKFxyXG4gICAgY29sbGVjdGlvbjogU2VydmljZVtdLFxyXG4gICAgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZVxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XHJcbiAgICBsZXQgc2VydmljZUVsZW1lbnRzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGxldCBwdXNoTGluZUJyZWFrRnVuYztcclxuXHJcbiAgICBzd2l0Y2ggKHNjcmVlblNpemUpIHtcclxuICAgICAgY2FzZSBTY3JlZW5TaXplLm1heDQ4MDpcclxuICAgICAgICBwdXNoTGluZUJyZWFrRnVuYyA9IHB1c2hIb3Jpem9udGFsTGluZUJyZWFrX21heDQ4MC5iaW5kKG51bGwsIGxlbmd0aCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU2NyZWVuU2l6ZS5iZXR3ZWVuNDgwXzYwMDpcclxuICAgICAgICBwdXNoTGluZUJyZWFrRnVuYyA9IHB1c2hWZXJ0aWNhbExpbmVCcmVha180ODBfNjAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNjcmVlblNpemUuYmVldHdlZW42MDBfNzAwOlxyXG4gICAgICAgIHB1c2hMaW5lQnJlYWtGdW5jID0gcHVzaFZlcnRpY2FsTGluZUJyZWFrXzYwMF83MDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU2NyZWVuU2l6ZS5taW43MDA6XHJcbiAgICAgICAgcHVzaExpbmVCcmVha0Z1bmMgPSBwdXNoVmVydGljYWxMaW5lQnJlYWtfbWluNzAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHB1c2hTZXJ2aWNlRWxlbWVudChzZXJ2aWNlRWxlbWVudHMsIGksIGNvbGxlY3Rpb24pO1xyXG5cclxuICAgICAgcHVzaExpbmVCcmVha0Z1bmMoaSwgc2VydmljZUVsZW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VydmljZUVsZW1lbnRzO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e2Ake2Nzc1tcInByaWNlLWxpc3RcIl19ICR7XHJcbiAgICAgICAgZGFya2VyQmFja2dyb3VuZCAmJiBjc3NbXCJwcmljZS1saXN0LWRhcmtlckJhY2tncm91bmRcIl1cclxuICAgICAgfWB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLm51bWJlcn0+e2AuMCR7bnVtYmVyfWB9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc1tcImxpbmUtYnJlYWtcIl19PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudGl0bGV9Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e2Nzcy5zZXJ2aWNlc30+XHJcbiAgICAgICAgPE1lZGlhUXVlcnkgbWF4V2lkdGg9ezQ4MH0+XHJcbiAgICAgICAgICB7bWFwVG9TZXJ2aWNlRWxlbWVudHMoc2VydmljZXMsIFNjcmVlblNpemUubWF4NDgwKX1cclxuICAgICAgICA8L01lZGlhUXVlcnk+XHJcbiAgICAgICAgPE1lZGlhUXVlcnkgbWluV2lkdGg9ezQ4MH0gbWF4V2lkdGg9ezYwMH0+XHJcbiAgICAgICAgICB7bWFwVG9TZXJ2aWNlRWxlbWVudHMoc2VydmljZXMsIFNjcmVlblNpemUuYmV0d2VlbjQ4MF82MDApfVxyXG4gICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICA8TWVkaWFRdWVyeSBtaW5XaWR0aD17NjAwfSBtYXhXaWR0aD17NzAwfT5cclxuICAgICAgICAgIHttYXBUb1NlcnZpY2VFbGVtZW50cyhzZXJ2aWNlcywgU2NyZWVuU2l6ZS5iZWV0d2VlbjYwMF83MDApfVxyXG4gICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICA8TWVkaWFRdWVyeSBtaW5XaWR0aD17NzAwfT5cclxuICAgICAgICAgIHttYXBUb1NlcnZpY2VFbGVtZW50cyhzZXJ2aWNlcywgU2NyZWVuU2l6ZS5taW43MDApfVxyXG4gICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG5cclxuICBmdW5jdGlvbiBwdXNoU2VydmljZUVsZW1lbnQoXHJcbiAgICBzZXJ2aWNlRWxlbWVudHM6IGFueVtdLFxyXG4gICAgaTogbnVtYmVyLFxyXG4gICAgY29sbGVjdGlvbjogU2VydmljZVtdXHJcbiAgKSB7XHJcbiAgICBzZXJ2aWNlRWxlbWVudHMucHVzaChcclxuICAgICAgPFNlcnZpY2VFbGVtZW50XHJcbiAgICAgICAga2V5PXtnZW5lcmF0ZVJhbmRvbUtleShpIC0gMSl9XHJcbiAgICAgICAgbmFtZT17Y29sbGVjdGlvbltpIC0gMV0ubmFtZX1cclxuICAgICAgICBwcmljZT17YCR7Y29sbGVjdGlvbltpIC0gMV0ucHJpY2V9YH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwdXNoVmVydGljYWxMaW5lQnJlYWtfNDgwXzYwMChpOiBudW1iZXIsIHNlcnZpY2VFbGVtZW50czogYW55W10pIHtcclxuICAgIGlmIChpID09PSAxIHx8ICEoaSAlIDIgPT09IDApKSB7XHJcbiAgICAgIF9wdXNoVmVydGljYWxMaW5lQnJlYWsoc2VydmljZUVsZW1lbnRzLCBpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9wdXNoVmVydGljYWxMaW5lQnJlYWsoc2VydmljZUVsZW1lbnRzOiBhbnlbXSwgaTogbnVtYmVyKSB7XHJcbiAgICBzZXJ2aWNlRWxlbWVudHMucHVzaChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGtleT17Z2VuZXJhdGVSYW5kb21LZXkoaSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjc3NbXCJsaW5lLWJyZWFrLXZlcnRpY2FsLWJsYWNrXCJdfVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHVzaFZlcnRpY2FsTGluZUJyZWFrX21pbjcwMChpOiBudW1iZXIsIHNlcnZpY2VFbGVtZW50czogYW55W10pIHtcclxuICAgIGlmICghKGkgJSAzID09PSAwKSkge1xyXG4gICAgICBfcHVzaFZlcnRpY2FsTGluZUJyZWFrKHNlcnZpY2VFbGVtZW50cywgaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwdXNoVmVydGljYWxMaW5lQnJlYWtfNjAwXzcwMChpOiBudW1iZXIsIHNlcnZpY2VFbGVtZW50czogYW55W10pIHtcclxuICAgIGlmICghKGkgJSAyID09PSAwKSkge1xyXG4gICAgICBfcHVzaFZlcnRpY2FsTGluZUJyZWFrKHNlcnZpY2VFbGVtZW50cywgaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwdXNoSG9yaXpvbnRhbExpbmVCcmVha19tYXg0ODAoXHJcbiAgICBsZW5ndGg6IG51bWJlcixcclxuICAgIGk6IG51bWJlcixcclxuICAgIHNlcnZpY2VFbGVtZW50czogYW55W11cclxuICApIHtcclxuICAgIGlmIChpICE9PSBsZW5ndGgpIHtcclxuICAgICAgc2VydmljZUVsZW1lbnRzLnB1c2goXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtnZW5lcmF0ZVJhbmRvbUtleShpKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzW1wibGluZS1icmVhay1ob3Jpem9udGFsLWJsYWNrXCJdfVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1lZGlhUXVlcnkiLCJjc3MiLCJTZXJ2aWNlRWxlbWVudCIsIlNjcmVlblNpemUiLCJtYXg0ODAiLCJiZXR3ZWVuNDgwXzYwMCIsImJlZXR3ZWVuNjAwXzcwMCIsIm1pbjcwMCIsIlByaWNlTGlzdCIsIm51bWJlciIsInRpdGxlIiwic2VydmljZXMiLCJkYXJrZXJCYWNrZ3JvdW5kIiwicHVzaFNlcnZpY2VFbGVtZW50Iiwic2VydmljZUVsZW1lbnRzIiwiaSIsImNvbGxlY3Rpb24iLCJwdXNoIiwibmFtZSIsInByaWNlIiwiZ2VuZXJhdGVSYW5kb21LZXkiLCJwdXNoVmVydGljYWxMaW5lQnJlYWtfNDgwXzYwMCIsIl9wdXNoVmVydGljYWxMaW5lQnJlYWsiLCJkaXYiLCJjbGFzc05hbWUiLCJwdXNoVmVydGljYWxMaW5lQnJlYWtfbWluNzAwIiwicHVzaFZlcnRpY2FsTGluZUJyZWFrXzYwMF83MDAiLCJwdXNoSG9yaXpvbnRhbExpbmVCcmVha19tYXg0ODAiLCJsZW5ndGgiLCJpbmRleCIsIk1hdGgiLCJyYW5kb20iLCJtYXBUb1NlcnZpY2VFbGVtZW50cyIsInNjcmVlblNpemUiLCJwdXNoTGluZUJyZWFrRnVuYyIsImJpbmQiLCJzZWN0aW9uIiwiY29udGFpbmVyIiwidWwiLCJtYXhXaWR0aCIsIm1pbldpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ServicesPrices/PriceList/PriceList.tsx\n"));

/***/ })

});