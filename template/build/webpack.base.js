const path = require('path')
const webpack = require('webpack')
const userConfig = require('./config')
const out_path = userConfig.out_path
const src_path = userConfig.src_path
const publicPathJoinName = userConfig.public_path_join_name
const publicPathName = userConfig.public_path_name
const jsOutJoinPathName = userConfig.js_out_join_path_name
const assetsSubDirectory = path.posix.join(publicPathJoinName, userConfig.assets_dir)

module.exports = {
    output: {
        // 设置输出文件夹来自配置
        path: out_path,
        // 设置所有输出文件的挂载url
        publicPath: publicPathName,
        // 设置输出文件路径及名字组成
        filename: path.posix.join(publicPathJoinName, jsOutJoinPathName, '[name]_[hash].js'),
        library: '[name]_[hash]',
        // 设置分割文件名及路径组成
        chunkFilename: path.posix.join(publicPathJoinName, jsOutJoinPathName, "chunk/[name]_[chunkhash:4].js") //-[chunkhash:4]
    },
    // 设置开启sourcemap
    devtool: '#source-map',
    resolve: {
        alias: {
            // 设置别名
            components: path.resolve(src_path, 'components'),
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
    // 初始化插件为空数组
    plugins: [],
    // 加载器的设置
    module: {
        // 预加载器设置
        preLoaders: [
            {
                test: /\.vue$/,
                loader: 'eslint',
                include: [src_path],
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                loader: 'eslint',
                include: [src_path],
                exclude: /node_modules/
            }
        ],
        // 正式加载器设置
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
    // postcss的配置
    postcss: [require('autoprefixer')({browsers: ['last 2 versions']})]
}
// 设置开发和部署时的配置却别
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = null
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
