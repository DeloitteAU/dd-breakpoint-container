import "core-js/modules/es6.object.define-property";

var _BP_CONTEXTS,
    _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/Context.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import T from 'prop-types';
export var ID_DEFAULT = 'default';
export var ID_BROWSER = 'browser'; // NOTE: Other identifier contexts are created as-needed in WithContext

export var BP_CONTEXTS = (_BP_CONTEXTS = {}, _defineProperty(_BP_CONTEXTS, ID_DEFAULT, React.createContext()), _defineProperty(_BP_CONTEXTS, ID_BROWSER, React.createContext()), _BP_CONTEXTS);

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
  return React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, hasIdentifier ? React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, React.createElement(CoreContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, children)) : React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, children));
}

;
WithContext.propTypes = {
  identifier: T.string.isRequired,
  currentBp: T.string,
  children: T.node.isRequired
};
WithContext.defaultProps = {
  currentBp: null
};
export { WithContext };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRleHQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiSURfREVGQVVMVCIsIklEX0JST1dTRVIiLCJCUF9DT05URVhUUyIsImNyZWF0ZUNvbnRleHQiLCJXaXRoQ29udGV4dCIsImlkZW50aWZpZXIiLCJjdXJyZW50QnAiLCJjaGlsZHJlbiIsImhhc0lkZW50aWZpZXIiLCJDb3JlQ29udGV4dCIsIklkZW50aWZpZXJDb250ZXh0IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsQ0FBUCxNQUFjLFlBQWQ7QUFFQSxPQUFPLElBQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNQLE9BQU8sSUFBTUMsVUFBVSxHQUFHLFNBQW5CLEMsQ0FFUDs7QUFDQSxPQUFPLElBQU1DLFdBQVcscURBQ3RCRixVQURzQixFQUNURixLQUFLLENBQUNLLGFBQU4sRUFEUyxpQ0FFdEJGLFVBRnNCLEVBRVRILEtBQUssQ0FBQ0ssYUFBTixFQUZTLGdCQUFqQjs7QUFLUCxTQUFTQyxXQUFULE9BQTBEO0FBQUEsTUFBbkNDLFVBQW1DLFFBQW5DQSxVQUFtQztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDekQ7QUFDQSxNQUFNQyxhQUFhLEdBQUdILFVBQVUsS0FBS0wsVUFBckMsQ0FGeUQsQ0FJekQ7O0FBQ0EsTUFBSVEsYUFBYSxJQUFJLENBQUNOLFdBQVcsQ0FBQ0csVUFBRCxDQUFqQyxFQUErQztBQUM5Q0gsSUFBQUEsV0FBVyxDQUFDRyxVQUFELENBQVgsR0FBMEJQLEtBQUssQ0FBQ0ssYUFBTixFQUExQjtBQUNBLEdBUHdELENBU3pEO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTU0sV0FBVyxHQUFHUCxXQUFXLENBQUNGLFVBQUQsQ0FBL0I7QUFDQSxNQUFNVSxpQkFBaUIsR0FBR1IsV0FBVyxDQUFDRyxVQUFELENBQXJDO0FBRUEsU0FDQyxvQkFBQyxLQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRyxhQUFhLEdBQ2Qsb0JBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsSUFBQSxLQUFLLEVBQUVGLFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Msb0JBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsSUFBQSxLQUFLLEVBQUVBLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFFBREgsQ0FERCxDQURjLEdBT2Qsb0JBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsSUFBQSxLQUFLLEVBQUVELFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFFBREgsQ0FSRixDQUREO0FBZUE7O0FBQUE7QUFFREgsV0FBVyxDQUFDTyxTQUFaLEdBQXdCO0FBQ3ZCTixFQUFBQSxVQUFVLEVBQUVOLENBQUMsQ0FBQ2EsTUFBRixDQUFTQyxVQURFO0FBRXZCUCxFQUFBQSxTQUFTLEVBQUVQLENBQUMsQ0FBQ2EsTUFGVTtBQUd2QkwsRUFBQUEsUUFBUSxFQUFFUixDQUFDLENBQUNlLElBQUYsQ0FBT0Q7QUFITSxDQUF4QjtBQU1BVCxXQUFXLENBQUNXLFlBQVosR0FBMkI7QUFDMUJULEVBQUFBLFNBQVMsRUFBRTtBQURlLENBQTNCO0FBSUEsU0FBU0YsV0FBVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVCBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IElEX0RFRkFVTFQgPSAnZGVmYXVsdCc7XG5leHBvcnQgY29uc3QgSURfQlJPV1NFUiA9ICdicm93c2VyJztcblxuLy8gTk9URTogT3RoZXIgaWRlbnRpZmllciBjb250ZXh0cyBhcmUgY3JlYXRlZCBhcy1uZWVkZWQgaW4gV2l0aENvbnRleHRcbmV4cG9ydCBjb25zdCBCUF9DT05URVhUUyA9IHtcblx0W0lEX0RFRkFVTFRdOiBSZWFjdC5jcmVhdGVDb250ZXh0KCksXG5cdFtJRF9CUk9XU0VSXTogUmVhY3QuY3JlYXRlQ29udGV4dCgpLFxufTtcblxuZnVuY3Rpb24gV2l0aENvbnRleHQoeyBpZGVudGlmaWVyLCBjdXJyZW50QnAsIGNoaWxkcmVuIH0pIHtcblx0Ly8gSWYgYSBCUEMgaGFzIHNwZWNpZmllZCBhbiBpZGVudGlmaWVyIG90aGVyIHRoYW4gdGhlIGRlZmF1bHRcblx0Y29uc3QgaGFzSWRlbnRpZmllciA9IGlkZW50aWZpZXIgIT09IElEX0RFRkFVTFQ7XG5cblx0Ly8gQ3JlYXRlIHNwZWNpZmljIGNvbnRleHQgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG5cdGlmIChoYXNJZGVudGlmaWVyICYmICFCUF9DT05URVhUU1tpZGVudGlmaWVyXSkge1xuXHRcdEJQX0NPTlRFWFRTW2lkZW50aWZpZXJdID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXHR9XG5cblx0Ly8gQ29yZUNvbnRleHQgYWthICdkZWZhdWx0JyBjb250ZXh0IG11c3QgYWx3YXlzIGJlIHByZXNlbnQsIGV2ZW4gaWYgdGhlXG5cdC8vIEJQQyBoYXMgYSBzcGVjaWZpZWQgaWRlbnRpZmllciAtIHRoaXMgaXMgdG8gZW5hYmxlIHRoZSBkZWZhdWx0IGJlaGF2aW91clxuXHQvLyBvZiA8QnJlYWtwb2ludC8+IGNvbXBvbmVudHMgdGhhdCBkb24ndCBzcGVjaWZ5IGFuIHRhcmdldCBCUEMgaWRlbnRpZmllclxuXHRjb25zdCBDb3JlQ29udGV4dCA9IEJQX0NPTlRFWFRTW0lEX0RFRkFVTFRdO1xuXHRjb25zdCBJZGVudGlmaWVyQ29udGV4dCA9IEJQX0NPTlRFWFRTW2lkZW50aWZpZXJdO1xuXG5cdHJldHVybiAoXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0eyBoYXNJZGVudGlmaWVyID8gKFxuXHRcdFx0XHQ8SWRlbnRpZmllckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2N1cnJlbnRCcH0+XG5cdFx0XHRcdFx0PENvcmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50QnB9PlxuXHRcdFx0XHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0XHRcdFx0PC9Db3JlQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdFx0PC9JZGVudGlmaWVyQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxJZGVudGlmaWVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3VycmVudEJwfT5cblx0XHRcdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdFx0PC9JZGVudGlmaWVyQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdCkgfVxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5XaXRoQ29udGV4dC5wcm9wVHlwZXMgPSB7XG5cdGlkZW50aWZpZXI6IFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGN1cnJlbnRCcDogVC5zdHJpbmcsXG5cdGNoaWxkcmVuOiBULm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbldpdGhDb250ZXh0LmRlZmF1bHRQcm9wcyA9IHtcblx0Y3VycmVudEJwOiBudWxsLFxufTtcblxuZXhwb3J0IHsgV2l0aENvbnRleHQgfTtcbiJdfQ==