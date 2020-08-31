const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./activityRoutes.js'))

module.exports = router

// const router = require('express').Router()

// router.use('/api', require('./groceryRoutes.js'))
// router.use('/', require('./activityRoutes'))

// module.exports = router
