/**
 *
 *  webpack 开发环境配置
 *
 * */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig,{
    mode: 'development',
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use:[ 'vue-style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        // proxy: { // proxy URLs to backend development server
        //     '/api': 'http://localhost:3000'
        // },
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                pathRewrite: {"^/api" : "/static/mock"}
            }
        }, //代理服务器，一般使用mock联调  与 vue-cli2.x的 proxyTable 一样的功能
        // open: true,
        host: 'localhost',
        port: '8080',
        hot: true, //开启热更新
        // contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: true, //使用gzip压缩
        // noInfo: true, // 开启热重载发生错误警告
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
