const vhost = require('vhost')
const routes = require('./routes')

function startServer(domain) {
  return vhost(domain, routes)
}

module.exports = startServer
