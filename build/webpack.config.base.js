'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');//这个东西就是自动加载打包的Js到index.html里面

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    resolve: {
        //要是没得这个东西，入口文件的 .vue 不会给你自动查找滴，然后渲染也必须自己写 render 函数(虽然不是好麻烦，但是能省则省)
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
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
            template: path.join(__dirname, '../index.html')
        }),
        new CleanWebpackPlugin()
    ]
};
