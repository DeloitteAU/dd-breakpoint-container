import "core-js/modules/es6.object.define-property";

var _BP_CONTEXTS,
    _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/Context.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import T from 'prop-types';
export var ID_DEFAULT = 'default';
export var ID_BROWSER = 'browser'; // NOTE: Other identifier contexts are created as-needed in WithContext

export var BP_CONTEXTS = (_BP_CONTEXTS = {}, _defineProperty(_BP_CONTEXTS, ID_DEFAULT, React.createContext()), _defineProperty(_BP_CONTEXTS, ID_BROWSER, React.createContext()), _BP_CONTEXTS);
/**
 * TODO.
 *
 * @param {*} params
 * @returns {Function}
 */

function WithContext(_ref) {
  var identifier = _ref.identifier,
      currentBp = _ref.currentBp,
      children = _ref.children;
  // If a BPC has specified an identifier other than the default
  var hasIdentifier = identifier !== ID_DEFAULT; // Create specific context if it doesn't already exist

  if (hasIdentifier && !BP_CONTEXTS[identifier]) {
    BP_CONTEXTS[identifier] = React.createContext();
  } // CoreContext aka 'default' context must always be present, even if the
  // BPC has a specified identifier - this is to enable the default behaviour
  // of <Breakpoint/> components that don't specify an target BPC identifier


  var CoreContext = BP_CONTEXTS[ID_DEFAULT];
  var IdentifierContext = BP_CONTEXTS[identifier];
  return React.createElement(React.Fragment, null, hasIdentifier ? React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, React.createElement(CoreContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, children)) : React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, children));
}

WithContext.propTypes = {
  identifier: T.string.isRequired,
  currentBp: T.string,
  children: T.node.isRequired
};
WithContext.defaultProps = {
  currentBp: null
};
export { WithContext };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRleHQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiSURfREVGQVVMVCIsIklEX0JST1dTRVIiLCJCUF9DT05URVhUUyIsImNyZWF0ZUNvbnRleHQiLCJXaXRoQ29udGV4dCIsImlkZW50aWZpZXIiLCJjdXJyZW50QnAiLCJjaGlsZHJlbiIsImhhc0lkZW50aWZpZXIiLCJDb3JlQ29udGV4dCIsIklkZW50aWZpZXJDb250ZXh0IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsQ0FBUCxNQUFjLFlBQWQ7QUFFQSxPQUFPLElBQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNQLE9BQU8sSUFBTUMsVUFBVSxHQUFHLFNBQW5CLEMsQ0FFUDs7QUFDQSxPQUFPLElBQU1DLFdBQVcscURBQ3RCRixVQURzQixFQUNURixLQUFLLENBQUNLLGFBQU4sRUFEUyxpQ0FFdEJGLFVBRnNCLEVBRVRILEtBQUssQ0FBQ0ssYUFBTixFQUZTLGdCQUFqQjtBQUtQOzs7Ozs7O0FBTUEsU0FBU0MsV0FBVCxPQUEwRDtBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pEO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxVQUFVLEtBQUtMLFVBQXJDLENBRnlELENBSXpEOztBQUNBLE1BQUlRLGFBQWEsSUFBSSxDQUFDTixXQUFXLENBQUNHLFVBQUQsQ0FBakMsRUFBK0M7QUFDOUNILElBQUFBLFdBQVcsQ0FBQ0csVUFBRCxDQUFYLEdBQTBCUCxLQUFLLENBQUNLLGFBQU4sRUFBMUI7QUFDQSxHQVB3RCxDQVN6RDtBQUNBO0FBQ0E7OztBQUNBLE1BQU1NLFdBQVcsR0FBR1AsV0FBVyxDQUFDRixVQUFELENBQS9CO0FBQ0EsTUFBTVUsaUJBQWlCLEdBQUdSLFdBQVcsQ0FBQ0csVUFBRCxDQUFyQztBQUVBLFNBQ0MsMENBQ0VHLGFBQWEsR0FDYixvQkFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixJQUFBLEtBQUssRUFBRUYsU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxvQkFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixJQUFBLEtBQUssRUFBRUEsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUMsUUFERixDQURELENBRGEsR0FPYixvQkFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixJQUFBLEtBQUssRUFBRUQsU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUMsUUFERixDQVJGLENBREQ7QUFlQTs7QUFFREgsV0FBVyxDQUFDTyxTQUFaLEdBQXdCO0FBQ3ZCTixFQUFBQSxVQUFVLEVBQUVOLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxVQURFO0FBRXZCUCxFQUFBQSxTQUFTLEVBQUVQLENBQUMsQ0FBQ2EsTUFGVTtBQUd2QkwsRUFBQUEsUUFBUSxFQUFFUixDQUFDLENBQUNlLElBQUYsQ0FBT0Q7QUFITSxDQUF4QjtBQU1BVCxXQUFXLENBQUNXLFlBQVosR0FBMkI7QUFDMUJULEVBQUFBLFNBQVMsRUFBRTtBQURlLENBQTNCO0FBSUEsU0FBU0YsV0FBVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVCBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IElEX0RFRkFVTFQgPSAnZGVmYXVsdCc7XG5leHBvcnQgY29uc3QgSURfQlJPV1NFUiA9ICdicm93c2VyJztcblxuLy8gTk9URTogT3RoZXIgaWRlbnRpZmllciBjb250ZXh0cyBhcmUgY3JlYXRlZCBhcy1uZWVkZWQgaW4gV2l0aENvbnRleHRcbmV4cG9ydCBjb25zdCBCUF9DT05URVhUUyA9IHtcblx0W0lEX0RFRkFVTFRdOiBSZWFjdC5jcmVhdGVDb250ZXh0KCksXG5cdFtJRF9CUk9XU0VSXTogUmVhY3QuY3JlYXRlQ29udGV4dCgpLFxufTtcblxuLyoqXG4gKiBUT0RPLlxuICpcbiAqIEBwYXJhbSB7Kn0gcGFyYW1zXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIFdpdGhDb250ZXh0KHsgaWRlbnRpZmllciwgY3VycmVudEJwLCBjaGlsZHJlbiB9KSB7XG5cdC8vIElmIGEgQlBDIGhhcyBzcGVjaWZpZWQgYW4gaWRlbnRpZmllciBvdGhlciB0aGFuIHRoZSBkZWZhdWx0XG5cdGNvbnN0IGhhc0lkZW50aWZpZXIgPSBpZGVudGlmaWVyICE9PSBJRF9ERUZBVUxUO1xuXG5cdC8vIENyZWF0ZSBzcGVjaWZpYyBjb250ZXh0IGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuXHRpZiAoaGFzSWRlbnRpZmllciAmJiAhQlBfQ09OVEVYVFNbaWRlbnRpZmllcl0pIHtcblx0XHRCUF9DT05URVhUU1tpZGVudGlmaWVyXSA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblx0fVxuXG5cdC8vIENvcmVDb250ZXh0IGFrYSAnZGVmYXVsdCcgY29udGV4dCBtdXN0IGFsd2F5cyBiZSBwcmVzZW50LCBldmVuIGlmIHRoZVxuXHQvLyBCUEMgaGFzIGEgc3BlY2lmaWVkIGlkZW50aWZpZXIgLSB0aGlzIGlzIHRvIGVuYWJsZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXJcblx0Ly8gb2YgPEJyZWFrcG9pbnQvPiBjb21wb25lbnRzIHRoYXQgZG9uJ3Qgc3BlY2lmeSBhbiB0YXJnZXQgQlBDIGlkZW50aWZpZXJcblx0Y29uc3QgQ29yZUNvbnRleHQgPSBCUF9DT05URVhUU1tJRF9ERUZBVUxUXTtcblx0Y29uc3QgSWRlbnRpZmllckNvbnRleHQgPSBCUF9DT05URVhUU1tpZGVudGlmaWVyXTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7aGFzSWRlbnRpZmllciA/IChcblx0XHRcdFx0PElkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50QnB9PlxuXHRcdFx0XHRcdDxDb3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3VycmVudEJwfT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L0NvcmVDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0XHQ8L0lkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PElkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50QnB9PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9JZGVudGlmaWVyQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdCk7XG59XG5cbldpdGhDb250ZXh0LnByb3BUeXBlcyA9IHtcblx0aWRlbnRpZmllcjogVC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y3VycmVudEJwOiBULnN0cmluZyxcblx0Y2hpbGRyZW46IFQubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuV2l0aENvbnRleHQuZGVmYXVsdFByb3BzID0ge1xuXHRjdXJyZW50QnA6IG51bGwsXG59O1xuXG5leHBvcnQgeyBXaXRoQ29udGV4dCB9O1xuIl19