const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./base')
const PATHS = require('./paths')
const Dotenv = require('dotenv-webpack')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    static: PATHS.assets,
    port: 9000,
    open: false,
    historyApiFallback: true,
  },

  output: {
    path: PATHS.build,
  },

  plugins: [
    new Dotenv({
      path: '../../.env.dev',
    }),
  ],
})
