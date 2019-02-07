import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import babel from 'rollup-plugin-babel';
import sass from 'node-sass';
import postcss from 'rollup-plugin-postcss';
// import uglify from 'rollup-plugin-uglify';
import pcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

import { main } from './package.json';

// TODO prod/dev versions?
// uglify/cssnano + source maps configuration

export default {
	input: 'src/index.js',
	output: {
		name: 'dd.breakpointContainer',
		file: main,
		format: 'esm', // TODO cjs or umd
		sourceMap: true,
		globals: { react: 'React' },
		exports: 'named',
	},
	plugins: [
		del({ targets: './lib/' }),
		babel({
			exclude: 'node_modules/**',
			presets: ['@deloitte-digital-au/babel-preset-app-react'],
		}),
		resolve(),
		commonjs(),
		postcss({
			inject: true,
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
				cssnano(),
			],
		}),
	],
};
