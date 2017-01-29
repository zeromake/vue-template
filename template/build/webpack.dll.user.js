const baseConfig = require('./webpack.base')
const path  = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Manifest = require('../manifest.json')
const userConfig = require('./config')
const vendor_name_arr = [userConfig.public_path_name, userConfig.public_path_join_name, userConfig.js_out_join_path_name]
let vendor_name = ''
vendor_name_arr.forEach(val => {
    if (val && val !== '') {
        if (val === '/') {
            vendor_name += val
        } else {
            vendor_name += val + '/'
        }
    }
})
vendor_name += Manifest.name + '.js'
baseConfig.entry= {
  dist: [path.resolve(__dirname, '../src/main.js')],
}
baseConfig.plugins.push(
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        vendor_name: vendor_name,
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
