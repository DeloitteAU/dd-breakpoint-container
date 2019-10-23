import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import html from 'rollup-plugin-generate-html-template';
import postcss from 'rollup-plugin-postcss';
import pcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from 'rollup-plugin-replace';

export default {
	input: './src/index.ts',
	output: {
		file: './dist/bundle.js',
		format: 'umd',
		sourcemap: 'inline',
	},
	preserveSymlinks: true,
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		resolve(),
		babel({
			compact: true,
			sourceMap: 'inline',
		}),
		commonjs({
			sourceMap: 'inline',
			include: ['node_modules/**'],
			exclude: ['node_modules/process-es6/**'],
			namedExports: {
				'node_modules/react/index.js': [
					'Children',
					'Component',
					'PropTypes',
					'createElement',
					'cloneElement',
					'isValidElement',
					'PureComponent',
				],
				'node_modules/react-dom/index.js': ['render'],
			},
		}),
		postcss({
			sourceMap: 'inline',
			plugins: [pcssPresetEnv(), autoprefixer()],
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
	],
};
