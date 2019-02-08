import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'node-sass';
import postcss from 'rollup-plugin-postcss';
import pcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import minify from 'rollup-plugin-babel-minify';
import replace from 'rollup-plugin-replace';

const srcFile = 'src/index.js';

export default (isDev = true) => {
	const sourceMap = isDev ? 'inline' : false;

	return {
		input: srcFile,
		output: {
			name: 'dd-breakpoint-container',
			file: `./lib/cjs/dd.BreakpointContainer${isDev ? '.dev' : '.min'}.js`,
			format: 'esm', // TODO cjs or umd
			sourceMap,
			globals: { react: 'React' },
			exports: 'named',
		},
		plugins: [
			(!isDev && replace({
				'include': 'src/components/BreakpointContainer.js',
				'delimiters': ['', ''],
				'DEBUG_BROWSER = true': 'DEBUG_BROWSER = false',
			})),
			babel({
				exclude: 'node_modules/**',
				presets: ['@deloitte-digital-au/babel-preset-app-react'],
				sourceMap,
			}),
			resolve(),
			commonjs({ sourceMap }),
			postcss({
				inject: true,
				sourceMap,
				exclude: 'node_modules/**',
				preprocessor: (content, id) => (
					new Promise(resolve => {
						const result = sass.renderSync({ file: id });
						resolve({ code: result.css.toString() });
					})
				),
				plugins: [
					pcssPresetEnv(),
					autoprefixer(),
					(!isDev && cssnano()),
				],
			}),
			(!isDev && minify()),
		],
	};
};
