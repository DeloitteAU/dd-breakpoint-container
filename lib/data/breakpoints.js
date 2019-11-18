"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-nan");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.number.is-nan");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.parse-int");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBpUpperLimit = getBpUpperLimit;
exports.resolveBp = resolveBp;
exports.BREAKPOINTS = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2JyZWFrcG9pbnRzLnRzIl0sIm5hbWVzIjpbIkJSRUFLUE9JTlRTIiwibm9uZSIsInh4eHMiLCJ4eHMiLCJ4cyIsInMiLCJtIiwibCIsInhsIiwieHhsIiwieHh4bCIsImdldEJwVXBwZXJMaW1pdCIsImJwTmFtZSIsIk51bWJlciIsImlzTmFOIiwicGFyc2VJbnQiLCJicEtleXMiLCJPYmplY3QiLCJrZXlzIiwibmV4dEhpZ2hlc3RCcEluZGV4IiwiaW5kZXhPZiIsIm5leHRIaWdoZXN0QnBXaWR0aCIsImxlbmd0aCIsIkluZmluaXR5IiwicmVzb2x2ZUJwIiwicXVlcnkiLCJicCIsInBhcnNlQnAiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzcGxpdCIsImxvd2VyIiwidXBwZXIiLCJsb3dlcldpZHRoIiwidXBwZXJXaWR0aCIsImJwV2lkdGgiLCJjb25zb2xlIiwid2FybiIsIm1vcmVUaGFuTG93ZXIiLCJsZXNzVGhhblVwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxXQUF3QyxHQUFHO0FBQ3ZEQyxFQUFBQSxJQUFJLEVBQUUsQ0FEaUQ7QUFFdkRDLEVBQUFBLElBQUksRUFBRSxHQUZpRDtBQUd2REMsRUFBQUEsR0FBRyxFQUFFLEdBSGtEO0FBSXZEQyxFQUFBQSxFQUFFLEVBQUUsR0FKbUQ7QUFLdkRDLEVBQUFBLENBQUMsRUFBRSxHQUxvRDtBQU12REMsRUFBQUEsQ0FBQyxFQUFFLEdBTm9EO0FBT3ZEQyxFQUFBQSxDQUFDLEVBQUUsSUFQb0Q7QUFRdkRDLEVBQUFBLEVBQUUsRUFBRSxJQVJtRDtBQVN2REMsRUFBQUEsR0FBRyxFQUFFLElBVGtEO0FBVXZEQyxFQUFBQSxJQUFJLEVBQUU7QUFWaUQsQ0FBakQ7QUFhUDs7Ozs7Ozs7O0FBTU8sU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBeUM7QUFDL0MsTUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsUUFBUSxDQUFDSCxNQUFELENBQXJCLENBQUwsRUFBcUM7QUFDcEMsV0FBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWxCLFdBQVosQ0FBZjtBQUNBLE1BQU1tQixrQkFBa0IsR0FBR0gsTUFBTSxDQUFDSSxPQUFQLENBQWVSLE1BQWYsSUFBeUIsQ0FBcEQsQ0FOK0MsQ0FRL0M7QUFDQTs7QUFDQSxNQUFNUyxrQkFBa0IsR0FDdkJGLGtCQUFrQixLQUFLSCxNQUFNLENBQUNNLE1BQVAsR0FBZ0IsQ0FBdkMsR0FDR3RCLFdBQVcsQ0FBQ2dCLE1BQU0sQ0FBQ0csa0JBQUQsQ0FBUCxDQURkLEdBRUdJLFFBSEo7QUFLQSxTQUFPRixrQkFBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7QUFRTyxTQUFTRyxTQUFULENBQW1CQyxLQUFuQixFQUFrQ0MsRUFBbEMsRUFBdUQ7QUFDN0Q7QUFDQTtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNELEVBQUQ7QUFBQSxXQUNmMUIsV0FBVyxDQUFDMEIsRUFBRCxDQUFYLElBQW1CLElBQW5CLEdBQTBCMUIsV0FBVyxDQUFDMEIsRUFBRCxDQUFyQyxHQUE0Q1gsUUFBUSxDQUFDVyxFQUFELENBRHJDO0FBQUEsR0FBaEIsQ0FINkQsQ0FNN0Q7QUFDQTs7O0FBUDZELDhCQVF0Q0QsS0FBSyxDQUMxQkcsUUFEcUIsR0FFckJDLE9BRnFCLENBRWIsTUFGYSxFQUVMLEdBRkssRUFHckJDLEtBSHFCLENBR2YsR0FIZSxDQVJzQztBQUFBO0FBQUEsTUFRdERDLEtBUnNEO0FBQUEsTUFRL0NDLEtBUitDLDhCQWE3RDs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHTixPQUFPLENBQUNJLEtBQUQsQ0FBMUIsQ0FkNkQsQ0FnQjdEO0FBQ0E7O0FBQ0EsTUFBTUcsVUFBVSxHQUFHdkIsZUFBZSxDQUFDcUIsS0FBRCxDQUFmLElBQTBCakIsUUFBUSxDQUFDaUIsS0FBRCxDQUFsQyxJQUE2Q1QsUUFBaEUsQ0FsQjZELENBb0I3RDs7QUFDQSxNQUFNWSxPQUFPLEdBQUdSLE9BQU8sQ0FBQ0QsRUFBRCxDQUF2QixDQXJCNkQsQ0F1QjdEO0FBQ0E7O0FBQ0EsTUFBSSxDQUFDTyxVQUFELElBQWVBLFVBQVUsS0FBSyxDQUFsQyxFQUFxQztBQUNwQ0csSUFBQUEsT0FBTyxDQUFDQyxJQUFSLHFDQUM4QlosS0FEOUI7QUFHQSxXQUFPLEtBQVA7QUFDQSxHQUxELE1BS08sSUFBSSxDQUFDVSxPQUFELElBQVlBLE9BQU8sS0FBSyxDQUE1QixFQUErQjtBQUNyQ0MsSUFBQUEsT0FBTyxDQUFDQyxJQUFSLHFDQUM4QlgsRUFEOUI7QUFHQSxXQUFPLEtBQVA7QUFDQSxHQW5DNEQsQ0FxQzdEOzs7QUFDQSxNQUFNWSxhQUFhLEdBQUdILE9BQU8sSUFBSUYsVUFBakM7QUFDQSxNQUFNTSxhQUFhLEdBQUdKLE9BQU8sR0FBR0QsVUFBaEM7QUFFQSxTQUFPSSxhQUFhLElBQUlDLGFBQXhCO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOT1RFOiBUaGVzZSBrZXk6dmFsdWUgcGFpcnMgbWlycm9yIHRob3NlIGluIHRoaXMgbW9kdWxlJ3MgU0NTU1xuLy8gSWYgeW91J3JlIGdvaW5nIHRvIGFkZCBvciBjaGFuZ2UgYnBzLCBjaGVjayB0aGUgbm90ZXMgbmVhciB0aGUgdG9wIG9mIHRoZSBTQ1NTIGZpbGVcbmV4cG9ydCBjb25zdCBCUkVBS1BPSU5UUzogeyBbdmFsdWU6IHN0cmluZ106IG51bWJlciB9ID0ge1xuXHRub25lOiAwLFxuXHR4eHhzOiAzMjAsXG5cdHh4czogMzU5LFxuXHR4czogNDgwLFxuXHRzOiA2NDAsXG5cdG06IDc2OCxcblx0bDogMTAyNCxcblx0eGw6IDEyNDQsXG5cdHh4bDogMTQxMCxcblx0eHh4bDogMTY5MCxcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYnJlYWtwb2ludCAndXBwZXItbGltaXQnIHdpZHRoIGluIHBpeGVscyxcbiAqIHdoaWNoIGlzIGVzc2VudGlhbGx5IHRoZSB3aWR0aCBvZiB0aGUgbmV4dCBicmVha3BvaW50LlxuICpcbiAqIEBwYXJhbSBicE5hbWUgLSBOYW1lZCBicmVha3BvaW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcFVwcGVyTGltaXQoYnBOYW1lOiBzdHJpbmcpIHtcblx0aWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VJbnQoYnBOYW1lKSkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGJwS2V5cyA9IE9iamVjdC5rZXlzKEJSRUFLUE9JTlRTKTtcblx0Y29uc3QgbmV4dEhpZ2hlc3RCcEluZGV4ID0gYnBLZXlzLmluZGV4T2YoYnBOYW1lKSArIDE7XG5cblx0Ly8gQ2hlY2sgZWRnZS1jYXNlIGZvciB3aGVuIHRhcmdldCBicmVha3BvaW50IGlzIHRoZSBsYXN0IGluIHRoZSBhcnJheSwgaW4gd2hpY2hcblx0Ly8gY2FzZSBJbmZpbml0eSBpcyBhbiBhY2NlcHRhYmxlIHVwcGVyLWJvdW5kLCBzaW5jZSB0aGVyZSBpcyBubyB0aHJlc2hvbGRcblx0Y29uc3QgbmV4dEhpZ2hlc3RCcFdpZHRoID1cblx0XHRuZXh0SGlnaGVzdEJwSW5kZXggIT09IGJwS2V5cy5sZW5ndGggLSAxXG5cdFx0XHQ/IEJSRUFLUE9JTlRTW2JwS2V5c1tuZXh0SGlnaGVzdEJwSW5kZXhdXVxuXHRcdFx0OiBJbmZpbml0eTtcblxuXHRyZXR1cm4gbmV4dEhpZ2hlc3RCcFdpZHRoO1xufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgYnJlYWtwb2ludCBxdWVyeSBhZ2FpbnN0IGEgc3BlY2lmaWVkIGJyZWFrcG9pbnQgb3IgdmFsdWUuIFF1ZXJ5XG4gKiBzdHJpbmcgbXVzdCBiZSBpbiBmb3JtYXQgYCR7bG93ZXJ9LCAke3VwcGVyfWAgKGNvbW1hIHNlcGFyYXRlZCksIHdoZXJlIGxvd2VyL3VwcGVyXG4gKiBhcmUgZWl0aGVyIG5hbWVkIGJyZWFrcG9pbnRzIG9yIHB4IHZhbHVlcy4gVXBwZXIgaXMgb3B0aW9uYWwuXG4gKlxuICogQHBhcmFtIHF1ZXJ5IC0gQnJlYWtwb2ludCBxdWVyeSBzdHJpbmcuXG4gKiBAcGFyYW0gYnAgLSBCcmVha3BvaW50IG5hbWUsIG9yIHB4IHNpemUgdG8gcmVzb2x2ZSBxdWVyeSBhZ2FpbnN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUJwKHF1ZXJ5OiBzdHJpbmcsIGJwOiBzdHJpbmcgfCBudW1iZXIpIHtcblx0Ly8gSGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIGJyZWFrcG9pbnQgaW50byBwaXhlbHNcblx0Ly8gTm9uLXN0cmljdCBudWxsIGNoZWNrIHRvIGF2b2lkICcwJyBiZWluZyBldmFsdWF0ZWQgYXMgZmFsc2V5XG5cdGNvbnN0IHBhcnNlQnAgPSAoYnA6IHN0cmluZyB8IG51bWJlcikgPT5cblx0XHRCUkVBS1BPSU5UU1ticF0gIT0gbnVsbCA/IEJSRUFLUE9JTlRTW2JwXSA6IHBhcnNlSW50KGJwIGFzIHN0cmluZyk7XG5cblx0Ly8gRXh0cmFjdCBsb3dlciBhbmQgdXBwZXItYm91bmRzIGZyb20gcXVlcnlcblx0Ly8gTm9ybWFsaXNlIHN0cmluZyBhbmQgY29tbWEvd2hpdGVzcGFjZSBzZXBhcmF0aW9uXG5cdGNvbnN0IFtsb3dlciwgdXBwZXJdID0gcXVlcnlcblx0XHQudG9TdHJpbmcoKVxuXHRcdC5yZXBsYWNlKC8sP1xccy8sICcsJylcblx0XHQuc3BsaXQoJywnKTtcblxuXHQvLyBMb3dlci1ib3VuZCBzaG91bGQgYWx3YXlzIGV4aXN0OyBlaXRoZXIgYXMgbmFtZWQgYnJlYWtwb2ludCBvciBweCB2YWx1ZVxuXHRjb25zdCBsb3dlcldpZHRoID0gcGFyc2VCcChsb3dlcik7XG5cblx0Ly8gR2V0IHVwcGVyLWJvdW5kIChpLmUuIG5leHQgYnJlYWtwb2ludCB0aHJlc2hvbGQpLCBvciBwYXJzZSBhcyBpbnQsXG5cdC8vIG9yLCBmYWlsaW5nIHRoYXQsIHVzZSBJbmZpbml0eSBhcyBhIGZhbGxiYWNrXG5cdGNvbnN0IHVwcGVyV2lkdGggPSBnZXRCcFVwcGVyTGltaXQodXBwZXIpIHx8IHBhcnNlSW50KHVwcGVyKSB8fCBJbmZpbml0eTtcblxuXHQvLyBXaWR0aCBvZiBjdXJyZW50IGJyZWFrcG9pbnRcblx0Y29uc3QgYnBXaWR0aCA9IHBhcnNlQnAoYnApO1xuXG5cdC8vIFZhbGlkYXRlIHF1ZXJ5IGJ5IGNoZWNraW5nIGlmIGxvd2VyIGJvdW5kIGV4aXN0c1xuXHQvLyBBY2NvdW50IGZvciAnMCcgbG93ZXJXaWR0aCwgd2hpY2ggd291bGQgb3RoZXJ3aXNlIGV2YWx1YXRlIGFzIGZhbHN5XG5cdGlmICghbG93ZXJXaWR0aCAmJiBsb3dlcldpZHRoICE9PSAwKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YEludmFsaWQgYnJlYWtwb2ludCBxdWVyeSAnJHtxdWVyeX0nIHByb3ZpZGVkLiBRdWVyeSBtdXN0IGJlIGluIGZvcm1hdCBcXGBcXCR7bG93ZXJ9LCBcXCR7dXBwZXJ9XFxgIChjb21tYSBzZXBhcmF0ZWQpLCB3aGVyZSBsb3dlci91cHBlciBhcmUgZWl0aGVyIG5hbWVkIGJyZWFrcG9pbnRzIG9yIHB4IHZhbHVlcy4gVXBwZXIgaXMgb3B0aW9uYWwuYCxcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBlbHNlIGlmICghYnBXaWR0aCAmJiBicFdpZHRoICE9PSAwKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YEludmFsaWQgYnJlYWtwb2ludCB2YWx1ZSAnJHticH0nIHByb3ZpZGVkLiBCcmVha3BvaW50IHNob3VsZCBlaXRoZXIgYmUgbmFtZWQsIG9yIGEgcGl4ZWwgdmFsdWUuYCxcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE5vdGUgdGhhdCBsb3dlci1ib3VuZCBpcyBpbmNsdXNpdmVcblx0Y29uc3QgbW9yZVRoYW5Mb3dlciA9IGJwV2lkdGggPj0gbG93ZXJXaWR0aDtcblx0Y29uc3QgbGVzc1RoYW5VcHBlciA9IGJwV2lkdGggPCB1cHBlcldpZHRoO1xuXG5cdHJldHVybiBtb3JlVGhhbkxvd2VyICYmIGxlc3NUaGFuVXBwZXI7XG59XG4iXX0=