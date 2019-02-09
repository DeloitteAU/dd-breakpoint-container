import BreakpointContainer, { BrowserContainer } from './components/BreakpointContainer';
import { withBreakpointContainer, withBrowserContainer } from './components/HOCs';
import { Breakpoint } from './components/Breakpoint';
import { BREAKPOINTS, getBpUpperLimit } from './data/breakpoints';

export default BreakpointContainer;
export {
	BrowserContainer,
	withBreakpointContainer,
	withBrowserContainer,
	Breakpoint,
	BREAKPOINTS,
	getBpUpperLimit,
};
