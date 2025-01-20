const { merge } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackVueConfig = require('./vue')
const PATHS = require('./paths')

module.exports = merge(webpackVueConfig, {
  stats: 'minimal',
  infrastructureLogging: { level: 'error' },

  target: ['web', 'es5'],

  externals: {
    paths: PATHS,
  },

  output: {
    filename: 'assets/js/[name].js',
    publicPath: '',
    clean: true,
  },

  entry: {
    app: path.join(PATHS.src, 'index.js'),
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMaps: true,
            presets: [['@babel/preset-env', { targets: { ie: '11' } }]],
          },
        },
      },

      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: ['autoprefixer', 'cssnano'] },
            },
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash][ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.public, 'index.html'),
      favicon: path.join(PATHS.public, 'favicon.png'),
      filename: 'index.html',
      title: 'Vue App',
    }),

    new MiniCssExtractPlugin({
      filename: path.join('assets', 'css', '[name].css'),
    }),
  ],
})
