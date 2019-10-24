import * as React from 'react';

import {
	default as BreakpointContainer,
	IProps as IBpcProps,
} from 'components/BreakpointContainer';
import BrowserContainer from 'components/BrowserContainer';

/**
 * Centralised BreakpointContainer HOC template
 * for Breakpoint/Browser container HOCs.
 *
 * @param BreakpointWrapper - BreakpointContainer (or BrowserContainer).
 * @param Component - Component; i.e. contents of HOC.
 * @param bpcProps - BreakpointContainer props.
 */
const withBpcTemplate = <P extends object>(
	BreakpointWrapper: any,
	Component: React.ComponentType<P>,
	bpcProps: IBpcProps,
): React.FC<
	P & {
		bpName: string;
		bpSize: number;
	}
> => {
	const WithBpc = (props: P) => (
		<BreakpointWrapper {...bpcProps}>
			{(bpName: string, bpSize: number) => (
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
};

// ------------------------

const withBreakpointContainer = (
	Component: React.ComponentType,
	bpcProps: IBpcProps,
) => withBpcTemplate(BreakpointContainer, Component, bpcProps);

const withBrowserContainer = (
	Component: React.ComponentType,
	bpcProps: IBpcProps,
) => withBpcTemplate(BrowserContainer, Component, bpcProps);

// ------------------------

export { withBreakpointContainer, withBrowserContainer };
