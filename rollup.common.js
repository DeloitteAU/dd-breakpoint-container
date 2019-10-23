import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import minify from 'rollup-plugin-babel-minify';
import visualizer from 'rollup-plugin-visualizer';
import { sizeSnapshot as snapshot } from 'rollup-plugin-size-snapshot';
import progress from 'rollup-plugin-progress';
import pcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default ({ isDev = false } = {}) => {
	const sourceMap = isDev ? 'inline' : false;
	const extensions = ['.js', '.jsx', '.ts', '.tsx'];

	return {
		input: 'src/index.ts',
		external: ['react', 'css/debug.css'],
		output: {
			name: 'dd-breakpoint-container',
			file: `dist/cjs/dd.BreakpointContainer${isDev ? '.dev' : '.min'}.js`,
			format: 'cjs',
			sourceMap,
			globals: { react: 'React' },
			exports: 'named',
		},
		plugins: [
			progress(),
			resolve({ extensions }),
			babel({ sourceMap }),
			typescript({ module: 'CommonJS' }),
			commonjs({ sourceMap, extensions }),
			postcss({
				inject: true,
				sourceMap,
				exclude: 'node_modules/**',
				plugins: [pcssPresetEnv(), autoprefixer(), !isDev && cssnano()],
			}),
			...(isDev
				? []
				: [
						minify(),
						visualizer({
							sourceMap: true,
							filename: 'reports/dependency-graph.html',
							title: 'Production Build Report',
						}),
						snapshot({
							snapshotPath: 'reports/size-snapshot.json',
						}),
				  ]),
		],
	};
};
