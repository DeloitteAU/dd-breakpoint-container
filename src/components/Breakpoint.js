import React from 'react';
import T from 'prop-types';

import { resolveBp } from '../data/breakpoints.js';
import { BP_CONTEXTS, ID_DEFAULT } from './Context.js';

const Breakpoint = ({ q, query, identifier, children }) => {
	const bpQuery = q || query; // Aggregate query shorthand
	const Context = BP_CONTEXTS[identifier];

	return (
		<Context.Consumer>
			{/* Render children only if breakpoint query resolves */}
			{bp => resolveBp(bpQuery, bp) && children}
		</Context.Consumer>
	);
};

Breakpoint.propTypes = {
	query: T.oneOfType([T.string, T.number]),
	q: T.oneOfType([T.string, T.number]),
	identifier: T.string.isRequired,
	children: T.node.isRequired,
};

Breakpoint.defaultProps = {
	query: 0,
	q: null, // 'query' shorthand
	identifier: ID_DEFAULT,
};

export default Breakpoint;
