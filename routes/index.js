const router = require('express').Router()

router.use('/api', require('./groceryRoutes.js'))
router.use('/', require('./viewRoutes'))

module.exports = router
