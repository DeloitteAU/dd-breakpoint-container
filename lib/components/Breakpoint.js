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

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnQudHN4Il0sIm5hbWVzIjpbIkJyZWFrcG9pbnQiLCJxIiwicXVlcnkiLCJpZGVudGlmaWVyIiwiSURfREVGQVVMVCIsImNoaWxkcmVuIiwiYnBRdWVyeSIsIkNvbnRleHQiLCJCUF9DT05URVhUUyIsImJwIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFTQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUtMO0FBQUEsTUFKYkMsQ0FJYSxRQUpiQSxDQUlhO0FBQUEsd0JBSGJDLEtBR2E7QUFBQSxNQUhiQSxLQUdhLDJCQUhMLENBR0s7QUFBQSw2QkFGYkMsVUFFYTtBQUFBLE1BRmJBLFVBRWEsZ0NBRkFDLG1CQUVBO0FBQUEsTUFEYkMsUUFDYSxRQURiQSxRQUNhO0FBQ2IsTUFBTUMsT0FBTyxHQUFHTCxDQUFDLElBQUlDLEtBQXJCLENBRGEsQ0FDZTs7QUFDNUIsTUFBTUssT0FBTyxHQUFHQyxxQkFBWUwsVUFBWixDQUFoQjtBQUVBLFNBQ0Msb0JBQUMsT0FBRCxDQUFTLFFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxVQUFDTSxFQUFEO0FBQUEsV0FBeUIsNEJBQVVILE9BQU8sQ0FBQ0ksUUFBUixFQUFWLEVBQThCRCxFQUE5QixLQUFxQ0osUUFBOUQ7QUFBQSxHQUZGLENBREQ7QUFNQSxDQWZEOztlQWlCZUwsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgcmVzb2x2ZUJwIH0gZnJvbSAnLi4vZGF0YS9icmVha3BvaW50cyc7XG5pbXBvcnQgeyBCUF9DT05URVhUUywgSURfREVGQVVMVCB9IGZyb20gJy4vQ29udGV4dCc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXHRxdWVyeT86IHN0cmluZyB8IG51bWJlcjtcblx0cT86IHN0cmluZyB8IG51bWJlcjtcblx0aWRlbnRpZmllcj86IHN0cmluZztcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgQnJlYWtwb2ludCA9ICh7XG5cdHEsXG5cdHF1ZXJ5ID0gMCxcblx0aWRlbnRpZmllciA9IElEX0RFRkFVTFQsXG5cdGNoaWxkcmVuLFxufTogSVByb3BzKSA9PiB7XG5cdGNvbnN0IGJwUXVlcnkgPSBxIHx8IHF1ZXJ5OyAvLyBBZ2dyZWdhdGUgcXVlcnkgc2hvcnRoYW5kXG5cdGNvbnN0IENvbnRleHQgPSBCUF9DT05URVhUU1tpZGVudGlmaWVyXTtcblxuXHRyZXR1cm4gKFxuXHRcdDxDb250ZXh0LkNvbnN1bWVyPlxuXHRcdFx0ey8qIFJlbmRlciBjaGlsZHJlbiBvbmx5IGlmIGJyZWFrcG9pbnQgcXVlcnkgcmVzb2x2ZXMgKi99XG5cdFx0XHR7KGJwOiBzdHJpbmcgfCBudW1iZXIpID0+IHJlc29sdmVCcChicFF1ZXJ5LnRvU3RyaW5nKCksIGJwKSAmJiBjaGlsZHJlbn1cblx0XHQ8L0NvbnRleHQuQ29uc3VtZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCcmVha3BvaW50O1xuIl19