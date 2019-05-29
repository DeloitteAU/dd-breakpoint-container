/* eslint-disable */
import React from 'react';
import {
	BreakpointContainer,
	BrowserContainer,
} from './BreakpointContainer.js';

export function withBreakpointContainer(Component, bpcProps) {
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

// ------------------------

export function withBrowserContainer(Component, bpcProps) {
	function WithBrowserBpc(props) {
		return (
			<BrowserContainer {...bpcProps}>
				<Component {...props} />
			</BrowserContainer>
		);
	}

	const wrappedComponentName =
		Component.displayName || Component.name || 'Component';

	WithBrowserBpc.displayName = `withBrowserContainer(${wrappedComponentName})`;
	return WithBrowserBpc;
}
