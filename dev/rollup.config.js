import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
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
				'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement', 'cloneElement', 'isValidElement', 'PureComponent'],
				'node_modules/react-dom/index.js': ['render'],
			},
		}),
		scss(),
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
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
};
