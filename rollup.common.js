import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import pcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import minify from 'rollup-plugin-babel-minify';
import visualizer from 'rollup-plugin-visualizer';
import { sizeSnapshot as snapshot } from 'rollup-plugin-size-snapshot';
import progress from 'rollup-plugin-progress';


export default (isDev = true) => {
	const sourceMap = isDev ? 'inline' : false;

	return {
		input: 'src/index.js',
		external: ['react'],
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
			resolve(),
			babel({ sourceMap }),
			commonjs({ sourceMap }),
			postcss({
				inject: true,
				sourceMap,
				exclude: 'node_modules/**',
				plugins: [
					pcssPresetEnv(),
					autoprefixer(),
					(!isDev && cssnano()),
				],
			}),
			...(isDev ? [] : [
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
