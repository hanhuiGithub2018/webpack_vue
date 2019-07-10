/**
 *
 *  webpack 共享配置
 *
 * */

'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: path.join(__dirname,'../src/main.js'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname,'../dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',//完整版使用
            '@': resolve('src'),
            'static': resolve('static'),
            'com': resolve('src/common'),
            'ass': resolve('src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader',
                options: { limit: 10000 },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: { limit: 10000 }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: { limit: 10000 }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            minify: {
                removeAttributeQuotes: true
            }
        }),
        new CleanWebpackPlugin()
    ]
};
