import * as React from 'react';
import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';

import { BREAKPOINTS } from '../data/breakpoints';
import { WithContext, ID_DEFAULT, ID_BROWSER } from './Context';

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

// Exported so BrowserContainer can utilise it
export const SELECTORS = {
	BP_BROWSER: `${CLASSES.CORE}__browser`,
	BP_CONTENT: `${CLASSES.CORE}__content`,
	DEBUG_INDICATOR: `${CLASSES.CORE}__debugIndicator`,
	DEBUG_IDENTIFIER: `${CLASSES.CORE}__debugIdentifier`,
};

// Although these root Contexts are used in <BrowserContainer/>, they
// are defined here to avoid circular dependencies (via `import ...`)
export const BreakpointDefinitions = React.createContext(BREAKPOINTS);
export const AppBreakpoint = React.createContext({});

// ------------------------
// Export
// ------------------------

export interface IProps {
	className?: string;
	containerClass?: string;
	children:
		| React.ReactNode
		| ((bpName: string, bpSize: number) => React.ReactNode);
	identifier?: string;

	customBreakpoints?: {
		[value: string]: number;
	};

	// Callbacks
	onChange?: (bpName?: string, bpSize?: number) => void;

	// Flags
	debug?: boolean;
	noBpClasses?: boolean;
}

interface IState {
	size?: number;
	currentBp?: string;
}

export default class BreakpointContainer extends React.Component<
	IProps,
	IState
> {
	state = { size: undefined, currentBp: undefined };

	componentDidUpdate(prevProps: IProps, prevState: IState) {
		// Check if bp changed to support 'onChange' callback
		if (
			typeof this.props.onChange === 'function' &&
			this.state.currentBp !== prevState.currentBp
		) {
			this.props.onChange(this.state.currentBp, this.state.size);
		}
	}

	render() {
		const {
			identifier = ID_DEFAULT,
			className,
			containerClass,
			noBpClasses = false,
			debug = null,
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
						bpName => (this.state.size || 0) >= breakpointList[bpName],
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
							{!!this.state.size && (
								<>
									<div className={cx(SELECTORS.BP_CONTENT, className)}>
										<WithContext {...{ identifier, currentBp }}>
											{typeof children === 'function'
												? (children as Function)(currentBp, this.state.size)
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
