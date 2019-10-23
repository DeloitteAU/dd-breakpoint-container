/// <reference types="react" />
import { IProps as IBpcProps } from 'components/BreakpointContainer';
import 'css/debug.css';
declare const BrowserContainer: ({ children, customBreakpoints, ...props }: IBpcProps) => JSX.Element;
export default BrowserContainer;
