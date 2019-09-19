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

var DEBUG_BROWSER = process.env.NODE_ENV === 'development';
export var AppBreakpoint = React.createContext(); // NOTE: If you're going to change any CLASSES or SELECTORS, you'll
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
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(BreakpointContainer, Object.assign({
    identifier: ID_BROWSER,
    className: SELECTORS.BP_BROWSER,
    debug: DEBUG_BROWSER
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), function (bpName, bpSize) {
    return React.createElement(AppBreakpoint.Provider, {
      value: {
        bpName: bpName,
        bpSize: bpSize
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, React.createElement(React.Fragment, null, children));
  });
};

BrowserContainer.propTypes = {
  children: T.oneOfType([T.node, T.func]).isRequired
};
export default BrowserContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Jyb3dzZXJDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiQnJlYWtwb2ludENvbnRhaW5lciIsIklEX0JST1dTRVIiLCJERUJVR19CUk9XU0VSIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiQXBwQnJlYWtwb2ludCIsImNyZWF0ZUNvbnRleHQiLCJDTEFTU0VTIiwiQ09SRSIsIkJQX1BSRUZJWCIsIkRFQlVHX01PRElGSUVSIiwiU0VMRUNUT1JTIiwiQlBfQlJPV1NFUiIsIkJQX0NPTlRFTlQiLCJERUJVR19JTkRJQ0FUT1IiLCJERUJVR19JREVOVElGSUVSIiwiQnJvd3NlckNvbnRhaW5lciIsImNoaWxkcmVuIiwicHJvcHMiLCJicE5hbWUiLCJicFNpemUiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLENBQVAsTUFBYyxZQUFkO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixjQUEzQjtBQUVBLE9BQU8sa0JBQVAsQyxDQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQS9DO0FBRUEsT0FBTyxJQUFNQyxhQUFhLEdBQUdSLEtBQUssQ0FBQ1MsYUFBTixFQUF0QixDLENBRVA7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUc7QUFDZkMsRUFBQUEsSUFBSSxFQUFFLEtBRFM7QUFFZkMsRUFBQUEsU0FBUyxFQUFFLEdBRkk7QUFHZkMsRUFBQUEsY0FBYyxFQUFFO0FBSEQsQ0FBaEI7QUFNQSxJQUFNQyxTQUFTLEdBQUc7QUFDakJDLEVBQUFBLFVBQVUsWUFBS0wsT0FBTyxDQUFDQyxJQUFiLGNBRE87QUFFakJLLEVBQUFBLFVBQVUsWUFBS04sT0FBTyxDQUFDQyxJQUFiLGNBRk87QUFHakJNLEVBQUFBLGVBQWUsWUFBS1AsT0FBTyxDQUFDQyxJQUFiLHFCQUhFO0FBSWpCTyxFQUFBQSxnQkFBZ0IsWUFBS1IsT0FBTyxDQUFDQyxJQUFiO0FBSkMsQ0FBbEIsQyxDQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCQyxLQUFoQjs7QUFBQSxTQUN4QixvQkFBQyxtQkFBRDtBQUNDLElBQUEsVUFBVSxFQUFFbEIsVUFEYjtBQUVDLElBQUEsU0FBUyxFQUFFVyxTQUFTLENBQUNDLFVBRnRCO0FBR0MsSUFBQSxLQUFLLEVBQUVYO0FBSFIsS0FJS2lCLEtBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNRSxVQUFDQyxNQUFELEVBQVNDLE1BQVQ7QUFBQSxXQUNBLG9CQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLE1BQUEsS0FBSyxFQUFFO0FBQUVELFFBQUFBLE1BQU0sRUFBTkEsTUFBRjtBQUFVQyxRQUFBQSxNQUFNLEVBQU5BO0FBQVYsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQywwQ0FLRUgsUUFMRixDQURELENBREE7QUFBQSxHQU5GLENBRHdCO0FBQUEsQ0FBekI7O0FBcUJBRCxnQkFBZ0IsQ0FBQ0ssU0FBakIsR0FBNkI7QUFDNUJKLEVBQUFBLFFBQVEsRUFBRW5CLENBQUMsQ0FBQ3dCLFNBQUYsQ0FBWSxDQUFDeEIsQ0FBQyxDQUFDeUIsSUFBSCxFQUFTekIsQ0FBQyxDQUFDMEIsSUFBWCxDQUFaLEVBQThCQztBQURaLENBQTdCO0FBSUEsZUFBZVQsZ0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFQgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQnJlYWtwb2ludENvbnRhaW5lciBmcm9tICcuL0JyZWFrcG9pbnRDb250YWluZXInO1xuaW1wb3J0IHsgSURfQlJPV1NFUiB9IGZyb20gJy4vQ29udGV4dC5qcyc7XG5cbmltcG9ydCAnLi4vY3NzL2RlYnVnLmNzcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgREVCVUdfQlJPV1NFUiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG5leHBvcnQgY29uc3QgQXBwQnJlYWtwb2ludCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuLy8gTk9URTogSWYgeW91J3JlIGdvaW5nIHRvIGNoYW5nZSBhbnkgQ0xBU1NFUyBvciBTRUxFQ1RPUlMsIHlvdSdsbFxuLy8gbmVlZCB0byBhbHNvIGNoYW5nZSB0aGUgIGNvcnJlc3BvbmRpbmcgdmFyaWFibGVzIGluIHRoZSBTQ1NTIGZpbGVcbmNvbnN0IENMQVNTRVMgPSB7XG5cdENPUkU6ICdicGMnLFxuXHRCUF9QUkVGSVg6ICctJyxcblx0REVCVUdfTU9ESUZJRVI6ICctZGVidWcnLFxufTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuXHRCUF9CUk9XU0VSOiBgJHtDTEFTU0VTLkNPUkV9X19icm93c2VyYCxcblx0QlBfQ09OVEVOVDogYCR7Q0xBU1NFUy5DT1JFfV9fY29udGVudGAsXG5cdERFQlVHX0lORElDQVRPUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJbmRpY2F0b3JgLFxuXHRERUJVR19JREVOVElGSUVSOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0lkZW50aWZpZXJgLFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFbXVsYXRlcyBtZWRpYSBxdWVyeSBmdW5jdGlvbmFsaXR5LCBhbmQgZW5hYmxlcyAnc3RhbmRhbG9uZScgPEJyZWFrcG9pbnQvPlxuLy8gQWxzbyBwcm92aWRlcyBiYWNrd2FyZC1jb21wYXRpYmlsaXR5IHdpdGggRERCcmVha3BvaW50cyBvcmlnaW5hbCAnYnAoKScgbWl4aW5cbmNvbnN0IEJyb3dzZXJDb250YWluZXIgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuXHQ8QnJlYWtwb2ludENvbnRhaW5lclxuXHRcdGlkZW50aWZpZXI9e0lEX0JST1dTRVJ9XG5cdFx0Y2xhc3NOYW1lPXtTRUxFQ1RPUlMuQlBfQlJPV1NFUn1cblx0XHRkZWJ1Zz17REVCVUdfQlJPV1NFUn1cblx0XHR7Li4ucHJvcHN9XG5cdD5cblx0XHR7KGJwTmFtZSwgYnBTaXplKSA9PiAoXG5cdFx0XHQ8QXBwQnJlYWtwb2ludC5Qcm92aWRlciB2YWx1ZT17eyBicE5hbWUsIGJwU2l6ZSB9fT5cblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7LyogTm90ZTogVGhpcyBpcyB3cmFwcGVkIGluIGEgZnJhZ21lbnQgdG8gYmVcblx0XHRcdFx0XHRjZXJ0YWluIHRoYXQgdGhlIGFib3ZlIFByb3ZpZGVyIG9ubHkgaGFzIG9uZVxuXHRcdFx0XHRcdGNoaWxkLCB3aGljaCBpcyBhIHN0cmljdCByZXF1aXJlbWVudCB0aGF0IHdvdWxkXG5cdFx0XHRcdFx0b3RoZXJ3aXNlIGRlcGVuZCBvbiBob3cgY2hpbGRyZW4gYXJlIHBhc3NlZCAqL31cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvPlxuXHRcdFx0PC9BcHBCcmVha3BvaW50LlByb3ZpZGVyPlxuXHRcdCl9XG5cdDwvQnJlYWtwb2ludENvbnRhaW5lcj5cbik7XG5cbkJyb3dzZXJDb250YWluZXIucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogVC5vbmVPZlR5cGUoW1Qubm9kZSwgVC5mdW5jXSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJyb3dzZXJDb250YWluZXI7XG4iXX0=