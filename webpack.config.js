const path = require('path');
const webpack = require('webpack');

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
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        // hot: true,
        contentBase: 'dist',
        port: 3000,
        // host: '0.0.0.0',
        inline: true
    }
}]