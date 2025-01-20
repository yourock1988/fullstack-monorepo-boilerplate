const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

const rootPath = path.join(__dirname, '..', '..')
const frontendPath = path.join(rootPath, 'apps', 'frontend')

const PATHS = {
  public: path.join(frontendPath, 'public'),
  build: path.join(frontendPath, 'build'),
  dist: path.join(frontendPath, 'dist'),
  src: path.join(frontendPath, 'src'),
}

module.exports = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },

  mode: 'development',
  // mode: 'production',

  devtool: 'inline-source-map',
  // devtool: 'source-map',
  // devtool: false,

  stats: 'minimal',
  infrastructureLogging: { level: 'error' },

  target: ['web', 'es5'],

  externals: {
    paths: PATHS,
  },

  devServer: {
    open: false,
  },

  output: {
    path: PATHS.dist,
    filename: 'assets/js/[name].js',
    publicPath: '',
    clean: true,
    // assetModuleFilename: 'assets/img/[hash][ext]',
  },

  entry: {
    app: path.join(PATHS.src, 'index.js'),
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
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

      { test: /\.vue$/, loader: 'vue-loader' },
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

    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    }),

    new VueLoaderPlugin(),
  ],
}
