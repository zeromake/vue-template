const webpack = require('webpack')
const baseConfig = require('./webpack.config')
const userConfig = require('./config')
baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

baseConfig.devServer = {
    contentBase: baseConfig.output.path,
    publicPath: baseConfig.output.publicPath,
    host: baseConfig.host,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: userConfig.port,
    proxy: userConfig.proxy
}
module.exports = baseConfig
