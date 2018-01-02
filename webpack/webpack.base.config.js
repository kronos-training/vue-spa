const path = require('path')

const paths = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist')
}

const config = {
  entry: {
    app: [path.resolve(paths.src, 'client-entry.js')]
  },
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: 'static/[name].js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
          //
          // css: 'css-loader',
          // scss: 'css-loader|sass-loader'
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
