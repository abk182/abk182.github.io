const path = require('path');

module.exports = {
  entry: {
    js: path.join(__dirname, './client/main.js')
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: "bundle.js"
  },
  module: {
		loaders: [
			{test: [/\.js$/], loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
}
