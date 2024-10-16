const express = require('express')
const router = express.Router()
const {
  allContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact
} = require('../controllers/contactController')

router.route('').get(allContacts).post(createContact)
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

module.exports = router