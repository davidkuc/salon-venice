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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Cormorant:wght@500&display=swap\\\");\\r\\n@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');\\r\\n@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');\\r\\n\\r\\n:root {\\r\\n  --font-cormorant: \\\"Cormorant\\\";\\r\\n  --font-lato: \\\"Lato\\\";\\r\\n  --font-lato-bold: \\r\\n\\r\\n  --color-coral: #ff7f50;\\r\\n  --color-coral-active: #fc4f10;\\r\\n  --color-beige: #ffe5d4;\\r\\n  --color-black: #191919;\\r\\n  --color-black-active: #5e5e5e;\\r\\n}\\r\\n\\r\\n/***\\r\\n    The new CSS reset - version 1.7.2 (last updated 23.6.2022)\\r\\n    GitHub page: https://github.com/elad2412/the-new-css-reset\\r\\n***/\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  padding-top: 7rem;\\r\\n  padding-bottom: 4rem;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 1920px;\\r\\n}\\r\\n\\r\\n/* Preferred box-sizing value */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Reapply the pointer cursor for anchor tags */\\r\\na,\\r\\nbutton {\\r\\n  cursor: revert;\\r\\n}\\r\\n\\r\\n/* Remove list styles (bullets/numbers) */\\r\\nol,\\r\\nul,\\r\\nmenu {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* For images to not be able to exceed their container */\\r\\nimg {\\r\\n  max-width: 100%;\\r\\n}\\r\\n\\r\\n/* removes spacing between cells in tables */\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n}\\r\\n\\r\\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\\r\\ninput,\\r\\ntextarea {\\r\\n  -webkit-user-select: auto;\\r\\n}\\r\\n\\r\\n/* revert the 'white-space' property for textarea elements on Safari */\\r\\ntextarea {\\r\\n  white-space: revert;\\r\\n}\\r\\n\\r\\n/* minimum style to allow to style meter element */\\r\\nmeter {\\r\\n  appearance: revert;\\r\\n}\\r\\n\\r\\n/* reset default text opacity of input placeholder */\\r\\n::placeholder {\\r\\n  color: unset;\\r\\n}\\r\\n\\r\\n/* fix the feature of 'hidden' attribute.\\r\\n   display:revert; revert to element instead of attribute */\\r\\n:where([hidden]) {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* revert for bug in Chromium browsers\\r\\n   - fix for the content editable attribute will work properly.\\r\\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\\r\\n:where([contenteditable]:not([contenteditable=\\\"false\\\"])) {\\r\\n  -moz-user-modify: read-write;\\r\\n  -webkit-user-modify: read-write;\\r\\n  overflow-wrap: break-word;\\r\\n  -webkit-line-break: after-white-space;\\r\\n  -webkit-user-select: auto;\\r\\n}\\r\\n\\r\\n/* apply back the draggable feature - exist only in Chromium and Safari */\\r\\n:where([draggable=\\\"true\\\"]) {\\r\\n  -webkit-user-drag: element;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,uFAAuF;AACvF,kFAAkF;AAClF,kFAAkF;;AAElF;EACE,6BAA6B;EAC7B,mBAAmB;EACnB;;wBAEsB;EACtB,6BAA6B;EAC7B,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;;;GAGG;;AAEH;EACE,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;;AAEA,+BAA+B;AAC/B;;;EAGE,sBAAsB;AACxB;;AAEA,+CAA+C;AAC/C;;EAEE,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;EAGE,gBAAgB;AAClB;;AAEA,wDAAwD;AACxD;EACE,eAAe;AACjB;;AAEA,4CAA4C;AAC5C;EACE,yBAAyB;AAC3B;;AAEA,gGAAgG;AAChG;;EAEE,yBAAyB;AAC3B;;AAEA,sEAAsE;AACtE;EACE,mBAAmB;AACrB;;AAEA,kDAAkD;AAClD;EAEE,kBAAkB;AACpB;;AAEA,oDAAoD;AACpD;EACE,YAAY;AACd;;AAEA;2DAC2D;AAC3D;EACE,aAAa;AACf;;AAEA;;qGAEqG;AACrG;EACE,4BAA4B;EAC5B,+BAA+B;EAC/B,yBAAyB;EACzB,qCAAqC;EACrC,yBAAyB;AAC3B;;AAEA,yEAAyE;AACzE;EACE,0BAA0B;AAC5B\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Cormorant:wght@500&display=swap\\\");\\r\\n@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');\\r\\n@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');\\r\\n\\r\\n:root {\\r\\n  --font-cormorant: \\\"Cormorant\\\";\\r\\n  --font-lato: \\\"Lato\\\";\\r\\n  --font-lato-bold: \\r\\n\\r\\n  --color-coral: #ff7f50;\\r\\n  --color-coral-active: #fc4f10;\\r\\n  --color-beige: #ffe5d4;\\r\\n  --color-black: #191919;\\r\\n  --color-black-active: #5e5e5e;\\r\\n}\\r\\n\\r\\n/***\\r\\n    The new CSS reset - version 1.7.2 (last updated 23.6.2022)\\r\\n    GitHub page: https://github.com/elad2412/the-new-css-reset\\r\\n***/\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  padding-top: 7rem;\\r\\n  padding-bottom: 4rem;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 1920px;\\r\\n}\\r\\n\\r\\n/* Preferred box-sizing value */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Reapply the pointer cursor for anchor tags */\\r\\na,\\r\\nbutton {\\r\\n  cursor: revert;\\r\\n}\\r\\n\\r\\n/* Remove list styles (bullets/numbers) */\\r\\nol,\\r\\nul,\\r\\nmenu {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* For images to not be able to exceed their container */\\r\\nimg {\\r\\n  max-width: 100%;\\r\\n}\\r\\n\\r\\n/* removes spacing between cells in tables */\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n}\\r\\n\\r\\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\\r\\ninput,\\r\\ntextarea {\\r\\n  -webkit-user-select: auto;\\r\\n}\\r\\n\\r\\n/* revert the 'white-space' property for textarea elements on Safari */\\r\\ntextarea {\\r\\n  white-space: revert;\\r\\n}\\r\\n\\r\\n/* minimum style to allow to style meter element */\\r\\nmeter {\\r\\n  -webkit-appearance: revert;\\r\\n  appearance: revert;\\r\\n}\\r\\n\\r\\n/* reset default text opacity of input placeholder */\\r\\n::placeholder {\\r\\n  color: unset;\\r\\n}\\r\\n\\r\\n/* fix the feature of 'hidden' attribute.\\r\\n   display:revert; revert to element instead of attribute */\\r\\n:where([hidden]) {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* revert for bug in Chromium browsers\\r\\n   - fix for the content editable attribute will work properly.\\r\\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\\r\\n:where([contenteditable]:not([contenteditable=\\\"false\\\"])) {\\r\\n  -moz-user-modify: read-write;\\r\\n  -webkit-user-modify: read-write;\\r\\n  overflow-wrap: break-word;\\r\\n  -webkit-line-break: after-white-space;\\r\\n  -webkit-user-select: auto;\\r\\n}\\r\\n\\r\\n/* apply back the draggable feature - exist only in Chromium and Safari */\\r\\n:where([draggable=\\\"true\\\"]) {\\r\\n  -webkit-user-drag: element;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0Esb0lBQW9JLHVGQUF1Rix1RkFBdUYsZUFBZSxzQ0FBc0MsNEJBQTRCLHlEQUF5RCxvQ0FBb0MsNkJBQTZCLDZCQUE2QixvQ0FBb0MsS0FBSyxzS0FBc0ssZ0JBQWdCLGlCQUFpQix3QkFBd0IsMkJBQTJCLHlCQUF5QixvQkFBb0IsNkJBQTZCLHFCQUFxQixLQUFLLDBFQUEwRSw2QkFBNkIsS0FBSywwRUFBMEUscUJBQXFCLEtBQUssMEVBQTBFLHVCQUF1QixLQUFLLDBFQUEwRSxzQkFBc0IsS0FBSyxnRUFBZ0UsZ0NBQWdDLEtBQUssaUlBQWlJLGdDQUFnQyxLQUFLLDZGQUE2RiwwQkFBMEIsS0FBSyxzRUFBc0UseUJBQXlCLEtBQUssZ0ZBQWdGLG1CQUFtQixLQUFLLHdFQUF3RSwrREFBK0Qsb0JBQW9CLEtBQUssb0pBQW9KLHVJQUF1SSxtQ0FBbUMsc0NBQXNDLGdDQUFnQyw0Q0FBNEMsZ0NBQWdDLEtBQUssb0hBQW9ILGlDQUFpQyxLQUFLLFdBQVcsOEZBQThGLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLFlBQVksUUFBUSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsT0FBTyxZQUFZLFFBQVEsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxvSEFBb0gsdUZBQXVGLHVGQUF1RixlQUFlLHNDQUFzQyw0QkFBNEIseURBQXlELG9DQUFvQyw2QkFBNkIsNkJBQTZCLG9DQUFvQyxLQUFLLHNLQUFzSyxnQkFBZ0IsaUJBQWlCLHdCQUF3QiwyQkFBMkIseUJBQXlCLG9CQUFvQiw2QkFBNkIscUJBQXFCLEtBQUssMEVBQTBFLDZCQUE2QixLQUFLLDBFQUEwRSxxQkFBcUIsS0FBSywwRUFBMEUsdUJBQXVCLEtBQUssMEVBQTBFLHNCQUFzQixLQUFLLGdFQUFnRSxnQ0FBZ0MsS0FBSyxpSUFBaUksZ0NBQWdDLEtBQUssNkZBQTZGLDBCQUEwQixLQUFLLHNFQUFzRSxpQ0FBaUMseUJBQXlCLEtBQUssZ0ZBQWdGLG1CQUFtQixLQUFLLHdFQUF3RSwrREFBK0Qsb0JBQW9CLEtBQUssb0pBQW9KLHVJQUF1SSxtQ0FBbUMsc0NBQXNDLGdDQUFnQyw0Q0FBNEMsZ0NBQWdDLEtBQUssb0hBQW9ILGlDQUFpQyxLQUFLLHVCQUF1QjtBQUMzcU07QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzBmMzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1mb250LWNvcm1vcmFudDogXFxcIkNvcm1vcmFudFxcXCI7XFxyXFxuICAtLWZvbnQtbGF0bzogXFxcIkxhdG9cXFwiO1xcclxcbiAgLS1mb250LWxhdG8tYm9sZDogXFxyXFxuXFxyXFxuICAtLWNvbG9yLWNvcmFsOiAjZmY3ZjUwO1xcclxcbiAgLS1jb2xvci1jb3JhbC1hY3RpdmU6ICNmYzRmMTA7XFxyXFxuICAtLWNvbG9yLWJlaWdlOiAjZmZlNWQ0O1xcclxcbiAgLS1jb2xvci1ibGFjazogIzE5MTkxOTtcXHJcXG4gIC0tY29sb3ItYmxhY2stYWN0aXZlOiAjNWU1ZTVlO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqXFxyXFxuICAgIFRoZSBuZXcgQ1NTIHJlc2V0IC0gdmVyc2lvbiAxLjcuMiAobGFzdCB1cGRhdGVkIDIzLjYuMjAyMilcXHJcXG4gICAgR2l0SHViIHBhZ2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9lbGFkMjQxMi90aGUtbmV3LWNzcy1yZXNldFxcclxcbioqKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogN3JlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDE5MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJlZmVycmVkIGJveC1zaXppbmcgdmFsdWUgKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZWFwcGx5IHRoZSBwb2ludGVyIGN1cnNvciBmb3IgYW5jaG9yIHRhZ3MgKi9cXHJcXG5hLFxcclxcbmJ1dHRvbiB7XFxyXFxuICBjdXJzb3I6IHJldmVydDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIChidWxsZXRzL251bWJlcnMpICovXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubWVudSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3IgaW1hZ2VzIHRvIG5vdCBiZSBhYmxlIHRvIGV4Y2VlZCB0aGVpciBjb250YWluZXIgKi9cXHJcXG5pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZW1vdmVzIHNwYWNpbmcgYmV0d2VlbiBjZWxscyBpbiB0YWJsZXMgKi9cXHJcXG50YWJsZSB7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTYWZhcmkgLSBzb2x2aW5nIGlzc3VlIHdoZW4gdXNpbmcgdXNlci1zZWxlY3Q6bm9uZSBvbiB0aGUgPGJvZHk+IHRleHQgaW5wdXQgZG9lc24ndCB3b3JraW5nICovXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogcmV2ZXJ0IHRoZSAnd2hpdGUtc3BhY2UnIHByb3BlcnR5IGZvciB0ZXh0YXJlYSBlbGVtZW50cyBvbiBTYWZhcmkgKi9cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICB3aGl0ZS1zcGFjZTogcmV2ZXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtaW5pbXVtIHN0eWxlIHRvIGFsbG93IHRvIHN0eWxlIG1ldGVyIGVsZW1lbnQgKi9cXHJcXG5tZXRlciB7XFxyXFxuICBhcHBlYXJhbmNlOiByZXZlcnQ7XFxyXFxufVxcclxcblxcclxcbi8qIHJlc2V0IGRlZmF1bHQgdGV4dCBvcGFjaXR5IG9mIGlucHV0IHBsYWNlaG9sZGVyICovXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi8qIGZpeCB0aGUgZmVhdHVyZSBvZiAnaGlkZGVuJyBhdHRyaWJ1dGUuXFxyXFxuICAgZGlzcGxheTpyZXZlcnQ7IHJldmVydCB0byBlbGVtZW50IGluc3RlYWQgb2YgYXR0cmlidXRlICovXFxyXFxuOndoZXJlKFtoaWRkZW5dKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZXZlcnQgZm9yIGJ1ZyBpbiBDaHJvbWl1bSBicm93c2Vyc1xcclxcbiAgIC0gZml4IGZvciB0aGUgY29udGVudCBlZGl0YWJsZSBhdHRyaWJ1dGUgd2lsbCB3b3JrIHByb3Blcmx5LlxcclxcbiAgIC0gd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvOyBhZGRlZCBmb3IgU2FmYXJpIGluIGNhc2Ugb2YgdXNpbmcgdXNlci1zZWxlY3Q6bm9uZSBvbiB3cmFwcGVyIGVsZW1lbnQqL1xcclxcbjp3aGVyZShbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cXFwiZmFsc2VcXFwiXSkpIHtcXHJcXG4gIC1tb3otdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxyXFxuICAtd2Via2l0LXVzZXItbW9kaWZ5OiByZWFkLXdyaXRlO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIC13ZWJraXQtbGluZS1icmVhazogYWZ0ZXItd2hpdGUtc3BhY2U7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhcHBseSBiYWNrIHRoZSBkcmFnZ2FibGUgZmVhdHVyZSAtIGV4aXN0IG9ubHkgaW4gQ2hyb21pdW0gYW5kIFNhZmFyaSAqL1xcclxcbjp3aGVyZShbZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIl0pIHtcXHJcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBlbGVtZW50O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1RkFBdUY7QUFDdkYsa0ZBQWtGO0FBQ2xGLGtGQUFrRjs7QUFFbEY7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25COzt3QkFFc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBLCtCQUErQjtBQUMvQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLCtDQUErQztBQUMvQzs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBLHlDQUF5QztBQUN6Qzs7O0VBR0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLGVBQWU7QUFDakI7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGdHQUFnRztBQUNoRzs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUEsc0VBQXNFO0FBQ3RFO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGtEQUFrRDtBQUNsRDtFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQSxvREFBb0Q7QUFDcEQ7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7MkRBQzJEO0FBQzNEO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztxR0FFcUc7QUFDckc7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCOztBQUVBLHlFQUF5RTtBQUN6RTtFQUNFLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZm9udC1jb3Jtb3JhbnQ6IFxcXCJDb3Jtb3JhbnRcXFwiO1xcclxcbiAgLS1mb250LWxhdG86IFxcXCJMYXRvXFxcIjtcXHJcXG4gIC0tZm9udC1sYXRvLWJvbGQ6IFxcclxcblxcclxcbiAgLS1jb2xvci1jb3JhbDogI2ZmN2Y1MDtcXHJcXG4gIC0tY29sb3ItY29yYWwtYWN0aXZlOiAjZmM0ZjEwO1xcclxcbiAgLS1jb2xvci1iZWlnZTogI2ZmZTVkNDtcXHJcXG4gIC0tY29sb3ItYmxhY2s6ICMxOTE5MTk7XFxyXFxuICAtLWNvbG9yLWJsYWNrLWFjdGl2ZTogIzVlNWU1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKlxcclxcbiAgICBUaGUgbmV3IENTUyByZXNldCAtIHZlcnNpb24gMS43LjIgKGxhc3QgdXBkYXRlZCAyMy42LjIwMjIpXFxyXFxuICAgIEdpdEh1YiBwYWdlOiBodHRwczovL2dpdGh1Yi5jb20vZWxhZDI0MTIvdGhlLW5ldy1jc3MtcmVzZXRcXHJcXG4qKiovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgcGFkZGluZy10b3A6IDdyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAxOTIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFByZWZlcnJlZCBib3gtc2l6aW5nIHZhbHVlICovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVhcHBseSB0aGUgcG9pbnRlciBjdXJzb3IgZm9yIGFuY2hvciB0YWdzICovXFxyXFxuYSxcXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiByZXZlcnQ7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyAoYnVsbGV0cy9udW1iZXJzKSAqL1xcclxcbm9sLFxcclxcbnVsLFxcclxcbm1lbnUge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9yIGltYWdlcyB0byBub3QgYmUgYWJsZSB0byBleGNlZWQgdGhlaXIgY29udGFpbmVyICovXFxyXFxuaW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVtb3ZlcyBzcGFjaW5nIGJldHdlZW4gY2VsbHMgaW4gdGFibGVzICovXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2FmYXJpIC0gc29sdmluZyBpc3N1ZSB3aGVuIHVzaW5nIHVzZXItc2VsZWN0Om5vbmUgb24gdGhlIDxib2R5PiB0ZXh0IGlucHV0IGRvZXNuJ3Qgd29ya2luZyAqL1xcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIHJldmVydCB0aGUgJ3doaXRlLXNwYWNlJyBwcm9wZXJ0eSBmb3IgdGV4dGFyZWEgZWxlbWVudHMgb24gU2FmYXJpICovXFxyXFxudGV4dGFyZWEge1xcclxcbiAgd2hpdGUtc3BhY2U6IHJldmVydDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWluaW11bSBzdHlsZSB0byBhbGxvdyB0byBzdHlsZSBtZXRlciBlbGVtZW50ICovXFxyXFxubWV0ZXIge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiByZXZlcnQ7XFxyXFxuICBhcHBlYXJhbmNlOiByZXZlcnQ7XFxyXFxufVxcclxcblxcclxcbi8qIHJlc2V0IGRlZmF1bHQgdGV4dCBvcGFjaXR5IG9mIGlucHV0IHBsYWNlaG9sZGVyICovXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi8qIGZpeCB0aGUgZmVhdHVyZSBvZiAnaGlkZGVuJyBhdHRyaWJ1dGUuXFxyXFxuICAgZGlzcGxheTpyZXZlcnQ7IHJldmVydCB0byBlbGVtZW50IGluc3RlYWQgb2YgYXR0cmlidXRlICovXFxyXFxuOndoZXJlKFtoaWRkZW5dKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZXZlcnQgZm9yIGJ1ZyBpbiBDaHJvbWl1bSBicm93c2Vyc1xcclxcbiAgIC0gZml4IGZvciB0aGUgY29udGVudCBlZGl0YWJsZSBhdHRyaWJ1dGUgd2lsbCB3b3JrIHByb3Blcmx5LlxcclxcbiAgIC0gd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvOyBhZGRlZCBmb3IgU2FmYXJpIGluIGNhc2Ugb2YgdXNpbmcgdXNlci1zZWxlY3Q6bm9uZSBvbiB3cmFwcGVyIGVsZW1lbnQqL1xcclxcbjp3aGVyZShbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cXFwiZmFsc2VcXFwiXSkpIHtcXHJcXG4gIC1tb3otdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxyXFxuICAtd2Via2l0LXVzZXItbW9kaWZ5OiByZWFkLXdyaXRlO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIC13ZWJraXQtbGluZS1icmVhazogYWZ0ZXItd2hpdGUtc3BhY2U7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhcHBseSBiYWNrIHRoZSBkcmFnZ2FibGUgZmVhdHVyZSAtIGV4aXN0IG9ubHkgaW4gQ2hyb21pdW0gYW5kIFNhZmFyaSAqL1xcclxcbjp3aGVyZShbZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIl0pIHtcXHJcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBlbGVtZW50O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css\n"));

/***/ })

});