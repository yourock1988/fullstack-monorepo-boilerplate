const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./base')
const PATHS = require('./paths')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    port: 9000,
    open: false,
    historyApiFallback: true,
  },

  output: {
    path: PATHS.build,
  },
})
