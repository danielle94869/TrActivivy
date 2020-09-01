const router = require('express').Router()
const { Activity } = require('../models')

router.get('/activities', (req, res) => {
  Activity.findAll(
    // activities => console.log(activities)

    //   {
    //   res.render('index', { activities })
    // }
  ).then(activities => res.json(activities))
    .catch(err => console.log(err))
})

router.post('/activities', (req, res) => {
  Activity.create(req.body)
    .then(activity => {
      Activity.findOne({ where: { id: activity.id } })
        .then(fullActivity => res.json(fullActivity))
    })
    .catch(err => console.log(err))
})

module.exports = router
