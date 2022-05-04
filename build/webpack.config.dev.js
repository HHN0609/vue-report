const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '../demo/src/index.ts'),
    output: {
        path: path.join(__dirname, '../demo/dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../demo/index.html'),
            inject: 'body',
            filename: 'index.html',
            title: 'vue-report demo'
        })
    ],
    devServer: {
        compress: true,
        port: 9000
    }
}