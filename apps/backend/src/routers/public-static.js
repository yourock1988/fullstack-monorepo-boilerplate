const express = require('express')
const path = require('path')

const app = express()

const baseDir = path.join(__dirname, '..', '..')
const isDevDir = baseDir.includes('backend')

const publicStatic = isDevDir
  ? path.join(baseDir, 'static')
  : path.join(baseDir, 'server', 'static')

global.console.log(publicStatic)
app.use('/static', express.static(publicStatic, { index: 'index.html' }))

if (!isDevDir) {
  const publicAssets = path.join(baseDir, 'client')
  global.console.log(publicAssets)
  app.use('/products', express.static(publicAssets, { index: 'index.html' }))
  app.use('/product', express.static(publicAssets, { index: 'index.html' }))
  app.use('/cart', express.static(publicAssets, { index: 'index.html' }))
}

module.exports = app
