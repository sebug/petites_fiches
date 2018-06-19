const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
	path: path.resolve(__dirname, 'docs'),
	filename: 'dist.js'
    },
    module: {
	rules: [
	    { test: /\.html$/, use: [ 'html-loader' ] }
	    ]
    },
    mode: 'production'
};
