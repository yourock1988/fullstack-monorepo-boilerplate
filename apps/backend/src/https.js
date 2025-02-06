const fs = require('fs')
const path = require('path')
const https = require('https')
const express = require('express')
const enableServer = require('./server')

const app = express()
const PORT_HTTPS = 443
const domain = 'boilerplate.web-app.click'

const CERT_PATH = path.join('etc', 'letsencrypt', 'live', domain)
const CERT_PRIVKEY = path.join(CERT_PATH, 'privkey.pem')
const CERT_FILE = path.join(CERT_PATH, 'fullchain.pem')

const httpsOptions = {
  key: fs.readFileSync(CERT_PRIVKEY),
  cert: fs.readFileSync(CERT_FILE),
}

app.use(enableServer(domain))

https
  .createServer(httpsOptions, app)
  .listen(PORT_HTTPS, () => global.console.log('listening PORT:', PORT_HTTPS))
