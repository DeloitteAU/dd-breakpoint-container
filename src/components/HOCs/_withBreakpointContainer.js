import React from 'react';
import BreakpointContainer from '../BreakpointContainer.js';

export default function withBreakpointContainer(Component, bpcProps) {
	function WithBpc(props) {
		return (
			<BreakpointContainer {...bpcProps}>
				<Component {...props} />
			</BreakpointContainer>
		);
	}

	const wrappedComponentName =
		Component.displayName || Component.name || 'Component';

	WithBpc.displayName = `withBreakpointContainer(${wrappedComponentName})`;
	return WithBpc;
}
