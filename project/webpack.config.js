const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: {
		js: ['babel-polyfill', path.join(__dirname, 'client/client.js')]
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: [/\.js$/, /\.jsx$/], loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
};