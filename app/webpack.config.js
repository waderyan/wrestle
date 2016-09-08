var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_ROOT = 'src';

var entries = [
     './' + APP_ROOT + '/client',
	 'webpack-dev-server/client?http://localhost:8080',
	 'webpack/hot/dev-server'
];

var loaders = [
    {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, APP_ROOT)
    }
];

var plugins = [
     new webpack.HotModuleReplacementPlugin(),
     new HtmlWebpackPlugin({
		template: './' + APP_ROOT + '/index.html',
        favicon: './' + APP_ROOT + '/favicon.png'
	 })
];

module.exports = {
       devtool: 'source-map',
       entry: entries,
       output: {
      		path: path.join(__dirname, 'dist'),
      		filename: 'bundle.js'
      },
      plugins: plugins,
      module: {
		loaders: loaders
      },
      devServer: {
        contentBase: './dist',
        hot: true
      }
};
