const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./base')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    open: false,
  },

  output: {
    path: webpackBaseConfig.externals.paths.build,
  },
})
