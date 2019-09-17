module.exports = {
	settings: {
		react: {
			version: '16.2',
		},
	},
	extends: [
		// Base
		'@deloitte-digital-au/eslint-config-react',

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
		'react/jsx-fragments': 1,

		// No import errors for peer dependencies
		'import/no-unresolved': [2, { ignore: ['^react$', '^classnames$'] }],
	},
	globals: {
		// Cypress
		cy: true,
		context: true,
		beforeEach: true,
		it: true,
		describe: true,
	},
};
