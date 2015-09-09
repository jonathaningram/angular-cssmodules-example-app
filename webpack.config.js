var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var port = process.env.PORT || 8081;

function make(build) {
  var entry = [
    './index.js'
  ];
  if (!build) {
    entry.unshift(
      'webpack-dev-server/client?http://localhost:' + port,
      'webpack/hot/only-dev-server'
    );
  }

  var plugins = [
    new webpack.EnvironmentPlugin('NODE_ENV'),
    new ExtractTextPlugin('assets/[contenthash].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ];
  if (!build) {
    plugins.unshift(new webpack.HotModuleReplacementPlugin());
  } else {
    plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  return {
    devtool: 'cheap-module-source-map',

    context: __dirname + '/src',

    entry: entry,

    output: {
      filename: 'assets/[hash].js',
      path: path.resolve('./dist'),
      libraryTarget: 'umd'
    },

    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader?optional[]=runtime&stage=0',
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader?{browsers:["last 2 version", "ie >= 10"]}!sass-loader', {
          publicPath: '../'
        })
      }, {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=assets/[sha512:hash:base64:7].[ext]'
      }, {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png&name=assets/[sha512:hash:base64:7].[ext]'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff&name=assets/[sha512:hash:base64:7].[ext]'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&name=assets/[sha512:hash:base64:7].[ext]'
      }, {
        test: /\.html$/,
        loader: 'html'
      }]
    },

    resolve: {
      modulesDirectories: ['node_modules', 'bower_components']
    },

    plugins: plugins
  };
}

module.exports = make(process.env.NODE_ENV === 'production');
