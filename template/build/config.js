const path = require('path')

module.exports = {
    // dev时的host
    host: '127.0.0.1',
    // dev时的port
    port: 3000,
    // dev的转发代理
    api_proxy: null,
    // 转发代理的url开始匹配
    proxy_url_path: null,
    // 源码路径
    src_path: path.resolve(__dirname, '../src'),
    // 转换后的输出路径
    out_path: path.resolve(__dirname, '../dist'),
    // js文件的输出拼接比如把js文件放到单独的文件夹中
    js_out_join_path_name: 'js',
    // 在输出文件夹下是否再放入文件夹中包括js及其他文件不包括html
    public_path_join_name: '',
    // url挂载输出文件夹在正式环境中被挂载在某个url下如flask的static。如果是router的history模式请使用/开头保证js文件的正常请求
    public_path_name: '/',
    // 除js外的文件资源文件夹
    assets_dir: 'assets'
}
