const baseConfig = require('./webpack.base')
const path  = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Manifest = require('../manifest.json')
baseConfig.entry= {
  dist: [path.resolve(__dirname, '../vue_src/main.js')],
}
baseConfig.plugins.push(
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        vendor_name: Manifest.name,
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
