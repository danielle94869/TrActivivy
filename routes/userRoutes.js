const router = require('express').Router()
const { User, Activity } = require('../models')

router.get('/users', (req, res) => {
  console.log(res)
  User.findAll({ include: Activity })
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

router.post('/users', (req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then(user => {
      console.log(user)
      User.findOne({ where: { id: user.id }, include: Activity })
        .then(fullUser => res.json(fullUser))
    })
    .catch(err => console.log(err))
})

router.get('/users/:name', (req, res) => {
  console.log(res)
  User.findOne({ where: { name: req.params.name }, include: Activity })
    .then(user => res.json(user)
    )
    .catch(err => console.log(err))
})

router.get('/users/:id', (req, res) => {
  console.log(res)
  User.findOne({ where: { id: req.params.id }, include: Activity })
    .then(user => res.json(user)
    )
    .catch(err => console.log(err))
})


module.exports = router


