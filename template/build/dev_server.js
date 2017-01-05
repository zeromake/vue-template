var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.dll.user')
config.entry.dist.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/dev-server")
config.plugins.push(new webpack.HotModuleReplacementPlugin())
new WebpackDevServer(webpack(config), {
    contentBase: config.output.path,
    publicPath: config.output.publicPath,
    hot: true,
    colors: true,
    inline: true
}).listen(3000, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
