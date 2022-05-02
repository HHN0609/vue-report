const baseConfig = require('./webpack.config.base')
const productionConfig = require('./webpack.config.prod')
const developmentConfig = require('./webpack.config.dev')
const { merge } = require('webpack-merge')

module.exports = ( env ) => {
    if(env.development) {
        return merge(baseConfig, developmentConfig)
    } else if (env.production){
        return merge(baseConfig, productionConfig)
    } else {
        throw new Error('Invalid configuration')
    }
}