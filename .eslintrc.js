const pkg = require('./package.json');

module.exports = {
	settings: {
		react: {
			version: pkg.peerDependencies.react,
		},
	},
	extends: [
		'@deloitte-digital-au/eslint-config',
		'plugin:react/recommended',
	],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parser: 'babel-eslint',
	plugins: ['react'],
	rules: {
		'react/jsx-uses-vars': 1,
		'object-curly-spacing': ['error', 'always'],
		'react/jsx-curly-spacing': [
			'error',
			{
				when: 'never',
				children: {
					when: 'always',
				},
			},
		],
		'react/no-array-index-key': 1,
		'react/require-default-props': 1,
		'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'never' }],
	},
};
