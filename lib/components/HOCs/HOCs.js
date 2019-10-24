"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withBrowserContainer = exports.withBreakpointContainer = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.object.assign");

var React = _interopRequireWildcard(require("react"));

var _BreakpointContainer = _interopRequireDefault(require("../BreakpointContainer"));

var _BrowserContainer = _interopRequireDefault(require("../BrowserContainer"));

var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/HOCs/HOCs.tsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Centralised BreakpointContainer HOC template
 * for Breakpoint/Browser container HOCs.
 *
 * @param BreakpointWrapper - BreakpointContainer (or BrowserContainer).
 * @param Component - Component; i.e. contents of HOC.
 * @param bpcProps - BreakpointContainer props.
 */
var withBpcTemplate = function withBpcTemplate(BreakpointWrapper, Component, bpcProps) {
  var WithBpc = function WithBpc(props) {
    return React.createElement(BreakpointWrapper, Object.assign({}, bpcProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), function (bpName, bpSize) {
      return React.createElement(Component, Object.assign({}, props, {
        bpName: bpName,
        bpSize: bpSize
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }));
    });
  };

  var wrappedComponentName = Component.displayName || Component.name || 'Component';
  WithBpc.displayName = "withBreakpointContainer(".concat(wrappedComponentName, ")");
  return WithBpc;
}; // ------------------------


var withBreakpointContainer = function withBreakpointContainer(Component, bpcProps) {
  return withBpcTemplate(_BreakpointContainer.default, Component, bpcProps);
};

exports.withBreakpointContainer = withBreakpointContainer;

var withBrowserContainer = function withBrowserContainer(Component, bpcProps) {
  return withBpcTemplate(_BrowserContainer.default, Component, bpcProps);
}; // ------------------------


exports.withBrowserContainer = withBrowserContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hPQ3MvSE9Dcy50c3giXSwibmFtZXMiOlsid2l0aEJwY1RlbXBsYXRlIiwiQnJlYWtwb2ludFdyYXBwZXIiLCJDb21wb25lbnQiLCJicGNQcm9wcyIsIldpdGhCcGMiLCJwcm9wcyIsImJwTmFtZSIsImJwU2l6ZSIsIndyYXBwZWRDb21wb25lbnROYW1lIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwid2l0aEJyZWFrcG9pbnRDb250YWluZXIiLCJCcmVha3BvaW50Q29udGFpbmVyIiwid2l0aEJyb3dzZXJDb250YWluZXIiLCJCcm93c2VyQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBSUE7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFRQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQ3ZCQyxpQkFEdUIsRUFFdkJDLFNBRnVCLEVBR3ZCQyxRQUh1QixFQVNuQjtBQUNKLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQ7QUFBQSxXQUNmLG9CQUFDLGlCQUFELG9CQUF1QkYsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDRSxVQUFDRyxNQUFELEVBQWlCQyxNQUFqQjtBQUFBLGFBQ0Esb0JBQUMsU0FBRCxvQkFDS0YsS0FETCxFQUVLO0FBQ0hDLFFBQUFBLE1BQU0sRUFBTkEsTUFERztBQUVIQyxRQUFBQSxNQUFNLEVBQU5BO0FBRkcsT0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBQUEsS0FERixDQURlO0FBQUEsR0FBaEI7O0FBY0EsTUFBTUMsb0JBQW9CLEdBQ3pCTixTQUFTLENBQUNPLFdBQVYsSUFBeUJQLFNBQVMsQ0FBQ1EsSUFBbkMsSUFBMkMsV0FENUM7QUFHQU4sRUFBQUEsT0FBTyxDQUFDSyxXQUFSLHFDQUFpREQsb0JBQWpEO0FBQ0EsU0FBT0osT0FBUDtBQUNBLENBN0JELEMsQ0ErQkE7OztBQUVBLElBQU1PLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FDL0JULFNBRCtCLEVBRS9CQyxRQUYrQjtBQUFBLFNBRzNCSCxlQUFlLENBQUNZLDRCQUFELEVBQXNCVixTQUF0QixFQUFpQ0MsUUFBakMsQ0FIWTtBQUFBLENBQWhDOzs7O0FBS0EsSUFBTVUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUM1QlgsU0FENEIsRUFFNUJDLFFBRjRCO0FBQUEsU0FHeEJILGVBQWUsQ0FBQ2MseUJBQUQsRUFBbUJaLFNBQW5CLEVBQThCQyxRQUE5QixDQUhTO0FBQUEsQ0FBN0IsQyxDQUtBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuXHRkZWZhdWx0IGFzIEJyZWFrcG9pbnRDb250YWluZXIsXG5cdElQcm9wcyBhcyBJQnBjUHJvcHMsXG59IGZyb20gJ2NvbXBvbmVudHMvQnJlYWtwb2ludENvbnRhaW5lcic7XG5pbXBvcnQgQnJvd3NlckNvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL0Jyb3dzZXJDb250YWluZXInO1xuXG4vKipcbiAqIENlbnRyYWxpc2VkIEJyZWFrcG9pbnRDb250YWluZXIgSE9DIHRlbXBsYXRlXG4gKiBmb3IgQnJlYWtwb2ludC9Ccm93c2VyIGNvbnRhaW5lciBIT0NzLlxuICpcbiAqIEBwYXJhbSBCcmVha3BvaW50V3JhcHBlciAtIEJyZWFrcG9pbnRDb250YWluZXIgKG9yIEJyb3dzZXJDb250YWluZXIpLlxuICogQHBhcmFtIENvbXBvbmVudCAtIENvbXBvbmVudDsgaS5lLiBjb250ZW50cyBvZiBIT0MuXG4gKiBAcGFyYW0gYnBjUHJvcHMgLSBCcmVha3BvaW50Q29udGFpbmVyIHByb3BzLlxuICovXG5jb25zdCB3aXRoQnBjVGVtcGxhdGUgPSA8UCBleHRlbmRzIG9iamVjdD4oXG5cdEJyZWFrcG9pbnRXcmFwcGVyOiBhbnksXG5cdENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxQPixcblx0YnBjUHJvcHM6IElCcGNQcm9wcyxcbik6IFJlYWN0LkZDPFxuXHRQICYge1xuXHRcdGJwTmFtZTogc3RyaW5nO1xuXHRcdGJwU2l6ZTogbnVtYmVyO1xuXHR9XG4+ID0+IHtcblx0Y29uc3QgV2l0aEJwYyA9IChwcm9wczogUCkgPT4gKFxuXHRcdDxCcmVha3BvaW50V3JhcHBlciB7Li4uYnBjUHJvcHN9PlxuXHRcdFx0eyhicE5hbWU6IHN0cmluZywgYnBTaXplOiBudW1iZXIpID0+IChcblx0XHRcdFx0PENvbXBvbmVudFxuXHRcdFx0XHRcdHsuLi5wcm9wc31cblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0YnBOYW1lLFxuXHRcdFx0XHRcdFx0YnBTaXplLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdDwvQnJlYWtwb2ludFdyYXBwZXI+XG5cdCk7XG5cblx0Y29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPVxuXHRcdENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuXHRXaXRoQnBjLmRpc3BsYXlOYW1lID0gYHdpdGhCcmVha3BvaW50Q29udGFpbmVyKCR7d3JhcHBlZENvbXBvbmVudE5hbWV9KWA7XG5cdHJldHVybiBXaXRoQnBjO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IHdpdGhCcmVha3BvaW50Q29udGFpbmVyID0gKFxuXHRDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGUsXG5cdGJwY1Byb3BzOiBJQnBjUHJvcHMsXG4pID0+IHdpdGhCcGNUZW1wbGF0ZShCcmVha3BvaW50Q29udGFpbmVyLCBDb21wb25lbnQsIGJwY1Byb3BzKTtcblxuY29uc3Qgd2l0aEJyb3dzZXJDb250YWluZXIgPSAoXG5cdENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZSxcblx0YnBjUHJvcHM6IElCcGNQcm9wcyxcbikgPT4gd2l0aEJwY1RlbXBsYXRlKEJyb3dzZXJDb250YWluZXIsIENvbXBvbmVudCwgYnBjUHJvcHMpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IHsgd2l0aEJyZWFrcG9pbnRDb250YWluZXIsIHdpdGhCcm93c2VyQ29udGFpbmVyIH07XG4iXX0=