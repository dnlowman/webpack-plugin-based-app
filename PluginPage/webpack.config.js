var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',

    entry: [
        './index',
    ],

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        chunkFilename: 'bundle.js',
        libraryTarget: 'commonjs'
    },

    module: {
        loaders: [
            {
                loader: 'babel-loader',

                exclude: [ /node_modules/ ],

                test: /\.jsx?$/,

                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
        ]
    }
};
