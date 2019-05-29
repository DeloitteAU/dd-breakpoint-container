import { resolveBp } from '../data/breakpoints';

/**
 * TODO.
 *
 * @export
 */
export function bp() {}

/**
 * TODO.
 *
 * @export
 * @param {*} query
 * @param {*} bp
 * @returns
 */
export function bpc(query, bp) {
	return css => (!!resolveBp(query, bp) ? css : null);
}
