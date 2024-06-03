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
exports.id = "pages/api/showData2";
exports.ids = ["pages/api/showData2"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "(api)/./lib/supabase.js":
/*!*************************!*\
  !*** ./lib/supabase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\n// Inisialisasi koneksi Supabase\nconst supabaseUrl = \"https://owboetczhilycvibebfq.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93Ym9ldGN6aGlseWN2aWJlYmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MzI5MjQsImV4cCI6MjAzMzAwODkyNH0.EiRwCbeSQukkK0yVQT9ytSRGoaXLK-N1PdEmatD8zXQ\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc3VwYWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELGdDQUFnQztBQUNoQyxNQUFNQyxjQUFjQywwQ0FBb0M7QUFDeEQsTUFBTUcsa0JBQWtCSCxrTkFBeUM7QUFFakUsTUFBTUssV0FBV1AsbUVBQVlBLENBQUNDLGFBQWFJO0FBRTNDLGlFQUFlRSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5mb3JtYXNpbWFzamlkLy4vbGliL3N1cGFiYXNlLmpzPzE1OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcclxuXHJcbi8vIEluaXNpYWxpc2FzaSBrb25la3NpIFN1cGFiYXNlXHJcbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWTtcclxuXHJcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3VwYWJhc2U7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/supabase.js\n");

/***/ }),

/***/ "(api)/./pages/api/showData2.js":
/*!********************************!*\
  !*** ./pages/api/showData2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/supabase */ \"(api)/./lib/supabase.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const { tanggal  } = req.query;\n        try {\n            let { data , error  } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from(\"mtbf_mttr_results_2\").select(\"*\");\n            if (tanggal) {\n                data = data.filter((result)=>result.tanggal === tanggal);\n            }\n            if (error) {\n                console.error(\"Error fetching results from database:\", error);\n                res.status(500).json({\n                    message: \"Internal Server Error\"\n                });\n            } else {\n                res.status(200).json(data);\n            }\n        } catch (error1) {\n            console.error(\"Error fetching results from database:\", error1);\n            res.status(500).json({\n                message: \"Internal Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvd0RhdGEyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTNCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdILElBQUlJLEtBQUs7UUFFN0IsSUFBSTtZQUNBLElBQUksRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNUiwwREFDbkIsQ0FBQyx1QkFDTFUsTUFBTSxDQUFDO1lBRVosSUFBSUwsU0FBUztnQkFDVEUsT0FBT0EsS0FBS0ksTUFBTSxDQUFDLENBQUNDLFNBQVdBLE9BQU9QLE9BQU8sS0FBS0E7WUFDdEQsQ0FBQztZQUVELElBQUlHLE9BQU87Z0JBQ1BLLFFBQVFMLEtBQUssQ0FBQyx5Q0FBeUNBO2dCQUN2REwsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBd0I7WUFDNUQsT0FBTztnQkFDSGIsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1I7WUFDekIsQ0FBQztRQUNMLEVBQUUsT0FBT0MsUUFBTztZQUNaSyxRQUFRTCxLQUFLLENBQUMseUNBQXlDQTtZQUN2REwsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUF3QjtRQUM1RDtJQUNKLE9BQU87UUFDSGIsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQ3pELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5mb3JtYXNpbWFzamlkLy4vcGFnZXMvYXBpL3Nob3dEYXRhMi5qcz9iMzhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBhYmFzZSBmcm9tIFwiLi4vLi4vbGliL3N1cGFiYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICAgIGNvbnN0IHsgdGFuZ2dhbCB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgICAgIC5mcm9tKFwibXRiZl9tdHRyX3Jlc3VsdHNfMlwiKVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdChcIipcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFuZ2dhbCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChyZXN1bHQpID0+IHJlc3VsdC50YW5nZ2FsID09PSB0YW5nZ2FsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcmVzdWx0cyBmcm9tIGRhdGFiYXNlOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyByZXN1bHRzIGZyb20gZGF0YWJhc2U6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0YW5nZ2FsIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZmlsdGVyIiwicmVzdWx0IiwiY29uc29sZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/showData2.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/showData2.js"));
module.exports = __webpack_exports__;

})();