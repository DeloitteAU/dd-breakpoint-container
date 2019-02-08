import React from 'react';
import BreakpointContainer, { BrowserBreakpoints } from './BreakpointContainer.js';

export function withBreakpointContainer(Component, bpcProps) {
	function WithBpc(props) {
		return (
			<BreakpointContainer {...bpcProps}>
				<Component {...props}/>
			</BreakpointContainer>
		);
	}

	const wrappedComponentName = Component.displayName
		|| Component.name || 'Component';

	WithBpc.displayName = `withBreakpointContainer(${wrappedComponentName})`;
	return WithBpc;
}

// ------------------------

export function withBrowserBreakpoints(Component, bpcProps) {
	function WithBrowserBpc(props) {
		return (
			<BrowserBreakpoints {...bpcProps}>
				<Component {...props}/>
			</BrowserBreakpoints>
		);
	}

	const wrappedComponentName = Component.displayName
		|| Component.name || 'Component';

	WithBrowserBpc.displayName = `withBrowserBreakpoints(${wrappedComponentName})`;
	return WithBrowserBpc;
}
