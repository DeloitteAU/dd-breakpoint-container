// NOTE: These key:value pairs mirror those in this module's SCSS
// If you're going to add or change bps, check the notes near the top of the SCSS file
export const BREAKPOINTS = {
	none: 0,
	xxxs: 320,
	xxs: 359,
	xs: 480,
	s: 640,
	m: 768,
	l: 1024,
	xl: 1244,
	xxl: 1410,
	xxxl: 1690,
};

/*
 * Returns the breakpoint 'upper-limit' width in pixels,
 * which is essentially the width of the next breakpoint
 *
 * @param {String} bp
 * @returns {Number}
 */
export function getBpUpperLimit(bp) {
	if (!Number.isNaN(parseInt(bp))) { return null; }

	const bpKeys = Object.keys(BREAKPOINTS);
	const nextHighestBpIndex = bpKeys.indexOf(bp) + 1;

	// Check edge-case for when target breakpoint is the last in the array, in which
	// case Infinity is an acceptable upper-bound, since there is no threshold
	const nextHighestBpWidth =
		nextHighestBpIndex !== (BREAKPOINTS.length - 1)
			? BREAKPOINTS[bpKeys[nextHighestBpIndex]]
			: Infinity;

	return nextHighestBpWidth;
}
