const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: false,

  output: {
    path: webpackBaseConfig.externals.paths.dist,
  },
})
