var vue = require('vue-loader')
var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var projectRoot = path.resolve(__dirname, '../')
// var cssLoader = ExtractTextPlugin.extract('style-loader', 'css-loader')

module.exports = {
  entry: {
    'vue-parallaxy': './src/index.js'
  },
  output: {
    filename: './dist/[name].js',
    library: 'VueParallaxy',
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap
    })
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

if (process.env.NODE_ENV === 'production') {

  delete module.exports.devtool
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
    // new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
  ]
}
