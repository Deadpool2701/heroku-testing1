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

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Main.module.css */ \"./src/styles/Main.module.css\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    var _this = this;\n    var send = function send(event) {\n        event.preventDefault();\n        var element = document.querySelector(\"#check\");\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"https://heroku-deployment-react-flask.herokuapp.com/api\", {\n            message: element.value\n        }).then(function(res) {\n            axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://heroku-deployment-react-flask.herokuapp.com/api\").then(function(result) {\n                setStatus(result.data);\n                console.log(result.data);\n            });\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), status = ref[0], setStatus = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_3___default().Body),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_3___default().Form),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header),\n                    children: \"hEroku-deployment-next-flask\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\App Dev\\\\internship task\\\\heroku-testing\\\\Frontend\\\\src\\\\Main.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"check\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\App Dev\\\\internship task\\\\heroku-testing\\\\Frontend\\\\src\\\\Main.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\App Dev\\\\internship task\\\\heroku-testing\\\\Frontend\\\\src\\\\Main.js\",\n                    lineNumber: 23,\n                    columnNumber: 45\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\App Dev\\\\internship task\\\\heroku-testing\\\\Frontend\\\\src\\\\Main.js\",\n                    lineNumber: 23,\n                    columnNumber: 50\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_3___default().Button),\n                    onClick: send,\n                    children: \"Send it\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\App Dev\\\\internship task\\\\heroku-testing\\\\Frontend\\\\src\\\\Main.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: status.map(function(item) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: item.message\n                        }, status.indexOf(item), false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\App Dev\\\\internship task\\\\heroku-testing\\\\Frontend\\\\src\\\\Main.js\",\n                            lineNumber: 26,\n                            columnNumber: 37\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\App Dev\\\\internship task\\\\heroku-testing\\\\Frontend\\\\src\\\\Main.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\App Dev\\\\internship task\\\\heroku-testing\\\\Frontend\\\\src\\\\Main.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\App Dev\\\\internship task\\\\heroku-testing\\\\Frontend\\\\src\\\\Main.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(App, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNmO0FBQ0w7O0FBRTFCLFNBQVNHLEdBQUcsR0FBRzs7UUFHRkMsSUFBSSxHQUFiLFNBQVNBLElBQUksQ0FBQ0MsS0FBSyxFQUFDO1FBQ2hCQSxLQUFLLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ2hEUCxpREFBVSxDQUFDLHlEQUF5RCxFQUFFO1lBQUVTLE9BQU8sRUFBRUosT0FBTyxDQUFDSyxLQUFLO1NBQUUsQ0FBRSxDQUFDQyxJQUFJLENBQUVDLFNBQUFBLEdBQUcsRUFBSTtZQUM1R1osZ0RBQVMsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDVyxJQUFJLENBQUNHLFNBQUFBLE1BQU0sRUFBSTtnQkFDaEZDLFNBQVMsQ0FBQ0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsQ0FBQztnQkFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixNQUFNLENBQUNFLElBQUksQ0FBQzthQUMzQixDQUFDLENBQUM7U0FDTixDQUFDLENBQUM7S0FDTjs7SUFYRCxJQUF5QmpCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBaENvQixNQUFNLEdBQWNwQixHQUFZLEdBQTFCLEVBQUNnQixTQUFTLEdBQUloQixHQUFZLEdBQWhCO0lBYXJCLHFCQUNJLDhEQUFDcUIsS0FBRztRQUFDQyxTQUFTLEVBQUV2QixxRUFBVztrQkFDM0IsNEVBQUN5QixNQUFJO1lBQUNGLFNBQVMsRUFBRXZCLHFFQUFXOzs4QkFDeEIsOERBQUMyQixJQUFFO29CQUFDSixTQUFTLEVBQUV2Qix1RUFBYTs4QkFBRSw4QkFBNEI7Ozs7O3dCQUFLOzhCQUMvRCw4REFBQzZCLE9BQUs7b0JBQUNDLElBQUksRUFBQyxNQUFNO29CQUFDQyxFQUFFLEVBQUMsT0FBTzs7Ozs7d0JBQUc7OEJBQUEsOERBQUNDLElBQUU7Ozs7d0JBQUU7OEJBQUEsOERBQUNBLElBQUU7Ozs7d0JBQUU7OEJBQzFDLDhEQUFDQyxRQUFNO29CQUFDVixTQUFTLEVBQUV2Qix1RUFBYTtvQkFBRW1DLE9BQU8sRUFBRS9CLElBQUk7OEJBQUUsU0FBTzs7Ozs7d0JBQVM7OEJBQ2pFLDhEQUFDZ0MsSUFBRTs4QkFDRWYsTUFBTSxDQUFDZ0IsR0FBRyxDQUFDQyxTQUFBQSxJQUFJOzZDQUFJLDhEQUFDQyxJQUFFO3NDQUE2QkQsSUFBSSxDQUFDM0IsT0FBTzsyQkFBbkNVLE1BQU0sQ0FBQ21CLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDOzs7O2lDQUFxQjtxQkFBQSxDQUFDOzs7Ozt3QkFDdEU7Ozs7OztnQkFDRjs7Ozs7WUFDRCxDQUNSO0NBQ0w7R0ExQlFuQyxHQUFHO0FBQUhBLEtBQUFBLEdBQUc7QUEyQlosK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTWFpbi5qcz8zMGZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvTWFpbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgdmFyIFtzdGF0dXMsc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2snKTtcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwczovL2hlcm9rdS1kZXBsb3ltZW50LXJlYWN0LWZsYXNrLmhlcm9rdWFwcC5jb20vYXBpJywgeyBtZXNzYWdlOiBlbGVtZW50LnZhbHVlIH0gKS50aGVuIChyZXMgPT4ge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vaGVyb2t1LWRlcGxveW1lbnQtcmVhY3QtZmxhc2suaGVyb2t1YXBwLmNvbS9hcGknKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXMocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Cb2R5fT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5Gb3JtfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcn0+aEVyb2t1LWRlcGxveW1lbnQtbmV4dC1mbGFzazwvaDE+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2hlY2tcIiAvPjxici8+PGJyLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b259IG9uQ2xpY2s9e3NlbmR9PlNlbmQgaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3N0YXR1cy5tYXAoaXRlbSA9PiA8bGkga2V5PXtzdGF0dXMuaW5kZXhPZihpdGVtKX0+e2l0ZW0ubWVzc2FnZX08L2xpPil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwiYXhpb3MiLCJBcHAiLCJzZW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3N0IiwibWVzc2FnZSIsInZhbHVlIiwidGhlbiIsInJlcyIsImdldCIsInJlc3VsdCIsInNldFN0YXR1cyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiQm9keSIsImZvcm0iLCJGb3JtIiwiaDEiLCJIZWFkZXIiLCJpbnB1dCIsInR5cGUiLCJpZCIsImJyIiwiYnV0dG9uIiwiQnV0dG9uIiwib25DbGljayIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiaW5kZXhPZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Main.js\n"));

/***/ })

});