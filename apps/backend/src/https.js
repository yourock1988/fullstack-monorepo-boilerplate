const fs = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')
const server = require('./server')

const app = express()
const PORT_HTTPS = 443

const CERT_PRIVKEY = path.join(__dirname, '..', 'ssl_cert', 'privkey.pem')
const CERT_FILE = path.join(__dirname, '..', 'ssl_cert', 'fullchain.pem')

const httpsOptions = {
  key: fs.readFileSync(CERT_PRIVKEY),
  cert: fs.readFileSync(CERT_FILE),
}

app.use(server)

https
  .createServer(httpsOptions, app)
  .listen(PORT_HTTPS, () => global.console.log('listening PORT:', PORT_HTTPS))
