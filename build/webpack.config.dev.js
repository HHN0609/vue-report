const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '../demo/index.ts'),
    output: {
        path: path.join(__dirname, '../demo/dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../demo/index.html'),
            inject: 'body',
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