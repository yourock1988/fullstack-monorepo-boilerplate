const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./base')
const PATHS = require('./paths')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: false,

  output: {
    path: PATHS.dist,
  },
})
