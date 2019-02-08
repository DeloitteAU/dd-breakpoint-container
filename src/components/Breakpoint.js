/* eslint-disable import/prefer-default-export */

import React from 'react';
import T from 'prop-types';

import { BREAKPOINTS, getBpUpperLimit } from '../data/breakpoints.js';
import { BP_CONTEXTS, ID_DEFAULT } from './Context.js';

// TODO docs - also explain inclusive bp, i.e. s-m includes both s & m, whereas just s would be s, s
function Breakpoint({ q, query, identifier, children }) {
	const bpQuery = q || query; // Aggregate query shorthand
	const [lower, upper] = bpQuery.replace(' ', '').split(',');

	const Context = BP_CONTEXTS[identifier];

	return (
		<Context.Consumer>
			{ bp => {
				const bpWidth = BREAKPOINTS[bp] || 0;
				const lowerWidth = BREAKPOINTS[lower] || parseInt(lower);
				// Get upper bound (i.e. next breakpoint), or parse as int, or failing
				// that and no threshold has been specified, use Infinity as upper bound
				const upperWidth = getBpUpperLimit(upper) || parseInt(upper) || Infinity;

				const moreThanLower = bpWidth >= lowerWidth;
				const lessThanUpper = upper == null || bpWidth < upperWidth;

				return (moreThanLower && lessThanUpper) && children;
			} }
		</Context.Consumer>
	);
};

Breakpoint.propTypes = {
	q: T.oneOfType([T.string, T.number]),
	query: T.oneOfType([T.string, T.number]),
	identifier: T.string.isRequired,
	children: T.node.isRequired,
};

Breakpoint.defaultProps = {
	q: null, // 'query' shorthand
	query: 0,
	identifier: ID_DEFAULT,
};

export { Breakpoint };
