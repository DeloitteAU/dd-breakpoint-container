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