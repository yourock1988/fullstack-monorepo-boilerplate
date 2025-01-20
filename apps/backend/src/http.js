const express = require('express')
const server = require('./server')

const app = express()
const PORT_HTTP = 80

app.use(server)

app.listen(PORT_HTTP, () => global.console.log('listening PORT:', PORT_HTTP))
