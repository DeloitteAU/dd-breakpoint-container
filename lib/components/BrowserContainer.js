"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.assign");

var React = _interopRequireWildcard(require("react"));

var _BreakpointContainer = _interopRequireWildcard(require("./BreakpointContainer"));

var _breakpoints = require("../data/breakpoints");

var _Context = require("./Context");

var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/BrowserContainer.tsx";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DEBUG_BROWSER = process.env.NODE_ENV === 'development'; // Emulates media query functionality, and enables 'standalone' <Breakpoint/>
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin

var BrowserContainer = function BrowserContainer(_ref) {
  var children = _ref.children,
      customBreakpoints = _ref.customBreakpoints,
      props = _objectWithoutProperties(_ref, ["children", "customBreakpoints"]);

  return React.createElement(_BreakpointContainer.default, Object.assign({
    identifier: _Context.ID_BROWSER,
    className: _BreakpointContainer.SELECTORS.BP_BROWSER,
    debug: DEBUG_BROWSER,
    customBreakpoints: customBreakpoints
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), function (bpName, bpSize) {
    return React.createElement(_BreakpointContainer.BreakpointDefinitions.Provider, {
      value: customBreakpoints || _breakpoints.BREAKPOINTS,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, React.createElement(_BreakpointContainer.AppBreakpoint.Provider, {
      value: {
        bpName: bpName,
        bpSize: bpSize
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, React.createElement(React.Fragment, null, typeof children === 'function' ? children(bpName, bpSize) : children)));
  });
};

var _default = BrowserContainer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Jyb3dzZXJDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkRFQlVHX0JST1dTRVIiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJCcm93c2VyQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJjdXN0b21CcmVha3BvaW50cyIsInByb3BzIiwiSURfQlJPV1NFUiIsIlNFTEVDVE9SUyIsIkJQX0JST1dTRVIiLCJicE5hbWUiLCJicFNpemUiLCJCUkVBS1BPSU5UUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFNQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixhQUEvQyxDLENBRUE7QUFDQTs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFDeEJDLFFBRHdCLFFBQ3hCQSxRQUR3QjtBQUFBLE1BRXhCQyxpQkFGd0IsUUFFeEJBLGlCQUZ3QjtBQUFBLE1BR3JCQyxLQUhxQjs7QUFBQSxTQUt4QixvQkFBQyw0QkFBRDtBQUNDLElBQUEsVUFBVSxFQUFFQyxtQkFEYjtBQUVDLElBQUEsU0FBUyxFQUFFQywrQkFBVUMsVUFGdEI7QUFHQyxJQUFBLEtBQUssRUFBRVYsYUFIUjtBQUlDLElBQUEsaUJBQWlCLEVBQUVNO0FBSnBCLEtBS0tDLEtBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRSxVQUFDSSxNQUFELEVBQVNDLE1BQVQ7QUFBQSxXQUNBLG9CQUFDLDBDQUFELENBQXVCLFFBQXZCO0FBQWdDLE1BQUEsS0FBSyxFQUFFTixpQkFBaUIsSUFBSU8sd0JBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0Msb0JBQUMsa0NBQUQsQ0FBZSxRQUFmO0FBQXdCLE1BQUEsS0FBSyxFQUFFO0FBQUVGLFFBQUFBLE1BQU0sRUFBTkEsTUFBRjtBQUFVQyxRQUFBQSxNQUFNLEVBQU5BO0FBQVYsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQywwQ0FLRSxPQUFPUCxRQUFQLEtBQW9CLFVBQXBCLEdBQ0dBLFFBQUQsQ0FBdUJNLE1BQXZCLEVBQStCQyxNQUEvQixDQURGLEdBRUVQLFFBUEosQ0FERCxDQURELENBREE7QUFBQSxHQVBGLENBTHdCO0FBQUEsQ0FBekI7O2VBOEJlRCxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJyZWFrcG9pbnRDb250YWluZXIsIHtcblx0QXBwQnJlYWtwb2ludCxcblx0QnJlYWtwb2ludERlZmluaXRpb25zLFxuXHRJUHJvcHMgYXMgSUJwY1Byb3BzLFxuXHRTRUxFQ1RPUlMsXG59IGZyb20gJy4vQnJlYWtwb2ludENvbnRhaW5lcic7XG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4uL2RhdGEvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgSURfQlJPV1NFUiB9IGZyb20gJy4vQ29udGV4dCc7XG5cbmNvbnN0IERFQlVHX0JST1dTRVIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcblxuLy8gRW11bGF0ZXMgbWVkaWEgcXVlcnkgZnVuY3Rpb25hbGl0eSwgYW5kIGVuYWJsZXMgJ3N0YW5kYWxvbmUnIDxCcmVha3BvaW50Lz5cbi8vIEFsc28gcHJvdmlkZXMgYmFja3dhcmQtY29tcGF0aWJpbGl0eSB3aXRoIEREQnJlYWtwb2ludHMgb3JpZ2luYWwgJ2JwKCknIG1peGluXG5jb25zdCBCcm93c2VyQ29udGFpbmVyID0gKHtcblx0Y2hpbGRyZW4sXG5cdGN1c3RvbUJyZWFrcG9pbnRzLFxuXHQuLi5wcm9wc1xufTogSUJwY1Byb3BzKSA9PiAoXG5cdDxCcmVha3BvaW50Q29udGFpbmVyXG5cdFx0aWRlbnRpZmllcj17SURfQlJPV1NFUn1cblx0XHRjbGFzc05hbWU9e1NFTEVDVE9SUy5CUF9CUk9XU0VSfVxuXHRcdGRlYnVnPXtERUJVR19CUk9XU0VSfVxuXHRcdGN1c3RvbUJyZWFrcG9pbnRzPXtjdXN0b21CcmVha3BvaW50c31cblx0XHR7Li4ucHJvcHN9XG5cdD5cblx0XHR7KGJwTmFtZSwgYnBTaXplKSA9PiAoXG5cdFx0XHQ8QnJlYWtwb2ludERlZmluaXRpb25zLlByb3ZpZGVyIHZhbHVlPXtjdXN0b21CcmVha3BvaW50cyB8fCBCUkVBS1BPSU5UU30+XG5cdFx0XHRcdDxBcHBCcmVha3BvaW50LlByb3ZpZGVyIHZhbHVlPXt7IGJwTmFtZSwgYnBTaXplIH19PlxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHR7LyogTm90ZTogVGhpcyBpcyB3cmFwcGVkIGluIGEgZnJhZ21lbnQgdG8gYmVcblx0XHRcdFx0XHRcdGNlcnRhaW4gdGhhdCB0aGUgYWJvdmUgUHJvdmlkZXIgb25seSBoYXMgb25lXG5cdFx0XHRcdFx0XHRjaGlsZCwgd2hpY2ggaXMgYSBzdHJpY3QgcmVxdWlyZW1lbnQgdGhhdCB3b3VsZFxuXHRcdFx0XHRcdFx0b3RoZXJ3aXNlIGRlcGVuZCBvbiBob3cgY2hpbGRyZW4gYXJlIHBhc3NlZCAqL31cblx0XHRcdFx0XHRcdHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcblx0XHRcdFx0XHRcdFx0PyAoY2hpbGRyZW4gYXMgRnVuY3Rpb24pKGJwTmFtZSwgYnBTaXplKVxuXHRcdFx0XHRcdFx0XHQ6IGNoaWxkcmVufVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQ8L0FwcEJyZWFrcG9pbnQuUHJvdmlkZXI+XG5cdFx0XHQ8L0JyZWFrcG9pbnREZWZpbml0aW9ucy5Qcm92aWRlcj5cblx0XHQpfVxuXHQ8L0JyZWFrcG9pbnRDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyQ29udGFpbmVyO1xuIl19