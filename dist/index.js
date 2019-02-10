'use strict';

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./cjs/dd.BreakpointContainer.min.js');
} else {
	module.exports = require('./cjs/dd.BreakpointContainer.dev.js');
}
