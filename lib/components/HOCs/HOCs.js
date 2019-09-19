import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";
var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/HOCs/HOCs.js";

/* eslint-disable react/no-multi-comp */
import React from 'react';
import BreakpointContainer from '../BreakpointContainer';
import BrowserContainer from '../BrowserContainer';
/**
 * Centralised BreakpointContainer HOC template
 * for Breakpoint/Browser container HOCs.
 *
 * @param {*} BreakpointWrapper - BreakpointContainer (or BrowserContainer).
 * @param {*} Component - Component; i.e. contents of HOC.
 * @param {*} bpcProps - BreakpointContainer props.
 */

function withBpcTemplate(BreakpointWrapper, Component, bpcProps) {
  var WithBpc = function WithBpc(props) {
    return React.createElement(BreakpointWrapper, Object.assign({}, bpcProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), function (bpName, bpSize) {
      return React.createElement(Component, Object.assign({}, props, {
        bpName: bpName,
        bpSize: bpSize
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    });
  };

  var wrappedComponentName = Component.displayName || Component.name || 'Component';
  WithBpc.displayName = "withBreakpointContainer(".concat(wrappedComponentName, ")");
  return WithBpc;
} // ------------------------


var withBreakpointContainer = function withBreakpointContainer(Component, bpcProps) {
  return withBpcTemplate(BreakpointContainer, Component, bpcProps);
};

var withBrowserContainer = function withBrowserContainer(Component, bpcProps) {
  return withBpcTemplate(BrowserContainer, Component, bpcProps);
}; // ------------------------


export { withBreakpointContainer, withBrowserContainer };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hPQ3MvSE9Dcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJyZWFrcG9pbnRDb250YWluZXIiLCJCcm93c2VyQ29udGFpbmVyIiwid2l0aEJwY1RlbXBsYXRlIiwiQnJlYWtwb2ludFdyYXBwZXIiLCJDb21wb25lbnQiLCJicGNQcm9wcyIsIldpdGhCcGMiLCJwcm9wcyIsImJwTmFtZSIsImJwU2l6ZSIsIndyYXBwZWRDb21wb25lbnROYW1lIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwid2l0aEJyZWFrcG9pbnRDb250YWluZXIiLCJ3aXRoQnJvd3NlckNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHdCQUFoQztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHFCQUE3QjtBQUVBOzs7Ozs7Ozs7QUFRQSxTQUFTQyxlQUFULENBQXlCQyxpQkFBekIsRUFBNENDLFNBQTVDLEVBQXVEQyxRQUF2RCxFQUFpRTtBQUNoRSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxLQUFLO0FBQUEsV0FDcEIsb0JBQUMsaUJBQUQsb0JBQXVCRixRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNFLFVBQUNHLE1BQUQsRUFBU0MsTUFBVDtBQUFBLGFBQ0Esb0JBQUMsU0FBRCxvQkFDS0YsS0FETCxFQUVLO0FBQ0hDLFFBQUFBLE1BQU0sRUFBTkEsTUFERztBQUVIQyxRQUFBQSxNQUFNLEVBQU5BO0FBRkcsT0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBQUEsS0FERixDQURvQjtBQUFBLEdBQXJCOztBQWNBLE1BQU1DLG9CQUFvQixHQUN6Qk4sU0FBUyxDQUFDTyxXQUFWLElBQXlCUCxTQUFTLENBQUNRLElBQW5DLElBQTJDLFdBRDVDO0FBR0FOLEVBQUFBLE9BQU8sQ0FBQ0ssV0FBUixxQ0FBaURELG9CQUFqRDtBQUNBLFNBQU9KLE9BQVA7QUFDQSxDLENBRUQ7OztBQUVBLElBQU1PLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ1QsU0FBRCxFQUFZQyxRQUFaO0FBQUEsU0FDL0JILGVBQWUsQ0FBQ0YsbUJBQUQsRUFBc0JJLFNBQXRCLEVBQWlDQyxRQUFqQyxDQURnQjtBQUFBLENBQWhDOztBQUdBLElBQU1TLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ1YsU0FBRCxFQUFZQyxRQUFaO0FBQUEsU0FDNUJILGVBQWUsQ0FBQ0QsZ0JBQUQsRUFBbUJHLFNBQW5CLEVBQThCQyxRQUE5QixDQURhO0FBQUEsQ0FBN0IsQyxDQUdBOzs7QUFFQSxTQUFTUSx1QkFBVCxFQUFrQ0Msb0JBQWxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJyZWFrcG9pbnRDb250YWluZXIgZnJvbSAnLi4vQnJlYWtwb2ludENvbnRhaW5lcic7XG5pbXBvcnQgQnJvd3NlckNvbnRhaW5lciBmcm9tICcuLi9Ccm93c2VyQ29udGFpbmVyJztcblxuLyoqXG4gKiBDZW50cmFsaXNlZCBCcmVha3BvaW50Q29udGFpbmVyIEhPQyB0ZW1wbGF0ZVxuICogZm9yIEJyZWFrcG9pbnQvQnJvd3NlciBjb250YWluZXIgSE9Dcy5cbiAqXG4gKiBAcGFyYW0geyp9IEJyZWFrcG9pbnRXcmFwcGVyIC0gQnJlYWtwb2ludENvbnRhaW5lciAob3IgQnJvd3NlckNvbnRhaW5lcikuXG4gKiBAcGFyYW0geyp9IENvbXBvbmVudCAtIENvbXBvbmVudDsgaS5lLiBjb250ZW50cyBvZiBIT0MuXG4gKiBAcGFyYW0geyp9IGJwY1Byb3BzIC0gQnJlYWtwb2ludENvbnRhaW5lciBwcm9wcy5cbiAqL1xuZnVuY3Rpb24gd2l0aEJwY1RlbXBsYXRlKEJyZWFrcG9pbnRXcmFwcGVyLCBDb21wb25lbnQsIGJwY1Byb3BzKSB7XG5cdGNvbnN0IFdpdGhCcGMgPSBwcm9wcyA9PiAoXG5cdFx0PEJyZWFrcG9pbnRXcmFwcGVyIHsuLi5icGNQcm9wc30+XG5cdFx0XHR7KGJwTmFtZSwgYnBTaXplKSA9PiAoXG5cdFx0XHRcdDxDb21wb25lbnRcblx0XHRcdFx0XHR7Li4ucHJvcHN9XG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGJwTmFtZSxcblx0XHRcdFx0XHRcdGJwU2l6ZSxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHQ8L0JyZWFrcG9pbnRXcmFwcGVyPlxuXHQpO1xuXG5cdGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID1cblx0XHRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cblx0V2l0aEJwYy5kaXNwbGF5TmFtZSA9IGB3aXRoQnJlYWtwb2ludENvbnRhaW5lcigke3dyYXBwZWRDb21wb25lbnROYW1lfSlgO1xuXHRyZXR1cm4gV2l0aEJwYztcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IHdpdGhCcmVha3BvaW50Q29udGFpbmVyID0gKENvbXBvbmVudCwgYnBjUHJvcHMpID0+XG5cdHdpdGhCcGNUZW1wbGF0ZShCcmVha3BvaW50Q29udGFpbmVyLCBDb21wb25lbnQsIGJwY1Byb3BzKTtcblxuY29uc3Qgd2l0aEJyb3dzZXJDb250YWluZXIgPSAoQ29tcG9uZW50LCBicGNQcm9wcykgPT5cblx0d2l0aEJwY1RlbXBsYXRlKEJyb3dzZXJDb250YWluZXIsIENvbXBvbmVudCwgYnBjUHJvcHMpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IHsgd2l0aEJyZWFrcG9pbnRDb250YWluZXIsIHdpdGhCcm93c2VyQ29udGFpbmVyIH07XG4iXX0=