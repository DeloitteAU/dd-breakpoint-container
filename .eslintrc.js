const pkg = require('./package.json');

module.exports = {
	settings: {
		react: {
			version: pkg.peerDependencies.react,
		},
	},
	extends: [
		// Base
		'@deloitte-digital-au/eslint-config-react',
		// Imports
		'plugin:import/errors',
		'plugin:import/warnings',
		// Prettier
		'plugin:prettier/recommended',
	],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parser: 'babel-eslint',
	plugins: ['import', 'jsdoc', 'react', 'prettier'],
	rules: {
		// Mark Prettier syntax errors
		'prettier/prettier': 'error',

		// Enforce React.Fragment </> shorthand
		'react/jsx-fragments': 'error',

		// Max one prop per line; improved readability and diff
		// Commented out in hope of potential Prettier feature integration
		// Ref: https://github.com/prettier/prettier/issues/5501
		// 'react/jsx-max-props-per-line': [1, { when: 'always' }],

		// JSDoc settings
		// Config docs: https://www.npmjs.com/package/eslint-plugin-jsdoc
		'jsdoc/check-alignment': 1,
		'jsdoc/check-examples': 1,
		'jsdoc/check-indentation': 1,
		'jsdoc/check-param-names': 1,
		'jsdoc/check-syntax': 1,
		'jsdoc/check-tag-names': 1,
		'jsdoc/check-types': 1,
		'jsdoc/newline-after-description': 1,
		'jsdoc/no-undefined-types': 1,
		// // "jsdoc/require-description": 1,
		'jsdoc/require-description-complete-sentence': 1,
		// // "jsdoc/require-example": 1,
		'jsdoc/require-hyphen-before-param-description': 1,
		'jsdoc/require-jsdoc': 1,
		'jsdoc/require-param': 1,
		// // "jsdoc/require-param-description": 1,
		'jsdoc/require-param-name': 1,
		'jsdoc/require-param-type': 1,
		'jsdoc/require-returns': 1,
		'jsdoc/require-returns-check': 1,
		// // "jsdoc/require-returns-description": 1,
		'jsdoc/require-returns-type': 1,
		'jsdoc/valid-types': 1,
	},
};
