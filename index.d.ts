// Type definitions for DDBreakpointContainer exports

// TODO can we add comments here that come through?

import * as React from 'react';

// ---------------------
// Shared interfaces

export interface BreakpointContainerProps {
	identifier?: string;
	className?: string;
	containerClass?: string;
	children:
		| React.ReactChildren
		| { (bp: string, size: number): React.ReactChildren };

	// Callbacks
	onChange?(bp: string): void;

	// Flags
	debug?: boolean;
	noBpClasses?: boolean;
}

// ---------------------
// BreakpointContainer
// - (and its derivative BrowserContainer)
// - (and their respective HOCs)

declare class BreakpointContainer extends React.Component<
	BreakpointContainerProps
> {}
declare class BrowserContainer extends React.Component<
	BreakpointContainerProps
> {}

// ---------------------
// TODO
// withBreakpointContainer
// withBrowserContainer

// ---------------------
// Breakpoint

export interface BreakpointProps {
	identifier?: string;
	query?: string | number;
	q?: string | number;
	children: React.ReactChildren;
}

// TODO
// export function Breakpoint: React.SFC<BreakpointProps>;

// ---------------------
// ---------------------
// Constants

export const BREAKPOINTS: object;

// ---------------------
// Functions

export function getBpUpperLimit(bp: string): boolean;
export function resolveBp(query: string, bp: string | number): boolean;

// ---------------------
// CSS-in-js

export function bp(query: string): function;
export function bpc(query: string, bp: string | number): function;
