"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/exports/next-response.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__.NextResponse)\n/* harmony export */ });\n/* harmony import */ var _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spec-extension/response */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/response.js\");\n// This file is for modularized imports for next/server to get fully-treeshaking.\n //# sourceMappingURL=next-response.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9leHBvcnRzL25leHQtcmVzcG9uc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRkFBaUY7QUFDWixDQUVyRSx5Q0FBeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9leHBvcnRzL25leHQtcmVzcG9uc2UuanM/NjQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZm9yIG1vZHVsYXJpemVkIGltcG9ydHMgZm9yIG5leHQvc2VydmVyIHRvIGdldCBmdWxseS10cmVlc2hha2luZy5cbmV4cG9ydCB7IE5leHRSZXNwb25zZSBhcyBkZWZhdWx0IH0gZnJvbSBcIi4uL3NwZWMtZXh0ZW5zaW9uL3Jlc3BvbnNlXCI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5leHQtcmVzcG9uc2UuanMubWFwIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\n");

/***/ }),

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport default from dynamic */ next_auth_middleware__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/middleware */ \"(middleware)/./node_modules/next-auth/middleware.js\");\n/* harmony import */ var next_auth_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_middleware__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\nasync function middleware(request) {\n    const { pathname } = request.nextUrl;\n    if (pathname == \"/login\" || pathname == \"/admin/login\") {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].next();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDUztBQUNqRCxlQUFlRSxXQUFXQyxPQUFvQjtJQUNuRCxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRCxRQUFRRSxPQUFPO0lBRXBDLElBQUlELFlBQVksWUFBWUEsWUFBWSxnQkFBZ0I7UUFDdEQsT0FBT0gsa0ZBQVlBLENBQUNLLElBQUk7SUFDMUI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwibmV4dC1hdXRoL21pZGRsZXdhcmVcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHJlcXVlc3QubmV4dFVybDtcblxuICBpZiAocGF0aG5hbWUgPT0gXCIvbG9naW5cIiB8fCBwYXRobmFtZSA9PSBcIi9hZG1pbi9sb2dpblwiKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJwYXRobmFtZSIsIm5leHRVcmwiLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});