const router = require('express').Router()
const { User, Activity } = require('../models')

router.get('/users', (req, res) => {
  User.findAll({include: Activity})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => {
      User.findOne({ where: { id: user.id }, include: Activity })
        .then(fullUser => res.json(fullUser))
    })
    .catch(err => console.log(err))
})

module.exports = router


