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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageSlider.module.css */ \"./src/components/UI/ImageSlider/ImageSlider.module.css\");\n/* harmony import */ var _ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Backdrop/Backdrop */ \"./src/components/UI/Backdrop/Backdrop.tsx\");\n/* harmony import */ var _NavArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavArrow */ \"./src/components/UI/ImageSlider/NavArrow.tsx\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ImageSlider(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currId = ref[0], setCurrId = ref[1];\n    var images = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(props.images);\n    var lastId = images.length - 1;\n    var navArrowHandler = function(direction) {\n        switch(direction){\n            case \"left\":\n                if (currId === 0) {\n                    setCurrId(lastId);\n                } else {\n                    setCurrId(function(state) {\n                        return state - 1;\n                    });\n                }\n                break;\n            case \"right\":\n                if (currId === 0) {\n                    setCurrId(lastId);\n                } else {\n                    setCurrId(function(state) {\n                        return state - 1;\n                    });\n                }\n                break;\n        }\n    };\n    var exitClickHandler = function() {\n        props.onExitClick();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"img-container\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: exitClickHandler,\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"xmark-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    icon: \"xmark\",\n                    inverse: true,\n                    size: \"5x\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ImageSlider_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"arrows-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"left\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavArrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: navArrowHandler,\n                        direction: \"right\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\UI\\\\ImageSlider\\\\ImageSlider.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageSlider, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = ImageSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci9JbWFnZVNsaWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFDVjtBQUVnQztBQUVyQjtBQUNWOztBQVNsQyxTQUFTSyxXQUFXLENBQUNDLEtBQVksRUFBRTs7SUFDakMsSUFBNEJMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBaENNLE1BQU0sR0FBZU4sR0FBVyxHQUExQixFQUFFTyxTQUFTLEdBQUlQLEdBQVcsR0FBZjtJQUV4QixJQUFNUSxNQUFNLEdBQUkscUZBQUdILEtBQUssQ0FBQ0csTUFBTSxDQUFaSDtJQUNuQixJQUFNSSxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFFaEMsSUFBTUMsZUFBZSxHQUFHLFNBQUNDLFNBQWlCLEVBQUs7UUFDN0MsT0FBUUEsU0FBUztZQUNmLEtBQUssTUFBTTtnQkFDVCxJQUFJTixNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNoQkMsU0FBUyxDQUFDRSxNQUFNLENBQUMsQ0FBQztpQkFDbkIsTUFBTTtvQkFDTEYsU0FBUyxDQUFDLFNBQUNNLEtBQUs7K0JBQUtBLEtBQUssR0FBRyxDQUFDO3FCQUFBLENBQUMsQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtZQUNOLEtBQUssT0FBTztnQkFDVixJQUFJUCxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNoQkMsU0FBUyxDQUFDRSxNQUFNLENBQUMsQ0FBQztpQkFDbkIsTUFBTTtvQkFDTEYsU0FBUyxDQUFDLFNBQUNNLEtBQUs7K0JBQUtBLEtBQUssR0FBRyxDQUFDO3FCQUFBLENBQUMsQ0FBQztpQkFDakM7Z0JBQ0QsTUFBTTtTQUNYO0tBQ0Y7SUFFRCxJQUFNQyxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCVCxLQUFLLENBQUNVLFdBQVcsRUFBRSxDQUFDO0tBQ3JCO0lBRUQscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFFbEIsd0VBQVc7OzBCQUM3Qiw4REFBQ0csMERBQVE7Ozs7b0JBQUc7MEJBQ1osOERBQUNnQixLQUFHO2dCQUFDRCxTQUFTLEVBQUVsQixpRkFBb0I7Ozs7O29CQUFROzBCQUM1Qyw4REFBQ21CLEtBQUc7Z0JBQUNDLE9BQU8sRUFBRUwsZ0JBQWdCO2dCQUFFRyxTQUFTLEVBQUVsQixtRkFBc0I7MEJBQy9ELDRFQUFDRSwyRUFBZTtvQkFBQ21CLElBQUksRUFBRSxPQUFPO29CQUFFQyxPQUFPO29CQUFDQyxJQUFJLEVBQUMsSUFBSTs7Ozs7d0JBQUc7Ozs7O29CQUNoRDswQkFDTiw4REFBQ0osS0FBRztnQkFBQ0QsU0FBUyxFQUFFbEIsb0ZBQXVCOztrQ0FDckMsOERBQUNJLGlEQUFRO3dCQUFDZ0IsT0FBTyxFQUFFUixlQUFlO3dCQUFFQyxTQUFTLEVBQUUsTUFBTTs7Ozs7NEJBQUk7a0NBQ3pELDhEQUFDVCxpREFBUTt3QkFBQ2dCLE9BQU8sRUFBRVIsZUFBZTt3QkFBRUMsU0FBUyxFQUFFLE9BQU87Ozs7OzRCQUFJOzs7Ozs7b0JBQ3REOzs7Ozs7WUFDRSxDQUNWO0NBQ0g7R0ExQ1FSLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQTRDcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9JbWFnZVNsaWRlci9JbWFnZVNsaWRlci50c3g/MmNjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuL0ltYWdlU2xpZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiLi4vQmFja2Ryb3AvQmFja2Ryb3BcIjtcclxuaW1wb3J0IE5hdkFycm93IGZyb20gXCIuL05hdkFycm93XCI7XHJcbmltcG9ydCB7IEltYWdlT2JqIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy90eXBlc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBvbkV4aXRDbGljazogRnVuY3Rpb247XHJcbiAgaW1hZ2VzOiBJbWFnZU9ialtdO1xyXG4gIGluaXRpYWxJbWFnZUlkOiBudW1iZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBJbWFnZVNsaWRlcihwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCBbY3VycklkLCBzZXRDdXJySWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGltYWdlcyA9IFsuLi5wcm9wcy5pbWFnZXNdO1xyXG4gIGNvbnN0IGxhc3RJZCA9IGltYWdlcy5sZW5ndGggLSAxO1xyXG5cclxuICBjb25zdCBuYXZBcnJvd0hhbmRsZXIgPSAoZGlyZWN0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgaWYgKGN1cnJJZCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0Q3VycklkKGxhc3RJZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEN1cnJJZCgoc3RhdGUpID0+IHN0YXRlIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgaWYgKGN1cnJJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRDdXJySWQobGFzdElkKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJJZCgoc3RhdGUpID0+IHN0YXRlIC0gMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBleGl0Q2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgcHJvcHMub25FeGl0Q2xpY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3Muc2VjdGlvbn0+XHJcbiAgICAgIDxCYWNrZHJvcCAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzW1wiaW1nLWNvbnRhaW5lclwiXX0+PC9kaXY+XHJcbiAgICAgIDxkaXYgb25DbGljaz17ZXhpdENsaWNrSGFuZGxlcn0gY2xhc3NOYW1lPXtjc3NbXCJ4bWFyay1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17XCJ4bWFya1wifSBpbnZlcnNlIHNpemU9XCI1eFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzW1wiYXJyb3dzLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPE5hdkFycm93IG9uQ2xpY2s9e25hdkFycm93SGFuZGxlcn0gZGlyZWN0aW9uPXtcImxlZnRcIn0gLz5cclxuICAgICAgICA8TmF2QXJyb3cgb25DbGljaz17bmF2QXJyb3dIYW5kbGVyfSBkaXJlY3Rpb249e1wicmlnaHRcIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJjc3MiLCJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsIkJhY2tkcm9wIiwiTmF2QXJyb3ciLCJJbWFnZVNsaWRlciIsInByb3BzIiwiY3VycklkIiwic2V0Q3VycklkIiwiaW1hZ2VzIiwibGFzdElkIiwibGVuZ3RoIiwibmF2QXJyb3dIYW5kbGVyIiwiZGlyZWN0aW9uIiwic3RhdGUiLCJleGl0Q2xpY2tIYW5kbGVyIiwib25FeGl0Q2xpY2siLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsImljb24iLCJpbnZlcnNlIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UI/ImageSlider/ImageSlider.tsx\n"));

/***/ })

});