const router = require('express').Router()
// const { Temp } = require('../models/temp.js')

// router.get('/temp', (req, res) => {
//   console.log(res)
//   Temp.findAll()
//     .then(temp => res.json(temp))
//     .catch(err => console.log(err))
// })

// router.post('/temp', (req, res) => {
//   console.log(req.body)
//   Temp.create(req.body)
//     .then(temp => {
//       console.log(temp)
//       Temp.findOne({ where: { name: temp.name } })
//         .then(fullTemp => res.json(fullTemp))
//     })
//     .catch(err => console.log(err))
// })