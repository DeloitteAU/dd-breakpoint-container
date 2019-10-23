module.exports = {
	settings: {
		'react': {
			version: '16.2',
		},

		// No falsy path resolve errors for imports directr from src
		// i.e. `import ... from 'core/...';` and `import ... from 'components/...';`
		'import/resolver': {
			'babel-module': {},
			'node': {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	extends: [
		// Base
		'@deloitte-digital-au/eslint-config-react',

		// TypeScript
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',

		// Prettier
		'plugin:prettier/recommended',
	],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		// Mark Prettier syntax errors
		'prettier/prettier': 'error',

		// Enforce React.Fragment </> shorthand
		'react/jsx-fragments': 1,

		// Prefixing interfaces is a Microsoft standard
		// Ref: https://docs.microsoft.com/en-us/windows/desktop/stg/coding-style-conventions
		'@typescript-eslint/interface-name-prefix': 0,
	},
	globals: {
		window: true,
		document: true,
		process: true,
		require: true,

		// Testing
		beforeEach: true,
		it: true,
		describe: true,
		// Cypress
		cy: true,
		context: true,
		// Jest
		jest: true,
		test: true,
		expect: true,
	},
};
