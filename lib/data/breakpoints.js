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
 * @param {string} bpName - Named breakpoint
 * @returns {number}
 */

export function getBpUpperLimit(bpName) {
  if (!Number.isNaN(parseInt(bpName))) {
    return null;
  }

  var bpKeys = Object.keys(BREAKPOINTS);
  var nextHighestBpIndex = bpKeys.indexOf(bpName) + 1; // Check edge-case for when target breakpoint is the last in the array, in which
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2JyZWFrcG9pbnRzLmpzIl0sIm5hbWVzIjpbIkJSRUFLUE9JTlRTIiwibm9uZSIsInh4eHMiLCJ4eHMiLCJ4cyIsInMiLCJtIiwibCIsInhsIiwieHhsIiwieHh4bCIsImdldEJwVXBwZXJMaW1pdCIsImJwTmFtZSIsIk51bWJlciIsImlzTmFOIiwicGFyc2VJbnQiLCJicEtleXMiLCJPYmplY3QiLCJrZXlzIiwibmV4dEhpZ2hlc3RCcEluZGV4IiwiaW5kZXhPZiIsIm5leHRIaWdoZXN0QnBXaWR0aCIsImxlbmd0aCIsIkluZmluaXR5IiwicmVzb2x2ZUJwIiwicXVlcnkiLCJicCIsInBhcnNlQnAiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJzcGxpdCIsImxvd2VyIiwidXBwZXIiLCJsb3dlcldpZHRoIiwidXBwZXJXaWR0aCIsImJwV2lkdGgiLCJjb25zb2xlIiwid2FybiIsIm1vcmVUaGFuTG93ZXIiLCJsZXNzVGhhblVwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU8sSUFBTUEsV0FBVyxHQUFHO0FBQzFCQyxFQUFBQSxJQUFJLEVBQUUsQ0FEb0I7QUFFMUJDLEVBQUFBLElBQUksRUFBRSxHQUZvQjtBQUcxQkMsRUFBQUEsR0FBRyxFQUFFLEdBSHFCO0FBSTFCQyxFQUFBQSxFQUFFLEVBQUUsR0FKc0I7QUFLMUJDLEVBQUFBLENBQUMsRUFBRSxHQUx1QjtBQU0xQkMsRUFBQUEsQ0FBQyxFQUFFLEdBTnVCO0FBTzFCQyxFQUFBQSxDQUFDLEVBQUUsSUFQdUI7QUFRMUJDLEVBQUFBLEVBQUUsRUFBRSxJQVJzQjtBQVMxQkMsRUFBQUEsR0FBRyxFQUFFLElBVHFCO0FBVTFCQyxFQUFBQSxJQUFJLEVBQUU7QUFWb0IsQ0FBcEI7QUFhUDs7Ozs7Ozs7QUFPQSxPQUFPLFNBQVNDLGVBQVQsQ0FBeUJDLE1BQXpCLEVBQWlDO0FBQ3ZDLE1BQUksQ0FBQ0MsTUFBTSxDQUFDQyxLQUFQLENBQWFDLFFBQVEsQ0FBQ0gsTUFBRCxDQUFyQixDQUFMLEVBQXFDO0FBQ3BDLFdBQU8sSUFBUDtBQUNBOztBQUVELE1BQU1JLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlsQixXQUFaLENBQWY7QUFDQSxNQUFNbUIsa0JBQWtCLEdBQUdILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlUixNQUFmLElBQXlCLENBQXBELENBTnVDLENBUXZDO0FBQ0E7O0FBQ0EsTUFBTVMsa0JBQWtCLEdBQ3ZCRixrQkFBa0IsS0FBS25CLFdBQVcsQ0FBQ3NCLE1BQVosR0FBcUIsQ0FBNUMsR0FDR3RCLFdBQVcsQ0FBQ2dCLE1BQU0sQ0FBQ0csa0JBQUQsQ0FBUCxDQURkLEdBRUdJLFFBSEo7QUFLQSxTQUFPRixrQkFBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7QUFTQSxPQUFPLFNBQVNHLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxFQUExQixFQUE4QjtBQUNwQztBQUNBO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUQsRUFBRTtBQUFBLFdBQ2pCMUIsV0FBVyxDQUFDMEIsRUFBRCxDQUFYLElBQW1CLElBQW5CLEdBQTBCMUIsV0FBVyxDQUFDMEIsRUFBRCxDQUFyQyxHQUE0Q1gsUUFBUSxDQUFDVyxFQUFELENBRG5DO0FBQUEsR0FBbEIsQ0FIb0MsQ0FNcEM7QUFDQTs7O0FBUG9DLDhCQVFiRCxLQUFLLENBQzFCRyxRQURxQixHQUVyQkMsT0FGcUIsQ0FFYixNQUZhLEVBRUwsR0FGSyxFQUdyQkMsS0FIcUIsQ0FHZixHQUhlLENBUmE7QUFBQTtBQUFBLE1BUTdCQyxLQVI2QjtBQUFBLE1BUXRCQyxLQVJzQiw4QkFhcEM7OztBQUNBLE1BQU1DLFVBQVUsR0FBR04sT0FBTyxDQUFDSSxLQUFELENBQTFCLENBZG9DLENBZ0JwQztBQUNBOztBQUNBLE1BQU1HLFVBQVUsR0FBR3ZCLGVBQWUsQ0FBQ3FCLEtBQUQsQ0FBZixJQUEwQmpCLFFBQVEsQ0FBQ2lCLEtBQUQsQ0FBbEMsSUFBNkNULFFBQWhFLENBbEJvQyxDQW9CcEM7O0FBQ0EsTUFBTVksT0FBTyxHQUFHUixPQUFPLENBQUNELEVBQUQsQ0FBdkIsQ0FyQm9DLENBdUJwQztBQUNBOztBQUNBLE1BQUksQ0FBQ08sVUFBRCxJQUFlQSxVQUFVLEtBQUssQ0FBbEMsRUFBcUM7QUFDcENHLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixxQ0FDOEJaLEtBRDlCO0FBR0EsV0FBTyxLQUFQO0FBQ0EsR0FMRCxNQUtPLElBQUksQ0FBQ1UsT0FBRCxJQUFZQSxPQUFPLEtBQUssQ0FBNUIsRUFBK0I7QUFDckNDLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixxQ0FDOEJYLEVBRDlCO0FBR0EsV0FBTyxLQUFQO0FBQ0EsR0FuQ21DLENBcUNwQzs7O0FBQ0EsTUFBTVksYUFBYSxHQUFHSCxPQUFPLElBQUlGLFVBQWpDO0FBQ0EsTUFBTU0sYUFBYSxHQUFHSixPQUFPLEdBQUdELFVBQWhDO0FBRUEsU0FBT0ksYUFBYSxJQUFJQyxhQUF4QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTk9URTogVGhlc2Uga2V5OnZhbHVlIHBhaXJzIG1pcnJvciB0aG9zZSBpbiB0aGlzIG1vZHVsZSdzIFNDU1Ncbi8vIElmIHlvdSdyZSBnb2luZyB0byBhZGQgb3IgY2hhbmdlIGJwcywgY2hlY2sgdGhlIG5vdGVzIG5lYXIgdGhlIHRvcCBvZiB0aGUgU0NTUyBmaWxlXG5leHBvcnQgY29uc3QgQlJFQUtQT0lOVFMgPSB7XG5cdG5vbmU6IDAsXG5cdHh4eHM6IDMyMCxcblx0eHhzOiAzNTksXG5cdHhzOiA0ODAsXG5cdHM6IDY0MCxcblx0bTogNzY4LFxuXHRsOiAxMDI0LFxuXHR4bDogMTI0NCxcblx0eHhsOiAxNDEwLFxuXHR4eHhsOiAxNjkwLFxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBicmVha3BvaW50ICd1cHBlci1saW1pdCcgd2lkdGggaW4gcGl4ZWxzLFxuICogd2hpY2ggaXMgZXNzZW50aWFsbHkgdGhlIHdpZHRoIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJwTmFtZSAtIE5hbWVkIGJyZWFrcG9pbnRcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcFVwcGVyTGltaXQoYnBOYW1lKSB7XG5cdGlmICghTnVtYmVyLmlzTmFOKHBhcnNlSW50KGJwTmFtZSkpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBicEtleXMgPSBPYmplY3Qua2V5cyhCUkVBS1BPSU5UUyk7XG5cdGNvbnN0IG5leHRIaWdoZXN0QnBJbmRleCA9IGJwS2V5cy5pbmRleE9mKGJwTmFtZSkgKyAxO1xuXG5cdC8vIENoZWNrIGVkZ2UtY2FzZSBmb3Igd2hlbiB0YXJnZXQgYnJlYWtwb2ludCBpcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXksIGluIHdoaWNoXG5cdC8vIGNhc2UgSW5maW5pdHkgaXMgYW4gYWNjZXB0YWJsZSB1cHBlci1ib3VuZCwgc2luY2UgdGhlcmUgaXMgbm8gdGhyZXNob2xkXG5cdGNvbnN0IG5leHRIaWdoZXN0QnBXaWR0aCA9XG5cdFx0bmV4dEhpZ2hlc3RCcEluZGV4ICE9PSBCUkVBS1BPSU5UUy5sZW5ndGggLSAxXG5cdFx0XHQ/IEJSRUFLUE9JTlRTW2JwS2V5c1tuZXh0SGlnaGVzdEJwSW5kZXhdXVxuXHRcdFx0OiBJbmZpbml0eTtcblxuXHRyZXR1cm4gbmV4dEhpZ2hlc3RCcFdpZHRoO1xufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgYnJlYWtwb2ludCBxdWVyeSBhZ2FpbnN0IGEgc3BlY2lmaWVkIGJyZWFrcG9pbnQgb3IgdmFsdWUuIFF1ZXJ5XG4gKiBzdHJpbmcgbXVzdCBiZSBpbiBmb3JtYXQgYCR7bG93ZXJ9LCAke3VwcGVyfWAgKGNvbW1hIHNlcGFyYXRlZCksIHdoZXJlIGxvd2VyL3VwcGVyXG4gKiBhcmUgZWl0aGVyIG5hbWVkIGJyZWFrcG9pbnRzIG9yIHB4IHZhbHVlcy4gVXBwZXIgaXMgb3B0aW9uYWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gQnJlYWtwb2ludCBxdWVyeSBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGJwIC0gQnJlYWtwb2ludCBuYW1lLCBvciBweCBzaXplIHRvIHJlc29sdmUgcXVlcnkgYWdhaW5zdC5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUJwKHF1ZXJ5LCBicCkge1xuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgYnJlYWtwb2ludCBpbnRvIHBpeGVsc1xuXHQvLyBOb24tc3RyaWN0IG51bGwgY2hlY2sgdG8gYXZvaWQgJzAnIGJlaW5nIGV2YWx1YXRlZCBhcyBmYWxzZXlcblx0Y29uc3QgcGFyc2VCcCA9IGJwID0+XG5cdFx0QlJFQUtQT0lOVFNbYnBdICE9IG51bGwgPyBCUkVBS1BPSU5UU1ticF0gOiBwYXJzZUludChicCk7XG5cblx0Ly8gRXh0cmFjdCBsb3dlciBhbmQgdXBwZXItYm91bmRzIGZyb20gcXVlcnlcblx0Ly8gTm9ybWFsaXNlIHN0cmluZyBhbmQgY29tbWEvd2hpdGVzcGFjZSBzZXBhcmF0aW9uXG5cdGNvbnN0IFtsb3dlciwgdXBwZXJdID0gcXVlcnlcblx0XHQudG9TdHJpbmcoKVxuXHRcdC5yZXBsYWNlKC8sP1xccy8sICcsJylcblx0XHQuc3BsaXQoJywnKTtcblxuXHQvLyBMb3dlci1ib3VuZCBzaG91bGQgYWx3YXlzIGV4aXN0OyBlaXRoZXIgYXMgbmFtZWQgYnJlYWtwb2ludCBvciBweCB2YWx1ZVxuXHRjb25zdCBsb3dlcldpZHRoID0gcGFyc2VCcChsb3dlcik7XG5cblx0Ly8gR2V0IHVwcGVyLWJvdW5kIChpLmUuIG5leHQgYnJlYWtwb2ludCB0aHJlc2hvbGQpLCBvciBwYXJzZSBhcyBpbnQsXG5cdC8vIG9yLCBmYWlsaW5nIHRoYXQsIHVzZSBJbmZpbml0eSBhcyBhIGZhbGxiYWNrXG5cdGNvbnN0IHVwcGVyV2lkdGggPSBnZXRCcFVwcGVyTGltaXQodXBwZXIpIHx8IHBhcnNlSW50KHVwcGVyKSB8fCBJbmZpbml0eTtcblxuXHQvLyBXaWR0aCBvZiBjdXJyZW50IGJyZWFrcG9pbnRcblx0Y29uc3QgYnBXaWR0aCA9IHBhcnNlQnAoYnApO1xuXG5cdC8vIFZhbGlkYXRlIHF1ZXJ5IGJ5IGNoZWNraW5nIGlmIGxvd2VyIGJvdW5kIGV4aXN0c1xuXHQvLyBBY2NvdW50IGZvciAnMCcgbG93ZXJXaWR0aCwgd2hpY2ggd291bGQgb3RoZXJ3aXNlIGV2YWx1YXRlIGFzIGZhbHN5XG5cdGlmICghbG93ZXJXaWR0aCAmJiBsb3dlcldpZHRoICE9PSAwKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YEludmFsaWQgYnJlYWtwb2ludCBxdWVyeSAnJHtxdWVyeX0nIHByb3ZpZGVkLiBRdWVyeSBtdXN0IGJlIGluIGZvcm1hdCBcXGBcXCR7bG93ZXJ9LCBcXCR7dXBwZXJ9XFxgIChjb21tYSBzZXBhcmF0ZWQpLCB3aGVyZSBsb3dlci91cHBlciBhcmUgZWl0aGVyIG5hbWVkIGJyZWFrcG9pbnRzIG9yIHB4IHZhbHVlcy4gVXBwZXIgaXMgb3B0aW9uYWwuYCxcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBlbHNlIGlmICghYnBXaWR0aCAmJiBicFdpZHRoICE9PSAwKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YEludmFsaWQgYnJlYWtwb2ludCB2YWx1ZSAnJHticH0nIHByb3ZpZGVkLiBCcmVha3BvaW50IHNob3VsZCBlaXRoZXIgYmUgbmFtZWQsIG9yIGEgcGl4ZWwgdmFsdWUuYCxcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE5vdGUgdGhhdCBsb3dlci1ib3VuZCBpcyBpbmNsdXNpdmVcblx0Y29uc3QgbW9yZVRoYW5Mb3dlciA9IGJwV2lkdGggPj0gbG93ZXJXaWR0aDtcblx0Y29uc3QgbGVzc1RoYW5VcHBlciA9IGJwV2lkdGggPCB1cHBlcldpZHRoO1xuXG5cdHJldHVybiBtb3JlVGhhbkxvd2VyICYmIGxlc3NUaGFuVXBwZXI7XG59XG4iXX0=