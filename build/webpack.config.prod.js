/**
 *
 *  webpack 生产环境配置
 *
 * */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack'); //访问内置的插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');//

module.exports = merge(baseConfig,{
    mode: 'production',
    devtool: "cheap-module-source-map",
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
            filename: 'style.css',
        }),
        new UglifyJsPlugin()
    ]
});
