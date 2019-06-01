import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";
var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/HOCs/_withBreakpointContainer.js";
import React from 'react';
import BreakpointContainer from '../BreakpointContainer.js';
export default function withBreakpointContainer(Component, bpcProps) {
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
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hPQ3MvX3dpdGhCcmVha3BvaW50Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnJlYWtwb2ludENvbnRhaW5lciIsIndpdGhCcmVha3BvaW50Q29udGFpbmVyIiwiQ29tcG9uZW50IiwiYnBjUHJvcHMiLCJXaXRoQnBjIiwicHJvcHMiLCJ3cmFwcGVkQ29tcG9uZW50TmFtZSIsImRpc3BsYXlOYW1lIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLDJCQUFoQztBQUVBLGVBQWUsU0FBU0MsdUJBQVQsQ0FBaUNDLFNBQWpDLEVBQTRDQyxRQUE1QyxFQUFzRDtBQUNwRSxXQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUN2QixXQUNDLG9CQUFDLG1CQUFELG9CQUF5QkYsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDQyxvQkFBQyxTQUFELG9CQUFlRSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREQsQ0FERDtBQUtBOztBQUVELE1BQU1DLG9CQUFvQixHQUN6QkosU0FBUyxDQUFDSyxXQUFWLElBQXlCTCxTQUFTLENBQUNNLElBQW5DLElBQTJDLFdBRDVDO0FBR0FKLEVBQUFBLE9BQU8sQ0FBQ0csV0FBUixxQ0FBaURELG9CQUFqRDtBQUNBLFNBQU9GLE9BQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnJlYWtwb2ludENvbnRhaW5lciBmcm9tICcuLi9CcmVha3BvaW50Q29udGFpbmVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEJyZWFrcG9pbnRDb250YWluZXIoQ29tcG9uZW50LCBicGNQcm9wcykge1xuXHRmdW5jdGlvbiBXaXRoQnBjKHByb3BzKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxCcmVha3BvaW50Q29udGFpbmVyIHsuLi5icGNQcm9wc30+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuXHRcdFx0PC9CcmVha3BvaW50Q29udGFpbmVyPlxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCB3cmFwcGVkQ29tcG9uZW50TmFtZSA9XG5cdFx0Q29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG5cdFdpdGhCcGMuZGlzcGxheU5hbWUgPSBgd2l0aEJyZWFrcG9pbnRDb250YWluZXIoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcblx0cmV0dXJuIFdpdGhCcGM7XG59XG4iXX0=