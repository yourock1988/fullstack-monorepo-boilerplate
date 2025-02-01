const { Router } = require('express')

const welcomeRouter = require('./routers/welcome')
const publicStatic = require('./routers/public-static')

const routes = Router()

routes.use('/', welcomeRouter)
routes.use('/', publicStatic)

module.exports = routes
