import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";
var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/HOCs.js";
import React from 'react';
import { BreakpointContainer, BrowserContainer } from './BreakpointContainer.js';
export function withBreakpointContainer(Component, bpcProps) {
  function WithBpc(props) {
    return React.createElement(BreakpointContainer, Object.assign({}, bpcProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), React.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    })));
  }

  var wrappedComponentName = Component.displayName || Component.name || 'Component';
  WithBpc.displayName = "withBreakpointContainer(".concat(wrappedComponentName, ")");
  return WithBpc;
} // ------------------------

export function withBrowserContainer(Component, bpcProps) {
  function WithBrowserBpc(props) {
    return React.createElement(BrowserContainer, Object.assign({}, bpcProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), React.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })));
  }

  var wrappedComponentName = Component.displayName || Component.name || 'Component';
  WithBrowserBpc.displayName = "withBrowserContainer(".concat(wrappedComponentName, ")");
  return WithBrowserBpc;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hPQ3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJCcmVha3BvaW50Q29udGFpbmVyIiwiQnJvd3NlckNvbnRhaW5lciIsIndpdGhCcmVha3BvaW50Q29udGFpbmVyIiwiQ29tcG9uZW50IiwiYnBjUHJvcHMiLCJXaXRoQnBjIiwicHJvcHMiLCJ3cmFwcGVkQ29tcG9uZW50TmFtZSIsImRpc3BsYXlOYW1lIiwibmFtZSIsIndpdGhCcm93c2VyQ29udGFpbmVyIiwiV2l0aEJyb3dzZXJCcGMiXSwibWFwcGluZ3MiOiI7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxtQkFBVCxFQUE4QkMsZ0JBQTlCLFFBQXNELDBCQUF0RDtBQUVBLE9BQU8sU0FBU0MsdUJBQVQsQ0FBaUNDLFNBQWpDLEVBQTRDQyxRQUE1QyxFQUFzRDtBQUM1RCxXQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUN2QixXQUNDLG9CQUFDLG1CQUFELG9CQUF5QkYsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDQyxvQkFBQyxTQUFELG9CQUFlRSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREQsQ0FERDtBQUtBOztBQUVELE1BQU1DLG9CQUFvQixHQUFHSixTQUFTLENBQUNLLFdBQVYsSUFDekJMLFNBQVMsQ0FBQ00sSUFEZSxJQUNQLFdBRHRCO0FBR0FKLEVBQUFBLE9BQU8sQ0FBQ0csV0FBUixxQ0FBaURELG9CQUFqRDtBQUNBLFNBQU9GLE9BQVA7QUFDQSxDLENBRUQ7O0FBRUEsT0FBTyxTQUFTSyxvQkFBVCxDQUE4QlAsU0FBOUIsRUFBeUNDLFFBQXpDLEVBQW1EO0FBQ3pELFdBQVNPLGNBQVQsQ0FBd0JMLEtBQXhCLEVBQStCO0FBQzlCLFdBQ0Msb0JBQUMsZ0JBQUQsb0JBQXNCRixRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNDLG9CQUFDLFNBQUQsb0JBQWVFLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERCxDQUREO0FBS0E7O0FBRUQsTUFBTUMsb0JBQW9CLEdBQUdKLFNBQVMsQ0FBQ0ssV0FBVixJQUN6QkwsU0FBUyxDQUFDTSxJQURlLElBQ1AsV0FEdEI7QUFHQUUsRUFBQUEsY0FBYyxDQUFDSCxXQUFmLGtDQUFxREQsb0JBQXJEO0FBQ0EsU0FBT0ksY0FBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyZWFrcG9pbnRDb250YWluZXIsIEJyb3dzZXJDb250YWluZXIgfSBmcm9tICcuL0JyZWFrcG9pbnRDb250YWluZXIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEJyZWFrcG9pbnRDb250YWluZXIoQ29tcG9uZW50LCBicGNQcm9wcykge1xuXHRmdW5jdGlvbiBXaXRoQnBjKHByb3BzKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCcmVha3BvaW50Q29udGFpbmVyIHsuLi5icGNQcm9wc30+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnByb3BzfS8+XG5cdFx0XHQ8L0JyZWFrcG9pbnRDb250YWluZXI+XG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lXG5cdFx0fHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cblx0V2l0aEJwYy5kaXNwbGF5TmFtZSA9IGB3aXRoQnJlYWtwb2ludENvbnRhaW5lcigke3dyYXBwZWRDb21wb25lbnROYW1lfSlgO1xuXHRyZXR1cm4gV2l0aEJwYztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoQnJvd3NlckNvbnRhaW5lcihDb21wb25lbnQsIGJwY1Byb3BzKSB7XG5cdGZ1bmN0aW9uIFdpdGhCcm93c2VyQnBjKHByb3BzKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCcm93c2VyQ29udGFpbmVyIHsuLi5icGNQcm9wc30+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnByb3BzfS8+XG5cdFx0XHQ8L0Jyb3dzZXJDb250YWluZXI+XG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lXG5cdFx0fHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cblx0V2l0aEJyb3dzZXJCcGMuZGlzcGxheU5hbWUgPSBgd2l0aEJyb3dzZXJDb250YWluZXIoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcblx0cmV0dXJuIFdpdGhCcm93c2VyQnBjO1xufVxuIl19