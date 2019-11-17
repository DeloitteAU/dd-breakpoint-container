"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.assign");

var React = _interopRequireWildcard(require("react"));

var _BreakpointContainer = _interopRequireWildcard(require("./BreakpointContainer"));

var _breakpoints = require("../data/breakpoints");

var _Context = require("./Context");

var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/BrowserContainer.tsx";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEBUG_BROWSER = process.env.NODE_ENV === 'development'; // Emulates media query functionality, and enables 'standalone' <Breakpoint/>
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin

var BrowserContainer = function BrowserContainer(_ref) {
  var children = _ref.children,
      customBreakpoints = _ref.customBreakpoints,
      props = _objectWithoutProperties(_ref, ["children", "customBreakpoints"]);

  return React.createElement(_BreakpointContainer.default, Object.assign({
    identifier: _Context.ID_BROWSER,
    className: _BreakpointContainer.SELECTORS.BP_BROWSER,
    debug: DEBUG_BROWSER,
    customBreakpoints: customBreakpoints
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), function (bpName, bpSize) {
    return React.createElement(_BreakpointContainer.BreakpointDefinitions.Provider, {
      value: customBreakpoints || _breakpoints.BREAKPOINTS,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, React.createElement(_BreakpointContainer.AppBreakpoint.Provider, {
      value: {
        bpName: bpName,
        bpSize: bpSize
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, React.createElement(React.Fragment, null, typeof children === 'function' ? children(bpName, bpSize) : children)));
  });
};

var _default = BrowserContainer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Jyb3dzZXJDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkRFQlVHX0JST1dTRVIiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJCcm93c2VyQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJjdXN0b21CcmVha3BvaW50cyIsInByb3BzIiwiSURfQlJPV1NFUiIsIlNFTEVDVE9SUyIsIkJQX0JST1dTRVIiLCJicE5hbWUiLCJicFNpemUiLCJCUkVBS1BPSU5UUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQU1BOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQS9DLEMsQ0FFQTtBQUNBOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUN4QkMsUUFEd0IsUUFDeEJBLFFBRHdCO0FBQUEsTUFFeEJDLGlCQUZ3QixRQUV4QkEsaUJBRndCO0FBQUEsTUFHckJDLEtBSHFCOztBQUFBLFNBS3hCLG9CQUFDLDRCQUFEO0FBQ0MsSUFBQSxVQUFVLEVBQUVDLG1CQURiO0FBRUMsSUFBQSxTQUFTLEVBQUVDLCtCQUFVQyxVQUZ0QjtBQUdDLElBQUEsS0FBSyxFQUFFVixhQUhSO0FBSUMsSUFBQSxpQkFBaUIsRUFBRU07QUFKcEIsS0FLS0MsS0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9FLFVBQUNJLE1BQUQsRUFBU0MsTUFBVDtBQUFBLFdBQ0Esb0JBQUMsMENBQUQsQ0FBdUIsUUFBdkI7QUFBZ0MsTUFBQSxLQUFLLEVBQUVOLGlCQUFpQixJQUFJTyx3QkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxvQkFBQyxrQ0FBRCxDQUFlLFFBQWY7QUFBd0IsTUFBQSxLQUFLLEVBQUU7QUFBRUYsUUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVDLFFBQUFBLE1BQU0sRUFBTkE7QUFBVixPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLDBDQUtFLE9BQU9QLFFBQVAsS0FBb0IsVUFBcEIsR0FDR0EsUUFBRCxDQUF1Qk0sTUFBdkIsRUFBK0JDLE1BQS9CLENBREYsR0FFRVAsUUFQSixDQURELENBREQsQ0FEQTtBQUFBLEdBUEYsQ0FMd0I7QUFBQSxDQUF6Qjs7ZUE4QmVELGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnJlYWtwb2ludENvbnRhaW5lciwge1xuXHRBcHBCcmVha3BvaW50LFxuXHRCcmVha3BvaW50RGVmaW5pdGlvbnMsXG5cdElQcm9wcyBhcyBJQnBjUHJvcHMsXG5cdFNFTEVDVE9SUyxcbn0gZnJvbSAnLi9CcmVha3BvaW50Q29udGFpbmVyJztcbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi4vZGF0YS9icmVha3BvaW50cyc7XG5pbXBvcnQgeyBJRF9CUk9XU0VSIH0gZnJvbSAnLi9Db250ZXh0JztcblxuY29uc3QgREVCVUdfQlJPV1NFUiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG4vLyBFbXVsYXRlcyBtZWRpYSBxdWVyeSBmdW5jdGlvbmFsaXR5LCBhbmQgZW5hYmxlcyAnc3RhbmRhbG9uZScgPEJyZWFrcG9pbnQvPlxuLy8gQWxzbyBwcm92aWRlcyBiYWNrd2FyZC1jb21wYXRpYmlsaXR5IHdpdGggRERCcmVha3BvaW50cyBvcmlnaW5hbCAnYnAoKScgbWl4aW5cbmNvbnN0IEJyb3dzZXJDb250YWluZXIgPSAoe1xuXHRjaGlsZHJlbixcblx0Y3VzdG9tQnJlYWtwb2ludHMsXG5cdC4uLnByb3BzXG59OiBJQnBjUHJvcHMpID0+IChcblx0PEJyZWFrcG9pbnRDb250YWluZXJcblx0XHRpZGVudGlmaWVyPXtJRF9CUk9XU0VSfVxuXHRcdGNsYXNzTmFtZT17U0VMRUNUT1JTLkJQX0JST1dTRVJ9XG5cdFx0ZGVidWc9e0RFQlVHX0JST1dTRVJ9XG5cdFx0Y3VzdG9tQnJlYWtwb2ludHM9e2N1c3RvbUJyZWFrcG9pbnRzfVxuXHRcdHsuLi5wcm9wc31cblx0PlxuXHRcdHsoYnBOYW1lLCBicFNpemUpID0+IChcblx0XHRcdDxCcmVha3BvaW50RGVmaW5pdGlvbnMuUHJvdmlkZXIgdmFsdWU9e2N1c3RvbUJyZWFrcG9pbnRzIHx8IEJSRUFLUE9JTlRTfT5cblx0XHRcdFx0PEFwcEJyZWFrcG9pbnQuUHJvdmlkZXIgdmFsdWU9e3sgYnBOYW1lLCBicFNpemUgfX0+XG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdHsvKiBOb3RlOiBUaGlzIGlzIHdyYXBwZWQgaW4gYSBmcmFnbWVudCB0byBiZVxuXHRcdFx0XHRcdFx0Y2VydGFpbiB0aGF0IHRoZSBhYm92ZSBQcm92aWRlciBvbmx5IGhhcyBvbmVcblx0XHRcdFx0XHRcdGNoaWxkLCB3aGljaCBpcyBhIHN0cmljdCByZXF1aXJlbWVudCB0aGF0IHdvdWxkXG5cdFx0XHRcdFx0XHRvdGhlcndpc2UgZGVwZW5kIG9uIGhvdyBjaGlsZHJlbiBhcmUgcGFzc2VkICovfVxuXHRcdFx0XHRcdFx0e3R5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRcdFx0XHQ/IChjaGlsZHJlbiBhcyBGdW5jdGlvbikoYnBOYW1lLCBicFNpemUpXG5cdFx0XHRcdFx0XHRcdDogY2hpbGRyZW59XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdDwvQXBwQnJlYWtwb2ludC5Qcm92aWRlcj5cblx0XHRcdDwvQnJlYWtwb2ludERlZmluaXRpb25zLlByb3ZpZGVyPlxuXHRcdCl9XG5cdDwvQnJlYWtwb2ludENvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJyb3dzZXJDb250YWluZXI7XG4iXX0=