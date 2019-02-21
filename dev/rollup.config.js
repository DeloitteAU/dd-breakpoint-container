import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'node-sass';
import postcss from 'rollup-plugin-postcss';
import pcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import html from 'rollup-plugin-generate-html-template';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';


export default {
	input: './src/index.js',
	output: {
		file: './dist/index.js',
		format: 'umd',
		sourcemap: 'inline',
	},
	plugins: [
		resolve(),
		babel({
			compact: true,
			sourceMap: true,
		}),
		commonjs({
			sourceMap: true,
			include: [
				'node_modules/**',
			],
			exclude: [
				'node_modules/process-es6/**',
			],
			namedExports: {
				'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
				'node_modules/react-dom/index.js': ['render'],
			},
		}),
		postcss({
			inject: true,
			sourceMap: true,
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
			],
		}),
		html({
			template: './index.html',
			target: './dist/index.html',
		}),
		serve({
			open: true,
			contentBase: './dist',
			host: 'localhost',
			port: '9000',
		}),
		livereload('./dist'),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
	],
};
