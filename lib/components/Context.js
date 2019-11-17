"use strict";

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

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
exports.WithContext = exports.BP_CONTEXTS = exports.ID_BROWSER = exports.ID_DEFAULT = void 0;

var React = _interopRequireWildcard(require("react"));

var _BP_CONTEXTS,
    _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/Context.tsx";

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ID_DEFAULT = 'default';
exports.ID_DEFAULT = ID_DEFAULT;
var ID_BROWSER = 'browser'; // NOTE: Other identifier contexts are created as-needed in WithContext

exports.ID_BROWSER = ID_BROWSER;
var BP_CONTEXTS = (_BP_CONTEXTS = {}, _defineProperty(_BP_CONTEXTS, ID_DEFAULT, React.createContext(null)), _defineProperty(_BP_CONTEXTS, ID_BROWSER, React.createContext(null)), _BP_CONTEXTS);
exports.BP_CONTEXTS = BP_CONTEXTS;

/**
 * TODO.
 */
var WithContext = function WithContext(_ref) {
  var identifier = _ref.identifier,
      currentBp = _ref.currentBp,
      children = _ref.children;
  // If a BPC has specified an identifier other than the default
  var hasIdentifier = identifier !== ID_DEFAULT; // Create specific context if it doesn't already exist

  if (hasIdentifier && !BP_CONTEXTS[identifier]) {
    BP_CONTEXTS[identifier] = React.createContext(null);
  } // CoreContext aka 'default' context must always be present, even if the
  // BPC has a specified identifier - this is to enable the default behaviour
  // of <Breakpoint/> components that don't specify an target BPC identifier


  var CoreContext = BP_CONTEXTS[ID_DEFAULT];
  var IdentifierContext = BP_CONTEXTS[identifier];
  return React.createElement(React.Fragment, null, hasIdentifier ? React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, React.createElement(CoreContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, children)) : React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, children));
};

exports.WithContext = WithContext;
WithContext.defaultProps = {
  currentBp: null
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRleHQudHN4Il0sIm5hbWVzIjpbIklEX0RFRkFVTFQiLCJJRF9CUk9XU0VSIiwiQlBfQ09OVEVYVFMiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJXaXRoQ29udGV4dCIsImlkZW50aWZpZXIiLCJjdXJyZW50QnAiLCJjaGlsZHJlbiIsImhhc0lkZW50aWZpZXIiLCJDb3JlQ29udGV4dCIsIklkZW50aWZpZXJDb250ZXh0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQUVPLElBQU1BLFVBQVUsR0FBRyxTQUFuQjs7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkIsQyxDQUVQOzs7QUFDTyxJQUFNQyxXQUFxQyxxREFDaERGLFVBRGdELEVBQ25DRyxLQUFLLENBQUNDLGFBQU4sQ0FBb0IsSUFBcEIsQ0FEbUMsaUNBRWhESCxVQUZnRCxFQUVuQ0UsS0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLENBRm1DLGdCQUEzQzs7O0FBV1A7OztBQUdBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlEO0FBQUEsTUFBOUNDLFVBQThDLFFBQTlDQSxVQUE4QztBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQ3BFO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxVQUFVLEtBQUtOLFVBQXJDLENBRm9FLENBSXBFOztBQUNBLE1BQUlTLGFBQWEsSUFBSSxDQUFDUCxXQUFXLENBQUNJLFVBQUQsQ0FBakMsRUFBK0M7QUFDOUNKLElBQUFBLFdBQVcsQ0FBQ0ksVUFBRCxDQUFYLEdBQTBCSCxLQUFLLENBQUNDLGFBQU4sQ0FBb0IsSUFBcEIsQ0FBMUI7QUFDQSxHQVBtRSxDQVNwRTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1NLFdBQVcsR0FBR1IsV0FBVyxDQUFDRixVQUFELENBQS9CO0FBQ0EsTUFBTVcsaUJBQWlCLEdBQUdULFdBQVcsQ0FBQ0ksVUFBRCxDQUFyQztBQUVBLFNBQ0MsMENBQ0VHLGFBQWEsR0FDYixvQkFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixJQUFBLEtBQUssRUFBRUYsU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxvQkFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixJQUFBLEtBQUssRUFBRUEsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUMsUUFERixDQURELENBRGEsR0FPYixvQkFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixJQUFBLEtBQUssRUFBRUQsU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUMsUUFERixDQVJGLENBREQ7QUFlQSxDQTlCRDs7O0FBZ0NBSCxXQUFXLENBQUNPLFlBQVosR0FBMkI7QUFDMUJMLEVBQUFBLFNBQVMsRUFBRTtBQURlLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUT0RPOlxuICpcbiAqIE1vcmUgZXhwbGFuYXRpb24gYXJvdW5kIHRoZSBleGlzdGVuY2Ugb2ZcbiAqIG9mIHRoaXMgZmlsZSwgd2hhdCBpdCdzIGlzIGZvciAoPEJyZWFrcG9pbnQvPlxuICogY29tcG9uZW50IHBhcnNpbmcgc3VwcG9ydCkgZXRjXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgSURfREVGQVVMVCA9ICdkZWZhdWx0JztcbmV4cG9ydCBjb25zdCBJRF9CUk9XU0VSID0gJ2Jyb3dzZXInO1xuXG4vLyBOT1RFOiBPdGhlciBpZGVudGlmaWVyIGNvbnRleHRzIGFyZSBjcmVhdGVkIGFzLW5lZWRlZCBpbiBXaXRoQ29udGV4dFxuZXhwb3J0IGNvbnN0IEJQX0NPTlRFWFRTOiB7IFt2YWx1ZTogc3RyaW5nXTogYW55IH0gPSB7XG5cdFtJRF9ERUZBVUxUXTogUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKSxcblx0W0lEX0JST1dTRVJdOiBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpLFxufTtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cdGlkZW50aWZpZXI6IHN0cmluZztcblx0Y3VycmVudEJwPzogc3RyaW5nO1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG4vKipcbiAqIFRPRE8uXG4gKi9cbmNvbnN0IFdpdGhDb250ZXh0ID0gKHsgaWRlbnRpZmllciwgY3VycmVudEJwLCBjaGlsZHJlbiB9OiBJUHJvcHMpID0+IHtcblx0Ly8gSWYgYSBCUEMgaGFzIHNwZWNpZmllZCBhbiBpZGVudGlmaWVyIG90aGVyIHRoYW4gdGhlIGRlZmF1bHRcblx0Y29uc3QgaGFzSWRlbnRpZmllciA9IGlkZW50aWZpZXIgIT09IElEX0RFRkFVTFQ7XG5cblx0Ly8gQ3JlYXRlIHNwZWNpZmljIGNvbnRleHQgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG5cdGlmIChoYXNJZGVudGlmaWVyICYmICFCUF9DT05URVhUU1tpZGVudGlmaWVyXSkge1xuXHRcdEJQX0NPTlRFWFRTW2lkZW50aWZpZXJdID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblx0fVxuXG5cdC8vIENvcmVDb250ZXh0IGFrYSAnZGVmYXVsdCcgY29udGV4dCBtdXN0IGFsd2F5cyBiZSBwcmVzZW50LCBldmVuIGlmIHRoZVxuXHQvLyBCUEMgaGFzIGEgc3BlY2lmaWVkIGlkZW50aWZpZXIgLSB0aGlzIGlzIHRvIGVuYWJsZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXJcblx0Ly8gb2YgPEJyZWFrcG9pbnQvPiBjb21wb25lbnRzIHRoYXQgZG9uJ3Qgc3BlY2lmeSBhbiB0YXJnZXQgQlBDIGlkZW50aWZpZXJcblx0Y29uc3QgQ29yZUNvbnRleHQgPSBCUF9DT05URVhUU1tJRF9ERUZBVUxUXTtcblx0Y29uc3QgSWRlbnRpZmllckNvbnRleHQgPSBCUF9DT05URVhUU1tpZGVudGlmaWVyXTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7aGFzSWRlbnRpZmllciA/IChcblx0XHRcdFx0PElkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50QnB9PlxuXHRcdFx0XHRcdDxDb3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3VycmVudEJwfT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L0NvcmVDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0XHQ8L0lkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PElkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50QnB9PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9JZGVudGlmaWVyQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5XaXRoQ29udGV4dC5kZWZhdWx0UHJvcHMgPSB7XG5cdGN1cnJlbnRCcDogbnVsbCxcbn07XG5cbmV4cG9ydCB7IFdpdGhDb250ZXh0IH07XG4iXX0=