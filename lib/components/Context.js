import "core-js/modules/es6.object.define-property";

var _BP_CONTEXTS,
    _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/Context.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TODO:
 *
 * More explanation around the existence of
 * of this file, what it's is for (<Breakpoint/>
 * component parsing support) etc
 */
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
      lineNumber: 45
    },
    __self: this
  }, React.createElement(CoreContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, children)) : React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRleHQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiSURfREVGQVVMVCIsIklEX0JST1dTRVIiLCJCUF9DT05URVhUUyIsImNyZWF0ZUNvbnRleHQiLCJXaXRoQ29udGV4dCIsImlkZW50aWZpZXIiLCJjdXJyZW50QnAiLCJjaGlsZHJlbiIsImhhc0lkZW50aWZpZXIiLCJDb3JlQ29udGV4dCIsIklkZW50aWZpZXJDb250ZXh0IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7OztBQVFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxDQUFQLE1BQWMsWUFBZDtBQUVBLE9BQU8sSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ1AsT0FBTyxJQUFNQyxVQUFVLEdBQUcsU0FBbkIsQyxDQUVQOztBQUNBLE9BQU8sSUFBTUMsV0FBVyxxREFDdEJGLFVBRHNCLEVBQ1RGLEtBQUssQ0FBQ0ssYUFBTixFQURTLGlDQUV0QkYsVUFGc0IsRUFFVEgsS0FBSyxDQUFDSyxhQUFOLEVBRlMsZ0JBQWpCO0FBS1A7Ozs7Ozs7QUFNQSxTQUFTQyxXQUFULE9BQTBEO0FBQUEsTUFBbkNDLFVBQW1DLFFBQW5DQSxVQUFtQztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDekQ7QUFDQSxNQUFNQyxhQUFhLEdBQUdILFVBQVUsS0FBS0wsVUFBckMsQ0FGeUQsQ0FJekQ7O0FBQ0EsTUFBSVEsYUFBYSxJQUFJLENBQUNOLFdBQVcsQ0FBQ0csVUFBRCxDQUFqQyxFQUErQztBQUM5Q0gsSUFBQUEsV0FBVyxDQUFDRyxVQUFELENBQVgsR0FBMEJQLEtBQUssQ0FBQ0ssYUFBTixFQUExQjtBQUNBLEdBUHdELENBU3pEO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTU0sV0FBVyxHQUFHUCxXQUFXLENBQUNGLFVBQUQsQ0FBL0I7QUFDQSxNQUFNVSxpQkFBaUIsR0FBR1IsV0FBVyxDQUFDRyxVQUFELENBQXJDO0FBRUEsU0FDQywwQ0FDRUcsYUFBYSxHQUNiLG9CQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLElBQUEsS0FBSyxFQUFFRixTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLG9CQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLElBQUEsS0FBSyxFQUFFQSxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFQyxRQURGLENBREQsQ0FEYSxHQU9iLG9CQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLElBQUEsS0FBSyxFQUFFRCxTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFQyxRQURGLENBUkYsQ0FERDtBQWVBOztBQUVESCxXQUFXLENBQUNPLFNBQVosR0FBd0I7QUFDdkJOLEVBQUFBLFVBQVUsRUFBRU4sQ0FBQyxDQUFDYSxNQUFGLENBQVNDLFVBREU7QUFFdkJQLEVBQUFBLFNBQVMsRUFBRVAsQ0FBQyxDQUFDYSxNQUZVO0FBR3ZCTCxFQUFBQSxRQUFRLEVBQUVSLENBQUMsQ0FBQ2UsSUFBRixDQUFPRDtBQUhNLENBQXhCO0FBTUFULFdBQVcsQ0FBQ1csWUFBWixHQUEyQjtBQUMxQlQsRUFBQUEsU0FBUyxFQUFFO0FBRGUsQ0FBM0I7QUFJQSxTQUFTRixXQUFUIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUT0RPOlxuICpcbiAqIE1vcmUgZXhwbGFuYXRpb24gYXJvdW5kIHRoZSBleGlzdGVuY2Ugb2ZcbiAqIG9mIHRoaXMgZmlsZSwgd2hhdCBpdCdzIGlzIGZvciAoPEJyZWFrcG9pbnQvPlxuICogY29tcG9uZW50IHBhcnNpbmcgc3VwcG9ydCkgZXRjXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgSURfREVGQVVMVCA9ICdkZWZhdWx0JztcbmV4cG9ydCBjb25zdCBJRF9CUk9XU0VSID0gJ2Jyb3dzZXInO1xuXG4vLyBOT1RFOiBPdGhlciBpZGVudGlmaWVyIGNvbnRleHRzIGFyZSBjcmVhdGVkIGFzLW5lZWRlZCBpbiBXaXRoQ29udGV4dFxuZXhwb3J0IGNvbnN0IEJQX0NPTlRFWFRTID0ge1xuXHRbSURfREVGQVVMVF06IFJlYWN0LmNyZWF0ZUNvbnRleHQoKSxcblx0W0lEX0JST1dTRVJdOiBSZWFjdC5jcmVhdGVDb250ZXh0KCksXG59O1xuXG4vKipcbiAqIFRPRE8uXG4gKlxuICogQHBhcmFtIHsqfSBwYXJhbXNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gV2l0aENvbnRleHQoeyBpZGVudGlmaWVyLCBjdXJyZW50QnAsIGNoaWxkcmVuIH0pIHtcblx0Ly8gSWYgYSBCUEMgaGFzIHNwZWNpZmllZCBhbiBpZGVudGlmaWVyIG90aGVyIHRoYW4gdGhlIGRlZmF1bHRcblx0Y29uc3QgaGFzSWRlbnRpZmllciA9IGlkZW50aWZpZXIgIT09IElEX0RFRkFVTFQ7XG5cblx0Ly8gQ3JlYXRlIHNwZWNpZmljIGNvbnRleHQgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG5cdGlmIChoYXNJZGVudGlmaWVyICYmICFCUF9DT05URVhUU1tpZGVudGlmaWVyXSkge1xuXHRcdEJQX0NPTlRFWFRTW2lkZW50aWZpZXJdID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXHR9XG5cblx0Ly8gQ29yZUNvbnRleHQgYWthICdkZWZhdWx0JyBjb250ZXh0IG11c3QgYWx3YXlzIGJlIHByZXNlbnQsIGV2ZW4gaWYgdGhlXG5cdC8vIEJQQyBoYXMgYSBzcGVjaWZpZWQgaWRlbnRpZmllciAtIHRoaXMgaXMgdG8gZW5hYmxlIHRoZSBkZWZhdWx0IGJlaGF2aW91clxuXHQvLyBvZiA8QnJlYWtwb2ludC8+IGNvbXBvbmVudHMgdGhhdCBkb24ndCBzcGVjaWZ5IGFuIHRhcmdldCBCUEMgaWRlbnRpZmllclxuXHRjb25zdCBDb3JlQ29udGV4dCA9IEJQX0NPTlRFWFRTW0lEX0RFRkFVTFRdO1xuXHRjb25zdCBJZGVudGlmaWVyQ29udGV4dCA9IEJQX0NPTlRFWFRTW2lkZW50aWZpZXJdO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtoYXNJZGVudGlmaWVyID8gKFxuXHRcdFx0XHQ8SWRlbnRpZmllckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2N1cnJlbnRCcH0+XG5cdFx0XHRcdFx0PENvcmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50QnB9PlxuXHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdDwvQ29yZUNvbnRleHQuUHJvdmlkZXI+XG5cdFx0XHRcdDwvSWRlbnRpZmllckNvbnRleHQuUHJvdmlkZXI+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8SWRlbnRpZmllckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2N1cnJlbnRCcH0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L0lkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn1cblxuV2l0aENvbnRleHQucHJvcFR5cGVzID0ge1xuXHRpZGVudGlmaWVyOiBULnN0cmluZy5pc1JlcXVpcmVkLFxuXHRjdXJyZW50QnA6IFQuc3RyaW5nLFxuXHRjaGlsZHJlbjogVC5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5XaXRoQ29udGV4dC5kZWZhdWx0UHJvcHMgPSB7XG5cdGN1cnJlbnRCcDogbnVsbCxcbn07XG5cbmV4cG9ydCB7IFdpdGhDb250ZXh0IH07XG4iXX0=