import * as React from 'react';

import BreakpointContainer, {
	AppBreakpoint,
	BreakpointDefinitions,
	IProps as IBpcProps,
	SELECTORS,
} from './BreakpointContainer';
import { BREAKPOINTS } from '../data/breakpoints';
import { ID_BROWSER } from './Context';

const DEBUG_BROWSER = process.env.NODE_ENV === 'development';

// Emulates media query functionality, and enables 'standalone' <Breakpoint/>
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin
const BrowserContainer = ({
	children,
	customBreakpoints,
	...props
}: IBpcProps) => (
	<BreakpointContainer
		identifier={ID_BROWSER}
		className={SELECTORS.BP_BROWSER}
		debug={DEBUG_BROWSER}
		customBreakpoints={customBreakpoints}
		{...props}
	>
		{(bpName, bpSize) => (
			<BreakpointDefinitions.Provider value={customBreakpoints || BREAKPOINTS}>
				<AppBreakpoint.Provider value={{ bpName, bpSize }}>
					<>
						{/* Note: This is wrapped in a fragment to be
						certain that the above Provider only has one
						child, which is a strict requirement that would
						otherwise depend on how children are passed */}
						{typeof children === 'function'
							? (children as Function)(bpName, bpSize)
							: children}
					</>
				</AppBreakpoint.Provider>
			</BreakpointDefinitions.Provider>
		)}
	</BreakpointContainer>
);

export default BrowserContainer;
