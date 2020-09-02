const router = require('express').Router()
const { Activity, User } = require('../models')

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


module.exports = router

// // Get all groceries
// router.get('/activities', (req, res) => {
//   grocery.getAll(groceries => {
//     res.json(groceries)
//   })
// })

// // Create one grocery
// router.post('activities', (req, res) => {
//   grocery.createOne(req.body, id => {
//     res.json({ id })
//   })
// })

// // Update one grocery
// router.put('activities/:id', (req, res) => {
//   grocery.updateOne(req.body, { id: req.params.id }, () => {
//     res.sendStatus(200)
//   })
// })

// // Delete one grocery
// router.delete('activities/:id', (req, res) => {
//   grocery.deleteOne({ id: req.params.id }, () => {
//     res.sendStatus(200)
//   })
// })

// module.exports = router
