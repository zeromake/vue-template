const baseConfig = require('./webpack.base')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Manifest = require('../manifest.json')
const userConfig = require('./config')
const vendorNameArr = [userConfig.publicPathName, userConfig.publicPathJoinName, userConfig.jsOutJoinPathName]
let vendorName = ''
vendorNameArr.forEach(val => {
    if (val && val !== '') {
        if (val === '/') {
            vendorName += val
        } else {
            vendorName += val + '/'
        }
    }
})
vendorName += Manifest.name + '.js'
baseConfig.entry = {
    dist: [path.resolve(__dirname, '../src/main.js')]
}
baseConfig.plugins.push(
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        vendorName: vendorName,
        inject: true
    })
)
baseConfig.plugins.push(
    new webpack.DllReferencePlugin({
        context: path.resolve(__dirname, '../'),
        manifest: Manifest
    })
)
module.exports = baseConfig
