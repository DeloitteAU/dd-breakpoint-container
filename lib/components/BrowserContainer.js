import "core-js/modules/es6.array.index-of";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";
var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/BrowserContainer.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import T from 'prop-types';
import BreakpointContainer from './BreakpointContainer';
import { ID_BROWSER } from './Context.js';
import '../css/debug.css'; // ------------------------
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
      bpcProps = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(BreakpointContainer, Object.assign({
    identifier: ID_BROWSER,
    className: SELECTORS.BP_BROWSER,
    debug: DEBUG_BROWSER
  }, bpcProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), children);
};

BrowserContainer.propTypes = {
  children: T.node.isRequired
};
export default BrowserContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Jyb3dzZXJDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiQnJlYWtwb2ludENvbnRhaW5lciIsIklEX0JST1dTRVIiLCJERUJVR19CUk9XU0VSIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiQ0xBU1NFUyIsIkNPUkUiLCJCUF9QUkVGSVgiLCJERUJVR19NT0RJRklFUiIsIlNFTEVDVE9SUyIsIkJQX0JST1dTRVIiLCJCUF9DT05URU5UIiwiREVCVUdfSU5ESUNBVE9SIiwiREVCVUdfSURFTlRJRklFUiIsIkJyb3dzZXJDb250YWluZXIiLCJjaGlsZHJlbiIsImJwY1Byb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLENBQVAsTUFBYyxZQUFkO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixjQUEzQjtBQUVBLE9BQU8sa0JBQVAsQyxDQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQS9DLEMsQ0FFQTtBQUNBOztBQUNBLElBQU1DLE9BQU8sR0FBRztBQUNmQyxFQUFBQSxJQUFJLEVBQUUsS0FEUztBQUVmQyxFQUFBQSxTQUFTLEVBQUUsR0FGSTtBQUdmQyxFQUFBQSxjQUFjLEVBQUU7QUFIRCxDQUFoQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNqQkMsRUFBQUEsVUFBVSxZQUFLTCxPQUFPLENBQUNDLElBQWIsY0FETztBQUVqQkssRUFBQUEsVUFBVSxZQUFLTixPQUFPLENBQUNDLElBQWIsY0FGTztBQUdqQk0sRUFBQUEsZUFBZSxZQUFLUCxPQUFPLENBQUNDLElBQWIscUJBSEU7QUFJakJPLEVBQUFBLGdCQUFnQixZQUFLUixPQUFPLENBQUNDLElBQWI7QUFKQyxDQUFsQixDLENBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxJQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBZ0JDLFFBQWhCOztBQUFBLFNBQ3hCLG9CQUFDLG1CQUFEO0FBQ0MsSUFBQSxVQUFVLEVBQUVoQixVQURiO0FBRUMsSUFBQSxTQUFTLEVBQUVTLFNBQVMsQ0FBQ0MsVUFGdEI7QUFHQyxJQUFBLEtBQUssRUFBRVQ7QUFIUixLQUlLZSxRQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUVELFFBTkYsQ0FEd0I7QUFBQSxDQUF6Qjs7QUFXQUQsZ0JBQWdCLENBQUNHLFNBQWpCLEdBQTZCO0FBQzVCRixFQUFBQSxRQUFRLEVBQUVqQixDQUFDLENBQUNvQixJQUFGLENBQU9DO0FBRFcsQ0FBN0I7QUFJQSxlQUFlTCxnQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVCBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCcmVha3BvaW50Q29udGFpbmVyIGZyb20gJy4vQnJlYWtwb2ludENvbnRhaW5lcic7XG5pbXBvcnQgeyBJRF9CUk9XU0VSIH0gZnJvbSAnLi9Db250ZXh0LmpzJztcblxuaW1wb3J0ICcuLi9jc3MvZGVidWcuY3NzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBERUJVR19CUk9XU0VSID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5cbi8vIE5PVEU6IElmIHlvdSdyZSBnb2luZyB0byBjaGFuZ2UgYW55IENMQVNTRVMgb3IgU0VMRUNUT1JTLCB5b3UnbGxcbi8vIG5lZWQgdG8gYWxzbyBjaGFuZ2UgdGhlICBjb3JyZXNwb25kaW5nIHZhcmlhYmxlcyBpbiB0aGUgU0NTUyBmaWxlXG5jb25zdCBDTEFTU0VTID0ge1xuXHRDT1JFOiAnYnBjJyxcblx0QlBfUFJFRklYOiAnLScsXG5cdERFQlVHX01PRElGSUVSOiAnLWRlYnVnJyxcbn07XG5cbmNvbnN0IFNFTEVDVE9SUyA9IHtcblx0QlBfQlJPV1NFUjogYCR7Q0xBU1NFUy5DT1JFfV9fYnJvd3NlcmAsXG5cdEJQX0NPTlRFTlQ6IGAke0NMQVNTRVMuQ09SRX1fX2NvbnRlbnRgLFxuXHRERUJVR19JTkRJQ0FUT1I6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSW5kaWNhdG9yYCxcblx0REVCVUdfSURFTlRJRklFUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJZGVudGlmaWVyYCxcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRW11bGF0ZXMgbWVkaWEgcXVlcnkgZnVuY3Rpb25hbGl0eSwgYW5kIGVuYWJsZXMgJ3N0YW5kYWxvbmUnIDxCcmVha3BvaW50Lz5cbi8vIEFsc28gcHJvdmlkZXMgYmFja3dhcmQtY29tcGF0aWJpbGl0eSB3aXRoIEREQnJlYWtwb2ludHMgb3JpZ2luYWwgJ2JwKCknIG1peGluXG5jb25zdCBCcm93c2VyQ29udGFpbmVyID0gKHsgY2hpbGRyZW4sIC4uLmJwY1Byb3BzIH0pID0+IChcblx0PEJyZWFrcG9pbnRDb250YWluZXJcblx0XHRpZGVudGlmaWVyPXtJRF9CUk9XU0VSfVxuXHRcdGNsYXNzTmFtZT17U0VMRUNUT1JTLkJQX0JST1dTRVJ9XG5cdFx0ZGVidWc9e0RFQlVHX0JST1dTRVJ9XG5cdFx0ey4uLmJwY1Byb3BzfVxuXHQ+XG5cdFx0e2NoaWxkcmVufVxuXHQ8L0JyZWFrcG9pbnRDb250YWluZXI+XG4pO1xuXG5Ccm93c2VyQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFQubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnJvd3NlckNvbnRhaW5lcjtcbiJdfQ==