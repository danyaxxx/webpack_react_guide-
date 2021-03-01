const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 3000,
        clientLogLevel: 'silent',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
