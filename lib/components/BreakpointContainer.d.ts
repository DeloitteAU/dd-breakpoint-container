import * as React from 'react';
import '../css/debug.css';
export declare const SELECTORS: {
    BP_BROWSER: string;
    BP_CONTENT: string;
    DEBUG_INDICATOR: string;
    DEBUG_IDENTIFIER: string;
};
export declare const BreakpointDefinitions: React.Context<{
    [value: string]: number;
}>;
export declare const AppBreakpoint: React.Context<{}>;
export interface IProps {
    className?: string;
    containerClass?: string;
    children: React.ReactNode | ((bpName: string, bpSize: number) => React.ReactNode);
    identifier?: string;
    customBreakpoints?: {
        [value: string]: number;
    };
    onChange?: (bpName?: string, bpSize?: number) => void;
    debug?: boolean;
    noBpClasses?: boolean;
}
interface IState {
    size?: number;
    currentBp?: string;
}
export default class BreakpointContainer extends React.Component<IProps, IState> {
    state: {
        size: undefined;
        currentBp: undefined;
    };
    componentDidUpdate(prevProps: IProps, prevState: IState): void;
    render(): JSX.Element;
}
export {};
