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

/* eslint-disable import/prefer-default-export */
import React from 'react';
import T from 'prop-types';
import { BREAKPOINTS, getBpUpperLimit } from '../data/breakpoints.js';
import { BP_CONTEXTS, ID_DEFAULT } from './Context.js'; // TODO docs - also explain inclusive bp, i.e. s-m includes both s & m, whereas just s would be s, s

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
      lineNumber: 17
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
  q: T.oneOfType([T.string, T.number]),
  query: T.oneOfType([T.string, T.number]),
  identifier: T.string.isRequired,
  children: T.node.isRequired
};
Breakpoint.defaultProps = {
  q: null,
  // 'query' shorthand
  query: 0,
  identifier: ID_DEFAULT
};
export { Breakpoint };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiQlJFQUtQT0lOVFMiLCJnZXRCcFVwcGVyTGltaXQiLCJCUF9DT05URVhUUyIsIklEX0RFRkFVTFQiLCJCcmVha3BvaW50IiwicSIsInF1ZXJ5IiwiaWRlbnRpZmllciIsImNoaWxkcmVuIiwiYnBRdWVyeSIsInJlcGxhY2UiLCJzcGxpdCIsImxvd2VyIiwidXBwZXIiLCJDb250ZXh0IiwiYnAiLCJicFdpZHRoIiwibG93ZXJXaWR0aCIsInBhcnNlSW50IiwidXBwZXJXaWR0aCIsIkluZmluaXR5IiwibW9yZVRoYW5Mb3dlciIsImxlc3NUaGFuVXBwZXIiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLENBQVAsTUFBYyxZQUFkO0FBRUEsU0FBU0MsV0FBVCxFQUFzQkMsZUFBdEIsUUFBNkMsd0JBQTdDO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsVUFBdEIsUUFBd0MsY0FBeEMsQyxDQUVBOztBQUNBLFNBQVNDLFVBQVQsT0FBd0Q7QUFBQSxNQUFsQ0MsQ0FBa0MsUUFBbENBLENBQWtDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDdkQsTUFBTUMsT0FBTyxHQUFHSixDQUFDLElBQUlDLEtBQXJCLENBRHVELENBQzNCOztBQUQyQiw4QkFFaENHLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixHQUFoQixFQUFxQixFQUFyQixFQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsQ0FGZ0M7QUFBQTtBQUFBLE1BRWhEQyxLQUZnRDtBQUFBLE1BRXpDQyxLQUZ5Qzs7QUFJdkQsTUFBTUMsT0FBTyxHQUFHWixXQUFXLENBQUNLLFVBQUQsQ0FBM0I7QUFFQSxTQUNDLG9CQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csVUFBQVEsRUFBRSxFQUFJO0FBQ1AsUUFBTUMsT0FBTyxHQUFHaEIsV0FBVyxDQUFDZSxFQUFELENBQVgsSUFBbUIsQ0FBbkM7QUFDQSxRQUFNRSxVQUFVLEdBQUdqQixXQUFXLENBQUNZLEtBQUQsQ0FBWCxJQUFzQk0sUUFBUSxDQUFDTixLQUFELENBQWpELENBRk8sQ0FHUDtBQUNBOztBQUNBLFFBQU1PLFVBQVUsR0FBR2xCLGVBQWUsQ0FBQ1ksS0FBRCxDQUFmLElBQTBCSyxRQUFRLENBQUNMLEtBQUQsQ0FBbEMsSUFBNkNPLFFBQWhFO0FBRUEsUUFBTUMsYUFBYSxHQUFHTCxPQUFPLElBQUlDLFVBQWpDO0FBQ0EsUUFBTUssYUFBYSxHQUFHVCxLQUFLLElBQUksSUFBVCxJQUFpQkcsT0FBTyxHQUFHRyxVQUFqRDtBQUVBLFdBQVFFLGFBQWEsSUFBSUMsYUFBbEIsSUFBb0NkLFFBQTNDO0FBQ0EsR0FaRixDQUREO0FBZ0JBOztBQUFBO0FBRURKLFVBQVUsQ0FBQ21CLFNBQVgsR0FBdUI7QUFDdEJsQixFQUFBQSxDQUFDLEVBQUVOLENBQUMsQ0FBQ3lCLFNBQUYsQ0FBWSxDQUFDekIsQ0FBQyxDQUFDMEIsTUFBSCxFQUFXMUIsQ0FBQyxDQUFDMkIsTUFBYixDQUFaLENBRG1CO0FBRXRCcEIsRUFBQUEsS0FBSyxFQUFFUCxDQUFDLENBQUN5QixTQUFGLENBQVksQ0FBQ3pCLENBQUMsQ0FBQzBCLE1BQUgsRUFBVzFCLENBQUMsQ0FBQzJCLE1BQWIsQ0FBWixDQUZlO0FBR3RCbkIsRUFBQUEsVUFBVSxFQUFFUixDQUFDLENBQUMwQixNQUFGLENBQVNFLFVBSEM7QUFJdEJuQixFQUFBQSxRQUFRLEVBQUVULENBQUMsQ0FBQzZCLElBQUYsQ0FBT0Q7QUFKSyxDQUF2QjtBQU9BdkIsVUFBVSxDQUFDeUIsWUFBWCxHQUEwQjtBQUN6QnhCLEVBQUFBLENBQUMsRUFBRSxJQURzQjtBQUNoQjtBQUNUQyxFQUFBQSxLQUFLLEVBQUUsQ0FGa0I7QUFHekJDLEVBQUFBLFVBQVUsRUFBRUo7QUFIYSxDQUExQjtBQU1BLFNBQVNDLFVBQVQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVCBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQlJFQUtQT0lOVFMsIGdldEJwVXBwZXJMaW1pdCB9IGZyb20gJy4uL2RhdGEvYnJlYWtwb2ludHMuanMnO1xuaW1wb3J0IHsgQlBfQ09OVEVYVFMsIElEX0RFRkFVTFQgfSBmcm9tICcuL0NvbnRleHQuanMnO1xuXG4vLyBUT0RPIGRvY3MgLSBhbHNvIGV4cGxhaW4gaW5jbHVzaXZlIGJwLCBpLmUuIHMtbSBpbmNsdWRlcyBib3RoIHMgJiBtLCB3aGVyZWFzIGp1c3QgcyB3b3VsZCBiZSBzLCBzXG5mdW5jdGlvbiBCcmVha3BvaW50KHsgcSwgcXVlcnksIGlkZW50aWZpZXIsIGNoaWxkcmVuIH0pIHtcblx0Y29uc3QgYnBRdWVyeSA9IHEgfHwgcXVlcnk7IC8vIEFnZ3JlZ2F0ZSBxdWVyeSBzaG9ydGhhbmRcblx0Y29uc3QgW2xvd2VyLCB1cHBlcl0gPSBicFF1ZXJ5LnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoJywnKTtcblxuXHRjb25zdCBDb250ZXh0ID0gQlBfQ09OVEVYVFNbaWRlbnRpZmllcl07XG5cblx0cmV0dXJuIChcblx0XHQ8Q29udGV4dC5Db25zdW1lcj5cblx0XHRcdHsgYnAgPT4ge1xuXHRcdFx0XHRjb25zdCBicFdpZHRoID0gQlJFQUtQT0lOVFNbYnBdIHx8IDA7XG5cdFx0XHRcdGNvbnN0IGxvd2VyV2lkdGggPSBCUkVBS1BPSU5UU1tsb3dlcl0gfHwgcGFyc2VJbnQobG93ZXIpO1xuXHRcdFx0XHQvLyBHZXQgdXBwZXIgYm91bmQgKGkuZS4gbmV4dCBicmVha3BvaW50KSwgb3IgcGFyc2UgYXMgaW50LCBvciBmYWlsaW5nXG5cdFx0XHRcdC8vIHRoYXQgYW5kIG5vIHRocmVzaG9sZCBoYXMgYmVlbiBzcGVjaWZpZWQsIHVzZSBJbmZpbml0eSBhcyB1cHBlciBib3VuZFxuXHRcdFx0XHRjb25zdCB1cHBlcldpZHRoID0gZ2V0QnBVcHBlckxpbWl0KHVwcGVyKSB8fCBwYXJzZUludCh1cHBlcikgfHwgSW5maW5pdHk7XG5cblx0XHRcdFx0Y29uc3QgbW9yZVRoYW5Mb3dlciA9IGJwV2lkdGggPj0gbG93ZXJXaWR0aDtcblx0XHRcdFx0Y29uc3QgbGVzc1RoYW5VcHBlciA9IHVwcGVyID09IG51bGwgfHwgYnBXaWR0aCA8IHVwcGVyV2lkdGg7XG5cblx0XHRcdFx0cmV0dXJuIChtb3JlVGhhbkxvd2VyICYmIGxlc3NUaGFuVXBwZXIpICYmIGNoaWxkcmVuO1xuXHRcdFx0fSB9XG5cdFx0PC9Db250ZXh0LkNvbnN1bWVyPlxuXHQpO1xufTtcblxuQnJlYWtwb2ludC5wcm9wVHlwZXMgPSB7XG5cdHE6IFQub25lT2ZUeXBlKFtULnN0cmluZywgVC5udW1iZXJdKSxcblx0cXVlcnk6IFQub25lT2ZUeXBlKFtULnN0cmluZywgVC5udW1iZXJdKSxcblx0aWRlbnRpZmllcjogVC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0Y2hpbGRyZW46IFQubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuQnJlYWtwb2ludC5kZWZhdWx0UHJvcHMgPSB7XG5cdHE6IG51bGwsIC8vICdxdWVyeScgc2hvcnRoYW5kXG5cdHF1ZXJ5OiAwLFxuXHRpZGVudGlmaWVyOiBJRF9ERUZBVUxULFxufTtcblxuZXhwb3J0IHsgQnJlYWtwb2ludCB9O1xuIl19