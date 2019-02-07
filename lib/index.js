'use strict';

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./cjs/dd.breakpointContainer.min.js');
} else {
	module.exports = require('./cjs/dd.breakpointContainer.dev.js');
}
