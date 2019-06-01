import { resolveBp } from '../data/breakpoints';

export function bp() {}

export function bpc(query, bp) {
	return css => (!!resolveBp(query, bp) ? css : null);
}
