const express = require('express')
const router = express.Router()

router.route('').get((req, res) => {
  res.json({ message: "Get all contacts" })
})
router.route('').post((req, res) => {
  res.json({ message: "Create contacts" })
})

router.route('/:id').get((req, res) => {
  res.json({ message: `Get a contacts for ${req.params.id}` })
})

router.route('/:id').put((req, res) => {
  res.json({ message: `Update contact of ${req.params.id}` })
})

router.route('/:id').delete((req, res) => {
  res.json({ message: "Delete contacts" })
})

module.exports = router