import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'node-sass';
import postcss from 'rollup-plugin-postcss';
import pcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import clean from 'rollup-plugin-delete';
import html from 'rollup-plugin-generate-html-template';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
// import alias from 'rollup-plugin-import-alias';


export default {
	input: './src/index.js',
	external: ['react'],
	output: {
		file: './dist/index.js',
		format: 'cjs',
		globals: { react: 'React' },
	},
	plugins: [
		clean({ targets: './dist' }),
		babel({ sourceMap: true }),
		resolve(),
		commonjs({ sourceMap: true }),
		// postcss({
		// 	inject: true,
		// 	sourceMap: true,
		// 	exclude: 'node_modules/**',
		// 	preprocessor: (content, id) => (
		// 		new Promise(resolve => {
		// 			const result = sass.renderSync({ file: id });
		// 			resolve({ code: result.css.toString() });
		// 		})
		// 	),
		// 	plugins: [
		// 		pcssPresetEnv(),
		// 		autoprefixer(),
		// 	],
		// }),
		html({
			template: './index.html',
			target: './dist/index.html',
		}),
		serve({
			// open: true,
			contentBase: './dist',
			host: 'localhost',
			port: '9000',
		}),
		livereload('./dist'),
		// alias({
		// 	paths: {
		// 		'dd-breakpoint-container': '../lib',
		// 	},
		// 	extensions: ['js', 'scss'],
		// }),
	],
};
