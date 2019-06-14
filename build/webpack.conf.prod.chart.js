const path = require('path')
const merge = require('webpack-merge')
const uglify = require('uglifyjs-webpack-plugin')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.conf.common')

module.exports = merge(common, {
  entry: {
    index: path.resolve(__dirname, '../src/')
  },
  module: {
    rules: [{
      test: /\.(s)?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },]
  },
  //devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    library: 'CatChartsVue',
    libraryTarget: 'umd'
  },
  plugins: [
    new uglify(),
    new BundleAnalyzer()
  ]
})
