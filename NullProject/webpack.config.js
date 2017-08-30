const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: "inline-source-map",
    entry: {
        js: ['babel-polyfill', path.join(__dirname, './client/main.js')]
    },
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: [/\.js$/, /\.jsx$/], loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};
