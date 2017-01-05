const path = require('path')
const webpack = require('webpack')
const out_path = path.resolve(__dirname, '../web_app/static')
const src_path = path.resolve(__dirname, '../vue_src')
const assetsSubDirectory = 'assets'

module.exports = {
    output: {
      path: out_path,
      filename: 'js/[name]_[hash].js',
      library: '[name]_[hash]',
      chunkFilename: "js/chunk/[name]_[hash].js" //-[chunkhash:4]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        },
        fallback: [path.join(__dirname, '../node_modules')],
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue']
    },
    devServer: {
        inline: true
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    plugins: [],
    module: {
        preLoaders: [
            {
                test: /\.vue$/,
                loader: 'eslint',
                include: [src_path],
                exclude: /node_modules/
            },{
                test: /\.js$/,
                loader: 'eslint',
                include: [src_path],
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.js$/,
                loader: 'babel',
                include: [src_path],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style!css!postcss'
            }, {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: path.posix.join(assetsSubDirectory, 'img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: path.posix.join(assetsSubDirectory, 'fonts/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    vue: {
        loaders: {
          css: 'style!css!postcss',
          scss: 'style!css!postcss!sass'
        },
        postcss: [require('autoprefixer')({browsers: ['last 2 versions']})]
    }
}
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
