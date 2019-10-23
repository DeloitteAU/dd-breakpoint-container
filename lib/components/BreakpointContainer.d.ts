import * as React from 'react';
import '../css/debug.css';
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
    onChange?: (bpName: string, bpSize: number) => void;
    debug?: boolean;
    noBpClasses?: boolean;
}
interface IState {
    size: number;
    currentBp: string;
}
export default class BreakpointContainer extends React.Component<IProps, IState> {
    componentDidUpdate(prevProps: IProps, prevState: IState): void;
    render(): JSX.Element;
}
export {};
