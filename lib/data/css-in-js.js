"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bpc = void 0;

var _breakpoints = require("./breakpoints");

// TODO remove this when other CSS in JS patterns exist

/* eslint-disable import/prefer-default-export */

/**
 * TODO.
 */
// export function bp() {}

/**
 * Conditionally render css via template literal (CSS in JS)
 * by providing query string and breakpoint to measure against.
 * Acts as a proxy to `resolveBp` core function.
 *
 * @param query - Breakpoint query string.
 * @param bp - Breakpoint name, or px size to resolve query against.
 * @returns CSS.
 */
var bpc = function bpc(query, bpName) {
  return function (css) {
    return !!(0, _breakpoints.resolveBp)(query, bpName) ? css : null;
  };
};

exports.bpc = bpc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2Nzcy1pbi1qcy50cyJdLCJuYW1lcyI6WyJicGMiLCJxdWVyeSIsImJwTmFtZSIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUhBOztBQUNBOztBQUlBOzs7QUFHQTs7QUFFQTs7Ozs7Ozs7O0FBU08sSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFnQkMsTUFBaEI7QUFBQSxTQUE0QyxVQUFDQyxHQUFEO0FBQUEsV0FDOUQsQ0FBQyxDQUFDLDRCQUFVRixLQUFWLEVBQWlCQyxNQUFqQixDQUFGLEdBQTZCQyxHQUE3QixHQUFtQyxJQUQyQjtBQUFBLEdBQTVDO0FBQUEsQ0FBWiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE8gcmVtb3ZlIHRoaXMgd2hlbiBvdGhlciBDU1MgaW4gSlMgcGF0dGVybnMgZXhpc3Rcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuaW1wb3J0IHsgcmVzb2x2ZUJwIH0gZnJvbSAnZGF0YS9icmVha3BvaW50cyc7XG5cbi8qKlxuICogVE9ETy5cbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGJwKCkge31cblxuLyoqXG4gKiBDb25kaXRpb25hbGx5IHJlbmRlciBjc3MgdmlhIHRlbXBsYXRlIGxpdGVyYWwgKENTUyBpbiBKUylcbiAqIGJ5IHByb3ZpZGluZyBxdWVyeSBzdHJpbmcgYW5kIGJyZWFrcG9pbnQgdG8gbWVhc3VyZSBhZ2FpbnN0LlxuICogQWN0cyBhcyBhIHByb3h5IHRvIGByZXNvbHZlQnBgIGNvcmUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHF1ZXJ5IC0gQnJlYWtwb2ludCBxdWVyeSBzdHJpbmcuXG4gKiBAcGFyYW0gYnAgLSBCcmVha3BvaW50IG5hbWUsIG9yIHB4IHNpemUgdG8gcmVzb2x2ZSBxdWVyeSBhZ2FpbnN0LlxuICogQHJldHVybnMgQ1NTLlxuICovXG5leHBvcnQgY29uc3QgYnBjID0gKHF1ZXJ5OiBzdHJpbmcsIGJwTmFtZTogc3RyaW5nIHwgbnVtYmVyKSA9PiAoY3NzOiBhbnkpID0+XG5cdCEhcmVzb2x2ZUJwKHF1ZXJ5LCBicE5hbWUpID8gY3NzIDogbnVsbDtcbiJdfQ==