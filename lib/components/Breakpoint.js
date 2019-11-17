"use strict";

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnQudHN4Il0sIm5hbWVzIjpbIkJyZWFrcG9pbnQiLCJxIiwicXVlcnkiLCJpZGVudGlmaWVyIiwiSURfREVGQVVMVCIsImNoaWxkcmVuIiwiYnBRdWVyeSIsIkNvbnRleHQiLCJCUF9DT05URVhUUyIsImJwIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBU0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FLTDtBQUFBLE1BSmJDLENBSWEsUUFKYkEsQ0FJYTtBQUFBLHdCQUhiQyxLQUdhO0FBQUEsTUFIYkEsS0FHYSwyQkFITCxDQUdLO0FBQUEsNkJBRmJDLFVBRWE7QUFBQSxNQUZiQSxVQUVhLGdDQUZBQyxtQkFFQTtBQUFBLE1BRGJDLFFBQ2EsUUFEYkEsUUFDYTtBQUNiLE1BQU1DLE9BQU8sR0FBR0wsQ0FBQyxJQUFJQyxLQUFyQixDQURhLENBQ2U7O0FBQzVCLE1BQU1LLE9BQU8sR0FBR0MscUJBQVlMLFVBQVosQ0FBaEI7QUFFQSxTQUNDLG9CQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsVUFBQ00sRUFBRDtBQUFBLFdBQXlCLDRCQUFVSCxPQUFPLENBQUNJLFFBQVIsRUFBVixFQUE4QkQsRUFBOUIsS0FBcUNKLFFBQTlEO0FBQUEsR0FGRixDQUREO0FBTUEsQ0FmRDs7ZUFpQmVMLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHJlc29sdmVCcCB9IGZyb20gJy4uL2RhdGEvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgQlBfQ09OVEVYVFMsIElEX0RFRkFVTFQgfSBmcm9tICcuL0NvbnRleHQnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcblx0cXVlcnk/OiBzdHJpbmcgfCBudW1iZXI7XG5cdHE/OiBzdHJpbmcgfCBudW1iZXI7XG5cdGlkZW50aWZpZXI/OiBzdHJpbmc7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IEJyZWFrcG9pbnQgPSAoe1xuXHRxLFxuXHRxdWVyeSA9IDAsXG5cdGlkZW50aWZpZXIgPSBJRF9ERUZBVUxULFxuXHRjaGlsZHJlbixcbn06IElQcm9wcykgPT4ge1xuXHRjb25zdCBicFF1ZXJ5ID0gcSB8fCBxdWVyeTsgLy8gQWdncmVnYXRlIHF1ZXJ5IHNob3J0aGFuZFxuXHRjb25zdCBDb250ZXh0ID0gQlBfQ09OVEVYVFNbaWRlbnRpZmllcl07XG5cblx0cmV0dXJuIChcblx0XHQ8Q29udGV4dC5Db25zdW1lcj5cblx0XHRcdHsvKiBSZW5kZXIgY2hpbGRyZW4gb25seSBpZiBicmVha3BvaW50IHF1ZXJ5IHJlc29sdmVzICovfVxuXHRcdFx0eyhicDogc3RyaW5nIHwgbnVtYmVyKSA9PiByZXNvbHZlQnAoYnBRdWVyeS50b1N0cmluZygpLCBicCkgJiYgY2hpbGRyZW59XG5cdFx0PC9Db250ZXh0LkNvbnN1bWVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnJlYWtwb2ludDtcbiJdfQ==