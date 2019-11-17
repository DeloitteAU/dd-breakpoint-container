"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBpUpperLimit = getBpUpperLimit;
exports.resolveBp = resolveBp;
exports.BREAKPOINTS = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.number.is-nan");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// NOTE: These key:value pairs mirror those in this module's SCSS
// If you're going to add or change bps, check the notes near the top of the SCSS file
var BREAKPOINTS = {
  none: 0,
  xxxs: 320,
  xxs: 359,
  xs: 480,
  s: 640,
  m: 768,
  l: 1024,
  xl: 1244,
  xxl: 1410,
  xxxl: 1690
};
/**
 * Returns the breakpoint 'upper-limit' width in pixels,
 * which is essentially the width of the next breakpoint.
 *
 * @param bpName - Named breakpoint
 */

exports.BREAKPOINTS = BREAKPOINTS;

function getBpUpperLimit(bpName) {
  if (!Number.isNaN(parseInt(bpName))) {
    return null;
  }

  var bpKeys = Object.keys(BREAKPOINTS);
  var nextHighestBpIndex = bpKeys.indexOf(bpName) + 1; // Check edge-case for when target breakpoint is the last in the array, in which
  // case Infinity is an acceptable upper-bound, since there is no threshold

  var nextHighestBpWidth = nextHighestBpIndex !== bpKeys.length - 1 ? BREAKPOINTS[bpKeys[nextHighestBpIndex]] : Infinity;
  return nextHighestBpWidth;
}
/**
 * Resolves a breakpoint query against a specified breakpoint or value. Query
 * string must be in format `${lower}, ${upper}` (comma separated), where lower/upper
 * are either named breakpoints or px values. Upper is optional.
 *
 * @param query - Breakpoint query string.
 * @param bp - Breakpoint name, or px size to resolve query against.
 */


function resolveBp(query, bp) {
  // Helper function to parse breakpoint into pixels
  // Non-strict null check to avoid '0' being evaluated as falsey
  var parseBp = function parseBp(bp) {
    return BREAKPOINTS[bp] != null ? BREAKPOINTS[bp] : parseInt(bp);
  }; // Extract lower and upper-bounds from query
  // Normalise string and comma/whitespace separation


  var _query$toString$repla = query.toString().replace(/,?\s/, ',').split(','),
      _query$toString$repla2 = _slicedToArray(_query$toString$repla, 2),
      lower = _query$toString$repla2[0],
      upper = _query$toString$repla2[1]; // Lower-bound should always exist; either as named breakpoint or px value


  var lowerWidth = parseBp(lower); // Get upper-bound (i.e. next breakpoint threshold), or parse as int,
  // or, failing that, use Infinity as a fallback

  var upperWidth = getBpUpperLimit(upper) || parseInt(upper) || Infinity; // Width of current breakpoint

  var bpWidth = parseBp(bp); // Validate query by checking if lower bound exists
  // Account for '0' lowerWidth, which would otherwise evaluate as falsy

  if (!lowerWidth && lowerWidth !== 0) {
    console.warn("Invalid breakpoint query '".concat(query, "' provided. Query must be in format `${lower}, ${upper}` (comma separated), where lower/upper are either named breakpoints or px values. Upper is optional."));
    return false;
  } else if (!bpWidth && bpWidth !== 0) {
    console.warn("Invalid breakpoint value '".concat(bp, "' provided. Breakpoint should either be named, or a pixel value."));
    return false;
  } // Note that lower-bound is inclusive


  var moreThanLower = bpWidth >= lowerWidth;
  var lessThanUpper = bpWidth < upperWidth;
  return moreThanLower && lessThanUpper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2JyZWFrcG9pbnRzLnRzIl0sIm5hbWVzIjpbIkJSRUFLUE9JTlRTIiwibm9uZSIsInh4eHMiLCJ4eHMiLCJ4cyIsInMiLCJtIiwibCIsInhsIiwieHhsIiwieHh4bCIsImdldEJwVXBwZXJMaW1pdCIsImJwTmFtZSIsIk51bWJlciIsImlzTmFOIiwicGFyc2VJbnQiLCJicEtleXMiLCJPYmplY3QiLCJrZXlzIiwibmV4dEhpZ2hlc3RCcEluZGV4IiwiaW5kZXhPZiIsIm5leHRIaWdoZXN0QnBXaWR0aCIsImxlbmd0aCIsIkluZmluaXR5IiwicmVzb2x2ZUJwIiwicXVlcnkiLCJicCIsInBhcnNlQnAiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzcGxpdCIsImxvd2VyIiwidXBwZXIiLCJsb3dlcldpZHRoIiwidXBwZXJXaWR0aCIsImJwV2lkdGgiLCJjb25zb2xlIiwid2FybiIsIm1vcmVUaGFuTG93ZXIiLCJsZXNzVGhhblVwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLFdBQXdDLEdBQUc7QUFDdkRDLEVBQUFBLElBQUksRUFBRSxDQURpRDtBQUV2REMsRUFBQUEsSUFBSSxFQUFFLEdBRmlEO0FBR3ZEQyxFQUFBQSxHQUFHLEVBQUUsR0FIa0Q7QUFJdkRDLEVBQUFBLEVBQUUsRUFBRSxHQUptRDtBQUt2REMsRUFBQUEsQ0FBQyxFQUFFLEdBTG9EO0FBTXZEQyxFQUFBQSxDQUFDLEVBQUUsR0FOb0Q7QUFPdkRDLEVBQUFBLENBQUMsRUFBRSxJQVBvRDtBQVF2REMsRUFBQUEsRUFBRSxFQUFFLElBUm1EO0FBU3ZEQyxFQUFBQSxHQUFHLEVBQUUsSUFUa0Q7QUFVdkRDLEVBQUFBLElBQUksRUFBRTtBQVZpRCxDQUFqRDtBQWFQOzs7Ozs7Ozs7QUFNTyxTQUFTQyxlQUFULENBQXlCQyxNQUF6QixFQUF5QztBQUMvQyxNQUFJLENBQUNDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxRQUFRLENBQUNILE1BQUQsQ0FBckIsQ0FBTCxFQUFxQztBQUNwQyxXQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFNSSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZbEIsV0FBWixDQUFmO0FBQ0EsTUFBTW1CLGtCQUFrQixHQUFHSCxNQUFNLENBQUNJLE9BQVAsQ0FBZVIsTUFBZixJQUF5QixDQUFwRCxDQU4rQyxDQVEvQztBQUNBOztBQUNBLE1BQU1TLGtCQUFrQixHQUN2QkYsa0JBQWtCLEtBQUtILE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQUF2QyxHQUNHdEIsV0FBVyxDQUFDZ0IsTUFBTSxDQUFDRyxrQkFBRCxDQUFQLENBRGQsR0FFR0ksUUFISjtBQUtBLFNBQU9GLGtCQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7OztBQVFPLFNBQVNHLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQWtDQyxFQUFsQyxFQUF1RDtBQUM3RDtBQUNBO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0QsRUFBRDtBQUFBLFdBQ2YxQixXQUFXLENBQUMwQixFQUFELENBQVgsSUFBbUIsSUFBbkIsR0FBMEIxQixXQUFXLENBQUMwQixFQUFELENBQXJDLEdBQTRDWCxRQUFRLENBQUNXLEVBQUQsQ0FEckM7QUFBQSxHQUFoQixDQUg2RCxDQU03RDtBQUNBOzs7QUFQNkQsOEJBUXRDRCxLQUFLLENBQzFCRyxRQURxQixHQUVyQkMsT0FGcUIsQ0FFYixNQUZhLEVBRUwsR0FGSyxFQUdyQkMsS0FIcUIsQ0FHZixHQUhlLENBUnNDO0FBQUE7QUFBQSxNQVF0REMsS0FSc0Q7QUFBQSxNQVEvQ0MsS0FSK0MsOEJBYTdEOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUdOLE9BQU8sQ0FBQ0ksS0FBRCxDQUExQixDQWQ2RCxDQWdCN0Q7QUFDQTs7QUFDQSxNQUFNRyxVQUFVLEdBQUd2QixlQUFlLENBQUNxQixLQUFELENBQWYsSUFBMEJqQixRQUFRLENBQUNpQixLQUFELENBQWxDLElBQTZDVCxRQUFoRSxDQWxCNkQsQ0FvQjdEOztBQUNBLE1BQU1ZLE9BQU8sR0FBR1IsT0FBTyxDQUFDRCxFQUFELENBQXZCLENBckI2RCxDQXVCN0Q7QUFDQTs7QUFDQSxNQUFJLENBQUNPLFVBQUQsSUFBZUEsVUFBVSxLQUFLLENBQWxDLEVBQXFDO0FBQ3BDRyxJQUFBQSxPQUFPLENBQUNDLElBQVIscUNBQzhCWixLQUQ5QjtBQUdBLFdBQU8sS0FBUDtBQUNBLEdBTEQsTUFLTyxJQUFJLENBQUNVLE9BQUQsSUFBWUEsT0FBTyxLQUFLLENBQTVCLEVBQStCO0FBQ3JDQyxJQUFBQSxPQUFPLENBQUNDLElBQVIscUNBQzhCWCxFQUQ5QjtBQUdBLFdBQU8sS0FBUDtBQUNBLEdBbkM0RCxDQXFDN0Q7OztBQUNBLE1BQU1ZLGFBQWEsR0FBR0gsT0FBTyxJQUFJRixVQUFqQztBQUNBLE1BQU1NLGFBQWEsR0FBR0osT0FBTyxHQUFHRCxVQUFoQztBQUVBLFNBQU9JLGFBQWEsSUFBSUMsYUFBeEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5PVEU6IFRoZXNlIGtleTp2YWx1ZSBwYWlycyBtaXJyb3IgdGhvc2UgaW4gdGhpcyBtb2R1bGUncyBTQ1NTXG4vLyBJZiB5b3UncmUgZ29pbmcgdG8gYWRkIG9yIGNoYW5nZSBicHMsIGNoZWNrIHRoZSBub3RlcyBuZWFyIHRoZSB0b3Agb2YgdGhlIFNDU1MgZmlsZVxuZXhwb3J0IGNvbnN0IEJSRUFLUE9JTlRTOiB7IFt2YWx1ZTogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG5cdG5vbmU6IDAsXG5cdHh4eHM6IDMyMCxcblx0eHhzOiAzNTksXG5cdHhzOiA0ODAsXG5cdHM6IDY0MCxcblx0bTogNzY4LFxuXHRsOiAxMDI0LFxuXHR4bDogMTI0NCxcblx0eHhsOiAxNDEwLFxuXHR4eHhsOiAxNjkwLFxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBicmVha3BvaW50ICd1cHBlci1saW1pdCcgd2lkdGggaW4gcGl4ZWxzLFxuICogd2hpY2ggaXMgZXNzZW50aWFsbHkgdGhlIHdpZHRoIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQuXG4gKlxuICogQHBhcmFtIGJwTmFtZSAtIE5hbWVkIGJyZWFrcG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJwVXBwZXJMaW1pdChicE5hbWU6IHN0cmluZykge1xuXHRpZiAoIU51bWJlci5pc05hTihwYXJzZUludChicE5hbWUpKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgYnBLZXlzID0gT2JqZWN0LmtleXMoQlJFQUtQT0lOVFMpO1xuXHRjb25zdCBuZXh0SGlnaGVzdEJwSW5kZXggPSBicEtleXMuaW5kZXhPZihicE5hbWUpICsgMTtcblxuXHQvLyBDaGVjayBlZGdlLWNhc2UgZm9yIHdoZW4gdGFyZ2V0IGJyZWFrcG9pbnQgaXMgdGhlIGxhc3QgaW4gdGhlIGFycmF5LCBpbiB3aGljaFxuXHQvLyBjYXNlIEluZmluaXR5IGlzIGFuIGFjY2VwdGFibGUgdXBwZXItYm91bmQsIHNpbmNlIHRoZXJlIGlzIG5vIHRocmVzaG9sZFxuXHRjb25zdCBuZXh0SGlnaGVzdEJwV2lkdGggPVxuXHRcdG5leHRIaWdoZXN0QnBJbmRleCAhPT0gYnBLZXlzLmxlbmd0aCAtIDFcblx0XHRcdD8gQlJFQUtQT0lOVFNbYnBLZXlzW25leHRIaWdoZXN0QnBJbmRleF1dXG5cdFx0XHQ6IEluZmluaXR5O1xuXG5cdHJldHVybiBuZXh0SGlnaGVzdEJwV2lkdGg7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBicmVha3BvaW50IHF1ZXJ5IGFnYWluc3QgYSBzcGVjaWZpZWQgYnJlYWtwb2ludCBvciB2YWx1ZS4gUXVlcnlcbiAqIHN0cmluZyBtdXN0IGJlIGluIGZvcm1hdCBgJHtsb3dlcn0sICR7dXBwZXJ9YCAoY29tbWEgc2VwYXJhdGVkKSwgd2hlcmUgbG93ZXIvdXBwZXJcbiAqIGFyZSBlaXRoZXIgbmFtZWQgYnJlYWtwb2ludHMgb3IgcHggdmFsdWVzLiBVcHBlciBpcyBvcHRpb25hbC5cbiAqXG4gKiBAcGFyYW0gcXVlcnkgLSBCcmVha3BvaW50IHF1ZXJ5IHN0cmluZy5cbiAqIEBwYXJhbSBicCAtIEJyZWFrcG9pbnQgbmFtZSwgb3IgcHggc2l6ZSB0byByZXNvbHZlIHF1ZXJ5IGFnYWluc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQnAocXVlcnk6IHN0cmluZywgYnA6IHN0cmluZyB8IG51bWJlcikge1xuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgYnJlYWtwb2ludCBpbnRvIHBpeGVsc1xuXHQvLyBOb24tc3RyaWN0IG51bGwgY2hlY2sgdG8gYXZvaWQgJzAnIGJlaW5nIGV2YWx1YXRlZCBhcyBmYWxzZXlcblx0Y29uc3QgcGFyc2VCcCA9IChicDogc3RyaW5nIHwgbnVtYmVyKSA9PlxuXHRcdEJSRUFLUE9JTlRTW2JwXSAhPSBudWxsID8gQlJFQUtQT0lOVFNbYnBdIDogcGFyc2VJbnQoYnAgYXMgc3RyaW5nKTtcblxuXHQvLyBFeHRyYWN0IGxvd2VyIGFuZCB1cHBlci1ib3VuZHMgZnJvbSBxdWVyeVxuXHQvLyBOb3JtYWxpc2Ugc3RyaW5nIGFuZCBjb21tYS93aGl0ZXNwYWNlIHNlcGFyYXRpb25cblx0Y29uc3QgW2xvd2VyLCB1cHBlcl0gPSBxdWVyeVxuXHRcdC50b1N0cmluZygpXG5cdFx0LnJlcGxhY2UoLyw/XFxzLywgJywnKVxuXHRcdC5zcGxpdCgnLCcpO1xuXG5cdC8vIExvd2VyLWJvdW5kIHNob3VsZCBhbHdheXMgZXhpc3Q7IGVpdGhlciBhcyBuYW1lZCBicmVha3BvaW50IG9yIHB4IHZhbHVlXG5cdGNvbnN0IGxvd2VyV2lkdGggPSBwYXJzZUJwKGxvd2VyKTtcblxuXHQvLyBHZXQgdXBwZXItYm91bmQgKGkuZS4gbmV4dCBicmVha3BvaW50IHRocmVzaG9sZCksIG9yIHBhcnNlIGFzIGludCxcblx0Ly8gb3IsIGZhaWxpbmcgdGhhdCwgdXNlIEluZmluaXR5IGFzIGEgZmFsbGJhY2tcblx0Y29uc3QgdXBwZXJXaWR0aCA9IGdldEJwVXBwZXJMaW1pdCh1cHBlcikgfHwgcGFyc2VJbnQodXBwZXIpIHx8IEluZmluaXR5O1xuXG5cdC8vIFdpZHRoIG9mIGN1cnJlbnQgYnJlYWtwb2ludFxuXHRjb25zdCBicFdpZHRoID0gcGFyc2VCcChicCk7XG5cblx0Ly8gVmFsaWRhdGUgcXVlcnkgYnkgY2hlY2tpbmcgaWYgbG93ZXIgYm91bmQgZXhpc3RzXG5cdC8vIEFjY291bnQgZm9yICcwJyBsb3dlcldpZHRoLCB3aGljaCB3b3VsZCBvdGhlcndpc2UgZXZhbHVhdGUgYXMgZmFsc3lcblx0aWYgKCFsb3dlcldpZHRoICYmIGxvd2VyV2lkdGggIT09IDApIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRgSW52YWxpZCBicmVha3BvaW50IHF1ZXJ5ICcke3F1ZXJ5fScgcHJvdmlkZWQuIFF1ZXJ5IG11c3QgYmUgaW4gZm9ybWF0IFxcYFxcJHtsb3dlcn0sIFxcJHt1cHBlcn1cXGAgKGNvbW1hIHNlcGFyYXRlZCksIHdoZXJlIGxvd2VyL3VwcGVyIGFyZSBlaXRoZXIgbmFtZWQgYnJlYWtwb2ludHMgb3IgcHggdmFsdWVzLiBVcHBlciBpcyBvcHRpb25hbC5gLFxuXHRcdCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGVsc2UgaWYgKCFicFdpZHRoICYmIGJwV2lkdGggIT09IDApIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRgSW52YWxpZCBicmVha3BvaW50IHZhbHVlICcke2JwfScgcHJvdmlkZWQuIEJyZWFrcG9pbnQgc2hvdWxkIGVpdGhlciBiZSBuYW1lZCwgb3IgYSBwaXhlbCB2YWx1ZS5gLFxuXHRcdCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gTm90ZSB0aGF0IGxvd2VyLWJvdW5kIGlzIGluY2x1c2l2ZVxuXHRjb25zdCBtb3JlVGhhbkxvd2VyID0gYnBXaWR0aCA+PSBsb3dlcldpZHRoO1xuXHRjb25zdCBsZXNzVGhhblVwcGVyID0gYnBXaWR0aCA8IHVwcGVyV2lkdGg7XG5cblx0cmV0dXJuIG1vcmVUaGFuTG93ZXIgJiYgbGVzc1RoYW5VcHBlcjtcbn1cbiJdfQ==