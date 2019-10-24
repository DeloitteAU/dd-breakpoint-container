import * as React from 'react';
import { IProps as IBpcProps } from 'components/BreakpointContainer';
declare const withBreakpointContainer: (Component: React.ComponentType<{}>, bpcProps: IBpcProps) => React.FunctionComponent<{
    bpName: string;
    bpSize: number;
}>;
declare const withBrowserContainer: (Component: React.ComponentType<{}>, bpcProps: IBpcProps) => React.FunctionComponent<{
    bpName: string;
    bpSize: number;
}>;
export { withBreakpointContainer, withBrowserContainer };
