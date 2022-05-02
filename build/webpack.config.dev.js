const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '../demo/src/index.ts'),
    output: {
        path: path.join(__dirname, '../demo/dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../demo/index.html'),
            inject: 'body',
            filename: 'index.html',
            title: 'vue-report demo'
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false
        })
    ],
    devServer: {
        compress: true,
        port: 9000
    }
}