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
  // Extract lower and upper-bounds from query
  // Normalise string and comma/whitespace separation
  var _query$toString$repla = query.toString().replace(/,?\s/, ',').split(','),
      _query$toString$repla2 = _slicedToArray(_query$toString$repla, 2),
      lower = _query$toString$repla2[0],
      upper = _query$toString$repla2[1]; // Lower-bound should always exist; either as named breakpoint or px value


  var lowerWidth = BREAKPOINTS[lower] || parseInt(lower); // Account for named breakpoint 'none', and evaluate it as 0px

  lowerWidth = lower === 'none' ? 0 : lowerWidth; // Get upper-bound (i.e. next breakpoint threshold), or parse as int,
  // or, failing that, use Infinity as a fallback

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2JyZWFrcG9pbnRzLmpzIl0sIm5hbWVzIjpbIkJSRUFLUE9JTlRTIiwibm9uZSIsInh4eHMiLCJ4eHMiLCJ4cyIsInMiLCJtIiwibCIsInhsIiwieHhsIiwieHh4bCIsImdldEJwVXBwZXJMaW1pdCIsImJwIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJzZUludCIsImJwS2V5cyIsIk9iamVjdCIsImtleXMiLCJuZXh0SGlnaGVzdEJwSW5kZXgiLCJpbmRleE9mIiwibmV4dEhpZ2hlc3RCcFdpZHRoIiwibGVuZ3RoIiwiSW5maW5pdHkiLCJyZXNvbHZlQnAiLCJxdWVyeSIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNwbGl0IiwibG93ZXIiLCJ1cHBlciIsImxvd2VyV2lkdGgiLCJ1cHBlcldpZHRoIiwiYnBXaWR0aCIsImNvbnNvbGUiLCJ3YXJuIiwibW9yZVRoYW5Mb3dlciIsImxlc3NUaGFuVXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBTyxJQUFNQSxXQUFXLEdBQUc7QUFDMUJDLEVBQUFBLElBQUksRUFBRSxDQURvQjtBQUUxQkMsRUFBQUEsSUFBSSxFQUFFLEdBRm9CO0FBRzFCQyxFQUFBQSxHQUFHLEVBQUUsR0FIcUI7QUFJMUJDLEVBQUFBLEVBQUUsRUFBRSxHQUpzQjtBQUsxQkMsRUFBQUEsQ0FBQyxFQUFFLEdBTHVCO0FBTTFCQyxFQUFBQSxDQUFDLEVBQUUsR0FOdUI7QUFPMUJDLEVBQUFBLENBQUMsRUFBRSxJQVB1QjtBQVExQkMsRUFBQUEsRUFBRSxFQUFFLElBUnNCO0FBUzFCQyxFQUFBQSxHQUFHLEVBQUUsSUFUcUI7QUFVMUJDLEVBQUFBLElBQUksRUFBRTtBQVZvQixDQUFwQjtBQWFQOzs7Ozs7OztBQU9BLE9BQU8sU0FBU0MsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDbkMsTUFBSSxDQUFDQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsUUFBUSxDQUFDSCxFQUFELENBQXJCLENBQUwsRUFBaUM7QUFDaEMsV0FBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWxCLFdBQVosQ0FBZjtBQUNBLE1BQU1tQixrQkFBa0IsR0FBR0gsTUFBTSxDQUFDSSxPQUFQLENBQWVSLEVBQWYsSUFBcUIsQ0FBaEQsQ0FObUMsQ0FRbkM7QUFDQTs7QUFDQSxNQUFNUyxrQkFBa0IsR0FDdkJGLGtCQUFrQixLQUFLbkIsV0FBVyxDQUFDc0IsTUFBWixHQUFxQixDQUE1QyxHQUNHdEIsV0FBVyxDQUFDZ0IsTUFBTSxDQUFDRyxrQkFBRCxDQUFQLENBRGQsR0FFR0ksUUFISjtBQUtBLFNBQU9GLGtCQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7OztBQVNBLE9BQU8sU0FBU0csU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEJiLEVBQTFCLEVBQThCO0FBQ3BDO0FBQ0E7QUFGb0MsOEJBR2JhLEtBQUssQ0FDMUJDLFFBRHFCLEdBRXJCQyxPQUZxQixDQUViLE1BRmEsRUFFTCxHQUZLLEVBR3JCQyxLQUhxQixDQUdmLEdBSGUsQ0FIYTtBQUFBO0FBQUEsTUFHN0JDLEtBSDZCO0FBQUEsTUFHdEJDLEtBSHNCLDhCQVFwQzs7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHL0IsV0FBVyxDQUFDNkIsS0FBRCxDQUFYLElBQXNCZCxRQUFRLENBQUNjLEtBQUQsQ0FBL0MsQ0FUb0MsQ0FVcEM7O0FBQ0FFLEVBQUFBLFVBQVUsR0FBR0YsS0FBSyxLQUFLLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJFLFVBQXBDLENBWG9DLENBYXBDO0FBQ0E7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHckIsZUFBZSxDQUFDbUIsS0FBRCxDQUFmLElBQTBCZixRQUFRLENBQUNlLEtBQUQsQ0FBbEMsSUFBNkNQLFFBQWhFLENBZm9DLENBaUJwQzs7QUFDQSxNQUFNVSxPQUFPLEdBQUdqQyxXQUFXLENBQUNZLEVBQUQsQ0FBWCxJQUFtQkcsUUFBUSxDQUFDSCxFQUFELENBQTNDLENBbEJvQyxDQW9CcEM7QUFDQTs7QUFDQSxNQUFJLENBQUNtQixVQUFELElBQWVBLFVBQVUsS0FBSyxDQUFsQyxFQUFxQztBQUNwQ0csSUFBQUEsT0FBTyxDQUFDQyxJQUFSLHFDQUM4QlYsS0FEOUI7QUFHQSxXQUFPLEtBQVA7QUFDQSxHQUxELE1BS08sSUFBSSxDQUFDUSxPQUFELElBQVlBLE9BQU8sS0FBSyxDQUE1QixFQUErQjtBQUNyQ0MsSUFBQUEsT0FBTyxDQUFDQyxJQUFSLHFDQUM4QnZCLEVBRDlCO0FBR0EsV0FBTyxLQUFQO0FBQ0EsR0FoQ21DLENBa0NwQzs7O0FBQ0EsTUFBTXdCLGFBQWEsR0FBR0gsT0FBTyxJQUFJRixVQUFqQztBQUNBLE1BQU1NLGFBQWEsR0FBR0osT0FBTyxHQUFHRCxVQUFoQztBQUVBLFNBQU9JLGFBQWEsSUFBSUMsYUFBeEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5PVEU6IFRoZXNlIGtleTp2YWx1ZSBwYWlycyBtaXJyb3IgdGhvc2UgaW4gdGhpcyBtb2R1bGUncyBTQ1NTXG4vLyBJZiB5b3UncmUgZ29pbmcgdG8gYWRkIG9yIGNoYW5nZSBicHMsIGNoZWNrIHRoZSBub3RlcyBuZWFyIHRoZSB0b3Agb2YgdGhlIFNDU1MgZmlsZVxuZXhwb3J0IGNvbnN0IEJSRUFLUE9JTlRTID0ge1xuXHRub25lOiAwLFxuXHR4eHhzOiAzMjAsXG5cdHh4czogMzU5LFxuXHR4czogNDgwLFxuXHRzOiA2NDAsXG5cdG06IDc2OCxcblx0bDogMTAyNCxcblx0eGw6IDEyNDQsXG5cdHh4bDogMTQxMCxcblx0eHh4bDogMTY5MCxcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYnJlYWtwb2ludCAndXBwZXItbGltaXQnIHdpZHRoIGluIHBpeGVscyxcbiAqIHdoaWNoIGlzIGVzc2VudGlhbGx5IHRoZSB3aWR0aCBvZiB0aGUgbmV4dCBicmVha3BvaW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBicFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJwVXBwZXJMaW1pdChicCkge1xuXHRpZiAoIU51bWJlci5pc05hTihwYXJzZUludChicCkpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBicEtleXMgPSBPYmplY3Qua2V5cyhCUkVBS1BPSU5UUyk7XG5cdGNvbnN0IG5leHRIaWdoZXN0QnBJbmRleCA9IGJwS2V5cy5pbmRleE9mKGJwKSArIDE7XG5cblx0Ly8gQ2hlY2sgZWRnZS1jYXNlIGZvciB3aGVuIHRhcmdldCBicmVha3BvaW50IGlzIHRoZSBsYXN0IGluIHRoZSBhcnJheSwgaW4gd2hpY2hcblx0Ly8gY2FzZSBJbmZpbml0eSBpcyBhbiBhY2NlcHRhYmxlIHVwcGVyLWJvdW5kLCBzaW5jZSB0aGVyZSBpcyBubyB0aHJlc2hvbGRcblx0Y29uc3QgbmV4dEhpZ2hlc3RCcFdpZHRoID1cblx0XHRuZXh0SGlnaGVzdEJwSW5kZXggIT09IEJSRUFLUE9JTlRTLmxlbmd0aCAtIDFcblx0XHRcdD8gQlJFQUtQT0lOVFNbYnBLZXlzW25leHRIaWdoZXN0QnBJbmRleF1dXG5cdFx0XHQ6IEluZmluaXR5O1xuXG5cdHJldHVybiBuZXh0SGlnaGVzdEJwV2lkdGg7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBicmVha3BvaW50IHF1ZXJ5IGFnYWluc3QgYSBzcGVjaWZpZWQgYnJlYWtwb2ludCBvciB2YWx1ZS4gUXVlcnlcbiAqIHN0cmluZyBtdXN0IGJlIGluIGZvcm1hdCBgJHtsb3dlcn0sICR7dXBwZXJ9YCAoY29tbWEgc2VwYXJhdGVkKSwgd2hlcmUgbG93ZXIvdXBwZXJcbiAqIGFyZSBlaXRoZXIgbmFtZWQgYnJlYWtwb2ludHMgb3IgcHggdmFsdWVzLiBVcHBlciBpcyBvcHRpb25hbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgLSBCcmVha3BvaW50IHF1ZXJ5IHN0cmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gYnAgLSBCcmVha3BvaW50IG5hbWUsIG9yIHB4IHNpemUgdG8gcmVzb2x2ZSBxdWVyeSBhZ2FpbnN0LlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQnAocXVlcnksIGJwKSB7XG5cdC8vIEV4dHJhY3QgbG93ZXIgYW5kIHVwcGVyLWJvdW5kcyBmcm9tIHF1ZXJ5XG5cdC8vIE5vcm1hbGlzZSBzdHJpbmcgYW5kIGNvbW1hL3doaXRlc3BhY2Ugc2VwYXJhdGlvblxuXHRjb25zdCBbbG93ZXIsIHVwcGVyXSA9IHF1ZXJ5XG5cdFx0LnRvU3RyaW5nKClcblx0XHQucmVwbGFjZSgvLD9cXHMvLCAnLCcpXG5cdFx0LnNwbGl0KCcsJyk7XG5cblx0Ly8gTG93ZXItYm91bmQgc2hvdWxkIGFsd2F5cyBleGlzdDsgZWl0aGVyIGFzIG5hbWVkIGJyZWFrcG9pbnQgb3IgcHggdmFsdWVcblx0bGV0IGxvd2VyV2lkdGggPSBCUkVBS1BPSU5UU1tsb3dlcl0gfHwgcGFyc2VJbnQobG93ZXIpO1xuXHQvLyBBY2NvdW50IGZvciBuYW1lZCBicmVha3BvaW50ICdub25lJywgYW5kIGV2YWx1YXRlIGl0IGFzIDBweFxuXHRsb3dlcldpZHRoID0gbG93ZXIgPT09ICdub25lJyA/IDAgOiBsb3dlcldpZHRoO1xuXG5cdC8vIEdldCB1cHBlci1ib3VuZCAoaS5lLiBuZXh0IGJyZWFrcG9pbnQgdGhyZXNob2xkKSwgb3IgcGFyc2UgYXMgaW50LFxuXHQvLyBvciwgZmFpbGluZyB0aGF0LCB1c2UgSW5maW5pdHkgYXMgYSBmYWxsYmFja1xuXHRjb25zdCB1cHBlcldpZHRoID0gZ2V0QnBVcHBlckxpbWl0KHVwcGVyKSB8fCBwYXJzZUludCh1cHBlcikgfHwgSW5maW5pdHk7XG5cblx0Ly8gV2lkdGggb2YgY3VycmVudCBicmVha3BvaW50XG5cdGNvbnN0IGJwV2lkdGggPSBCUkVBS1BPSU5UU1ticF0gfHwgcGFyc2VJbnQoYnApO1xuXG5cdC8vIFZhbGlkYXRlIHF1ZXJ5IGJ5IGNoZWNraW5nIGlmIGxvd2VyIGJvdW5kIGV4aXN0c1xuXHQvLyBBY2NvdW50IGZvciAnMCcgbG93ZXJXaWR0aCwgd2hpY2ggd291bGQgb3RoZXJ3aXNlIGV2YWx1YXRlIGFzIGZhbHN5XG5cdGlmICghbG93ZXJXaWR0aCAmJiBsb3dlcldpZHRoICE9PSAwKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YEludmFsaWQgYnJlYWtwb2ludCBxdWVyeSAnJHtxdWVyeX0nIHByb3ZpZGVkLiBRdWVyeSBtdXN0IGJlIGluIGZvcm1hdCBcXGBcXCR7bG93ZXJ9LCBcXCR7dXBwZXJ9XFxgIChjb21tYSBzZXBhcmF0ZWQpLCB3aGVyZSBsb3dlci91cHBlciBhcmUgZWl0aGVyIG5hbWVkIGJyZWFrcG9pbnRzIG9yIHB4IHZhbHVlcy4gVXBwZXIgaXMgb3B0aW9uYWwuYCxcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBlbHNlIGlmICghYnBXaWR0aCAmJiBicFdpZHRoICE9PSAwKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0YEludmFsaWQgYnJlYWtwb2ludCB2YWx1ZSAnJHticH0nIHByb3ZpZGVkLiBCcmVha3BvaW50IHNob3VsZCBlaXRoZXIgYmUgbmFtZWQsIG9yIGEgcGl4ZWwgdmFsdWUuYCxcblx0XHQpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE5vdGUgdGhhdCBsb3dlci1ib3VuZCBpcyBpbmNsdXNpdmVcblx0Y29uc3QgbW9yZVRoYW5Mb3dlciA9IGJwV2lkdGggPj0gbG93ZXJXaWR0aDtcblx0Y29uc3QgbGVzc1RoYW5VcHBlciA9IGJwV2lkdGggPCB1cHBlcldpZHRoO1xuXG5cdHJldHVybiBtb3JlVGhhbkxvd2VyICYmIGxlc3NUaGFuVXBwZXI7XG59XG4iXX0=