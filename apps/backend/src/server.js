const Server = require('express')

const welcomeRouter = require('./routers/welcome')
const publicStatic = require('./routers/public-static')

const server = Server()

server.use('/', welcomeRouter)
server.use('/', publicStatic)

module.exports = server
