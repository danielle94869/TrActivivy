const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./activityRoutes.js'))

module.exports = router


