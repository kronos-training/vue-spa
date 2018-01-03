const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001

const indexHtml = (() => {
  return fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
})()

app.use(express.static('dist'))

require('./webpack/dev-server')(app)

app.get('*', (req, res) => {
  res.write(indexHtml)
  res.end()
})

app.listen(port, () => {
  console.info(`Running server on port ${port}`)
})
