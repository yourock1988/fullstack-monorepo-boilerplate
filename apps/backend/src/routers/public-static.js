const express = require('express')
const path = require('path')

const app = express()

const baseDir = path.join(__dirname, '..', '..')
const isDevMode = baseDir.includes('backend')
const publicDir = isDevMode ? 'static' : 'client'
const publicStatic = path.join(baseDir, publicDir)
global.console.log(publicStatic)

app.use('/', express.static(publicStatic, { index: 'index.html' }))
app.use('/products', express.static(publicStatic, { index: 'index.html' }))

module.exports = app
