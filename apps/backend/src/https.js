const fs = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')
const startServer = require('./server')

const app = express()
const PORT_HTTPS = 443
const domain = 'boilerplate.web-app.click'

const CERT_PATH = '/etc/letsencrypt/live/' + domain
const CERT_PRIVKEY = CERT_PATH + '/privkey.pem'
const CERT_FILE = CERT_PATH + '/fullchain.pem'

const httpsOptions = {
  key: fs.readFileSync(CERT_PRIVKEY),
  cert: fs.readFileSync(CERT_FILE),
}

app.use(startServer(domain))

https
  .createServer(httpsOptions, app)
  .listen(PORT_HTTPS, () => global.console.log('listening PORT:', PORT_HTTPS))
