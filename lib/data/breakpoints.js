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

  var upperWidth = getBpUpperLimit(upper) || parseInt(upper) || Infinity; // Width of current breakpoint

  var bpWidth = BREAKPOINTS[bp] || parseInt(bp); // Validate query by checking if lower bound exists
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2JyZWFrcG9pbnRzLmpzIl0sIm5hbWVzIjpbIkJSRUFLUE9JTlRTIiwibm9uZSIsInh4eHMiLCJ4eHMiLCJ4cyIsInMiLCJtIiwibCIsInhsIiwieHhsIiwieHh4bCIsImdldEJwVXBwZXJMaW1pdCIsImJwIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJzZUludCIsImJwS2V5cyIsIk9iamVjdCIsImtleXMiLCJuZXh0SGlnaGVzdEJwSW5kZXgiLCJpbmRleE9mIiwibmV4dEhpZ2hlc3RCcFdpZHRoIiwibGVuZ3RoIiwiSW5maW5pdHkiLCJyZXNvbHZlQnAiLCJxdWVyeSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNwbGl0IiwibG93ZXIiLCJ1cHBlciIsImxvd2VyV2lkdGgiLCJ1cHBlcldpZHRoIiwiYnBXaWR0aCIsImNvbnNvbGUiLCJ3YXJuIiwibW9yZVRoYW5Mb3dlciIsImxlc3NUaGFuVXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBTyxJQUFNQSxXQUFXLEdBQUc7QUFDMUJDLEVBQUFBLElBQUksRUFBRSxDQURvQjtBQUUxQkMsRUFBQUEsSUFBSSxFQUFFLEdBRm9CO0FBRzFCQyxFQUFBQSxHQUFHLEVBQUUsR0FIcUI7QUFJMUJDLEVBQUFBLEVBQUUsRUFBRSxHQUpzQjtBQUsxQkMsRUFBQUEsQ0FBQyxFQUFFLEdBTHVCO0FBTTFCQyxFQUFBQSxDQUFDLEVBQUUsR0FOdUI7QUFPMUJDLEVBQUFBLENBQUMsRUFBRSxJQVB1QjtBQVExQkMsRUFBQUEsRUFBRSxFQUFFLElBUnNCO0FBUzFCQyxFQUFBQSxHQUFHLEVBQUUsSUFUcUI7QUFVMUJDLEVBQUFBLElBQUksRUFBRTtBQVZvQixDQUFwQjtBQWFQOzs7Ozs7OztBQU9BLE9BQU8sU0FBU0MsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDbkMsTUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsUUFBUSxDQUFDSCxFQUFELENBQXJCLENBQUwsRUFBaUM7QUFDaEMsV0FBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWxCLFdBQVosQ0FBZjtBQUNBLE1BQU1tQixrQkFBa0IsR0FBR0gsTUFBTSxDQUFDSSxPQUFQLENBQWVSLEVBQWYsSUFBcUIsQ0FBaEQsQ0FObUMsQ0FRbkM7QUFDQTs7QUFDQSxNQUFNUyxrQkFBa0IsR0FDdkJGLGtCQUFrQixLQUFLbkIsV0FBVyxDQUFDc0IsTUFBWixHQUFxQixDQUE1QyxHQUNHdEIsV0FBVyxDQUFDZ0IsTUFBTSxDQUFDRyxrQkFBRCxDQUFQLENBRGQsR0FFR0ksUUFISjtBQUtBLFNBQU9GLGtCQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7OztBQVNBLE9BQU8sU0FBU0csU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJiLEVBQTFCLEVBQThCO0FBQ3BDO0FBQ0E7QUFGb0MsOEJBR2JhLEtBQUssQ0FDMUJDLFFBRHFCLEdBRXJCQyxPQUZxQixDQUViLE1BRmEsRUFFTCxHQUZLLEVBR3JCQyxLQUhxQixDQUdmLEdBSGUsQ0FIYTtBQUFBO0FBQUEsTUFHN0JDLEtBSDZCO0FBQUEsTUFHdEJDLEtBSHNCLDhCQVFwQzs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHL0IsV0FBVyxDQUFDNkIsS0FBRCxDQUFYLElBQXNCZCxRQUFRLENBQUNjLEtBQUQsQ0FBakQsQ0FUb0MsQ0FVcEM7QUFDQTs7QUFDQSxNQUFNRyxVQUFVLEdBQUdyQixlQUFlLENBQUNtQixLQUFELENBQWYsSUFBMEJmLFFBQVEsQ0FBQ2UsS0FBRCxDQUFsQyxJQUE2Q1AsUUFBaEUsQ0Fab0MsQ0FhcEM7O0FBQ0EsTUFBTVUsT0FBTyxHQUFHakMsV0FBVyxDQUFDWSxFQUFELENBQVgsSUFBbUJHLFFBQVEsQ0FBQ0gsRUFBRCxDQUEzQyxDQWRvQyxDQWdCcEM7QUFDQTs7QUFDQSxNQUFJLENBQUNtQixVQUFELElBQWVBLFVBQVUsS0FBSyxDQUFsQyxFQUFxQztBQUNwQ0csSUFBQUEsT0FBTyxDQUFDQyxJQUFSLHFDQUM4QlYsS0FEOUI7QUFHQSxXQUFPLEtBQVA7QUFDQSxHQUxELE1BS08sSUFBSSxDQUFDUSxPQUFELElBQVlBLE9BQU8sS0FBSyxDQUE1QixFQUErQjtBQUNyQ0MsSUFBQUEsT0FBTyxDQUFDQyxJQUFSLHFDQUM4QnZCLEVBRDlCO0FBR0EsV0FBTyxLQUFQO0FBQ0EsR0E1Qm1DLENBOEJwQzs7O0FBQ0EsTUFBTXdCLGFBQWEsR0FBR0gsT0FBTyxJQUFJRixVQUFqQztBQUNBLE1BQU1NLGFBQWEsR0FBR0osT0FBTyxHQUFHRCxVQUFoQztBQUVBLFNBQU9JLGFBQWEsSUFBSUMsYUFBeEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5PVEU6IFRoZXNlIGtleTp2YWx1ZSBwYWlycyBtaXJyb3IgdGhvc2UgaW4gdGhpcyBtb2R1bGUncyBTQ1NTXG4vLyBJZiB5b3UncmUgZ29pbmcgdG8gYWRkIG9yIGNoYW5nZSBicHMsIGNoZWNrIHRoZSBub3RlcyBuZWFyIHRoZSB0b3Agb2YgdGhlIFNDU1MgZmlsZVxuZXhwb3J0IGNvbnN0IEJSRUFLUE9JTlRTID0ge1xuXHRub25lOiAwLFxuXHR4eHhzOiAzMjAsXG5cdHh4czogMzU5LFxuXHR4czogNDgwLFxuXHRzOiA2NDAsXG5cdG06IDc2OCxcblx0bDogMTAyNCxcblx0eGw6IDEyNDQsXG5cdHh4bDogMTQxMCxcblx0eHh4bDogMTY5MCxcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYnJlYWtwb2ludCAndXBwZXItbGltaXQnIHdpZHRoIGluIHBpeGVscyxcbiAqIHdoaWNoIGlzIGVzc2VudGlhbGx5IHRoZSB3aWR0aCBvZiB0aGUgbmV4dCBicmVha3BvaW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBicFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJwVXBwZXJMaW1pdChicCkge1xuXHRpZiAoIU51bWJlci5pc05hTihwYXJzZUludChicCkpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBicEtleXMgPSBPYmplY3Qua2V5cyhCUkVBS1BPSU5UUyk7XG5cdGNvbnN0IG5leHRIaWdoZXN0QnBJbmRleCA9IGJwS2V5cy5pbmRleE9mKGJwKSArIDE7XG5cblx0Ly8gQ2hlY2sgZWRnZS1jYXNlIGZvciB3aGVuIHRhcmdldCBicmVha3BvaW50IGlzIHRoZSBsYXN0IGluIHRoZSBhcnJheSwgaW4gd2hpY2hcblx0Ly8gY2FzZSBJbmZpbml0eSBpcyBhbiBhY2NlcHRhYmxlIHVwcGVyLWJvdW5kLCBzaW5jZSB0aGVyZSBpcyBubyB0aHJlc2hvbGRcblx0Y29uc3QgbmV4dEhpZ2hlc3RCcFdpZHRoID1cblx0XHRuZXh0SGlnaGVzdEJwSW5kZXggIT09IEJSRUFLUE9JTlRTLmxlbmd0aCAtIDFcblx0XHRcdD8gQlJFQUtQT0lOVFNbYnBLZXlzW25leHRIaWdoZXN0QnBJbmRleF1dXG5cdFx0XHQ6IEluZmluaXR5O1xuXG5cdHJldHVybiBuZXh0SGlnaGVzdEJwV2lkdGg7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBicmVha3BvaW50IHF1ZXJ5IGFnYWluc3QgYSBzcGVjaWZpZWQgYnJlYWtwb2ludCBvciB2YWx1ZS4gUXVlcnlcbiAqIG11c3QgYmUgaW4gZm9ybWF0IGAke2xvd2VyfSwgJHt1cHBlcn1gIChjb21tYSBzZXBhcmF0ZWQpLCB3aGVyZSBsb3dlci91cHBlclxuICogYXJlIGVpdGhlciBuYW1lZCBicmVha3BvaW50cyBvciBweCB2YWx1ZXMuIFVwcGVyIGlzIG9wdGlvbmFsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSAtIEJyZWFrcG9pbnQgcXVlcnkgc3RyaW5nLlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBicCAtIEJyZWFrcG9pbnQgbmFtZSwgb3IgcHggc2l6ZSB0byByZXNvbHZlIHF1ZXJ5IGFnYWluc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVCcChxdWVyeSwgYnApIHtcblx0Ly8gRXh0cmFjdCBsb3dlciBhbmQgdXBwZXItYm91bmRzIGZyb20gcXVlcnlcblx0Ly8gTm9ybWFsaXNlIHN0cmluZyBhbmQgY29tbWEvd2hpdGVzcGFjZSBzZXBhcmF0aW9uXG5cdGNvbnN0IFtsb3dlciwgdXBwZXJdID0gcXVlcnlcblx0XHQudG9TdHJpbmcoKVxuXHRcdC5yZXBsYWNlKC8sP1xccy8sICcsJylcblx0XHQuc3BsaXQoJywnKTtcblxuXHQvLyBMb3dlci1ib3VuZCBzaG91bGQgYWx3YXlzIGV4aXN0OyBlaXRoZXIgYXMgbmFtZWQgYnJlYWtwb2ludCBvciBweCB2YWx1ZVxuXHRjb25zdCBsb3dlcldpZHRoID0gQlJFQUtQT0lOVFNbbG93ZXJdIHx8IHBhcnNlSW50KGxvd2VyKTtcblx0Ly8gR2V0IHVwcGVyLWJvdW5kIChpLmUuIG5leHQgYnJlYWtwb2ludCB0aHJlc2hvbGQpLCBvciBwYXJzZSBhcyBpbnQsIG9yIGZhaWxpbmdcblx0Ly8gdGhhdCB1c2UgSW5maW5pdHkgYXMgYSBmYWxsYmFja1xuXHRjb25zdCB1cHBlcldpZHRoID0gZ2V0QnBVcHBlckxpbWl0KHVwcGVyKSB8fCBwYXJzZUludCh1cHBlcikgfHwgSW5maW5pdHk7XG5cdC8vIFdpZHRoIG9mIGN1cnJlbnQgYnJlYWtwb2ludFxuXHRjb25zdCBicFdpZHRoID0gQlJFQUtQT0lOVFNbYnBdIHx8IHBhcnNlSW50KGJwKTtcblxuXHQvLyBWYWxpZGF0ZSBxdWVyeSBieSBjaGVja2luZyBpZiBsb3dlciBib3VuZCBleGlzdHNcblx0Ly8gQWNjb3VudCBmb3IgJzAnIGxvd2VyV2lkdGgsIHdoaWNoIHdvdWxkIG90aGVyd2lzZSBldmFsdWF0ZSBhcyBmYWxzeVxuXHRpZiAoIWxvd2VyV2lkdGggJiYgbG93ZXJXaWR0aCAhPT0gMCkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdGBJbnZhbGlkIGJyZWFrcG9pbnQgcXVlcnkgJyR7cXVlcnl9JyBwcm92aWRlZC4gUXVlcnkgbXVzdCBiZSBpbiBmb3JtYXQgXFxgXFwke2xvd2VyfSwgXFwke3VwcGVyfVxcYCAoY29tbWEgc2VwYXJhdGVkKSwgd2hlcmUgbG93ZXIvdXBwZXIgYXJlIGVpdGhlciBuYW1lZCBicmVha3BvaW50cyBvciBweCB2YWx1ZXMuIFVwcGVyIGlzIG9wdGlvbmFsLmAsXG5cdFx0KTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSBpZiAoIWJwV2lkdGggJiYgYnBXaWR0aCAhPT0gMCkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdGBJbnZhbGlkIGJyZWFrcG9pbnQgdmFsdWUgJyR7YnB9JyBwcm92aWRlZC4gQnJlYWtwb2ludCBzaG91bGQgZWl0aGVyIGJlIG5hbWVkLCBvciBhIHBpeGVsIHZhbHVlLmAsXG5cdFx0KTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBOb3RlIHRoYXQgbG93ZXItYm91bmQgaXMgaW5jbHVzaXZlXG5cdGNvbnN0IG1vcmVUaGFuTG93ZXIgPSBicFdpZHRoID49IGxvd2VyV2lkdGg7XG5cdGNvbnN0IGxlc3NUaGFuVXBwZXIgPSBicFdpZHRoIDwgdXBwZXJXaWR0aDtcblxuXHRyZXR1cm4gbW9yZVRoYW5Mb3dlciAmJiBsZXNzVGhhblVwcGVyO1xufVxuIl19