const router = require('express').Router()
const activity = require('../models/activity.js')

// Get all groceries
router.get('/activities', (req, res) => {
  grocery.getAll(groceries => {
    res.json(groceries)
  })
})

// Create one grocery
router.post('activities', (req, res) => {
  grocery.createOne(req.body, id => {
    res.json({ id })
  })
})

// Update one grocery
router.put('activities/:id', (req, res) => {
  grocery.updateOne(req.body, { id: req.params.id }, () => {
    res.sendStatus(200)
  })
})

// Delete one grocery
router.delete('activities/:id', (req, res) => {
  grocery.deleteOne({ id: req.params.id }, () => {
    res.sendStatus(200)
  })
})

module.exports = router
