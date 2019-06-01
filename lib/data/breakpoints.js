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
 * must be in format `${lower}, ${upper}` (comma separated), where lower/upper
 * are either named breakpoints or px values. Upper is optional.
 *
 * @param {string} query - Breakpoint query string.
 * @param {string|number} bp - Breakpoint name, or px size to resolve query against.
 * @returns {boolean}
 */

export function resolveBp(query, bp) {
  // Extract lower and upper-bounds from query
  // Normalise string and comma/whitespace separation
  var _query$toString$repla = query.toString().replace(/,?\s/, ',').split(','),
      _query$toString$repla2 = _slicedToArray(_query$toString$repla, 2),
      lower = _query$toString$repla2[0],
      upper = _query$toString$repla2[1]; // Lower-bound should always exist; either as named breakpoint or px value


  var lowerWidth = BREAKPOINTS[lower] || parseInt(lower); // Get upper-bound (i.e. next breakpoint threshold), or parse as int, or failing
  // that use Infinity as a fallback

  var upperWidth = getBpUpperLimit(upper) || parseInt(upper) || Infinity; // Validate query by checking if lower bound exists

  if (!lowerWidth) {
    console.warn("Invalid breakpoint query '".concat(query, "' provided. Query must be in format `${lower}, ${upper}` (comma separated), where lower/upper are either named breakpoints or px values. Upper is optional."));
    return false;
  } // Width of current breakpoint


  var bpWidth = BREAKPOINTS[bp] || parseInt(bp) || 0; // Note that lower-bound is inclusive

  var moreThanLower = bpWidth >= lowerWidth;
  var lessThanUpper = bpWidth < upperWidth;
  return moreThanLower && lessThanUpper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2JyZWFrcG9pbnRzLmpzIl0sIm5hbWVzIjpbIkJSRUFLUE9JTlRTIiwibm9uZSIsInh4eHMiLCJ4eHMiLCJ4cyIsInMiLCJtIiwibCIsInhsIiwieHhsIiwieHh4bCIsImdldEJwVXBwZXJMaW1pdCIsImJwIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJzZUludCIsImJwS2V5cyIsIk9iamVjdCIsImtleXMiLCJuZXh0SGlnaGVzdEJwSW5kZXgiLCJpbmRleE9mIiwibmV4dEhpZ2hlc3RCcFdpZHRoIiwibGVuZ3RoIiwiSW5maW5pdHkiLCJyZXNvbHZlQnAiLCJxdWVyeSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNwbGl0IiwibG93ZXIiLCJ1cHBlciIsImxvd2VyV2lkdGgiLCJ1cHBlcldpZHRoIiwiY29uc29sZSIsIndhcm4iLCJicFdpZHRoIiwibW9yZVRoYW5Mb3dlciIsImxlc3NUaGFuVXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBTyxJQUFNQSxXQUFXLEdBQUc7QUFDMUJDLEVBQUFBLElBQUksRUFBRSxDQURvQjtBQUUxQkMsRUFBQUEsSUFBSSxFQUFFLEdBRm9CO0FBRzFCQyxFQUFBQSxHQUFHLEVBQUUsR0FIcUI7QUFJMUJDLEVBQUFBLEVBQUUsRUFBRSxHQUpzQjtBQUsxQkMsRUFBQUEsQ0FBQyxFQUFFLEdBTHVCO0FBTTFCQyxFQUFBQSxDQUFDLEVBQUUsR0FOdUI7QUFPMUJDLEVBQUFBLENBQUMsRUFBRSxJQVB1QjtBQVExQkMsRUFBQUEsRUFBRSxFQUFFLElBUnNCO0FBUzFCQyxFQUFBQSxHQUFHLEVBQUUsSUFUcUI7QUFVMUJDLEVBQUFBLElBQUksRUFBRTtBQVZvQixDQUFwQjtBQWFQOzs7Ozs7OztBQU9BLE9BQU8sU0FBU0MsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDbkMsTUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsUUFBUSxDQUFDSCxFQUFELENBQXJCLENBQUwsRUFBaUM7QUFDaEMsV0FBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWxCLFdBQVosQ0FBZjtBQUNBLE1BQU1tQixrQkFBa0IsR0FBR0gsTUFBTSxDQUFDSSxPQUFQLENBQWVSLEVBQWYsSUFBcUIsQ0FBaEQsQ0FObUMsQ0FRbkM7QUFDQTs7QUFDQSxNQUFNUyxrQkFBa0IsR0FDdkJGLGtCQUFrQixLQUFLbkIsV0FBVyxDQUFDc0IsTUFBWixHQUFxQixDQUE1QyxHQUNHdEIsV0FBVyxDQUFDZ0IsTUFBTSxDQUFDRyxrQkFBRCxDQUFQLENBRGQsR0FFR0ksUUFISjtBQUtBLFNBQU9GLGtCQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7OztBQVNBLE9BQU8sU0FBU0csU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJiLEVBQTFCLEVBQThCO0FBQ3BDO0FBQ0E7QUFGb0MsOEJBR2JhLEtBQUssQ0FDMUJDLFFBRHFCLEdBRXJCQyxPQUZxQixDQUViLE1BRmEsRUFFTCxHQUZLLEVBR3JCQyxLQUhxQixDQUdmLEdBSGUsQ0FIYTtBQUFBO0FBQUEsTUFHN0JDLEtBSDZCO0FBQUEsTUFHdEJDLEtBSHNCLDhCQVFwQzs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHL0IsV0FBVyxDQUFDNkIsS0FBRCxDQUFYLElBQXNCZCxRQUFRLENBQUNjLEtBQUQsQ0FBakQsQ0FUb0MsQ0FVcEM7QUFDQTs7QUFDQSxNQUFNRyxVQUFVLEdBQUdyQixlQUFlLENBQUNtQixLQUFELENBQWYsSUFBMEJmLFFBQVEsQ0FBQ2UsS0FBRCxDQUFsQyxJQUE2Q1AsUUFBaEUsQ0Fab0MsQ0FjcEM7O0FBQ0EsTUFBSSxDQUFDUSxVQUFMLEVBQWlCO0FBQ2hCRSxJQUFBQSxPQUFPLENBQUNDLElBQVIscUNBQzhCVCxLQUQ5QjtBQUdBLFdBQU8sS0FBUDtBQUNBLEdBcEJtQyxDQXNCcEM7OztBQUNBLE1BQU1VLE9BQU8sR0FBR25DLFdBQVcsQ0FBQ1ksRUFBRCxDQUFYLElBQW1CRyxRQUFRLENBQUNILEVBQUQsQ0FBM0IsSUFBbUMsQ0FBbkQsQ0F2Qm9DLENBeUJwQzs7QUFDQSxNQUFNd0IsYUFBYSxHQUFHRCxPQUFPLElBQUlKLFVBQWpDO0FBQ0EsTUFBTU0sYUFBYSxHQUFHRixPQUFPLEdBQUdILFVBQWhDO0FBRUEsU0FBT0ksYUFBYSxJQUFJQyxhQUF4QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTk9URTogVGhlc2Uga2V5OnZhbHVlIHBhaXJzIG1pcnJvciB0aG9zZSBpbiB0aGlzIG1vZHVsZSdzIFNDU1Ncbi8vIElmIHlvdSdyZSBnb2luZyB0byBhZGQgb3IgY2hhbmdlIGJwcywgY2hlY2sgdGhlIG5vdGVzIG5lYXIgdGhlIHRvcCBvZiB0aGUgU0NTUyBmaWxlXG5leHBvcnQgY29uc3QgQlJFQUtQT0lOVFMgPSB7XG5cdG5vbmU6IDAsXG5cdHh4eHM6IDMyMCxcblx0eHhzOiAzNTksXG5cdHhzOiA0ODAsXG5cdHM6IDY0MCxcblx0bTogNzY4LFxuXHRsOiAxMDI0LFxuXHR4bDogMTI0NCxcblx0eHhsOiAxNDEwLFxuXHR4eHhsOiAxNjkwLFxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBicmVha3BvaW50ICd1cHBlci1saW1pdCcgd2lkdGggaW4gcGl4ZWxzLFxuICogd2hpY2ggaXMgZXNzZW50aWFsbHkgdGhlIHdpZHRoIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJwXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnBVcHBlckxpbWl0KGJwKSB7XG5cdGlmICghTnVtYmVyLmlzTmFOKHBhcnNlSW50KGJwKSkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGJwS2V5cyA9IE9iamVjdC5rZXlzKEJSRUFLUE9JTlRTKTtcblx0Y29uc3QgbmV4dEhpZ2hlc3RCcEluZGV4ID0gYnBLZXlzLmluZGV4T2YoYnApICsgMTtcblxuXHQvLyBDaGVjayBlZGdlLWNhc2UgZm9yIHdoZW4gdGFyZ2V0IGJyZWFrcG9pbnQgaXMgdGhlIGxhc3QgaW4gdGhlIGFycmF5LCBpbiB3aGljaFxuXHQvLyBjYXNlIEluZmluaXR5IGlzIGFuIGFjY2VwdGFibGUgdXBwZXItYm91bmQsIHNpbmNlIHRoZXJlIGlzIG5vIHRocmVzaG9sZFxuXHRjb25zdCBuZXh0SGlnaGVzdEJwV2lkdGggPVxuXHRcdG5leHRIaWdoZXN0QnBJbmRleCAhPT0gQlJFQUtQT0lOVFMubGVuZ3RoIC0gMVxuXHRcdFx0PyBCUkVBS1BPSU5UU1ticEtleXNbbmV4dEhpZ2hlc3RCcEluZGV4XV1cblx0XHRcdDogSW5maW5pdHk7XG5cblx0cmV0dXJuIG5leHRIaWdoZXN0QnBXaWR0aDtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGJyZWFrcG9pbnQgcXVlcnkgYWdhaW5zdCBhIHNwZWNpZmllZCBicmVha3BvaW50IG9yIHZhbHVlLiBRdWVyeVxuICogbXVzdCBiZSBpbiBmb3JtYXQgYCR7bG93ZXJ9LCAke3VwcGVyfWAgKGNvbW1hIHNlcGFyYXRlZCksIHdoZXJlIGxvd2VyL3VwcGVyXG4gKiBhcmUgZWl0aGVyIG5hbWVkIGJyZWFrcG9pbnRzIG9yIHB4IHZhbHVlcy4gVXBwZXIgaXMgb3B0aW9uYWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gQnJlYWtwb2ludCBxdWVyeSBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGJwIC0gQnJlYWtwb2ludCBuYW1lLCBvciBweCBzaXplIHRvIHJlc29sdmUgcXVlcnkgYWdhaW5zdC5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUJwKHF1ZXJ5LCBicCkge1xuXHQvLyBFeHRyYWN0IGxvd2VyIGFuZCB1cHBlci1ib3VuZHMgZnJvbSBxdWVyeVxuXHQvLyBOb3JtYWxpc2Ugc3RyaW5nIGFuZCBjb21tYS93aGl0ZXNwYWNlIHNlcGFyYXRpb25cblx0Y29uc3QgW2xvd2VyLCB1cHBlcl0gPSBxdWVyeVxuXHRcdC50b1N0cmluZygpXG5cdFx0LnJlcGxhY2UoLyw/XFxzLywgJywnKVxuXHRcdC5zcGxpdCgnLCcpO1xuXG5cdC8vIExvd2VyLWJvdW5kIHNob3VsZCBhbHdheXMgZXhpc3Q7IGVpdGhlciBhcyBuYW1lZCBicmVha3BvaW50IG9yIHB4IHZhbHVlXG5cdGNvbnN0IGxvd2VyV2lkdGggPSBCUkVBS1BPSU5UU1tsb3dlcl0gfHwgcGFyc2VJbnQobG93ZXIpO1xuXHQvLyBHZXQgdXBwZXItYm91bmQgKGkuZS4gbmV4dCBicmVha3BvaW50IHRocmVzaG9sZCksIG9yIHBhcnNlIGFzIGludCwgb3IgZmFpbGluZ1xuXHQvLyB0aGF0IHVzZSBJbmZpbml0eSBhcyBhIGZhbGxiYWNrXG5cdGNvbnN0IHVwcGVyV2lkdGggPSBnZXRCcFVwcGVyTGltaXQodXBwZXIpIHx8IHBhcnNlSW50KHVwcGVyKSB8fCBJbmZpbml0eTtcblxuXHQvLyBWYWxpZGF0ZSBxdWVyeSBieSBjaGVja2luZyBpZiBsb3dlciBib3VuZCBleGlzdHNcblx0aWYgKCFsb3dlcldpZHRoKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YEludmFsaWQgYnJlYWtwb2ludCBxdWVyeSAnJHtxdWVyeX0nIHByb3ZpZGVkLiBRdWVyeSBtdXN0IGJlIGluIGZvcm1hdCBcXGBcXCR7bG93ZXJ9LCBcXCR7dXBwZXJ9XFxgIChjb21tYSBzZXBhcmF0ZWQpLCB3aGVyZSBsb3dlci91cHBlciBhcmUgZWl0aGVyIG5hbWVkIGJyZWFrcG9pbnRzIG9yIHB4IHZhbHVlcy4gVXBwZXIgaXMgb3B0aW9uYWwuYCxcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIFdpZHRoIG9mIGN1cnJlbnQgYnJlYWtwb2ludFxuXHRjb25zdCBicFdpZHRoID0gQlJFQUtQT0lOVFNbYnBdIHx8IHBhcnNlSW50KGJwKSB8fCAwO1xuXG5cdC8vIE5vdGUgdGhhdCBsb3dlci1ib3VuZCBpcyBpbmNsdXNpdmVcblx0Y29uc3QgbW9yZVRoYW5Mb3dlciA9IGJwV2lkdGggPj0gbG93ZXJXaWR0aDtcblx0Y29uc3QgbGVzc1RoYW5VcHBlciA9IGJwV2lkdGggPCB1cHBlcldpZHRoO1xuXG5cdHJldHVybiBtb3JlVGhhbkxvd2VyICYmIGxlc3NUaGFuVXBwZXI7XG59XG4iXX0=