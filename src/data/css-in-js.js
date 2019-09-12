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
export const bpc = (query, bp) => css => (!!resolveBp(query, bp) ? css : null);
