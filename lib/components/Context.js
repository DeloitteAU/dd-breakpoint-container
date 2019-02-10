import "core-js/modules/es6.object.define-property";

var _BP_CONTEXTS,
    _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/Context.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import T from 'prop-types';
export var ID_DEFAULT = 'default';
export var ID_BROWSER = 'browser'; // NOTE: Other identifier contexts are created as-needed in WithContext

export var BP_CONTEXTS = (_BP_CONTEXTS = {}, _defineProperty(_BP_CONTEXTS, ID_DEFAULT, React.createContext()), _defineProperty(_BP_CONTEXTS, ID_BROWSER, React.createContext()), _BP_CONTEXTS); // TODO docs? necessary here with internal comments already? should you doc functional components?

function WithContext(_ref) {
  var identifier = _ref.identifier,
      currentBp = _ref.currentBp,
      children = _ref.children;
  // If a BPC has specified an identifier other than the default
  var hasIdentifier = identifier !== ID_DEFAULT; // Create specific context if it doesn't already exist

  if (hasIdentifier && !BP_CONTEXTS[identifier]) {
    BP_CONTEXTS[identifier] = React.createContext();
  } // CoreContext aka 'default' context must always be present, even if the
  // BPC has a specified identifier - this is to enable the default behaviour
  // of <Breakpoint/> components that don't specify an target BPC identifier


  var CoreContext = BP_CONTEXTS[ID_DEFAULT];
  var IdentifierContext = BP_CONTEXTS[identifier];
  return React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, hasIdentifier ? React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, React.createElement(CoreContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, children)) : React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, children));
}

;
WithContext.propTypes = {
  identifier: T.string.isRequired,
  currentBp: T.string,
  children: T.node.isRequired
};
WithContext.defaultProps = {
  currentBp: null
};
export { WithContext };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRleHQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiSURfREVGQVVMVCIsIklEX0JST1dTRVIiLCJCUF9DT05URVhUUyIsImNyZWF0ZUNvbnRleHQiLCJXaXRoQ29udGV4dCIsImlkZW50aWZpZXIiLCJjdXJyZW50QnAiLCJjaGlsZHJlbiIsImhhc0lkZW50aWZpZXIiLCJDb3JlQ29udGV4dCIsIklkZW50aWZpZXJDb250ZXh0IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsQ0FBUCxNQUFjLFlBQWQ7QUFFQSxPQUFPLElBQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNQLE9BQU8sSUFBTUMsVUFBVSxHQUFHLFNBQW5CLEMsQ0FFUDs7QUFDQSxPQUFPLElBQU1DLFdBQVcscURBQ3RCRixVQURzQixFQUNURixLQUFLLENBQUNLLGFBQU4sRUFEUyxpQ0FFdEJGLFVBRnNCLEVBRVRILEtBQUssQ0FBQ0ssYUFBTixFQUZTLGdCQUFqQixDLENBS1A7O0FBQ0EsU0FBU0MsV0FBVCxPQUEwRDtBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pEO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxVQUFVLEtBQUtMLFVBQXJDLENBRnlELENBSXpEOztBQUNBLE1BQUlRLGFBQWEsSUFBSSxDQUFDTixXQUFXLENBQUNHLFVBQUQsQ0FBakMsRUFBK0M7QUFDOUNILElBQUFBLFdBQVcsQ0FBQ0csVUFBRCxDQUFYLEdBQTBCUCxLQUFLLENBQUNLLGFBQU4sRUFBMUI7QUFDQSxHQVB3RCxDQVN6RDtBQUNBO0FBQ0E7OztBQUNBLE1BQU1NLFdBQVcsR0FBR1AsV0FBVyxDQUFDRixVQUFELENBQS9CO0FBQ0EsTUFBTVUsaUJBQWlCLEdBQUdSLFdBQVcsQ0FBQ0csVUFBRCxDQUFyQztBQUVBLFNBQ0Msb0JBQUMsS0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csYUFBYSxHQUNkLG9CQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLElBQUEsS0FBSyxFQUFFRixTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLG9CQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLElBQUEsS0FBSyxFQUFFQSxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxRQURILENBREQsQ0FEYyxHQU9kLG9CQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLElBQUEsS0FBSyxFQUFFRCxTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxRQURILENBUkYsQ0FERDtBQWVBOztBQUFBO0FBRURILFdBQVcsQ0FBQ08sU0FBWixHQUF3QjtBQUN2Qk4sRUFBQUEsVUFBVSxFQUFFTixDQUFDLENBQUNhLE1BQUYsQ0FBU0MsVUFERTtBQUV2QlAsRUFBQUEsU0FBUyxFQUFFUCxDQUFDLENBQUNhLE1BRlU7QUFHdkJMLEVBQUFBLFFBQVEsRUFBRVIsQ0FBQyxDQUFDZSxJQUFGLENBQU9EO0FBSE0sQ0FBeEI7QUFNQVQsV0FBVyxDQUFDVyxZQUFaLEdBQTJCO0FBQzFCVCxFQUFBQSxTQUFTLEVBQUU7QUFEZSxDQUEzQjtBQUlBLFNBQVNGLFdBQVQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFQgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBJRF9ERUZBVUxUID0gJ2RlZmF1bHQnO1xuZXhwb3J0IGNvbnN0IElEX0JST1dTRVIgPSAnYnJvd3Nlcic7XG5cbi8vIE5PVEU6IE90aGVyIGlkZW50aWZpZXIgY29udGV4dHMgYXJlIGNyZWF0ZWQgYXMtbmVlZGVkIGluIFdpdGhDb250ZXh0XG5leHBvcnQgY29uc3QgQlBfQ09OVEVYVFMgPSB7XG5cdFtJRF9ERUZBVUxUXTogUmVhY3QuY3JlYXRlQ29udGV4dCgpLFxuXHRbSURfQlJPV1NFUl06IFJlYWN0LmNyZWF0ZUNvbnRleHQoKSxcbn07XG5cbi8vIFRPRE8gZG9jcz8gbmVjZXNzYXJ5IGhlcmUgd2l0aCBpbnRlcm5hbCBjb21tZW50cyBhbHJlYWR5PyBzaG91bGQgeW91IGRvYyBmdW5jdGlvbmFsIGNvbXBvbmVudHM/XG5mdW5jdGlvbiBXaXRoQ29udGV4dCh7IGlkZW50aWZpZXIsIGN1cnJlbnRCcCwgY2hpbGRyZW4gfSkge1xuXHQvLyBJZiBhIEJQQyBoYXMgc3BlY2lmaWVkIGFuIGlkZW50aWZpZXIgb3RoZXIgdGhhbiB0aGUgZGVmYXVsdFxuXHRjb25zdCBoYXNJZGVudGlmaWVyID0gaWRlbnRpZmllciAhPT0gSURfREVGQVVMVDtcblxuXHQvLyBDcmVhdGUgc3BlY2lmaWMgY29udGV4dCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3Rcblx0aWYgKGhhc0lkZW50aWZpZXIgJiYgIUJQX0NPTlRFWFRTW2lkZW50aWZpZXJdKSB7XG5cdFx0QlBfQ09OVEVYVFNbaWRlbnRpZmllcl0gPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cdH1cblxuXHQvLyBDb3JlQ29udGV4dCBha2EgJ2RlZmF1bHQnIGNvbnRleHQgbXVzdCBhbHdheXMgYmUgcHJlc2VudCwgZXZlbiBpZiB0aGVcblx0Ly8gQlBDIGhhcyBhIHNwZWNpZmllZCBpZGVudGlmaWVyIC0gdGhpcyBpcyB0byBlbmFibGUgdGhlIGRlZmF1bHQgYmVoYXZpb3VyXG5cdC8vIG9mIDxCcmVha3BvaW50Lz4gY29tcG9uZW50cyB0aGF0IGRvbid0IHNwZWNpZnkgYW4gdGFyZ2V0IEJQQyBpZGVudGlmaWVyXG5cdGNvbnN0IENvcmVDb250ZXh0ID0gQlBfQ09OVEVYVFNbSURfREVGQVVMVF07XG5cdGNvbnN0IElkZW50aWZpZXJDb250ZXh0ID0gQlBfQ09OVEVYVFNbaWRlbnRpZmllcl07XG5cblx0cmV0dXJuIChcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHR7IGhhc0lkZW50aWZpZXIgPyAoXG5cdFx0XHRcdDxJZGVudGlmaWVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3VycmVudEJwfT5cblx0XHRcdFx0XHQ8Q29yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2N1cnJlbnRCcH0+XG5cdFx0XHRcdFx0XHR7IGNoaWxkcmVuIH1cblx0XHRcdFx0XHQ8L0NvcmVDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0XHQ8L0lkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PElkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50QnB9PlxuXHRcdFx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdFx0XHQ8L0lkZW50aWZpZXJDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0KSB9XG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0KTtcbn07XG5cbldpdGhDb250ZXh0LnByb3BUeXBlcyA9IHtcblx0aWRlbnRpZmllcjogVC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y3VycmVudEJwOiBULnN0cmluZyxcblx0Y2hpbGRyZW46IFQubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuV2l0aENvbnRleHQuZGVmYXVsdFByb3BzID0ge1xuXHRjdXJyZW50QnA6IG51bGwsXG59O1xuXG5leHBvcnQgeyBXaXRoQ29udGV4dCB9O1xuIl19