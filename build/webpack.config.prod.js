const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '../lib')
    },
    optimization: {
        minizer: [
            new TerserPlugin()
        ]
    }
}