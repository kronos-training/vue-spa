const fs = require('fs')
const path = require('path')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')
const serialize = require('serialize-javascript')

let renderer
const app = express()
const port = process.env.PORT || 3001

const indexHtml = (() => {
  return fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
})()

app.use(express.static('dist'))

require('./webpack/dev-server')(app, bundle => {
  renderer = createBundleRenderer(bundle)
})

app.get('*', (req, res) => {
  const context = { url: req.url }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      return res.status(500).send('Server error')
    }

    html = indexHtml.replace('{{ APP }}', html)
    html = html.replace('{{ STATE }}', `<script>window.__INITIAL_STATE__=${serialize(context.initialState, { isJSON: true })}</script>`)
    res.write(html)
    res.end()
  })
})

app.listen(port, () => {
  console.info(`Running server on port ${port}`)
})
