"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRleHQudHN4Il0sIm5hbWVzIjpbIklEX0RFRkFVTFQiLCJJRF9CUk9XU0VSIiwiQlBfQ09OVEVYVFMiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJXaXRoQ29udGV4dCIsImlkZW50aWZpZXIiLCJjdXJyZW50QnAiLCJjaGlsZHJlbiIsImhhc0lkZW50aWZpZXIiLCJDb3JlQ29udGV4dCIsIklkZW50aWZpZXJDb250ZXh0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBbkI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQW5CLEMsQ0FFUDs7O0FBQ08sSUFBTUMsV0FBcUMscURBQ2hERixVQURnRCxFQUNuQ0csS0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLENBRG1DLGlDQUVoREgsVUFGZ0QsRUFFbkNFLEtBQUssQ0FBQ0MsYUFBTixDQUFvQixJQUFwQixDQUZtQyxnQkFBM0M7OztBQVdQOzs7QUFHQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFpRDtBQUFBLE1BQTlDQyxVQUE4QyxRQUE5Q0EsVUFBOEM7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUNwRTtBQUNBLE1BQU1DLGFBQWEsR0FBR0gsVUFBVSxLQUFLTixVQUFyQyxDQUZvRSxDQUlwRTs7QUFDQSxNQUFJUyxhQUFhLElBQUksQ0FBQ1AsV0FBVyxDQUFDSSxVQUFELENBQWpDLEVBQStDO0FBQzlDSixJQUFBQSxXQUFXLENBQUNJLFVBQUQsQ0FBWCxHQUEwQkgsS0FBSyxDQUFDQyxhQUFOLENBQW9CLElBQXBCLENBQTFCO0FBQ0EsR0FQbUUsQ0FTcEU7QUFDQTtBQUNBOzs7QUFDQSxNQUFNTSxXQUFXLEdBQUdSLFdBQVcsQ0FBQ0YsVUFBRCxDQUEvQjtBQUNBLE1BQU1XLGlCQUFpQixHQUFHVCxXQUFXLENBQUNJLFVBQUQsQ0FBckM7QUFFQSxTQUNDLDBDQUNFRyxhQUFhLEdBQ2Isb0JBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsSUFBQSxLQUFLLEVBQUVGLFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Msb0JBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsSUFBQSxLQUFLLEVBQUVBLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VDLFFBREYsQ0FERCxDQURhLEdBT2Isb0JBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsSUFBQSxLQUFLLEVBQUVELFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VDLFFBREYsQ0FSRixDQUREO0FBZUEsQ0E5QkQ7OztBQWdDQUgsV0FBVyxDQUFDTyxZQUFaLEdBQTJCO0FBQzFCTCxFQUFBQSxTQUFTLEVBQUU7QUFEZSxDQUEzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVE9ETzpcbiAqXG4gKiBNb3JlIGV4cGxhbmF0aW9uIGFyb3VuZCB0aGUgZXhpc3RlbmNlIG9mXG4gKiBvZiB0aGlzIGZpbGUsIHdoYXQgaXQncyBpcyBmb3IgKDxCcmVha3BvaW50Lz5cbiAqIGNvbXBvbmVudCBwYXJzaW5nIHN1cHBvcnQpIGV0Y1xuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IElEX0RFRkFVTFQgPSAnZGVmYXVsdCc7XG5leHBvcnQgY29uc3QgSURfQlJPV1NFUiA9ICdicm93c2VyJztcblxuLy8gTk9URTogT3RoZXIgaWRlbnRpZmllciBjb250ZXh0cyBhcmUgY3JlYXRlZCBhcy1uZWVkZWQgaW4gV2l0aENvbnRleHRcbmV4cG9ydCBjb25zdCBCUF9DT05URVhUUzogeyBbdmFsdWU6IHN0cmluZ106IGFueSB9ID0ge1xuXHRbSURfREVGQVVMVF06IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCksXG5cdFtJRF9CUk9XU0VSXTogUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKSxcbn07XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXHRpZGVudGlmaWVyOiBzdHJpbmc7XG5cdGN1cnJlbnRCcD86IHN0cmluZztcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuLyoqXG4gKiBUT0RPLlxuICovXG5jb25zdCBXaXRoQ29udGV4dCA9ICh7IGlkZW50aWZpZXIsIGN1cnJlbnRCcCwgY2hpbGRyZW4gfTogSVByb3BzKSA9PiB7XG5cdC8vIElmIGEgQlBDIGhhcyBzcGVjaWZpZWQgYW4gaWRlbnRpZmllciBvdGhlciB0aGFuIHRoZSBkZWZhdWx0XG5cdGNvbnN0IGhhc0lkZW50aWZpZXIgPSBpZGVudGlmaWVyICE9PSBJRF9ERUZBVUxUO1xuXG5cdC8vIENyZWF0ZSBzcGVjaWZpYyBjb250ZXh0IGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuXHRpZiAoaGFzSWRlbnRpZmllciAmJiAhQlBfQ09OVEVYVFNbaWRlbnRpZmllcl0pIHtcblx0XHRCUF9DT05URVhUU1tpZGVudGlmaWVyXSA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cdH1cblxuXHQvLyBDb3JlQ29udGV4dCBha2EgJ2RlZmF1bHQnIGNvbnRleHQgbXVzdCBhbHdheXMgYmUgcHJlc2VudCwgZXZlbiBpZiB0aGVcblx0Ly8gQlBDIGhhcyBhIHNwZWNpZmllZCBpZGVudGlmaWVyIC0gdGhpcyBpcyB0byBlbmFibGUgdGhlIGRlZmF1bHQgYmVoYXZpb3VyXG5cdC8vIG9mIDxCcmVha3BvaW50Lz4gY29tcG9uZW50cyB0aGF0IGRvbid0IHNwZWNpZnkgYW4gdGFyZ2V0IEJQQyBpZGVudGlmaWVyXG5cdGNvbnN0IENvcmVDb250ZXh0ID0gQlBfQ09OVEVYVFNbSURfREVGQVVMVF07XG5cdGNvbnN0IElkZW50aWZpZXJDb250ZXh0ID0gQlBfQ09OVEVYVFNbaWRlbnRpZmllcl07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e2hhc0lkZW50aWZpZXIgPyAoXG5cdFx0XHRcdDxJZGVudGlmaWVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3VycmVudEJwfT5cblx0XHRcdFx0XHQ8Q29yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2N1cnJlbnRCcH0+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9Db3JlQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdFx0PC9JZGVudGlmaWVyQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxJZGVudGlmaWVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3VycmVudEJwfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvSWRlbnRpZmllckNvbnRleHQuUHJvdmlkZXI+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcblxuV2l0aENvbnRleHQuZGVmYXVsdFByb3BzID0ge1xuXHRjdXJyZW50QnA6IG51bGwsXG59O1xuXG5leHBvcnQgeyBXaXRoQ29udGV4dCB9O1xuIl19