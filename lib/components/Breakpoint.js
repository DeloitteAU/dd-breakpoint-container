"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.to-string");

var React = _interopRequireWildcard(require("react"));

var _breakpoints = require("../data/breakpoints");

var _Context = require("./Context");

var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/Breakpoint.tsx";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Breakpoint = function Breakpoint(_ref) {
  var q = _ref.q,
      _ref$query = _ref.query,
      query = _ref$query === void 0 ? 0 : _ref$query,
      identifier = _ref.identifier,
      children = _ref.children;
  var bpQuery = q || query; // Aggregate query shorthand

  var Context = _Context.BP_CONTEXTS[identifier];
  return React.createElement(Context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, function (bp) {
    return (0, _breakpoints.resolveBp)(bpQuery.toString(), bp) && children;
  });
};

var _default = Breakpoint;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnQudHN4Il0sIm5hbWVzIjpbIkJyZWFrcG9pbnQiLCJxIiwicXVlcnkiLCJpZGVudGlmaWVyIiwiY2hpbGRyZW4iLCJicFF1ZXJ5IiwiQ29udGV4dCIsIkJQX0NPTlRFWFRTIiwiYnAiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFTQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvRDtBQUFBLE1BQWpEQyxDQUFpRCxRQUFqREEsQ0FBaUQ7QUFBQSx3QkFBOUNDLEtBQThDO0FBQUEsTUFBOUNBLEtBQThDLDJCQUF0QyxDQUFzQztBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQ3RFLE1BQU1DLE9BQU8sR0FBR0osQ0FBQyxJQUFJQyxLQUFyQixDQURzRSxDQUMxQzs7QUFDNUIsTUFBTUksT0FBTyxHQUFHQyxxQkFBWUosVUFBWixDQUFoQjtBQUVBLFNBQ0Msb0JBQUMsT0FBRCxDQUFTLFFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxVQUFDSyxFQUFEO0FBQUEsV0FBeUIsNEJBQVVILE9BQU8sQ0FBQ0ksUUFBUixFQUFWLEVBQThCRCxFQUE5QixLQUFxQ0osUUFBOUQ7QUFBQSxHQUZGLENBREQ7QUFNQSxDQVZEOztlQVllSixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyByZXNvbHZlQnAgfSBmcm9tICdkYXRhL2JyZWFrcG9pbnRzJztcbmltcG9ydCB7IEJQX0NPTlRFWFRTLCBJRF9ERUZBVUxUIH0gZnJvbSAnY29tcG9uZW50cy9Db250ZXh0JztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cdHF1ZXJ5Pzogc3RyaW5nIHwgbnVtYmVyO1xuXHRxPzogc3RyaW5nIHwgbnVtYmVyO1xuXHRpZGVudGlmaWVyOiBzdHJpbmc7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IEJyZWFrcG9pbnQgPSAoeyBxLCBxdWVyeSA9IDAsIGlkZW50aWZpZXIsIGNoaWxkcmVuIH06IElQcm9wcykgPT4ge1xuXHRjb25zdCBicFF1ZXJ5ID0gcSB8fCBxdWVyeTsgLy8gQWdncmVnYXRlIHF1ZXJ5IHNob3J0aGFuZFxuXHRjb25zdCBDb250ZXh0ID0gQlBfQ09OVEVYVFNbaWRlbnRpZmllcl07XG5cblx0cmV0dXJuIChcblx0XHQ8Q29udGV4dC5Db25zdW1lcj5cblx0XHRcdHsvKiBSZW5kZXIgY2hpbGRyZW4gb25seSBpZiBicmVha3BvaW50IHF1ZXJ5IHJlc29sdmVzICovfVxuXHRcdFx0eyhicDogc3RyaW5nIHwgbnVtYmVyKSA9PiByZXNvbHZlQnAoYnBRdWVyeS50b1N0cmluZygpLCBicCkgJiYgY2hpbGRyZW59XG5cdFx0PC9Db250ZXh0LkNvbnN1bWVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnJlYWtwb2ludDtcbiJdfQ==