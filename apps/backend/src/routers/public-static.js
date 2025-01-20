const express = require('express')
const path = require('path')

const app = express()
const publicStatic = path.join(__dirname, '..', 'static')
console.log(publicStatic)
app.use('/', express.static(publicStatic, { index: 'index.html' }))

module.exports = app
