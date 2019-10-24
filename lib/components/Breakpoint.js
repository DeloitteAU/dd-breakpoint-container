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
      _ref$identifier = _ref.identifier,
      identifier = _ref$identifier === void 0 ? _Context.ID_DEFAULT : _ref$identifier,
      children = _ref.children;
  var bpQuery = q || query; // Aggregate query shorthand

  var Context = _Context.BP_CONTEXTS[identifier];
  return React.createElement(Context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, function (bp) {
    return (0, _breakpoints.resolveBp)(bpQuery.toString(), bp) && children;
  });
};

var _default = Breakpoint;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnQudHN4Il0sIm5hbWVzIjpbIkJyZWFrcG9pbnQiLCJxIiwicXVlcnkiLCJpZGVudGlmaWVyIiwiSURfREVGQVVMVCIsImNoaWxkcmVuIiwiYnBRdWVyeSIsIkNvbnRleHQiLCJCUF9DT05URVhUUyIsImJwIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBU0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FLTDtBQUFBLE1BSmJDLENBSWEsUUFKYkEsQ0FJYTtBQUFBLHdCQUhiQyxLQUdhO0FBQUEsTUFIYkEsS0FHYSwyQkFITCxDQUdLO0FBQUEsNkJBRmJDLFVBRWE7QUFBQSxNQUZiQSxVQUVhLGdDQUZBQyxtQkFFQTtBQUFBLE1BRGJDLFFBQ2EsUUFEYkEsUUFDYTtBQUNiLE1BQU1DLE9BQU8sR0FBR0wsQ0FBQyxJQUFJQyxLQUFyQixDQURhLENBQ2U7O0FBQzVCLE1BQU1LLE9BQU8sR0FBR0MscUJBQVlMLFVBQVosQ0FBaEI7QUFFQSxTQUNDLG9CQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsVUFBQ00sRUFBRDtBQUFBLFdBQXlCLDRCQUFVSCxPQUFPLENBQUNJLFFBQVIsRUFBVixFQUE4QkQsRUFBOUIsS0FBcUNKLFFBQTlEO0FBQUEsR0FGRixDQUREO0FBTUEsQ0FmRDs7ZUFpQmVMLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHJlc29sdmVCcCB9IGZyb20gJ2RhdGEvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgQlBfQ09OVEVYVFMsIElEX0RFRkFVTFQgfSBmcm9tICdjb21wb25lbnRzL0NvbnRleHQnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcblx0cXVlcnk/OiBzdHJpbmcgfCBudW1iZXI7XG5cdHE/OiBzdHJpbmcgfCBudW1iZXI7XG5cdGlkZW50aWZpZXI6IHN0cmluZztcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgQnJlYWtwb2ludCA9ICh7XG5cdHEsXG5cdHF1ZXJ5ID0gMCxcblx0aWRlbnRpZmllciA9IElEX0RFRkFVTFQsXG5cdGNoaWxkcmVuLFxufTogSVByb3BzKSA9PiB7XG5cdGNvbnN0IGJwUXVlcnkgPSBxIHx8IHF1ZXJ5OyAvLyBBZ2dyZWdhdGUgcXVlcnkgc2hvcnRoYW5kXG5cdGNvbnN0IENvbnRleHQgPSBCUF9DT05URVhUU1tpZGVudGlmaWVyXTtcblxuXHRyZXR1cm4gKFxuXHRcdDxDb250ZXh0LkNvbnN1bWVyPlxuXHRcdFx0ey8qIFJlbmRlciBjaGlsZHJlbiBvbmx5IGlmIGJyZWFrcG9pbnQgcXVlcnkgcmVzb2x2ZXMgKi99XG5cdFx0XHR7KGJwOiBzdHJpbmcgfCBudW1iZXIpID0+IHJlc29sdmVCcChicFF1ZXJ5LnRvU3RyaW5nKCksIGJwKSAmJiBjaGlsZHJlbn1cblx0XHQ8L0NvbnRleHQuQ29uc3VtZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCcmVha3BvaW50O1xuIl19