import * as React from 'react';

import { resolveBp } from 'data/breakpoints';
import { BP_CONTEXTS, ID_DEFAULT } from 'components/Context';

interface IProps {
	query?: string | number;
	q?: string | number;
	identifier: string;
	children: React.ReactNode;
}

const Breakpoint = ({
	q,
	query = 0,
	identifier = ID_DEFAULT,
	children,
}: IProps) => {
	const bpQuery = q || query; // Aggregate query shorthand
	const Context = BP_CONTEXTS[identifier];

	return (
		<Context.Consumer>
			{/* Render children only if breakpoint query resolves */}
			{(bp: string | number) => resolveBp(bpQuery.toString(), bp) && children}
		</Context.Consumer>
	);
};

export default Breakpoint;
