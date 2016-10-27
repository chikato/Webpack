var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', __dirname + '/src/js/main.js'],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass') /*do not split file:`loaders: ['style', 'css', 'sass']`*/
        },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new CopyWebpackPlugin([
            {from: __dirname + "/src/img", to: __dirname + '/dist/img'},
        ]),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            inject: "body"
        })
    ],
    resolve: {
        root: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "node_modules")
        ],
        extensions: ['', '.js', '.jsx']
    }
};