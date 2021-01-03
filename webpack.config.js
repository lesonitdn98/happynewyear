const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}