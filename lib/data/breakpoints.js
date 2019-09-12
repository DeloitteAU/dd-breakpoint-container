import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.array.is-array";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.date.to-string";
import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.regexp.split";
import "core-js/modules/es6.array.index-of";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.number.constructor";
import "core-js/modules/es6.number.is-nan";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// NOTE: These key:value pairs mirror those in this module's SCSS
// If you're going to add or change bps, check the notes near the top of the SCSS file
export var BREAKPOINTS = {
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
 * @param {string} bp
 * @returns {number}
 */

export function getBpUpperLimit(bp) {
  if (!Number.isNaN(parseInt(bp))) {
    return null;
  }

  var bpKeys = Object.keys(BREAKPOINTS);
  var nextHighestBpIndex = bpKeys.indexOf(bp) + 1; // Check edge-case for when target breakpoint is the last in the array, in which
  // case Infinity is an acceptable upper-bound, since there is no threshold

  var nextHighestBpWidth = nextHighestBpIndex !== BREAKPOINTS.length - 1 ? BREAKPOINTS[bpKeys[nextHighestBpIndex]] : Infinity;
  return nextHighestBpWidth;
}
/**
 * Resolves a breakpoint query against a specified breakpoint or value. Query
 * string must be in format `${lower}, ${upper}` (comma separated), where lower/upper
 * are either named breakpoints or px values. Upper is optional.
 *
 * @param {string} query - Breakpoint query string.
 * @param {string|number} bp - Breakpoint name, or px size to resolve query against.
 * @returns {boolean}
 */

export function resolveBp(query, bp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2JyZWFrcG9pbnRzLmpzIl0sIm5hbWVzIjpbIkJSRUFLUE9JTlRTIiwibm9uZSIsInh4eHMiLCJ4eHMiLCJ4cyIsInMiLCJtIiwibCIsInhsIiwieHhsIiwieHh4bCIsImdldEJwVXBwZXJMaW1pdCIsImJwIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJzZUludCIsImJwS2V5cyIsIk9iamVjdCIsImtleXMiLCJuZXh0SGlnaGVzdEJwSW5kZXgiLCJpbmRleE9mIiwibmV4dEhpZ2hlc3RCcFdpZHRoIiwibGVuZ3RoIiwiSW5maW5pdHkiLCJyZXNvbHZlQnAiLCJxdWVyeSIsInBhcnNlQnAiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzcGxpdCIsImxvd2VyIiwidXBwZXIiLCJsb3dlcldpZHRoIiwidXBwZXJXaWR0aCIsImJwV2lkdGgiLCJjb25zb2xlIiwid2FybiIsIm1vcmVUaGFuTG93ZXIiLCJsZXNzVGhhblVwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU8sSUFBTUEsV0FBVyxHQUFHO0FBQzFCQyxFQUFBQSxJQUFJLEVBQUUsQ0FEb0I7QUFFMUJDLEVBQUFBLElBQUksRUFBRSxHQUZvQjtBQUcxQkMsRUFBQUEsR0FBRyxFQUFFLEdBSHFCO0FBSTFCQyxFQUFBQSxFQUFFLEVBQUUsR0FKc0I7QUFLMUJDLEVBQUFBLENBQUMsRUFBRSxHQUx1QjtBQU0xQkMsRUFBQUEsQ0FBQyxFQUFFLEdBTnVCO0FBTzFCQyxFQUFBQSxDQUFDLEVBQUUsSUFQdUI7QUFRMUJDLEVBQUFBLEVBQUUsRUFBRSxJQVJzQjtBQVMxQkMsRUFBQUEsR0FBRyxFQUFFLElBVHFCO0FBVTFCQyxFQUFBQSxJQUFJLEVBQUU7QUFWb0IsQ0FBcEI7QUFhUDs7Ozs7Ozs7QUFPQSxPQUFPLFNBQVNDLGVBQVQsQ0FBeUJDLEVBQXpCLEVBQTZCO0FBQ25DLE1BQUksQ0FBQ0MsTUFBTSxDQUFDQyxLQUFQLENBQWFDLFFBQVEsQ0FBQ0gsRUFBRCxDQUFyQixDQUFMLEVBQWlDO0FBQ2hDLFdBQU8sSUFBUDtBQUNBOztBQUVELE1BQU1JLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlsQixXQUFaLENBQWY7QUFDQSxNQUFNbUIsa0JBQWtCLEdBQUdILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlUixFQUFmLElBQXFCLENBQWhELENBTm1DLENBUW5DO0FBQ0E7O0FBQ0EsTUFBTVMsa0JBQWtCLEdBQ3ZCRixrQkFBa0IsS0FBS25CLFdBQVcsQ0FBQ3NCLE1BQVosR0FBcUIsQ0FBNUMsR0FDR3RCLFdBQVcsQ0FBQ2dCLE1BQU0sQ0FBQ0csa0JBQUQsQ0FBUCxDQURkLEdBRUdJLFFBSEo7QUFLQSxTQUFPRixrQkFBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7QUFTQSxPQUFPLFNBQVNHLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCYixFQUExQixFQUE4QjtBQUNwQztBQUNBO0FBQ0EsTUFBTWMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQWQsRUFBRTtBQUFBLFdBQ2pCWixXQUFXLENBQUNZLEVBQUQsQ0FBWCxJQUFtQixJQUFuQixHQUEwQlosV0FBVyxDQUFDWSxFQUFELENBQXJDLEdBQTRDRyxRQUFRLENBQUNILEVBQUQsQ0FEbkM7QUFBQSxHQUFsQixDQUhvQyxDQU1wQztBQUNBOzs7QUFQb0MsOEJBUWJhLEtBQUssQ0FDMUJFLFFBRHFCLEdBRXJCQyxPQUZxQixDQUViLE1BRmEsRUFFTCxHQUZLLEVBR3JCQyxLQUhxQixDQUdmLEdBSGUsQ0FSYTtBQUFBO0FBQUEsTUFRN0JDLEtBUjZCO0FBQUEsTUFRdEJDLEtBUnNCLDhCQWFwQzs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHTixPQUFPLENBQUNJLEtBQUQsQ0FBMUIsQ0Fkb0MsQ0FnQnBDO0FBQ0E7O0FBQ0EsTUFBTUcsVUFBVSxHQUFHdEIsZUFBZSxDQUFDb0IsS0FBRCxDQUFmLElBQTBCaEIsUUFBUSxDQUFDZ0IsS0FBRCxDQUFsQyxJQUE2Q1IsUUFBaEUsQ0FsQm9DLENBb0JwQzs7QUFDQSxNQUFNVyxPQUFPLEdBQUdSLE9BQU8sQ0FBQ2QsRUFBRCxDQUF2QixDQXJCb0MsQ0F1QnBDO0FBQ0E7O0FBQ0EsTUFBSSxDQUFDb0IsVUFBRCxJQUFlQSxVQUFVLEtBQUssQ0FBbEMsRUFBcUM7QUFDcENHLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixxQ0FDOEJYLEtBRDlCO0FBR0EsV0FBTyxLQUFQO0FBQ0EsR0FMRCxNQUtPLElBQUksQ0FBQ1MsT0FBRCxJQUFZQSxPQUFPLEtBQUssQ0FBNUIsRUFBK0I7QUFDckNDLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixxQ0FDOEJ4QixFQUQ5QjtBQUdBLFdBQU8sS0FBUDtBQUNBLEdBbkNtQyxDQXFDcEM7OztBQUNBLE1BQU15QixhQUFhLEdBQUdILE9BQU8sSUFBSUYsVUFBakM7QUFDQSxNQUFNTSxhQUFhLEdBQUdKLE9BQU8sR0FBR0QsVUFBaEM7QUFFQSxTQUFPSSxhQUFhLElBQUlDLGFBQXhCO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOT1RFOiBUaGVzZSBrZXk6dmFsdWUgcGFpcnMgbWlycm9yIHRob3NlIGluIHRoaXMgbW9kdWxlJ3MgU0NTU1xuLy8gSWYgeW91J3JlIGdvaW5nIHRvIGFkZCBvciBjaGFuZ2UgYnBzLCBjaGVjayB0aGUgbm90ZXMgbmVhciB0aGUgdG9wIG9mIHRoZSBTQ1NTIGZpbGVcbmV4cG9ydCBjb25zdCBCUkVBS1BPSU5UUyA9IHtcblx0bm9uZTogMCxcblx0eHh4czogMzIwLFxuXHR4eHM6IDM1OSxcblx0eHM6IDQ4MCxcblx0czogNjQwLFxuXHRtOiA3NjgsXG5cdGw6IDEwMjQsXG5cdHhsOiAxMjQ0LFxuXHR4eGw6IDE0MTAsXG5cdHh4eGw6IDE2OTAsXG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJyZWFrcG9pbnQgJ3VwcGVyLWxpbWl0JyB3aWR0aCBpbiBwaXhlbHMsXG4gKiB3aGljaCBpcyBlc3NlbnRpYWxseSB0aGUgd2lkdGggb2YgdGhlIG5leHQgYnJlYWtwb2ludC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYnBcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcFVwcGVyTGltaXQoYnApIHtcblx0aWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VJbnQoYnApKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgYnBLZXlzID0gT2JqZWN0LmtleXMoQlJFQUtQT0lOVFMpO1xuXHRjb25zdCBuZXh0SGlnaGVzdEJwSW5kZXggPSBicEtleXMuaW5kZXhPZihicCkgKyAxO1xuXG5cdC8vIENoZWNrIGVkZ2UtY2FzZSBmb3Igd2hlbiB0YXJnZXQgYnJlYWtwb2ludCBpcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXksIGluIHdoaWNoXG5cdC8vIGNhc2UgSW5maW5pdHkgaXMgYW4gYWNjZXB0YWJsZSB1cHBlci1ib3VuZCwgc2luY2UgdGhlcmUgaXMgbm8gdGhyZXNob2xkXG5cdGNvbnN0IG5leHRIaWdoZXN0QnBXaWR0aCA9XG5cdFx0bmV4dEhpZ2hlc3RCcEluZGV4ICE9PSBCUkVBS1BPSU5UUy5sZW5ndGggLSAxXG5cdFx0XHQ/IEJSRUFLUE9JTlRTW2JwS2V5c1tuZXh0SGlnaGVzdEJwSW5kZXhdXVxuXHRcdFx0OiBJbmZpbml0eTtcblxuXHRyZXR1cm4gbmV4dEhpZ2hlc3RCcFdpZHRoO1xufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgYnJlYWtwb2ludCBxdWVyeSBhZ2FpbnN0IGEgc3BlY2lmaWVkIGJyZWFrcG9pbnQgb3IgdmFsdWUuIFF1ZXJ5XG4gKiBzdHJpbmcgbXVzdCBiZSBpbiBmb3JtYXQgYCR7bG93ZXJ9LCAke3VwcGVyfWAgKGNvbW1hIHNlcGFyYXRlZCksIHdoZXJlIGxvd2VyL3VwcGVyXG4gKiBhcmUgZWl0aGVyIG5hbWVkIGJyZWFrcG9pbnRzIG9yIHB4IHZhbHVlcy4gVXBwZXIgaXMgb3B0aW9uYWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gQnJlYWtwb2ludCBxdWVyeSBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGJwIC0gQnJlYWtwb2ludCBuYW1lLCBvciBweCBzaXplIHRvIHJlc29sdmUgcXVlcnkgYWdhaW5zdC5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUJwKHF1ZXJ5LCBicCkge1xuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgYnJlYWtwb2ludCBpbnRvIHBpeGVsc1xuXHQvLyBOb24tc3RyaWN0IG51bGwgY2hlY2sgdG8gYXZvaWQgJzAnIGJlaW5nIGV2YWx1YXRlZCBhcyBmYWxzZXlcblx0Y29uc3QgcGFyc2VCcCA9IGJwID0+XG5cdFx0QlJFQUtQT0lOVFNbYnBdICE9IG51bGwgPyBCUkVBS1BPSU5UU1ticF0gOiBwYXJzZUludChicCk7XG5cblx0Ly8gRXh0cmFjdCBsb3dlciBhbmQgdXBwZXItYm91bmRzIGZyb20gcXVlcnlcblx0Ly8gTm9ybWFsaXNlIHN0cmluZyBhbmQgY29tbWEvd2hpdGVzcGFjZSBzZXBhcmF0aW9uXG5cdGNvbnN0IFtsb3dlciwgdXBwZXJdID0gcXVlcnlcblx0XHQudG9TdHJpbmcoKVxuXHRcdC5yZXBsYWNlKC8sP1xccy8sICcsJylcblx0XHQuc3BsaXQoJywnKTtcblxuXHQvLyBMb3dlci1ib3VuZCBzaG91bGQgYWx3YXlzIGV4aXN0OyBlaXRoZXIgYXMgbmFtZWQgYnJlYWtwb2ludCBvciBweCB2YWx1ZVxuXHRjb25zdCBsb3dlcldpZHRoID0gcGFyc2VCcChsb3dlcik7XG5cblx0Ly8gR2V0IHVwcGVyLWJvdW5kIChpLmUuIG5leHQgYnJlYWtwb2ludCB0aHJlc2hvbGQpLCBvciBwYXJzZSBhcyBpbnQsXG5cdC8vIG9yLCBmYWlsaW5nIHRoYXQsIHVzZSBJbmZpbml0eSBhcyBhIGZhbGxiYWNrXG5cdGNvbnN0IHVwcGVyV2lkdGggPSBnZXRCcFVwcGVyTGltaXQodXBwZXIpIHx8IHBhcnNlSW50KHVwcGVyKSB8fCBJbmZpbml0eTtcblxuXHQvLyBXaWR0aCBvZiBjdXJyZW50IGJyZWFrcG9pbnRcblx0Y29uc3QgYnBXaWR0aCA9IHBhcnNlQnAoYnApO1xuXG5cdC8vIFZhbGlkYXRlIHF1ZXJ5IGJ5IGNoZWNraW5nIGlmIGxvd2VyIGJvdW5kIGV4aXN0c1xuXHQvLyBBY2NvdW50IGZvciAnMCcgbG93ZXJXaWR0aCwgd2hpY2ggd291bGQgb3RoZXJ3aXNlIGV2YWx1YXRlIGFzIGZhbHN5XG5cdGlmICghbG93ZXJXaWR0aCAmJiBsb3dlcldpZHRoICE9PSAwKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YEludmFsaWQgYnJlYWtwb2ludCBxdWVyeSAnJHtxdWVyeX0nIHByb3ZpZGVkLiBRdWVyeSBtdXN0IGJlIGluIGZvcm1hdCBcXGBcXCR7bG93ZXJ9LCBcXCR7dXBwZXJ9XFxgIChjb21tYSBzZXBhcmF0ZWQpLCB3aGVyZSBsb3dlci91cHBlciBhcmUgZWl0aGVyIG5hbWVkIGJyZWFrcG9pbnRzIG9yIHB4IHZhbHVlcy4gVXBwZXIgaXMgb3B0aW9uYWwuYCxcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBlbHNlIGlmICghYnBXaWR0aCAmJiBicFdpZHRoICE9PSAwKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YEludmFsaWQgYnJlYWtwb2ludCB2YWx1ZSAnJHticH0nIHByb3ZpZGVkLiBCcmVha3BvaW50IHNob3VsZCBlaXRoZXIgYmUgbmFtZWQsIG9yIGEgcGl4ZWwgdmFsdWUuYCxcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE5vdGUgdGhhdCBsb3dlci1ib3VuZCBpcyBpbmNsdXNpdmVcblx0Y29uc3QgbW9yZVRoYW5Mb3dlciA9IGJwV2lkdGggPj0gbG93ZXJXaWR0aDtcblx0Y29uc3QgbGVzc1RoYW5VcHBlciA9IGJwV2lkdGggPCB1cHBlcldpZHRoO1xuXG5cdHJldHVybiBtb3JlVGhhbkxvd2VyICYmIGxlc3NUaGFuVXBwZXI7XG59XG4iXX0=