"use strict";

require("core-js/modules/es.object.define-property");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2Nzcy1pbi1qcy50cyJdLCJuYW1lcyI6WyJicGMiLCJxdWVyeSIsImJwTmFtZSIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7O0FBSEE7O0FBQ0E7O0FBSUE7OztBQUdBOztBQUVBOzs7Ozs7Ozs7QUFTTyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQWdCQyxNQUFoQjtBQUFBLFNBQTRDLFVBQUNDLEdBQUQ7QUFBQSxXQUM5RCxDQUFDLENBQUMsNEJBQVVGLEtBQVYsRUFBaUJDLE1BQWpCLENBQUYsR0FBNkJDLEdBQTdCLEdBQW1DLElBRDJCO0FBQUEsR0FBNUM7QUFBQSxDQUFaIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETyByZW1vdmUgdGhpcyB3aGVuIG90aGVyIENTUyBpbiBKUyBwYXR0ZXJucyBleGlzdFxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuXG5pbXBvcnQgeyByZXNvbHZlQnAgfSBmcm9tICcuL2JyZWFrcG9pbnRzJztcblxuLyoqXG4gKiBUT0RPLlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gYnAoKSB7fVxuXG4vKipcbiAqIENvbmRpdGlvbmFsbHkgcmVuZGVyIGNzcyB2aWEgdGVtcGxhdGUgbGl0ZXJhbCAoQ1NTIGluIEpTKVxuICogYnkgcHJvdmlkaW5nIHF1ZXJ5IHN0cmluZyBhbmQgYnJlYWtwb2ludCB0byBtZWFzdXJlIGFnYWluc3QuXG4gKiBBY3RzIGFzIGEgcHJveHkgdG8gYHJlc29sdmVCcGAgY29yZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gcXVlcnkgLSBCcmVha3BvaW50IHF1ZXJ5IHN0cmluZy5cbiAqIEBwYXJhbSBicCAtIEJyZWFrcG9pbnQgbmFtZSwgb3IgcHggc2l6ZSB0byByZXNvbHZlIHF1ZXJ5IGFnYWluc3QuXG4gKiBAcmV0dXJucyBDU1MuXG4gKi9cbmV4cG9ydCBjb25zdCBicGMgPSAocXVlcnk6IHN0cmluZywgYnBOYW1lOiBzdHJpbmcgfCBudW1iZXIpID0+IChjc3M6IGFueSkgPT5cblx0ISFyZXNvbHZlQnAocXVlcnksIGJwTmFtZSkgPyBjc3MgOiBudWxsO1xuIl19