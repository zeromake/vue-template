const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.config')
const express = require('express')
const webpack = require('webpack')
const path = require('path')
const userConfig = require('./config')


webpackConfig.entry.dist.unshift("webpack-hot-middleware/client")
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

const app = express()


const compiler = webpack(webpackConfig)
compiler.plugin('done', (stats) => {
    console.log('!>watch')
    if (stats && stats.compilation && (stats.compilation.errors || stats.compilation.warnings) && (stats.compilation.errors.length > 0 || stats.compilation.warnings.length > 0)) {
        console.log(require('format-webpack-stats-errors-warnings')(stats, userConfig.projectPath))
    }
    console.log('!>compiler')
})

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
})

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

app.use(require('connect-history-api-fallback')())

app.use(devMiddleware)

app.use(hotMiddleware)

app.use('/static', express.static(path.resolve(userConfig.outPath, 'static')))

const uri = 'http://' + userConfig.host + ':' + userConfig.port

let _resolve
const readyPromise = new Promise(resolve => {
    _resolve = resolve
})

devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
    _resolve()
})

const server = app.listen(userConfig.port, userConfig.host)

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}
