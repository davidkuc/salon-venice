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

/***/ "./src/components/Gallery/Gallery.tsx":
/*!********************************************!*\
  !*** ./src/components/Gallery/Gallery.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Gallery_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Gallery.module.css */ \"./src/components/Gallery/Gallery.module.css\");\n/* harmony import */ var _Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UI_ImageSlider_ImageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/ImageSlider/ImageSlider */ \"./src/components/UI/ImageSlider/ImageSlider.tsx\");\n/* harmony import */ var _GalleryImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GalleryImage */ \"./src/components/Gallery/GalleryImage.tsx\");\n/* harmony import */ var _providers_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/types */ \"./src/components/providers/types.ts\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Gallery() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), imageOpen = ref[0], setImageOpen = ref[1];\n    var initialImageId = 0;\n    var images = [\n        new _providers_types__WEBPACK_IMPORTED_MODULE_4__.ImageObj(\"face1.jpg\", 1),\n        new _providers_types__WEBPACK_IMPORTED_MODULE_4__.ImageObj(\"nails1.jpg\", 2),\n        new _providers_types__WEBPACK_IMPORTED_MODULE_4__.ImageObj(\"face2.jpg\", 3),\n        new _providers_types__WEBPACK_IMPORTED_MODULE_4__.ImageObj(\"face3.jpg\", 4), \n    ];\n    var exitClickHandler = function() {\n        setImageOpen(false);\n    };\n    var openImageHandler = function(id) {\n        initialImageId = id;\n        setImageOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().section),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                children: \"Galeria\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Gallery\\\\Gallery.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"line-break-horizontal\"])\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Gallery\\\\Gallery.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().list),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GalleryImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: openImageHandler,\n                        className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().face1),\n                        image: images[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Gallery\\\\Gallery.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GalleryImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: openImageHandler,\n                        className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().nails1),\n                        image: images[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Gallery\\\\Gallery.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GalleryImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: openImageHandler,\n                        className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().nails2),\n                        image: images[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Gallery\\\\Gallery.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GalleryImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: openImageHandler,\n                        className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().nails3),\n                        image: images[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Gallery\\\\Gallery.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Gallery\\\\Gallery.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            imageOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_ImageSlider_ImageSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                initialImageId: initialImageId,\n                images: images,\n                onExitClick: exitClickHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Gallery\\\\Gallery.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DKUC\\\\source\\\\repos\\\\SalonVenice\\\\salon-venice\\\\src\\\\components\\\\Gallery\\\\Gallery.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Gallery, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L0dhbGxlcnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUVOO0FBRXVCO0FBQ2Q7QUFDSTs7QUFFOUMsU0FBU0ssT0FBTyxHQUFHOztJQUNqQixJQUFrQ0osR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF6Q0ssU0FBUyxHQUFrQkwsR0FBYyxHQUFoQyxFQUFFTSxZQUFZLEdBQUlOLEdBQWMsR0FBbEI7SUFFOUIsSUFBSU8sY0FBYyxHQUFHLENBQUM7SUFFdEIsSUFBTUMsTUFBTSxHQUFHO1FBQ2IsSUFBSUwsc0RBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUlBLHNEQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJQSxzREFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSUEsc0RBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQzdCO0lBRUQsSUFBTU0sZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QkgsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsSUFBTUksZ0JBQWdCLEdBQUcsU0FBQ0MsRUFBVSxFQUFLO1FBQ3ZDSixjQUFjLEdBQUdJLEVBQUUsQ0FBQztRQUNwQkwsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BCO0lBRUQscUJBQ0UsOERBQUNNLFNBQU87UUFBQ0MsU0FBUyxFQUFFZCxvRUFBVzs7MEJBQzdCLDhEQUFDZSxLQUFHO2dCQUFDRCxTQUFTLEVBQUVkLGtFQUFTOzBCQUFFLFNBQU87Ozs7O29CQUFNOzBCQUN4Qyw4REFBQ2UsS0FBRztnQkFBQ0QsU0FBUyxFQUFFZCxxRkFBNEI7Ozs7O29CQUFROzBCQUNwRCw4REFBQ2lCLElBQUU7Z0JBQUNILFNBQVMsRUFBRWQsaUVBQVE7O2tDQUNyQiw4REFBQ0cscURBQVk7d0JBQ1hnQixPQUFPLEVBQUVSLGdCQUFnQjt3QkFDekJHLFNBQVMsRUFBRWQsa0VBQVM7d0JBQ3BCcUIsS0FBSyxFQUFFWixNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs0QkFDaEI7a0NBQ0YsOERBQUNOLHFEQUFZO3dCQUNYZ0IsT0FBTyxFQUFFUixnQkFBZ0I7d0JBQ3pCRyxTQUFTLEVBQUVkLG1FQUFVO3dCQUNyQnFCLEtBQUssRUFBRVosTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7NEJBQ2hCO2tDQUNGLDhEQUFDTixxREFBWTt3QkFDWGdCLE9BQU8sRUFBRVIsZ0JBQWdCO3dCQUN6QkcsU0FBUyxFQUFFZCxtRUFBVTt3QkFDckJxQixLQUFLLEVBQUVaLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7OzRCQUNoQjtrQ0FDRiw4REFBQ04scURBQVk7d0JBQ1hnQixPQUFPLEVBQUVSLGdCQUFnQjt3QkFDekJHLFNBQVMsRUFBRWQsbUVBQVU7d0JBQ3JCcUIsS0FBSyxFQUFFWixNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs0QkFDaEI7Ozs7OztvQkFDQztZQUNKSCxTQUFTLGtCQUNSLDhEQUFDSixtRUFBVztnQkFDVk0sY0FBYyxFQUFFQSxjQUFjO2dCQUM5QkMsTUFBTSxFQUFFQSxNQUFNO2dCQUNkZ0IsV0FBVyxFQUFFZixnQkFBZ0I7Ozs7O29CQUM3Qjs7Ozs7O1lBRUksQ0FDVjtDQUNIO0dBeERRTCxPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUEwRGhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9HYWxsZXJ5LnRzeD80ZGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcIi4vR2FsbGVyeS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEltYWdlU2xpZGVyIGZyb20gXCIuLi9VSS9JbWFnZVNsaWRlci9JbWFnZVNsaWRlclwiO1xyXG5pbXBvcnQgR2FsbGVyeUltYWdlIGZyb20gXCIuL0dhbGxlcnlJbWFnZVwiO1xyXG5pbXBvcnQgeyBJbWFnZU9iaiB9IGZyb20gXCIuLi9wcm92aWRlcnMvdHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIEdhbGxlcnkoKSB7XHJcbiAgY29uc3QgW2ltYWdlT3Blbiwgc2V0SW1hZ2VPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBsZXQgaW5pdGlhbEltYWdlSWQgPSAwO1xyXG5cclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICBuZXcgSW1hZ2VPYmooXCJmYWNlMS5qcGdcIiwgMSksXHJcbiAgICBuZXcgSW1hZ2VPYmooXCJuYWlsczEuanBnXCIsIDIpLFxyXG4gICAgbmV3IEltYWdlT2JqKFwiZmFjZTIuanBnXCIsIDMpLFxyXG4gICAgbmV3IEltYWdlT2JqKFwiZmFjZTMuanBnXCIsIDQpLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGV4aXRDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJbWFnZU9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5JbWFnZUhhbmRsZXIgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgaW5pdGlhbEltYWdlSWQgPSBpZDtcclxuICAgIHNldEltYWdlT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjc3Muc2VjdGlvbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudGl0bGV9PkdhbGVyaWE8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc1tcImxpbmUtYnJlYWstaG9yaXpvbnRhbFwiXX0+PC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e2Nzcy5saXN0fT5cclxuICAgICAgICA8R2FsbGVyeUltYWdlXHJcbiAgICAgICAgICBvbkNsaWNrPXtvcGVuSW1hZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3MuZmFjZTF9XHJcbiAgICAgICAgICBpbWFnZT17aW1hZ2VzWzBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEdhbGxlcnlJbWFnZVxyXG4gICAgICAgICAgb25DbGljaz17b3BlbkltYWdlSGFuZGxlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLm5haWxzMX1cclxuICAgICAgICAgIGltYWdlPXtpbWFnZXNbMF19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8R2FsbGVyeUltYWdlXHJcbiAgICAgICAgICBvbkNsaWNrPXtvcGVuSW1hZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3MubmFpbHMyfVxyXG4gICAgICAgICAgaW1hZ2U9e2ltYWdlc1swXX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxHYWxsZXJ5SW1hZ2VcclxuICAgICAgICAgIG9uQ2xpY2s9e29wZW5JbWFnZUhhbmRsZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5uYWlsczN9XHJcbiAgICAgICAgICBpbWFnZT17aW1hZ2VzWzBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIHtpbWFnZU9wZW4gJiYgKFxyXG4gICAgICAgIDxJbWFnZVNsaWRlclxyXG4gICAgICAgICAgaW5pdGlhbEltYWdlSWQ9e2luaXRpYWxJbWFnZUlkfVxyXG4gICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XHJcbiAgICAgICAgICBvbkV4aXRDbGljaz17ZXhpdENsaWNrSGFuZGxlcn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XHJcbiJdLCJuYW1lcyI6WyJjc3MiLCJ1c2VTdGF0ZSIsIkltYWdlU2xpZGVyIiwiR2FsbGVyeUltYWdlIiwiSW1hZ2VPYmoiLCJHYWxsZXJ5IiwiaW1hZ2VPcGVuIiwic2V0SW1hZ2VPcGVuIiwiaW5pdGlhbEltYWdlSWQiLCJpbWFnZXMiLCJleGl0Q2xpY2tIYW5kbGVyIiwib3BlbkltYWdlSGFuZGxlciIsImlkIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInRpdGxlIiwidWwiLCJsaXN0Iiwib25DbGljayIsImZhY2UxIiwiaW1hZ2UiLCJuYWlsczEiLCJuYWlsczIiLCJuYWlsczMiLCJvbkV4aXRDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Gallery/Gallery.tsx\n"));

/***/ })

});