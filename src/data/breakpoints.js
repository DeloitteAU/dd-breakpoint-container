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

/**
 * Returns the breakpoint 'upper-limit' width in pixels,
 * which is essentially the width of the next breakpoint.
 *
 * @param {string} bpName - Named breakpoint
 * @returns {number}
 */
export function getBpUpperLimit(bpName) {
	if (!Number.isNaN(parseInt(bpName))) {
		return null;
	}

	const bpKeys = Object.keys(BREAKPOINTS);
	const nextHighestBpIndex = bpKeys.indexOf(bpName) + 1;

	// Check edge-case for when target breakpoint is the last in the array, in which
	// case Infinity is an acceptable upper-bound, since there is no threshold
	const nextHighestBpWidth =
		nextHighestBpIndex !== BREAKPOINTS.length - 1
			? BREAKPOINTS[bpKeys[nextHighestBpIndex]]
			: Infinity;

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
	// Helper function to parse breakpoint into pixels
	// Non-strict null check to avoid '0' being evaluated as falsey
	const parseBp = bp =>
		BREAKPOINTS[bp] != null ? BREAKPOINTS[bp] : parseInt(bp);

	// Extract lower and upper-bounds from query
	// Normalise string and comma/whitespace separation
	const [lower, upper] = query
		.toString()
		.replace(/,?\s/, ',')
		.split(',');

	// Lower-bound should always exist; either as named breakpoint or px value
	const lowerWidth = parseBp(lower);

	// Get upper-bound (i.e. next breakpoint threshold), or parse as int,
	// or, failing that, use Infinity as a fallback
	const upperWidth = getBpUpperLimit(upper) || parseInt(upper) || Infinity;

	// Width of current breakpoint
	const bpWidth = parseBp(bp);

	// Validate query by checking if lower bound exists
	// Account for '0' lowerWidth, which would otherwise evaluate as falsy
	if (!lowerWidth && lowerWidth !== 0) {
		console.warn(
			`Invalid breakpoint query '${query}' provided. Query must be in format \`\${lower}, \${upper}\` (comma separated), where lower/upper are either named breakpoints or px values. Upper is optional.`,
		);
		return false;
	} else if (!bpWidth && bpWidth !== 0) {
		console.warn(
			`Invalid breakpoint value '${bp}' provided. Breakpoint should either be named, or a pixel value.`,
		);
		return false;
	}

	// Note that lower-bound is inclusive
	const moreThanLower = bpWidth >= lowerWidth;
	const lessThanUpper = bpWidth < upperWidth;

	return moreThanLower && lessThanUpper;
}
