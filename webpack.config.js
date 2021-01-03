const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    devServer: {
        compress: true,
        public: 'leson.tech' // That solved it
      },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}