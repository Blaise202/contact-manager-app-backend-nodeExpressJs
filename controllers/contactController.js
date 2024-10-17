const expressAsyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

const allContacts = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
})

const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400)
    throw new Error("all fields are required");
  }
  const contact = await Contact.create({
    name,
    email,
    phone
  })
  res.json(contact);
})

const updateContact = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    res.status(404)
    throw new Error("Contact not found")
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updatedContact)
})

const deleteContact = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    res.status(404)
    throw new Error("Contact not found")
  }
  await Contact.findByIdAndDelete(req.params.id)
  res.json(contact)
})

const getContact = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    res.status(404)
    throw new Error("Contact not found")
  }
  res.json(contact)
})

module.exports = {
  allContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact
}