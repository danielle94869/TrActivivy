const router = require('express').Router()
const { Activity } = require('../models')

router.get('/activities', (req, res) => {
<<<<<<< HEAD
  Activity.findAll()
  .then(activities => res.json(activities))
  .catch(err => console.log(err))
=======
  Activity.findAll(
    // activities => console.log(activities)
    //   {
    //   res.render('index', { activities })
    // }
  ).then(activities => res.json(activities))
    .catch(err => console.log(err))
>>>>>>> 7ce13898c91439f11a6f52b9c10b3425cc45bd85
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
