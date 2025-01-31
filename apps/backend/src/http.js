const express = require('express')
const startServer = require('./server')

const app = express()
const PORT_HTTP = 80
// const domain = 'boilerplate.localhost'
const domain = 'boilerplate.web-app.click'

app.use(startServer(domain))

app.listen(PORT_HTTP, () => global.console.log('listening PORT:', PORT_HTTP))
