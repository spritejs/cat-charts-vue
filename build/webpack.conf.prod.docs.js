const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.conf.common')

module.exports = merge(common, {
  entry: {
    'app': path.resolve(__dirname, '../demo/'),
    'cat-charts': path.resolve(__dirname, '../src/')
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name].js',
    library: 'CatCharts',
    libraryTarget: 'umd',
    chunkFilename: '[name].[hash:7].js',
  },
  module: {
    rules: [
      {
        test: /\.(s)?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../demo/index.html'),
      filename: 'index.html'
    })
  ]
})
