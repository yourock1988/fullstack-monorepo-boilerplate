const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = process.env.APP_BE_PORT
const APP_NAME = 'Boilerplate'

global.console.log(process.env.APP_BE_COMMENT)

app.use(routes)

app.listen(PORT, () => global.console.log(`${APP_NAME} start at PORT: ${PORT}`))
