import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";
var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/HOCs.js";
import React from 'react';
import BreakpointContainer, { BrowserBreakpoints } from './BreakpointContainer.js';
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

export function withBrowserBreakpoints(Component, bpcProps) {
  function WithBrowserBpc(props) {
    return React.createElement(BrowserBreakpoints, Object.assign({}, bpcProps, {
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
  WithBrowserBpc.displayName = "withBrowserBreakpoints(".concat(wrappedComponentName, ")");
  return WithBrowserBpc;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hPQ3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJCcmVha3BvaW50Q29udGFpbmVyIiwiQnJvd3NlckJyZWFrcG9pbnRzIiwid2l0aEJyZWFrcG9pbnRDb250YWluZXIiLCJDb21wb25lbnQiLCJicGNQcm9wcyIsIldpdGhCcGMiLCJwcm9wcyIsIndyYXBwZWRDb21wb25lbnROYW1lIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwid2l0aEJyb3dzZXJCcmVha3BvaW50cyIsIldpdGhCcm93c2VyQnBjIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsbUJBQVAsSUFBOEJDLGtCQUE5QixRQUF3RCwwQkFBeEQ7QUFFQSxPQUFPLFNBQVNDLHVCQUFULENBQWlDQyxTQUFqQyxFQUE0Q0MsUUFBNUMsRUFBc0Q7QUFDNUQsV0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdkIsV0FDQyxvQkFBQyxtQkFBRCxvQkFBeUJGLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0Msb0JBQUMsU0FBRCxvQkFBZUUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURELENBREQ7QUFLQTs7QUFFRCxNQUFNQyxvQkFBb0IsR0FBR0osU0FBUyxDQUFDSyxXQUFWLElBQ3pCTCxTQUFTLENBQUNNLElBRGUsSUFDUCxXQUR0QjtBQUdBSixFQUFBQSxPQUFPLENBQUNHLFdBQVIscUNBQWlERCxvQkFBakQ7QUFDQSxTQUFPRixPQUFQO0FBQ0EsQyxDQUVEOztBQUVBLE9BQU8sU0FBU0ssc0JBQVQsQ0FBZ0NQLFNBQWhDLEVBQTJDQyxRQUEzQyxFQUFxRDtBQUMzRCxXQUFTTyxjQUFULENBQXdCTCxLQUF4QixFQUErQjtBQUM5QixXQUNDLG9CQUFDLGtCQUFELG9CQUF3QkYsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDQyxvQkFBQyxTQUFELG9CQUFlRSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREQsQ0FERDtBQUtBOztBQUVELE1BQU1DLG9CQUFvQixHQUFHSixTQUFTLENBQUNLLFdBQVYsSUFDekJMLFNBQVMsQ0FBQ00sSUFEZSxJQUNQLFdBRHRCO0FBR0FFLEVBQUFBLGNBQWMsQ0FBQ0gsV0FBZixvQ0FBdURELG9CQUF2RDtBQUNBLFNBQU9JLGNBQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnJlYWtwb2ludENvbnRhaW5lciwgeyBCcm93c2VyQnJlYWtwb2ludHMgfSBmcm9tICcuL0JyZWFrcG9pbnRDb250YWluZXIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEJyZWFrcG9pbnRDb250YWluZXIoQ29tcG9uZW50LCBicGNQcm9wcykge1xuXHRmdW5jdGlvbiBXaXRoQnBjKHByb3BzKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCcmVha3BvaW50Q29udGFpbmVyIHsuLi5icGNQcm9wc30+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnByb3BzfS8+XG5cdFx0XHQ8L0JyZWFrcG9pbnRDb250YWluZXI+XG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lXG5cdFx0fHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cblx0V2l0aEJwYy5kaXNwbGF5TmFtZSA9IGB3aXRoQnJlYWtwb2ludENvbnRhaW5lcigke3dyYXBwZWRDb21wb25lbnROYW1lfSlgO1xuXHRyZXR1cm4gV2l0aEJwYztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoQnJvd3NlckJyZWFrcG9pbnRzKENvbXBvbmVudCwgYnBjUHJvcHMpIHtcblx0ZnVuY3Rpb24gV2l0aEJyb3dzZXJCcGMocHJvcHMpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJyb3dzZXJCcmVha3BvaW50cyB7Li4uYnBjUHJvcHN9PlxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wcm9wc30vPlxuXHRcdFx0PC9Ccm93c2VyQnJlYWtwb2ludHM+XG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lXG5cdFx0fHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cblx0V2l0aEJyb3dzZXJCcGMuZGlzcGxheU5hbWUgPSBgd2l0aEJyb3dzZXJCcmVha3BvaW50cygke3dyYXBwZWRDb21wb25lbnROYW1lfSlgO1xuXHRyZXR1cm4gV2l0aEJyb3dzZXJCcGM7XG59XG4iXX0=