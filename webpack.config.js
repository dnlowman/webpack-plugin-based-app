var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index',
    ],

    output: {
        path: __dirname + '/dist',
        filename: '[name].[chunkhash].bundle.js',
        chunkFilename: '[id].bundle.js',
        crossOriginLoading: "anonymous"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],

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
