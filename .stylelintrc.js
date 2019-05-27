module.exports = {
	extends: [
		'@deloitte-digital-au/stylelint-config',
		'stylelint-config-prettier',
	],
	plugins: ['stylelint-prettier'],
	rules: {
		'prettier/prettier': true,
	},
};
