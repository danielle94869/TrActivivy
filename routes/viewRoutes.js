const router = require('express').Router()
const activity = require('../models/activity.js')

router.get('/', (req, res) => {
  activity.getAll(activities => {
    res.render('index', { activities })
  })
})

module.exports = router
