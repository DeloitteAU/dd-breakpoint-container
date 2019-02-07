// ==================

// 'mixins.scss' needs to be added to the build folder so the core
// library SCSS mixins '@bp' and '@bpc' are available to import.

// For the sake of neatness, the '@import variables' line is replaced
// with the file contents, so we only have a single .scss build file

// ==================
// Imports
// ==================

const fs = require('fs');

const mixins = 'src/mixins.scss';
const variables = 'src/_variables.scss';
const importStatement = '@import \'variables\';';
const output = 'lib/mixins.scss';

fs.readFile(mixins, 'utf8', (err, data) => {
	if (err) { throw err; }

	let mixinsFile = data.split('\n');

	// Find line index of variable '@import' statement
	const importIndex = mixinsFile.findIndex(line => line.indexOf(importStatement) >= 0);

	fs.readFile(variables, 'utf8', (err, data) => {
		if (err) { throw err; }

		const variablesFile = data.split('\n');

		// Reassemble 'mixins.scss' with '_variables.scss' inline
		mixinsFile = [
			mixinsFile.slice(0, importIndex),
			variablesFile,
			mixinsFile.slice(importIndex + 2, mixinsFile.length),
		];

		// Flatten (array of arrays)
		mixinsFile = [].concat(...mixinsFile);
		// Merge back into a file
		mixinsFile = mixinsFile.join('\n');

		// Write our amended file to build folder
		fs.writeFile(output, mixinsFile, err => { if (err) { throw err; } });
	});
});
