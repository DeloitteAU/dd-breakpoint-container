import React from 'react';
import T from 'prop-types';
import BreakpointContainer from './BreakpointContainer';
import { ID_BROWSER } from './Context.js';

import '../css/debug.css';

// ------------------------
// Variables
// ------------------------

const DEBUG_BROWSER = process.env.NODE_ENV === 'development';

export const AppBreakpoint = React.createContext();

// NOTE: If you're going to change any CLASSES or SELECTORS, you'll
// need to also change the  corresponding variables in the SCSS file
const CLASSES = {
	CORE: 'bpc',
	BP_PREFIX: '-',
	DEBUG_MODIFIER: '-debug',
};

const SELECTORS = {
	BP_BROWSER: `${CLASSES.CORE}__browser`,
	BP_CONTENT: `${CLASSES.CORE}__content`,
	DEBUG_INDICATOR: `${CLASSES.CORE}__debugIndicator`,
	DEBUG_IDENTIFIER: `${CLASSES.CORE}__debugIdentifier`,
};

// ------------------------
// Export
// ------------------------

// Emulates media query functionality, and enables 'standalone' <Breakpoint/>
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin
const BrowserContainer = ({ children, ...props }) => (
	<BreakpointContainer
		identifier={ID_BROWSER}
		className={SELECTORS.BP_BROWSER}
		debug={DEBUG_BROWSER}
		{...props}
	>
		{(bpName, bpSize) => (
			<AppBreakpoint.Provider value={{ bpName, bpSize }}>
				<>
					{/* Note: This is wrapped in a fragment to be
					certain that the above Provider only has one
					child, which is a strict requirement that would
					otherwise depend on how children are passed */}
					{children}
				</>
			</AppBreakpoint.Provider>
		)}
	</BreakpointContainer>
);

BrowserContainer.propTypes = {
	children: T.oneOfType([T.node, T.func]).isRequired,
};

export default BrowserContainer;
