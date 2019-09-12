import { resolveBp } from '../data/breakpoints';
/**
 * TODO.
 */

export function bp() {}
/**
 * Conditionally render css via template literal (CSS in JS)
 * by providing query string and breakpoint to measure against.
 * Acts as a proxy to `resolveBp` core function.
 *
 * @param {string} query - Breakpoint query string.
 * @param {string|number} bp - Breakpoint name, or px size to resolve query against.
 * @returns {string|undefined} CSS.
 */

export var bpc = function bpc(query, bp) {
  return function (css) {
    return !!resolveBp(query, bp) ? css : null;
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2Nzcy1pbi1qcy5qcyJdLCJuYW1lcyI6WyJyZXNvbHZlQnAiLCJicCIsImJwYyIsInF1ZXJ5IiwiY3NzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFULFFBQTBCLHFCQUExQjtBQUVBOzs7O0FBR0EsT0FBTyxTQUFTQyxFQUFULEdBQWMsQ0FBRTtBQUV2Qjs7Ozs7Ozs7OztBQVNBLE9BQU8sSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFRRixFQUFSO0FBQUEsU0FBZSxVQUFBRyxHQUFHO0FBQUEsV0FBSyxDQUFDLENBQUNKLFNBQVMsQ0FBQ0csS0FBRCxFQUFRRixFQUFSLENBQVgsR0FBeUJHLEdBQXpCLEdBQStCLElBQXBDO0FBQUEsR0FBbEI7QUFBQSxDQUFaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzb2x2ZUJwIH0gZnJvbSAnLi4vZGF0YS9icmVha3BvaW50cyc7XG5cbi8qKlxuICogVE9ETy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJwKCkge31cblxuLyoqXG4gKiBDb25kaXRpb25hbGx5IHJlbmRlciBjc3MgdmlhIHRlbXBsYXRlIGxpdGVyYWwgKENTUyBpbiBKUylcbiAqIGJ5IHByb3ZpZGluZyBxdWVyeSBzdHJpbmcgYW5kIGJyZWFrcG9pbnQgdG8gbWVhc3VyZSBhZ2FpbnN0LlxuICogQWN0cyBhcyBhIHByb3h5IHRvIGByZXNvbHZlQnBgIGNvcmUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gQnJlYWtwb2ludCBxdWVyeSBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGJwIC0gQnJlYWtwb2ludCBuYW1lLCBvciBweCBzaXplIHRvIHJlc29sdmUgcXVlcnkgYWdhaW5zdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8dW5kZWZpbmVkfSBDU1MuXG4gKi9cbmV4cG9ydCBjb25zdCBicGMgPSAocXVlcnksIGJwKSA9PiBjc3MgPT4gKCEhcmVzb2x2ZUJwKHF1ZXJ5LCBicCkgPyBjc3MgOiBudWxsKTtcbiJdfQ==