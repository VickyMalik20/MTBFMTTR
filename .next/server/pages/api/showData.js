"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/showData";
exports.ids = ["pages/api/showData"];
exports.modules = {

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: process.env.MYSQL_HOST,\n        database: process.env.MYSQL_DATABASE,\n        user: process.env.MYSQL_USERNAME,\n        password: process.env.MYSQL_PASSWORD,\n        port: parseInt(process.env.MYSQL_PORT)\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBRTdCLE1BQU1DLEtBQUtELHVEQUFLQSxDQUFDO0lBQ3BCRSxRQUFRO1FBQ0pDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtRQUM1QkMsVUFBVUgsUUFBUUMsR0FBRyxDQUFDRyxjQUFjO1FBQ3BDQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGNBQWM7UUFDaENDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sY0FBYztRQUNwQ0MsTUFBTUMsU0FBU1YsUUFBUUMsR0FBRyxDQUFDVSxVQUFVO0lBQ3pDO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2luZm9ybWFzaW1hc2ppZC8uL2xpYi9kYi5qcz8zZGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tIFwic2VydmVybGVzcy1teXNxbFwiXHJcblxyXG5leHBvcnQgY29uc3QgZGIgPSBteXNxbCh7XHJcbiAgICBjb25maWc6IHtcclxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5NWVNRTF9IT1NULFxyXG4gICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NWVNRTF9EQVRBQkFTRSxcclxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5NWVNRTF9VU0VSTkFNRSxcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQsXHJcbiAgICAgICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuTVlTUUxfUE9SVClcclxuICAgIH0sXHJcbn0pIl0sIm5hbWVzIjpbIm15c3FsIiwiZGIiLCJjb25maWciLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1ZU1FMX0hPU1QiLCJkYXRhYmFzZSIsIk1ZU1FMX0RBVEFCQVNFIiwidXNlciIsIk1ZU1FMX1VTRVJOQU1FIiwicGFzc3dvcmQiLCJNWVNRTF9QQVNTV09SRCIsInBvcnQiLCJwYXJzZUludCIsIk1ZU1FMX1BPUlQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/showData.js":
/*!*******************************!*\
  !*** ./pages/api/showData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const { tanggal  } = req.query;\n        let sql = \"SELECT * FROM mtbf_mttr_results\";\n        let values = [];\n        if (tanggal) {\n            sql += \" WHERE tanggal = ?\";\n            values.push(tanggal);\n        }\n        _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.query(sql, values, (error, results)=>{\n            if (error) {\n                console.error(\"Error fetching results from database:\", error);\n                res.status(500).json({\n                    message: \"Internal Server Error\"\n                });\n            } else {\n                res.status(200).json(results);\n            }\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvd0RhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFFbkIsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdEIsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBR0gsSUFBSUksS0FBSztRQUM3QixJQUFJQyxNQUFNO1FBQ1YsSUFBSUMsU0FBUyxFQUFFO1FBRWYsSUFBSUgsU0FBUztZQUNURSxPQUFPO1lBQ1BDLE9BQU9DLElBQUksQ0FBQ0o7UUFDaEIsQ0FBQztRQUVETCw2Q0FBUSxDQUFDTyxLQUFLQyxRQUFRLENBQUNFLE9BQU9DLFVBQVk7WUFDdEMsSUFBSUQsT0FBTztnQkFDUEUsUUFBUUYsS0FBSyxDQUFDLHlDQUF5Q0E7Z0JBQ3ZEUCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUF3QjtZQUM1RCxPQUFPO2dCQUNIWixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtZQUN6QixDQUFDO1FBQ0w7SUFDSixPQUFPO1FBQ0hSLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQjtJQUN6RCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2luZm9ybWFzaW1hc2ppZC8uL3BhZ2VzL2FwaS9zaG93RGF0YS5qcz81MzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgY29uc3QgeyB0YW5nZ2FsIH0gPSByZXEucXVlcnk7XHJcbiAgICAgICAgbGV0IHNxbCA9ICdTRUxFQ1QgKiBGUk9NIG10YmZfbXR0cl9yZXN1bHRzJztcclxuICAgICAgICBsZXQgdmFsdWVzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0YW5nZ2FsKSB7XHJcbiAgICAgICAgICAgIHNxbCArPSAnIFdIRVJFIHRhbmdnYWwgPSA/JztcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2godGFuZ2dhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYi5xdWVyeShzcWwsIHZhbHVlcywgKGVycm9yLCByZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmVzdWx0cyBmcm9tIGRhdGFiYXNlOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0YW5nZ2FsIiwicXVlcnkiLCJzcWwiLCJ2YWx1ZXMiLCJwdXNoIiwiZXJyb3IiLCJyZXN1bHRzIiwiY29uc29sZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/showData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/showData.js"));
module.exports = __webpack_exports__;

})();