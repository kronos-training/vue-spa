const path = require('path')
const webpack = require('webpack')
const MFS = require('memory-fs')
const clientConfig = require('./webpack.client.config')
const serverConfig = require('/webpack.server.config')

module.exports = function setupDevServer (app, onUpdate) {
  clientConfig.entry.app.unshift('webpack-hot-middleware/client')

  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )

  const compiler = webpack(clientConfig)

  app.use(
    require('webpack-dev-middleware')(compiler, {
      stats: {
        colors: true
      }
    })
  )

  app.use(require('webpack-hot-middleware')(compiler))

  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()
  const outputPath = path.join(serverConfig.output.path, 'server/main.js')
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, () => {
    onUpdate(mfs.readFileSync(outputPath, 'utf-8'))
  })
}
