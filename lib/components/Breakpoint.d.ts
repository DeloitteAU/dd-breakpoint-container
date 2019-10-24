import * as React from 'react';
interface IProps {
    query?: string | number;
    q?: string | number;
    identifier?: string;
    children: React.ReactNode;
}
declare const Breakpoint: ({ q, query, identifier, children, }: IProps) => JSX.Element;
export default Breakpoint;
