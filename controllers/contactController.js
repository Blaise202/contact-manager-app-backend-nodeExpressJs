const expressAsyncHandler = require("express-async-handler");

const allContacts = expressAsyncHandler(async (req, res) => {
  res.json({ message: 'all contacts are here' });
})

const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, contact } = req.body;
  if (!name || !email || !contact) {
    res.status(404)
    throw new Error("all fields are required");
  }
  res.json({
    inputs: req.body,
    message: 'create a contact'
  });
})

const updateContact = expressAsyncHandler(async (req, res) => {
  res.json({
    message: `update contact of id ${req.params.id}`
  })
})

const deleteContact = expressAsyncHandler(async (req, res) => {
  res.json({ message: `delete contact of id ${req.params.id}` })
})

const getContact = expressAsyncHandler(async (req, res) => {
  res.json({ message: `get contact of id ${req.params.id}` })
})

module.exports = {
  allContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact
}