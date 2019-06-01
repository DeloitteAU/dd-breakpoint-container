import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";
var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/HOCs/_withBrowserContainer.js";
import React from 'react';
import BrowserContainer from '../BrowserContainer.js';
export default function withBrowserContainer(Component, bpcProps) {
  function WithBrowserBpc(props) {
    return React.createElement(BrowserContainer, Object.assign({}, bpcProps, {
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
  WithBrowserBpc.displayName = "withBrowserContainer(".concat(wrappedComponentName, ")");
  return WithBrowserBpc;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hPQ3MvX3dpdGhCcm93c2VyQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnJvd3NlckNvbnRhaW5lciIsIndpdGhCcm93c2VyQ29udGFpbmVyIiwiQ29tcG9uZW50IiwiYnBjUHJvcHMiLCJXaXRoQnJvd3NlckJwYyIsInByb3BzIiwid3JhcHBlZENvbXBvbmVudE5hbWUiLCJkaXNwbGF5TmFtZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2Qix3QkFBN0I7QUFFQSxlQUFlLFNBQVNDLG9CQUFULENBQThCQyxTQUE5QixFQUF5Q0MsUUFBekMsRUFBbUQ7QUFDakUsV0FBU0MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDOUIsV0FDQyxvQkFBQyxnQkFBRCxvQkFBc0JGLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0Msb0JBQUMsU0FBRCxvQkFBZUUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURELENBREQ7QUFLQTs7QUFFRCxNQUFNQyxvQkFBb0IsR0FDekJKLFNBQVMsQ0FBQ0ssV0FBVixJQUF5QkwsU0FBUyxDQUFDTSxJQUFuQyxJQUEyQyxXQUQ1QztBQUdBSixFQUFBQSxjQUFjLENBQUNHLFdBQWYsa0NBQXFERCxvQkFBckQ7QUFDQSxTQUFPRixjQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJyb3dzZXJDb250YWluZXIgZnJvbSAnLi4vQnJvd3NlckNvbnRhaW5lci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhCcm93c2VyQ29udGFpbmVyKENvbXBvbmVudCwgYnBjUHJvcHMpIHtcblx0ZnVuY3Rpb24gV2l0aEJyb3dzZXJCcGMocHJvcHMpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJyb3dzZXJDb250YWluZXIgey4uLmJwY1Byb3BzfT5cblx0XHRcdFx0PENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG5cdFx0XHQ8L0Jyb3dzZXJDb250YWluZXI+XG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID1cblx0XHRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cblx0V2l0aEJyb3dzZXJCcGMuZGlzcGxheU5hbWUgPSBgd2l0aEJyb3dzZXJDb250YWluZXIoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcblx0cmV0dXJuIFdpdGhCcm93c2VyQnBjO1xufVxuIl19