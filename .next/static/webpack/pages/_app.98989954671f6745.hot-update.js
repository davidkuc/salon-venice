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

/***/ "./src/store/side-nav.tsx":
/*!********************************!*\
  !*** ./src/store/side-nav.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sideNavActions\": function() { return /* binding */ sideNavActions; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar sideNavSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"side-nav\",\n    initialState: {\n        isOpen: false\n    },\n    reducers: {\n        open: function open(state) {\n            console.log(\"Opening side nav\");\n            state.isOpen = true;\n        },\n        close: function close(state) {\n            console.log(\"Loggin out!\");\n            state.isOpen = false;\n        }\n    }\n});\nvar sideNavActions = sideNavSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (sideNavSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc2lkZS1uYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDO0FBRS9DLElBQU1DLFlBQVksR0FBR0QsNkRBQVcsQ0FBQztJQUMvQkUsSUFBSSxFQUFFLFVBQVU7SUFDaEJDLFlBQVksRUFBRTtRQUFFQyxNQUFNLEVBQUUsS0FBSztLQUFFO0lBQy9CQyxRQUFRLEVBQUU7UUFDUkMsSUFBSSxFQUFKQSxTQUFBQSxJQUFJLENBQUNDLEtBQUssRUFBRTtZQUNSQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xDRixLQUFLLENBQUNILE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDckI7UUFDRE0sS0FBSyxFQUFMQSxTQUFBQSxLQUFLLENBQUNILEtBQUssRUFBRTtZQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQkYsS0FBSyxDQUFDSCxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0tBQ0Y7Q0FDRixDQUFDO0FBRUssSUFBTU8sY0FBYyxHQUFHVixZQUFZLENBQUNXLE9BQU8sQ0FBQztBQUVuRCwrREFBZVgsWUFBWSxDQUFDWSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NpZGUtbmF2LnRzeD9kMDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IHNpZGVOYXZTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInNpZGUtbmF2XCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7IGlzT3BlbjogZmFsc2UgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgb3BlbihzdGF0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3BlbmluZyBzaWRlIG5hdlwiKTtcclxuICAgICAgc3RhdGUuaXNPcGVuID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjbG9zZShzdGF0ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkxvZ2dpbiBvdXQhXCIpO1xyXG4gICAgICBzdGF0ZS5pc09wZW4gPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZU5hdkFjdGlvbnMgPSBzaWRlTmF2U2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGVOYXZTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJzaWRlTmF2U2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiaXNPcGVuIiwicmVkdWNlcnMiLCJvcGVuIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzaWRlTmF2QWN0aW9ucyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/side-nav.tsx\n"));

/***/ })

});