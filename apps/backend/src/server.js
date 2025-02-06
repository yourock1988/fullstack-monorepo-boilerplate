const vhost = require('vhost')
const routes = require('./routes')

function enableServer(domain) {
  return vhost(domain, routes)
}

module.exports = enableServer
