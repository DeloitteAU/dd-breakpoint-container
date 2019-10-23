/**
 * TODO:
 *
 * More explanation around the existence of
 * of this file, what it's is for (<Breakpoint/>
 * component parsing support) etc
 */
import * as React from 'react';
export declare const ID_DEFAULT = "default";
export declare const ID_BROWSER = "browser";
export declare const BP_CONTEXTS: {
    [value: string]: any;
};
interface IProps {
    identifier: string;
    currentBp?: string;
    children: React.ReactNode;
}
/**
 * TODO.
 */
declare const WithContext: {
    ({ identifier, currentBp, children }: IProps): JSX.Element;
    defaultProps: {
        currentBp: any;
    };
};
export { WithContext };
