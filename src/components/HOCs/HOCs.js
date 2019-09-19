/* eslint-disable react/no-multi-comp */

import React from 'react';
import BreakpointContainer from '../BreakpointContainer';
import BrowserContainer from '../BrowserContainer';

/**
 * Centralised BreakpointContainer HOC template
 * for Breakpoint/Browser container HOCs.
 *
 * @param {*} BreakpointWrapper - BreakpointContainer (or BrowserContainer).
 * @param {*} Component - Component; i.e. contents of HOC.
 * @param {*} bpcProps - BreakpointContainer props.
 */
function withBpcTemplate(BreakpointWrapper, Component, bpcProps) {
	const WithBpc = props => (
		<BreakpointWrapper {...bpcProps}>
			{(bpName, bpSize) => (
				<Component
					{...props}
					{...{
						bpName,
						bpSize,
					}}
				/>
			)}
		</BreakpointWrapper>
	);

	const wrappedComponentName =
		Component.displayName || Component.name || 'Component';

	WithBpc.displayName = `withBreakpointContainer(${wrappedComponentName})`;
	return WithBpc;
}

// ------------------------

const withBreakpointContainer = (Component, bpcProps) =>
	withBpcTemplate(BreakpointContainer, Component, bpcProps);

const withBrowserContainer = (Component, bpcProps) =>
	withBpcTemplate(BrowserContainer, Component, bpcProps);

// ------------------------

export { withBreakpointContainer, withBrowserContainer };
