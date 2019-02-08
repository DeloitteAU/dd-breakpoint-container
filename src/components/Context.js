import React from 'react';
import T from 'prop-types';

export const ID_DEFAULT = 'default';
export const ID_BROWSER = 'browser';

// NOTE: Other identifier contexts are created as-needed in WithContext
export const BP_CONTEXTS = {
	[ID_DEFAULT]: React.createContext(),
	[ID_BROWSER]: React.createContext(),
};

// TODO docs? necessary here with internal comments already? should you doc functional components?
function WithContext({ identifier, currentBp, children }) {
	// If a BPC has specified an identifier other than the default
	const hasIdentifier = identifier !== ID_DEFAULT;

	// Create specific context if it doesn't already exist
	if (hasIdentifier && !BP_CONTEXTS[identifier]) {
		BP_CONTEXTS[identifier] = React.createContext();
	}

	// CoreContext aka 'default' context must always be present, even if the
	// BPC has a specified identifier - this is to enable the default behaviour
	// of <Breakpoint/> components that don't specify an target BPC identifier
	const CoreContext = BP_CONTEXTS[ID_DEFAULT];
	const IdentifierContext = BP_CONTEXTS[identifier];

	return (
		<React.Fragment>
			{ hasIdentifier ? (
				<IdentifierContext.Provider value={currentBp}>
					<CoreContext.Provider value={currentBp}>
						{ children }
					</CoreContext.Provider>
				</IdentifierContext.Provider>
			) : (
				<IdentifierContext.Provider value={currentBp}>
					{ children }
				</IdentifierContext.Provider>
			) }
		</React.Fragment>
	);
};

WithContext.propTypes = {
	identifier: T.string.isRequired,
	currentBp: T.string,
	children: T.node.isRequired,
};

WithContext.defaultProps = {
	currentBp: null,
};

export { WithContext };
