module.exports = {
	presets: [
		'@babel/preset-env',
		'@deloitte-digital-au/babel-preset-app-react',
		'@babel/preset-typescript',
	],
	// Enables absolute imports
	plugins: [
		[
			'module-resolver',
			{ root: ['src'], extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
	],
};
