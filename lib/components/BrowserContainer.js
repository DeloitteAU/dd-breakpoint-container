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

require("../css/debug.css");

var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/BrowserContainer.tsx";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// ------------------------
// Variables
// ------------------------
var DEBUG_BROWSER = process.env.NODE_ENV === 'development'; // NOTE: If you're going to change any CLASSES or SELECTORS, you'll
// need to also change the  corresponding variables in the SCSS file

var CLASSES = {
  CORE: 'bpc',
  BP_PREFIX: '-',
  DEBUG_MODIFIER: '-debug'
};
var SELECTORS = {
  BP_BROWSER: "".concat(CLASSES.CORE, "__browser"),
  BP_CONTENT: "".concat(CLASSES.CORE, "__content"),
  DEBUG_INDICATOR: "".concat(CLASSES.CORE, "__debugIndicator"),
  DEBUG_IDENTIFIER: "".concat(CLASSES.CORE, "__debugIdentifier")
}; // ------------------------
// Export
// ------------------------
// Emulates media query functionality, and enables 'standalone' <Breakpoint/>
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin

var BrowserContainer = function BrowserContainer(_ref) {
  var children = _ref.children,
      customBreakpoints = _ref.customBreakpoints,
      props = _objectWithoutProperties(_ref, ["children", "customBreakpoints"]);

  return React.createElement(_BreakpointContainer.default, Object.assign({
    identifier: _Context.ID_BROWSER,
    className: SELECTORS.BP_BROWSER,
    debug: DEBUG_BROWSER,
    customBreakpoints: customBreakpoints
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), function (bpName, bpSize) {
    return React.createElement(_BreakpointContainer.BreakpointDefinitions.Provider, {
      value: customBreakpoints || _breakpoints.BREAKPOINTS,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, React.createElement(_BreakpointContainer.AppBreakpoint.Provider, {
      value: {
        bpName: bpName,
        bpSize: bpSize
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, React.createElement(React.Fragment, null, children)));
  });
};

var _default = BrowserContainer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Jyb3dzZXJDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkRFQlVHX0JST1dTRVIiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJDTEFTU0VTIiwiQ09SRSIsIkJQX1BSRUZJWCIsIkRFQlVHX01PRElGSUVSIiwiU0VMRUNUT1JTIiwiQlBfQlJPV1NFUiIsIkJQX0NPTlRFTlQiLCJERUJVR19JTkRJQ0FUT1IiLCJERUJVR19JREVOVElGSUVSIiwiQnJvd3NlckNvbnRhaW5lciIsImNoaWxkcmVuIiwiY3VzdG9tQnJlYWtwb2ludHMiLCJwcm9wcyIsIklEX0JST1dTRVIiLCJicE5hbWUiLCJicFNpemUiLCJCUkVBS1BPSU5UUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUtBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQS9DLEMsQ0FFQTtBQUNBOztBQUNBLElBQU1DLE9BQU8sR0FBRztBQUNmQyxFQUFBQSxJQUFJLEVBQUUsS0FEUztBQUVmQyxFQUFBQSxTQUFTLEVBQUUsR0FGSTtBQUdmQyxFQUFBQSxjQUFjLEVBQUU7QUFIRCxDQUFoQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNqQkMsRUFBQUEsVUFBVSxZQUFLTCxPQUFPLENBQUNDLElBQWIsY0FETztBQUVqQkssRUFBQUEsVUFBVSxZQUFLTixPQUFPLENBQUNDLElBQWIsY0FGTztBQUdqQk0sRUFBQUEsZUFBZSxZQUFLUCxPQUFPLENBQUNDLElBQWIscUJBSEU7QUFJakJPLEVBQUFBLGdCQUFnQixZQUFLUixPQUFPLENBQUNDLElBQWI7QUFKQyxDQUFsQixDLENBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxJQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFDeEJDLFFBRHdCLFFBQ3hCQSxRQUR3QjtBQUFBLE1BRXhCQyxpQkFGd0IsUUFFeEJBLGlCQUZ3QjtBQUFBLE1BR3JCQyxLQUhxQjs7QUFBQSxTQUt4QixvQkFBQyw0QkFBRDtBQUNDLElBQUEsVUFBVSxFQUFFQyxtQkFEYjtBQUVDLElBQUEsU0FBUyxFQUFFVCxTQUFTLENBQUNDLFVBRnRCO0FBR0MsSUFBQSxLQUFLLEVBQUVULGFBSFI7QUFJQyxJQUFBLGlCQUFpQixFQUFFZTtBQUpwQixLQUtLQyxLQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0UsVUFBQ0UsTUFBRCxFQUFTQyxNQUFUO0FBQUEsV0FDQSxvQkFBQywwQ0FBRCxDQUF1QixRQUF2QjtBQUFnQyxNQUFBLEtBQUssRUFBRUosaUJBQWlCLElBQUlLLHdCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLG9CQUFDLGtDQUFELENBQWUsUUFBZjtBQUF3QixNQUFBLEtBQUssRUFBRTtBQUFFRixRQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVUMsUUFBQUEsTUFBTSxFQUFOQTtBQUFWLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsMENBS0VMLFFBTEYsQ0FERCxDQURELENBREE7QUFBQSxHQVBGLENBTHdCO0FBQUEsQ0FBekI7O2VBNEJlRCxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJyZWFrcG9pbnRDb250YWluZXIsIHtcblx0QXBwQnJlYWtwb2ludCxcblx0QnJlYWtwb2ludERlZmluaXRpb25zLFxuXHRJUHJvcHMgYXMgSUJwY1Byb3BzLFxufSBmcm9tICdjb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXInO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICdkYXRhL2JyZWFrcG9pbnRzJztcbmltcG9ydCB7IElEX0JST1dTRVIgfSBmcm9tICdjb21wb25lbnRzL0NvbnRleHQnO1xuXG5pbXBvcnQgJ2Nzcy9kZWJ1Zy5jc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IERFQlVHX0JST1dTRVIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcblxuLy8gTk9URTogSWYgeW91J3JlIGdvaW5nIHRvIGNoYW5nZSBhbnkgQ0xBU1NFUyBvciBTRUxFQ1RPUlMsIHlvdSdsbFxuLy8gbmVlZCB0byBhbHNvIGNoYW5nZSB0aGUgIGNvcnJlc3BvbmRpbmcgdmFyaWFibGVzIGluIHRoZSBTQ1NTIGZpbGVcbmNvbnN0IENMQVNTRVMgPSB7XG5cdENPUkU6ICdicGMnLFxuXHRCUF9QUkVGSVg6ICctJyxcblx0REVCVUdfTU9ESUZJRVI6ICctZGVidWcnLFxufTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuXHRCUF9CUk9XU0VSOiBgJHtDTEFTU0VTLkNPUkV9X19icm93c2VyYCxcblx0QlBfQ09OVEVOVDogYCR7Q0xBU1NFUy5DT1JFfV9fY29udGVudGAsXG5cdERFQlVHX0lORElDQVRPUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJbmRpY2F0b3JgLFxuXHRERUJVR19JREVOVElGSUVSOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0lkZW50aWZpZXJgLFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFbXVsYXRlcyBtZWRpYSBxdWVyeSBmdW5jdGlvbmFsaXR5LCBhbmQgZW5hYmxlcyAnc3RhbmRhbG9uZScgPEJyZWFrcG9pbnQvPlxuLy8gQWxzbyBwcm92aWRlcyBiYWNrd2FyZC1jb21wYXRpYmlsaXR5IHdpdGggRERCcmVha3BvaW50cyBvcmlnaW5hbCAnYnAoKScgbWl4aW5cbmNvbnN0IEJyb3dzZXJDb250YWluZXIgPSAoe1xuXHRjaGlsZHJlbixcblx0Y3VzdG9tQnJlYWtwb2ludHMsXG5cdC4uLnByb3BzXG59OiBJQnBjUHJvcHMpID0+IChcblx0PEJyZWFrcG9pbnRDb250YWluZXJcblx0XHRpZGVudGlmaWVyPXtJRF9CUk9XU0VSfVxuXHRcdGNsYXNzTmFtZT17U0VMRUNUT1JTLkJQX0JST1dTRVJ9XG5cdFx0ZGVidWc9e0RFQlVHX0JST1dTRVJ9XG5cdFx0Y3VzdG9tQnJlYWtwb2ludHM9e2N1c3RvbUJyZWFrcG9pbnRzfVxuXHRcdHsuLi5wcm9wc31cblx0PlxuXHRcdHsoYnBOYW1lLCBicFNpemUpID0+IChcblx0XHRcdDxCcmVha3BvaW50RGVmaW5pdGlvbnMuUHJvdmlkZXIgdmFsdWU9e2N1c3RvbUJyZWFrcG9pbnRzIHx8IEJSRUFLUE9JTlRTfT5cblx0XHRcdFx0PEFwcEJyZWFrcG9pbnQuUHJvdmlkZXIgdmFsdWU9e3sgYnBOYW1lLCBicFNpemUgfX0+XG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdHsvKiBOb3RlOiBUaGlzIGlzIHdyYXBwZWQgaW4gYSBmcmFnbWVudCB0byBiZVxuXHRcdFx0XHRcdFx0Y2VydGFpbiB0aGF0IHRoZSBhYm92ZSBQcm92aWRlciBvbmx5IGhhcyBvbmVcblx0XHRcdFx0XHRcdGNoaWxkLCB3aGljaCBpcyBhIHN0cmljdCByZXF1aXJlbWVudCB0aGF0IHdvdWxkXG5cdFx0XHRcdFx0XHRvdGhlcndpc2UgZGVwZW5kIG9uIGhvdyBjaGlsZHJlbiBhcmUgcGFzc2VkICovfVxuXHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQ8L0FwcEJyZWFrcG9pbnQuUHJvdmlkZXI+XG5cdFx0XHQ8L0JyZWFrcG9pbnREZWZpbml0aW9ucy5Qcm92aWRlcj5cblx0XHQpfVxuXHQ8L0JyZWFrcG9pbnRDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyQ29udGFpbmVyO1xuIl19