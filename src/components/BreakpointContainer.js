import React from 'react';
import T from 'prop-types';
import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';

import { WithContext, ID_DEFAULT, ID_BROWSER } from './Context.js';
import { BREAKPOINTS } from '../data/breakpoints.js';

import '../scss/debug.scss';

// ------------------------
// Variables
// ------------------------

// eslint-disable-next-line eqeqeq
const DEBUG_BROWSER = (process.env.BPC_DEBUG_BROWSER != undefined)
	? process.env.BPC_DEBUG_BROWSER === 'true'
	: process.env.NODE_ENV === 'development';
// eslint-disable-next-line eqeqeq
const DEBUG_BPC = (process.env.BPC_DEBUG_CONTAINERS != undefined)
	? process.env.BPC_DEBUG_CONTAINERS === 'true'
	: false;

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
// Core Exports
// ------------------------

// TODO docs?
export class BreakpointContainer extends React.Component {
	static propTypes = {
		identifier: T.string.isRequired,
		containerClass: T.string,
		className: T.string,
		children: T.oneOfType([T.node, T.func]).isRequired,

		// Flags
		debug: T.bool,
		noClasses: T.bool,

		// Callbacks
		onChange: T.func,
	};

	static defaultProps = {
		identifier: ID_DEFAULT,
		containerClass: null,
		className: null,
		// Debug null instead of false so we can opt-out of global debug
		debug: null,
		noClasses: false,
		onChange: null,
	};

	constructor() {
		super();

		this.state = {
			size: 0,
			currentBp: null,
		};
	}

	componentDidUpdate(prevProps, prevState) {
		// Check if bp changed to support 'onChange' callback
		if (typeof this.props.onChange === 'function' &&
			this.state.currentBp !== prevState.currentBp) {

			this.props.onChange(this.state.currentBp);
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

// Emulates media query functionality, and enables 'standalone' <Breakpoint/>s
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin
// eslint-disable-next-line react/prop-types
export const BrowserContainer = ({ children, ...bpcProps }) => (
	<BreakpointContainer
		identifier={ID_BROWSER}
		className={SELECTORS.BP_BROWSER}
		debug={DEBUG_BROWSER}
		{...bpcProps}
	>
		{ children }
	</BreakpointContainer>
);
