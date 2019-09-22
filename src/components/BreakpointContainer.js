import React from 'react';
import T from 'prop-types';
import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';

import { BreakpointDefinitions } from './BrowserContainer';
import { WithContext, ID_DEFAULT, ID_BROWSER } from './Context.js';

import '../css/debug.css';

// ------------------------
// Variables
// ------------------------

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

// ------------------------
// Export
// ------------------------

export default class BreakpointContainer extends React.Component {
	static propTypes = {
		className: T.string,
		containerClass: T.string,
		children: T.oneOfType([T.node, T.func]).isRequired,
		identifier: T.string,

		customBreakpoints: T.object,

		// Callbacks
		onChange: T.func,

		// Flags
		debug: T.bool,
		noBpClasses: T.bool,
	};

	static defaultProps = {
		className: null,
		containerClass: null,
		identifier: ID_DEFAULT,

		customBreakpoints: null,

		onChange: null,

		// Debug null instead of false so we can opt-out of global debug
		debug: null,
		noBpClasses: false,
	};

	constructor() {
		super();

		this.state = {
			size: null,
			currentBp: null,
		};
	}

	componentDidUpdate(prevProps, prevState) {
		// Check if bp changed to support 'onChange' callback
		if (
			typeof this.props.onChange === 'function' &&
			this.state.currentBp !== prevState.currentBp
		) {
			this.props.onChange(this.state.currentBp);
		}
	}

	render() {
		const {
			identifier,
			className,
			containerClass,
			noBpClasses,
			debug,
			customBreakpoints,
			children,
		} = this.props;

		// Debug mode - component flag, and account for opt-out of global flag
		const isDebugActive = debug || (debug !== false && DEBUG_BPC);

		return (
			<BreakpointDefinitions.Consumer>
				{breakpoints => {
					const breakpointList = customBreakpoints || breakpoints;

					const matchingBps = Object.keys(breakpointList).filter(
						bpName => this.state.size >= breakpointList[bpName],
					);
					const currentBp = matchingBps[matchingBps.length - 1];

					// Formatted breakpoints for className output
					const classBps = matchingBps
						.map(bpName => `${CLASSES.BP_PREFIX}${bpName}`)
						.join(' ');

					return (
						<div
							className={cx(CLASSES.CORE, containerClass, {
								[classBps]: !noBpClasses,
								[CLASSES.DEBUG_MODIFIER]: isDebugActive,
								// If there are no class name outputs, BUT debug mode is on,
								// render the active bp as a class to enable CSS debug indicator
								[`${CLASSES.BP_PREFIX}${currentBp}`]: debug && noBpClasses,
							})}
						>
							<ReactResizeDetector
								handleWidth
								onResize={size => this.setState({ size, currentBp })}
							/>

							{/* Only render contents if we know what the breakpoint is;
							this prevents content from rendering prematurely (first-pass)
							and causing flashes (i.e. rendering at 'none' bp before true
							breakpoint 'l' is calculated and communicated to children. Causes
							mobile content/styles to flash render in many cases). */}
							{this.state.size !== null && (
								<>
									<div className={cx(SELECTORS.BP_CONTENT, className)}>
										<WithContext {...{ identifier, currentBp }}>
											{typeof children === 'function'
												? children(currentBp, this.state.size)
												: children}
										</WithContext>
									</div>

									{isDebugActive && (
										<>
											<span className={SELECTORS.DEBUG_INDICATOR}>
												{currentBp || 'none'}
											</span>
											{identifier !== ID_DEFAULT &&
												identifier !== ID_BROWSER && (
													<span className={SELECTORS.DEBUG_IDENTIFIER}>
														{identifier}
													</span>
												)}
										</>
									)}
								</>
							)}
						</div>
					);
				}}
			</BreakpointDefinitions.Consumer>
		);
	}
}
