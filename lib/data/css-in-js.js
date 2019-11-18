"use strict";

require("core-js/modules/es.object.define-property");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2Nzcy1pbi1qcy50cyJdLCJuYW1lcyI6WyJicGMiLCJxdWVyeSIsImJwTmFtZSIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQTs7QUFIQTs7QUFDQTs7QUFJQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7OztBQVNPLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBZ0JDLE1BQWhCO0FBQUEsU0FBNEMsVUFBQ0MsR0FBRDtBQUFBLFdBQzlELENBQUMsQ0FBQyw0QkFBVUYsS0FBVixFQUFpQkMsTUFBakIsQ0FBRixHQUE2QkMsR0FBN0IsR0FBbUMsSUFEMkI7QUFBQSxHQUE1QztBQUFBLENBQVoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPIHJlbW92ZSB0aGlzIHdoZW4gb3RoZXIgQ1NTIGluIEpTIHBhdHRlcm5zIGV4aXN0XG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmltcG9ydCB7IHJlc29sdmVCcCB9IGZyb20gJy4vYnJlYWtwb2ludHMnO1xuXG4vKipcbiAqIFRPRE8uXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBicCgpIHt9XG5cbi8qKlxuICogQ29uZGl0aW9uYWxseSByZW5kZXIgY3NzIHZpYSB0ZW1wbGF0ZSBsaXRlcmFsIChDU1MgaW4gSlMpXG4gKiBieSBwcm92aWRpbmcgcXVlcnkgc3RyaW5nIGFuZCBicmVha3BvaW50IHRvIG1lYXN1cmUgYWdhaW5zdC5cbiAqIEFjdHMgYXMgYSBwcm94eSB0byBgcmVzb2x2ZUJwYCBjb3JlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSBxdWVyeSAtIEJyZWFrcG9pbnQgcXVlcnkgc3RyaW5nLlxuICogQHBhcmFtIGJwIC0gQnJlYWtwb2ludCBuYW1lLCBvciBweCBzaXplIHRvIHJlc29sdmUgcXVlcnkgYWdhaW5zdC5cbiAqIEByZXR1cm5zIENTUy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJwYyA9IChxdWVyeTogc3RyaW5nLCBicE5hbWU6IHN0cmluZyB8IG51bWJlcikgPT4gKGNzczogYW55KSA9PlxuXHQhIXJlc29sdmVCcChxdWVyeSwgYnBOYW1lKSA/IGNzcyA6IG51bGw7XG4iXX0=