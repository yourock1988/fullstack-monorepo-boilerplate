const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = 8801
const APP_NAME = 'boilerplate'

app.use(routes)

app.listen(PORT, () => global.console.log(`${APP_NAME} start st PORT: ${PORT}`))
