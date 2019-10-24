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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hPQ3MvSE9Dcy50c3giXSwibmFtZXMiOlsid2l0aEJwY1RlbXBsYXRlIiwiQnJlYWtwb2ludFdyYXBwZXIiLCJDb21wb25lbnQiLCJicGNQcm9wcyIsIldpdGhCcGMiLCJwcm9wcyIsImJwTmFtZSIsImJwU2l6ZSIsIndyYXBwZWRDb21wb25lbnROYW1lIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwid2l0aEJyZWFrcG9pbnRDb250YWluZXIiLCJCcmVha3BvaW50Q29udGFpbmVyIiwid2l0aEJyb3dzZXJDb250YWluZXIiLCJCcm93c2VyQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBSUE7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFRQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQ3ZCQyxpQkFEdUIsRUFFdkJDLFNBRnVCLEVBR3ZCQyxRQUh1QixFQVNuQjtBQUNKLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQ7QUFBQSxXQUNmLG9CQUFDLGlCQUFELG9CQUF1QkYsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDRSxVQUFDRyxNQUFELEVBQWlCQyxNQUFqQjtBQUFBLGFBQ0Esb0JBQUMsU0FBRCxvQkFDS0YsS0FETCxFQUVLO0FBQ0hDLFFBQUFBLE1BQU0sRUFBTkEsTUFERztBQUVIQyxRQUFBQSxNQUFNLEVBQU5BO0FBRkcsT0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBQUEsS0FERixDQURlO0FBQUEsR0FBaEI7O0FBY0EsTUFBTUMsb0JBQW9CLEdBQ3pCTixTQUFTLENBQUNPLFdBQVYsSUFBeUJQLFNBQVMsQ0FBQ1EsSUFBbkMsSUFBMkMsV0FENUM7QUFHQU4sRUFBQUEsT0FBTyxDQUFDSyxXQUFSLHFDQUFpREQsb0JBQWpEO0FBQ0EsU0FBT0osT0FBUDtBQUNBLENBN0JELEMsQ0ErQkE7OztBQUVBLElBQU1PLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FDL0JULFNBRCtCLEVBRS9CQyxRQUYrQjtBQUFBLFNBRzNCSCxlQUFlLENBQUNZLDRCQUFELEVBQXNCVixTQUF0QixFQUFpQ0MsUUFBakMsQ0FIWTtBQUFBLENBQWhDOzs7O0FBS0EsSUFBTVUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUM1QlgsU0FENEIsRUFFNUJDLFFBRjRCO0FBQUEsU0FHeEJILGVBQWUsQ0FBQ2MseUJBQUQsRUFBbUJaLFNBQW5CLEVBQThCQyxRQUE5QixDQUhTO0FBQUEsQ0FBN0IsQyxDQUtBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuXHRkZWZhdWx0IGFzIEJyZWFrcG9pbnRDb250YWluZXIsXG5cdElQcm9wcyBhcyBJQnBjUHJvcHMsXG59IGZyb20gJy4uL0JyZWFrcG9pbnRDb250YWluZXInO1xuaW1wb3J0IEJyb3dzZXJDb250YWluZXIgZnJvbSAnLi4vQnJvd3NlckNvbnRhaW5lcic7XG5cbi8qKlxuICogQ2VudHJhbGlzZWQgQnJlYWtwb2ludENvbnRhaW5lciBIT0MgdGVtcGxhdGVcbiAqIGZvciBCcmVha3BvaW50L0Jyb3dzZXIgY29udGFpbmVyIEhPQ3MuXG4gKlxuICogQHBhcmFtIEJyZWFrcG9pbnRXcmFwcGVyIC0gQnJlYWtwb2ludENvbnRhaW5lciAob3IgQnJvd3NlckNvbnRhaW5lcikuXG4gKiBAcGFyYW0gQ29tcG9uZW50IC0gQ29tcG9uZW50OyBpLmUuIGNvbnRlbnRzIG9mIEhPQy5cbiAqIEBwYXJhbSBicGNQcm9wcyAtIEJyZWFrcG9pbnRDb250YWluZXIgcHJvcHMuXG4gKi9cbmNvbnN0IHdpdGhCcGNUZW1wbGF0ZSA9IDxQIGV4dGVuZHMgb2JqZWN0Pihcblx0QnJlYWtwb2ludFdyYXBwZXI6IGFueSxcblx0Q29tcG9uZW50OiBSZWFjdC5Db21wb25lbnRUeXBlPFA+LFxuXHRicGNQcm9wczogSUJwY1Byb3BzLFxuKTogUmVhY3QuRkM8XG5cdFAgJiB7XG5cdFx0YnBOYW1lOiBzdHJpbmc7XG5cdFx0YnBTaXplOiBudW1iZXI7XG5cdH1cbj4gPT4ge1xuXHRjb25zdCBXaXRoQnBjID0gKHByb3BzOiBQKSA9PiAoXG5cdFx0PEJyZWFrcG9pbnRXcmFwcGVyIHsuLi5icGNQcm9wc30+XG5cdFx0XHR7KGJwTmFtZTogc3RyaW5nLCBicFNpemU6IG51bWJlcikgPT4gKFxuXHRcdFx0XHQ8Q29tcG9uZW50XG5cdFx0XHRcdFx0ey4uLnByb3BzfVxuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRicE5hbWUsXG5cdFx0XHRcdFx0XHRicFNpemUsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0PC9CcmVha3BvaW50V3JhcHBlcj5cblx0KTtcblxuXHRjb25zdCB3cmFwcGVkQ29tcG9uZW50TmFtZSA9XG5cdFx0Q29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuXG5cdFdpdGhCcGMuZGlzcGxheU5hbWUgPSBgd2l0aEJyZWFrcG9pbnRDb250YWluZXIoJHt3cmFwcGVkQ29tcG9uZW50TmFtZX0pYDtcblx0cmV0dXJuIFdpdGhCcGM7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3Qgd2l0aEJyZWFrcG9pbnRDb250YWluZXIgPSAoXG5cdENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZSxcblx0YnBjUHJvcHM6IElCcGNQcm9wcyxcbikgPT4gd2l0aEJwY1RlbXBsYXRlKEJyZWFrcG9pbnRDb250YWluZXIsIENvbXBvbmVudCwgYnBjUHJvcHMpO1xuXG5jb25zdCB3aXRoQnJvd3NlckNvbnRhaW5lciA9IChcblx0Q29tcG9uZW50OiBSZWFjdC5Db21wb25lbnRUeXBlLFxuXHRicGNQcm9wczogSUJwY1Byb3BzLFxuKSA9PiB3aXRoQnBjVGVtcGxhdGUoQnJvd3NlckNvbnRhaW5lciwgQ29tcG9uZW50LCBicGNQcm9wcyk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgeyB3aXRoQnJlYWtwb2ludENvbnRhaW5lciwgd2l0aEJyb3dzZXJDb250YWluZXIgfTtcbiJdfQ==