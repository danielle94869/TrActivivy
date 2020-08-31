const router = require('express').Router()
const { Activity, User } = require('../models')

router.get('/activities', (req, res) => {
  Activity.findAll({ include: [ User ] })
  .then(activities => res.json(activities))
  .catch(err => console.log(err))
})
  
router.post('/activities', (req, res) => {
  Activity.create(req.body)
    .then(activity => {
      Activity.findOne({ where: { id: activity.id }, include: [User] })
        .then(fullActivity => res.json(fullActivity))
    })
    .catch(err => console.log(err))
})

module.exports = router
