import uglify from 'rollup-plugin-uglify';
import generate from './rollup.config.common.js';

const config = generate(false);
config.output.plugins.push(uglify());

export default config;
