const Router = require('express')

const router = Router()

router.get('/web-server-home', (_, res) => res.status(200).send('Welcome!'))

module.exports = router
