const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        // hot: true,
        contentBase: '.',
        port: 3000,
        // host: '0.0.0.0',
        inline: true
    }
}, {
    context: path.join(__dirname, 'src/stylesheets/'),
    entry: {
        app: './index.scss'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.css'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader?-url&sourceMap&minimize!sass-loader?outputStyle=expanded&sourceMap=tr" +
                    "ue&sourceMapContents=true"
            })
        }]
    },
    plugins: [new ExtractTextPlugin('index.css')],
    devtool: 'source-map'
}]