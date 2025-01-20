const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  target: ['web', 'es5'],

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
  },

  module: {
    rules: [{ test: /\.vue$/, loader: 'vue-loader' }],
  },

  plugins: [
    new VueLoaderPlugin(),

    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    }),
  ],
}
