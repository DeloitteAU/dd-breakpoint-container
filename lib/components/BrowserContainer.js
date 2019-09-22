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
import BreakpointContainer, { AppBreakpoint, BreakpointDefinitions } from './BreakpointContainer';
import { BREAKPOINTS } from '../data/breakpoints.js';
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
      customBreakpoints = _ref.customBreakpoints,
      props = _objectWithoutProperties(_ref, ["children", "customBreakpoints"]);

  return React.createElement(BreakpointContainer, Object.assign({
    identifier: ID_BROWSER,
    className: SELECTORS.BP_BROWSER,
    debug: DEBUG_BROWSER,
    customBreakpoints: customBreakpoints
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), function (bpName, bpSize) {
    return React.createElement(BreakpointDefinitions.Provider, {
      value: customBreakpoints || BREAKPOINTS,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, React.createElement(AppBreakpoint.Provider, {
      value: {
        bpName: bpName,
        bpSize: bpSize
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, React.createElement(React.Fragment, null, children)));
  });
};

BrowserContainer.propTypes = {
  customBreakpoints: T.object,
  children: T.oneOfType([T.node, T.func]).isRequired
};
BrowserContainer.defaultProps = {
  customBreakpoints: null
};
export default BrowserContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Jyb3dzZXJDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiQnJlYWtwb2ludENvbnRhaW5lciIsIkFwcEJyZWFrcG9pbnQiLCJCcmVha3BvaW50RGVmaW5pdGlvbnMiLCJCUkVBS1BPSU5UUyIsIklEX0JST1dTRVIiLCJERUJVR19CUk9XU0VSIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiQ0xBU1NFUyIsIkNPUkUiLCJCUF9QUkVGSVgiLCJERUJVR19NT0RJRklFUiIsIlNFTEVDVE9SUyIsIkJQX0JST1dTRVIiLCJCUF9DT05URU5UIiwiREVCVUdfSU5ESUNBVE9SIiwiREVCVUdfSURFTlRJRklFUiIsIkJyb3dzZXJDb250YWluZXIiLCJjaGlsZHJlbiIsImN1c3RvbUJyZWFrcG9pbnRzIiwicHJvcHMiLCJicE5hbWUiLCJicFNpemUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLENBQVAsTUFBYyxZQUFkO0FBRUEsT0FBT0MsbUJBQVAsSUFDQ0MsYUFERCxFQUVDQyxxQkFGRCxRQUdPLHVCQUhQO0FBSUEsU0FBU0MsV0FBVCxRQUE0Qix3QkFBNUI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGNBQTNCO0FBRUEsT0FBTyxrQkFBUCxDLENBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLGFBQWEsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsYUFBL0MsQyxDQUVBO0FBQ0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHO0FBQ2ZDLEVBQUFBLElBQUksRUFBRSxLQURTO0FBRWZDLEVBQUFBLFNBQVMsRUFBRSxHQUZJO0FBR2ZDLEVBQUFBLGNBQWMsRUFBRTtBQUhELENBQWhCO0FBTUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2pCQyxFQUFBQSxVQUFVLFlBQUtMLE9BQU8sQ0FBQ0MsSUFBYixjQURPO0FBRWpCSyxFQUFBQSxVQUFVLFlBQUtOLE9BQU8sQ0FBQ0MsSUFBYixjQUZPO0FBR2pCTSxFQUFBQSxlQUFlLFlBQUtQLE9BQU8sQ0FBQ0MsSUFBYixxQkFIRTtBQUlqQk8sRUFBQUEsZ0JBQWdCLFlBQUtSLE9BQU8sQ0FBQ0MsSUFBYjtBQUpDLENBQWxCLEMsQ0FPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxpQkFBYixRQUFhQSxpQkFBYjtBQUFBLE1BQW1DQyxLQUFuQzs7QUFBQSxTQUN4QixvQkFBQyxtQkFBRDtBQUNDLElBQUEsVUFBVSxFQUFFakIsVUFEYjtBQUVDLElBQUEsU0FBUyxFQUFFUyxTQUFTLENBQUNDLFVBRnRCO0FBR0MsSUFBQSxLQUFLLEVBQUVULGFBSFI7QUFJQyxJQUFBLGlCQUFpQixFQUFFZTtBQUpwQixLQUtLQyxLQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0UsVUFBQ0MsTUFBRCxFQUFTQyxNQUFUO0FBQUEsV0FDQSxvQkFBQyxxQkFBRCxDQUF1QixRQUF2QjtBQUFnQyxNQUFBLEtBQUssRUFBRUgsaUJBQWlCLElBQUlqQixXQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLG9CQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLE1BQUEsS0FBSyxFQUFFO0FBQUVtQixRQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVUMsUUFBQUEsTUFBTSxFQUFOQTtBQUFWLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsMENBS0VKLFFBTEYsQ0FERCxDQURELENBREE7QUFBQSxHQVBGLENBRHdCO0FBQUEsQ0FBekI7O0FBd0JBRCxnQkFBZ0IsQ0FBQ00sU0FBakIsR0FBNkI7QUFDNUJKLEVBQUFBLGlCQUFpQixFQUFFckIsQ0FBQyxDQUFDMEIsTUFETztBQUU1Qk4sRUFBQUEsUUFBUSxFQUFFcEIsQ0FBQyxDQUFDMkIsU0FBRixDQUFZLENBQUMzQixDQUFDLENBQUM0QixJQUFILEVBQVM1QixDQUFDLENBQUM2QixJQUFYLENBQVosRUFBOEJDO0FBRlosQ0FBN0I7QUFLQVgsZ0JBQWdCLENBQUNZLFlBQWpCLEdBQWdDO0FBQy9CVixFQUFBQSxpQkFBaUIsRUFBRTtBQURZLENBQWhDO0FBSUEsZUFBZUYsZ0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFQgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCcmVha3BvaW50Q29udGFpbmVyLCB7XG5cdEFwcEJyZWFrcG9pbnQsXG5cdEJyZWFrcG9pbnREZWZpbml0aW9ucyxcbn0gZnJvbSAnLi9CcmVha3BvaW50Q29udGFpbmVyJztcbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi4vZGF0YS9icmVha3BvaW50cy5qcyc7XG5pbXBvcnQgeyBJRF9CUk9XU0VSIH0gZnJvbSAnLi9Db250ZXh0LmpzJztcblxuaW1wb3J0ICcuLi9jc3MvZGVidWcuY3NzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBERUJVR19CUk9XU0VSID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5cbi8vIE5PVEU6IElmIHlvdSdyZSBnb2luZyB0byBjaGFuZ2UgYW55IENMQVNTRVMgb3IgU0VMRUNUT1JTLCB5b3UnbGxcbi8vIG5lZWQgdG8gYWxzbyBjaGFuZ2UgdGhlICBjb3JyZXNwb25kaW5nIHZhcmlhYmxlcyBpbiB0aGUgU0NTUyBmaWxlXG5jb25zdCBDTEFTU0VTID0ge1xuXHRDT1JFOiAnYnBjJyxcblx0QlBfUFJFRklYOiAnLScsXG5cdERFQlVHX01PRElGSUVSOiAnLWRlYnVnJyxcbn07XG5cbmNvbnN0IFNFTEVDVE9SUyA9IHtcblx0QlBfQlJPV1NFUjogYCR7Q0xBU1NFUy5DT1JFfV9fYnJvd3NlcmAsXG5cdEJQX0NPTlRFTlQ6IGAke0NMQVNTRVMuQ09SRX1fX2NvbnRlbnRgLFxuXHRERUJVR19JTkRJQ0FUT1I6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSW5kaWNhdG9yYCxcblx0REVCVUdfSURFTlRJRklFUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJZGVudGlmaWVyYCxcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRW11bGF0ZXMgbWVkaWEgcXVlcnkgZnVuY3Rpb25hbGl0eSwgYW5kIGVuYWJsZXMgJ3N0YW5kYWxvbmUnIDxCcmVha3BvaW50Lz5cbi8vIEFsc28gcHJvdmlkZXMgYmFja3dhcmQtY29tcGF0aWJpbGl0eSB3aXRoIEREQnJlYWtwb2ludHMgb3JpZ2luYWwgJ2JwKCknIG1peGluXG5jb25zdCBCcm93c2VyQ29udGFpbmVyID0gKHsgY2hpbGRyZW4sIGN1c3RvbUJyZWFrcG9pbnRzLCAuLi5wcm9wcyB9KSA9PiAoXG5cdDxCcmVha3BvaW50Q29udGFpbmVyXG5cdFx0aWRlbnRpZmllcj17SURfQlJPV1NFUn1cblx0XHRjbGFzc05hbWU9e1NFTEVDVE9SUy5CUF9CUk9XU0VSfVxuXHRcdGRlYnVnPXtERUJVR19CUk9XU0VSfVxuXHRcdGN1c3RvbUJyZWFrcG9pbnRzPXtjdXN0b21CcmVha3BvaW50c31cblx0XHR7Li4ucHJvcHN9XG5cdD5cblx0XHR7KGJwTmFtZSwgYnBTaXplKSA9PiAoXG5cdFx0XHQ8QnJlYWtwb2ludERlZmluaXRpb25zLlByb3ZpZGVyIHZhbHVlPXtjdXN0b21CcmVha3BvaW50cyB8fCBCUkVBS1BPSU5UU30+XG5cdFx0XHRcdDxBcHBCcmVha3BvaW50LlByb3ZpZGVyIHZhbHVlPXt7IGJwTmFtZSwgYnBTaXplIH19PlxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHR7LyogTm90ZTogVGhpcyBpcyB3cmFwcGVkIGluIGEgZnJhZ21lbnQgdG8gYmVcblx0XHRcdFx0XHRcdGNlcnRhaW4gdGhhdCB0aGUgYWJvdmUgUHJvdmlkZXIgb25seSBoYXMgb25lXG5cdFx0XHRcdFx0XHRjaGlsZCwgd2hpY2ggaXMgYSBzdHJpY3QgcmVxdWlyZW1lbnQgdGhhdCB3b3VsZFxuXHRcdFx0XHRcdFx0b3RoZXJ3aXNlIGRlcGVuZCBvbiBob3cgY2hpbGRyZW4gYXJlIHBhc3NlZCAqL31cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0PC9BcHBCcmVha3BvaW50LlByb3ZpZGVyPlxuXHRcdFx0PC9CcmVha3BvaW50RGVmaW5pdGlvbnMuUHJvdmlkZXI+XG5cdFx0KX1cblx0PC9CcmVha3BvaW50Q29udGFpbmVyPlxuKTtcblxuQnJvd3NlckNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG5cdGN1c3RvbUJyZWFrcG9pbnRzOiBULm9iamVjdCxcblx0Y2hpbGRyZW46IFQub25lT2ZUeXBlKFtULm5vZGUsIFQuZnVuY10pLmlzUmVxdWlyZWQsXG59O1xuXG5Ccm93c2VyQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcblx0Y3VzdG9tQnJlYWtwb2ludHM6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyQ29udGFpbmVyO1xuIl19