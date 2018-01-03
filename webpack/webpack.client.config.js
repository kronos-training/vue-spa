const base = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = Object.assign({}, base, {
  plugins: base.plugins || []
})

let vueLoader = config.module.rules.find(x => x.loader === 'vue-loader')
vueLoader.options.extractCSS = true

config.plugins.push(
  new ExtractTextPlugin('static/styles.css')
)

module.exports = config
