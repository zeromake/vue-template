const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dll.user')
const userConfig = require('./config')
const listeningHost = "http://" + userConfig.host + ":" + userConfig.port
config.entry.dist.unshift("webpack-dev-server/client?" + listeningHost + "/", "webpack/hot/dev-server")
config.plugins.push(new webpack.HotModuleReplacementPlugin())
const proxyConf = {
}
if (userConfig.proxyUrlPath && userConfig.apiProxy) {
    proxyConf[userConfig.proxyUrlPath] = {
        target: userConfig.apiProxy
    }
}
new webpackDevServer(webpack(config), {
    contentBase: config.output.path,
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: proxyConf
}).listen(userConfig.port, userConfig.host, function(err, result) {
    if (err) {
        console.log(err)
    }
    console.log('Listening at ' + listeningHost)
})
