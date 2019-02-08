import React from 'react';
import T from 'prop-types';
import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';

import './main.scss';

// ------------------------
// Variables
// ------------------------

const DEBUG_BROWSER = true;
const DEBUG_BPC = false;

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

// NOTE: These key:value pairs mirror those in this module's SCSS
// If you're going to add or change bps, check the notes near the top of the SCSS file
export const BREAKPOINTS = {
	xxxs: 320,
	xxs: 359,
	xs: 480,
	s: 640,
	m: 768,
	l: 1024,
	xl: 1244,
	xxl: 1410,
	xxxl: 1690,
};

/*
 * Returns the breakpoint 'upper-limit' width in pixels,
 * which is essentially the width of the next breakpoint
 *
 * @param {String} bp
 * @returns {Number}
 */
export function getBpUpperLimit(bp) {
	if (!Number.isNaN(parseInt(bp))) { return null; }

	const bpKeys = Object.keys(BREAKPOINTS);
	const nextHighestBpIndex = bpKeys.indexOf(bp) + 1;

	// Check edge-case for when target breakpoint is the last in the array, in which
	// case Infinity is an acceptable upper-bound, since there is no threshold
	const nextHighestBpWidth =
		nextHighestBpIndex !== (BREAKPOINTS.length - 1)
			? BREAKPOINTS[bpKeys[nextHighestBpIndex]]
			: Infinity;

	return nextHighestBpWidth;
}

// ------------------------
// Context API
// ------------------------
// Used to link each <Breakpoint/> to nearest <BPC/> parent

const ID_DEFAULT = 'default';
const ID_BROWSER = 'browser';

// NOTE: Other identifier contexts are created as-needed in WithContext
const BpContexts = {
	[ID_DEFAULT]: React.createContext(),
	[ID_BROWSER]: React.createContext(),
};

// TODO docs? necessary here with internal comments already? should you doc functional components?
function WithContext({ identifier, currentBp, children }) {
	// If a BPC has specified an identifier other than the default
	const hasIdentifier = identifier !== ID_DEFAULT;

	// Create specific context if it doesn't already exist
	if (hasIdentifier && !BpContexts[identifier]) {
		BpContexts[identifier] = React.createContext();
	}

	// CoreContext aka 'default' context must always be present, even if the
	// BPC has a specified identifier - this is to enable the default behaviour
	// of <Breakpoint/> components that don't specify an target BPC identifier
	const CoreContext = BpContexts[ID_DEFAULT];
	const IdentifierContext = BpContexts[identifier];

	return (
		<React.Fragment>
			{ hasIdentifier ? (
				<IdentifierContext.Provider value={currentBp}>
					<CoreContext.Provider value={currentBp}>
						{ children }
					</CoreContext.Provider>
				</IdentifierContext.Provider>
			) : (
				<IdentifierContext.Provider value={currentBp}>
					{ children }
				</IdentifierContext.Provider>
			) }
		</React.Fragment>
	);
};

WithContext.propTypes = {
	identifier: T.string.isRequired,
	currentBp: T.string,
	children: T.node.isRequired,
};

WithContext.defaultProps = {
	currentBp: null,
};

// ------------------------
// Core Exports
// ------------------------

// TODO docs?
export default class BreakpointContainer extends React.Component {
	static propTypes = {
		identifier: T.string.isRequired,
		containerClass: T.string,
		className: T.string,
		children: T.oneOfType([T.node, T.func]).isRequired,

		// Flags
		debug: T.bool,
		noClasses: T.bool,

		// Callbacks
		onBpChanged: T.func,
	};

	static defaultProps = {
		identifier: ID_DEFAULT,
		containerClass: null,
		className: null,
		// Debug null instead of false so we can opt-out of global debug
		debug: null,
		noClasses: false,
		onBpChanged: null,
	};

	constructor() {
		super();

		this.state = {
			size: 0,
			currentBp: null,
		};
	}

	componentDidUpdate(prevProps, prevState) {
		// Check if bp changed to support 'onBpChanged' callback
		if (typeof this.props.onBpChanged === 'function' &&
			this.state.currentBp !== prevState.currentBp) {

			this.props.onBpChanged(this.state.currentBp);
		}
	}

	render() {
		const {
			identifier,
			className,
			containerClass,
			noClasses,
			debug,
			children,
		} = this.props;

		const matchingBps =
			Object.keys(BREAKPOINTS).filter(bp => (
				this.state.size >= BREAKPOINTS[bp]
			));
		const currentBp = matchingBps[matchingBps.length - 1];

		// Formatted breakpoints for className output
		const classBps = matchingBps.map(bp => `${CLASSES.BP_PREFIX}${bp}`).join(' ');

		// Debug mode - component flag, and account for opt-out of global flag
		const isDebugActive = debug || (debug !== false && DEBUG_BPC);

		return (
			<React.Fragment>
				<div className={cx(
					CLASSES.CORE,
					containerClass,
					{
						[classBps]: !noClasses,
						[CLASSES.DEBUG_MODIFIER]: isDebugActive,
						// If there are no class name outputs, BUT debug mode is on,
						// render the active bp as a class to enable CSS debug indicator
						[`${CLASSES.BP_PREFIX}${currentBp}`]: debug && noClasses,
					},
				)}>
					<ReactResizeDetector
						handleWidth
						onResize={size => this.setState({ size, currentBp })}
					/>

					<div className={cx(SELECTORS.BP_CONTENT, className)}>
						<WithContext {...{ identifier, currentBp }}>
							{ typeof children === 'function'
								? children(currentBp, this.state.size)
								: children }
						</WithContext>
					</div>

					{ isDebugActive && (
						<React.Fragment>
							<span className={SELECTORS.DEBUG_INDICATOR}>
								{ currentBp || 'none' }
							</span>
							{ (identifier !== ID_DEFAULT && identifier !== ID_BROWSER) && (
								<span className={SELECTORS.DEBUG_IDENTIFIER}>
									{ identifier }
								</span>
							) }
						</React.Fragment>
					) }
				</div>
			</React.Fragment>
		);
	}
};

// ------------------------

// TODO docs - also explain inclusive bp, i.e. s-m includes both s & m, whereas just s would be s, s
function Breakpoint({ q, query, identifier, children }) {
	const bpQuery = q || query; // Aggregate query shorthand
	const [lower, upper] = bpQuery.replace(' ', '').split(',');

	const Context = BpContexts[identifier];

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

// ------------------------

// Emulates media query functionality, and enables 'standalone' <Breakpoint/>s
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin
// eslint-disable-next-line react/prop-types
export const BrowserBreakpoints = ({ children, ...bpcProps }) => (
	<BreakpointContainer
		identifier={ID_BROWSER}
		className={SELECTORS.BP_BROWSER}
		debug={DEBUG_BROWSER}
		{...bpcProps}
	>
		{ children }
	</BreakpointContainer>
);

// ------------------------
// Higher Order Components
// ------------------------

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
