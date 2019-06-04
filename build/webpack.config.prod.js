
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack'); //访问内置的插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');//个人觉得这个压缩插件没得啥子用

module.exports = merge(baseConfig,{
    mode: 'production',
    entry: path.join(__dirname,'../src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname,'../dist')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use:[ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
        ]
    },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             sourceMap: true
    //         })
    //     ],
    // },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
});
