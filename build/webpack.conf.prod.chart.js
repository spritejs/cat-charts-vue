const path = require('path')
const merge = require('webpack-merge')
const uglify = require('uglifyjs-webpack-plugin')
// const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.conf.common')

module.exports = merge(common, {
  entry: {
    index: path.resolve(__dirname, '../src/')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node_modules/
    }]
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    library: 'CatCharts',
    libraryTarget: 'umd'
  },
  plugins: [
    new uglify()
  ]
})
