const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
	path: path.resolve(__dirname, 'docs'),
	filename: 'dist2.js'
    }
};
