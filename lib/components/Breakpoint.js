import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.is-array";
import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.regexp.split";
var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/Breakpoint.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import T from 'prop-types';
import { BREAKPOINTS, getBpUpperLimit } from '../data/breakpoints.js';
import { BP_CONTEXTS, ID_DEFAULT } from './Context.js';

function Breakpoint(_ref) {
  var q = _ref.q,
      query = _ref.query,
      identifier = _ref.identifier,
      children = _ref.children;
  var bpQuery = q || query; // Aggregate query shorthand

  var _bpQuery$replace$spli = bpQuery.replace(' ', '').split(','),
      _bpQuery$replace$spli2 = _slicedToArray(_bpQuery$replace$spli, 2),
      lower = _bpQuery$replace$spli2[0],
      upper = _bpQuery$replace$spli2[1];

  var Context = BP_CONTEXTS[identifier];
  return React.createElement(Context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, function (bp) {
    var bpWidth = BREAKPOINTS[bp] || 0;
    var lowerWidth = BREAKPOINTS[lower] || parseInt(lower); // Get upper bound (i.e. next breakpoint), or parse as int, or failing
    // that and no threshold has been specified, use Infinity as upper bound

    var upperWidth = getBpUpperLimit(upper) || parseInt(upper) || Infinity;
    var moreThanLower = bpWidth >= lowerWidth;
    var lessThanUpper = upper == null || bpWidth < upperWidth;
    return moreThanLower && lessThanUpper && children;
  });
}

;
Breakpoint.propTypes = {
  query: T.oneOfType([T.string, T.number]),
  q: T.oneOfType([T.string, T.number]),
  identifier: T.string.isRequired,
  children: T.node.isRequired
};
Breakpoint.defaultProps = {
  query: 0,
  q: null,
  // 'query' shorthand
  identifier: ID_DEFAULT
};
export default Breakpoint;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiQlJFQUtQT0lOVFMiLCJnZXRCcFVwcGVyTGltaXQiLCJCUF9DT05URVhUUyIsIklEX0RFRkFVTFQiLCJCcmVha3BvaW50IiwicSIsInF1ZXJ5IiwiaWRlbnRpZmllciIsImNoaWxkcmVuIiwiYnBRdWVyeSIsInJlcGxhY2UiLCJzcGxpdCIsImxvd2VyIiwidXBwZXIiLCJDb250ZXh0IiwiYnAiLCJicFdpZHRoIiwibG93ZXJXaWR0aCIsInBhcnNlSW50IiwidXBwZXJXaWR0aCIsIkluZmluaXR5IiwibW9yZVRoYW5Mb3dlciIsImxlc3NUaGFuVXBwZXIiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxDQUFQLE1BQWMsWUFBZDtBQUVBLFNBQVNDLFdBQVQsRUFBc0JDLGVBQXRCLFFBQTZDLHdCQUE3QztBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLFVBQXRCLFFBQXdDLGNBQXhDOztBQUVBLFNBQVNDLFVBQVQsT0FBd0Q7QUFBQSxNQUFsQ0MsQ0FBa0MsUUFBbENBLENBQWtDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDdkQsTUFBTUMsT0FBTyxHQUFHSixDQUFDLElBQUlDLEtBQXJCLENBRHVELENBQzNCOztBQUQyQiw4QkFFaENHLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixHQUFoQixFQUFxQixFQUFyQixFQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsQ0FGZ0M7QUFBQTtBQUFBLE1BRWhEQyxLQUZnRDtBQUFBLE1BRXpDQyxLQUZ5Qzs7QUFJdkQsTUFBTUMsT0FBTyxHQUFHWixXQUFXLENBQUNLLFVBQUQsQ0FBM0I7QUFFQSxTQUNDLG9CQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csVUFBQVEsRUFBRSxFQUFJO0FBQ1AsUUFBTUMsT0FBTyxHQUFHaEIsV0FBVyxDQUFDZSxFQUFELENBQVgsSUFBbUIsQ0FBbkM7QUFDQSxRQUFNRSxVQUFVLEdBQUdqQixXQUFXLENBQUNZLEtBQUQsQ0FBWCxJQUFzQk0sUUFBUSxDQUFDTixLQUFELENBQWpELENBRk8sQ0FHUDtBQUNBOztBQUNBLFFBQU1PLFVBQVUsR0FBR2xCLGVBQWUsQ0FBQ1ksS0FBRCxDQUFmLElBQTBCSyxRQUFRLENBQUNMLEtBQUQsQ0FBbEMsSUFBNkNPLFFBQWhFO0FBRUEsUUFBTUMsYUFBYSxHQUFHTCxPQUFPLElBQUlDLFVBQWpDO0FBQ0EsUUFBTUssYUFBYSxHQUFHVCxLQUFLLElBQUksSUFBVCxJQUFpQkcsT0FBTyxHQUFHRyxVQUFqRDtBQUVBLFdBQVFFLGFBQWEsSUFBSUMsYUFBbEIsSUFBb0NkLFFBQTNDO0FBQ0EsR0FaRixDQUREO0FBZ0JBOztBQUFBO0FBRURKLFVBQVUsQ0FBQ21CLFNBQVgsR0FBdUI7QUFDdEJqQixFQUFBQSxLQUFLLEVBQUVQLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWSxDQUFDekIsQ0FBQyxDQUFDMEIsTUFBSCxFQUFXMUIsQ0FBQyxDQUFDMkIsTUFBYixDQUFaLENBRGU7QUFFdEJyQixFQUFBQSxDQUFDLEVBQUVOLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWSxDQUFDekIsQ0FBQyxDQUFDMEIsTUFBSCxFQUFXMUIsQ0FBQyxDQUFDMkIsTUFBYixDQUFaLENBRm1CO0FBR3RCbkIsRUFBQUEsVUFBVSxFQUFFUixDQUFDLENBQUMwQixNQUFGLENBQVNFLFVBSEM7QUFJdEJuQixFQUFBQSxRQUFRLEVBQUVULENBQUMsQ0FBQzZCLElBQUYsQ0FBT0Q7QUFKSyxDQUF2QjtBQU9BdkIsVUFBVSxDQUFDeUIsWUFBWCxHQUEwQjtBQUN6QnZCLEVBQUFBLEtBQUssRUFBRSxDQURrQjtBQUV6QkQsRUFBQUEsQ0FBQyxFQUFFLElBRnNCO0FBRWhCO0FBQ1RFLEVBQUFBLFVBQVUsRUFBRUo7QUFIYSxDQUExQjtBQU1BLGVBQWVDLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFQgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEJSRUFLUE9JTlRTLCBnZXRCcFVwcGVyTGltaXQgfSBmcm9tICcuLi9kYXRhL2JyZWFrcG9pbnRzLmpzJztcbmltcG9ydCB7IEJQX0NPTlRFWFRTLCBJRF9ERUZBVUxUIH0gZnJvbSAnLi9Db250ZXh0LmpzJztcblxuZnVuY3Rpb24gQnJlYWtwb2ludCh7IHEsIHF1ZXJ5LCBpZGVudGlmaWVyLCBjaGlsZHJlbiB9KSB7XG5cdGNvbnN0IGJwUXVlcnkgPSBxIHx8IHF1ZXJ5OyAvLyBBZ2dyZWdhdGUgcXVlcnkgc2hvcnRoYW5kXG5cdGNvbnN0IFtsb3dlciwgdXBwZXJdID0gYnBRdWVyeS5yZXBsYWNlKCcgJywgJycpLnNwbGl0KCcsJyk7XG5cblx0Y29uc3QgQ29udGV4dCA9IEJQX0NPTlRFWFRTW2lkZW50aWZpZXJdO1xuXG5cdHJldHVybiAoXG5cdFx0PENvbnRleHQuQ29uc3VtZXI+XG5cdFx0XHR7IGJwID0+IHtcblx0XHRcdFx0Y29uc3QgYnBXaWR0aCA9IEJSRUFLUE9JTlRTW2JwXSB8fCAwO1xuXHRcdFx0XHRjb25zdCBsb3dlcldpZHRoID0gQlJFQUtQT0lOVFNbbG93ZXJdIHx8IHBhcnNlSW50KGxvd2VyKTtcblx0XHRcdFx0Ly8gR2V0IHVwcGVyIGJvdW5kIChpLmUuIG5leHQgYnJlYWtwb2ludCksIG9yIHBhcnNlIGFzIGludCwgb3IgZmFpbGluZ1xuXHRcdFx0XHQvLyB0aGF0IGFuZCBubyB0aHJlc2hvbGQgaGFzIGJlZW4gc3BlY2lmaWVkLCB1c2UgSW5maW5pdHkgYXMgdXBwZXIgYm91bmRcblx0XHRcdFx0Y29uc3QgdXBwZXJXaWR0aCA9IGdldEJwVXBwZXJMaW1pdCh1cHBlcikgfHwgcGFyc2VJbnQodXBwZXIpIHx8IEluZmluaXR5O1xuXG5cdFx0XHRcdGNvbnN0IG1vcmVUaGFuTG93ZXIgPSBicFdpZHRoID49IGxvd2VyV2lkdGg7XG5cdFx0XHRcdGNvbnN0IGxlc3NUaGFuVXBwZXIgPSB1cHBlciA9PSBudWxsIHx8IGJwV2lkdGggPCB1cHBlcldpZHRoO1xuXG5cdFx0XHRcdHJldHVybiAobW9yZVRoYW5Mb3dlciAmJiBsZXNzVGhhblVwcGVyKSAmJiBjaGlsZHJlbjtcblx0XHRcdH0gfVxuXHRcdDwvQ29udGV4dC5Db25zdW1lcj5cblx0KTtcbn07XG5cbkJyZWFrcG9pbnQucHJvcFR5cGVzID0ge1xuXHRxdWVyeTogVC5vbmVPZlR5cGUoW1Quc3RyaW5nLCBULm51bWJlcl0pLFxuXHRxOiBULm9uZU9mVHlwZShbVC5zdHJpbmcsIFQubnVtYmVyXSksXG5cdGlkZW50aWZpZXI6IFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNoaWxkcmVuOiBULm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbkJyZWFrcG9pbnQuZGVmYXVsdFByb3BzID0ge1xuXHRxdWVyeTogMCxcblx0cTogbnVsbCwgLy8gJ3F1ZXJ5JyBzaG9ydGhhbmRcblx0aWRlbnRpZmllcjogSURfREVGQVVMVCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFrcG9pbnQ7XG4iXX0=