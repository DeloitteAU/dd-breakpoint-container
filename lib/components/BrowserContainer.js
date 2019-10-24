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
    }, React.createElement(React.Fragment, null, children)));
  });
};

var _default = BrowserContainer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Jyb3dzZXJDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkRFQlVHX0JST1dTRVIiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJCcm93c2VyQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJjdXN0b21CcmVha3BvaW50cyIsInByb3BzIiwiSURfQlJPV1NFUiIsIlNFTEVDVE9SUyIsIkJQX0JST1dTRVIiLCJicE5hbWUiLCJicFNpemUiLCJCUkVBS1BPSU5UUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQU1BOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQS9DLEMsQ0FFQTtBQUNBOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUN4QkMsUUFEd0IsUUFDeEJBLFFBRHdCO0FBQUEsTUFFeEJDLGlCQUZ3QixRQUV4QkEsaUJBRndCO0FBQUEsTUFHckJDLEtBSHFCOztBQUFBLFNBS3hCLG9CQUFDLDRCQUFEO0FBQ0MsSUFBQSxVQUFVLEVBQUVDLG1CQURiO0FBRUMsSUFBQSxTQUFTLEVBQUVDLCtCQUFVQyxVQUZ0QjtBQUdDLElBQUEsS0FBSyxFQUFFVixhQUhSO0FBSUMsSUFBQSxpQkFBaUIsRUFBRU07QUFKcEIsS0FLS0MsS0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9FLFVBQUNJLE1BQUQsRUFBU0MsTUFBVDtBQUFBLFdBQ0Esb0JBQUMsMENBQUQsQ0FBdUIsUUFBdkI7QUFBZ0MsTUFBQSxLQUFLLEVBQUVOLGlCQUFpQixJQUFJTyx3QkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxvQkFBQyxrQ0FBRCxDQUFlLFFBQWY7QUFBd0IsTUFBQSxLQUFLLEVBQUU7QUFBRUYsUUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVDLFFBQUFBLE1BQU0sRUFBTkE7QUFBVixPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLDBDQUtFUCxRQUxGLENBREQsQ0FERCxDQURBO0FBQUEsR0FQRixDQUx3QjtBQUFBLENBQXpCOztlQTRCZUQsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCcmVha3BvaW50Q29udGFpbmVyLCB7XG5cdEFwcEJyZWFrcG9pbnQsXG5cdEJyZWFrcG9pbnREZWZpbml0aW9ucyxcblx0SVByb3BzIGFzIElCcGNQcm9wcyxcblx0U0VMRUNUT1JTLFxufSBmcm9tICcuL0JyZWFrcG9pbnRDb250YWluZXInO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuLi9kYXRhL2JyZWFrcG9pbnRzJztcbmltcG9ydCB7IElEX0JST1dTRVIgfSBmcm9tICcuL0NvbnRleHQnO1xuXG5jb25zdCBERUJVR19CUk9XU0VSID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5cbi8vIEVtdWxhdGVzIG1lZGlhIHF1ZXJ5IGZ1bmN0aW9uYWxpdHksIGFuZCBlbmFibGVzICdzdGFuZGFsb25lJyA8QnJlYWtwb2ludC8+XG4vLyBBbHNvIHByb3ZpZGVzIGJhY2t3YXJkLWNvbXBhdGliaWxpdHkgd2l0aCBEREJyZWFrcG9pbnRzIG9yaWdpbmFsICdicCgpJyBtaXhpblxuY29uc3QgQnJvd3NlckNvbnRhaW5lciA9ICh7XG5cdGNoaWxkcmVuLFxuXHRjdXN0b21CcmVha3BvaW50cyxcblx0Li4ucHJvcHNcbn06IElCcGNQcm9wcykgPT4gKFxuXHQ8QnJlYWtwb2ludENvbnRhaW5lclxuXHRcdGlkZW50aWZpZXI9e0lEX0JST1dTRVJ9XG5cdFx0Y2xhc3NOYW1lPXtTRUxFQ1RPUlMuQlBfQlJPV1NFUn1cblx0XHRkZWJ1Zz17REVCVUdfQlJPV1NFUn1cblx0XHRjdXN0b21CcmVha3BvaW50cz17Y3VzdG9tQnJlYWtwb2ludHN9XG5cdFx0ey4uLnByb3BzfVxuXHQ+XG5cdFx0eyhicE5hbWUsIGJwU2l6ZSkgPT4gKFxuXHRcdFx0PEJyZWFrcG9pbnREZWZpbml0aW9ucy5Qcm92aWRlciB2YWx1ZT17Y3VzdG9tQnJlYWtwb2ludHMgfHwgQlJFQUtQT0lOVFN9PlxuXHRcdFx0XHQ8QXBwQnJlYWtwb2ludC5Qcm92aWRlciB2YWx1ZT17eyBicE5hbWUsIGJwU2l6ZSB9fT5cblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0ey8qIE5vdGU6IFRoaXMgaXMgd3JhcHBlZCBpbiBhIGZyYWdtZW50IHRvIGJlXG5cdFx0XHRcdFx0XHRjZXJ0YWluIHRoYXQgdGhlIGFib3ZlIFByb3ZpZGVyIG9ubHkgaGFzIG9uZVxuXHRcdFx0XHRcdFx0Y2hpbGQsIHdoaWNoIGlzIGEgc3RyaWN0IHJlcXVpcmVtZW50IHRoYXQgd291bGRcblx0XHRcdFx0XHRcdG90aGVyd2lzZSBkZXBlbmQgb24gaG93IGNoaWxkcmVuIGFyZSBwYXNzZWQgKi99XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdDwvQXBwQnJlYWtwb2ludC5Qcm92aWRlcj5cblx0XHRcdDwvQnJlYWtwb2ludERlZmluaXRpb25zLlByb3ZpZGVyPlxuXHRcdCl9XG5cdDwvQnJlYWtwb2ludENvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJyb3dzZXJDb250YWluZXI7XG4iXX0=