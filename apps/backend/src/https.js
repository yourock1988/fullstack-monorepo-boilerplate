const fs = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')
const startServer = require('./server')

const app = express()
const PORT_HTTPS = 443
const domain = 'boilerplate.web-app.click'

const CERT_PRIVKEY = path.join(__dirname, '..', 'ssl_cert', 'privkey.pem')
const CERT_FILE = path.join(__dirname, '..', 'ssl_cert', 'fullchain.pem')

const httpsOptions = {
  key: fs.readFileSync(CERT_PRIVKEY),
  cert: fs.readFileSync(CERT_FILE),
}

app.use(startServer(domain))

https
  .createServer(httpsOptions, app)
  .listen(PORT_HTTPS, () => global.console.log('listening PORT:', PORT_HTTPS))
