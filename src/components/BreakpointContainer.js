import React from 'react';
import T from 'prop-types';
import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';

import { WithContext, ID_DEFAULT, ID_BROWSER } from './Context.js';
import { BREAKPOINTS } from '../data/breakpoints.js';

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

		onChange: null,

		// Debug null instead of false so we can opt-out of global debug
		debug: null,
		noBpClasses: false,
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
			children,
		} = this.props;

		const matchingBps = Object.keys(BREAKPOINTS).filter(
			bpName => this.state.size >= BREAKPOINTS[bpName],
		);
		const currentBp = matchingBps[matchingBps.length - 1];

		// Formatted breakpoints for className output
		const classBps = matchingBps
			.map(bpName => `${CLASSES.BP_PREFIX}${bpName}`)
			.join(' ');

		// Debug mode - component flag, and account for opt-out of global flag
		const isDebugActive = debug || (debug !== false && DEBUG_BPC);

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
						{identifier !== ID_DEFAULT && identifier !== ID_BROWSER && (
							<span className={SELECTORS.DEBUG_IDENTIFIER}>{identifier}</span>
						)}
					</>
				)}
			</div>
		);
	}
}
