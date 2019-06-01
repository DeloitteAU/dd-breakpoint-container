import React from 'react';
import BrowserContainer from '../BrowserContainer.js';

export default function withBrowserContainer(Component, bpcProps) {
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
